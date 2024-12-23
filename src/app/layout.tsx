import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { TimerProvider } from "@/contexts/timer-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pomodoro 2.0",
  description: "Next-generation Pomodoro timer with enhanced flexibility and customization",
  keywords: ["pomodoro", "productivity", "timer", "focus", "time management"],
  authors: [{ name: "Pomodoro 2.0 Team" }],
  creator: "Pomodoro 2.0 Team",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            <TimerProvider>{children}</TimerProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
