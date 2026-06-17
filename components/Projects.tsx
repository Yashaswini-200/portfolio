import type { Project } from '@/types';
import ProjectCard from '@/components/ProjectCard';

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="mt-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted">Projects</p>
          <h2 className="mt-3 font-mono text-2xl font-semibold text-text-primary">Selected work</h2>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
