'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useSound } from '@/hooks/use-sound';
import { TIMER_SOUNDS } from '@/constants/sounds';
import { useTimer } from '@/contexts/timer-context';
import type { TimerMode } from '@/contexts/timer-context';
import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts';
import { SettingsDialog } from './settings-dialog';
import { ProgressRing } from './progress-ring';
import { ShortcutsHelp } from './shortcuts-help';

interface TimerProps {
  onComplete?: () => void;
}

export function Timer({ onComplete }: TimerProps) {
  const { state, dispatch } = useTimer();
  const [timeLeft, setTimeLeft] = useState(state.focusMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const completeSound = useSound(TIMER_SOUNDS.COMPLETE, { volume: 0.5 });
  const startSound = useSound(TIMER_SOUNDS.START, { volume: 0.3 });
  const pauseSound = useSound(TIMER_SOUNDS.PAUSE, { volume: 0.3 });

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const getDurationFromMode = useCallback(
    (mode: TimerMode): number => {
      switch (mode) {
        case 'focus':
          return state.focusMinutes;
        case 'break':
          return state.breakMinutes;
        case 'long-break':
          return state.longBreakMinutes;
        default:
          return state.focusMinutes;
      }
    },
    [state.focusMinutes, state.breakMinutes, state.longBreakMinutes]
  );

  const handleTimerComplete = useCallback(() => {
    if (state.mode === 'focus') {
      dispatch({ type: 'COMPLETE_SESSION' });
    } else {
      dispatch({ type: 'START_FOCUS' });
    }
    onComplete?.();
  }, [state.mode, dispatch, onComplete]);

  useEffect(() => {
    const duration = getDurationFromMode(state.mode);
    setTimeLeft(duration * 60);
    setIsRunning(false);
  }, [state.mode, getDurationFromMode]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsRunning(false);
            if (state.soundEnabled) {
              completeSound.play();
            }
            handleTimerComplete();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, state.soundEnabled, completeSound, handleTimerComplete]);

  const toggleTimer = useCallback(() => {
    const newIsRunning = !isRunning;
    setIsRunning(newIsRunning);
    if (state.soundEnabled) {
      if (newIsRunning) {
        startSound.play();
      } else {
        pauseSound.play();
      }
    }
  }, [isRunning, state.soundEnabled, startSound, pauseSound]);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    const duration = getDurationFromMode(state.mode);
    setTimeLeft(duration * 60);
  }, [state.mode, getDurationFromMode]);

  const skipSession = useCallback(() => {
    if (state.mode === 'focus') {
      dispatch({ type: 'START_BREAK' });
    } else {
      dispatch({ type: 'START_FOCUS' });
    }
  }, [state.mode, dispatch]);

  const toggleSettings = useCallback(() => {
    setIsSettingsOpen(!isSettingsOpen);
  }, [isSettingsOpen]);

  useKeyboardShortcuts({
    onStart: toggleTimer,
    onReset: resetTimer,
    onSkip: skipSession,
    onSettings: toggleSettings,
  });

  const totalSeconds = getDurationFromMode(state.mode) * 60;
  const progress = 1 - timeLeft / totalSeconds;

  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2 rounded-full bg-muted px-4 py-1.5'>
          <div className='h-2 w-2 rounded-full bg-primary' />
          <span className='text-sm font-medium'>
            {state.mode === 'focus'
              ? 'Focus Time'
              : state.mode === 'long-break'
              ? 'Long Break'
              : 'Short Break'}
          </span>
        </div>
        <div className='flex gap-2'>
          <SettingsDialog />
          <ShortcutsHelp />
        </div>
      </div>

      <div className='relative flex items-center justify-center'>
        <ProgressRing progress={progress} mode={state.mode} />
        <div className='absolute text-center'>
          <div className='text-7xl font-bold tracking-tighter text-foreground'>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex gap-2'>
          <Button
            size='lg'
            variant={isRunning ? 'destructive' : 'default'}
            onClick={toggleTimer}
            className='w-24'
          >
            {isRunning ? 'Pause' : 'Start'}
          </Button>
          <Button size='lg' variant='outline' onClick={resetTimer}>
            Reset
          </Button>
          <Button size='lg' variant='ghost' onClick={skipSession}>
            Skip
          </Button>
        </div>

        <div className='text-center text-sm text-muted-foreground'>
          Session {state.completedSessions + 1} of {state.sessionsUntilLongBreak}
        </div>
      </div>
    </div>
  );
} 