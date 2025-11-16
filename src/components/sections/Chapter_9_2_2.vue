<template>
  <div class="section-content">
    <h1>9.2.2 Properties</h1>

    <p>
      Having defined PEPS formally, we now explore their mathematical and physical properties. Understanding these properties is crucial for both theoretical analysis and practical applications of PEPS in simulating 2D quantum systems.
    </p>

    <h2>Entanglement Structure</h2>

    <div class="info-box">
      <h3>Area Law for PEPS</h3>
      <p>
        One of the most fundamental properties of PEPS is that they automatically satisfy an area law for entanglement entropy:
      </p>
      <div class="equation">
        S(ρ_A) ≤ |∂A| · log χ
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>S(ρ_A) is the entanglement entropy of region A</li>
        <li>|∂A| is the size of the boundary between A and its complement</li>
        <li>χ is the bond dimension</li>
      </ul>
      <p>
        <strong>Physical interpretation:</strong>
      </p>
      <ul>
        <li>Entanglement is localized at the boundary between regions</li>
        <li>For 2D: |∂A| ~ L (perimeter), so S ~ L (linear in boundary)</li>
        <li>Matches area law for gapped 2D systems</li>
        <li>Explains why finite χ can represent ground states</li>
      </ul>
    </div>

    <h3>Proof Sketch</h3>

    <div class="highlight-box">
      <h4>Why PEPS Satisfy Area Law</h4>
      <p>
        Consider a bipartition of the lattice into regions A and B:
      </p>
      <ol>
        <li>The PEPS state can be written as:
          <div class="equation">
            |ψ⟩ = ∑_{α₁...α_k} λ_{α₁...α_k} |ψ^A_{α₁...α_k}⟩ ⊗ |ψ^B_{α₁...α_k}⟩
          </div>
          where α₁, ..., α_k are the virtual indices crossing the boundary
        </li>
        <li>Number of boundary bonds: k = |∂A|</li>
        <li>Each bond has dimension χ</li>
        <li>Total number of Schmidt coefficients: at most χ^k = χ^{|∂A|}</li>
        <li>Entanglement entropy bounded by:
          <div class="equation">
            S ≤ log(χ^{|∂A|}) = |∂A| · log χ
          </div>
        </li>
      </ol>
      <p>
        This bound is saturated when all χ^{|∂A|} bond states are equally occupied.
      </p>
    </div>

    <h2>Computational Complexity</h2>

    <div class="info-box">
      <h3>Contraction Problem</h3>
      <p>
        Computing observables from PEPS involves contracting the tensor network, which is fundamentally harder than for 1D MPS:
      </p>
      <ul>
        <li><strong>Exact contraction:</strong> #P-hard (exponentially difficult in general)</li>
        <li><strong>Approximate contraction:</strong> Polynomial time, but expensive
          <ul>
            <li>Boundary MPS method: O(χ^{10}) per update</li>
            <li>Corner transfer matrix: O(χ^{12})</li>
            <li>Tensor renormalization: O(χ^{18})</li>
          </ul>
        </li>
      </ul>
      <p>
        <strong>Why so hard?</strong> Unlike 1D MPS (which form a linear chain that can be contracted sequentially), 2D PEPS form a 2D mesh where contraction order matters greatly.
      </p>
    </div>

    <h3>Parameter Count</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>System</th>
            <th>Hilbert Space Dimension</th>
            <th>MPS/PEPS Parameters</th>
            <th>Scaling</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1D, N sites</td>
            <td>d^N</td>
            <td>Ndχ²</td>
            <td>Linear in N</td>
          </tr>
          <tr>
            <td>2D square, L×L</td>
            <td>d^{L²}</td>
            <td>L²dχ⁴</td>
            <td>Quadratic in L</td>
          </tr>
          <tr>
            <td>2D triangular, L×L</td>
            <td>d^{L²}</td>
            <td>L²dχ⁶</td>
            <td>Quadratic in L</td>
          </tr>
          <tr>
            <td>3D cubic, L×L×L</td>
            <td>d^{L³}</td>
            <td>L³dχ⁶</td>
            <td>Cubic in L</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      While PEPS reduce exponential (d^{L²}) to polynomial (L²χ⁴), the high power of χ limits practical bond dimensions.
    </p>

    <h2>Gauge Freedom</h2>

    <div class="info-box">
      <h3>Virtual Symmetries in PEPS</h3>
      <p>
        Similar to 1D MPS, PEPS have gauge freedom: different tensor sets can represent the same physical state.
      </p>
      <p>
        For each bond connecting sites j and k, we can insert X · X^{-1} = I:
      </p>
      <div class="equation">
        Ã^i_j = (... ⊗ I ⊗ X ⊗ I ⊗ ...)A^i_j
        Ã^i_k = (... ⊗ I ⊗ X^{-1} ⊗ I ⊗ ...)A^i_k
      </div>
      <p>
        where X is a χ × χ invertible matrix on the shared virtual index.
      </p>
      <p>
        <strong>Complexity:</strong> In 2D, gauge transformations on different bonds can overlap, creating a complex gauge structure. No simple canonical form exists (unlike 1D).
      </p>
    </div>

    <h2>Parent Hamiltonians</h2>

    <div class="highlight-box">
      <h4>Local Hamiltonians for PEPS</h4>
      <p>
        Every PEPS (injective or not) has a parent Hamiltonian—a local Hamiltonian for which it is a ground state.
      </p>
      <p>
        <strong>Construction:</strong> For each local region (e.g., 2×2 plaquette on square lattice):
      </p>
      <ol>
        <li>Compute reduced density matrix ρ_plaquette</li>
        <li>Project onto complement: h_plaquette = I - P_{support(ρ)}</li>
        <li>Parent Hamiltonian: H = ∑_{plaquettes} h_plaquette</li>
      </ol>
      <p>
        <strong>Properties:</strong>
      </p>
      <ul>
        <li>H|ψ⟩ = 0 (zero energy ground state)</li>
        <li>Frustration-free (each term annihilates |ψ⟩)</li>
        <li>Local interactions (range determined by plaquette size)</li>
      </ul>
    </div>

    <h3>Injectivity in 2D</h3>

    <div class="info-box">
      <h3>Generalized Injectivity</h3>
      <p>
        A 2D PEPS is <strong>injective</strong> if the map from virtual to physical space is injective for sufficiently large regions.
      </p>
      <p>
        <strong>Implications:</strong>
      </p>
      <ul>
        <li><strong>Unique ground state:</strong> Injective PEPS have unique parent Hamiltonian ground state (for open BC)</li>
        <li><strong>Gapped:</strong> Spectral gap above ground state</li>
        <li><strong>Topological order:</strong> Can have topological degeneracy on torus (unlike 1D)</li>
      </ul>
      <p>
        <strong>Example:</strong> Toric code PEPS is injective but has 4-fold degenerate ground state on torus due to topological order.
      </p>
    </div>

    <h2>Correlation Functions</h2>

    <div class="highlight-box">
      <h4>Exponential Decay in Gapped Phases</h4>
      <p>
        For injective PEPS representing gapped phases, correlation functions decay exponentially:
      </p>
      <div class="equation">
        C(r) = |⟨O_0 O_r⟩ - ⟨O_0⟩⟨O_r⟩| ~ e^{-r/ξ}
      </div>
      <p>
        where ξ is the correlation length, determined by the transfer matrix spectrum (generalized to 2D).
      </p>
      <p>
        <strong>Anisotropic correlations:</strong> In 2D, correlation length can be different along x and y directions.
      </p>
    </div>

    <h2>Symmetries in PEPS</h2>

    <div class="info-box">
      <h3>On-Site Symmetry Implementation</h3>
      <p>
        A PEPS has on-site symmetry G if there exist virtual representations u_g such that:
      </p>
      <div class="equation">
        ∑_i V^g_{ij} A^j_{αβγδ} = ∑_{α'β'γ'δ'} u_g(α,α') u_g(β,β') u_g(γ,γ') u_g(δ,δ') A^i_{α'β'γ'δ'}
      </div>
      <p>
        where V^g is the physical representation of group element g.
      </p>
      <p>
        <strong>Block structure:</strong> Symmetry leads to block-diagonal tensor structure, reducing computational cost.
      </p>
    </div>

    <h3>Symmetric PEPS Examples</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Physical System</th>
            <th>Symmetry</th>
            <th>Consequence in PEPS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ising model</td>
            <td>ℤ₂ (spin flip)</td>
            <td>Tensors decompose into ±1 sectors</td>
          </tr>
          <tr>
            <td>Heisenberg AFM</td>
            <td>SU(2)</td>
            <td>Virtual indices carry spin quantum numbers</td>
          </tr>
          <tr>
            <td>Toric code</td>
            <td>ℤ₂ × ℤ₂</td>
            <td>Electric and magnetic charge conservation</td>
          </tr>
          <tr>
            <td>Lattice gauge theory</td>
            <td>Local gauge group</td>
            <td>Gauss law constraints on tensors</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Approximation Quality</h2>

    <div class="info-box">
      <h3>How Well Can PEPS Approximate States?</h3>
      <p>
        <strong>Theorem (Informal):</strong> Ground states of gapped local Hamiltonians in 2D can be approximated by PEPS with bond dimension:
      </p>
      <div class="equation">
        χ = exp(O(L))
      </div>
      <p>
        where L is the linear system size, to within error ε.
      </p>
      <p>
        <strong>Practical reality:</strong>
      </p>
      <ul>
        <li>χ ~ 4-20 accessible in practice</li>
        <li>Logarithmic or constant accuracy for gapped systems</li>
        <li>Exact for special cases (toric code, RVB states, some VBS)</li>
      </ul>
    </div>

    <h2>Stability Properties</h2>

    <div class="highlight-box">
      <h4>Robustness Under Perturbations</h4>
      <p>
        <strong>Topologically ordered PEPS:</strong>
      </p>
      <ul>
        <li>Ground state degeneracy stable under local perturbations</li>
        <li>Anyonic excitations protected</li>
        <li>Connection to quantum error correction</li>
      </ul>
      <p>
        <strong>SPT phases:</strong>
      </p>
      <ul>
        <li>Edge states robust as long as symmetry preserved</li>
        <li>Symmetry-breaking perturbations destroy protection</li>
      </ul>
    </div>

    <h2>Comparison with Other Ansätze</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Ansatz</th>
            <th>Best For</th>
            <th>Limitations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PEPS</td>
            <td>2D gapped systems, topological order</td>
            <td>Expensive contraction, limited χ</td>
          </tr>
          <tr>
            <td>Variational Monte Carlo</td>
            <td>Sign-problem-free systems</td>
            <td>Fermion sign problem, no systematic improvement</td>
          </tr>
          <tr>
            <td>Coupled cluster</td>
            <td>Weakly correlated</td>
            <td>Fails for strong correlation</td>
          </tr>
          <tr>
            <td>Exact diagonalization</td>
            <td>Small systems (N ~ 40)</td>
            <td>Exponential scaling</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Properties of PEPS</h3>
      <ul>
        <li><strong>Area law:</strong> S ≤ |∂A| log χ automatically satisfied</li>
        <li><strong>Parameters:</strong> L²dχ⁴ for L×L square lattice (polynomial)</li>
        <li><strong>Contraction:</strong> #P-hard exactly, O(χ^{10}) approximately</li>
        <li><strong>Gauge freedom:</strong> Complex overlapping structure, no simple canonical form</li>
        <li><strong>Parent Hamiltonian:</strong> Every PEPS has local frustration-free parent H</li>
        <li><strong>Injectivity:</strong> Ensures unique ground state, gap, but allows topological degeneracy</li>
        <li><strong>Correlations:</strong> Exponential decay in gapped phases</li>
        <li><strong>Symmetry:</strong> Block structure reduces computational cost</li>
        <li><strong>Approximation:</strong> χ ~ exp(L) needed theoretically, χ ~ 10 practical</li>
        <li><strong>Stability:</strong> Topological order and SPT phases protected</li>
      </ul>
    </div>

    <p>
      Understanding these properties is essential for both theoretical analysis and numerical applications of PEPS. In the following sections, we'll see how these abstract properties manifest in concrete physical systems, starting with symmetry-breaking phases (Section 9.3) and topological phases (Section 9.4).
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_2_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
