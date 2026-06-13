import LeadForm from './LeadForm'
import './Hero.css'

const goto = (e, target) => {
  e.preventDefault()
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}

function WebMockup() {
  return (
    <div className="mockup">
      {/* Browser chrome */}
      <div className="mockup__chrome">
        <div className="mockup__dots">
          <span className="mockup__dot mockup__dot--r" />
          <span className="mockup__dot mockup__dot--y" />
          <span className="mockup__dot mockup__dot--g" />
        </div>
        <div className="mockup__url">flanovax.com/tu-landing</div>
        <div className="mockup__reload">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M10 6A4 4 0 116 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M6 0v3l2-1.5L6 0z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Mini site */}
      <div className="mockup__screen">
        {/* Nav */}
        <div className="mockup__nav">
          <div className="mockup__nav-logo" />
          <div className="mockup__nav-links">
            <span /><span /><span />
          </div>
          <div className="mockup__nav-btn" />
        </div>

        {/* Hero area */}
        <div className="mockup__hero">
          <div className="mockup__hero-left">
            <div className="mockup__badge-line" />
            <div className="mockup__h1" />
            <div className="mockup__h1 mockup__h1--short" />
            <div className="mockup__sub" />
            <div className="mockup__sub mockup__sub--short" />
            <div className="mockup__btns">
              <div className="mockup__btn-cta" />
              <div className="mockup__btn-sec" />
            </div>
          </div>
          <div className="mockup__hero-right">
            <div className="mockup__form-card">
              <div className="mockup__form-title" />
              <div className="mockup__input" /><div className="mockup__input" />
              <div className="mockup__input" />
              <div className="mockup__submit" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mockup__cards">
          {['📈', '⚡', '🎯'].map((icon, i) => (
            <div key={i} className="mockup__card">
              <span className="mockup__card-icon">{icon}</span>
              <div className="mockup__card-lines">
                <div className="mockup__card-line" />
                <div className="mockup__card-line mockup__card-line--short" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating stat badges */}
      <div className="mockup__stat mockup__stat--1">
        <span className="mockup__stat-icon">📊</span>
        <div>
          <div className="mockup__stat-num">+85%</div>
          <div className="mockup__stat-label">más leads</div>
        </div>
      </div>
      <div className="mockup__stat mockup__stat--2">
        <span className="mockup__stat-icon">🚀</span>
        <div>
          <div className="mockup__stat-num">7-14d</div>
          <div className="mockup__stat-label">entrega</div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg-blob hero__bg-blob--1" />
      <div className="hero__bg-blob hero__bg-blob--2" />

      <div className="container hero__inner">
        {/* Content col */}
        <div className="hero__content">
          <div className="badge">
            <span className="badge__dot" style={{animation:'pulse 2s ease-in-out infinite'}} />
            Diagnóstico gratuito disponible
          </div>

          <h1 className="hero__title">
            Creamos <span className="hero__title-gold">landing pages</span> y páginas web que convierten visitantes en clientes
          </h1>

          <p className="hero__sub">
            En FLANOVAX diseñamos tu presencia digital con un objetivo claro: que cada visitante tenga una razón poderosa para contactarte.
          </p>

          <div className="hero__actions">
            <a href="#formulario" className="btn btn-gold btn-lg" onClick={e => goto(e,'#formulario')}>
              Solicitar diagnóstico gratuito
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#servicios" className="btn btn-outline btn-lg" onClick={e => goto(e,'#servicios')}>
              Ver servicios
            </a>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-avatars">
              {['L','C','M','A'].map((l,i) => (
                <span key={i} className="hero__trust-av">{l}</span>
              ))}
            </div>
            <div className="hero__trust-text">
              <strong>+150 negocios</strong> ya tienen su web con FLANOVAX
            </div>
          </div>

          <div className="hero__badges">
            {['100% responsive','Entrega en 7-14 días','Diseño orientado a conversión'].map(b => (
              <span key={b} className="hero__badge-item">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#9a7834" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Mockup col */}
        <div className="hero__visual">
          <WebMockup />
        </div>
      </div>

      {/* Below fold: form */}
      <div className="hero__form-section" id="formulario">
        <div className="container">
          <div className="hero__form-inner">
            <div className="hero__form-copy">
              <h2 className="hero__form-title">Solicita tu diagnóstico gratuito</h2>
              <p className="hero__form-desc">
                Revisamos tu negocio, tu presencia digital actual y te decimos exactamente qué tipo de web o landing page necesitas para captar más clientes.
              </p>
              <ul className="hero__form-checks">
                {[
                  'Análisis de tu situación actual',
                  'Propuesta clara y sin tecnicismos',
                  'Respuesta en menos de 24h',
                  'Sin compromiso de contratación',
                ].map(i => (
                  <li key={i}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="9" fill="var(--gold-pale)"/>
                      <path d="M5 9l3 3 5-6" stroke="var(--gold-dark)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero__form-widget">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
