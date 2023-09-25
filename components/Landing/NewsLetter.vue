<template>
  <div class="bg-white mx-auto max-w-7xl" id="NewsLetter">
  <div class="relative isolate overflow-hidden rounded-4 rounded-t-0 shadow-xl shadow-gray-100 border-t-1 tx-border-primary py-15 sm:py-20 lg:py-30">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div class="max-w-xl lg:max-w-lg" data-aos="fade-up" data-aos-duration="1000">
          <h2 class="text-3xl font-semibold tracking-tight tx-text-primary sm:text-4xl">Subscribe to our newsletter 📩</h2>
          <p class="mt-4 text-base leading-8 text-gray-500">Don't miss out on the latest financial insights, tips, and exclusive offers. Join our squad by subscribing to our newsletter today 🚀</p>
          <div class="mt-6 flex max-w-md gap-x-2">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="true" class="min-w-0 flex-auto rounded-md border-1 bg-white/5 px-3.5 py-2 text-gray-800 focus:bg-white active:bg-white outline-none sm:text-sm sm:leading-6" placeholder="Enter your email" />
            <button type="submit" class="flex-none transition duration-500 ease-in-out rounded-md transform hover:-translate-y-1 hover:scale-110 tx-bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none">Subscribe</button>
          </div>
        </div>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div class="flex flex-col items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
            <div class="rounded-md bg-gray/10 p-2 ring-1 ring-white/10">
              <CalendarDaysIcon class="h-6 w-6 tx-text-primary" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold text-gray-700">Periodic insights</dt>
            <dd class="mt-2 text-base leading-7 text-gray-500">Join the TransactX community and gain access to our exclusive periodic financial insights.</dd>
          </div>
          <div class="flex flex-col items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div class="rounded-md bg-gray/10 p-2 ring-1 ring-white/10">
              <HandRaisedIcon class="h-6 w-6 tx-text-primary" aria-hidden="true" />
            </div>
            <dt class="mt-4 font-semibold text-gray-700">No spam</dt>
            <dd class="mt-2 text-base leading-7 text-gray-500">We respect your inbox. Stay in the loop without with the clutter and have a spam-free experience.</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
    </div>
</template>

<script setup>
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/vue/24/outline'
</script>