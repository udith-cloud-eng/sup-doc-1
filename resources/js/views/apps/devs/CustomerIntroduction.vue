<template>
  <div class="introduction-container">
    <header class="header-section">
      <h1 class="main-heading">Transforming Manufacturing with Vexma Cloud</h1>
      <p class="subtitle">Your comprehensive solution for digital manufacturing excellence</p>
      <div class="accent-line"></div>
    </header>

    <div class="content-grid">
      <!-- Left panel with feature sections -->
      <div class="feature-sections">
        <transition-group name="fade" tag="div" class="sections-container">
          <details 
            v-for="(section, index) in sections" 
            :key="index" 
            class="topic-section" 
            :open="index === activeSection"
            @toggle="handleToggle(index, $event)"
          >
            <summary class="topic-title">
              <span class="section-icon" v-html="section.icon"></span>
              {{ section.title }}
            </summary>
            <div class="section-content">
              <ul class="topic-list">
                <li v-for="(item, itemIndex) in section.points" :key="itemIndex">
                  <span class="checkmark">✓</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
              <div class="tip-box" v-if="section.tip">
                <div class="tip-icon">💡</div>
                <div class="tip-content">{{ section.tip }}</div>
              </div>
            </div>
          </details>
        </transition-group>
      </div>

      <!-- Right panel with image carousel -->
      <div class="image-showcase">
        <div class="image-carousel">
          <transition-group name="slide" tag="div" class="carousel-container">
            <div 
              v-for="(image, index) in images" 
              :key="index" 
              v-show="index === activeImage" 
              class="carousel-slide"
            >
              <div 
                class="image-container" 
                ref="imageContainer"
                @mousemove="handleMouseMove($event, index)"
                @mouseout="resetZoom(index)"
                @click="toggleZoom($event, index)"
              >
                <img 
                  :src="image.src" 
                  :alt="image.alt" 
                  class="showcase-image"
                  :style="zoomStyles[index]"
                  ref="showcaseImages"
                />
              </div>
              <div class="image-caption">{{ image.caption }}</div>
            </div>
          </transition-group>

          <div class="carousel-controls">
            <div class="carousel-indicators">
              <span 
                v-for="(image, index) in images" 
                :key="index" 
                class="indicator-dot" 
                :class="{ active: index === activeImage }"
                @click="setActiveImage(index)"
              ></span>
            </div>
          </div>
          
          <!-- Improved navigation arrows - only for images -->
          <button class="floating-arrow floating-arrow-left" @click="previousImage()">
            <span class="arrow-icon">❮</span>
          </button>
          <button class="floating-arrow floating-arrow-right" @click="nextImage()">
            <span class="arrow-icon">❯</span>
          </button>
        </div>
      </div>
    </div>

    <div class="video-section">
      <div class="section-divider">
        <span class="divider-line"></span>
        <span class="divider-text">Watch How It Works</span>
        <span class="divider-line"></span>
      </div>
      
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/Ry90evDx45c?autoplay=0&controls=1"
          frameborder="0"
          allowfullscreen
          class="video-frame"
        ></iframe>
      </div>
    </div>

    <div class="cta-section">
      <h2 class="cta-title">Ready to Transform Your Manufacturing?</h2>
      <p class="cta-description">Join thousands of manufacturers who have optimized their operations with Vexma Cloud.</p>
      <button class="cta-button" onclick="window.open('https://vexmacloud.com/pricing', '_blank')">Start Free Trial</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, reactive } from "vue";

