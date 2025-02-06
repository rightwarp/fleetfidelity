import { IsCollapsedField } from "@tina/fields/isCollapsed"
import { Template } from "tinacms"

export const HubSpotForm: Template = {
  name: "hubSpotForm",
  label: "HubSpot Form",
  fields: [
    IsCollapsedField,
    {
      name: "portalId",
      label: "Portal ID",
      type: "string",
      required: true,
    },
    {
      name: "formId",
      label: "Form ID",
      type: "string",
      required: true,
    },
  ],
}
