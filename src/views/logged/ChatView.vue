<script setup>
import MenuInternalPage from '@/components/MenuInternalPage.vue'
import SearchChat from '@/components/SearchChat.vue'
import ListChats from '@/components/ListChats.vue'
</script>

<template>
  <div class="page">
    <MenuInternalPage icon="batePapo" title="Bate Papo">
      <template #content-menu>
        <SearchChat />
        <ListChats />
      </template>
    </MenuInternalPage>

    <div class="_content">
      <h1 style="font-size: 1.4rem">Conteúdo - Bate Papo</h1>
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
