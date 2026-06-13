import './Problems.css'

const PROBLEMS = [
  { icon:'🌐', title:'No tienes web o no convierte',      desc:'Tus clientes buscan online y no te encuentran, o llegan a tu web y se van sin contactar.' },
  { icon:'📵', title:'Tu web no aparece en Google',       desc:'Sin presencia en buscadores, los clientes van directo a la competencia.' },
  { icon:'📋', title:'Sin formularios que capturen leads', desc:'Nadie sabe cómo contactarte. No hay un camino claro para que el cliente dé el siguiente paso.' },
  { icon:'📱', title:'Tu web no funciona bien en móvil',  desc:'Más del 70% del tráfico llega desde móvil. Si tu web no está adaptada, pierdes clientes a diario.' },
  { icon:'💬', title:'No sabes por qué no te contactan',  desc:'Tu web existe pero no convierte. El problema puede ser el diseño, el mensaje o el proceso.' },
  { icon:'⚡', title:'Tu web tarda demasiado en cargar',  desc:'Cada segundo de espera reduce las conversiones. Una web lenta pierde el 50% de visitas.' },
]

export default function Problems() {
  return (
    <section className="problems section section--alt">
      <div className="container">
        <div className="section-header">
          <div className="badge">¿Te identificas?</div>
          <h2>Problemas que le cuestan clientes a tu negocio cada día</h2>
          <p>Si reconoces alguno de estos puntos, tu negocio tiene oportunidades claras que una buena web puede resolver.</p>
        </div>

        <div className="problems__grid">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="problem-card">
              <span className="problem-card__icon">{p.icon}</span>
              <h3 className="problem-card__title">{p.title}</h3>
              <p className="problem-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="problems__cta">
          <div className="problems__cta-text">
            <strong>¿Tienes alguno de estos problemas?</strong>
            <p>El diagnóstico gratuito te ayuda a identificar exactamente qué necesita tu web para captar más clientes.</p>
          </div>
          <a href="#formulario" className="btn btn-dark btn-lg" onClick={e => { e.preventDefault(); document.querySelector('#formulario')?.scrollIntoView({ behavior:'smooth' }) }}>
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  )
}
