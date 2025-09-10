<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  project: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['close'])

const currentImageIndex = ref(0)

const nextImage = () => {
  if (props.project.gallery && currentImageIndex.value < props.project.gallery.length - 1) {
    currentImageIndex.value++
  }
}

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

const goToImage = (index) => {
  currentImageIndex.value = index
}

const closeModal = () => {
  currentImageIndex.value = 0
  emit('close')
}

const currentImage = computed(() => {
  return props.project.gallery ? props.project.gallery[currentImageIndex.value] : ''
})
</script>

<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
    @click="closeModal"
  >
    <div 
      class="relative max-w-6xl max-h-[90vh] mx-4 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl"
      @click.stop
    >
      <!-- Header -->
      <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
        <div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ project.title?.includes('.') ? $t(project.title) : project.title }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ currentImageIndex + 1 }} / {{ project.gallery?.length || 0 }}
          </p>
        </div>
        <button 
          @click="closeModal"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <FontAwesomeIcon icon="fa-solid fa-times" class="text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      <!-- Main Image -->
      <div class="relative">
        <img 
          :src="currentImage" 
          :alt="`${project.title} - Image ${currentImageIndex + 1}`"
          class="w-full max-h-[70vh] object-contain bg-gray-100 dark:bg-gray-700"
        />
        
        <!-- Navigation Arrows -->
        <button 
          v-if="project.gallery && project.gallery.length > 1"
          @click="prevImage"
          :disabled="currentImageIndex === 0"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" class="text-white text-xl" />
        </button>
        
        <button 
          v-if="project.gallery && project.gallery.length > 1"
          @click="nextImage"
          :disabled="currentImageIndex === (project.gallery?.length || 0) - 1"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="text-white text-xl" />
        </button>
      </div>

      <!-- Thumbnails -->
      <div v-if="project.gallery && project.gallery.length > 1" class="p-4 bg-gray-50 dark:bg-gray-900">
        <div class="flex gap-2 overflow-x-auto pb-2">
          <button
            v-for="(image, index) in project.gallery"
            :key="index"
            @click="goToImage(index)"
            :class="{
              'ring-2 ring-blue-500': index === currentImageIndex,
              'opacity-60': index !== currentImageIndex
            }"
            class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all hover:opacity-100"
          >
            <img 
              :src="image" 
              :alt="`Thumbnail ${index + 1}`"
              class="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      <!-- Project Info -->
      <div class="p-4 border-t dark:border-gray-700">
        <p class="text-gray-700 dark:text-gray-300 mb-3">
          {{ project.description?.includes('.') ? $t(project.description) : project.description }}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="tag in project.tags" 
            :key="tag"
            class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
          >
            {{ tag }}
          </span>
        </div>
        
      </div>
      
      <!-- Floating Project Link Button -->
      <a 
        v-if="project.link && project.link !== '#'"
        :href="project.link" 
        target="_blank" 
        rel="noopener noreferrer"
        class="fixed bottom-6 right-6 z-60 inline-flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110"
        :title="$t('portfolio.visitProject')"
      >
        <FontAwesomeIcon icon="fa-solid fa-external-link-alt" class="text-lg" />
        <span class="hidden sm:inline">{{ $t('portfolio.visitProject') }}</span>
      </a>
    </div>
  </div>
</template>