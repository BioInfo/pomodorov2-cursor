import { ThemeToggleContainer } from '@/components/theme-toggle-container';
import { TimerContainer } from '@/components/timer/timer-container';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-background to-muted/20 pb-8 pt-6 md:py-8'>
      <div className='container flex flex-col items-center gap-4 px-4 md:px-6'>
        {/* Header */}
        <header className='flex w-full max-w-4xl items-center justify-between rounded-lg bg-card px-4 py-2 shadow-sm'>
          <h1 className='bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-xl font-bold text-transparent md:text-2xl'>
            Pomodoro 2.0
          </h1>
          <ThemeToggleContainer />
        </header>

        {/* Main Timer Section */}
        <main className='flex w-full flex-col items-center gap-8 py-8 md:py-12'>
          <div className='relative flex place-items-center'>
            <TimerContainer />
          </div>

          {/* Features Grid */}
          <section className='grid w-full max-w-5xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-muted/50'>
              <div className='mb-2 flex items-center gap-2'>
                <svg
                  className='h-5 w-5 text-primary'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M12 20v-8' />
                  <path d='M18 20V4' />
                  <path d='M6 20v-4' />
                </svg>
                <h2 className='text-lg font-semibold'>Focus Time</h2>
              </div>
              <p className='text-sm text-muted-foreground'>
                Stay focused and productive with customizable timer intervals.
              </p>
            </div>

            <div className='group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-muted/50'>
              <div className='mb-2 flex items-center gap-2'>
                <svg
                  className='h-5 w-5 text-primary'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M6 18h12' />
                  <path d='M6 6h12' />
                  <path d='M6 12h12' />
                </svg>
                <h2 className='text-lg font-semibold'>Break Time</h2>
              </div>
              <p className='text-sm text-muted-foreground'>
                Take regular breaks to maintain your energy and creativity.
              </p>
            </div>

            <div className='group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-muted/50'>
              <div className='mb-2 flex items-center gap-2'>
                <svg
                  className='h-5 w-5 text-primary'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M3 3v18h18' />
                  <path d='m19 9-5 5-4-4-3 3' />
                </svg>
                <h2 className='text-lg font-semibold'>Statistics</h2>
              </div>
              <p className='text-sm text-muted-foreground'>
                Track your progress and improve your productivity habits.
              </p>
            </div>

            <div className='group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-muted/50'>
              <div className='mb-2 flex items-center gap-2'>
                <svg
                  className='h-5 w-5 text-primary'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
                  <circle cx='12' cy='12' r='3' />
                </svg>
                <h2 className='text-lg font-semibold'>Settings</h2>
              </div>
              <p className='text-sm text-muted-foreground'>
                Customize your experience with personalized preferences.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
