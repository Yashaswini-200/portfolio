'use client';

import { useState } from 'react';
import Toast from '@/components/Toast';

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <section id="contact" className="mt-16">
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">0x05 // contact</span>
          <span className="h-px flex-1 bg-border max-w-[60px]" />
        </div>

        <p className="mb-6 font-mono text-[13px] leading-6 text-text-muted">
          Open to embedded systems and firmware internships. Typically responds within 48h.
        </p>

        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 bg-border">
          <div className="bg-background p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted mb-2">EMAIL</div>
            <button
              onClick={() => handleCopyEmail('yashaswini.v2999@gmail.com')}
              className="font-mono text-[13px] text-accent text-left"
            >
              yashaswini.v2999@gmail.com
            </button>
          </div>

          <div className="bg-background p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted mb-2">GITHUB</div>
            <a
              href="https://github.com/Yashaswini-200"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-accent inline-flex items-center gap-1"
            >
              github.com/Yashaswini-200
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="bg-background p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted mb-2">LINKEDIN</div>
            <a
              href="https://www.linkedin.com/in/yashaswini-v-a21a3032a/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-accent inline-flex items-center gap-1"
            >
              yashaswini-v
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="bg-bg p-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted mb-2">STATUS</div>
            <div className="inline-flex items-center gap-2 font-mono text-[13px] text-accent">
              <span className="inline-block h-2 w-2 rounded-none bg-accent" />
              open to internships
            </div>
          </div>
        </div>
      </section>
      <Toast show={showToast} message="Email copied to clipboard!" />
    </>
  );
}
