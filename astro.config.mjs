// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://HectorTrinidadCarrera.github.io',
  base: '/PortafolioHectorTrinidadCarrera',
  vite: {
    plugins: [tailwindcss()]
  }
});