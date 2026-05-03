import { useEffect, useRef } from 'react';
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiGraphql,
  SiDocker,
  SiRedis,
  SiFigma,
  SiGit,
} from 'react-icons/si';
import { TbBrandAws } from 'react-icons/tb';
import { FaEnvelope, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { useAppDispatch } from '../hooks';
import { setPage } from '../store/slices/uiSlice';
import { CONTACT_LINKS } from '../data';

const TECH_STACK: { name: string; icon: IconType; color: string }[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Prisma', icon: SiPrisma, color: '#5a67d8' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: TbBrandAws, color: '#FF9900' },
  { name: 'Redis', icon: SiRedis, color: '#FF4438' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

const SOCIAL_ICONS: Record<string, IconType> = {
  Email: FaEnvelope,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Twitter: FaTwitter,
};

function TechCard({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: IconType;
  color: string;
}) {
  return (
    <div
      className="group bg-bg-2 border border-border rounded-xl p-4 flex flex-col items-center gap-2.5 cursor-default transition-all duration-200 hover:-translate-y-1 hover:bg-bg-3"
      style={{ '--brand': color } as React.CSSProperties}
    >
      <Icon
        size={28}
        className="text-muted transition-colors duration-200 group-hover:text-[var(--brand)]"
      />
      <span className="font-mono text-[10px] text-muted group-hover:text-white transition-colors duration-200 text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export default function Home() {
  const dispatch = useAppDispatch();

  return (
    <div className="animate-fade-up max-w-4xl mx-auto">
      {/* Hero */}
      <section className="px-10 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 border border-border bg-bg-2 px-3 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse2" />
          <span className="font-mono text-[11px] text-muted">
            Available for work
          </span>
        </div>

        <h1 className="text-[clamp(48px,8vw,88px)] font-black leading-[0.95] tracking-[-3px] mb-6">
          Hello, I'm
          <br />
          <span className="gradient-text">Farhan</span>
        </h1>

        <p className="font-mono text-[13px] text-muted leading-[1.8] max-w-[520px] mb-3">
          {'// Full-Stack Developer crafting '}
          <span className="text-accent">fast</span>
          {', '}
          <span className="text-accent">accessible</span>
          {', and '}
          <span className="text-accent">beautiful</span>
          {' web experiences.'}
        </p>
        <p className="font-mono text-[12px] text-muted/60 mb-9">
          React · TypeScript · Node.js · PostgreSQL
        </p>

        <div className="flex gap-3 flex-wrap mb-7">
          <button
            onClick={() => dispatch(setPage('projects'))}
            className="bg-accent text-white px-7 py-[13px] rounded-lg font-cabinet font-bold text-[13px] transition-all duration-200 glow-accent hover:-translate-y-px hover:bg-accent/90"
          >
            View My Work ↗
          </button>
          <button
            onClick={() => dispatch(setPage('contact'))}
            className="bg-bg-3 text-white border border-border px-7 py-[13px] rounded-lg font-cabinet font-semibold text-[13px] transition-all duration-200 hover:border-accent hover:text-accent"
          >
            Get in Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-muted tracking-[1.5px]">
            FIND ME ON
          </span>
          <div className="flex gap-2">
            {CONTACT_LINKS.map((link) => {
              const Icon = SOCIAL_ICONS[link.title];
              if (!Icon) return null;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  className="w-9 h-9 rounded-lg bg-bg-2 border border-border flex items-center justify-center text-muted transition-all duration-200 hover:text-white hover:border-accent/40 hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-10 pb-16">
        <p className="font-mono text-[10px] text-muted tracking-[1.5px] mb-4">
          TECH STACK
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(88px,1fr))] gap-3">
          {TECH_STACK.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </section>
    </div>
  );
}
