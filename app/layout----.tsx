import type { Metadata, Viewport } from "next";
import LanguageProvider from "@/components/LanguageProvider";
import "./globals.css";

const siteUrl = "https://algofert-bio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ALGOFERT-BIO® | Biofertilisants microbiens PGPR algériens",
    template: "%s | ALGOFERT-BIO®",
  },
  description:
    "ALGOFERT-BIO® développe une gamme de biofertilisants microbiens PGPR à base de consortiums bactériens autochtones algériens pour une agriculture durable.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: { google: "PDkYozWAAyelgfXjba2kS8d8j05unuVF-XK1NU0RNNU" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102d1c",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <body className="min-h-screen bg-[#f7f3e8] text-[#17351f] antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
