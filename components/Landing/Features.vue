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
      'Do you run a POS business or tired of manually tracking your transactions across multiple platforms? With TransactX, you can sync all your accounts in real-time, giving you a comprehensive view of your financial health at your fingertips. - Our platform provides an up-to-the-minute snapshot of your financial activity.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Bill Payment Service',
    description:
      'Tired of juggling various bills from different service providers? TransactX has got you covered with our comprehensive Bill Payment Service. We understand that life\'s expenses come in all shapes and sizes, from essential utilities like electricity and water to entertainment options like airtime top-ups and betting accounts.',
    icon: BanknotesIcon,
  },
  {
    name: 'Personal Wallet with NUBAN',
    description:
      'TransactX Personal Wallet with a dedicated NUBAN offers you security, speed, and flexibility. Your funds are protected, and transactions are encrypted for your peace of mind. Plus, with the ability to receive payments, it\'s not just a wallet; it\'s a everything. With your wallet, you can pay bills, do P2P transactions, receive payments for services or withdraw to your bank account.',
    icon: WalletIcon,
  },
  {
    name: 'Real-Time Network Status Checker',
    description:
      'We understand that the frustration of failed transactions can disrupt your financial activities and cause unnecessary stress. That\'s why TransactX is proud to introduce the Network Strength Tracker, a cutting-edge feature that empowers you to confirm the strength of your bank\'s network before carrying out transactions. Say goodbye to failed transactions and hello to hassle-free banking',
    icon: ArrowPathIcon,
  },
]
</script>


