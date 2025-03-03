import { IsCollapsedField } from "@tina/fields/isCollapsed"
import { toReferenceLabel } from "@tina/plugins/referenceLabel"
import { Template } from "tinacms"

export const Testimonials: Template = {
  name: "testimonials",
  label: "Testimonials",
  fields: [
    IsCollapsedField,
    {
      name: "isHidden",
      label: "Is Hidden",
      description: "Toggle to hide this block from the page",
      type: "boolean",
    },
    {
      name: "heading",
      label: "Heading",
      type: "rich-text",
      required: true,
    },
    {
      name: "transitionDelay",
      label: "Transition Delay",
      type: "number",
      description: "The delay between testimonial transitions (in seconds)",
    },
    {
      name: "testimonials",
      label: "Testimonials",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ ...toReferenceLabel(item.testimonialRef) }),
      },
      fields: [
        {
          name: "testimonialRef",
          label: "Testimonial",
          type: "reference",
          collections: ["testimonial"],
          required: true,
        },
      ],
    },
  ],
}
