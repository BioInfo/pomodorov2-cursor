import { useCallback, useEffect, useRef } from 'react';

interface SoundOptions {
  volume?: number;
  loop?: boolean;
}

export function useSound(soundUrl: string, options: SoundOptions = {}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(soundUrl);
    audioRef.current.volume = options.volume ?? 1;
    audioRef.current.loop = options.loop ?? false;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundUrl, options.volume, options.loop]);

  const play = useCallback(() => {
    if (audioRef.current) {
      // Reset the audio to start if it's already playing
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error('Error playing sound:', error);
      });
    }
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  return { play, stop };
} 