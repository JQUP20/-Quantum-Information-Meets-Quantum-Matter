<template>
  <div class="section-content">
    <h1>6.9.3 Three Types of Quasiparticles in Z₂ Topological Order</h1>

    <p>The toric code—the simplest example of intrinsic topological order—hosts exactly three types of non-trivial quasiparticles (anyons) in addition to the vacuum. These are the electric charge (e-particle), the magnetic flux (m-particle), and their composite fermion (ε-particle). Understanding this minimal set of anyons provides fundamental insight into the algebraic structure underlying all topological phases, and demonstrates how fermionic statistics can emerge from purely bosonic constituents through topological binding.</p>

    <h2>The Vacuum Sector (1)</h2>

    <div class="info-box">
      <h3>Trivial Anyon</h3>

      <p><strong>Definition:</strong></p>
      <div class="equation">
        1 = vacuum = identity particle
      </div>
      <ul>
        <li>Ground state with all stabilizers satisfied</li>
        <li>A_s|GS⟩ = |GS⟩ and B_p|GS⟩ = |GS⟩ for all s, p</li>
        <li>No violations of star or plaquette operators</li>
      </ul>

      <p><strong>Properties:</strong></p>
      <ul>
        <li><strong>Quantum dimension:</strong> d_1 = 1</li>
        <li><strong>Topological spin:</strong> θ_1 = 0</li>
        <li><strong>Statistics:</strong> Bosonic (trivial)</li>
        <li><strong>Fusion identity:</strong> 1 × a = a for any anyon a</li>
      </ul>
    </div>

    <h2>Electric Charge (e-particle)</h2>

    <div class="highlight-box">
      <h3>Star Operator Violation</h3>

      <p><strong>Definition via stabilizer:</strong></p>
      <div class="equation">
        A_s|e at vertex s⟩ = -|e at vertex s⟩
      </div>
      <ul>
        <li>Violates star operator eigenvalue: A_s = -1</li>
        <li>All plaquette operators still satisfied: B_p = +1</li>
        <li>Localized at lattice vertex</li>
      </ul>

      <p><strong>Creation by string operator:</strong></p>
      <div class="equation">
        Z(C) = ∏_{edges ∈ C} σ_i^z
      </div>
      <ul>
        <li>C: Open path from vertex s₁ to s₂</li>
        <li>Creates e-particle at both endpoints</li>
        <li>Effect: Flips A_{s₁} and A_{s₂} from +1 to -1</li>
        <li>All intermediate vertices unaffected</li>
      </ul>

      <p><strong>Single edge creation:</strong></p>
      <ul>
        <li>Apply σ^z on edge connecting vertices s₁ and s₂</li>
        <li>Flips two stars: A_{s₁} → -A_{s₁}, A_{s₂} → -A_{s₂}</li>
        <li>Minimal energy excitation: ΔE = 2J_s</li>
      </ul>

      <p><strong>Motion of e-particle:</strong></p>
      <div class="equation">
        Z(C')|e at s₁⟩ → |e at s₂⟩
      </div>
      <ul>
        <li>Apply Z-string from current position to new position</li>
        <li>Moves e-particle adiabatically</li>
        <li>Path independent (topological)</li>
        <li>Can move without creating additional excitations</li>
      </ul>

      <p><strong>Quantum numbers:</strong></p>
      <ul>
        <li><strong>Topological charge:</strong> Z₂ charge +1</li>
        <li><strong>Quantum dimension:</strong> d_e = 1 (abelian)</li>
        <li><strong>Topological spin:</strong> θ_e = 0</li>
        <li><strong>Exchange statistics:</strong> Bosonic (θ = 0)</li>
      </ul>

      <p><strong>Fusion rules:</strong></p>
      <div class="equation">
        e × e = 1 (two e's annihilate)<br>
        e × 1 = e (identity property)<br>
        e × m = ε (creates fermion)<br>
        e × ε = m (exchange with fermion gives m)
      </div>
    </div>

    <h2>Magnetic Flux (m-particle)</h2>

    <div class="highlight-box">
      <h3>Plaquette Operator Violation</h3>

      <p><strong>Definition via stabilizer:</strong></p>
      <div class="equation">
        B_p|m at plaquette p⟩ = -|m at plaquette p⟩
      </div>
      <ul>
        <li>Violates plaquette operator eigenvalue: B_p = -1</li>
        <li>All star operators still satisfied: A_s = +1</li>
        <li>Localized at lattice face (plaquette)</li>
      </ul>

      <p><strong>Creation by string operator:</strong></p>
      <div class="equation">
        X(C) = ∏_{edges ∈ C} σ_i^x
      </div>
      <ul>
        <li>C: Open path (dual lattice)</li>
        <li>Creates m-particle at both endpoints</li>
        <li>Effect: Flips B_{p₁} and B_{p₂} from +1 to -1</li>
      </ul>

      <p><strong>Single edge creation:</strong></p>
      <ul>
        <li>Apply σ^x on edge separating plaquettes p₁ and p₂</li>
        <li>Flips two plaquettes: B_{p₁} → -B_{p₁}, B_{p₂} → -B_{p₂}</li>
        <li>Minimal energy excitation: ΔE = 2J_p</li>
      </ul>

      <p><strong>Quantum numbers:</strong></p>
      <ul>
        <li><strong>Topological charge:</strong> Z₂ flux +1</li>
        <li><strong>Quantum dimension:</strong> d_m = 1 (abelian)</li>
        <li><strong>Topological spin:</strong> θ_m = 0</li>
        <li><strong>Exchange statistics:</strong> Bosonic (θ = 0)</li>
      </ul>

      <p><strong>Duality with e-particle:</strong></p>
      <div class="equation">
        Square lattice → Dual square lattice<br>
        Vertices ↔ Plaquettes<br>
        A_s ↔ B_p,  e ↔ m
      </div>
      <ul>
        <li>Toric code Hamiltonian self-dual</li>
        <li>e and m particles interchanged under duality</li>
        <li>Symmetric role in topological order</li>
      </ul>

      <p><strong>Fusion rules:</strong></p>
      <div class="equation">
        m × m = 1<br>
        m × 1 = m<br>
        m × e = ε<br>
        m × ε = e
      </div>
    </div>

    <h2>Composite Fermion (ε-particle)</h2>

    <div class="highlight-box">
      <h3>Bound State of e and m</h3>

      <p><strong>Definition:</strong></p>
      <div class="equation">
        ε = e × m (fusion product)
      </div>
      <ul>
        <li>Simultaneously violates star and plaquette</li>
        <li>A_s = -1 at vertex, B_p = -1 at adjacent plaquette</li>
        <li>Cannot separate e and m parts in this topological phase</li>
      </ul>

      <p><strong>Creation by string operator:</strong></p>
      <div class="equation">
        Y(C) = ∏_{edges ∈ C} σ_i^y = ∏_{edges ∈ C} iσ_i^x σ_i^z
      </div>
      <ul>
        <li>Y-operator = simultaneous X and Z operation</li>
        <li>Creates ε-particle at both endpoints</li>
        <li>Each endpoint violates both A_s and B_p</li>
      </ul>

      <p><strong>Energy cost:</strong></p>
      <div class="equation">
        ΔE_{ε-pair} = 2J_s + 2J_p
      </div>
      <ul>
        <li>Sum of e-particle and m-particle energies</li>
        <li>Higher energy than pure e or m excitations</li>
        <li>Energetically unfavorable for J_s, J_p > 0</li>
      </ul>

      <p><strong>Fermionic statistics - detailed derivation:</strong></p>

      <p><strong>1. Mutual statistics of e and m:</strong></p>
      <div class="equation">
        Exchange e around m → phase θ_{em} = π
      </div>
      <ul>
        <li>Semionic statistics (half-fermion)</li>
        <li>Derived from braiding Z-string and X-string</li>
        <li>Anticommutation: {X, Z} = 0 → phase π</li>
      </ul>

      <p><strong>2. Topological spin of ε:</strong></p>
      <div class="equation">
        θ_ε = θ_e + θ_m + θ_{em} = 0 + 0 + π = π
      </div>
      <ul>
        <li>Self-exchange phase = π</li>
        <li>Fermionic statistics!</li>
      </ul>

      <p><strong>3. Verification from wavefunctions:</strong></p>
      <ul>
        <li>Two ε particles at positions r₁ and r₂</li>
        <li>Exchange: |ψ(r₁, r₂)⟩ → -|ψ(r₂, r₁)⟩</li>
        <li>Antisymmetric under exchange (fermions)</li>
      </ul>

      <p><strong>Emergent fermion:</strong></p>
      <ul>
        <li>Microscopic: Only spins-1/2 (bosonic operators on even sites)</li>
        <li>Macroscopic: Fermionic ε excitations emerge</li>
        <li>Fractionalization of statistics</li>
        <li>Topological origin (not fundamental fermions)</li>
      </ul>

      <p><strong>Fusion rules:</strong></p>
      <div class="equation">
        ε × ε = 1<br>
        ε × e = m<br>
        ε × m = e<br>
        ε × 1 = ε
      </div>
    </div>

    <h2>Complete Fusion Structure</h2>

    <div class="info-box">
      <h3>Z₂ × Z₂ Anyon Model</h3>

      <p><strong>Fusion table:</strong></p>
      <table class="comparison-table">
        <tr>
          <th>×</th>
          <th>1</th>
          <th>e</th>
          <th>m</th>
          <th>ε</th>
        </tr>
        <tr>
          <td><strong>1</strong></td>
          <td>1</td>
          <td>e</td>
          <td>m</td>
          <td>ε</td>
        </tr>
        <tr>
          <td><strong>e</strong></td>
          <td>e</td>
          <td>1</td>
          <td>ε</td>
          <td>m</td>
        </tr>
        <tr>
          <td><strong>m</strong></td>
          <td>m</td>
          <td>ε</td>
          <td>1</td>
          <td>e</td>
        </tr>
        <tr>
          <td><strong>ε</strong></td>
          <td>ε</td>
          <td>m</td>
          <td>e</td>
          <td>1</td>
        </tr>
      </table>

      <p><strong>Group structure:</strong></p>
      <ul>
        <li>Isomorphic to (Z₂ × Z₂, ⊕)</li>
        <li>Abelian group with 4 elements</li>
        <li>Klein four-group</li>
        <li>All elements self-inverse: a × a = 1</li>
      </ul>

      <p><strong>Quantum dimensions:</strong></p>
      <div class="equation">
        d_1 = d_e = d_m = d_ε = 1
      </div>
      <ul>
        <li>All anyons are abelian (d = 1)</li>
        <li>No fusion multiplicity (unique outcomes)</li>
      </ul>

      <p><strong>Total quantum dimension:</strong></p>
      <div class="equation">
        𝒟 = √(d_1² + d_e² + d_m² + d_ε²) = √4 = 2
      </div>
    </div>

    <h2>Topological Spins and S, T Matrices</h2>

    <div class="highlight-box">
      <h3>Topological Data</h3>

      <p><strong>Topological spins (self-statistics):</strong></p>
      <div class="equation">
        θ_1 = 0,  θ_e = 0,  θ_m = 0,  θ_ε = π
      </div>
      <ul>
        <li>1, e, m are bosons</li>
        <li>ε is fermion</li>
      </ul>

      <p><strong>T-matrix (Dehn twist):</strong></p>
      <div class="equation">
        T = diag(e^{2πiθ_a}) = diag(1, 1, 1, -1)
      </div>
      <ul>
        <li>Diagonal matrix</li>
        <li>Encodes topological spins</li>
      </ul>

      <p><strong>S-matrix (modular S-transformation):</strong></p>
      <div class="equation">
        S = (1/2) [  1   1   1   1  ]<br>
                  [  1   1  -1  -1  ]<br>
                  [  1  -1   1  -1  ]<br>
                  [  1  -1  -1   1  ]
      </div>

      <p><strong>Properties of S-matrix:</strong></p>
      <ul>
        <li>Symmetric: S^T = S</li>
        <li>Unitary: S S^† = 𝟙</li>
        <li>S² = C (charge conjugation)</li>
        <li>Encodes mutual statistics: S_{ab} ~ e^{iθ_{ab}}</li>
      </ul>

      <p><strong>Mutual statistics from S-matrix:</strong></p>
      <ul>
        <li>S_{e,m} = -1/2 → θ_{em} = π (semionic)</li>
        <li>S_{e,e} = 1/2 → θ_{ee} = 0 (bosonic)</li>
        <li>S_{m,m} = 1/2 → θ_{mm} = 0 (bosonic)</li>
        <li>S_{ε,ε} = 1/2 → θ_{εε} = π (fermionic from T-matrix)</li>
      </ul>

      <p><strong>Consistency check (Pentagon and Hexagon equations):</strong></p>
      <ul>
        <li>(ST)³ = S² automatically satisfied</li>
        <li>All fusion and braiding data consistent</li>
        <li>Defines valid topological quantum field theory</li>
      </ul>
    </div>

    <h2>Physical Pictures</h2>

    <div class="info-box">
      <h3>Intuitive Understanding</h3>

      <p><strong>1. Gauge theory picture:</strong></p>
      <ul>
        <li><strong>e-particle:</strong> Electric charge violating Gauss law</li>
        <li><strong>m-particle:</strong> Z₂ magnetic flux (π flux)</li>
        <li><strong>ε-particle:</strong> Dyon (charge + flux)</li>
        <li>Deconfined Z₂ gauge theory</li>
      </ul>

      <p><strong>2. String condensation picture:</strong></p>
      <ul>
        <li><strong>Ground state:</strong> Condensate of closed Z-strings</li>
        <li><strong>e-particle:</strong> Endpoint of open Z-string</li>
        <li><strong>m-particle:</strong> Endpoint of open X-string (dual)</li>
        <li><strong>ε-particle:</strong> Endpoint of open Y-string</li>
      </ul>

      <p><strong>3. Quantum error correction picture:</strong></p>
      <ul>
        <li><strong>Ground state:</strong> Code space (all syndromes +1)</li>
        <li><strong>e-particle:</strong> Bit-flip error (σ^x error detected by A_s)</li>
        <li><strong>m-particle:</strong> Phase-flip error (σ^z error detected by B_p)</li>
        <li><strong>ε-particle:</strong> Combined error (σ^y)</li>
        <li>Error correction: Pair anyons and annihilate</li>
      </ul>
    </div>

    <h2>Detection and Measurement</h2>

    <div class="note-box">
      <h3>Distinguishing Anyon Types</h3>

      <p><strong>Syndrome measurement:</strong></p>
      <div class="equation">
        Measure: {A_s} for all vertices s<br>
        Measure: {B_p} for all plaquettes p
      </div>

      <p><strong>Anyon identification:</strong></p>
      <ul>
        <li><strong>A_s = -1, B_p = +1:</strong> e-particle at s</li>
        <li><strong>A_s = +1, B_p = -1:</strong> m-particle at p</li>
        <li><strong>A_s = -1, B_p = -1:</strong> ε-particle at (s,p)</li>
        <li><strong>A_s = +1, B_p = +1:</strong> Vacuum (no anyons)</li>
      </ul>

      <p><strong>Wilson loop measurement:</strong></p>
      <ul>
        <li>Measure ∏_{i∈loop} σ_i^z → detects e-charge inside</li>
        <li>Measure ∏_{i∈loop} σ_i^x → detects m-flux inside</li>
        <li>Non-local measurement required for anyon type</li>
      </ul>

      <p><strong>Braiding experiment:</strong></p>
      <ul>
        <li>Move anyons around each other</li>
        <li>Measure Berry phase</li>
        <li>Confirms statistics (0, 0, π for e×e, m×m, ε×ε)</li>
      </ul>
    </div>

    <h2>Applications to Quantum Computation</h2>

    <div class="highlight-box">
      <h3>Topological Qubits</h3>

      <p><strong>Encoding:</strong></p>
      <ul>
        <li>Create four e-particles (or four m-particles)</li>
        <li>Positions encode qubit state</li>
        <li>Fusion channels: (e×e)×(e×e) = 1×1 or 1×ε</li>
        <li>Computational basis: |0⟩ = |vacuum⟩, |1⟩ = |ε-pair⟩</li>
      </ul>

      <p><strong>Operations:</strong></p>
      <ul>
        <li><strong>Braiding e-particles:</strong> Abelian, no gates (Z₂ toric code limitation)</li>
        <li><strong>Measurement:</strong> Fuse pairs, measure syndrome</li>
        <li><strong>Initialization:</strong> Start from ground state</li>
      </ul>

      <p><strong>Limitations:</strong></p>
      <ul>
        <li>Z₂ toric code has abelian anyons</li>
        <li>Braiding gives only phases (no state rotation)</li>
        <li>Cannot achieve universal quantum computation</li>
        <li>Need non-abelian anyons (e.g., Fibonacci, Ising) for universality</li>
      </ul>

      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Topological protection from local errors</li>
        <li>Quantum memory (not computation)</li>
        <li>Building block for more complex topological codes</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Three non-trivial anyons of Z₂ toric code:</strong></p>
      <ul>
        <li><strong>e-particle (electric charge):</strong> Violates A_s = -1, bosonic (θ=0), quantum dimension d=1, created by Z-string</li>
        <li><strong>m-particle (magnetic flux):</strong> Violates B_p = -1, bosonic (θ=0), quantum dimension d=1, created by X-string, dual to e</li>
        <li><strong>ε-particle (fermion):</strong> Composite e×m, fermionic (θ=π), quantum dimension d=1, created by Y-string, emergent fermion from bosons</li>
        <li><strong>Fusion algebra:</strong> Z₂ × Z₂ group structure, all particles self-inverse (a×a=1)</li>
        <li><strong>Statistics:</strong> e-m mutual semionic (θ_{em}=π), ε-ε fermionic (θ_{εε}=π)</li>
        <li><strong>Total quantum dimension:</strong> 𝒟 = 2, determines ground state degeneracy d_{GSD}(T²) = 4</li>
        <li><strong>Detection:</strong> Syndrome measurement {A_s, B_p} identifies anyon type and position</li>
        <li><strong>Significance:</strong> Simplest model of intrinsic topological order; demonstrates emergent fermions; foundation for topological quantum memory</li>
      </ul>

      <p><strong>Key insight:</strong> Three distinct anyonic quasiparticles emerge from simple local Hamiltonian, with fermionic ε arising from topological binding of bosonic e and m. This exemplifies how topology enriches the structure of quantum matter beyond conventional phases.</p>

      <p><strong>Next:</strong> Section 6.9.4 explores the three types of string operators that create and manipulate these anyons.</p>
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
