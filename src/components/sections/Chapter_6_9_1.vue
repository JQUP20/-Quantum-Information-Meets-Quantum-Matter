<template>
  <div class="section-content">
    <h1>6.9.1 Toric Code Model and String Condensation</h1>

    <p>The toric code, introduced by Alexei Kitaev in 1997, provides the simplest and most elegant example of topological order. It demonstrates how string condensation—a quantum superposition of closed string configurations—gives rise to topological ground state degeneracy and anyonic excitations. This model serves as the foundation for understanding more complex topological phases.</p>

    <h2>Toric Code Hamiltonian</h2>

    <div class="highlight-box">
      <h3>Model Definition</h3>

      <p><strong>Lattice structure:</strong></p>
      <ul>
        <li>L × L square lattice with periodic boundary conditions (torus topology)</li>
        <li>Qubits placed on <strong>edges</strong> of the lattice</li>
        <li>Total qubits: N = 2L² (two edges per plaquette)</li>
      </ul>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H_{TC} = -J_s Σ_s A_s - J_p Σ_p B_p
      </div>

      <p><strong>Star operator (vertex term):</strong></p>
      <div class="equation">
        A_s = ∏_{i∈star(s)} σ_i^x
      </div>
      <ul>
        <li>Product of σ^x on four edges touching vertex s</li>
        <li>Flips all four spins around vertex</li>
        <li>One term per vertex: L² terms</li>
      </ul>

      <p><strong>Plaquette operator (face term):</strong></p>
      <div class="equation">
        B_p = ∏_{i∈boundary(p)} σ_i^z
      </div>
      <ul>
        <li>Product of σ^z on four edges around plaquette p</li>
        <li>Measures parity of Z-configuration</li>
        <li>One term per plaquette: L² terms</li>
      </ul>

      <p><strong>Commutation relations:</strong></p>
      <div class="equation">
        [A_s, A_{s'}] = [B_p, B_{p'}] = [A_s, B_p] = 0
      </div>
      <ul>
        <li>All operators mutually commute!</li>
        <li>Can be simultaneously diagonalized</li>
        <li>Hamiltonian is <strong>exactly solvable</strong></li>
      </ul>
    </div>

    <h2>Ground States</h2>

    <div class="info-box">
      <h3>Stabilizer Code Structure</h3>

      <p><strong>Ground state conditions:</strong></p>
      <div class="equation">
        A_s |GS⟩ = +1 |GS⟩ for all vertices s<br>
        B_p |GS⟩ = +1 |GS⟩ for all plaquettes p
      </div>

      <p><strong>Stabilizer formalism:</strong></p>
      <ul>
        <li>Ground states are <strong>+1 eigenstates</strong> of all A_s and B_p</li>
        <li>Total: L² + L² = 2L² stabilizer constraints</li>
        <li>But constraints are not all independent!</li>
      </ul>

      <p><strong>Constraint redundancy:</strong></p>
      <div class="equation">
        ∏_{all s} A_s = 𝟙,  ∏_{all p} B_p = 𝟙
      </div>
      <ul>
        <li>Global products equal identity (topological constraint)</li>
        <li>Independent constraints: 2L² - 2</li>
        <li>Hilbert space dimension: 2^{2L²}</li>
        <li><strong>Ground state degeneracy:</strong> 2^{2L²} / 2^{2L²-2} = 4</li>
      </ul>

      <p><strong>Four ground states on torus:</strong></p>
      <ul>
        <li>Cannot be distinguished by local measurements</li>
        <li>Distinguished by <strong>non-contractible loops</strong></li>
        <li>Topologically protected degeneracy</li>
      </ul>
    </div>

    <h2>String Operators</h2>

    <div class="highlight-box">
      <h3>Wilson Loop Operators</h3>

      <p><strong>Z-string (electric):</strong></p>
      <div class="equation">
        W_Z(C) = ∏_{i∈C} σ_i^z
      </div>
      <ul>
        <li>C: Path of edges forming curve</li>
        <li>Product of σ^z along path</li>
        <li>Creates pair of e-anyons at endpoints (if open)</li>
        <li>Commutes with all B_p</li>
      </ul>

      <p><strong>X-string (magnetic):</strong></p>
      <div class="equation">
        W_X(C) = ∏_{i∈C*} σ_i^x
      </div>
      <ul>
        <li>C*: Dual path (crosses edges perpendicularly)</li>
        <li>Product of σ^x along dual path</li>
        <li>Creates pair of m-anyons at endpoints (if open)</li>
        <li>Commutes with all A_s</li>
      </ul>

      <p><strong>Closed loops and ground states:</strong></p>
      <ul>
        <li>Contractible loop: W(C_{contractible}) = 𝟙 on ground states</li>
        <li>Non-contractible loop: Distinguishes ground states!</li>
        <li>Two independent non-contractible loops on torus → 2² = 4 states</li>
      </ul>

      <p><strong>Logical operators:</strong></p>
      <div class="equation">
        Z_L^{(1)}, Z_L^{(2)}: Horizontal and vertical Z-loops<br>
        X_L^{(1)}, X_L^{(2)}: Horizontal and vertical X-loops
      </div>
      <ul>
        <li>Encode 2 logical qubits in topological ground space</li>
        <li>Protected against local errors</li>
        <li>Form [[2L², 2, L]] quantum error-correcting code</li>
      </ul>
    </div>

    <h2>String Condensation Picture</h2>

    <div class="info-box">
      <h3>Quantum Superposition of Closed Strings</h3>

      <p><strong>String configuration:</strong></p>
      <ul>
        <li>Assign Z = ±1 to each edge (spin up/down)</li>
        <li>Z = -1: "String present" on that edge</li>
        <li>Z = +1: "No string"</li>
      </ul>

      <p><strong>Closed string constraint:</strong></p>
      <div class="equation">
        B_p = ∏_{edges around p} Z_i = +1
      </div>
      <ul>
        <li>Even number of strings crossing any plaquette boundary</li>
        <li>Strings must form <strong>closed loops</strong></li>
        <li>No endpoints allowed in ground state</li>
      </ul>

      <p><strong>Ground state wavefunction:</strong></p>
      <div class="equation">
        |GS⟩ = (1/√N_conf) Σ_{closed loops C} |C⟩
      </div>
      <ul>
        <li>Equal-weight superposition of all closed loop configurations</li>
        <li>N_conf: Number of allowed configurations</li>
        <li>Quantum liquid of fluctuating closed strings</li>
      </ul>

      <p><strong>A_s constraint:</strong></p>
      <ul>
        <li>A_s flips four edges around vertex s</li>
        <li>Changes one closed loop configuration to another</li>
        <li>A_s = +1: Superposition includes this fluctuation</li>
        <li>Strings can freely fluctuate via local moves</li>
      </ul>

      <p><strong>String condensation:</strong></p>
      <div class="equation">
        Ground state = Bose condensate of closed strings
      </div>
      <ul>
        <li>All closed loop configs have equal amplitude</li>
        <li>Macroscopic occupation of string "vacuum"</li>
        <li>Topological order from condensed extended objects</li>
      </ul>
    </div>

    <h2>Excitations as String Endpoints</h2>

    <div class="highlight-box">
      <h3>Anyonic Quasiparticles</h3>

      <p><strong>e-particle (electric charge):</strong></p>
      <ul>
        <li><strong>Creation:</strong> Apply σ^z on single edge</li>
        <li><strong>Effect:</strong> A_s = -1 at two vertices (endpoints of edge)</li>
        <li><strong>Interpretation:</strong> Endpoints of Z-string</li>
        <li><strong>Energy cost:</strong> ΔE = 2J_s (two violated star terms)</li>
      </ul>

      <p><strong>m-particle (magnetic flux):</strong></p>
      <ul>
        <li><strong>Creation:</strong> Apply σ^x on single edge</li>
        <li><strong>Effect:</strong> B_p = -1 at two plaquettes (adjacent)</li>
        <li><strong>Interpretation:</strong> Endpoints of X-string (dual)</li>
        <li><strong>Energy cost:</strong> ΔE = 2J_p (two violated plaquette terms)</li>
      </ul>

      <p><strong>ε-particle (composite fermion):</strong></p>
      <ul>
        <li><strong>Creation:</strong> Apply σ^y = iσ^x σ^z on single edge</li>
        <li><strong>Effect:</strong> Both A_s = -1 and B_p = -1</li>
        <li><strong>Interpretation:</strong> Bound state of e and m</li>
        <li><strong>Energy cost:</strong> ΔE = 2J_s + 2J_p</li>
      </ul>

      <p><strong>String operators move anyons:</strong></p>
      <div class="equation">
        W_Z(path) |e at r⟩ = |e at r'⟩
      </div>
      <ul>
        <li>Path connects r to r'</li>
        <li>Moves anyon without creating new ones</li>
        <li>Amplitude independent of path (topological)</li>
      </ul>
    </div>

    <h2>Anyonic Statistics</h2>

    <div class="note-box">
      <h3>Braiding and Exchange</h3>

      <p><strong>e and m are bosons:</strong></p>
      <ul>
        <li>Exchanging two e-particles: phase = 0</li>
        <li>Exchanging two m-particles: phase = 0</li>
        <li>Self-statistics trivial</li>
      </ul>

      <p><strong>Mutual statistics:</strong></p>
      <div class="equation">
        Braid e around m → phase = π
      </div>
      <ul>
        <li>e and m are <strong>mutual semions</strong></li>
        <li>Anticommutation: {W_X, W_Z} = 0 on ground states</li>
        <li>Topological: Independent of braid path (only winding)</li>
      </ul>

      <p><strong>ε is a fermion:</strong></p>
      <ul>
        <li>Exchange two ε-particles: phase = π</li>
        <li>Composite of e and m inherits fermionic statistics</li>
        <li>ε = e × m fusion rule</li>
      </ul>

      <p><strong>Braiding demonstration:</strong></p>
      <ol>
        <li>Create e-m pair</li>
        <li>Move e in loop around m (using string operators)</li>
        <li>Wavefunction acquires phase π</li>
        <li>Annihilate pair</li>
        <li>Result: Overall -1 phase</li>
      </ol>

      <p><strong>Mathematical origin:</strong></p>
      <ul>
        <li>Commutator: [W_X(C_1), W_Z(C_2)] = 0 if no linking</li>
        <li>Linking number L(C_1, C_2) = ±1 if curves wind</li>
        <li>Phase = π × L(C_1, C_2)</li>
      </ul>
    </div>

    <h2>Z₂ Topological Order</h2>

    <div class="info-box">
      <h3>Characterization</h3>

      <p><strong>Anyon types:</strong></p>
      <div class="equation">
        {1, e, m, ε}
      </div>
      <ul>
        <li>1: Vacuum (trivial)</li>
        <li>e: Electric charge</li>
        <li>m: Magnetic flux</li>
        <li>ε: Fermion (composite)</li>
      </ul>

      <p><strong>Fusion rules:</strong></p>
      <div class="equation">
        e × e = 1,  m × m = 1,  ε × ε = 1<br>
        e × m = ε,  e × ε = m,  m × ε = e
      </div>
      <ul>
        <li>Z₂ group structure: All anyons square to identity</li>
        <li>Abelian fusion algebra</li>
      </ul>

      <p><strong>Quantum dimensions:</strong></p>
      <div class="equation">
        d_1 = d_e = d_m = d_ε = 1
      </div>
      <ul>
        <li>All simple currents (dimension 1)</li>
        <li>Total quantum dimension: 𝒟 = √(1² + 1² + 1² + 1²) = 2</li>
      </ul>

      <p><strong>Topological entanglement entropy:</strong></p>
      <div class="equation">
        γ = log 𝒟 = log 2
      </div>

      <p><strong>Ground state degeneracy:</strong></p>
      <div class="equation">
        d_GSD(torus) = 𝒟² = 4<br>
        d_GSD(genus g) = 4^g
      </div>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Toric code:</strong> Simplest topologically ordered model, exactly solvable</li>
        <li><strong>Hamiltonian:</strong> H = -Σ A_s - Σ B_p, all terms commute</li>
        <li><strong>Ground states:</strong> 4-fold degenerate on torus, stabilizer code [[2L², 2, L]]</li>
        <li><strong>String condensation:</strong> Quantum superposition of closed loop configurations</li>
        <li><strong>Anyons:</strong> {1, e, m, ε} with Z₂ fusion rules and mutual semionic statistics</li>
        <li><strong>String operators:</strong> W_Z and W_X create/move anyons, encode logical qubits</li>
        <li><strong>Topological protection:</strong> Ground states distinguished only by non-local Wilson loops</li>
        <li><strong>Applications:</strong> Topological quantum memory, surface codes for quantum computing</li>
      </ul>

      <p><strong>Next:</strong> Section 6.9.2 explores the distinction between local and topological excitations in detail.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_9_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
