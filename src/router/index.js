import { createRouter, createWebHistory } from 'vue-router'

import GuestLayout from '@/layouts/GuestLayout.vue'
import LoggedLayout from '@/layouts/LoggedLayout.vue'

import Login from '@/views/LoginView.vue'
import Register from '@/views/CadastroView.vue'
import Dashboard from '@/views/DashboardView.vue'
import { auth } from '@/firebase'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/',
    component: GuestLayout,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ],
  },
  {
    path: '/',
    component: LoggedLayout,
    meta: { requiresAuth: true },
    children: [{ path: 'dashboard', component: Dashboard }],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Proteção de rota
router.beforeEach((to, from, next) => {
  const user = auth.currentUser
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !user) {
    next('/login')
  } else {
    next()
  }
})

export default router
