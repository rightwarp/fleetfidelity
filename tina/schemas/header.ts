import { createImageField } from "@tina/fields/image"
import { toPageLabel } from "@tina/plugins/pageLabel"
import { Collection } from "tinacms"

export const Header: Collection = {
  name: "header",
  label: "Header",
  path: "src/content/header",
  format: "json",
  // https://tina.io/docs/editing/single-document-collections#caveats
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    createImageField({ name: "logo", label: "Logo" }),
    {
      name: "navigation",
      label: "Navigation",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          ...toPageLabel(item),
        }),
      },
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
          required: true,
        },
        {
          name: "href",
          label: "Href",
          description: "Use when the link is external",
          type: "string",
        },
        {
          name: "pageRef",
          label: "Link To Page",
          type: "reference",
          collections: ["page"],
        },
        {
          name: "actionType",
          label: "Action Type",
          type: "string",
          options: ["primary", "secondary", "login"],
        },
      ],
    },
  ],
}
