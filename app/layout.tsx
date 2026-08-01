import type { Metadata, Viewport } from "next";
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

  keywords: [
    "ALGOFERT-BIO",
    "biofertilisant",
    "biofertilisants microbiens",
    "PGPR",
    "consortiums bactériens",
    "bactéries bénéfiques",
    "agriculture durable",
    "agriculture algérienne",
    "biostimulation",
    "biofertilisation",
    "biocontrôle",
    "rhizosphère",
    "microorganismes autochtones algériens",
    "USTO-MB",
    "Université d'Oran",
  ],

  authors: [
    {
      name: "Pr SELAMI Nawel",
    },
    {
      name: "Dr DRAOU Nassima",
    },
  ],

  creator: "ALGOFERT-BIO®",
  publisher: "ALGOFERT-BIO®",

  applicationName: "ALGOFERT-BIO®",

  category: "Agriculture et biotechnologie",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: siteUrl,
    siteName: "ALGOFERT-BIO®",
    title: "ALGOFERT-BIO® | Biofertilisants microbiens PGPR algériens",
    description:
      "Une gamme de biofertilisants microbiens PGPR développée à partir de consortiums bactériens autochtones algériens.",
    images: [
      {
        url: "/images/packaging/gamme-algofert-bio.png",
        width: 1200,
        height: 630,
        alt: "Gamme de biofertilisants microbiens ALGOFERT-BIO®",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ALGOFERT-BIO® | Biofertilisants microbiens PGPR algériens",
    description:
      "Des consortiums bactériens autochtones algériens au service d’une agriculture durable.",
    images: ["/images/packaging/gamme-algofert-bio.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  verification: {
    google: "",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#f7f3e8] text-[#17351f] antialiased">
        {children}
      </body>
    </html>
  );
}