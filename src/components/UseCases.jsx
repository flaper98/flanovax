import './UseCases.css'

const CASES = [
  {
    type: 'Consultor de marketing',
    before: 'Solo tenía redes sociales. Los posibles clientes llegaban pero no sabían cómo contratar.',
    after: 'Landing page con formulario conectado a WhatsApp. Ahora recibe 5-8 solicitudes por semana.',
    result: '+300% consultas',
  },
  {
    type: 'Clínica de fisioterapia',
    before: 'Web antigua que no cargaba bien en móvil y sin formulario de cita previa.',
    after: 'Nueva web responsive con formulario de cita. Los pacientes agendan directamente.',
    result: '-70% llamadas, +40% citas',
  },
  {
    type: 'Infoproductor / Curso online',
    before: 'Vendía su curso solo desde Instagram con mucho esfuerzo manual.',
    after: 'Landing page de captación con lista de espera. Lanzamiento con 200 inscritos.',
    result: '200 leads en el lanzamiento',
  },
  {
    type: 'Empresa de servicios B2B',
    before: 'Web corporativa genérica. No aparecía en Google ni generaba contactos.',
    after: 'Web con copy orientado a empresas, SEO básico y formulario de presupuesto.',
    result: '+5 solicitudes B2B por semana',
  },
]

export default function UseCases() {
  return (
    <section className="uc section section--alt" id="casos">
      <div className="container">
        <div className="section-header">
          <div className="badge">Casos de uso</div>
          <h2>Negocios que cambiaron sus resultados con su web</h2>
          <p>Cada tipo de negocio tiene necesidades distintas. Así es como una buena web hace la diferencia.</p>
        </div>
        <div className="uc__grid">
          {CASES.map((c, i) => (
            <div key={i} className="uc-card">
              <div className="uc-card__type">{c.type}</div>
              <div className="uc-card__comparison">
                <div className="uc-card__side">
                  <span className="uc-card__tag uc-card__tag--before">Antes</span>
                  <p>{c.before}</p>
                </div>
                <div className="uc-card__arrow">→</div>
                <div className="uc-card__side">
                  <span className="uc-card__tag uc-card__tag--after">Después</span>
                  <p>{c.after}</p>
                </div>
              </div>
              <div className="uc-card__result">{c.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
