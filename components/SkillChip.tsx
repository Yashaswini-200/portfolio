'use client';

import { motion } from 'framer-motion';
import { shouldReduceMotion } from '@/lib/animations';

interface SkillChipProps {
  tag: string;
  index?: number;
}

export default function SkillChip({ tag, index = 0 }: SkillChipProps) {
  const reduceMotion = shouldReduceMotion();

  const variants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.3,
            delay: index * 0.05,
          },
        },
      };

  return (
    <motion.span
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover={reduceMotion ? {} : { scale: 1.05, borderColor: '#00FF9C' }}
      className="border border-border font-mono text-xs px-3 py-2 m-1 text-text-secondary rounded transition-colors duration-200 hover:text-accent hover:border-accent cursor-default"
    >
      {tag}
    </motion.span>
  );
}
