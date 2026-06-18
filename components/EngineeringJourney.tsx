'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { shouldReduceMotion } from '@/lib/animations';

const milestones = [
  {
    title: 'ECE Foundation',
    description: 'Understanding digital logic, circuit design, and signal fundamentals.',
    icon: '⚡'
  },
  {
    title: 'Embedded C Fundamentals',
    description: 'Mastered C programming for microcontrollers and resource-constrained systems.',
    icon: '💾'
  },
  {
    title: 'Interrupt-Driven Systems',
    description: 'Built event-driven architectures using interrupts and timer modules.',
    icon: '🔔'
  },
  {
    title: 'Real-Time Design',
    description: 'Implemented cooperative task scheduling and state machines.',
    icon: '⏱️'
  },
  {
    title: 'Communication Systems',
    description: 'Designed UART shells and protocol-level communication systems.',
    icon: '📡'
  },
  {
    title: 'Production Firmware',
    description: 'Built machine health monitoring and predictive maintenance systems.',
    icon: '🏭'
  }
];

export default function EngineeringJourney() {
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
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      };

  const itemVariants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20, x: -10 },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.4,
          },
        },
      };

  return (
    <section id="journey" className="mt-16">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Career Path</p>
        <h2 className="mt-3 font-mono text-2xl font-semibold text-text-primary">Engineering Journey</h2>
      </div>

      <motion.div
        ref={ref}
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="rounded border border-border bg-surface p-6 transition-all duration-300 hover:border-accent hover:bg-surface"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-accent bg-background text-lg">
                {milestone.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-mono text-lg font-semibold text-text-primary">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {milestone.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
