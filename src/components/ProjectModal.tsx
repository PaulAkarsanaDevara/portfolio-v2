import { useEffect } from 'react';
import type { Project } from '../types';

const CATEGORY_CONFIG: Record<
  string,
  { label: string; dot: string; badge: string }
> = {
  web: {
    label: 'Web App',
    dot: 'bg-accent',
    badge: 'bg-accent/10 text-accent border-accent/20',
  },
  mobile: {
    label: 'Mobile',
    dot: 'bg-accent-2',
    badge: 'bg-accent-2/10 text-accent-2 border-accent-2/20',
  },
  backend: {
    label: 'Backend',
    dot: 'bg-accent-3',
    badge: 'bg-accent-3/10 text-accent-3 border-accent-3/20',
  },
};

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const cfg = CATEGORY_CONFIG[project.category];

  useEffect(() => {
    document.body.classList.add('modal-open');

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ animation: 'backdropIn 0.2s ease both' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-bg-2 border border-border rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
        style={{ animation: 'modalIn 0.25s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-accent via-accent-2 to-accent-3" />

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-bg-3 border border-border flex items-center justify-center text-3xl shrink-0">
              {project.icon}
            </div>
            <div>
              <h2 className="text-[20px] font-extrabold tracking-tight leading-tight">
                {project.title}
              </h2>
              <div className="flex items-center gap-2 mt-1.5">
                <span
                  className={`inline-flex items-center gap-1.5 font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-full border font-medium ${cfg.badge}`}
                >
                  <span className={`w-1 h-1 rounded-full ${cfg.dot}`} />
                  {cfg.label.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-muted">
                  {project.year}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-bg-3 border border-border flex items-center justify-center text-muted hover:text-white hover:border-accent/40 transition-all duration-200 shrink-0 ml-2"
          >
            ✕
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mx-6" />

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Description */}
          <div>
            <p className="font-mono text-[10px] text-muted tracking-[1.5px] mb-2">
              DESCRIPTION
            </p>
            <p className="text-[14px] text-white/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <p className="font-mono text-[10px] text-muted tracking-[1.5px] mb-2.5">
              TECH STACK
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-muted bg-bg-3 border border-border px-3 py-1.5 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border bg-bg-3/40">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg font-cabinet font-semibold text-[12px] text-muted border border-border bg-bg-3 hover:text-white transition-colors duration-200"
          >
            Close
          </button>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg font-cabinet font-bold text-[12px] bg-accent text-white glow-accent hover:-translate-y-px transition-all duration-200"
            >
              Visit Project ↗
            </a>
          ) : (
            <button
              disabled
              className="px-5 py-2 rounded-lg font-cabinet font-bold text-[12px] bg-bg-4 text-muted border border-border cursor-not-allowed"
            >
              No Live Demo
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes backdropIn {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(12px) }
          to   { opacity: 1; transform: scale(1) translateY(0) }
        }
      `}</style>
    </div>
  );
}
