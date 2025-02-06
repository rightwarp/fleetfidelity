import client from "@tina/__generated__/client"
import { Page as PageType } from "@tina/__generated__/types"

import { generatePageMeta } from "@/utils/generatePageMetadata"

import { ClientPage } from "./client-page"

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection()
  const params =
    pages.data?.pageConnection.edges!.map((edge) => ({
      filename: edge!.node!._sys.breadcrumbs,
    })) || []

  // exclude the home page
  return params.filter((p) => !p.filename.every((x) => x === "home"))
}

export async function generateMetadata({
  params: _params,
}: {
  params: Promise<{ filename: string[] }>
}) {
  const params = await _params
  const path = params.filename.join("/")
  const query = await client.queries.page({
    relativePath: `${path}.mdx`,
  })
  const page = query.data.page

  return generatePageMeta(page as PageType, { path })
}

export default async function Page({
  params: _params,
}: {
  params: Promise<{ filename: string[] }>
}) {
  const params = await _params
  const data = await client.queries.page({
    relativePath: `${params.filename.join("/")}.mdx`,
  })

  return <ClientPage {...data} />
}
