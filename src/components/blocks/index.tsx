import { Page, PageBlocks } from "@tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"

import { CallToAction } from "./CallToAction"
import { CompanyStory } from "./CompanyStory"
import { CostSavings } from "./CostSavings"
import { Hero } from "./Hero"
import { HomeHero } from "./HomeHero"
import { IconGrid } from "./IconGrid"
import { KeyBenefits } from "./KeyBenefits"
import { Testimonials } from "./Testimonials"

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
    // shared blocks
    case "PageBlocksIconGrid":
      return <IconGrid {...block} />
    case "PageBlocksCallToAction":
      return <CallToAction {...block} />
    case "PageBlocksHero":
      return <Hero {...block} />

    // home page blocks
    case "PageBlocksHomeHero":
      return <HomeHero {...block} />
    case "PageBlocksCostSavings":
      return <CostSavings {...block} />
    case "PageBlocksTestimonials":
      return <Testimonials {...block} />
    case "PageBlocksKeyBenefits":
      return <KeyBenefits {...block} />

    // about page blocks
    case "PageBlocksCompanyStory":
      return <CompanyStory {...block} />

    // default
    default:
      return block?.__typename
  }
}
