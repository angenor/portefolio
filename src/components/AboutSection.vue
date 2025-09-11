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
      <div class="text-center mb-12 animate-fade-in-up">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-down animation-delay-100">
          {{ $t('about.title') }}
        </h2>
        <div class="w-20 h-1 bg-blue-600 mx-auto animate-scale-in animation-delay-200"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- About Image -->
        <div class="flex justify-center animate-slide-in-left animation-delay-300">
          <div class="relative hover:scale-105 transition-all duration-500">
            <img 
              src="/images/profile.jpg" 
              alt="About Me"
              class="w-96 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500"
            />
            <div class="absolute -bottom-4 -right-4 w-full h-full border-4 border-blue-600 rounded-lg -z-10 hover:border-purple-600 transition-colors duration-500"></div>
          </div>
        </div>

        <!-- About Content -->
        <div class="space-y-6 animate-slide-in-right animation-delay-400">
          <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400 animate-slide-in-right animation-delay-500">
            {{ $t('about.subtitle') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed animate-slide-in-right animation-delay-600">
            {{ $t('about.description') }}
          </p>

          <!-- Experience Highlights -->
          <div class="space-y-4 animate-slide-in-right animation-delay-700">
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ $t('about.experience') }}
            </h4>
            <div class="space-y-3">
              <div v-for="(exp, index) in experience" :key="exp.title" class="flex items-start space-x-3 animate-slide-in-right hover:translate-x-2 transition-all duration-300" :class="`animation-delay-${800 + index * 100}`">
                <FontAwesomeIcon 
                  icon="fa-solid fa-check-circle" 
                  class="text-green-500 mt-1 hover:scale-125 transition-all duration-300"
                />
                <div>
                  <p class="font-semibold text-gray-800 dark:text-gray-200">{{ exp.title }}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ exp.company }} | {{ exp.period }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="space-y-4 animate-slide-in-right animation-delay-1000">
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ $t('about.skills') }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(skill, index) in [...skills.frontend, ...skills.backend, ...skills.tools]" 
                :key="skill"
                :class="`animate-scale-in animation-delay-${1100 + index * 50}`"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default"
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

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out forwards;
}

.animate-slide-in-down {
  animation: slide-in-down 0.8s ease-out forwards;
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
.animation-delay-800 { animation-delay: 0.8s; opacity: 0; }
.animation-delay-900 { animation-delay: 0.9s; opacity: 0; }
.animation-delay-1000 { animation-delay: 1.0s; opacity: 0; }
.animation-delay-1100 { animation-delay: 1.1s; opacity: 0; }
.animation-delay-1150 { animation-delay: 1.15s; opacity: 0; }
.animation-delay-1200 { animation-delay: 1.2s; opacity: 0; }
.animation-delay-1250 { animation-delay: 1.25s; opacity: 0; }
.animation-delay-1300 { animation-delay: 1.3s; opacity: 0; }
.animation-delay-1350 { animation-delay: 1.35s; opacity: 0; }
.animation-delay-1400 { animation-delay: 1.4s; opacity: 0; }
.animation-delay-1450 { animation-delay: 1.45s; opacity: 0; }
.animation-delay-1500 { animation-delay: 1.5s; opacity: 0; }
.animation-delay-1550 { animation-delay: 1.55s; opacity: 0; }
.animation-delay-1600 { animation-delay: 1.6s; opacity: 0; }
.animation-delay-1650 { animation-delay: 1.65s; opacity: 0; }
.animation-delay-1700 { animation-delay: 1.7s; opacity: 0; }
.animation-delay-1750 { animation-delay: 1.75s; opacity: 0; }
.animation-delay-1800 { animation-delay: 1.8s; opacity: 0; }
</style>