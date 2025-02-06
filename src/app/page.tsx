import client from "@tina/__generated__/client"
import { Page } from "@tina/__generated__/types"

import { generatePageMeta } from "@/utils/generatePageMetadata"

import { ClientPage } from "./[...filename]/client-page"

export async function generateMetadata() {
  const query = await client.queries.page({ relativePath: "home.mdx" })
  const page = query.data.page

  return generatePageMeta(page as Page, { path: "" })
}

export default async function Home() {
  const data = await client.queries.page({
    relativePath: "home.mdx",
  })

  return <ClientPage {...data} />
}
