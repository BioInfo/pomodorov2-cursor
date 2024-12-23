export const TIMER_SOUNDS = {
  COMPLETE: '/sounds/complete.mp3',
  START: '/sounds/start.mp3',
  PAUSE: '/sounds/pause.mp3',
} as const;

export type TimerSoundType = keyof typeof TIMER_SOUNDS; 