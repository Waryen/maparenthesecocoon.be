const fs = require('fs');
const url = 'https://maparenthesecocoon.be';

console.log(`Starting the sitemap generation 🚀`);

const baseSitemap = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${url}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${url}/about</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${url}/contact</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${url}/services</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${url}/legal</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
  </urlset>
`;

fs.writeFileSync('./public/sitemap.xml', baseSitemap, 'utf-8');

console.log(`Sitemap generated! 🎉`);
