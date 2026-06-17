import { useState } from "react";
import "./LeadForm.css";

export default function LeadForm({ dark = false }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const change = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`lf lf--success ${dark ? "lf--dark" : ""}`}>
        <div className="lf__ok-icon">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <circle cx="26" cy="26" r="26" fill="var(--gold-pale)" />
            <path
              d="M16 26l8 8 13-16"
              stroke="var(--gold-dark)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3>¡Solicitud recibida!</h3>
        <p>
          Gracias, <strong>{form.name}</strong>. Te contactaremos en menos de 24
          h con tu diagnóstico personalizado.
        </p>
        <div className="lf__ok-contacts">
          <a href="mailto:contacto@flanovax.com" className="lf__ok-btn">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
            contacto@flanovax.com
          </a>
          <a
            href="https://wa.me/51977913748"
            target="_blank"
            rel="noopener noreferrer"
            className="lf__ok-btn lf__ok-btn--wa"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.527a.75.75 0 00.916.916l5.678-1.471A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.952-1.354l-.355-.211-3.671.952.972-3.561-.232-.366A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            WhatsApp +51 977 913 748
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`lf ${dark ? "lf--dark" : ""}`}>
      <div className="lf__header">
        <h3 className="lf__title">Solicita tu diagnóstico gratuito</h3>
        <p className="lf__sub">
          Solo necesito 3 datos para analizar tu negocio y decirte exactamente
          qué está frenando tus leads.
        </p>
      </div>

      <form className="lf__body" onSubmit={submit}>
        <div className="lf__field">
          <label htmlFor="lf-name">
            Nombre completo <span className="lf__req">*</span>
          </label>
          <input
            id="lf-name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            value={form.name}
            onChange={change}
            required
            autoComplete="name"
          />
        </div>

        <div className="lf__field">
          <label htmlFor="lf-email">
            Email <span className="lf__req">*</span>
          </label>
          <input
            id="lf-email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={form.email}
            onChange={change}
            required
            autoComplete="email"
          />
        </div>

        <div className="lf__field">
          <label htmlFor="lf-phone">
            WhatsApp / Teléfono <span className="lf__req">*</span>
          </label>
          <input
            id="lf-phone"
            name="phone"
            type="tel"
            placeholder="+51 900 000 000"
            value={form.phone}
            onChange={change}
            required
            autoComplete="tel"
          />
        </div>

        {error && (
          <p className="lf__error">
            Hubo un problema al enviar. Escríbenos directamente a{" "}
            <a href="mailto:contacto@flanovax.com">contacto@flanovax.com</a>
          </p>
        )}

        <button
          type="submit"
          className={`btn btn-gold btn-lg lf__btn ${loading ? "lf__btn--loading" : ""}`}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="lf__spinner" />
              Enviando...
            </>
          ) : (
            <>
              Quiero saber qué falla en mi web
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          )}
        </button>

        <div className="lf__urgency">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M8 4v4l2.5 2.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          Solo 5 diagnósticos por semana · Respuesta en menos de 24 h
        </div>

        <p className="lf__privacy">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <rect
              x="2"
              y="7"
              width="12"
              height="8"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M5 7V5a3 3 0 016 0v2"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          Datos protegidos · Sin spam · Sin compromiso
        </p>
      </form>
    </div>
  );
}
