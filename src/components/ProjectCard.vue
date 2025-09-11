<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  technologies: Array,
  githubUrl: String,
  demoUrl: String
})
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
    <!-- Image -->
    <div class="max-h-48 flex items-center justify-center overflow-hidden relative">
      <img class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" :src="image" alt="">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
        <div class="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <FontAwesomeIcon icon="fa-solid fa-eye" class="text-white text-xl" />
        </div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6 space-y-4">
      <!-- Title -->
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {{ title }}
      </h3>
      
      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
        {{ description }}
      </p>
      
      <!-- Technologies -->
      <div v-if="technologies && technologies.length" class="flex flex-wrap gap-2">
        <span 
          v-for="(tech, index) in technologies" 
          :key="tech"
          class="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:scale-110 transition-all duration-300"
          :style="`animation-delay: ${index * 100}ms`"
        >
          {{ tech }}
        </span>
      </div>
      
      <!-- Actions -->
      <div class="flex space-x-4 pt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        <a 
          v-if="githubUrl"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-300"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" />
          <span class="text-sm">Code</span>
        </a>
        
        <a 
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:scale-110 transition-all duration-300"
        >
          <FontAwesomeIcon icon="fa-solid fa-external-link-alt" />
          <span class="text-sm">Demo</span>
        </a>
      </div>
    </div>
  </div>
</template>