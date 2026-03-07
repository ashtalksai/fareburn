import type { Metadata } from "next"
import { DM_Serif_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Fareburn — AI Rewards Scanner for Credit Card Points",
  description:
    "Fareburn scans 50+ airlines and hotels to find when YOUR points unlock premium seats — and alerts you instantly.",
  openGraph: {
    title: "Fareburn — AI Rewards Scanner for Credit Card Points",
    description:
      "Stop leaving points on the table. Fareburn finds the best redemptions for your loyalty points.",
    url: "https://fareburn.ashketing.com",
    siteName: "Fareburn",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSerif.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
