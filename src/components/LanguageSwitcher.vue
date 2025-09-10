<script setup>
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()

const switchLanguage = (lang) => {
  locale.value = lang
}

const getLanguageLabel = (lang) => {
  const labels = {
    'en': 'EN',
    'fr': 'FR'
  }
  return labels[lang] || lang.toUpperCase()
}
</script>

<template>
  <div class="flex space-x-1">
    <button
      v-for="lang in availableLocales"
      :key="lang"
      @click="switchLanguage(lang)"
      :class="[
        'px-3 py-1 text-sm font-medium rounded transition-colors duration-200',
        locale === lang
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
      ]"
    >
      {{ getLanguageLabel(lang) }}
    </button>
  </div>
</template>