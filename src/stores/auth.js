import { defineStore } from 'pinia'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref(null)
    const empresaSelecionada = ref(null)
    const router = useRouter()

    const login = async (email, password, empresaId) => {
      await signInWithEmailAndPassword(auth, email, password)
      user.value = auth.currentUser
      empresaSelecionada.value = empresaId
      router.push('/dashboard')
    }

    const logout = async () => {
      await signOut(auth)
      user.value = null
      empresaSelecionada.value = null
      router.push('/login')
    }

    const init = () => {
      onAuthStateChanged(auth, (firebaseUser) => {
        user.value = firebaseUser
      })
    }

    return {
      user,
      empresaSelecionada,
      login,
      logout,
      init,
    }
  },
  {
    persist: true,
  },
)
