import './Benefits.css'

const BENEFITS = [
  { icon:'🎯', title:'Diseñada para convertir',     desc:'Cada elemento de tu web tiene un propósito: llevar al visitante a contactarte. Sin distracciones, con un camino claro.' },
  { icon:'⚡', title:'Lista en 7 a 14 días',        desc:'Sin esperas de meses. Entregamos tu web funcionando rápido para que empieces a captar clientes cuanto antes.' },
  { icon:'✏️', title:'Identidad visual propia',     desc:'Tu web no se parece a la de nadie. Creamos un diseño con tu paleta, tu tono y tu personalidad de marca.' },
  { icon:'📱', title:'Responsive desde el primer pixel', desc:'Diseñada primero para móvil. Tu web se ve y funciona perfectamente en cualquier dispositivo.' },
  { icon:'📨', title:'Formularios que realmente llegan', desc:'Cada solicitud llega directamente a tu email o WhatsApp. Nunca perderás un contacto interesado.' },
  { icon:'🔄', title:'Fácil de actualizar',         desc:'Te entregamos la web con acceso sencillo para cambiar textos, imágenes o precios cuando lo necesites.' },
]

export default function Benefits() {
  return (
    <section className="benefits section">
      <div className="container">
        <div className="section-header">
          <div className="badge">Ventajas</div>
          <h2>Por qué FLANOVAX diseña webs que convierten</h2>
          <p>No hacemos webs genéricas. Cada proyecto está pensado para que tu negocio capte más clientes desde el primer día.</p>
        </div>
        <div className="benefits__grid">
          {BENEFITS.map((b, i) => (
            <div key={i} className="benefit-card">
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