export default defineComponent({
  name: "Introduction",
  setup() {
    const activeSection = ref(0);
    const activeImage = ref(0);
    const zoomLevel = ref(2.5); // Zoom magnification level
    const imageContainer = ref(null);
    const showcaseImages = ref([]);
    
    // Track zoom state for each image
    const zoomedImages = reactive({});
    
    // Reactive objects for zoom styles
    const zoomStyles = reactive({});
    
    // Store mouse position for precise zooming
    const mousePosition = reactive({
      x: 0,
      y: 0
    });

    const sections = ref([
      {
        icon: '<img src="/images/rocket.gif" alt="Introduction" style="width: 40px; height: 40px;"/>',
        title: "Introduction: Transforming Manufacturing with Vexma Cloud",
        points: [
          "Embrace digital transformation in manufacturing.",
          "Modernize operations with our cloud-based SaaS platform.",
          "Consolidate production, quality control, inventory tracking, and customer engagement in one intuitive solution.",
          "Leverage automation, real-time analytics, and scalability to optimize workflows and reduce costs.",
          "Maintain the highest standards of quality and efficiency."
        ],
        tip: "Start your journey to manufacturing excellence by exploring our comprehensive platform features."
      },
      {
        icon: '<img src="/images/efficiency.gif" alt="Operations" style="width: 40px; height: 40px;"/>',
        title: "Unifying Your Operations for Enhanced Efficiency",
        points: [
          "Simplify complex processes by uniting operational components.",
          "Access all aspects of your business from a centralized dashboard.",
          "Improve communication and collaboration across departments.",
          "Achieve a smoother production cycle that adapts to market changes."
        ],
        tip: "The unified approach can reduce operational costs by up to 30% while increasing productivity."
      },
      {
        icon: '<img src="/images/laptop.gif" alt="Digital Transformation" style="width: 40px; height: 40px;"/>',
        title: "Driving Digital Transformation in Manufacturing",
        points: [
          "Simplify day-to-day operations with comprehensive reporting and analytics.",
          "Gain immediate access to performance metrics for informed decisions.",
          "Automate routine tasks to free up resources for strategic growth.",
          "Transform production management to stay competitive in an evolving market."
        ],
        tip: "Companies that embrace digital transformation see an average of 40% improvement in operational efficiency."
      },
      {
        icon: '<img src="/images/award.gif" alt="icon" style="width: 40px; height: 40px;"/>',
        title: "Why Choose Vexma Cloud?",
        points: [
          "Invest in a holistic approach to manufacturing excellence.",
          "Unify operations to drive long-term success and continuous improvement.",
          "Empower your business with integrated workflows and innovation.",
          "Leverage industry-specific templates and best practices for immediate results."
        ],
        tip: "Join over a thousand manufacturing companies that have revolutionized their operations with Vexma Cloud."
      }
    ]);

    const images = ref([
      {
        src: "/images/vexmacloudintro1.webp",
        alt: "Vexma Cloud Dashboard Overview",
        caption: "Comprehensive dashboard providing real-time insights into your manufacturing operations"
      },
      {
        src: "/images/productionintro.webp",
        alt: "Production Planning Interface",
        caption: "Intuitive production planning tools for optimized workflow management"
      },
      {
        src: "/images/analyticsdashboardmockup.webp",
        alt: "Analytics and Reporting",
        caption: "Powerful analytics to track performance metrics and identify improvement opportunities"
      }
    ]);

    // Initialize zoom styles for each image
    const initZoomStyles = () => {
      images.value.forEach((_, index) => {
        zoomStyles[index] = {
          transformOrigin: '50% 50%',
          transform: 'scale(1)',
          transition: 'transform 0.3s ease-out'
        };
        zoomedImages[index] = false;
      });
    };

    // Toggle zoom on click with precise location
    const toggleZoom = (event, imageIndex) => {
      zoomedImages[imageIndex] = !zoomedImages[imageIndex];
      
      if (zoomedImages[imageIndex]) {
        // Get relative position within the image container
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        
        // Zoom in at specific point
        zoomStyles[imageIndex] = {
          transformOrigin: `${x}% ${y}%`,
          transform: `scale(${zoomLevel.value})`,
          transition: 'transform 0.3s ease-out'
        };
      } else {
        // Zoom out
        zoomStyles[imageIndex] = {
          transformOrigin: '50% 50%',
          transform: 'scale(1)',
          transition: 'transform 0.3s ease-out'
        };
      }
    };
    
    // Handle mouse movement for hover effect (preparation for magnifying glass)
    const handleMouseMove = (event, imageIndex) => {
      if (!zoomedImages[imageIndex]) return;
      
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      
      // Update transform origin based on mouse position
      zoomStyles[imageIndex].transformOrigin = `${x}% ${y}%`;
    };
    
    // Reset zoom for a specific image
    const resetZoom = (imageIndex) => {
      if (!zoomedImages[imageIndex]) return;
      
      zoomedImages[imageIndex] = false;
      zoomStyles[imageIndex] = {
        transformOrigin: '50% 50%',
        transform: 'scale(1)',
        transition: 'transform 0.3s ease-out'
      };
    };

    const handleToggle = (index, event) => {
      // If the detail is being opened, update activeSection
      if (event.target.open) {
        activeSection.value = index;
      }
    };

    const previousSection = () => {
      if (activeSection.value > 0) {
        activeSection.value--;
      } else {
        activeSection.value = sections.value.length - 1;
      }
    };

    const nextSection = () => {
      if (activeSection.value < sections.value.length - 1) {
        activeSection.value++;
      } else {
        activeSection.value = 0;
      }
    };

    const previousImage = () => {
      // Reset zoom on current image before changing
      resetZoomOnCurrentImage();
      activeImage.value = (activeImage.value - 1 + images.value.length) % images.value.length;
    };

    const nextImage = () => {
      // Reset zoom on current image before changing
      resetZoomOnCurrentImage();
      activeImage.value = (activeImage.value + 1) % images.value.length;
    };

    const setActiveImage = (index) => {
      // Reset zoom on current image before changing
      resetZoomOnCurrentImage();
      activeImage.value = index;
    };

    // Reset zoom only on the current active image
    const resetZoomOnCurrentImage = () => {
      const currentIndex = activeImage.value;
      zoomedImages[currentIndex] = false;
      zoomStyles[currentIndex] = {
        transformOrigin: '50% 50%',
        transform: 'scale(1)',
        transition: 'transform 0.3s ease-out'
      };
    };
    
    // Add keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        previousImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };
    
    onMounted(() => {
      initZoomStyles();
      window.addEventListener('keydown', handleKeyDown);
    });
    
    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleKeyDown);
    });

    return {
      sections,
      images,
      activeSection,
      activeImage,
      handleToggle,
      previousSection,
      nextSection,
      previousImage,
      nextImage,
      setActiveImage,
      zoomStyles,
      toggleZoom,
      handleMouseMove,
      resetZoom,
      imageContainer,
      showcaseImages
    };
  }
});
</script>

