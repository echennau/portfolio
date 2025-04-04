import type { Metadata, Viewport } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ThemeProvider from "./contexts/ThemeContext";
import Footer from "./components/Footer";

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
      <head></head>
      <body className={`${afacad.className} antialiased max-w-full w-screen`}>
        <ThemeProvider>
          <Navbar />
          <div className="overflow-x-hidden">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
