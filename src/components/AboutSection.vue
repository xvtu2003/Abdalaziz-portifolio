<template>
  <section id="about" class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-6">
      <!-- Section Title -->
      <h2 class="section-title">
        ABOUT
      </h2>

      <div class="grid md:grid-cols-2 gap-12 items-start mb-16">
        <!-- Character Card -->
        <div class="relative">
          <div class="card">
            <!-- Portrait -->
            <div class="relative mb-6">
              <div class="elegant-portrait">
                <img
                  :src="characterImage"
                  alt="Profile"
                  class="w-full h-64 object-cover"
                  style="image-rendering: pixelated;"
                  @error="handleImageError"
                />
              </div>
            </div>

            <!-- Info -->
            <div class="space-y-3" style="font-family: var(--font-mono); font-size: 1.05rem; line-height: 1.8; color: rgba(255, 255, 255, 0.8);">
              <div class="flex items-center gap-2">
                <span class="text-sm">→</span>
                <span>Full-Stack Developer</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm">→</span>
                <span>AI/ML Specialist</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm">→</span>
                <span>Tech Team Leader</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm">→</span>
                <span>Founder & CEO</span>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-4 mt-6">
              <div class="stat-box-elegant-small">
                <div class="text-xs mb-1" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">EXPERIENCE</div>
                <div class="text-3xl" style="font-family: var(--font-pixel);">5Y+</div>
              </div>
              <div class="stat-box-elegant-small">
                <div class="text-xs mb-1" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">PROJECTS</div>
                <div class="text-3xl" style="font-family: var(--font-pixel);">20+</div>
              </div>
            </div>

            <!-- Link Button -->
            <div class="mt-6">
              <a href="https://its-sy.com" target="_blank" class="btn-primary w-full text-center block">
                VISIT ITS
              </a>
            </div>
          </div>
        </div>

        <!-- Bio & Attributes -->
        <div class="space-y-6">
          <!-- Bio Text -->
          <div class="card">
            <h3 class="text-xl mb-4" style="font-family: var(--font-pixel);">
              BACKGROUND
            </h3>
            <div class="space-y-4" style="font-family: var(--font-mono); font-size: 1.05rem; line-height: 1.8; color: rgba(255, 255, 255, 0.8);">
              <p>
                Passionate and results-driven developer with expertise in software development,
                AI/ML technologies, and team leadership.
              </p>
              <p>
                Currently serving as Tech Team Lead at TechnoSolutions,
                managing a team of skilled developers and delivering high-quality projects.
              </p>
              <p>
                Founder of ITS (International Tech Services) -
                providing cutting-edge technology solutions for clients worldwide.
              </p>
              <p>
                Specialized in Vue.js, Node.js, Machine Learning, and Full-Stack Development.
                Always seeking new challenges and innovative solutions.
              </p>
            </div>
          </div>

          <!-- Core Attributes -->
          <div class="card">
            <h3 class="text-xl mb-4" style="font-family: var(--font-pixel);">
              STRENGTHS
            </h3>
            <div class="space-y-4">
              <AttributeBar name="Leadership" value="92" color="secondary" />
              <AttributeBar name="Development" value="95" color="accent" />
              <AttributeBar name="AI/ML" value="90" color="success" />
              <AttributeBar name="Creativity" value="88" color="highlight" />
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="mt-20">
        <h3 class="text-3xl mb-12 text-center" style="font-family: var(--font-pixel);">
          TECHNICAL SKILLS
        </h3>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Web Development -->
          <div class="card skill-tree">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-14 h-14 bg-transparent border border-white/20 flex items-center justify-center skill-icon">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: rgba(255, 255, 255, 0.7);">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h4 class="text-lg" style="font-family: var(--font-pixel);">WEB DEV</h4>
            </div>
            <div class="space-y-3">
              <SkillBar name="Vue.js" level="95" icon="●●●●●" />
              <SkillBar name="Next.js" level="85" icon="●●●●○" />
              <SkillBar name="Node.js" level="90" icon="●●●●●" />
              <SkillBar name="Tailwind" level="95" icon="●●●●●" />
              <SkillBar name="Flask" level="85" icon="●●●●○" />
            </div>
          </div>

          <!-- AI/ML -->
          <div class="card skill-tree">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-14 h-14 bg-transparent border border-white/20 flex items-center justify-center skill-icon">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: rgba(255, 255, 255, 0.7);">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h4 class="text-lg" style="font-family: var(--font-pixel);">AI/ML</h4>
            </div>
            <div class="space-y-3">
              <SkillBar name="Python" level="90" icon="●●●●●" />
              <SkillBar name="TensorFlow" level="85" icon="●●●●○" />
              <SkillBar name="PyTorch" level="80" icon="●●●●○" />
              <SkillBar name="NLP/LLM" level="88" icon="●●●●●" />
              <SkillBar name="Scikit" level="90" icon="●●●●●" />
            </div>
          </div>

          <!-- Other Skills -->
          <div class="card skill-tree">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-14 h-14 bg-transparent border border-white/20 flex items-center justify-center skill-icon">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: rgba(255, 255, 255, 0.7);">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <h4 class="text-lg" style="font-family: var(--font-pixel);">TOOLS</h4>
            </div>
            <div class="space-y-3">
              <SkillBar name="Flutter" level="85" icon="●●●●○" />
              <SkillBar name="PostgreSQL" level="90" icon="●●●●●" />
              <SkillBar name="Git" level="95" icon="●●●●●" />
              <SkillBar name="AWS/Cloud" level="80" icon="●●●●○" />
              <SkillBar name="Teamwork" level="92" icon="●●●●●" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Profile image
