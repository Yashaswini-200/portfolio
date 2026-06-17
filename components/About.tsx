export default function About() {
  return (
    <section id="about" className="mt-16 grid gap-8 lg:grid-cols-2">
      <div className="rounded border border-border bg-surface p-6">
        <h2 className="font-mono text-2xl font-semibold text-text-primary">About</h2>
        <p className="mt-5 font-sans text-base leading-relaxed text-text-secondary">
          I am an Integrated B.Tech + M.Tech student in Electronics and Communication
          Engineering specializing in Communication and Signal Processing.
          I enjoy building embedded software that runs on resource-constrained systems
          using Embedded C and event-driven design principles.
          My projects focus on interrupt-driven communication, state machines,
          cooperative task scheduling, and machine health monitoring.
          I am actively seeking embedded systems and firmware internships where I can
          strengthen my understanding of microcontrollers, firmware architecture,
          and system-level design.
        </p>
      </div>

      <div className="rounded border border-border bg-surface p-6">
        <h3 className="font-mono text-base font-semibold uppercase tracking-widest text-text-muted">Quick facts</h3>
        <dl className="mt-6 space-y-4 text-sm leading-6 text-text-secondary">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">Degree</dt>
            <dd>Integrated B.Tech + M.Tech, ECE</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">Specialization</dt>
            <dd>Communication and Signal Processing</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">Primary Language</dt>
            <dd>C</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">Platforms</dt>
            <dd>NodeMCU, Arduino Uno</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">Tools</dt>
            <dd>PlatformIO · Wokwi · Git · VS Code</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">Status</dt>
            <dd>Seeking Embedded Systems Internship</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
