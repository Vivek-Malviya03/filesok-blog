import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://filesok.com',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
});
