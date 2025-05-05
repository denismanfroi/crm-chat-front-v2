<script setup>
import LogoCRMBonus from '@/assets/logo-crm-chat.svg'
import Typing from '@/components/Typing.vue'
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { RouterLink } from 'vue-router'

const authStore = useAuthStore()
const listWords = ref(['Chat'])
const newListWords = ref([...listWords.value, authStore.empresaSelecionada])

const menus = {
  default: [
    { label: 'Bate-papo', isActive: true },
    { label: 'Painel', isActive: true },
    { label: 'Automações', isActive: true },
    { label: 'Transmissão', isActive: true },
    { label: 'Contatos', isActive: true },
    { label: 'Desenvolvedor', isActive: true },
  ],
  user: [
    { label: 'config', isActive: true },
    { label: 'deslogar', isActive: false },
  ],
}
</script>

<template>
  <div class="logged-container">
    <section class="menu">
      <div class="box-logo">
        <img :src="LogoCRMBonus" alt="Logo CRM Bonus" />
        <Typing
          v-if="authStore.empresaSelecionada !== null"
          :words="newListWords"
          :fontSize="1.4"
        />
        <Typing v-else :words="listWords" :fontSize="1.4" />
      </div>

      <div v-for="(menu, key) in menus" :key="key">
        <template v-if="key === 'default'">
          <div class="box-menu">
            <RouterLink
              v-for="item in menu.filter((i) => i.isActive)"
              :key="item.label"
              to="/dashboard"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </template>
      </div>

      <div class="box-user">
        <p>Denis Manfroi</p>
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
  background-image:
    linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
    url('https://cdn.prod.website-files.com/646b6f3bf6907682fc10812f/66954be6b7427a772916d5f5_663d1f9fd45bf4919cc2004c_site%20crm%201920x1080%20preto%20final.webp');
  background-size: cover;
  background-position: center;
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
    grid-area: menu;
    max-width: 300px;

    & .box-logo {
      align-items: center;
      border-bottom: 1px dashed rgba(102, 102, 102, 0.6);
      display: flex;
      margin-bottom: 30px;
      padding-bottom: 30px;

      & img {
        max-width: 80px;
      }
    }

    & .box-menu {
      display: flex;
      flex-direction: column;
      gap: 20px;

      & a {
        background-color: rgba(58, 58, 58, 0.6);
        border: 1px solid rgba(102, 102, 102, 0.6);
        border-radius: 0.8rem;
        color: white;
        font-size: 0.9rem;
        padding: 0.6rem;
        text-decoration: none;

        &:hover {
          border-color: var(--orange);
        }
      }
    }
  }

  & .menu_internal_page {
    background-color: rgba(36, 36, 36, 0.6);
    grid-area: menu_internal_page;
    max-width: 340px;
  }

  & .content {
    background-color: rgba(58, 58, 58, 0.6);
    grid-area: content;
  }
}
</style>
