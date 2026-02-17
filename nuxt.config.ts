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

  // 🔥 Force Vite to avoid oxc usage
  vite: {
    optimizeDeps: {
      include: ['@vite-pwa/nuxt'],
    },
    esbuild: {
      target: 'esnext',
    },
  },

  pwa,

  // 🔥 Completely disable oxc
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
    oxc: false,
  },

  // 🔥 Extra safeguard
  typescript: {
    shim: false,
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
    preset: 'netlify', // important for Netlify
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

  devtools: { enabled: false }, // disable in production

  components: { dirs: ['~/components'] },
})
