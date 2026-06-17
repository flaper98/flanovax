import './Services.css'

const SVCS = [
  {
    featured: true,
    title: 'Landing pages de conversión',
    desc: 'Una sola página enfocada en un objetivo: que el visitante te contacte o compre. CTA claro, formulario visible y diseño que convence desde el primer scroll.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
  },
  {
    title: 'Páginas web personalizadas',
    desc: 'Web completa con múltiples secciones, diseño a medida y tu identidad visual. Lista para posicionar y captar desde el primer día.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    title: 'Diseño 100% responsive',
    desc: 'Tu web funciona perfectamente en móvil, tablet y escritorio. Más del 70% de tus clientes llegan desde el móvil.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
  },
  {
    title: 'Formularios de captación',
    desc: 'Formularios conectados a email y WhatsApp. Recibes cada solicitud al instante, sin perder ningún contacto interesado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    title: 'Web rápida y bien posicionada',
    desc: 'Carga rápida, código limpio, optimización básica de SEO on-page. Una web lenta pierde clientes antes de que lean tu propuesta.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
]

export default function Services() {
  const goto = e => { e.preventDefault(); document.querySelector('#formulario')?.scrollIntoView({ behavior:'smooth' }) }

  return (
    <section className="services section section--dark" id="servicios">
      <div className="container">
        <div className="section-header reveal">
          <h2>Lo que diseñamos para tu negocio</h2>
          <p>Cada solución está pensada para que tu web trabaje por ti: capte contactos, genere confianza y convierta visitas en clientes.</p>
        </div>

        <div className="services__bento reveal">
          {SVCS.map((s, i) => (
            <div key={i} className={`svc-card ${s.featured ? 'svc-card--featured' : ''}`}>
              <span className="svc-card__icon">{s.icon}</span>
              <div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services__cta reveal">
          <p>¿No sabes qué necesitas exactamente?</p>
          <a href="#formulario" className="btn btn-gold btn-lg" onClick={goto}>
            Solicitar diagnóstico gratis
          </a>
        </div>
      </div>
    </section>
  )
}
