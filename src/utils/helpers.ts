import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getRoute = (route?: string) => {
  if (route === "home" || !route) {
    return "/"
  }

  return `/${route}`
}
