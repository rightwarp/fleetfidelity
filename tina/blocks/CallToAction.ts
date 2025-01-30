import { toUiLabel } from "@tina/plugins/uiLabel"
import { Template } from "tinacms"

export const CallToAction: Template = {
  name: "callToAction",
  label: "Call To Action",
  fields: [
    {
      name: "theme",
      label: "Theme",
      type: "string",
      options: ["primary", "default"],
    },
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
          name: "isExternal",
          label: "Is External Link",
          type: "boolean",
        },
        {
          name: "type",
          label: "Type",
          type: "string",
          options: ["primary", "secondary"],
        },
      ],
    },
  ],
}
