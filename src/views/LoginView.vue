<template>
  <div class="flow__login">
    <div class="logo">
      <img :src="Logo" alt="CRM Chat" />
      <Typing :words="['Chat', 'Login']" />
    </div>
    <div class="card-container">
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" autofocus placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Senha" required />

        <select v-model="selectedCompany" required>
          <option disabled value="">Selecione um cliente</option>
          <option v-for="empresa in empresas" :key="empresa.id" :value="empresa.id">
            {{ empresa.nome }}
          </option>
        </select>

        <button type="submit">Acessar</button>
      </form>

      <div class="social-login">
        <button @click="handleGoogleLogin">
          <img :src="LogoGoogleSocial" alt="" width="30" />
        </button>
      </div>
      <p v-if="auth.errorMessage" class="error">{{ auth.errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Logo from '@/assets/logo.svg'
import LogoGoogleSocial from '@/assets/social-google-plus.svg'
import Typing from '@/components/Typing.vue'

onMounted(() => {
  auth.errorMessage = null
})

const auth = useAuthStore()
const email = ref('')
const password = ref('')
const selectedCompany = ref('')

const empresas = ref([
  { id: 'vivara', nome: 'Vivara' },
  { id: 'aramis', nome: 'Aramis' },
])

const handleLogin = async () => {
  try {
    await auth.login(email.value, password.value, selectedCompany.value)
  } catch (err) {
    console.error('Erro ao logar:', err)
  }
}

const handleGoogleLogin = async () => {
  if (!selectedCompany.value) {
    auth.errorMessage = 'Por favor selecione um cliente'
    return
  }
  try {
    await auth.loginWithGoogle(selectedCompany.value)
  } catch (err) {
    console.error('Erro ao logar:', err)
  }
}
</script>
