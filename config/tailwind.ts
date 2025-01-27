import { light } from "daisyui/src/theming/themes"
import { CustomThemeConfig } from "tailwindcss/types/config"

import { tailwindTypography } from "./tailwind-typography"

// Tailwind Theme overrides & additions

export const TAILWIND_THEME: Partial<CustomThemeConfig> = {
  typography: tailwindTypography,

  // TODO: add navy and green palette
}

// DaisyUI custom themes

export const DEFAULT_THEME = {
  ...light,
  // primary: "#FF00F0",
  // secondary: "#FF257C",
  // accent: "#FF4518",
  // "base-100": "#FFFCFC",
  // "base-200": "#ECEFFF",
  // "base-300": "#D3DAFF",
}
