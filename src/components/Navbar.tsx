import { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page: Page) => {
    dispatch(setPage(page));
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 md:px-10 py-[18px]">
          {/* Logo */}
          <div className="text-xl font-black gradient-text tracking-tight">
            FARHAN
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex gap-1">
            {LINKS.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => navigate(page)}
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

          {/* Desktop CTA */}
          <button
            onClick={() => navigate('contact')}
            className="hidden md:block bg-accent text-white px-5 py-[9px] rounded-lg font-cabinet font-bold text-xs tracking-wide transition-all duration-200 glow-accent hover:-translate-y-px"
          >
            Hire Me ↗
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-9 h-9 rounded-lg bg-bg-3 border border-border flex flex-col items-center justify-center gap-[5px] transition-colors duration-200 hover:border-accent/40"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-4 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
            />
            <span
              className={`block w-4 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-4 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="border-t border-border px-6 py-4 flex flex-col gap-1">
            {LINKS.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={`w-full text-left px-4 py-3 rounded-lg font-mono text-[12px] tracking-wide transition-all duration-200
                  ${
                    currentPage === page
                      ? 'text-accent bg-accent/8 border border-accent/20'
                      : 'text-muted hover:text-white hover:bg-bg-3'
                  }`}
              >
                {currentPage === page && (
                  <span className="mr-2 text-accent">▸</span>
                )}
                {label}
              </button>
            ))}

            <div className="pt-2 mt-1 border-t border-border">
              <button
                onClick={() => navigate('contact')}
                className="w-full bg-accent text-white py-3 rounded-lg font-cabinet font-bold text-[13px] transition-all duration-200 glow-accent"
              >
                Hire Me ↗
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
