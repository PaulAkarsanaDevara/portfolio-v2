import { useAppDispatch, useAppSelector } from '../hooks'
import { toggleExperience } from '../store/slices/projectsSlice'
import { EXPERIENCES } from '../data'

const TYPE_CONFIG: Record<string, { label: string; style: string }> = {
  'Full-time': { label: 'Full-time', style: 'bg-accent/10 text-accent border-accent/20'       },
  'Contract':  { label: 'Contract',  style: 'bg-accent-2/10 text-accent-2 border-accent-2/20' },
  '':          { label: 'Freelance', style: 'bg-accent-3/10 text-accent-3 border-accent-3/20' },
}

export default function Experience() {
  const dispatch = useAppDispatch()
  const openId = useAppSelector((s) => s.projects.openExperienceId)

  return (
    <div className="animate-fade-up max-w-3xl mx-auto px-10 py-14">

      {/* Header */}
      <p className="font-mono text-[10px] text-muted tracking-[1.5px] mb-3">WORK HISTORY</p>
      <h2 className="text-[clamp(36px,6vw,52px)] font-black tracking-[-2px] mb-3">
        My <span className="gradient-text">Experience</span>
      </h2>
      <p className="font-mono text-[12px] text-muted mb-12">
        {'// '}
        <span className="text-accent-2">{EXPERIENCES.length}</span>
        {' roles across product companies & freelance'}
      </p>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

        <div className="space-y-5">
          {EXPERIENCES.map((exp, i) => {
            const isOpen = openId === exp.id
            const typeCfg = TYPE_CONFIG[exp.type] ?? TYPE_CONFIG['']

            return (
              <div key={exp.id} className="relative pl-14">

                {/* Timeline dot */}
                <div className={`absolute left-[11px] top-[22px] w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-all duration-300
                  ${isOpen
                    ? 'bg-accent border-accent shadow-[0_0_14px_rgba(167,139,250,0.5)]'
                    : 'bg-bg-2 border-border'
                  }`}
                >
                  <span className="font-mono text-[8px] font-black text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`group bg-bg-2 border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300
                    ${isOpen
                      ? 'border-accent/40 shadow-[0_8px_32px_rgba(167,139,250,0.1)]'
                      : 'border-border hover:border-border/80 hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)]'
                    }`}
                  onClick={() => dispatch(toggleExperience(exp.id))}
                >
                  {/* Top accent line when open */}
                  <div className={`h-[2px] bg-gradient-to-r from-accent to-accent-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

                  {/* Card header */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">

                        {/* Company avatar + name */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-[13px] shrink-0 transition-all duration-300
                            ${isOpen ? 'bg-accent text-white' : 'bg-bg-3 border border-border text-muted group-hover:border-accent/30 group-hover:text-accent'}`}
                          >
                            {exp.company[0]}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`font-extrabold text-[15px] tracking-tight transition-colors duration-200 ${isOpen ? 'text-accent' : 'group-hover:text-white'}`}>
                                {exp.company}
                              </span>
                              <span className={`inline-flex items-center font-mono text-[9px] tracking-widest px-2 py-0.5 rounded-full border font-medium ${typeCfg.style}`}>
                                {typeCfg.label}
                              </span>
                            </div>
                            <p className="font-mono text-[11px] text-muted mt-0.5">{exp.period}</p>
                          </div>
                        </div>

                        {/* Role */}
                        <h3 className="text-[16px] font-extrabold tracking-tight">
                          {exp.role}
                        </h3>
                      </div>

                      {/* Chevron */}
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 mt-1 transition-all duration-300
                        ${isOpen
                          ? 'bg-accent/10 border-accent/30 text-accent'
                          : 'bg-bg-3 border-border text-muted group-hover:border-accent/30 group-hover:text-accent'
                        }`}
                      >
                        <span className={`text-[10px] transition-transform duration-300 inline-block ${isOpen ? 'rotate-180' : ''}`}>
                          ▾
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expandable body */}
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="h-px bg-border mx-5" />
                    <div className="p-5 pt-4">
                      <p className="text-[13px] text-white/70 leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techs.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] text-muted bg-bg-3 border border-border px-2.5 py-1 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}
