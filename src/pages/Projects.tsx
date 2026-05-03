import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setFilter, selectFilteredProjects } from '../store/slices/projectsSlice'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import type { Project, ProjectCategory } from '../types'
import { PROJECTS } from '../data'

const FILTERS: { label: string; value: ProjectCategory; count: number }[] = [
  { label: 'All',     value: 'all',     count: PROJECTS.length },
  { label: 'Web App', value: 'web',     count: PROJECTS.filter(p => p.category === 'web').length },
  { label: 'Mobile',  value: 'mobile',  count: PROJECTS.filter(p => p.category === 'mobile').length },
  { label: 'Backend', value: 'backend', count: PROJECTS.filter(p => p.category === 'backend').length },
]

export default function Projects() {
  const dispatch = useAppDispatch()
  const activeFilter = useAppSelector((s) => s.projects.activeFilter)
  const filtered = selectFilteredProjects(activeFilter)
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <div className="animate-fade-up max-w-5xl mx-auto">

      {/* Header */}
      <div className="px-10 pt-14 pb-10">
        <p className="font-mono text-[10px] text-muted tracking-[1.5px] mb-3">PORTFOLIO</p>
        <h2 className="text-[clamp(36px,6vw,52px)] font-black tracking-[-2px] mb-3">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="font-mono text-[12px] text-muted max-w-md">
          {'// '}
          <span className="text-accent-2">{filtered.length}</span>
          {' projects across web, mobile & backend'}
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 px-10 pb-8 flex-wrap">
        {FILTERS.map(({ label, value, count }) => (
          <button
            key={value}
            onClick={() => dispatch(setFilter(value))}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[11px] border transition-all duration-200
              ${activeFilter === value
                ? 'bg-accent/12 border-accent/40 text-accent shadow-[0_0_12px_rgba(167,139,250,0.15)]'
                : 'bg-bg-3 border-border text-muted hover:text-white hover:border-border/80'
              }`}
          >
            {label}
            <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium transition-colors duration-200
              ${activeFilter === value ? 'bg-accent/20 text-accent' : 'bg-bg-4 text-muted'}`}
            >
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4 px-10 pb-16">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            delay={i * 0.05}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}

    </div>
  )
}
