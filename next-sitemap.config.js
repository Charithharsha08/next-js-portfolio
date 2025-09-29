/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://charithharsha.com", // 👈 your domain
  generateRobotsTxt: true, // will generate robots.txt too
  sitemapSize: 7000, // split sitemap if very large
  changefreq: "weekly", // tells Google update frequency
  priority: 0.7, // default priority
};
