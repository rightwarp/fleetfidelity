import { HasDividerField } from "@tina/fields/hasDivider"
import { Template } from "tinacms"

export const WYSIWYG: Template = {
  name: "wysiwyg",
  label: "WYSIWYG",
  fields: [
    HasDividerField,
    {
      name: "content",
      label: "Content",
      type: "rich-text",
      required: true,
    },
  ],
}
