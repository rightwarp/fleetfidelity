import { PageBlocksResources } from "@tina/__generated__/types"

import { Container } from "../app/Container"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Resources = ({ resources, isCollapsed }: PageBlocksResources) => {
  return (
    <Container
      tag="section"
      isCollapsed={isCollapsed}
      className="mx-auto max-w-[70rem]"
    >
      Resources
    </Container>
  )
}
