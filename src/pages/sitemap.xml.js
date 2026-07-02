import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');

  const urls = [
    {
      loc: 'https://filesok.com/blog/',
      lastmod: new Date().toISOString().split('T')[0],
      priority: '1.0',
      changefreq: 'daily',
    },
    ...posts
      .filter(p => !p.data.draft)
      .map(p => ({
        loc: `https://filesok.com/blog/${p.id}/`,
        lastmod: p.data.pubDate.toISOString().split('T')[0],
        priority: '0.8',
        changefreq: 'monthly',
      })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
