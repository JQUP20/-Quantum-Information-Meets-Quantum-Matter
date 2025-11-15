<template>
  <div class="section-content">
    <h1>4.5.3 The 2-Local Frustration-Free Hamiltonians</h1>

    <h2>Special Case: 2-Local on Qubits</h2>
    <div class="highlight-box">
      <h3>Simplified Problem</h3>
      <p>For 2-local Hamiltonian on qubits:</p>
      <div class="equation">
        H = Σ_{i<j} h_{ij}
      </div>

      <p><strong>Question:</strong> Is H frustration-free?</p>

      <p><strong>Result:</strong> Can be solved in polynomial time!</p>
    </div>

    <h2>Why is 2-Local Easier?</h2>
    <div class="info-box">
      <p><strong>Key insight:</strong> Can use semidefinite programming (SDP)</p>

      <p><strong>Algorithm:</strong></p>
      <ol>
        <li>For each term h_{ij}, compute minimum eigenvalue λ_min^{(ij)}</li>
        <li>Check if there exists ρ ≥ 0 such that:
          <div class="equation">
            Tr[h_{ij} ρ_{ij}] = λ_min^{(ij)}  for all (i,j)
          </div>
        </li>
        <li>This is SDP! Solvable in poly(N) time</li>
      </ol>

      <p><strong>Conclusion:</strong> Can efficiently determine if 2-local qubit Hamiltonian is frustration-free</p>
    </div>

    <h2>Connection to Quantum SAT</h2>
    <div class="note-box">
      <p><strong>2-QSAT:</strong> Quantum version of 2-SAT</p>

      <p>Like classical 2-SAT, is in P (polynomial time)</p>

      <p>But 3-QSAT is QMA-complete (like classical 3-SAT is NP-complete)</p>

      <p><strong>Threshold:</strong> Hardness appears at k=3 for both classical and quantum</p>
    </div>

    <h2>Practical Applications</h2>
    <div class="highlight-box">
      <ul>
        <li><strong>Ground state preparation:</strong> Can efficiently find if exists</li>
        <li><strong>Quantum annealing:</strong> Frustration-free problems are easier targets</li>
        <li><strong>Code design:</strong> Stabilizer codes often frustration-free</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_5_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
