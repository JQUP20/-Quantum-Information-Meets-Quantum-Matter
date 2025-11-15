<template>
  <div class="section-content">
    <h1>6.8 Topological Degeneracy of Unoriented String Liquid</h1>

    <p>The ground state degeneracy of an unoriented string liquid depends on the topology of the underlying space. This topological degeneracy is a defining feature that distinguishes topologically ordered phases.</p>

    <h2>Degeneracy on Different Manifolds</h2>

    <div class="highlight-box">
      <h3>Topology-Dependent Ground States</h3>

      <p><strong>Sphere (genus g = 0):</strong></p>
      <div class="equation">
        d_{GSD}(S²) = 1
      </div>
      <ul>
        <li>Unique ground state</li>
        <li>All loops contractible</li>
        <li>No topological degrees of freedom</li>
      </ul>

      <p><strong>Torus (genus g = 1):</strong></p>
      <div class="equation">
        d_{GSD}(T²) = 𝒟²
      </div>
      <ul>
        <li>Two non-contractible cycles</li>
        <li>For Z₂ (toric code): 𝒟 = 2, d_{GSD} = 4</li>
        <li>Encodes logical qubits</li>
      </ul>

      <p><strong>Higher genus (g > 1):</strong></p>
      <div class="equation">
        d_{GSD}(Σ_g) = 𝒟^{2g}
      </div>
      <ul>
        <li>2g independent non-contractible cycles</li>
        <li>Exponential growth with genus</li>
      </ul>
    </div>

    <h2>Physical Origin</h2>

    <div class="info-box">
      <h3>Non-Contractible String Configurations</h3>

      <p><strong>For Z₂ string liquid on torus:</strong></p>
      <ul>
        <li>Can have strings winding around α-cycle (or not): 2 choices</li>
        <li>Can have strings winding around β-cycle (or not): 2 choices</li>
        <li>Total: 2 × 2 = 4 ground states</li>
      </ul>

      <p><strong>String operators distinguish states:</strong></p>
      <ul>
        <li>W_α: String wrapping α-cycle</li>
        <li>W_β: String wrapping β-cycle</li>
        <li>States: |n_α, n_β⟩ where n = 0, 1</li>
      </ul>

      <p><strong>Cannot be distinguished locally:</strong></p>
      <ul>
        <li>All states look identical in any finite region</li>
        <li>Only global measurements (Wilson loops) distinguish them</li>
      </ul>
    </div>

    <h2>Quantum Dimension and Degeneracy</h2>

    <div class="note-box">
      <h3>Relationship to Anyon Theory</h3>

      <p><strong>Total quantum dimension:</strong></p>
      <div class="equation">
        𝒟 = √(Σ_a d_a²)
      </div>
      <ul>
        <li>Sum over all anyon types</li>
        <li>d_a: Quantum dimension of anyon a</li>
      </ul>

      <p><strong>For toric code:</strong></p>
      <ul>
        <li>Anyons: {1, e, m, ε}</li>
        <li>All have d_a = 1</li>
        <li>𝒟 = √(1 + 1 + 1 + 1) = 2</li>
        <li>d_{GSD}(T²) = 4 = 𝒟²</li>
      </ul>

      <p><strong>Topological entanglement entropy:</strong></p>
      <div class="equation">
        γ = log 𝒟 = log 2
      </div>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key points:</strong></p>
      <ul>
        <li><strong>Topology-dependent:</strong> d_{GSD} depends on genus g</li>
        <li><strong>Formula:</strong> d_{GSD}(Σ_g) = 𝒟^{2g}</li>
        <li><strong>Z₂ toric code:</strong> 4-fold degeneracy on torus</li>
        <li><strong>Non-local:</strong> States distinguished by Wilson loops</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_8'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
