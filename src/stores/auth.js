import { defineStore } from 'pinia'
import { auth } from '../firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref(null)
    const empresaSelecionada = ref(null)
    const router = useRouter()
    const errorMessage = ref(null)
    const successMessage = ref(null)

    // Domínios permitidos
    const allowedDomains = ['crmbonus.com', 'vivara.com.br']

    // Função para verificar se o domínio é permitido
    const isDomainAllowed = (email) => {
      const domain = email.split('@')[1]
      return allowedDomains.includes(domain)
    }

    // Login com e-mail e senha
    const login = async (email, password, empresaId) => {
      errorMessage.value = null
      successMessage.value = null

      if (!isDomainAllowed(email)) {
        errorMessage.value = 'Apenas domínios autorizados podem acessar.'
        return
      }
      try {
        await signInWithEmailAndPassword(auth, email, password)
        user.value = auth.currentUser
        empresaSelecionada.value = empresaId
        router.push('/dashboard')
      } catch (error) {
        console.error(error)
        errorMessage.value = error
      }
    }

    // Login com Google
    const loginWithGoogle = async (empresaId) => {
      const provider = new GoogleAuthProvider()
      errorMessage.value = null
      successMessage.value = null
      const result = await signInWithPopup(auth, provider)
      const email = result.user.email

      if (!isDomainAllowed(email)) {
        errorMessage.value = 'Apenas domínios autorizados podem acessar.'
        return
      }

      try {
        empresaSelecionada.value = empresaId
        user.value = result.user
        router.push('/dashboard')
      } catch (error) {
        console.error(error)
        errorMessage.value = error
      }
    }

    // Cadastro de usuário
    const signup = async (email, password) => {
      errorMessage.value = null
      successMessage.value = null

      if (!isDomainAllowed(email)) {
        errorMessage.value = 'Apenas domínios autorizados podem acessar.'
        return
      }

      try {
        await createUserWithEmailAndPassword(auth, email, password)
        successMessage.value = 'Cadastro realizado com sucesso!'
      } catch (error) {
        errorMessage.value = error
      }
    }

    // Logout
    const logout = async () => {
      await signOut(auth)
      user.value = null
      empresaSelecionada.value = null
      router.push('/login')
    }

    // Inicializa o estado de autenticação
    const init = () => {
      onAuthStateChanged(auth, (firebaseUser) => {
        user.value = firebaseUser
      })
    }

    return {
      user,
      empresaSelecionada,
      login,
      loginWithGoogle,
      signup,
      logout,
      init,
      errorMessage,
      successMessage,
    }
  },
  {
    persist: true,
  },
)
