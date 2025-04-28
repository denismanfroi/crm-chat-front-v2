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

        <p v-if="authStore.successMessage" class="success">
          {{ authStore.successMessage }}
        </p>
      </form>
      <p v-if="authStore.errorMessage" class="error">{{ authStore.errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import Logo from '@/assets/logo.svg'
import Typing from '@/components/Typing.vue'

// Simulando lista de empresas
const authStore = useAuthStore()
const router = useRouter()
const email = ref('')
const password = ref('')

onMounted(() => {
  authStore.errorMessage = null
  authStore.successMessage = null
})

const handleSignup = async () => {
  try {
    await authStore.signup(email.value, password.value)
    email.value = ''
    password.value = ''

    if (!authStore.errorMessage) {
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
