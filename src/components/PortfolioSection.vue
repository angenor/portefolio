<script setup>
import { useI18n } from 'vue-i18n'
import ProjectCard from '@/components/ProjectCard.vue'

const { t } = useI18n()

const projects = [
  {
    id: 1,
    title: 'portfolio.epavillon.title',
    description: 'portfolio.epavillon.description',
    image: '/images/port1.jpg',
    link: '#',
    tags: ['Laravel', 'Vue.js', 'Zoom API']
  },
  {
    id: 2,
    title: 'portfolio.negotiator.title',
    description: 'portfolio.negotiator.description',
    image: '/images/port2.jpg',
    link: '#',
    tags: ['Flutter', 'Firebase', 'Mobile']
  },
  {
    id: 3,
    title: 'portfolio.training.title',
    description: 'portfolio.training.description',
    image: '/images/port3.jpg',
    link: '#',
    tags: ['Vue.js', 'Laravel', 'Tailwind CSS']
  },
  {
    id: 4,
    title: 'portfolio.biodiversity.title',
    description: 'portfolio.biodiversity.description',
    image: '/images/port4.jpg',
    link: '#',
    tags: ['Laravel', 'Vue.js', 'API']
  },
]
</script>

<template>
  <section id="portfolio" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {{ $t('portfolio.title') }}
        </h2>
        <p class="text-blue-600 dark:text-blue-400 text-lg">{{ $t('portfolio.subtitle') }}</p>
        <div class="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title.includes('.') ? $t(project.title) : project.title"
          :description="project.description.includes('.') ? $t(project.description) : project.description"
          :image="project.image"
          :link="project.link"
          :tags="project.tags"
        />
      </div>
    </div>
  </section>
</template>