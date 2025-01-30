import { createImageField } from "@tina/fields/image"
import { toPageLabel } from "@tina/plugins/pageLabel"
import { Collection } from "tinacms"

export const Footer: Collection = {
  name: "footer",
  label: "Footer",
  path: "src/content/footer",
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
      ],
    },
    {
      name: "tagline",
      label: "Tagline",
      type: "string",
    },
    {
      name: "contact",
      label: "Contact Methods",
      type: "object",
      required: true,
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
          name: "icon",
          label: "Icon",
          type: "string",
          options: ["Mail", "Phone"],
        },
      ],
    },
    {
      name: "social",
      label: "Social Links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.href }),
      },
      fields: [
        {
          name: "href",
          label: "Link",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "address",
      label: "Address",
      type: "object",
      fields: [
        {
          name: "line1",
          label: "Address Line One",
          type: "string",
          required: true,
        },
        {
          name: "line2",
          label: "Address Line Two",
          type: "string",
          required: true,
        },
        {
          name: "mapLink",
          label: "Map Link",
          type: "string",
        },
      ],
    },
    {
      name: "copyright",
      label: "Copyright Text",
      type: "string",
    },
  ],
}
