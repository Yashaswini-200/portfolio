'use client';

import { motion } from 'framer-motion';
import { shouldReduceMotion } from '@/lib/animations';

interface SkillChipProps {
  tag: string;
  variant?: 'accent' | 'normal' | 'dashed';
  index?: number;
}

export default function SkillChip({ tag, variant = 'normal', index = 0 }: SkillChipProps) {
  const reduceMotion = shouldReduceMotion();

  const variants = reduceMotion
    ? { hidden: { opacity: 1, scale: 1 }, visible: { opacity: 1, scale: 1 } }
    : {
        hidden: { opacity: 0, y: 16, scale: 0.92 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.35,
            delay: index * 0.03
          }
        }
      };

  const classes = [
    'inline-flex items-center border border-border px-3 py-2 text-[11px] font-mono uppercase tracking-[0.08em]'
  ];

  if (variant === 'accent') {
    classes.push('border-[rgba(0,255,156,0.3)] text-accent');
  } else if (variant === 'dashed') {
    classes.push('border-dashed text-text-muted');
  } else {
    classes.push('text-text-mid');
  }

  return (
    <motion.span variants={variants} initial="hidden" animate="visible" className={classes.join(' ')}>
      {tag}
    </motion.span>
  );
}
