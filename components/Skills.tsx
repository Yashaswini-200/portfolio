const categories = [
  {
    title: 'FIRMWARE & EMBEDDED',
    tags: ['Embedded C', 'UART', 'Interrupts', 'Ring Buffers', 'State Machines', 'Cooperative Scheduling']
  },
  {
    title: 'TOOLS',
    tags: ['PlatformIO', 'Wokwi', 'Git', 'GitHub', 'VS Code']
  },
  {
    title: 'HARDWARE',
    tags: ['NodeMCU', 'Arduino Uno']
  },
  {
    title: 'ACADEMIC',
    tags: ['Digital Signal Processing', 'Communication Systems', 'Digital Electronics']
  },
  {
    title: 'LANGUAGES',
    tags: ['C', 'Python', 'TypeScript']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="mt-16 rounded border border-border bg-surface p-6 sm:p-8">
      <div className="mb-8">
        <h2 className="font-mono text-2xl font-semibold text-text-primary">Skills</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {categories.map(category => (
          <div key={category.title}>
            <div className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">
              {category.title}
            </div>
            <div className="flex flex-wrap">
              {category.tags.map(tag => (
                <span
                  key={tag}
                  className="border border-border font-mono text-xs px-2 py-1 m-1 text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
