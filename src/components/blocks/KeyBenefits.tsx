import { PageBlocksKeyBenefits } from "@tina/__generated__/types"

import { Container } from "../app/Container"

export const KeyBenefits = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  heading,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  benefits,
  hasDivider,
}: PageBlocksKeyBenefits) => {
  return <Container tag="section" hasDivider={hasDivider}></Container>
}
