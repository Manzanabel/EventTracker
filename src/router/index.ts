import { createRouter, createWebHistory } from 'vue-router'
import Formulaire from '@/components/Formulaire.vue'
import EventList from '@/components/EventList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: EventList,
    },
    { path: '/addEvent', 
      component: Formulaire },
  ],
})

export default router
