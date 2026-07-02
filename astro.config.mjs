import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://filesok.com',
  base: '/blog',
  integrations: [sitemap()],
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});
