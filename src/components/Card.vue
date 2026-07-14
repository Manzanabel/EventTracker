<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useEventStore } from '@/stores/addedEvents'

const props = defineProps<{ id: string }>()

const router = useRouter()
const { addedEvents } = storeToRefs(useEventStore())
const event = computed(() => addedEvents.value.find((e) => e.id === props.id))

const close = () => router.push('/')
</script>

<template>
  <Teleport to="body">
    <div
      v-if="event"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      @click.self="close"
    >
      <div
        class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-800 rounded-xl shadow-lg ring-1 ring-slate-700/50"
      >
        <button
          type="button"
          aria-label="Fermer"
          class="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
          @click="close"
        >
          ✕
        </button>

        <div class="relative">
          <img
            v-if="event.img"
            :src="event.img"
            alt="Event Image"
            class="w-full h-64 object-cover"
          />
          <span
            :class="event.isPaid ? 'bg-fuchsia-500' : 'bg-emerald-500'"
            class="absolute top-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow"
          >
            {{ event.isPaid ? `$${event.price}` : 'Gratuit' }}
          </span>
        </div>

        <div class="p-6">
          <div class="flex items-center justify-between gap-2 mb-3">
            <h3 class="text-xl font-bold text-white">{{ event.title }}</h3>
            <span
              class="shrink-0 text-xs font-medium text-fuchsia-300 bg-fuchsia-500/10 px-2.5 py-1 rounded-full"
            >
              {{ event.type }}
            </span>
          </div>

          <p class="text-slate-300 text-sm mb-4 leading-relaxed">{{ event.description }}</p>

          <dl class="grid grid-cols-1 gap-y-2 text-sm border-t border-slate-700 pt-4">
            <div class="flex items-center gap-2 text-slate-300">
              <dt class="font-semibold text-slate-400 w-24 shrink-0">Lieu</dt>
              <dd>{{ event.place }}</dd>
            </div>
            <div class="flex items-center gap-2 text-slate-300">
              <dt class="font-semibold text-slate-400 w-24 shrink-0">Adresse</dt>
              <dd>{{ event.address }}</dd>
            </div>
            <div class="flex items-center gap-2 text-slate-300">
              <dt class="font-semibold text-slate-400 w-24 shrink-0">Date</dt>
              <dd>{{ event.date }}</dd>
            </div>
            <div class="flex items-center gap-2 text-slate-300">
              <dt class="font-semibold text-slate-400 w-24 shrink-0">Capacité</dt>
              <dd>{{ event.capacity }}</dd>
            </div>
            <div class="flex items-center gap-2 text-slate-300">
              <dt class="font-semibold text-slate-400 w-24 shrink-0">Site</dt>
              <dd>
                <a
                  :href="event.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-fuchsia-400 hover:text-fuchsia-300 hover:underline"
                >
                  {{ event.site }}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </Teleport>
</template>
