<template>
  <div class="section-content">
    <h1>10.5.2 SPT Model from Group Cohomology</h1>

    <p>
      Every cohomology class has an exactly solvable representative: the fixed-point model.
    </p>

    <h2>Construction Procedure</h2>

    <div class="info-box">
      <h3>Building Fixed-Point Models</h3>
      <ol>
        <li>Start with lattice (1D chain, 2D square, etc.)</li>
        <li>Assign group element to each bond/plaquette</li>
        <li>Apply cocycle phase factors ω(g₁,g₂,...)</li>
        <li>Sum over all configurations with equal weight</li>
      </ol>
      <p>
        Result: Exactly solvable SPT state for cocycle ω
      </p>
    </div>

    <h2>Example: 1D ℤ₂ SPT</h2>

    <div class="highlight-box">
      <h4>Cluster State Construction</h4>
      <p>
        For non-trivial ℤ₂ cocycle:
      </p>
      <div class="equation">
        |ψ⟩ = ∏_i CZ_{i,i+1} |+⟩^{⊗N}
      </div>
      <p>
        This realizes the Haldane-like ℤ₂ SPT phase.
      </p>
    </div>

    <h2>Bulk-Boundary Correspondence</h2>

    <div class="info-box">
      <p>
        <strong>General principle:</strong>
      </p>
      <ul>
        <li>Bulk SPT phase ↔ H^{d+1}(G,U(1)) element</li>
        <li>Boundary theory ↔ Anomalous G-symmetric theory in d dimensions</li>
        <li>Anomaly matches bulk cohomology class</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_5_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
