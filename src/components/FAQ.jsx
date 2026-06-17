import { useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    q: '¿Qué incluye una landing page de FLANOVAX?',
    a: 'Incluye diseño personalizado, copy orientado a conversión, formulario de captación conectado a tu email y WhatsApp, diseño responsive, velocidad optimizada y acceso para editar el contenido. Todo listo para captar clientes desde el primer día.',
  },
  {
    q: '¿Cuánto tarda en estar lista mi web?',
    a: 'Una landing page básica o de captación está lista en 7 días hábiles. Una página web completa tarda entre 10 y 14 días. Si tienes urgencia, consúltanos y buscamos una solución.',
  },
  {
    q: '¿Puedo editar el contenido de mi web después?',
    a: 'Sí. Te entregamos la web con acceso y te explicamos cómo cambiar textos, imágenes y precios de forma sencilla. También puedes pedirte soporte cuando necesites una actualización.',
  },
  {
    q: '¿Necesito tener dominio o hosting antes de empezar?',
    a: 'No es obligatorio. Podemos asesorarte en la elección de dominio y hosting, o trabajar con los que ya tengas. Lo gestionamos todo o solo lo que necesites.',
  },
  {
    q: '¿Cómo llegan las solicitudes del formulario?',
    a: 'Directamente a tu email y, si lo prefieres, también a tu WhatsApp. Cada vez que alguien completa el formulario, recibes una notificación inmediata con todos los datos del contacto.',
  },
  {
    q: '¿Hacéis el diseño desde cero o necesito darte materiales?',
    a: 'Podemos partir desde cero si no tienes logo ni identidad visual definida, o adaptar tu diseño actual si ya tienes materiales. El diagnóstico gratuito nos ayuda a definir el mejor punto de partida.',
  },
]

function Item({ q, a, i }) {
  const [open, setOpen] = useState(i === 0)
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(p => !p)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-item__ico" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className="faq-item__a">
          <p>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="faq section section--alt" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <div className="badge">Preguntas frecuentes</div>
          <h2>Respuestas directas antes de empezar</h2>
          <p>Las dudas más habituales antes de solicitar el diagnóstico gratuito.</p>
        </div>
        <div className="faq__list reveal">
          {FAQS.map((item, i) => <Item key={i} {...item} i={i} />)}
        </div>
      </div>
    </section>
  )
}
