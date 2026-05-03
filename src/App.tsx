import loadable from '@loadable/component'
import { useAppSelector } from './hooks'
import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import PageLoader from './components/PageLoader'

const Home       = loadable(() => import('./pages/Home'),       { fallback: <PageLoader /> })
const Projects   = loadable(() => import('./pages/Projects'),   { fallback: <PageLoader /> })
const Experience = loadable(() => import('./pages/Experience'), { fallback: <PageLoader /> })
const Contact    = loadable(() => import('./pages/Contact'),    { fallback: <PageLoader /> })

export default function App() {
  const currentPage = useAppSelector((s) => s.ui.currentPage)

  return (
    <div className="min-h-screen bg-bg">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        {currentPage === 'home'       && <Home />}
        {currentPage === 'projects'   && <Projects />}
        {currentPage === 'experience' && <Experience />}
        {currentPage === 'contact'    && <Contact />}
      </main>
      <footer className="border-t border-border px-10 py-6 flex justify-between items-center font-mono text-[11px] text-muted">
        <span>© 2026 Farhan</span>
      </footer>
    </div>
  )
}
