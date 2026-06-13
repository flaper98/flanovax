import './Testimonials.css'

const ITEMS = [
  {
    name: 'Laura Méndez',
    role: 'Consultora de marca',
    company: 'Studio Forma',
    initial: 'LM',
    color: '#c9a84c',
    stars: 5,
    quote: 'Antes respondía consultas una a una por Instagram. Ahora tengo una landing page con formulario y recibo solicitudes organizadas cada día. En el primer mes recuperé lo invertido.',
  },
  {
    name: 'Carlos Ibáñez',
    role: 'Director comercial',
    company: 'CIB Servicios B2B',
    initial: 'CI',
    color: '#9a7834',
    stars: 5,
    quote: 'Teníamos una web que no convertía nada. FLANOVAX la rediseñó con un enfoque claro y ahora recibimos 5 solicitudes de presupuesto semanales. Diferencia brutal.',
  },
  {
    name: 'Ana Rojas',
    role: 'Infoproductora',
    company: 'Bienestar Digital',
    initial: 'AR',
    color: '#c9a84c',
    stars: 5,
    quote: 'Me hicieron la landing de lanzamiento de mi curso y en 3 semanas tenía 200 personas en lista de espera. El diseño, el copy y el formulario funcionaron perfecto desde el día uno.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <div className="badge">Testimonios</div>
          <h2>Lo que dicen los negocios que ya tienen su web con FLANOVAX</h2>
          <p>Negocios reales que tomaron la decisión de tener una presencia digital que trabaje por ellos.</p>
        </div>
        <div className="testi__grid">
          {ITEMS.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-card__stars">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 14 14" fill="#c9a84c">
                    <path d="M7 1l1.8 3.6L13 5.6l-3 2.9.7 4.1L7 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.9L7 1z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="testi-card__quote">"{t.quote}"</blockquote>
              <div className="testi-card__author">
                <span className="testi-card__av" style={{ background:`linear-gradient(135deg, ${t.color}30, ${t.color}18)`, border:`1px solid ${t.color}28`, color:t.color }}>
                  {t.initial}
                </span>
                <div>
                  <p className="testi-card__name">{t.name}</p>
                  <p className="testi-card__role">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
