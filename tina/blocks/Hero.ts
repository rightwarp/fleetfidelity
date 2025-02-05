import { IsCollapsedField } from "@tina/fields/isCollapsed"
import { Template } from "tinacms"

export const Hero: Template = {
  name: "hero",
  label: "Page Hero",
  fields: [
    IsCollapsedField,
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
  ],
}
