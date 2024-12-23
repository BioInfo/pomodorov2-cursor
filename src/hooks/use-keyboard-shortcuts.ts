'use client';

import { useEffect } from 'react';

interface ShortcutHandlers {
  onStart?: () => void;
  onReset?: () => void;
  onSkip?: () => void;
  onSettings?: () => void;
}

export function useKeyboardShortcuts({
  onStart,
  onReset,
  onSkip,
  onSettings,
}: ShortcutHandlers) {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      // Ignore key events when user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case ' ':
        case 'space':
          event.preventDefault();
          onStart?.();
          break;
        case 'r':
          event.preventDefault();
          onReset?.();
          break;
        case 's':
          event.preventDefault();
          onSkip?.();
          break;
        case ',':
        case '<':
          event.preventDefault();
          onSettings?.();
          break;
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onStart, onReset, onSkip, onSettings]);
} 