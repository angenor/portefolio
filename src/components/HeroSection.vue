<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/AppButton.vue'

const { t, locale } = useI18n()

const roleKeys = ['fullstack', 'mobile', 'consultant', 'instructor', 'ai']

const roles = computed(() => roleKeys.map(key => t(`hero.rolesList.${key}`)))

const currentRoleIndex = ref(0)
const currentRole = ref('')
const isTyping = ref(true)
let activeInterval = null
let activeTimeout = null

const clearTimers = () => {
  if (activeInterval) clearInterval(activeInterval)
  if (activeTimeout) clearTimeout(activeTimeout)
  activeInterval = null
  activeTimeout = null
}

onMounted(() => {
  typeWriter()
})

onUnmounted(() => {
  clearTimers()
})

// When locale changes, restart the animation with translated roles
watch(locale, () => {
  clearTimers()
  currentRole.value = ''
  currentRoleIndex.value = 0
  typeWriter()
})

const typeWriter = () => {
  const role = roles.value[currentRoleIndex.value]
  let charIndex = 0
  isTyping.value = true

  activeInterval = setInterval(() => {
    if (charIndex < role.length) {
      currentRole.value = role.substring(0, charIndex + 1)
      charIndex++
    } else {
      clearInterval(activeInterval)
      activeInterval = null
      activeTimeout = setTimeout(() => {
        deleteWriter()
      }, 2000)
    }
  }, 100)
}

const deleteWriter = () => {
  isTyping.value = false
  let charIndex = currentRole.value.length

  activeInterval = setInterval(() => {
    if (charIndex > 0) {
      currentRole.value = currentRole.value.substring(0, charIndex - 1)
      charIndex--
    } else {
      clearInterval(activeInterval)
      activeInterval = null
      currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.value.length
      activeTimeout = setTimeout(() => {
        typeWriter()
      }, 500)
    }
  }, 50)
}

const cvUrl = computed(() => {
  return locale.value === 'fr'
    ? '/assets/CV_Angenor_NGOUANDI_FR.pdf'
    : '/assets/CV_Angenor_NGOUANDI_EN.pdf'
})

const downloadCV = () => {
  window.open(cvUrl.value, '_blank')
}
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-center md:text-left space-y-6 animate-fade-in-up">
          <h3 class="text-2xl font-semibold text-gray-700 dark:text-gray-300 animate-slide-in-left animation-delay-100">
            {{ $t('hero.greeting') }}
          </h3>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white animate-slide-in-left animation-delay-200">
            {{ $t('hero.name') }}
          </h1>
          <h3 class="text-2xl text-gray-700 dark:text-gray-300 animate-slide-in-left animation-delay-300">
            {{ $t('hero.roles') }} 
            <span class="text-blue-600 dark:text-blue-400 font-bold">
              {{ currentRole }}<span class="animate-pulse">|</span>
            </span>
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-lg animate-slide-in-left animation-delay-400">
            {{ $t('hero.description') }}
          </p>

          <!-- Social Media Links -->
          <div class="flex space-x-4 justify-center md:justify-start animate-slide-in-left animation-delay-500">
            <a 
              href="https://linkedin.com/in/angenor-ngouandi-463708186" 
              target="_blank"
              class="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
            <!-- <a 
              href="https://github.com/angenor99" 
              target="_blank"
              class="text-2xl text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a> -->
            <a 
              href="mailto:angenor99@gmail.com"
              class="text-2xl text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </a>
            <a 
              href="tel:+22505452928022"
              class="text-2xl text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon="fa-solid fa-phone" />
            </a>
          </div>

          <!-- CTA Button -->
          <div class="pt-4 animate-slide-in-left animation-delay-600">
            <AppButton 
              variant="primary" 
              size="lg"
              icon="fa-solid fa-download"
              @click="downloadCV"
              class="hover:scale-105 transition-all duration-300"
            >
              {{ $t('hero.downloadCV') }}
            </AppButton>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="flex justify-center animate-slide-in-right animation-delay-300 ">
          <div class="relative hover:scale-105 transition-all duration-300 animate-bounce-slow">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="/images/profile.jpg" 
              alt="Angenor N'Gouandi"
              class="relative z-10 w-80 h-80 rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl hover:shadow-[0_35px_60px_-12px_rgba(59,130,246,0.5)] transition-all duration-500"
            />
          </div>
        </div>
      </div>
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

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out forwards;
}

.animation-delay-100 {
  animation-delay: 0.1s;
  opacity: 0;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  opacity: 0;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

.animation-delay-500 {
  animation-delay: 0.5s;
  opacity: 0;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}
</style>