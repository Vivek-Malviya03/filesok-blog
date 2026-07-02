import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'FilesOk Blog',
    description: 'Tips, guides, and insights on file compression and privacy.',
    site: 'https://filesok.com/blog',
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
