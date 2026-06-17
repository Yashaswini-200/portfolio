import Link from 'next/link';

export default function Hero() {
  return (
    <section className="rounded border border-border bg-surface p-6 sm:p-8">
      <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6 text-text-secondary">
        <span className="text-accent">$</span> whoami
        {'\n'}Yashaswini
        {'\n'}Integrated B.Tech + M.Tech · Electronics & Communication Engineering
        {'\n'}Specialization: Communication and Signal Processing

        {'\n'}<span className="text-accent">$</span> cat focus.txt
        {'\n'}Embedded Firmware · Interrupt-Driven Systems · Cooperative Scheduling

        {'\n'}<span className="text-accent">$</span> ls ./skills/
        {'\n'}<span className="text-text-secondary">embedded-c/  uart/  interrupts/  state-machines/</span>
        {'\n'}<span className="text-text-secondary">ring-buffers/  cooperative-scheduling/  platformio/  nodemcu/</span>

        {'\n'}<span className="text-accent">$</span> ./find-opportunities --type=internship --domain=embedded-systems
      </pre>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="#projects" className="inline-flex items-center rounded bg-accent px-6 py-3 font-mono text-sm font-bold text-background transition-colors duration-150 hover:bg-accentDim focus:outline-2 focus:outline-accent focus:outline-offset-2">
          View Projects →
        </Link>
        <a href="https://github.com/yashaswini" className="inline-flex items-center rounded border border-border px-6 py-3 font-mono text-sm text-text-secondary transition-colors duration-150 hover:border-accent hover:text-accent focus:outline-2 focus:outline-accent focus:outline-offset-2">
          GitHub →
        </a>
        <a href="/resume.pdf" className="inline-flex items-center rounded border border-border px-6 py-3 font-mono text-sm text-text-secondary transition-colors duration-150 hover:border-accent hover:text-accent focus:outline-2 focus:outline-accent focus:outline-offset-2">
          Resume ↓
        </a>
        <a href="https://linkedin.com/in/yashaswini" className="inline-flex items-center rounded border border-border px-6 py-3 font-mono text-sm text-text-secondary transition-colors duration-150 hover:border-accent hover:text-accent focus:outline-2 focus:outline-accent focus:outline-offset-2">
          LinkedIn →
        </a>
      </div>
    </section>
  );
}
