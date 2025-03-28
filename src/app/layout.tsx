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

enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialTheme: Theme = Theme.LIGHT;

  const themeClass =
    initialTheme === Theme.LIGHT
      ? "text-primary bg-secondary"
      : "text-secondary bg-primary";

  return (
    <html lang="en">
      <ThemeProvider initialTheme={initialTheme}>
        <body
          className={`${afacad.className} ${themeClass} antialiased max-w-full w-screen`}
        >
          <Navbar />
          <div className="overflow-x-hidden">{children}</div>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
