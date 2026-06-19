import type { ArchitectureFlow } from '@/types';

type ArchitectureDiagramProps = {
  architecture: ArchitectureFlow;
};

export default function ArchitectureDiagram({ architecture }: ArchitectureDiagramProps) {
  return (
    <section className="border border-border bg-bg2 p-6">
      <h3 className="font-mono text-sm font-semibold text-text-primary">Architecture</h3>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        {architecture.nodes.map((node, index) => (
          <div key={node.id} className="flex items-center gap-3">
            <div className="border border-border bg-bg2 px-3 py-2 font-mono text-xs text-text-primary">
              {node.label}
            </div>
            {index < architecture.nodes.length - 1 ? (
              <span aria-hidden="true" className="text-accent text-lg">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <pre className="mt-6 overflow-x-auto border border-border bg-bg px-4 py-3 font-mono text-sm leading-6 text-text-secondary">
        {architecture.dataFlow}
      </pre>
      <p className="mt-4 text-sm text-text-muted">{`// Architecture shows logical data flow. See source code for implementation.`}</p>
    </section>
  );
}
