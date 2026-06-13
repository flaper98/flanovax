import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const { name, email, phone, business, service, message } = req.body ?? {}

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Faltan campos requeridos' })
  }

  try {
    const { data, error: resendError } = await resend.emails.send({
      from: 'FLANOVAX <noreply@flanovax.com>',
      to: ['contacto@flanovax.com'],
      reply_to: email,
      subject: `💼 Nueva solicitud — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
          <div style="background:#0f0e0e;padding:28px 32px;text-align:center;">
            <h1 style="color:#c9a84c;margin:0;font-size:22px;letter-spacing:3px;">FLANOVAX</h1>
            <p style="color:#ffffff80;margin:6px 0 0;font-size:13px;">Nueva solicitud de diagnóstico</p>
          </div>

          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:35%;color:#666;font-size:13px;">Nombre</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;font-size:14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:13px;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">
                  <a href="mailto:${email}" style="color:#c9a84c;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:13px;">WhatsApp / Tel</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">
                  <a href="https://wa.me/${phone.replace(/\D/g,'')}" style="color:#25d366;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:13px;">Tipo de negocio</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${business || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;font-size:13px;">Servicio</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;">${service || '—'}</td>
              </tr>
              <tr>
                <td style="padding:14px 0 0;color:#666;font-size:13px;vertical-align:top;">Mensaje</td>
                <td style="padding:14px 0 0;font-size:14px;line-height:1.6;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>

            <div style="margin-top:28px;display:flex;gap:12px;">
              <a href="mailto:${email}"
                style="display:inline-block;background:#0f0e0e;color:#c9a84c;padding:12px 24px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">
                Responder por email
              </a>
              <a href="https://wa.me/${phone.replace(/\D/g,'')}"
                style="display:inline-block;background:#25d366;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">
                Abrir WhatsApp
              </a>
            </div>
          </div>

          <div style="background:#f9f7f4;padding:16px 32px;text-align:center;font-size:12px;color:#999;">
            FLANOVAX · contacto@flanovax.com · +51 921 590 084
          </div>
        </div>
      `,
    })

    if (resendError) {
      console.error('Resend error:', resendError)
      return res.status(500).json({ error: resendError.message })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Resend exception:', error)
    return res.status(500).json({ error: 'Error al enviar el correo' })
  }
}
