<template>
  <div class="section-content">
    <h1>10.5.2 SPT Model from Group Cohomology</h1>

    <p>
      Every cohomology class in H^{d+1}(G,U(1)) has an exactly solvable representative called a <strong>fixed-point model</strong>. This section shows how to systematically construct explicit SPT wavefunctions and Hamiltonians from abstract cocycle data.
    </p>

    <h2>Fixed-Point Wavefunction Construction</h2>

    <div class="info-box">
      <h3>General Construction Algorithm</h3>

      <h4>Step 1: Lattice and Degrees of Freedom</h4>
      <p>
        Start with d-dimensional lattice. Place group element g_ℓ ∈ G on each link/simplex ℓ.
      </p>

      <h4>Step 2: Configuration Space</h4>
      <p>
        A configuration is an assignment {g_ℓ} of group elements to all links. Configuration space is G^{|links|}.
      </p>

      <h4>Step 3: Cocycle Weighting</h4>
      <p>
        For a (d+1)-cocycle ω ∈ Z^{d+1}(G,U(1)), assign amplitude:
      </p>
      <div class="equation">
        A({g_ℓ}) = ω(g_{ℓ₁}, g_{ℓ₂}, ..., g_{ℓ_{d+1}})
      </div>
      <p>
        where the product runs over all (d+1)-simplices with boundary links {g_{ℓᵢ}}.
      </p>

      <h4>Step 4: Equal-Weight Superposition</h4>
      <div class="equation">
        |ψ_ω⟩ = (1/√|G|^{|links|}) ∑_{{g_ℓ}} ω({g_ℓ}) |{g_ℓ}⟩
      </div>
      <p>
        This is the <strong>fixed-point wavefunction</strong> for cocycle ω.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Why This Construction Works</h4>
      <ul>
        <li><strong>Symmetry:</strong> Global g ∈ G acts by g_ℓ → gg_ℓ for all ℓ. Cocycle condition ensures amplitude transforms correctly.</li>
        <li><strong>Exactly solvable:</strong> Wavefunction is uniform superposition with cocycle phases → commuting projector Hamiltonian.</li>
        <li><strong>SPT property:</strong> Trivial cocycle (coboundary) gives short-range entangled product state. Non-trivial cocycle gives long-range entangled SPT.</li>
        <li><strong>Bulk-boundary:</strong> On open manifold, boundary hosts projective representation with cocycle ω.</li>
      </ul>
    </div>

    <h2>Detailed Example: 1D ℤ₂ SPT Phase</h2>

    <div class="info-box">
      <h3>ℤ₂ Cohomology and Cocycles</h3>
      <p>
        For G = ℤ₂ = {e, g} with g² = e:
      </p>
      <div class="equation">
        H²(ℤ₂, U(1)) = ℤ₂
      </div>
      <p>
        Two cocycles:
      </p>
      <ul>
        <li><strong>Trivial:</strong> ω₀(g_a, g_b) = 1 for all g_a, g_b</li>
        <li><strong>Non-trivial:</strong> ω₁(g,g) = -1, ω₁(e,·) = ω₁(·,e) = 1</li>
      </ul>

      <h4>Verification of Cocycle Condition</h4>
      <p>
        Check (dω)(g,g,g) = 1:
      </p>
      <div class="equation">
        ω₁(g,g) ω₁(g,e) / [ω₁(g,g) ω₁(e,g)] = (-1)(1) / [(-1)(1)] = 1 ✓
      </div>
    </div>

    <div class="highlight-box">
      <h4>1D Chain Fixed-Point Construction</h4>
      <p>
        1D chain with N sites. Each site i has ℤ₂ degree of freedom: |0⟩_i or |1⟩_i (representing e or g).
      </p>

      <h4>Wavefunction for ω₁</h4>
      <div class="equation">
        |ψ_{ω₁}⟩ = (1/√(2^N)) ∑_{s₁,...,s_N ∈ {0,1}} (-1)^{∑_i s_i s_{i+1}} |s₁...s_N⟩
      </div>
      <p>
        The phase factor (-1)^{s_i s_{i+1}} comes from ω₁(g^{s_i}, g^{s_{i+1}}).
      </p>

      <h4>Cluster State Representation</h4>
      <p>
        This is equivalent to the cluster state:
      </p>
      <div class="equation">
        |ψ_{ω₁}⟩ = ∏_i CZ_{i,i+1} |+⟩^{⊗N}
      </div>
      <p>
        where |+⟩ = (|0⟩ + |1⟩)/√2 and CZ = diag(1,1,1,-1).
      </p>

      <h4>Proof of Equivalence</h4>
      <p>
        Expand CZ gates:
      </p>
      <div class="equation">
        CZ_{i,i+1} = |00⟩⟨00| + |01⟩⟨01| + |10⟩⟨10| - |11⟩⟨11|
      </div>
      <p>
        Acting on |+⟩^{⊗N}:
      </p>
      <div class="equation">
        ∏_i CZ_{i,i+1} (∑_{s} |s⟩/√(2^N)) = (1/√(2^N)) ∑_s (-1)^{∑_i s_i s_{i+1}} |s⟩
      </div>
    </div>

    <div class="comparison-box">
      <h3>Trivial vs Non-trivial ℤ₂ SPT</h3>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Trivial (ω₀)</th>
            <th>Non-trivial (ω₁)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wavefunction</td>
            <td>|+⟩^{⊗N}</td>
            <td>∏_i CZ_{i,i+1} |+⟩^{⊗N}</td>
          </tr>
          <tr>
            <td>Entanglement</td>
            <td>Product state</td>
            <td>Area-law entangled</td>
          </tr>
          <tr>
            <td>Open chain</td>
            <td>Unique ground state</td>
            <td>2-fold degenerate</td>
          </tr>
          <tr>
            <td>Edge modes</td>
            <td>None</td>
            <td>ℤ₂ protected degeneracy</td>
          </tr>
          <tr>
            <td>String order</td>
            <td>0</td>
            <td>Non-zero (∼0.5)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Parent Hamiltonian Construction</h2>

    <div class="info-box">
      <h3>Commuting Projector Method</h3>
      <p>
        For fixed-point state |ψ_ω⟩, construct parent Hamiltonian as sum of commuting projectors.
      </p>

      <h4>General Formula</h4>
      <div class="equation">
        H = -∑_v P_v
      </div>
      <p>
        where P_v projects onto symmetric subspace at vertex/site v.
      </p>

      <h4>Properties</h4>
      <ul>
        <li>All P_v commute: [P_v, P_w] = 0</li>
        <li>|ψ_ω⟩ is exact ground state: P_v |ψ_ω⟩ = |ψ_ω⟩</li>
        <li>Exactly solvable: eigenstates labeled by stabilizer eigenvalues</li>
        <li>Gap protected by symmetry G</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Example: 1D ℤ₂ Cluster Hamiltonian</h4>
      <p>
        For cluster state |ψ_{ω₁}⟩ = ∏_i CZ_{i,i+1} |+⟩^{⊗N}:
      </p>
      <div class="equation">
        H_{cluster} = -∑_i X_{i-1} Z_i X_{i+1}
      </div>
      <p>
        Each term is a stabilizer:
      </p>
      <div class="equation">
        K_i = X_{i-1} Z_i X_{i+1}
      </div>
      <p>
        Ground state satisfies K_i |ψ⟩ = |ψ⟩ for all i.
      </p>

      <h4>Symmetry</h4>
      <p>
        ℤ₂ × ℤ₂ symmetry generated by:
      </p>
      <div class="equation">
        U₁ = ∏_i X_i,  U₂ = ∏_i Z_i
      </div>
      <p>
        Both commute with H: [U₁, H] = [U₂, H] = 0.
      </p>

      <h4>Energy Gap</h4>
      <p>
        Gap Δ = 2 (in units of coupling strength). Protected by symmetry.
      </p>
    </div>

    <h2>Generalization: ℤ_N SPT Phases</h2>

    <div class="info-box">
      <h3>ℤ_N Cocycles</h3>
      <p>
        For G = ℤ_N = {0, 1, ..., N-1}:
      </p>
      <div class="equation">
        H²(ℤ_N, U(1)) = ℤ_N
      </div>
      <p>
        Cocycles labeled by k = 0, 1, ..., N-1:
      </p>
      <div class="equation">
        ω_k(a, b) = exp(2πi k ab / N²)
      </div>

      <h4>Fixed-Point Wavefunction</h4>
      <div class="equation">
        |ψ_k⟩ = (1/√(N^L)) ∑_{n₁,...,n_L} exp(2πi k ∑_i n_i n_{i+1} / N²) |n₁...n_L⟩
      </div>

      <h4>Generalized Cluster Gates</h4>
      <p>
        Define ℤ_N clock and shift operators:
      </p>
      <div class="equation">
        Z|n⟩ = exp(2πi n/N)|n⟩,  X|n⟩ = |n+1 mod N⟩
      </div>
      <p>
        Controlled-phase gate:
      </p>
      <div class="equation">
        CP_k = ∑_{m,n} exp(2πi k mn/N²) |mn⟩⟨mn|
      </div>
      <p>
        Then:
      </p>
      <div class="equation">
        |ψ_k⟩ = ∏_i CP_k^{(i,i+1)} |+⟩^{⊗N}
      </div>
      <p>
        where |+⟩ = (1/√N) ∑_n |n⟩.
      </p>
    </div>

    <h2>2D SPT Construction</h2>

    <div class="info-box">
      <h3>2D Square Lattice Fixed-Point Model</h3>
      <p>
        For 2D SPT with symmetry G, cocycle ω ∈ H³(G,U(1)).
      </p>

      <h4>Degrees of Freedom</h4>
      <p>
        Place group element g_ℓ on each link of square lattice.
      </p>

      <h4>Plaquette Operator</h4>
      <p>
        For plaquette p with boundary links (g₁, g₂, g₃, g₄):
      </p>
      <div class="equation">
        B_p = ∑_{{g_ℓ} on ∂p} ω(g₁,g₂,g₃,g₄) |{g_ℓ}⟩⟨{g_ℓ}|
      </div>

      <h4>Hamiltonian</h4>
      <div class="equation">
        H = -∑_p B_p
      </div>
      <p>
        Exactly solvable with ground state:
      </p>
      <div class="equation">
        |ψ_ω⟩ = (1/√|G|^{|links|}) ∑_{{g_ℓ}} ∏_p ω(g₁^p,g₂^p,g₃^p,g₄^p) |{g_ℓ}⟩
      </div>
    </div>

    <div class="highlight-box">
      <h4>Example: 2D ℤ₂ CZX Model</h4>
      <p>
        2D generalization of cluster state. Qubits on vertices of square lattice.
      </p>

      <h4>Wavefunction</h4>
      <div class="equation">
        |ψ_{CZX}⟩ = ∏_{plaquettes} CZ_{horizontal} CX_{vertical} |+⟩^{⊗(L×L)}
      </div>

      <h4>Hamiltonian</h4>
      <div class="equation">
        H = -∑_v X_{←} Z_{↓} X_{→} Z_{↑}
      </div>
      <p>
        where arrows indicate neighbors of vertex v.
      </p>

      <h4>Properties</h4>
      <ul>
        <li>ℤ₂ × ℤ₂ symmetry: ∏_i X_i and ∏_i Z_i</li>
        <li>On torus: Unique ground state</li>
        <li>On disk: Gapless edge modes (1D cluster state on boundary)</li>
        <li>Topological entanglement entropy: S_topo = log 2</li>
      </ul>
    </div>

    <h2>MPS/PEPS Representation</h2>

    <div class="info-box">
      <h3>From Cocycle to Tensor Network</h3>
      <p>
        Fixed-point SPT states have natural tensor network representations.
      </p>

      <h4>1D MPS Construction</h4>
      <p>
        For 1D SPT with cocycle ω(g,h):
      </p>
      <div class="equation">
        |ψ⟩ = ∑_{{g_i}} Tr[A^{g₁} A^{g₂} ··· A^{g_N}] |g₁g₂···g_N⟩
      </div>
      <p>
        MPS tensors:
      </p>
      <div class="equation">
        [A^g]_{α,β} = ω(α, g) δ_{αg,β}
      </div>
      <p>
        where α,β ∈ G label virtual indices.
      </p>

      <h4>Symmetry Action</h4>
      <p>
        Global symmetry h ∈ G acts as:
      </p>
      <div class="equation">
        U_h A^g (U_h)^{-1} = A^{hg}
      </div>
      <p>
        Virtual representation:
      </p>
      <div class="equation">
        [V_h]_{α,β} = δ_{hα,β}
      </div>

      <h4>Projective Representation on Edge</h4>
      <p>
        On open chain, edge virtual index transforms as:
      </p>
      <div class="equation">
        V_{g₁} V_{g₂} = ω(g₁,g₂) V_{g₁g₂}
      </div>
      <p>
        This is the projective representation with cocycle ω!
      </p>
    </div>

    <div class="highlight-box">
      <h4>2D PEPS Construction</h4>
      <p>
        For 2D SPT with H³(G,U(1)) cocycle:
      </p>

      <h4>Tensor on Each Site</h4>
      <div class="equation">
        T^g_{α,β,γ,δ} = ω(α,β,g) ω(γ,δ,g)^{-1} [condition]
      </div>
      <p>
        where α,β,γ,δ are virtual indices from four neighboring links.
      </p>

      <h4>Edge Theory</h4>
      <p>
        1D boundary hosts anomalous G-symmetric theory:
      </p>
      <ul>
        <li>Cannot be realized in purely 1D system</li>
        <li>Requires 2D bulk with non-trivial cocycle</li>
        <li>Anomaly coefficient = bulk cocycle class</li>
      </ul>
    </div>

    <h2>Bulk-Boundary Correspondence</h2>

    <div class="info-box">
      <h3>Anomaly Matching Principle</h3>
      <p>
        <strong>General Statement:</strong>
      </p>
      <div class="equation">
        Bulk SPT phase [ω] ∈ H^{d+1}(G,U(1)) ↔ Boundary anomaly [ω]
      </div>

      <h4>What is an Anomaly?</h4>
      <p>
        A d-dimensional theory has <strong>anomaly</strong> if:
      </p>
      <ul>
        <li>Symmetry G cannot be implemented on-site (or locally)</li>
        <li>Symmetry action involves non-trivial cocycle phases</li>
        <li>Theory cannot exist in isolation in d dimensions</li>
        <li>Must live on boundary of (d+1)-dimensional SPT</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Detailed Example: 1D ℤ₂ SPT Boundary</h4>
      <p>
        Consider 1D ℤ₂ SPT (cluster state) on open chain [1, N].
      </p>

      <h4>Edge Hilbert Space</h4>
      <p>
        Left edge: |L⟩ ∈ ℂ² (virtual index of MPS)
      </p>
      <p>
        Right edge: |R⟩ ∈ ℂ²
      </p>

      <h4>ℤ₂ Action on Edges</h4>
      <p>
        Global ℤ₂ symmetry g acts on edges as:
      </p>
      <div class="equation">
        g: |α⟩_L ⊗ |β⟩_R → ω₁(α,β) |gα⟩_L ⊗ |gβ⟩_R
      </div>
      <p>
        The phase ω₁(α,β) = (-1)^{αβ} is the <strong>anomaly</strong>!
      </p>

      <h4>Consequence</h4>
      <p>
        Cannot define consistent ℤ₂ action on left or right edge alone. Only on combined system do phases cancel:
      </p>
      <div class="equation">
        g² = ω₁(α,β) ω₁(gα,gβ) = ω₁(α,β)² = 1 ✓
      </div>
    </div>

    <div class="info-box">
      <h3>Anomaly Inflow Mechanism</h3>
      <p>
        How does bulk SPT "cancel" boundary anomaly?
      </p>

      <h4>Bulk Contribution</h4>
      <p>
        Under symmetry g, bulk wavefunction transforms with phase:
      </p>
      <div class="equation">
        |ψ_{bulk}⟩ → e^{iθ_{bulk}(g)} |ψ_{bulk}⟩
      </div>
      <p>
        For non-trivial SPT: θ_{bulk}(g) ≠ 0 (depends on boundary configuration)
      </p>

      <h4>Boundary Contribution</h4>
      <div class="equation">
        |ψ_{edge}⟩ → e^{iθ_{edge}(g)} |ψ_{edge}⟩
      </div>

      <h4>Consistency</h4>
      <div class="equation">
        θ_{total}(g) = θ_{bulk}(g) + θ_{edge}(g) = 0 mod 2π
      </div>
      <p>
        Bulk phase exactly cancels boundary anomaly → consistent theory!
      </p>
    </div>

    <h2>Quantum Circuit Construction</h2>

    <div class="info-box">
      <h3>Finite-Depth Circuit Implementation</h3>
      <p>
        Many SPT states can be prepared from product state by finite-depth quantum circuits.
      </p>

      <h4>1D ℤ₂ Cluster State Circuit</h4>
      <ol>
        <li>Initialize: |ψ₀⟩ = |+⟩^{⊗N}</li>
        <li>Apply CZ gates: |ψ₁⟩ = ∏_{i odd} CZ_{i,i+1} |ψ₀⟩</li>
        <li>Apply CZ gates: |ψ₂⟩ = ∏_{i even} CZ_{i,i+1} |ψ₁⟩</li>
      </ol>
      <p>
        Circuit depth: 2 (constant, independent of N!)
      </p>

      <h4>General Principle</h4>
      <p>
        SPT states = <strong>short-range entangled</strong> → can be created by:
      </p>
      <ul>
        <li>Finite-depth local unitary circuits</li>
        <li>Depth grows at most logarithmically: d ∼ O(log N)</li>
        <li>Contrast with topologically ordered states (require infinite depth)</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Experimental Realizations</h4>

      <h4>Trapped Ions</h4>
      <ul>
        <li>Platform: ^{171}Yb⁺ or ^{40}Ca⁺ ions</li>
        <li>Qubits: Hyperfine or Zeeman states</li>
        <li>Gates: Mølmer-Sørensen or light-shift gates</li>
        <li>Achievement: 20+ qubit cluster states</li>
      </ul>

      <h4>Superconducting Qubits</h4>
      <ul>
        <li>Platform: Transmon qubits on planar chips</li>
        <li>Gates: Single-qubit rotations + CZ/iSWAP</li>
        <li>Achievement: Google (53 qubits), IBM (127 qubits) cluster-type states</li>
      </ul>

      <h4>Photonic Systems</h4>
      <ul>
        <li>Platform: Integrated photonic circuits</li>
        <li>Encoding: Path, polarization, or time-bin qubits</li>
        <li>Gates: Beam splitters, waveplates, controlled-phase</li>
        <li>Achievement: 10+ qubit cluster states for MBQC</li>
      </ul>
    </div>

    <h2>Stability and Perturbations</h2>

    <div class="info-box">
      <h3>Robustness of SPT Phases</h3>
      <p>
        SPT phases are <strong>stable</strong> to symmetry-preserving perturbations.
      </p>

      <h4>Theorem (Quantum Phase Stability)</h4>
      <p>
        Consider SPT Hamiltonian H₀ with symmetry G and perturbed Hamiltonian:
      </p>
      <div class="equation">
        H(λ) = H₀ + λV
      </div>
      <p>
        where [V,G] = 0 (V preserves symmetry).
      </p>
      <p>
        <strong>Then:</strong> For sufficiently small λ < λ_c, the system remains in the same SPT phase (same cohomology class).
      </p>

      <h4>Phase Transition</h4>
      <p>
        At λ = λ_c, system undergoes <strong>SPT transition</strong>:
      </p>
      <ul>
        <li>Gap closes: Δ(λ_c) = 0</li>
        <li>Critical point with CFT description</li>
        <li>Cohomology class changes across transition</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Symmetry-Breaking Perturbations</h4>
      <p>
        If perturbation <strong>breaks</strong> symmetry: [V,G] ≠ 0
      </p>
      <ul>
        <li>SPT phase is <strong>not</strong> protected</li>
        <li>Any infinitesimal perturbation drives to trivial phase</li>
        <li>Edge modes acquire gap or split</li>
        <li>Example: Magnetic field breaking ℤ₂ in cluster model</li>
      </ul>

      <h4>Numerical Evidence</h4>
      <p>
        DMRG studies of perturbed cluster model:
      </p>
      <div class="equation">
        H = -∑_i (X_{i-1}Z_i X_{i+1} + h Z_i)
      </div>
      <ul>
        <li>h = 0: SPT phase, gap Δ ≈ 2</li>
        <li>0 < h < h_c ≈ 1: SPT phase persists, gap decreases</li>
        <li>h = h_c: Quantum critical point</li>
        <li>h > h_c: Trivial phase (polarized state)</li>
      </ul>
    </div>

    <h2>Generalizations and Advanced Topics</h2>

    <div class="info-box">
      <h3>Fermionic SPT from Super-Cohomology</h3>
      <p>
        Fermionic SPT phases classified by <strong>super-cohomology</strong>:
      </p>
      <div class="equation">
        H^{d+1}(G, ℤ₂^f)
      </div>
      <p>
        where ℤ₂^f is fermion parity group.
      </p>

      <h4>Key Differences</h4>
      <ul>
        <li>Cocycles involve both G and fermion parity</li>
        <li>Additional phases from fermion exchange</li>
        <li>Examples: Kitaev chain (1D), p+ip superconductor (2D)</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Time-Reversal SPT</h4>
      <p>
        For anti-unitary symmetry T with T² = (-1)^F:
      </p>
      <ul>
        <li>Modified cohomology with sign structure</li>
        <li>1D: ℤ₂ classification (trivial or Kramers doublet edge)</li>
        <li>2D: ℤ₂ (quantum spin Hall)</li>
        <li>3D: ℤ₂⁴ (strong + 3 weak TI invariants)</li>
      </ul>

      <h4>Construction</h4>
      <p>
        Fixed-point models more subtle:
      </p>
      <ul>
        <li>Cannot use simple cocycle phases (T is anti-unitary)</li>
        <li>Require decorated domain wall construction</li>
        <li>MPS with anti-linear virtual transformations</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Higher-Order SPT</h3>
      <p>
        Recent generalization: <strong>higher-order SPT</strong> (HOSPT)
      </p>

      <h4>Definition</h4>
      <p>
        d-dimensional HOSPT has gapless modes on (d-n)-dimensional boundary for n ≥ 2:
      </p>
      <ul>
        <li>2D 2nd-order SPT: 0D corner modes</li>
        <li>3D 2nd-order SPT: 1D hinge modes</li>
        <li>3D 3rd-order SPT: 0D corner modes</li>
      </ul>

      <h4>Classification</h4>
      <p>
        Beyond group cohomology. Involves:
      </p>
      <ul>
        <li>Crystalline symmetries (point group)</li>
        <li>Twisted cohomology with spatial structure</li>
        <li>Example: ℤ₄ classification for C₄ rotation symmetry in 2D</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h4>Key Takeaways</h4>
      <ul>
        <li><strong>Fixed-point construction:</strong> Every cocycle ω ∈ H^{d+1}(G,U(1)) → exactly solvable SPT model</li>
        <li><strong>Algorithm:</strong> Equal-weight superposition with cocycle phase factors</li>
        <li><strong>1D ℤ₂ example:</strong> Non-trivial cocycle → cluster state ∏CZ|+⟩^{⊗N}</li>
        <li><strong>Parent Hamiltonian:</strong> Commuting projectors, exactly solvable, gapped</li>
        <li><strong>MPS/PEPS:</strong> Cocycle determines virtual representation (projective on edge)</li>
        <li><strong>Bulk-boundary:</strong> Bulk cocycle = boundary anomaly → protected edge modes</li>
        <li><strong>Quantum circuits:</strong> SPT states preparable in finite (often constant) depth</li>
        <li><strong>Stability:</strong> Robust to symmetry-preserving perturbations, fragile to symmetry-breaking</li>
        <li><strong>Generalizations:</strong> Fermions (super-cohomology), T-reversal (modified cohomology), higher-order (crystalline)</li>
      </ul>

      <h4>Conceptual Importance</h4>
      <p>
        This section completes the connection: <strong>abstract algebra → concrete physics</strong>
      </p>
      <p>
        Group cohomology H^{d+1}(G,U(1)) is not just classification—it provides explicit recipes to build SPT Hamiltonians, wavefunctions, and tensor networks. Every mathematical cohomology class corresponds to a physical quantum phase of matter!
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_5_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
