<script setup lang="ts">
const navLinks = [
    { to: '/addEvent', label: 'Add Event' },
]
</script>

<template>
    <header class="bg-slate-900 border-b border-slate-700 px-8 py-4">
        <div class="max-w-2xl mx-auto flex items-center justify-between gap-4">
            <h2 class="text-3xl font-bold text-white">
                <RouterLink to="/">Event<span class="text-fuchsia-400">Search</span></RouterLink>
            </h2>

            <nav class="flex items-center gap-6">
                <RouterLink
                    v-for="link in navLinks"
                    :key="link.to"
                    :to="link.to"
                    class="text-sm font-medium text-slate-300 hover:text-fuchsia-400 transition-colors"
                    active-class="text-fuchsia-400"
                >
                    {{ link.label }}
                </RouterLink>
            </nav>
        </div>
    </header>
</template>
