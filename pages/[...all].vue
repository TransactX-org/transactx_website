<script setup>
const router = useRouter()
</script>

<template>
  <div class="grid min-h-full place-items-center bg-white px-6 py-24 lg:px-8 sm:py-32">
    <div class="text-center">
      <p class="tx-text-primary text-base font-semibold">
        404
      </p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <button class="tx-bg-primary hover:tx-bg-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 focus-visible:outline" @click="router.back()">
          <span aria-hidden="true">&larr;</span> Go back home
        </button>
      </div>
    </div>
  </div>
</template>
