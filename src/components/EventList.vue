<script setup lang="ts">
import { useEventStore } from '@/stores/addedEvents'
import { storeToRefs } from 'pinia'

const { addedEvents } = storeToRefs(useEventStore())

</script>

<template>
    <div class="min-h-screen bg-slate-900 flex items-center justify-center p-8">
        <div class="w-full max-w-2xl">
            <div v-for="event in addedEvents" :key="event.title" class="bg-slate-800 rounded-lg p-6 mb-4">
                <img v-if="event.img" :src="event.img" alt="Event Image"
                    class="w-full h-64 object-cover rounded-lg mb-4">
                <h3 class="text-xl font-bold text-white mb-2">{{ event.title }}</h3>
                <p class="text-slate-300 mb-1"><strong>Lieu:</strong> {{ event.place }}</p>
                <p class="text-slate-300 mb-1"><strong>Adresse:</strong> {{ event.address }}</p>
                <p class="text-slate-300 mb-1"><strong>Type:</strong> {{ event.type }}</p>
                <p class="text-slate-300 mb-1"><strong>Date:</strong> {{ event.date }}</p>
                <p v-if="event.isPaid" class="text-slate-300 mb-1"><strong>Price:</strong> ${{ event.price }}</p>
                <p class="text-slate-300 mb-1"><strong>Description:</strong> {{ event.description }}</p>
                <p class="text-slate-300 mb-1"><strong>Site:</strong> <a :href="event.site" target="_blank"
                        class="text-fuchsia-400">{{ event.site }}</a></p>
                <p class="text-slate-300"><strong>Capacité:</strong> {{ event.capacity }}</p>
            </div>
        </div>
    </div>

</template>