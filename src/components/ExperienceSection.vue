<template>
  <section id="experience" class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-6">
      <!-- Section Title -->
      <h2 class="section-title">
        EXPERIENCE
      </h2>

      <p class="text-center mb-12" style="font-family: var(--font-mono); font-size: 1.1rem; color: rgba(255, 255, 255, 0.6);">
        Professional Journey & Achievements
      </p>

      <div class="max-w-5xl mx-auto">
        <!-- Experience Timeline -->
        <div class="relative">
          <!-- Vertical Timeline Line -->
          <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

          <!-- Experience Items -->
          <div
            v-for="(quest, index) in quests"
            :key="quest.id"
            :class="[
              'relative mb-12',
              index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
            ]"
          >
            <!-- Timeline Marker -->
            <div
              :class="[
                'absolute left-8 md:left-1/2 w-10 h-10 transform -translate-x-1/2 z-10',
                'flex items-center justify-center',
                'border border-white/20 bg-black',
                'timeline-marker'
              ]"
            >
              <span class="text-xl">{{ quest.icon }}</span>
            </div>

            <!-- Experience Card -->
            <div
              :class="[
                'ml-20 md:ml-0',
                index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
              ]"
            >
              <div class="experience-card">
                <!-- Header -->
                <div class="experience-header">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="role-badge">
                      <span style="font-family: var(--font-pixel); font-size: 0.6rem;">{{ quest.badge }}</span>
                    </div>
                    <h3 class="text-lg" style="font-family: var(--font-pixel);">
                      {{ quest.title }}
                    </h3>
                  </div>
                  <h4 class="mb-2" style="font-family: var(--font-mono); font-size: 1.1rem; font-weight: bold; color: rgba(255, 255, 255, 0.9);">
                    {{ quest.company }}
                  </h4>
                  <div class="flex items-center gap-2 text-sm mb-3" style="font-family: var(--font-mono); color: rgba(255, 255, 255, 0.5);">
                    <span>{{ quest.date }}</span>
                  </div>
                </div>

                <!-- Description -->
                <p class="mb-4" style="font-family: var(--font-mono); line-height: 1.7; color: rgba(255, 255, 255, 0.7);">
                  {{ quest.description }}
                </p>

                <!-- Responsibilities -->
                <div class="mb-4">
                  <div class="text-sm mb-2" style="font-family: var(--font-pixel); font-size: 0.7rem; color: rgba(255, 255, 255, 0.6);">
                    KEY RESPONSIBILITIES
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="objective in quest.objectives"
                      :key="objective"
                      class="flex items-start gap-2 text-sm"
                      style="font-family: var(--font-mono); color: rgba(255, 255, 255, 0.7);"
                    >
                      <span class="mt-0.5">•</span>
                      <span>{{ objective }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in quest.technologies"
                    :key="tech"
                    class="experience-tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Link if available -->
                <div v-if="quest.link" class="mt-4">
                  <a
                    :href="quest.link"
                    target="_blank"
                    class="experience-link"
                  >
                    VISIT →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="mt-20">
        <h3 class="text-3xl mb-12 text-center" style="font-family: var(--font-pixel);">
          EDUCATION
        </h3>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="education-card-elegant">
            <div class="education-icon-elegant">
              <span class="text-3xl">🎓</span>
            </div>
            <div class="education-content-elegant">
              <h4 class="text-lg mb-2" style="font-family: var(--font-pixel);">
                INFORMATIC ENG.
              </h4>
              <p class="mb-1" style="font-family: var(--font-mono); color: rgba(255, 255, 255, 0.8);">
                Arabic International University
              </p>
              <p class="text-sm" style="font-family: var(--font-mono); color: rgba(255, 255, 255, 0.5);">
                Expected: 2025
              </p>
              <div class="mt-3">
                <div class="progress-bar-elegant">
                  <div class="progress-fill-elegant" style="width: 90%;"></div>
                </div>
                <div class="text-xs text-right mt-1" style="font-family: var(--font-pixel); color: rgba(0, 240, 255, 0.8);">
                  90% COMPLETE
                </div>
              </div>
            </div>
          </div>

          <div class="education-card-elegant">
            <div class="education-icon-elegant">
              <span class="text-3xl">🎓</span>
            </div>
            <div class="education-content-elegant">
              <h4 class="text-lg mb-2" style="font-family: var(--font-pixel);">
                MIS DEGREE
              </h4>
              <p class="mb-1" style="font-family: var(--font-mono); color: rgba(255, 255, 255, 0.8);">
                Syrian Virtual University
              </p>
              <p class="text-sm" style="font-family: var(--font-mono); color: rgba(255, 255, 255, 0.5);">
                Expected: 2025
              </p>
              <div class="mt-3">
                <div class="progress-bar-elegant">
                  <div class="progress-fill-elegant" style="width: 85%;"></div>
                </div>
                <div class="text-xs text-right mt-1" style="font-family: var(--font-pixel); color: rgba(0, 240, 255, 0.8);">
                  85% COMPLETE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const quests = [
  {
    id: 1,
    title: 'GUILD MASTER QUEST',
    company: 'ITS (International Tech Services)',
    date: '2022 – Present',
    badge: 'FOUNDER',
    icon: '🏰',
    markerColor: 'var(--color-accent)',
    description: 'Founded ITS to provide legendary technology services. Built a guild of developers and technical wizards to deliver AI-driven solutions.',
    objectives: [
      'Assembled elite team of developers and tech experts',
      'Delivered IT solutions across multiple industries',
      'Pioneered AI-driven applications and custom software',
      'Led business strategy and technical advancement'
    ],
    technologies: ['Vue.js', 'Python', 'AI/ML', 'Cloud'],
    xp: '9500',
    link: 'https://its-sy.com'
  },
  {
    id: 2,
    title: 'TEAM LEAD CAMPAIGN',
    company: 'TechnoSolutions Company',
    date: 'June 2023 – Present',
    badge: 'LEADER',
    icon: '⚔️',
    markerColor: 'var(--color-secondary)',
    description: 'Leading a party of skilled developers through epic development quests. Coordinating attacks on complex software challenges.',
    objectives: [
      'Managed tech team and coordinated between departments',
      'Ensured timely delivery of high-quality projects',
      'Optimized IT operations and system performance',
      'Led development of high-profile applications'
    ],
    technologies: ['Vue.js', 'Node.js', 'DevOps', 'Management'],
    xp: '8200'
  },
  {
    id: 3,
    title: 'RTIRAQ EXPEDITION',
    company: 'RTiraq',
    date: 'March 2023 – Present',
    badge: 'DEVELOPER',
    icon: '🛡️',
    markerColor: 'var(--color-success)',
    description: 'Contributing to RTiraq.com development - a dynamic marketplace in the Iraqi realm with advanced features.',
    objectives: [
      'Crafted front-end and back-end using Vue.js and Flask',
      'Built scalable web architecture',
      'Implemented user authentication systems',
      'Integrated third-party merchant services'
    ],
    technologies: ['Vue.js', 'Flask', 'Python', 'PostgreSQL'],
    xp: '7800',
    link: 'https://rtiraq.com'
  },
  {
    id: 4,
    title: 'FREELANCE ADVENTURE',
    company: 'Independent Quests',
    date: '2019 – Present',
    badge: 'MERCENARY',
    icon: '🗡️',
    markerColor: 'var(--color-highlight)',
    description: 'Embarked on solo missions developing mobile apps, websites, and e-commerce solutions for various clients across realms.',
    objectives: [
      'Created Baby Care & Baby Bloom mobile applications',
      'Built e-commerce platforms (Mouhamina.com, Pharmagate.sy)',
      'Fine-tuned Large Language Models for NLP sorcery',
      'Delivered custom software solutions for clients'
    ],
    technologies: ['Flutter', 'Vue.js', 'WordPress', 'TensorFlow'],
    xp: '12000'
  },
  {
    id: 5,
    title: 'NATIONAL SYSTEM QUEST',
    company: "Syria's Financial Budgeting System",
    date: '2020 – 2021',
    badge: 'BACKEND',
    icon: '🏛️',
    markerColor: 'var(--color-secondary)',
    description: "Worked on the backend infrastructure for Syria's national financial system - a critical mission with nation-level impact.",
    objectives: [
      'Engineered backend systems and data management',
      'Developed system integrations and API architecture',
      'Optimized performance for large-scale data operations',
      'Designed robust database architecture'
    ],
    technologies: ['Python', 'PostgreSQL', 'Flask', 'Integration'],
    xp: '6500'
  }
]
</script>

<style scoped>
/* Timeline Marker */
.timeline-marker {
  transition: all 0.3s ease;
}

.timeline-marker:hover {
  border-color: var(--color-secondary);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
}

/* Experience Card */
.experience-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 240, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 240, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
}

