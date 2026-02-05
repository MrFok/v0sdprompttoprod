"use client";

import React, { useState, useEffect } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Play, X } from 'lucide-react';

export default function WelcomeSheet() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

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
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="px-4 backdrop-blur-md rounded-md transition-all duration-300 bg-white/10 border-white/20 hover:bg-white/20 group"
        >
          <span className="text-nowrap flex items-center gap-2">
            Welcome
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-900/95 backdrop-blur-xl border-white/10 text-white overflow-y-auto scrollbar-dark">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-white">
            Welcome to Prompt to Production! 🚀
          </SheetTitle>
          <SheetDescription className="text-gray-300 text-base">
            Welcome to the event! We are thrilled to have you here to explore the next evolution of v0.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* What's New Section */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-3">
              What's New in v0?
            </h3>
            <p className="text-gray-300 mb-4">
              The Vercel team has launched three massive updates to help you ship faster and more reliably:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">GitHub Repository Import:</strong> You can now pull your actual codebase into v0.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">VM-Based Rendering:</strong> A new, more powerful virtual machine-based solution has replaced the old renderer for better performance.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
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
            <p className="text-gray-300">
              The goal of these updates is to enable anyone on a team—whether you are in Engineering, Design, Marketing, or Product—to contribute directly to production. Use v0 to make changes, iterate on the live codebase, and open a Pull Request (PR) to work with your dev team on the final merge.
            </p>
          </section>

          {/* Global Challenge Section */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-3">
              The Global Challenge & Prizes
            </h3>
            <p className="text-gray-300 mb-4">
              We want to see what you can build! Submit your apps and agents to the Community Showcase Page to compete for global recognition.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">Who can build?</strong> We have tracks for Product, Design, Data, Engineering, and Go-to-Market teams.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">Voting Window:</strong> January 31st – February 8th.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-white">The Stakes:</strong> Global winners will receive v0 credits, cash prizes, and a feature on Vercel's social channels.
                </div>
              </li>
            </ul>
          </section>

          {/* Video Section */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-3">
              Watch the Video
            </h3>
            <div className="relative">
              {!showVideo ? (
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center border border-white/10">
                  <Button
                    onClick={handleWatchVideo}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                    disabled={!isVideoReady}
                  >
                    <Play className="w-5 h-5" />
                    {isVideoReady ? 'Play Video' : 'Loading...'}
                  </Button>
                </div>
              ) : (
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                  <Vimeo
                    video={1161676670}
                    autoplay
                    responsive
                    showPortrait={false}
                    showTitle={false}
                    showByline={false}
                    dnt={true}
                  />
                </div>
              )}
            </div>
          </section>

          {/* Call to Action */}
          <section className="pt-4 border-t border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">
              Ready to get started?
            </h3>
            <p className="text-gray-300 mb-4">
              Grab your laptop, import a repo, and let's see what you ship!
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => window.open('https://v0.dev', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Open v0
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://x.com', '_blank')}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Share on X
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Share on LinkedIn
              </Button>
            </div>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
}
