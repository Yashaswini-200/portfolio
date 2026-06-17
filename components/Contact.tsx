const contacts = [
  {
    label: 'Email',
    href: 'mailto:yashaswini@email.com',
    display: 'yashaswini@email.com'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yashaswini',
    display: 'github.com/yashaswini'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yashaswini',
    display: 'linkedin.com/in/yashaswini'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="mt-16 rounded border border-border bg-surface p-6 sm:p-8">
      <div className="mb-6">
        <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Contact</p>
        <h2 className="mt-3 font-mono text-2xl font-semibold text-text-primary">Open to internship opportunities</h2>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          Open to embedded systems and firmware internship opportunities.
        </p>
      </div>
      <div className="space-y-4">
        {contacts.map(contact => (
          <div key={contact.label} className="flex items-center gap-3 rounded border border-border bg-background px-4 py-4">
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
              <a
                href={contact.href}
                className="inline-flex items-center gap-1 text-text-secondary transition-colors duration-150 hover:text-accent focus:outline-2 focus:outline-accent focus:outline-offset-2"
              >
                {contact.display}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-text-muted">
        Preferred contact: Email and LinkedIn · Typically responds within 48 hours
      </p>
    </section>
  );
}
