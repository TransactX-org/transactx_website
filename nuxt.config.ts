import { pwa } from './config/pwa'
import { appDescription, appName } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    'nuxt-headlessui',
  ],
  compat: {
    date: '2026-02-06',
  },
  vite: {
    optimizeDeps: {
      include: ['@vite-pwa/nuxt'],
    },
  },
  pwa,
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    'assets/css/main.css',
  ],

  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],

  colorMode: {
    classSuffix: '',
    preference: 'light',
  },

  nitro: {
    esbuild: {
      options: { target: 'esnext' },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
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
      ],
      meta: [
        { name: 'title', content: appName },
        { name: 'description', content: appDescription },
        { name: 'ogTitle', content: appName },
        { name: 'ogDescription', content: appDescription },
        { name: 'ogImage', content: '/transactx.svg' },
        { name: 'twitterCard', content: 'summary_large_image' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa, // ensure pwa object is valid

  devtools: { enabled: true },

  components: { dirs: ['~/components'] },

  vite: {
    optimizeDeps: {
      include: ['@vite-pwa/nuxt'], // fixes pre-transform import issues
    },
  },
})
