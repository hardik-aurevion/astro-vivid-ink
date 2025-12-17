// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vividinktattoos.co.uk',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  
  build: {
    inlineStylesheets: 'auto',
  },
  
  compressHTML: true,
});