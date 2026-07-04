import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://filesok.com',
  // 🚨 FIXED: Forces Astro to natively compile and route under the /blog proxy
  base: '/blog',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
});