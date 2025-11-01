'use client';

import { useState, useEffect, useCallback } from 'react';
import { Phone, PhoneOff, Volume2, VolumeX, Minimize2, X } from 'lucide-react';
import Vapi from '@vapi-ai/web';

export default function VapiVoiceAssistant() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'in-call' | 'ended'>('idle');
  const [isMuted, setIsMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showWidget, setShowWidget] = useState(true);
  const [vapiInstance, setVapiInstance] = useState<any>(null);

  const publicKey = '2f996291-e75b-44ad-b48b-1854d1ff955e';
  const assistantId = '4531b55b-3258-4bda-9a1e-98bad3048265';

  useEffect(() => {
    if (!isInitialized && typeof window !== 'undefined') {
      try {
        // Initialize Vapi with NPM package
        const vapi = new Vapi({
          apiKey: publicKey,
          assistantId: assistantId,
        });
        setVapiInstance(vapi);
        setIsInitialized(true);
        (window as any).vapiInstance = vapi;
      } catch (error) {
        console.error('Failed to initialize Vapi:', error);
        setIsInitialized(true); // Still mark as initialized to avoid retrying
      }
    }
  }, [isInitialized, publicKey, assistantId]);

  const startCall = useCallback(async () => {
    if (!isInitialized || !vapiInstance) {
      console.error('Vapi not initialized');
      return;
    }

    setCallStatus('connecting');
    setIsMinimized(false);

    try {
      // Start call using Vapi instance
      console.log('Starting Vapi call');
      await vapiInstance.start();
      setCallStatus('in-call');
      setCallDuration(0);
    } catch (error) {
      console.error('Failed to start call:', error);
      setCallStatus('idle');
    }
  }, [isInitialized, vapiInstance]);

  // Expose startCall globally so other components can trigger it
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Exposing triggerVapiCall globally');
      (window as any).triggerVapiCall = startCall;
      
      // Listen for custom event to trigger call
      const handleTriggerCall = () => {
        console.log('Received trigger-vapi-call event');
        startCall();
      };
      window.addEventListener('trigger-vapi-call', handleTriggerCall);
      
      return () => {
        delete (window as any).triggerVapiCall;
        window.removeEventListener('trigger-vapi-call', handleTriggerCall);
      };
    }
  }, [startCall]); // Re-expose when startCall changes

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (callStatus === 'in-call') {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [callStatus]);

  const endCall = () => {
    setCallStatus('idle');
    setIsMinimized(false);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!showWidget) return null;

  // Minimized view during call
  if (isMinimized && callStatus === 'in-call') {
    return (
      <div className="fixed bottom-4 sm:bottom-6 right-20 sm:right-24 z-[60]">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
        </button>
      </div>
    );
  }

  // Full widget
  if (callStatus === 'idle' || callStatus === 'ended') {
    return (
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[60]">
        <button
          onClick={startCall}
          className="group bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Talk to Auralix AI"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
        </button>
        <div className="absolute -top-2 -right-2 bg-cyan-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-bounce">
          Talk
        </div>
      </div>
    );
  }

  // In-call interface
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[60] w-80 bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl shadow-2xl border border-cyan-500/30 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 px-4 py-3 flex items-center justify-between border-b border-cyan-500/30">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-cyan-500 rounded-full p-2">
              <Phone className="w-4 h-4 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Auralix AI</h3>
            <p className="text-cyan-300 text-xs">{callStatus === 'connecting' ? 'Connecting...' : 'In Call'}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="text-gray-300 hover:text-white transition-colors p-1"
            aria-label="Minimize"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowWidget(false)}
            className="text-gray-300 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Call Duration */}
      {callStatus === 'in-call' && (
        <div className="px-4 py-3 bg-black/30">
          <p className="text-center text-cyan-400 font-mono text-lg">
            {formatDuration(callDuration)}
          </p>
        </div>
      )}

      {/* Status Message */}
      <div className="px-4 py-3">
        {callStatus === 'connecting' && (
          <div className="flex items-center justify-center gap-2 text-cyan-300">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <span className="text-sm ml-2">Connecting to AI...</span>
          </div>
        )}
        {callStatus === 'in-call' && (
          <p className="text-center text-gray-300 text-sm">
            Speaking with Auralix AI representative
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="px-4 py-4 bg-black/30 flex justify-center gap-4">
        {callStatus === 'in-call' && (
          <button
            onClick={toggleMute}
            className={`p-3 rounded-full transition-all ${
              isMuted
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        )}
        <button
          onClick={endCall}
          className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all hover:scale-110"
          aria-label="End Call"
        >
          <PhoneOff className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

