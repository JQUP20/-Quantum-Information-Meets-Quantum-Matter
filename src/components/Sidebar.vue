<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2>{{ tableOfContents.title }}</h2>
    </div>
    <div class="sidebar-content">
      <div v-for="part in tableOfContents.parts" :key="part.id" class="part">
        <div class="part-title">{{ part.title }}</div>
        <div v-for="chapter in part.chapters" :key="chapter.id" class="chapter">
          <div
            class="chapter-title"
            :class="{ active: selectedChapter === chapter.id }"
            @click="selectChapter(chapter.id)"
          >
            <span class="chapter-number">{{ chapter.number }}.</span>
            <span class="chapter-text">{{ chapter.title }}</span>
            <span class="page-number">p.{{ chapter.page }}</span>
          </div>

          <div v-if="expandedChapters.includes(chapter.id)" class="sections">
            <div
              v-for="section in chapter.sections"
              :key="section.id"
              class="section"
            >
              <div
                class="section-title"
                :class="{ active: selectedSection === section.id }"
                @click="selectSection(section.id)"
              >
                <span class="section-id">{{ section.id }}</span>
                <span class="section-text">{{ section.title }}</span>
                <span class="page-number">p.{{ section.page }}</span>
              </div>

              <div v-if="section.subsections" class="subsections">
                <div
                  v-for="subsection in section.subsections"
                  :key="subsection.id"
                  class="subsection"
                  :class="{ active: selectedSection === subsection.id }"
                  @click="selectSection(subsection.id)"
                >
                  <span class="subsection-id">{{ subsection.id }}</span>
                  <span class="subsection-text">{{ subsection.title }}</span>
                  <span class="page-number">p.{{ subsection.page }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    tableOfContents: {
      type: Object,
      required: true
    },
    selectedChapter: {
      type: String,
      default: ''
    },
    selectedSection: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      expandedChapters: []
    };
  },
  methods: {
    selectChapter(chapterId) {
      if (this.expandedChapters.includes(chapterId)) {
        this.expandedChapters = this.expandedChapters.filter(id => id !== chapterId);
      } else {
        this.expandedChapters.push(chapterId);
      }
      this.$emit('chapter-selected', chapterId);
    },
    selectSection(sectionId) {
      this.$emit('section-selected', sectionId);
    }
  },
  mounted() {
    // Auto-expand first chapter
    if (this.tableOfContents.parts.length > 0 &&
        this.tableOfContents.parts[0].chapters.length > 0) {
      this.expandedChapters.push(this.tableOfContents.parts[0].chapters[0].id);
    }
  }
};
</script>

<style scoped>
.sidebar {
  height: 100%;
  background: #f8f9fa;
  border-right: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sidebar-header {
  padding: 1.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-header h2 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;
}

.part {
  margin-bottom: 1rem;
}

.part-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #6c757d;
  padding: 0.75rem 1rem 0.5rem;
  letter-spacing: 0.5px;
}

.chapter {
  margin-bottom: 0.25rem;
}

.chapter-title {
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #2d3748;
  background: transparent;
}

.chapter-title:hover {
  background: #e9ecef;
  color: #667eea;
}

.chapter-title.active {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.chapter-number {
  font-weight: 700;
  margin-right: 0.5rem;
  min-width: 1.5rem;
}

.chapter-text {
  flex: 1;
}

.page-number {
  font-size: 0.75rem;
  color: #6c757d;
  margin-left: 0.5rem;
}

.chapter-title.active .page-number {
  color: rgba(255, 255, 255, 0.8);
}

.sections {
  background: #ffffff;
  border-left: 2px solid #667eea;
  margin-left: 1rem;
}

.section {
  margin-bottom: 0.1rem;
}

.section-title {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: flex-start;
  font-size: 0.85rem;
  color: #4a5568;
}

.section-title:hover {
  background: #f1f3f5;
  color: #667eea;
}

.section-title.active {
  background: #e6e9ff;
  color: #667eea;
  font-weight: 500;
}

.section-id {
  font-weight: 600;
  margin-right: 0.5rem;
  min-width: 2rem;
}

.section-text {
  flex: 1;
}

.subsections {
  margin-left: 1rem;
  border-left: 1px solid #e9ecef;
}

.subsection {
  padding: 0.4rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: flex-start;
  font-size: 0.8rem;
  color: #718096;
}

.subsection:hover {
  background: #f8f9fa;
  color: #667eea;
}

.subsection.active {
  background: #f0f2ff;
  color: #667eea;
  font-weight: 500;
}

.subsection-id {
  font-weight: 600;
  margin-right: 0.5rem;
  min-width: 2.5rem;
}

.subsection-text {
  flex: 1;
}

/* Scrollbar styling */
.sidebar-content::-webkit-scrollbar {
  width: 6px;
}

.sidebar-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.sidebar-content::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 3px;
}

.sidebar-content::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
