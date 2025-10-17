<template>
  <section id="projects" class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-6">
      <!-- Section Title -->
      <h2 class="section-title">
        PROJECTS
      </h2>

      <p class="text-center mb-12" style="font-family: var(--font-mono); font-size: 1.1rem; color: rgba(255, 255, 255, 0.6);">
        Selected Work & Achievements
      </p>

      <!-- Filter Buttons - Minimal Style -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'filter-btn',
            selectedCategory === category ? 'filter-btn-active' : ''
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid - Minimal Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card group"
        >
          <!-- Project Header with Gradient -->
          <div class="project-header" :class="getCategoryGradient(project.category)">
            <div class="project-icon">
              <span class="text-6xl">{{ getCategoryIcon(project.category) }}</span>
            </div>
            <!-- Hover Overlay -->
            <div class="project-overlay">
              <div class="flex gap-3">
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  class="project-btn"
                  @click.stop
                >
                  VIEW
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="project-btn"
                  @click.stop
                >
                  CODE
                </a>
              </div>
            </div>
          </div>

          <!-- Project Info -->
          <div class="project-content">
            <div class="text-xs mb-2" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">{{ project.category }}</div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All')
const categories = ['All', 'Web', 'Mobile', 'AI/ML']

// Get gradient class based on category
const getCategoryGradient = (category) => {
  const gradients = {
    'Web': 'project-gradient-web',
    'Mobile': 'project-gradient-mobile',
    'AI/ML': 'project-gradient-ai'
  }
  return gradients[category] || 'project-gradient-web'
}

// Get category icon
const getCategoryIcon = (category) => {
  const icons = {
    'Web': '🌐',
    'Mobile': '📱',
    'AI/ML': '🧠'
  }
  return icons[category] || '💻'
}

const projects = [
  {
    id: 1,
    title: 'RTiraq.com',
    description: 'Modern e-commerce platform for Iraqi market with product listings, user accounts, and secure payments.',
    link: 'https://rtiraq.com',
    technologies: ['Vue.js', 'Flask', 'Python', 'PostgreSQL'],
    category: 'Web'
  },
  {
    id: 2,
    title: 'Baby Care & Bloom',
    description: 'Mobile apps for parents with childcare tools, advice, and essential parenting information.',
    technologies: ['Flutter', 'Firebase', 'Mobile'],
    category: 'Mobile'
  },
  {
    id: 3,
    title: 'Mouhamina.com',
    description: 'Syrian market platform with responsive design, smooth navigation, and secure checkout.',
    link: 'https://mouhamina.com',
    technologies: ['Vue.js', 'WooCommerce', 'WordPress'],
    category: 'Web'
  },
  {
    id: 4,
    title: 'Pharmagate.sy',
    description: 'Healthcare portal with pharmaceutical information and robust backend system.',
    link: 'https://pharmagate.sy',
    technologies: ['Vue.js', 'Node.js', 'MySQL'],
    category: 'Web'
  },
  {
    id: 5,
    title: 'Co-Travel UAE',
    description: 'Travel booking platform with dynamic listings and secure payment gateways.',
    technologies: ['Next.js', 'Node.js', 'Stripe'],
    category: 'Web'
  },
  {
    id: 6,
    title: 'LLM Fine-tuning',
    description: 'Large Language Models for text classification, recommendations, and forecasting systems.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
    category: 'AI/ML'
  },
  {
    id: 7,
    title: 'Syria Budget System',
    description: 'National financial system backend with data management and integrations.',
    technologies: ['Python', 'PostgreSQL', 'Flask'],
    category: 'Web'
  },
  {
    id: 8,
    title: 'ITS Tech Services',
    description: 'Company website showcasing AI services and software development solutions.',
    link: 'https://its-sy.com',
    technologies: ['Vue.js', 'Tailwind CSS', 'Node.js'],
    category: 'Web'
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})
</script>

<style scoped>
/* Minimal Filter Buttons */
.filter-btn {
  font-family: var(--font-pixel);
  font-size: 0.65rem;
  padding: 0.6rem 1.25rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  color: var(--color-text);
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
}

.filter-btn-active {
  color: var(--color-secondary);
  border-color: var(--color-secondary);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
}

/* Minimal Project Card */
.project-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 240, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 240, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
}

/* Project Header with Gradients */
.project-header {
  position: relative;
  width: 100%;
  height: 240px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.project-icon {
  opacity: 0.25;
  transition: all 0.3s ease;
}

.project-card:hover .project-icon {
  opacity: 0.3;
  transform: scale(1.1);
}

/* Gradient Backgrounds */
.project-gradient-web {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(0, 0, 0, 0.95) 100%);
}

.project-gradient-mobile {
  background: linear-gradient(135deg, rgba(255, 0, 170, 0.1) 0%, rgba(0, 0, 0, 0.95) 100%);
}

.project-gradient-ai {
  background: linear-gradient(135deg, rgba(0, 255, 65, 0.1) 0%, rgba(0, 0, 0, 0.95) 100%);
}

.project-card:hover .project-gradient-web {
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%);
}

.project-card:hover .project-gradient-mobile {
  background: linear-gradient(135deg, rgba(255, 0, 170, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%);
}

.project-card:hover .project-gradient-ai {
  background: linear-gradient(135deg, rgba(0, 255, 65, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-header:hover .project-overlay {
  opacity: 1;
}

/* Project Buttons */
.project-btn {
  font-family: var(--font-pixel);
  font-size: 0.65rem;
  padding: 0.6rem 1.25rem;
  background: transparent;
  color: var(--color-text);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
}

.project-btn:hover {
  color: var(--color-secondary);
  border-color: var(--color-secondary);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
}

/* Project Content */
.project-content {
  padding: 1.5rem;
}

.project-title {
  font-family: var(--font-pixel);
  font-size: 0.9rem;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.project-description {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  min-height: 60px;
}

/* Tech Tags */
.tech-tag {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  padding: 0.35rem 0.65rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.project-card:hover .tech-tag {
  color: rgba(0, 240, 255, 0.8);
  border-color: rgba(0, 240, 255, 0.3);
}
</style>
