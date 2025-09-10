<script setup>
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/AppButton.vue'

const { t } = useI18n()

const skills = {
  frontend: ['VueJs', 'Flutter', 'Tailwind CSS', 'HTML', 'Javascript'],
  backend: ['Laravel', 'PHP', 'Python', 'Flask', 'Firebase'],
  tools: ['Qt/C++', 'Git', 'CPanel', 'Zoom API', 'YouTube API']
}

const experience = [
  {
    title: 'Expert Informatique',
    company: 'Organisation Internationale de la Francophonie',
    period: 'Mai 2021 - Aujourd\'hui',
    location: 'Québec, Canada (Télétravail)'
  },
  {
    title: 'Enseignant en Informatique',
    company: 'ESATIC',
    period: 'Oct 2023 - Aujourd\'hui',
    location: 'Abidjan, Côte d\'Ivoire'
  }
]
</script>

<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('about.title') }}
        </h2>
        <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- About Image -->
        <div class="flex justify-center">
          <div class="relative">
            <img 
              src="/images/profile.jpg" 
              alt="About Me"
              class="w-96 rounded-lg shadow-xl"
            />
            <div class="absolute -bottom-4 -right-4 w-full h-full border-4 border-blue-600 rounded-lg -z-10"></div>
          </div>
        </div>

        <!-- About Content -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {{ $t('about.subtitle') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {{ $t('about.description') }}
          </p>

          <!-- Experience Highlights -->
          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ $t('about.experience') }}
            </h4>
            <div class="space-y-3">
              <div v-for="exp in experience" :key="exp.title" class="flex items-start space-x-3">
                <FontAwesomeIcon 
                  icon="fa-solid fa-check-circle" 
                  class="text-green-500 mt-1"
                />
                <div>
                  <p class="font-semibold text-gray-800 dark:text-gray-200">{{ exp.title }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ exp.company }} | {{ exp.period }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ $t('about.skills') }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in [...skills.frontend, ...skills.backend, ...skills.tools]" 
                :key="skill"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>