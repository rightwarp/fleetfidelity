/**
 * Use the label and href fields to create a human-readable reference label
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toUiLabel = (item: Record<string, any>, property = "label") => {
  return { label: item[property] }
}
