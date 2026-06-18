import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';
import { projects } from '@/data/projects';

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find(item => item.slug === params.slug);

  if (!project) {
    return {
      title: 'Project not found'
    };
  }

  return {
    title: `${project.title} — Portfolio`,
    description: project.summary
  };
}

export default function ProjectPage({ params }: Params) {
  const project = projects.find(item => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background px-6 py-28 text-text-secondary lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="font-mono text-sm text-text-secondary transition-colors duration-150 hover:text-accent focus:outline-2 focus:outline-accent focus:outline-offset-2"
          aria-label="Back to Projects"
        >
          ← Back to Projects
        </Link>
        <ProjectDetail project={project} />
      </div>
    </main>
  );
}
