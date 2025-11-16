<template>
  <div class="section-content">
    <h1>10.3.1 Jordan-Wigner Transformation</h1>

    <p>
      The Jordan-Wigner transformation maps spins to fermions, revealing deep connections between bosonic and fermionic SPT phases.
    </p>

    <h2>The Transformation</h2>

    <div class="info-box">
      <h3>Mapping Spins to Fermions</h3>
      <p>
        For a 1D chain of spins:
      </p>
      <div class="equation">
        c_j = (∏_{i<j} σ^z_i) σ^-_j
      </div>
      <p>
        where σ^- = (σ^x - iσ^y)/2 is the lowering operator.
      </p>
      <p>
        <strong>Inverse:</strong>
      </p>
      <div class="equation">
        σ^+_j = (∏_{i<j} (1-2c^†_i c_i)) c^†_j
      </div>
    </div>

    <h2>Applications</h2>

    <div class="highlight-box">
      <h4>Connecting Spin and Fermion Models</h4>
      <ul>
        <li>XY spin chain ↔ Free fermion chain</li>
        <li>Transverse-field Ising ↔ Kitaev chain</li>
        <li>Bosonic SPT ↔ Fermionic SPT with parity</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_3_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
