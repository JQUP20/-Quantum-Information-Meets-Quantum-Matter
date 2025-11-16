<template>
  <div class="section-content">
    <h1>8.2.9 Injectivity</h1>

    <p>
      Injectivity is a mathematical property that distinguishes "well-behaved" MPS from pathological cases. Injective MPS have unique parent Hamiltonians, well-defined correlation lengths, and provide the natural framework for classifying gapped phases. This section explores what injectivity means and why it matters.
    </p>

    <h2>Definition of Injectivity</h2>

    <div class="info-box">
      <h3>Injective MPS (Finite Chain)</h3>
      <p>
        An MPS with tensors {A^i} (i = 1, ..., d) on a finite chain of length N is <strong>injective</strong> if the following map is injective (one-to-one):
      </p>
      <div class="equation">
        Φ: ℂ^{χ×χ} → (ℂ^d)^⊗L},   X ↦ ∑_{i₁...i_L} Tr[A^{i₁}···A^{i_L} X] |i₁...i_L⟩
      </div>
      <p>
        for sufficiently large L (typically L > χ²/d suffices).
      </p>
      <p>
        <strong>Intuition:</strong> Different bond operators X produce different local states. The MPS tensors don't have "hidden redundancies."
      </p>
    </div>

    <h3>Injective MPS (Infinite Chain)</h3>

    <div class="highlight-box">
      <h4>Definition for Translationally Invariant Systems</h4>
      <p>
        For an infinite translationally invariant MPS with a single tensor A^i, we say it's injective if:
      </p>
      <div class="equation">
        span{A^{i₁} A^{i₂} ··· A^{i_L} : all sequences i₁...i_L} = ℂ^{χ×χ}
      </div>
      <p>
        for some finite L. That is, products of L MPS tensors span the full matrix space ℂ^{χ×χ}.
      </p>
      <p>
        <strong>Equivalent condition:</strong> The transfer matrix E = ∑_i A^i ⊗ (A^i)* has a unique dominant eigenvalue (with multiplicity 1).
      </p>
    </div>

    <h2>Examples</h2>

    <h3>Example 1: Generic MPS (Injective)</h3>

    <div class="highlight-box">
      <p>
        For a "generic" choice of MPS tensors {A^i} with d ≥ 2 and χ ≥ 2:
      </p>
      <div class="equation">
        A^0 = [a₁₁  a₁₂]     A^1 = [b₁₁  b₁₂]
              [a₂₁  a₂₂]           [b₂₁  b₂₂]
      </div>
      <p>
        with random entries, the MPS is injective with high probability. After L ~ χ² iterations:
      </p>
      <div class="equation">
        {products of L matrices A^{i_k}} spans ℂ^{2×2}
      </div>
      <p>
        <strong>Physical meaning:</strong> The state has no hidden structure; all bond degrees of freedom are "used."
      </p>
    </div>

    <h3>Example 2: Product States (Non-Injective)</h3>

    <div class="highlight-box">
      <h4>Trivial Non-Injectivity</h4>
      <p>
        A product state |ψ⟩ = |φ⟩^⊗N with χ = 1 has tensors:
      </p>
      <div class="equation">
        A^0 = [α],   A^1 = [β]
      </div>
      <p>
        This is NOT injective because:
      </p>
      <div class="equation">
        span{A^{i₁}···A^{i_L}} = {scalars} ⊊ ℂ^{1×1}
      </div>
      <p>
        Actually, for χ = 1, the definition is vacuous—we consider χ = 1 MPS as trivially non-injective.
      </p>
    </div>

    <h3>Example 3: GHZ State (Non-Injective)</h3>

    <div class="highlight-box">
      <h4>Non-Trivial Non-Injectivity</h4>
      <p>
        The GHZ state with χ = 2:
      </p>
      <div class="equation">
        A^0 = [1  0]     A^1 = [0  0]
              [0  0]           [0  1]
      </div>
      <p>
        Any product A^{i₁}···A^{i_L} is diagonal:
      </p>
      <div class="equation">
        A^{i₁}···A^{i_L} ∈ {[1  0], [0  1], [0  0]}
                            [0  0]  [0  0]  [0  1]
      </div>
      <p>
        This spans only a 2D subspace of ℂ^{2×2} (the diagonal matrices), so the MPS is non-injective.
      </p>
      <p>
        <strong>Physical interpretation:</strong> The GHZ state has long-range correlations that prevent local injectivity.
      </p>
    </div>

    <h3>Example 4: AKLT State (Injective)</h3>

    <div class="highlight-box">
      <p>
        The AKLT state with:
      </p>
      <div class="equation">
        A^{-1} = [0  1]   A^0 = (1/√2)[1   0]   A^{+1} = [0  0]
                 [0  0]                [0  -1]            [1  0]
      </div>
      <p>
        One can verify that products of L ≥ 3 matrices span ℂ^{2×2}. For instance:
      </p>
      <div class="equation">
        A^{-1}A^{+1} = [1  0]   (not diagonal!)
                       [0  0]
      </div>
      <p>
        Combined with A^0, A^{+1}A^{-1}, etc., we span all 2×2 matrices. Thus AKLT is injective.
      </p>
    </div>

    <h2>Physical Significance</h2>

    <div class="info-box">
      <h3>Why Injectivity Matters</h3>
      <p>
        Injective MPS are the "physical" ones for several reasons:
      </p>
      <ul>
        <li><strong>Unique ground state:</strong> Injective MPS are the unique ground states of gapped local Hamiltonians (with OBC)</li>
        <li><strong>Finite correlation length:</strong> Automatically guaranteed for injective MPS</li>
        <li><strong>Area law:</strong> Injective MPS saturate entanglement quickly (within correlation length)</li>
        <li><strong>No hidden long-range order:</strong> Unlike GHZ or other non-injective examples</li>
        <li><strong>Classification:</strong> Injective MPS with symmetry classify symmetry-protected topological (SPT) phases</li>
      </ul>
    </div>

    <h3>Connection to Correlation Length</h3>

    <div class="highlight-box">
      <h4>Theorem: Injectivity Implies Unique Dominant Eigenvalue</h4>
      <p>
        If an MPS is injective, then its transfer matrix E has:
      </p>
      <ul>
        <li>A unique dominant eigenvalue λ₁ (with algebraic and geometric multiplicity 1)</li>
        <li>A spectral gap: |λ₁| > |λ₂| (all other eigenvalues are strictly smaller in magnitude)</li>
      </ul>
      <p>
        <strong>Consequence:</strong> Finite correlation length ξ = -1/log|λ₂/λ₁| is well-defined.
      </p>
      <p>
        <strong>Converse:</strong> Non-injective MPS can have degenerate dominant eigenvalues, leading to ill-defined or infinite correlation lengths.
      </p>
    </div>

    <h2>Detecting Injectivity</h2>

    <h3>Method 1: Transfer Matrix Spectrum</h3>

    <div class="info-box">
      <h3>Numerical Test</h3>
      <p>
        <strong>Algorithm:</strong>
      </p>
      <ol>
        <li>Construct transfer matrix E = ∑_i A^i ⊗ (A^i)*</li>
        <li>Compute eigenvalues {λ_k} sorted by magnitude</li>
        <li>Check if λ₁ is unique and |λ₁| > |λ₂|</li>
      </ol>
      <p>
        <strong>Criterion:</strong>
      </p>
      <ul>
        <li>Injective: Single dominant eigenvalue with gap</li>
        <li>Non-injective: Multiple eigenvalues with |λ| = |λ₁| (degeneracy)</li>
      </ul>
      <p>
        <strong>Caveat:</strong> Numerical precision issues may obscure small gaps.
      </p>
    </div>

    <h3>Method 2: Span of Matrix Products</h3>

    <div class="highlight-box">
      <h4>Direct Verification</h4>
      <p>
        <strong>Algorithm:</strong>
      </p>
      <ol>
        <li>Generate all matrix products up to length L (typically L ~ χ²/d)</li>
        <li>Compute the span (linear subspace) of these matrices</li>
        <li>Check if dimension equals χ²</li>
      </ol>
      <p>
        <strong>Complexity:</strong> O(d^L · χ²) — exponential in L, only feasible for small χ.
      </p>
    </div>

    <h2>Parent Hamiltonian and Injectivity</h2>

    <p>
      The concept of injectivity is intimately connected to parent Hamiltonians (discussed in detail in Section 8.2.10).
    </p>

    <div class="info-box">
      <h3>Theorem: Unique Parent Hamiltonian</h3>
      <p>
        If an MPS |ψ⟩ is injective, then:
      </p>
      <ul>
        <li>There exists a unique (up to overall constant) local Hamiltonian H = ∑_j h_{j,j+1} such that |ψ⟩ is the unique ground state with energy E₀ = 0</li>
        <li>The Hamiltonian has a gap: E₁ - E₀ > 0 (first excited state has strictly positive energy)</li>
        <li>The correlation length of |ψ⟩ is related to this gap</li>
      </ul>
      <p>
        <strong>Construction:</strong> The parent Hamiltonian is built from projectors onto the "forbidden" subspace (states orthogonal to MPS locally).
      </p>
    </div>

    <h2>Injectivity and Symmetry-Protected Topology</h2>

    <div class="highlight-box">
      <h4>SPT Phases and Injective MPS</h4>
      <p>
        Symmetry-protected topological (SPT) phases in 1D are classified by injective MPS with symmetry:
      </p>
      <ul>
        <li><strong>Definition:</strong> An MPS has symmetry G if there exist unitary representations u_g on virtual space such that:
          <div class="equation">
            u_g^{-1} A^i u_g = ∑_j V^g_{ij} A^j
          </div>
          where V^g is a representation of G on physical space
        </li>
        <li><strong>Classification theorem:</strong> Injective MPS with symmetry G on-site classify 1D bosonic SPT phases protected by G</li>
        <li><strong>Examples:</strong>
          <ul>
            <li>Haldane phase (spin-1 chain with SO(3) symmetry)</li>
            <li>ℤ₂ × ℤ₂ SPT phases</li>
            <li>Time-reversal protected phases</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>Beyond Injectivity: G-Injectivity</h2>

    <div class="info-box">
      <h3>Generalized Notion</h3>
      <p>
        For systems with symmetry, we can generalize to <strong>G-injectivity</strong>:
      </p>
      <p>
        An MPS is G-injective if products of matrices span the full algebra after restricting to the symmetric sector (commutant of the symmetry representation).
      </p>
      <p>
        This weaker notion still guarantees:
      </p>
      <ul>
        <li>Unique ground state within symmetric subspace</li>
        <li>Finite correlation length</li>
        <li>Unique parent Hamiltonian respecting symmetry</li>
      </ul>
    </div>

    <h2>Restoring Injectivity: Blocking</h2>

    <div class="highlight-box">
      <h4>From Non-Injective to Injective</h4>
      <p>
        Non-injective MPS can sometimes be made injective by <strong>blocking</strong>: grouping multiple sites together.
      </p>
      <p>
        <strong>Procedure:</strong>
      </p>
      <ol>
        <li>Group k consecutive sites into "super-sites"</li>
        <li>Define new tensors Ã^{i₁...i_k} = A^{i₁}···A^{i_k}</li>
        <li>The blocked MPS may be injective even if original wasn't</li>
      </ol>
      <p>
        <strong>Example:</strong> GHZ state (non-injective with k=1) becomes injective after k=2 blocking:
      </p>
      <div class="equation">
        Ã^{00} = A^0A^0 = [1  0]   Ã^{01} = A^0A^1 = [0  0]
                          [0  0]                     [0  0]

        Ã^{10} = A^1A^0 = [0  0]   Ã^{11} = A^1A^1 = [0  0]
                          [0  0]                     [0  1]
      </div>
      <p>
        Now these span ℂ^{2×2}!
      </p>
    </div>

    <h2>Computational Complexity</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Method</th>
            <th>Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test injectivity</td>
            <td>Transfer matrix eigenvalues</td>
            <td>O(χ⁶d)</td>
          </tr>
          <tr>
            <td>Test injectivity</td>
            <td>Span of products (exact)</td>
            <td>O(d^L χ⁴)</td>
          </tr>
          <tr>
            <td>Blocking (k sites)</td>
            <td>Tensor contraction</td>
            <td>O(d^k χ³)</td>
          </tr>
          <tr>
            <td>Construct parent H</td>
            <td>Nullspace projection</td>
            <td>O(d²χ³)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>Definition:</strong> MPS is injective if products span full matrix space ℂ^{χ×χ}</li>
        <li><strong>Transfer matrix criterion:</strong> Unique dominant eigenvalue with gap</li>
        <li><strong>Physical meaning:</strong> "Well-behaved" ground states of gapped local Hamiltonians</li>
        <li><strong>Examples:</strong>
          <ul>
            <li>Injective: AKLT, generic MPS</li>
            <li>Non-injective: GHZ, product states (χ=1)</li>
          </ul>
        </li>
        <li><strong>Consequences:</strong>
          <ul>
            <li>Finite correlation length</li>
            <li>Unique parent Hamiltonian</li>
            <li>Area law saturation</li>
          </ul>
        </li>
        <li><strong>SPT classification:</strong> Injective MPS with symmetry classify 1D SPT phases</li>
        <li><strong>Blocking:</strong> Can restore injectivity by grouping sites</li>
        <li><strong>Detection:</strong> Via transfer matrix spectrum or span computation</li>
      </ul>
    </div>

    <p>
      Injectivity is a mathematical refinement that distinguishes physically relevant MPS (ground states of local gapped Hamiltonians) from exotic states with long-range structure. It provides the foundation for rigorous theorems about parent Hamiltonians, SPT classification, and the relationship between local and global properties. In the next section, we'll explore how to construct the parent Hamiltonian for a given MPS, which exists uniquely precisely when the MPS is injective.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_2_9'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
