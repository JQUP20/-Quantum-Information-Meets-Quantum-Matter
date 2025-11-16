<template>
  <div class="section-content">
    <h1>8.2.8 Canonical Form</h1>

    <p>
      While we introduced gauge freedom and canonical gauges in Section 8.2.6, here we develop the mathematical theory of canonical forms in greater depth. Canonical forms provide unique representations of MPS (up to trivial symmetries) and are essential for theoretical analysis and numerical algorithms.
    </p>

    <h2>Motivation: Why Canonical Forms?</h2>

    <div class="info-box">
      <h3>The Uniqueness Problem</h3>
      <p>
        Given an MPS, we face several fundamental questions:
      </p>
      <ul>
        <li>Do two different sets of tensors {A^i} and {B^i} represent the same state?</li>
        <li>What is the minimal bond dimension needed to represent a given state?</li>
        <li>How can we extract the entanglement structure directly from the MPS?</li>
      </ul>
      <p>
        <strong>Canonical forms</strong> provide answers by transforming any MPS into a standard form where these questions become trivial to answer.
      </p>
    </div>

    <h2>Review: Basic Canonical Forms</h2>

    <p>
      We briefly recall the definitions from Section 8.2.6, now with more mathematical precision.
    </p>

    <h3>Left-Canonical Tensors</h3>

    <div class="highlight-box">
      <h4>Definition and Properties</h4>
      <p>
        A tensor A^i ∈ ℂ^{χ×χ} (for each physical index i ∈ {1,...,d}) is <strong>left-canonical</strong> if:
      </p>
      <div class="equation">
        ∑_{i=1}^d (A^i)^† A^i = I_χ
      </div>
      <p>
        where I_χ is the χ × χ identity matrix. This is equivalent to saying the map:
      </p>
      <div class="equation">
        L: ℂ^χ → ℂ^{d·χ},   v ↦ [A^1 v; A^2 v; ...; A^d v]
      </div>
      <p>
        is an isometry: L^† L = I.
      </p>
      <p>
        <strong>Consequence:</strong> The transfer matrix E_L = ∑_i A^i ⊗ (A^i)* has a fixed point:
      </p>
      <div class="equation">
        E_L · I = I   (I is both left and right fixed point)
      </div>
    </div>

    <h3>Right-Canonical Tensors</h3>

    <div class="highlight-box">
      <h4>Definition and Properties</h4>
      <p>
        A tensor B^i ∈ ℂ^{χ×χ} is <strong>right-canonical</strong> if:
      </p>
      <div class="equation">
        ∑_{i=1}^d B^i (B^i)^† = I_χ
      </div>
      <p>
        The map:
      </p>
      <div class="equation">
        R: ℂ^χ → ℂ^{χ·d},   v ↦ [v^T B^1, v^T B^2, ..., v^T B^d]^T
      </div>
      <p>
        is an isometry: R R^† = I.
      </p>
      <p>
        <strong>Consequence:</strong> E_R · I = I as well.
      </p>
    </div>

    <h2>Mixed-Canonical Form (Vidal Form)</h2>

    <p>
      The most important canonical form for both theory and numerics is the mixed-canonical (or Vidal) form.
    </p>

    <div class="info-box">
      <h3>Γ-Λ Notation (Vidal's Canonical Form)</h3>
      <p>
        An MPS in Vidal canonical form is written as:
      </p>
      <div class="equation">
        |ψ⟩ = ∑_{i₁...i_N} Tr[Γ^{i₁}Λ₁ Γ^{i₂}Λ₂ ··· Γ^{i_N}Λ_N] |i₁...i_N⟩
      </div>
      <p>
        where:
      </p>
      <ul>
        <li><strong>Γ^i_j:</strong> Site tensors (not diagonal)</li>
        <li><strong>Λ_j:</strong> Diagonal matrices with non-negative entries λ_α^{(j)} ≥ 0</li>
        <li><strong>Normalization:</strong> Tr[Λ_j²] = ∑_α (λ_α^{(j)})² = 1</li>
        <li><strong>Ordering:</strong> λ₁^{(j)} ≥ λ₂^{(j)} ≥ ··· ≥ λ_χ^{(j)} ≥ 0</li>
      </ul>
      <p>
        <strong>Key property:</strong> The matrices Λ_j contain the Schmidt coefficients for the bipartition at bond j!
      </p>
    </div>

    <h3>Uniqueness of Vidal Form</h3>

    <div class="highlight-box">
      <h4>Theorem: Canonical Form Uniqueness</h4>
      <p>
        For a given MPS state |ψ⟩ with minimal bond dimension χ, the Vidal canonical form is unique up to:
      </p>
      <ul>
        <li><strong>Trivial gauge transformations:</strong> U_α acting on degenerate Schmidt subspaces</li>
        <li><strong>Phase factors:</strong> For zero Schmidt coefficients (λ_α = 0)</li>
      </ul>
      <p>
        More precisely: if {Γ^i, Λ} and {Γ̃^i, Λ̃} both represent |ψ⟩ in Vidal form with minimal χ, then:
      </p>
      <ul>
        <li>Λ = Λ̃ (Schmidt coefficients are unique)</li>
        <li>Γ̃^i = U Γ^i V where U, V are unitary matrices that commute with Λ</li>
      </ul>
    </div>

    <h2>Schmidt Decomposition and Canonical Form</h2>

    <p>
      The connection between canonical forms and Schmidt decomposition is fundamental.
    </p>

    <div class="info-box">
      <h3>Extracting Schmidt Decomposition</h3>
      <p>
        Consider a bipartition of the chain into left (sites 1 to k) and right (sites k+1 to N). In mixed-canonical form centered at bond k:
      </p>
      <div class="equation">
        |ψ⟩ = ∑_α λ_α^{(k)} |ψ_L^α⟩ ⊗ |ψ_R^α⟩
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>λ_α^{(k)} are the diagonal entries of Λ_k (Schmidt coefficients)</li>
        <li>|ψ_L^α⟩ = ∑_{i₁...i_k} [Γ^{i₁}_1 Λ_1 ··· Γ^{i_k}_k]_{:,α} |i₁...i_k⟩</li>
        <li>|ψ_R^α⟩ = ∑_{i_{k+1}...i_N} [Γ^{i_{k+1}}_{k+1} ··· Λ_N Γ^{i_N}_N]_{α,:} |i_{k+1}...i_N⟩</li>
      </ul>
      <p>
        <strong>Entanglement entropy:</strong>
      </p>
      <div class="equation">
        S_k = -∑_α (λ_α^{(k)})² log(λ_α^{(k)})²
      </div>
    </div>

    <h2>Algorithms for Canonical Decomposition</h2>

    <h3>Method 1: Successive QR Decompositions</h3>

    <div class="highlight-box">
      <h4>Left-to-Right Sweep</h4>
      <p>
        To bring an MPS into left-canonical form:
      </p>
      <ol>
        <li><strong>Start at site 1:</strong> Reshape A^i_1 into matrix M₁ of size dχ₀ × χ₁</li>
        <li><strong>QR decomposition:</strong> M₁ = Q₁R₁ where Q₁^†Q₁ = I</li>
        <li><strong>Update:</strong> Set Γ^i_1 = Q₁ (reshaped), absorb R₁ into site 2:
          <div class="equation">
            M₂ ← R₁ · M₂
          </div>
        </li>
        <li><strong>Repeat:</strong> For sites 2, 3, ..., N</li>
      </ol>
      <p>
        <strong>Result:</strong> All sites 1 to N are in left-canonical form.
      </p>
      <p>
        <strong>Complexity:</strong> O(Nd²χ³) for full sweep.
      </p>
    </div>

    <h3>Method 2: SVD for Mixed-Canonical Form</h3>

    <div class="highlight-box">
      <h4>Creating Vidal Form</h4>
      <p>
        To obtain Γ-Λ form centered at bond k:
      </p>
      <ol>
        <li><strong>Left sweep:</strong> Sites 1 to k-1 → left-canonical (using QR)</li>
        <li><strong>Right sweep:</strong> Sites N to k+1 → right-canonical (using QR)</li>
        <li><strong>SVD at site k:</strong> The combined tensor at bond k has form:
          <div class="equation">
            M = ∑_i A^i_{left} ⊗ A^i_{right}
          </div>
          Perform SVD: M = UΛV^†
        </li>
        <li><strong>Set:</strong>
          <ul>
            <li>Γ^i_k = U</li>
            <li>Λ_k = Λ (diagonal Schmidt values)</li>
            <li>Γ^i_{k+1} = V^†</li>
          </ul>
        </li>
      </ol>
    </div>

    <h2>Canonical Form in DMRG</h2>

    <div class="info-box">
      <h3>Why DMRG Uses Canonical Forms</h3>
      <p>
        The Density Matrix Renormalization Group (DMRG) algorithm relies crucially on canonical forms:
      </p>
      <ol>
        <li><strong>Initialization:</strong> Start with mixed-canonical form centered at site 1</li>
        <li><strong>Sweep right:</strong> At each site k:
          <ul>
            <li>Optimize Γ^i_k to minimize ⟨H⟩ (via Lanczos/Davidson)</li>
            <li>SVD to extract Λ_k and move center to k+1</li>
          </ul>
        </li>
        <li><strong>Sweep left:</strong> Return from site N to site 1, optimizing each site</li>
        <li><strong>Repeat:</strong> Until convergence</li>
      </ol>
      <p>
        <strong>Advantages:</strong>
      </p>
      <ul>
        <li>Optimization is local eigenvalue problem (convex)</li>
        <li>No need to compute full norm at each step</li>
        <li>Entanglement entropy continuously monitored via Λ matrices</li>
        <li>Numerical stability maintained (no exponential growth/decay)</li>
      </ul>
    </div>

    <h2>Relationship to Fixed Points</h2>

    <div class="highlight-box">
      <h4>Canonical Form from Transfer Matrix</h4>
      <p>
        For an infinite translationally invariant MPS, canonical form is related to fixed points of the transfer matrix:
      </p>
      <div class="equation">
        E = ∑_i A^i ⊗ (A^i)*
      </div>
      <p>
        Let λ₁ be the dominant eigenvalue and |r⟩⟨l| the corresponding fixed point. Then canonical form requires:
      </p>
      <ul>
        <li><strong>Normalization:</strong> λ₁ = 1</li>
        <li><strong>Fixed point:</strong> r = l = I (identity)</li>
      </ul>
      <p>
        This is achieved by gauge transformation:
      </p>
      <div class="equation">
        Ã^i = r^{-1/2} A^i l^{1/2} / √λ₁
      </div>
    </div>

    <h2>Truncation and Bond Dimension Reduction</h2>

    <div class="info-box">
      <h3>Optimal Truncation via Canonical Form</h3>
      <p>
        To reduce bond dimension from χ to χ' < χ while minimizing error:
      </p>
      <ol>
        <li><strong>Bring to Vidal form:</strong> Extract Schmidt values {λ_α}</li>
        <li><strong>Sort and truncate:</strong> Keep χ' largest Schmidt values</li>
        <li><strong>Renormalize:</strong> λ̃_α = λ_α / √(∑_{β=1}^{χ'} λ_β²)</li>
        <li><strong>Discard:</strong> Set Γ^i matrices to zero for α > χ'</li>
      </ol>
      <p>
        <strong>Error bound:</strong> The truncation error is:
      </p>
      <div class="equation">
        ||ψ - ψ'||² = ∑_{α=χ'+1}^χ (λ_α)²
      </div>
      <p>
        This is the <em>optimal</em> truncation—no other choice of χ' states gives lower error!
      </p>
    </div>

    <h2>Canonical Form for Periodic Boundary Conditions</h2>

    <div class="highlight-box">
      <h4>Special Considerations</h4>
      <p>
        For periodic boundary conditions, the situation is more subtle:
      </p>
      <ul>
        <li>Cannot have global left or right-canonical form</li>
        <li>Can still have local mixed-canonical form around each bond</li>
        <li>Schmidt values may vary from bond to bond in non-translationally invariant states</li>
      </ul>
      <p>
        <strong>Translational invariance:</strong> If the state is truly translationally invariant, all Λ_k are equal, and we can work with a single tensor A^i per unit cell.
      </p>
    </div>

    <h2>Examples</h2>

    <h3>Example 1: Product State in Canonical Form</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Form</th>
            <th>Tensors</th>
            <th>Schmidt Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Original</td>
            <td>A^0 = [α], A^1 = [β]</td>
            <td>λ = [1]</td>
          </tr>
          <tr>
            <td>Left-canonical</td>
            <td>Same (already canonical)</td>
            <td>λ = [1]</td>
          </tr>
          <tr>
            <td>Vidal form</td>
            <td>Γ^0 = [α], Γ^1 = [β], Λ = [1]</td>
            <td>λ = [1]</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Example 2: AKLT State in Canonical Form</h3>

    <div class="highlight-box">
      <p>
        The AKLT state tensors are already in a canonical-like form. After proper normalization:
      </p>
      <div class="equation">
        Λ = diag(1/√2, 1/√2)
      </div>
      <p>
        Both Schmidt values are equal, reflecting maximal entanglement (S = log 2) at every bond.
      </p>
    </div>

    <h2>Computational Complexity Summary</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Algorithm</th>
            <th>Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full canonical form</td>
            <td>Sweep + SVD</td>
            <td>O(Nd²χ³)</td>
          </tr>
          <tr>
            <td>Single-site canonical</td>
            <td>QR or SVD</td>
            <td>O(d²χ³)</td>
          </tr>
          <tr>
            <td>Extract entanglement</td>
            <td>Read Λ diagonal</td>
            <td>O(χ)</td>
          </tr>
          <tr>
            <td>Optimal truncation</td>
            <td>SVD + sort</td>
            <td>O(d²χ³ + χ log χ)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>Canonical forms:</strong> Standard gauge choices that expose structure</li>
        <li><strong>Left-canonical:</strong> ∑_i (A^i)^†A^i = I, useful for left-to-right contractions</li>
        <li><strong>Right-canonical:</strong> ∑_i A^i(A^i)^† = I, useful for right-to-left contractions</li>
        <li><strong>Vidal form:</strong> Γ-Λ notation with diagonal Λ containing Schmidt coefficients</li>
        <li><strong>Uniqueness:</strong> Canonical form is unique (up to degeneracy symmetries)</li>
        <li><strong>Schmidt connection:</strong> Λ matrices directly give entanglement structure</li>
        <li><strong>Algorithms:</strong> QR for one-sided, SVD for mixed-canonical</li>
        <li><strong>DMRG application:</strong> Essential for variational optimization</li>
        <li><strong>Truncation:</strong> Optimal bond reduction via Schmidt value cutoff</li>
        <li><strong>Complexity:</strong> O(Nd²χ³) to bring full chain into canonical form</li>
      </ul>
    </div>

    <p>
      Canonical forms transform MPS from a general representation into a standardized form where the mathematical structure becomes transparent. They enable efficient algorithms, provide direct access to entanglement measures, and are indispensable for modern tensor network methods. The next section explores the concept of injectivity, which characterizes when an MPS can be brought into a unique canonical form.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_2_8'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
