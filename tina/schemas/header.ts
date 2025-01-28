import { createImageField } from "@tina/fields/image"
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
        itemProps: (item) => ({ label: item.label }),
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
          type: "string",
          required: true,
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
