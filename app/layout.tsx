// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import Navbar from "./components/navbar"
import Footer from "./footer/page"

export const metadata: Metadata = {
  title: {
    default: "Anuja Vibhute — Frontend Developer",
    template: "%s | Anuja Vibhute",
  },
  description:
    "Frontend Developer focused on building clean, responsive, and performance-driven web interfaces using modern tools.",

  metadataBase: new URL("https://anuja.site"), 
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Anuja Vibhute — Frontend Developer",
    description:
      "I design and build clean, responsive web interfaces with a focus on usability and performance.",
    url: "https://anuja.site",
    siteName: "Anuja Vibhute",
    images: [
      {
        url: "/og2.png",
        width: 1200,
        height: 630,
        alt: "Anuja Vibhute — Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anuja Vibhute — Frontend Developer",
    description:
      "Frontend Developer building clean, responsive, modern web interfaces.",
    images: ["/og2.png"],
    creator: "@irunonironic",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
