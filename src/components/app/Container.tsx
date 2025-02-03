import { HTMLAttributes } from "react"

import { cn } from "@/utils/helpers"

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tag: any
}

export const Container = ({
  tag: Tag = "div",
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <Tag
      className={cn(
        "container mx-auto px-5 py-12 transition-[max-width] md:px-8 lg:px-12 lg:py-24",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
