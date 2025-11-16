<template>
  <div class="section-content">
    <h1>7.4.3 Topological Order</h1>

    <div class="info-box">
      <h3>The Crown Jewel of Quantum Phases</h3>
      <p><strong>Topological order</strong> represents the most exotic form of quantum organization—a phase of matter where information is encoded not in local degrees of freedom but in the global topological structure of the quantum state. This phenomenon, impossible in classical physics, emerges from long-range quantum entanglement and enables fault-tolerant quantum computation.</p>
    </div>

    <h2>Defining Topological Order</h2>

    <h3>Formal Definition (Wen, 1989)</h3>

    <div class="highlight-box">
      <h3>Intrinsic Topological Order</h3>
      <p>A gapped quantum phase possesses <strong>intrinsic topological order</strong> if it exhibits:</p>
      <ol>
        <li><strong>Long-range entanglement:</strong> Cannot be prepared from product state by finite-depth local unitary circuit</li>
        <li><strong>Topological ground state degeneracy:</strong> Number of ground states depends on spatial topology
          <div class="equation">
            GSD(M) = f(topology of manifold M)
          </div>
        </li>
        <li><strong>Anyonic excitations:</strong> Quasiparticles with fractional statistics and quantum dimensions</li>
        <li><strong>Topological entanglement entropy:</strong> γ = log 𝒟 > 0 where 𝒟 = √(∑_a d_a²)</li>
      </ol>
      <p><strong>Key property:</strong> These features are <strong>robust</strong> to all local perturbations—protected by energy gap and topology, not symmetry.</p>
    </div>

    <h3>Contrast with Other Orders</h3>

    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Feature</th>
          <th>Symmetry Breaking</th>
          <th>SPT Order</th>
          <th>Topological Order</th>
        </tr>
        <tr>
          <td><strong>Local order parameter</strong></td>
          <td>Yes: ⟨φ⟩ ≠ 0</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td><strong>Symmetry protection</strong></td>
          <td>Breaks symmetry</td>
          <td>Requires symmetry</td>
          <td>Independent of symmetry</td>
        </tr>
        <tr>
          <td><strong>Entanglement</strong></td>
          <td>Short-range</td>
          <td>Short-range (SRE)</td>
          <td>Long-range (LRE)</td>
        </tr>
        <tr>
          <td><strong>Ground state degeneracy</strong></td>
          <td>Symmetry-related</td>
          <td>Unique (per symmetry sector)</td>
          <td>Topological (depends on manifold)</td>
        </tr>
        <tr>
          <td><strong>Excitations</strong></td>
          <td>Goldstone modes / magnons</td>
          <td>Conventional quasiparticles</td>
          <td>Anyons (fractional statistics)</td>
        </tr>
        <tr>
          <td><strong>Edge modes</strong></td>
          <td>Gapless (Goldstone) if continuous symmetry</td>
          <td>Symmetry-protected gapless</td>
          <td>Topologically protected (chiral)</td>
        </tr>
        <tr>
          <td><strong>Robustness</strong></td>
          <td>Fragile (symmetry-breaking terms)</td>
          <td>Fragile (symmetry-breaking)</td>
          <td>Robust (all local perturbations)</td>
        </tr>
      </table>
    </div>

    <h2>Topological Ground State Degeneracy</h2>

    <h3>Dependence on Spatial Topology</h3>

    <p>The number of ground states is a function of the manifold topology:</p>

    <div class="equation">
      GSD(sphere) = 1
      GSD(torus) = N_{anyon types}
      GSD(genus g surface) = N^{2g}
    </div>

    <p>For example, the Z₂ toric code:</p>
    <ul>
      <li><strong>Sphere:</strong> Unique ground state</li>
      <li><strong>Torus:</strong> 4 degenerate ground states {|0₁0₂⟩, |0₁1₂⟩, |1₁0₂⟩, |1₁1₂⟩}</li>
      <li><strong>Genus g:</strong> 4ᵍ = 2²ᵍ ground states</li>
    </ul>

    <div class="highlight-box">
      <h3>Physical Meaning of Degeneracy</h3>
      <p>The topological degeneracy arises from:</p>
      <ul>
        <li><strong>Non-contractible loops:</strong> On a torus, two independent cycles (a, b)</li>
        <li><strong>Anyonic flux:</strong> Each cycle can thread different anyonic fluxes</li>
        <li><strong>Local indistinguishability:</strong> Ground states differ only by global topological quantum numbers
          <div class="equation">
            ⟨ψ_i| O_local |ψ_j⟩ = δ_{ij} ⟨O_local⟩
          </div>
        </li>
        <li><strong>Energy splitting:</strong> Exponentially small in system size
          <div class="equation">
            ΔE ~ e^{-L/ξ} → 0 as L → ∞
          </div>
        </li>
      </ul>
    </div>

    <h3>Example: Toric Code on Torus</h3>

    <p>The four ground states correspond to different fluxes through the two cycles:</p>

    <div class="equation">
      |ψ_{n_1,n_2}⟩ ↔ (n_1 mod 2, n_2 mod 2) electric charges threading cycles
    </div>

    <p>These states are related by non-local string operators:</p>

    <div class="equation">
      W^x_{cycle_1} |ψ_{0,n_2}⟩ = |ψ_{1,n_2}⟩
      W^x_{cycle_2} |ψ_{n_1,0}⟩ = |ψ_{n_1,1}⟩
    </div>

    <h2>Anyonic Excitations</h2>

    <h3>What Are Anyons?</h3>

    <p>In 2D, particle statistics is not restricted to bosons (θ = 0) and fermions (θ = π):</p>

    <div class="highlight-box">
      <h3>Anyon Definition</h3>
      <p>An <strong>anyon</strong> is a quasiparticle excitation in 2D with:</p>
      <ul>
        <li><strong>Fractional statistics:</strong> Exchange phase θ ∈ [0, 2π)
          <div class="equation">
            ψ(r_1, r_2) = e^{iθ} ψ(r_2, r_1)
          </div>
        </li>
        <li><strong>Topological quantum numbers:</strong> Conserved labels (anyon type a ∈ {1, e, m, ...})</li>
        <li><strong>Fusion rules:</strong> a × b = ∑_c N^c_{ab} c (generalized addition)</li>
        <li><strong>Quantum dimension:</strong> d_a (effective Hilbert space dimension of anyon type)</li>
      </ul>
    </div>

    <h3>Abelian vs Non-Abelian Anyons</h3>

    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Abelian Anyons</th>
          <th>Non-Abelian Anyons</th>
        </tr>
        <tr>
          <td><strong>Fusion rules</strong></td>
          <td>Unique outcome: a × b = c</td>
          <td>Multiple outcomes: a × b = ∑_c N^c_{ab} c</td>
        </tr>
        <tr>
          <td><strong>Quantum dimension</strong></td>
          <td>d_a = 1 for all a</td>
          <td>d_a > 1 for some a</td>
        </tr>
        <tr>
          <td><strong>Braiding</strong></td>
          <td>Phase only: R_{ab} = e^{iθ_{ab}}</td>
          <td>Unitary matrix: R_{ab} (acts on fusion space)</td>
        </tr>
        <tr>
          <td><strong>Ground state (N anyons)</strong></td>
          <td>Unique (given total charge)</td>
          <td>Degenerate (depends on fusion tree)</td>
        </tr>
        <tr>
          <td><strong>Quantum computation</strong></td>
          <td>Not universal (just phase gates)</td>
          <td>Universal (with measurement)</td>
        </tr>
        <tr>
          <td><strong>Examples</strong></td>
          <td>Laughlin ν=1/m, Z₂ toric code</td>
          <td>Ising anyons (ν=5/2 FQHE?), Fibonacci</td>
        </tr>
      </table>
    </div>

    <h3>Example: Z₂ Toric Code Anyons</h3>

    <p>Four anyon types: {1, e, m, ε}</p>

    <div class="info-box">
      <h3>Z₂ Anyonic Data</h3>
      <ul>
        <li><strong>Trivial (1):</strong> Vacuum / identity
          <ul>
            <li>Quantum dimension: d₁ = 1</li>
            <li>Statistics: θ₁ = 0 (boson)</li>
          </ul>
        </li>
        <li><strong>Electric charge (e):</strong> A_s = -1 violation
          <ul>
            <li>d_e = 1, θ_e = 0 (boson)</li>
          </ul>
        </li>
        <li><strong>Magnetic flux (m):</strong> B_p = -1 violation
          <ul>
            <li>d_m = 1, θ_m = 0 (boson)</li>
          </ul>
        </li>
        <li><strong>Composite (ε = e × m):</strong> Both violations
          <ul>
            <li>d_ε = 1, θ_ε = π (fermion!)</li>
          </ul>
        </li>
      </ul>

      <p><strong>Fusion rules:</strong></p>
      <div class="equation">
        e × e = 1, m × m = 1, ε × ε = 1
        e × m = ε, e × ε = m, m × ε = e
      </div>

      <p><strong>Mutual statistics:</strong></p>
      <div class="equation">
        θ(e, m) = π (fermion exchange phase when e circles m)
      </div>

      <p><strong>Total quantum dimension:</strong></p>
      <div class="equation">
        𝒟 = √(d₁² + d_e² + d_m² + d_ε²) = √4 = 2
      </div>

      <p><strong>TEE:</strong> γ = log 𝒟 = log 2</p>
    </div>

    <h3>Example: Fibonacci Anyons (Non-Abelian)</h3>

    <p>Two anyon types: {1, τ}</p>

    <ul>
      <li><strong>Fusion rules:</strong>
        <div class="equation">
          1 × 1 = 1, 1 × τ = τ
          τ × τ = 1 + τ (two possible outcomes!)
        </div>
      </li>
      <li><strong>Quantum dimensions:</strong>
        <div class="equation">
          d₁ = 1, d_τ = φ = (1 + √5)/2 (golden ratio)
        </div>
      </li>
      <li><strong>Total quantum dimension:</strong>
        <div class="equation">
          𝒟 = √(1² + φ²) = √(1 + φ²) = φ√(2 + φ) ≈ 2.058
        </div>
      </li>
      <li><strong>Statistics angle:</strong> θ_τ = 4π/5</li>
      <li><strong>Computational power:</strong> Universal for quantum computation!</li>
    </ul>

    <h2>Modular Tensor Category Framework</h2>

    <h3>Mathematical Structure of Anyonic Theories</h3>

    <p>The complete anyonic theory is captured by a <strong>modular tensor category</strong> (MTC) with data:</p>

    <div class="highlight-box">
      <h3>Anyonic Data (MTC)</h3>
      <ol>
        <li><strong>Anyon types:</strong> Finite set {a, b, c, ...} including trivial anyon 1</li>
        <li><strong>Fusion rules:</strong> N^c_{ab} ∈ ℤ_≥0
          <div class="equation">
            a × b = ∑_c N^c_{ab} c
          </div>
        </li>
        <li><strong>Quantum dimensions:</strong> d_a > 0 satisfying
          <div class="equation">
            d_a d_b = ∑_c N^c_{ab} d_c
          </div>
        </li>
        <li><strong>F-symbols:</strong> [F^{abc}_d]_{ef} (fusion associativity, hexagon relations)</li>
        <li><strong>R-symbols:</strong> R^c_{ab} (braiding statistics)</li>
        <li><strong>Twist factors:</strong> θ_a = e^{2πi s_a} (topological spin)</li>
      </ol>

      <p><strong>Consistency conditions:</strong> Pentagon equation (F-symbols) and hexagon equations (F and R interplay)</p>
    </div>

    <h3>S and T Matrices</h3>

    <p>Two fundamental matrices characterize the anyonic theory:</p>

    <div class="equation">
      <strong>S-matrix:</strong> S_{ab} = (1/𝒟) ∑_c N^c_{ab} d_c e^{iπ(s_a + s_b - s_c)}
    </div>

    <div class="equation">
      <strong>T-matrix:</strong> T_{ab} = δ_{ab} θ_a = δ_{ab} e^{2πi s_a}
    </div>

    <p><strong>Properties:</strong></p>
    <ul>
      <li>S is symmetric and unitary: SS* = I</li>
      <li>(ST)³ = C where C is the charge conjugation matrix</li>
      <li>S and T generate the <strong>modular group</strong> SL(2, ℤ)</li>
    </ul>

    <div class="note-box">
      <h4>Physical Interpretation</h4>
      <ul>
        <li><strong>S-matrix:</strong> Relates different ground states on torus (modular transformation)</li>
        <li><strong>T-matrix:</strong> Describes Dehn twist (2π rotation of torus)</li>
        <li><strong>Verlinde formula:</strong> N^c_{ab} can be computed from S-matrix alone</li>
      </ul>
    </div>

    <h2>Topological Entanglement Entropy (Revisited)</h2>

    <h3>Kitaev-Preskill Formula</h3>

    <p>For a 2D topologically ordered state on a disk with boundary length L:</p>

    <div class="equation">
      S(A) = αL - γ + O(1/L)
    </div>

    <p>where γ = log 𝒟 is the topological entanglement entropy.</p>

    <h3>Extraction Schemes</h3>

    <div class="info-box">
      <h3>Measuring γ</h3>
      <ul>
        <li><strong>Kitaev-Preskill (tripod):</strong>
          <div class="equation">
            γ = S(A) + S(B) + S(C) - S(AB) - S(BC) - S(CA) + S(ABC)
          </div>
          <p>Choose regions A, B, C meeting at a point (tripod configuration)</p>
        </li>
        <li><strong>Levin-Wen (disk pair):</strong>
          <div class="equation">
            γ = [S(A) + S(B) - S(A ∪ B) - S(A ∩ B)] / 2
          </div>
          <p>For overlapping disk regions A, B</p>
        </li>
        <li><strong>Torus method:</strong>
          <div class="equation">
            γ = S_topo = log(GSD) = log(𝒟²) / 2
          </div>
          <p>From ground state degeneracy on torus</p>
        </li>
      </ul>
    </div>

    <h3>Examples of γ Values</h3>

    <div class="equation">
      Z₂ toric code: γ = log 2
      Fibonacci: γ = log φ ≈ 0.481
      Laughlin ν=1/m: γ = log√m / 2
      Ising anyons: γ = log 2 / 2 = log√2
    </div>

    <h2>Topological Quantum Field Theory (TQFT)</h2>

    <h3>Effective Field Theory Description</h3>

    <p>Many topologically ordered phases are described by TQFT:</p>

    <div class="highlight-box">
      <h3>Chern-Simons Theory (2+1D)</h3>
      <p>For abelian topological order (e.g., FQHE):</p>
      <div class="equation">
        S = (k/4π) ∫ a ∧ da + (q/2π) ∫ A ∧ da
      </div>
      <p>where:</p>
      <ul>
        <li>a = emergent gauge field (compact U(1))</li>
        <li>A = external electromagnetic field</li>
        <li>k = Chern-Simons level (integer, related to filling fraction)</li>
        <li>q = effective charge</li>
      </ul>

      <p><strong>Predictions:</strong></p>
      <ul>
        <li>Quantum Hall conductance: σ_xy = νe²/h with ν = q²/k</li>
        <li>Anyonic statistics: θ = πq²/k</li>
        <li>Ground state degeneracy on genus g: GSD = k^g</li>
      </ul>
    </div>

    <h3>Non-Abelian Chern-Simons</h3>

    <p>For non-abelian topological order (e.g., SU(2)_k):</p>

    <div class="equation">
      S = (k/4π) ∫ Tr(A ∧ dA + (2/3) A ∧ A ∧ A)
    </div>

    <p>where A is a non-abelian gauge field (e.g., SU(2)).</p>

    <p><strong>Example:</strong> SU(2)₂ describes Ising anyons (possibly realized at ν = 5/2 FQHE)</p>

    <h2>Detection and Measurement</h2>

    <h3>Experimental Signatures</h3>

    <div class="comparison-box">
      <h3>Probes of Topological Order</h3>
      <table class="comparison-table">
        <tr>
          <th>Observable</th>
          <th>Signature</th>
          <th>Method</th>
          <th>Status</th>
        </tr>
        <tr>
          <td><strong>Quantized Hall conductance</strong></td>
          <td>σ_xy = νe²/h, ν fractional</td>
          <td>Transport measurement</td>
          <td>✓ Observed (FQHE, 1982)</td>
        </tr>
        <tr>
          <td><strong>Fractional charge</strong></td>
          <td>e* = e/m</td>
          <td>Shot noise, tunneling</td>
          <td>✓ Measured (e/3, 1997)</td>
        </tr>
        <tr>
          <td><strong>Anyonic braiding</strong></td>
          <td>Phase θ ≠ 0, π</td>
          <td>Interferometry</td>
          <td>✓ Observed (2020, ν=1/3)</td>
        </tr>
        <tr>
          <td><strong>Topological degeneracy</strong></td>
          <td>GSD depends on topology</td>
          <td>Spectroscopy, different geometries</td>
          <td>Partial (numerical)</td>
        </tr>
        <tr>
          <td><strong>Thermal Hall conductivity</strong></td>
          <td>κ_xy ≠ 0 (chiral edge modes)</td>
          <td>Thermal transport</td>
          <td>✓ Measured (FQHE, spin liquids)</td>
        </tr>
        <tr>
          <td><strong>Entanglement entropy γ</strong></td>
          <td>γ = log 𝒟 > 0</td>
          <td>Quantum gas microscopy, tomography</td>
          <td>In progress (cold atoms)</td>
        </tr>
        <tr>
          <td><strong>Non-abelian statistics</strong></td>
          <td>Braiding ≠ phase (unitary matrix)</td>
          <td>Multi-anyon interferometry</td>
          <td>Controversial (ν=5/2)</td>
        </tr>
      </table>
    </div>

    <h3>Numerical Detection</h3>

    <p>In simulations and tensor network calculations:</p>

    <ul>
      <li><strong>TEE:</strong> Calculate S(A) for various regions, extract γ</li>
      <li><strong>Modular matrices:</strong> Compute overlap ⟨ψ_i|ψ_j⟩ for ground states on different topologies</li>
      <li><strong>Wilson loops:</strong> Measure expectation values of non-local string operators</li>
      <li><strong>Entanglement spectrum:</strong> Eigenvalues of reduced density matrix reveal anyonic structure</li>
    </ul>

    <h2>Applications: Topological Quantum Computing</h2>

    <h3>Encoding Qubits Topologically</h3>

    <div class="highlight-box">
      <h3>Topological Qubit</h3>
      <p>Use ground state degeneracy to encode quantum information:</p>
      <ul>
        <li><strong>Physical qubit:</strong> Two degenerate ground states |0⟩, |1⟩ (locally indistinguishable)</li>
        <li><strong>Example (toric code on torus):</strong>
          <div class="equation">
            |0⟩ = |ψ_{0,0}⟩, |1⟩ = |ψ_{1,0}⟩
          </div>
        </li>
        <li><strong>Protection:</strong> Errors must create anyons and move them around non-contractible loops
          <ul>
            <li>Probability ~ e^{-L/ξ} (exponentially suppressed for large L)</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Gates via Braiding</h3>

    <p>For non-abelian anyons, braiding implements unitary gates:</p>

    <div class="equation">
      Braid σ_i (exchange anyons i and i+1) → Unitary R_i on fusion space
    </div>

    <p><strong>Example: Fibonacci anyons</strong></p>
    <ul>
      <li>Four τ anyons: Fusion space dimension = 2 (qubit)</li>
      <li>Braiding generates unitary group densely in SU(2)</li>
      <li>With measurement: universal quantum computation!</li>
    </ul>

    <h3>Error Correction</h3>

    <p>Surface codes (generalization of toric code) provide practical error correction:</p>

    <ul>
      <li><strong>Syndrome measurement:</strong> Detect anyon pairs (errors) without collapsing qubits</li>
      <li><strong>Decoding:</strong> Identify error chains, apply corrections</li>
      <li><strong>Threshold:</strong> ~ 1% physical error rate → arbitrarily good logical qubit</li>
      <li><strong>Current status:</strong> Google, IBM, others pursuing surface code architectures</li>
    </ul>

    <h2>Examples of Topologically Ordered Phases</h2>

    <h3>1. Fractional Quantum Hall States</h3>

    <div class="info-box">
      <h3>Laughlin States (ν = 1/m)</h3>
      <ul>
        <li><strong>Wavefunction:</strong> ψ_m(z_1,...,z_N) = ∏_{i<j}(z_i - z_j)^m e^{-∑_i |z_i|²/(4ℓ_B²)}</li>
        <li><strong>Anyons:</strong> Quasiparticles and quasiholes with charge e/m</li>
        <li><strong>Statistics angle:</strong> θ = π/m</li>
        <li><strong>Chern-Simons level:</strong> k = m</li>
        <li><strong>Ground state degeneracy:</strong> m^g on genus g</li>
        <li><strong>Experiments:</strong> Observed at ν = 1/3, 1/5, 1/7, ...</li>
      </ul>
    </div>

    <h3>2. Moore-Read (Pfaffian) State (ν = 5/2)</h3>

    <ul>
      <li><strong>Wavefunction:</strong> Pfaffian of matrix × Jastrow factor</li>
      <li><strong>Anyons:</strong> Ising anyons (1, ψ, σ) - non-abelian!</li>
      <li><strong>Quantum dimensions:</strong> d₁ = 1, d_ψ = 1, d_σ = √2</li>
      <li><strong>Fusion:</strong> σ × σ = 1 + ψ (non-abelian)</li>
      <li><strong>Status:</strong> Experimental evidence at ν = 5/2, but still debated</li>
      <li><strong>Application:</strong> Potential platform for topological quantum computation</li>
    </ul>

    <h3>3. Kitaev's Honeycomb Model</h3>

    <div class="equation">
      H = -J_x ∑_{⟨ij⟩_x} σ^x_i σ^x_j - J_y ∑_{⟨ij⟩_y} σ^y_i σ^y_j - J_z ∑_{⟨ij⟩_z} σ^z_i σ^z_j
    </div>

    <ul>
      <li><strong>Exactly solvable:</strong> Maps to free Majorana fermions + Z₂ gauge field</li>
      <li><strong>Phases:</strong> Gapped (topological) and gapless (spin liquid) depending on J_x, J_y, J_z</li>
      <li><strong>Anyons:</strong> Ising anyons in gapped phase</li>
      <li><strong>Experimental realization:</strong> Kitaev materials α-RuCl₃, Na₂IrO₃ (approximate)</li>
    </ul>

    <h3>4. Doubled Chern-Simons (Levin-Wen Models)</h3>

    <p>String-net condensation provides a systematic construction of topological phases:</p>

    <ul>
      <li><strong>Input data:</strong> Unitary fusion category (anyonic theory)</li>
      <li><strong>Construction:</strong> Lattice model with string operators</li>
      <li><strong>Output:</strong> Doubled topological order (𝒞 ⊗ 𝒞̄)</li>
      <li><strong>Examples:</strong> Quantum double D(G) for finite group G</li>
    </ul>

    <h2>Open Questions and Frontiers</h2>

    <div class="note-box">
      <h4>Current Research Challenges</h4>
      <ul>
        <li><strong>Classification:</strong> Complete catalog of all topologically ordered phases in 2D, 3D (especially with fermions and symmetries)</li>
        <li><strong>Material realization:</strong> Finding stable non-abelian topological order in equilibrium systems</li>
        <li><strong>Detection methods:</strong> Unambiguous measurement of non-abelian statistics</li>
        <li><strong>Topological quantum computation:</strong> Scaling up to many logical qubits</li>
        <li><strong>3D topological order:</strong> Understanding "fractons" and subsystem symmetries</li>
        <li><strong>Finite temperature:</strong> Stability of topological order at T > 0 (limited to 4D and higher?)</li>
        <li><strong>Many-body localization:</strong> Topological order in MBL phases</li>
        <li><strong>Higher categories:</strong> Generalizing to 2-categories, fusion 2-categories for 3D</li>
      </ul>
    </div>

    <h2>Connection to Quantum Gravity</h2>

    <div class="info-box">
      <h3>Emergent Spacetime from Entanglement</h3>
      <p>Topological order provides hints about quantum gravity:</p>
      <ul>
        <li><strong>Gauge/gravity duality:</strong> Chern-Simons theory (2+1D) ↔ AdS₃ gravity</li>
        <li><strong>Holography:</strong> Boundary degrees of freedom encode bulk physics</li>
        <li><strong>Entanglement = Geometry:</strong> Ryu-Takayanagi formula S ~ Area/(4G_N)</li>
        <li><strong>Emergent gauge fields:</strong> In topological phases arise from constraints on quantum states</li>
        <li><strong>Quantum error correction:</strong> Similar structure to holographic codes in AdS/CFT</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h3>Key Takeaways</h3>
      <ul>
        <li><strong>Topological order:</strong> Gapped quantum phase with long-range entanglement, robust to all local perturbations</li>
        <li><strong>Signatures:</strong> Topological degeneracy GSD(topology), anyonic excitations, TEE γ = log 𝒟 > 0</li>
        <li><strong>Anyons:</strong> 2D quasiparticles with fractional statistics (abelian) or non-abelian braiding</li>
        <li><strong>Mathematical framework:</strong> Modular tensor categories, S/T matrices, fusion rules, quantum dimensions</li>
        <li><strong>TQFT:</strong> Chern-Simons theory provides effective field theory description</li>
        <li><strong>Detection:</strong> Quantized Hall conductance, fractional charge, thermal Hall, braiding interferometry</li>
        <li><strong>Applications:</strong> Topological quantum computing (fault-tolerant via braiding and degeneracy)</li>
        <li><strong>Examples:</strong> FQHE (Laughlin, Moore-Read), toric code, Kitaev honeycomb, string-net models</li>
        <li><strong>Frontiers:</strong> 3D topological order (fractons), classification, material realization, quantum gravity connections</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Looking Ahead</h3>
      <p>Having explored the fundamental concepts of quantum phases, local unitaries, gapped systems, quantum liquids, and topological order, we now turn to <strong>§7.5: Universality Classes</strong>. We'll examine how to systematically classify all these phases and understand what makes two phases "the same" versus "different" from a fundamental perspective.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_7_4_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
