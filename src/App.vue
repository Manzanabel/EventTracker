<template>
  <AppHeader />
  <router-view />
  <router-view name="modal" />
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>
