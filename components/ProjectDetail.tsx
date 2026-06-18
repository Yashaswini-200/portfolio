import type { Project } from '@/types';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="space-y-10 rounded border border-border bg-surface p-6 sm:p-8">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-sm text-text-muted">
          <span className="font-mono">[{String(project.id).padStart(2, '0')}]</span>
          <span className="rounded-full border border-border px-2 py-1 text-xs uppercase tracking-widest text-text-secondary">
            {project.status}
          </span>
        </div>
        <h1 className="font-mono text-5xl font-bold text-text-primary">{project.title}</h1>
        <p className="text-base leading-relaxed text-text-secondary">{project.summary}</p>
      </header>

      <section aria-labelledby="problem-heading" className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <article>
            <h2 id="problem-heading" className="font-mono text-xl font-semibold text-text-primary">Problem</h2>
            <p className="mt-3 text-text-secondary">{project.problem}</p>
          </article>
          <article>
            <h2 id="solution-heading" className="font-mono text-xl font-semibold text-text-primary">Solution</h2>
            <p className="mt-3 text-text-secondary">{project.solution}</p>
          </article>
          <section aria-labelledby="learnings-heading">
            <h2 id="learnings-heading" className="font-mono text-xl font-semibold text-text-primary">Key learnings</h2>
            <ol className="mt-4 space-y-3">
              {project.keyLearnings.map((learning, idx) => (
                <li key={learning} className="rounded border border-border bg-background p-4">
                  <div className="font-mono text-sm text-text-muted">{idx + 1}.</div>
                  <p className="mt-2 text-text-secondary">{learning}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded border border-border bg-background p-5">
            <h3 className="font-mono text-sm uppercase tracking-widest text-text-muted">Technologies</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="rounded border border-border px-2 py-1 text-xs font-mono text-text-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded border border-border bg-background p-5">
            <h3 className="font-mono text-sm uppercase tracking-widest text-text-muted">Repository</h3>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository (opens in new tab)`}
              className="mt-3 inline-block font-mono text-sm text-accent transition-colors duration-150 hover:text-accentDim focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {project.githubUrl}
            </a>
          </div>
        </aside>
      </section>

      <ArchitectureDiagram architecture={project.architecture} />
    </article>
  );
}
