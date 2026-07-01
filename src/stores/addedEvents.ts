import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Show } from '@/types/Show'

export const useEventStore = defineStore('event', () => {
  const addedEvents = ref<Show[]>([])

  const addEvent = (event: Show) => {
    addedEvents.value.push(event)
  }

  return { addedEvents, addEvent }
})
