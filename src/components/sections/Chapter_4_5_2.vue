<template>
  <div class="section-content">
    <h1>4.5.2 The Frustration-Free Hamiltonians Problem</h1>

    <h2>Decision Problem</h2>
    <div class="highlight-box">
      <h3>Frustration-Free Problem</h3>
      <p><strong>Given:</strong> k-local Hamiltonian H = Σ_i h_i</p>

      <p><strong>Question:</strong> Is H frustration-free? I.e., does there exist a state |ψ⟩ such that:</p>
      <div class="equation">
        ⟨ψ|h_i|ψ⟩ = min eigenvalue of h_i  for all i
      </div>
    </div>

    <h2>Computational Complexity</h2>
    <div class="info-box">
      <p><strong>Result:</strong> Still QMA-complete for k ≥ 3!</p>

      <p>Even though problem seems easier (just check if minimum achievable), still computationally hard</p>

      <p><strong>Exception:</strong> 2-local frustration-free on qubits is easier (next section)</p>
    </div>

    <h2>Physical Implications</h2>
    <div class="note-box">
      <ul>
        <li><strong>Frustration:</strong> Central to many phenomena (spin glasses, geometric frustration)</li>
        <li><strong>Topology:</strong> Frustration-free often admits exact solutions</li>
        <li><strong>Gapped vs gapless:</strong> Frustration can close gaps</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_5_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
