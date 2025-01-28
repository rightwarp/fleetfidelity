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
      name: "googleTag",
      label: "Google Tag ID",
      description:
        "Learn more: https://support.google.com/analytics/answer/9539598?hl=en",
      type: "string",
    },
    {
      name: "privacyPolicy",
      label: "Privacy Policy",
      type: "object",
      fields: [
        {
          name: "privacy",
          label: "Privacy Policy",
          type: "rich-text",
          required: true,
        },
      ],
    },
    {
      name: "termsOfService",
      label: "Terms of Service",
      type: "object",
      fields: [
        {
          name: "terms",
          label: "Terms of Service",
          type: "rich-text",
          required: true,
        },
      ],
    },
  ],
}
