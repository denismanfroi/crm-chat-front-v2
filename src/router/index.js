import { createRouter, createWebHistory } from 'vue-router'

import GuestLayout from '@/layouts/GuestLayout.vue'
import LoggedLayout from '@/layouts/LoggedLayout.vue'
import NotFoundLayout from '@/layouts/NotFoundLayout.vue'

// Não logado
import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'

// Logado
import Chat from '@/views/logged/ChatView.vue'

import NotFound from '@/views/NotFoundView.vue'

import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundLayout,
    children: [{ path: '', name: 'NotFound', component: NotFound }],
  },
  {
    path: '/',
    redirect: '/dashboard/chat',
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/chat',
  },
  {
    path: '/',
    component: GuestLayout,
    children: [
      { path: 'login', name: 'Login', component: Login },
      { path: 'register', name: 'Register', component: Register },
    ],
  },
  {
    path: '/dashboard/chat',
    component: LoggedLayout,
    meta: { requiresAuth: true },
    children: [{ path: '/dashboard/chat', name: 'Chat', component: Chat }],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const requiresAuth = to.meta.requiresAuth
  const isAuthenticated = authStore.isLoggedIn

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'Login' }) // Redireciona para login se não está logado
  } else if (isAuthenticated && (to.name === 'Login' || to.name === 'Register')) {
    next({ name: 'Chat' }) // Já logado tentando acessar login ou registro
  } else {
    next() // Continua normalmente
  }
})

export default router
