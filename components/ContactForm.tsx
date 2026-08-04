"use client";

import { FormEvent, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";

type FormStatus = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const { t, isRTL } = useLanguage();
  const formText = t.page.contactForm;

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
      message: formText.loading,
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
        throw new Error(formText.error);
      }

      form.reset();

      setStatus({
        type: "success",
        message: formText.success,
      });
    } catch {
      setStatus({
        type: "error",
        message: formText.unknownError,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      dir={isRTL ? "rtl" : "ltr"}
      className={`rounded-3xl bg-white p-7 shadow-xl shadow-[#17351f]/10 sm:p-10 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-bold">
            {formText.nameLabel}
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={formText.namePlaceholder}
            className="w-full rounded-2xl border border-[#dbe2d8] bg-[#f8faf7] px-4 py-3 outline-none transition focus:border-[#2e7d32] focus:ring-2 focus:ring-[#2e7d32]/15"
          />
        </div>

        <div>
          <label htmlFor="organization" className="mb-2 block text-sm font-bold">
            {formText.organizationLabel}
          </label>

          <input
            id="organization"
            name="organization"
            type="text"
            placeholder={formText.organizationPlaceholder}
            className="w-full rounded-2xl border border-[#dbe2d8] bg-[#f8faf7] px-4 py-3 outline-none transition focus:border-[#2e7d32] focus:ring-2 focus:ring-[#2e7d32]/15"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="mb-2 block text-sm font-bold">
          {formText.emailLabel}
        </label>

        <input
          id="email"
          name="email"
          type="email"
          dir="ltr"
          required
          placeholder={formText.emailPlaceholder}
          className={`w-full rounded-2xl border border-[#dbe2d8] bg-[#f8faf7] px-4 py-3 outline-none transition focus:border-[#2e7d32] focus:ring-2 focus:ring-[#2e7d32]/15 ${
            isRTL ? "text-right" : "text-left"
          }`}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className="mb-2 block text-sm font-bold">
          {formText.subjectLabel}
        </label>

        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="w-full rounded-2xl border border-[#dbe2d8] bg-[#f8faf7] px-4 py-3 outline-none transition focus:border-[#2e7d32] focus:ring-2 focus:ring-[#2e7d32]/15"
        >
          <option value="" disabled>
            {formText.subjectPlaceholder}
          </option>
          <option value="Partenariat scientifique">
            {formText.subjects.scientific}
          </option>
          <option value="Essai agricole">
            {formText.subjects.agricultural}
          </option>
          <option value="Partenariat industriel">
            {formText.subjects.industrial}
          </option>
          <option value="Investissement et financement">
            {formText.subjects.investment}
          </option>
          <option value="Distribution">
            {formText.subjects.distribution}
          </option>
          <option value="Autre demande">
            {formText.subjects.other}
          </option>
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-sm font-bold">
          {formText.messageLabel}
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder={formText.messagePlaceholder}
          className="w-full resize-none rounded-2xl border border-[#dbe2d8] bg-[#f8faf7] px-4 py-3 outline-none transition focus:border-[#2e7d32] focus:ring-2 focus:ring-[#2e7d32]/15"
        />
      </div>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="mt-7 inline-flex w-full justify-center rounded-full bg-[#17351f] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#245331] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.type === "loading" ? formText.loading : formText.submit}
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
