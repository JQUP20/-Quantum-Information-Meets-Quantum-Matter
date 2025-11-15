<template>
  <div class="section-content">
    <h1>6.9.4 Three Types of String Operators</h1>

    <p>String operators in the toric code create and move anyons. There are three fundamental types corresponding to the three types of anyons: Z-strings, X-strings, and Y-strings.</p>

    <h2>Z-String Operator</h2>

    <div class="highlight-box">
      <h3>Creates e-Particles</h3>

      <p><strong>Definition:</strong></p>
      <div class="equation">
        W_Z(C) = ∏_{edges ∈ C} σ_i^z
      </div>
      <ul>
        <li>C: Path of edges</li>
        <li>Product of σ^z along path</li>
      </ul>

      <p><strong>On closed loop:</strong></p>
      <ul>
        <li>Commutes with all A_s and B_p</li>
        <li>Leaves ground state invariant (or changes topological sector)</li>
        <li>No excitations created</li>
      </ul>

      <p><strong>On open path:</strong></p>
      <ul>
        <li>Creates e-particles at endpoints</li>
        <li>Anti-commutes with A_s at endpoints</li>
        <li>Path-independent effect (topological)</li>
      </ul>

      <p><strong>Commutation:</strong></p>
      <ul>
        <li>[W_Z, A_s] = 0 except at endpoints</li>
        <li>[W_Z, B_p] = 0 for all p</li>
      </ul>
    </div>

    <h2>X-String Operator</h2>

    <div class="info-box">
      <h3>Creates m-Particles</h3>

      <p><strong>Definition:</strong></p>
      <div class="equation">
        W_X(C) = ∏_{edges ∈ C*} σ_i^x
      </div>
      <ul>
        <li>C*: Dual path (perpendicular crossings)</li>
        <li>Product of σ^x along dual path</li>
      </ul>

      <p><strong>Properties:</strong></p>
      <ul>
        <li><strong>Closed loop:</strong> No excitations</li>
        <li><strong>Open path:</strong> m-particles at endpoints</li>
        <li>[W_X, B_p] = 0 except at endpoints</li>
        <li>[W_X, A_s] = 0 for all s</li>
      </ul>

      <p><strong>Duality:</strong></p>
      <ul>
        <li>X-string is dual to Z-string</li>
        <li>Under duality: σ^z ↔ σ^x, e ↔ m</li>
      </ul>
    </div>

    <h2>Y-String Operator</h2>

    <div class="note-box">
      <h3>Creates ε-Particles</h3>

      <p><strong>Definition:</strong></p>
      <div class="equation">
        W_Y(C) = ∏_{edges ∈ C} σ_i^y = ∏_{edges ∈ C} (iσ_i^x σ_i^z)
      </div>

      <p><strong>Properties:</strong></p>
      <ul>
        <li><strong>Open path:</strong> Creates ε-particles at endpoints</li>
        <li>Anti-commutes with both A_s and B_p at endpoints</li>
        <li>Composite: W_Y = W_X · W_Z (up to phase)</li>
      </ul>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Simultaneously creates e and m at same location</li>
        <li>Bound state = ε particle</li>
      </ul>
    </div>

    <h2>Wilson Loops and Topology</h2>

    <div class="highlight-box">
      <h3>Logical Operators on Torus</h3>

      <p><strong>Non-contractible loops:</strong></p>
      <ul>
        <li>Z_L^{(1)}, Z_L^{(2)}: Z-loops around two cycles</li>
        <li>X_L^{(1)}, X_L^{(2)}: X-loops around two cycles</li>
      </ul>

      <p><strong>Logical qubit encoding:</strong></p>
      <div class="equation">
        [Z_L^{(1)}, X_L^{(1)}] = 0 (different cycles)<br>
        {Z_L^{(1)}, X_L^{(2)}] = 0 (same cycle, dual)
      </div>

      <p><strong>Protection:</strong></p>
      <ul>
        <li>Cannot be affected by local operators</li>
        <li>Error requires string of length ~ L</li>
        <li>Code distance d = L</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Three string operators:</strong></p>
      <ul>
        <li><strong>Z-string:</strong> Creates e-particles, ∏ σ^z</li>
        <li><strong>X-string:</strong> Creates m-particles, ∏ σ^x</li>
        <li><strong>Y-string:</strong> Creates ε-particles, ∏ σ^y</li>
        <li><strong>Wilson loops:</strong> Encode logical qubits on torus</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_9_4'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
