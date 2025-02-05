import { createImageField } from "@tina/fields/image"
import { IsCollapsedField } from "@tina/fields/isCollapsed"
import { Template } from "tinacms"

export const CostSavings: Template = {
  name: "costSavings",
  label: "Cost Savings",
  fields: [
    IsCollapsedField,
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
    createImageField({ name: "image", label: "Image", required: true }),
  ],
}
