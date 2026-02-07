import React from "react"
import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import {Analytics} from '@vercel/analytics/next'
import './globals.css'
import Dither from "@/components/Dither";
import WelcomeDialog from "@/components/welcome-dialog";
import FreeCreditsDialog from "@/components/free-credits-dialog";
import WelcomeButtonProvider from "@/components/welcome-button-provider";
import Link from "next/link";

const _geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    title: 'v0 IRL — Prompt to Production | SD February 7th, 2026',
    description: 'v0 is launching its biggest product update yet. Join us for v0 IRL events around the world. One week. Global hackathons. Real apps, real work.',
    generator: 'v0.app',
    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`dark ${_geist.variable} ${_geistMono.variable}`}>
        <head>
            <link rel="preconnect" href="https://i.vimeocdn.com" />
            <link rel="preconnect" href="https://f.vimeocdn.com" />
            <link rel="preconnect" href="https://player.vimeo.com" />
            <link rel="preload" href="https://player.vimeo.com/api/player.js" as="script" />
        </head>
        <body className="font-sans antialiased">
        <div className='absolute w-full h-full min-h-dvh'>
            <Dither
                waveColor={[0.30980392156862746, 0.30980392156862746, 0.30980392156862746]}
                disableAnimation={false}
                enableMouseInteraction
                mouseRadius={0.3}
                colorNum={4}
                pixelSize={2}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
            />
        </div>
        <WelcomeButtonProvider>
            {/* Welcome Buttons - Top Right */}
            <div className="absolute top-6 right-6 z-50 flex gap-2">
                <WelcomeDialog />
                <FreeCreditsDialog />
            </div>
            {children}
        </WelcomeButtonProvider>
        <Analytics/>
        </body>
        </html>
    )
}
