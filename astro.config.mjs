import { defineConfig } from 'astro/config';
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    site: " https://awscommunitydayecuador.github.io/",
    output: 'static',
    base: '/',
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
        assets: "_assets",
      },
      compressHTML: true,
});