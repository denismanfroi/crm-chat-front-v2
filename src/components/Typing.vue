<template>
  <div class="typing" :style="{ fontSize: `${fontSize}rem` }">{{ displayedText }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  words: {
    type: Array,
    required: true,
  },
  typeSpeed: {
    type: Number,
    default: 200,
  },
  deleteSpeed: {
    type: Number,
    default: 100,
  },
  pauseDelay: {
    type: Number,
    default: 2000,
  },
  fontSize: {
    type: Number,
    default: 3.2,
  },
})

const displayedText = ref('')
let wordIndex = 0
let charIndex = 0
let direction = 1

function typeLoop() {
  const currentWord = props.words[wordIndex]

  if (direction === 1) {
    if (charIndex < currentWord.length) {
      charIndex++
      displayedText.value = currentWord.slice(0, charIndex)
      setTimeout(typeLoop, props.typeSpeed)
    } else {
      direction = -1
      setTimeout(typeLoop, props.pauseDelay)
    }
  } else {
    if (charIndex > 0) {
      charIndex--
      displayedText.value = currentWord.slice(0, charIndex)
      setTimeout(typeLoop, props.deleteSpeed)
    } else {
      direction = 1
      wordIndex = (wordIndex + 1) % props.words.length
      setTimeout(typeLoop, props.pauseDelay)
    }
  }
}

onMounted(() => {
  typeLoop()
})
</script>

<style scoped>
.typing {
  align-items: center;
  display: flex;
  border-right: 2px solid rgba(255, 255, 255, 0.768);
  color: white;
  white-space: nowrap;
  margin-left: 16px;
  overflow: hidden;
  width: fit-content;
  animation: blink-caret 0.7s step-end infinite;
  z-index: 2;
  text-transform: capitalize;

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
