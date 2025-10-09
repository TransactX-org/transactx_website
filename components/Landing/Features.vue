<template>
  <div class="py-10 sm:py-15 bg-white" id="Features">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl lg:text-center" data-aos="fade-up" data-aos-duration="1000">
        <h2 class="text-base font-semibold leading-7 tx-text-primary">Our Features</h2>
        <p class="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Whether you're looking to streamline your finances, stay on top of bills, or securely manage your personal funds, we got you covered.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-14 lg:max-w-none lg:grid-cols-2 lg:gap-y-20">
          <div v-for="feature in features" :key="feature.name" class="relative pl-20" data-aos="fade-up" data-aos-duration="2000">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-15 w-15 items-center justify-center rounded-lg tx-bg-secondary">
                <component :is="feature.icon" class="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-700 lg:text-justify">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowPathIcon, BanknotesIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, WalletIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Real-Time Account Sync',
    description:
      'Stay on top of your finances with instant synchronization across all your bank accounts. Whether you\'re managing a business or personal finances, get real-time updates on every transaction, balance change, and financial activity. Never miss a beat with comprehensive financial oversight.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Bill Payment Service',
    description:
      'Simplify your life with our all-in-one bill payment solution. From utilities and subscriptions to entertainment and digital services, pay everything from one secure platform. Save time, avoid late fees, and maintain perfect payment records effortlessly.',
    icon: BanknotesIcon,
  },
  {
    name: 'Personal Wallet with NUBAN',
    description:
      'Experience the future of digital banking with our Personal Wallet featuring a dedicated NUBAN. Enjoy bank-level security, instant transactions, and complete financial control. Send money, receive payments, pay bills, and manage your finances all from one powerful, secure platform.',
    icon: WalletIcon,
  },
  {
    name: 'Real-Time Network Status Checker',
    description:
      'Eliminate transaction failures with our intelligent Network Strength Tracker. Check your bank\'s network stability before initiating transactions and ensure successful payments every time. No more wasted time on failed transactions or unexpected delays.',
    icon: ArrowPathIcon,
  },
]
</script>


