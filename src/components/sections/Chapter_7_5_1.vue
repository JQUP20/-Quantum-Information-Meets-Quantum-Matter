<template>
  <div class="section-content">
    <h1>7.5.1 Universality Classes of Gapped Quantum Liquids</h1>

    <div class="info-box">
      <h3>The Classification Problem</h3>
      <p>Given two gapped quantum liquids (with no symmetry breaking), when are they in the <strong>same universality class</strong>? This fundamental question drives modern quantum phase classification. Unlike symmetry-breaking phases (classified by order parameters), quantum liquids require sophisticated topological and entanglement-based invariants to distinguish them.</p>
    </div>

    <h2>Definition of Universality Class</h2>

    <h3>Equivalence via Local Unitary Transformations</h3>

    <div class="highlight-box">
      <h3>Universality Class (Formal Definition)</h3>
      <p>Two gapped ground states |ψ⟩ and |ψ'⟩ belong to the <strong>same universality class</strong> if:</p>
      <div class="equation">
        |ψ'⟩ = U |ψ⟩
      </div>
      <p>where U is a <strong>local unitary transformation</strong>:</p>
      <div class="equation">
        U = U_n U_{n-1} ··· U_2 U_1
      </div>
      <p>with each U_i acting non-trivially only within a bounded region.</p>

      <p><strong>Alternative characterization:</strong> |ψ⟩ and |ψ'⟩ are in the same class if they can be adiabatically connected via a path H(λ) (λ ∈ [0,1]) with:</p>
      <ul>
        <li>Gap never closes: Δ(λ) ≥ Δ_min > 0</li>
        <li>Symmetries preserved throughout (if applicable)</li>
      </ul>
    </div>

    <h3>Why Local Unitaries?</h3>

    <p>Local unitaries are the natural equivalence relation because:</p>
    <ul>
      <li><strong>Physically realizable:</strong> Can be implemented by local quantum circuits</li>
      <li><strong>Preserve entanglement structure:</strong> Don't create/destroy long-range entanglement</li>
      <li><strong>Respect locality:</strong> Cannot change global topological properties</li>
      <li><strong>Experimental accessibility:</strong> Correspond to quasi-adiabatic evolution under local Hamiltonians</li>
    </ul>

    <h2>Classification Hierarchy</h2>

    <h3>The Complete Picture</h3>

    <div class="equation">
      All gapped quantum liquids
      ├─ Short-range entangled (SRE)
      │  ├─ Trivial (product states)
      │  └─ Symmetry-protected topological (SPT)
      │     ├─ Bosonic SPT: classified by H^d(G, U(1))
      │     └─ Fermionic SPT: classified by H^d(G, ℤ_2^f)
      └─ Long-range entangled (LRE)
         └─ Intrinsic topological order
            ├─ Abelian: quantum dimensions d_a = 1
            └─ Non-abelian: d_a > 1 for some a
    </div>

    <div class="comparison-box">
      <h3>Classification Summary</h3>
      <table class="comparison-table">
        <tr>
          <th>Category</th>
          <th>Mathematical Structure</th>
          <th>Examples</th>
          <th>Distinguishing Invariant</th>
        </tr>
        <tr>
          <td><strong>Trivial (SRE)</strong></td>
          <td>One class (unique up to LU)</td>
          <td>Product states, paramagnets</td>
          <td>γ = 0, unique GS</td>
        </tr>
        <tr>
          <td><strong>Bosonic SPT (SRE)</strong></td>
          <td>H^d(G, U(1)) group cohomology</td>
          <td>Haldane (d=1, G=SO(3)×Z₂), cluster state (d=2, G=Z₂×Z₂)</td>
          <td>Cohomology class, edge modes</td>
        </tr>
        <tr>
          <td><strong>Fermionic SPT (SRE)</strong></td>
          <td>H^d(G, ℤ_2^f) with fermion parity</td>
          <td>Topological insulators/superconductors (periodic table)</td>
          <td>ℤ or ℤ₂ index (dimension dependent)</td>
        </tr>
        <tr>
          <td><strong>Abelian TO (LRE)</strong></td>
          <td>K-matrix Chern-Simons, abelian groups</td>
          <td>Laughlin FQHE ν=1/m, toric code</td>
          <td>γ = log 𝒟, abelian fusion rules</td>
        </tr>
        <tr>
          <td><strong>Non-abelian TO (LRE)</strong></td>
          <td>Modular tensor categories (MTC)</td>
          <td>Moore-Read (ν=5/2?), Fibonacci anyons</td>
          <td>S/T matrices, d_a > 1</td>
        </tr>
      </table>
    </div>

    <h2>SRE Classification: SPT Phases</h2>

    <h3>Bosonic SPT with Symmetry G</h3>

    <p>For bosonic systems with global symmetry G in d spatial dimensions:</p>

    <div class="highlight-box">
      <h3>Group Cohomology Classification</h3>
      <p><strong>Classification theorem:</strong> Bosonic SPT phases with symmetry G in d dimensions are classified by:</p>
      <div class="equation">
        SPT^d_boson(G) = H^{d+1}(G, U(1))
      </div>
      <p>where H^{d+1}(G, U(1)) is the (d+1)-th cohomology group of G with U(1) coefficients.</p>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Each cohomology class corresponds to a distinct SPT phase</li>
        <li>Trivial class [0] ∈ H^{d+1} corresponds to product state</li>
        <li>Non-trivial classes have protected edge modes</li>
      </ul>
    </div>

    <h3>Examples of Bosonic SPT</h3>

    <div class="info-box">
      <h3>Low-Dimensional Examples</h3>
      <ul>
        <li><strong>d=1, G=Z₂:</strong> H²(Z₂, U(1)) = Z₂
          <ul>
            <li>Two phases: trivial and Haldane-like</li>
            <li>Example: Spin-1/2 chain with Z₂ symmetry (trivial vs SPT)</li>
          </ul>
        </li>
        <li><strong>d=1, G=SO(3)×Z₂ᵀ:</strong> H²(SO(3)×Z₂ᵀ, U(1)) = ℤ
          <ul>
            <li>Integer classification: Haldane phase for integer spins</li>
            <li>n=1: Spin-1 Haldane phase</li>
            <li>n=2: Spin-2 phase (different edge modes)</li>
          </ul>
        </li>
        <li><strong>d=2, G=Z₂×Z₂:</strong> H³(Z₂×Z₂, U(1)) = (Z₂)³
          <ul>
            <li>Eight distinct phases</li>
            <li>Example: Cluster state is one non-trivial class</li>
          </ul>
        </li>
        <li><strong>d=3, G=U(1):</strong> H⁴(U(1), U(1)) = ℤ
          <ul>
            <li>Integer classification</li>
            <li>Witten effect: θ-vacuum in electromagnetism</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Fermionic SPT: The Periodic Table</h3>

    <p>For free fermions with time-reversal (T), particle-hole (C), and chiral (S) symmetries:</p>

    <div class="comparison-box">
      <h3>Ten-fold Way Classification (Free Fermions)</h3>
      <table class="comparison-table">
        <tr>
          <th>Class</th>
          <th>T</th>
          <th>C</th>
          <th>S</th>
          <th>d=1</th>
          <th>d=2</th>
          <th>d=3</th>
        </tr>
        <tr>
          <td><strong>A (unitary)</strong></td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>ℤ</td>
          <td>0</td>
        </tr>
        <tr>
          <td><strong>AIII (chiral)</strong></td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>ℤ</td>
          <td>0</td>
          <td>ℤ</td>
        </tr>
        <tr>
          <td><strong>AI</strong></td>
          <td>+1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td><strong>BDI</strong></td>
          <td>+1</td>
          <td>+1</td>
          <td>1</td>
          <td>ℤ</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td><strong>D</strong></td>
          <td>0</td>
          <td>+1</td>
          <td>0</td>
          <td>ℤ₂</td>
          <td>ℤ</td>
          <td>0</td>
        </tr>
        <tr>
          <td><strong>DIII</strong></td>
          <td>-1</td>
          <td>+1</td>
          <td>1</td>
          <td>ℤ₂</td>
          <td>ℤ₂</td>
          <td>ℤ</td>
        </tr>
        <tr>
          <td><strong>AII</strong></td>
          <td>-1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>ℤ₂</td>
          <td>ℤ₂</td>
        </tr>
        <tr>
          <td><strong>CII</strong></td>
          <td>-1</td>
          <td>-1</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>ℤ₂</td>
        </tr>
        <tr>
          <td><strong>C</strong></td>
          <td>0</td>
          <td>-1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>ℤ</td>
        </tr>
        <tr>
          <td><strong>CI</strong></td>
          <td>+1</td>
          <td>-1</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </table>
    </div>

    <p><strong>Notation:</strong></p>
    <ul>
      <li>T = ±1: time-reversal with T² = ±1; 0 = no symmetry</li>
      <li>C = ±1: particle-hole with C² = ±1; 0 = no symmetry</li>
      <li>S = 1: chiral (sublattice) symmetry; 0 = no symmetry</li>
      <li>ℤ: integer classification (winding number, Chern number)</li>
      <li>ℤ₂: binary classification (strong vs weak TI)</li>
      <li>0: no non-trivial topological phases</li>
    </ul>

    <div class="note-box">
      <h4>Example: 3D Topological Insulator (Class AII)</h4>
      <ul>
        <li>Symmetry: Time-reversal with T² = -1 (fermionic)</li>
        <li>Classification: ℤ₂ (two phases: trivial and non-trivial)</li>
        <li>Topological invariant: ν ∈ {0, 1}</li>
        <li>Boundary: 2D Dirac fermion (protected by T)</li>
        <li>Materials: Bi₂Se₃, Bi₂Te₃</li>
      </ul>
    </div>

    <h2>LRE Classification: Topological Order</h2>

    <h3>Abelian Topological Order</h3>

    <p>Abelian topologically ordered phases are classified by:</p>

    <div class="highlight-box">
      <h3>K-Matrix Classification (2+1D)</h3>
      <p>Abelian topological order in 2+1D is characterized by:</p>
      <ul>
        <li><strong>K-matrix:</strong> Integer symmetric matrix K_{ij} (i,j = 1,...,N)</li>
        <li><strong>Charge vector:</strong> q = (q₁,...,q_N)ᵀ</li>
        <li><strong>Chern-Simons action:</strong>
          <div class="equation">
            S = (1/4π) ∫ K_{IJ} a_I ∧ da_J + (q_I/2π) ∫ A ∧ da_I
          </div>
        </li>
      </ul>

      <p><strong>Physical predictions:</strong></p>
      <div class="equation">
        Filling fraction: ν = q^T K^{-1} q
        Hall conductance: σ_xy = ν e²/h
        Ground state degeneracy: |det K| on torus
        Total quantum dimension: 𝒟 = √|det K|
      </div>
    </div>

    <h3>Examples of Abelian Phases</h3>

    <div class="info-box">
      <h3>Laughlin States</h3>
      <ul>
        <li><strong>ν = 1/m:</strong> K = (m), q = (1)
          <ul>
            <li>GSD = m, 𝒟 = √m, γ = log√m / 2</li>
          </ul>
        </li>
      </ul>

      <h3>Hierarchical States</h3>
      <ul>
        <li><strong>ν = 2/5:</strong> K = [[3, 2], [2, 3]], appropriate q
          <ul>
            <li>GSD = |det K| = 5</li>
            <li>Five distinct anyon types</li>
          </ul>
        </li>
      </ul>

      <h3>Z₂ Toric Code</h3>
      <ul>
        <li><strong>No Chern-Simons:</strong> Different framework (quantum double)</li>
        <li><strong>Anyons:</strong> {1, e, m, ε} with abelian fusion</li>
        <li><strong>𝒟 = 2, γ = log 2</strong></li>
      </ul>
    </div>

    <h3>Non-Abelian Topological Order</h3>

    <p>Non-abelian phases require the full machinery of modular tensor categories (MTCs):</p>

    <div class="highlight-box">
      <h3>MTC Classification</h3>
      <p>Each non-abelian topological phase corresponds to a unitary modular tensor category specified by:</p>
      <ul>
        <li><strong>Anyon types:</strong> Finite set {a, b, c, ...}</li>
        <li><strong>Fusion rules:</strong> N^c_{ab} (fusion multiplicities)</li>
        <li><strong>F-symbols:</strong> Associativity of fusion (satisfy pentagon equation)</li>
        <li><strong>R-symbols:</strong> Braiding (satisfy hexagon equations)</li>
        <li><strong>S and T matrices:</strong> Modular data (generate SL(2,ℤ))</li>
      </ul>

      <p><strong>Key invariant:</strong> The set {S, T} up to gauge equivalence uniquely characterizes the phase</p>
    </div>

    <h3>Known Non-Abelian MTCs</h3>

    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>MTC</th>
          <th>Anyons</th>
          <th>𝒟</th>
          <th>γ</th>
          <th>Physical Realization?</th>
        </tr>
        <tr>
          <td><strong>Ising (SU(2)₂)</strong></td>
          <td>{1, ψ, σ}</td>
          <td>2</td>
          <td>log 2 / 2</td>
          <td>ν = 5/2 FQHE (?), Kitaev honeycomb</td>
        </tr>
        <tr>
          <td><strong>Fibonacci</strong></td>
          <td>{1, τ}</td>
          <td>φ√(2+φ)</td>
          <td>log[φ√(2+φ)]</td>
          <td>No (but universal for TQC)</td>
        </tr>
        <tr>
          <td><strong>SU(2)₄</strong></td>
          <td>{1, s=1, s=2, ...}</td>
          <td>2√2</td>
          <td>log(2√2)</td>
          <td>Possible in fractional Chern insulators</td>
        </tr>
        <tr>
          <td><strong>Doubled Fibonacci</strong></td>
          <td>τ ⊗ τ̄ etc.</td>
          <td>(2+φ)</td>
          <td>log(2+φ)</td>
          <td>Levin-Wen model (artificial)</td>
        </tr>
      </table>
    </div>

    <h2>Invariants Distinguishing Universality Classes</h2>

    <h3>Complete Set of Invariants</h3>

    <p>To determine if two phases are in the same universality class, check:</p>

    <div class="info-box">
      <h3>Diagnostic Invariants</h3>
      <ul>
        <li><strong>Topological entanglement entropy:</strong> γ
          <ul>
            <li>γ = 0 → SRE (trivial or SPT)</li>
            <li>γ > 0 → LRE (topological order)</li>
          </ul>
        </li>
        <li><strong>Ground state degeneracy:</strong> GSD(manifold)
          <ul>
            <li>Unique → trivial or SPT</li>
            <li>Topology-dependent → topological order</li>
          </ul>
        </li>
        <li><strong>Edge theory:</strong> Conformal field theory (CFT) on boundary
          <ul>
            <li>Central charge c</li>
            <li>Scaling dimensions</li>
            <li>Chiral vs non-chiral</li>
          </ul>
        </li>
        <li><strong>Modular S and T matrices:</strong> (for topological order)
          <ul>
            <li>Encode all anyonic data</li>
            <li>Two phases equivalent iff S, T are related by relabeling</li>
          </ul>
        </li>
        <li><strong>SPT invariant:</strong> Cohomology class [ω] ∈ H^{d+1}(G, U(1))
          <ul>
            <li>For bosonic SPT with symmetry G</li>
          </ul>
        </li>
        <li><strong>Topological index:</strong> ν ∈ ℤ or ℤ₂
          <ul>
            <li>For fermionic SPT (topological insulators/superconductors)</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Example: Distinguishing Quantum Hall States</h3>

    <div class="equation">
      ν = 1/3 Laughlin: γ = (log 3)/2, GSD = 3, σ_xy = (1/3) e²/h
      ν = 1/5 Laughlin: γ = (log 5)/2, GSD = 5, σ_xy = (1/5) e²/h
      ν = 5/2 Moore-Read: γ = log 2 / 2, non-abelian, σ_xy = (5/2) e²/h
    </div>

    <p>These are three <strong>different universality classes</strong>—cannot be connected by local unitaries.</p>

    <h2>Relationship Between Classes</h2>

    <h3>Phase Diagrams and Transitions</h3>

    <p>Different universality classes are separated by quantum phase transitions:</p>

    <div class="highlight-box">
      <h3>Transition Requirements</h3>
      <ul>
        <li><strong>Within SRE (trivial ↔ SPT):</strong>
          <ul>
            <li>Requires symmetry breaking or gap closing</li>
            <li>Can sometimes be continuous (anomalous symmetry-breaking transition)</li>
          </ul>
        </li>
        <li><strong>SRE ↔ LRE:</strong>
          <ul>
            <li>Must close gap (change entanglement structure fundamentally)</li>
            <li>Typically first-order or requires intermediate gapless phase</li>
          </ul>
        </li>
        <li><strong>LRE ↔ LRE (different topological orders):</strong>
          <ul>
            <li>Requires gap closing or symmetry-breaking intermediate phase</li>
            <li>Direct transition possible via anyon condensation</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Anyon Condensation</h3>

    <p>A mechanism for transitions between topological phases:</p>

    <div class="info-box">
      <h3>Condensation Mechanism</h3>
      <p>If a subset of bosonic anyons {b_i} condense (⟨b_i⟩ ≠ 0):</p>
      <ul>
        <li><strong>Before:</strong> Topological order with full anyon theory</li>
        <li><strong>After:</strong> Reduced topological order (confined anyons, simpler theory)</li>
        <li><strong>Example:</strong> Z₂ toric code → trivial via e condensation (or m condensation)</li>
        <li><strong>Process:</strong>
          <div class="equation">
            Anyons that braid non-trivially with condensed b_i → confined (gapped out)
            Remaining anyons → new topological phase
          </div>
        </li>
      </ul>
    </div>

    <h2>Numerical and Experimental Identification</h2>

    <h3>Numerical Diagnostics</h3>

    <div class="comparison-box">
      <h3>Computational Methods</h3>
      <table class="comparison-table">
        <tr>
          <th>Method</th>
          <th>What It Measures</th>
          <th>Distinguishes</th>
        </tr>
        <tr>
          <td><strong>Entanglement entropy</strong></td>
          <td>S(A) = α|∂A| - γ</td>
          <td>SRE (γ=0) vs LRE (γ>0)</td>
        </tr>
        <tr>
          <td><strong>Entanglement spectrum</strong></td>
          <td>Eigenvalues of ρ_A</td>
          <td>Edge CFT, degeneracies reveal anyons</td>
        </tr>
        <tr>
          <td><strong>String order parameters</strong></td>
          <td>⟨O_i e^{iθ∑_k O_k} O_j⟩</td>
          <td>SPT vs trivial (for bosonic SPT)</td>
        </tr>
        <tr>
          <td><strong>Modular matrices from GS overlap</strong></td>
          <td>⟨ψ_i|U_modular|ψ_j⟩</td>
          <td>Specific topological order (via S, T)</td>
        </tr>
        <tr>
          <td><strong>Wilson loops</strong></td>
          <td>⟨W_C⟩ for non-contractible C</td>
          <td>Anyonic content, fusion rules</td>
        </tr>
        <tr>
          <td><strong>MPS/PEPS bond dimension</strong></td>
          <td>χ_min to represent state</td>
          <td>Correlation length, complexity</td>
        </tr>
      </table>
    </div>

    <h3>Experimental Identification</h3>

    <ul>
      <li><strong>Transport:</strong> Hall conductance σ_xy distinguishes FQHE states</li>
      <li><strong>Thermal Hall:</strong> κ_xy reveals chiral edge modes (even without charge)</li>
      <li><strong>ARPES:</strong> Surface states of topological insulators</li>
      <li><strong>STM:</strong> Local density of states at edges</li>
      <li><strong>Braiding interferometry:</strong> Anyonic statistics (Fabry-Perot, Mach-Zehnder)</li>
      <li><strong>Entanglement measurement:</strong> Quantum gas microscopy, randomized measurements</li>
    </ul>

    <h2>Beyond Simple Classification</h2>

    <h3>Symmetry-Enriched Topological (SET) Phases</h3>

    <p>Combining symmetry and topological order leads to richer structure:</p>

    <div class="highlight-box">
      <h3>SET Phases</h3>
      <p>A topologically ordered phase with global symmetry G can exhibit:</p>
      <ul>
        <li><strong>Symmetry fractionalization:</strong> Anyons carry fractional quantum numbers under G
          <ul>
            <li>Example: e anyon in Z₂ toric code with global Z₂ can carry half-charge</li>
          </ul>
        </li>
        <li><strong>Symmetry permutation:</strong> G acts non-trivially on anyon types
          <ul>
            <li>Example: Time-reversal swaps σ ↔ σ̄ in doubled theories</li>
          </ul>
        </li>
        <li><strong>Classification:</strong> Extends beyond pure topological order
          <ul>
            <li>More refined than topological order alone</li>
            <li>Classified by group cohomology + MTC data</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>3D and Higher Dimensions</h3>

    <p>Classification in d ≥ 3 is less understood:</p>

    <ul>
      <li><strong>3D SPT:</strong> H⁴(G, U(1)) for bosons (e.g., topological insulators)</li>
      <li><strong>3D topological order:</strong> Point-like and loop-like excitations
        <ul>
          <li>Example: 3D toric code with e (point), m (loop)</li>
        </ul>
      </li>
      <li><strong>Fracton phases:</strong> Emergent subsystem symmetries
        <ul>
          <li>Excitations immobile or restricted to lower-dimensional motion</li>
          <li>Not fully captured by standard topological order</li>
        </ul>
      </li>
    </ul>

    <h2>Open Questions</h2>

    <div class="note-box">
      <h4>Current Research Frontiers</h4>
      <ul>
        <li><strong>Interacting fermionic classification:</strong> Beyond free fermion periodic table</li>
        <li><strong>Complete enumeration:</strong> All possible MTCs in 2+1D</li>
        <li><strong>3D topological phases:</strong> Classification and physical realizations</li>
        <li><strong>Mixed anomalies:</strong> Interplay of symmetry and topology</li>
        <li><strong>Non-equilibrium classification:</strong> Floquet, MBL phases</li>
        <li><strong>Higher categories:</strong> 2-categories for 3D, n-categories for nD</li>
        <li><strong>Fractons and subsystem symmetry:</strong> New paradigms beyond conventional topological order</li>
        <li><strong>Computational complexity:</strong> Hardness of determining universality class</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h3>Key Takeaways</h3>
      <ul>
        <li><strong>Universality class:</strong> Equivalence under local unitary transformations (or adiabatic paths with non-closing gap)</li>
        <li><strong>SRE hierarchy:</strong> Trivial (one class) vs SPT (group cohomology H^{d+1}(G, U(1)) for bosons, periodic table for free fermions)</li>
        <li><strong>LRE hierarchy:</strong> Abelian (K-matrix) vs non-abelian (modular tensor categories)</li>
        <li><strong>Invariants:</strong> γ (TEE), GSD, S/T matrices, cohomology class, topological index</li>
        <li><strong>Bosonic SPT:</strong> Classified by group cohomology; examples include Haldane, cluster state</li>
        <li><strong>Fermionic SPT:</strong> Ten-fold way classification; includes topological insulators/superconductors</li>
        <li><strong>Abelian TO:</strong> K-matrix classification; examples include Laughlin states, toric code</li>
        <li><strong>Non-abelian TO:</strong> MTC classification; examples include Ising, Fibonacci anyons</li>
        <li><strong>Transitions:</strong> Between classes require gap closing or anyon condensation</li>
        <li><strong>SET phases:</strong> Combine symmetry and topology (symmetry fractionalization)</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Looking Ahead</h3>
      <p>In §7.5.2, we'll revisit <strong>symmetry-breaking order</strong> from the modern perspective, understanding how it fits into the broader classification scheme. Then in §7.5.3, we'll explore <strong>stochastic local transformations</strong>, which provide another lens on distinguishing quantum phases through their entanglement properties.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_7_5_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
