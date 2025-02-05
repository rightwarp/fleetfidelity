import { Maybe } from "@tina/__generated__/types"
import { HTMLAttributes } from "react"

import { cn } from "@/utils/helpers"

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tag?: any
  isCollapsed?: Maybe<boolean> | boolean
  outerProps?: HTMLAttributes<HTMLElement>
}

export const Container = ({
  tag: Tag = "div",
  children,
  className,
  outerProps = {},
  isCollapsed = false,
  ...props
}: ContainerProps) => {
  return (
    <div
      {...outerProps}
      className={cn(
        {
          "py-16 lg:py-24": !isCollapsed,
        },
        outerProps.className,
      )}
    >
      <Tag
        className={cn(
          "container mx-auto px-5 transition-[max-width] md:px-8 lg:px-12",
          className,
        )}
        {...props}
      >
        {children}
      </Tag>
    </div>
  )
}
