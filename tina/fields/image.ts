import { TinaField } from "tinacms"

type ImageFieldParams = {
  name: string
  label: string
}

export const createImageField = ({
  name,
  label,
}: ImageFieldParams): TinaField => ({
  name,
  label,
  type: "object",
  fields: [
    {
      name: "src",
      label: "Image",
      type: "image",
      required: true,
    },
    {
      name: "alt",
      label: "Alt Text",
      type: "string",
      required: true,
    },
  ],
})
