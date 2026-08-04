import type { Metadata, Viewport } from "next";
import LanguageProvider from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALGOFERT-BIO®",
  description:
    "Biofertilisants microbiens PGPR issus de consortiums bactériens autochtones algériens.",

  metadataBase: new URL("https://algofert-bio.com"),

  manifest: "/manifest.webmanifest",

  openGraph: {
    title: "ALGOFERT-BIO®",
    description:
      "Biofertilisants microbiens PGPR issus de consortiums bactériens autochtones algériens.",
    url: "https://algofert-bio.com",
    siteName: "ALGOFERT-BIO®",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ALGOFERT-BIO®",
    description:
      "Biofertilisants microbiens PGPR issus de consortiums bactériens autochtones algériens.",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102d1c",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <body className="min-h-screen bg-[#f7f3e8] text-[#17351f] antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}