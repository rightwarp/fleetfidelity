import { Page, PageBlocks } from "@tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"

import { HomeHero } from "./HomeHero"
import { IconGrid } from "./IconGrid"

export const Blocks = (props: Page) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...(block as PageBlocks)} />
              </div>
            )
          })
        : null}
    </>
  )
}

const Block = (block: PageBlocks) => {
  switch (block?.__typename) {
    case "PageBlocksHomeHero":
      return <HomeHero {...block} />
    case "PageBlocksIconGrid":
      return <IconGrid {...block} />
    default:
      return block?.__typename
  }
}
