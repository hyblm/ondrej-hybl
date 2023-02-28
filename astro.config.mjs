import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),NetlifyCMS()]
});
