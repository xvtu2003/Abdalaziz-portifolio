<template>
  <nav class="arcade-nav">
    <div class="container mx-auto px-6 py-2">
      <div class="flex justify-between items-center">
        <!-- Arcade Logo -->
        <a href="#home" class="arcade-logo group">
          <div class="logo-box">
            <span class="logo-text">A</span>
            <span class="logo-text delay-1">S</span>
          </div>
          <span class="logo-subtitle">ARCADE</span>
        </a>

        <!-- Desktop Menu - Arcade Buttons -->
        <div class="hidden md:flex items-center gap-2 lg:gap-4">
          <a
            v-for="(link, index) in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="nav-button group"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <span class="button-inner">
              <span class="button-text">{{ link.name }}</span>
            </span>
            <span class="button-glow"></span>
          </a>
        </div>

        <!-- Mobile Menu Button - Arcade Style -->
        <button
          @click="toggleMobileMenu"
          class="arcade-menu-btn md:hidden"
        >
          <div class="menu-btn-box">
            <div v-if="!isMobileMenuOpen" class="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div v-else class="menu-icon close">
              <span></span>
              <span></span>
            </div>
          </div>
        </button>
      </div>

      <!-- Mobile Menu - Arcade Panel -->
      <transition name="arcade-panel">
        <div v-if="isMobileMenuOpen" class="mobile-menu">
          <div class="mobile-menu-content">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="`#${link.id}`"
              @click="closeMobileMenu"
              class="mobile-nav-item group"
            >
              <span class="mobile-text">{{ link.name }}</span>
              <span class="mobile-arrow">▶</span>
            </a>
          </div>
        </div>
      </transition>
    </div>

    <!-- Bottom Arcade Border -->
    <div class="arcade-border-bottom"></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'contact', name: 'Contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Main Navigation - Elegant Arcade Style */
.arcade-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

/* Bottom Border - Subtle Accent Line */
.arcade-border-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    rgba(0, 240, 255, 0.3) 25%,
    rgba(255, 0, 170, 0.3) 50%,
    rgba(255, 214, 0, 0.3) 75%,
    transparent
  );
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.arcade-nav:hover .arcade-border-bottom {
  opacity: 1;
}

/* Logo - Elegant Minimal Style */
.arcade-logo {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo-box {
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.arcade-logo:hover .logo-box {
  border-color: var(--color-secondary);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
}

.logo-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.arcade-logo:hover .logo-box::before {
  left: 100%;
}

.logo-text {
  font-family: var(--font-pixel);
  font-size: 1rem;
  color: #FFFFFF;
  transition: all 0.3s ease;
}

.arcade-logo:hover .logo-text:first-child {
  color: var(--color-secondary);
  text-shadow: 0 0 10px var(--color-secondary);
}

.arcade-logo:hover .logo-text.delay-1 {
  color: var(--color-accent);
  text-shadow: 0 0 10px var(--color-accent);
}

.logo-subtitle {
  font-family: var(--font-pixel);
  font-size: 0.4rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  letter-spacing: 0.2em;
  transition: all 0.3s ease;
}

.arcade-logo:hover .logo-subtitle {
  color: var(--color-highlight);
  text-shadow: 0 0 8px var(--color-highlight);
}

/* Navigation Buttons - Elegant Minimal Style */
.nav-button {
  position: relative;
  padding: 0.5rem 1rem;
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  overflow: hidden;
}

.nav-button::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
  transition: width 0.3s ease;
  z-index: -1;
}

.nav-button:hover::before {
  width: 100%;
}

.nav-button:hover {
  color: #FFFFFF;
  border-color: var(--color-secondary);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
  transform: translateY(-1px);
}

.nav-button:active {
  transform: translateY(0);
}

.button-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.button-glow {
  display: none;
}

/* Mobile Menu Button - Elegant Style */
.arcade-menu-btn {
  padding: 0.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.arcade-menu-btn:hover {
  border-color: var(--color-secondary);
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
}

.menu-btn-box {
  width: 24px;
  height: 20px;
  position: relative;
}

.menu-icon span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.arcade-menu-btn:hover .menu-icon span {
  background: var(--color-secondary);
  box-shadow: 0 0 8px rgba(0, 240, 255, 0.5);
}

.menu-icon span:nth-child(1) { top: 0; }
.menu-icon span:nth-child(2) { top: 50%; transform: translateY(-50%); }
.menu-icon span:nth-child(3) { bottom: 0; }

.menu-icon.close span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.menu-icon.close span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

/* Mobile Menu - Elegant Style */
.mobile-menu {
  margin-top: 1rem;
  padding: 1rem 0;
  background: rgba(0, 0, 0, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid var(--color-secondary);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  font-family: var(--font-pixel);
  font-size: 0.7rem;
  text-transform: uppercase;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  background: transparent;
  border-left: 2px solid transparent;
  transition: all 0.3s ease;
  letter-spacing: 0.15em;
}

.mobile-nav-item:hover {
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.05);
  border-left-color: var(--color-secondary);
  padding-left: 2rem;
  box-shadow: inset 0 0 20px rgba(0, 240, 255, 0.1);
}

.mobile-text {
  flex: 1;
}

.mobile-arrow {
  color: var(--color-secondary);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.mobile-nav-item:hover .mobile-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Transitions */
.arcade-panel-enter-active,
.arcade-panel-leave-active {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.arcade-panel-enter-from,
.arcade-panel-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .logo-text {
    font-size: 0.9rem;
  }

  .logo-subtitle {
    font-size: 0.35rem;
  }

  .nav-button {
    font-size: 0.55rem;
    padding: 0.4rem 0.8rem;
  }

  .mobile-nav-item {
    font-size: 0.65rem;
    padding: 0.85rem 1.25rem;
  }
}

/* Smooth scrolling adjustment for fixed nav */
html {
  scroll-padding-top: 80px;
}
</style>
