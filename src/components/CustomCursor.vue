<template>
  <div v-if="!isMobile">
    <!-- Main cursor dot -->
    <div
      ref="cursor"
      class="custom-cursor"
      :class="{ 'cursor-hover': isHovering }"
    ></div>

    <!-- Cursor outline -->
    <div
      ref="cursorOutline"
      class="cursor-outline"
      :class="{ 'outline-hover': isHovering }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Check if mobile device
const isMobile = ref(false)
const cursor = ref(null)
const cursorOutline = ref(null)
const isHovering = ref(false)

// Mouse position
let mouseX = 0
let mouseY = 0
let cursorX = 0
let cursorY = 0
let outlineX = 0
let outlineY = 0

// Check if mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768 || 'ontouchstart' in window
}

// Update cursor position
const updateCursor = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

// Animate cursor
const animateCursor = () => {
  // Smooth cursor movement - more responsive
  const cursorSpeed = 0.25
  cursorX += (mouseX - cursorX) * cursorSpeed
  cursorY += (mouseY - cursorY) * cursorSpeed

  if (cursor.value) {
    cursor.value.style.transform = `translate(${cursorX}px, ${cursorY}px)`
  }

  // Slightly slower outline movement for subtle lag effect
  const outlineSpeed = 0.18
  outlineX += (mouseX - outlineX) * outlineSpeed
  outlineY += (mouseY - outlineY) * outlineSpeed

  if (cursorOutline.value) {
    cursorOutline.value.style.transform = `translate(${outlineX}px, ${outlineY}px)`
  }

  requestAnimationFrame(animateCursor)
}

// Handle hover states
const handleMouseOver = (e) => {
  const target = e.target
  if (
    target.tagName === 'A' ||
    target.tagName === 'BUTTON' ||
    target.classList.contains('clickable') ||
    target.closest('a') ||
    target.closest('button') ||
    target.classList.contains('project-card') ||
    target.closest('.project-card')
  ) {
    isHovering.value = true
    document.body.style.cursor = 'none'
  }
}

const handleMouseOut = () => {
  isHovering.value = false
}

const handleMouseLeave = () => {
  cursor.value.style.opacity = '0'
  cursorOutline.value.style.opacity = '0'
}

const handleMouseEnter = () => {
  cursor.value.style.opacity = '1'
  cursorOutline.value.style.opacity = '1'
}

onMounted(() => {
  checkMobile()

  if (!isMobile.value) {
    // Hide default cursor
    document.body.style.cursor = 'none'

    // Add event listeners
    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('resize', checkMobile)

    // Start animation
    animateCursor()
  }
})

onUnmounted(() => {
  // Restore default cursor
  document.body.style.cursor = 'auto'

  // Remove event listeners
  document.removeEventListener('mousemove', updateCursor)
  document.removeEventListener('mouseover', handleMouseOver)
  document.removeEventListener('mouseout', handleMouseOut)
  document.removeEventListener('mouseleave', handleMouseLeave)
  document.removeEventListener('mouseenter', handleMouseEnter)
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
/* Main cursor dot */
.custom-cursor {
  position: fixed;
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  transition: background 0.2s ease;
}

.custom-cursor.cursor-hover {
  background: rgba(255, 255, 255, 0.7);
}

/* Cursor outline */
.cursor-outline {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: border-color 0.2s ease;
}

.cursor-outline.outline-hover {
  border-color: rgba(255, 255, 255, 0.25);
}

/* Hide on mobile and touch devices */
@media (max-width: 768px), (hover: none) {
  .custom-cursor,
  .cursor-outline,
  .cursor-particle {
    display: none !important;
  }
}
</style>

<style>
/* Global styles to enhance cursor interaction */
a, button, .clickable {
  cursor: none !important;
}

body {
  cursor: none !important;
}

/* Add to interactive elements */
.project-card,
.experience-card,
.contact-card,
.btn-primary,
.btn-secondary,
.filter-btn,
.social-icon-elegant,
.social-btn {
  cursor: none !important;
}
</style>