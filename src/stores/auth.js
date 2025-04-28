// stores/auth.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref(null)
    const empresaSelecionada = ref(null)
    const router = useRouter()
    const errorMessage = ref(null)
    const successMessage = ref(null)
    const loading = ref(true)

    // Domínios permitidos
    const allowedDomains = ['crmbonus.com', 'vivara.com.br']

    // Computed getter
    const isLoggedIn = computed(() => !!user.value)

    // Função para verificar se o domínio é permitido
    const isDomainAllowed = (email) => {
      const domain = email.split('@')[1]
      return allowedDomains.includes(domain)
    }

    // Login com email e senha
    const login = async (email, password, empresaId) => {
      clearMessages()
      if (!isDomainAllowed(email)) {
        errorMessage.value = 'Apenas domínios autorizados podem acessar.'
        return
      }
      try {
        await signInWithEmailAndPassword(auth, email, password)
        user.value = auth.currentUser
        empresaSelecionada.value = empresaId
        successMessage.value = 'Login realizado com sucesso!'
        router.push('/dashboard')
      } catch (error) {
        console.error(error)
        switch (error.code) {
          case 'auth/user-not-found':
            errorMessage.value = 'Usuário não encontrado.'
            break
          case 'auth/wrong-password':
            errorMessage.value = 'Senha incorreta.'
            break
          case 'auth/invalid-email':
            errorMessage.value = 'E-mail inválido.'
            break
          default:
            errorMessage.value = 'Erro ao fazer login. Tente novamente.'
            break
        }
      }
    }

    // Login com Google
    const loginWithGoogle = async (empresaId) => {
      clearMessages()
      const provider = new GoogleAuthProvider()
      try {
        const result = await signInWithPopup(auth, provider)
        const email = result.user.email

        if (!isDomainAllowed(email)) {
          errorMessage.value = 'Apenas domínios autorizados podem acessar.'
          return
        }

        user.value = result.user
        empresaSelecionada.value = empresaId
        successMessage.value = 'Login realizado com sucesso via Google!'
        router.push('/dashboard')
      } catch (error) {
        console.error(error)
        switch (error.code) {
          case 'auth/user-not-found':
            errorMessage.value = 'Usuário não encontrado.'
            break
          case 'auth/wrong-password':
            errorMessage.value = 'Senha incorreta.'
            break
          case 'auth/invalid-email':
            errorMessage.value = 'E-mail inválido.'
            break
          default:
            errorMessage.value = 'Erro ao fazer login. Tente novamente.'
            break
        }
      }
    }

    // Cadastro de novo usuário
    const signup = async (email, password) => {
      clearMessages()
      if (!isDomainAllowed(email)) {
        errorMessage.value = 'Apenas domínios autorizados podem acessar.'
        return
      }
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        successMessage.value = 'Cadastro realizado com sucesso! Faça login.'
        router.push('/login')
      } catch (error) {
        console.error(error)
        errorMessage.value = error.message
      }
    }

    // Logout
    const logout = async () => {
      try {
        await signOut(auth)
        user.value = null
        empresaSelecionada.value = null
        successMessage.value = 'Logout realizado!'
        router.push('/login')
      } catch (error) {
        console.error(error)
        errorMessage.value = error.message
      }
    }

    // Função de inicialização
    const init = () => {
      loading.value = true
      onAuthStateChanged(auth, (firebaseUser) => {
        user.value = firebaseUser
        loading.value = false
      })
    }

    // Limpa mensagens de erro/sucesso
    const clearMessages = () => {
      errorMessage.value = null
      successMessage.value = null
    }

    return {
      user,
      empresaSelecionada,
      login,
      loginWithGoogle,
      signup,
      logout,
      init,
      isLoggedIn,
      loading,
      errorMessage,
      successMessage,
      clearMessages,
    }
  },
  {
    persist: true,
  },
)
