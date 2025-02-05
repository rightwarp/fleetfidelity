import { Beliefs } from "@tina/blocks/Beliefs"
import { CallToAction } from "@tina/blocks/CallToAction"
import { CompanyStory } from "@tina/blocks/CompanyStory"
import { CostSavings } from "@tina/blocks/CostSavings"
import { Divider } from "@tina/blocks/Divider"
import { Hero } from "@tina/blocks/Hero"
import { HomeHero } from "@tina/blocks/HomeHero"
import { IconGrid } from "@tina/blocks/IconGrid"
import { KeyBenefits } from "@tina/blocks/KeyBenefits"
import { Resources } from "@tina/blocks/Resources"
import { Spacer } from "@tina/blocks/Spacer"
import { Team } from "@tina/blocks/Team"
import { Testimonials } from "@tina/blocks/Testimonials"
import { WYSIWYG } from "@tina/blocks/WYSIWYG"
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
        // shared
        CallToAction,
        IconGrid,
        WYSIWYG,
        Hero,
        Spacer,
        Divider,

        // home
        HomeHero,
        CostSavings,
        Testimonials,
        KeyBenefits,

        // about
        CompanyStory,
        Beliefs,
        Team,

        // resources
        Resources,

        // contact
      ],
    },
  ],
}
