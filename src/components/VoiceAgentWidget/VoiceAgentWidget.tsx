'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Phone, PhoneOff, Volume2, VolumeX, X } from 'lucide-react';
import Vapi from '@vapi-ai/web';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export type VoiceAgentMode = 'inline' | 'panel' | 'floating';

export interface VoiceAgentWidgetProps {
  mode?: VoiceAgentMode;
  defaultIndustry?: string;
  position?: { bottom?: number; right?: number };
  className?: string;
}

interface TranscriptLine {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: number;
}

export default function VoiceAgentWidget({
  mode = 'floating',
  defaultIndustry = 'home-services',
  position,
  className = '',
}: VoiceAgentWidgetProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [status, setStatus] = useState<'idle' | 'connecting' | 'live' | 'ended' | 'error'>('idle');
  const [isMuted, setIsMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [transcriptLines, setTranscriptLines] = useState<TranscriptLine[]>([]);
  const [micPermission, setMicPermission] = useState<'unknown' | 'granted' | 'denied'>('unknown');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [vapiInstance, setVapiInstance] = useState<any>(null);
  const transcriptEndRef = useRef<HTMLDivElement>(null);
  const transcriptIdCounter = useRef(0);

  const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || '2f996291-e75b-44ad-b48b-1854d1ff955e';
  const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || '4531b55b-3258-4bda-9a1e-98bad3048265';

  // Get current path for variableValues
  const getCurrentPath = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  };

  // Check mic permission
  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.permissions) {
      navigator.permissions.query({ name: 'microphone' as PermissionName }).then((result) => {
        setMicPermission(result.state === 'granted' ? 'granted' : result.state === 'denied' ? 'denied' : 'unknown');
        result.onchange = () => {
          setMicPermission(result.state === 'granted' ? 'granted' : result.state === 'denied' ? 'denied' : 'unknown');
        };
      }).catch(() => {
        // Fallback if permissions API not supported
        setMicPermission('unknown');
      });
    }
  }, []);

  // Initialize Vapi
  useEffect(() => {
    if (!isInitialized && typeof window !== 'undefined') {
      try {
        const vapi = new Vapi(publicKey);
        
        // Set up event listeners
        vapi.on('call-start', () => {
          setStatus('live');
          setCallDuration(0);
          setTranscriptLines([]);
          setErrorMessage(null);
        });
        
        vapi.on('call-end', () => {
          setStatus('ended');
        });
        
        vapi.on('message', (message: any) => {
          if (message.type === 'transcript' && message.transcript) {
            const newLine: TranscriptLine = {
              id: `transcript-${transcriptIdCounter.current++}`,
              role: message.role || 'assistant',
              text: message.transcript,
              timestamp: Date.now(),
            };
            setTranscriptLines((prev) => [...prev, newLine]);
          }
        });
        
        vapi.on('error', (error: any) => {
          // Ignore Krisp-related errors
          if (error?.message?.includes('Krisp') || error?.name === 'KrispInitError') {
            return;
          }
          setStatus('error');
          setErrorMessage(error?.message || 'An error occurred');
        });
        
        vapi.on('call-start-failed', (event: any) => {
          setStatus('error');
          setErrorMessage('Failed to start call. Please check your microphone permissions.');
        });
        
        setVapiInstance(vapi);
        setIsInitialized(true);
      } catch (error: any) {
        console.error('Failed to initialize Vapi:', error);
        setIsInitialized(true);
        setStatus('error');
        setErrorMessage('Failed to initialize voice agent');
      }
    }
  }, [isInitialized, publicKey]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (vapiInstance) {
        try {
          vapiInstance.stop();
          vapiInstance.removeAllListeners?.();
        } catch (error) {
          console.error('Error cleaning up Vapi:', error);
        }
      }
    };
  }, [vapiInstance]);

  // Call duration timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (status === 'live') {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status]);

  // Auto-scroll transcript
  useEffect(() => {
    if (transcriptEndRef.current) {
      transcriptEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [transcriptLines]);

  const startCall = useCallback(async () => {
    if (!isInitialized || !vapiInstance) {
      return;
    }

    // Check mic permission
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop()); // Stop immediately, just checking permission
      setMicPermission('granted');
    } catch (error) {
      setMicPermission('denied');
      setStatus('error');
      setErrorMessage('Microphone permission denied. Please enable microphone access in your browser settings.');
      return;
    }

    setStatus('connecting');
    setErrorMessage(null);

    try {
      const currentPath = getCurrentPath();
      const assistantOverrides = {
        recordingEnabled: false,
        variableValues: {
          source: 'website',
          page: currentPath,
          verticalIntent: defaultIndustry,
        },
      };

      await vapiInstance.start(assistantId, assistantOverrides);
    } catch (error: any) {
      console.error('Failed to start call:', error);
      setStatus('error');
      setErrorMessage(error?.message || 'Failed to start call');
    }
  }, [isInitialized, vapiInstance, assistantId, defaultIndustry]);

  const endCall = useCallback(() => {
    if (vapiInstance) {
      try {
        vapiInstance.stop();
      } catch (error) {
        console.error('Error stopping call:', error);
      }
    }
    setStatus('idle');
  }, [vapiInstance]);

  const toggleMute = useCallback(() => {
    if (vapiInstance && status === 'live') {
      try {
        const newMutedState = !isMuted;
        vapiInstance.setMuted(newMutedState);
        setIsMuted(newMutedState);
      } catch (error) {
        console.error('Error toggling mute:', error);
      }
    }
  }, [vapiInstance, status, isMuted]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Floating mode - minimal button
  if (mode === 'floating' && status === 'idle') {
    return (
      <div
        className={`fixed bottom-4 right-4 z-[60] ${className}`}
        style={position}
      >
        <Button
          onClick={startCall}
          size="lg"
          className="rounded-full p-4 h-auto bg-primary-500 hover:bg-primary-400 shadow-lg hover:shadow-xl transition-all"
          aria-label="Talk to Auralix"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  // Panel mode - full widget
  if (mode === 'panel' || mode === 'floating') {
    return (
      <div
        className={`fixed bottom-4 right-4 z-[60] w-80 ${className}`}
        style={position}
      >
        <Card className="bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${status === 'live' ? 'bg-green-500 animate-pulse' : status === 'connecting' ? 'bg-yellow-500 animate-pulse' : 'bg-gray-500'}`} />
                Auralix Voice Agent
              </CardTitle>
              {status === 'idle' && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {/* Close handler if needed */}}
                  className="h-6 w-6"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
            {status === 'live' && (
              <p className="text-sm text-neutral-400 font-mono">{formatDuration(callDuration)}</p>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {errorMessage && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-400">
                {errorMessage}
                {micPermission === 'denied' && (
                  <div className="mt-2">
                    <Link href="/contact" className="underline">
                      Book a demo instead
                    </Link>
                  </div>
                )}
              </div>
            )}

            {status === 'idle' && (
              <div className="space-y-3">
                <Button
                  onClick={startCall}
                  className="w-full bg-primary-500 hover:bg-primary-400"
                  disabled={!isInitialized}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Start Call
                </Button>
                <p className="text-xs text-neutral-400 text-center">
                  This uses your microphone in-browser. By clicking Start, you consent to speaking with an AI assistant.{' '}
                  <Link href="/trust/privacy" className="underline hover:text-primary-400">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            )}

            {status === 'connecting' && (
              <div className="flex items-center justify-center gap-2 py-4">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="text-sm text-neutral-300 ml-2">Connecting...</span>
              </div>
            )}

            {status === 'live' && (
              <div className="space-y-3">
                {transcriptLines.length > 0 && (
                  <div className="bg-neutral-800 rounded-lg p-3 max-h-48 overflow-y-auto text-sm space-y-2">
                    {transcriptLines.map((line) => (
                      <div
                        key={line.id}
                        className={`${line.role === 'user' ? 'text-primary-300' : 'text-neutral-300'}`}
                      >
                        <span className="font-semibold">{line.role === 'user' ? 'You: ' : 'Agent: '}</span>
                        {line.text}
                      </div>
                    ))}
                    <div ref={transcriptEndRef} />
                  </div>
                )}
                <div className="flex gap-2">
                  <Button
                    onClick={toggleMute}
                    variant={isMuted ? 'destructive' : 'secondary'}
                    size="sm"
                    className="flex-1"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 mr-2" /> : <Volume2 className="w-4 h-4 mr-2" />}
                    {isMuted ? 'Unmute' : 'Mute'}
                  </Button>
                  <Button
                    onClick={endCall}
                    variant="destructive"
                    size="sm"
                    className="flex-1"
                  >
                    <PhoneOff className="w-4 h-4 mr-2" />
                    End
                  </Button>
                </div>
              </div>
            )}

            {status === 'ended' && (
              <div className="space-y-3">
                <p className="text-sm text-neutral-400 text-center">Call ended</p>
                <Button
                  onClick={startCall}
                  className="w-full bg-primary-500 hover:bg-primary-400"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Start New Call
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // Inline mode - embedded in page
  return (
    <div className={`w-full ${className}`}>
      <Card className="bg-neutral-900 border-neutral-700">
        <CardHeader>
          <CardTitle>Talk to Auralix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {errorMessage && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-400">
              {errorMessage}
            </div>
          )}

          {status === 'idle' && (
            <Button
              onClick={startCall}
              className="w-full bg-primary-500 hover:bg-primary-400"
              disabled={!isInitialized}
            >
              <Phone className="w-4 h-4 mr-2" />
              Start Call
            </Button>
          )}

          {status === 'connecting' && (
            <div className="flex items-center justify-center gap-2 py-4">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" />
              <span className="text-sm text-neutral-300">Connecting...</span>
            </div>
          )}

          {status === 'live' && (
            <div className="space-y-3">
              {transcriptLines.length > 0 && (
                <div className="bg-neutral-800 rounded-lg p-3 max-h-64 overflow-y-auto text-sm space-y-2">
                  {transcriptLines.map((line) => (
                    <div
                      key={line.id}
                      className={`${line.role === 'user' ? 'text-primary-300' : 'text-neutral-300'}`}
                    >
                      <span className="font-semibold">{line.role === 'user' ? 'You: ' : 'Agent: '}</span>
                      {line.text}
                    </div>
                  ))}
                  <div ref={transcriptEndRef} />
                </div>
              )}
              <div className="flex gap-2">
                <Button
                  onClick={toggleMute}
                  variant={isMuted ? 'destructive' : 'secondary'}
                  size="sm"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                <Button
                  onClick={endCall}
                  variant="destructive"
                  size="sm"
                  className="flex-1"
                >
                  <PhoneOff className="w-4 h-4 mr-2" />
                  End Call
                </Button>
              </div>
            </div>
          )}

          <p className="text-xs text-neutral-400 text-center">
            This uses your microphone in-browser. By clicking Start, you consent to speaking with an AI assistant.{' '}
            <Link href="/trust/privacy" className="underline hover:text-primary-400">
              Privacy Policy
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
