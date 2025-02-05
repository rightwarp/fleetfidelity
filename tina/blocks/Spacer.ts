import { Template } from "tinacms"

export const Spacer: Template = {
  name: "spacer",
  label: "Spacer",
  fields: [
    {
      name: "color",
      label: "Color",
      type: "string",
      options: ["Default", "Neutral", "Primary", "Transparent"],
    },
  ],
}
