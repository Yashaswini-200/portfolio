import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yashaswini — Embedded Systems Portfolio',
  description:
    'ECE student building embedded firmware, UART communication systems, task schedulers, and machine health monitoring projects. Seeking embedded and firmware internships.',
  keywords: [
    'embedded systems',
    'firmware',
    'embedded c',
    'uart',
    'interrupts',
    'platformio',
    'nodemcu',
    'arduino',
    'cooperative scheduling',
    'firmware internship'
  ],
  authors: [{ name: 'Yashaswini' }],
  openGraph: {
    title: 'Yashaswini — Embedded Systems Portfolio',
    description: 'ECE student. UART shells, cooperative schedulers, event-driven systems, predictive maintenance.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yashaswini — Embedded Systems Portfolio',
    description: 'Firmware projects using Embedded C, UART, interrupts, and NodeMCU.'
  },
  robots: { index: true, follow: true }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yashaswini',
  jobTitle: 'Embedded Systems Engineering Student',
  description: 'Integrated B.Tech + M.Tech student in ECE focused on firmware and embedded systems.',
  url: 'https://yashaswini.vercel.app',
  sameAs: [
    'https://github.com/yashaswini',
    'https://linkedin.com/in/yashaswini'
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
