<template>
  <div class="section-content">
    <h1>4.4.4 de Finetti Theorem and Mean-Field Bosonic Systems</h1>

    <h2>Classical de Finetti Theorem</h2>
    <div class="info-box">
      <p><strong>Classical version:</strong> For exchangeable random variables X_1, ..., X_N:</p>

      <p>The joint distribution is a mixture of i.i.d. distributions:</p>
      <div class="equation">
        P(X_1, ..., X_N) = ∫ ∏_i p(X_i|θ) dμ(θ)
      </div>

      <p><strong>Interpretation:</strong> Exchangeable ≈ "as if" drawn i.i.d. from some distribution</p>
    </div>

    <h2>Quantum de Finetti Theorem</h2>
    <div class="highlight-box">
      <h3>Statement</h3>
      <p>For permutation-symmetric state ρ on N systems:</p>

      <div class="equation">
        ||ρ_k - ∫ |ψ⟩⟨ψ|^{⊗k} dμ(ψ)||_1 ≤ (k²d)/N
      </div>

      <p>where:</p>
      <ul>
        <li>ρ_k is k-particle reduced state</li>
        <li>d is single-particle dimension</li>
        <li>μ is probability measure on pure states</li>
      </ul>

      <p><strong>Interpretation:</strong> For k << N, symmetric states look like mixtures of product states!</p>
    </div>

    <h2>Application to Mean-Field Theory</h2>
    <div class="note-box">
      <h3>Bosonic Systems</h3>
      <p>For N bosons in symmetric state:</p>

      <p><strong>Consequence:</strong> Mean-field approximation becomes exact as N → ∞</p>

      <p><strong>Example:</strong> Bose-Einstein condensation</p>
      <div class="equation">
        |ψ⟩ ≈ |φ⟩^{⊗N}  (all bosons in same state φ)
      </div>

      <p>Justified by de Finetti for large N!</p>
    </div>

    <h2>Practical Implications</h2>
    <div class="highlight-box">
      <ul>
        <li><strong>Hartree-Fock:</strong> Justified for large systems</li>
        <li><strong>BCS theory:</strong> Mean-field approximation for superconductivity</li>
        <li><strong>Gross-Pitaevskii:</strong> Effective equation for BEC</li>
      </ul>

      <p><strong>Limitation:</strong> Requires permutation symmetry—not always valid (e.g., lattice systems)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_4_4'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
