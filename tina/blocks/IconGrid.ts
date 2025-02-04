import { HasDividerField } from "@tina/fields/hasDivider"
import { createImageField } from "@tina/fields/image"
import { Template } from "tinacms"

export const IconGrid: Template = {
  name: "iconGrid",
  label: "Icon Grid",
  fields: [
    HasDividerField,
    {
      name: "theme",
      label: "Theme",
      type: "string",
      options: ["Primary", "Default"],
    },
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
    {
      name: "iconLayout",
      label: "Icon Layout Orientation",
      type: "string",
      options: ["Vertical", "Horizontal"],
    },
    {
      name: "iconSize",
      label: "Icon Size",
      type: "string",
      options: ["Normal", "Large"],
    },
    {
      name: "hasIconBadge",
      label: "Has Icon Badges",
      type: "boolean",
    },
    {
      name: "icons",
      label: "Icons",
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
        },
      ],
    },
    {
      name: "bottomText",
      label: "Bottom Text",
      type: "rich-text",
    },
  ],
}
