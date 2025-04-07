import type { Metadata, Viewport } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ThemeProvider from "../contexts/ThemeContext";
import Footer from "../components/Footer";

const afacad = Afacad({
  weight: ["400", "700"],
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethan Chennault",
  description: "Personal portfolio and website for Ethan Chennault",
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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
      </body>
    </html>
  );
}
