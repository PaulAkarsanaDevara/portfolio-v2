import { useAppSelector } from './hooks'
import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

export default function App() {
  const currentPage = useAppSelector((s) => s.ui.currentPage)

  return (
    <div className="min-h-screen bg-bg">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        {currentPage === 'home' && <Home />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'experience' && <Experience />}
        {currentPage === 'contact' && <Contact />}
      </main>
      <footer className="border-t border-border px-10 py-6 flex justify-between items-center font-mono text-[11px] text-muted">
        <span>© 2025 Arya Pratama</span>
        <span>Built with React · TypeScript · Redux · Tailwind</span>
      </footer>
    </div>
  )
}
