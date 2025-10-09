<template>
  <div
    ref="containerRef"
    class="relative"
    @mouse-move="handleMouseMove"
    @mouse-enter="handleMouseEnter"
    @mouse-leave="handleMouseLeave"
  >
    <Transition name="pointer-fade">
      <FollowPointer
        v-if="isInside"
        :x="x"
        :y="y"
        :title="title"
      />
    </Transition>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FollowPointer from './FollowPointer.vue'

interface Props {
  title?: string
  className?: string
}

defineProps<Props>()

const containerRef = ref<HTMLElement>()
const rect = ref<DOMRect | null>(null)
const isInside = ref(false)
const x = ref(0)
const y = ref(0)

onMounted(() => {
  if (containerRef.value) {
    rect.value = containerRef.value.getBoundingClientRect()
  }
})

const handleMouseMove = (e: MouseEvent) => {
  if (rect.value && containerRef.value) {
    const scrollX = window.scrollX
    const scrollY = window.scrollY
    x.value = e.clientX - rect.value.left + scrollX
    y.value = e.clientY - rect.value.top + scrollY
  }
}

const handleMouseEnter = () => {
  isInside.value = true
}

const handleMouseLeave = () => {
  isInside.value = false
}
</script>

<style scoped>
.pointer-fade-enter-active,
.pointer-fade-leave-active {
  transition: all 0.2s ease;
}

.pointer-fade-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.pointer-fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>
