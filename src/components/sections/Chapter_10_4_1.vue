<template>
  <div class="section-content">
    <h1>10.4.1 2D AKLT Model</h1>

    <p>
      The 2D AKLT model generalizes the 1D construction to a square lattice with spin-2 particles.
    </p>

    <h2>Construction</h2>

    <div class="info-box">
      <h3>Hamiltonian</h3>
      <p>
        Parent Hamiltonian for 2D AKLT state with spin-2 on vertices:
      </p>
      <div class="equation">
        H = ∑_{⟨ij⟩} P_{S>2}^{ij}
      </div>
      <p>
        where P_{S>2} projects onto total spin > 2 on bond.
      </p>
    </div>

    <h2>Edge Theory</h2>

    <div class="highlight-box">
      <h4>Gapless 1D Edge</h4>
      <p>
        The edge hosts a 1D gapless spin-1/2 chain described by WZNW SU(2)_1 CFT.
      </p>
      <ul>
        <li>Protected by SO(3) symmetry</li>
        <li>Cannot be gapped without breaking symmetry</li>
        <li>Central charge c = 1</li>
      </ul>
    </div>

    <h2>Properties</h2>

    <div class="info-box">
      <ul>
        <li>Unique bulk ground state (on closed manifold)</li>
        <li>Exponentially decaying correlations in bulk</li>
        <li>Gapless chiral edge modes</li>
        <li>SPT protected by SO(3) rotation symmetry</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_4_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
