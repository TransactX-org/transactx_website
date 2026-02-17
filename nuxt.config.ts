import { pwa } from './config/pwa'
import { appDescription, appName } from './constants/index'

export default defineNuxtConfig({
  compatibilityDate: '2026-02-17',

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    'nuxt-headlessui',
  ],

  vite: {
    optimizeDeps: {
      include: ['@vite-pwa/nuxt'],
    },
    esbuild: {
      target: 'esnext',
    },
  },

  pwa,

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  typescript: {
    shim: false,
  },

  css: [
    '@unocss/reset/tailwind.css',
    'assets/css/main.css',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'light',
  },

  nitro: {
    preset: 'netlify',
    esbuild: {
      options: { target: 'esnext' },
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/privacy-policy', '/support', '/marketing'],
    },
    compressPublicAssets: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&family=DM+Mono&display=swap' },
      ],
      meta: [
        { name: 'title', content: appName },
        { name: 'description', content: appDescription },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: appName },
        { property: 'og:description', content: appDescription },
        { property: 'og:image', content: '/transactx.svg' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: appName },
        { name: 'twitter:description', content: appDescription },
        { name: 'twitter:image', content: '/transactx.svg' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  devtools: { enabled: false }, // disable in production

  components: { dirs: ['~/components'] },
})
