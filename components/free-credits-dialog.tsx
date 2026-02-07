"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useWelcomeButton } from '@/components/welcome-button-provider';
import { ShineBorder } from "@/components/ui/shine-border";

export default function FreeCreditsDialog() {
  const { highlightFreeCreditsButton } = useWelcomeButton();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Demo mode: ?demo=10:40 simulates being on event day at that time
  const demoTime = searchParams.get('demo');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);
  
  // Parse demo time if provided (format: "HH:MM" or "H:MM")
  let isEventDay = currentTime.getFullYear() === 2026 &&
      currentTime.getMonth() === 1 &&
      currentTime.getDate() === 7;
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  
  if (demoTime) {
    const timeMatch = demoTime.match(/^(\d{1,2}):(\d{2})$/);
    if (timeMatch) {
      isEventDay = true; // Force event day for demo
      currentHour = parseInt(timeMatch[1], 10);
      currentMinute = parseInt(timeMatch[2], 10);
    }
  }
  
  const currentTimeInMinutes = currentHour * 60 + currentMinute;
  const eventStartTime = 10 * 60 + 30; // 10:30 AM in minutes
  
  const isPastEventDay = currentTime > new Date(2026, 1, 8); // After Feb 7, 2026
  const shouldShowButton = !isPastEventDay && isEventDay && currentTimeInMinutes >= eventStartTime;
  
  useEffect(() => {
    setIsVisible(shouldShowButton);
  }, [shouldShowButton]);

  // Don't render anything if button shouldn't be visible yet
  if (!isVisible) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`px-4 backdrop-blur-md rounded-md transition-all duration-300 animate-in slide-in-from-right-2 relative overflow-hidden ${
            highlightFreeCreditsButton
              ? 'bg-blue-500/30 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.8)]'
              : 'bg-white/10 border-white/20 hover:bg-white/20'
          }`}
        >
          {highlightFreeCreditsButton && (
            <ShineBorder
              duration={10}
              borderWidth={2}
              shineColor={['#93c5fd', '#3b82f6', '#60a5fa']}
            />
          )}
          <span className="text-nowrap relative z-10">Free Credits</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white/6 backdrop-blur-2xl border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            Get Free Credits
          </DialogTitle>
          <DialogDescription className="text-white/80 text-base">
            Follow these steps to redeem your free v0 credits:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 backdrop-blur-md bg-white/10">
              1
            </div>
            <p className="text-white/80">
              Go to the{" "}
              <a 
                href="https://v0.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                v0.app
              </a>
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 backdrop-blur-md bg-white/10">
              2
            </div>
            <p className="text-white/80">
              Go to <strong>Profile → Billing → Redeem Usage Code</strong>
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 backdrop-blur-md bg-white/10">
              3
            </div>
            <p className="text-white/80">
              Enter the code: <strong>V0PROMPTTOPRODUCTION2026</strong>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
