import { PageBlocksDivider } from "@tina/__generated__/types"

import { cn } from "@/utils/helpers"

const Colors: Record<string, string> = {
  Default: "divide-base-300",
  Inverted: "divide-white/20",
}

export const Divider = ({ color }: PageBlocksDivider) => {
  return (
    <hr className={cn("divide-y", color ? Colors[color] : Colors.Default)} />
  )
}
