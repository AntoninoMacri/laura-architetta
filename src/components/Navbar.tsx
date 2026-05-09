import { useState, useEffect } from 'react'
import { Menu, X, Compass } from 'lucide-react'

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
}

const navLinks = [
  { id: 'home',     label: 'Chi Sono' },
  { id: 'viaggio',  label: 'Il Viaggio' },
  { id: 'contatti', label: 'Contatti' },
]

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (page: string) => {
    onNavigate(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled || menuOpen ? 'bg-navy-900 shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto pl-5 pr-5 md:pl-6 md:pr-2 flex items-center justify-between h-16 md:h-24">
        {/* Logo / brand */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group"
        >
          <Compass
            className="text-gold-500 group-hover:rotate-45 transition-transform duration-500 [filter:drop-shadow(0_1px_4px_rgba(0,0,0,0.8))] w-7 h-7 md:w-12 md:h-12"
          />
          <span className="font-serif text-cream-50 tracking-widest text-lg md:text-3xl uppercase [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">
            S.A.L.T.
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-base md:text-xl tracking-wider uppercase transition-colors duration-200 [text-shadow:0_1px_6px_rgba(0,0,0,0.9)] ${
                currentPage === link.id
                  ? 'text-gold-300 font-medium'
                  : 'text-cream-200 hover:text-gold-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream-100 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mobile-menu-enter bg-navy-900 border-t border-navy-700 px-5 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`w-full text-left py-3 text-sm tracking-wider uppercase transition-colors ${
                currentPage === link.id
                  ? 'text-gold-300 font-medium'
                  : 'text-cream-200'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
