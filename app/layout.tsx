import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yashaswini — Embedded Systems Portfolio',
  description:
    'Portfolio showcasing embedded firmware, UART systems, and cooperative scheduling projects.'
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yashaswini',
  jobTitle: 'Embedded Systems Engineer',
  description:
    'Integrated B.Tech + M.Tech student in Electronics and Communication Engineering specializing in embedded firmware, UART systems, and cooperative scheduling.',
  url: 'https://example.com'
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
