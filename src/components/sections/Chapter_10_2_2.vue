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

    <h2>Deriving the Cocycle Condition</h2>

    <div class="info-box">
      <h3>Why the 2-Cocycle Condition?</h3>
      <p>
        The cocycle condition arises from consistency of symmetry action. Consider three symmetry transformations g₁, g₂, g₃:
      </p>

      <h4>Associativity Requirement</h4>
      <p>
        Two ways to combine three group elements:
      </p>
      <div class="equation">
        (g₁ ⋅ g₂) ⋅ g₃ = g₁ ⋅ (g₂ ⋅ g₃)
      </div>
      <p>
        For projective representations U_g with phase factors ω:
      </p>
      <div class="equation">
        U_{g₁} U_{g₂} = ω(g₁,g₂) U_{g₁g₂}
      </div>

      <h4>Consistency Equation</h4>
      <p>
        Computing (U_{g₁} U_{g₂}) U_{g₃} two ways:
      </p>
      <div class="equation">
        (U_{g₁} U_{g₂}) U_{g₃} = ω(g₁,g₂) U_{g₁g₂} U_{g₃} = ω(g₁,g₂)ω(g₁g₂,g₃) U_{(g₁g₂)g₃}
      </div>
      <div class="equation">
        U_{g₁} (U_{g₂} U_{g₃}) = U_{g₁} ω(g₂,g₃) U_{g₂g₃} = ω(g₂,g₃)ω(g₁,g₂g₃) U_{g₁(g₂g₃)}
      </div>
      <p>
        Since (g₁g₂)g₃ = g₁(g₂g₃), we require:
      </p>
      <div class="equation">
        ω(g₁,g₂)ω(g₁g₂,g₃) = ω(g₂,g₃)ω(g₁,g₂g₃)
      </div>
      <p>
        This is precisely the 2-cocycle condition!
      </p>
    </div>

    <h2>Coboundaries and Trivial SPT</h2>

    <div class="highlight-box">
      <h4>Gauge Freedom in Cocycles</h4>
      <p>
        A cocycle ω is called a coboundary if it can be written as:
      </p>
      <div class="equation">
        ω(g₁,g₂) = λ(g₁)λ(g₂)/λ(g₁g₂)
      </div>
      <p>
        for some function λ: G → U(1).
      </p>

      <h4>Physical Meaning</h4>
      <ul>
        <li><strong>Coboundary ω:</strong> Can be removed by redefining U_g → λ(g)U_g</li>
        <li>After redefinition: U'_{g₁} U'_{g₂} = U'_{g₁g₂} (linear representation)</li>
        <li>Edge modes can be gapped → trivial SPT</li>
        <li><strong>Non-coboundary ω:</strong> Cannot be removed → genuine SPT</li>
      </ul>

      <h4>Example: ℤ₂ Calculation</h4>
      <p>
        For ℤ₂ = {e, g} with g² = e:
      </p>
      <ul>
        <li>Cocycle: ω(g,g) can be +1 or -1</li>
        <li>Coboundary: ω(g,g) = λ(g)²/λ(e) → always +1 (since λ ∈ U(1))</li>
        <li>Therefore: ω(g,g) = -1 is non-trivial</li>
        <li>Result: H²(ℤ₂,U(1)) = ℤ₂ = {trivial, nontrivial}</li>
      </ul>
    </div>

    <h2>Detailed Example: U(1) Symmetry</h2>

    <div class="info-box">
      <h3>Integer Classification for U(1)</h3>
      <p>
        For U(1) symmetry (charge conservation), H²(U(1),U(1)) = ℤ:
      </p>

      <h4>Cocycle Construction</h4>
      <p>
        Parametrize U(1) elements as e^{iθ}. A 2-cocycle is:
      </p>
      <div class="equation">
        ω_n(e^{iθ₁}, e^{iθ₂}) = e^{in(θ₁+θ₂-θ₁₊₂)/2π}
      </div>
      <p>
        where n ∈ ℤ is the "winding number."
      </p>

      <h4>Physical Interpretation</h4>
      <ul>
        <li><strong>n = 0:</strong> Trivial phase (product state)</li>
        <li><strong>n ≠ 0:</strong> SPT phase labeled by integer n</li>
        <li>Edge carries n units of quantized charge</li>
        <li>Analogy: 1D analog of integer quantum Hall effect</li>
      </ul>

      <h4>Edge Theory</h4>
      <p>
        The edge is described by a compact boson with radius:
      </p>
      <div class="equation">
        R = √n
      </div>
      <p>
        Larger |n| → stronger SPT → more edge modes
      </p>
    </div>

    <h2>MPS and Projective Representations in Detail</h2>

    <div class="info-box">
      <h3>Symmetric MPS Structure</h3>
      <p>
        An MPS |ψ⟩ = ∑ Tr[A^{s₁}...A^{s_N}] |s₁...s_N⟩ is G-symmetric if:
      </p>
      <div class="equation">
        ∑_j V^g_{ij} A^j = u(g) A^i u(g)^†
      </div>
      <p>
        where:
      </p>
      <ul>
        <li><strong>V^g:</strong> Physical representation (how G acts on physical spins)</li>
        <li><strong>u(g):</strong> Virtual representation (D×D matrices on bond)</li>
        <li><strong>A^i:</strong> MPS tensors (D×D matrices for each physical state i)</li>
      </ul>

      <h4>Projective Representation Property</h4>
      <p>
        Applying symmetry twice:
      </p>
      <div class="equation">
        u(g₁)u(g₂) A^i [u(g₁)u(g₂)]^† = ∑_{j,k} V^{g₁}_{jk} V^{g₂}_{ki} A^j
      </div>
      <p>
        But also:
      </p>
      <div class="equation">
        u(g₁g₂) A^i u(g₁g₂)^† = ∑_j V^{g₁g₂}_{ji} A^j
      </div>
      <p>
        This implies:
      </p>
      <div class="equation">
        u(g₁)u(g₂) = ω(g₁,g₂) u(g₁g₂)
      </div>
      <p>
        The phase ω(g₁,g₂) is the 2-cocycle characterizing the SPT!
      </p>
    </div>

    <h2>Explicit Calculation: ℤ_n SPT Phases</h2>

    <div class="highlight-box">
      <h4>Cyclic Group ℤ_n</h4>
      <p>
        For ℤ_n = {e, g, g², ..., g^{n-1}} with g^n = e:
      </p>

      <h4>Computing H²(ℤ_n, U(1))</h4>
      <p>
        A 2-cocycle ω must satisfy:
      </p>
      <div class="equation">
        ω(g^a, g^b) ω(g^{a+b}, g^c) = ω(g^b, g^c) ω(g^a, g^{b+c})
      </div>
      <p>
        General solution:
      </p>
      <div class="equation">
        ω_k(g^a, g^b) = e^{2πi k ab/n²}
      </div>
      <p>
        where k = 0, 1, ..., n-1 (modulo coboundaries).
      </p>

      <h4>Result</h4>
      <div class="equation">
        H²(ℤ_n, U(1)) = ℤ_n
      </div>
      <p>
        There are exactly n distinct SPT phases, labeled by k ∈ ℤ_n.
      </p>

      <h4>Example: ℤ₃ (Three Phases)</h4>
      <ul>
        <li><strong>k = 0:</strong> Trivial (product state)</li>
        <li><strong>k = 1:</strong> Non-trivial SPT #1</li>
        <li><strong>k = 2:</strong> Non-trivial SPT #2</li>
      </ul>
      <p>
        Edge states transform in projective representations distinguished by k.
      </p>
    </div>

    <h2>Product Groups and Künneth Formula</h2>

    <div class="info-box">
      <h3>Computing H² for Product Groups</h3>
      <p>
        For G = G₁ × G₂, the cohomology is:
      </p>
      <div class="equation">
        H²(G₁ × G₂, U(1)) = [H²(G₁,U(1)) ⊕ H²(G₂,U(1))] ⊕ [H¹(G₁,U(1)) ⊗ H¹(G₂,U(1))]
      </div>

      <h4>Example: ℤ₂ × ℤ₂</h4>
      <p>
        We have:
      </p>
      <ul>
        <li>H²(ℤ₂, U(1)) = ℤ₂</li>
        <li>H¹(ℤ₂, U(1)) = 0 (no 1-dimensional representations with U(1) values except trivial)</li>
      </ul>
      <p>
        Therefore:
      </p>
      <div class="equation">
        H²(ℤ₂ × ℤ₂, U(1)) = ℤ₂ ⊕ ℤ₂ ⊕ 0 = ℤ₂
      </div>
      <p>
        <strong>Physical meaning:</strong> Only one non-trivial SPT despite two ℤ₂ factors!
      </p>
      <ul>
        <li>This SPT is the cluster state / Haldane phase</li>
        <li>Protected by anticommutation of the two ℤ₂ symmetries</li>
      </ul>
    </div>

    <h2>String Order and Cohomology</h2>

    <div class="highlight-box">
      <h4>Connection to Non-Local Order</h4>
      <p>
        String order parameter directly probes the cocycle:
      </p>
      <div class="equation">
        O_string = lim_{|i-j|→∞} ⟨O_i U_{i+1} U_{i+2} ... U_{j-1} O_j⟩
      </div>
      <p>
        where U_k implements symmetry transformation on site k.
      </p>

      <h4>Relation to ω</h4>
      <ul>
        <li>The "string operator" ∏ U_k encodes accumulated phase</li>
        <li>Non-zero O_string ↔ non-trivial cocycle ω</li>
        <li>Different ω give different string order patterns</li>
        <li>This provides experimental signature of cocycle class</li>
      </ul>

      <h4>Example: ℤ₂ Haldane</h4>
      <div class="equation">
        O_string = -⟨S^x_i exp(iπ∑_{k=i}^{j} S^z_k) S^x_j⟩ ≈ -0.37
      </div>
      <p>
        The phase exp(iπ∑S^z) corresponds to the non-trivial cocycle ω(g,g) = -1.
      </p>
    </div>

    <h2>Experimental Signatures</h2>

    <div class="info-box">
      <h3>Detecting SPT Order</h3>
      <p>
        <strong>Direct methods:</strong>
      </p>
      <ul>
        <li><strong>Edge spectroscopy:</strong> Measure boundary excitations directly (ESR, STM)</li>
        <li><strong>String order parameter:</strong> Non-local correlation via neutron scattering or quantum gas microscopy</li>
        <li><strong>Entanglement spectroscopy:</strong> Extract edge spectrum from MPS/DMRG</li>
        <li><strong>Many-body Berry phase:</strong> Adiabatic transport around closed loop in parameter space</li>
      </ul>

      <h3>Symmetry Twist Method</h3>
      <p>
        <strong>Protocol:</strong>
      </p>
      <ol>
        <li>Impose symmetry twist at boundary (flux insertion / twisted boundary condition)</li>
        <li>Measure ground state degeneracy</li>
        <li>Different SPT phases respond differently to twists</li>
      </ol>

      <h4>Mathematical Formulation</h4>
      <p>
        On periodic chain, impose:
      </p>
      <div class="equation">
        U_g |ψ(x + L)⟩ = e^{iθ_g} |ψ(x)⟩
      </div>
      <p>
        where θ_g is the twist angle.
      </p>
      <ul>
        <li>Trivial SPT: Ground state unique for all θ_g</li>
        <li>Non-trivial SPT: Ground state degeneracy depends on θ_g</li>
        <li>Pattern of degeneracies encodes cohomology class ω</li>
      </ul>
    </div>

    <h2>Generalizations</h2>

    <div class="info-box">
      <h3>Beyond On-Site Unitary</h3>
      <p>
        The H²(G,U(1)) classification extends to:
      </p>
      <ul>
        <li><strong>Higher dimensions:</strong> H^{d+1}(G,U(1)) for d-dimensional SPT</li>
        <li><strong>Anti-unitary symmetries:</strong> Modified cohomology (time-reversal, particle-hole)</li>
        <li><strong>Fermions:</strong> Group super-cohomology H^{d+1}(G_f, U(1))</li>
        <li><strong>Spatial symmetries:</strong> Crystalline SPT → equivariant cohomology</li>
        <li><strong>Gauge symmetries:</strong> SPT with gauge constraints</li>
      </ul>

      <h3>Relation to Other Frameworks</h3>
      <ul>
        <li><strong>Tensor category theory:</strong> SPT = invertible domain walls</li>
        <li><strong>Bordism theory:</strong> Classification via cobordism groups (fermionic SPT)</li>
        <li><strong>K-theory:</strong> Free fermion topological insulators</li>
        <li><strong>Anomaly inflow:</strong> Bulk SPT fills boundary anomaly</li>
      </ul>
    </div>

    <p>
      The cohomology classification H²(G,U(1)) provides a complete and elegant understanding of 1D bosonic SPT phases with on-site unitary symmetry. This framework can be systematically generalized to higher dimensions, anti-unitary symmetries, and fermionic systems. Next, we examine time-reversal symmetry, which requires careful treatment due to its anti-unitary nature.
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
