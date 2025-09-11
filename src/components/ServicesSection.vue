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
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'services.academicTeaching.title',
    description: 'services.academicTeaching.description',
    color: 'orange'
  }
]
</script>

<template>
  <section id="services" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative" style="background-image: url('/images/people-bg/people-bg-2.jpg'); background-size: cover; background-position: center; background-attachment: fixed;">
    <div class="absolute inset-0 dark:bg-gray-800/90 transition-colors duration-300"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12 animate-fade-in-up">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-in-down animation-delay-100">
          {{ $t('services.title') }}
        </h2>
        <p class="text-blue-600 dark:text-blue-400 text-lg animate-slide-in-down animation-delay-200">{{ $t('services.subtitle') }}</p>
        <div class="w-20 h-1 bg-blue-600 mx-auto mt-4 animate-scale-in animation-delay-300"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          v-for="(service, index) in services"
          :key="service.title"
          :icon="service.icon"
          :title="$t(service.title)"
          :description="$t(service.description)"
          :color="service.color"
          :class="`animate-slide-in-up animation-delay-${400 + index * 100}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-slide-in-down {
  animation: slide-in-down 0.8s ease-out forwards;
}

.animate-slide-in-up {
  animation: slide-in-up 0.8s ease-out forwards;
}

.animate-scale-in {
  animation: scale-in 0.6s ease-out forwards;
}

.animation-delay-100 { animation-delay: 0.1s; opacity: 0; }
.animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
.animation-delay-300 { animation-delay: 0.3s; opacity: 0; }
.animation-delay-400 { animation-delay: 0.4s; opacity: 0; }
.animation-delay-500 { animation-delay: 0.5s; opacity: 0; }
.animation-delay-600 { animation-delay: 0.6s; opacity: 0; }
.animation-delay-700 { animation-delay: 0.7s; opacity: 0; }
</style>