import { HasDividerField } from "@tina/fields/hasDivider"
import { createImageField } from "@tina/fields/image"
import { Template } from "tinacms"

export const CostSavings: Template = {
  name: "costSavings",
  label: "Cost Savings",
  fields: [
    HasDividerField,
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
    createImageField({ name: "image", label: "Image", required: true }),
  ],
}
