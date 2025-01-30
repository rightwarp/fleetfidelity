import { Template } from "tinacms"

export const Hero: Template = {
  name: "hero",
  label: "Page Hero",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
  ],
}
