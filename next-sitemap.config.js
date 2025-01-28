/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.fleetfidelity.com/",
  exclude: ["/api/*", "/admin/*"],
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
}
