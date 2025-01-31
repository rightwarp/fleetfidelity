import { createImageField } from "@tina/fields/image"
import { slugify } from "@tina/plugins/slugify"
import { Collection } from "tinacms"

export const Team: Collection = {
  name: "team",
  label: "Team",
  path: "src/content/team",
  format: "json",
  ui: {
    ...slugify("name"),
  },
  fields: [
    {
      name: "name",
      label: "Name",
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
    createImageField({ name: "portrait", label: "Portrait", required: true }),
  ],
}
