import { HasDividerField } from "@tina/fields/hasDivider"
import { Template } from "tinacms"

export const Beliefs: Template = {
  name: "beliefs",
  label: "Beliefs",
  fields: [
    HasDividerField,
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
