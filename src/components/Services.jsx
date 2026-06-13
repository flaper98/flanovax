import './Services.css'

const SERVICES = [
  { icon:'🚀', title:'Landing pages de conversión',    desc:'Una sola página enfocada en un objetivo: que el visitante te contacte o compre. CTA claro, formulario visible y diseño que convence.', featured:true },
  { icon:'🌐', title:'Páginas web personalizadas',     desc:'Web completa con múltiples secciones, diseño a medida y tu identidad visual. Lista para posicionar y captar.', featured:false },
  { icon:'📱', title:'Diseño 100% responsive',         desc:'Tu web funciona perfectamente en móvil, tablet y escritorio. Más del 70% de tus clientes llegan desde el móvil.', featured:false },
  { icon:'📋', title:'Formularios de captación',       desc:'Formularios conectados a email y WhatsApp. Recibes cada solicitud al instante, sin perder ningún contacto.', featured:false },
  { icon:'✨', title:'Optimización visual y comercial', desc:'Revisamos tu web actual o la nueva, mejoramos la jerarquía visual, el copy y los CTA para aumentar la conversión.', featured:false },
  { icon:'💼', title:'Presencia digital profesional',  desc:'Logo, paleta de colores, identidad visual. Que tu negocio inspire confianza desde el primer contacto online.', featured:false },
  { icon:'⚡', title:'Web rápida y optimizada',        desc:'Carga rápida, código limpio, optimización básica de SEO y rendimiento. Una web lenta pierde clientes.', featured:false },
  { icon:'🔗', title:'Integraciones digitales',        desc:'WhatsApp, email, Google Analytics, píxel de Facebook, Google Ads y más. Tu web conectada con tus herramientas.', featured:false },
]

export default function Services() {
  const goto = e => { e.preventDefault(); document.querySelector('#formulario')?.scrollIntoView({ behavior:'smooth' }) }
  return (
    <section className="services section section--dark" id="servicios">
      <div className="container">
        <div className="section-header">
          <div className="badge badge--dark">Servicios</div>
          <h2>Lo que diseñamos y desarrollamos para tu negocio</h2>
          <p>Cada solución está pensada para que tu web trabaje por ti: capte contactos, genere confianza y convierta visitas en clientes reales.</p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div key={i} className={`svc-card ${s.featured ? 'svc-card--featured' : ''}`}>
              {s.featured && <span className="svc-card__badge">⭐ Más solicitado</span>}
              <span className="svc-card__icon">{s.icon}</span>
              <h3 className="svc-card__title">{s.title}</h3>
              <p className="svc-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="services__cta">
          <p>¿No sabes qué necesitas exactamente?</p>
          <a href="#formulario" className="btn btn-gold btn-lg" onClick={goto}>
            Pídenos el diagnóstico y lo vemos juntos
          </a>
        </div>
      </div>
    </section>
  )
}
