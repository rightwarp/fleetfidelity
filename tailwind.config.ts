import TailwindForms from "@tailwindcss/forms"
import TailwindTypography from "@tailwindcss/typography"
import DaisyUI from "daisyui"
import type { Config } from "tailwindcss"

import { TAILWIND_THEME, DEFAULT_THEME } from "./config/tailwind"

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./tina/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { extend: TAILWIND_THEME },
  plugins: [TailwindTypography, TailwindForms, DaisyUI],
  daisyui: {
    themes: [{ light: DEFAULT_THEME }],
  },
} satisfies Config
