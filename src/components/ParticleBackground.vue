<template>
  <canvas
    ref="canvas"
    class="absolute inset-0 pointer-events-none"
    :width="canvasWidth"
    :height="canvasHeight"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
const canvasWidth = ref(0)
const canvasHeight = ref(0)
let ctx = null
let particles = []
let animationFrameId = null
let mouseX = 0
let mouseY = 0

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 2 + 1
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = (Math.random() - 0.5) * 0.5
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update(mouseX, mouseY) {
    // Mouse interaction
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < 100) {
      const force = (100 - distance) / 100
      this.x -= (dx / distance) * force * 2
      this.y -= (dy / distance) * force * 2
    }

    // Move particle
    this.x += this.speedX
    this.y += this.speedY

    // Bounce off edges
    if (this.x < 0 || this.x > canvasWidth.value) this.speedX *= -1
    if (this.y < 0 || this.y > canvasHeight.value) this.speedY *= -1

    // Keep within bounds
    this.x = Math.max(0, Math.min(canvasWidth.value, this.x))
    this.y = Math.max(0, Math.min(canvasHeight.value, this.y))
  }

  draw() {
    ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

const init = () => {
  if (!canvas.value) return

  ctx = canvas.value.getContext('2d')
  canvasWidth.value = window.innerWidth
  canvasHeight.value = window.innerHeight

  // Create particles
  const particleCount = Math.min(Math.floor((canvasWidth.value * canvasHeight.value) / 15000), 100)
  particles = []

  for (let i = 0; i < particleCount; i++) {
    particles.push(
      new Particle(
        Math.random() * canvasWidth.value,
        Math.random() * canvasHeight.value
      )
    )
  }

  animate()
}

const animate = () => {
  ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value)

  // Update and draw particles
  particles.forEach(particle => {
    particle.update(mouseX, mouseY)
    particle.draw()
  })

  // Draw connections
  particles.forEach((particleA, indexA) => {
    particles.slice(indexA + 1).forEach(particleB => {
      const dx = particleA.x - particleB.x
      const dy = particleA.y - particleB.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 120) {
        const opacity = (1 - distance / 120) * 0.15
        ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particleA.x, particleA.y)
        ctx.lineTo(particleB.x, particleB.y)
        ctx.stroke()
      }
    })
  })

  animationFrameId = requestAnimationFrame(animate)
}

const handleResize = () => {
  canvasWidth.value = window.innerWidth
  canvasHeight.value = window.innerHeight
}

const handleMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

onMounted(() => {
  init()
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>
