import { TinaField } from "tinacms"

type ImageFieldParams = {
  name: string
  label: string
  required?: boolean
}

export const createImageField = ({
  name,
  label,
  required,
}: ImageFieldParams): TinaField => ({
  name,
  label,
  type: "object",
  required,
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
    },
  ],
})
