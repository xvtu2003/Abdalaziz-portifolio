import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observedElements = ref(new Map())
  let observer = null

  const initObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Small delay to ensure smooth animation
            setTimeout(() => {
              entry.target.classList.add('animate-in')
            }, 100)
            // Unobserve after animation to prevent re-triggering
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05, // Lower threshold for earlier trigger
        rootMargin: '0px 0px -30px 0px'
      }
    )
  }

  const observe = (el) => {
    if (observer && el) {
      observer.observe(el)
    }
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    observe
  }
}

export function useCounterAnimation(target, duration = 2000) {
  const count = ref(0)

  const animateCounter = () => {
    const start = 0
    const end = parseInt(target)
    const startTime = Date.now()

    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuad = progress * (2 - progress)
      count.value = Math.floor(easeOutQuad * end)

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        count.value = end
      }
    }

    updateCounter()
  }

  return {
    count,
    animateCounter
  }
}
