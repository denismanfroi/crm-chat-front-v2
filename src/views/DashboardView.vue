<template>
  <div>
    <h2>Área Logada</h2>
    <button @click="logout">Sair</button>
  </div>
</template>

<script setup>
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = async () => {
  await signOut(auth)
  router.push('/login')
}
</script>
