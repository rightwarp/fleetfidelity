import { IconsField } from "@tina/fields/icons"
import { MetadataField } from "@tina/fields/metadata"
import { OpenGraphField } from "@tina/fields/opengraph"
import { Collection } from "tinacms"

export const Global: Collection = {
  name: "global",
  label: "Global",
  path: "src/content/global",
  format: "json",
  // https://tina.io/docs/editing/single-document-collections#caveats
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "siteName",
      label: "Site Name",
      description: "Will be used in the site title. E.g., MyCoolWebsite",
      type: "string",
      required: true,
    },
    IconsField,
    MetadataField,
    OpenGraphField,
    {
      name: "googleTagId",
      label: "Google Tag ID",
      description:
        "Learn more: https://support.google.com/analytics/answer/9539598?hl=en",
      type: "string",
    },
  ],
}
