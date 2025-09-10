<script setup>
import { RouterView } from 'vue-router'
import HeaderNav from '@/components/HeaderNav.vue'
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <HeaderNav />
    <main>
      <RouterView />
    </main>
  </div>
</template>

