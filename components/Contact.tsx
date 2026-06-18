'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Toast from '@/components/Toast';
import { shouldReduceMotion } from '@/lib/animations';

const contacts = [
  {
    label: 'Email',
    href: 'mailto:yashaswini.v2999@gmail.com',
    display: 'yashaswini.v2999@gmail.com',
    value: 'yashaswini.v2999@gmail.com',
    external: false
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Yashaswini-200',
    display: 'github.com/Yashaswini-200',
    external: true
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yashaswini-v-a21a3032a/',
    display: 'linkedin.com/in/yashaswini-v-a21a3032a',
    external: true
  }
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [showToast, setShowToast] = useState(false);

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

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const reduceMotion = shouldReduceMotion();

  const containerVariants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
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
    <>
      <section id="contact" ref={ref} className="mt-16 rounded border border-border bg-surface p-6 sm:p-8">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Contact</p>
          <h2 className="mt-3 font-mono text-2xl font-semibold text-text-primary">Open to internship opportunities</h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Open to embedded systems and firmware internship opportunities.
          </p>
        </motion.div>
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {contacts.map((contact) => (
            <motion.div key={contact.label} variants={itemVariants}>
              <div className="flex items-center gap-3 rounded border border-border bg-background px-4 py-4 transition-all duration-300 hover:border-accent hover:bg-background/50">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-surface text-text-secondary">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2 3.5h12M2 7.5h12M2 11.5h7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div className="flex-1 text-sm text-text-secondary">
                  <div className="font-mono text-xs uppercase tracking-widest text-text-muted">{contact.label}</div>
                  {contact.external ? (
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-text-secondary transition-colors duration-150 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                      {contact.display}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => handleCopyEmail(contact.value || '')}
                      className="inline-flex items-center gap-1 text-text-secondary transition-colors duration-150 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                      title="Click to copy email"
                    >
                      {contact.display}
                      <span aria-hidden="true">✓</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="mt-6 text-sm text-text-muted"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Preferred contact: Email and LinkedIn · Typically responds within 48 hours
        </motion.p>
      </section>
      <Toast show={showToast} message="Email copied to clipboard!" />
    </>
  );
}
