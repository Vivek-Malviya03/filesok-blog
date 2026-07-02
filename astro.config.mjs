import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://filesok.com',
<<<<<<< HEAD
  base: '/blog', // 🚨 Routes everything to the /blog sub-path
=======
  base: '/blog',
  integrations: [sitemap()],
>>>>>>> 9d26107 (fix: Correct site URL, base path, sitemap and RSS feed)
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()], // 🚨 Automatically generates your sitemap
});