<template>
  <div class="section-content">
    <h1>4.4.1 The Local Hamiltonian Problem</h1>

    <h2>Problem Definition</h2>
    <div class="highlight-box">
      <h3>k-Local Hamiltonian Problem</h3>
      <p><strong>Given:</strong></p>
      <ul>
        <li>k-local Hamiltonian H = Σ_i h_i on N qubits</li>
        <li>Two energy values a and b with b - a ≥ 1/poly(N)</li>
      </ul>

      <p><strong>Promise:</strong> The ground state energy E_0 satisfies either:</p>
      <ul>
        <li>E_0 ≤ a  (YES instance), or</li>
        <li>E_0 ≥ b  (NO instance)</li>
      </ul>

      <p><strong>Question:</strong> Which case holds?</p>
    </div>

    <h2>Complexity Result</h2>
    <div class="info-box">
      <h3>Kitaev's Theorem (1999)</h3>
      <p>The k-local Hamiltonian problem is <strong>QMA-complete</strong> for k ≥ 2.</p>

      <p><strong>QMA:</strong> Quantum Merlin-Arthur</p>
      <ul>
        <li>Quantum analog of NP</li>
        <li>Verifier: polynomial-time quantum computer</li>
        <li>Certificate: quantum state</li>
      </ul>

      <p><strong>Implication:</strong> No efficient classical algorithm expected (unless QMA = P)</p>
    </div>

    <h2>Physical Significance</h2>
    <div class="note-box">
      <p><strong>Connection to physics:</strong></p>
      <ul>
        <li>Finding ground states is computationally hard</li>
        <li>Explains difficulty of materials simulation</li>
        <li>Quantum computers might provide exponential speedup (VQE, QAOA)</li>
      </ul>

      <p><strong>Contrast with classical Ising:</strong> Classical 2-local problem is in P (polynomial time)</p>
    </div>

    <h2>Reduction from Circuit-SAT</h2>
    <div class="highlight-box">
      <h3>Proof Sketch</h3>
      <p>Kitaev's proof constructs H from quantum circuit:</p>
      <ol>
        <li>Clock register encodes computation time</li>
        <li>Hamiltonian enforces correct circuit evolution</li>
        <li>Ground state = history state of computation</li>
        <li>Ground energy low ⟺ circuit accepts</li>
      </ol>

      <p><strong>Result:</strong> Solving local Hamiltonian as hard as verifying quantum proofs</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_4_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
