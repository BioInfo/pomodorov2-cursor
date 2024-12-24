'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings2 
} from 'lucide-react'

interface TimerProps {
  defaultTime?: number // in minutes
}

export function Timer({ defaultTime = 25 }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(defaultTime * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
        setProgress((timeLeft - 1) / (defaultTime * 60) * 100)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning, timeLeft, defaultTime])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const toggleTimer = () => setIsRunning(!isRunning)
  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(defaultTime * 60)
    setProgress(100)
  }

  return (
    <Card className="w-full max-w-md mx-auto p-8 bg-card/50 backdrop-blur-sm border-2">
      <div className="flex flex-col items-center space-y-8">
        {/* Timer Display */}
        <div className="relative w-48 h-48 flex items-center justify-center rounded-full border-4 border-primary/20">
          <div className="text-5xl font-mono font-bold tracking-tight">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
        </div>

        {/* Progress Bar */}
        <Progress value={progress} className="w-full h-2" />

        {/* Controls */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTimer}
            className="w-12 h-12 rounded-full"
          >
            {isRunning ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={resetTimer}
            className="w-12 h-12 rounded-full"
          >
            <RotateCcw className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full"
          >
            <Settings2 className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </Card>
  )
} 