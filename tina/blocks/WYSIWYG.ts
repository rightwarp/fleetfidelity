import { IsCollapsedField } from "@tina/fields/isCollapsed"
import { Template } from "tinacms"

export const WYSIWYG: Template = {
  name: "wysiwyg",
  label: "WYSIWYG",
  fields: [
    IsCollapsedField,
    {
      name: "content",
      label: "Content",
      type: "rich-text",
      required: true,
    },
  ],
}
