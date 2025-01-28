import { TinaField } from "tinacms"

export const IconsField: TinaField = {
  name: "icons",
  label: "Icons",
  type: "object",
  fields: [
    {
      name: "baseIcon",
      label: "Favicon",
      description: "Must be 32x32 pixels",
      type: "image",
    },
    {
      name: "denseIcon",
      label: "Dense Favicon",
      description: "Must be 96x96 pixels",
      type: "image",
    },
    {
      name: "svgIcon",
      label: "Lossless Icon",
      description: "Must be SVG file format",
      type: "image",
    },
    {
      name: "appleIcon",
      label: "Apple Icon",
      description: "Must be 180x180 pixels",
      type: "image",
    },
  ],
}
