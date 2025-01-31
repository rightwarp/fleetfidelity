import { createImageField } from "@tina/fields/image"
import { Template } from "tinacms"

export const CompanyStory: Template = {
  name: "companyStory",
  label: "Company Story",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "rich-text",
      required: true,
    },
    createImageField({
      name: "bgImage",
      label: "Background Image",
      required: true,
    }),
  ],
}
