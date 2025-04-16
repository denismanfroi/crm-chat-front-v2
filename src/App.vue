<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 100%;
  max-height: 100%;
  width: 100vw;
  height: 100dvh;
  display: grid;
  place-items: center;
}
</style>
