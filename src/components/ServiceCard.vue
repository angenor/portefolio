<script setup>
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/AppButton.vue'

const { t } = useI18n()

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'blue'
  }
})

const colorClasses = {
  blue: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20',
  green: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20',
  purple: 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/20'
}

const hoverColorClasses = {
  blue: 'hover:shadow-blue-500/20',
  green: 'hover:shadow-green-500/20',
  purple: 'hover:shadow-purple-500/20'
}
</script>

<template>
  <div 
    class="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
    :class="hoverColorClasses[color]"
  >
    <div 
      class="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
      :class="colorClasses[color]"
    >
      <FontAwesomeIcon :icon="icon" class="text-3xl" />
    </div>
    
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
      {{ title }}
    </h3>
    
    <p class="text-gray-600 dark:text-gray-400 text-center mb-6">
      {{ description }}
    </p>
    
    <div class="text-center">
      <AppButton 
        variant="outline"
        size="sm"
      >
        {{ t('services.readMore') }}
      </AppButton>
    </div>
  </div>
</template>