# EventSearch

This project is a complete rewrite of an event search application I originally built in 2017 with Vue 2. The goal was not just to update the dependencies, but to rethink the entire codebase using modern Vue 3 patterns and TypeScript.

## Why I did this

My frontend journey started with Vue, but for the last five years I worked mainly with React in production environments. Coming back to Vue with fresh eyes (and a solid React background) gave me a unique perspective on how the framework has evolved.

Vue 3 changed a lot from Vue 2. It is a different way of thinking about component logic, reactivity, and code organization. This project was my way of bridging the gap between what I knew and what the ecosystem looks like today. The React parantheses in my carrer helped a lot.

## What changed from Vue 2 to Vue 3

The original project used the Options API, which meant every component followed a fixed structure with `data()`, `methods`, `computed`, and `watch` as separate sections of an object. It worked, but it had real limitations: logic related to the same feature was scattered across different sections, and reusing logic between components required mixins, which were fragile and hard to trace.

Vue 3 introduces the Composition API, which lets you write component logic as plain JavaScript (or TypeScript) functions. Instead of a rigid object structure, you declare reactive state with `ref()` and `reactive()`, define computed values with `computed()`, and watch for changes with `watch()` or `watchEffect()`. Everything related to one feature lives together.

The migration also meant adopting `<script setup>`, which removes most of the boilerplate and makes the component feel much closer to how a React hook-based component reads.

## Key concepts learned

**Reactivity system.** `ref()` wraps a value and makes it reactive. In the script, you access it with `.value`. In the template, Vue unwraps it automatically. `reactive()` works for objects, but has a pitfall: destructuring breaks reactivity. This is the same reason you need `storeToRefs()` when destructuring from a Pinia store.

**Computed vs watch.** `computed()` is for deriving a value from other reactive state — equivalent to `useMemo` in React. `watch()` is for running side effects when something changes — equivalent to `useEffect` with dependencies. `watchEffect()` runs immediately on mount and tracks its own dependencies automatically.

**Composables.** The Vue 3 equivalent of React hooks. A composable is a function that uses Vue's reactivity system and can be shared across components. The naming convention `use` + something applies in both ecosystems.

**Pinia.** The official state management library for Vue 3, replacing Vuex. It is much closer to Zustand than Redux: no mutations, no action types, just a function that returns reactive state and actions. `storeToRefs()` is needed when destructuring from a store to preserve reactivity.

**TS integration.** The original project had no types. In this rewrite, every piece of data has an explicit interface. One pattern worth highlighting: separating `Show` (the full object returned from the database, with `id`) from `CreateShow` (what the form sends, without `id`) using `Omit<Show, 'id'>`. This avoids type gymnastics and makes the data flow explicit.

**v-for with dynamic v-model.** The form uses a single `v-for` loop over a typed array of field definitions. Each input binds to `newShow[field.id as keyof Show]`, which allows a generic loop to work with a strictly typed object. This required understanding TypeScript index signatures and discriminated unions for handling different input types (text, textarea, select, checkbox) inside the same loop.

## Tech stack

Vue 3 with Composition API, TypeScript, Vite, Pinia, Vue Router 4, Tailwind CSS v4, Zod for schema validation, and Supabase as the backend (not yet implemented, but I'm planning to do it soon).

## What is still in progress

Connecting Supabase to replace the in-memory Pinia store, integrating vee-validate with the Zod schema for form validation with user-facing error messages, and adding Nuxt for server-side rendering.

## Reflections

Coming from React, the mental model shift is smaller than expected. `ref` is `useState`, `computed` is `useMemo`, `watch` is `useEffect`, composables are hooks, Pinia is Zustand. The differences are in the details: Vue's reactivity is proxy-based and mutation-friendly, React's is immutable and comparison-based. Neither is wrong — they are different contracts.

What surprised me most is how clean `<script setup>` is. No export default, no `this`, no component registration. Just declare what you need and return it implicitly. For someone who spent years with React's explicit return model, it took a moment to trust — but once it clicked, it felt natural.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
