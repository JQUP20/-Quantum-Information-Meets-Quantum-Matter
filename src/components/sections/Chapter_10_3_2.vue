<template>
  <div class="section-content">
    <h1>10.3.2 Fermion Parity Symmetry Only</h1>

    <p>
      Fermion parity P = (-1)^F is always conserved. The classification of 1D fermionic SPT with parity alone is ℤ₈.
    </p>

    <h2>Kitaev Chain</h2>

    <div class="info-box">
      <h3>Prototypical Fermionic SPT</h3>
      <p>
        Hamiltonian:
      </p>
      <div class="equation">
        H = -μ ∑_j c^†_j c_j - w ∑_j (c^†_j c_{j+1} + h.c.) - Δ ∑_j (c_j c_{j+1} + h.c.)
      </div>
      <p>
        <strong>Topological phase (|μ| < 2w):</strong>
      </p>
      <ul>
        <li>Majorana zero modes at edges</li>
        <li>Ground state degeneracy: 2 (even/odd parity)</li>
        <li>Protected by fermion parity</li>
      </ul>
    </div>

    <h2>ℤ₈ Classification</h2>

    <div class="highlight-box">
      <h4>Eight Distinct Phases</h4>
      <p>
        Fermionic SPT with parity only: ℤ₈ classification
      </p>
      <p>
        Stacking 8 copies returns to trivial phase
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_3_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
