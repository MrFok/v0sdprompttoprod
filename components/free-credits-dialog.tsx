"use client";

import React from 'react';
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

export default function FreeCreditsDialog() {
  const { highlightFreeCreditsButton } = useWelcomeButton();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`px-4 backdrop-blur-md rounded-md transition-all duration-300 ${
            highlightFreeCreditsButton
              ? 'bg-blue-500/30 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)]'
              : 'bg-white/10 border-white/20 hover:bg-white/20'
          }`}
        >
          <span className="text-nowrap">Free Credits</span>
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
