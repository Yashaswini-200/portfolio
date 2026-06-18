import Link from 'next/link';
import { Suspense } from 'react';

const metrics = ['5 Projects', 'Embedded C', 'PlatformIO', 'Wokwi'];

function HeroContent() {
  return (
    <>
      <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6 text-text-secondary">
        <span className="text-accent">$</span> whoami
        {'\n'}Yashaswini
        {'\n'}Integrated B.Tech + M.Tech · Electronics & Communication Engineering
        {'\n'}Specialization: Communication and Signal Processing

        {'\n'}<span className="text-accent">$</span> cat focus.txt
        {'\n'}Building bare-metal firmware for resource-constrained systems.

        {'\n'}<span className="text-accent">$</span> cat expertise.txt
        {'\n'}UART · Interrupts · Ring Buffers · State Machines · Cooperative Scheduling

        {'\n'}<span className="text-accent">$</span> status
        {'\n'}Seeking Firmware & Embedded Systems Internship Opportunities
      </pre>

      <div className="mt-6 flex flex-wrap gap-3">
        {metrics.map(metric => (
          <span key={metric} className="animate-fade-up rounded border border-border px-3 py-2 text-xs font-mono text-text-secondary">
            {metric}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="#projects" className="inline-flex items-center rounded bg-accent px-6 py-3 font-mono text-sm font-bold text-background transition-colors duration-150 hover:bg-accentDim focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 animate-fade-up hover:animate-float">
          View Projects →
        </Link>
        <a href="https://github.com/Yashaswini-200" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded border border-border px-6 py-3 font-mono text-sm text-text-secondary transition-colors duration-150 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 animate-fade-up">
          GitHub →
        </a>
        <a href="/resume.pdf" className="inline-flex items-center rounded border border-border px-6 py-3 font-mono text-sm text-text-secondary transition-colors duration-150 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 animate-fade-up">
          Resume ↓
        </a>
        <a href="https://www.linkedin.com/in/yashaswini-v-a21a3032a/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded border border-border px-6 py-3 font-mono text-sm text-text-secondary transition-colors duration-150 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 animate-fade-up">
          LinkedIn →
        </a>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative rounded border border-border bg-surface p-6 sm:p-8">
      {/* Subtle animated glow background */}
      <div className="absolute inset-0 -z-10 rounded bg-gradient-to-br from-accent/5 to-transparent blur-xl opacity-0 animate-glow" />
      
      <Suspense fallback={<div className="h-48 animate-pulse" />}>
        <HeroContent />
      </Suspense>
    </section>
  );
}
