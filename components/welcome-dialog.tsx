"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useWelcomeButton } from '@/components/welcome-button-provider';
import { ShineBorder } from "@/components/ui/shine-border";

export default function WelcomeDialog() {
  const { highlightWelcomeButton } = useWelcomeButton();

  return (
    <Button
      asChild
      variant="outline"
      className={`px-4 backdrop-blur-md rounded-md transition-all duration-300 relative overflow-hidden ${
        highlightWelcomeButton
          ? 'bg-blue-500/30 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.8)]'
          : 'bg-white/10 border-white/20 hover:bg-white/20'
      }`}
    >
      <Link href="https://v0.app" target="_blank">
        {highlightWelcomeButton && (
          <ShineBorder
            duration={10}
            borderWidth={2}
            shineColor={['#93c5fd', '#3b82f6', '#60a5fa']}
          />
        )}
        <span className="text-nowrap flex items-center gap-2 relative z-10">
          Go to v0
        </span>
      </Link>
    </Button>
  );
}
