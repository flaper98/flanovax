import './Benefits.css'

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: 'Diseñada para convertir',
    desc: 'Cada elemento de tu web tiene un propósito: llevar al visitante a contactarte. Sin distracciones, con un camino claro.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Lista en 7 a 14 días',
    desc: 'Sin esperas de meses. Entregamos tu web funcionando rápido para que empieces a captar clientes cuanto antes.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Identidad visual propia',
    desc: 'Tu web no se parece a la de nadie. Creamos un diseño con tu paleta, tu tono y tu personalidad de marca.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Responsive desde el primer pixel',
    desc: 'Diseñada primero para móvil. Tu web se ve y funciona perfectamente en cualquier dispositivo.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
      </svg>
    ),
    title: 'Formularios que realmente llegan',
    desc: 'Cada solicitud llega directamente a tu email o WhatsApp. Nunca perderás un contacto interesado.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: 'Fácil de actualizar',
    desc: 'Te entregamos la web con acceso sencillo para cambiar textos, imágenes o precios cuando lo necesites.',
  },
]

export default function Benefits() {
  return (
    <section className="benefits section section--alt">
      <div className="container">
        <div className="section-header reveal">
          <h2>Por qué FLANOVAX diseña webs que convierten</h2>
          <p>No hacemos webs genéricas. Cada proyecto está pensado para que tu negocio capte más clientes desde el primer día.</p>
        </div>
        <div className="benefits__grid">
          {BENEFITS.map((b, i) => (
            <div key={i} className={`benefit-card reveal reveal--d${(i % 3) + 1}`}>
              <span className="benefit-card__icon">{b.icon}</span>
              <div>
                <h3 className="benefit-card__title">{b.title}</h3>
                <p className="benefit-card__desc">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
