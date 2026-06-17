export type ProjectStatus = 'Complete' | 'In Progress' | 'Archived';

export interface ArchitectureNode {
  id: string;
  label: string;
  description?: string;
}

export interface ArchitectureFlow {
  summary: string;
  nodes: ArchitectureNode[];
  dataFlow: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  solution: string;
  architecture: ArchitectureFlow;
  keyLearnings: string[];
  technologies: string[];
  githubUrl: string;
  featured: boolean;
}
