import { createImageField } from "@tina/fields/image"
import { slugify } from "@tina/plugins/slugify"
import { Collection } from "tinacms"

export const Testimonial: Collection = {
  name: "testimonial",
  label: "Testimonials",
  path: "src/content/testimonials",
  format: "json",
  ui: {
    ...slugify("name"),
  },
  fields: [
    {
      name: "quote",
      label: "Quote",
      type: "string",
      required: true,
    },
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
