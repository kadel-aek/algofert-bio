"use client";

import { FormEvent, useState } from "react";

type FormStatus = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      organization: String(formData.get("organization") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    setStatus({
      type: "loading",
      message: "Envoi en cours...",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "L’envoi du message a échoué.");
      }

      form.reset();

      setStatus({
        type: "success",
        message: data.message || "Votre message a été envoyé avec succès.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue pendant l’envoi.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-7 shadow-xl shadow-[#17351f]/10 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-bold">
            Nom et prénom *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            className="w-full rounded-2xl border border-[#dbe2d8] bg-[#f8faf7] px-4 py-3 outline-none transition focus:border-[#2e7d32] focus:ring-2 focus:ring-[#2e7d32]/15"
          />
        </div>

        <div>
          <label
            htmlFor="organization"
            className="mb-2 block text-sm font-bold"
          >
            Organisme
          </label>

          <input
            id="organization"
            name="organization"
            type="text"
            placeholder="Entreprise ou institution"
            className="w-full rounded-2xl border border-[#dbe2d8] bg-[#f8faf7] px-4 py-3 outline-none transition focus:border-[#2e7d32] focus:ring-2 focus:ring-[#2e7d32]/15"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="mb-2 block text-sm font-bold">
          Adresse e-mail *
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="votre@email.com"
          className="w-full rounded-2xl border border-[#dbe2d8] bg-[#f8faf7] px-4 py-3 outline-none transition focus:border-[#2e7d32] focus:ring-2 focus:ring-[#2e7d32]/15"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className="mb-2 block text-sm font-bold">
          Objet *
        </label>

        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="w-full rounded-2xl border border-[#dbe2d8] bg-[#f8faf7] px-4 py-3 outline-none transition focus:border-[#2e7d32] focus:ring-2 focus:ring-[#2e7d32]/15"
        >
          <option value="" disabled>
            Sélectionnez un sujet
          </option>
          <option value="Partenariat scientifique">
            Partenariat scientifique
          </option>
          <option value="Essai agricole">Essai agricole</option>
          <option value="Partenariat industriel">
            Partenariat industriel
          </option>
          <option value="Investissement et financement">
            Investissement et financement
          </option>
          <option value="Distribution">Distribution</option>
          <option value="Autre demande">Autre demande</option>
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-sm font-bold">
          Message *
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Présentez brièvement votre demande..."
          className="w-full resize-none rounded-2xl border border-[#dbe2d8] bg-[#f8faf7] px-4 py-3 outline-none transition focus:border-[#2e7d32] focus:ring-2 focus:ring-[#2e7d32]/15"
        />
      </div>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="mt-7 inline-flex w-full justify-center rounded-full bg-[#17351f] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#245331] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.type === "loading" ? "Envoi en cours..." : "Envoyer la demande"}
      </button>

      {status.message && (
        <p
          className={`mt-5 rounded-2xl px-4 py-3 text-center text-sm ${
            status.type === "success"
              ? "bg-green-50 text-green-800"
              : status.type === "error"
                ? "bg-red-50 text-red-800"
                : "bg-[#f2f5ef] text-[#536158]"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}