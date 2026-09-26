import type { APIRoute } from 'astro';

export const prerender = false;

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const json = (data: unknown, status: number) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid-json' }, 400);
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return json({ ok: false, error: 'missing-fields' }, 400);
  }

  const apiKey = import.meta.env.SENDGRID_API_KEY;
  const fromEmail = import.meta.env.SENDGRID_FROM_EMAIL;
  const toEmail = import.meta.env.SENDGRID_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error(
      'Contact form: faltan variables de entorno SENDGRID_API_KEY / SENDGRID_FROM_EMAIL / SENDGRID_TO_EMAIL'
    );
    return json({ ok: false, error: 'not-configured' }, 500);
  }

  const textBody = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    phone ? `Teléfono: ${phone}` : null,
    '',
    'Mensaje:',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: toEmail }] }],
        from: { email: fromEmail, name: 'Vector Technologies Group — Sitio web' },
        reply_to: { email, name },
        subject: `Nueva consulta de ${name} — vtgipr.com`,
        content: [{ type: 'text/plain', value: textBody }],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('SendGrid error', response.status, errorBody);
      return json({ ok: false, error: 'send-failed' }, 502);
    }

    return json({ ok: true }, 202);
  } catch (error) {
    console.error('Contact form: error al llamar a SendGrid', error);
    return json({ ok: false, error: 'send-failed' }, 502);
  }
};
