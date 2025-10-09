<template>
  <div class="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
    <button
      @click="$emit('toggle')"
      class="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
    >
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-medium text-gray-900 pr-4">
          {{ question }}
        </h3>
        <div class="flex-shrink-0">
          <svg
            class="w-5 h-5 text-gray-500 transition-transform duration-300"
            :class="{ 'rotate-180': isOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </button>
    
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isOpen" class="overflow-hidden">
        <div class="px-6 pb-4">
          <div class="text-gray-600 leading-relaxed">
            <span class="typing-text">{{ displayedText }}</span>
            <span v-if="isTyping" class="typing-cursor">|</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

interface Props {
  question: string
  answer: string
  isOpen: boolean
}

const props = defineProps<Props>()

defineEmits<{
  toggle: []
}>()

const displayedText = ref('')
const isTyping = ref(false)
let typingInterval: NodeJS.Timeout | null = null

const startTyping = () => {
  displayedText.value = ''
  isTyping.value = true
  let currentIndex = 0
  
  typingInterval = setInterval(() => {
    if (currentIndex < props.answer.length) {
      displayedText.value += props.answer[currentIndex]
      currentIndex++
    } else {
      isTyping.value = false
      if (typingInterval) {
        clearInterval(typingInterval)
        typingInterval = null
      }
    }
  }, 30) // Adjust speed here (lower = faster)
}

const stopTyping = () => {
  if (typingInterval) {
    clearInterval(typingInterval)
    typingInterval = null
  }
  displayedText.value = props.answer
  isTyping.value = false
}

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    startTyping()
  } else {
    stopTyping()
  }
})

onUnmounted(() => {
  if (typingInterval) {
    clearInterval(typingInterval)
  }
})
</script>

<style scoped>
.typing-cursor {
  animation: blink 1s infinite;
  color: #6b7280;
  font-weight: bold;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>
