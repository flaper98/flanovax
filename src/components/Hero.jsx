import LeadForm from './LeadForm'
import './Hero.css'

const goto = (e, target) => {
  e.preventDefault()
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Columna de contenido */}
        <div className="hero__content reveal">
          <h1 className="hero__title">
            Tu web pierde{' '}
            <span className="hero__title-gold">leads</span>{' '}
            cada día. La transformamos en 14 días.
          </h1>

          <p className="hero__sub">
            Diseñamos landing pages y webs con un objetivo: que cada visita se convierta en un contacto real.
          </p>

          <div className="hero__actions">
            <a href="#formulario" className="btn btn-gold btn-lg" onClick={e => goto(e,'#formulario')}>
              Solicitar diagnóstico gratis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#como-funciona" className="btn btn-outline btn-lg" onClick={e => goto(e,'#como-funciona')}>
              Ver cómo funciona
            </a>
          </div>
        </div>

        {/* Columna del formulario */}
        <div className="hero__form-col reveal reveal--d2" id="formulario">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
