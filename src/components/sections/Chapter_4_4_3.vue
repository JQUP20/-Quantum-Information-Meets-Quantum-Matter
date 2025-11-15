<template>
  <div class="section-content">
    <h1>4.4.3 The N-Representability Problem</h1>

    <h2>The Problem</h2>
    <div class="highlight-box">
      <h3>N-Representability</h3>
      <p><strong>Given:</strong> A 2-particle reduced density matrix ρ^{(2)}</p>

      <p><strong>Question:</strong> Does there exist an N-particle state |ψ⟩ such that:</p>
      <div class="equation">
        ρ^{(2)} = Tr_{3,4,...,N}[|ψ⟩⟨ψ|]
      </div>

      <p><strong>Why 2-RDM?</strong> Most physical interactions are 2-body!</p>
    </div>

    <h2>Necessary Conditions</h2>
    <div class="info-box">
      <h3>Coleman Conditions</h3>
      <p>For fermions, ρ^{(2)} must satisfy:</p>
      <ul>
        <li><strong>Positivity:</strong> ρ^{(2)} ≥ 0</li>
        <li><strong>Q-condition:</strong> Q = Tr_2[ρ^{(2)}] - (N-1)ρ^{(1)} ≥ 0</li>
        <li><strong>G-condition:</strong> G = ρ^{(1)} - ρ^{(2)} ≥ 0 (after reshaping)</li>
      </ul>

      <p><strong>Problem:</strong> Not sufficient for N > 2!</p>
    </div>

    <h2>Complexity</h2>
    <div class="note-box">
      <p><strong>Result:</strong> N-representability problem is QMA-complete</p>

      <p>As hard as the local Hamiltonian problem!</p>

      <p><strong>Implication:</strong> RDMFT exact characterization is computationally intractable</p>
    </div>

    <h2>Practical Approaches</h2>
    <div class="info-box">
      <p>Despite hardness, approximate methods useful:</p>
      <ul>
        <li><strong>Semidefinite programming:</strong> Add polynomial constraints</li>
        <li><strong>Variational 2-RDM:</strong> Optimize in constrained space</li>
        <li><strong>DFT analogs:</strong> Functional approximations</li>
      </ul>

      <p><strong>Success:</strong> Good results for molecular systems, but no guarantees</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_4_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
