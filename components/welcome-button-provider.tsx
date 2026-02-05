"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface WelcomeButtonContextType {
  highlightWelcomeButton: boolean;
  highlightFreeCreditsButton: boolean;
}

const WelcomeButtonContext = createContext<WelcomeButtonContextType>({
  highlightWelcomeButton: false,
  highlightFreeCreditsButton: false,
});

export function useWelcomeButton() {
  return useContext(WelcomeButtonContext);
}

interface WelcomeButtonProviderProps {
  children: ReactNode;
}

function WelcomeButtonProviderContent({ children }: WelcomeButtonProviderProps) {
  const searchParams = useSearchParams();
  const [highlightWelcomeButton, setHighlightWelcomeButton] = useState(false);
  const [highlightFreeCreditsButton, setHighlightFreeCreditsButton] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const highlightOverride = searchParams.get('highlight');
    const eventState = searchParams.get('event');
    const demoTime = searchParams.get('demo');
    
    // Parse demo time if provided (format: "HH:MM" or "H:MM")
    let isEventDay = currentTime.getFullYear() === 2026 &&
        currentTime.getMonth() === 1 &&
        currentTime.getDate() === 7;
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    const isEventCompleted = eventState === 'completed';
    
    if (demoTime) {
      const timeMatch = demoTime.match(/^(\d{1,2}):(\d{2})$/);
      if (timeMatch) {
        isEventDay = true; // Force event day for demo
        currentHour = parseInt(timeMatch[1], 10);
        currentMinute = parseInt(timeMatch[2], 10);
      }
    }
    
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    
    // Schedule times in minutes from midnight
    const scheduleTimes = [
      { start: 10 * 60 + 15, end: 10 * 60 + 25, title: "Kickoff" },
      { start: 10 * 60 + 25, end: 10 * 60 + 40, title: "Track selection & Teams" },
      { start: 10 * 60 + 40, end: 12 * 60, title: "Build session" },
      { start: 12 * 60, end: 12 * 60 + 30, title: "Ship & submit" },
      { start: 12 * 60 + 30, end: 12 * 60 + 45, title: "Demos (15 min)" }
    ];
    
    const getCurrentScheduleIndex = () => {
      if (!isEventDay) return -1;
      for (let i = 0; i < scheduleTimes.length; i++) {
        if (currentTimeInMinutes >= scheduleTimes[i].start && currentTimeInMinutes < scheduleTimes[i].end) {
          return i;
        }
      }
      return -1;
    };
    
    const currentScheduleIndex = getCurrentScheduleIndex();
    
    let shouldHighlightWelcome = false;
    let shouldHighlightFreeCredits = false;
    
    if (!isEventCompleted) {
      if (highlightOverride === 'welcome') {
        shouldHighlightWelcome = true;
      } else if (highlightOverride === 'credits') {
        shouldHighlightFreeCredits = true;
      } else if (highlightOverride !== 'off') {
        // Use real time logic
        if (isEventDay) {
          if (currentScheduleIndex === 0) {
            // Kickoff (Welcome window: 10:15-10:25)
            shouldHighlightWelcome = true;
          } else if (currentScheduleIndex === 1 || currentScheduleIndex === 2) {
            // Track selection & Teams (10:25-10:40) OR Build session (10:40-12:00)
            shouldHighlightFreeCredits = true;
          }
        }
      }
    }
    
    setHighlightWelcomeButton(shouldHighlightWelcome);
    setHighlightFreeCreditsButton(shouldHighlightFreeCredits);
  }, [currentTime, searchParams]);

  return (
    <WelcomeButtonContext.Provider value={{ highlightWelcomeButton, highlightFreeCreditsButton }}>
      {children}
    </WelcomeButtonContext.Provider>
  );
}

export default function WelcomeButtonProvider({ children }: WelcomeButtonProviderProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WelcomeButtonProviderContent>{children}</WelcomeButtonProviderContent>
    </Suspense>
  );
}
