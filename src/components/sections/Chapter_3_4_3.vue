<template>
  <div class="section-content">
    <h1>3.4.3 Stabilizer States and Graph States</h1>

    <h2>Stabilizer States</h2>
    <p>A <strong>stabilizer state</strong> on n qubits is uniquely specified by n independent commuting Pauli operators.</p>

    <div class="highlight-box">
      <h3>Examples</h3>
      <ul>
        <li><strong>Product states:</strong> |0000⟩ stabilized by {Z₁, Z₂, Z₃, Z₄}</li>
        <li><strong>Bell state:</strong> |Φ⁺⟩ = (|00⟩ + |11⟩)/√2 stabilized by {X₁X₂, Z₁Z₂}</li>
        <li><strong>GHZ state:</strong> |GHZ⟩ = (|000⟩ + |111⟩)/√2 stabilized by {X₁X₂X₃, Z₁Z₂, Z₂Z₃}</li>
      </ul>
    </div>

    <h2>Graph States</h2>
    <p><strong>Graph states</strong> are a special class of stabilizer states defined by a graph G = (V,E):</p>

    <div class="info-box">
      <h3>Construction</h3>
      <ol>
        <li>Start with all qubits in |+⟩ state</li>
        <li>For each edge (i,j) ∈ E, apply CZ gate between qubits i and j</li>
      </ol>

      <p><strong>Stabilizers:</strong> For each vertex i:</p>
      <div class="equation">
        K_i = X_i ∏_{j∈N(i)} Z_j
      </div>
      <p>where N(i) are neighbors of vertex i</p>
    </div>

    <h2>Cluster States</h2>
    <div class="highlight-box">
      <p><strong>Cluster states</strong> are graph states on a lattice (1D, 2D, etc.)</p>

      <p><strong>Application:</strong> Measurement-based quantum computation (MBQC)</p>
      <ul>
        <li>Prepare large cluster state</li>
        <li>Perform single-qubit measurements</li>
        <li>Measurement pattern implements computation!</li>
      </ul>

      <p><strong>Advantage:</strong> All entanglement created upfront—easier to protect</p>
    </div>

    <h2>Applications</h2>
    <div class="note-box">
      <ul>
        <li><strong>Quantum communication:</strong> Quantum repeaters</li>
        <li><strong>Quantum computing:</strong> MBQC, topological codes</li>
        <li><strong>Quantum metrology:</strong> Heisenberg-limited sensing</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_3_4_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
