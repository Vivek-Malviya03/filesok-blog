import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://filesok.com',
  base: '/blog', // 🚨 Routes everything to the /blog sub-path
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()], // 🚨 Automatically generates your sitemap
});