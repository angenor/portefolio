<script setup>
import { onMounted, ref } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import ContactSection from '@/components/ContactSection.vue'

const sectionsVisible = ref({
  hero: true,
  about: false,
  services: false,
  portfolio: false,
  contact: false
})

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionName = entry.target.dataset.section
      if (entry.isIntersecting) {
        sectionsVisible.value[sectionName] = true
      }
    })
  }, observerOptions)

  document.querySelectorAll('[data-section]').forEach((section) => {
    observer.observe(section)
  })
})
</script>

<template>
  <div class="scroll-smooth">
    <div 
      id="home"
      data-section="hero"
      :class="sectionsVisible.hero ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'"
      class="transition-all duration-1000 ease-out"
    >
      <HeroSection />
    </div>
    
    <div 
      id="about"
      data-section="about"
      :class="sectionsVisible.about ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'"
      class="transition-all duration-1000 ease-out delay-200"
    >
      <AboutSection />
    </div>
    
    <div 
      id="services"
      data-section="services"
      :class="sectionsVisible.services ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'"
      class="transition-all duration-1000 ease-out delay-400"
    >
      <ServicesSection />
    </div>
    
    <div 
      id="portfolio"
      data-section="portfolio"
      :class="sectionsVisible.portfolio ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'"
      class="transition-all duration-1000 ease-out delay-600"
    >
      <PortfolioSection />
    </div>
    
    <div 
      id="contact"
      data-section="contact"
      :class="sectionsVisible.contact ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'"
      class="transition-all duration-1000 ease-out delay-800"
    >
      <ContactSection />
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.scroll-smooth {
  scroll-behavior: smooth;
}
</style>