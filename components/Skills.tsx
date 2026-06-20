'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SkillChip from '@/components/SkillChip';
import { shouldReduceMotion } from '@/lib/animations';

const categories = [
  {
    title: 'FIRMWARE & EMBEDDED',
    variant: 'accent',
    tags: ['Embedded C', 'UART', 'Interrupts', 'Ring Buffers', 'State Machines', 'Cooperative Scheduling']
  },
  {
    title: 'HARDWARE',
    variant: 'normal',
    tags: ['NodeMCU', 'SPI', 'I2C', 'BLE', 'Sensors']
  },
  {
    title: 'TOOLCHAIN',
    variant: 'normal',
    tags: ['PlatformIO', 'Wokwi', 'Git', 'VS Code','Arduino IDE']
  },
  {
    title: 'LANGUAGES',
    variant: 'normal',
    tags: ['C', 'Python', 'Verilog', 'c++' ,'JavaScript','Assembly Language','MATLAB' ]
  },
  {
    title: 'ACADEMIC',
    variant: 'dashed',
    tags: ['Digital Signal Processing', 'Communication Systems', 'Digital Electronics']
  }
];

const learningGoals = ['Memory-Mapped I/O', 'Register-Level Programming', 'SPI', 'I2C', 'RTOS Fundamentals'];

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
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const reduceMotion = shouldReduceMotion();

  return (
    <section id="skills" ref={ref} className="mt-16">
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">0x02 // skills</span>
        <span className="h-px flex-1 bg-border max-w-[60px]" />
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : categoryIndex * 0.08 }}
          >
            <div className="border-b border-border pb-3 text-[11px] uppercase tracking-[0.12em] text-text-muted">
              {category.title}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {category.tags.map((tag, tagIndex) => (
                <SkillChip key={tag} tag={tag} variant={category.variant as 'accent' | 'normal'} index={categoryIndex * 10 + tagIndex} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 border-b border-border pb-3 text-[11px] uppercase tracking-[0.12em] text-text-muted">
        LOADING...
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {learningGoals.map((goal, index) => (
          <SkillChip key={goal} tag={goal} variant="dashed" index={index} />
        ))}
      </div>
    </section>
  );
}
