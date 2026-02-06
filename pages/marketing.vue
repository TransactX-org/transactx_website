<script setup>
// Marketing page
useHead({
  title: 'Marketing - TransactX',
  meta: [
    { name: 'description', content: 'TransactX Marketing - Discover our innovative payment solutions and grow your business.' },
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
            class="inline-flex items-center border border-gray-300 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
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
            <h1 class="mb-4 text-4xl font-bold text-gray-900">
              Marketing & Partnerships
            </h1>
            <div class="text-lg text-gray-600 space-y-2">
              <p>Transform the way you do business with TransactX</p>
            </div>
          </div>

          <!-- Introduction -->
          <div class="prose-lg mb-12 max-w-none prose">
            <p class="leading-relaxed text-gray-700">
              At TransactX, we believe in empowering businesses with cutting-edge payment solutions that drive growth, enhance customer experience, and streamline financial operations. Our marketing philosophy centers on delivering value, building trust, and fostering long-term partnerships.
            </p>
          </div>

          <!-- Content Sections -->
          <div class="space-y-12">
            <!-- Section 1 -->
            <section>
              <h2 class="mb-6 text-2xl font-semibold text-gray-900">
                1. Our Marketing Approach
              </h2>
              <p class="mb-4 text-gray-700">
                We employ a multi-channel marketing strategy to reach businesses and individuals who can benefit from our innovative payment solutions:
              </p>

              <div class="space-y-6">
                <div>
                  <h3 class="mb-3 text-lg font-medium text-gray-900">
                    a. Digital Marketing
                  </h3>
                  <ul class="ml-4 list-disc list-inside text-gray-700 space-y-1">
                    <li>Search engine optimization (SEO) and content marketing</li>
                    <li>Social media campaigns across major platforms</li>
                    <li>Email marketing with personalized offers and updates</li>
                    <li>Pay-per-click advertising and retargeting campaigns</li>
                  </ul>
                </div>

                <div>
                  <h3 class="mb-3 text-lg font-medium text-gray-900">
                    b. Strategic Partnerships
                  </h3>
                  <ul class="ml-4 list-disc list-inside text-gray-700 space-y-1">
                    <li>Collaboration with financial institutions and banks</li>
                    <li>Integration partnerships with e-commerce platforms</li>
                    <li>Affiliate programs and referral networks</li>
                    <li>Co-branding opportunities with trusted brands</li>
                  </ul>
                </div>

                <div>
                  <h3 class="mb-3 text-lg font-medium text-gray-900">
                    c. Events and Sponsorships
                  </h3>
                  <ul class="ml-4 list-disc list-inside text-gray-700 space-y-1">
                    <li>Industry conferences and tech summits</li>
                    <li>Business networking events and webinars</li>
                    <li>Community outreach and financial literacy programs</li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Section 2 -->
            <section>
              <h2 class="mb-6 text-2xl font-semibold text-gray-900">
                2. Why Choose TransactX?
              </h2>
              <p class="mb-4 text-gray-700">
                Our competitive advantages that make us the preferred choice for businesses:
              </p>
              <ul class="ml-4 list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Lightning-Fast Transactions:</strong> Process payments in seconds, not minutes</li>
                <li><strong>Competitive Rates:</strong> Transparent pricing with no hidden fees</li>
                <li><strong>Secure Platform:</strong> Bank-grade encryption and compliance with industry standards</li>
                <li><strong>24/7 Support:</strong> Dedicated customer service team available around the clock</li>
                <li><strong>Multi-Currency Support:</strong> Accept payments in multiple currencies</li>
                <li><strong>Real-Time Analytics:</strong> Comprehensive dashboards and reporting tools</li>
              </ul>
            </section>

            <!-- Section 3 -->
            <section>
              <h2 class="mb-6 text-2xl font-semibold text-gray-900">
                3. Success Stories
              </h2>
              <p class="mb-4 text-gray-700">
                Join thousands of businesses that have transformed their payment operations with TransactX:
              </p>
              <div class="grid gap-6 md:grid-cols-2">
                <div class="rounded-lg bg-gray-50 p-6">
                  <h3 class="mb-2 text-lg font-medium text-gray-900">
                    E-commerce Success
                  </h3>
                  <p class="text-gray-700">
                    "TransactX increased our checkout conversion rate by 35% with their seamless payment integration."
                  </p>
                  <p class="mt-2 text-sm text-gray-500">
                    - Online Retail Store, Lagos
                  </p>
                </div>
                <div class="rounded-lg bg-gray-50 p-6">
                  <h3 class="mb-2 text-lg font-medium text-gray-900">
                    Restaurant Group
                  </h3>
                  <p class="text-gray-700">
                    "The QR code payment feature reduced our average table turnover time by 40%. Our customers love it!"
                  </p>
                  <p class="mt-2 text-sm text-gray-500">
                    - Restaurant Chain, Abuja
                  </p>
                </div>
              </div>
            </section>

            <!-- Section 4 -->
            <section>
              <h2 class="mb-6 text-2xl font-semibold text-gray-900">
                4. Partnership Opportunities
              </h2>
              <p class="mb-4 text-gray-700">
                We actively seek partnerships with businesses that share our vision of revolutionizing digital payments:
              </p>
              <ul class="ml-4 list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Reseller Partners:</strong> Earn commissions by reselling TransactX solutions</li>
                <li><strong>Integration Partners:</strong> Build complementary products and services</li>
                <li><strong>Enterprise Solutions:</strong> Customized payment solutions for large organizations</li>
                <li><strong>Referral Program:</strong> Earn rewards for every successful referral</li>
              </ul>
            </section>

            <!-- Section 5 -->
            <section>
              <h2 class="mb-6 text-2xl font-semibold text-gray-900">
                5. Brand Guidelines
              </h2>
              <p class="mb-4 text-gray-700">
                For partners and affiliates using our brand assets, please adhere to our brand guidelines:
              </p>
              <ul class="ml-4 list-disc list-inside text-gray-700 space-y-2">
                <li>Use the official TransactX logo and brand colors</li>
                <li>Follow our tone of voice guidelines in all communications</li>
                <li>Do not modify or distort our branding elements</li>
                <li>Credit TransactX appropriately in all marketing materials</li>
              </ul>
              <p class="mt-4 text-gray-700">
                Download our brand assets from our partner portal or contact us for assistance.
              </p>
            </section>

            <!-- Section 6 -->
            <section>
              <h2 class="mb-6 text-2xl font-semibold text-gray-900">
                6. Contact Our Marketing Team
              </h2>
              <p class="mb-4 text-gray-700">
                For marketing inquiries, partnerships, or collaboration opportunities:
              </p>
              <div class="rounded-lg bg-gray-50 p-6">
                <h3 class="mb-2 text-lg font-medium text-gray-900">
                  TransactX Marketing Team
                </h3>
                <p class="mb-1 text-gray-700">
                  <strong>Email:</strong>
                  <a href="mailto:marketing@mytransactx.com" class="text-blue-600 underline hover:text-blue-800">marketing@mytransactx.com</a>
                </p>
                <p class="mb-1 text-gray-700">
                  <strong>Phone:</strong> +234 800 TRANSACTX
                </p>
                <p class="text-gray-700">
                  <strong>Website:</strong>
                  <a href="https://www.mytransactx.com" class="text-blue-600 underline hover:text-blue-800">www.mytransactx.com</a>
                </p>
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
  @apply text-gray-900;
}

.prose h3 {
  @apply text-gray-900;
}

.prose p {
  @apply text-gray-700;
}

.prose ul {
  @apply text-gray-700;
}

.prose a {
  @apply text-blue-600 hover:text-blue-800;
}

.tx-bg-primary {
  background-color: #000000;
}
</style>
