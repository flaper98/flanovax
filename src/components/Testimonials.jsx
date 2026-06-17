import './Testimonials.css'

const ITEMS = [
  {
    name: 'Laura Méndez',
    role: 'Consultora de marca',
    company: 'Studio Forma',
    initial: 'LM',
    stars: 5,
    quote: 'Antes respondía consultas una a una por Instagram. Ahora tengo una landing con formulario y recibo solicitudes organizadas cada día. En el primer mes recuperé lo invertido.',
  },
  {
    name: 'Carlos Ibáñez',
    role: 'Director comercial',
    company: 'CIB Servicios B2B',
    initial: 'CI',
    stars: 5,
    quote: 'Teníamos una web que no convertía nada. FLANOVAX la rediseñó con un enfoque claro y ahora recibimos 5 solicitudes de presupuesto semanales. Diferencia brutal.',
  },
  {
    name: 'Ana Rojas',
    role: 'Infoproductora',
    company: 'Bienestar Digital',
    initial: 'AR',
    stars: 5,
    quote: 'Me hicieron la landing de mi curso y en 3 semanas tenía 200 personas en lista de espera. El diseño, el copy y el formulario funcionaron perfecto desde el día uno.',
  },
]

const STAR = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#c9a84c" aria-hidden="true">
    <path d="M7 1l1.8 3.6L13 5.6l-3 2.9.7 4.1L7 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.9L7 1z"/>
  </svg>
)

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Lo que dicen los negocios que ya tienen su web con FLANOVAX</h2>
          <p>Negocios reales que tomaron la decisión de tener una presencia digital que trabaje por ellos.</p>
        </div>
        <div className="testi__grid">
          {ITEMS.map((t, i) => (
            <div key={i} className={`testi-card reveal reveal--d${i + 1}`}>
              <div className="testi-card__stars" aria-label="5 estrellas">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si}>{STAR}</span>
                ))}
              </div>
              <blockquote className="testi-card__quote">
                <span className="testi-card__quote-mark" aria-hidden="true">"</span>
                {t.quote}
              </blockquote>
              <div className="testi-card__author">
                <span className="testi-card__av" aria-hidden="true">{t.initial}</span>
                <div>
                  <p className="testi-card__name">{t.name}</p>
                  <p className="testi-card__role">{t.role} - {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
