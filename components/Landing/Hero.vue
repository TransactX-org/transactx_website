<template>
  <div class="relative overflow-hidden bg-white">
    <div class="py-30 sm:py-30 lg:py-35 px-5 lg:px-2">
      <div class="relative lg:flex justify-between lg:px-20">
        <!--  -->
        <div class="mt-5xl w-full lg:w-0.9/2">
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
            <h1 class="lg:ttt text-4xl tracking-tight font-semibold leading-10 text-gray-900 lg:text-5xl" data-aos="fade-up" data-aos-duration="1000">
              Monitor Bank Account(s) Transactions in Real Time
            </h1>
            <p class="mt-6 leading-8 text-gray-600 px-5 lg:px-0"  data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
              Keeping a watchful eye on your bank account transactions in real time,
              paying bills, and controlling your personal wallet have never been this
              straightforward. Join TransactX and transform the way you handle your
              finances today!
            </p>
            <div class="mt-10 flex items-center justify-center lg:justify-start gap-x-6" >
              <NuxtLink href="#appstore">
                <img class="pointer" src="/app-store.svg" width="150" alt="App store" />
              </NuxtLink> 
              
              <NuxtLink href="#playstore">
              <img class="pointer" src="/google-play.svg" width="165" alt="Google play"/>
              </NuxtLink> 
            </div>
          </div>
        </div>

        <!--  -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <div data-aos="zoom-in" data-aos-duration="2000">
            <img src="/transactxx.png" class="w-3xl h-auto mt-7xl md:mt-9xl lg:mt--15" alt="Hero Image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ttt{
  line-height: 55px !important;
}
</style>