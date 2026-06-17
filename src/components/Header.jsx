import { useState, useEffect } from 'react'
import logo from '../assets/logo-flanovax.png'
import './Header.css'

const NAV = [
  { label: 'Servicios',     href: '#servicios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'FAQ',           href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const goto = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`hdr ${scrolled ? 'hdr--scrolled' : ''}`}>
      <div className="container hdr__inner">
        <a href="#" className="hdr__logo" onClick={e => { e.preventDefault(); window.scrollTo({ top:0, behavior:'smooth' }) }}>
          <img src={logo} alt="FLANOVAX" className="hdr__logo-img" />
        </a>

        <nav className="hdr__nav" aria-label="Navegación principal">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="hdr__link" onClick={e => goto(e, n.href)}>
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#formulario" className="btn btn-gold btn-sm hdr__cta" onClick={e => goto(e,'#formulario')}>
          Diagnóstico gratis
        </a>

        <button
          className={`hdr__burger ${open ? 'hdr__burger--open' : ''}`}
          onClick={() => setOpen(p => !p)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="hdr__mobile" role="navigation" aria-label="Menú móvil">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="hdr__mobile-link" onClick={e => goto(e, n.href)}>
              {n.label}
            </a>
          ))}
          <a href="#formulario" className="btn btn-gold" style={{justifyContent:'center'}} onClick={e => goto(e,'#formulario')}>
            Solicitar diagnóstico gratis
          </a>
        </div>
      )}
    </header>
  )
}
