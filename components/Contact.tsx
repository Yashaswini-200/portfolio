'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { shouldReduceMotion } from '@/lib/animations';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [copied, setCopied] = useState(false);

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

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 1500);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const reduceMotion = shouldReduceMotion();

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={reduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } } }}
      className="mt-16"
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">0x04 // contact</span>
        <span className="h-px flex-1 bg-border max-w-[60px]" />
      </div>

      <p className="mb-6 font-mono text-[13px] leading-6 text-text-muted">
        Open to embedded systems and firmware internships. Typically responds within 48h.
      </p>

      <div className="grid grid-cols-1 gap-1 bg-border md:grid-cols-2">
        <div className="bg-background p-6">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">EMAIL</div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => handleCopyEmail('yashaswini.v2999@gmail.com')}
              className="font-mono text-left text-[13px] text-accent transition-colors duration-150 hover:text-accent/80"
            >
              yashaswini.v2999@gmail.com
            </button>
            <button
              type="button"
              onClick={() => handleCopyEmail('yashaswini.v2999@gmail.com')}
              aria-label="Copy email address"
              className="inline-flex h-7 w-7 items-center justify-center border border-border bg-bg2 text-[11px] text-text-muted transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              ⧉
            </button>
            <span className={`text-[10px] uppercase tracking-[0.15em] text-accent transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0'}`}>
              Copied!
            </span>
          </div>
        </div>

        <div className="bg-background p-6">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">GITHUB</div>
          <a
            href="https://github.com/Yashaswini-200"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[13px] text-accent"
          >
            github.com/Yashaswini-200
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="bg-background p-6">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">LINKEDIN</div>
          <a
            href="https://www.linkedin.com/in/yashaswini-v-a21a3032a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[13px] text-accent"
          >
            yashaswini-v
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="bg-bg p-6">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">STATUS</div>
          <div className="inline-flex items-center gap-2 font-mono text-[13px] text-accent">
            <span className="inline-block h-2 w-2 rounded-none bg-accent animate-pulse-status" />
            open to internships
          </div>
        </div>
      </div>
    </motion.section>
  );
}
