<script setup>
import MenuInternalPage from '@/components/MenuInternalPage.vue'
</script>

<template>
  <div class="page">
    <MenuInternalPage />

    <div class="_content">
      <h1>Automação</h1>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'menu content';
  height: 100%;
  width: 100%;
  color: white;

  & ._content {
    grid-area: content;
    padding: 2rem;
  }
}
</style>
