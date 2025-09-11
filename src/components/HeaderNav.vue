<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ThemeToggle from './ThemeToggle.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const mobileMenuOpen = ref(false)
const activeSection = ref('home')

const sections = ['home', 'about', 'services', 'portfolio', 'contact']

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    mobileMenuOpen.value = false
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  
  // Check if at bottom of page
  if (scrollPosition + windowHeight >= documentHeight - 10) {
    activeSection.value = 'contact'
    return
  }
  
  // Find the current section
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top
      const elementBottom = rect.bottom
      
      // Check if section is in viewport (with some offset for header)
      if (elementTop <= 150 && elementBottom >= 150) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

onMounted(() => {
  // Listen to scroll events with throttling
  let ticking = false
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection()
        ticking = false
      })
      ticking = true
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  updateActiveSection() // Set initial active section
  
  // Store cleanup function
  window.__navScrollHandler = handleScroll
})

onUnmounted(() => {
  if (window.__navScrollHandler) {
    window.removeEventListener('scroll', window.__navScrollHandler)
    delete window.__navScrollHandler
  }
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <a 
            href="#home"
            @click.prevent="scrollToSection('home')" 
            class="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Angenor N'Gouandi
          </a>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a
              href="#home"
              @click.prevent="scrollToSection('home')"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer',
                activeSection === 'home'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              ]"
            >
              {{ t('nav.home') }}
            </a>
            <a
              href="#about"
              @click.prevent="scrollToSection('about')"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer',
                activeSection === 'about'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              ]"
            >
              {{ t('nav.about') }}
            </a>
            <a
              href="#services"
              @click.prevent="scrollToSection('services')"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer',
                activeSection === 'services'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              ]"
            >
              {{ t('nav.services') }}
            </a>
            <a
              href="#portfolio"
              @click.prevent="scrollToSection('portfolio')"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer',
                activeSection === 'portfolio'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              ]"
            >
              {{ t('nav.portfolio') }}
            </a>
            <a
              href="#contact"
              @click.prevent="scrollToSection('contact')"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer',
                activeSection === 'contact'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              ]"
            >
              {{ t('nav.contact') }}
            </a>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
          
          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <FontAwesomeIcon 
              :icon="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" 
              class="text-xl"
            />
          </button>
        </div>
      </div>
    </nav>
    
    <!-- Mobile menu -->
    <div
      v-show="mobileMenuOpen"
      class="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#home"
          @click.prevent="scrollToSection('home')"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
            activeSection === 'home'
              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          ]"
        >
          {{ t('nav.home') }}
        </a>
        <a
          href="#about"
          @click.prevent="scrollToSection('about')"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
            activeSection === 'about'
              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          ]"
        >
          {{ t('nav.about') }}
        </a>
        <a
          href="#services"
          @click.prevent="scrollToSection('services')"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
            activeSection === 'services'
              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          ]"
        >
          {{ t('nav.services') }}
        </a>
        <a
          href="#portfolio"
          @click.prevent="scrollToSection('portfolio')"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
            activeSection === 'portfolio'
              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          ]"
        >
          {{ t('nav.portfolio') }}
        </a>
        <a
          href="#contact"
          @click.prevent="scrollToSection('contact')"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium transition-all duration-200',
            activeSection === 'contact'
              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
          ]"
        >
          {{ t('nav.contact') }}
        </a>
      </div>
    </div>
  </header>
</template>