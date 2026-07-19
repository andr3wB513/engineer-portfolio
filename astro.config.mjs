// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/portfolio': '/projects',
    '/portfolio/[id]': '/projects/[id]',
  },
});
