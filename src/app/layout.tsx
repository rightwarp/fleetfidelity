import { GoogleTagManager } from "@next/third-parties/google"
import client from "@tina/__generated__/client"
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const global = await client.queries.global({ relativePath: "index.json" })
  const gtmId = global?.data?.global?.googleTagId

  return (
    <html lang="en">
      <body
        className={cn("antialiased", leagueSpartan.variable, poppins.variable)}
      >
        <Layout>{children}</Layout>
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
      </body>
    </html>
  )
}
