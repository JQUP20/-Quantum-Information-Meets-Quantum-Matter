<template>
  <div class="section-content">
    <h1>5.2.3 Gap</h1>

    <p>The energy gap—the difference between ground state and first excited state energies—is one of the most fundamental concepts in quantum many-body physics. It determines whether a system can be excited thermally, controls response times, dictates correlation lengths, and fundamentally shapes the structure of entanglement.</p>

    <h2>Definition and Basic Properties</h2>

    <div class="highlight-box">
      <h3>Energy Gap</h3>

      <p><strong>Definition:</strong> For Hamiltonian H with eigenvalues E_0 ≤ E_1 ≤ E_2 ≤ ..., the gap is:</p>
      <div class="equation">
        Δ = E_1 - E_0
      </div>

      <p><strong>Spectral gap (thermodynamic limit):</strong></p>
      <div class="equation">
        Δ = lim_{N→∞} (E_1(N) - E_0(N))
      </div>

      <p><strong>Classification:</strong></p>
      <ul>
        <li><strong>Gapped:</strong> Δ > 0 (finite gap independent of system size)</li>
        <li><strong>Gapless:</strong> Δ → 0 as N → ∞</li>
        <li><strong>Asymptotically gapless:</strong> Δ ~ 1/N^α for some α > 0</li>
      </ul>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Energy cost to create lowest excitation</li>
        <li>Inverse of characteristic time scale: τ ~ ℏ/Δ</li>
        <li>Sets temperature scale: T* ~ Δ/k_B (below which quantum effects dominate)</li>
      </ul>
    </div>

    <div class="comparison-box">
      <h3>Gapped vs Gapless Systems</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Gapped (Δ > 0)</th>
          <th>Gapless (Δ → 0)</th>
        </tr>
        <tr>
          <td><strong>Excitation spectrum</strong></td>
          <td>Discrete at low energy</td>
          <td>Continuous (gapless modes)</td>
        </tr>
        <tr>
          <td><strong>Correlation length</strong></td>
          <td>Finite: ξ ~ v/Δ</td>
          <td>Infinite: ξ → ∞</td>
        </tr>
        <tr>
          <td><strong>Correlation decay</strong></td>
          <td>Exponential: e^{-r/ξ}</td>
          <td>Power-law: r^{-η}</td>
        </tr>
        <tr>
          <td><strong>Entanglement entropy</strong></td>
          <td>Area law: S ~ L^{d-1}</td>
          <td>Logarithmic: S ~ log L (1D CFT)</td>
        </tr>
        <tr>
          <td><strong>Ground state degeneracy</strong></td>
          <td>Possible (topological)</td>
          <td>Tower of states (Goldstone)</td>
        </tr>
        <tr>
          <td><strong>Response time</strong></td>
          <td>Finite: τ ~ ℏ/Δ</td>
          <td>Arbitrarily slow</td>
        </tr>
        <tr>
          <td><strong>Thermal stability</strong></td>
          <td>Stable for T ≪ Δ/k_B</td>
          <td>Always excited at T > 0</td>
        </tr>
        <tr>
          <td><strong>Examples</strong></td>
          <td>Toric code, AKLT, topological insulators</td>
          <td>Critical points, metals, Goldstone modes</td>
        </tr>
      </table>
    </div>

    <h2>Physical Origins of Gaps</h2>

    <div class="highlight-box">
      <h3>Mechanisms for Gap Opening</h3>

      <p><strong>1. Spontaneous symmetry breaking (SSB):</strong></p>
      <ul>
        <li><strong>Example:</strong> Ferromagnet below T_c</li>
        <li>Ground states: |↑↑...↑⟩, |↓↓...↓⟩ (degenerate)</li>
        <li>Excited states: Spin waves (magnons) with gap (in finite field)</li>
        <li><strong>Goldstone theorem:</strong> Continuous SSB → gapless modes (but lattice discretizes → small gap or pseudo-gap)</li>
      </ul>

      <p><strong>2. Topological order:</strong></p>
      <ul>
        <li><strong>Example:</strong> Toric code H = -Σ_v A_v - Σ_p B_p</li>
        <li>Ground state: 4-fold degenerate (on torus)</li>
        <li>Excitations: e (electric charge), m (magnetic flux), ε=e×m (fermion)</li>
        <li>Gap Δ = 2 (in units of coupling strength)</li>
        <li>Gap protects topological degeneracy</li>
      </ul>

      <p><strong>3. Band insulator (non-interacting):</strong></p>
      <ul>
        <li><strong>Example:</strong> Tight-binding model on lattice</li>
        <li>Filled bands separated from empty bands by gap</li>
        <li>Δ = E_{LUMO} - E_{HOMO}</li>
        <li>Topological vs trivial: Characterized by topological invariants (Chern number)</li>
      </ul>

      <p><strong>4. Mott insulator (strong correlations):</strong></p>
      <ul>
        <li><strong>Example:</strong> Hubbard model at half-filling, large U</li>
        <li>Gap Δ ~ U (charge gap due to strong repulsion)</li>
        <li>Spin sector may remain gapless (Heisenberg exchange J ~ t²/U)</li>
        <li>Charge-spin separation</li>
      </ul>

      <p><strong>5. Quantum phase transition:</strong></p>
      <ul>
        <li>Gap closes at critical point: Δ(g) → 0 as g → g_c</li>
        <li>Away from criticality: Δ(g) ~ |g - g_c|^{zν}</li>
        <li>z = dynamic exponent, ν = correlation length exponent</li>
      </ul>
    </div>

    <h2>Gap and Correlation Length</h2>

    <div class="info-box">
      <h3>Fundamental Relationship</h3>

      <p><strong>Correlation length:</strong> For gapped systems, correlations decay exponentially:</p>
      <div class="equation">
        ⟨O_i O_j⟩ - ⟨O_i⟩⟨O_j⟩ ~ e^{-r_{ij}/ξ}
      </div>

      <p><strong>Gap-correlation relation:</strong></p>
      <div class="equation">
        ξ ~ v/Δ
      </div>
      <p>where v is characteristic velocity (e.g., speed of sound, light cone velocity)</p>

      <p><strong>Physical picture:</strong></p>
      <ul>
        <li>Gap Δ sets energy scale for excitations</li>
        <li>Velocity v sets space scale: distance traveled in time ℏ/Δ</li>
        <li>Length scale: ξ = v·(ℏ/Δ) ~ v/Δ</li>
        <li>Beyond ξ: System is locally in ground state</li>
      </ul>

      <p><strong>Consequences:</strong></p>
      <ul>
        <li>Small gap → long correlation length → slow decay</li>
        <li>Large gap → short ξ → rapid decorrelation</li>
        <li>Gapless: ξ → ∞ (power-law correlations)</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Example: Ising Model in Transverse Field</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = -J Σ_i σ_i^z σ_{i+1}^z - h Σ_i σ_i^x
      </div>

      <p><strong>Phase diagram (1D):</strong></p>
      <ul>
        <li><strong>h ≪ J:</strong> Ordered phase, gap Δ ~ h (small)</li>
        <li><strong>h = J:</strong> Critical point, Δ = 0 (conformal field theory)</li>
        <li><strong>h ≫ J:</strong> Disordered phase, gap Δ ~ J (small perturbation)</li>
      </ul>

      <p><strong>Correlation length:</strong></p>
      <div class="equation">
        ξ ~ |h - J|^{-ν},  ν = 1 (Ising universality)
      </div>

      <p><strong>Gap closing at critical point:</strong></p>
      <div class="equation">
        Δ ~ |h - J|^{zν},  z = 1 (no dynamic scaling)
      </div>
    </div>

    <h2>Gap and Entanglement: Area Law</h2>

    <div class="highlight-box">
      <h3>Hastings' Area Law Theorem (2007)</h3>

      <p><strong>Theorem:</strong> For 1D local Hamiltonians with gap Δ > 0:</p>
      <div class="equation">
        S(ρ_A) ≤ C(Δ, ||H||)
      </div>
      <p>Entanglement entropy is bounded by constant (independent of |A|!)</p>

      <p><strong>Generalization to d dimensions:</strong></p>
      <div class="equation">
        S(ρ_A) ≤ α(Δ, ||H||) |∂A|
      </div>
      <p>where |∂A| ~ L^{d-1} is boundary area</p>

      <p><strong>Physical intuition:</strong></p>
      <ul>
        <li>Gap Δ → correlation length ξ ~ v/Δ (finite)</li>
        <li>Bulk of A looks locally like ground state (product-like)</li>
        <li>Entanglement only at boundary (within ξ of ∂A)</li>
        <li>Boundary has area ~ L^{d-1} → S ~ L^{d-1}</li>
      </ul>

      <p><strong>Why gap is essential:</strong></p>
      <ul>
        <li>Gapless systems: ξ → ∞ → bulk correlations → volume law violations</li>
        <li>Critical systems (1D): S ~ (c/3) log L (logarithmic violation)</li>
        <li>Gap ensures exponential decay → area law</li>
      </ul>
    </div>

    <h2>Detecting and Measuring the Gap</h2>

    <div class="info-box">
      <h3>Experimental and Numerical Methods</h3>

      <p><strong>1. Spectroscopy:</strong></p>
      <ul>
        <li><strong>Optical absorption:</strong> ω_threshold = Δ/ℏ</li>
        <li><strong>Neutron scattering:</strong> Inelastic peaks at energy Δ</li>
        <li><strong>ARPES:</strong> Angle-resolved photoemission for band gap</li>
        <li><strong>STM:</strong> Scanning tunneling spectroscopy (dI/dV ∝ DOS)</li>
      </ul>

      <p><strong>2. Transport:</strong></p>
      <ul>
        <li><strong>Resistivity:</strong> ρ(T) ~ e^{Δ/(k_B T)} (activated behavior)</li>
        <li><strong>Hall conductance:</strong> σ_xy quantized in topological insulators</li>
        <li><strong>Thermal conductivity:</strong> κ → 0 as T → 0 for gapped systems</li>
      </ul>

      <p><strong>3. Thermodynamics:</strong></p>
      <ul>
        <li><strong>Specific heat:</strong> C_V ~ e^{-Δ/(k_B T)} (exponential suppression)</li>
        <li><strong>Susceptibility:</strong> χ ~ e^{-Δ/(k_B T)}</li>
        <li><strong>Compressibility:</strong> κ finite (incompressible for topological)</li>
      </ul>

      <p><strong>4. Numerical methods:</strong></p>
      <ul>
        <li><strong>Exact diagonalization:</strong> Direct spectrum calculation (small N)</li>
        <li><strong>DMRG:</strong> Target excited states, extrapolate Δ(N) → Δ(∞)</li>
        <li><strong>QMC:</strong> Finite-temperature, extract Δ from correlation decay</li>
        <li><strong>Tensor networks:</strong> Excited state optimization</li>
      </ul>
    </div>

    <h2>Gap Protection and Topological Order</h2>

    <div class="highlight-box">
      <h3>Robustness of the Gap</h3>

      <p><strong>Trivially gapped systems:</strong></p>
      <ul>
        <li>Gap can be closed by local perturbations</li>
        <li>Example: Product state |↑↑...↑⟩, add small -εΣσ^x → gap closes at ε ~ Δ</li>
        <li>No protection mechanism</li>
      </ul>

      <p><strong>Topologically protected gap:</strong></p>
      <ul>
        <li>Gap cannot be closed by <em>local</em> perturbations (respecting symmetries)</li>
        <li>Example: Toric code, gap stable against local noise</li>
        <li>Requires non-local operator to close gap (string operator)</li>
      </ul>

      <p><strong>Symmetry-protected gap:</strong></p>
      <ul>
        <li>Gap protected by symmetry (e.g., time-reversal, inversion)</li>
        <li>Example: Topological insulators (Z₂ topological invariant)</li>
        <li>Breaking symmetry can close gap</li>
      </ul>

      <p><strong>Many-body localization (MBL):</strong></p>
      <ul>
        <li>Disordered systems with all eigenstates area-law entangled</li>
        <li>Effective gap to thermalization (though spectrum continuous)</li>
        <li>Exhibits level repulsion → "mobility gap"</li>
      </ul>
    </div>

    <h2>Gap and Adiabatic Evolution</h2>

    <div class="note-box">
      <h3>Adiabatic Theorem and Quantum Computation</h3>

      <p><strong>Adiabatic theorem:</strong> For Hamiltonian H(t) with gap Δ(t) > 0:</p>
      <div class="equation">
        System stays in ground state if dH/dt ≪ Δ²/||dH/dt||
      </div>

      <p><strong>Evolution time:</strong></p>
      <div class="equation">
        T ~ ||dH/dt|| / Δ_{min}²
      </div>
      <p>where Δ_{min} = min_{t∈[0,T]} Δ(t)</p>

      <p><strong>Quantum annealing:</strong></p>
      <ul>
        <li>Initialize in ground state of H(0) (easy, large gap)</li>
        <li>Evolve adiabatically to H(1) (problem Hamiltonian)</li>
        <li>Gap closing → exponential slowdown</li>
        <li>First-order transitions: Δ → 0 → tunneling bottleneck</li>
      </ul>

      <p><strong>Adiabatic quantum computing:</strong></p>
      <ul>
        <li>Encode problem in H_f (ground state = solution)</li>
        <li>Requires gap Δ(t) > 0 throughout</li>
        <li>Speedup vs classical depends on gap scaling</li>
        <li>Example: Grover → Δ ~ 1/√N → quadratic speedup</li>
      </ul>
    </div>

    <h2>Open Problems and Research Directions</h2>

    <div class="info-box">
      <h3>Current Questions</h3>

      <p><strong>1. Gap persistence under perturbations:</strong></p>
      <ul>
        <li>When is gap stable to local perturbations?</li>
        <li>Classification of topologically protected gaps</li>
        <li>Role of symmetries and disorder</li>
      </ul>

      <p><strong>2. Computational complexity of gap estimation:</strong></p>
      <ul>
        <li>Determining if system is gapped: Undecidable in general (Cubitt et al. 2015)</li>
        <li>Approximating gap: QMA-hard</li>
        <li>Efficient algorithms for special cases (1D MPS?)</li>
      </ul>

      <p><strong>3. Gapless-to-gapped transitions:</strong></p>
      <ul>
        <li>How does gap open in phase transitions?</li>
        <li>Universal scaling: Δ ~ |g - g_c|^{zν}</li>
        <li>Connection to entanglement scaling</li>
      </ul>

      <p><strong>4. Many-body localization:</strong></p>
      <ul>
        <li>Is MBL stable in 2D and 3D?</li>
        <li>Mobility gap vs true spectral gap</li>
        <li>Thermalization breakdown and area law</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Definition:</strong> Gap Δ = E₁ - E₀ (energy to first excited state)</li>
        <li><strong>Correlation length:</strong> ξ ~ v/Δ (finite for gapped, infinite for gapless)</li>
        <li><strong>Area law:</strong> Gap → finite ξ → entanglement S ~ |∂A| (Hastings 2007)</li>
        <li><strong>Classification:</strong> Trivial, topological, symmetry-protected gaps</li>
        <li><strong>Detection:</strong> Spectroscopy, transport, thermodynamics, numerical methods</li>
        <li><strong>Applications:</strong> Quantum annealing, adiabatic computation, materials characterization</li>
        <li><strong>Gapped vs gapless:</strong> Fundamentally different physics (correlation decay, entanglement, thermal stability)</li>
      </ul>

      <p><strong>Central message:</strong> The gap is not just an energy scale—it controls correlation length, entanglement structure, response times, and computational tractability of quantum many-body systems.</p>

      <p><strong>Next:</strong> Section 5.2.4 explores correlation functions in detail, showing how the gap determines their spatial and temporal decay.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_2_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
