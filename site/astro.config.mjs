import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://dejotacode.com.br',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.includes('/admin/') })],
  build: { format: 'directory' }
});
