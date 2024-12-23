'use client';

import { useState } from 'react';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useTimer } from '@/contexts/timer-context';

export function SettingsDialog() {
  const { state, dispatch } = useTimer();
  const [settings, setSettings] = useState({
    focusMinutes: state.focusMinutes,
    breakMinutes: state.breakMinutes,
    longBreakMinutes: state.longBreakMinutes,
    sessionsUntilLongBreak: state.sessionsUntilLongBreak,
  });

  const handleSave = () => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      settings: {
        focusMinutes: Math.max(1, Math.min(60, settings.focusMinutes)),
        breakMinutes: Math.max(1, Math.min(30, settings.breakMinutes)),
        longBreakMinutes: Math.max(1, Math.min(60, settings.longBreakMinutes)),
        sessionsUntilLongBreak: Math.max(1, Math.min(10, settings.sessionsUntilLongBreak)),
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='icon'>
          <Settings className='h-4 w-4' />
          <span className='sr-only'>Open settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Timer Settings</DialogTitle>
          <DialogDescription>Customize your Pomodoro timer durations.</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='focusMinutes' className='text-right text-sm font-medium'>
              Focus Time
            </label>
            <Input
              id='focusMinutes'
              type='number'
              className='col-span-3'
              value={settings.focusMinutes}
              onChange={(e) =>
                setSettings((s) => ({ ...s, focusMinutes: parseInt(e.target.value) || 1 }))
              }
              min={1}
              max={60}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='breakMinutes' className='text-right text-sm font-medium'>
              Break Time
            </label>
            <Input
              id='breakMinutes'
              type='number'
              className='col-span-3'
              value={settings.breakMinutes}
              onChange={(e) =>
                setSettings((s) => ({ ...s, breakMinutes: parseInt(e.target.value) || 1 }))
              }
              min={1}
              max={30}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='longBreakMinutes' className='text-right text-sm font-medium'>
              Long Break
            </label>
            <Input
              id='longBreakMinutes'
              type='number'
              className='col-span-3'
              value={settings.longBreakMinutes}
              onChange={(e) =>
                setSettings((s) => ({ ...s, longBreakMinutes: parseInt(e.target.value) || 1 }))
              }
              min={1}
              max={60}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <label htmlFor='sessionsUntilLongBreak' className='text-right text-sm font-medium'>
              Sessions
            </label>
            <Input
              id='sessionsUntilLongBreak'
              type='number'
              className='col-span-3'
              value={settings.sessionsUntilLongBreak}
              onChange={(e) =>
                setSettings((s) => ({ ...s, sessionsUntilLongBreak: parseInt(e.target.value) || 1 }))
              }
              min={1}
              max={10}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 