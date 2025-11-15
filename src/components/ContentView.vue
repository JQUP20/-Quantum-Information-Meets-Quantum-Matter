<template>
  <div class="content-view">
    <div v-if="selectedSection" class="content-wrapper">
      <div class="content-header">
        <div class="breadcrumb">
          <span class="breadcrumb-home">Quantum Information Meets Quantum Matter</span>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">{{ sectionTitle }}</span>
        </div>
      </div>

      <div class="content-body">
        <component :is="sectionComponent" v-if="sectionComponent" />
        <div v-else class="loading">Loading section...</div>
      </div>
    </div>

    <div v-else class="welcome-screen">
      <div class="welcome-content">
        <h1>Quantum Information Meets Quantum Matter</h1>
        <p class="subtitle">An Interactive Research System</p>

        <div class="welcome-description">
          <p>Welcome to the Quantum Information research system. This interactive platform provides a comprehensive exploration of the intersection between quantum information theory and quantum matter physics.</p>

          <div class="topics">
            <h3>Topics Covered:</h3>
            <div class="topic-grid">
              <div class="topic-card">
                <div class="topic-icon">📊</div>
                <h4>Quantum Entanglement</h4>
                <p>Correlations, Bell inequalities, and many-body systems</p>
              </div>
              <div class="topic-card">
                <div class="topic-icon">⚡</div>
                <h4>Quantum Evolution</h4>
                <p>Unitary dynamics, quantum circuits, and open systems</p>
              </div>
              <div class="topic-card">
                <div class="topic-icon">🔒</div>
                <h4>Error Correction</h4>
                <p>Stabilizer codes, toric code, and topological protection</p>
              </div>
              <div class="topic-card">
                <div class="topic-icon">🌀</div>
                <h4>Topological Order</h4>
                <p>Beyond symmetry breaking, anyons, and long-range entanglement</p>
              </div>
              <div class="topic-card">
                <div class="topic-icon">🔗</div>
                <h4>Tensor Networks</h4>
                <p>MPS, PEPS, and efficient quantum state representation</p>
              </div>
              <div class="topic-card">
                <div class="topic-icon">🛡️</div>
                <h4>SPT Phases</h4>
                <p>Symmetry-protected topology and group cohomology</p>
              </div>
            </div>
          </div>

          <div class="cta">
            <p><strong>Select a chapter from the sidebar to begin your exploration.</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sectionComponentMap, getSectionTitle } from '../data/sectionComponents.js';
import { defineAsyncComponent } from 'vue';

export default {
  name: 'ContentView',
  props: {
    selectedSection: {
      type: String,
      default: ''
    },
    selectedChapter: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sectionComponent: null
    };
  },
  computed: {
    sectionTitle() {
      return getSectionTitle(this.selectedSection);
    }
  },
  watch: {
    selectedSection: {
      immediate: true,
      handler(newSection) {
        if (newSection && sectionComponentMap[newSection]) {
          this.sectionComponent = defineAsyncComponent(sectionComponentMap[newSection]);
        } else {
          this.sectionComponent = null;
        }
        // Scroll to top when section changes
        this.$nextTick(() => {
          const contentView = this.$el;
          if (contentView) {
            contentView.scrollTop = 0;
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.content-view {
  height: 100%;
  overflow-y: auto;
  background: #ffffff;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.content-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
}

.breadcrumb {
  font-size: 0.85rem;
  color: #6c757d;
}

.breadcrumb-home {
  color: #667eea;
  font-weight: 500;
}

.breadcrumb-separator {
  margin: 0 0.5rem;
}

.breadcrumb-current {
  color: #2d3748;
  font-weight: 600;
}

.content-body {
  line-height: 1.8;
  color: #2d3748;
  font-size: 1rem;
}

.content-body :deep(h1) {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 2rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #667eea;
}

.content-body :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 2rem 0 1rem;
  padding-top: 1rem;
}

.content-body :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #4a5568;
  margin: 1.5rem 0 0.75rem;
}

.content-body :deep(p) {
  margin: 1rem 0;
  text-align: justify;
}

.content-body :deep(ul) {
  margin: 1rem 0;
  padding-left: 2rem;
}

.content-body :deep(li) {
  margin: 0.5rem 0;
}

.content-body :deep(.equation) {
  background: #f8f9fa;
  border-left: 4px solid #667eea;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  font-family: 'Courier New', monospace;
  font-size: 1.05rem;
  overflow-x: auto;
  border-radius: 0 4px 4px 0;
}

.content-body :deep(strong) {
  color: #667eea;
  font-weight: 600;
}

.content-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e9ecef;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.nav-arrow {
  font-size: 1.2rem;
}

.prev-btn {
  margin-right: auto;
}

.next-btn {
  margin-left: auto;
}

/* Welcome Screen */
.welcome-screen {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
}

.welcome-content {
  max-width: 1000px;
  text-align: center;
}

.welcome-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.welcome-description {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
}

.welcome-description > p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.topics h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.topic-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.topic-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.topic-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.topic-card h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.topic-card p {
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.5;
}

.cta {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 1.1rem;
}

/* Scrollbar styling */
.content-view::-webkit-scrollbar {
  width: 8px;
}

.content-view::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.content-view::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 4px;
}

.content-view::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

/* Responsive */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 1rem;
  }

  .welcome-content h1 {
    font-size: 1.75rem;
  }

  .topic-grid {
    grid-template-columns: 1fr;
  }
}
</style>
