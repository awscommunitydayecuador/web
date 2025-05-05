import { defineConfig } from 'astro/config';
import compress from "astro-compress";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: " https://awscommunitydayecuador.github.io",
  output: 'static',
  base: 'web',

  integrations: [
      compress({
        css: true,
        html: true,
        js: true,
        img: false,
        svg: true,
      }),
    ],

  build: {
    assets: "assets",
  },

  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },
});