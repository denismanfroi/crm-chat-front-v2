<template>
  <div class="card-container">
    <h2>CRM Chat - Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Senha" />
      <select v-model="selectedCompany">
        <option disabled value="">Selecione a empresa</option>
        <option v-for="empresa in empresas" :key="empresa.id" :value="empresa.id">
          {{ empresa.nome }}
        </option>
      </select>
      <button type="submit">Entrar</button>

      <br />

      <div>
        <RouterLink to="/cadastrar">Criar conta</RouterLink>
      </div>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { RouterLink } from 'vue-router'

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
