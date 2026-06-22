import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://filesok.com',
  base: '/blog', // 🚨 THIS IS THE CRITICAL FIX
  integrations: [tailwind()]
});