const characterImage = ref('/src/assets/imges/portrait.jpg')

const handleImageError = (e) => {
  // Fallback to placeholder if image fails to load
  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 320"%3E%3Crect width="256" height="320" fill="%231A0B2E"/%3E%3Crect x="64" y="40" width="128" height="240" fill="%2300F0FF" opacity="0.2"/%3E%3Crect x="80" y="60" width="96" height="32" fill="%2300F0FF"/%3E%3Crect x="96" y="92" width="64" height="16" fill="%23000"/%3E%3Crect x="80" y="108" width="96" height="80" fill="%2300F0FF"/%3E%3Crect x="64" y="188" width="128" height="64" fill="%23FF00AA"/%3E%3Crect x="80" y="252" width="40" height="28" fill="%2300F0FF"/%3E%3Crect x="136" y="252" width="40" height="28" fill="%2300F0FF"/%3E%3Crect x="104" y="120" width="16" height="16" fill="%23000"/%3E%3Crect x="136" y="120" width="16" height="16" fill="%23000"/%3E%3Crect x="104" y="148" width="48" height="8" fill="%23FFD600"/%3E%3C/svg%3E'
}
</script>

<script>
export default {
  components: {
    SkillBar: {
      props: ['name', 'level', 'icon'],
      template: `
        <div>
          <div class="flex justify-between mb-2">
            <span class="text-sm text-text" style="font-family: var(--font-mono);">{{ name }}</span>
            <span class="text-sm text-highlight" style="font-family: var(--font-pixel);">{{ icon }}</span>
          </div>
          <div class="relative w-full h-6 bg-dark border-2 border-secondary overflow-hidden">
            <div
              class="health-bar-fill h-full transition-all duration-1000 ease-out"
              :style="{ width: level + '%' }"
            ></div>
            <div class="absolute inset-0 flex items-center justify-end pr-2">
              <span class="text-xs text-text" style="font-family: var(--font-pixel);">{{ level }}/100</span>
            </div>
          </div>
        </div>
      `
    },
    AttributeBar: {
      props: ['name', 'value', 'color'],
      template: `
        <div>
          <div class="flex justify-between mb-2">
            <span class="text-sm" style="font-family: var(--font-pixel); color: var(--color-highlight);">{{ name }}</span>
            <span class="text-sm" style="font-family: var(--font-pixel);" :style="{ color: 'var(--color-' + color + ')' }">{{ value }}/100</span>
          </div>
          <div class="relative w-full h-8 bg-dark border-3 overflow-hidden" :style="{ borderColor: 'var(--color-' + color + ')', borderWidth: '3px', borderStyle: 'solid' }">
            <div
              class="attribute-bar-fill h-full transition-all duration-1000 ease-out"
              :style="{
                width: value + '%',
                background: 'linear-gradient(90deg, var(--color-' + color + '), var(--color-' + color + ') 50%, transparent 50%, transparent)',
                backgroundSize: '20px 100%',
                boxShadow: '0 0 10px var(--color-' + color + ')'
              }"
            ></div>
          </div>
        </div>
      `
    }
  }
}
</script>

<style scoped>
/* Elegant Portrait Frame */
.elegant-portrait {
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
}

.elegant-portrait:hover {
  border-color: rgba(0, 240, 255, 0.5);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
}

/* Elegant Stat Boxes */
.stat-box-elegant-small {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-box-elegant-small:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(0, 240, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.1);
}

/* Skill Cards */
.skill-tree {
  transition: all 0.3s ease;
}

.skill-tree:hover {
  transform: translateY(-4px);
}

.skill-icon {
  transition: all 0.3s ease;
}

.skill-tree:hover .skill-icon {
  border-color: var(--color-secondary);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
}

.skill-tree:hover .skill-icon svg {
  color: var(--color-secondary) !important;
}

/* Skill Bar Fill */
.health-bar-fill {
  background: linear-gradient(90deg, rgba(0, 240, 255, 0.3), rgba(0, 240, 255, 0.6));
  transition: all 0.3s ease;
}

.skill-tree:hover .health-bar-fill {
  background: linear-gradient(90deg, var(--color-secondary), rgba(0, 240, 255, 0.8));
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
}
</style>
