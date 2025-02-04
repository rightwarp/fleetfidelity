import { ReactNode } from "react"

import { cn } from "@/utils/helpers"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MarkdownComponentsType = Record<string, (props?: any) => ReactNode>

export const MarkdownComponents: MarkdownComponentsType = {
  h1: ({ className, ...props }) => (
    <h1
      {...props}
      className={cn(
        "font-heading text-3xl leading-[100%] tracking-tight text-black md:text-5xl lg:text-[3.75rem]",
        className,
      )}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      {...props}
      className={cn(
        "font-heading text-2xl leading-[100%] tracking-tight text-black md:text-4xl lg:text-[3rem]",
        className,
      )}
    />
  ),
  h3: (props) => <h3 {...props} className="font-heading" />,
  h4: (props) => <h4 {...props} className="font-heading" />,
  h5: (props) => <h5 {...props} className="font-heading" />,
  h6: (props) => <h6 {...props} className="font-heading" />,
}

export const HomeHeroHeadingMarkdownComponents: MarkdownComponentsType = {
  ...MarkdownComponents,
  h1: (props) =>
    MarkdownComponents.h1({
      ...props,
      className: cn("mx-auto max-w-[60rem]"),
    }),
  p: (props) => (
    <p {...props} className="mx-auto max-w-[50rem] text-base md:text-xl" />
  ),
}

export const PrimarySectionHeadingMarkdownComponents: MarkdownComponentsType = {
  ...MarkdownComponents,
  h2: (props) =>
    MarkdownComponents.h2({
      ...props,
      className: cn("mx-auto max-w-[60rem] text-white"),
    }),
  p: (props) => (
    <p
      {...props}
      className="mx-auto max-w-[50rem] text-base text-primary-content md:text-xl"
    />
  ),
}

export const DefaultSectionHeadingMarkdownComponents: MarkdownComponentsType = {
  ...MarkdownComponents,
  h2: (props) =>
    MarkdownComponents.h2({
      ...props,
      className: cn("mx-auto max-w-[60rem] text-black"),
    }),
  p: (props) => (
    <p {...props} className="mx-auto max-w-[50rem] text-base md:text-xl" />
  ),
}
