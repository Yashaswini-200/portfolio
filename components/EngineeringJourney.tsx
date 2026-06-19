'use client';

const milestones = [
  {
    title: 'ECE Foundation',
    description: 'Digital logic, circuit design, signal fundamentals.'
  },
  {
    title: 'Embedded C Fundamentals',
    description: 'C for microcontrollers and resource-constrained systems.'
  },
  {
    title: 'Interrupt-Driven Systems',
    description: 'Event-driven architectures using interrupts and timers.'
  },
  {
    title: 'Real-Time Design',
    description: 'Cooperative scheduling and state machines.'
  },
  {
    title: 'Communication Systems',
    description: 'UART shells and protocol-level communication.'
  },
  {
    title: 'Production Firmware',
    description: 'Machine health monitoring and predictive maintenance systems.'
  }
];

export default function EngineeringJourney() {
  return (
    <section id="journey" className="mt-16">
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">0x04 // journey</span>
        <span className="h-px flex-1 bg-border max-w-[60px]" />
      </div>

      <div className="relative border-l border-border pl-8">
        {milestones.map((milestone, index) => {
          const isLast = index === milestones.length - 1;

          return (
            <div key={milestone.title} className="relative pb-10">
              <span
                className={`absolute left-[-10px] top-1 h-2 w-2 ${
                  isLast ? 'border border-accent bg-transparent animate-pulse-dot' : 'bg-accent'
                }`}
              />
              <div className="font-mono text-[15px] font-semibold text-text-primary">
                {milestone.title}
              </div>
              <p className="mt-2 text-[13px] leading-6 text-text-muted">
                {milestone.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
