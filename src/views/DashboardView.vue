<script setup>
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

const empresaNome = {
  empresa_a: 'Empresa A',
  empresa_b: 'Empresa B',
}

const logoPorEmpresa = {
  empresa_a: 'logo-a.png',
  empresa_b: 'logo-b.png',
}

const logo = logoPorEmpresa[authStore.empresaSelecionada]
const nomeEmpresa = empresaNome[authStore.empresaSelecionada]
</script>

<template>
  <div>
    <img :src="logo" alt="Logo da empresa" height="50" />
    <h2>Bem-vindo à {{ nomeEmpresa }}</h2>
    <p>Usuário: {{ authStore.user?.email }}</p>
    <button @click="authStore.logout">Sair</button>
  </div>
</template>
