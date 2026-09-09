import { useState, type ReactNode } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import type { PageId } from './data/navigation'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import TrainingsPage from './pages/TrainingsPage'

const pages: Record<PageId, (onNavigate: (page: PageId) => void) => ReactNode> = {
  home: (onNavigate) => <HomePage onNavigate={onNavigate} />,
  services: (onNavigate) => <ServicesPage onNavigate={onNavigate} />,
  about: () => <AboutPage />,
  projects: (onNavigate) => <ProjectsPage onNavigate={onNavigate} />,
  trainings: () => <TrainingsPage />,
  contact: () => <ContactPage />,
}

function App() {
  const [activePage, setActivePage] = useState<PageId>('home')

  const handleNavigate = (page: PageId) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <Header activePage={activePage} onNavigate={handleNavigate} />
      {pages[activePage](handleNavigate)}
      <button className="floating-chat" type="button" onClick={() => handleNavigate('contact')} aria-label="Nous contacter">
        <span></span>
      </button>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
