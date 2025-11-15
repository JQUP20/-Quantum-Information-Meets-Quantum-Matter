<template>
  <div class="section-content">
    <h1>6.1.4 Compare Finite-Temperature and Zero-Temperature Phases</h1>

    <p>Understanding the distinction between finite-temperature (classical) and zero-temperature (quantum) phases is crucial for appreciating quantum phase transitions. While both involve order and disorder, their physical origins and mathematical descriptions differ fundamentally.</p>

    <h2>Key Differences</h2>

    <div class="comparison-box">
      <h3>Classical vs Quantum Phase Transitions</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Finite-T (Classical)</th>
          <th>Zero-T (Quantum)</th>
        </tr>
        <tr>
          <td><strong>Control parameter</strong></td>
          <td>Temperature T</td>
          <td>Coupling constant g, h, J, ...</td>
        </tr>
        <tr>
          <td><strong>State</strong></td>
          <td>Thermal ensemble ρ = e^{-βH}/Z</td>
          <td>Pure ground state |ψ₀(g)⟩</td>
        </tr>
        <tr>
          <td><strong>Fluctuations</strong></td>
          <td>Thermal (k_BT)</td>
          <td>Quantum (ℏω)</td>
        </tr>
        <tr>
          <td><strong>Time dependence</strong></td>
          <td>d-dimensional classical system</td>
          <td>(d+1)-dimensional quantum-classical mapping</td>
        </tr>
        <tr>
          <td><strong>Correlation length</strong></td>
          <td>ξ ~ |T-T_c|^{-ν}</td>
          <td>ξ ~ |g-g_c|^{-ν}</td>
        </tr>
        <tr>
          <td><strong>Energy gap</strong></td>
          <td>No gap (thermal)</td>
          <td>Δ ~ |g-g_c|^{zν}</td>
        </tr>
      </table>
    </div>

    <h2>Quantum-Classical Mapping</h2>

    <div class="highlight-box">
      <h3>Imaginary Time Path Integral</h3>

      <p><strong>Partition function:</strong></p>
      <div class="equation">
        Z = Tr[e^{-βH}] = ∫ D[φ(τ,x)] e^{-S_E[φ]/ℏ}
      </div>

      <p><strong>Euclidean action:</strong></p>
      <div class="equation">
        S_E = ∫₀^β dτ ∫ d^dx [ℏ(∂_τφ)²/2 + V(φ)]
      </div>

      <p><strong>Mapping:</strong></p>
      <ul>
        <li>d-dimensional quantum system at T > 0</li>
        <li>↔ (d+1)-dimensional classical system</li>
        <li>Imaginary time τ ∈ [0, β] acts as extra dimension</li>
        <li>Periodic boundary: φ(τ=0) = φ(τ=β)</li>
      </ul>

      <p><strong>For quantum system at T = 0:</strong></p>
      <ul>
        <li>β → ∞ (infinite imaginary time extent)</li>
        <li>Maps to (d+1)-dimensional classical system at criticality</li>
        <li>d-dimensional quantum critical point ↔ (d+1)D classical critical point</li>
      </ul>
    </div>

    <h2>Universality Classes</h2>

    <div class="info-box">
      <h3>Example: 1D Quantum Ising vs 2D Classical Ising</h3>

      <p><strong>1D quantum transverse-field Ising model:</strong></p>
      <div class="equation">
        H_Q = -J Σ_i σ_i^z σ_{i+1}^z - h Σ_i σ_i^x
      </div>
      <ul>
        <li>Quantum phase transition at h = J, T = 0</li>
        <li>Dynamic exponent z = 1</li>
      </ul>

      <p><strong>2D classical Ising model:</strong></p>
      <div class="equation">
        H_C = -J Σ_{⟨ij⟩} s_i s_j
      </div>
      <ul>
        <li>Thermal phase transition at T_c = 2.269J/k_B</li>
      </ul>

      <p><strong>Universality:</strong></p>
      <ul>
        <li>Same critical exponents!</li>
        <li>1D quantum Ising at T=0 ↔ 2D classical Ising at T_c</li>
        <li>Both described by c=1/2 CFT</li>
        <li>Quantum fluctuations (1D+time) = thermal fluctuations (2D)</li>
      </ul>
    </div>

    <h2>Mermin-Wagner Theorem</h2>

    <div class="note-box">
      <h3>No Continuous Symmetry Breaking in Low Dimensions</h3>

      <p><strong>Statement:</strong></p>
      <div class="equation">
        Continuous symmetry cannot break spontaneously in d ≤ 2 at T > 0
      </div>

      <p><strong>Physical reason:</strong></p>
      <ul>
        <li>Goldstone modes (spin waves, phonons) have ω(k) ~ k</li>
        <li>Phase space for low-energy excitations: ∫ d^dk ~ k^{d-1}dk</li>
        <li>Integral diverges for d ≤ 2: Too many low-energy fluctuations</li>
        <li>Thermal fluctuations destroy long-range order</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>XY model (d=2, T>0):</strong> No true long-range order</li>
        <li><strong>Heisenberg model (d=2, T>0):</strong> No spontaneous magnetization</li>
        <li>KT transition instead: topological phase transition</li>
      </ul>

      <p><strong>But quantum systems (T=0) can break symmetry!</strong></p>
      <ul>
        <li>Quantum fluctuations have gap (energy cost)</li>
        <li>Can stabilize broken symmetry even in d=1</li>
        <li>Example: 1D ferromagnetic Heisenberg chain has ordered ground state</li>
      </ul>
    </div>

    <h2>Experimental Distinctions</h2>

    <div class="highlight-box">
      <h3>Observable Signatures</h3>

      <p><strong>Temperature dependence:</strong></p>
      <ul>
        <li><strong>Classical transition:</strong> Order parameter varies with T
          <div class="equation">
            m(T) ~ (T_c - T)^β for T → T_c^-
          </div>
        </li>
        <li><strong>Quantum transition:</strong> Order parameter varies with g at T=0
          <div class="equation">
            m(g) ~ (g_c - g)^β for g → g_c^-
          </div>
        </li>
      </ul>

      <p><strong>Finite-T effects near QPT:</strong></p>
      <ul>
        <li>Quantum critical region: T &lt; Δ ~ |g-g_c|^{zν}</li>
        <li>Classical critical region: T > Δ</li>
        <li>Crossover temperature: T* ~ |g-g_c|^{zν}</li>
      </ul>

      <p><strong>Experimental probes:</strong></p>
      <ul>
        <li><strong>Specific heat:</strong> C(T) peak sharpens as T → 0</li>
        <li><strong>Susceptibility:</strong> χ(g,T) divergence</li>
        <li><strong>Transport:</strong> Resistivity anomalies</li>
        <li><strong>Spectroscopy:</strong> Gap closing vs broadening</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Classical (T>0):</strong> Thermal fluctuations, Boltzmann distribution, d-dimensional</li>
        <li><strong>Quantum (T=0):</strong> Quantum fluctuations, ground state, (d+1)-dimensional mapping</li>
        <li><strong>Universality:</strong> dD quantum ↔ (d+1)D classical at criticality</li>
        <li><strong>Mermin-Wagner:</strong> Continuous symmetry cannot break in d≤2 at T>0, but can at T=0</li>
        <li><strong>Dynamic exponent z:</strong> Relates space and time: ξ_τ ~ ξ^z</li>
      </ul>

      <p><strong>Next:</strong> Section 6.2.1 describes the historical discovery of topological order in the fractional quantum Hall effect.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_1_4'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
