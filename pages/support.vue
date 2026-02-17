<script setup>
// Support page
useHead({
  title: 'Support - TransactX',
  meta: [
    { name: 'description', content: 'TransactX Support - Get help with your account, transactions, and any questions.' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="border-b border-gray-200 bg-white">
      <div class="mx-auto max-w-4xl px-4 py-8 lg:px-8 sm:px-6">
        <div class="flex items-center justify-between">
          <NuxtLink href="/" class="flex items-center">
            <img
              src="/transactx.svg"
              class="h-8 w-auto"
              alt="TransactX"
            >
          </NuxtLink>
          <NuxtLink
            href="/"
            class="inline-flex items-center border border-gray-300 rounded-md bg-white px-4 py-2 text-sm text-gray-700 font-medium transition-colors duration-200 hover:bg-gray-50"
          >
            ← Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="mx-auto max-w-4xl px-4 py-12 lg:px-8 sm:px-6">
      <div class="border border-gray-200 rounded-lg bg-white">
        <div class="px-8 py-12">
          <!-- Title -->
          <div class="mb-12 text-center">
            <h1 class="mb-4 text-4xl text-gray-900 font-bold">
              Customer Support
            </h1>
            <div class="text-lg text-gray-600 space-y-2">
              <p>We're here to help you 24/7</p>
            </div>
          </div>

          <!-- Quick Help Cards -->
          <div class="grid mb-12 gap-6 md:grid-cols-3">
            <div class="rounded-lg bg-blue-50 p-6 text-center transition-colors hover:bg-blue-100">
              <div class="mb-4 text-4xl">
                💬
              </div>
              <h3 class="mb-2 text-lg text-gray-900 font-medium">
                Live Chat
              </h3>
              <p class="mb-4 text-gray-600">
                Chat with our support team instantly
              </p>
              <button class="text-blue-600 font-medium hover:text-blue-800">
                Start Chat →
              </button>
            </div>
            <div class="rounded-lg bg-green-50 p-6 text-center transition-colors hover:bg-green-100">
              <div class="mb-4 text-4xl">
                📧
              </div>
              <h3 class="mb-2 text-lg text-gray-900 font-medium">
                Email Us
              </h3>
              <p class="mb-4 text-gray-600">
                Get a response within 24 hours
              </p>
              <a href="mailto:support@mytransactx.com" class="text-green-600 font-medium hover:text-green-800">
                Send Email →
              </a>
            </div>
            <div class="rounded-lg bg-purple-50 p-6 text-center transition-colors hover:bg-purple-100">
              <div class="mb-4 text-4xl">
                📞
              </div>
              <h3 class="mb-2 text-lg text-gray-900 font-medium">
                Call Us
              </h3>
              <p class="mb-4 text-gray-600">
                24/7 helpline for urgent issues
              </p>
              <a href="tel:+2348008722672" class="text-purple-600 font-medium hover:text-purple-800">
                Call Now →
              </a>
            </div>
          </div>

          <!-- Content Sections -->
          <div class="space-y-12">
            <!-- Section 1 -->
            <section>
              <h2 class="mb-6 text-2xl text-gray-900 font-semibold">
                1. Frequently Asked Questions
              </h2>
              <p class="mb-4 text-gray-700">
                Find quick answers to common questions:
              </p>

              <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg">
                  <details class="group p-4">
                    <summary class="flex cursor-pointer items-center justify-between text-gray-900 font-medium">
                      <span>How do I create a TransactX account?</span>
                      <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg>
                      </span>
                    </summary>
                    <p class="mt-4 text-gray-700">
                      Download the TransactX app from the App Store or Google Play Store, then follow the simple registration process. You'll need to provide your email, phone number, and complete KYC verification to start using all features.
                    </p>
                  </details>
                </div>

                <div class="border border-gray-200 rounded-lg">
                  <details class="group p-4">
                    <summary class="flex cursor-pointer items-center justify-between text-gray-900 font-medium">
                      <span>How do I send money to another TransactX user?</span>
                      <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg>
                      </span>
                    </summary>
                    <p class="mt-4 text-gray-700">
                      Open the app, tap "Transfer," enter the recipient's phone number or username, specify the amount, and confirm the transaction. The recipient will receive the money instantly.
                    </p>
                  </details>
                </div>

                <div class="border border-gray-200 rounded-lg">
                  <details class="group p-4">
                    <summary class="flex cursor-pointer items-center justify-between text-gray-900 font-medium">
                      <span>How can I link my bank account?</span>
                      <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg>
                      </span>
                    </summary>
                    <p class="mt-4 text-gray-700">
                      Go to "Bank Accounts" in the app, tap "Add Account," select your bank from the list, and follow the secure authentication process. Your bank credentials are never stored on our servers.
                    </p>
                  </details>
                </div>

                <div class="border border-gray-200 rounded-lg">
                  <details class="group p-4">
                    <summary class="flex cursor-pointer items-center justify-between text-gray-900 font-medium">
                      <span>What should I do if my transaction fails?</span>
                      <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg>
                      </span>
                    </summary>
                    <p class="mt-4 text-gray-700">
                      First, check your transaction history for status updates. If the money was deducted, it will typically be refunded within 24-48 hours. If the issue persists, contact our support team with your transaction ID.
                    </p>
                  </details>
                </div>

                <div class="border border-gray-200 rounded-lg">
                  <details class="group p-4">
                    <summary class="flex cursor-pointer items-center justify-between text-gray-900 font-medium">
                      <span>How do I reset my PIN?</span>
                      <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg>
                      </span>
                    </summary>
                    <p class="mt-4 text-gray-700">
                      Go to "Settings" in the app, select "Security," then "Change PIN." You'll need to verify your identity using your password or biometric credentials before setting a new PIN.
                    </p>
                  </details>
                </div>

                <div class="border border-gray-200 rounded-lg">
                  <details class="group p-4">
                    <summary class="flex cursor-pointer items-center justify-between text-gray-900 font-medium">
                      <span>Is my personal information secure?</span>
                      <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg>
                      </span>
                    </summary>
                    <p class="mt-4 text-gray-700">
                      Absolutely. We use bank-grade encryption and are fully compliant with NDPR and other data protection regulations. Your data is encrypted both in transit and at rest. We never sell your personal information to third parties.
                    </p>
                  </details>
                </div>
              </div>
            </section>

            <!-- Section 2 -->
            <section>
              <h2 class="mb-6 text-2xl text-gray-900 font-semibold">
                2. Contact Options
              </h2>
              <p class="mb-4 text-gray-700">
                Get in touch with our support team through any of these channels:
              </p>

              <div class="space-y-4">
                <div class="flex items-start rounded-lg bg-gray-50 p-4">
                  <div class="mr-4 text-2xl">
                    📧
                  </div>
                  <div>
                    <h3 class="text-gray-900 font-medium">
                      Email Support
                    </h3>
                    <p class="text-gray-600">
                      support@mytransactx.com
                    </p>
                    <p class="text-sm text-gray-500">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div class="flex items-start rounded-lg bg-gray-50 p-4">
                  <div class="mr-4 text-2xl">
                    📞
                  </div>
                  <div>
                    <h3 class="text-gray-900 font-medium">
                      Phone Support
                    </h3>
                    <p class="text-gray-600">
                      +234 800 TRANSACTX
                    </p>
                    <p class="text-sm text-gray-500">
                      Available 24/7 for urgent issues
                    </p>
                  </div>
                </div>

                <div class="flex items-start rounded-lg bg-gray-50 p-4">
                  <div class="mr-4 text-2xl">
                    💬
                  </div>
                  <div>
                    <h3 class="text-gray-900 font-medium">
                      Live Chat
                    </h3>
                    <p class="text-gray-600">
                      In-app chat feature
                    </p>
                    <p class="text-sm text-gray-500">
                      Instant support during business hours
                    </p>
                  </div>
                </div>

                <div class="flex items-start rounded-lg bg-gray-50 p-4">
                  <div class="mr-4 text-2xl">
                    🐦
                  </div>
                  <div>
                    <h3 class="text-gray-900 font-medium">
                      Social Media
                    </h3>
                    <p class="text-gray-600">
                      @TransactXApp
                    </p>
                    <p class="text-sm text-gray-500">
                      Twitter, Facebook, Instagram
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Section 3 -->
            <section>
              <h2 class="mb-6 text-2xl text-gray-900 font-semibold">
                3. Business Support
              </h2>
              <p class="mb-4 text-gray-700">
                For business accounts and enterprise solutions:
              </p>
              <div class="rounded-lg bg-gray-50 p-6">
                <h3 class="mb-2 text-lg text-gray-900 font-medium">
                  Business Support Team
                </h3>
                <p class="mb-1 text-gray-700">
                  <strong>Email:</strong>
                  <a href="mailto:business@mytransactx.com" class="text-blue-600 underline hover:text-blue-800">business@mytransactx.com</a>
                </p>
                <p class="mb-1 text-gray-700">
                  <strong>Phone:</strong> +234 800 BUSINESS
                </p>
                <p class="text-gray-700">
                  <strong>Dedicated Account Manager:</strong> Available for enterprise clients
                </p>
              </div>
            </section>

            <!-- Section 4 -->
            <section>
              <h2 class="mb-6 text-2xl text-gray-900 font-semibold">
                4. Report an Issue
              </h2>
              <p class="mb-4 text-gray-700">
                To help us resolve your issue quickly, please include the following information:
              </p>
              <ul class="ml-4 list-disc list-inside text-gray-700 space-y-2">
                <li>Your registered phone number or email address</li>
                <li>Transaction ID (if applicable)</li>
                <li>Date and time of the issue</li>
                <li>Device type and app version</li>
                <li>Detailed description of the problem</li>
              </ul>
              <p class="mt-4 text-gray-700">
                Submit your issue via email or through the "Report a Problem" feature in the app settings.
              </p>
            </section>

            <!-- Section 5 -->
            <section>
              <h2 class="mb-6 text-2xl text-gray-900 font-semibold">
                5. Emergency Contacts
              </h2>
              <p class="mb-4 text-gray-700">
                For urgent security concerns or fraudulent activity:
              </p>
              <div class="rounded-lg bg-red-50 p-6">
                <h3 class="mb-2 text-lg text-red-900 font-medium">
                  ⚠️ Security & Fraud Team
                </h3>
                <p class="mb-1 text-red-700">
                  <strong>Email:</strong>
                  <a href="mailto:security@mytransactx.com" class="text-red-600 underline hover:text-red-800">security@mytransactx.com</a>
                </p>
                <p class="mb-1 text-red-700">
                  <strong>Hotline:</strong> +234 800 FRAUD
                </p>
                <p class="text-red-600">
                  Available 24/7 - Immediate response for security incidents
                </p>
              </div>
            </section>

            <!-- Section 6 -->
            <section>
              <h2 class="mb-6 text-2xl text-gray-900 font-semibold">
                6. Self-Service Resources
              </h2>
              <p class="mb-4 text-gray-700">
                Find answers quickly using our self-service tools:
              </p>
              <div class="grid gap-4 md:grid-cols-2">
                <a href="#" class="flex items-center border border-gray-200 rounded-lg p-4 transition-colors hover:bg-gray-50">
                  <span class="mr-3 text-2xl">📖</span>
                  <span class="text-gray-900 font-medium">Knowledge Base</span>
                </a>
                <a href="#" class="flex items-center border border-gray-200 rounded-lg p-4 transition-colors hover:bg-gray-50">
                  <span class="mr-3 text-2xl">🎓</span>
                  <span class="text-gray-900 font-medium">Video Tutorials</span>
                </a>
                <a href="#" class="flex items-center border border-gray-200 rounded-lg p-4 transition-colors hover:bg-gray-50">
                  <span class="mr-3 text-2xl">📄</span>
                  <span class="text-gray-900 font-medium">User Guides</span>
                </a>
                <a href="#" class="flex items-center border border-gray-200 rounded-lg p-4 transition-colors hover:bg-gray-50">
                  <span class="mr-3 text-2xl">❓</span>
                  <span class="text-gray-900 font-medium">Community Forum</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for better readability */
.prose h2 {
  color: rgb(17 24 39);
}

.prose h3 {
  color: rgb(17 24 39);
}

.prose p {
  color: rgb(55 65 81);
}

.prose ul {
  color: rgb(55 65 81);
}

.prose a {
  color: rgb(37 99 235);
}

.prose a:hover {
  color: rgb(30 64 175);
}

.tx-bg-primary {
  background-color: #000000;
}
</style>
