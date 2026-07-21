// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
// Redirects for renamed/removed pages live in public/_redirects (served
// as HTTP 301s by Cloudflare).
export default defineConfig({
  adapter: cloudflare()
});