<template>
  <div class="flow__register">
    <div class="logo">
      <img :src="Logo" alt="CRM Chat" />
      <Typing :words="['Chat', 'Cadastro']" />
    </div>
    <div class="card-container">
      <form @submit.prevent="handleSignup">
        <input type="email" v-model="email" autofocus placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Senha" required />

        <button type="submit">Cadastrar</button>

        <p v-if="success" class="success">
          Cadastro realizado com sucesso! Redirecionando para tela de login
        </p>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import Logo from '@/assets/logo.svg'
import Typing from '@/components/Typing.vue'

// Simulando lista de empresas
const authStore = useAuthStore()
const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')
const success = ref(false)

const handleSignup = async () => {
  error.value = ''
  success.value = false
  try {
    await authStore.signup(email.value, password.value)
    success.value = true
    email.value = ''
    password.value = ''

    setTimeout(() => {
      router.push('/login')
    }, 2000)
  } catch (err) {
    error.value = err.message
  }
}
</script>
