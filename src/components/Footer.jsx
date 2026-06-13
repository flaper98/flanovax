import logo from '../assets/logo-flanovax.png'
import './Footer.css'

const COLS = [
  {
    title: 'Servicios',
    links: [
      { label:'Landing pages',          href:'#servicios' },
      { label:'Páginas web',            href:'#servicios' },
      { label:'Diseño responsive',      href:'#servicios' },
      { label:'Formularios de captación', href:'#servicios' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label:'Cómo funciona', href:'#como-funciona' },
      { label:'Casos de uso',  href:'#casos' },
      { label:'FAQ',           href:'#faq' },
    ],
  },
]

const SOCIAL = [
  {
    label:'LinkedIn',
    href:'#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label:'Instagram',
    href:'#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
]

export default function Footer() {
  const goto = (e, href) => {
    if (href === '#') { e.preventDefault(); return }
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior:'smooth' })
    else window.scrollTo({ top:0, behavior:'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__gold-top" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo-link" onClick={e => { e.preventDefault(); window.scrollTo({ top:0, behavior:'smooth' }) }}>
              <img src={logo} alt="FLANOVAX" className="footer__logo-img" />
            </a>
            <p className="footer__tagline">
              Creamos landing pages y páginas web que convierten visitantes en clientes para negocios y emprendedores.
            </p>
            <div className="footer__social">
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} className="footer__social-btn" aria-label={s.label} onClick={e => e.preventDefault()}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {COLS.map(col => (
            <div key={col.title} className="footer__col">
              <h4 className="footer__col-title">{col.title}</h4>
              <ul>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="footer__link" onClick={e => goto(e, l.href)}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <ul className="footer__contact-list">
              <li>
                <a href="mailto:contacto@flanovax.com" className="footer__contact-link">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
                  contacto@flanovax.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/51921590084" target="_blank" rel="noopener noreferrer" className="footer__contact-link footer__contact-link--wa">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.527a.75.75 0 00.916.916l5.678-1.471A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.952-1.354l-.355-.211-3.671.952.972-3.561-.232-.366A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
                  +51 921 590 084
                </a>
              </li>
              <li>
                <a href="tel:+51921590084" className="footer__contact-link">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.68 19.79 19.79 0 01.06 5.06 2 2 0 012 2.87h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  Llamar al equipo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} FLANOVAX. Todos los derechos reservados.</p>
          <div className="footer__bottom-links">
            <a href="#" onClick={e => e.preventDefault()}>Privacidad</a>
            <a href="#" onClick={e => e.preventDefault()}>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
