// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  css: ['~/styles/global.css'],
  vite: { plugins: [eslintPlugin()] },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
