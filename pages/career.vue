<script setup>
useHead({
  title: 'Careers - TransactX',
  meta: [
    { name: 'description', content: 'Join the TransactX team. We are currently hiring a Backend Developer.' },
  ],
})

const ROLE_TITLE = 'Backend Developer'
const MAX_RESUME_SIZE = 5 * 1024 * 1024
const ALLOWED_RESUME_EXTENSIONS = ['.pdf', '.doc', '.docx']

const form = ref({
  fullName: '',
  email: '',
  phone: '',
  linkedin: '',
  message: '',
})

const resumeFile = ref(null)
const status = ref('idle') // idle | submitting | success | error
const errorMessage = ref('')

function onResumeChange(event) {
  const file = event.target.files?.[0] ?? null
  errorMessage.value = ''

  if (file) {
    const hasValidExtension = ALLOWED_RESUME_EXTENSIONS.some(ext => file.name.toLowerCase().endsWith(ext))
    if (!hasValidExtension) {
      errorMessage.value = 'Resume must be a PDF or Word document (.pdf, .doc, .docx)'
      event.target.value = ''
      resumeFile.value = null
      return
    }
    if (file.size > MAX_RESUME_SIZE) {
      errorMessage.value = 'Resume must be under 5MB'
      event.target.value = ''
      resumeFile.value = null
      return
    }
  }

  resumeFile.value = file
}

async function submitApplication() {
  if (!resumeFile.value) {
    errorMessage.value = 'Please attach your resume'
    return
  }

  status.value = 'submitting'
  errorMessage.value = ''

  const payload = new FormData()
  payload.append('role', ROLE_TITLE)
  payload.append('fullName', form.value.fullName)
  payload.append('email', form.value.email)
  payload.append('phone', form.value.phone)
  payload.append('linkedin', form.value.linkedin)
  payload.append('message', form.value.message)
  payload.append('resume', resumeFile.value)

  try {
    await $fetch('/api/career-application', {
      method: 'POST',
      body: payload,
    })
    status.value = 'success'
    form.value = { fullName: '', email: '', phone: '', linkedin: '', message: '' }
    resumeFile.value = null
  }
  catch (err) {
    status.value = 'error'
    errorMessage.value = err?.data?.statusMessage || 'Something went wrong sending your application. Please try again.'
  }
}
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
              Careers at TransactX
            </h1>
            <div class="text-lg text-gray-600 space-y-2">
              <p>Help us build the future of real-time money management</p>
            </div>
          </div>

          <div class="space-y-12">
            <!-- Open Role -->
            <section>
              <h2 class="mb-6 text-2xl text-gray-900 font-semibold">
                Open Position
              </h2>

              <div class="rounded-lg bg-blue-50 p-6">
                <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h3 class="text-xl text-gray-900 font-semibold">
                    {{ ROLE_TITLE }}
                  </h3>
                  <span class="rounded-full bg-blue-600 px-3 py-1 text-xs text-white font-medium">
                    Hiring now
                  </span>
                </div>
                <p class="mb-4 text-sm text-gray-600">
                  Remote &middot; Full-time
                </p>

                <div class="space-y-4 text-gray-700">
                  <div>
                    <h4 class="mb-2 font-medium">
                      About the role
                    </h4>
                    <p>
                      We're looking for a Backend Developer to help design, build, and scale the
                      services that power TransactX's real-time transaction monitoring, payments,
                      and wallet features.
                    </p>
                  </div>

                  <div>
                    <h4 class="mb-2 font-medium">
                      What you'll do
                    </h4>
                    <ul class="ml-4 list-disc list-inside space-y-1">
                      <li>Design and maintain secure, scalable APIs for payments and account features</li>
                      <li>Work with databases and message queues to process transactions in real time</li>
                      <li>Integrate with banking, card, and payment provider APIs</li>
                      <li>Write clean, well-tested code and participate in code reviews</li>
                      <li>Collaborate with product, mobile, and frontend teams to ship features</li>
                    </ul>
                  </div>

                  <div>
                    <h4 class="mb-2 font-medium">
                      What we're looking for
                    </h4>
                    <ul class="ml-4 list-disc list-inside space-y-1">
                      <li>Solid experience building backend services (Laravel PHP, PostgreSQL)</li>
                      <li>Experience with relational databases and API design</li>
                      <li>Understanding of security best practices, especially around financial data</li>
                      <li>Comfortable working in a fast-moving startup environment</li>
                      <li>Fintech or payments experience is a plus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- Application Form -->
            <section>
              <h2 class="mb-6 text-2xl text-gray-900 font-semibold">
                Apply for {{ ROLE_TITLE }}
              </h2>

              <p class="mb-6 text-gray-700">
                Fill in the form below to submit your application. We'll review your submission and reach out if we think you're a good fit for the role.
              </p>

              <form class="space-y-5" @submit.prevent="submitApplication">
                <div class="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label for="fullName" class="mb-1 block text-sm text-gray-700 font-medium">Full name *</label>
                    <input
                      id="fullName"
                      v-model="form.fullName"
                      type="text"
                      required
                      class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                  </div>
                  <div>
                    <label for="email" class="mb-1 block text-sm text-gray-700 font-medium">Email *</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                  </div>
                  <div>
                    <label for="phone" class="mb-1 block text-sm text-gray-700 font-medium">Phone</label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                  </div>
                  <div>
                    <label for="linkedin" class="mb-1 block text-sm text-gray-700 font-medium">LinkedIn / Portfolio</label>
                    <input
                      id="linkedin"
                      v-model="form.linkedin"
                      type="url"
                      placeholder="https://"
                      class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                  </div>
                </div>

                <div>
                  <label for="resume" class="mb-1 block text-sm text-gray-700 font-medium">Resume / CV *</label>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    class="block w-full text-sm text-gray-700 file:mr-4 file:border-0 file:rounded-md file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:text-gray-700 file:font-medium hover:file:bg-gray-200"
                    @change="onResumeChange"
                  >
                  <p class="mt-1 text-xs text-gray-500">
                    PDF or Word document, up to 5MB.
                  </p>
                </div>

                <div>
                  <label for="message" class="mb-1 block text-sm text-gray-700 font-medium">Why are you a good fit? *</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    required
                    class="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <p v-if="errorMessage" class="text-sm text-red-700">
                  {{ errorMessage }}
                </p>

                <button
                  type="submit"
                  :disabled="status === 'submitting'"
                  class="w-full rounded-md bg-black px-6 py-3 text-white font-medium transition-colors duration-200 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {{ status === 'submitting' ? 'Sending...' : 'Send Application' }}
                </button>

                <p v-if="status === 'success'" class="text-sm text-green-700">
                  Thanks! Your application has been sent — we'll be in touch if it's a match.
                </p>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
