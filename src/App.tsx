import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ViaggioPage from './pages/ViaggioPage'
import ContattiPage from './pages/ContattiPage'

type Page = 'home' | 'viaggio' | 'contatti'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <div className="flex-1">
        {currentPage === 'home'     && <HomePage     onNavigate={handleNavigate} />}
        {currentPage === 'viaggio'  && <ViaggioPage  onNavigate={handleNavigate} />}
        {currentPage === 'contatti' && <ContattiPage />}
      </div>

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
