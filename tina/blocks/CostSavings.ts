import { createImageField } from "@tina/fields/image"
import { Template } from "tinacms"

export const CostSavings: Template = {
  name: "costSavings",
  label: "Cost Savings",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
    createImageField({ name: "image", label: "Image", required: true }),
  ],
}
