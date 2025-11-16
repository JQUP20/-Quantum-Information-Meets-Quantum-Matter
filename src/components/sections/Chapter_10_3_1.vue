<template>
  <div class="section-content">
    <h1>10.3.1 Jordan-Wigner Transformation</h1>

    <p>
      The Jordan-Wigner transformation maps spins to fermions, revealing deep connections between bosonic and fermionic SPT phases.
    </p>

    <h2>The Transformation</h2>

    <div class="info-box">
      <h3>Mapping Spins to Fermions</h3>
      <p>
        For a 1D chain of spins:
      </p>
      <div class="equation">
        c_j = (∏_{i<j} σ^z_i) σ^-_j
      </div>
      <p>
        where σ^- = (σ^x - iσ^y)/2 is the lowering operator.
      </p>
      <p>
        <strong>Inverse:</strong>
      </p>
      <div class="equation">
        σ^+_j = (∏_{i<j} (1-2c^†_i c_i)) c^†_j
      </div>
    </div>

    <h2>Verification of Fermion Algebra</h2>

    <div class="highlight-box">
      <h4>Anticommutation Relations</h4>
      <p>
        The Jordan-Wigner transformation ensures that c_j and c^†_j satisfy fermionic anticommutation:
      </p>
      <div class="equation">
        {c_i, c_j} = 0,  {c^†_i, c^†_j} = 0,  {c_i, c^†_j} = δ_{ij}
      </div>

      <h4>Proof for {c_i, c^†_j}</h4>
      <p>
        For i < j:
      </p>
      <div class="equation">
        c_i c^†_j = (∏_{k<i} σ^z_k) σ^-_i (∏_{k<j} σ^z_k) σ^+_j
      </div>
      <p>
        Since σ^z_i appears in the second product and anticommutes with σ^-_i:
      </p>
      <div class="equation">
        = -(∏_{k<i} σ^z_k) σ^-_i σ^z_i (∏_{i<k<j} σ^z_k) σ^+_j (∏_{k≥j} σ^z_k)
      </div>
      <p>
        Similarly computing c^†_j c_i and adding shows {c_i, c^†_j} = 0 for i ≠ j.
      </p>

      <h4>Key Insight</h4>
      <p>
        The string of σ^z operators (∏_{i<j} σ^z_i) is the "Jordan-Wigner string" that implements the fermion sign when particles are exchanged. This converts bosonic (or spin) statistics to fermionic statistics.
      </p>
    </div>

    <h2>Detailed Example: XY Spin Chain</h2>

    <div class="info-box">
      <h3>XY Model Hamiltonian</h3>
      <div class="equation">
        H_{XY} = -J ∑_i (σ^x_i σ^x_{i+1} + σ^y_i σ^y_{i+1})
      </div>
      <p>
        Rewrite using spin-raising/lowering operators:
      </p>
      <div class="equation">
        σ^x_i σ^x_{i+1} + σ^y_i σ^y_{i+1} = σ^+_i σ^-_{i+1} + σ^-_i σ^+_{i+1}
      </div>

      <h3>Jordan-Wigner Transformation</h3>
      <p>
        Apply c_j = (∏_{i<j} σ^z_i) σ^-_j:
      </p>
      <div class="equation">
        σ^+_i σ^-_{i+1} = c^†_i (∏_{k<i+1} (1-2c^†_k c_k)) c_{i+1}
      </div>
      <p>
        Since ∏_{k<i+1} includes c^†_i c_i, and using (1-2c^†_i c_i)c_i = -c_i:
      </p>
      <div class="equation">
        σ^+_i σ^-_{i+1} + σ^-_i σ^+_{i+1} → c^†_i c_{i+1} + c^†_{i+1} c_i
      </div>

      <h3>Free Fermion Hamiltonian</h3>
      <div class="equation">
        H_{fermion} = -J ∑_i (c^†_i c_{i+1} + c^†_{i+1} c_i)
      </div>
      <p>
        This is a <strong>free (non-interacting) fermion hopping model</strong>!
      </p>

      <h4>Diagonalization</h4>
      <p>
        Fourier transform: c_k = (1/√N) ∑_j e^{ikj} c_j
      </p>
      <div class="equation">
        H = ∑_k ε(k) c^†_k c_k,  ε(k) = -2J cos(k)
      </div>
      <p>
        Dispersion relation is cosine, with minima at k = ±π (half-filling).
      </p>
    </div>

    <h2>Transverse-Field Ising Model ↔ Kitaev Chain</h2>

    <div class="info-box">
      <h3>Ising Hamiltonian</h3>
      <div class="equation">
        H_{Ising} = -J ∑_i σ^z_i σ^z_{i+1} - h ∑_i σ^x_i
      </div>

      <h3>After Jordan-Wigner</h3>
      <p>
        Using σ^z_i = 1 - 2c^†_i c_i and σ^x_i = c^†_i + c_i:
      </p>
      <div class="equation">
        H = -J ∑_i (1 - 2c^†_i c_i)(1 - 2c^†_{i+1} c_{i+1}) - h ∑_i (c^†_i + c_i)
      </div>
      <p>
        Expanding and dropping constants:
      </p>
      <div class="equation">
        H = ∑_i [2J(c^†_i c_i - 1/2)(c^†_{i+1} c_{i+1} - 1/2) - h(c^†_i + c_i)]
      </div>

      <h3>Majorana Fermion Form</h3>
      <p>
        Define Majorana operators:
      </p>
      <div class="equation">
        γ_{2j-1} = c_j + c^†_j,  γ_{2j} = -i(c_j - c^†_j)
      </div>
      <p>
        These satisfy {γ_a, γ_b} = 2δ_{ab} and γ^†_a = γ_a.
      </p>
      <p>
        In Majorana form:
      </p>
      <div class="equation">
        H = (i/2) ∑_j [(J + h)γ_{2j}γ_{2j+1} + (J - h)γ_{2j-1}γ_{2j+2}]
      </div>
      <p>
        This is the <strong>Kitaev chain</strong>!
      </p>

      <h4>Topological Phase Transition</h4>
      <ul>
        <li><strong>h > J:</strong> Trivial phase, gapped</li>
        <li><strong>h = J:</strong> Critical point, gapless</li>
        <li><strong>h < J:</strong> Topological phase, gapped with Majorana edge modes</li>
      </ul>
    </div>

    <h2>Physical Interpretation of Jordan-Wigner String</h2>

    <div class="highlight-box">
      <h4>What is the String ∏_{i<j} σ^z_i?</h4>
      <p>
        The Jordan-Wigner string has deep physical meaning:
      </p>

      <h4>Fermion Statistics from Spin Exchange</h4>
      <ul>
        <li>Spin-1/2 particles are bosons (or distinguishable)</li>
        <li>Exchanging two spins: ψ(i,j) → ψ(j,i) (no sign change)</li>
        <li>Fermions must acquire minus sign upon exchange</li>
        <li>The string ∏σ^z implements this sign!</li>
      </ul>

      <h4>Counting Operator Interpretation</h4>
      <p>
        σ^z_i = 1 - 2n_i where n_i counts spin-down:
      </p>
      <div class="equation">
        ∏_{i<j} σ^z_i = ∏_{i<j} (1 - 2n_i) = (-1)^{∑_{i<j} n_i}
      </div>
      <p>
        This is precisely the fermion parity of all sites to the left of j!
      </p>

      <h4>Geometric Interpretation</h4>
      <p>
        In spin language: String tracks "defects" (domain walls)
      </p>
      <p>
        In fermion language: String implements exchange statistics
      </p>
    </div>

    <h2>Boundary Conditions and Edge Modes</h2>

    <div class="info-box">
      <h3>Open vs Periodic Chains</h3>

      <h4>Open Boundary Conditions</h4>
      <p>
        On open chain (sites 1 to N):
      </p>
      <div class="equation">
        c_j = (∏_{i<j} σ^z_i) σ^-_j  (no subtlety)
      </div>
      <ul>
        <li>Transformation is local at both ends</li>
        <li>Edge modes map directly: spin-1/2 ↔ Majorana fermion</li>
        <li>Example: Haldane edge spin-1/2 ↔ Kitaev Majorana mode</li>
      </ul>

      <h4>Periodic Boundary Conditions</h4>
      <p>
        On periodic chain (sites on ring):
      </p>
      <div class="equation">
        c_N = (∏_{i<N} σ^z_i) σ^-_N = Q σ^-_N
      </div>
      <p>
        where Q = ∏_{i=1}^{N-1} σ^z_i.
      </p>
      <p>
        <strong>Issue:</strong> The last fermion c_N depends on global parity Q!
      </p>
      <ul>
        <li>JW transformation is <em>non-local</em> for periodic BC</li>
        <li>Fermion number parity becomes ∏_i σ^z_i (global)</li>
        <li>This connects bosonic and fermionic SPT classifications</li>
      </ul>
    </div>

    <h2>Fermion Parity Symmetry</h2>

    <div class="highlight-box">
      <h4>Emergent Symmetry from Jordan-Wigner</h4>
      <p>
        Under Jordan-Wigner, certain spin symmetries map to fermion parity:
      </p>

      <h4>Spin Rotation → Fermion Parity</h4>
      <p>
        Global rotation R_z(π) around z-axis:
      </p>
      <div class="equation">
        R_z(π) = ∏_i σ^z_i
      </div>
      <p>
        In fermion language:
      </p>
      <div class="equation">
        R_z(π) = (-1)^{∑_i c^†_i c_i} = P_f  (fermion parity)
      </div>

      <h4>Physical Meaning</h4>
      <ul>
        <li>Spin ℤ₂ symmetry → Fermion parity ℤ₂</li>
        <li>Bosonic SPT with ℤ₂ ↔ Fermionic SPT with parity</li>
        <li>Haldane phase ↔ Kitaev topological phase</li>
        <li>This explains the parallel classification structures!</li>
      </ul>
    </div>

    <h2>Applications to SPT Classification</h2>

    <div class="comparison-box">
      <h3>Bosonic vs Fermionic SPT via Jordan-Wigner</h3>
      <table>
        <thead>
          <tr>
            <th>Spin Model</th>
            <th>Symmetry</th>
            <th>SPT Phase</th>
            <th>Fermion Model</th>
            <th>Fermion Symmetry</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Haldane S=1</td>
            <td>ℤ₂ (π-rotation)</td>
            <td>Non-trivial</td>
            <td>Kitaev chain</td>
            <td>Fermion parity</td>
          </tr>
          <tr>
            <td>Cluster state</td>
            <td>ℤ₂ × ℤ₂</td>
            <td>Non-trivial</td>
            <td>Free fermions</td>
            <td>P_f × P_f</td>
          </tr>
          <tr>
            <td>XY model</td>
            <td>U(1) (spin rotation)</td>
            <td>Gapless</td>
            <td>Free fermions</td>
            <td>U(1) (charge)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Generalized Jordan-Wigner for Higher Dimensions</h2>

    <div class="info-box">
      <h3>2D Jordan-Wigner String</h3>
      <p>
        In 2D, the Jordan-Wigner string becomes a surface:
      </p>
      <div class="equation">
        c_{x,y} = exp(iπ ∑_{(x',y')<(x,y)} n_{x',y'}) σ^-_{x,y}
      </div>
      <p>
        where (x',y') < (x,y) defines a path from origin to (x,y).
      </p>

      <h4>Issues in 2D</h4>
      <ul>
        <li>Transformation depends on choice of path → <strong>non-unique</strong></li>
        <li>Different paths give different fermion algebras</li>
        <li>No natural canonical choice in 2D</li>
        <li>This reflects that 2D bosonic ≠ 2D fermionic SPT</li>
      </ul>

      <h4>Consequence for SPT</h4>
      <p>
        In 1D: Bosonic and fermionic SPT are closely related via JW
      </p>
      <p>
        In 2D+: Bosonic and fermionic SPT are fundamentally different
      </p>
      <ul>
        <li>Different classification groups</li>
        <li>Different edge theories</li>
        <li>No simple mapping between them</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h4>Key Takeaways</h4>
      <ul>
        <li><strong>JW transformation:</strong> Maps spins to fermions via string operator ∏σ^z</li>
        <li><strong>Physical meaning:</strong> Implements fermion statistics from spin exchanges</li>
        <li><strong>Applications:</strong> XY → free fermions, Ising → Kitaev chain</li>
        <li><strong>Edge modes:</strong> Spin-1/2 edge ↔ Majorana zero mode</li>
        <li><strong>Symmetries:</strong> Spin ℤ₂ ↔ fermion parity ℤ_2^f</li>
        <li><strong>SPT connection:</strong> Bosonic SPT (ℤ₂) ↔ Fermionic SPT (parity)</li>
        <li><strong>Limitations:</strong> Works beautifully in 1D, problematic in 2D+</li>
      </ul>

      <h4>Conceptual Importance</h4>
      <p>
        Jordan-Wigner is more than a technical tool—it reveals that spin-1/2 systems and fermions are dual descriptions of the same physics. This duality is the foundation for understanding fermionic SPT phases through bosonic intuition.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_3_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
