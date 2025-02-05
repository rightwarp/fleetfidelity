import { ReactNode } from "react"

import { cn } from "@/utils/helpers"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MarkdownComponentsType = Record<string, (props?: any) => ReactNode>

export const HeadingMarkdownComponents: MarkdownComponentsType = {
  h1: ({ className, ...props }) => (
    <h1
      {...props}
      className={cn(
        "font-heading text-3xl !leading-[100%] tracking-tight text-black md:text-5xl lg:text-[3.75rem]",
        className,
      )}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      {...props}
      className={cn(
        "mx-auto mb-4 max-w-[60rem] font-heading text-[1.75rem] !leading-[100%] tracking-tight text-black md:text-4xl lg:mb-6 lg:text-[3rem]",
        className,
      )}
    />
  ),
  h3: (props) => <h3 {...props} className="font-heading" />,
  h4: (props) => <h4 {...props} className="font-heading" />,
  h5: (props) => <h5 {...props} className="font-heading" />,
  h6: (props) => <h6 {...props} className="font-heading" />,
  p: (props) => (
    <p
      {...props}
      className="mx-auto mb-8 max-w-[50rem] text-base md:text-xl lg:mb-12"
    />
  ),
  a: (props) => <a {...props} className="link" />,
}

export const HomeHeroHeadingMarkdownComponents: MarkdownComponentsType = {
  ...HeadingMarkdownComponents,
  h1: (props) =>
    HeadingMarkdownComponents.h1({
      ...props,
      className: cn("mx-auto mb-6 max-w-[60rem] md:mb-8"),
    }),
  p: (props) => (
    <p
      {...props}
      className="mx-auto mb-6 max-w-[50rem] text-base md:mb-8 md:text-xl"
    />
  ),
}

// Used when a page block is themed with a primary background

export const PrimarySectionHeadingMarkdownComponents: MarkdownComponentsType = {
  ...HeadingMarkdownComponents,
  h2: (props) =>
    HeadingMarkdownComponents.h2({
      ...props,
      className: cn("text-white"),
    }),
  p: (props) => <p {...props} className="text-primary-content" />,
}
