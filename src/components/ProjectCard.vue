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
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
    <!-- Image -->
    <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <FontAwesomeIcon 
        icon="fa-solid fa-code" 
        class="text-4xl text-white opacity-80 group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    
    <!-- Content -->
    <div class="p-6 space-y-4">
      <!-- Title -->
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {{ title }}
      </h3>
      
      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
        {{ description }}
      </p>
      
      <!-- Technologies -->
      <div v-if="technologies && technologies.length" class="flex flex-wrap gap-2">
        <span 
          v-for="tech in technologies" 
          :key="tech"
          class="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
      
      <!-- Actions -->
      <div class="flex space-x-4 pt-4">
        <a 
          v-if="githubUrl"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" />
          <span class="text-sm">Code</span>
        </a>
        
        <a 
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          <FontAwesomeIcon icon="fa-solid fa-external-link-alt" />
          <span class="text-sm">Demo</span>
        </a>
      </div>
    </div>
  </div>
</template>