<template>
  <div class="section-content">
    <h1>10.2.2 On-Site Unitary Symmetry</h1>

    <p>
      We now develop the systematic classification of 1D bosonic SPT phases protected by on-site unitary symmetry. The central result is that these phases are classified by the second cohomology group H²(G,U(1)), where G is the symmetry group.
    </p>

    <h2>Mathematical Framework: Group Cohomology</h2>

    <div class="info-box">
      <h3>Classification by H²(G,U(1))</h3>
      <p>
        For a symmetry group G acting on-site, 1D bosonic SPT phases correspond to elements of the second cohomology group:
      </p>
      <div class="equation">
        SPT phases ↔ H²(G,U(1))
      </div>
      <p>
        <strong>Definition:</strong>
      </p>
      <div class="equation">
        H²(G,U(1)) = {2-cocycles ω(g₁,g₂)}/{2-coboundaries}
      </div>
      <p>
        where ω: G × G → U(1) satisfies the cocycle condition:
      </p>
      <div class="equation">
        ω(g₁,g₂)ω(g₁g₂,g₃) = ω(g₂,g₃)ω(g₁,g₂g₃)
      </div>
    </div>

    <h2>Physical Interpretation</h2>

    <div class="highlight-box">
      <h4>Projective Representations</h4>
      <p>
        The cocycle ω encodes how symmetry acts on virtual (edge) degrees of freedom:
      </p>
      <ul>
        <li>Bulk symmetry acts linearly (ordinary representation)</li>
        <li>Edge symmetry acts projectively (with phase factors ω)</li>
        <li>Different ω → different SPT phases</li>
        <li>Trivial ω (coboundary) → trivial phase</li>
      </ul>
    </div>

    <h2>Examples: Classification Results</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Symmetry G</th>
            <th>H²(G,U(1))</th>
            <th>Number of Phases</th>
            <th>Physical Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ℤ₂</td>
            <td>ℤ₂</td>
            <td>2</td>
            <td>Trivial + Haldane</td>
          </tr>
          <tr>
            <td>ℤ_n</td>
            <td>ℤ_n</td>
            <td>n</td>
            <td>Clock models</td>
          </tr>
          <tr>
            <td>U(1)</td>
            <td>ℤ</td>
            <td>∞</td>
            <td>Integer quantum Hall</td>
          </tr>
          <tr>
            <td>SO(3)</td>
            <td>ℤ₂</td>
            <td>2</td>
            <td>Integer/half-integer spin</td>
          </tr>
          <tr>
            <td>ℤ₂ × ℤ₂</td>
            <td>ℤ₂</td>
            <td>2</td>
            <td>Cluster state</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>MPS Representation</h2>

    <div class="info-box">
      <h3>Symmetric MPS for SPT</h3>
      <p>
        An MPS is symmetric under G if there exist virtual representations u_g:
      </p>
      <div class="equation">
        ∑_j V^g_{ij} A^j = u_g A^i u_g^†
      </div>
      <p>
        <strong>SPT phase emerges when:</strong>
      </p>
      <ul>
        <li>u_g forms a projective representation with cocycle ω</li>
        <li>u_{g₁} u_{g₂} = ω(g₁,g₂) u_{g₁g₂}</li>
        <li>Non-trivial ω → non-trivial SPT</li>
      </ul>
    </div>

    <h2>Detailed Example: ℤ₂ SPT (Haldane Phase)</h2>

    <div class="highlight-box">
      <h4>Two Phases for ℤ₂ Symmetry</h4>
      <p>
        H²(ℤ₂,U(1)) = ℤ₂, with two elements:
      </p>
      <ol>
        <li><strong>Trivial cocycle:</strong> ω(g,h) = 1 for all g,h ∈ ℤ₂
          <ul>
            <li>Example: Product state |↑↑↑...⟩</li>
            <li>Edge: Can be gapped</li>
          </ul>
        </li>
        <li><strong>Non-trivial cocycle:</strong> ω(g,g) = -1 for g ≠ identity
          <ul>
            <li>Example: Haldane phase (spin-1 chain)</li>
            <li>Edge: Spin-1/2 protected by ℤ₂</li>
            <li>Projective representation: u_g² = -1</li>
          </ul>
        </li>
      </ol>
    </div>

    <h2>Entanglement Spectrum</h2>

    <div class="info-box">
      <h3>Edge Modes from Entanglement</h3>
      <p>
        The entanglement spectrum reveals edge state structure:
      </p>
      <ul>
        <li>Schmidt decomposition: |ψ⟩ = ∑_α λ_α |L_α⟩|R_α⟩</li>
        <li>Entanglement Hamiltonian: H_E = -log ρ_L</li>
        <li>Spectrum of H_E encodes edge excitations</li>
        <li>Degeneracies match edge symmetry representation</li>
      </ul>
      <p>
        <strong>Haldane phase:</strong> Entanglement spectrum is 2-fold degenerate (spin-1/2)
      </p>
    </div>

    <h2>Experimental Signatures</h2>

    <div class="info-box">
      <h3>Detecting SPT Order</h3>
      <p>
        <strong>Direct methods:</strong>
      </p>
      <ul>
        <li>Edge spectroscopy: Measure boundary excitations</li>
        <li>String order parameter: Non-local correlation</li>
        <li>Entanglement spectroscopy: Extract edge spectrum from MPS</li>
      </ul>
      <p>
        <strong>Symmetry twist:</strong>
      </p>
      <ul>
        <li>Impose symmetry twist at boundary (flux insertion)</li>
        <li>Ground state degeneracy changes</li>
        <li>Distinguishes SPT phases with same symmetry</li>
      </ul>
    </div>

    <p>
      The cohomology classification provides a complete understanding of 1D bosonic SPT phases with on-site unitary symmetry. Next, we examine time-reversal symmetry, which requires a modified analysis.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_2_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
