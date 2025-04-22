<template>
  <div class="typing">{{ displayedText }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullText = 'Chat'
const displayedText = ref('')
let index = 0
let direction = 1

onMounted(() => {
  setInterval(() => {
    if (direction === 1) {
      if (index < fullText.length) {
        index++
      } else {
        direction = -1
      }
    } else {
      if (index > 0) {
        index--
      } else {
        direction = 1
      }
    }
    displayedText.value = fullText.slice(0, index)
  }, 300)
})
</script>

<style scoped>
.typing {
  align-items: center;
  display: flex;
  color: white;
  font-size: 3.3rem;
  white-space: nowrap;
  margin-left: 16px;
  overflow: hidden;
  width: fit-content;
  animation: blink-caret 0.7s step-end infinite;
  z-index: 2;

  @media (max-width: 747px) {
    font-size: 2rem;
    align-items: flex-start;
    margin: 4px 0 0 8px;
  }
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}
</style>
