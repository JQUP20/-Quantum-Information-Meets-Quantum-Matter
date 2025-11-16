<template>
  <div class="section-content">
    <h1>10.2.3 Time Reversal Symmetry</h1>

    <p>
      Time-reversal symmetry T is anti-unitary (T i T⁻¹ = -i) and can square to ±1: T² = ±1. This leads to distinct SPT classifications for bosons and fermions.
    </p>

    <h2>Anti-Unitary Symmetries</h2>

    <div class="info-box">
      <h3>Time-Reversal Operator</h3>
      <p>
        Time-reversal acts as:
      </p>
      <div class="equation">
        T: i → -i,  T² = ±1
      </div>
      <p>
        <strong>For spin systems:</strong>
      </p>
      <ul>
        <li>T S^x T⁻¹ = S^x</li>
        <li>T S^y T⁻¹ = -S^y</li>
        <li>T S^z T⁻¹ = S^z</li>
      </ul>
      <p>
        <strong>Constraint:</strong>
      </p>
      <ul>
        <li>Integer spin (S = 0, 1, 2, ...): T² = +1</li>
        <li>Half-integer spin (S = 1/2, 3/2, ...): T² = -1 (Kramers theorem)</li>
      </ul>
    </div>

    <h2>Classification</h2>

    <div class="highlight-box">
      <h4>SPT with Time-Reversal</h4>
      <p>
        <strong>Bosonic T² = +1:</strong>
      </p>
      <div class="equation">
        H²(ℤ₂^T, U(1)) = ℤ₂
      </div>
      <p>
        Two phases: trivial and Haldane-like
      </p>
      <p>
        <strong>Fermionic T² = -1:</strong>
      </p>
      <div class="equation">
        H²(ℤ₂^{T²=-1}, U(1)) = ℤ₂
      </div>
      <p>
        Two phases: trivial and topological insulator
      </p>
    </div>

    <h2>Physical Consequences</h2>

    <div class="info-box">
      <h3>Kramers Degeneracy</h3>
      <p>
        For T² = -1 systems:
      </p>
      <ul>
        <li>All energy levels are (at least) doubly degenerate</li>
        <li>|ψ⟩ and T|ψ⟩ are orthogonal partners</li>
        <li>Edge states form Kramers pairs</li>
        <li>Protected from backscattering by time-reversal</li>
      </ul>
      <p>
        <strong>Application:</strong> Quantum spin Hall edge states (helical fermions)
      </p>
    </div>

    <p>
      Time-reversal symmetry provides crucial protection for topological insulators and enables dissipationless edge transport.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_2_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
