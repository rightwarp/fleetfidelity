import { HasDividerField } from "@tina/fields/hasDivider"
import { Template } from "tinacms"

export const Hero: Template = {
  name: "hero",
  label: "Page Hero",
  fields: [
    HasDividerField,
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
  ],
}
