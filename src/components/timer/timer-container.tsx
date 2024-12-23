"use client";

import { Timer } from "./timer";

export function TimerContainer() {
  return (
    <Timer
      onComplete={() => {
        console.log("Timer completed!");
      }}
    />
  );
} 