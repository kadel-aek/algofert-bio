import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import { isLanguage, languages, siteUrl } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ALGOFERT-BIO®",
    template: "%s | ALGOFERT-BIO®",
  },
  description:
    "Biofertilisants microbiens PGPR issus de consortiums bactériens autochtones algériens.",
  manifest: "/manifest.webmanifest",
  openGraph: {
    siteName: "ALGOFERT-BIO®",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102d1c",
  colorScheme: "light",
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body className="min-h-screen bg-[#f7f3e8] text-[#17351f] antialiased">
        {children}
      </body>
    </html>
  );
}
