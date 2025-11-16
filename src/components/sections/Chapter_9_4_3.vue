<template>
  <div class="section-content">
    <h1>9.4.3 Topological Property from Local Tensors</h1>

    <p>
      One of the most remarkable aspects of the PEPS framework is that global topological invariants—such as ground state degeneracy, anyonic excitations, and braiding statistics—can be extracted directly from the local tensor data. This section develops the machinery for reading off topological properties from PEPS tensors.
    </p>

    <h2>The Virtual Space as Anyon Theory</h2>

    <div class="info-box">
      <h3>Virtual Indices Carry Anyon Labels</h3>
      <p>
        In a topological PEPS, virtual bond indices α ∈ {1, ..., χ} can be decomposed into anyon types:
      </p>
      <div class="equation">
        V_virtual = ⊕_{a ∈ 𝒜} V_a ⊗ ℂ^{m_a}
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>𝒜 is the set of anyon types (superselection sectors)</li>
        <li>V_a is a 1D space labeled by anyon a</li>
        <li>m_a is the multiplicity (number of "copies" of anyon a)</li>
        <li>Total bond dimension: χ = ∑_a m_a</li>
      </ul>
      <p>
        <strong>Physical meaning:</strong> Virtual bonds represent "strings" of anyonic flux connecting sites.
      </p>
    </div>

    <h3>Example: Toric Code Decomposition</h3>

    <div class="highlight-box">
      <h4>ℤ₂ Topological Order</h4>
      <p>
        For the toric code with χ = 2:
      </p>
      <div class="equation">
        V_virtual = V_1 ⊕ V_e
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>V_1 corresponds to "no flux" (vacuum)</li>
        <li>V_e corresponds to "electric flux"</li>
        <li>Each has multiplicity m_1 = m_e = 1</li>
      </ul>
      <p>
        The magnetic flux m and fermion ε emerge from composite structures, not individual bonds.
      </p>
    </div>

    <h2>Extracting Fusion Rules</h2>

    <div class="info-box">
      <h3>Tensor Contractions as Anyon Fusion</h3>
      <p>
        When two virtual bonds meet at a tensor vertex, they "fuse" according to the tensor structure:
      </p>
      <div class="equation">
        a × b = ∑_c N^c_{ab} c
      </div>
      <p>
        where N^c_{ab} are fusion multiplicities (non-negative integers).
      </p>
      <p>
        <strong>Reading from PEPS tensor:</strong>
      </p>
      <ol>
        <li>Decompose tensor A^i_{αβγδ} by anyon sectors of virtual indices</li>
        <li>Non-zero blocks A^i_{abc...} indicate allowed fusion channels</li>
        <li>Dimension of block gives fusion multiplicity</li>
      </ol>
    </div>

    <h3>Example: Toric Code Fusion Rules</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>a × b</th>
            <th>Fusion Result</th>
            <th>N^c_{ab}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 × a</td>
            <td>a</td>
            <td>1</td>
          </tr>
          <tr>
            <td>e × e</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>m × m</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>e × m</td>
            <td>ε</td>
            <td>1</td>
          </tr>
          <tr>
            <td>ε × ε</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>e × ε</td>
            <td>m</td>
            <td>1</td>
          </tr>
          <tr>
            <td>m × ε</td>
            <td>e</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>The F-Symbols and Pentagon Equation</h2>

    <div class="info-box">
      <h3>Associativity of Fusion</h3>
      <p>
        When three anyons fuse, the order matters. The F-symbol relates different fusion orders:
      </p>
      <div class="equation">
        [F^{abc}_d]_{ef} : (a × b → e) × c → d  ⟷  a × (b × c → f) → d
      </div>
      <p>
        These F-symbols can be extracted from PEPS by comparing different tensor contraction orders on small plaquettes.
      </p>
      <p>
        <strong>Pentagon equation:</strong> Consistency of four-anyon fusion requires:
      </p>
      <div class="equation">
        ∑_h F^{abe}_g F^{gcd}_f = ∑_k F^{bcd}_k F^{akd}_f F^{abc}_h
      </div>
      <p>
        This is automatically satisfied for consistent topological PEPS.
      </p>
    </div>

    <h3>Extracting F-Symbols from Tensors</h3>

    <div class="highlight-box">
      <h4>Procedure</h4>
      <ol>
        <li>Consider a 2×2 plaquette of PEPS tensors</li>
        <li>Contract in two different ways:
          <ul>
            <li>First horizontal then vertical → yields state with intermediate e</li>
            <li>First vertical then horizontal → yields state with intermediate f</li>
          </ul>
        </li>
        <li>The transformation between these is the F-matrix</li>
        <li>Verify pentagon equation to confirm consistency</li>
      </ol>
      <p>
        For the toric code (abelian anyons), all F-symbols are ±1 (phases).
      </p>
    </div>

    <h2>The R-Symbols and Braiding Statistics</h2>

    <div class="info-box">
      <h3>Exchanging Anyons</h3>
      <p>
        When anyon a and b are exchanged (braided), the state transforms by the R-matrix:
      </p>
      <div class="equation">
        R^{ab}_c : a × b → c  ⟿  b × a → c
      </div>
      <p>
        This encodes the statistical phase acquired when anyons braid around each other.
      </p>
      <p>
        <strong>Key properties:</strong>
      </p>
      <ul>
        <li>For bosons: R^{ab}_c = 1</li>
        <li>For fermions: R^{ab}_c = -1</li>
        <li>For anyons: R^{ab}_c = e^{iθ_{ab}} (general phase)</li>
      </ul>
    </div>

    <h3>Extracting Braiding from PEPS</h3>

    <div class="highlight-box">
      <h4>Method 1: String Operator Commutation</h4>
      <p>
        Create two anyons with string operators W_a and W_b, then move one around the other:
      </p>
      <ol>
        <li>Apply W_a to create a-ā pair</li>
        <li>Apply W_b to create b-b̄ pair</li>
        <li>Move a around b (or vice versa) using PEPS contractions</li>
        <li>The phase accumulated is R^{ab}</li>
      </ol>
      <p>
        <strong>Toric code example:</strong>
      </p>
      <ul>
        <li>Braiding e around m: R^{em} = -1 (mutual semions)</li>
        <li>ε × ε = 1 with R^{εε} = -1 (fermion)</li>
      </ul>
    </div>

    <h2>Topological S and T Matrices</h2>

    <div class="info-box">
      <h3>Modular Transformations</h3>
      <p>
        On a torus, we can define modular S and T matrices that completely characterize the topological phase:
      </p>
      <div class="equation">
        S_{ab} = (1/𝒟) ∑_c N^c_{ab} θ_c d_a d_b / d_c
      </div>
      <div class="equation">
        T_{ab} = δ_{ab} θ_a
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>θ_a is the topological spin (self-statistics) of anyon a</li>
        <li>d_a is the quantum dimension of anyon a</li>
        <li>𝒟 = √(∑_a d_a²) is the total quantum dimension</li>
      </ul>
    </div>

    <h3>Computing from Transfer Matrix</h3>

    <div class="highlight-box">
      <h4>Boundary MPS Method</h4>
      <p>
        For PEPS on a torus, the transfer matrix eigenspace gives direct access to S and T:
      </p>
      <ol>
        <li>Compute transfer matrix E in both spatial directions (E_x and E_y)</li>
        <li>Leading D×D eigenspace encodes topological sectors</li>
        <li>Apply "Dehn twist" (swap x and y directions) → extracts S-matrix</li>
        <li>Apply "T-transformation" (shift) → extracts T-matrix</li>
      </ol>
      <p>
        <strong>Toric code S and T matrices:</strong>
      </p>
      <div class="equation">
        S = (1/2)
        [1   1   1   1 ]
        [1   1  -1  -1 ]
        [1  -1   1  -1 ]
        [1  -1  -1   1 ]
      </div>
      <div class="equation">
        T = diag(1, 1, 1, -1)
      </div>
    </div>

    <h2>Quantum Dimensions</h2>

    <div class="info-box">
      <h3>Effective Hilbert Space Dimension</h3>
      <p>
        Each anyon type a has a quantum dimension d_a characterizing how many states it can fuse into:
      </p>
      <div class="equation">
        d_a = largest eigenvalue of N_a matrix
      </div>
      <p>
        where (N_a)_{bc} = N^a_{bc}.
      </p>
      <p>
        <strong>Properties:</strong>
      </p>
      <ul>
        <li>d_a ≥ 1 for all a</li>
        <li>d_1 = 1 (vacuum)</li>
        <li>d_a can be non-integer! (e.g., Fibonacci anyon: d = φ = (1+√5)/2)</li>
      </ul>
    </div>

    <h3>Total Quantum Dimension and Entanglement</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Anyons {d_a}</th>
            <th>𝒟 = √(∑ d_a²)</th>
            <th>γ_topo = log 𝒟</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trivial</td>
            <td>{1}</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Toric code</td>
            <td>{1, 1, 1, 1}</td>
            <td>2</td>
            <td>log 2</td>
          </tr>
          <tr>
            <td>ℤ_n toric code</td>
            <td>{1, 1, ..., 1} (n² times)</td>
            <td>n</td>
            <td>log n</td>
          </tr>
          <tr>
            <td>Fibonacci</td>
            <td>{1, φ}</td>
            <td>φ</td>
            <td>log φ ≈ 0.481</td>
          </tr>
          <tr>
            <td>Ising</td>
            <td>{1, √2, 1}</td>
            <td>2</td>
            <td>log 2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      The topological entanglement entropy γ_topo = log 𝒟 directly reflects the total quantum dimension.
    </p>

    <h2>Extracting Ground State Degeneracy</h2>

    <div class="info-box">
      <h3>From Anyon Data to Degeneracy</h3>
      <p>
        Once anyon types and fusion rules are known, ground state degeneracy on genus g surface is:
      </p>
      <div class="equation">
        D(g) = ∑_{a₁,...,a_{2g}} ∏_{i=1}^{2g} N^1_{a_i ā_i}
      </div>
      <p>
        For abelian theories (like toric code), this simplifies to:
      </p>
      <div class="equation">
        D(g) = |𝒜|^g
      </div>
      <p>
        <strong>Verification:</strong> Can be checked by computing transfer matrix on different topologies and counting degenerate eigenvalues.
      </p>
    </div>

    <h2>Chern Number from PEPS</h2>

    <div class="highlight-box">
      <h4>For Chiral Topological Phases</h4>
      <p>
        In chiral phases (e.g., fractional quantum Hall), the Chern number can be computed from:
      </p>
      <ol>
        <li>Define Berry connection on virtual space: A_μ = i⟨ψ|∂_μ|ψ⟩</li>
        <li>Compute Berry curvature: F = ∂_x A_y - ∂_y A_x</li>
        <li>Integrate over Brillouin zone:
          <div class="equation">
            C = (1/2π) ∫ F dx dy
          </div>
        </li>
      </ol>
      <p>
        For toric code (non-chiral): C = 0. For Laughlin ν=1/3 FQH state: C = 3.
      </p>
    </div>

    <h2>Computational Algorithm Summary</h2>

    <div class="info-box">
      <h3>Complete Procedure for Topological Characterization</h3>
      <p>
        Given a PEPS tensor A^i_{αβγδ}, extract all topological data:
      </p>
      <ol>
        <li><strong>Symmetry analysis:</strong> Find virtual gauge group/symmetry structure</li>
        <li><strong>Block decomposition:</strong> Decompose A by irreps → identify anyon types 𝒜</li>
        <li><strong>Fusion rules:</strong> Examine non-zero tensor blocks → N^c_{ab}</li>
        <li><strong>F-symbols:</strong> Contract 2×2 plaquettes in different orders → F-matrices</li>
        <li><strong>R-symbols:</strong> Compute string operator commutators → braiding phases</li>
        <li><strong>Quantum dimensions:</strong> Largest eigenvalue of N_a matrices → {d_a}</li>
        <li><strong>Total quantum dimension:</strong> 𝒟 = √(∑ d_a²)</li>
        <li><strong>S and T matrices:</strong> From transfer matrix on torus</li>
        <li><strong>Topological entanglement entropy:</strong> γ_topo = log 𝒟</li>
        <li><strong>Ground state degeneracy:</strong> D(g) from anyon fusion rules</li>
      </ol>
    </div>

    <h2>Example: Complete Analysis of Toric Code</h2>

    <div class="highlight-box">
      <h4>Step-by-Step Extraction</h4>
      <p>
        <strong>Step 1:</strong> Virtual space is ℂ² with ℤ₂ structure → Anyons: {1, e, m, ε}
      </p>
      <p>
        <strong>Step 2:</strong> Fusion rules are ℤ₂ × ℤ₂:
      </p>
      <div class="equation">
        e × e = 1, m × m = 1, e × m = ε, ε × ε = 1
      </div>
      <p>
        <strong>Step 3:</strong> All quantum dimensions d_a = 1 (abelian theory)
      </p>
      <p>
        <strong>Step 4:</strong> Total quantum dimension 𝒟 = 2
      </p>
      <p>
        <strong>Step 5:</strong> Braiding: R^{em} = -1 (mutual semions), θ_ε = -1 (fermion)
      </p>
      <p>
        <strong>Step 6:</strong> S-matrix is Hadamard-like (shown earlier)
      </p>
      <p>
        <strong>Step 7:</strong> Ground state degeneracy D(g) = 4^g
      </p>
      <p>
        <strong>Step 8:</strong> Topological entanglement entropy γ_topo = log 2
      </p>
    </div>

    <h2>Non-Abelian Example: Fibonacci</h2>

    <div class="info-box">
      <h3>Richer Topological Structure</h3>
      <p>
        The Fibonacci anyon theory has anyons {1, τ} with fusion rule:
      </p>
      <div class="equation">
        τ × τ = 1 + τ
      </div>
      <p>
        <strong>Properties from PEPS analysis:</strong>
      </p>
      <ul>
        <li>Quantum dimensions: d_1 = 1, d_τ = φ = (1+√5)/2</li>
        <li>Total quantum dimension: 𝒟 = φ</li>
        <li>Topological spin: θ_τ = e^{4πi/5}</li>
        <li>Ground state degeneracy on torus: D(1) = φ² ≈ 2.618 → rounds to 3 states in practice</li>
        <li>Non-abelian braiding (R-matrix non-diagonal)</li>
        <li>Universal for quantum computation</li>
      </ul>
    </div>

    <h2>Limitations and Challenges</h2>

    <div class="highlight-box">
      <h4>Practical Difficulties</h4>
      <ul>
        <li><strong>Numerical precision:</strong> Extracting exact fusion rules from approximate PEPS</li>
        <li><strong>Gauge fixing:</strong> Must fix PEPS gauge before comparing tensors</li>
        <li><strong>Degeneracy splitting:</strong> Finite-size effects lift exact degeneracies</li>
        <li><strong>Non-injective PEPS:</strong> Harder to extract clean topological data</li>
        <li><strong>Large χ:</strong> Block decomposition becomes computationally expensive</li>
      </ul>
      <p>
        <strong>Best results:</strong> Fixed-point PEPS (exact models) or well-converged variational PEPS
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Methods for Extracting Topological Data</h3>
      <ul>
        <li><strong>Anyon types:</strong> From virtual space symmetry/block structure</li>
        <li><strong>Fusion rules N^c_{ab}:</strong> Non-zero blocks in tensor decomposition</li>
        <li><strong>F-symbols:</strong> Plaquette contractions in different orders</li>
        <li><strong>R-symbols:</strong> String operator commutation relations</li>
        <li><strong>Quantum dimensions {d_a}:</strong> Eigenvalues of fusion matrices N_a</li>
        <li><strong>Total quantum dimension 𝒟:</strong> √(∑ d_a²)</li>
        <li><strong>S and T matrices:</strong> Transfer matrix on torus with modular transformations</li>
        <li><strong>Ground state degeneracy D(g):</strong> From fusion rules or transfer matrix</li>
        <li><strong>Topological entanglement entropy:</strong> γ_topo = log 𝒟</li>
        <li><strong>Chern number:</strong> Berry curvature integration (for chiral phases)</li>
      </ul>
    </div>

    <p>
      The remarkable fact that all global topological invariants can be extracted from local tensor data demonstrates the power of the PEPS framework. This local-to-global connection provides both theoretical insight and practical computational tools for characterizing topological phases. In the next section, we explore how symmetry constraints further structure topological PEPS and enhance their stability.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_4_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
