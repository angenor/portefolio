<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/AppButton.vue'

const { t } = useI18n()

const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = (e) => {
  e.preventDefault()
  const mailtoLink = `mailto:angenor99@gmail.com?subject=${encodeURIComponent(formData.value.subject)}&body=${encodeURIComponent(formData.value.message + '\n\nFrom: ' + formData.value.fullName + '\nEmail: ' + formData.value.email + '\nPhone: ' + formData.value.phone)}`
  window.location.href = mailtoLink
}
</script>

<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {{ $t('contact.title') }}
        </h2>
        <p class="text-blue-600 dark:text-blue-400 text-lg">{{ $t('contact.subtitle') }}</p>
        <div class="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon="fa-solid fa-envelope" class="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('contact.info.email') }}</p>
                <a href="mailto:angenor99@gmail.com" class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  angenor99@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon="fa-solid fa-phone" class="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('contact.info.phone') }}</p>
                <a href="tel:+22505452928022" class="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400">
                  +225 05-45-29-28-02
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" class="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('contact.info.location') }}</p>
                <p class="text-gray-900 dark:text-white">
                  Abidjan, Côte d'Ivoire
                </p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex space-x-4 ">
            <a 
              href="https://linkedin.com/in/angenor-ngouandi-463708186" 
              target="_blank"
              class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
            <!-- <a 
              href="https://github.com/angenor99" 
              target="_blank"
              class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a> -->
          </div>
        </div>

        <!-- Contact Form -->
        <form @submit="handleSubmit" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-4">
            <input
              v-model="formData.fullName"
              type="text"
              :placeholder="$t('contact.form.fullName')"
              required
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
            />
            <input
              v-model="formData.email"
              type="email"
              :placeholder="$t('contact.form.email')"
              required
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>
          
          <div class="grid md:grid-cols-2 gap-4">
            <input
              v-model="formData.phone"
              type="tel"
              :placeholder="$t('contact.form.phone')"
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
            />
            <input
              v-model="formData.subject"
              type="text"
              :placeholder="$t('contact.form.subject')"
              required
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>

          <textarea
            v-model="formData.message"
            :placeholder="$t('contact.form.message')"
            rows="6"
            required
            class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
          ></textarea>

          <AppButton 
            type="submit"
            variant="primary"
            size="lg"
            icon="fa-solid fa-paper-plane"
            class="w-full"
          >
            {{ $t('contact.form.send') }}
          </AppButton>
        </form>
      </div>
    </div>
  </section>
</template>