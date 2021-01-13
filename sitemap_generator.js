const path = require("path");
const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://www.arkavidia.id",
  ignoredPaths: ["dashboard"],
  pagesDirectory: path.join(__dirname, "pages"),
  targetDirectory: "out/",
  sitemapFilename: "sitemap.xml",
  nextConfigPath: path.join(__dirname, "/next.config.js")
});

console.log("sitemap.xml generated!");