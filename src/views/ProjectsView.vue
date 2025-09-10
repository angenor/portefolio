<script setup>
import { useI18n } from 'vue-i18n'
import ProjectCard from '@/components/ProjectCard.vue'
import AppButton from '@/components/AppButton.vue'

const { t } = useI18n()

// Mock project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Vue.js and Node.js, featuring user authentication, payment processing, and admin dashboard.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['Vue.js', 'Socket.io', 'Express.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions, forecasts, and historical data with interactive charts and maps.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'PWA'],
    githubUrl: 'https://github.com'
  }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <div class="max-w-6xl mx-auto px-4 py-16">
      <!-- Page Header -->
      <div class="text-center space-y-6 mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {{ t('projects.title') }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ t('projects.description') }}
        </p>
        <div class="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ProjectCard 
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :technologies="project.technologies"
          :github-url="project.githubUrl"
          :demo-url="project.demoUrl"
        />
      </div>

      <!-- CTA Section -->
      <div class="text-center space-y-6">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
          {{ t('projects.cta.title') }}
        </h3>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('projects.cta.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <AppButton 
            variant="primary" 
            size="lg"
            icon="fa-brands fa-github"
            @click="() => window.open('https://github.com', '_blank')"
          >
            {{ t('projects.cta.github') }}
          </AppButton>
          <AppButton 
            variant="outline" 
            size="lg"
            icon="fa-solid fa-envelope"
          >
            {{ t('projects.cta.contact') }}
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>