<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectGalleryModal from '@/components/ProjectGalleryModal.vue'

const { } = useI18n()

const selectedProject = ref(null)
const isModalOpen = ref(false)

const openProjectGallery = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}

const projects = [
  {
    id: 1,
    title: 'portfolio.epavillon.title',
    description: 'portfolio.epavillon.description',
    image: '/images/projets/epavillon/capture1.png',
    link: 'https://epavillon.francophonie.org',
    tags: ['Laravel', 'Vue.js', 'Zoom API'],
    gallery: [
      '/images/projets/epavillon/capture1.png',
      '/images/projets/epavillon/capture2.png',
      '/images/projets/epavillon/capture3.png',
      '/images/projets/epavillon/capture4.png',
      '/images/projets/epavillon/capture5.png',
      '/images/projets/epavillon/capture6.png',
      '/images/projets/epavillon/capture7.png',
      '/images/projets/epavillon/capture8.png',
      '/images/projets/epavillon/capture9.png',
      '/images/projets/epavillon/capture10.png',
      '/images/projets/epavillon/capture11.png',
      '/images/projets/epavillon/capture12.png',
      '/images/projets/epavillon/capture13.png'
    ]
  },
  {
    id: 2,
    title: 'portfolio.uafricas.title',
    description: 'portfolio.uafricas.description',
    image: '/images/projets/uafricas/capture1.png',
    link: 'https://africans-world.org/',
    tags: ['Laravel', 'Vue.js', 'API', 'Université'],
    gallery: [
      '/images/projets/uafricas/capture1.png',
      '/images/projets/uafricas/capture2.png',
      '/images/projets/uafricas/capture3.png',
      '/images/projets/uafricas/capture4.png',
      '/images/projets/uafricas/capture5.png',
      '/images/projets/uafricas/capture6.png',
      '/images/projets/uafricas/capture7.png'
    ]
  },
  {
    id: 3,
    title: 'portfolio.negotiator.title',
    description: 'portfolio.negotiator.description',
    image: '/images/projets/appMobileNego/capture1.jpeg',
    link: '#',
    tags: ['Flutter', 'Firebase', 'Mobile'],
    gallery: [
      '/images/projets/appMobileNego/capture1.jpeg',
      '/images/projets/appMobileNego/capture2.jpeg',
      '/images/projets/appMobileNego/capture3.jpeg',
      '/images/projets/appMobileNego/capture4.jpeg',
      '/images/projets/appMobileNego/capture5.jpeg',
      '/images/projets/appMobileNego/capture6.jpeg',
      '/images/projets/appMobileNego/capture7.jpeg',
      '/images/projets/appMobileNego/capture8.jpeg',
      '/images/projets/appMobileNego/capture9.jpeg'
    ]
  },
  {
    id: 4,
    title: 'portfolio.formationOrange.title',
    description: 'portfolio.formationOrange.description',
    image: '/images/projets/formationOrange/capture1.jpeg',
    link: '#',
    tags: ['Formation', 'Groupe Orange', 'Digital Orange'],
    gallery: [
      '/images/projets/formationOrange/capture1.jpeg',
      '/images/projets/formationOrange/capture2.jpeg',
      '/images/projets/formationOrange/capture3.jpeg'
    ]
  },
  {
    id: 5,
    title: 'portfolio.formationRMO.title',
    description: 'portfolio.formationRMO.description',
    image: '/images/projets/formationRMO/photo1.jpeg',
    link: '#',
    tags: ['Formation', 'RMO', 'Coaching'],
    gallery: [
      '/images/projets/formationRMO/photo1.jpeg',
      '/images/projets/formationRMO/photo2.jpeg',
      '/images/projets/formationRMO/photo3.jpeg'
    ]
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
        <div
          v-for="project in projects"
          :key="project.id"
          @click="openProjectGallery(project)"
          class="cursor-pointer"
        >
          <ProjectCard
            :title="project.title.includes('.') ? $t(project.title) : project.title"
            :description="project.description.includes('.') ? $t(project.description) : project.description"
            :image="project.image"
            :link="project.link"
            :tags="project.tags"
          />
        </div>
      </div>

      <!-- Project Gallery Modal -->
      <ProjectGalleryModal
        :is-open="isModalOpen"
        :project="selectedProject || {}"
        @close="closeModal"
      />
    </div>
  </section>
</template>