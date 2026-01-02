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
//     await resend.emails.send({
//   from: "Verdia <onboarding@resend.dev>",
//   to: ["delivered@resend.dev"],
//   subject: "PRUEBA Resend funcionando",
//   html: "<p>Si ves esto, Resend funciona</p>",
// });
  await resend.emails.send({
    from: "Verdia Jardinería <info@verdiajardineria.com>",
    to: ["info@verdiajardineria.com"],
    subject: "Nuevo mensaje desde la web",
    html:`
  
  <div style="background-color:#f4f6f5;padding:30px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <div style="background:#263d13;padding:20px;text-align:center;">
        <img 
          src="https://www.verdiajardineria.com/logo.PNG" 
          alt="Verdia Jardinería"
          style="max-width:200px;margin-bottom:1px;"
        />
        <h1 style="color:#ffffff;margin:0;font-size:20px;">
          Nuevo mensaje desde la web
        </h1>
      </div>

      <!-- Content -->
      <div style="padding:24px;color:#333;">
        <p style="margin-top:0;font-size:15px;">
          Has recibido un nuevo mensaje desde el formulario de contacto:
        </p>

        <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
          <tr>
            <td style="padding:8px 0;"><strong>Nombre</strong></td>
            <td style="padding:8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;"><strong>Email</strong></td>
            <td style="padding:8px 0;">
              <a href="mailto:${email}" style="color:#1f7a4d;text-decoration:none;">
                ${email}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;"><strong>Teléfono</strong></td>
            <td style="padding:8px 0;">
              <a href="tel:${phone}" style="color:#1f7a4d;text-decoration:none;">
                ${phone || "No indicado"}
              </a>
            </td>
          </tr>
        </table>

        <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />

        <p style="margin-bottom:6px;"><strong>Mensaje</strong></p>
        <div style="background:#f9fafb;padding:15px;border-radius:6px;font-size:14px;line-height:1.5;">
          ${message.replace(/\n/g, "<br/>")}
        </div>
      </div>

      <!-- Footer -->
      <div style="background:#f4f6f5;padding:12px;text-align:center;font-size:12px;color:#666;">
        Verdia Jardinería · Formulario web
      </div>

    </div>
  </div>
`,
  });



    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Email failed" });
  }
}
