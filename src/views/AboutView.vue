<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <div class="max-w-4xl mx-auto px-4 py-16">
      <div class="space-y-12">
        <!-- Page Header -->
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('about.title') }}
          </h1>
          <div class="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <!-- Main Content -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-6">
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ $t('about.description') }}
            </p>
            
            <!-- Skills -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills & Technologies</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center space-x-3">
                  <FontAwesomeIcon icon="fa-brands fa-vue" class="text-green-500 text-xl" />
                  <span class="text-gray-700 dark:text-gray-300">Vue.js</span>
                </div>
                <div class="flex items-center space-x-3">
                  <FontAwesomeIcon icon="fa-brands fa-js" class="text-yellow-500 text-xl" />
                  <span class="text-gray-700 dark:text-gray-300">JavaScript</span>
                </div>
                <div class="flex items-center space-x-3">
                  <FontAwesomeIcon icon="fa-brands fa-node-js" class="text-green-600 text-xl" />
                  <span class="text-gray-700 dark:text-gray-300">Node.js</span>
                </div>
                <div class="flex items-center space-x-3">
                  <FontAwesomeIcon icon="fa-solid fa-database" class="text-blue-500 text-xl" />
                  <span class="text-gray-700 dark:text-gray-300">Databases</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Avatar/Image Placeholder -->
          <div class="flex justify-center">
            <div class="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <FontAwesomeIcon icon="fa-solid fa-user" class="text-6xl text-white" />
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="text-center space-y-6 pt-12 border-t border-gray-200 dark:border-gray-700">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Get In Touch</h3>
          <div class="flex justify-center space-x-6">
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon="fa-brands fa-github" class="text-2xl" />
            </a>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" class="text-2xl" />
            </a>
            <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon="fa-solid fa-envelope" class="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>