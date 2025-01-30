import { createImageField } from "@tina/fields/image"
import { Template } from "tinacms"

export const ROIContributors: Template = {
  name: "roiContributors",
  label: "ROI Contributors",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
    {
      name: "items",
      label: "Items",
      type: "object",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => ({ label: item.title }),
      },
      fields: [
        createImageField({ name: "icon", label: "Icon", required: true }),
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
