import type { Project } from '../types'

const CATEGORY_CONFIG: Record<string, { label: string; dot: string; badge: string; glow: string }> = {
  web:     { label: 'Web App',  dot: 'bg-accent',   badge: 'bg-accent/10 text-accent border-accent/20',   glow: 'from-accent/[0.06]'   },
  mobile:  { label: 'Mobile',   dot: 'bg-accent-2',  badge: 'bg-accent-2/10 text-accent-2 border-accent-2/20', glow: 'from-accent-2/[0.06]' },
  backend: { label: 'Backend',  dot: 'bg-accent-3',  badge: 'bg-accent-3/10 text-accent-3 border-accent-3/20', glow: 'from-accent-3/[0.06]' },
}

interface Props { project: Project; delay?: number; onClick?: () => void }

export default function ProjectCard({ project, delay = 0, onClick }: Props) {
  const cfg = CATEGORY_CONFIG[project.category]

  return (
    <div
      className="group relative bg-bg-2 border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-fade-up flex flex-col"
      style={{ animationDelay: `${delay}s` }}
      onClick={onClick}
    >
      {/* Hover glow overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cfg.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">

        {/* Top row: category badge + year + external link */}
        <div className="flex items-center justify-between mb-5">
          <span className={`inline-flex items-center gap-1.5 font-mono text-[9px] tracking-widest px-[10px] py-[4px] rounded-full border font-medium ${cfg.badge}`}>
            <span className={`w-1 h-1 rounded-full ${cfg.dot}`} />
            {cfg.label.toUpperCase()}
          </span>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-muted">{project.year}</span>
            <span className="w-7 h-7 rounded-lg bg-bg-3 border border-border flex items-center justify-center text-muted opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:border-accent/40 group-hover:text-accent text-xs">
              ↗
            </span>
          </div>
        </div>

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-bg-3 border border-border flex items-center justify-center text-2xl mb-4 transition-transform duration-200 group-hover:scale-110">
          {project.icon}
        </div>

        {/* Title + description */}
        <h3 className="text-[16px] font-extrabold tracking-tight mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="font-mono text-[11px] text-muted leading-relaxed font-light flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] text-muted bg-bg-3 border border-border px-2.5 py-1 rounded-md transition-colors duration-200 group-hover:border-border/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: view project bar */}
      <div className="px-6 py-3 border-t border-border bg-bg-3/40 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
        <span className="font-mono text-[10px] text-accent tracking-wide">View Project</span>
        <span className="text-accent text-xs">→</span>
      </div>
    </div>
  )
}
