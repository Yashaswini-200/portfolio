'use client';

import type { Project } from '@/types';
import Link from 'next/link';

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="mt-16">
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">0x03 // projects</span>
        <span className="h-px flex-1 bg-border max-w-[60px]" />
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group border-b border-border ${index === 0 ? 'border-t' : ''} bg-bg2 p-6 transition-colors duration-200 hover:bg-[rgba(0,255,156,0.04)] hover:border-l-2 hover:border-accent`}
          >
            <div className="md:grid md:grid-cols-[max-content_1fr_max-content] md:gap-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">0x{String(project.id).padStart(2, '0')}</div>
              <div className="mt-4 md:mt-0">
                <h3 className="font-mono text-[15px] font-medium text-text-primary">{project.title}</h3>
                <p className="mt-3 text-[12px] leading-6 text-text-muted">{project.summary}</p>
                <p className="mt-3 italic text-[11px] text-text-mid">{`// ${project.keyLearnings[0]}`}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border border-border px-2 py-1 text-[11px] font-mono uppercase tracking-[0.12em] text-text-mid">
                      {tech.toLowerCase()}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-[11px]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-mono text-text-muted border-b border-border transition-colors duration-150 hover:border-accent hover:text-accent"
                  >
                    details →
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-text-muted border-b border-border transition-colors duration-150 hover:border-accent hover:text-accent"
                  >
                    github →
                  </a>
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:text-right">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent">COMPLETE</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
