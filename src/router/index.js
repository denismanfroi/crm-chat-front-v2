import { createRouter, createWebHistory } from 'vue-router'

import GuestLayout from '@/layouts/GuestLayout.vue'
import LoggedLayout from '@/layouts/LoggedLayout.vue'
import NotFoundLayout from '@/layouts/NotFoundLayout.vue'

import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'
import Dashboard from '@/views/DashboardView.vue'
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
    redirect: '/dashboard',
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
    path: '/dashboard',
    component: LoggedLayout,
    meta: { requiresAuth: true },
    children: [{ path: '', name: 'Dashboard', component: Dashboard }],
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
    next({ name: 'Dashboard' }) // Já logado tentando acessar login ou registro
  } else {
    next() // Continua normalmente
  }
})

export default router
