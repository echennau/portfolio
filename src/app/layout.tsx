import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "../components/ThemeProvider"

const spaceGrotesk = localFont({
  src: "../../node_modules/@echennau/remi/dist/fonts/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
})

const montserrat = localFont({
  src: "../../node_modules/@echennau/remi/dist/fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  display: "swap",
})

const sourceCodePro = localFont({
  src: "../../node_modules/@echennau/remi/dist/fonts/SourceCodePro-VariableFont_wght.ttf",
  variable: "--font-source-code-pro",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ethan Chennault",
  description: "Ethan Chennault's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased bg-bg-default ${spaceGrotesk.variable} ${montserrat.variable} ${sourceCodePro.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
