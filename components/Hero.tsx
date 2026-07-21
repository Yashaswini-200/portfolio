'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { shouldReduceMotion } from '@/lib/animations';

const terminalLines = [
  {
    command: 'whoami',
    output: 'Yashaswini — Integrated B.Tech + M.Tech · ECE'
  },
  {
    command: 'echo $FOCUS',
    output: 'Bare-metal firmware for resource-constrained systems.'
  },
  {
    command: 'grep -i "expertise" ./skills',
    output: 'UART · Interrupts · Ring Buffers · State Machines · Cooperative Scheduling'
  },
  {
    command: './status',
    output: ''
  }
];

const stats = ['5 PROJECTS', '4+ PROTOCOLS', '0 RTOS (yet)'];

export default function Hero() {
  const reduceMotion = shouldReduceMotion();
  const [typedCommands, setTypedCommands] = useState<string[]>(terminalLines.map(() => ''));
  const [visibleOutputs, setVisibleOutputs] = useState<boolean[]>(terminalLines.map(() => false));
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setTypedCommands(terminalLines.map(line => line.command));
      setVisibleOutputs(terminalLines.map(line => Boolean(line.output)));
      setActiveLine(terminalLines.length - 1);
      return;
    }

    const timeouts: Array<ReturnType<typeof setTimeout>> = [];
    let delay = 400;

    terminalLines.forEach((line, lineIndex) => {
      timeouts.push(
        setTimeout(() => {
          setActiveLine(lineIndex);
          setTypedCommands(prev => {
            const next = [...prev];
            next[lineIndex] = '';
            return next;
          });
        }, delay)
      );

      line.command.split('').forEach((symbol, charIndex) => {
        timeouts.push(
          setTimeout(() => {
            setTypedCommands(prev => {
              const next = [...prev];
              next[lineIndex] = `${next[lineIndex]}${symbol}`;
              return next;
            });
          }, delay + 50 * (charIndex + 1))
        );
      });

      delay += line.command.length * 50 + 180;

      if (line.output) {
        timeouts.push(
          setTimeout(() => {
            setVisibleOutputs(prev => {
              const next = [...prev];
              next[lineIndex] = true;
              return next;
            });
          }, delay)
        );
        delay += 260;
      }
    });

    timeouts.push(
      setTimeout(() => {
        setActiveLine(terminalLines.length - 1);
      }, delay)
    );

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hidden md:block opacity-60">
        <svg viewBox="0 0 860 620" className="h-full w-full" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#1A1A24" strokeWidth="1">
            <path d="M40 80H820" />
            <path d="M40 180H820" />
            <path d="M40 300H820" />
            <path d="M40 420H820" />
            <path d="M40 540H820" />
            <path d="M120 40V580" />
            <path d="M260 40V580" />
            <path d="M420 40V580" />
            <path d="M580 40V580" />
            <path d="M720 40V580" />
          </g>
          <g stroke="#1A1A24" strokeWidth="1">
            <path d="M160 120H240V140" />
            <path d="M280 220H380V240" />
            <path d="M110 340H190V360" />
            <path d="M520 160H620V180" />
            <path d="M460 460H540V480" />
          </g>
          <g fill="#2A2A38">
            <rect x="120" y="80" width="2" height="2" />
            <rect x="260" y="180" width="2" height="2" />
            <rect x="420" y="300" width="2" height="2" />
            <rect x="580" y="420" width="2" height="2" />
            <rect x="720" y="540" width="2" height="2" />
          </g>
          <g stroke="#2A2A38" strokeWidth="1" fill="none">
            <rect x="110" y="100" width="20" height="14" />
            <path d="M104 105H110M104 110H110M104 115H110M134 105H140M134 110H140M134 115H140" />
            <rect x="620" y="380" width="20" height="14" />
            <path d="M614 385H620M614 390H620M614 395H620M644 385H650M644 390H650M644 395H650" />
            <rect x="380" y="520" width="20" height="14" />
            <path d="M374 525H380M374 530H380M374 535H380M404 525H410M404 530H410M404 535H410" />
          </g>
          <circle r="2" fill="#00FF9C" opacity="0.45">
            <animateMotion dur="5s" repeatCount="indefinite" path="M120 90C190 76 260 74 330 100" />
          </circle>
        </svg>
      </div>

      <div className="relative min-h-[calc(100vh-52px)] px-6 py-10 lg:px-0 lg:py-16">
        <div className="mx-auto flex min-h-[calc(100vh-52px)] flex-col justify-center gap-8 lg:max-w-[720px]">
          <div className="max-w-[780px]">
            <h1 className="font-mono text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-tight text-text-primary">
              Yashaswini
            </h1>
            <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-text-muted">
              ECE · EMBEDDED SYSTEMS · FIRMWARE
            </p>
          </div>

          <div className="border border-border bg-bg2 p-6 md:p-8">
            <div className="flex items-center gap-2 pb-4">
              <span className="h-2.5 w-2.5 bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 bg-[#27C93F]" />
            </div>

            <div className="space-y-4 font-mono text-[13px] leading-6 text-text-primary">
              {terminalLines.map((line, lineIndex) => {
                const hasOutput = Boolean(line.output);
                const typedText = typedCommands[lineIndex];
                const isCurrent = activeLine === lineIndex;
                const showCursor = isCurrent || (lineIndex === terminalLines.length - 1 && typedText === line.command);

                return (
                  <div key={line.command} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-accent">$</span>
                      <div className="inline-flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[13px] text-text-primary">{typedText}</span>
                        {showCursor ? (
                          <span className="inline-block h-[14px] w-[8px] bg-accent animate-blink-block" aria-hidden="true" />
                        ) : null}
                      </div>
                    </div>
                    {hasOutput ? (
                      <p className={`pl-[1.25rem] text-[13px] leading-6 text-text-mid transition-opacity duration-300 ${
                        visibleOutputs[lineIndex] ? 'opacity-100' : 'opacity-0'
                      }`}>
                        {line.output}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.15em] text-text-muted">
            {stats.map(stat => (
              <span key={stat}>{stat}</span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center border border-border bg-accent px-4 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0A0A0F] transition-colors duration-150 hover:bg-accent/90"
            >
              view projects
            </Link>
            <a
              href="https://github.com/Yashaswini-200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-border px-4 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              github →
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center border border-border px-4 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              resume ↓
            </a>
            <a
              href="https://www.linkedin.com/in/yashaswini-v-a21a3032a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-border px-4 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              linkedin →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
