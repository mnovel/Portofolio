import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { PROFILE } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-fira-code",
});

export const viewport: Viewport = {
  themeColor: "#0a0e17",
};

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE.url),
  title: {
    default: `${PROFILE.name} - ${PROFILE.title} | Portfolio`,
    template: `%s | ${PROFILE.name}`,
  },
  description:
    "Muhammad Novel - Certified Penetration Tester, Security Analyst & Incident Handler (CND, ECIH). Berpengalaman di Cyber Security, Cloud Computing, dan Infrastructure Security. Security Engineer di RSUD dr. R. Soedarsono Kota Pasuruan.",
  keywords: [
    "Muhammad Novel",
    "Penetration Tester",
    "Security Analyst",
    "Incident Handler",
    "Cyber Security",
    "Security Engineer",
    "RSUD dr. R. Soedarsono Kota Pasuruan",
    "Cloud Computing",
    "Infrastructure Security",
    "CND",
    "ECIH",
    "CCNA",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.url }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    other: {
      "msvalidate.01": "9F2D1B173DE3F858A241380D0774BE85",
    },
  },
  openGraph: {
    title: `${PROFILE.name} - ${PROFILE.title}`,
    description:
      "Certified Penetration Tester, Security Analyst & Incident Handler (CND, ECIH). Security Engineer di RSUD dr. R. Soedarsono Kota Pasuruan.",
    url: PROFILE.url,
    siteName: `${PROFILE.name} Portfolio`,
    images: [
      {
        url: `${PROFILE.url}/icon-512.png`,
        width: 512,
        height: 512,
        alt: `${PROFILE.name} - ${PROFILE.title}`,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@muhnovel_",
    title: `${PROFILE.name} - ${PROFILE.title}`,
    description:
      "Certified Penetration Tester, Security Analyst & Incident Handler (CND, ECIH). Security Engineer di RSUD dr. R. Soedarsono Kota Pasuruan.",
    images: [`${PROFILE.url}/icon-512.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${PROFILE.name} - ${PROFILE.title}`,
    url: PROFILE.url,
    mainEntity: {
      "@type": "Person",
      "@id": `${PROFILE.url}#person`,
      name: PROFILE.name,
      jobTitle: PROFILE.title,
      worksFor: {
        "@type": "Organization",
        name: PROFILE.company,
      },
      url: PROFILE.url,
      image: `${PROFILE.url}/icon-512.png`,
      email: PROFILE.email,
      telephone: "+6282143000116",
      sameAs: PROFILE.socials
        .filter((s) => s.key !== "email")
        .map((s) => s.href),
    },
  };

  return (
    <html
      lang="id"
      className={`${inter.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="bg-cyber-dark text-cyber-text antialiased selection:bg-cyber-cyan selection:text-cyber-dark"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="bg-cyber-grid pointer-events-none fixed inset-0 -z-10" />
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
