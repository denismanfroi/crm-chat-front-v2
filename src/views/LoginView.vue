<template>
  <div class="teste">
    <img :src="Logo" alt="CRM Chat" class="logo" />
    <div class="card-container">
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" />
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

<style scoped>
.logo {
  max-width: 300px;
  margin-left: -156px;
  margin-bottom: -4px;
}

.card-container {
  background: linear-gradient(to bottom, #f6a317 0%, #d98600 100%);
  padding: 3rem;
  border-radius: 0 50px 50px 50px;
  width: 100%;
}

.teste {
  width: 500px;
}

.card-container h2 {
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
}

.card-container form {
  display: flex;
  flex-direction: column;
}

.card-container input,
.card-container select {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.card-container button {
  padding: 1rem 2rem;
  background-color: var(--black);
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.login-container button:hover {
  background-color: #45a049;
}

.error {
  margin-top: 1rem;
  color: red;
  font-size: 0.9rem;
  text-align: center;
}

.success {
  color: green;
  margin-top: 1rem;
}
</style>
