import { Compass, Instagram, Mail, Phone, MapPin } from 'lucide-react'

interface FooterProps {
  onNavigate: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-900 text-cream-200">
      <div className="max-w-6xl mx-auto px-5 md:px-12 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Compass size={20} className="text-gold-500" />
              <span className="font-serif text-cream-50 tracking-widest text-sm uppercase">
                S.A.L.T.
              </span>
            </div>
            <p className="text-sm text-cream-300 leading-relaxed font-light">
              Studio Architettura Laura Trevisan
            </p>
            <p className="text-xs text-cream-300/60 leading-relaxed">
              Progettista architettonico con vent'anni di esperienza nel residenziale di qualità in tutto il Veneto.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold-500 font-sans">Pagine</h4>
            <nav className="space-y-2">
              {[
                { id: 'home',     label: 'Chi Sono' },
                { id: 'viaggio',  label: 'Il Viaggio' },
                { id: 'contatti', label: 'Contatti' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="block text-sm text-cream-300 hover:text-gold-300 transition-colors tracking-wider"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold-500 font-sans">Contatti</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@lauratrevisan.it"
                className="flex items-center gap-2.5 text-sm text-cream-300 hover:text-gold-300 transition-colors"
              >
                <Mail size={14} className="shrink-0" />
                info@lauratrevisan.it
              </a>
              <a
                href="tel:+39XXXXXXXXXX"
                className="flex items-center gap-2.5 text-sm text-cream-300 hover:text-gold-300 transition-colors"
              >
                <Phone size={14} className="shrink-0" />
                +39 XXX XXX XXXX
              </a>
              <div className="flex items-start gap-2.5 text-sm text-cream-300">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>Cologna Veneta · Veneto</span>
              </div>
              <a
                href="https://www.instagram.com/lauratrevisan639/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-cream-300 hover:text-gold-300 transition-colors"
              >
                <Instagram size={14} className="shrink-0" />
                @lauratrevisan639
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-navy-700 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream-300/50">
          <span>© {new Date().getFullYear()} S.A.L.T. – Studio Architettura Laura Trevisan</span>
          <span className="tracking-wider">P.IVA XXXXXXXXXXXXXXX</span>
        </div>
      </div>
    </footer>
  )
}
