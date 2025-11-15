<template>
  <div class="section-content">
    <h1>6.4.2 Intuitive Pictures of Topological Order</h1>

    <p>Topological order can be understood through several complementary intuitive pictures: string-net condensation, quantum order from entanglement, and emergent gauge theory. Each perspective illuminates different aspects of this profound phenomenon.</p>

    <h2>String-Net Condensation</h2>

    <div class="highlight-box">
      <h3>Quantum Liquid of Fluctuating Strings</h3>

      <p><strong>Picture:</strong></p>
      <ul>
        <li>Space filled with fluctuating closed strings/loops</li>
        <li>Ground state = equal superposition of all string configurations</li>
        <li>Strings can split and merge (quantum fluctuations)</li>
      </ul>

      <p><strong>String condensation:</strong></p>
      <div class="equation">
        |GS⟩ = Σ_{closed strings} |string configuration⟩
      </div>

      <p><strong>Excitations = string endpoints:</strong></p>
      <ul>
        <li>Open strings have endpoints (anyons)</li>
        <li>Moving endpoints = moving anyons</li>
        <li>Braiding = linking of string worldlines</li>
      </ul>
    </div>

    <h2>Long-Range Entanglement</h2>

    <div class="info-box">
      <h3>Quantum Order Beyond Local</h3>

      <p><strong>Entanglement structure:</strong></p>
      <ul>
        <li>Cannot be created by finite-depth local circuits</li>
        <li>Topological entanglement entropy: S = α|∂A| - γ</li>
        <li>γ > 0 signals long-range entanglement</li>
      </ul>

      <p><strong>Comparison:</strong></p>
      <ul>
        <li><strong>SSB states:</strong> Short-range entanglement, γ = 0</li>
        <li><strong>Topological:</strong> Long-range entanglement, γ = log 𝒟</li>
        <li>Cannot transition between them via local unitary</li>
      </ul>
    </div>

    <h2>Emergent Gauge Theory</h2>

    <div class="note-box">
      <h3>Gauge Fields from Quantum Matter</h3>

      <p><strong>Picture:</strong></p>
      <ul>
        <li>Topological order ↔ emergent gauge theory</li>
        <li>Gauge field appears at low energies</li>
        <li>Not fundamental, but effective description</li>
      </ul>

      <p><strong>Example: Z₂ gauge theory (toric code):</strong></p>
      <ul>
        <li>Gauge field Z_link ∈ {+1, -1} on each edge</li>
        <li>Gauss law: ∏_{links at v} Z_link = +1</li>
        <li>e-particles = electric charges</li>
        <li>m-particles = magnetic fluxes</li>
      </ul>
    </div>

    <h2>Quantum Liquid Analogy</h2>

    <div class="highlight-box">
      <h3>Beyond Ordinary Liquids</h3>

      <p><strong>Ordinary quantum liquid (e.g., ⁴He superfluid):</strong></p>
      <ul>
        <li>Breaks U(1) symmetry</li>
        <li>Gapless Goldstone mode (sound)</li>
        <li>Phase coherence, order parameter ⟨ψ⟩ ≠ 0</li>
      </ul>

      <p><strong>Topological quantum liquid (e.g., FQHE):</strong></p>
      <ul>
        <li>No symmetry breaking</li>
        <li>Bulk gapped (all excitations massive)</li>
        <li>No local order parameter</li>
        <li>Chiral edge modes (gapless at boundary)</li>
      </ul>

      <p><strong>New kind of quantum matter:</strong></p>
      <ul>
        <li>Order defined by entanglement pattern</li>
        <li>Exotic quasiparticles (anyons)</li>
        <li>Topological protection</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Intuitive pictures:</strong></p>
      <ul>
        <li><strong>String-net:</strong> Condensed quantum liquid of fluctuating strings</li>
        <li><strong>Entanglement:</strong> Long-range quantum correlations, γ > 0</li>
        <li><strong>Gauge theory:</strong> Emergent gauge fields and charges</li>
        <li><strong>Quantum liquid:</strong> Gapped bulk, no local order, anyonic excitations</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_4_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
