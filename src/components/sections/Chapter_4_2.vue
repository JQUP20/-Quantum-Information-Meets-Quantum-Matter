<template>
  <div class="section-content">
    <h1>4.2 Many-Body Hilbert Space</h1>

    <h2>Structure of the N-Particle Hilbert Space</h2>
    <p>For N distinguishable particles, each with d-dimensional single-particle space:</p>

    <div class="highlight-box">
      <h3>Product Space</h3>
      <div class="equation">
        ℋ_N = ℋ_1 ⊗ ℋ_2 ⊗ ... ⊗ ℋ_N
      </div>
      <div class="equation">
        dim(ℋ_N) = d^N
      </div>

      <p><strong>Example:</strong> N spin-1/2 particles (qubits)</p>
      <ul>
        <li>Single particle: d = 2 (|↑⟩, |↓⟩)</li>
        <li>N particles: dim = 2^N</li>
        <li>Basis states: |s_1 s_2 ... s_N⟩ where s_i ∈ {↑,↓}</li>
      </ul>
    </div>

    <h2>Identical Particles: Bosons and Fermions</h2>
    <p>For indistinguishable particles, quantum statistics constrains the Hilbert space:</p>

    <div class="comparison-box">
      <h3>Bosons vs Fermions</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Bosons</th>
          <th>Fermions</th>
        </tr>
        <tr>
          <td>Symmetry</td>
          <td>Symmetric under exchange</td>
          <td>Antisymmetric under exchange</td>
        </tr>
        <tr>
          <td>Wavefunction</td>
          <td>|ψ_S⟩ = (|ψ⟩ + P|ψ⟩)/√2</td>
          <td>|ψ_A⟩ = (|ψ⟩ - P|ψ⟩)/√2</td>
        </tr>
        <tr>
          <td>Pauli exclusion</td>
          <td>No restriction</td>
          <td>No two in same state</td>
        </tr>
        <tr>
          <td>Dimension</td>
          <td>C(N+d-1, N)</td>
          <td>C(d, N)</td>
        </tr>
        <tr>
          <td>Examples</td>
          <td>Photons, phonons, He-4</td>
          <td>Electrons, quarks, He-3</td>
        </tr>
      </table>
    </div>

    <h2>Occupation Number Representation</h2>
    <div class="info-box">
      <h3>Fock Space</h3>
      <p>States specified by occupation numbers {n_1, n_2, ..., n_d}:</p>
      <div class="equation">
        |n_1, n_2, ..., n_d⟩  where Σ_i n_i = N
      </div>

      <p><strong>Bosons:</strong> n_i ≥ 0 (no restriction)</p>
      <p><strong>Fermions:</strong> n_i ∈ {0,1} (Pauli exclusion)</p>
    </div>

    <h2>Reduced Density Matrices</h2>
    <p>For subsystem A of k particles:</p>

    <div class="note-box">
      <h3>k-Particle RDM</h3>
      <div class="equation">
        ρ^{(k)} = Tr_{B}[|ψ⟩⟨ψ|]
      </div>

      <p>where B contains the remaining (N-k) particles.</p>

      <p><strong>Key properties:</strong></p>
      <ul>
        <li>Acts on k-particle space: dim = d^k</li>
        <li>Contains all k-body observables</li>
        <li>For k-local H: ⟨H⟩ determined by ρ^{(k)}</li>
      </ul>
    </div>

    <h2>Looking Ahead</h2>
    <div class="preview-box">
      <h4>Next: Local Hamiltonians (Section 4.3)</h4>
      <p>We'll see how locality structure constrains physical interactions and enables efficient description.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
