import './HowItWorks.css'

const STEPS = [
  {
    num: '01',
    title: 'Diagnóstico de tu negocio',
    desc: 'Analizamos tu situación: a quién te diriges, qué te diferencia y qué tipo de web necesitas para captar más clientes. Sin tecnicismos.',
    tag: 'Gratis y sin compromiso',
  },
  {
    num: '02',
    title: 'Diseño y desarrollo',
    desc: 'Creamos tu web desde cero con identidad propia, copy orientado a conversión, formulario de captación y diseño responsive.',
    tag: 'Entrega en 7-14 días',
  },
  {
    num: '03',
    title: 'Tu web lista para vender',
    desc: 'Te entregamos la web funcionando, con formularios conectados y todo configurado. Empiezas a recibir contactos desde el primer día.',
    tag: 'Resultados desde el día 1',
  },
]

export default function HowItWorks() {
  const goto = e => {
    e.preventDefault()
    document.querySelector('#formulario')?.scrollIntoView({ behavior:'smooth' })
  }

  return (
    <section className="hiw section" id="como-funciona">
      <div className="container">
        <div className="section-header reveal">
          <div className="badge">Proceso</div>
          <h2>Tu web lista en 3 pasos</h2>
          <p>Un proceso claro y directo: desde el diagnóstico hasta tener tu web captando clientes reales.</p>
        </div>

        <div className="hiw__steps">
          {STEPS.map((s, i) => (
            <div key={i} className={`hiw-step reveal reveal--d${i + 1}`}>
              <div className="hiw-step__num-wrap">
                <span className="hiw-step__num">{s.num}</span>
                {i < STEPS.length - 1 && <div className="hiw-step__connector" aria-hidden="true" />}
              </div>
              <div className="hiw-step__content">
                <h3 className="hiw-step__title">{s.title}</h3>
                <p className="hiw-step__desc">{s.desc}</p>
                <span className="hiw-step__tag">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {s.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="hiw__cta reveal">
          <a href="#formulario" className="btn btn-gold btn-lg" onClick={goto}>
            Solicitar diagnóstico gratis
          </a>
        </div>
      </div>
    </section>
  )
}
