import type { Metadata, Viewport } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
      <body
        className={`${afacad.className} text-secondary antialiased bg-primary max-w-full w-screen`}
      >
        <Navbar />
        <div className="px-2 md:px-64">{children}</div>
      </body>
    </html>
  );
}
