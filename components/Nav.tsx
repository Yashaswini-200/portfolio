'use client';

import { useEffect, useRef, useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About', address: '0x01' },
  { href: '#skills', label: 'Skills', address: '0x02' },
  { href: '#projects', label: 'Projects', address: '0x03' },
  { href: '#journey', label: 'Journey', address: '0x04' },
  { href: '#contact', label: 'Contact', address: '0x05' }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 90;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-[52px] border-b border-border bg-[#0A0A0F]/92 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[860px] items-center justify-between px-6">
        <div className="font-mono text-[13px] font-semibold uppercase tracking-[0.05em] text-accent">
          Y_V.fw
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-[12px] uppercase tracking-[0.15em] transition-colors duration-150 ${
                activeSection === link.href.substring(1)
                  ? 'text-accent'
                  : 'text-text-muted hover:text-accent'
              } focus:outline-2 focus:outline-accent focus:outline-offset-2`}
            >
              {link.address}
            </a>
          ))}
        </div>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center border border-border text-text-muted transition-colors duration-150 hover:border-accent hover:text-accent focus:outline-2 focus:outline-accent focus:outline-offset-2 md:hidden"
          onClick={() => setOpen(current => !current)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" ref={menuRef} className="border-t border-border bg-background/95 px-6 pb-6 md:hidden">
          <div className="space-y-4 pt-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block font-mono text-[12px] uppercase tracking-[0.15em] transition-colors duration-150 ${
                  activeSection === link.href.substring(1)
                    ? 'text-accent'
                    : 'text-text-muted hover:text-accent'
                } focus:outline-2 focus:outline-accent focus:outline-offset-2`}
              >
                {link.address} — {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
