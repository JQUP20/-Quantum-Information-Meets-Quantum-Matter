<template>
  <div class="section-content">
    <h1>4.5.1 Examples of Frustration-Free Hamiltonians</h1>

    <p>Frustration-free Hamiltonians represent a special class of many-body systems where all local interaction terms can be simultaneously minimized. This remarkable property makes many frustration-free systems exactly solvable and provides insights into ground state structure, topological order, and quantum computation.</p>

    <h2>Definition and Motivation</h2>

    <div class="highlight-box">
      <h3>Frustration-Free Hamiltonians</h3>

      <p><strong>Definition:</strong> A local Hamiltonian H = Σ_i h_i is <strong>frustration-free</strong> if there exists a ground state |ψ₀⟩ that minimizes every local term simultaneously:</p>
      <div class="equation">
        h_i |ψ₀⟩ = λ_i^{min} |ψ₀⟩  for all i
      </div>

      <p><strong>Equivalent condition:</strong> The ground state energy equals the sum of minimum eigenvalues:</p>
      <div class="equation">
        E_0 = ⟨ψ₀|H|ψ₀⟩ = Σ_i λ_i^{min}
      </div>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>No competing interactions—all terms "want" the same ground state</li>
        <li>Local measurements reveal ground state structure</li>
        <li>Often exactly solvable or highly constrained</li>
        <li>May exhibit exotic properties (topological order, degeneracy)</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Contrast with Frustrated Systems</h3>

      <p><strong>Frustrated Hamiltonian:</strong> Competing interactions prevent simultaneous minimization of all terms.</p>

      <p><strong>Example:</strong> Antiferromagnetic Ising on triangle:</p>
      <div class="equation">
        H = σ₁^z σ₂^z + σ₂^z σ₃^z + σ₃^z σ₁^z
      </div>

      <p>Cannot make all three pairs antiparallel → frustration!</p>

      <p><strong>Consequences of frustration:</strong></p>
      <ul>
        <li>Complex ground state manifolds</li>
        <li>Spin glasses and disorder</li>
        <li>Slow dynamics and metastability</li>
        <li>Computational hardness (optimization is NP-hard)</li>
      </ul>
    </div>

    <h2>Example 1: Ferromagnetic Ising Model</h2>

    <div class="highlight-box">
      <h3>The Simplest Frustration-Free System</h3>

      <p><strong>Hamiltonian:</strong> On d-dimensional lattice with sites V and edges E:</p>
      <div class="equation">
        H = -J Σ_{⟨i,j⟩∈E} σ_i^z σ_j^z,  J > 0
      </div>

      <p>Each local term: h_{ij} = -J σ_i^z σ_j^z</p>

      <p><strong>Minimum eigenvalue:</strong></p>
      <ul>
        <li>σ_i^z σ_j^z has eigenvalues ±1</li>
        <li>Minimum eigenvalue: -1 (when spins aligned)</li>
        <li>Each term contributes: λ_{ij}^{min} = -J(-1) = -J</li>
      </ul>

      <p><strong>Ground states:</strong></p>
      <div class="equation">
        |ψ₀⟩ = |↑↑...↑⟩  or  |↓↓...↓⟩
      </div>

      <p><strong>Verification of frustration-free property:</strong></p>
      <ul>
        <li>For |↑↑...↑⟩: σ_i^z σ_j^z |↑↑...↑⟩ = (+1)(+1)|↑↑...↑⟩ = |↑↑...↑⟩</li>
        <li>Each term: h_{ij}|↑↑...↑⟩ = -J|↑↑...↑⟩ = λ_{ij}^{min}|↑↑...↑⟩ ✓</li>
        <li>Total energy: E₀ = -J|E| (number of edges)</li>
      </ul>

      <p><strong>Ground state degeneracy:</strong> 2-fold (up/down symmetry breaking)</p>
    </div>

    <div class="note-box">
      <h3>Why Antiferromagnetic Ising Can Be Frustrated</h3>

      <p><strong>Bipartite lattices (e.g., square, cubic):</strong></p>
      <div class="equation">
        H_{AFM} = +J Σ_{⟨i,j⟩} σ_i^z σ_j^z,  J > 0
      </div>

      <p>On bipartite lattice: Can achieve Néel order |↑↓↑↓...⟩ → frustration-free!</p>

      <p><strong>Non-bipartite lattices (e.g., triangular, kagome):</strong></p>
      <p>Cannot find perfect antiparallel configuration → frustrated!</p>

      <p><strong>Key lesson:</strong> Frustration depends on both interactions AND geometry</p>
    </div>

    <h2>Example 2: Toric Code (Kitaev, 1997)</h2>

    <div class="highlight-box">
      <h3>Topological Frustration-Free Model</h3>

      <p><strong>Setup:</strong> Qubits on edges of 2D square lattice (torus topology), L×L sites</p>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = -Σ_v A_v - Σ_p B_p
      </div>

      <p><strong>Operators:</strong></p>
      <ul>
        <li><strong>Vertex terms:</strong> A_v = ∏_{i∈star(v)} σ_i^x (4 edges around vertex v)</li>
        <li><strong>Plaquette terms:</strong> B_p = ∏_{i∈∂p} σ_i^z (4 edges around plaquette p)</li>
      </ul>

      <p><strong>Commutation:</strong> [A_v, A_{v'}] = 0, [B_p, B_{p'}] = 0, [A_v, B_p] = 0</p>

      <p><strong>Eigenvalues:</strong> A_v, B_p ∈ {±1}</p>
    </div>

    <div class="info-box">
      <h3>Ground State Structure</h3>

      <p><strong>Ground state manifold:</strong> All states satisfying:</p>
      <div class="equation">
        A_v |ψ⟩ = +1|ψ⟩,  B_p |ψ⟩ = +1|ψ⟩  for all v, p
      </div>

      <p><strong>Verification of frustration-free:</strong></p>
      <ul>
        <li>Each term h_v = -A_v has eigenvalues ±1, minimum -1 (when A_v = +1)</li>
        <li>Each term h_p = -B_p has eigenvalues ±1, minimum -1 (when B_p = +1)</li>
        <li>Ground states minimize all terms simultaneously since [A_v, B_p] = 0</li>
      </ul>

      <p><strong>Ground state degeneracy:</strong> 4-fold on torus (topological)</p>
      <ul>
        <li>2 independent non-contractible loops</li>
        <li>Each can have flux 0 or π → 2² = 4 states</li>
      </ul>

      <p><strong>Ground state energy:</strong></p>
      <div class="equation">
        E_0 = -(# vertices) - (# plaquettes) = -(L² + L²) = -2L²
      </div>
    </div>

    <div class="note-box">
      <h3>Physical Properties</h3>

      <p><strong>Excitations:</strong></p>
      <ul>
        <li><strong>e-particles:</strong> Violations of A_v = +1 (electric charges)</li>
        <li><strong>m-particles:</strong> Violations of B_p = +1 (magnetic fluxes)</li>
        <li><strong>ε = e × m:</strong> Fermion (anyonic statistics)</li>
      </ul>

      <p><strong>Topological order:</strong></p>
      <ul>
        <li>Ground states indistinguishable by local measurements</li>
        <li>Entanglement entropy obeys area law with topological correction: S = αL - γ, γ = log(4)</li>
        <li>Robust against local perturbations</li>
      </ul>

      <p><strong>Application:</strong> Quantum error correction (surface code)</p>
    </div>

    <h2>Example 3: AKLT Model (Affleck-Kennedy-Lieb-Tasaki, 1987)</h2>

    <div class="highlight-box">
      <h3>Spin-1 Chain with Unique Ground State</h3>

      <p><strong>Hamiltonian:</strong> 1D chain of spin-1 particles:</p>
      <div class="equation">
        H_{AKLT} = Σ_i P_{i,i+1}^{(S=2)}
      </div>

      <p>where P_{i,i+1}^{(S=2)} projects two neighboring spin-1's onto total spin S = 2 subspace.</p>

      <p><strong>Explicit form:</strong></p>
      <div class="equation">
        H_{AKLT} = Σ_i [S_i · S_{i+1} + (1/3)(S_i · S_{i+1})² + 2/3]
      </div>

      <p><strong>Key property:</strong> P_{i,i+1}^{(S=2)} ≥ 0 (projection operator)</p>
    </div>

    <div class="info-box">
      <h3>Valence Bond Solid (VBS) Ground State</h3>

      <p><strong>Construction:</strong></p>
      <ol>
        <li>Decompose each spin-1 into two spin-1/2's:
          <div class="equation">
            |1⟩ = |↑↑⟩, |0⟩ = (1/√2)(|↑↓⟩ + |↓↑⟩), |-1⟩ = |↓↓⟩
          </div>
        </li>
        <li>Form singlet bonds between neighboring auxiliary spins:
          <div class="equation">
            |VBS⟩ = ∏_i |singlet⟩_{(i,R),(i+1,L)}
          </div>
          where |singlet⟩ = (1/√2)(|↑↓⟩ - |↓↑⟩)
        </li>
        <li>Project back to physical spin-1 space</li>
      </ol>

      <p><strong>Why frustration-free:</strong></p>
      <p>Neighboring spins i, i+1 coupled by singlet → total spin S_{i,i+1} ∈ {0, 1} (never 2!)</p>
      <div class="equation">
        P_{i,i+1}^{(S=2)} |VBS⟩ = 0  for all i
      </div>

      <p>Thus E₀ = 0 = Σ_i (minimum eigenvalue of P_i^{(S=2)}) ✓</p>
    </div>

    <div class="note-box">
      <h3>Remarkable Properties</h3>

      <p><strong>1. Unique ground state</strong> (up to boundary conditions)</p>
      <ul>
        <li>Spectral gap: Δ > 0.3 J (Haldane gap)</li>
        <li>Exponentially decaying correlations</li>
      </ul>

      <p><strong>2. Edge states</strong> (open boundary conditions)</p>
      <ul>
        <li>Free spin-1/2 at each end</li>
        <li>Protected by bulk gap → topological</li>
        <li>First example of symmetry-protected topological (SPT) phase</li>
      </ul>

      <p><strong>3. Matrix Product State (MPS) representation</strong></p>
      <div class="equation">
        |VBS⟩ = Σ_{s₁,...,s_N} Tr[A^{s₁} A^{s₂} ... A^{s_N}] |s₁s₂...s_N⟩
      </div>
      <p>with bond dimension D = 2 (optimal!)</p>

      <p><strong>4. Parent Hamiltonian construction</strong></p>
      <p>AKLT is parent Hamiltonian for |VBS⟩ → can reverse-engineer Hamiltonians from desired states!</p>
    </div>

    <h2>Example 4: GHZ State Parent Hamiltonian</h2>

    <div class="highlight-box">
      <h3>Frustration-Free Hamiltonian with Entangled Ground State</h3>

      <p><strong>Target state:</strong> GHZ state on N qubits:</p>
      <div class="equation">
        |GHZ⟩ = (1/√2)(|0⟩^{⊗N} + |1⟩^{⊗N})
      </div>

      <p><strong>Parent Hamiltonian:</strong></p>
      <div class="equation">
        H = Σ_i h_i,  h_i = (1/2)(I - σ_i^x ∏_{j≠i} σ_j^x)
      </div>

      <p><strong>Properties:</strong></p>
      <ul>
        <li>Each h_i is projector onto subspace orthogonal to |GHZ⟩</li>
        <li>|GHZ⟩ satisfies: h_i|GHZ⟩ = 0 for all i</li>
        <li>Thus frustration-free with E₀ = 0</li>
      </ul>

      <p><strong>Note:</strong> This Hamiltonian is N-local (non-physical), but illustrates parent Hamiltonian construction</p>
    </div>

    <h2>Example 5: Cluster State Hamiltonian</h2>

    <div class="info-box">
      <h3>Measurement-Based Quantum Computation Resource</h3>

      <p><strong>1D Cluster state:</strong> On N qubits:</p>
      <div class="equation">
        |Φ_{cluster}⟩ = ∏_{i=1}^{N-1} CZ_{i,i+1} |+⟩^{⊗N}
      </div>
      <p>where |+⟩ = (|0⟩ + |1⟩)/√2 and CZ = diag(1,1,1,-1)</p>

      <p><strong>Parent Hamiltonian:</strong></p>
      <div class="equation">
        H_{cluster} = -Σ_i K_i,  K_i = σ_{i-1}^z σ_i^x σ_{i+1}^z
      </div>

      <p><strong>Stabilizer structure:</strong></p>
      <ul>
        <li>Cluster state is unique +1 eigenstate of all K_i</li>
        <li>[K_i, K_j] = 0 for all i, j</li>
        <li>Frustration-free with unique ground state</li>
      </ul>

      <p><strong>2D generalization:</strong></p>
      <div class="equation">
        K_v = σ_v^x ∏_{w∈neighbors(v)} σ_w^z
      </div>
      <p>Universal resource for measurement-based quantum computation</p>
    </div>

    <h2>Comparison Table</h2>

    <div class="comparison-box">
      <h3>Properties of Frustration-Free Examples</h3>
      <table class="comparison-table">
        <tr>
          <th>Model</th>
          <th>Dimension</th>
          <th>Local dimension</th>
          <th>GS degeneracy</th>
          <th>Topology</th>
          <th>Exactly solvable?</th>
        </tr>
        <tr>
          <td><strong>Ferromagnetic Ising</strong></td>
          <td>Any</td>
          <td>2 (spin-1/2)</td>
          <td>2 (Z₂ SSB)</td>
          <td>Trivial</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td><strong>Toric Code</strong></td>
          <td>2D</td>
          <td>2 (qubit)</td>
          <td>4 (topological)</td>
          <td>Z₂ topological order</td>
          <td>Yes (commuting)</td>
        </tr>
        <tr>
          <td><strong>AKLT</strong></td>
          <td>1D</td>
          <td>3 (spin-1)</td>
          <td>1 (unique, PBC)</td>
          <td>Haldane/SPT</td>
          <td>Yes (MPS)</td>
        </tr>
        <tr>
          <td><strong>Cluster State</strong></td>
          <td>1D/2D</td>
          <td>2 (qubit)</td>
          <td>1 (unique)</td>
          <td>SPT (1D), SSPT (2D)</td>
          <td>Yes (stabilizer)</td>
        </tr>
        <tr>
          <td><strong>GHZ parent</strong></td>
          <td>Any</td>
          <td>2 (qubit)</td>
          <td>1 (unique)</td>
          <td>Trivial</td>
          <td>Yes (N-local)</td>
        </tr>
      </table>

      <p><strong>Legend:</strong></p>
      <ul>
        <li>SSB = Spontaneous symmetry breaking</li>
        <li>SPT = Symmetry-protected topological</li>
        <li>PBC = Periodic boundary conditions</li>
        <li>MPS = Matrix product state</li>
      </ul>
    </div>

    <h2>General Construction Principles</h2>

    <div class="highlight-box">
      <h3>Parent Hamiltonian Construction</h3>

      <p><strong>Given:</strong> Desired ground state |ψ₀⟩</p>

      <p><strong>Method 1: Projection approach</strong></p>
      <ol>
        <li>Define local projectors: P_i = I - |ψ₀⟩⟨ψ₀| restricted to region i</li>
        <li>Construct: H = Σ_i P_i</li>
        <li>Then: H|ψ₀⟩ = 0 → |ψ₀⟩ is ground state with E₀ = 0</li>
      </ol>

      <p><strong>Method 2: Kernel approach (for MPS/PEPS)</strong></p>
      <ol>
        <li>Identify local reduced density matrices: ρ_i = Tr_{all but i}[|ψ₀⟩⟨ψ₀|]</li>
        <li>Project onto kernel: h_i = (I - ρ_i)/Tr[I - ρ_i]</li>
        <li>Construct: H = Σ_i h_i</li>
      </ol>

      <p><strong>Key insight:</strong> Frustration-free Hamiltonians can be designed to stabilize desired quantum states!</p>
    </div>

    <div class="info-box">
      <h3>Commuting vs. Non-Commuting Terms</h3>

      <p><strong>Commuting frustration-free:</strong></p>
      <ul>
        <li>All terms pairwise commute: [h_i, h_j] = 0</li>
        <li>Examples: Toric code, cluster states (stabilizer models)</li>
        <li>Ground states are common eigenstates of all h_i</li>
        <li>Often exactly solvable via simultaneous diagonalization</li>
      </ul>

      <p><strong>Non-commuting frustration-free:</strong></p>
      <ul>
        <li>Terms do not all commute: [h_i, h_j] ≠ 0 in general</li>
        <li>Examples: AKLT, ferromagnetic Heisenberg</li>
        <li>Ground state minimizes each term but not necessarily eigenstate</li>
        <li>May require advanced techniques (MPS, Bethe ansatz)</li>
      </ul>

      <p><strong>Complexity difference:</strong> Section 4.5.3 shows 2-local commuting frustration-free has polynomial-time algorithm!</p>
    </div>

    <h2>Physical and Computational Significance</h2>

    <div class="note-box">
      <h3>Why Study Frustration-Free Systems?</h3>

      <p><strong>1. Exact solvability</strong></p>
      <ul>
        <li>Provide benchmarks for numerical methods</li>
        <li>Test theories of entanglement and topology</li>
        <li>Reveal universal properties (critical exponents, entanglement scaling)</li>
      </ul>

      <p><strong>2. Topological phases</strong></p>
      <ul>
        <li>Toric code → Z₂ topological order</li>
        <li>AKLT → Haldane phase (SPT)</li>
        <li>Cluster states → measurement-based computation</li>
      </ul>

      <p><strong>3. Computational complexity</strong></p>
      <ul>
        <li>Frustration-free ground states can still be QMA-complete (k ≥ 3)</li>
        <li>But special cases (2-local, commuting) have efficient algorithms</li>
        <li>Reveals structure in quantum complexity landscape</li>
      </ul>

      <p><strong>4. Quantum technologies</strong></p>
      <ul>
        <li>Error correction (surface codes from toric code)</li>
        <li>Quantum computation (cluster states)</li>
        <li>Quantum simulation (engineered Hamiltonians)</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Definition:</strong> Frustration-free ⟺ all terms simultaneously minimized in ground state</li>
        <li><strong>Examples span diverse physics:</strong> Ferromagnets, topological order, SPT phases, stabilizer states</li>
        <li><strong>Construction:</strong> Parent Hamiltonian techniques design H from desired |ψ₀⟩</li>
        <li><strong>Commuting vs non-commuting:</strong> Dramatic complexity difference (poly-time vs QMA-complete)</li>
        <li><strong>Applications:</strong> Quantum error correction, computation, simulation</li>
        <li><strong>Contrast with frustration:</strong> Frustrated systems are computationally hard (spin glasses)</li>
      </ul>

      <p><strong>Next:</strong> Section 4.5.2 investigates the computational complexity of the frustration-free ground state problem.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_5_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
