<script setup>
// Pricing component
</script>

<template>
  <div>
    <section id="Pricing" class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 pt-25 lg:px-6 lg:pt-45">
        <div class="mx-auto mb-10 max-w-screen-md text-center lg:mb-14">
          <h2
            class="mb-4 text-4xl font-semibold tracking-tight text-gray-800"
          >
            Designed for everyone<span class="tx-text-primary"> | Businesses, Individuals</span>
          </h2>
          <p class="mb-5 text-base font-light text-gray-600">
            Choose the perfect plan for your financial needs. Transparent pricing with no hidden fees - just straightforward value for every user type.
          </p>
        </div>
        <div class="lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 space-y-8 lg:space-y-0">
          <!-- Free Plan -->
          <div
            class="mx-auto max-w-lg flex flex-col border border-gray-100 rounded-lg bg-white p-6 text-center text-gray-900 shadow"
          >
            <h3 class="my-4 text-2xl font-semibold">
              Free
            </h3>
            <p class="text-base font-light text-gray-600">
              Essential features for individuals getting started
            </p>
            <div class="my-8 flex items-baseline justify-center">
              <span class="mr-2 text-5xl font-bold">₦0</span>
              <span class="text-gray-600">/month</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 text-left space-y-4">
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Auto Bank Sync: <span class="font-semibold">1</span>/day, <span class="font-semibold">30</span>/month</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Manual Sync: <span class="font-semibold">20</span>/month</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Linked Bank Accounts: <span class="font-semibold">1</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Sub Accounts: <span class="font-semibold">0</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Customization: <span class="font-semibold">No</span></span>
              </li>
            </ul>
            <div class="mt-auto">
              <button class="tx-bg-primary w-full rounded-lg px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90">
                Get Started
              </button>
            </div>
          </div>

          <!-- Startup Plan -->
          <div
            class="mx-auto max-w-lg flex flex-col border border-gray-100 rounded-lg bg-white p-6 text-center text-gray-900 shadow"
          >
            <div class="mb-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              Popular
            </div>
            <h3 class="my-4 text-2xl font-semibold">
              Startup
            </h3>
            <p class="text-base font-light text-gray-600">
              Perfect for small businesses and startups
            </p>
            <div class="my-8 flex items-baseline justify-center">
              <span class="mr-2 text-5xl font-bold">₦2,000</span>
              <span class="text-gray-600">/month</span>
            </div>
            <div class="mb-4">
              <span class="text-gray-500 line-through">₦2,500</span>
              <span class="ml-2 text-sm font-medium text-green-600">Save 10%</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 text-left space-y-4">
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Auto Bank Sync: <span class="font-semibold">5</span>/day, <span class="font-semibold">150</span>/month</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Manual Sync: <span class="font-semibold">20</span>/month</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Linked Bank Accounts: <span class="font-semibold">3</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Sub Accounts: <span class="font-semibold">1</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Customization: <span class="font-semibold">No</span></span>
              </li>
            </ul>
            <div class="mt-auto">
              <button class="tx-bg-primary w-full rounded-lg px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90">
                Get Started
              </button>
            </div>
          </div>

          <!-- Growth Plan -->
          <div
            class="mx-auto max-w-lg flex flex-col border border-gray-100 rounded-lg bg-white p-6 text-center text-gray-900 shadow"
          >
            <h3 class="my-4 text-2xl font-semibold">
              Growth
            </h3>
            <p class="text-base font-light text-gray-600">
              For growing businesses with advanced needs
            </p>
            <div class="my-8 flex items-baseline justify-center">
              <span class="mr-2 text-5xl font-bold">₦5,000</span>
              <span class="text-gray-600">/month</span>
            </div>
            <div class="mb-4">
              <span class="text-gray-500 line-through">₦7,000</span>
              <span class="ml-2 text-sm font-medium text-green-600">Save 10%</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 text-left space-y-4">
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Auto Bank Sync: <span class="font-semibold">24</span>/day, <span class="font-semibold">720</span>/month</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Manual Sync: <span class="font-semibold">20</span>/month</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Linked Bank Accounts: <span class="font-semibold">5</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Sub Accounts: <span class="font-semibold">7</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Customization: <span class="font-semibold">No</span></span>
              </li>
            </ul>
            <div class="mt-auto">
              <button class="tx-bg-primary w-full rounded-lg px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90">
                Get Started
              </button>
            </div>
          </div>

          <!-- Enterprise Plan -->
          <div
            class="mx-auto max-w-lg flex flex-col border border-gray-100 rounded-lg bg-white p-6 text-center text-gray-900 shadow"
          >
            <h3 class="my-4 text-2xl font-semibold">
              Enterprise
            </h3>
            <p class="text-base font-light text-gray-600">
              Full-featured solution for large organizations
            </p>
            <div class="my-8 flex items-baseline justify-center">
              <span class="mr-2 text-5xl font-bold">Custom</span>
              <span class="text-gray-600">/month</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 text-left space-y-4">
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Auto Bank Sync: <span class="font-semibold">50</span>/day, <span class="font-semibold">1500</span>/month</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Manual Sync: <span class="font-semibold">15</span>/month</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Linked Bank Accounts: <span class="font-semibold">20</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Sub Accounts: <span class="font-semibold">Unlimited</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Customization: <span class="font-semibold">Yes</span></span>
              </li>
            </ul>
            <div class="mt-auto">
              <button class="tx-bg-primary w-full rounded-lg px-4 py-3 font-semibold text-white transition-opacity hover:opacity-90">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
