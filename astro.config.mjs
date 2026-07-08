import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 🚨 FIXED: Aligned to Vercel's true canonical domain
  site: 'https://www.filesok.com', 
  base: '/blog',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
});