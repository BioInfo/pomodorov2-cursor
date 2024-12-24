import { Timer } from '@/components/features/timer/Timer'
import { Clock, BarChart2, Settings } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-2">
            <Clock className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Pomodoro 2.0</h1>
          </div>
          <div className="flex space-x-4">
            <BarChart2 className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer" />
            <Settings className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer" />
          </div>
        </header>

        {/* Main Timer */}
        <div className="mb-12">
          <Timer defaultTime={25} />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Focus Sessions
            </h3>
            <p className="text-sm text-muted-foreground">
              Customize your work intervals for maximum productivity
            </p>
          </Card>

          <Card className="p-6 hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-primary" />
              Statistics
            </h3>
            <p className="text-sm text-muted-foreground">
              Track your progress and analyze your productivity patterns
            </p>
          </Card>

          <Card className="p-6 hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Preferences
            </h3>
            <p className="text-sm text-muted-foreground">
              Customize notifications, themes, and timer settings
            </p>
          </Card>
        </div>
      </div>
    </main>
  )
}
