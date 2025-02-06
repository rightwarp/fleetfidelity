import { PageBlocksHubSpotForm } from "@tina/__generated__/types"
import { TriangleAlert } from "lucide-react"
import { PropsWithChildren } from "react"
import { v4 as uuidv4 } from "uuid"

import { HubspotProvider } from "@/vendor/HubspotProvider"
import { useHubspotForm } from "@/vendor/useHubSpot"

import { Container } from "../app/Container"

const FormWrapper = ({ children }: PropsWithChildren) => {
  return <HubspotProvider>{children}</HubspotProvider>
}

const HubspotForm = ({
  formId,
  portalId,
  instanceId,
}: {
  formId: string
  portalId: string
  instanceId: string
}) => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId,
    formId,
    target: `#hubspot-form-${instanceId}`,
  })

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 text-center text-red-500 sm:flex-row">
        <TriangleAlert size={20} className="inline" /> Something went wrong, try
        again later.
      </div>
    )
  }

  if (!loaded || !formCreated) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 text-center text-base-content">
        <span className="loading text-neutral-400" /> Loading form, just a
        moment.
      </div>
    )
  }

  return (
    <div id={`hubspot-form-${instanceId}`} className="mx-auto max-w-[35rem]" />
  )
}

export const HubSpotForm = ({
  formId,
  portalId,
  isCollapsed,
}: PageBlocksHubSpotForm) => {
  if (!formId || !portalId) return null

  const instanceId = uuidv4()

  return (
    <FormWrapper>
      <Container tag="section" isCollapsed={isCollapsed}>
        <HubspotForm
          formId={formId}
          portalId={portalId}
          instanceId={instanceId}
        />
      </Container>
    </FormWrapper>
  )
}
