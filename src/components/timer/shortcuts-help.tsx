'use client';

import { Keyboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ShortcutItem {
  key: string;
  description: string;
}

const shortcuts: ShortcutItem[] = [
  { key: 'Space', description: 'Start/Pause timer' },
  { key: 'R', description: 'Reset timer' },
  { key: 'S', description: 'Skip current session' },
  { key: ',', description: 'Open settings' },
];

export function ShortcutsHelp() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='icon'>
          <Keyboard className='h-4 w-4' />
          <span className='sr-only'>Keyboard shortcuts</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
          <DialogDescription>Keyboard shortcuts to control the timer.</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          {shortcuts.map((shortcut) => (
            <div key={shortcut.key} className='grid grid-cols-5 items-center gap-4'>
              <kbd className='col-span-1 flex h-8 w-full items-center justify-center rounded border bg-muted px-2 text-sm font-medium'>
                {shortcut.key}
              </kbd>
              <span className='col-span-4 text-sm'>{shortcut.description}</span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
} 