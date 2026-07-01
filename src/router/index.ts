import { createRouter, createWebHistory } from 'vue-router'
import Formulaire from '@/components/Formulaire.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Formulaire,
    },
  ],
})

export default router