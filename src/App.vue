<template>
  <div id="app" class="relative">
    <!-- Navigation -->
    <NavigationBar />

    <!-- Main Content -->
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <footer class="bg-primary text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <!-- About Column -->
          <div>
            <h3 class="text-2xl font-bold mb-4">Abdalaziz Saierafi</h3>
            <p class="text-gray-400">
              Software Developer, AI Specialist & Tech Leader. Building innovative solutions
              and leading teams to success.
            </p>
          </div>

          <!-- Quick Links Column -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li>
                <a href="#home" class="text-gray-400 hover:text-secondary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" class="text-gray-400 hover:text-secondary transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" class="text-gray-400 hover:text-secondary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" class="text-gray-400 hover:text-secondary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" class="text-gray-400 hover:text-secondary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <!-- Connect Column -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Connect</h4>
            <div class="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/abdalaziz-saierafi"
                target="_blank"
                class="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/abdalazizsaierafi"
                target="_blank"
                class="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/abdalaziz.sairfi"
                target="_blank"
                class="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
            <p class="text-gray-400 text-sm">
              <a href="mailto:abdalazizsairfi@gmail.com" class="hover:text-secondary transition-colors">
                abdalazizsairfi@gmail.com
              </a>
            </p>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; {{ currentYear }} Abdalaziz Saierafi. All Rights Reserved.</p>
          <p class="text-sm mt-2">Built with Vue.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>

    <!-- Scroll to Top Button -->
    <transition name="fade">
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 w-12 h-12 bg-secondary text-white rounded-full shadow-lg hover:bg-accent transition-all duration-300 hover:scale-110 z-40"
      >
        <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'

const showScrollTop = ref(false)
const currentYear = computed(() => new Date().getFullYear())

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  // Add smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
