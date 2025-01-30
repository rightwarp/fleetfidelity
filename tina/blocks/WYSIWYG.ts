import { Template } from "tinacms"

export const WYSIWYG: Template = {
  name: "wysiwyg",
  label: "WYSIWYG",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "rich-text",
      required: true,
    },
  ],
}
