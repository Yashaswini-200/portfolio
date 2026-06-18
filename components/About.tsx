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
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const reduceMotion = shouldReduceMotion();

  const containerVariants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
          },
        },
      };

  const itemVariants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        },
      };

  return (
    <section id="about" ref={ref} className="mt-16 grid gap-8 lg:grid-cols-2">
      <motion.div
        className="rounded border border-border bg-surface p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-mono text-2xl font-semibold text-text-primary">About</h2>
        <div className="mt-5 space-y-4 font-sans text-base leading-relaxed text-text-secondary">
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
      </motion.div>

      <motion.div
        className="rounded border border-border bg-surface p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="font-mono text-base font-semibold uppercase tracking-widest text-text-muted">Quick facts</h3>
        <motion.dl
          className="mt-6 space-y-4 text-sm leading-6 text-text-secondary"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {facts.map((fact) => (
            <motion.div key={fact.label} variants={itemVariants} className="transition-colors duration-200 hover:text-accent">
              <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
