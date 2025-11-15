<template>
  <div class="section-content">
    <h1>5.2.2 Thermodynamic Limit and Universality</h1>

    <p>The thermodynamic limit—taking the number of particles N→∞ while keeping density fixed—is essential for understanding phase transitions, emergent phenomena, and universal behavior in quantum many-body systems. In this limit, fluctuations become negligible, symmetries can break spontaneously, and systems exhibit universal properties independent of microscopic details.</p>

    <h2>Thermodynamic Limit</h2>

    <div class="highlight-box">
      <h3>Definition and Procedure</h3>

      <p><strong>Thermodynamic limit:</strong> For d-dimensional system with linear size L:</p>
      <div class="equation">
        N = L^d → ∞,  while ρ = N/L^d = fixed (constant density)
      </div>

      <p><strong>Intensive vs extensive quantities:</strong></p>

      <p><strong>Extensive:</strong> Scale with system size N</p>
      <ul>
        <li>Total energy: E_total ~ N</li>
        <li>Total entropy: S_total ~ N</li>
        <li>Total magnetization: M_total ~ N</li>
      </ul>

      <p><strong>Intensive:</strong> Independent of N (per-site quantities)</p>
      <ul>
        <li>Energy density: e = E_total/N ~ O(1)</li>
        <li>Entropy density: s = S_total/N ~ O(1)</li>
        <li>Magnetization density: m = M_total/N ~ O(1)</li>
      </ul>

      <p><strong>Why take this limit?</strong></p>
      <ul>
        <li><strong>Phase transitions:</strong> Only occur in thermodynamic limit (finite systems have smooth crossovers)</li>
        <li><strong>Symmetry breaking:</strong> Requires N→∞ (finite N has unique ground state by tunneling)</li>
        <li><strong>Universality:</strong> Microscopic details wash out, universal behavior emerges</li>
        <li><strong>Simplification:</strong> Boundary effects negligible (volume/surface ~ L/L^{d-1} → ∞)</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Mathematical Formulation</h3>

      <p><strong>Free energy per site:</strong></p>
      <div class="equation">
        f = lim_{N→∞} F(N)/N = lim_{N→∞} -k_B T log Z(N)/N
      </div>

      <p><strong>Existence of limit:</strong> For local Hamiltonians, limit exists and is independent of boundary conditions</p>

      <p><strong>Correlation functions:</strong></p>
      <div class="equation">
        lim_{N→∞} ⟨O_i O_j⟩_N = G(r_{ij})
      </div>
      <p>Depends only on distance r_{ij}, not absolute positions (translation invariance)</p>

      <p><strong>Order parameters:</strong></p>
      <div class="equation">
        ϕ = lim_{N→∞} lim_{h→0} ⟨M⟩/N
      </div>
      <p>Non-zero ϕ signals spontaneous symmetry breaking (order of limits matters!)</p>
    </div>

    <h2>Finite-Size Scaling</h2>

    <div class="highlight-box">
      <h3>Approaching the Thermodynamic Limit</h3>

      <p><strong>Key idea:</strong> Near critical point, all lengths scale with correlation length ξ(T)</p>

      <p><strong>Finite-size scaling ansatz:</strong></p>
      <div class="equation">
        f(T, L) = L^{-d} F(L/ξ(T))
      </div>
      <p>where F is universal scaling function</p>

      <p><strong>At critical point (T = T_c, ξ → ∞):</strong></p>
      <div class="equation">
        f(T_c, L) ~ L^{-d}
      </div>

      <p><strong>Scaling of observables:</strong></p>
      <ul>
        <li><strong>Magnetization:</strong> m(T, L) ~ L^{-β/ν} M̃(L/ξ)</li>
        <li><strong>Susceptibility:</strong> χ(T, L) ~ L^{γ/ν} χ̃(L/ξ)</li>
        <li><strong>Correlation length:</strong> ξ(T) ~ |T - T_c|^{-ν}</li>
      </ul>

      <p><strong>Data collapse:</strong> Plot L^{β/ν} m vs L^{1/ν}(T - T_c) → all data collapse onto universal curve</p>
    </div>

    <div class="note-box">
      <h3>Example: 2D Ising Model</h3>

      <p><strong>Critical temperature:</strong> T_c/J = 2/log(1 + √2) ≈ 2.269</p>

      <p><strong>Critical exponents:</strong></p>
      <ul>
        <li>β = 1/8 (magnetization)</li>
        <li>γ = 7/4 (susceptibility)</li>
        <li>ν = 1 (correlation length)</li>
        <li>α = 0 (specific heat, logarithmic)</li>
      </ul>

      <p><strong>Finite-size effects:</strong></p>
      <ul>
        <li>Pseudo-critical temperature: T_c(L) = T_c + aL^{-1/ν} + ...</li>
        <li>Peak susceptibility: χ_max(L) ~ L^{γ/ν} = L^{7/4}</li>
        <li>Data collapse works beautifully (Onsager solution provides exact comparison)</li>
      </ul>
    </div>

    <h2>Universality</h2>

    <div class="highlight-box">
      <h3>Universal Behavior at Phase Transitions</h3>

      <p><strong>Universality hypothesis:</strong> Systems with same:</p>
      <ul>
        <li>Spatial dimension d</li>
        <li>Order parameter symmetry</li>
        <li>Range of interactions</li>
      </ul>
      <p>belong to same <strong>universality class</strong> with identical critical exponents</p>

      <p><strong>Examples of universality classes:</strong></p>
      <ul>
        <li><strong>Ising (Z₂):</strong> Uniaxial ferromagnet, liquid-gas transition, binary alloy</li>
        <li><strong>XY (U(1)):</strong> Planar ferromagnet, superfluid helium, 2D superconductor</li>
        <li><strong>Heisenberg (O(3)):</strong> Isotropic ferromagnet</li>
        <li><strong>Potts (Z_q):</strong> q-state models</li>
      </ul>

      <p><strong>Why universality?</strong></p>
      <ul>
        <li>At criticality, correlation length ξ → ∞</li>
        <li>Long-wavelength physics dominates</li>
        <li>Microscopic details irrelevant (scale much smaller than ξ)</li>
        <li>Only symmetries and dimensionality matter</li>
      </ul>
    </div>

    <div class="comparison-box">
      <h3>Universality Classes in d=2</h3>
      <table class="comparison-table">
        <tr>
          <th>Class</th>
          <th>Symmetry</th>
          <th>Examples</th>
          <th>β</th>
          <th>ν</th>
          <th>η</th>
        </tr>
        <tr>
          <td><strong>Ising</strong></td>
          <td>Z₂</td>
          <td>TFIM, lattice gas</td>
          <td>1/8</td>
          <td>1</td>
          <td>1/4</td>
        </tr>
        <tr>
          <td><strong>XY</strong></td>
          <td>U(1)</td>
          <td>Planar rotor, BKT</td>
          <td>varies</td>
          <td>∞</td>
          <td>1/4 (BKT)</td>
        </tr>
        <tr>
          <td><strong>Heisenberg</strong></td>
          <td>O(3)</td>
          <td>Isotropic spin</td>
          <td>-</td>
          <td>-</td>
          <td>No T>0 transition (Mermin-Wagner)</td>
        </tr>
        <tr>
          <td><strong>3-state Potts</strong></td>
          <td>S₃</td>
          <td>q=3 Potts model</td>
          <td>1/9</td>
          <td>5/6</td>
          <td>4/15</td>
        </tr>
        <tr>
          <td><strong>Tricritical Ising</strong></td>
          <td>Z₂</td>
          <td>Blume-Capel model</td>
          <td>1/12</td>
          <td>5/6</td>
          <td>2/5</td>
        </tr>
      </table>
    </div>

    <h2>Renormalization Group (RG)</h2>

    <div class="highlight-box">
      <h3>Coarse-Graining and Fixed Points</h3>

      <p><strong>RG transformation:</strong> Integrate out short-distance degrees of freedom</p>

      <p><strong>Procedure:</strong></p>
      <ol>
        <li><strong>Coarse-grain:</strong> Average over blocks of size b</li>
        <li><strong>Rescale:</strong> r' = r/b (restore original lattice spacing)</li>
        <li><strong>Renormalize:</strong> Adjust couplings to match partition function</li>
      </ol>

      <p><strong>RG flow:</strong></p>
      <div class="equation">
        K' = R_b(K)
      </div>
      <p>where K = coupling constants, R_b = RG transformation</p>

      <p><strong>Fixed points:</strong></p>
      <ul>
        <li><strong>K* such that R_b(K*) = K*</strong></li>
        <li><strong>Trivial FP:</strong> High temperature (disordered)</li>
        <li><strong>Non-trivial FP:</strong> Critical point</li>
        <li><strong>Other FP:</strong> Low temperature (ordered)</li>
      </ul>

      <p><strong>Critical exponents from linearization:</strong></p>
      <div class="equation">
        δK' = M δK,  M = ∂R_b/∂K|_{K*}
      </div>
      <p>Eigenvalues of M → scaling dimensions → critical exponents</p>
    </div>

    <div class="info-box">
      <h3>Relevant, Irrelevant, and Marginal Operators</h3>

      <p><strong>Scaling dimension Δ_i:</strong> From eigenvalues λ_i = b^{Δ_i} of linearized RG</p>

      <p><strong>Classification:</strong></p>
      <ul>
        <li><strong>Relevant (Δ > 0):</strong> Grows under RG → drives away from fixed point
          <ul>
            <li>Example: Temperature T, magnetic field h</li>
            <li>Finite number of relevant operators</li>
          </ul>
        </li>
        <li><strong>Irrelevant (Δ &lt; 0):</strong> Shrinks under RG → attracted to fixed point
          <ul>
            <li>Most microscopic details</li>
            <li>Explains universality (washed out by RG flow)</li>
          </ul>
        </li>
        <li><strong>Marginal (Δ = 0):</strong> Logarithmic flow
          <ul>
            <li>Example: BKT transition in 2D XY model</li>
            <li>Require higher-order analysis</li>
          </ul>
        </li>
      </ul>

      <p><strong>Universality from RG:</strong> All irrelevant operators flow to same fixed point → same critical behavior</p>
    </div>

    <h2>Quantum Phase Transitions</h2>

    <div class="highlight-box">
      <h3>Zero-Temperature Transitions</h3>

      <p><strong>Definition:</strong> Phase transition at T = 0 driven by quantum fluctuations</p>

      <p><strong>Control parameter:</strong> Coupling g in Hamiltonian (not temperature)</p>
      <div class="equation">
        H(g) = H_0 + g H_1
      </div>

      <p><strong>Critical point:</strong> g = g_c where gap closes</p>
      <div class="equation">
        Δ(g) ~ |g - g_c|^{zν}
      </div>
      <p>z = dynamic exponent, ν = correlation length exponent</p>

      <p><strong>Quantum-classical mapping:</strong></p>
      <ul>
        <li>d-dimensional quantum system ↔ (d+1)-dimensional classical system</li>
        <li>Time direction (imaginary time τ) becomes extra spatial dimension</li>
        <li>Quantum fluctuations ↔ thermal fluctuations in (d+1)D</li>
      </ul>

      <p><strong>Scaling:</strong></p>
      <ul>
        <li>Correlation length: ξ ~ |g - g_c|^{-ν}</li>
        <li>Correlation time: ξ_τ ~ ξ^z ~ |g - g_c|^{-zν}</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Example: Transverse-Field Ising Model (1D)</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = -J Σ_i σ_i^z σ_{i+1}^z - h Σ_i σ_i^x
      </div>

      <p><strong>Phase diagram:</strong></p>
      <ul>
        <li><strong>h &lt; J:</strong> Ferromagnetic order (⟨σ^z⟩ ≠ 0)</li>
        <li><strong>h > J:</strong> Paramagnetic phase (⟨σ^z⟩ = 0)</li>
        <li><strong>h = J:</strong> Quantum critical point</li>
      </ul>

      <p><strong>Critical behavior:</strong></p>
      <ul>
        <li>Universality class: (1+1)D Ising (CFT with c = 1/2)</li>
        <li>ν = 1, z = 1 (no dynamic scaling)</li>
        <li>Entanglement entropy: S ~ (1/3) log L at criticality</li>
        <li>Exactly solvable via Jordan-Wigner transformation</li>
      </ul>

      <p><strong>Finite-size scaling:</strong></p>
      <div class="equation">
        Δ(h, L) ~ L^{-z} f((h - h_c)L^{1/ν})
      </div>
    </div>

    <h2>Emergent Phenomena</h2>

    <div class="info-box">
      <h3>What Emerges in the Thermodynamic Limit?</h3>

      <p><strong>1. Spontaneous symmetry breaking:</strong></p>
      <ul>
        <li>Hamiltonian has symmetry, but ground state does not</li>
        <li>Requires N→∞ (finite N has unique ground state by tunneling)</li>
        <li>Examples: Ferromagnet (spin rotation), crystal (translation)</li>
      </ul>

      <p><strong>2. Goldstone modes:</strong></p>
      <ul>
        <li>Continuous symmetry breaking → gapless excitations</li>
        <li>Goldstone theorem: Number of modes = broken generators</li>
        <li>Examples: Spin waves (ferromagnet), phonons (crystal)</li>
      </ul>

      <p><strong>3. Topological order:</strong></p>
      <ul>
        <li>Ground state degeneracy depends on topology (torus vs sphere)</li>
        <li>Non-local order parameters</li>
        <li>Anyonic excitations</li>
        <li>Requires N→∞ for exact degeneracy</li>
      </ul>

      <p><strong>4. Phase transitions:</strong></p>
      <ul>
        <li>Non-analyticities in free energy (cusps, discontinuities)</li>
        <li>Diverging correlation length ξ → ∞</li>
        <li>Universal critical behavior</li>
      </ul>

      <p><strong>5. Collective modes:</strong></p>
      <ul>
        <li>Quasiparticles: Magnons, phonons, plasmons</li>
        <li>Emergent gauge fields (spin liquids)</li>
        <li>Fractionalization (spinon-holon separation)</li>
      </ul>
    </div>

    <h2>Practical Considerations</h2>

    <div class="note-box">
      <h3>Working with Finite Systems</h3>

      <p><strong>Numerical simulations:</strong></p>
      <ul>
        <li>Always finite N (typically N ~ 10 - 10^6)</li>
        <li>Need extrapolation: Plot observable vs 1/N → intercept at 1/N = 0</li>
        <li>Finite-size scaling crucial near phase transitions</li>
      </ul>

      <p><strong>Experiments:</strong></p>
      <ul>
        <li>Macroscopic samples: N ~ 10^{23} (effectively infinite)</li>
        <li>Mesoscopic systems: N ~ 10^3 - 10^9 (finite-size effects matter)</li>
        <li>Ultracold atoms: Controllable N ~ 10^2 - 10^6</li>
      </ul>

      <p><strong>When is N large enough?</strong></p>
      <ul>
        <li><strong>Correlation length ξ ≪ L:</strong> Bulk properties converged</li>
        <li><strong>Near criticality:</strong> Need ξ(T, L) &lt; L for true critical behavior</li>
        <li><strong>Topological order:</strong> Circumference L ≫ ξ for stable degeneracy</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Thermodynamic limit:</strong> N→∞ with fixed density, essential for phase transitions and SSB</li>
        <li><strong>Intensive quantities:</strong> Energy density, magnetization density converge to well-defined limits</li>
        <li><strong>Finite-size scaling:</strong> Systematic approach to extrapolate N→∞ from finite systems</li>
        <li><strong>Universality:</strong> Critical behavior depends only on symmetry and dimension, not microscopic details</li>
        <li><strong>RG framework:</strong> Explains universality via irrelevant operators flowing to same fixed point</li>
        <li><strong>Quantum phase transitions:</strong> T=0 transitions driven by quantum fluctuations, quantum-classical mapping</li>
        <li><strong>Emergent phenomena:</strong> SSB, Goldstone modes, topological order, collective excitations arise in N→∞</li>
      </ul>

      <p><strong>The thermodynamic limit reveals the true character of quantum phases, enabling rigorous classification, universal scaling, and the emergence of collective phenomena that define macroscopic quantum matter.</strong></p>

      <p><strong>Next:</strong> Section 5.2.4 explores correlation functions in detail, quantifying how quantum information spreads through many-body systems.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_2_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
