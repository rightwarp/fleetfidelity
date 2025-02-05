import { PageBlocksKeyBenefits } from "@tina/__generated__/types"
import Image from "next/image"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { cn } from "@/utils/helpers"

import { Container } from "../app/Container"
import { HeadingMarkdownComponents } from "../app/MarkdownComponents"

export const KeyBenefits = ({
  heading,
  benefits,
  hasDivider,
}: PageBlocksKeyBenefits) => {
  return (
    <Container tag="section" hasDivider={hasDivider}>
      <div className="text-center">
        <TinaMarkdown
          content={heading}
          components={HeadingMarkdownComponents}
        />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:mx-auto lg:max-w-[50rem] lg:grid-cols-1">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={cn(
              "mx-auto flex max-w-64 flex-col text-center lg:max-w-[42rem] lg:flex-row lg:gap-12",
              {
                "lg:me-auto lg:ms-0": index % 2 === 0,
                "lg:me-0 lg:ms-auto lg:flex-row-reverse": index % 2 !== 0,
              },
            )}
          >
            <Image
              src={benefit.image.src}
              alt={benefit.image.alt || ""}
              width={200}
              height={200}
              className="mx-auto mb-6 size-24 rounded-full border-2 border-navy-900 lg:mb-0 lg:size-52"
            />
            <div className="lg:flex lg:flex-col lg:justify-center lg:text-start">
              <h3 className="mb-2 font-heading text-xl font-semibold lg:text-2xl">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
