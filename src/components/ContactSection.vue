<template>
  <section id="contact" class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-6">
      <!-- Section Title -->
      <h2 class="section-title">
        CONTACT
      </h2>

      <p class="text-center mb-12" style="font-family: var(--font-mono); font-size: 1.1rem; color: rgba(255, 255, 255, 0.6);">
        Let's Build Something Great Together
      </p>

      <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="contact-card">
          <h3 class="text-xl mb-6" style="font-family: var(--font-pixel);">
            GET IN TOUCH
          </h3>

          <div class="space-y-5">
            <!-- Email -->
            <div class="contact-item">
              <div class="flex items-start gap-4">
                <div class="contact-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: rgba(255, 255, 255, 0.7);">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs mb-1" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">EMAIL</p>
                  <a href="mailto:abdalazizsairfi@gmail.com" class="contact-link">
                    abdalazizsairfi@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="contact-item">
              <div class="flex items-start gap-4">
                <div class="contact-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: rgba(255, 255, 255, 0.7);">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs mb-1" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">PHONE</p>
                  <a href="tel:+963988122563" class="contact-link">
                    (+963) 988122563
                  </a>
                </div>
              </div>
            </div>

            <!-- Location -->
            <div class="contact-item">
              <div class="flex items-start gap-4">
                <div class="contact-icon">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: rgba(255, 255, 255, 0.7);">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs mb-1" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">LOCATION</p>
                  <p class="text-text" style="font-family: var(--font-mono);">
                    Mazzeh, Damascus, Syria
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-8 pt-6 border-t" style="border-color: rgba(255, 255, 255, 0.1);">
            <p class="text-xs mb-4" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">CONNECT</p>
            <div class="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/abdalaziz-saierafi"
                  target="_blank"
                  class="social-btn"
                  title="LinkedIn"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/abdalazizsaierafi"
                  target="_blank"
                  class="social-btn"
                  title="GitHub"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/abdalaziz.sairfi"
                  target="_blank"
                  class="social-btn"
                  title="Facebook"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
        </div>

        <!-- Message Form -->
        <div class="contact-card">
          <h3 class="text-xl mb-6" style="font-family: var(--font-pixel);">
            SEND MESSAGE
          </h3>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Name -->
            <div>
              <label for="name" class="form-label">
                NAME <span style="color: var(--color-secondary);">*</span>
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="form-input"
                placeholder="Your name"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="form-label">
                EMAIL <span style="color: var(--color-secondary);">*</span>
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="form-input"
                placeholder="your@email.com"
              />
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="form-label">
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="form-input"
                placeholder="Project inquiry"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="form-label">
                MESSAGE <span style="color: var(--color-secondary);">*</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="form-input resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">SEND MESSAGE</span>
              <span v-else>SENDING...</span>
            </button>

            <!-- Success/Error Message -->
            <transition name="fade">
              <div
                v-if="submitMessage"
                :class="[
                  'p-4 text-center border',
                  submitSuccess
                    ? 'bg-success/10 border-success/30 text-success'
                    : 'bg-accent/10 border-accent/30 text-accent'
                ]"
                style="font-family: var(--font-pixel); font-size: 0.65rem;"
              >
                {{ submitSuccess ? 'SUCCESS' : 'ERROR' }}
                <div class="mt-2 text-xs" style="font-family: var(--font-mono);">
                  {{ submitMessage }}
                </div>
              </div>
            </transition>
          </form>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-20 text-center">
        <div class="inline-block footer-credits">
          <div class="text-xs mb-3" style="font-family: var(--font-pixel); color: rgba(255, 255, 255, 0.5);">
            BUILT WITH
          </div>
          <div class="text-xs" style="font-family: var(--font-mono); color: rgba(255, 255, 255, 0.7);">
            <p>Vue.js × Tailwind CSS</p>
            <p class="mt-2" style="color: rgba(255, 255, 255, 0.5);">© 2025 Abdalaziz Saierafi</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    submitSuccess.value = true
    submitMessage.value = 'Message sent successfully! I will contact you soon.'

    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    isSubmitting.value = false

    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }, 1500)
}
</script>

<style scoped>
/* Contact Card */
.contact-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  transition: all 0.3s ease;
}

.contact-card:hover {
  border-color: rgba(0, 240, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 240, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}

/* Contact Items */
.contact-item {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(0, 240, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.1);
}

/* Contact Icon */
.contact-icon {
  width: 48px;
  height: 48px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  border-color: var(--color-secondary);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
}

.contact-item:hover .contact-icon svg {
  color: var(--color-secondary) !important;
}

/* Contact Link */
.contact-link {
  font-family: var(--font-mono);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.2s ease;
}

.contact-link:hover {
  color: var(--color-secondary);
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
}

/* Social Buttons */
.social-btn {
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

.social-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-secondary);
  color: var(--color-secondary);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
  transform: translateY(-2px);
}

/* Form Label */
.form-label {
  font-family: var(--font-pixel);
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.6);
  display: block;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Form Input */
.form-input {
  font-family: var(--font-mono);
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-text);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-secondary);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
  font-family: var(--font-mono);
}

/* Footer Credits */
.footer-credits {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem;
  transition: all 0.3s ease;
}

.footer-credits:hover {
  border-color: rgba(0, 240, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.1);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
