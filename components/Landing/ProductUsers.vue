<template>
  <div class="mt-9xl py-10 sm:py-20" id="Stories">
    <div class="mx-auto py-10 max-w-7xl px-6 lg:px-5">
      <div class="mx-auto max-w-3xl md:text-center" data-aos="fade-up" data-aos-duration="1000">
        <p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"><span class="tx-text-primary">Revolutionize </span> Your Business.</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Get the most out of TransactX by leveraging on the service that is most tailored to you.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl mb-10">
        <dl class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative bg-white p-10 rounded-4 shadow-2xl shadow-gray-2 cursor-pointer" data-aos="fade-up" data-aos-duration="2000">
            <dt class="font-semibold text-2xl leading-10 text-gray-800">
              <div class="absolute right-5 top-10 flex h-10 w-10 items-center justify-center rounded-lg bg-gray/5">
                <component :is="feature.icon" class="h-6 w-6 tx-text-secondary" aria-hidden="true" />
              </div>
              <!-- <div class="absolute right-0 bottom-0 flex h-auto w-60 items-center justify-center">
                <video class="hidden xl:block" :src="feature.url" autoplay="autoplay" loop="loop"></video>
              </div> -->

              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 tx-text-primary">{{ feature.domain }}</dd>
            <dd class="mt-2 text-base leading-7  text-gray-700">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowPathIcon, BanknotesIcon, BriefcaseIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, UserPlusIcon, WalletIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Point on Sale (POS) Businesses',
    domain: 'SME\'s, Micro-enterprises',
    description:
      'Do you run a POS business or tired of manually tracking your transactions across multiple platforms? With TransactX, you can sync all your accounts in real-time, giving you a comprehensive view of your financial health at your fingertips. - Our platform provides an up-to-the-minute snapshot of your financial activity.',
    icon: BriefcaseIcon,
    url: 'pos-businesses.mp4'
  },
  {
    name: 'Individuals',
    domain: 'Service providers, Professionals',
    description:
      'Tired of juggling various bills from different service providers? TransactX has got you covered with our comprehensive Bill Payment Service. We understand that life\'s expenses come in all shapes and sizes, from essential utilities like electricity and water to entertainment options like airtime top-ups and betting accounts.',
    icon: BanknotesIcon,
  },
  {
    name: 'Banking the Unbanked',
    domain: 'Service providers, Professionals',
    description:
      'TransactX Personal Wallet with a dedicated NUBAN offers you security, speed, and flexibility. Your funds are protected, and transactions are encrypted for your peace of mind. Plus, with the ability to receive payments, it\'s not just a wallet; it\'s a everything. With your wallet, you can pay bills, do P2P transactions, receive payments for services or withdraw to your bank account.',
    icon: WalletIcon,
  },
  {
    name: '+1 Side Hustle',
    domain: 'Millenials, Mini agents',
    description:
      'TransactX Personal Wallet with a dedicated NUBAN offers you security, speed, and flexibility. Your funds are protected, and transactions are encrypted for your peace of mind. Plus, with the ability to receive payments, it\'s not just a wallet; it\'s a everything. With your wallet, you can pay bills, do P2P transactions, receive payments for services or withdraw to your bank account.',
    icon: UserPlusIcon,
  },
]
</script>


<style scoped>
#Stories{
background-color: rgb(248, 248, 248);
}
</style>


