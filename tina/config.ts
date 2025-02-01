import { defineConfig } from "tinacms"

import { Footer } from "./schemas/footer"
import { Global } from "./schemas/global"
import { Header } from "./schemas/header"
import { Page } from "./schemas/page"
import { Resource } from "./schemas/resource"
import { Team } from "./schemas/team"
import { Testimonial } from "./schemas/testimonial"

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main"

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  schema: {
    collections: [
      // singletons
      Global,
      Header,
      Footer,

      // builders
      Page,

      // shared
      Testimonial,
      Resource,
      Team,
    ],
  },
})
