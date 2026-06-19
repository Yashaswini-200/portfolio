'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { shouldReduceMotion } from '@/lib/animations';

const facts = [
  { label: 'Degree', value: 'Integrated B.Tech + M.Tech, ECE' },
  { label: 'Specialization', value: 'Communication and Signal Processing' },
  { label: 'Primary Language', value: 'Embedded C' },
  { label: 'Firmware Focus', value: 'UART · Interrupts · State Machines' },
  { label: 'Platforms', value: 'NodeMCU' },
  { label: 'Toolchain', value: 'PlatformIO · Wokwi · Git · VS Code' },
  { label: 'Current Goal', value: 'Embedded Systems & Firmware Internship' }
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const reduceMotion = shouldReduceMotion();

  const labelVariants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
      };

  const contentVariants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.08 } }
      };

  return (
    <section id="about" ref={ref} className="mt-16">
      <motion.div
        className="mb-10 flex items-center gap-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={labelVariants}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">0x01 // about</span>
        <span className="h-px flex-1 bg-border max-w-[60px]" />
      </motion.div>

      <motion.div
        className="grid gap-8 lg:grid-cols-2"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={contentVariants}
      >
        <div className="border border-border bg-bg2 p-8">
          <h2 className="font-mono text-[28px] font-semibold text-text-primary">About</h2>
          <div className="mt-5 space-y-4 font-mono text-[14px] leading-7 text-text-secondary">
            <p>
              I am an Integrated B.Tech + M.Tech student in Electronics and Communication Engineering specializing in Communication and Signal Processing.
            </p>
            <p>
              I enjoy building embedded software that runs on resource-constrained systems using Embedded C and event-driven design principles.
            </p>
            <p>
              My projects focus on interrupt-driven communication, state machines, cooperative task scheduling, and machine health monitoring.
            </p>
            <p>
              I am actively seeking embedded systems and firmware internships where I can strengthen my understanding of microcontrollers, embedded software design, and debugging workflows.
            </p>
          </div>
        </div>

        <div className="border border-border bg-bg2 p-8">
          <h3 className="font-mono text-[14px] uppercase tracking-[0.15em] text-text-muted">Quick facts</h3>
          <dl className="mt-6 space-y-4 text-[13px] leading-7 text-text-secondary">
            {facts.map(fact => (
              <div key={fact.label} className="space-y-1">
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
