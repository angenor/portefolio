<script setup>
import { useDarkMode } from '@/composables/useSimpleDarkMode'
import { useI18n } from 'vue-i18n'

const { isDark, toggle } = useDarkMode()
const { t } = useI18n()
</script>

<template>
  <button 
    @click="toggle"
    class="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
    :title="isDark ? t('theme.switchToLight') : t('theme.switchToDark')"
  >
    <FontAwesomeIcon 
      :icon="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" 
      class="w-5 h-5 text-gray-800 dark:text-gray-200"
    />
  </button>
</template>