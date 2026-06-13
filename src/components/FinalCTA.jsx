import LeadForm from './LeadForm'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="fcta section--dark">
      <div className="fcta__gold-line" />
      <div className="fcta__blob fcta__blob--1" />
      <div className="fcta__blob fcta__blob--2" />

      <div className="container fcta__inner">
        <div className="fcta__content">
          <div className="badge badge--dark">Último paso</div>
          <h2 className="fcta__title">
            Empieza a captar más clientes con una web diseñada para vender
          </h2>
          <p className="fcta__desc">
            Solicita tu diagnóstico gratuito. Sin compromiso, sin tecnicismos. Solo claridad sobre qué necesita tu negocio para tener una web que realmente convierta.
          </p>
          <ul className="fcta__checks">
            {['Diagnóstico en menos de 24h','Sin compromiso de contratación','Propuesta adaptada a tu negocio','Respuesta directa de nuestro equipo'].map(c => (
              <li key={c}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="rgba(201,168,76,0.15)"/>
                  <path d="M5 9l3 3 5-6" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {c}
              </li>
            ))}
          </ul>

          <div className="fcta__contacts">
            <p className="fcta__contacts-label">¿Prefieres contactar directamente?</p>
            <div className="fcta__contacts-links">
              <a href="mailto:contacto@flanovax.com" className="fcta__contact-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
                contacto@flanovax.com
              </a>
              <a href="https://wa.me/51921590084" target="_blank" rel="noopener noreferrer" className="fcta__contact-btn fcta__contact-btn--wa">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.527a.75.75 0 00.916.916l5.678-1.471A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.952-1.354l-.355-.211-3.671.952.972-3.561-.232-.366A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
                WhatsApp +51 921 590 084
              </a>
            </div>
          </div>
        </div>

        <div className="fcta__form">
          <LeadForm dark />
        </div>
      </div>
    </section>
  )
}
