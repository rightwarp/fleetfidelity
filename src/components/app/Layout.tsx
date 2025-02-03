import client from "@tina/__generated__/client"
import {
  Header as HeaderType,
  Footer as FooterType,
} from "@tina/__generated__/types"

import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  const headerQuery = await client.queries.header({
    relativePath: "index.json",
  })
  const footerQuery = await client.queries.footer({
    relativePath: "index.json",
  })

  return (
    <>
      <Header query={headerQuery.data.header as HeaderType} />
      <main>{children}</main>
      <Footer query={footerQuery.data.footer as FooterType} />
    </>
  )
}
