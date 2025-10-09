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
      'Streamline your POS operations with detailed transaction tracking and live financial insights. Monitor sales, track expenses, and manage cash flow across all your business accounts from one powerful dashboard. Perfect for small businesses and micro-enterprises.',
    icon: BriefcaseIcon,
    url: 'pos-businesses.mp4'
  },
  {
    name: 'Individuals',
    domain: 'Service providers, Professionals',
    description:
      'Take control of your personal finances with our intuitive bill payment and account management tools. From everyday expenses to monthly subscriptions, manage all your financial obligations efficiently and never miss a payment deadline again.',
    icon: BanknotesIcon,
  },
  {
    name: 'Banking the Unbanked',
    domain: 'Underserved communities, Rural areas',
    description:
      'TransactX bridges the financial gap by providing accessible banking solutions to underserved communities. Our Personal Wallet with dedicated NUBAN brings traditional banking services to those who need it most, enabling protected transactions, bill payments, and financial inclusion for everyone.',
    icon: WalletIcon,
  },
  {
    name: 'Side Hustle Support',
    domain: 'Millennials, Freelancers, Entrepreneurs',
    description:
      'Perfect for modern entrepreneurs and side hustlers who need flexible financial tools. Manage multiple income streams, receive payments instantly, and track your earnings with our complete wallet system. Built for the gig economy and digital nomads.',
    icon: UserPlusIcon,
  },
]
</script>


<style scoped>
#Stories{
background-color: rgb(248, 248, 248);
}
</style>


