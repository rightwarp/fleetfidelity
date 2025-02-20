/** @type {import('next-sitemap').IConfig} */
module.exports = {
  output: "standalone",
  siteUrl: "https://www.fleetfidelity.com/",
  exclude: ["/api/*", "/admin/*"],
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
    ],
  },
}
