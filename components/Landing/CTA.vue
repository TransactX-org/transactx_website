<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl my-20 sm:px-6 sm:py-32 lg:px-8" data-aos="fade-up" data-aos-duration="1000">
      <div class="relative isolate overflow-hidden tx-bg-primary px-6 pt-16 shadow-xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#fff" />
              <stop offset="1" stop-color="#fff" />
            </radialGradient>
          </defs>
        </svg>
        <div class="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
          <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">Need Financial Support? <br/> Request Money from Friends & Family!</h2>
          <p class="mt-6 text-lg leading-8 text-gray-200">Running low on funds? No worries! With TransactX, you can easily request money from your trusted contacts and get back on track. It's all about building stronger financial relationships and supporting each other. 💸🤝</p>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <NuxtLink
                href="#"
                class="transition duration-500 ease-in-out rounded-md transform hover:-translate-y-1 hover:scale-110 border-white border-1 tx-bg-primary flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none"
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
        <div class="relative mt-16 h-80 lg:mt-8" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">
          <img class="absolute left-15 lg:left-0 top-0 w-[17rem] sm:w-[27rem] max-w-none rounded-md bg-white/1 ring-1 ring-white/10" src="/request-money.png" alt="TransactX App Screenshot" width="1824" height="1080" />
        </div>
      </div>
    </div>
  </div>
</template>
