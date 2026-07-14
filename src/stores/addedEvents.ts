import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CreateShow, Show } from '@/types/Show'

export const useEventStore = defineStore('event', () => {
  const addedEvents = ref<Show[]>([
    {
      id: 'mock-id-12345',
      title: 'Festival Jazz à Lyon',
      place: 'Halle Tony Garnier',
      address: '20 Place Antonin Perrin, Lyon',
      type: 'Festival',
      date: '2026-07-15',
      isPaid: true,
      price: 25,
      img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
      description:
        'Un festival de jazz incontournable au cœur de Lyon avec des artistes internationaux.',
      site: 'https://www.halletonygarnierr.com',
      capacity: 500,
    },
    {
      id: 'mock-id-789654',
      title: 'Atelier Poterie',
      place: 'Maison des Arts',
      address: '5 Rue de la Paix, Lyon',
      type: 'Atelier',
      date: '2026-07-20',
      isPaid: false,
      price: 0,
      img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800',
      description: 'Atelier de poterie pour débutants et confirmés dans un cadre convivial.',
      site: 'https://www.maisondesarts.fr',
      capacity: 20,
    },
  ])

  const addEvent = (event: CreateShow) => {
    const newEvent: Show = {
      ...event,
      id: crypto.randomUUID(),
    }
    addedEvents.value.push(newEvent)
  }

  return { addedEvents, addEvent }
})
