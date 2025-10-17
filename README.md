# Abdalaziz Saierafi - Portfolio Website

A modern, professional portfolio website built with Vue.js and Tailwind CSS, showcasing my work as a Software Developer, AI Specialist, and Tech Leader.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic filtering
- **Performance Optimized**: Fast loading times and optimized animations
- **SEO Friendly**: Semantic HTML and proper meta tags

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features

## Project Structure

```
proftilio/
├── public/
│   └── images/           # Image assets
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── main.css  # Tailwind styles and custom CSS
│   ├── components/
│   │   ├── NavigationBar.vue
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ExperienceSection.vue
│   │   └── ContactSection.vue
│   ├── App.vue           # Main application component
│   └── main.js           # Application entry point
├── index.html            # HTML template
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── vite.config.js        # Vite configuration
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd proftilio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Required Images

To complete the portfolio, add the following images to the `public/images/` directory:

### Hero Section
- **profile-picture.jpg** (400x400px) - Your professional portrait photo
  - Should be a high-quality headshot with good lighting
  - Professional attire recommended
  - Neutral or tech-themed background

### About Section
- **about-workspace.jpg** (800x600px) - Your workspace or coding setup
  - Clean desk with laptop/monitors
  - Good lighting and professional appearance
  - Can show some tech equipment or books

### Projects Section
1. **rtiraq-preview.jpg** (800x600px) - Screenshot of RTiraq.com homepage
2. **babycare-mockup.png** (800x1200px) - Phone mockup showing Baby Care app
3. **mouhamina-preview.jpg** (800x600px) - Screenshot of Mouhamina.com
4. **pharmagate-preview.jpg** (800x600px) - Screenshot of Pharmagate.sy
5. **cotravel-preview.jpg** (800x600px) - Screenshot of Co-Travel UAE
6. **llm-project.jpg** (800x600px) - Visual representing AI/ML work
   - Can be diagram, code snippet, or neural network visualization
7. **financial-system.jpg** (800x600px) - Screenshot or mockup of the system
8. **its-preview.jpg** (800x600px) - Screenshot of ITS website

### Optional
- **favicon.svg** - Small logo or initials (AS) for browser tab

## Image Guidelines

- **Format**: JPG for photos, PNG for screenshots with transparency
- **Quality**: High resolution, compressed for web
- **Size**: Keep file sizes under 500KB each
- **Aspect Ratio**: Maintain consistent ratios for better layout

## Color Scheme

- **Primary**: #0F172A (Dark Blue/Black)
- **Secondary**: #14B8A6 (Teal)
- **Accent**: #F59E0B (Amber)
- **Background**: #F8FAFC (Light Gray)
- **Text**: #334155 (Dark Gray)

## Customization

### Update Personal Information

Edit the content in the respective component files:

- **Hero Section**: `src/components/HeroSection.vue`
- **About Section**: `src/components/AboutSection.vue`
- **Projects**: `src/components/ProjectsSection.vue`
- **Experience**: `src/components/ExperienceSection.vue`
- **Contact**: `src/components/ContactSection.vue`

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
      accent: '#YOUR_COLOR',
    }
  }
}
```

### Add New Sections

1. Create a new component in `src/components/`
2. Import it in `src/App.vue`
3. Add the component to the template
4. Update navigation links if needed

## Contact Form Setup

The contact form currently has a simulated submission. To connect it to a backend:

1. Create an API endpoint for form submissions
2. Update the `handleSubmit` function in `ContactSection.vue`
3. Replace the setTimeout with an actual API call:

```javascript
const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    // Handle response
  } catch (error) {
    // Handle error
  }
  isSubmitting.value = false
}
```

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Abdalaziz Saierafi**
- Email: abdalazizsairfi@gmail.com
- Phone: (+963) 988122563
- Location: Damascus, Syria
- LinkedIn: [linkedin.com/in/abdalaziz-saierafi](https://www.linkedin.com/in/abdalaziz-saierafi)
- Website: [ITS - International Tech Services](https://its-sy.com)

---

Built with Vue.js & Tailwind CSS
