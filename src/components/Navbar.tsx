import { useAppDispatch, useAppSelector } from '../hooks';
import { setPage } from '../store/slices/uiSlice';
import type { Page } from '../types';

const LINKS: { label: string; page: Page }[] = [
  { label: 'home', page: 'home' },
  { label: 'projects', page: 'projects' },
  { label: 'experience', page: 'experience' },
  { label: 'contact', page: 'contact' },
];

export default function Navbar() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((s) => s.ui.currentPage);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-[18px] border-b border-border bg-bg/85 backdrop-blur-xl">
      <div className="text-xl font-black gradient-text tracking-tight">
        FARHAN
      </div>

      <div className="flex gap-1">
        {LINKS.map(({ label, page }) => (
          <button
            key={page}
            onClick={() => dispatch(setPage(page))}
            className={`px-[14px] py-[7px] rounded-md font-mono text-[11px] tracking-wide transition-all duration-200
              ${
                currentPage === page
                  ? 'text-accent bg-bg-3'
                  : 'text-muted hover:text-white hover:bg-bg-3'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        onClick={() => dispatch(setPage('contact'))}
        className="bg-accent text-white px-5 py-[9px] rounded-lg font-cabinet font-bold text-xs tracking-wide transition-all duration-200 glow-accent hover:-translate-y-px"
      >
        Hire Me ↗
      </button>
    </nav>
  );
}
