import { toUiLabel } from "@tina/plugins/uiLabel"
import { Template } from "tinacms"

export const HomeHero: Template = {
  name: "homeHero",
  label: "Home Hero",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
    {
      name: "actions",
      label: "Actions",
      type: "object",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => ({ ...toUiLabel(item) }),
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
          name: "type",
          label: "Type",
          type: "string",
          options: ["Primary", "Secondary"],
        },
      ],
    },
    {
      name: "images",
      label: "Dashboard Images",
      type: "object",
      list: true,
      required: true,
      fields: [
        {
          name: "src",
          label: "Image",
          type: "image",
          required: true,
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
          required: true,
        },
      ],
    },
  ],
}
