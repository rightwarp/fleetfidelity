export const getRoute = (route?: string) => {
  if (route === "home" || !route) {
    return "/"
  }

  return `/${route}`
}
