# Quantum Information Meets Quantum Matter - Research System

An interactive web-based research system for exploring quantum information theory and quantum matter physics.

## Features

- **Interactive Navigation**: Browse through chapters and sections with an intuitive sidebar
- **Rich Content Display**: Well-formatted content with equations, lists, and structured information
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Chapter Navigation**: Easy navigation between chapters with previous/next buttons
- **Modern UI**: Beautiful gradient design with smooth transitions

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── sections/            # Individual section components
│   │   │   ├── Chapter_1_1.vue  # Section 1.1 Introduction
│   │   │   ├── Chapter_1_2_1.vue # Section 1.2.1
│   │   │   └── ...              # Other sections
│   │   ├── Sidebar.vue          # Left sidebar navigation
│   │   └── ContentView.vue      # Main content display area
│   ├── data/
│   │   ├── tableOfContents.js   # Complete book structure
│   │   ├── sectionComponents.js # Section-to-component mapping
│   │   └── contentData.js       # Legacy content storage
│   ├── styles/
│   │   └── section-styles.css   # Common styles for sections
│   ├── App.vue                  # Main application component
│   └── main.js                  # Application entry point
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Project dependencies
```

## Architecture

### Component-Based Section System

Each section is implemented as a separate Vue component in `src/components/sections/`:
- `Chapter_1_1.vue` → Section 1.1 Introduction
- `Chapter_1_2_1.vue` → Section 1.2.1 Joint Probability
- `Chapter_1_3_1.vue` → Section 1.3.1 Pure and Mixed Quantum States
- etc.

Benefits:
- **Modularity**: Each section is independent and self-contained
- **Maintainability**: Easy to update individual sections
- **Scalability**: Simple to add new sections
- **Performance**: Lazy loading with dynamic imports

### Navigation Flow

1. User clicks a section in the sidebar
2. `App.vue` receives the section ID (e.g., "1.2.1")
3. `ContentView.vue` dynamically loads the corresponding component
4. Section component renders with shared styles

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Content Structure

The system covers 11 chapters across 5 main parts:

### Part I: Basic Concepts in Quantum Information Theory
- Chapter 1: Correlation and Entanglement
- Chapter 2: Evolution of Quantum Systems
- Chapter 3: Quantum Error-Correcting Codes

### Part II: Local Hamiltonians, Ground States, and Many-body Entanglement
- Chapter 4: Local Hamiltonians and Ground States
- Chapter 5: Gapped Quantum Systems and Entanglement Area Law

### Part III: Topological Order and Long-Range Entanglement
- Chapter 6: Introduction to Topological Order
- Chapter 7: Local Transformations and Long-Range Entanglement

### Part IV: Gapped Topological Phases and Tensor Networks
- Chapter 8: Matrix Product State and 1D Gapped Phases
- Chapter 9: Tensor Product States and 2D Gapped Phases
- Chapter 10: Symmetry Protected Topological Phases

### Part V: Outlook
- Chapter 11: A Unification of Information and Matter

## Customization

### Adding a New Section Component

To add content for a new section:

1. **Create the Vue component** in `src/components/sections/`:

```vue
<!-- src/components/sections/Chapter_X_Y_Z.vue -->
<template>
  <div class="section-content">
    <h1>X.Y.Z Section Title</h1>

    <h2>Subsection</h2>
    <p>Your content here...</p>

    <div class="equation">
      E = mc²
    </div>

    <div class="highlight-box">
      <h3>Key Concept</h3>
      <p>Important information...</p>
    </div>

    <div class="info-box">
      <p>Additional details...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_X_Y_Z'
};
</script>

<style scoped src="../../../styles/section-styles.css"></style>
```

2. **Register the component** in `src/data/sectionComponents.js`:

```javascript
export const sectionComponentMap = {
  // ... existing mappings
  'X.Y.Z': () => import('../components/sections/Chapter_X_Y_Z.vue'),
};

// Add title mapping
export function getSectionTitle(sectionId) {
  const titles = {
    // ... existing titles
    'X.Y.Z': 'X.Y.Z Your Section Title',
  };
  return titles[sectionId] || sectionId;
}
```

3. **Add to table of contents** in `src/data/tableOfContents.js` (if needed)

### Available Styling Classes

The `section-styles.css` provides these classes:
- `.highlight-box` - Purple gradient background for key concepts
- `.info-box` - Blue background for additional information
- `.note-box` - Orange background for important notes
- `.comparison-box` - Border box for comparisons
- `.preview-box` - Teal background for previews
- `.equation` - Formatted equation display
- `.probability-table` - Styled probability tables

### Modifying the Table of Contents

Edit `src/data/tableOfContents.js` to modify the structure, add new chapters, or reorganize sections.

### Styling

- Sidebar styles: `src/components/Sidebar.vue` (in `<style scoped>`)
- Content styles: `src/components/ContentView.vue` (in `<style scoped>`)
- Global styles: `src/App.vue` (in `<style>`)

## Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **Vite**: Next-generation frontend tooling
- **CSS3**: Modern styling with gradients and transitions

## Features in Detail

### Sidebar Navigation
- Hierarchical display of parts, chapters, and sections
- Expandable/collapsible chapters
- Active state highlighting
- Page number references

### Content Display
- Welcome screen with topic overview
- Chapter navigation breadcrumb
- Formatted equations and mathematical content
- Previous/Next chapter navigation
- Responsive layout

### Mobile Support
- Hamburger menu for mobile devices
- Touch-friendly navigation
- Optimized layout for small screens

## Future Enhancements

Potential features to add:
- Search functionality
- Bookmarks and favorites
- Note-taking capability
- LaTeX equation rendering with KaTeX or MathJax
- Dark mode
- Print-friendly view
- PDF export
- Progress tracking

## License

This project is created for educational and research purposes.

## Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For questions or issues, please open an issue in the repository.