.experience-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.role-badge {
  padding: 0.35rem 0.65rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.experience-card:hover .role-badge {
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

/* Tech Tags */
.experience-tech-tag {
  font-family: var(--font-pixel);
  font-size: 0.5rem;
  padding: 0.35rem 0.65rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.experience-card:hover .experience-tech-tag {
  color: rgba(0, 240, 255, 0.8);
  border-color: rgba(0, 240, 255, 0.3);
}

/* Experience Link */
.experience-link {
  font-family: var(--font-pixel);
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.experience-link:hover {
  color: var(--color-secondary);
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
}

/* Education Cards */
.education-card-elegant {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.education-card-elegant:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 240, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 240, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
}

.education-icon-elegant {
  width: 70px;
  height: 70px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.education-card-elegant:hover .education-icon-elegant {
  border-color: var(--color-secondary);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
}

.education-content-elegant {
  flex: 1;
}

/* Progress Bar */
.progress-bar-elegant {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  position: relative;
}

.progress-fill-elegant {
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 240, 255, 0.5), rgba(0, 240, 255, 0.8));
  transition: all 0.3s ease;
}

.education-card-elegant:hover .progress-fill-elegant {
  background: linear-gradient(90deg, var(--color-secondary), rgba(0, 240, 255, 0.9));
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
}
</style>
