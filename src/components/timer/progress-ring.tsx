'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';

interface ProgressRingProps {
  progress: number; // 0 to 1
  size?: number;
  strokeWidth?: number;
  className?: string;
  mode?: 'focus' | 'break' | 'long-break';
}

export function ProgressRing({
  progress,
  size = 320,
  strokeWidth = 12,
  className,
  mode = 'focus',
}: ProgressRingProps) {
  const progressRef = useRef<SVGCircleElement>(null);

  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.strokeDashoffset = offset.toString();
    }
  }, [offset]);

  const modeColors = {
    focus: 'stroke-primary',
    break: 'stroke-green-500',
    'long-break': 'stroke-blue-500',
  };

  return (
    <div className={cn('relative', className)} style={{ width: size, height: size }}>
      <svg className='absolute -rotate-90 transform' width={size} height={size}>
        {/* Background ring */}
        <circle
          className='stroke-muted transition-colors'
          fill='none'
          strokeWidth={strokeWidth}
          r={radius}
          cx={center}
          cy={center}
        />
        {/* Progress ring */}
        <circle
          ref={progressRef}
          className={cn('transition-all', modeColors[mode])}
          fill='none'
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          r={radius}
          cx={center}
          cy={center}
        />
      </svg>
    </div>
  );
} 