'use client';

import { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioDemoProps {
  title: string;
  description?: string;
  audioUrl?: string;
}

export default function AudioDemo({ title, description, audioUrl }: AudioDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder for audio player
  // When audio files are ready, replace with actual audio element
  const handlePlay = () => {
    if (audioUrl) {
      // Audio playback logic will go here
      setIsPlaying(!isPlaying);
    } else {
      // Placeholder behavior
      setIsPlaying(!isPlaying);
      setTimeout(() => setIsPlaying(false), 3000);
    }
  };

  return (
    <div className="bg-neutral-800/80 rounded-xl p-6 border border-neutral-700">
      <div className="flex items-center gap-3 mb-4">
        <Volume2 className="w-5 h-5 text-primary-400" />
        <h3 className="text-lg font-bold text-white font-heading">{title}</h3>
      </div>
      {description && (
        <p className="text-neutral-400 text-sm mb-4">{description}</p>
      )}
      <div className="bg-neutral-900 rounded-lg p-6 flex items-center justify-center gap-4">
        {audioUrl ? (
          <>
            <button
              onClick={handlePlay}
              className="w-12 h-12 bg-primary-500 hover:bg-primary-400 rounded-full flex items-center justify-center transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-1" />
              )}
            </button>
            <div className="flex-1 h-2 bg-neutral-700 rounded-full">
              <div className="h-full bg-primary-500 rounded-full" style={{ width: isPlaying ? '50%' : '0%' }} />
            </div>
            <span className="text-neutral-400 text-sm">0:30 / 0:45</span>
          </>
        ) : (
          <div className="text-center">
            <p className="text-neutral-500 mb-2">Audio demo coming soon</p>
            <p className="text-neutral-600 text-sm">Book a free consultation to hear it live</p>
          </div>
        )}
      </div>
    </div>
  );
}

