<script setup>
import LogoCRMBonus from '@/assets/logo-crm-chat.svg'
import Typing from '@/components/Typing.vue'
</script>

<template>
  <div class="logged-container">
    <section class="menu">
      <div class="box-logo">
        <img :src="LogoCRMBonus" alt="Logo CRM Bonus" />
        <Typing :words="['Chat', 'Dashboard']" :fontSize="1.4" />
      </div>
    </section>

    <section class="menu_internal_page">
      <p>Menu Secondary</p>
    </section>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.logged-container {
  display: grid;
  grid-template-areas: 'menu menu_internal_page content';
  grid-template-columns: auto auto 1fr;
  height: 100dvh;
  width: 100vw;

  & > * {
    padding: 2rem;
  }

  & :where(.menu, .menu_internal_page) {
    width: 100vw;
  }

  & .menu {
    background-image:
      linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url('https://cdn.prod.website-files.com/646b6f3bf6907682fc10812f/66954be6b7427a772916d5f5_663d1f9fd45bf4919cc2004c_site%20crm%201920x1080%20preto%20final.webp');
    background-size: cover;
    background-position: right;
    grid-area: menu;
    max-width: 300px;

    & .box-logo {
      align-items: center;
      display: flex;

      & img {
        max-width: 80px;
      }
    }
  }

  & .menu_internal_page {
    background-color: rgb(27, 27, 27);
    grid-area: menu_internal_page;
    max-width: 340px;
  }

  & .content {
    background-color: rgb(58, 58, 58);
    grid-area: content;
  }
}
</style>
