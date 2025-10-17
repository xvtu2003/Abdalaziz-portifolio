<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Subtle Dots Background -->
    <div class="absolute inset-0">
      <div v-for="n in 30" :key="n"
           class="absolute w-1 h-1 rounded-full"
           :style="{
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`,
             background: 'rgba(255, 255, 255, 0.1)',
             opacity: Math.random() * 0.5 + 0.2,
             animation: `twinkle ${Math.random() * 4 + 3}s infinite`
           }">
      </div>
    </div>

    <!-- Main Content - Elegant Minimal Style -->
    <div class="container mx-auto px-6 py-20 relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-8">

        <!-- Minimal Avatar -->
        <div class="flex justify-center mb-6">
          <div class="elegant-frame p-2">
            <img
              :src="profileImage"
              alt="Abdalaziz Saierafi"
              class="w-48 h-48 md:w-64 md:h-64 object-contain pixel-art"
              style="image-rendering: auto;"
              @error="handleImageError"
            />
          </div>
        </div>

        <!-- Name - Clean Style -->
        <div class="space-y-4">
          <h1 class="text-4xl md:text-6xl lg:text-7xl" style="font-family: var(--font-pixel); color: var(--color-text);">
            ABDALAZIZ
          </h1>
          <h1 class="text-4xl md:text-6xl lg:text-7xl text-gradient" style="font-family: var(--font-pixel);">
            SAIERAFI
          </h1>
        </div>

        <!-- Job Title -->
        <div class="text-lg md:text-2xl" style="font-family: var(--font-mono); letter-spacing: 0.1em; color: rgba(255, 255, 255, 0.7);">
          <div class="typing-text">DEVELOPER █</div>
          <div class="mt-2" style="color: rgba(255, 255, 255, 0.5);">AI SPECIALIST • TECH LEADER • FOUNDER</div>
        </div>

        <!-- Stats Bar - Minimal -->
        <div class="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
          <div class="stat-box-elegant">
            <div class="text-xs md:text-sm" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">SKILL</div>
            <div class="text-2xl md:text-4xl mt-2">⬢⬢⬢⬢⬢</div>
          </div>
          <div class="stat-box-elegant">
            <div class="text-xs md:text-sm" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">SPEED</div>
            <div class="text-2xl md:text-4xl mt-2">⬢⬢⬢⬢⬢</div>
          </div>
          <div class="stat-box-elegant">
            <div class="text-xs md:text-sm" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">QUALITY</div>
            <div class="text-2xl md:text-4xl mt-2">⬢⬢⬢⬢⬢</div>
          </div>
        </div>

        <!-- CTA Buttons - Elegant Style -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <a href="#projects" class="btn-primary group">
            VIEW PROJECTS
          </a>
          <a href="#contact" class="btn-secondary">
            CONTACT
          </a>
        </div>

        <!-- Social Links - Minimal -->
        <div class="flex gap-6 justify-center pt-6">
          <a href="https://www.linkedin.com/in/abdalaziz-saierafi" target="_blank"
             class="social-icon-elegant group">
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://github.com/abdalazizsaierafi" target="_blank"
             class="social-icon-elegant group">
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://facebook.com/abdalaziz.sairfi" target="_blank"
             class="social-icon-elegant group">
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Scroll Indicator - Minimal -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="flex flex-col items-center gap-2" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">
          <span class="text-xs">SCROLL</span>
          <span class="text-xl">▼</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Profile image
const profileImage = ref('/src/assets/imges/hero.jpg')

const handleImageError = (e) => {
  // Fallback to placeholder if image fails to load
  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"%3E%3Crect width="256" height="256" fill="%231A0B2E"/%3E%3Crect x="64" y="32" width="128" height="32" fill="%2300F0FF"/%3E%3Crect x="48" y="64" width="160" height="32" fill="%2300F0FF"/%3E%3Crect x="32" y="96" width="192" height="64" fill="%2300F0FF"/%3E%3Crect x="48" y="160" width="160" height="32" fill="%2300F0FF"/%3E%3Crect x="64" y="192" width="128" height="32" fill="%2300F0FF"/%3E%3Crect x="80" y="80" width="32" height="32" fill="%23000"/%3E%3Crect x="144" y="80" width="32" height="32" fill="%23000"/%3E%3Crect x="96" y="128" width="64" height="16" fill="%23FF00AA"/%3E%3Ctext x="128" y="240" font-family="monospace" font-size="24" fill="%23FFD600" text-anchor="middle"%3EAS%3C/text%3E%3C/svg%3E'
}
</script>

<style scoped>
/* Elegant Frame for Avatar */
.elegant-frame {
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  transition: all 0.3s ease;
}

.elegant-frame::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, transparent, rgba(0, 240, 255, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.elegant-frame:hover {
  border-color: rgba(0, 240, 255, 0.5);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
}

.elegant-frame:hover::before {
  opacity: 1;
}

/* Elegant Stat Boxes */
.stat-box-elegant {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  transition: all 0.3s ease;
}

.stat-box-elegant:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(0, 240, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.1);
}

/* Elegant Social Icons */
.social-icon-elegant {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.social-icon-elegant:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-secondary);
  color: var(--color-secondary);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
}

.pixel-art {
  filter: contrast(1.1) saturate(1.1);
}

.typing-text::after {
  content: '';
  animation: blink 0.7s infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.6; }
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
</style>
