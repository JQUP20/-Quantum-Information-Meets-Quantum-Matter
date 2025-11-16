<template>
  <div class="section-content">
    <h1>8.2.2 Double Tensor</h1>

    <p>
      The double tensor (also called the transfer matrix) is a fundamental construction in MPS theory that arises naturally when computing inner products, expectation values, and correlation functions. Understanding the double tensor is essential for analyzing the properties of MPS representations.
    </p>

    <h2>Definition and Construction</h2>

    <div class="info-box">
      <h3>The Double Tensor (Transfer Matrix)</h3>
      <p>
        Given an MPS with tensors A^i (where i labels the physical index), the double tensor E is constructed by contracting a tensor with its complex conjugate over the physical index:
      </p>
      <div class="equation">
        E_{αβ,α'β'} = ∑_{i=1}^d A^i_{αβ} (A^i_{α'β'})*
      </div>
      <p>
        In more compact notation using matrix direct product:
      </p>
      <div class="equation">
        E = ∑_{i=1}^d A^i ⊗ (A^i)*
      </div>
      <p>
        where ⊗ denotes the Kronecker product. If the bond dimension is χ, then E is a χ² × χ² matrix.
      </p>
    </div>

    <h3>Graphical Representation</h3>

    <div class="highlight-box">
      <h4>Tensor Network Diagram</h4>
      <p>
        The double tensor can be visualized as stacking the MPS tensor on top of its complex conjugate and contracting the physical indices:
      </p>
      <div class="equation">
        E:    α----[A^i]----β
                    |
                    | (sum over i)
                    |
              α'---[A^i*]---β'
      </div>
      <p>
        This creates a "double-layer" structure with four virtual indices (α, β, α', β'), which is why it's called the double tensor.
      </p>
      <p>
        When we view E as a χ² × χ² matrix, we group indices: (α,α') as the row index and (β,β') as the column index.
      </p>
    </div>

    <h3>Role in Computing Inner Products</h3>

    <p>
      To see why the double tensor is important, consider computing the inner product of two MPS states. For the norm squared of a state |ψ⟩:
    </p>

    <div class="equation">
      ⟨ψ|ψ⟩ = ∑_{i₁...i_N} ∑_{j₁...j_N} [A^{i₁}···A^{i_N}]* [A^{j₁}···A^{j_N}] δ_{i₁j₁}···δ_{i_Nj_N}
    </div>

    <p>
      Using the Kronecker delta to equate indices, this becomes:
    </p>

    <div class="equation">
      ⟨ψ|ψ⟩ = Tr[E^N] = Tr[E × E × ··· × E]  (N times)
    </div>

    <p>
      where the multiplication is ordinary matrix multiplication of χ² × χ² matrices.
    </p>

    <div class="info-box">
      <h3>Transfer Matrix Interpretation</h3>
      <p>
        The name "transfer matrix" comes from statistical mechanics. Computing ⟨ψ|ψ⟩ = Tr[E^N] is analogous to:
      </p>
      <ul>
        <li>E acts as a transfer matrix that propagates along the chain</li>
        <li>Each application of E corresponds to moving one site to the right</li>
        <li>The trace implements periodic boundary conditions</li>
        <li>For large N, the norm is dominated by the largest eigenvalue of E</li>
      </ul>
    </div>

    <h2>Eigenvalue Structure</h2>

    <p>
      The eigenvalue structure of the transfer matrix E controls many physical properties of the MPS.
    </p>

    <h3>Dominant Eigenvalue</h3>

    <div class="highlight-box">
      <h4>Perron-Frobenius Theorem</h4>
      <p>
        Since E = ∑ᵢ A^i ⊗ (A^i)* has all non-negative entries (as a χ² × χ² matrix in the appropriate basis), the Perron-Frobenius theorem applies:
      </p>
      <ul>
        <li><strong>Largest eigenvalue λ₁:</strong> Real, positive, and non-degenerate</li>
        <li><strong>Corresponding eigenvector:</strong> Can be chosen with all positive entries</li>
        <li><strong>All other eigenvalues:</strong> |λᵢ| ≤ λ₁ for i > 1</li>
      </ul>
      <p>
        For a normalized state, we must have λ₁ = 1. This is because:
      </p>
      <div class="equation">
        ⟨ψ|ψ⟩ = Tr[E^N] → λ₁^N  as N → ∞
      </div>
      <p>
        For the norm to remain bounded, we need λ₁ = 1.
      </p>
    </div>

    <h3>Spectral Gap and Correlation Length</h3>

    <div class="info-box">
      <h3>Correlation Length from Spectrum</h3>
      <p>
        The gap between the largest and second-largest eigenvalue magnitudes determines the correlation length:
      </p>
      <div class="equation">
        ξ = -1 / log|λ₂/λ₁| = -1 / log|λ₂|  (if λ₁ = 1)
      </div>
      <p>
        where λ₂ is the eigenvalue with the second-largest magnitude. This relation comes from the exponential decay of correlations:
      </p>
      <div class="equation">
        ⟨O_j O_{j+r}⟩ - ⟨O_j⟩⟨O_{j+r}⟩ ~ (λ₂/λ₁)^r ~ e^{-r/ξ}
      </div>
    </div>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Eigenvalue Structure</th>
            <th>Physical Meaning</th>
            <th>Correlation Length</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>λ₁ = 1, λ₂ = 0</td>
            <td>Product state</td>
            <td>ξ = 0</td>
            <td>|00...0⟩</td>
          </tr>
          <tr>
            <td>λ₁ = 1, |λ₂| < 1</td>
            <td>Gapped phase</td>
            <td>ξ = finite</td>
            <td>AKLT state</td>
          </tr>
          <tr>
            <td>λ₁ = λ₂ = 1</td>
            <td>Critical point</td>
            <td>ξ = ∞</td>
            <td>CFT ground states</td>
          </tr>
          <tr>
            <td>λ₁ > 1</td>
            <td>Unnormalized state</td>
            <td>N/A</td>
            <td>Intermediate steps</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Fixed Points</h2>

    <p>
      The eigenvectors of E with eigenvalue 1 (or λ₁ if unnormalized) are called fixed points and play a special role.
    </p>

    <div class="info-box">
      <h3>Right and Left Fixed Points</h3>
      <p>
        We distinguish between:
      </p>
      <ul>
        <li><strong>Right fixed point r:</strong> E · r = λ₁ · r (eigenvector)</li>
        <li><strong>Left fixed point l:</strong> l^T · E = λ₁ · l^T (left eigenvector)</li>
      </ul>
      <p>
        These can be reshaped as χ × χ matrices and normalized such that Tr[l^† r] = 1. They represent the "effective boundary conditions" in the thermodynamic limit.
      </p>
    </div>

    <h3>Physical Interpretation</h3>

    <div class="highlight-box">
      <h4>Reduced Density Matrices</h4>
      <p>
        The fixed points are intimately related to reduced density matrices:
      </p>
      <ul>
        <li><strong>Right fixed point r:</strong> Approaches ρ_L, the reduced density matrix of all sites to the left</li>
        <li><strong>Left fixed point l:</strong> Approaches ρ_R, the reduced density matrix of all sites to the right</li>
      </ul>
      <p>
        For a translationally invariant infinite MPS:
      </p>
      <div class="equation">
        ρ_L = ρ_R = r = l  (up to normalization)
      </div>
      <p>
        This reflects the fact that in a bulk system, the reduced density matrix on one side doesn't depend on which cut we make.
      </p>
    </div>

    <h2>Examples</h2>

    <h3>Example 1: Product State</h3>

    <div class="highlight-box">
      <p>
        For a product state |ψ⟩ = |φ⟩^⊗N with |φ⟩ = α|0⟩ + β|1⟩, we have:
      </p>
      <div class="equation">
        A^0 = [α],  A^1 = [β]  (1×1 matrices)
      </div>
      <p>
        The double tensor is:
      </p>
      <div class="equation">
        E = A^0 ⊗ (A^0)* + A^1 ⊗ (A^1)* = |α|² + |β|² = 1
      </div>
      <p>
        This is just a 1×1 matrix with value 1. All eigenvalues except λ₁ = 1 are zero, reflecting zero correlation length.
      </p>
    </div>

    <h3>Example 2: AKLT State</h3>

    <div class="highlight-box">
      <p>
        For the AKLT state with χ = 2 and:
      </p>
      <div class="equation">
        A^{-1} = [0  1]    A^0 = 1/√2 [1   0]    A^{+1} = [0  0]
                 [0  0]                [0  -1]             [1  0]
      </div>
      <p>
        The transfer matrix E is a 4×4 matrix. Its eigenvalues are:
      </p>
      <div class="equation">
        λ₁ = 1,  λ₂ = λ₃ = 0,  λ₄ = -1/2
      </div>
      <p>
        The correlation length is:
      </p>
      <div class="equation">
        ξ = -1/log|λ₂| = -1/log(1/2) = 1/log 2 ≈ 1.44 lattice spacings
      </div>
      <p>
        This shows the AKLT state has a very short correlation length, consistent with it being a gapped state.
      </p>
    </div>

    <h3>Example 3: GHZ State</h3>

    <div class="highlight-box">
      <p>
        For the GHZ state with A^0 = σ_z and A^1 = σ_x (up to normalization), the transfer matrix has a more complex structure. The key feature is that:
      </p>
      <ul>
        <li>The state is highly entangled globally (maximal for N qubits)</li>
        <li>But correlation functions decay (two-point functions factorize)</li>
        <li>The transfer matrix eigenvalue gap is large</li>
      </ul>
      <p>
        This illustrates that short correlation length doesn't mean low entanglement—it means entanglement is not built up locally.
      </p>
    </div>

    <h2>Computational Aspects</h2>

    <div class="info-box">
      <h3>Efficient Eigenvalue Calculation</h3>
      <p>
        For MPS with moderate bond dimension (χ ~ 100-1000):
      </p>
      <ul>
        <li><strong>E is χ² × χ²:</strong> Can become large (10⁴ × 10⁴ to 10⁶ × 10⁶)</li>
        <li><strong>Sparse structure:</strong> E typically has special structure that can be exploited</li>
        <li><strong>Iterative methods:</strong> Only need a few largest eigenvalues (use Arnoldi/Lanczos)</li>
        <li><strong>Complexity:</strong> O(χ³d) per matrix-vector multiplication</li>
      </ul>
    </div>

    <h3>Hermiticity and Positivity</h3>

    <p>
      While E = ∑ᵢ A^i ⊗ (A^i)* is generally not Hermitian, it has useful properties:
    </p>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Condition</th>
            <th>Consequence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Positive semidefinite</td>
            <td>Always (as defined)</td>
            <td>All eigenvalues real and ≥ 0</td>
          </tr>
          <tr>
            <td>Hermitian</td>
            <td>If A^i = (A^i)^T</td>
            <td>Real eigenvalues, orthogonal eigenvectors</td>
          </tr>
          <tr>
            <td>Doubly stochastic</td>
            <td>If A^i form a probability</td>
            <td>λ₁ = 1 guaranteed</td>
          </tr>
          <tr>
            <td>Unitary similarity</td>
            <td>Special gauges</td>
            <td>Simplified calculations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Connection to Quantum Channels</h2>

    <div class="info-box">
      <h3>Transfer Matrix as Quantum Channel</h3>
      <p>
        The transfer matrix E can be viewed as a completely positive trace-preserving (CPTP) map:
      </p>
      <div class="equation">
        E(ρ) = ∑_i A^i ρ (A^i)^†
      </div>
      <p>
        This is exactly the form of a quantum channel (Kraus representation) where:
      </p>
      <ul>
        <li>The input ρ is a χ × χ density matrix</li>
        <li>The Kraus operators are the MPS matrices A^i</li>
        <li>The output is another χ × χ density matrix</li>
      </ul>
      <p>
        This perspective connects MPS theory to quantum information theory of open systems and provides tools from quantum channel theory for analyzing MPS.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>Double tensor:</strong> E = ∑ᵢ A^i ⊗ (A^i)* is fundamental for MPS calculations</li>
        <li><strong>Transfer matrix:</strong> ⟨ψ|ψ⟩ = Tr[E^N] for periodic boundary conditions</li>
        <li><strong>Eigenvalue structure:</strong> Controls correlation length ξ = -1/log|λ₂/λ₁|</li>
        <li><strong>Fixed points:</strong> Dominant eigenvectors relate to reduced density matrices</li>
        <li><strong>Perron-Frobenius:</strong> Guarantees real, positive, non-degenerate dominant eigenvalue</li>
        <li><strong>Quantum channel:</strong> E acts as CPTP map, connecting to quantum information theory</li>
        <li><strong>Computational tool:</strong> Essential for computing norms, observables, and correlations</li>
      </ul>
    </div>

    <p>
      In the next section, we'll use the double tensor formalism to develop efficient algorithms for computing norms and expectation values of observables in MPS.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_2_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
