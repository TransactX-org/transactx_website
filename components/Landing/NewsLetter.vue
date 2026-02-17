<script setup>
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div id="NewsLetter" class="mx-auto max-w-7xl bg-white">
    <div class="tx-border-primary relative isolate overflow-hidden border-t-1 rounded-4 rounded-t-0 py-15 shadow-gray-100 shadow-xl lg:py-30 sm:py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 mx-auto max-w-2xl gap-x-8 gap-y-16 lg:grid-cols-2 lg:max-w-none">
          <div class="max-w-xl lg:max-w-lg" data-aos="fade-up" data-aos-duration="1000">
            <h2 class="tx-text-primary text-3xl font-semibold tracking-tight sm:text-4xl">
              Subscribe to our newsletter 📩
            </h2>
            <p class="mt-4 text-base text-gray-500 leading-8">
              Stay ahead with the latest financial insights, expert tips, and exclusive offers. Join our community of smart money managers and never miss an update. 🚀
            </p>
            <div class="mt-6 max-w-md flex gap-x-2">
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required="true" class="min-w-0 flex-auto border-1 rounded-md bg-white/5 px-3.5 py-2 text-gray-800 outline-none active:bg-white focus:bg-white sm:text-sm sm:leading-6" placeholder="Enter your email">
              <button type="submit" class="tx-bg-primary flex-none transform rounded-md px-5 py-3 text-sm text-white font-semibold shadow-sm transition duration-500 ease-in-out hover:scale-110 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-none hover:-translate-y-1">
                Subscribe
              </button>
            </div>
          </div>
          <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div class="flex flex-col items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
              <div class="rounded-md bg-gray/10 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon class="tx-text-primary h-6 w-6" aria-hidden="true" />
              </div>
              <dt class="mt-4 text-gray-700 font-semibold">
                Weekly insights
              </dt>
              <dd class="mt-2 text-base text-gray-500 leading-7">
                Get exclusive financial insights, market trends, and money management tips delivered weekly to your inbox.
              </dd>
            </div>
            <div class="flex flex-col items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <div class="rounded-md bg-gray/10 p-2 ring-1 ring-white/10">
                <HandRaisedIcon class="tx-text-primary h-6 w-6" aria-hidden="true" />
              </div>
              <dt class="mt-4 text-gray-700 font-semibold">
                No spam
              </dt>
              <dd class="mt-2 text-base text-gray-500 leading-7">
                We respect your inbox. Get valuable content without the clutter - unsubscribe anytime with one click.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
