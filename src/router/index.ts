import { createRouter, createWebHistory } from 'vue-router'
import Formulaire from '@/components/Formulaire.vue'
import EventList from '@/components/EventList.vue'
import Card from '@/components/Card.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: EventList,
    },
    {
      path: '/addEvent',
      name: 'addEvent',
      component: Formulaire,
    },
    {
      path: '/event/:id',
      name: 'event',
      components: {
        default: EventList,
        modal: Card,
      },
      props: { modal: true },
    },
  ],
})

export default router
