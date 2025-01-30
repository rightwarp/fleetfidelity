import { createImageField } from "@tina/fields/image"
import { Template } from "tinacms"

export const KeyBenefits: Template = {
  name: "keyBenefits",
  label: "Key Benefits",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
    {
      name: "benefits",
      label: "Benefits",
      type: "object",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => ({ label: item.title }),
      },
      fields: [
        createImageField({ name: "image", label: "Image", required: true }),
        {
          name: "title",
          label: "Title",
          type: "string",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "string",
          required: true,
        },
      ],
    },
  ],
}
