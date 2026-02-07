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

export default function TipsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="px-4 backdrop-blur-md rounded-md transition-all duration-300 bg-white/10 border-white/20 hover:bg-white/20"
        >
          <span className="text-nowrap">Resources</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white/6 backdrop-blur-2xl border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            Tips & Resources
          </DialogTitle>
          <DialogDescription className="text-white/80 text-base">
            Here are some additional resources for you to explore!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 backdrop-blur-md bg-white/10">
              1
            </div>
            <p className="text-white/80">
              <a
                href="https://vercel.com/blog/how-to-prompt-v0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                How to prompt v0
              </a>
              {" "}&mdash; Vercel&apos;s guide on prompting v0 effectively
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 backdrop-blur-md bg-white/10">
              2
            </div>
            <p className="text-white/80">
              <a
                href="https://vercel.com/blog/maximizing-outputs-with-v0-from-ui-generation-to-code-creation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Maximizing outputs with v0
              </a>
              {" "}&mdash; From UI generation to code creation
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 backdrop-blur-md bg-white/10">
              3
            </div>
            <p className="text-white/80">
              <a
                href="https://go.cap.so/ricky-fok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Cap — Free recording software
              </a>
              {" "}&mdash; Make cool recordings of your project
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 backdrop-blur-md bg-white/10">
              4
            </div>
            <p className="text-white/80">
              <a
                href="https://vercel.com/blog/introducing-the-new-v0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                What&apos;s new with v0
              </a>
              {" "}&mdash; Vercel&apos;s latest product update
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
