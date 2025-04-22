<template>
  <div class="flow__login">
    <div class="logo">
      <img :src="Logo" alt="CRM Chat" />
      <Typing />
    </div>
    <div class="card-container">
      <form @submit.prevent="login">
        <input v-model="email" type="email" autofocus placeholder="Email" />
        <input v-model="password" type="password" placeholder="Senha" />
        <select v-model="selectedCompany">
          <option disabled value="">Selecione a empresa</option>
          <option v-for="empresa in empresas" :key="empresa.id" :value="empresa.id">
            {{ empresa.nome }}
          </option>
        </select>
        <button type="submit">Acessar</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Logo from '@/assets/logo.svg'
import Typing from '@/components/TypingLogo.vue'

const email = ref('')
const password = ref('')
const selectedCompany = ref('')
const error = ref(null)
const authStore = useAuthStore()

const empresas = ref([
  { id: 'vivara', nome: 'Vivara' },
  { id: 'aramis', nome: 'Aramis' },
])

const login = async () => {
  try {
    if (!selectedCompany.value) throw new Error('Selecione uma empresa.')
    await authStore.login(email.value, password.value, selectedCompany.value)
  } catch (err) {
    error.value = err.message
  }
}
</script>
