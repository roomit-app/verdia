import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  await resend.emails.send({
    from: "Verdia Jardinería <no-reply@verdiajardineria.com>",
    to: ["info@verdiajardineria.com"],
    subject: "Nuevo mensaje desde la web",
    replyTo: email,
    html: `
      <h2>Nuevo contacto</h2>
      <p><b>Nombre:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${phone}</p>
      <p><b>Mensaje:</b><br/>${message}</p>
    `,
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}
