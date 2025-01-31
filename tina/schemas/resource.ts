import { createImageField } from "@tina/fields/image"
import { slugify } from "@tina/plugins/slugify"
import { Collection } from "tinacms"

export const Resource: Collection = {
  name: "resource",
  label: "Resources",
  path: "src/content/resources",
  format: "json",
  ui: {
    ...slugify("type"),
  },
  fields: [
    {
      name: "href",
      label: "Link",
      type: "string",
      required: true,
    },
    {
      name: "type",
      label: "Type",
      type: "string",
      isTitle: true,
      required: true,
    },
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
    createImageField({ name: "thumbnail", label: "Thumbnail", required: true }),
  ],
}
