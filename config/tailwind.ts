import { light } from "daisyui/src/theming/themes"
import { CustomThemeConfig } from "tailwindcss/types/config"

import { tailwindTypography } from "./tailwind-typography"

// Tailwind Theme overrides & additions

export const TAILWIND_THEME: Partial<CustomThemeConfig> = {
  typography: tailwindTypography,

  fontFamily: {
    sans: ["Poppins", "sans-serif"],
    heading: ["League Spartan", "sans-serif"],
  },

  colors: {
    navy: {
      50: "#E7F3FE",
      100: "#D4E9FC",
      200: "#A4D0F9",
      300: "#78BAF7",
      400: "#48A1F4",
      500: "#1D8BF1",
      600: "#0D71CF",
      700: "#0A59A4",
      800: "#074074", // primary shade
      900: "#03203A",
      950: "#02101D",
    },
    green: {
      50: "#E5FFF4",
      100: "#C7FFE8",
      200: "#8FFFD0",
      300: "#5CFFBB",
      400: "#24FFA4",
      500: "#00EB89",
      600: "#00B367", // primary shade
      700: "#00854D",
      800: "#005C36",
      900: "#002E1B",
      950: "#00140C",
    },
  },
}

// DaisyUI custom themes

export const DEFAULT_THEME = {
  ...light,
  primary: "#074074",
  "primary-content": "#ffffff",
  secondary: "#00B367",
  "base-content": "#011527",
}
