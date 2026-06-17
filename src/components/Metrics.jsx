import { useEffect, useRef, useState } from 'react'
import './Metrics.css'

const STATS = [
  { value:85,  suffix:'%',  prefix:'+', label:'más leads',             desc:'Con landing page optimizada vs sin web' },
  { value:14,  suffix:'d',  prefix:'',  label:'días de entrega',       desc:'Web lista para captar desde el primer día' },
  { value:3,   suffix:'x',  prefix:'+', label:'más conversión',        desc:'Respecto a webs genéricas sin CTA claro' },
  { value:150, suffix:'+',  prefix:'',  label:'proyectos entregados',  desc:'Negocios que ya captan clientes con su web' },
]

function useCountUp(target, duration = 1400, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = ts => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setCount(Math.floor(p * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, active])
  return count
}

function Stat({ value, suffix, prefix, label, desc, i, active }) {
  const count = useCountUp(value, 1300, active)
  return (
    <div className="metric reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
      <div className="metric__value">
        <span className="metric__prefix">{prefix}</span>
        <span className="metric__num">{active ? count : value}</span>
        <span className="metric__suffix">{suffix}</span>
      </div>
      <p className="metric__label">{label}</p>
      <p className="metric__desc">{desc}</p>
    </div>
  )
}

export default function Metrics() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); obs.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="metrics section--dark" ref={ref}>
      <div className="container">
        <p className="metrics__eyeline reveal">Lo que logran los negocios con una web que convierte</p>
        <div className="metrics__grid">
          {STATS.map((s, i) => <Stat key={i} {...s} i={i} active={active} />)}
        </div>
      </div>
    </section>
  )
}
