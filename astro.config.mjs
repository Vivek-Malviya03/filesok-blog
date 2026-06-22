import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://filesok.com',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});
