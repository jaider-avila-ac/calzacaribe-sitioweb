import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { TIENDA_URL } from '../../config'

const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/#nosotros' },
  { label: 'Estilo', to: '/#estilo' },
  { label: 'Contacto', to: '/#contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNavClick = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault()
      const id = to.slice(2)
      if (pathname === '/') {
        scrollTo(id)
      } else {
        window.location.href = to
      }
    } else {
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-5 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src="/logos/imagotico-calzacaribe.svg" alt="Calzacaribe" className="h-8" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <a
              key={to}
              href={to}
              onClick={(e) => handleNavClick(e, to)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={TIENDA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-sm px-4 py-2 transition-colors"
          >
            <ShoppingBag size={15} />
            Ir a la tienda
          </a>
        </div>

        {/* Hamburguesa móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-1"
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-5 pb-5 pt-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <a
              key={to}
              href={to}
              onClick={(e) => handleNavClick(e, to)}
              className="py-2.5 text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer border-b border-white/5"
            >
              {label}
            </a>
          ))}
          <a
            href={TIENDA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-accent text-white font-bold text-sm px-4 py-3"
          >
            <ShoppingBag size={15} />
            Ir a la tienda
          </a>
        </div>
      )}
    </header>
  )
}
