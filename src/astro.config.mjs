import { defineConfig } from 'astro/config';
import tailwind from '@astro/tailwind';

export default defineConfig({
integrations: [tailwind()],
output:'server'
});