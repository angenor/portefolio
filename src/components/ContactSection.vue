<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/AppButton.vue'
import { db } from '@/main.js'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const { t } = useI18n()

const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref({ type: '', message: '' })

const handleSubmit = async (e) => {
  e.preventDefault()
  
  isSubmitting.value = true
  submitStatus.value = { type: '', message: '' }
  
  try {
    // Save to Firestore
    await addDoc(collection(db, 'contact_messages'), {
      ...formData.value,
      timestamp: serverTimestamp(),
      read: false
    })
    
    // Show success message
    submitStatus.value = {
      type: 'success',
      message: t('contact.form.successMessage') || 'Message sent successfully!'
    }
    
    // Also send email
    const mailtoLink = `mailto:angenor99@gmail.com?subject=${encodeURIComponent(formData.value.subject)}&body=${encodeURIComponent(formData.value.message + '\n\nFrom: ' + formData.value.fullName + '\nEmail: ' + formData.value.email + '\nPhone: ' + formData.value.phone)}`
    window.location.href = mailtoLink
    
    // Reset form
    formData.value = {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      submitStatus.value = { type: '', message: '' }
    }, 5000)
    
  } catch (error) {
    console.error('Error saving message:', error)
    submitStatus.value = {
      type: 'error',
      message: t('contact.form.errorMessage') || 'Error sending message. Please try again.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12 animate-fade-in-up">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-in-down animation-delay-100">
          {{ $t('contact.title') }}
        </h2>
        <p class="text-blue-600 dark:text-blue-400 text-lg animate-slide-in-down animation-delay-200">{{ $t('contact.subtitle') }}</p>
        <div class="w-20 h-1 bg-blue-600 mx-auto mt-4 animate-scale-in animation-delay-300"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="space-y-8 animate-slide-in-left animation-delay-400">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-in-left animation-delay-500">
              Get in Touch
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-8 animate-slide-in-left animation-delay-600">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex items-center space-x-4 animate-slide-in-left animation-delay-700 hover:translate-x-2 transition-all duration-300 group">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <FontAwesomeIcon icon="fa-solid fa-envelope" class="text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('contact.info.email') }}</p>
                <a href="mailto:angenor99@gmail.com" class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  angenor99@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4 animate-slide-in-left animation-delay-800 hover:translate-x-2 transition-all duration-300 group">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <FontAwesomeIcon icon="fa-solid fa-phone" class="text-green-600 dark:text-green-400 group-hover:animate-pulse" />
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('contact.info.phone') }}</p>
                <a href="tel:+22505452928022" class="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                  +225 05-45-29-28-02
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4 animate-slide-in-left animation-delay-900 hover:translate-x-2 transition-all duration-300 group">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" class="text-purple-600 dark:text-purple-400 group-hover:animate-pulse" />
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
          <div class="flex space-x-4 animate-slide-in-left animation-delay-1000">
            <a 
              href="https://linkedin.com/in/angenor-ngouandi-463708186" 
              target="_blank"
              class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-125 hover:-translate-y-1 transition-all duration-300"
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
        <form @submit="handleSubmit" class="space-y-6 animate-slide-in-right animation-delay-400">
          <!-- Success/Error Message -->
          <div 
            v-if="submitStatus.message"
            :class="[
              'p-4 rounded-lg text-center animate-fade-in-up',
              submitStatus.type === 'success' 
                ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700'
                : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700'
            ]"
          >
            <FontAwesomeIcon 
              :icon="submitStatus.type === 'success' ? 'fa-solid fa-check-circle' : 'fa-solid fa-exclamation-circle'"
              class="mr-2"
            />
            {{ submitStatus.message }}
          </div>
          <div class="grid md:grid-cols-2 gap-4 animate-slide-in-right animation-delay-500">
            <input
              v-model="formData.fullName"
              type="text"
              :placeholder="$t('contact.form.fullName')"
              required
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:scale-105 transition-all duration-300"
            />
            <input
              v-model="formData.email"
              type="email"
              :placeholder="$t('contact.form.email')"
              required
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:scale-105 transition-all duration-300"
            />
          </div>
          
          <div class="grid md:grid-cols-2 gap-4 animate-slide-in-right animation-delay-600">
            <input
              v-model="formData.phone"
              type="tel"
              :placeholder="$t('contact.form.phone')"
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:scale-105 transition-all duration-300"
            />
            <input
              v-model="formData.subject"
              type="text"
              :placeholder="$t('contact.form.subject')"
              required
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:scale-105 transition-all duration-300"
            />
          </div>

          <textarea
            v-model="formData.message"
            :placeholder="$t('contact.form.message')"
            rows="6"
            required
            class="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none animate-slide-in-right animation-delay-700 focus:scale-105 transition-all duration-300"
          ></textarea>

          <AppButton 
            type="submit"
            variant="primary"
            size="lg"
            :icon="isSubmitting ? 'fa-solid fa-spinner' : 'fa-solid fa-paper-plane'"
            :disabled="isSubmitting"
            class="w-full animate-slide-in-right animation-delay-800 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting">
              <FontAwesomeIcon icon="fa-solid fa-spinner" class="animate-spin mr-2" />
              {{ $t('contact.form.sending') || 'Sending...' }}
            </span>
            <span v-else>
              {{ $t('contact.form.send') }}
            </span>
          </AppButton>
        </form>
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

@keyframes slide-in-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
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

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-slide-in-down {
  animation: slide-in-down 0.8s ease-out forwards;
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out forwards;
}

.animate-scale-in {
  animation: scale-in 0.6s ease-out forwards;
}

.animation-delay-100 { animation-delay: 0.1s; opacity: 0; }
.animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
.animation-delay-300 { animation-delay: 0.3s; opacity: 0; }
.animation-delay-400 { animation-delay: 0.4s; opacity: 0; }
.animation-delay-500 { animation-delay: 0.5s; opacity: 0; }
.animation-delay-600 { animation-delay: 0.6s; opacity: 0; }
.animation-delay-700 { animation-delay: 0.7s; opacity: 0; }
.animation-delay-800 { animation-delay: 0.8s; opacity: 0; }
.animation-delay-900 { animation-delay: 0.9s; opacity: 0; }
.animation-delay-1000 { animation-delay: 1.0s; opacity: 0; }
</style>