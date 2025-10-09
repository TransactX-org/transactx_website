<template>
  <div
    class="absolute z-50 h-4 w-4 rounded-full pointer-events-none"
    :style="{
      top: `${y}px`,
      left: `${x}px`,
    }"
  >
    <!-- Arrow SVG -->
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="1"
      viewBox="0 0 16 16"
      class="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-sky-600 text-sky-500"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
    </svg>
    
    <!-- Title Badge -->
    <div
      class="min-w-max rounded-full px-2 py-2 text-xs whitespace-nowrap text-white absolute -translate-x-1/2 -translate-y-8"
      :style="{
        backgroundColor: randomColor
      }"
    >
      {{ title || 'TransactX' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  x: number
  y: number
  title?: string
}

defineProps<Props>()

const colors = [
  '#0ea5e9',
  '#737373', 
  '#14b8a6',
  '#22c55e',
  '#3b82f6',
  '#ef4444',
  '#eab308',
  '#AB0B4B' // TransactX brand color
]

const randomColor = ref('')

onMounted(() => {
  randomColor.value = colors[Math.floor(Math.random() * colors.length)]
})
</script>
