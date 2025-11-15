<template>
  <div class="section-content">
    <h1>4.4.2 The Quantum Marginal Problem</h1>

    <h2>Problem Statement</h2>
    <div class="highlight-box">
      <h3>Quantum Marginal Problem</h3>
      <p><strong>Given:</strong> A collection of density matrices {ρ_A, ρ_B, ρ_C, ...}</p>

      <p><strong>Question:</strong> Does there exist a global state ρ on all particles such that:</p>
      <div class="equation">
        Tr_{Ā}[ρ] = ρ_A,  Tr_{B̄}[ρ] = ρ_B,  etc.
      </div>

      <p>where Ā denotes the complement of subsystem A?</p>
    </div>

    <h2>Compatibility Conditions</h2>
    <div class="info-box">
      <h3>Necessary Conditions</h3>
      <p>For consistency, must have:</p>
      <ul>
        <li><strong>Purity:</strong> Tr[ρ_A] = 1 for all A</li>
        <li><strong>Positivity:</strong> ρ_A ≥ 0 for all A</li>
        <li><strong>Consistency:</strong> Tr_C[ρ_{AC}] = ρ_A</li>
      </ul>

      <p><strong>Question:</strong> Are these sufficient?</p>
      <p><strong>Answer:</strong> No! Additional constraints exist.</p>
    </div>

    <h2>Complexity</h2>
    <div class="note-box">
      <p><strong>Result:</strong> Quantum marginal problem is NP-hard</p>

      <p>Even checking compatibility of marginals is computationally difficult!</p>

      <p><strong>Connection to physics:</strong></p>
      <ul>
        <li>Reduced density matrix functional theory (RDMFT)</li>
        <li>Can we predict ground state from reduced states alone?</li>
      </ul>
    </div>

    <h2>Quantum de Finetti Theorem</h2>
    <div class="highlight-box">
      <p>For permutation-symmetric states, marginals approximately determine global state:</p>

      <p><strong>Theorem:</strong> If ρ is symmetric under permutations of k systems from N total, and k << N, then:</p>
      <div class="equation">
        ρ ≈ ∫ |ψ⟩⟨ψ|^{⊗N} dμ(ψ)
      </div>

      <p>State is approximately a mixture of product states!</p>

      <p><strong>Implication:</strong> Mean-field theory justified for symmetric systems</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_4_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
