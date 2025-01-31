import { toReferenceLabel } from "@tina/plugins/referenceLabel"
import { Template } from "tinacms"

export const Resources: Template = {
  name: "resources",
  label: "Resources",
  fields: [
    {
      name: "resources",
      label: "Resources",
      type: "object",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => ({ ...toReferenceLabel(item.resourceRef) }),
      },
      fields: [
        {
          name: "resourceRef",
          label: "Resource",
          type: "reference",
          collections: ["resource"],
          required: true,
        },
      ],
    },
  ],
}
