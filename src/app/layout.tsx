import type { Metadata, Viewport } from "next";
import { Afacad } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "../components/Navbar";
import ThemeProvider from "../contexts/ThemeContext";
import Footer from "../components/Footer";

const afacad = Afacad({
  weight: ["400", "700"],
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

console.assert(process.env.MAIN_URL);
export const metadata: Metadata = {
  metadataBase: new URL(process.env.MAIN_URL!),
  title: "Ethan Chennault | Portfolio",
  description:
    "Explore the portfolio of Ethan Chennault - student at UCI and full-stack developer.",
  keywords: [
    "echennau",
    "Ethan Chennault",
    "Chennault",
    "Portfolio",
    "Personal Website",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Python",
  ],
  openGraph: {
    title: "Ethan Chennault | Computer Science Student @ UCI",
    description:
      "Explore the portfolio of Ethan Chennault - student at UCI and full-stack developer.",
    url: process.env.MAIN_URL,
    siteName: "Ethan Chennault's Portfolio",
    images: [
      {
        url: "/og_image.png", // ensure this image is optimized
        width: 900,
        height: 900,
        alt: "Ethan Chennault Portfolio",
      },
    ],
    type: "website",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ethan Chennault",
    url: process.env.BASE_URL,
    image: `${process.env.BASE_URL}/og-image.png`,
    sameAs: ["https://github.com/3than0ls", "https://linkedin.com/in/echennau"],
    jobTitle: "CS Student at UCI",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${afacad.className} flex flex-col antialiased max-w-full min-h-screen w-screen`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="overflow-hidden flex-grow flex flex-col">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
