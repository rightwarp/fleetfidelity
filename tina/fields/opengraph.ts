import { TinaField } from "tinacms"

export const OpenGraphField: TinaField = {
  type: "object",
  name: "openGraph",
  label: "Open Graph",
  fields: [
    {
      name: "image",
      label: "Image",
      description:
        "1200x630 (pixels) is recommended. Learn more: https://ogp.me/",
      type: "image",
      required: true,
    },
    {
      name: "type",
      label: "Type",
      type: "string",
      options: ["website", "article", "product"],
      ui: {
        defaultValue: "website",
      },
    },
  ],
}
