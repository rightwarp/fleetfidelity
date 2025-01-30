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
          label: "Href",
          type: "string",
          required: true,
        },
        {
          name: "type",
          label: "Type",
          type: "string",
          options: ["primary", "secondary"],
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
