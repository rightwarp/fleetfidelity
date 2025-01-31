import { toReferenceLabel } from "@tina/plugins/referenceLabel"
import { toUiLabel } from "@tina/plugins/uiLabel"
import { Template } from "tinacms"

export const Team: Template = {
  name: "team",
  label: "Team",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
    {
      name: "groups",
      label: "Groups",
      type: "object",
      required: true,
      list: true,
      ui: {
        itemProps: (item) => ({ ...toUiLabel(item, "title") }),
      },
      fields: [
        {
          name: "title",
          label: "Group Title",
          type: "string",
          required: true,
        },
        {
          name: "members",
          label: "Members",
          type: "object",
          list: true,
          required: true,
          ui: {
            itemProps: (item) => ({ ...toReferenceLabel(item.memberRef) }),
          },
          fields: [
            {
              name: "memberRef",
              label: "Member",
              type: "reference",
              collections: ["team"],
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
