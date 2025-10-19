import { ref, onMounted, onUnmounted } from 'vue'

export function useCardTilt(cardRef, options = {}) {
  const {
    maxTilt = 10,
    perspective = 1000,
    scale = 1.02,
    speed = 400
  } = options

  const tiltX = ref(0)
  const tiltY = ref(0)
  const isHovering = ref(false)

  const handleMouseMove = (e) => {
    if (!cardRef.value) return

    const card = cardRef.value
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    // Calculate tilt
    tiltX.value = -(mouseY / (rect.height / 2)) * maxTilt
    tiltY.value = (mouseX / (rect.width / 2)) * maxTilt

    // Apply transform
    card.style.transform = `
      perspective(${perspective}px)
      rotateX(${tiltX.value}deg)
      rotateY(${tiltY.value}deg)
      scale3d(${scale}, ${scale}, ${scale})
    `
  }

  const handleMouseEnter = () => {
    isHovering.value = true
    if (cardRef.value) {
      cardRef.value.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
    }
  }

  const handleMouseLeave = () => {
    isHovering.value = false
    tiltX.value = 0
    tiltY.value = 0

    if (cardRef.value) {
      cardRef.value.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
      cardRef.value.style.transform = `
        perspective(${perspective}px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `
    }
  }

  onMounted(() => {
    if (cardRef.value) {
      cardRef.value.addEventListener('mousemove', handleMouseMove)
      cardRef.value.addEventListener('mouseenter', handleMouseEnter)
      cardRef.value.addEventListener('mouseleave', handleMouseLeave)
    }
  })

  onUnmounted(() => {
    if (cardRef.value) {
      cardRef.value.removeEventListener('mousemove', handleMouseMove)
      cardRef.value.removeEventListener('mouseenter', handleMouseEnter)
      cardRef.value.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return {
    tiltX,
    tiltY,
    isHovering
  }
}
