<script setup lang="ts">
import { watch, ref } from 'vue'
import type { Show } from '@/types/Show'
import { EVENT_FIELDS as eventInputs, EVENT_TYPES as eventTypes } from '@/constants/eventFields'
import { useEventStore } from '@/stores/addedEvents'
import { showSchema } from '@/schemas/showSchema'

const createEmptyShow = (): Show => {
    return {
        title: '',
        place: '',
        address: '',
        type: '',
        date: '',
        isPaid: true,
        price: 0,
        img: '',
        description: '',
        site: '',
        capacity: 0
    }
}
const newShow = ref<Show>(createEmptyShow())
const nbCrea = ref(0)
const stopCreating = ref(false)
const errors = ref<Partial<Record<keyof Show, string>>>({})

const { addEvent } = useEventStore()

const addShow = () => {
    const result = showSchema.safeParse(newShow.value)

    if (!result.success) {
        errors.value = Object.fromEntries(
            result.error.issues.map((issue) => [issue.path[0], issue.message])
        )
        return
    }

    errors.value = {}
    addEvent(result.data)
    nbCrea.value += 1
    newShow.value = createEmptyShow()

    blocker()
}

const blocker = () => {
    if (nbCrea.value === 4) {
        stopCreating.value = true
    }
}

function maj() {
    newShow.value.title = newShow.value.title.charAt(0).toUpperCase() + newShow.value.title.slice(1)
}

const isDisabled = (fieldId: string): boolean => {
    if (fieldId === 'price') return !newShow.value.isPaid

    return false
}

watch(() => newShow.value.isPaid, (isPaid) => {
    if (!isPaid) {
        newShow.value.price = 0
    }
})

</script>

<template>
    <div class="min-h-screen bg-slate-900 flex items-center justify-center p-8">
        <div class="w-full max-w-2xl">

            <div v-if="!stopCreating">
                <h2 class="text-3xl font-bold text-white mb-8">
                    Ajouter un <span class="text-fuchsia-400">spectacle</span>
                </h2>

                <form @submit.prevent="addShow" class="space-y-4">
                    <div v-for="input in eventInputs" :key="input.id" class="flex flex-col gap-1">

                        <template v-if="input.type === 'checkbox'">
                            <div class="flex items-center gap-3 py-2">
                                <input type="checkbox" :id="input.id"
                                    v-model="(newShow[input.id as keyof Show] as boolean)"
                                    class="w-5 h-5 accent-fuchsia-400 cursor-pointer" />
                                <label :for="input.id" class="text-slate-300 text-sm font-medium cursor-pointer">
                                    {{ input.title }}
                                </label>
                            </div>
                        </template>

                        <template v-else-if="input.type === 'select'">
                            <label :for="input.id" class="text-slate-300 text-sm font-medium">
                                {{ input.title }}
                            </label>
                            <select :id="input.id" v-model="newShow[input.id as keyof Show]"
                                class="bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-fuchsia-400 transition-colors cursor-pointer">
                                <option value="" disabled class="text-slate-500">Choisir un type...</option>
                                <option v-for="type in eventTypes" :key="type" :value="type" class="bg-slate-800">
                                    {{ type }}
                                </option>
                            </select>
                        </template>

                        <template v-else-if="input.type === 'textarea'">
                            <label :for="input.id" class="text-slate-300 text-sm font-medium">
                                {{ input.title }}
                            </label>
                            <textarea :id="input.id" v-model="(newShow[input.id as keyof Show] as string)"
                                :placeholder="input.placeholder" :required="input.required" rows="3" class=" bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white
                                placeholder-slate-500 focus:outline-none focus:border-fuchsia-400 transition-colors
                                resize-none" />
                        </template>

                        <template v-else>
                            <label :for="input.id" class="text-slate-300 text-sm font-medium">
                                {{ input.title }}
                            </label>
                            <input :type="input.type" :id="input.id" v-model="newShow[input.id as keyof Show]"
                                :placeholder="input.placeholder" :required="input.required"
                                :disabled="isDisabled(input.id)" @blur="input.id === 'title' ? maj() : null"
                                class="bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-fuchsia-400 transition-colors" />
                        </template>

                        <p v-if="errors[input.id as keyof Show]" class="text-red-400 text-sm">
                            {{ errors[input.id as keyof Show] }}
                        </p>
                    </div>

                    <button type="submit"
                        class="w-full bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-semibold py-3 rounded-lg transition-colors mt-4">
                        Ajouter le spectacle
                    </button>
                </form>
            </div>

            <div v-else class="text-center py-16">
                <p class="text-slate-300 text-lg">Vous avez atteint le nombre maximum de créations.</p>
            </div>

        </div>
    </div>
</template>