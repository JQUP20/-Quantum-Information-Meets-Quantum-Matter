<template>
  <div class="section-content">
    <h1>9.3.3 Symmetry Breaking and Block Structure of Tensors</h1>

    <p>
      When a quantum system possesses symmetry, the PEPS tensors can be chosen to respect this symmetry, leading to a block-diagonal structure. This structure not only reduces computational cost but also reveals deep connections between symmetry and entanglement.
    </p>

    <h2>Symmetric PEPS</h2>

    <div class="info-box">
      <h3>Definition of Symmetric Tensor</h3>
      <p>
        A PEPS has on-site symmetry G if for each group element g ∈ G:
      </p>
      <div class="equation">
        ∑_j V^g_{ij} A^j = ∑_{indices} u_g A^i u_g^{-1}
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>V^g: Physical representation of g (acts on physical index)</li>
        <li>u_g: Virtual representation of g (acts on each virtual index)</li>
      </ul>
      <p>
        <strong>Consequence:</strong> Tensors block-decompose according to irreducible representations (irreps) of G.
      </p>
    </div>

    <h2>Block-Diagonal Structure</h2>

    <div class="highlight-box">
      <h4>Decomposition by Quantum Numbers</h4>
      <p>
        Virtual indices can be labeled by quantum numbers (irrep labels):
      </p>
      <div class="equation">
        α → (α_irrep, α_multiplicity)
      </div>
      <p>
        Tensor elements vanish unless quantum numbers are compatible:
      </p>
      <div class="equation">
        A^i_{αβγδ} = 0  unless  α_irrep ⊕ β_irrep ⊕ γ_irrep ⊕ δ_irrep = i_irrep
      </div>
      <p>
        (fusion rules of the symmetry group)
      </p>
    </div>

    <h3>Example: ℤ₂ Ising Model</h3>

    <div class="info-box">
      <h3>Explicit Block Structure</h3>
      <p>
        For ℤ₂ symmetry (even/odd parity):
      </p>
      <ul>
        <li>Physical index: i ∈ {0 (even), 1 (odd)}</li>
        <li>Virtual index: α ∈ {0 (even), 1 (odd)}</li>
      </ul>
      <p>
        Tensor A^i_{αβγδ} nonzero only if:
      </p>
      <div class="equation">
        α + β + γ + δ = i  (mod 2)
      </div>
      <p>
        This reduces the number of independent tensor elements by factor ~2⁴ = 16.
      </p>
    </div>

    <h2>Computational Advantages</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Generic PEPS</th>
            <th>Symmetric PEPS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Independent parameters</td>
            <td>dχ⁴</td>
            <td>~dχ⁴/|G|</td>
          </tr>
          <tr>
            <td>Contraction complexity</td>
            <td>O(χ^{10})</td>
            <td>O((χ/|G|)^{10})</td>
          </tr>
          <tr>
            <td>Memory</td>
            <td>dχ⁴</td>
            <td>~dχ⁴/|G|</td>
          </tr>
          <tr>
            <td>Numerical stability</td>
            <td>Standard</td>
            <td>Improved (block sparsity)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Symmetry Breaking from PEPS Perspective</h2>

    <div class="info-box">
      <h3>Mechanism of Spontaneous Symmetry Breaking</h3>
      <p>
        <strong>Symmetric phase (T > T_c or Γ > Γ_c):</strong>
      </p>
      <ul>
        <li>Virtual bonds balanced equally among all irrep sectors</li>
        <li>No preferred direction/configuration</li>
        <li>Order parameter ⟨O⟩ = 0</li>
      </ul>
      <p>
        <strong>Symmetry-broken phase (T < T_c):</strong>
      </p>
      <ul>
        <li>One irrep sector dominates the virtual bonds</li>
        <li>Preferred configuration selected</li>
        <li>Order parameter ⟨O⟩ ≠ 0</li>
      </ul>
      <p>
        The transition occurs when the dominant eigenvalue of the transfer operator changes symmetry sector.
      </p>
    </div>

    <h2>Example: SU(2) Heisenberg Model</h2>

    <div class="highlight-box">
      <h4>Spin Quantum Numbers</h4>
      <p>
        For SU(2) symmetric PEPS (spin rotational invariance):
      </p>
      <ul>
        <li>Virtual indices carry spin: α → (j_α, m_α) where j_α ∈ {0, 1/2, 1, ...}</li>
        <li>Tensor elements obey Clebsch-Gordan coefficients:
          <div class="equation">
            A^{j_phys}_{j_1 j_2 j_3 j_4} ~ ⟨j_1 j_2 j_3 j_4 | j_phys⟩_{CG}
          </div>
        </li>
        <li>Only compatible spin combinations contribute</li>
      </ul>
      <p>
        <strong>Computational savings:</strong> Factor ~100-1000 reduction in parameters for typical χ ~ 10-20.
      </p>
    </div>

    <h2>Topological vs Symmetry-Breaking Order</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Symmetry-Breaking</th>
            <th>Topological Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Degeneracy origin</td>
            <td>Symmetry sectors</td>
            <td>Topology (genus)</td>
          </tr>
          <tr>
            <td>Local distinction</td>
            <td>Yes (order parameter)</td>
            <td>No (only global)</td>
          </tr>
          <tr>
            <td>Virtual bond structure</td>
            <td>Block-diagonal by irreps</td>
            <td>Non-trivial fusion rules</td>
          </tr>
          <tr>
            <td>Requires symmetry?</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Edge modes</td>
            <td>Only if symmetry protected</td>
            <td>Intrinsic (chiral)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Implementation Details</h2>

    <div class="info-box">
      <h3>Practical Symmetric PEPS Algorithms</h3>
      <p>
        <strong>Steps to construct symmetric PEPS:</strong>
      </p>
      <ol>
        <li>Identify symmetry group G and its irreps</li>
        <li>Assign quantum numbers to virtual indices</li>
        <li>Determine fusion rules (Clebsch-Gordan coefficients)</li>
        <li>Construct tensors respecting block structure</li>
        <li>Optimize within allowed blocks</li>
      </ol>
      <p>
        <strong>Libraries and tools:</strong>
      </p>
      <ul>
        <li>TenPy (Python): Built-in support for U(1), SU(2), ℤ_n</li>
        <li>iTensor (C++/Julia): Automatic quantum number management</li>
        <li>TensorKit.jl (Julia): General fusion categories</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>Symmetric PEPS:</strong> Tensors block-decompose by irreps of symmetry group G</li>
        <li><strong>Quantum numbers:</strong> Virtual indices labeled by irrep sectors</li>
        <li><strong>Fusion rules:</strong> Tensor elements nonzero only for compatible combinations</li>
        <li><strong>Computational savings:</strong> Factor ~|G| reduction in parameters and cost</li>
        <li><strong>Symmetry breaking:</strong> One sector dominates, breaking balance</li>
        <li><strong>Examples:</strong> ℤ₂ (Ising), U(1) (XY), SU(2) (Heisenberg)</li>
        <li><strong>Distinction from TO:</strong> Symmetry-breaking requires symmetry, TO does not</li>
      </ul>
    </div>

    <p>
      The block structure arising from symmetry is a powerful organizing principle for PEPS. In the next section, we turn to topological phases where the structure is more subtle, arising not from symmetry but from the fusion rules of anyonic excitations.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_3_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
