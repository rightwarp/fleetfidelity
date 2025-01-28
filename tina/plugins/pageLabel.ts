/**
 * Use the label and href fields to create a human-readable reference label
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toPageLabel = (item: Record<string, any>) => {
  let identifier: string = ""

  if (item.href) {
    identifier = `${item.href.slice(0, 24)}...`
  }

  return { label: `${item.label}${identifier ? ` (${identifier})` : ""}` }
}
