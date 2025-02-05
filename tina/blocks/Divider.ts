import { Template } from "tinacms"

export const Divider: Template = {
  name: "divider",
  label: "Divider",
  fields: [
    {
      name: "color",
      label: "Color",
      type: "string",
      options: ["Default", "Inverted"],
    },
  ],
}
