import { PageBlocksTeam, PageBlocksTeamGroups } from "@tina/__generated__/types"
import Image from "next/image"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Container } from "../app/Container"
import { HeadingMarkdownComponents } from "../app/MarkdownComponents"

const TeamGroup = ({ title, members }: PageBlocksTeamGroups) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h3 className="font-heading text-lg font-semibold md:text-2xl">
        {title}
      </h3>
      <ul className="flex flex-wrap justify-center gap-6 lg:flex-row">
        {members.map((member) => {
          const { name, title, portrait } = member?.memberRef || {}

          return (
            <li
              key={name}
              className="flex flex-col items-center text-center md:w-52"
            >
              <Image
                src={portrait.src}
                alt={portrait.alt || ""}
                width={140}
                height={140}
                className="mb-4 size-24 rounded-full border-2 border-navy-950 md:size-36"
              />
              <h4 className="font-bold">{name}</h4>
              <p>{title}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const Team = ({ heading, groups, isCollapsed }: PageBlocksTeam) => {
  return (
    <Container
      isCollapsed={isCollapsed}
      outerProps={{ className: "bg-base-200" }}
    >
      <div className="mx-auto mb-8 max-w-[50rem] text-center">
        <TinaMarkdown
          content={heading}
          components={HeadingMarkdownComponents}
        />
      </div>
      <div className="grid gap-12">
        {groups.map((group) => (
          <TeamGroup key={group.title} {...group} />
        ))}
      </div>
    </Container>
  )
}
