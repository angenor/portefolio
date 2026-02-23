<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
const iframeLoading = ref(true)

const hasGallery = computed(() => {
  return props.project.gallery && props.project.gallery.length > 0
})

const hasLink = computed(() => {
  return props.project.link && props.project.link !== '#'
})

const projectTitle = computed(() => {
  return props.project.title?.includes('.') ? t(props.project.title) : props.project.title
})

const projectDescription = computed(() => {
  return props.project.description?.includes('.') ? t(props.project.description) : props.project.description
})

watch(() => props.isOpen, (val) => {
  if (val) {
    iframeLoading.value = true
    currentImageIndex.value = 0
  }
})

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
  iframeLoading.value = true
  emit('close')
}

const currentImage = computed(() => {
  return props.project.gallery ? props.project.gallery[currentImageIndex.value] : ''
})

const onIframeLoad = () => {
  iframeLoading.value = false
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
        @click="closeModal"
      >
        <div
          class="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          @click.stop
        >
          <!-- Header -->
          <div class="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700 shrink-0">
            <div class="flex-1 min-w-0">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white truncate">
                {{ projectTitle }}
              </h3>
              <p v-if="hasGallery" class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {{ currentImageIndex + 1 }} / {{ project.gallery?.length || 0 }}
              </p>
            </div>
            <div class="flex items-center gap-3 ml-4">
              <a
                v-if="hasLink"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FontAwesomeIcon icon="fa-solid fa-external-link-alt" />
                <span class="hidden sm:inline">{{ $t('portfolio.visitProject') }}</span>
              </a>
              <button
                @click="closeModal"
                class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FontAwesomeIcon icon="fa-solid fa-times" class="text-gray-500 dark:text-gray-400 text-lg" />
              </button>
            </div>
          </div>

          <!-- Content area -->
          <div class="flex-1 overflow-hidden min-h-0">
            <!-- CASE 1: Gallery with images -->
            <template v-if="hasGallery">
              <!-- Main Image -->
              <div class="relative h-full">
                <img
                  :src="currentImage"
                  :alt="`${projectTitle} - Image ${currentImageIndex + 1}`"
                  class="w-full h-full max-h-[60vh] object-contain bg-gray-100 dark:bg-gray-900"
                />

                <!-- Navigation Arrows -->
                <button
                  v-if="project.gallery.length > 1"
                  @click="prevImage"
                  :disabled="currentImageIndex === 0"
                  class="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <FontAwesomeIcon icon="fa-solid fa-chevron-left" class="text-white text-xl" />
                </button>

                <button
                  v-if="project.gallery.length > 1"
                  @click="nextImage"
                  :disabled="currentImageIndex === (project.gallery?.length || 0) - 1"
                  class="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="text-white text-xl" />
                </button>
              </div>
            </template>

            <!-- CASE 2: No gallery - show iframe preview -->
            <template v-else-if="hasLink">
              <div class="relative w-full h-[60vh] bg-gray-100 dark:bg-gray-900">
                <!-- Loading spinner -->
                <div
                  v-if="iframeLoading"
                  class="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 bg-gray-100 dark:bg-gray-900"
                >
                  <FontAwesomeIcon icon="fa-solid fa-spinner" class="text-4xl text-blue-500 animate-spin" />
                  <p class="text-gray-500 dark:text-gray-400 text-sm">Chargement de l'aperçu...</p>
                </div>
                <!-- Iframe preview -->
                <iframe
                  :src="project.link"
                  class="w-full h-full border-0"
                  :title="projectTitle"
                  sandbox="allow-scripts allow-same-origin"
                  @load="onIframeLoad"
                />
              </div>
            </template>

            <!-- CASE 3: No gallery, no link -->
            <template v-else>
              <div class="flex flex-col items-center justify-center h-[40vh] gap-4 bg-gray-50 dark:bg-gray-900">
                <FontAwesomeIcon icon="fa-solid fa-image" class="text-6xl text-gray-300 dark:text-gray-600" />
                <p class="text-gray-400 dark:text-gray-500 text-lg">Aperçu non disponible</p>
              </div>
            </template>
          </div>

          <!-- Thumbnails (only for gallery) -->
          <div v-if="hasGallery && project.gallery.length > 1" class="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700 shrink-0">
            <div class="flex gap-2 overflow-x-auto pb-1">
              <button
                v-for="(image, index) in project.gallery"
                :key="index"
                @click="goToImage(index)"
                :class="{
                  'ring-2 ring-blue-500 opacity-100': index === currentImageIndex,
                  'opacity-50 hover:opacity-80': index !== currentImageIndex
                }"
                class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-200"
              >
                <img
                  :src="image"
                  :alt="`Thumbnail ${index + 1}`"
                  class="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          <!-- Footer: Description + Tags -->
          <div class="px-6 py-4 border-t dark:border-gray-700 shrink-0">
            <p class="text-gray-700 dark:text-gray-300 mb-3">
              {{ projectDescription }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active {
  transition: all 0.3s ease-out;
}
.modal-leave-active {
  transition: all 0.2s ease-in;
}
.modal-enter-from {
  opacity: 0;
}
.modal-enter-from > div:last-child {
  transform: scale(0.95) translateY(20px);
}
.modal-leave-to {
  opacity: 0;
}
</style>
