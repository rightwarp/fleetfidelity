import { PageBlocksBeliefs } from "@tina/__generated__/types"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container } from "../app/Container"
import { HeadingMarkdownComponents } from "../app/MarkdownComponents"

export const Beliefs = ({
  heading,
  beliefs,
  hasDivider,
}: PageBlocksBeliefs) => {
  return (
    <Container hasDivider={hasDivider}>
      <div className="mx-auto max-w-[50rem] text-center">
        <TinaMarkdown
          content={heading}
          components={HeadingMarkdownComponents}
        />
      </div>
      <ul className="mx-auto flex max-w-[50rem] flex-col gap-4 text-center">
        {beliefs?.map((belief, idx) => (
          <li key={idx} className="grid gap-4">
            {belief && <span className="font-semibold">{belief}</span>}
            {idx !== beliefs.length - 1 && (
              <span className="mx-auto block w-16">
                <hr className="divide-y-2 border-primary/20" />
              </span>
            )}
          </li>
        ))}
      </ul>
    </Container>
  )
}
