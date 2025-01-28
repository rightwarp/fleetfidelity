import { TinaField } from "tinacms"

export const ImageField: TinaField = {
  name: "image",
  label: "Image",
  type: "object",
  fields: [
    {
      name: "src",
      label: "Image",
      type: "string",
      required: true,
    },
    {
      name: "alt",
      label: "Alt Text",
      type: "string",
      required: true,
    },
  ],
}
