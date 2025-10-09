<template>
  <div class="font-bold" :class="className">
    <div class="mt-4">
      <div 
        class="text-black dark:text-white text-3xl leading-snug tracking-wide"
        ref="textContainer"
      >
        <span
          v-for="(word, idx) in wordsArray"
          :key="`${word}-${idx}`"
          :ref="(el) => setWordRef(el, idx)"
          class="opacity-0 inline-block mr-1"
          :style="{ filter: filter ? 'blur(10px)' : 'none' }"
        >
          {{ word }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface Props {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  filter: true,
  duration: 0.5
})

const textContainer = ref<HTMLElement>()
const wordRefs = ref<HTMLElement[]>([])
const wordsArray = ref<string[]>([])

const setWordRef = (el: HTMLElement | null, idx: number) => {
  if (el) {
    wordRefs.value[idx] = el
  }
}

const animateWords = async () => {
  await nextTick()
  
  const words = wordRefs.value
  if (!words.length) return

  // Animate each word with stagger
  words.forEach((word, index) => {
    if (word) {
      setTimeout(() => {
        word.style.opacity = '1'
        word.style.filter = props.filter ? 'blur(0px)' : 'none'
        word.style.transition = `opacity ${props.duration}s ease-out, filter ${props.duration}s ease-out`
      }, index * 400) // 400ms stagger between words (slower)
    }
  })
}

onMounted(() => {
  wordsArray.value = props.words.split(' ')
  
  // Start animation after a short delay
  setTimeout(() => {
    animateWords()
  }, 100)
})
</script>
