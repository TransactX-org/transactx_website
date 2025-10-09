<template>
  <div class="css-grid-background">
    <div class="grid-container">
      <div
        v-for="(cell, idx) in cells"
        :key="idx"
        class="grid-cell"
        :class="{ 'ripple-active': clickedCell === idx }"
        :style="getCellStyle(idx)"
        @click="handleCellClick(idx)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  rows?: number
  cols?: number
  cellSize?: number
}

const props = withDefaults(defineProps<Props>(), {
  rows: 12,
  cols: 30,
  cellSize: 40
})

const clickedCell = ref<number | null>(null)
const cells = computed(() => 
  Array.from({ length: props.rows * props.cols }, (_, idx) => idx)
)

const getCellStyle = (idx: number) => {
  const rowIdx = Math.floor(idx / props.cols)
  const colIdx = idx % props.cols
  
  if (clickedCell.value === null) {
    return {
      '--cell-x': `${colIdx * props.cellSize}px`,
      '--cell-y': `${rowIdx * props.cellSize}px`,
      '--cell-size': `${props.cellSize}px`
    }
  }
  
  const clickedRowIdx = Math.floor(clickedCell.value / props.cols)
  const clickedColIdx = clickedCell.value % props.cols
  const distance = Math.hypot(clickedRowIdx - rowIdx, clickedColIdx - colIdx)
  
  return {
    '--cell-x': `${colIdx * props.cellSize}px`,
    '--cell-y': `${rowIdx * props.cellSize}px`,
    '--cell-size': `${props.cellSize}px`,
    '--ripple-delay': `${distance * 50}ms`,
    '--ripple-duration': `${300 + distance * 100}ms`
  }
}

const handleCellClick = (idx: number) => {
  clickedCell.value = idx
  setTimeout(() => {
    clickedCell.value = null
  }, 2000)
}

onMounted(() => {
  // Auto-trigger ripple effect every 3 seconds
  const interval = setInterval(() => {
    const randomCell = Math.floor(Math.random() * cells.value.length)
    handleCellClick(randomCell)
  }, 3000)
  
  onUnmounted(() => {
    clearInterval(interval)
  })
})
</script>

<style scoped>
.css-grid-background {
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: white;
  left: 50%;
  transform: translateX(-50%);
}

.grid-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(v-bind('props.cols'), 1fr);
  grid-template-rows: repeat(v-bind('props.rows'), 1fr);
  gap: 1px;
  mask: radial-gradient(ellipse at center, transparent 0%, black 20%, black 80%, transparent 100%);
  -webkit-mask: radial-gradient(ellipse at center, transparent 0%, black 20%, black 80%, transparent 100%);
  filter: blur(0.3px);
  box-shadow: 
    inset 0 0 20px 0 rgba(171, 11, 75, 0.05),
    0 0 30px 0 rgba(255, 255, 255, 0.1);
}

.grid-cell {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.01);
  transition: all 0.4s ease;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 
    0 0 0 0 rgba(171, 11, 75, 0),
    inset 0 0 0 0 rgba(255, 255, 255, 0.1);
  filter: blur(0.5px);
}

.grid-cell:hover {
  background: rgba(171, 11, 75, 0.08);
  border-color: rgba(171, 11, 75, 0.15);
  transform: scale(1.02);
  box-shadow: 
    0 0 8px 2px rgba(171, 11, 75, 0.1),
    inset 0 0 0 0 rgba(255, 255, 255, 0.2);
  filter: blur(0px);
}

.ripple-active {
  animation: ripple-effect var(--ripple-duration, 300ms) ease-out var(--ripple-delay, 0ms);
}

@keyframes ripple-effect {
  0% {
    background: rgba(255, 255, 255, 0.03);
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(171, 11, 75, 0);
    filter: blur(0.5px);
  }
  50% {
    background: rgba(171, 11, 75, 0.12);
    transform: scale(1.08);
    box-shadow: 
      0 0 15px 4px rgba(171, 11, 75, 0.2),
      inset 0 0 0 0 rgba(255, 255, 255, 0.3);
    filter: blur(0px);
  }
  100% {
    background: rgba(255, 255, 255, 0.03);
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(171, 11, 75, 0);
    filter: blur(0.5px);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(v-bind('Math.floor(props.cols / 2)'), v-bind('props.cellSize + "px"'));
    grid-template-rows: repeat(v-bind('Math.floor(props.rows / 2)'), v-bind('props.cellSize + "px"'));
  }
}
</style>
