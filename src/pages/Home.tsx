import { useEffect, useRef } from 'react'
import { useAppDispatch } from '../hooks'
import { setPage } from '../store/slices/uiSlice'
import { SKILLS, STATS } from '../data'

function useCountUp(ref: React.RefObject<HTMLSpanElement>, target: number, suffix = '') {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let v = 0
    const step = Math.max(1, Math.ceil(target / 40))
    const timer = setInterval(() => {
      v = Math.min(v + step, target)
      el.textContent = v + suffix
      if (v >= target) clearInterval(timer)
    }, 35)
    return () => clearInterval(timer)
  }, [ref, target, suffix])
}

export default function Home() {
  const dispatch = useAppDispatch()
  const refs = STATS.map(() => useRef<HTMLSpanElement>(null))
  STATS.forEach((s, i) => useCountUp(refs[i], s.value, s.suffix))

  return (
    <div className="animate-fade-up">
      {/* Hero */}
      <section className="px-10 pt-[72px] pb-12">
        <div className="inline-flex items-center gap-[10px] border border-border bg-bg-3 px-4 py-[7px] rounded-full font-mono text-[11px] text-accent-2 mb-8">
          <span className="w-[7px] h-[7px] rounded-full bg-accent-2 animate-pulse2" />
          Open to work · Cikarang, ID
        </div>

        <h1 className="text-[clamp(48px,8vw,88px)] font-black leading-[0.95] tracking-[-3px] mb-6">
          Arya<br />
          <span className="gradient-text">Pratama.</span>
        </h1>

        <p className="font-mono text-[13px] text-muted leading-[1.8] max-w-[520px] mb-9 font-light">
          {'// Full-Stack Developer crafting '}
          <span className="text-accent">fast</span>
          {', '}
          <span className="text-accent">accessible</span>
          {', and '}
          <span className="text-accent">beautiful</span>
          {' web experiences.\nReact · TypeScript · Node.js · PostgreSQL'}
        </p>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => dispatch(setPage('projects'))}
            className="bg-accent text-white px-7 py-[13px] rounded-lg font-cabinet font-bold text-[13px] transition-all duration-200 glow-accent hover:-translate-y-px"
          >
            View My Work
          </button>
          <button
            onClick={() => dispatch(setPage('contact'))}
            className="bg-bg-3 text-white border border-border px-7 py-[13px] rounded-lg font-cabinet font-semibold text-[13px] transition-all duration-200 hover:border-accent hover:text-accent"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Skills */}
      <section className="px-10 pb-14">
        <p className="font-mono text-[10px] text-muted tracking-[1.5px] mb-4">TECH STACK</p>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill, i) => (
            <span
              key={skill}
              className="border border-border bg-bg-2 px-4 py-[6px] rounded-md font-mono text-[11px] text-muted cursor-default transition-all duration-200 hover:text-white hover:border-accent/40 hover:-translate-y-0.5 relative overflow-hidden group"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] to-accent-2/[0.08] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">{skill}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-10 mb-14 grid grid-cols-4 divide-x divide-border border border-border rounded-xl overflow-hidden">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="bg-bg-2 p-6 text-center hover:bg-bg-3 transition-colors duration-200">
            <div className="text-[38px] font-black tracking-[-1.5px] gradient-text">
              <span ref={refs[i]}>0{stat.suffix}</span>
            </div>
            <div className="font-mono text-[10px] text-muted mt-1 tracking-wide">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
