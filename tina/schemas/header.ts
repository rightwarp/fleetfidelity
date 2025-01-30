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
    createImageField({ name: "logo", label: "Logo", required: true }),
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
          label: "External Link",
          description: "Overrides page link, e.g. for an external website",
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
          options: ["Primary", "Secondary", "Login"],
        },
      ],
    },
  ],
}
