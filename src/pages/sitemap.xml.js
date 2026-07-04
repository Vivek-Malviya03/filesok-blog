import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET() {
  const posts = (await getCollection('blog')).filter(p => !p.data.draft);

  const pages = [
    {
      loc: 'https://filesok.com/blog/',
      priority: '1.0',
      changefreq: 'daily',
      lastmod: new Date().toISOString().split('T')[0],
    },
    ...posts.map(p => ({
      loc: `https://filesok.com/blog/${p.id}/`,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: p.data.pubDate.toISOString().split('T')[0],
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${p.loc}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <lastmod>${p.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'application/xml' },
  });
}
