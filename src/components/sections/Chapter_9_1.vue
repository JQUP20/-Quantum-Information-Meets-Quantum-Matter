<template>
  <div class="section-content">
    <h1>9.1 Introduction</h1>

    <p>
      In Chapter 8, we explored Matrix Product States (MPS) and their remarkable success in describing one-dimensional quantum systems. However, nature is three-dimensional, and many of the most fascinating quantum phenomena—from high-temperature superconductivity to topological quantum computation—occur in two and three dimensions. This chapter extends the tensor network framework beyond one dimension, introducing Projected Entangled Pair States (PEPS) and related structures for higher-dimensional systems. We provide comprehensive motivation, mathematical foundations, and practical perspectives on why and how to move beyond MPS.
    </p>

    <h2>Why Go Beyond One Dimension?</h2>

    <div class="info-box">
      <h3>Fundamental Limitations of 1D Systems</h3>
      <p>
        While 1D quantum systems are theoretically rich and computationally tractable, they suffer fundamental limitations that restrict the physics they can exhibit:
      </p>
      <ul>
        <li><strong>No intrinsic topological order:</strong> As proven in Section 8.4, gapped 1D bosonic systems cannot exhibit anyonic excitations or topological ground state degeneracy that survives arbitrary local perturbations</li>
        <li><strong>Limited phase structure:</strong> Only symmetry-protected topological (SPT) phases exist, not intrinsic topological order like fractional quantum Hall states or toric code</li>
        <li><strong>Restricted applications:</strong> Real materials (cuprate superconductors, graphene, topological insulators) and most quantum computing proposals (surface codes, anyon braiding) are inherently 2D or 3D</li>
        <li><strong>No true geometric frustration:</strong> Frustration requires triangular, kagome, pyrochlore, or other 2D/3D lattices where all interactions cannot be simultaneously minimized</li>
        <li><strong>Weak quantum effects:</strong> Dimensionality enhances quantum fluctuations; many exotic phases require d ≥ 2</li>
      </ul>
      <p>
        To access the full richness of quantum matter—including fractional quantum Hall states, spin liquids, topological quantum computers, and high-T_c superconductors—we must venture into higher dimensions.
      </p>
    </div>

    <h3>Physical Phenomena Requiring Higher Dimensions</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Phenomenon</th>
            <th>Minimum Dimension</th>
            <th>Physical Example</th>
            <th>Why d ≥ 2?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intrinsic topological order</td>
            <td>2D</td>
            <td>Fractional quantum Hall effect</td>
            <td>Anyonic statistics, topological degeneracy</td>
          </tr>
          <tr>
            <td>Chiral edge modes</td>
            <td>2D</td>
            <td>Quantum Hall systems</td>
            <td>Requires 2D bulk for 1D edge</td>
          </tr>
          <tr>
            <td>Geometric frustration</td>
            <td>2D</td>
            <td>Kagome antiferromagnet</td>
            <td>Triangular plaquettes</td>
          </tr>
          <tr>
            <td>d-wave superconductivity</td>
            <td>2D</td>
            <td>Cuprate high-T_c</td>
            <td>k-space anisotropy in plane</td>
          </tr>
          <tr>
            <td>Skyrmion lattices</td>
            <td>2D</td>
            <td>Chiral magnets</td>
            <td>Topological spin textures</td>
          </tr>
          <tr>
            <td>3D topological insulators</td>
            <td>3D</td>
            <td>Bi₂Se₃, Bi₂Te₃</td>
            <td>3D bulk, 2D surface states</td>
          </tr>
          <tr>
            <td>Weyl semimetals</td>
            <td>3D</td>
            <td>TaAs, WTe₂</td>
            <td>Weyl points in 3D k-space</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>The Challenge of Higher Dimensions</h2>

    <div class="highlight-box">
      <h4>Why 2D and 3D are Fundamentally Harder</h4>
      <p>
        The jump from 1D to 2D introduces fundamental computational challenges rooted in the geometry of entanglement:
      </p>
      <ul>
        <li><strong>Entanglement area law:</strong> In d spatial dimensions, entanglement entropy scales with boundary area:
          <div class="equation">
            S(L) ~ L^{d-1} log χ
          </div>
          <ul>
            <li>1D: S ~ O(1) (constant, independent of L) → MPS with finite χ suffices</li>
            <li>2D: S ~ L (linear in boundary length) → PEPS needs χ ~ exp(αL) for exact representation</li>
            <li>3D: S ~ L² (boundary area) → Exponentially worse scaling</li>
          </ul>
        </li>
        <li><strong>Contraction complexity:</strong>
          <ul>
            <li>1D MPS: Exact contraction in O(Nχ³) (polynomial, efficient)</li>
            <li>2D PEPS: Approximate contraction in O(χ^{10}) per update (expensive, uncontrolled errors)</li>
            <li>3D PEPS: O(χ^{18}) or worse (prohibitive for χ > 5-10)</li>
          </ul>
        </li>
        <li><strong>No exact algorithms:</strong> Unlike 1D DMRG (which converges to exact ground state), 2D/3D methods involve uncontrolled approximations in contraction</li>
        <li><strong>Computational scaling:</strong> Memory ~ χ^{2d+1}, time ~ χ^{3d+3}</li>
      </ul>
    </div>

    <h3>Entanglement Area Law: Detailed Analysis</h3>

    <div class="info-box">
      <h3>Origin and Consequences</h3>
      <p>
        The area law for entanglement entropy is fundamental to understanding PEPS:
      </p>
      <p>
        <strong>Derivation sketch:</strong> For a region A of linear size L in d dimensions,
      </p>
      <ol>
        <li>Number of bonds crossing boundary: N_bonds ~ L^{d-1}</li>
        <li>Each bond contributes ≤ log χ to entanglement</li>
        <li>Total entanglement: S_A ≤ N_bonds · log χ ~ L^{d-1} log χ</li>
      </ol>
      <p>
        <strong>Numerical examples:</strong>
      </p>
      <ul>
        <li>2D square lattice, L = 10, χ = 4: S ≤ 10 · log₂(4) = 20 bits</li>
        <li>2D square lattice, L = 100, χ = 4: S ≤ 100 · log₂(4) = 200 bits</li>
        <li>Exact 2D critical Ising (L = 100): S ~ 100 · 0.5 · log(100) ≈ 230 bits (violates strict area law!)</li>
      </ul>
      <p>
        <strong>Implication:</strong> Gapped phases obey area law → PEPS with fixed χ; Critical phases violate → need MERA or χ → ∞.
      </p>
    </div>

    <h3>Comparison Across Dimensions</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>1D (MPS)</th>
            <th>2D (PEPS)</th>
            <th>3D (PEPS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Virtual bonds per site</td>
            <td>2</td>
            <td>4 (square lattice)</td>
            <td>6 (cubic lattice)</td>
          </tr>
          <tr>
            <td>Tensor rank</td>
            <td>3 (i,α,β)</td>
            <td>5 (i,α,β,γ,δ)</td>
            <td>7 (i + 6 virtual)</td>
          </tr>
          <tr>
            <td>Parameters per tensor</td>
            <td>dχ²</td>
            <td>dχ⁴</td>
            <td>dχ⁶</td>
          </tr>
          <tr>
            <td>Area law</td>
            <td>S ~ O(1)</td>
            <td>S ~ L log χ</td>
            <td>S ~ L² log χ</td>
          </tr>
          <tr>
            <td>Required χ (exact)</td>
            <td>O(1) for gapped</td>
            <td>exp(αL) for gapped</td>
            <td>exp(βL²) for gapped</td>
          </tr>
          <tr>
            <td>Typical accessible χ</td>
            <td>100-10000</td>
            <td>4-20</td>
            <td>2-8</td>
          </tr>
          <tr>
            <td>Contraction</td>
            <td>Exact, O(Nχ³)</td>
            <td>Approximate, O(Nχ^{10})</td>
            <td>Approximate, O(Nχ^{18})</td>
          </tr>
          <tr>
            <td>System size</td>
            <td>10³-10⁴ sites</td>
            <td>10²-10³ sites</td>
            <td>10¹-10² sites</td>
          </tr>
          <tr>
            <td>Topological order</td>
            <td>SPT only (bosonic)</td>
            <td>Intrinsic TO possible</td>
            <td>Intrinsic TO, fractons</td>
          </tr>
          <tr>
            <td>Typical runtime</td>
            <td>Minutes-hours</td>
            <td>Hours-days</td>
            <td>Days-weeks</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Projected Entangled Pair States (PEPS)</h2>

    <p>
      The natural generalization of MPS to higher dimensions is the Projected Entangled Pair State (PEPS) ansatz, introduced by Verstraete and Cirac in 2004 and independently developed by several groups around the same time.
    </p>

    <div class="info-box">
      <h3>PEPS Construction: Step-by-Step</h3>
      <p>
        A PEPS on a 2D lattice is constructed analogously to the 1D MPS-as-PEPS picture (Section 8.2.7):
      </p>
      <ol>
        <li><strong>Virtual lattice:</strong> Start with a lattice where each edge carries a maximally entangled pair:
          <div class="equation">
            |Ψ_edge⟩ = ∑_{α=1}^χ |α⟩ ⊗ |α⟩
          </div>
        </li>
        <li><strong>Local tensors:</strong> At each vertex i, place a rank-5 tensor A^{i_j}_{αβγδ} that:
          <ul>
            <li>Takes 4 virtual indices as input: α,β,γ,δ ∈ {1,...,χ} (from 4 neighboring bonds)</li>
            <li>Maps to 1 physical index: i_j ∈ {1,...,d} (physical spin/particle state)</li>
          </ul>
        </li>
        <li><strong>Projection:</strong> The tensor acts as a linear map from virtual to physical Hilbert space:
          <div class="equation">
            |i_j⟩_phys = ∑_{αβγδ} A^{i_j}_{αβγδ} |αβγδ⟩_virt
          </div>
        </li>
        <li><strong>Global contraction:</strong> Contract all virtual indices across the lattice:
          <div class="equation">
            |ψ⟩ = ∑_{i₁...i_N} [∏_{all bonds} ∑_α δ_{α,α'}] [∏_{all sites} A^{i_j}] |i₁...i_N⟩
          </div>
        </li>
      </ol>
      <p>
        For a square lattice with N = L² sites, each with 4 neighbors, this yields a quantum state in Hilbert space ℂ^{d^{L²}}.
      </p>
    </div>

    <h3>Graphical Representation</h3>

    <div class="highlight-box">
      <h4>Tensor Network Diagram for 2D PEPS</h4>
      <p>
        A 2D PEPS on a 3×3 square lattice:
      </p>
      <div class="equation">
        Physical indices (out of page):   ↑    ↑    ↑
                                          |    |    |
        Virtual bonds (in plane):    [A]--[A]--[A]
                                       |    |    |
                                      [A]--[A]--[A]
                                       |    |    |
                                      [A]--[A]--[A]
      </div>
      <p>
        where each tensor A has:
      </p>
      <ul>
        <li>One physical leg (vertical, pointing out): index i ∈ {1,...,d} (e.g., spin-1/2: d=2)</li>
        <li>Four virtual legs (horizontal/vertical in plane): α,β,γ,δ ∈ {1,...,χ}</li>
        <li>Total tensor dimension: d × χ⁴</li>
        <li>Number of parameters: dχ⁴ (assuming no symmetry)</li>
      </ul>
      <p>
        <strong>Example:</strong> Spin-1/2 on square lattice with χ = 4:
      </p>
      <ul>
        <li>d = 2 (spin up/down)</li>
        <li>Parameters per site: 2 × 4⁴ = 512 complex numbers</li>
        <li>Total variational parameters (10×10 lattice): 512 × 100 = 51,200</li>
      </ul>
    </div>

    <h3>Mathematical Formulation</h3>

    <div class="info-box">
      <h3>Explicit Expression</h3>
      <p>
        For a square lattice labeled by coordinates (x,y), the PEPS wave function is:
      </p>
      <div class="equation">
        ψ(i₁₁, i₁₂, ..., i_{L_x L_y}) = ∑_{all α} ∏_{x,y} A^{i_{xy}}_{α^L_{xy}, α^R_{xy}, α^U_{xy}, α^D_{xy}}
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>i_{xy} ∈ {1,...,d}: physical index at site (x,y)</li>
        <li>α^L, α^R, α^U, α^D: left, right, up, down virtual indices</li>
        <li>Sum over all virtual configurations: (χ)^{2L_x L_y} terms before contraction</li>
        <li>Contraction constraints: α^R_{x,y} = α^L_{x+1,y}, etc. (reduces to d^{L_x L_y} physical configurations)</li>
      </ul>
      <p>
        <strong>Computational challenge:</strong> The sum over virtual indices is exponentially large, making direct evaluation intractable.
      </p>
    </div>

    <h2>Applications of PEPS</h2>

    <div class="info-box">
      <h3>What Can PEPS Describe?</h3>
      <p>
        PEPS provide a unified framework for studying a wide range of 2D quantum phenomena:
      </p>
      <ul>
        <li><strong>Symmetry breaking phases:</strong>
          <ul>
            <li>2D Ising model (ferromagnet/antiferromagnet)</li>
            <li>Heisenberg antiferromagnet on square/triangular lattices</li>
            <li>XY model (superfluid order)</li>
            <li>Nematic order in quantum liquids</li>
          </ul>
        </li>
        <li><strong>Topological phases:</strong>
          <ul>
            <li>Toric code (ℤ₂ topological order)</li>
            <li>Quantum double models (D(G) for any finite group G)</li>
            <li>Chern insulators (integer quantum Hall)</li>
            <li>String-net models (doubled theories)</li>
          </ul>
        </li>
        <li><strong>Fractional quantum Hall states:</strong>
          <ul>
            <li>Laughlin states (ν = 1/m)</li>
            <li>Moore-Read (Pfaffian) state</li>
            <li>Read-Rezayi states</li>
            <li>Composite fermion states</li>
          </ul>
        </li>
        <li><strong>Spin liquids:</strong>
          <ul>
            <li>ℤ₂ spin liquid on kagome lattice</li>
            <li>Chiral spin liquid (intrinsic topological order)</li>
            <li>U(1) spin liquid (gapless)</li>
          </ul>
        </li>
        <li><strong>Frustrated magnets:</strong>
          <ul>
            <li>J₁-J₂ model on square lattice</li>
            <li>Kagome Heisenberg antiferromagnet</li>
            <li>Shastry-Sutherland lattice</li>
          </ul>
        </li>
        <li><strong>Strongly correlated materials:</strong>
          <ul>
            <li>2D Hubbard model (cuprate superconductors)</li>
            <li>t-J model</li>
            <li>Twisted bilayer graphene</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Concrete Examples with Parameters</h3>

    <div class="highlight-box">
      <h4>Benchmark PEPS Applications</h4>
      <p>
        <strong>1. 2D Transverse Field Ising Model</strong>
      </p>
      <ul>
        <li>Hamiltonian: H = -J ∑_{⟨ij⟩} σ^z_i σ^z_j - Γ ∑_i σ^x_i</li>
        <li>Phase transition at Γ_c/J ≈ 3.04</li>
        <li>PEPS bond dimension: χ = 6-12 for good accuracy</li>
        <li>Typical results: Critical exponents within 1-2% of exact</li>
      </ul>
      <p>
        <strong>2. Kagome Heisenberg Antiferromagnet</strong>
      </p>
      <ul>
        <li>Hamiltonian: H = J ∑_{⟨ij⟩} S_i · S_j (frustrated)</li>
        <li>Ground state: Likely spin liquid</li>
        <li>PEPS bond dimension: χ = 8-16 required</li>
        <li>Challenge: Breaking lattice symmetry artifacts</li>
      </ul>
      <p>
        <strong>3. 2D Hubbard Model</strong>
      </p>
      <ul>
        <li>Hamiltonian: H = -t ∑_{⟨ij⟩σ} c†_{iσ}c_{jσ} + U ∑_i n_{i↑}n_{i↓}</li>
        <li>Physical dimension: d = 4 (empty, ↑, ↓, double occupancy)</li>
        <li>PEPS bond dimension: χ = 10-20 for doped case</li>
        <li>State-of-art: 10×10 lattices, comparisons with DMFT</li>
      </ul>
    </div>

    <h2>Chapter Roadmap</h2>

    <p>
      This chapter systematically develops the theory and applications of higher-dimensional tensor networks:
    </p>

    <div class="highlight-box">
      <h4>What We'll Cover</h4>
      <p>
        <strong>Section 9.2: Tensor Product States (PEPS Formalism)</strong>
      </p>
      <ul>
        <li>Formal definition of PEPS for arbitrary dimensions and lattices</li>
        <li>Examples: product states, GHZ states, cluster states, valence bond solids</li>
        <li>Properties: bond dimension χ, entanglement area law, parameter counting</li>
        <li>Computational complexity: #P-hardness of exact contraction</li>
        <li>Gauge freedom and canonical forms</li>
      </ul>
      <p>
        <strong>Section 9.3: Symmetry Breaking Phases</strong>
      </p>
      <ul>
        <li>PEPS representation of 2D Ising model (exact with χ = 2)</li>
        <li>Structural properties: long-range order, correlation functions, transfer matrix</li>
        <li>Block structure of tensors reflecting global symmetry (U(1), SU(2), etc.)</li>
        <li>Order parameters and spontaneous symmetry breaking</li>
        <li>Goldstone modes and gapless excitations</li>
      </ul>
      <p>
        <strong>Section 9.4: Topological Phases</strong>
      </p>
      <ul>
        <li>Toric code as prototypical PEPS with topological order</li>
        <li>Structural properties: topological entanglement entropy, ground state degeneracy</li>
        <li>Extracting topological properties from local tensors: fusion rules, F-symbols, R-symbols</li>
        <li>Symmetry-enriched topological (SET) phases and stability</li>
      </ul>
      <p>
        <strong>Section 9.5: Other Tensor Network Architectures</strong>
      </p>
      <ul>
        <li>Multi-scale Entanglement Renormalization Ansatz (MERA): hierarchical RG structure</li>
        <li>Tree tensor networks (TTN): flexible architecture for moderate entanglement</li>
        <li>Comparison: When to use MPS vs PEPS vs MERA vs TTN</li>
      </ul>
      <p>
        <strong>Section 9.6: Summary and Outlook</strong>
      </p>
      <ul>
        <li>Synthesis of higher-dimensional tensor network methods</li>
        <li>Open challenges: contraction algorithms, large-scale simulations, fermions</li>
        <li>Future directions: machine learning, quantum computing, materials design</li>
      </ul>
    </div>

    <h2>Computational Perspective</h2>

    <div class="info-box">
      <h3>State of the Art (2025)</h3>
      <p>
        <strong>Current capabilities:</strong>
      </p>
      <ul>
        <li><strong>Typical system sizes:</strong>
          <ul>
            <li>Gapped phases: 20×20 to 40×40 lattices (400-1600 sites)</li>
            <li>Critical phases: 10×10 to 20×20 (finite-size scaling)</li>
            <li>Strongly frustrated: 10×10 (high entanglement)</li>
          </ul>
        </li>
        <li><strong>Bond dimensions:</strong>
          <ul>
            <li>Simple models (Ising): χ ~ 2-8</li>
            <li>Quantum models: χ ~ 4-20</li>
            <li>Hubbard model: χ ~ 10-20 (d=4 physical)</li>
          </ul>
        </li>
        <li><strong>Computational cost:</strong>
          <ul>
            <li>Small systems (10×10, χ=6): Hours on single GPU</li>
            <li>Large systems (30×30, χ=10): Days on HPC cluster</li>
            <li>Frontier (50×50, χ=12): Weeks on supercomputer</li>
          </ul>
        </li>
        <li><strong>Accuracy:</strong>
          <ul>
            <li>Ground state energy: 10^{-4} to 10^{-6} (relative error)</li>
            <li>Order parameters: 10^{-3} to 10^{-4}</li>
            <li>Critical exponents: 1-5% error</li>
            <li>Uncontrolled approximations in contraction</li>
          </ul>
        </li>
      </ul>
      <p>
        <strong>Recent algorithmic progress:</strong>
      </p>
      <ul>
        <li>Improved contraction: Boundary MPS (Corboz), corner transfer matrix renormalization group (CTMRG), tensor renormalization group (TRG)</li>
        <li>Automatic differentiation: Gradient-based optimization (PyTorch, JAX)</li>
        <li>GPU acceleration: 10-100× speedup for tensor contractions</li>
        <li>Symmetry-adapted PEPS: U(1), SU(2) quantum numbers reduce cost by 10-100×</li>
        <li>Neural network integration: Hybrid PEPS-NN ansätze</li>
      </ul>
    </div>

    <h3>Comparison with Other Methods</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>System Size</th>
            <th>Accuracy</th>
            <th>Strengths</th>
            <th>Weaknesses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Exact diagonalization</td>
            <td>~40 sites (d=2)</td>
            <td>Machine precision</td>
            <td>Exact, all properties</td>
            <td>Exponential scaling</td>
          </tr>
          <tr>
            <td>Quantum Monte Carlo</td>
            <td>10⁴-10⁶ sites</td>
            <td>Statistical</td>
            <td>Large systems, thermal</td>
            <td>Sign problem</td>
          </tr>
          <tr>
            <td>DMRG (2D)</td>
            <td>~10×100 (cylinder)</td>
            <td>10^{-8}</td>
            <td>High accuracy</td>
            <td>Quasi-1D only</td>
          </tr>
          <tr>
            <td>PEPS</td>
            <td>20×20 to 40×40</td>
            <td>10^{-4}-10^{-6}</td>
            <td>True 2D, topological</td>
            <td>Uncontrolled errors</td>
          </tr>
          <tr>
            <td>Coupled cluster</td>
            <td>100+ sites</td>
            <td>Good for weak correlation</td>
            <td>Systematic hierarchy</td>
            <td>Fails for strong correlation</td>
          </tr>
          <tr>
            <td>Neural quantum states</td>
            <td>10×10 to 30×30</td>
            <td>Varies</td>
            <td>Flexible, black-box</td>
            <td>Hard to interpret</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Connection to Previous Chapters</h2>

    <div class="highlight-box">
      <h4>Building on Earlier Ideas</h4>
      <ul>
        <li><strong>Chapter 2 (Entanglement):</strong>
          <ul>
            <li>Area law S ~ L in 2D vs S ~ O(1) in 1D</li>
            <li>Entanglement entropy as diagnostic of quantum phases</li>
            <li>Mutual information and correlations</li>
          </ul>
        </li>
        <li><strong>Chapter 4 (Error Correction):</strong>
          <ul>
            <li>Toric code as both PEPS and quantum error-correcting code</li>
            <li>Topological stabilizer codes from PEPS structure</li>
            <li>Fault tolerance and anyonic braiding</li>
          </ul>
        </li>
        <li><strong>Chapter 6 (Topological Order):</strong>
          <ul>
            <li>PEPS enables intrinsic topological order impossible in 1D</li>
            <li>Ground state degeneracy from topology, not symmetry</li>
            <li>Anyonic excitations encoded in PEPS</li>
          </ul>
        </li>
        <li><strong>Chapter 7 (Quantum Phases):</strong>
          <ul>
            <li>Classification extended to 2D via PEPS with symmetry</li>
            <li>SPT phases in higher dimensions</li>
            <li>Local unitary equivalence and LU-LRE classification</li>
          </ul>
        </li>
        <li><strong>Chapter 8 (MPS):</strong>
          <ul>
            <li>PEPS is the natural 2D/3D generalization of MPS</li>
            <li>Many MPS concepts carry over: canonical forms, parent Hamiltonians, injectivity</li>
            <li>Boundary MPS connects PEPS to 1D</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>Historical Context</h2>

    <div class="info-box">
      <h3>Development of PEPS and Higher-Dimensional Tensor Networks</h3>
      <p>
        <strong>Timeline:</strong>
      </p>
      <ul>
        <li><strong>1992:</strong> White introduces Density Matrix Renormalization Group (DMRG) for 1D systems</li>
        <li><strong>1995-1996:</strong> MPS formulation by Östlund-Rommer, Dukelsky et al.</li>
        <li><strong>2004:</strong> Verstraete and Cirac introduce PEPS for 2D quantum systems</li>
        <li><strong>2005:</strong> Vidal introduces MERA (Multi-scale Entanglement Renormalization Ansatz)</li>
        <li><strong>2006-2008:</strong> Development of contraction algorithms:
          <ul>
            <li>Boundary MPS method (Cirac group)</li>
            <li>Corner Transfer Matrix RG (CTMRG) adapted to PEPS</li>
            <li>Tensor Renormalization Group (TRG) by Levin-Nave</li>
          </ul>
        </li>
        <li><strong>2009-2012:</strong> Applications to topological order:
          <ul>
            <li>Schuch et al.: Classification of topological PEPS</li>
            <li>Gu et al.: Tensor entanglement renormalization group</li>
            <li>Extracting topological invariants from PEPS tensors</li>
          </ul>
        </li>
        <li><strong>2013-2017:</strong> Symmetry-enriched phases and frustrated magnets:
          <ul>
            <li>SU(2)-symmetric PEPS for spin systems</li>
            <li>Kagome and triangular lattice studies</li>
            <li>Fermionic PEPS development</li>
          </ul>
        </li>
        <li><strong>2018-2022:</strong> Machine learning integration:
          <ul>
            <li>Automatic differentiation for PEPS optimization</li>
            <li>Neural network quantum states vs PEPS comparison</li>
            <li>GPU-accelerated tensor contractions</li>
          </ul>
        </li>
        <li><strong>2023-2025:</strong> Large-scale simulations and applications:
          <ul>
            <li>2D Hubbard model at finite doping (cuprates)</li>
            <li>Twisted bilayer graphene effective models</li>
            <li>Quantum chemistry applications of tree tensor networks</li>
            <li>Hybrid classical-quantum algorithms using PEPS</li>
          </ul>
        </li>
      </ul>
      <p>
        The PEPS framework has evolved from a theoretical construct to a practical computational tool, now routinely used for studying 2D quantum systems that were previously inaccessible.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Takeaways</h3>
      <ul>
        <li><strong>Motivation:</strong> 2D/3D systems exhibit phenomena impossible in 1D (topological order, anyons, geometric frustration)</li>
        <li><strong>Fundamental challenge:</strong> Area law S ~ L^{d-1} makes exact simulation exponentially harder in higher dimensions</li>
        <li><strong>PEPS ansatz:</strong> Natural generalization of MPS to arbitrary dimensions and lattice structures</li>
        <li><strong>Structure:</strong> Rank-(d+1) tensors with d virtual bonds plus 1 physical index; bond dimension χ controls approximation quality</li>
        <li><strong>Parameters:</strong> dχ^{2d} per site (exponential in dimension!)</li>
        <li><strong>Applications:</strong> Symmetry breaking, topological phases, frustrated magnetism, strongly correlated materials</li>
        <li><strong>Computational cost:</strong> Approximate contractions O(χ^{3d+3}), limited to χ ~ 4-20 in 2D</li>
        <li><strong>State-of-art:</strong> 20×20 to 40×40 lattices, GPU acceleration, automatic differentiation, symmetry exploitation</li>
        <li><strong>Comparison:</strong> Complementary to QMC (no sign problem) and DMRG (true 2D); less accurate than exact diagonalization but scales to larger systems</li>
        <li><strong>Chapter goal:</strong> Develop comprehensive theory and practical methods for PEPS and related tensor networks</li>
      </ul>
    </div>

    <p>
      As we proceed through this chapter, we'll see how the tensor network perspective illuminates the structure of 2D quantum systems, from conventional symmetry-breaking phases to exotic topological states. The interplay between local tensor structure and global quantum phases reveals deep connections between entanglement geometry and emergent physics. We'll develop both the mathematical formalism and computational techniques needed to harness the power of higher-dimensional tensor networks for understanding quantum matter.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
