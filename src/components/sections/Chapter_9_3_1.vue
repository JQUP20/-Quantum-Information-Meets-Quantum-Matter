<template>
  <div class="section-content">
    <h1>9.3.1 Ising Model</h1>

    <p>
      The 2D classical Ising model and its quantum counterpart provide ideal testing grounds for PEPS methods. These systems exhibit spontaneous symmetry breaking, long-range order, and phase transitions—all phenomena that PEPS can capture efficiently.
    </p>

    <h2>Classical 2D Ising Model</h2>

    <div class="info-box">
      <h3>Hamiltonian and Partition Function</h3>
      <p>
        The classical Ising model on a square lattice is defined by:
      </p>
      <div class="equation">
        H = -J ∑_{⟨ij⟩} σ_i σ_j - h ∑_i σ_i
      </div>
      <p>
        where σ_i ∈ {±1} are classical spins, J > 0 is ferromagnetic coupling, and h is external field.
      </p>
      <p>
        The partition function at temperature T is:
      </p>
      <div class="equation">
        Z = ∑_{all configs} e^{-βH} = Tr[T^N]
      </div>
      <p>
        where β = 1/(k_BT) and T is the transfer matrix.
      </p>
    </div>

    <h3>Phase Diagram</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Temperature</th>
            <th>Order Parameter</th>
            <th>Correlation Length</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ordered (ferromagnetic)</td>
            <td>T < T_c ≈ 2.269 J/k_B</td>
            <td>m = ⟨σ_i⟩ ≠ 0</td>
            <td>ξ = ∞</td>
          </tr>
          <tr>
            <td>Critical</td>
            <td>T = T_c</td>
            <td>m = 0, power-law decay</td>
            <td>ξ = ∞</td>
          </tr>
          <tr>
            <td>Disordered (paramagnetic)</td>
            <td>T > T_c</td>
            <td>m = 0</td>
            <td>ξ < ∞</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>PEPS Representation</h2>

    <div class="info-box">
      <h3>Tensor Network for Partition Function</h3>
      <p>
        The partition function can be written exactly as a PEPS contraction with bond dimension χ = 2:
      </p>
      <div class="equation">
        Z = ∑_{σ₁...σ_N} ∏_{⟨ij⟩} T_{σ_iσ_j}
      </div>
      <p>
        where the transfer matrix element is:
      </p>
      <div class="equation">
        T_{σσ'} = e^{βJσσ'} = {
          e^{βJ}  if σ = σ'
          e^{-βJ} if σ ≠ σ'
        }
      </div>
      <p>
        This can be decomposed into a rank-5 tensor on each site:
      </p>
      <div class="equation">
        A^σ_{αβγδ} = (T_{σα}^{1/2}) (T_{σβ}^{1/2}) (T_{σγ}^{1/2}) (T_{σδ}^{1/2})
      </div>
    </div>

    <h3>Explicit Tensor Construction</h3>

    <div class="highlight-box">
      <h4>Bond Dimension χ = 2 Representation</h4>
      <p>
        Define the transfer matrix square root:
      </p>
      <div class="equation">
        M = [√(e^{βJ})    √(e^{-βJ})]
            [√(e^{-βJ})   √(e^{βJ})]
      </div>
      <p>
        For each physical spin value σ ∈ {+1, -1} ↔ {0, 1}:
      </p>
      <div class="equation">
        A^{+1} = M_{row 0} ⊗ M_{row 0} ⊗ M_{row 0} ⊗ M_{row 0}
        A^{-1} = M_{row 1} ⊗ M_{row 1} ⊗ M_{row 1} ⊗ M_{row 1}
      </div>
      <p>
        This gives rank-5 tensors with physical index σ and four virtual indices (left, right, up, down) each of dimension 2.
      </p>
    </div>

    <h2>Symmetry Properties</h2>

    <div class="info-box">
      <h3>ℤ₂ Spin-Flip Symmetry</h3>
      <p>
        The Ising model (at h = 0) has ℤ₂ symmetry: σ_i → -σ_i for all i.
      </p>
      <p>
        <strong>In PEPS language:</strong> Symmetry is implemented by:
      </p>
      <div class="equation">
        u_g = σ^x = [0  1]  (Pauli-X on virtual space)
                    [1  0]
      </div>
      <p>
        Acting on all four virtual indices simultaneously flips the physical index.
      </p>
      <p>
        <strong>Consequences:</strong>
      </p>
      <ul>
        <li>T < T_c: Spontaneous symmetry breaking, ⟨σ⟩ ≠ 0</li>
        <li>T > T_c: Symmetric phase, ⟨σ⟩ = 0</li>
        <li>Two degenerate ground states at T < T_c (all + or all -)</li>
      </ul>
    </div>

    <h2>Computing Observables</h2>

    <div class="highlight-box">
      <h4>Magnetization and Susceptibility</h4>
      <p>
        <strong>Magnetization:</strong>
      </p>
      <div class="equation">
        m = ⟨σ_i⟩ = (1/Z) ∂Z/∂h |_{h=0}
      </div>
      <p>
        For T < T_c: m ~ (T_c - T)^β_mag with β_mag = 1/8 (2D Ising critical exponent)
      </p>
      <p>
        <strong>Susceptibility:</strong>
      </p>
      <div class="equation">
        χ = ∂m/∂h |_{h=0} ~ |T - T_c|^{-γ}
      </div>
      <p>
        with γ = 7/4 at criticality.
      </p>
    </div>

    <h2>Quantum Transverse-Field Ising Model</h2>

    <div class="info-box">
      <h3>Quantum Extension</h3>
      <p>
        The quantum version adds a transverse field:
      </p>
      <div class="equation">
        H = -J ∑_{⟨ij⟩} σ^z_i σ^z_j - Γ ∑_i σ^x_i
      </div>
      <p>
        <strong>Phase diagram:</strong>
      </p>
      <ul>
        <li>Γ/J ≪ 1: Ferromagnetic phase (⟨σ^z⟩ ≠ 0)</li>
        <li>Γ/J ~ 1: Quantum critical point</li>
        <li>Γ/J ≫ 1: Paramagnetic phase (⟨σ^z⟩ = 0, ⟨σ^x⟩ ≠ 0)</li>
      </ul>
      <p>
        <strong>PEPS representation:</strong> Ground state can be approximated with finite χ ~ 10-100 depending on proximity to quantum critical point.
      </p>
    </div>

    <h2>Numerical Results with PEPS</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>System Size</th>
            <th>Critical Temperature</th>
            <th>Accuracy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Exact (Onsager)</td>
            <td>∞</td>
            <td>T_c/J = 2.269...</td>
            <td>Exact</td>
          </tr>
          <tr>
            <td>PEPS (χ=2)</td>
            <td>Infinite</td>
            <td>T_c/J ≈ 2.27</td>
            <td>~0.1%</td>
          </tr>
          <tr>
            <td>PEPS (χ=4)</td>
            <td>Infinite</td>
            <td>T_c/J ≈ 2.269</td>
            <td>~0.01%</td>
          </tr>
          <tr>
            <td>Monte Carlo</td>
            <td>1000×1000</td>
            <td>T_c/J ≈ 2.269±0.001</td>
            <td>Statistical error</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>Classical Ising:</strong> Exactly representable as PEPS with χ = 2</li>
        <li><strong>Partition function:</strong> Z = Tr[T^N] becomes PEPS contraction</li>
        <li><strong>ℤ₂ symmetry:</strong> Implemented via virtual Pauli-X operators</li>
        <li><strong>Phase transition:</strong> T_c ≈ 2.269 J/k_B (Onsager solution)</li>
        <li><strong>Quantum version:</strong> Transverse field induces quantum phase transition</li>
        <li><strong>PEPS accuracy:</strong> Excellent agreement with exact results, even at small χ</li>
        <li><strong>Demonstrates:</strong> PEPS efficiently capture symmetry-breaking phases</li>
      </ul>
    </div>

    <p>
      The Ising model demonstrates how PEPS naturally encode symmetry-breaking order through tensor structure. The next section explores the general structural properties that emerge in PEPS representations of symmetric phases.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_3_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
