import { IsCollapsedField } from "@tina/fields/isCollapsed"
import { Template } from "tinacms"

export const Beliefs: Template = {
  name: "beliefs",
  label: "Beliefs",
  fields: [
    IsCollapsedField,
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
    {
      name: "beliefs",
      label: "Beliefs",
      type: "string",
      list: true,
    },
  ],
}
