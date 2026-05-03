import { useAppDispatch, useAppSelector } from '../hooks'
import { toggleExperience } from '../store/slices/projectsSlice'
import { EXPERIENCES } from '../data'

export default function Experience() {
  const dispatch = useAppDispatch()
  const openId = useAppSelector((s) => s.projects.openExperienceId)

  return (
    <div className="animate-fade-up px-10 py-14">
      <h2 className="text-[42px] font-black tracking-[-1.5px] mb-10">Experience</h2>

      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent" />

        {EXPERIENCES.map((exp) => {
          const isOpen = openId === exp.id
          return (
            <div key={exp.id} className="relative mb-10 cursor-pointer group" onClick={() => dispatch(toggleExperience(exp.id))}>
              {/* Dot */}
              <div className={`absolute -left-[38px] top-2 w-3 h-3 rounded-full border-2 transition-all duration-200
                ${isOpen ? 'bg-accent border-accent shadow-[0_0_16px_rgba(167,139,250,0.5)]' : 'bg-bg border-border group-hover:border-accent'}`}
              />

              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className={`text-[18px] font-extrabold tracking-tight mb-1 transition-colors duration-200 ${isOpen ? 'text-accent' : 'group-hover:text-accent'}`}>
                    {exp.role}
                  </h3>
                  <p className="font-mono text-[12px] text-accent-2 mb-1">
                    {exp.company}{exp.type && ` · ${exp.type}`}
                  </p>
                </div>
                <div className="flex items-start gap-3 shrink-0 mt-1">
                  <span className="font-mono text-[11px] text-muted">{exp.period}</span>
                  <span className={`text-[12px] text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`}>▾</span>
                </div>
              </div>

              {/* Expandable body */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-mono text-[12px] text-muted leading-relaxed font-light pt-4 pb-2">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-[6px] mt-3">
                  {exp.techs.map((tech) => (
                    <span key={tech} className="font-mono text-[10px] text-muted bg-bg-3 border border-border px-[10px] py-[3px] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
