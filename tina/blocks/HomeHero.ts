import { HasDividerField } from "@tina/fields/hasDivider"
import { toUiLabel } from "@tina/plugins/uiLabel"
import { Template } from "tinacms"

export const HomeHero: Template = {
  name: "homeHero",
  label: "Home Hero",
  fields: [
    HasDividerField,
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
    {
      name: "actions",
      label: "Actions",
      type: "object",
      list: true,
      required: true,
      ui: {
        min: 1,
        max: 2,
        itemProps: (item) => ({ ...toUiLabel(item) }),
      },
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
          required: true,
        },
        {
          name: "href",
          label: "External Link",
          description: "Overrides page link, e.g. for an external website",
          type: "string",
        },
        {
          name: "pageRef",
          label: "Link To Page",
          type: "reference",
          collections: ["page"],
        },
        {
          name: "type",
          label: "Type",
          type: "string",
          options: ["Primary", "Secondary"],
        },
      ],
    },
    {
      name: "features",
      label: "Features",
      type: "object",
      required: true,
      list: true,
      ui: {
        min: 2,
        max: 4,
        itemProps: (item) => ({ ...toUiLabel(item, "label") }),
      },
      fields: [
        {
          name: "icon",
          label: "Icon",
          type: "string",
          options: [
            "LayoutDashboard",
            "UserCog",
            "ListChecks",
            "ShieldCheck",
            "Truck",
            "CircleCheck",
            "Settings",
            "ChartNetwork",
          ],
          required: true,
        },
        {
          name: "label",
          label: "Label",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "images",
      label: "Dashboard Images",
      type: "object",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => ({ ...toUiLabel(item, "alt") }),
      },
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
    },
  ],
}
