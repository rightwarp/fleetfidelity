import { createImageField } from "@tina/fields/image"
import { IsCollapsedField } from "@tina/fields/isCollapsed"
import { Template } from "tinacms"

export const CompanyStory: Template = {
  name: "companyStory",
  label: "Company Story",
  fields: [
    IsCollapsedField,
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
