<script setup lang="ts">
import CSSGridBackground from '~/components/ui/CSSGridBackground.vue'
import TextGenerateEffect from '~/components/ui/TextGenerateEffect.vue'
</script>

<template>
  <div class="relative min-h-screen w-full overflow-hidden bg-white">
    <CSSGridBackground :rows="12" :cols="40" :cell-size="30" />
    <div class="relative z-10 px-5 py-30 lg:px-2 lg:py-35 sm:py-30">
      <div class="relative justify-between lg:flex lg:px-20">
        <!--  -->
        <div class="mt-5xl w-full lg:w-0.9/2">
          <div class="mb-8 flex justify-center lg:justify-start">
            <div
              class="relative rounded-full px-3 py-1 text-sm text-gray-600 leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Want to learn about our journey?
              <NuxtLink href="/stories" class="tx-text-primary font-semibold">
                <span class="absolute inset-0" aria-hidden="true" />Read more
                <span aria-hidden="true">&rarr;</span>
              </NuxtLink>
            </div>
          </div>
          <div class="text-center lg:text-left">
            <h1 class="lg:ttt text-5xl text-gray-900 font-semibold leading-12 tracking-tight lg:text-6xl" data-aos="fade-up" data-aos-duration="1000">
              <TextGenerateEffect
                words="Monitor Bank Account(s) Transactions in Real Time"
                :duration="1.2"
                :filter="true"
                class-name="text-5xl lg:text-6xl font-semibold text-gray-900"
              />
            </h1>
            <p class="mt-6 px-5 text-gray-600 leading-8 lg:px-0" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
              Track your bank account transactions instantly, pay bills seamlessly,
              and manage your personal wallet with ease. Join TransactX and transform
              the way you handle your finances with our all-in-one financial platform.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <NuxtLink href="https://apps.apple.com/ng/app/transactx-by-trackvault/id6753362535">
                <img class="pointer" src="/app-store.svg" width="150" alt="App store">
              </NuxtLink>

              <NuxtLink
                class="tx-bg-secondary flex transform items-center gap-2 rounded-md px-5 py-3 text-sm text-white font-semibold shadow-sm transition duration-500 ease-in-out hover:scale-110 hover:transform hover:-translate-y-1"
                href="https://play.google.com/store/apps/details?id=com.transactx.app"
                target="_blank"
              >
                <img class="pointer" src="/google-icon.svg" alt="Play store">Get
                on Android
              </NuxtLink>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="w-full flex justify-center lg:w-1/2">
          <div data-aos="zoom-in" data-aos-duration="2000">
            <img src="/transactxx.png" class="mt-7xl h-auto w-3xl lg:mt--15 md:mt-9xl" alt="Hero Image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ttt {
  line-height: 55px !important;
}
</style>
