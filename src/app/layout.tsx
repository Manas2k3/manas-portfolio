import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Base URL used for metadata and canonical links. Defaults to the
// Vercel project domain that will be created when you connect the repo.
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://manas-portfolio.vercel.app";
export const metadataBase = new URL(baseUrl);

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Manas Ranjan Sethi — Mobile & AI Product Engineer",
  description:
    "I build AI-powered mobile products that ship and scale. Flutter developer, on-device ML & cloud inference, Smart India Hackathon 2023 Winner.",
  keywords: [
    "Manas Ranjan Sethi",
    "Mobile Engineer",
    "AI Engineer",
    "Flutter Developer",
    "Machine Learning",
    "TFLite",
    "Product Engineer",
  ],
  authors: [{ name: "Manas Ranjan Sethi" }],
  creator: "Manas Ranjan Sethi",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Manas Ranjan Sethi — Mobile & AI Product Engineer",
    description:
      "I build AI-powered mobile products that ship and scale. Flutter developer, on-device ML & cloud inference.",
    siteName: "Manas Ranjan Sethi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manas Ranjan Sethi — Mobile & AI Product Engineer",
    description:
      "I build AI-powered mobile products that ship and scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manas Ranjan Sethi",
  jobTitle: "Mobile & AI Product Engineer",
  url: baseUrl,
  sameAs: [
    "https://github.com/Manas2k3"
  ],
  knowsAbout: [
    "Flutter",
    "Dart",
    "Machine Learning",
    "TensorFlow Lite",
    "Firebase",
    "Google Cloud Platform",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-inter)" }}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
