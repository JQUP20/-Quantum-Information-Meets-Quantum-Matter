<template>
  <div class="section-content">
    <h1>10.4.2 2D CZX Model</h1>

    <p>
      The CZX model is an exactly solvable example of 2D SPT order with ℤ₂ symmetry, defined on a square lattice of qubits.
    </p>

    <h2>Hamiltonian</h2>

    <div class="info-box">
      <h3>Definition</h3>
      <p>
        Qubits on square lattice vertices:
      </p>
      <div class="equation">
        H = -∑_{plaquettes} (CZ_{12} × CZ_{23} × CZ_{34} × CZ_{41}) X_1 X_2 X_3 X_4
      </div>
      <p>
        where CZ is controlled-Z gate.
      </p>
    </div>

    <h2>SPT Properties</h2>

    <div class="highlight-box">
      <h4>ℤ₂ Protected Edge</h4>
      <ul>
        <li>Symmetry: ∏_i X_i (global spin flip)</li>
        <li>Bulk: Unique ground state, gapped</li>
        <li>Edge: 1D cluster state (SPT in 1D)</li>
        <li>Cannot gap edge without breaking symmetry</li>
      </ul>
    </div>

    <h2>Classification</h2>

    <div class="info-box">
      <p>
        2D bosonic SPT with ℤ₂ symmetry:
      </p>
      <div class="equation">
        H³(ℤ₂, U(1)) = ℤ₂
      </div>
      <p>
        Two phases: trivial and CZX-like
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_4_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
