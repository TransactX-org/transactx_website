<template>
  <div class="relative overflow-hidden bg-white">
    <div class="py-30 sm:py-30 lg:py-35 px-5 lg:px-2">
      <div class="relative lg:flex justify-between lg:px-20">
        <!--  -->
        <div class="mt-4xl w-full lg:w-0.9/2">
          <div class="mb-8 flex justify-center lg:justify-start">
            <div
              class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Want to catch up with our story?
              <NuxtLink href="#Stories" class="font-semibold tx-text-primary"
                ><span class="absolute inset-0" aria-hidden="true" />Read more
                <span aria-hidden="true">&rarr;</span></NuxtLink
              >
            </div>
          </div>
          <div class="text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-semibold leading-10 text-gray-900 lg:text-5xl" data-aos="fade-up" data-aos-duration="1000">
              Monitor Bank Account(s) Transactions in Real Time
            </h1>
            <p class="mt-6 leading-8 text-gray-600 px-5 lg:px-0"  data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
              Keeping a watchful eye on your bank account transactions in real time,
              paying bills, and controlling your personal wallet have never been this
              straightforward. Join TransactX and transform the way you handle your
              finances today!
            </p>
            <div class="mt-10 flex items-center justify-center lg:justify-start gap-x-6" data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
              <NuxtLink
                href="#"
                class="transition duration-500 ease-in-out rounded-md transform hover:-translate-y-1 hover:scale-110 tx-bg-primary flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none"
                ><img class="h-5 w-auto" src="/apple-icon.svg" alt="App store" />Get on iPhone</NuxtLink
              >

              <NuxtLink
                href="#"
                class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-md tx-bg-secondary flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:transform"
                ><img class="h-5 w-auto" src="/google-icon.svg" alt="Play store" />Get
                on Android</NuxtLink
              >
            </div>
          </div>
        </div>

        <!--  -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <div data-aos="zoom-in" data-aos-duration="2000">
            <img src="/transactx-app-dashboard.png" class="w-full h-auto mt-7xl md:mt-9xl lg:mt--15" alt="">
          <!-- <lottie-player src="https://lottie.host/55ba8016-8c77-4b72-af14-7f49b40559ef/dbN2kJAHyX.json" background="transparent" speed="1" class="w-full h-auto mt-7xl md:mt-9xl lg:mt--30" direction="1" mode="normal" loop autoplay></lottie-player> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

