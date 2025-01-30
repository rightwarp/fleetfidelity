import { CallToAction } from "@tina/blocks/CallToAction"
import { CostSavings } from "@tina/blocks/CostSavings"
import { Hero } from "@tina/blocks/Hero"
import { HomeHero } from "@tina/blocks/HomeHero"
import { ROIContributors } from "@tina/blocks/ROIContributors"
import { Testimonials } from "@tina/blocks/Testimonials"
import { MetadataField } from "@tina/fields/metadata"
import { OpenGraphField } from "@tina/fields/opengraph"
import { slugify } from "@tina/plugins/slugify"
import { Collection } from "tinacms"

export const Page: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`
      }
      return document._sys.filename
    },
    ...slugify("title"),
  },
  fields: [
    {
      name: "title",
      label: "Title",
      description: "The title displayed in the CMS",
      type: "string",
      isTitle: true,
      required: true,
    },
    MetadataField,
    OpenGraphField,
    {
      name: "blocks",
      label: "Blocks",
      type: "object",
      list: true,
      templates: [
        HomeHero,
        Hero,
        ROIContributors,
        CostSavings,
        Testimonials,
        CallToAction,
      ],
    },
  ],
}
