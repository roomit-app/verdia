import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    // await resend.emails.send({
    //   from: "Verdia <onboarding@resend.dev>",
    //   to: ["info@verdiajardineria.com"],
    //   subject: "Nuevo mensaje desde la web",
    //   html: `
    //     <h2>Nuevo contacto</h2>
    //     <p><strong>Nombre:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Teléfono:</strong> ${phone}</p>
    //     <p><strong>Mensaje:</strong><br/>${message}</p>
    //   `,
    // });
    await resend.emails.send({
  from: "Verdia <onboarding@resend.dev>",
  to: ["delivered@resend.dev"],
  subject: "PRUEBA Resend funcionando",
  html: "<p>Si ves esto, Resend funciona</p>",
});



    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Email failed" });
  }
}