<style scoped>
:root {
  --primary-color: #2667FF;
  --secondary-color: #3498db;
  --accent-color: #3498db;
  --background-color: #f5f6fa;
  --text-color: #333;
  --light-gray: #ecf0f1;
  --dark-gray: #7f8c8d;
}

/* Main Container */
.introduction-container {
  max-width: 1200px;
  margin-left: 90px;
  padding: 30px;
  background: var(--background-color);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', system-ui, sans-serif;
  color: var(--text-color);
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.main-heading {
  font-size: 32px;
  color: var(--primary-color);
  margin: 0 0 10px;
  font-weight: 700;
}

.subtitle {
  font-size: 18px;
  color: var(--dark-gray);
  margin-bottom: 15px;
}

.accent-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(to right, #3498db, #2667FF);
  margin: 0 auto;
  border-radius: 2px;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 50px;
  position: relative;
}

/* Feature Sections */
.feature-sections {
  display: flex;
  flex-direction: column;
}

.sections-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.topic-section {
  background: white;
  border-radius: 12px;
  margin-bottom: 15px;
  padding: 5px 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
}

.topic-section[open] {
  background: #f9fafb;
  border-left: 4px solid var(--primary-color);
}

.topic-title {
  font-size: 18px;
  color: var(--primary-color);
  font-weight: 600;
  padding: 15px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
}

.section-icon {
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.topic-title::-webkit-details-marker {
  display: none;
}

.section-content {
  padding: 0 0 15px 30px;
}

.topic-list {
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
}

.topic-list li {
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
  font-size: 15px;
  line-height: 1.5;
  transition: transform 0.2s ease;
}

.topic-list li:hover {
  transform: translateX(5px);
}

.checkmark {
  color: var(--accent-color);
  font-weight: bold;
  margin-right: 10px;
  font-size: 18px;
  flex-shrink: 0;
}

/* Tip Box */
.tip-box {
  display: flex;
  background-color: rgba(52, 152, 219, 0.1);
  border-left: 4px solid var(--accent-color);
  padding: 12px;
  border-radius: 8px;
  margin-top: 15px;
}

.tip-icon {
  font-size: 20px;
  margin-right: 12px;
  flex-shrink: 0;
}

.tip-content {
  font-size: 14px;
  color: #2c3e50;
  line-height: 1.5;
}

/* Image Showcase */
.image-showcase {
  display: flex;
  flex-direction: column;
}

.image-carousel {
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  background: white;
  position: relative;
}

.carousel-container {
  height: calc(100% - 60px);
  position: relative;
}

.carousel-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.image-container {
  flex: 1;
  overflow: hidden;
  position: relative;
  cursor: zoom-in;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.image-container:hover {
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%232667FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>'), auto;
}

.showcase-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.image-caption {
  padding: 15px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-color);
  font-size: 14px;
  text-align: center;
  border-top: 1px solid var(--light-gray);
}

.carousel-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--light-gray);
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator-dot.active {
  background-color: var(--primary-color);
  transform: scale(1.3);
}

/* Floating arrows for navigation */
.floating-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: 2px solid var(--primary-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  color: var(--primary-color);
  z-index: 10;
  transition: all 0.3s ease;
}

.floating-arrow:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.floating-arrow-left {
  left: 10px;
}

.floating-arrow-right {
  right: 10px;
}

.arrow-icon {
  line-height: 0;
}

/* Video Section */
.video-section {
  
  margin-top: 60px;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}

.section-divider {
  display: flex;
  align-items: center;
  margin: 30px 0;
}

.divider-line {
  flex-grow: 1;
  height: 1px;
  background-color: var(--light-gray);
}

.divider-text {
  padding: 0 20px;
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 750px;
  aspect-ratio: 16 / 9;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(0);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.video-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border:none
}

/* CTA Section */
.cta-section {
  text-align: center;
  background: linear-gradient(135deg, rgba(38, 103, 255, 0.1), rgba(52, 152, 219, 0.1));
  border-radius: 16px;
  padding: 40px;
  margin-top: 40px;
  box-shadow: 0 8px 30px rgba(38, 103, 255, 0.08);
}

.cta-title {
  font-size: 24px;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.cta-description {
  font-size: 16px;
  color: var(--dark-gray);
  margin-bottom: 25px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background: linear-gradient(135deg, #2667FF, #3498db);
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(38, 103, 255, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(38, 103, 255, 0.4);
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .introduction-container {
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
  }
}

@media (max-width: 992px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .image-showcase {
    order: -1;
    margin-bottom: 30px;
  }
  
  .video-container {
    padding-bottom: 56.25%;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .main-heading {
    font-size: 28px;
  }
  
  .topic-title {
    font-size: 16px;
  }
  
  .topic-list li {
    font-size: 14px;
  }
  
  .cta-section {
    padding: 30px 20px;
  }
  
  .cta-title {
    font-size: 22px;
  }
  
  .cta-description {
    font-size: 14px;
  }
  
  .floating-arrow {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
}
</style>