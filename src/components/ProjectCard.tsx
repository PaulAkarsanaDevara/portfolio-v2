import type { Project } from '../types'

const categoryStyle: Record<string, string> = {
  web: 'bg-accent/10 text-accent',
  mobile: 'bg-accent-2/10 text-accent-2',
  backend: 'bg-accent-3/10 text-accent-3',
}

interface Props { project: Project; delay?: number }

export default function ProjectCard({ project, delay = 0 }: Props) {
  return (
    <div
      className="group relative bg-bg-2 border border-border rounded-xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] animate-fade-up overflow-hidden"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-accent-2/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <span className={`inline-block font-mono text-[9px] tracking-widest px-[10px] py-[3px] rounded mb-3 font-medium ${categoryStyle[project.category]}`}>
        {project.category.toUpperCase()}
      </span>

      <div className="flex justify-between items-start mb-4">
        <div className="w-[42px] h-[42px] rounded-[10px] bg-bg-3 flex items-center justify-center text-xl">
          {project.icon}
        </div>
        <span className="font-mono text-[10px] text-muted">{project.year}</span>
      </div>

      <h3 className="text-[17px] font-extrabold tracking-tight mb-2">{project.title}</h3>
      <p className="font-mono text-[11px] text-muted leading-relaxed font-light">{project.description}</p>

      <div className="flex flex-wrap gap-[6px] mt-5">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-[10px] text-muted bg-bg-3 border border-border px-[10px] py-[3px] rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
