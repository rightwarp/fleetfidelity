import { TinaField } from "tinacms"

const KEYWORD_MIN = 3

export const MetadataField: TinaField = {
  type: "object",
  name: "seo",
  label: "SEO & Metadata",
  fields: [
    {
      name: "metaTitle",
      label: "Title",
      type: "string",
      required: true,
    },
    {
      name: "metaDescription",
      label: "Description",
      type: "string",
    },
    {
      name: "metaKeywords",
      label: "Keywords (comma separated)",
      type: "string",
      ui: {
        validate: (input) => {
          const keywords = input?.split(",")
          if (keywords && keywords.length < KEYWORD_MIN) {
            return `At least ${KEYWORD_MIN} keywords are required`
          }
        },
      },
    },
    {
      name: "url",
      label: "Canonical URL or Path",
      type: "string",
      description: "E.g., https://website.com or /blog",
      ui: {
        validate: (input) => {
          if (input && !input.startsWith("/") && !input.startsWith("http")) {
            return "Must be a valid URL or relative path"
          }
        },
      },
    },
  ],
}
