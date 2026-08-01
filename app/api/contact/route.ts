import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactRequest = {
  name?: string;
  organization?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const name = body.name?.trim() ?? "";
    const organization = body.organization?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const subject = body.subject?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          success: false,
          error:
            "Veuillez remplir le nom, l’adresse e-mail, l’objet et le message.",
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        {
          success: false,
          error: "L’adresse e-mail saisie n’est pas valide.",
        },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!smtpUser || !smtpPass || !contactEmail) {
      console.error("Variables SMTP manquantes dans .env.local");

      return Response.json(
        {
          success: false,
          error: "La configuration d’envoi du serveur est incomplète.",
        },
        { status: 500 }
      );
    }

    const recipients = contactEmail
      .split(",")
      .map((address) => address.trim())
      .filter(Boolean);

    if (recipients.length === 0) {
      return Response.json(
        {
          success: false,
          error: "Aucune adresse de destination n’est configurée.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Site ALGOFERT-BIO®" <${smtpUser}>`,
      to: recipients,
      replyTo: email,
      subject: `Nouveau contact ALGOFERT-BIO® — ${subject}`,
      text: [
        "Nouveau message reçu depuis le site ALGOFERT-BIO®",
        "",
        `Nom : ${name}`,
        `Organisme : ${organization || "Non renseigné"}`,
        `E-mail : ${email}`,
        `Objet : ${subject}`,
        "",
        "Message :",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #17351f; line-height: 1.6;">
          <h2 style="color: #17351f;">
            Nouveau message depuis le site ALGOFERT-BIO®
          </h2>

          <table
            cellpadding="8"
            cellspacing="0"
            style="border-collapse: collapse; width: 100%; max-width: 700px;"
          >
            <tr>
              <td style="font-weight: bold; background: #f2f5ef;">Nom</td>
              <td>${escapeHtml(name)}</td>
            </tr>

            <tr>
              <td style="font-weight: bold; background: #f2f5ef;">
                Organisme
              </td>
              <td>${escapeHtml(organization || "Non renseigné")}</td>
            </tr>

            <tr>
              <td style="font-weight: bold; background: #f2f5ef;">E-mail</td>
              <td>${escapeHtml(email)}</td>
            </tr>

            <tr>
              <td style="font-weight: bold; background: #f2f5ef;">Objet</td>
              <td>${escapeHtml(subject)}</td>
            </tr>
          </table>

          <h3 style="margin-top: 24px;">Message</h3>

          <div
            style="
              padding: 16px;
              background: #f7f3e8;
              border-left: 4px solid #2e7d32;
              white-space: pre-wrap;
            "
          >${escapeHtml(message)}</div>

          <p style="margin-top: 24px; color: #68756c; font-size: 13px;">
            Ce message a été envoyé depuis le formulaire de contact du site
            ALGOFERT-BIO®.
          </p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"ALGOFERT-BIO®" <${smtpUser}>`,
      to: email,
      subject: "Confirmation de réception — ALGOFERT-BIO®",
      text: [
        `Bonjour ${name},`,
        "",
        "Nous avons bien reçu votre message adressé à ALGOFERT-BIO®.",
        "Notre équipe vous répondra dans les meilleurs délais.",
        "",
        "Cordialement,",
        "Pr SELAMI Nawel",
        "Dr DRAOU Nassima",
        "Département de Biotechnologie — USTO-MB",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #17351f; line-height: 1.6;">
          <h2>Confirmation de réception</h2>

          <p>Bonjour ${escapeHtml(name)},</p>

          <p>
            Nous avons bien reçu votre message adressé à
            <strong>ALGOFERT-BIO®</strong>.
          </p>

          <p>
            Notre équipe vous répondra dans les meilleurs délais.
          </p>

          <p style="margin-top: 24px;">
            Cordialement,<br />
            <strong>Pr SELAMI Nawel</strong><br />
            <strong>Dr DRAOU Nassima</strong><br />
            Département de Biotechnologie — USTO-MB
          </p>
        </div>
      `,
    });

    return Response.json(
      {
        success: true,
        message: "Votre message a été envoyé avec succès.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur API contact :", error);

    return Response.json(
      {
        success: false,
        error:
          "L’envoi du message a échoué. Veuillez réessayer dans quelques instants.",
      },
      { status: 500 }
    );
  }
}