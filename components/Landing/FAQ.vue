<template>
  <div class="mb-5xl" id="FAQs" data-as="fade-up" data-aos-duration="1000">
    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2
          class="mb-8 text-4xl tracking-tight font-bold tx-text-secondary"
        >
          Frequently asked questions
        </h2>
        <div
          class="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2"
        >
          <div>
            <div 
              v-for="(faq, index) in leftColumnFAQs" 
              :key="index"
              class="mb-6"
            >
              <FAQItem 
                :question="faq.question" 
                :answer="faq.answer"
                :is-open="openIndex === index"
                @toggle="toggleFAQ(index)"
              />
            </div>
          </div>
          <div>
            <div 
              v-for="(faq, index) in rightColumnFAQs" 
              :key="index"
              class="mb-6"
            >
              <FAQItem 
                :question="faq.question" 
                :answer="faq.answer"
                :is-open="openIndex === (index + leftColumnFAQs.length)"
                @toggle="toggleFAQ(index + leftColumnFAQs.length)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FAQItem from './FAQItem.vue'

const openIndex = ref<number | null>(null)

const leftColumnFAQs = [
  {
    question: "How does TransactX ensure the security of my transactions?",
    answer: "TransactX prioritizes the security of your transactions. We employ advanced encryption techniques to safeguard your financial data and utilize secure protocols for all transactions. Additionally, our real-time network status checker helps you confirm the strength of your bank's network before conducting transactions, ensuring a seamless and secure experience."
  },
  {
    question: "Can I sync multiple bank accounts with TransactX?",
    answer: "Yes, absolutely. TransactX allows you to sync multiple bank accounts in real-time, providing you with a comprehensive overview of your financial activity across all your accounts, whether you're an individual managing personal finances or a business owner handling transactions for your enterprise."
  },
  {
    question: "What services are included in the Bill Payment Service?",
    answer: "Our Bill Payment Service covers a wide range of expenses, from essential utilities like electricity and water to entertainment options like airtime top-ups and betting accounts. With TransactX, you can conveniently manage and pay all your bills from different service providers in one place."
  },
  {
    question: "Is TransactX only suitable for businesses, or can individuals also benefit from it?",
    answer: "TransactX caters to both businesses and individuals. Whether you run a POS business, manage a micro-enterprise, or simply want to streamline your personal finances, our platform offers features tailored to meet your specific needs, including real-time account sync, bill payment services, and secure personal wallets."
  }
]

const rightColumnFAQs = [
  {
    question: "What is a NUBAN, and how does it enhance the Personal Wallet experience?",
    answer: "NUBAN stands for Nigerian Uniform Bank Account Number. TransactX's Personal Wallet with a dedicated NUBAN offers enhanced security, speed, and flexibility. Your funds are protected, and transactions are encrypted, ensuring peace of mind. Additionally, you can receive payments, make P2P transactions, pay bills, or withdraw funds to your bank account using your wallet."
  },
  {
    question: "Can TransactX help with banking the unbanked population?",
    answer: "Yes, TransactX is committed to banking the unbanked. Our Personal Wallet with a dedicated NUBAN provides a secure and accessible financial solution for individuals who may not have access to traditional banking services. With features like bill payments, P2P transactions, and fund withdrawals, we aim to empower everyone with convenient financial tools."
  },
  {
    question: "How does the Network Strength Tracker prevent failed transactions?",
    answer: "The Network Strength Tracker is a cutting-edge feature of TransactX that allows you to check the strength of your bank's network in real-time before initiating transactions. By ensuring a stable network connection, it helps prevent failed transactions and minimizes disruptions to your financial activities, providing a hassle-free banking experience."
  },
  {
    question: "Is TransactX suitable for millennials and side hustlers?",
    answer: "Absolutely! TransactX's Personal Wallet with a dedicated NUBAN caters to millennials and side hustlers, offering security, speed, and flexibility for managing finances. Whether you're a millennial looking for convenient payment options or a side hustler seeking a reliable platform for financial transactions, TransactX has you covered."
  }
]

const toggleFAQ = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
