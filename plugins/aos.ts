import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin({
  name: 'aos',
  parallel: true,
  setup(nuxtApp) {
    if (import.meta.client) {
      // Initialize AOS after the app is fully mounted
      nuxtApp.hook('app:mounted', () => {
        AOS.init({
          once: false,
          duration: 1000,
          easing: 'ease-in-out',
          offset: 120,
          delay: 0,
        })
      })
    }
  },
})
