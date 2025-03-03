import { ReactNode } from "react"

import { cn } from "@/utils/helpers"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MarkdownComponentsType = Record<string, (props?: any) => ReactNode>

export const HeadingMarkdownComponents: MarkdownComponentsType = {
  h1: ({ className, ...props }) => (
    <h1
      {...props}
      className={cn(
        "mb-6 font-heading text-3xl !leading-[100%] tracking-tight text-black md:mb-8 md:text-5xl lg:text-[3.75rem]",
        className,
      )}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      {...props}
      className={cn(
        "mb-4 font-heading text-[1.75rem] !leading-[100%] tracking-tight text-black md:text-4xl lg:mb-6 lg:text-[3rem]",
        className,
      )}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      {...props}
      className={cn("mb-4 text-base md:text-xl lg:mb-8", className)}
    />
  ),
  a: (props) => <a {...props} className="link" />,
}

export const HomeHeroHeadingMarkdownComponents: MarkdownComponentsType = {
  ...HeadingMarkdownComponents,
  h1: (props) =>
    HeadingMarkdownComponents.h1({
      ...props,
      className: cn("mb-6 md:mb-8"),
    }),
  p: (props) =>
    HeadingMarkdownComponents.p({ ...props, className: cn("mb-6") }),
}

// Used when a page block is themed with a primary background

export const PrimarySectionHeadingMarkdownComponents: MarkdownComponentsType = {
  ...HeadingMarkdownComponents,
  h2: (props) =>
    HeadingMarkdownComponents.h2({
      ...props,
      className: cn("text-white"),
    }),
  p: (props) =>
    HeadingMarkdownComponents.p({
      ...props,
      className: cn("text-primary-content"),
    }),
}
