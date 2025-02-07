import client from "@tina/__generated__/client"
import { Page, Global } from "@tina/__generated__/types"
import { Metadata } from "next"

// Because Metadata['openGraph']['type'] is not accessible in the Next.js
type OgType =
  | "website"
  | "article"
  | "book"
  | "profile"
  | "music.song"
  | "music.album"
  | "music.playlist"
  | "music.radio_station"
  | "video.movie"
  | "video.episode"
  | "video.tv_show"
  | "video.other"

type MetaConfig = {
  title?: string
  description?: string
  path?: string
}

const getPageTitle = (siteName?: string, pageTitle?: string) =>
  pageTitle ? `${siteName} | ${pageTitle}` : siteName ? siteName : "Needs Title"

const getIcons = (global: Global) => {
  const icons: Metadata["icons"] = []

  if (global?.icons?.baseIcon) {
    icons.push({
      rel: "shortcut icon",
      url: global.icons.baseIcon,
    })
  }

  if (global?.icons?.denseIcon) {
    icons.push({
      rel: "icon",
      type: "image/png",
      url: global.icons.denseIcon,
      sizes: "96x96",
    })
  }

  if (global?.icons?.svgIcon) {
    icons.push({
      rel: "icon",
      type: "image/svg+xml",
      url: global.icons.svgIcon,
    })
  }

  if (global?.icons?.appleIcon) {
    icons.push({
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: global.icons.appleIcon,
    })
  }

  return icons
}

export async function generatePageMeta(
  page?: Page,
  metaConfig?: MetaConfig,
): Promise<Metadata> {
  const result = await client.queries.global({ relativePath: "index.json" })

  const global = result.data.global

  const dynamicTitle = metaConfig?.title
  const dynamicDescription = metaConfig?.description
  const pagePath = metaConfig?.path

  // base metadata

  const title =
    dynamicTitle ||
    getPageTitle(
      global.siteName,
      page?.meta?.metaTitle || global.meta?.metaTitle,
    )
  const description =
    dynamicDescription ||
    page?.meta?.metaDescription ||
    global.meta?.metaDescription ||
    "Needs description"
  const keywords = page?.meta?.metaKeywords || global?.meta?.metaKeywords

  // These are Netlify environment variables but can be replaced for any env var
  const PROD_OR_DEPLOY_URL =
    process.env.URL || process.env.DEPLOY_PRIME_URL || process.env.DEPLOY_URL

  let metadataBase: string | URL = "localhost:3000"
  if (
    process.env.NODE_ENV === "development" &&
    process.env.DEV_METADATA_BASE_URL
  ) {
    metadataBase = new URL(metadataBase!)
  } else if (PROD_OR_DEPLOY_URL) {
    metadataBase = new URL(PROD_OR_DEPLOY_URL)
  } else {
    metadataBase = new URL("https://placehold.co")
  }

  const canonical = `${metadataBase.href}${pagePath ? `${pagePath}/` : ""}`

  // open graph

  const pageOpenGraph = page?.openGraph
  const globalOpenGraph = global.openGraph

  const _ogImage = pageOpenGraph?.image || globalOpenGraph?.image

  const ogImage =
    process.env.NODE_ENV === "development"
      ? `${metadataBase.href}${_ogImage}`
      : _ogImage
  const ogTitle =
    dynamicTitle ||
    getPageTitle(
      global.siteName,
      page?.meta?.metaTitle || global.meta?.metaTitle || "Needs Title",
    )
  const ogDescription =
    dynamicDescription ||
    page?.meta?.metaDescription ||
    global?.meta?.metaDescription ||
    "Needs Description"
  const ogUrl = canonical
  const ogType = (pageOpenGraph?.type || globalOpenGraph?.type) as OgType

  const openGraph: Metadata["openGraph"] = ogImage
    ? {
        siteName: global.siteName,
        title: ogTitle,
        description: ogDescription,
        url: ogUrl,
        type: ogType,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: ogDescription,
          },
        ],
      }
    : null

  // icons

  const icons = getIcons(global as Global)

  return {
    metadataBase,
    title: title,
    description: description,
    keywords,
    alternates: { canonical },
    icons,
    appleWebApp: { title: global.siteName! },
    openGraph,
  }
}
