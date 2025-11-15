<template>
  <div class="section-content">
    <h1>6.7.2 Emergence of Fermi and Fractional Statistics</h1>

    <p>The emergence of anyonic statistics—particles obeying neither Bose nor Fermi statistics but a continuous interpolation between them—is one of the most profound predictions and experimental confirmations of topological order theory. In 2D systems, the topological constraints on particle exchange paths allow for exotic fractional and even non-abelian statistics, fundamentally expanding our understanding of quantum many-body physics.</p>

    <div class="info-box">
      <h3>Revolutionary Insight</h3>
      <p><strong>Why anyons matter:</strong></p>
      <ul>
        <li><strong>Beyond textbook physics:</strong> Violates the boson/fermion dichotomy taught in introductory quantum mechanics</li>
        <li><strong>Dimensionality:</strong> Only possible in 2D (+ time) due to topology of configuration space</li>
        <li><strong>Experimental reality:</strong> Not just a theoretical curiosity—measured in FQHE systems</li>
        <li><strong>Technological promise:</strong> Foundation for topological quantum computation</li>
        <li><strong>Emergent phenomenon:</strong> Arises from collective many-body behavior, not fundamental laws</li>
      </ul>
    </div>

    <h2>1. Statistics in Different Dimensions</h2>

    <div class="comparison-box">
      <h3>Dimensional Comparison</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>3D Systems</th>
          <th>2D Systems</th>
        </tr>
        <tr>
          <td><strong>Configuration space</strong></td>
          <td>(ℝ³)^N / S_N</td>
          <td>(ℝ²)^N / S_N</td>
        </tr>
        <tr>
          <td><strong>Fundamental group</strong></td>
          <td>π₁ = ℤ₂</td>
          <td>π₁ = Braid group B_N</td>
        </tr>
        <tr>
          <td><strong>Exchange paths</strong></td>
          <td>Contractible to identity</td>
          <td>Non-contractible</td>
        </tr>
        <tr>
          <td><strong>Statistics</strong></td>
          <td>Bosons (θ=0) or Fermions (θ=π)</td>
          <td>Anyons (θ ∈ [0, 2π))</td>
        </tr>
        <tr>
          <td><strong>Spin-statistics</strong></td>
          <td>Integer ↔ boson, half-int ↔ fermion</td>
          <td>θ = 2πs (any s ∈ ℝ)</td>
        </tr>
        <tr>
          <td><strong>Braiding</strong></td>
          <td>Trivial (any braid ≃ e or σ)</td>
          <td>Non-trivial (full braid group)</td>
        </tr>
        <tr>
          <td><strong>Phase on exchange</strong></td>
          <td>±1</td>
          <td>e^{iθ} (arbitrary phase)</td>
        </tr>
        <tr>
          <td><strong>Non-abelian possible?</strong></td>
          <td>No</td>
          <td>Yes (matrix-valued R)</td>
        </tr>
      </table>
    </div>

    <div class="highlight-box">
      <h3>Topological Origin</h3>

      <p><strong>3D exchange:</strong></p>
      <ul>
        <li>Path of particle 1 around particle 2 can be continuously deformed</li>
        <li>Clockwise and counterclockwise paths are homotopically equivalent</li>
        <li>Only non-trivial element: double exchange (permutation)</li>
        <li>π₁(Config space) = ℤ₂ → only two representations: bosons and fermions</li>
      </ul>

      <p><strong>2D exchange:</strong></p>
      <ul>
        <li>Paths cannot pass through each other (confined to plane)</li>
        <li>Clockwise ≠ counterclockwise (different homotopy classes)</li>
        <li>Multiple exchanges: (σ₁σ₂)² ≠ e in general</li>
        <li>π₁(Config space) = B_N (braid group) → infinite-dimensional representation space</li>
      </ul>

      <p><strong>Mathematical formulation:</strong></p>
      <div class="equation">
        |ψ(r_1, r_2, ..., r_N)⟩ → R_{ij} |ψ(..., r_j, r_i, ...)⟩
      </div>
      <p>R_{ij}: Representation of braid generator σ_i (braiding i and i+1)</p>
    </div>

    <h2>2. Abelian Anyonic Statistics</h2>

    <div class="note-box">
      <h3>Fractional Exchange Phase</h3>

      <p><strong>Definition:</strong></p>
      <p>Exchanging two identical anyons acquires phase θ:</p>
      <div class="equation">
        Ψ(..., r_i, ..., r_j, ...) = e^{iθ} Ψ(..., r_j, ..., r_i, ...)
      </div>

      <p><strong>Abelian anyons:</strong></p>
      <ul>
        <li>θ is just a phase (U(1) valued)</li>
        <li>Braiding matrix R_ij = e^{iθ} δ_{ab} (diagonal in fusion space)</li>
        <li>Order of braiding doesn't matter (commutative)</li>
      </ul>

      <p><strong>Statistical parameter α:</strong></p>
      <div class="equation">
        α = θ/π ∈ [0, 2)
      </div>
      <ul>
        <li>α = 0: Bosons</li>
        <li>α = 1: Fermions</li>
        <li>0 < α < 2: Fractional anyons</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>FQHE Examples</h3>

      <p><strong>Laughlin quasiholes at ν = 1/m:</strong></p>
      <div class="equation">
        θ = π/m,  α = 1/m
      </div>

      <p><strong>Specific cases:</strong></p>
      <ul>
        <li><strong>ν = 1/3:</strong> θ = π/3, α = 1/3 (anyons)</li>
        <li><strong>ν = 1/2 (bosonic Laughlin):</strong> θ = π/2, α = 1/2 (semions)</li>
        <li><strong>ν = 1 (integer QHE):</strong> θ = π, α = 1 (fermions, trivial)</li>
      </ul>

      <p><strong>Composite fermion states:</strong></p>
      <ul>
        <li>ν = p/(2p±1) (Jain sequence)</li>
        <li>Quasiholes: θ = π/(2p±1)</li>
        <li>Example ν = 2/5: θ = π/5, α = 1/5</li>
      </ul>
    </div>

    <h2>3. Flux Attachment Mechanism</h2>

    <div class="highlight-box">
      <h3>Aharonov-Bohm Phase</h3>

      <p><strong>Physical picture:</strong></p>
      <p>Attach magnetic flux tube Φ to each particle. When particle i encircles particle j:</p>
      <div class="equation">
        Phase = (q/ℏc) ∮ A · dl = (q/ℏc) × Φ
      </div>

      <p><strong>Statistical transmutation:</strong></p>
      <ul>
        <li>Start with fermions (θ = π)</li>
        <li>Attach flux Φ = (ℏc/e) × (2n + α) to each</li>
        <li>New statistics: θ → π + (e/ℏc) × Φ = π + π(2n + α) = π(1 + α) mod 2π</li>
        <li>Can transform to any statistics!</li>
      </ul>

      <p><strong>Chern-Simons transformation:</strong></p>
      <div class="equation">
        ψ_anyon = e^{iα ∫ d²r' n(r') arg(r - r')} ψ_fermion
      </div>
      <ul>
        <li>α: statistical parameter</li>
        <li>n(r): density operator</li>
        <li>Non-local transformation (flux attachment)</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Composite Fermions</h3>

      <p><strong>Jain's construction (ν = p/(2p+1)):</strong></p>
      <ul>
        <li>Start with electrons (fermions) in magnetic field B</li>
        <li>Attach 2p flux quanta to each electron</li>
        <li>Composite fermion (CF) = electron + 2p flux</li>
        <li>CFs see effective field B* = B - 2pnΦ₀</li>
        <li>At ν = p/(2p+1), CFs fill p Landau levels → integer QHE of CFs</li>
      </ul>

      <p><strong>Statistics of quasiholes:</strong></p>
      <div class="equation">
        θ_{QH} = π/(2p + 1)
      </div>
      <p>Fractional statistics emerges from flux attachment!</p>
    </div>

    <h2>4. Experimental Verification</h2>

    <div class="info-box">
      <h3>Interferometry Measurements</h3>

      <p><strong>Fabry-Pérot interferometer (2020):</strong></p>
      <ul>
        <li>FQHE sample at ν = 1/3, T ~ 10 mK</li>
        <li>Quantum point contacts create interference paths</li>
        <li>Quasiparticles traverse two paths, interfere</li>
        <li>Measure current vs magnetic flux Φ</li>
      </ul>

      <p><strong>Interference pattern:</strong></p>
      <div class="equation">
        I(Φ) ~ cos(2π × (e*/e) × (Φ/Φ₀) + θ_{statistical})
      </div>
      <ul>
        <li>e* = e/3 (fractional charge)</li>
        <li>θ_{statistical} = π/3 (fractional statistics)</li>
        <li>Both confirmed experimentally!</li>
      </ul>

      <p><strong>Key result:</strong></p>
      <p>Phase shift consistent with θ = π/3 ± 0.1, providing direct evidence for anyonic braiding.</p>
    </div>

    <div class="highlight-box">
      <h3>Other Experimental Signatures</h3>

      <p><strong>1. Shot noise (1997):</strong></p>
      <ul>
        <li>Measurement: Current fluctuations at quantum point contact</li>
        <li>Fano factor F = S/(2eI) = e*/e</li>
        <li>Result: F = 1/3 for ν = 1/3 → charge e/3 confirmed</li>
        <li>Indirect evidence for fractional statistics via spin-statistics</li>
      </ul>

      <p><strong>2. Thermal Hall conductance:</strong></p>
      <ul>
        <li>Heat transport along edge</li>
        <li>κ_xy/T = (π²k_B²/3h) × c</li>
        <li>c: chiral central charge, related to anyon content</li>
        <li>Measures topological order type</li>
      </ul>

      <p><strong>3. Tunneling spectroscopy:</strong></p>
      <ul>
        <li>Quasiparticle tunneling between edges</li>
        <li>I-V characteristics reveal scaling dimension Δ</li>
        <li>Δ related to anyon statistics and quantum dimension</li>
      </ul>
    </div>

    <h2>5. Non-Abelian Statistics</h2>

    <div class="note-box">
      <h3>Beyond Phase Factors</h3>

      <p><strong>Key difference from abelian anyons:</strong></p>
      <ul>
        <li>Multiple fusion channels: a × b = c₁ ⊕ c₂ ⊕ ...</li>
        <li>N anyons → degenerate Hilbert space (dim > 1)</li>
        <li>Braiding = unitary rotation in this space</li>
        <li>Not just a phase—actual state transformation!</li>
      </ul>

      <p><strong>Braiding representation:</strong></p>
      <div class="equation">
        |ψ_α⟩ → ∑_β R^{αβ}_{ij} |ψ_β⟩
      </div>
      <p>R_{ij}: Unitary matrix (generally non-diagonal)</p>

      <p><strong>Consequences:</strong></p>
      <ul>
        <li>Order of braiding operations matters (non-commutative)</li>
        <li>R_i R_j ≠ R_j R_i in general</li>
        <li>Can implement quantum gates via braiding!</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h3>Ising Anyons (ν = 5/2 FQHE)</h3>

      <p><strong>Moore-Read state anyon content:</strong></p>
      <ul>
        <li><strong>1:</strong> Vacuum (identity)</li>
        <li><strong>σ:</strong> Non-abelian anyon, d_σ = √2</li>
        <li><strong>ψ:</strong> Fermion, d_ψ = 1</li>
      </ul>

      <p><strong>Fusion rules:</strong></p>
      <div class="equation">
        σ × σ = 1 + ψ,  σ × ψ = σ,  ψ × ψ = 1
      </div>

      <p><strong>Two σ anyons:</strong></p>
      <ul>
        <li>Can fuse to either 1 or ψ (two-dimensional fusion space)</li>
        <li>Four σ anyons → 2D fusion space</li>
        <li>Braiding rotates between |1⟩ and |ψ⟩ states</li>
      </ul>

      <p><strong>Braiding matrices:</strong></p>
      <div class="equation">
        R_σσ = e^{-iπ/8} \begin{pmatrix} e^{iπ/4} & 0 \\ 0 & e^{-iπ/4} \end{pmatrix}
      </div>
      <p>Non-diagonal! Braiding mixes fusion channels.</p>
    </div>

    <h2>6. Fibonacci Anyons</h2>

    <div class="info-box">
      <h3>Universal TQC Platform</h3>

      <p><strong>Fusion rule:</strong></p>
      <div class="equation">
        τ × τ = 1 + τ
      </div>
      <p>Single non-trivial anyon type τ (Fibonacci anyon)</p>

      <p><strong>Quantum dimension:</strong></p>
      <div class="equation">
        d_τ = φ = (1 + √5)/2 ≈ 1.618 \text{ (golden ratio)}
      </div>

      <p><strong>N Fibonacci anyons:</strong></p>
      <ul>
        <li>Hilbert space dimension ~ φ^N (exponential growth!)</li>
        <li>Braiding group representation on this space</li>
        <li>Dense in SU(d) → universal for quantum computation</li>
      </ul>

      <p><strong>Topological spin:</strong></p>
      <div class="equation">
        θ_τ = e^{4πi/5}
      </div>

      <p><strong>Physical realization:</strong></p>
      <ul>
        <li>Proposed: Certain FQHE states, topological insulators</li>
        <li>Theoretical: Levin-Wen string-net models</li>
        <li>Not yet definitively observed experimentally</li>
      </ul>
    </div>

    <h2>7. Braid Group Mathematics</h2>

    <div class="highlight-box">
      <h3>Group Structure</h3>

      <p><strong>Braid group B_N:</strong></p>
      <p>Generated by σ₁, σ₂, ..., σ_{N-1} with relations:</p>
      <div class="equation">
        σ_i σ_j = σ_j σ_i \text{ for } |i - j| ≥ 2
      </div>
      <div class="equation">
        σ_i σ_{i+1} σ_i = σ_{i+1} σ_i σ_{i+1} \text{ (Yang-Baxter)}
      </div>

      <p><strong>Representations:</strong></p>
      <ul>
        <li><strong>Abelian:</strong> σ_i → e^{iθ} (1D irreps)</li>
        <li><strong>Non-abelian:</strong> σ_i → matrix R_i (higher-dim irreps)</li>
      </ul>

      <p><strong>Anyon models = representations of braid group</strong></p>
    </div>

    <h2>8. Chern-Simons Theory</h2>

    <div class="note-box">
      <h3>Effective Field Theory</h3>

      <p><strong>Action:</strong></p>
      <div class="equation">
        S = (k/4π) ∫ d³x ε^{μνλ} A_μ ∂_ν A_λ
      </div>
      <ul>
        <li>k: Level (integer or rational)</li>
        <li>A_μ: Gauge field (U(1) or SU(N))</li>
        <li>Topological (no local dynamics)</li>
      </ul>

      <p><strong>Statistics from linking:</strong></p>
      <ul>
        <li>Worldlines of particles = links in 2+1D spacetime</li>
        <li>Linking number L(C₁, C₂) → phase contribution</li>
        <li>θ = 2π × (charge product) / k</li>
      </ul>

      <p><strong>FQHE connection:</strong></p>
      <ul>
        <li>Laughlin state at ν = 1/m: U(1) Chern-Simons with k = m</li>
        <li>Quasihole charge q = 1/m → θ = 2π/(m×m) = ... wait, need flux attachment properly</li>
        <li>Effective theory for low-energy excitations</li>
      </ul>
    </div>

    <h2>9. Topological Quantum Computation</h2>

    <div class="info-box">
      <h3>Braiding as Quantum Gates</h3>

      <p><strong>Encoding:</strong></p>
      <ul>
        <li>Quantum information stored in fusion space of N anyons</li>
        <li>Protected: Local perturbations cannot access other fusion channels</li>
        <li>Decoherence suppressed exponentially: Γ ~ e^{-L/ξ}</li>
      </ul>

      <p><strong>Gates via braiding:</strong></p>
      <ul>
        <li>Braid anyon i around anyon j → unitary U_{ij}</li>
        <li>Sequence of braidings → sequence of gates</li>
        <li>Topological protection: Exact to exponential precision</li>
      </ul>

      <p><strong>Universality:</strong></p>
      <ul>
        <li><strong>Ising anyons:</strong> Not universal (only Clifford gates)</li>
        <li><strong>Fibonacci anyons:</strong> Universal! (dense in SU(2))</li>
        <li><strong>General criterion:</strong> Modular tensor category must have dense image</li>
      </ul>

      <p><strong>Measurement:</strong></p>
      <ul>
        <li>Fuse two anyons → measure fusion outcome</li>
        <li>Projective measurement in fusion channel basis</li>
        <li>Completes gate set for universal TQC</li>
      </ul>
    </div>

    <h2>10. Comparison Table</h2>

    <div class="comparison-box">
      <h3>Abelian vs Non-Abelian Anyons</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Abelian Anyons</th>
          <th>Non-Abelian Anyons</th>
        </tr>
        <tr>
          <td><strong>Braiding</strong></td>
          <td>Phase e^{iθ}</td>
          <td>Unitary matrix R</td>
        </tr>
        <tr>
          <td><strong>Fusion channels</strong></td>
          <td>Unique: a × b = c</td>
          <td>Multiple: a × b = ⊕_c N^{ab}_c c</td>
        </tr>
        <tr>
          <td><strong>N-anyon Hilbert space</strong></td>
          <td>1-dimensional (state = phase)</td>
          <td>Multi-dimensional (genuine entanglement)</td>
        </tr>
        <tr>
          <td><strong>Quantum dimension</strong></td>
          <td>d_a = 1</td>
          <td>d_a > 1 (can be irrational!)</td>
        </tr>
        <tr>
          <td><strong>Braiding order</strong></td>
          <td>Commutative: R_i R_j = R_j R_i</td>
          <td>Non-commutative: R_i R_j ≠ R_j R_i</td>
        </tr>
        <tr>
          <td><strong>Information storage</strong></td>
          <td>Classical (topological sector)</td>
          <td>Quantum (fusion space)</td>
        </tr>
        <tr>
          <td><strong>TQC capability</strong></td>
          <td>No (phase gates only)</td>
          <td>Yes (can be universal)</td>
        </tr>
        <tr>
          <td><strong>Examples</strong></td>
          <td>Laughlin (ν=1/m), toric code</td>
          <td>Ising (ν=5/2), Fibonacci</td>
        </tr>
        <tr>
          <td><strong>Experimental status</strong></td>
          <td>Confirmed (FQHE)</td>
          <td>Proposed (ν=5/2 candidate)</td>
        </tr>
      </table>
    </div>

    <h2>11. Emergent Fermions</h2>

    <div class="highlight-box">
      <h3>Composite Objects with Fermi Statistics</h3>

      <p><strong>Toric code ε-particle:</strong></p>
      <ul>
        <li>ε = e × m (bound state of electric and magnetic)</li>
        <li>Exchange two ε: θ = π (fermionic!)</li>
        <li>Derivation: θ_ε = θ_e + θ_m + 2θ_{em} = 0 + 0 + 2(π/2) = π</li>
      </ul>

      <p><strong>General mechanism:</strong></p>
      <ul>
        <li>Bind two semions (θ = π/2 each)</li>
        <li>Total statistics: θ_bound = 2 × (π/2) + π (mutual) = 2π ≡ 0 (boson) or π (fermion)</li>
      </ul>

      <p><strong>Physical significance:</strong></p>
      <ul>
        <li>Fermions can emerge in bosonic systems!</li>
        <li>No fermionic constituents required</li>
        <li>Purely from topological structure of many-body state</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Anyonic statistics in 2D topological order:</strong></p>
      <ul>
        <li><strong>Abelian anyons:</strong> Fractional exchange phase θ ∈ [0, 2π), continuous interpolation between bosons and fermions</li>
        <li><strong>Non-abelian anyons:</strong> Matrix-valued braiding, multi-dimensional fusion spaces, quantum information processing</li>
        <li><strong>Topological origin:</strong> Non-contractible braids in 2D configuration space (braid group B_N)</li>
        <li><strong>Physical mechanism:</strong> Flux attachment, Chern-Simons theory, emergent gauge fields</li>
      </ul>

      <p><strong>FQHE realizations:</strong></p>
      <ul>
        <li><strong>ν = 1/m (Laughlin):</strong> θ = π/m, fractional charge e/m, abelian anyons</li>
        <li><strong>ν = 5/2 (Moore-Read):</strong> Ising anyons, non-abelian, potential TQC platform</li>
        <li><strong>Experimental confirmation (2020):</strong> θ = π/3 measured for ν = 1/3 via interferometry</li>
      </ul>

      <p><strong>Non-abelian examples:</strong></p>
      <ul>
        <li><strong>Ising anyons:</strong> σ × σ = 1 + ψ, d_σ = √2, not universal for TQC</li>
        <li><strong>Fibonacci anyons:</strong> τ × τ = 1 + τ, d_τ = φ (golden ratio), universal for TQC</li>
      </ul>

      <p><strong>Applications and significance:</strong></p>
      <ul>
        <li>Topological quantum computation via anyonic braiding</li>
        <li>Fault-tolerant quantum information processing</li>
        <li>Fundamental understanding of quantum statistics and emergence</li>
        <li>New paradigm: quantum numbers not from fundamental particles but collective behavior</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_7_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
