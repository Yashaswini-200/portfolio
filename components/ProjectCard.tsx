import type { Project } from '@/types';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent">
      <div className="flex items-center justify-between text-sm text-text-muted">
        <span className="font-mono">[{String(project.id).padStart(2, '0')}]</span>
        <span className="rounded-full border border-border px-2 py-1 text-xs uppercase tracking-widest text-text-secondary">
          {project.status}
        </span>
      </div>

      <h2 className="mt-4 font-mono text-lg font-semibold text-text-primary">{project.title}</h2>
      <p className="mt-3 text-text-secondary">{project.summary}</p>

      <div className="mt-6 border-t border-border pt-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <code
              key={tech}
              className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-sm text-accent"
            >
              {tech.toLowerCase()}
            </code>
          ))}
        </div>
        <p className="mt-4 italic text-sm text-text-muted">{project.keyLearnings[0]}</p>
      </div>

      <div className="mt-6 border-t border-border pt-4 flex flex-wrap items-center gap-3 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="font-mono text-accent transition-colors duration-150 hover:text-accentDim focus:outline-2 focus:outline-accent focus:outline-offset-2"
        >
          View Details →
        </Link>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-text-secondary transition-colors duration-150 hover:text-accent focus:outline-2 focus:outline-accent focus:outline-offset-2"
        >
          GitHub →
        </a>
      </div>
    </article>
  );
}
