<template>
  <div class="section-content">
    <h1>1.1 Introduction</h1>

    <h2>The Quantum Entanglement Phenomenon</h2>
    <p>Quantum entanglement is arguably the most striking and counterintuitive feature of quantum mechanics. It represents a type of correlation between quantum systems that has no classical analog and fundamentally distinguishes quantum mechanics from classical physics.</p>

    <div class="highlight-box">
      <h3>What is Entanglement?</h3>
      <p>When two or more quantum systems become entangled, their quantum states cannot be described independently of each other, even when the systems are separated by arbitrarily large distances. Measuring one system instantaneously affects the description of the other, a phenomenon Einstein famously called "spooky action at a distance."</p>
    </div>

    <h2>Historical Context</h2>
    <p>The concept of entanglement emerged in 1935 through the famous EPR (Einstein-Podolsky-Rosen) paradox. Einstein and his colleagues argued that quantum mechanics must be incomplete because it allows for these seemingly non-local correlations. However, subsequent theoretical work by John Bell in 1964 and experimental tests beginning in the 1970s have confirmed that entanglement is a real physical phenomenon.</p>

    <h2>From Paradox to Resource</h2>
    <p>What was once considered a philosophical puzzle has evolved into a practical resource. The study of entanglement has transformed from a purely theoretical curiosity into a central pillar of quantum information science. Today, entanglement plays crucial roles in:</p>

    <ul>
      <li><strong>Quantum Computation:</strong> Entanglement is essential for quantum algorithms to achieve speedup over classical algorithms. The power of quantum computers fundamentally relies on creating and manipulating entangled states.</li>

      <li><strong>Quantum Communication:</strong> Protocols like quantum teleportation and quantum key distribution use entanglement to achieve tasks impossible with classical communication.</li>

      <li><strong>Quantum Cryptography:</strong> Entanglement-based quantum key distribution (QKD) protocols provide unconditional security guaranteed by the laws of physics rather than computational complexity.</li>

      <li><strong>Many-Body Quantum Systems:</strong> Understanding the entanglement structure of ground states helps classify quantum phases of matter and understand phase transitions.</li>

      <li><strong>Quantum Metrology:</strong> Entangled states can achieve measurement precision beyond the standard quantum limit.</li>
    </ul>

    <h2>Chapter Organization</h2>
    <p>This chapter is organized to build understanding progressively:</p>

    <div class="info-box">
      <h4>Structure of Chapter 1:</h4>
      <ol>
        <li><strong>Classical Correlations (Sections 1.2.1-1.2.3):</strong> We begin by reviewing correlations in classical probability theory, establishing the baseline against which quantum correlations can be understood.</li>

        <li><strong>Quantum Entanglement (Sections 1.3.1-1.3.6):</strong> We then develop the quantum framework, introducing density matrices, composite systems, and the mathematical tools needed to characterize entanglement.</li>

        <li><strong>Many-Body Entanglement (Sections 1.4.1-1.4.3):</strong> Finally, we extend these concepts to many-body systems, where entanglement takes on even richer structures.</li>
      </ol>
    </div>

    <h2>Key Questions Addressed</h2>
    <p>Throughout this chapter, we address fundamental questions:</p>
    <ul>
      <li>How do quantum correlations differ from classical correlations?</li>
      <li>How can we mathematically characterize and quantify entanglement?</li>
      <li>What experimental signatures distinguish entangled from separable states?</li>
      <li>How does entanglement manifest in many-body quantum systems?</li>
      <li>What role does entanglement play in quantum phases of matter?</li>
    </ul>

    <div class="note-box">
      <p><strong>Note:</strong> Understanding entanglement is not merely an academic exercise—it is essential for grasping modern developments in quantum information science and condensed matter physics. The concepts developed here will recur throughout the remaining chapters as we explore topological order, quantum error correction, and the deep connections between information and matter.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_1_1'
};
</script>

<style scoped>
.section-content {
  line-height: 1.8;
  color: #2d3748;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 2rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #667eea;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 2rem 0 1rem;
  padding-top: 1rem;
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #4a5568;
  margin: 1.5rem 0 0.75rem;
}

h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4a5568;
  margin: 1rem 0 0.5rem;
}

p {
  margin: 1rem 0;
  text-align: justify;
}

ul, ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

li {
  margin: 0.5rem 0;
}

.highlight-box {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-left: 4px solid #667eea;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}

.info-box {
  background: #f0f4ff;
  border-left: 4px solid #4299e1;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}

.note-box {
  background: #fffaf0;
  border-left: 4px solid #ed8936;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}
</style>
