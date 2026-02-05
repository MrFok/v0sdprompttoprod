"use client";

import React, { useState, useEffect } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Play } from 'lucide-react';
import { useWelcomeButton } from '@/components/welcome-button-provider';
import { ShineBorder } from "@/components/ui/shine-border";

export default function WelcomeDialog() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const { highlightWelcomeButton } = useWelcomeButton();

  // Preload video player SDK when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoReady(true);
    }, 1000); // Small delay to ensure page load priority

    return () => clearTimeout(timer);
  }, []);

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`px-4 backdrop-blur-md rounded-md transition-all duration-300 relative overflow-hidden ${
            highlightWelcomeButton
              ? 'bg-blue-500/30 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.8)]'
              : 'bg-white/10 border-white/20 hover:bg-white/20'
          }`}
        >
          {highlightWelcomeButton && (
            <ShineBorder
              duration={10}
              borderWidth={2}
              shineColor={['#93c5fd', '#3b82f6', '#60a5fa']}
            />
          )}
          <span className="text-nowrap flex items-center gap-2 relative z-10">
            Get Started
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white/6 backdrop-blur-2xl border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-dark">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Welcome to Prompt to Production
          </DialogTitle>
          <DialogDescription className="text-white/80 text-base">
            Welcome to the event! We are thrilled to have you here to explore the next evolution of v0.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Video Section - Now at the top */}
          <section>
            <div className="relative">
              {!showVideo ? (
                <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                  <Button
                    onClick={handleWatchVideo}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                    disabled={!isVideoReady}
                  >
                    <Play className="w-5 h-5" />
                    {isVideoReady ? 'Watch Video' : 'Loading...'}
                  </Button>
                </div>
              ) : (
                <div className="aspect-video rounded-lg overflow-hidden bg-white/5 border border-white/10">
                  <Vimeo
                    video={1161676670}
                    autoplay
                    responsive
                    showPortrait={false}
                    showTitle={false}
                    showByline={false}
                    dnt={true}
                    color="ffffff"
                  />
                </div>
              )}
            </div>
          </section>

          {/* What's New Section */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-3">
              What's New in v0?
            </h3>
            <p className="text-white/80 mb-4">
              The Vercel team has launched three massive updates to help you ship faster and more reliably:
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">GitHub Repository Import:</strong> You can now pull your actual codebase into v0.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">VM-Based Rendering:</strong> A new, more powerful virtual machine-based solution has replaced the old renderer for better performance.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">Scale for Large Repos:</strong> The AI agent has been significantly upgraded to handle and navigate very large, complex repositories.
                </div>
              </li>
            </ul>
          </section>

          {/* Vision Section */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-3">
              The Vision: Shipping for Everyone
            </h3>
            <p className="text-white/80">
              The goal of these updates is to enable anyone on a team—whether you are in Engineering, Design, Marketing, or Product—to contribute directly to production. Use v0 to make changes, iterate on the live codebase, and open a Pull Request (PR) to work with your dev team on the final merge.
            </p>
          </section>

          {/* Global Challenge Section */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-3">
              The Global Challenge & Prizes
            </h3>
            <p className="text-white/80 mb-4">
              We want to see what you can build! Submit your apps and agents to the Community Showcase Page to compete for global recognition.
            </p>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">Who can build?</strong> We have tracks for Product, Design, Data, Engineering, and Go-to-Market teams.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">Voting Window:</strong> January 31st – February 8th.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">The Stakes:</strong> Global winners will receive v0 credits, cash prizes, and a feature on Vercel's social channels.
                </div>
              </li>
            </ul>
          </section>

          {/* Call to Action - Simplified without buttons */}
          <section className="pt-4 border-t border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">
              Ready to get started?
            </h3>
            <p className="text-white/80">
              Grab your laptop, import a repo, and let's see what you ship!
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
