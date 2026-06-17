import './Problems.css'

const ICO = ({ d, viewBox = "0 0 24 24" }) => (
  <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
)

const PROBLEMS = [
  {
    icon: <ICO d={<><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></>} />,
    title: 'No tienes web o no convierte',
    desc: 'Tus clientes buscan online y no te encuentran, o llegan a tu web y se van sin contactar.',
  },
  {
    icon: <ICO d={<><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></>} />,
    title: 'Tu web no aparece en Google',
    desc: 'Sin presencia en buscadores, los clientes van directo a la competencia.',
  },
  {
    icon: <ICO d={<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>} />,
    title: 'Sin formularios que capturen leads',
    desc: 'Nadie sabe cómo contactarte. No hay un camino claro para que el cliente dé el siguiente paso.',
  },
  {
    icon: <ICO d={<><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></>} />,
    title: 'Tu web no funciona bien en móvil',
    desc: 'Más del 70% del tráfico llega desde móvil. Si tu web no está adaptada, pierdes clientes a diario.',
  },
  {
    icon: <ICO d={<><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></>} />,
    title: 'No sabes por qué no te contactan',
    desc: 'Tu web existe pero no convierte. El problema puede ser el diseño, el mensaje o el proceso.',
  },
  {
    icon: <ICO d={<><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>} />,
    title: 'Tu web tarda demasiado en cargar',
    desc: 'Cada segundo de espera reduce las conversiones. Una web lenta pierde el 50% de visitas.',
  },
]

export default function Problems() {
  return (
    <section className="problems section section--alt">
      <div className="container">
        <div className="section-header reveal">
          <h2>Problemas que le cuestan clientes a tu negocio cada día</h2>
          <p>Si reconoces alguno de estos puntos, tu negocio tiene oportunidades claras que una buena web puede resolver.</p>
        </div>

        <div className="problems__grid">
          {PROBLEMS.map((p, i) => (
            <div key={i} className={`problem-card reveal reveal--d${(i % 3) + 1}`}>
              <span className="problem-card__icon">{p.icon}</span>
              <div>
                <h3 className="problem-card__title">{p.title}</h3>
                <p className="problem-card__desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="problems__cta reveal">
          <div className="problems__cta-text">
            <strong>¿Tienes alguno de estos problemas?</strong>
            <p>El diagnóstico gratuito te ayuda a identificar qué necesita tu web para captar más clientes.</p>
          </div>
          <a
            href="#formulario"
            className="btn btn-dark btn-lg"
            onClick={e => { e.preventDefault(); document.querySelector('#formulario')?.scrollIntoView({ behavior:'smooth' }) }}
          >
            Solicitar diagnóstico gratis
          </a>
        </div>
      </div>
    </section>
  )
}
