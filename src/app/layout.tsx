import { Poppins, League_Spartan } from "next/font/google"

import { Layout } from "@/components/app/Layout"
import { cn } from "@/utils/helpers"

import "./globals.css"

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: "swap",
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", leagueSpartan.variable, poppins.variable)}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
