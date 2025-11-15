<template>
  <div class="section-content">
    <h1>3.4.2 The Stabilizer Formalism</h1>

    <h2>Stabilizer Groups</h2>
    <p>The <strong>stabilizer formalism</strong> (Gottesman 1997) provides a unified framework for quantum error correction based on group theory.</p>

    <div class="highlight-box">
      <h3>Key Definitions</h3>
      <p><strong>Stabilizer:</strong> An operator S that leaves codewords unchanged:</p>
      <div class="equation">
        S|ψ⟩ = |ψ⟩  for all |ψ⟩ in code space
      </div>

      <p><strong>Stabilizer group:</strong> Set of all such operators (forms abelian group)</p>

      <p><strong>Generators:</strong> Minimal set {g₁, ..., g_{n-k}} that generate entire stabilizer group</p>
    </div>

    <h2>Pauli Group</h2>
    <p>For n qubits, the Pauli group 𝒫_n consists of tensor products of {I,X,Y,Z} with phases {±1, ±i}:</p>

    <div class="info-box">
      <h3>Properties</h3>
      <ul>
        <li>Size: |𝒫_n| = 4^(n+1)</li>
        <li>Multiplication: Pauli × Pauli = ±Pauli</li>
        <li>Commutation: [P,Q] = 0 or {P,Q} = 0</li>
      </ul>

      <p><strong>Stabilizer codes:</strong> Code space is simultaneous +1 eigenspace of abelian subgroup of 𝒫_n</p>
    </div>

    <h2>Code Construction</h2>
    <div class="highlight-box">
      <p>To construct an ⟦n,k,d⟧ stabilizer code:</p>
      <ol>
        <li>Choose (n-k) independent commuting Pauli operators {g₁, ..., g_{n-k}}</li>
        <li>Code space = joint +1 eigenspace</li>
        <li>Dimension = 2^k (encodes k logical qubits)</li>
        <li>Distance d = minimum weight of non-trivial logical operator</li>
      </ol>
    </div>

    <h2>Gottesman-Knill Theorem</h2>
    <div class="note-box">
      <p><strong>Theorem:</strong> Clifford circuits on stabilizer states can be simulated efficiently classically.</p>

      <p><strong>Implication:</strong> For quantum computational advantage, need non-Clifford gates (like T)!</p>
    </div>

    <h2>Looking Ahead</h2>
    <div class="preview-box">
      <h4>Next: Stabilizer States (Section 3.4.3)</h4>
      <p>Special class of states with remarkable properties for quantum information.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_3_4_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
