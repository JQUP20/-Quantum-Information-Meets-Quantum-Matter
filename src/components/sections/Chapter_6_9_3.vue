<template>
  <div class="section-content">
    <h1>6.9.3 Three Types of Quasiparticles</h1>

    <p>The Z₂ toric code features three types of non-trivial quasiparticles (anyons): electric charges (e), magnetic fluxes (m), and their bound state (ε). Understanding these three types provides insight into the structure of topological order.</p>

    <h2>Electric Charge (e-particle)</h2>

    <div class="highlight-box">
      <h3>Violation of Star Operator</h3>

      <p><strong>Creation:</strong></p>
      <ul>
        <li>Apply σ^z on single edge</li>
        <li>Creates two e-particles at edge endpoints</li>
        <li>Violates A_s = -1 at two vertices</li>
      </ul>

      <p><strong>Properties:</strong></p>
      <ul>
        <li><strong>Detection:</strong> A_s eigenvalue = -1</li>
        <li><strong>Energy:</strong> ΔE = 2J_s</li>
        <li><strong>Statistics:</strong> Bosonic (exchange phase = 0)</li>
        <li><strong>Fusion:</strong> e × e = 1 (vacuum)</li>
      </ul>

      <p><strong>Motion:</strong></p>
      <ul>
        <li>Moved by Z-string operators</li>
        <li>Path-independent (topological)</li>
      </ul>
    </div>

    <h2>Magnetic Flux (m-particle)</h2>

    <div class="info-box">
      <h3>Violation of Plaquette Operator</h3>

      <p><strong>Creation:</strong></p>
      <ul>
        <li>Apply σ^x on single edge</li>
        <li>Creates two m-particles at adjacent plaquettes</li>
        <li>Violates B_p = -1 at two plaquettes</li>
      </ul>

      <p><strong>Properties:</strong></p>
      <ul>
        <li><strong>Detection:</strong> B_p eigenvalue = -1</li>
        <li><strong>Energy:</strong> ΔE = 2J_p</li>
        <li><strong>Statistics:</strong> Bosonic (exchange phase = 0)</li>
        <li><strong>Fusion:</strong> m × m = 1 (vacuum)</li>
      </ul>

      <p><strong>Dual to e-particle:</strong></p>
      <ul>
        <li>Under duality transformation: e ↔ m</li>
        <li>Symmetry of toric code Hamiltonian</li>
      </ul>
    </div>

    <h2>Fermion (ε-particle)</h2>

    <div class="highlight-box">
      <h3>Bound State of e and m</h3>

      <p><strong>Creation:</strong></p>
      <ul>
        <li>Apply σ^y = iσ^x σ^z on single edge</li>
        <li>Creates two ε-particles</li>
        <li>Violates both A_s = -1 and B_p = -1</li>
      </ul>

      <p><strong>Properties:</strong></p>
      <ul>
        <li><strong>Fusion:</strong> ε = e × m (composite)</li>
        <li><strong>Energy:</strong> ΔE = 2J_s + 2J_p</li>
        <li><strong>Statistics:</strong> Fermionic! (exchange phase = π)</li>
        <li><strong>Fusion rule:</strong> ε × ε = 1</li>
      </ul>

      <p><strong>Why fermionic?</strong></p>
      <ul>
        <li>e and m have mutual semionic statistics (phase π when braided)</li>
        <li>ε = e × m inherits fermionic statistics</li>
        <li>θ_ε = θ_e + θ_m + θ_em = 0 + 0 + π = π</li>
      </ul>
    </div>

    <h2>Fusion Rules</h2>

    <div class="info-box">
      <h3>Anyon Algebra</h3>

      <p><strong>Complete fusion table:</strong></p>
      <div class="equation">
        1 × a = a (identity)<br>
        e × e = 1,  m × m = 1,  ε × ε = 1<br>
        e × m = ε,  e × ε = m,  m × ε = e
      </div>

      <p><strong>Structure:</strong></p>
      <ul>
        <li>Z₂ × Z₂ group structure</li>
        <li>All particles have quantum dimension d = 1</li>
        <li>Abelian fusion rules</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Three anyons of Z₂ topological order:</strong></p>
      <ul>
        <li><strong>e:</strong> Electric, A_s = -1, bosonic</li>
        <li><strong>m:</strong> Magnetic, B_p = -1, bosonic</li>
        <li><strong>ε:</strong> Fermion, both = -1, fermionic</li>
        <li><strong>Fusion:</strong> Z₂ × Z₂ group structure</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_9_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
