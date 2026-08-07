import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactRequest = {
  name?: string;
  organization?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
  startedAt?: number;
  turnstileToken?: string;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const MINIMUM_FORM_TIME_MS = 2_000;
const MAX_REQUEST_SIZE = 20_000;

const allowedSubjects = new Set([
  "Partenariat scientifique",
  "Essai agricole",
  "Partenariat industriel",
  "Investissement et financement",
  "Distribution",
  "Autre demande",
]);

const spamPatterns = [
  /site web plus complet/i,
  /présence en ligne professionnelle/i,
  /nous pouvons vous aider à créer/i,
  /web\s*design/i,
  /website\s*(design|development|redesign)/i,
  /digital marketing/i,
  /agence web/i,
  /référencement\s+(naturel|seo)/i,
  /search engine optimization/i,
  /guest post/i,
  /backlinks?/i,
  /casino|cryptocurrency|forex|payday loan/i,
];

const globalRateLimit = globalThis as typeof globalThis & {
  algofertContactRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimitStore =
  globalRateLimit.algofertContactRateLimit ?? new Map<string, RateLimitEntry>();

globalRateLimit.algofertContactRateLimit = rateLimitStore;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown"
  );
}

function isRateLimited(ip: string): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return { limited: false, retryAfter: 0 };
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return {
      limited: true,
      retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  rateLimitStore.set(ip, existing);

  return { limited: false, retryAfter: 0 };
}

function looksPromotional(subject: string, message: string): boolean {
  const content = `${subject}\n${message}`;
  const matches = spamPatterns.filter((pattern) => pattern.test(content)).length;
  const linkCount = (content.match(/https?:\/\/|www\./gi) || []).length;

  return matches >= 1 || linkCount >= 3;
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return true;
  }

  if (!token) {
    return false;
  }

  const formData = new FormData();
  formData.set("secret", secret);
  formData.set("response", token);

  if (ip !== "unknown") {
    formData.set("remoteip", ip);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
      signal: AbortSignal.timeout(5_000),
    }
  );

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as {
    success?: boolean;
    action?: string;
  };

  return result.success === true && result.action === "contact";
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);

    if (contentLength > MAX_REQUEST_SIZE) {
      return Response.json(
        { success: false, error: "La requête est trop volumineuse." },
        { status: 413 }
      );
    }

    const body = (await request.json()) as ContactRequest;

    const name = body.name?.trim() ?? "";
    const organization = body.organization?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const subject = body.subject?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const website = body.website?.trim() ?? "";
    const startedAt = Number(body.startedAt || 0);
    const turnstileToken = body.turnstileToken?.trim() ?? "";

    // Un robot remplit souvent ce champ invisible ou envoie le formulaire
    // instantanément. On répond comme si l'envoi avait réussi sans expédier
    // d'e-mail, afin de ne pas lui révéler le filtre.
    if (
      website ||
      !startedAt ||
      Date.now() - startedAt < MINIMUM_FORM_TIME_MS
    ) {
      return Response.json({ success: true }, { status: 200 });
    }

    if (!name || !organization || !email || !subject || !message) {
      return Response.json(
        {
          success: false,
          error:
            "Veuillez remplir le nom, l’organisme, l’adresse e-mail, l’objet et le message.",
        },
        { status: 400 }
      );
    }

    if (
      name.length > 120 ||
      organization.length > 160 ||
      email.length > 254 ||
      subject.length > 80 ||
      message.length < 20 ||
      message.length > 5_000 ||
      !allowedSubjects.has(subject)
    ) {
      return Response.json(
        { success: false, error: "Le contenu du formulaire n’est pas valide." },
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

    if (looksPromotional(subject, message)) {
      return Response.json({ success: true }, { status: 200 });
    }

    const ip = getClientIp(request);
    const rateLimit = isRateLimited(ip);

    if (rateLimit.limited) {
      return Response.json(
        {
          success: false,
          error:
            "Trop de messages ont été envoyés. Veuillez réessayer plus tard.",
        },
        {
          status: 429,
          headers: { "Retry-After": String(rateLimit.retryAfter) },
        }
      );
    }

    if (!(await verifyTurnstile(turnstileToken, ip))) {
      return Response.json(
        {
          success: false,
          error: "La vérification anti-robot a échoué.",
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
