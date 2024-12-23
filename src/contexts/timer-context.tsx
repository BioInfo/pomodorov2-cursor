'use client';

import type { ReactNode, Dispatch } from 'react';
import { createContext, useContext, useReducer } from 'react';

export type TimerMode = 'focus' | 'break' | 'long-break';

interface TimerState {
  mode: TimerMode;
  focusMinutes: number;
  breakMinutes: number;
  longBreakMinutes: number;
  sessionsUntilLongBreak: number;
  completedSessions: number;
  soundEnabled: boolean;
}

type TimerAction =
  | { type: 'COMPLETE_SESSION' }
  | { type: 'START_BREAK' }
  | { type: 'START_FOCUS' }
  | { type: 'TOGGLE_SOUND' }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<TimerState> };

const initialState: TimerState = {
  mode: 'focus',
  focusMinutes: 25,
  breakMinutes: 5,
  longBreakMinutes: 15,
  sessionsUntilLongBreak: 4,
  completedSessions: 0,
  soundEnabled: true,
};

function timerReducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case 'COMPLETE_SESSION': {
      const newCompletedSessions = state.completedSessions + 1;
      return {
        ...state,
        completedSessions: newCompletedSessions,
        mode: 'break',
      };
    }

    case 'START_BREAK': {
      return {
        ...state,
        mode: state.completedSessions % state.sessionsUntilLongBreak === 0 ? 'long-break' : 'break',
      };
    }

    case 'START_FOCUS': {
      return {
        ...state,
        mode: 'focus',
      };
    }

    case 'TOGGLE_SOUND': {
      return {
        ...state,
        soundEnabled: !state.soundEnabled,
      };
    }

    case 'UPDATE_SETTINGS': {
      return {
        ...state,
        ...action.settings,
      };
    }

    default: {
      return state;
    }
  }
}

interface TimerContextType {
  state: TimerState;
  dispatch: Dispatch<TimerAction>;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

interface TimerProviderProps {
  children: ReactNode;
}

export function TimerProvider({ children }: TimerProviderProps) {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  return <TimerContext.Provider value={{ state, dispatch }}>{children}</TimerContext.Provider>;
}

export function useTimer(): TimerContextType {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
} 