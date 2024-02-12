<template>
  <div class="bg-white">
    <header class="relative lg:px-20 inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-0" aria-label="Global">
        <div class="flex flex-row items-center gap-8xl">
          <div class="flex lg:flex-1">
            <NuxtLink href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">TransactX</span>
              <img class="h-9 w-auto" src="/transactx.svg" alt="TransactX Logo" />
            </NuxtLink>
          </div>
          <div class="hidden lg:flex lg:gap-x-20">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="leading-6 text-gray-800"
              >{{ item.name }}
              </NuxtLink
            >
          </div>
        </div>

        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink href="#TXToken" class="transition duration-500 ease-in-out rounded-md hover:opacity-85 tx-bg-primary px-6 py-3 text-sm text-white shadow-sm"
            >TX token <span aria-hidden="true">&rarr;</span></NuxtLink
          >
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <NuxtLink href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">TransactX</span>
              <img class="h-9 w-auto" src="/transactx.svg" alt="TransactX Logo" />
            </NuxtLink>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</NuxtLink
                >
              </div>
              <div class="py-6">
                <NuxtLink
                  href="#TXToken"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Introducing TX token</NuxtLink
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <!--  -->
  </div>
</template>

<style scoped></style>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Features", href: "#Features" },
  { name: "Stories", href: "#Stories" },
  { name: "FAQs", href: "#FAQs" },
  { name: "Pricing", href: "#Pricing" },
];

const mobileMenuOpen = ref(false);
</script>
