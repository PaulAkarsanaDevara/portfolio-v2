import { useAppDispatch, useAppSelector } from '../hooks'
import { setFilter, selectFilteredProjects } from '../store/slices/projectsSlice'
import ProjectCard from '../components/ProjectCard'
import type { ProjectCategory } from '../types'

const FILTERS: { label: string; value: ProjectCategory }[] = [
  { label: 'all', value: 'all' },
  { label: 'web app', value: 'web' },
  { label: 'mobile', value: 'mobile' },
  { label: 'backend', value: 'backend' },
]

export default function Projects() {
  const dispatch = useAppDispatch()
  const activeFilter = useAppSelector((s) => s.projects.activeFilter)
  const filtered = selectFilteredProjects(activeFilter)

  return (
    <div className="animate-fade-up">
      <div className="px-10 pt-14 pb-8">
        <h2 className="text-[42px] font-black tracking-[-1.5px] mb-2">Projects</h2>
        <p className="font-mono text-[12px] text-muted">
          // <span className="text-accent-2">{filtered.length}</span> projects across web, mobile &amp; backend
        </p>
      </div>

      <div className="flex gap-2 px-10 pb-8 flex-wrap">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => dispatch(setFilter(value))}
            className={`px-[18px] py-[7px] rounded-full font-mono text-[11px] border transition-all duration-200
              ${activeFilter === value
                ? 'bg-accent/12 border-accent/40 text-accent'
                : 'bg-bg-3 border-border text-muted hover:text-white'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 px-10 pb-14">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.06} />
        ))}
      </div>
    </div>
  )
}
