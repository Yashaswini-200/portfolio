'use client';

import { motion } from 'framer-motion';
import SkillChip from '@/components/SkillChip';
import { shouldReduceMotion } from '@/lib/animations';
import { useEffect, useRef, useState } from 'react';

const categories = [
  {
    title: 'FIRMWARE & EMBEDDED',
    tags: ['Embedded C', 'UART', 'Interrupts', 'Ring Buffers', 'State Machines', 'Cooperative Scheduling']
  },
  {
    title: 'TOOLS',
    tags: ['PlatformIO', 'Wokwi', 'Git', 'VS Code']
  },
  {
    title: 'HARDWARE',
    tags: ['NodeMCU']
  },
  {
    title: 'ACADEMIC',
    tags: ['Digital Signal Processing', 'Communication Systems', 'Digital Electronics']
  },
  {
    title: 'LANGUAGES',
    tags: ['C', 'Python', 'TypeScript']
  }
];

const learningGoals = ['Memory-Mapped I/O', 'Register-Level Programming', 'SPI Communication', 'I2C Communication', 'RTOS Fundamentals'];

export default function Skills() {
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
            staggerChildren: 0.05,
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
            duration: 0.3,
          },
        },
      };

  return (
    <section id="skills" className="mt-16 rounded border border-border bg-surface p-6 sm:p-8">
      <div className="mb-8">
        <h2 className="font-mono text-2xl font-semibold text-text-primary">Skills</h2>
      </div>
      <motion.div
        ref={ref}
        className="grid gap-8 lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {categories.map((category, categoryIndex) => (
          <motion.div key={category.title} variants={itemVariants}>
            <div className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">
              {category.title}
            </div>
            <motion.div className="flex flex-wrap" variants={containerVariants}>
              {category.tags.map((tag, tagIndex) => (
                <SkillChip key={tag} tag={tag} index={categoryIndex * 10 + tagIndex} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.section
        className="mt-10 rounded border border-text-muted/30 bg-background p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <div className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">
          Currently Learning
        </div>
        <motion.div className="flex flex-wrap" variants={containerVariants}>
          {learningGoals.map((goal, index) => (
            <SkillChip key={goal} tag={goal} index={index} />
          ))}
        </motion.div>
      </motion.section>
    </section>
  );
}
