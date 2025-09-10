<script setup>
import { useI18n } from 'vue-i18n'
import ServiceCard from '@/components/ServiceCard.vue'

const { t } = useI18n()

const services = [
  {
    icon: 'fa-solid fa-code',
    title: 'services.webDev.title',
    description: 'services.webDev.description',
    color: 'blue'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'services.mobileDev.title',
    description: 'services.mobileDev.description',
    color: 'green'
  },
  {
    icon: 'fa-solid fa-chalkboard-teacher',
    title: 'services.training.title',
    description: 'services.training.description',
    color: 'purple'
  }
]
</script>

<template>
  <section id="services" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative" style="background-image: url('/images/people-bg/people-bg-2.jpg'); background-size: cover; background-position: center; background-attachment: fixed;">
    <div class="absolute inset-0 dark:bg-gray-800/90 transition-colors duration-300"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {{ $t('services.title') }}
        </h2>
        <p class="text-blue-600 dark:text-blue-400 text-lg">{{ $t('services.subtitle') }}</p>
        <div class="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :icon="service.icon"
          :title="$t(service.title)"
          :description="$t(service.description)"
          :color="service.color"
        />
      </div>
    </div>
  </section>
</template>