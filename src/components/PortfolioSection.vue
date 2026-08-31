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
  {
    id: 6,
    title: 'portfolio.esatic.title',
    description: 'portfolio.esatic.description',
    image: '/images/projets/esatic/capture1.jpeg',
    link: '#',
    tags: ['Enseignement', 'ESATIC', 'HTML', 'CSS', 'PHP', 'JavaScript'],
    gallery: [
      '/images/projets/esatic/capture1.jpeg',
      '/images/projets/esatic/capture2.jpeg'
    ]
  },
  {
    id: 7,
    title: 'portfolio.universiteSenghor.title',
    description: 'portfolio.universiteSenghor.description',
    image: '/images/projets/usenghor/capture1.png',
    link: 'https://usenghor-francophonie.org/',
    tags: ['Laravel', 'Vue.js', 'Freelance'],
    gallery: [
      '/images/projets/usenghor/capture1.png',
      '/images/projets/usenghor/capture2.png',
      '/images/projets/usenghor/capture3.png',
      '/images/projets/usenghor/capture4.png',
      '/images/projets/usenghor/capture5.png',
      '/images/projets/usenghor/capture6.png',
      '/images/projets/usenghor/capture7.png',
      '/images/projets/usenghor/capture8.png',
      '/images/projets/usenghor/capture9.png',
      '/images/projets/usenghor/capture10.png',
      '/images/projets/usenghor/capture11.png',
      '/images/projets/usenghor/capture12.png'
    ]
  },
  {
    id: 8,
    title: 'portfolio.miningObsMadagascar.title',
    description: 'portfolio.miningObsMadagascar.description',
    image: '/images/projets/observatoire_mines/capture1.png',
    link: 'https://miningobs.mg/',
    tags: ['Laravel', 'Freelance', 'Madagascar'],
    gallery: [
      '/images/projets/observatoire_mines/capture1.png',
      '/images/projets/observatoire_mines/capture2.png',
      '/images/projets/observatoire_mines/capture3.png',
      '/images/projets/observatoire_mines/capture4.png',
      '/images/projets/observatoire_mines/capture5.png',
      '/images/projets/observatoire_mines/capture6.png'
    ]
  },
  {
    id: 9,
    title: 'portfolio.suiviRevenusMiniers.title',
    description: 'portfolio.suiviRevenusMiniers.description',
    image: '/images/projets/revenus_miniers/capture1.png',
    link: 'https://kaominina-mangarahara.mg/',
    tags: ['Laravel', 'Freelance', 'Madagascar'],
    gallery: [
      '/images/projets/revenus_miniers/capture1.png'
    ]
  },
  {
    id: 10,
    title: 'portfolio.lecarreDesEtudes.title',
    description: 'portfolio.lecarreDesEtudes.description',
    image: '/images/projets/lecarredesetudes/capture1.png',
    link: 'https://lecarredesetudes.com',
    tags: ['Nuxt', 'SQLite', 'Nitro'],
    gallery: [
      '/images/projets/lecarredesetudes/capture1.png',
      '/images/projets/lecarredesetudes/capture2.png',
      '/images/projets/lecarredesetudes/capture3.png',
      '/images/projets/lecarredesetudes/capture4.png',
      '/images/projets/lecarredesetudes/capture5.png'
    ]
  }
]
</script>

<template>
  <section id="portfolio" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12 animate-fade-in-up">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-in-down animation-delay-100">
          {{ $t('portfolio.title') }}
        </h2>
        <p class="text-blue-600 dark:text-blue-400 text-lg animate-slide-in-down animation-delay-200">{{ $t('portfolio.subtitle') }}</p>
        <div class="w-20 h-1 bg-blue-600 mx-auto mt-4 animate-scale-in animation-delay-300"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          @click="openProjectGallery(project)"
          class="cursor-pointer"
          :class="`animate-slide-in-up animation-delay-${400 + index * 100}`"
        >
          <ProjectCard
            :title="project.title.includes('.') ? $t(project.title) : project.title"
            :description="project.description.includes('.') ? $t(project.description) : project.description"
            :image="project.image"
            :link="project.link"
            :tags="project.tags"
            :github-url="project.githubUrl"
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
.animation-delay-800 { animation-delay: 0.8s; opacity: 0; }
.animation-delay-900 { animation-delay: 0.9s; opacity: 0; }
.animation-delay-1000 { animation-delay: 1s; opacity: 0; }
.animation-delay-1100 { animation-delay: 1.1s; opacity: 0; }
.animation-delay-1200 { animation-delay: 1.2s; opacity: 0; }
.animation-delay-1300 { animation-delay: 1.3s; opacity: 0; }
</style>