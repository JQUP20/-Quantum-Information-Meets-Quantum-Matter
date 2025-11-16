<template>
  <div class="section-content">
    <h1>7.5.2 Universality Classes of Symmetry-Breaking Order</h1>

    <div class="info-box">
      <h3>Revisiting Landau from a Modern Perspective</h3>
      <p>Symmetry-breaking phases, while successfully explained by the Landau paradigm, can now be understood more deeply through the lens of <strong>quantum information and local unitary equivalence</strong>. This modern perspective reveals that symmetry-breaking order is actually a special case within the broader classification of quantum phases, and clarifies when and why the Landau approach works—and when it doesn't.</p>
    </div>

    <h2>Symmetry Breaking in the Classification Hierarchy</h2>

    <h3>Where Does Symmetry Breaking Fit?</h3>

    <div class="highlight-box">
      <h3>Position in the Classification Scheme</h3>
      <p>Symmetry-breaking phases occupy a specific niche:</p>
      <ul>
        <li><strong>Entanglement:</strong> Typically short-range entangled (SRE)</li>
        <li><strong>Symmetry:</strong> Ground state breaks a global symmetry G → H (subgroup)</li>
        <li><strong>Degeneracy:</strong> |G/H| degenerate ground states (related by symmetry)</li>
        <li><strong>Order parameter:</strong> Local observable ⟨φ⟩ ≠ 0 that transforms under G</li>
      </ul>

      <p><strong>Key insight:</strong> Symmetry-breaking phases are <strong>not</strong> fundamentally different from trivial phases from an entanglement perspective—they can often be related by local unitaries that break the symmetry.</p>
    </div>

    <div class="comparison-box">
      <h3>Symmetry Breaking vs Other Orders</h3>
      <table class="comparison-table">
        <tr>
          <th>Feature</th>
          <th>Trivial (SRE)</th>
          <th>Symmetry Breaking</th>
          <th>SPT (SRE)</th>
          <th>Topological Order (LRE)</th>
        </tr>
        <tr>
          <td><strong>Symmetry of ground state</strong></td>
          <td>Same as H</td>
          <td>Broken: G → H</td>
          <td>Same as H</td>
          <td>Same as H (typically)</td>
        </tr>
        <tr>
          <td><strong>Local order parameter</strong></td>
          <td>No</td>
          <td>Yes: ⟨φ⟩ ≠ 0</td>
          <td>No (may have non-local)</td>
          <td>No</td>
        </tr>
        <tr>
          <td><strong>Entanglement</strong></td>
          <td>SRE (trivial)</td>
          <td>SRE</td>
          <td>SRE (non-trivial)</td>
          <td>LRE</td>
        </tr>
        <tr>
          <td><strong>Ground state degeneracy</strong></td>
          <td>Unique</td>
          <td>|G/H| (symmetry-related)</td>
          <td>Unique (per sector)</td>
          <td>Topological (depends on manifold)</td>
        </tr>
        <tr>
          <td><strong>Excitations</strong></td>
          <td>Gapped quasiparticles</td>
          <td>Goldstone modes (if continuous) + gapped</td>
          <td>Gapped, symmetry-constrained</td>
          <td>Anyons</td>
        </tr>
        <tr>
          <td><strong>LU equivalence to product state</strong></td>
          <td>Yes</td>
          <td>Yes (if symmetry can be broken)</td>
          <td>No (requires symmetry)</td>
          <td>No (fundamentally different)</td>
        </tr>
      </table>
    </div>

    <h2>Landau-Ginzburg-Wilson Framework Revisited</h2>

    <h3>The Landau Free Energy</h3>

    <p>For a symmetry-breaking phase transition, Landau theory expands the free energy in powers of the order parameter φ:</p>

    <div class="equation">
      F[φ] = ∫ d^d r [a(T) φ² + b φ⁴ + c(∇φ)² + ...]
    </div>

    <p>where:</p>
    <ul>
      <li>φ = order parameter (e.g., magnetization for ferromagnet)</li>
      <li>a(T) = r₀(T - T_c) changes sign at critical temperature T_c</li>
      <li>b > 0 ensures stability</li>
      <li>c > 0 penalizes spatial variations</li>
    </ul>

    <div class="highlight-box">
      <h3>Landau Predictions</h3>
      <ul>
        <li><strong>Order parameter:</strong> ⟨φ⟩ ~ (T_c - T)^β for T < T_c (mean field: β = 1/2)</li>
        <li><strong>Correlation length:</strong> ξ ~ |T - T_c|^{-ν} (mean field: ν = 1/2)</li>
        <li><strong>Susceptibility:</strong> χ ~ |T - T_c|^{-γ} (mean field: γ = 1)</li>
        <li><strong>Specific heat:</strong> C ~ |T - T_c|^{-α} (mean field: α = 0, discontinuity)</li>
      </ul>

      <p><strong>Success:</strong> Qualitatively correct for many systems (ferromagnets, superconductors, liquid-gas)</p>
      <p><strong>Failure:</strong> Quantitative critical exponents often differ due to fluctuations beyond mean field</p>
    </div>

    <h3>When Does Landau Theory Work?</h3>

    <div class="info-box">
      <h3>Validity Conditions</h3>
      <ul>
        <li><strong>Upper critical dimension:</strong> d > d_c (typically d_c = 4)
          <ul>
            <li>Above d_c: Mean field exponents are exact</li>
            <li>Below d_c: Fluctuations dominate, non-classical exponents</li>
          </ul>
        </li>
        <li><strong>Long-range interactions:</strong> Stabilize mean field behavior</li>
        <li><strong>Weak fluctuations:</strong> When (k_B T)/(energy gap) << 1</li>
        <li><strong>Classical phases:</strong> Thermal transitions (T > 0) vs quantum transitions (T = 0)</li>
      </ul>

      <p><strong>Quantum phases at T = 0:</strong> Landau theory is less applicable—quantum fluctuations and entanglement crucial!</p>
    </div>

    <h2>Classification by Symmetry Group</h2>

    <h3>Broken Symmetry Universality Classes</h3>

    <p>Different symmetry-breaking patterns define different universality classes:</p>

    <div class="comparison-box">
      <h3>Common Symmetry-Breaking Patterns</h3>
      <table class="comparison-table">
        <tr>
          <th>System</th>
          <th>Symmetry G → H</th>
          <th>Order Parameter</th>
          <th>Degeneracy</th>
          <th>Goldstone Modes</th>
        </tr>
        <tr>
          <td><strong>Ising ferromagnet</strong></td>
          <td>Z₂ → 1</td>
          <td>M (scalar magnetization)</td>
          <td>2-fold (↑ or ↓)</td>
          <td>0 (discrete)</td>
        </tr>
        <tr>
          <td><strong>XY model</strong></td>
          <td>U(1) → 1</td>
          <td>M⃗ = (M_x, M_y) (2D vector)</td>
          <td>Continuous (U(1) manifold)</td>
          <td>1 (spin wave)</td>
        </tr>
        <tr>
          <td><strong>Heisenberg ferromagnet</strong></td>
          <td>SO(3) → SO(2)</td>
          <td>M⃗ = (M_x, M_y, M_z) (3D vector)</td>
          <td>S² sphere</td>
          <td>2 (two spin wave polarizations)</td>
        </tr>
        <tr>
          <td><strong>Nematic liquid crystal</strong></td>
          <td>SO(3) → D_{∞h}</td>
          <td>Q_{ij} (traceless symmetric tensor)</td>
          <td>RP² (projective plane)</td>
          <td>2</td>
        </tr>
        <tr>
          <td><strong>BCS superconductor</strong></td>
          <td>U(1) → 1</td>
          <td>Δ = |Δ|e^{iθ} (complex gap)</td>
          <td>U(1) (gauge broken)</td>
          <td>1 (phase/Nambu-Goldstone)</td>
        </tr>
        <tr>
          <td><strong>Antiferromagnet (bipartite)</strong></td>
          <td>SO(3)×Z₂ → SO(2)</td>
          <td>Staggered M⃗_s (alternating)</td>
          <td>S² / Z₂</td>
          <td>2</td>
        </tr>
      </table>
    </div>

    <h3>Goldstone's Theorem</h3>

    <p>For continuous symmetry breaking G → H:</p>

    <div class="highlight-box">
      <h3>Goldstone Theorem</h3>
      <p>The spontaneous breaking of a continuous global symmetry results in <strong>massless (gapless) excitations</strong> (Goldstone bosons) with dispersion:</p>
      <div class="equation">
        ω(k) ~ c|k| (type I) or ω(k) ~ k² (type II)
      </div>

      <p><strong>Number of Goldstone modes:</strong></p>
      <div class="equation">
        n_G = dim(G) - dim(H)
      </div>

      <p><strong>Examples:</strong></p>
      <ul>
        <li>Ferromagnet SO(3) → SO(2): n_G = 3 - 2 = 2 spin waves (magnons)</li>
        <li>Superconductor U(1) → 1: n_G = 1 (but gapped by Anderson-Higgs in charged system)</li>
        <li>Pion in QCD: Chiral symmetry breaking SU(2)_L × SU(2)_R → SU(2)_V</li>
      </ul>
    </div>

    <h2>Modern Perspective: Local Unitaries and Symmetry</h2>

    <h3>Symmetry-Respecting vs Symmetry-Breaking LU</h3>

    <div class="highlight-box">
      <h3>Key Distinction</h3>
      <p>When considering local unitary equivalence, we must specify whether symmetry is preserved:</p>
      <ul>
        <li><strong>Symmetric LU:</strong> U commutes with symmetry generators [U, g] = 0 for all g ∈ G
          <ul>
            <li>Preserves symmetry-breaking pattern</li>
            <li>Phases with different G → H cannot be connected</li>
          </ul>
        </li>
        <li><strong>Arbitrary LU:</strong> U may break symmetry
          <ul>
            <li>Can connect symmetry-breaking to trivial phase</li>
            <li>Example: Apply uniform field to remove ferromagnetic order</li>
          </ul>
        </li>
      </ul>

      <p><strong>Implication:</strong> Whether two symmetry-breaking phases are "the same" depends on whether we require symmetry preservation!</p>
    </div>

    <h3>Example: Ising Ferromagnet vs Paramagnet</h3>

    <p>Consider:</p>
    <ul>
      <li><strong>Ferromagnet:</strong> |FM⟩ = |↑↑↑···↑⟩ (Z₂ broken)</li>
      <li><strong>Paramagnet:</strong> |PM⟩ = ⊗_i |→⟩_i (Z₂ preserved)</li>
    </ul>

    <div class="equation">
      Under Z₂-symmetric LU: |FM⟩ and |PM⟩ are different phases
      Under arbitrary LU: |FM⟩ = (⊗_i σ^x_i) |PM⟩ (related by global rotation!)
    </div>

    <p><strong>Conclusion:</strong> From pure entanglement perspective (ignoring symmetry), both are trivial SRE phases. The distinction arises from <strong>symmetry considerations</strong>.</p>

    <h2>Universality Classes and Critical Exponents</h2>

    <h3>Renormalization Group Classification</h3>

    <p>Continuous phase transitions between symmetry-breaking phases are classified by:</p>

    <div class="info-box">
      <h3>Critical Universality Class</h3>
      <p>Determined by:</p>
      <ul>
        <li><strong>Spatial dimension:</strong> d</li>
        <li><strong>Order parameter dimension:</strong> n (e.g., n=1 Ising, n=2 XY, n=3 Heisenberg)</li>
        <li><strong>Symmetry group:</strong> G of the Hamiltonian</li>
        <li><strong>Range of interactions:</strong> Short-range, long-range, etc.</li>
      </ul>

      <p><strong>Critical exponents:</strong> Universal within a class, independent of microscopic details</p>
      <div class="equation">
        ξ ~ |t|^{-ν}, C ~ |t|^{-α}, M ~ |t|^β, χ ~ |t|^{-γ}
      </div>
      <p>where t = (T - T_c)/T_c is the reduced temperature.</p>
    </div>

    <h3>Examples of Critical Universality Classes</h3>

    <div class="comparison-box">
      <h3>Common Universality Classes (d=3)</h3>
      <table class="comparison-table">
        <tr>
          <th>Class</th>
          <th>n</th>
          <th>Symmetry</th>
          <th>ν</th>
          <th>β</th>
          <th>γ</th>
          <th>η</th>
        </tr>
        <tr>
          <td><strong>Ising (d=3)</strong></td>
          <td>1</td>
          <td>Z₂</td>
          <td>0.630</td>
          <td>0.326</td>
          <td>1.237</td>
          <td>0.036</td>
        </tr>
        <tr>
          <td><strong>XY (d=3)</strong></td>
          <td>2</td>
          <td>O(2)</td>
          <td>0.672</td>
          <td>0.345</td>
          <td>1.316</td>
          <td>0.038</td>
        </tr>
        <tr>
          <td><strong>Heisenberg (d=3)</strong></td>
          <td>3</td>
          <td>O(3)</td>
          <td>0.705</td>
          <td>0.365</td>
          <td>1.386</td>
          <td>0.035</td>
        </tr>
        <tr>
          <td><strong>Mean field (d>4)</strong></td>
          <td>any</td>
          <td>O(n)</td>
          <td>0.5</td>
          <td>0.5</td>
          <td>1.0</td>
          <td>0</td>
        </tr>
      </table>
    </div>

    <p><strong>d=2 special cases:</strong></p>
    <ul>
      <li><strong>Ising (d=2):</strong> Exactly solvable (Onsager), T_c = 2.269 J/k_B, ν = 1, β = 1/8</li>
      <li><strong>XY (d=2):</strong> Kosterlitz-Thouless transition (infinite order, exponential divergence of ξ)</li>
      <li><strong>Heisenberg (d=2):</strong> No finite-T transition (Mermin-Wagner theorem)</li>
    </ul>

    <h2>Quantum Phase Transitions in Symmetry-Breaking Systems</h2>

    <h3>Quantum Critical Points</h3>

    <p>At T = 0, tuning a parameter g can drive a quantum phase transition:</p>

    <div class="highlight-box">
      <h3>Example: Transverse Field Ising Model</h3>
      <div class="equation">
        H = -J ∑_⟨ij⟩ σ^z_i σ^z_j - h ∑_i σ^x_i
      </div>

      <p><strong>Phases:</strong></p>
      <ul>
        <li>h/J << 1: Ferromagnetic (Z₂ broken), ⟨σ^z⟩ ≠ 0</li>
        <li>h/J >> 1: Paramagnetic (Z₂ preserved), ⟨σ^z⟩ = 0, ⟨σ^x⟩ ≠ 0</li>
        <li>h/J = h_c: Quantum critical point</li>
      </ul>

      <p><strong>Critical behavior (d=1):</strong></p>
      <ul>
        <li>Maps to 2D classical Ising (imaginary time = extra dimension)</li>
        <li>Correlation length: ξ ~ |h - h_c|^{-ν} with ν = 1</li>
        <li>Dynamical exponent: z = 1 (ω ~ k)</li>
        <li>CFT at critical point: c = 1/2</li>
      </ul>
    </div>

    <h3>Scaling Theory at Quantum Criticality</h3>

    <p>Near a quantum critical point (QCP), observables scale as:</p>

    <div class="equation">
      O(δg, T, ω, k) = b^{-x_O} O(δg b^{1/ν}, T b^z, ω b^z, k b)
    </div>

    <p>where:</p>
    <ul>
      <li>δg = g - g_c (distance from QCP)</li>
      <li>z = dynamical exponent (relates space and time)</li>
      <li>ν = correlation length exponent</li>
      <li>x_O = scaling dimension of observable O</li>
    </ul>

    <h2>Limitations of Symmetry-Breaking Classification</h2>

    <h3>What Landau Misses</h3>

    <div class="note-box">
      <h4>Beyond Landau</h4>
      <ul>
        <li><strong>Topological phases:</strong> No local order parameter (FQHE, topological insulators)</li>
        <li><strong>Deconfined quantum criticality:</strong> QCP not described by Landau-Ginzburg
          <ul>
            <li>Example: Néel to VBS transition with emergent U(1) gauge field</li>
          </ul>
        </li>
        <li><strong>Quantum liquids:</strong> Gapped but no symmetry breaking (spin liquids)</li>
        <li><strong>Many-body localization:</strong> Phases without thermalization</li>
        <li><strong>Symmetry-protected topological:</strong> Non-trivial even without broken symmetry</li>
      </ul>
    </div>

    <h3>Example: Deconfined Quantum Critical Point</h3>

    <p>Consider a 2D square lattice spin-1/2 system transitioning between:</p>

    <ul>
      <li><strong>Néel antiferromagnet:</strong> SO(3) → SO(2) (broken rotation)</li>
      <li><strong>Valence bond solid (VBS):</strong> Lattice rotation Z₄ broken</li>
    </ul>

    <p>Landau-Ginzburg predicts first-order transition (two unrelated order parameters). Instead:</p>

    <div class="highlight-box">
      <h3>Deconfined Criticality</h3>
      <ul>
        <li><strong>Direct continuous transition:</strong> No intermediate phase</li>
        <li><strong>Emergent gauge field:</strong> Non-compact CP¹ model at critical point</li>
        <li><strong>Fractionalized excitations:</strong> Spinons (S=1/2) at QCP</li>
        <li><strong>Enlarged symmetry:</strong> Emergent SO(5) (Néel + VBS unite) or U(1)</li>
      </ul>

      <p><strong>Significance:</strong> Demonstrates fundamentally new quantum criticality beyond Landau paradigm</p>
    </div>

    <h2>Interplay with Topological and SPT Phases</h2>

    <h3>Symmetry Breaking + Topological Order</h3>

    <p>Some phases exhibit both phenomena:</p>

    <div class="info-box">
      <h3>Symmetry-Enriched Topological (SET) Phases</h3>
      <ul>
        <li><strong>Definition:</strong> Topological order (LRE) with global symmetry G</li>
        <li><strong>Symmetry fractionalization:</strong> Anyons carry fractional quantum numbers
          <ul>
            <li>Example: ν = 1/3 FQHE with spin—quasiparticles carry spin-1/6</li>
          </ul>
        </li>
        <li><strong>Spontaneous breaking in SET:</strong>
          <ul>
            <li>Can break symmetry while preserving topological order</li>
            <li>Example: Chiral spin liquid with broken time-reversal</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Symmetry Breaking at Edge of SPT</h3>

    <p>SPT edge states can break symmetry:</p>

    <ul>
      <li><strong>1D SPT edge:</strong> Dangling spins can spontaneously polarize</li>
      <li><strong>2D TI surface:</strong> Can gap out via magnetization (breaks time-reversal)</li>
      <li><strong>Consequence:</strong> Bulk remains SPT but edge is trivially gapped</li>
    </ul>

    <h2>Experimental Probes</h2>

    <h3>Measuring Symmetry-Breaking Order</h3>

    <div class="comparison-box">
      <h3>Experimental Signatures</h3>
      <table class="comparison-table">
        <tr>
          <th>Observable</th>
          <th>Method</th>
          <th>What It Reveals</th>
        </tr>
        <tr>
          <td><strong>Order parameter ⟨φ⟩</strong></td>
          <td>Direct measurement (magnetization, polarization, etc.)</td>
          <td>Broken symmetry, phase identity</td>
        </tr>
        <tr>
          <td><strong>Structure factor S(q)</strong></td>
          <td>Neutron/X-ray diffraction</td>
          <td>Long-range order, Bragg peaks</td>
        </tr>
        <tr>
          <td><strong>Specific heat C(T)</strong></td>
          <td>Calorimetry</td>
          <td>Critical exponent α, transition order</td>
        </tr>
        <tr>
          <td><strong>Susceptibility χ(T)</strong></td>
          <td>Response to conjugate field</td>
          <td>Critical exponent γ, fluctuations</td>
        </tr>
        <tr>
          <td><strong>Correlation length ξ(T)</strong></td>
          <td>Scattering, imaging</td>
          <td>Critical exponent ν, universality class</td>
        </tr>
        <tr>
          <td><strong>Goldstone modes</strong></td>
          <td>Inelastic scattering (magnons, phonons)</td>
          <td>Broken continuous symmetry</td>
        </tr>
      </table>
    </div>

    <h2>Modern Computational Tools</h2>

    <h3>Numerical Methods for Symmetry-Breaking Phases</h3>

    <ul>
      <li><strong>Monte Carlo:</strong> Efficient for bosons, classical systems (no sign problem)
        <ul>
          <li>Can simulate large systems at finite T</li>
          <li>Extract critical exponents via finite-size scaling</li>
        </ul>
      </li>
      <li><strong>DMRG/MPS:</strong> Ground states of 1D quantum systems
        <ul>
          <li>Can detect spontaneous symmetry breaking (edge effects)</li>
          <li>Infinite DMRG for thermodynamic limit</li>
        </ul>
      </li>
      <li><strong>Tensor networks (PEPS):</strong> 2D systems
        <ul>
          <li>Can represent symmetry-broken states efficiently</li>
          <li>Variational optimization finds ground states</li>
        </ul>
      </li>
      <li><strong>Conformal bootstrap:</strong> Critical points
        <ul>
          <li>Non-perturbative constraints on CFT data</li>
          <li>Determines critical exponents from consistency</li>
        </ul>
      </li>
    </ul>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h3>Key Takeaways</h3>
      <ul>
        <li><strong>Modern context:</strong> Symmetry-breaking phases are SRE states distinguished by broken symmetry G → H</li>
        <li><strong>Local unitaries:</strong> Symmetry-breaking phases can be trivial under arbitrary LU (if symmetry can be broken), but non-trivial under symmetric LU</li>
        <li><strong>Classification:</strong> By symmetry group G, breaking pattern G → H, and order parameter dimension n</li>
        <li><strong>Landau-Ginzburg:</strong> Successful for many symmetry-breaking transitions, but fails for topological phases and deconfined criticality</li>
        <li><strong>Goldstone theorem:</strong> Continuous symmetry breaking → gapless modes (number = dim G - dim H)</li>
        <li><strong>Critical universality:</strong> Transitions classified by (d, n, symmetry, interactions); universal critical exponents</li>
        <li><strong>Quantum phase transitions:</strong> T = 0 transitions driven by quantum fluctuations, d+1 dimensional classical analogy</li>
        <li><strong>Beyond Landau:</strong> Topological order, SPT, deconfined criticality require new frameworks</li>
        <li><strong>Interplay:</strong> Can combine symmetry breaking with topological order (SET phases)</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Looking Ahead</h3>
      <p>In §7.5.3, we'll explore <strong>stochastic local transformations</strong>—a further generalization of local unitaries that allows for probabilistic operations and measurements. This framework provides yet another perspective on distinguishing quantum phases, particularly relevant for understanding what can be achieved with finite-depth quantum circuits and LOCC (local operations and classical communication).</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_7_5_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
