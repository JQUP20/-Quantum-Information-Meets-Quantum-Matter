<template>
  <div id="app">
    <div class="app-container">
      <!-- Sidebar -->
      <div class="sidebar-container" :class="{ 'sidebar-open': sidebarOpen }">
        <Sidebar
          :table-of-contents="tableOfContents"
          :selected-chapter="selectedChapter"
          :selected-section="selectedSection"
          @chapter-selected="handleChapterSelect"
          @section-selected="handleSectionSelect"
        />
      </div>

      <!-- Main Content -->
      <div class="main-container">
        <div class="mobile-header">
          <button class="menu-toggle" @click="toggleSidebar">
            <span v-if="!sidebarOpen">☰</span>
            <span v-else>✕</span>
          </button>
          <h1>Quantum Information Research</h1>
        </div>

        <ContentView
          :selected-section="selectedSection"
          :selected-chapter="selectedChapter"
          @navigate-to-section="handleSectionSelect"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import ContentView from './components/ContentView.vue';
import { tableOfContents } from './data/tableOfContents.js';
import { contentData } from './data/contentData.js';

export default {
  name: 'App',
  components: {
    Sidebar,
    ContentView
  },
  data() {
    return {
      tableOfContents,
      contentData,
      selectedChapter: '',
      selectedSection: '',
      sidebarOpen: false
    };
  },
  computed: {
    currentContent() {
      if (!this.selectedChapter) {
        return null;
      }
      return this.contentData[this.selectedChapter] || {
        title: 'Content Not Available',
        content: '<p>Content for this chapter is being prepared.</p>'
      };
    },
    allChapters() {
      const chapters = [];
      this.tableOfContents.parts.forEach(part => {
        part.chapters.forEach(chapter => {
          chapters.push(chapter.id);
        });
      });
      return chapters;
    },
    currentChapterIndex() {
      return this.allChapters.indexOf(this.selectedChapter);
    },
    previousChapter() {
      if (this.currentChapterIndex > 0) {
        return this.allChapters[this.currentChapterIndex - 1];
      }
      return null;
    },
    nextChapter() {
      if (this.currentChapterIndex >= 0 && this.currentChapterIndex < this.allChapters.length - 1) {
        return this.allChapters[this.currentChapterIndex + 1];
      }
      return null;
    }
  },
  methods: {
    handleChapterSelect(chapterId) {
      this.selectedChapter = chapterId;
      this.selectedSection = '';
      // Close sidebar on mobile after selection
      if (window.innerWidth <= 768) {
        this.sidebarOpen = false;
      }
      // Scroll to top
      const mainContainer = document.querySelector('.main-container .content-view');
      if (mainContainer) {
        mainContainer.scrollTop = 0;
      }
    },
    handleSectionSelect(sectionId) {
      this.selectedSection = sectionId;
      // Close sidebar on mobile after selection
      if (window.innerWidth <= 768) {
        this.sidebarOpen = false;
      }
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.sidebar-container {
  width: 350px;
  flex-shrink: 0;
  height: 100%;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.main-container {
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.mobile-header {
  display: none;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-header h1 {
  font-size: 1.1rem;
  font-weight: 600;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .sidebar-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 280px;
    z-index: 1000;
    transform: translateX(-100%);
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  }

  .sidebar-container.sidebar-open {
    transform: translateX(0);
  }

  .mobile-header {
    display: flex;
  }

  .main-container {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .sidebar-container {
    width: 85%;
  }
}
</style>
