import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../../views/auth/LoginView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
  ],
})

export default router
