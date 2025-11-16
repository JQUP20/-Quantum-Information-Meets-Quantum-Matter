<template>
  <div class="section-content">
    <h1>10.2.5 Summary of Results for Bosonic Systems</h1>

    <p>
      This section consolidates the complete classification of bosonic SPT phases across various symmetries and dimensions. We present comprehensive tables, key physical realizations, detection methods, and fundamental theorems that govern the SPT landscape.
    </p>

    <h2>Complete Classification Tables</h2>

    <div class="comparison-box">
      <h3>1D Bosonic SPT Phases</h3>
      <table>
        <thead>
          <tr>
            <th>Symmetry G</th>
            <th>Classification H²(G,U(1))</th>
            <th>Physical System</th>
            <th>Edge Mode</th>
            <th>Detection Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ℤ₂</td>
            <td>ℤ₂</td>
            <td>Haldane phase (S=1)</td>
            <td>Spin-1/2 doublet</td>
            <td>String order, ESR</td>
          </tr>
          <tr>
            <td>ℤ_N</td>
            <td>ℤ_N</td>
            <td>Generalized cluster</td>
            <td>ℤ_N charge</td>
            <td>Generalized string order</td>
          </tr>
          <tr>
            <td>U(1)</td>
            <td>ℤ</td>
            <td>Integer quantum Hall</td>
            <td>Chiral boson</td>
            <td>Edge current</td>
          </tr>
          <tr>
            <td>SO(3)</td>
            <td>ℤ₂</td>
            <td>Haldane S=1</td>
            <td>Spin-1/2 at edge</td>
            <td>Neutron scattering</td>
          </tr>
          <tr>
            <td>ℤ₂×ℤ₂</td>
            <td>ℤ₂</td>
            <td>Cluster state</td>
            <td>ℤ₂×ℤ₂ projective</td>
            <td>Entanglement spectrum</td>
          </tr>
          <tr>
            <td>U(1)⋊ℤ₂^C</td>
            <td>ℤ</td>
            <td>Charge conjugation SPT</td>
            <td>Kramers doublet</td>
            <td>Tunneling spectroscopy</td>
          </tr>
          <tr>
            <td>ℤ₂^T (T²=-1)</td>
            <td>ℤ₂</td>
            <td>Kramers chain</td>
            <td>Kramers doublet</td>
            <td>Spin Hall conductance</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="comparison-box">
      <h3>2D Bosonic SPT Phases</h3>
      <table>
        <thead>
          <tr>
            <th>Symmetry G</th>
            <th>Classification H³(G,U(1))</th>
            <th>Physical System</th>
            <th>Edge Theory</th>
            <th>Material Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ℤ₂</td>
            <td>0 (trivial)</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>ℤ₂×ℤ₂</td>
            <td>ℤ₂</td>
            <td>2D CZX model</td>
            <td>1D cluster state</td>
            <td>Quantum simulator</td>
          </tr>
          <tr>
            <td>U(1)</td>
            <td>0 (trivial)</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>ℤ₂^T (T²=-1)</td>
            <td>ℤ₂</td>
            <td>Quantum spin Hall</td>
            <td>Helical edge states</td>
            <td>HgTe (d>d_c)</td>
          </tr>
          <tr>
            <td>U(1)⋊ℤ₂^T</td>
            <td>ℤ</td>
            <td>QSH with U(1)</td>
            <td>Chiral + helical</td>
            <td>InAs/GaSb</td>
          </tr>
          <tr>
            <td>ℤ₂^T×ℤ₂^M</td>
            <td>(ℤ₂)²</td>
            <td>Crystalline TI</td>
            <td>Mirror-protected</td>
            <td>SnTe</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="comparison-box">
      <h3>3D Bosonic SPT Phases</h3>
      <table>
        <thead>
          <tr>
            <th>Symmetry G</th>
            <th>Classification</th>
            <th>Invariants</th>
            <th>Physical System</th>
            <th>Surface States</th>
            <th>Material</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ℤ₂^T (T²=-1)</td>
            <td>(ℤ₂)⁴</td>
            <td>(ν₀; ν₁ν₂ν₃)</td>
            <td>3D TI</td>
            <td>Dirac cone</td>
            <td>Bi₂Se₃, Bi₂Te₃</td>
          </tr>
          <tr>
            <td>U(1)⋊ℤ₂^T</td>
            <td>ℤ</td>
            <td>Chern-Simons level</td>
            <td>Topological insulator</td>
            <td>2D Dirac fermion</td>
            <td>Bi₁₋ₓSbₓ</td>
          </tr>
          <tr>
            <td>Point group C_nv</td>
            <td>Various</td>
            <td>Crystalline invariants</td>
            <td>Topological crystalline</td>
            <td>Hinge/corner modes</td>
            <td>Pb₁₋ₓSnₓTe</td>
          </tr>
          <tr>
            <td>ℤ₂×ℤ₂×ℤ₂</td>
            <td>ℤ₂</td>
            <td>Cubic invariant</td>
            <td>3D cluster state</td>
            <td>2D cluster surface</td>
            <td>Quantum simulator</td>
          </tr>
        </tbody>
      </table>
      <p>
        Note: ν₀ is strong invariant, (ν₁,ν₂,ν₃) are weak invariants along three axes.
      </p>
    </div>

    <h2>General Cohomology Results</h2>

    <div class="info-box">
      <h3>Low-Degree Cohomology for Common Groups</h3>

      <h4>Cyclic Groups ℤ_N</h4>
      <div class="equation">
        H^n(ℤ_N, U(1)) = \begin{cases} ℤ_N & n \text{ even} \\ 0 & n \text{ odd} \end{cases}
      </div>

      <h4>Direct Product Groups</h4>
      <p>
        Künneth formula:
      </p>
      <div class="equation">
        H^n(G_1 × G_2, U(1)) = ⊕_{p+q=n} H^p(G_1,U(1)) ⊗ H^q(G_2,U(1))
      </div>

      <h4>Examples</h4>
      <ul>
        <li>H²(ℤ₂,U(1)) = ℤ₂ → 1D ℤ₂ SPT has 2 phases</li>
        <li>H²(ℤ₂×ℤ₂,U(1)) = ℤ₂ → 1D cluster state is nontrivial</li>
        <li>H²(U(1),U(1)) = ℤ → Integer quantum Hall</li>
        <li>H³(ℤ₂,U(1)) = 0 → No 2D ℤ₂ SPT (without translation)</li>
        <li>H³(ℤ₂×ℤ₂,U(1)) = ℤ₂ → 2D CZX model exists</li>
        <li>H⁴(ℤ₂^T,U(1)) = ℤ₂ → 3D strong TI</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Modified Cohomology for Anti-Unitary Symmetries</h4>
      <p>
        For time-reversal T with T² = (-1)^F (F = fermion parity):
      </p>
      <div class="equation">
        H^n_{ZT}(ℤ₂^T, U(1)) = \begin{cases} ℤ₂ & n = 0, 1, 2, 4 \mod 8 \\ 0 & \text{otherwise} \end{cases}
      </div>
      <p>
        This explains:
      </p>
      <ul>
        <li>H²(ℤ₂^T,U(1)) = ℤ₂ → 1D Kramers SPT</li>
        <li>H³(ℤ₂^T,U(1)) = ℤ₂ → 2D QSH</li>
        <li>H⁴(ℤ₂^T,U(1)) = ℤ₂ → 3D strong TI</li>
      </ul>
    </div>

    <h2>Key Physical Properties</h2>

    <div class="info-box">
      <h3>Universal Features of Bosonic SPT</h3>

      <h4>1. Bulk Properties</h4>
      <ul>
        <li><strong>Gapped:</strong> Energy gap Δ > 0 in thermodynamic limit</li>
        <li><strong>Unique ground state:</strong> On closed manifolds (torus, sphere)</li>
        <li><strong>Short-range entangled:</strong> Area-law entanglement S ∼ ∂A</li>
        <li><strong>No intrinsic topological order:</strong> No anyonic excitations</li>
        <li><strong>Symmetry-protected:</strong> Adiabatically connected to product state if G broken</li>
      </ul>

      <h4>2. Edge Properties</h4>
      <ul>
        <li><strong>Gapless or degenerate:</strong> Cannot be gapped without breaking G</li>
        <li><strong>Projective representation:</strong> Edge transforms as V_g V_h = ω(g,h) V_{gh}</li>
        <li><strong>Anomalous:</strong> Boundary theory cannot exist in isolation in d-1 dimensions</li>
        <li><strong>Bulk-boundary correspondence:</strong> Edge anomaly = bulk cohomology class</li>
      </ul>

      <h4>3. Entanglement Structure</h4>
      <ul>
        <li><strong>Li-Haldane correspondence:</strong> Entanglement spectrum ↔ edge spectrum</li>
        <li><strong>Topological entanglement entropy:</strong> S_EE = α·|∂A| - γ (γ = 0 for SPT)</li>
        <li><strong>Schmidt decomposition:</strong> Reveals projective virtual representation</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Comparison: SPT vs Other Phases</h4>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>SPT Phase</th>
            <th>Symmetry Breaking</th>
            <th>Topological Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ground state degeneracy</td>
            <td>Unique (closed)</td>
            <td>Degenerate</td>
            <td>Degenerate (torus)</td>
          </tr>
          <tr>
            <td>Symmetry</td>
            <td>Preserved</td>
            <td>Spontaneously broken</td>
            <td>May or may not break</td>
          </tr>
          <tr>
            <td>Edge modes</td>
            <td>Gapless/degenerate</td>
            <td>Goldstone modes</td>
            <td>Chiral or gapless</td>
          </tr>
          <tr>
            <td>Entanglement</td>
            <td>Short-range (SRE)</td>
            <td>Short-range</td>
            <td>Long-range (LRE)</td>
          </tr>
          <tr>
            <td>S_topo</td>
            <td>0</td>
            <td>0</td>
            <td>log(D), D=total quantum dimension</td>
          </tr>
          <tr>
            <td>Anyons</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Example</td>
            <td>Haldane phase</td>
            <td>Ferromagnet</td>
            <td>Fractional QH</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Detection and Characterization Methods</h2>

    <div class="info-box">
      <h3>Experimental Probes</h3>

      <h4>1. String Order Parameters</h4>
      <p>
        For 1D SPT with ℤ₂ symmetry:
      </p>
      <div class="equation">
        O_s = \lim_{|i-j|→∞} ⟨σ^z_i (∏_{k=i+1}^{j-1} e^{iπσ^x_k}) σ^z_j⟩
      </div>
      <ul>
        <li>Trivial phase: O_s = 0</li>
        <li>SPT phase: O_s ≠ 0 (e.g., O_s ≈ -0.374 for Haldane)</li>
      </ul>

      <h4>2. Entanglement Spectrum</h4>
      <p>
        Partition system A∪B, compute reduced density matrix ρ_A = Tr_B|ψ⟩⟨ψ|:
      </p>
      <div class="equation">
        ρ_A = ∑_α e^{-ξ_α} |α⟩⟨α|
      </div>
      <p>
        Entanglement spectrum {ξ_α}:
      </p>
      <ul>
        <li><strong>Trivial:</strong> Non-degenerate or product-state degeneracy</li>
        <li><strong>SPT:</strong> Degeneracy matching edge projective representation</li>
      </ul>

      <h4>3. Edge Spectroscopy</h4>
      <ul>
        <li><strong>ARPES:</strong> Maps surface electronic structure (TI)</li>
        <li><strong>STM:</strong> Visualizes edge modes spatially</li>
        <li><strong>Transport:</strong> Quantized conductance (QSH: G = 2e²/h)</li>
        <li><strong>Tunneling:</strong> Differential conductance reveals edge DOS</li>
      </ul>

      <h4>4. Bulk Probes</h4>
      <ul>
        <li><strong>Neutron scattering:</strong> Spin correlations (Haldane gap Δ ≈ 0.41J)</li>
        <li><strong>NMR/ESR:</strong> Local spin dynamics and relaxation</li>
        <li><strong>Specific heat:</strong> Exponential suppression C ∼ e^{-Δ/T}</li>
        <li><strong>Optical:</strong> Magneto-optical response (QSH, TI)</li>
      </ul>

      <h4>5. Numerical Methods</h4>
      <ul>
        <li><strong>DMRG:</strong> Computes ground state, string order, entanglement spectrum</li>
        <li><strong>Exact diagonalization:</strong> Small systems, full spectrum</li>
        <li><strong>Monte Carlo:</strong> Statistical sampling (sign problem for fermions)</li>
        <li><strong>Tensor networks:</strong> MPS/PEPS directly encode SPT structure</li>
      </ul>
    </div>

    <h2>Fundamental Theorems</h2>

    <div class="highlight-box">
      <h4>Theorem 1: Classification by Group Cohomology</h4>
      <p>
        <strong>Statement:</strong> Bosonic SPT phases in d dimensions with on-site unitary symmetry G are in one-to-one correspondence with elements of H^{d+1}(G, U(1)).
      </p>
      <p>
        <strong>Proof sketch:</strong>
      </p>
      <ol>
        <li>Show MPS representation with projective virtual representation</li>
        <li>Cocycle ω(g,h) from projective rep: V_g V_h = ω(g,h) V_{gh}</li>
        <li>Coboundaries ω = dλ correspond to local gauge transformations → same phase</li>
        <li>Cohomology class [ω] ∈ H²(G,U(1)) = Z²(G)/B²(G) labels distinct SPT phases</li>
      </ol>
    </div>

    <div class="highlight-box">
      <h4>Theorem 2: Bulk-Boundary Correspondence</h4>
      <p>
        <strong>Statement:</strong> A d-dimensional SPT with bulk cocycle [ω] ∈ H^{d+1}(G,U(1)) has a (d-1)-dimensional boundary carrying an anomalous G-symmetric theory with anomaly [ω].
      </p>
      <p>
        <strong>Consequences:</strong>
      </p>
      <ul>
        <li>Boundary cannot be gapped without breaking G</li>
        <li>Boundary theory cannot exist in isolation in (d-1) dimensions</li>
        <li>Anomaly "flows in" from bulk</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Theorem 3: Stability to Symmetric Perturbations</h4>
      <p>
        <strong>Statement:</strong> An SPT phase is stable to symmetry-preserving perturbations. For Hamiltonian H = H₀ + λV with [V,G]=0, the system remains in the same SPT phase for |λ| < λ_c.
      </p>
      <p>
        <strong>Consequence:</strong> SPT phases form robust universality classes, not fine-tuned points.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Theorem 4: Weak vs Strong Decomposition</h4>
      <p>
        <strong>Statement:</strong> For SPT with symmetry G × ℤ^d, the Künneth formula gives:
      </p>
      <div class="equation">
        H^{d+1}(G × ℤ^d, U(1)) = ⊕_{p+q=d+1} H^p(G,U(1)) ⊗ H^q(ℤ^d,U(1))
      </div>
      <p>
        <strong>Interpretation:</strong>
      </p>
      <ul>
        <li>p=d+1, q=0: Strong SPT (intrinsic d-dimensional)</li>
        <li>p<d+1, q>0: Weak SPT (layered lower-dimensional)</li>
      </ul>
    </div>

    <h2>Physical Realizations</h2>

    <div class="info-box">
      <h3>Material Realizations</h3>

      <h4>1D SPT</h4>
      <ul>
        <li><strong>NENP (Ni(C₂H₈N₂)₂NO₂ClO₄):</strong> Haldane phase, S=1 chain, Δ ≈ 0.41J</li>
        <li><strong>Y₂BaNiO₅:</strong> Quasi-1D S=1, gap observed via neutron scattering</li>
        <li><strong>NINO:</strong> Another Haldane material with edge spins</li>
      </ul>

      <h4>2D SPT (Quantum Spin Hall)</h4>
      <ul>
        <li><strong>HgTe quantum wells:</strong> d > d_c ≈ 6.3nm → QSH, helical edges</li>
        <li><strong>InAs/GaSb:</strong> Type-II band alignment, inverted regime → QSH</li>
        <li><strong>WTe₂:</strong> Monolayer, room-temperature QSH candidate</li>
      </ul>

      <h4>3D SPT (Topological Insulators)</h4>
      <ul>
        <li><strong>Bi₂Se₃:</strong> Prototypical strong TI, gap ~0.3eV, single Dirac cone</li>
        <li><strong>Bi₂Te₃:</strong> Similar to Bi₂Se₃, easier to synthesize</li>
        <li><strong>Sb₂Te₃:</strong> Related material with Dirac surface states</li>
        <li><strong>Bi₁₋ₓSbₓ:</strong> First TI discovered, complex Fermi surface</li>
      </ul>

      <h4>Crystalline SPT</h4>
      <ul>
        <li><strong>SnTe:</strong> Topological crystalline insulator, mirror-protected</li>
        <li><strong>Pb₁₋ₓSnₓTe:</strong> Tunable by composition x</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Quantum Simulator Realizations</h4>

      <h4>Cold Atoms</h4>
      <ul>
        <li><strong>Optical lattices:</strong> Simulate Haldane chain with bosonic ⁸⁷Rb</li>
        <li><strong>Spin-orbit coupling:</strong> Engineer synthetic gauge fields for QSH</li>
        <li><strong>Floquet engineering:</strong> Periodically driven to realize topological bands</li>
      </ul>

      <h4>Trapped Ions</h4>
      <ul>
        <li><strong>Linear chains:</strong> Up to 50+ ions, programmable Hamiltonians</li>
        <li><strong>Cluster states:</strong> Prepare SPT states for MBQC</li>
        <li><strong>Topological pumping:</strong> Adiabatic transport demonstrates SPT</li>
      </ul>

      <h4>Superconducting Circuits</h4>
      <ul>
        <li><strong>Transmon arrays:</strong> Google Sycamore (53 qubits), IBM (127+ qubits)</li>
        <li><strong>SPT simulation:</strong> Prepare cluster-type states, measure string order</li>
        <li><strong>Error correction:</strong> SPT-inspired codes (e.g., surface code)</li>
      </ul>

      <h4>Photonic Systems</h4>
      <ul>
        <li><strong>Integrated photonics:</strong> Waveguide arrays simulate 1D/2D models</li>
        <li><strong>Topological photonics:</strong> Edge states robust to disorder</li>
        <li><strong>MBQC:</strong> Photonic cluster states for quantum computation</li>
      </ul>
    </div>

    <h2>Summary: The SPT Framework</h2>

    <div class="highlight-box">
      <h4>Core Principles</h4>
      <ol>
        <li><strong>Classification:</strong> Group cohomology H^{d+1}(G,U(1)) provides complete classification of d-dimensional bosonic SPT with symmetry G.</li>
        <li><strong>Bulk-boundary:</strong> Nontrivial bulk cohomology class → anomalous boundary theory with same class.</li>
        <li><strong>Projective representations:</strong> Edge transforms projectively; cannot exist in isolation.</li>
        <li><strong>MPS/PEPS:</strong> Virtual indices carry projective representation, directly encoding SPT.</li>
        <li><strong>Detection:</strong> String order, entanglement spectrum, edge spectroscopy uniquely identify SPT phases.</li>
        <li><strong>Stability:</strong> Robust to symmetric perturbations, fragile to symmetry-breaking.</li>
        <li><strong>Weak vs strong:</strong> Translation adds layered phases; Künneth formula decomposes them.</li>
      </ol>
    </div>

    <div class="info-box">
      <h3>Remaining Questions and Future Directions</h3>
      <ul>
        <li><strong>Interacting fermions:</strong> Beyond free fermion classification (cobordism theory)</li>
        <li><strong>Floquet SPT:</strong> Periodically driven systems with dynamical protection</li>
        <li><strong>Higher-order SPT:</strong> Corner/hinge modes in crystalline systems</li>
        <li><strong>Measurement-based QC:</strong> Exploit SPT (cluster states) for quantum computation</li>
        <li><strong>Non-equilibrium SPT:</strong> Many-body localization, Lindbladian dynamics</li>
        <li><strong>Experimental exotic SPT:</strong> Realize and detect non-Abelian, higher-dimensional SPT</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Conceptual Legacy</h4>
      <p>
        The theory of bosonic SPT phases represents a triumph of modern condensed matter physics:
      </p>
      <ul>
        <li><strong>Mathematics → Physics:</strong> Abstract algebra (group cohomology) directly predicts physical phases</li>
        <li><strong>Unification:</strong> Haldane phase, topological insulators, cluster states—all SPT!</li>
        <li><strong>Beyond Landau:</strong> Symmetry need not break to create nontrivial phases</li>
        <li><strong>Quantum information:</strong> SPT states (cluster) enable new computation paradigms</li>
      </ul>
      <p>
        From Haldane's 1983 conjecture to today's comprehensive classification and experimental realizations, the SPT story continues to unfold—bridging topology, symmetry, and quantum information in profound ways.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_2_5'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
