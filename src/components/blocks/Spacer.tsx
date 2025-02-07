import { PageBlocksSpacer } from "@tina/__generated__/types"

import { cn } from "@/utils/helpers"

const Colors: Record<string, string> = {
  Transparent: "bg-transparent",
  Default: "bg-base-100",
  Primary: "bg-primary",
  Neutral: "bg-base-200",
}

export const Spacer = ({ color }: PageBlocksSpacer) => {
  return (
    <div
      className={cn(
        "h-16 w-full lg:h-24",
        color ? Colors[color] : Colors.Transparent,
      )}
      aria-hidden={true}
    />
  )
}
