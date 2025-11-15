<template>
  <div class="section-content">
    <h1>5.6 Entanglement in Gapless Systems</h1>

    <p>Gapless quantum systems exhibit fundamentally different entanglement properties than their gapped counterparts. The absence of an energy gap leads to long-range correlations, diverging correlation lengths, and violations of the area law. Conformal field theory (CFT) provides a powerful framework for understanding entanglement in critical systems, yielding universal predictions for entanglement entropy scaling.</p>

    <h2>Why Gapless Systems Violate Area Law</h2>

    <div class="highlight-box">
      <h3>Physical Origin</h3>

      <p><strong>Gapped systems:</strong></p>
      <ul>
        <li>Energy gap Δ > 0</li>
        <li>Correlation length ξ ~ v/Δ finite</li>
        <li>Exponential decay: ⟨O_i O_j⟩_c ~ e^{-r/ξ}</li>
        <li>Entanglement concentrated near boundary → area law</li>
      </ul>

      <p><strong>Gapless systems:</strong></p>
      <ul>
        <li>Energy gap Δ = 0</li>
        <li>Correlation length ξ → ∞ (divergent)</li>
        <li>Power-law decay: ⟨O_i O_j⟩_c ~ r^{-α}</li>
        <li>Long-range correlations → enhanced entanglement</li>
      </ul>

      <p><strong>Consequence:</strong></p>
      <div class="equation">
        S(A) > α |∂A| (area law violated)
      </div>
      <p>Additional contributions beyond boundary area</p>

      <p><strong>Mechanism:</strong></p>
      <ul>
        <li>Gapless modes at Fermi surface or critical point</li>
        <li>Low-energy excitations create entanglement throughout bulk</li>
        <li>Cannot be screened by finite-width buffer</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Types of Gapless Systems</h3>

      <p><strong>1. Quantum critical points:</strong></p>
      <ul>
        <li>Phase transitions at T=0</li>
        <li>Example: TFIM at h = J</li>
        <li>Described by CFT in 1D</li>
        <li>S(ℓ) ~ log ℓ</li>
      </ul>

      <p><strong>2. Gapless phases:</strong></p>
      <ul>
        <li>Entire phase is gapless</li>
        <li>Example: Luttinger liquids (1D), algebraic spin liquids (2D)</li>
        <li>Power-law correlations persist</li>
      </ul>

      <p><strong>3. Fermi liquids:</strong></p>
      <ul>
        <li>Gapless fermions at Fermi surface</li>
        <li>Weakly interacting quasiparticles</li>
        <li>S(ℓ) ~ ℓ^{d-1} log ℓ (logarithmic enhancement)</li>
      </ul>

      <p><strong>4. Metals and conductors:</strong></p>
      <ul>
        <li>Gapless charge excitations</li>
        <li>Free fermions: Extensive entanglement</li>
      </ul>

      <p><strong>5. Spin liquids:</strong></p>
      <ul>
        <li>Gapless spinons</li>
        <li>Algebraic or Dirac spin liquids</li>
        <li>Power-law spin correlations</li>
      </ul>
    </div>

    <h2>1D Critical Systems and CFT</h2>

    <div class="highlight-box">
      <h3>Conformal Field Theory Scaling</h3>

      <p><strong>Universal formula (Calabrese-Cardy):</strong></p>
      <p>For 1D critical system (CFT) on infinite chain, block [1, ℓ]:</p>
      <div class="equation">
        S(ℓ) = (c/3) log ℓ + s_1
      </div>
      <ul>
        <li><strong>c:</strong> Central charge (counts gapless degrees of freedom)</li>
        <li><strong>s_1:</strong> Non-universal constant (depends on UV cutoff)</li>
      </ul>

      <p><strong>Finite chain with PBC (length L):</strong></p>
      <div class="equation">
        S(ℓ) = (c/3) log[(L/π) sin(πℓ/L)] + s_1
      </div>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Logarithmic violation of area law</li>
        <li>c is universal (characterizes CFT)</li>
        <li>Different CFTs have different c values</li>
      </ul>

      <p><strong>Examples of central charge:</strong></p>
      <ul>
        <li><strong>Free boson:</strong> c = 1</li>
        <li><strong>Free fermion:</strong> c = 1/2</li>
        <li><strong>Ising CFT:</strong> c = 1/2</li>
        <li><strong>Potts (q=3):</strong> c = 4/5</li>
        <li><strong>SU(2)_k WZW:</strong> c = 3k/(k+2)</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Derivation Sketch via CFT</h3>

      <p><strong>Key steps:</strong></p>

      <p><strong>1. Replica trick:</strong></p>
      <div class="equation">
        S(A) = -Tr[ρ_A log ρ_A] = -lim_{n→1} ∂_n Tr[ρ_A^n]
      </div>

      <p><strong>2. Geometric interpretation:</strong></p>
      <ul>
        <li>Tr[ρ_A^n] = partition function on n-sheeted Riemann surface</li>
        <li>Sheets sewn together along region A</li>
        <li>Branch points at ∂A (boundaries of region)</li>
      </ul>

      <p><strong>3. Twist field correlation:</strong></p>
      <div class="equation">
        Tr[ρ_A^n] ~ ⟨T_n(0) T̄_n(ℓ)⟩
      </div>
      <ul>
        <li>T_n: Twist field creating n-fold branch point</li>
        <li>Scaling dimension Δ_n = c/12 (n - 1/n)</li>
      </ul>

      <p><strong>4. CFT correlator:</strong></p>
      <div class="equation">
        ⟨T_n(0) T̄_n(ℓ)⟩ ~ ℓ^{-2Δ_n} = ℓ^{-c/6(n - 1/n)}
      </div>

      <p><strong>5. Take derivative at n=1:</strong></p>
      <div class="equation">
        S(ℓ) = -∂_n[log(ℓ^{-c/6(n-1/n)})]|_{n=1} = (c/3) log ℓ + const
      </div>

      <p><strong>Result:</strong> Universal logarithmic scaling with coefficient c/3</p>
    </div>

    <div class="comparison-box">
      <h3>Entanglement Scaling in 1D Systems</h3>
      <table class="comparison-table">
        <tr>
          <th>System</th>
          <th>S(ℓ)</th>
          <th>Central Charge c</th>
        </tr>
        <tr>
          <td><strong>Gapped (trivial)</strong></td>
          <td>O(1)</td>
          <td>-</td>
        </tr>
        <tr>
          <td><strong>Critical Ising</strong></td>
          <td>(1/6) log ℓ</td>
          <td>1/2</td>
        </tr>
        <tr>
          <td><strong>Free fermion</strong></td>
          <td>(1/6) log ℓ</td>
          <td>1/2</td>
        </tr>
        <tr>
          <td><strong>XX model (critical)</strong></td>
          <td>(1/6) log ℓ</td>
          <td>1/2</td>
        </tr>
        <tr>
          <td><strong>XXZ model (gapless)</strong></td>
          <td>(K/3) log ℓ, K&lt;1</td>
          <td>c = 1 (Luttinger)</td>
        </tr>
        <tr>
          <td><strong>Heisenberg (critical)</strong></td>
          <td>(1/3) log ℓ</td>
          <td>1</td>
        </tr>
        <tr>
          <td><strong>3-state Potts</strong></td>
          <td>(4/15) log ℓ</td>
          <td>4/5</td>
        </tr>
      </table>
    </div>

    <h2>Free Fermions</h2>

    <div class="info-box">
      <h3>Non-Interacting Fermions</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = Σ_{ij} h_{ij} c_i†c_j
      </div>
      <p>Quadratic in fermion operators (Gaussian theory)</p>

      <p><strong>Correlation matrix:</strong></p>
      <div class="equation">
        C_{ij} = ⟨c_i†c_j⟩
      </div>

      <p><strong>Entanglement entropy:</strong></p>
      <div class="equation">
        S(A) = -Σ_α [ν_α log ν_α + (1-ν_α) log(1-ν_α)]
      </div>
      <ul>
        <li>ν_α: Eigenvalues of correlation matrix C_A restricted to A</li>
        <li>Only need C_A, not full many-body wavefunction</li>
      </ul>

      <p><strong>1D critical fermions:</strong></p>
      <div class="equation">
        S(ℓ) = (1/3) log ℓ + O(1)
      </div>
      <p>Matches CFT with c = 1</p>

      <p><strong>d-dimensional Fermi surface:</strong></p>
      <div class="equation">
        S(ℓ) ~ ℓ^{d-1} log ℓ
      </div>
      <ul>
        <li>Area law × logarithmic enhancement</li>
        <li>Gapless modes at Fermi surface contribute</li>
        <li>Widom conjecture (proven for free fermions)</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Example: 1D Tight-Binding Model</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = -t Σ_i (c_i†c_{i+1} + h.c.)
      </div>

      <p><strong>Dispersion:</strong></p>
      <div class="equation">
        ε(k) = -2t cos k,  k ∈ [-π, π]
      </div>

      <p><strong>Half-filling:</strong> Fermi points at k = ±π/2 (gapless)</p>

      <p><strong>Entanglement entropy:</strong></p>
      <div class="equation">
        S(ℓ) = (1/3) log ℓ + c_0
      </div>

      <p><strong>Away from half-filling:</strong></p>
      <ul>
        <li>Still gapless (Fermi surface)</li>
        <li>Same logarithmic scaling</li>
        <li>Only c_0 changes (non-universal)</li>
      </ul>

      <p><strong>With alternating hopping (SSH model):</strong></p>
      <div class="equation">
        H = -Σ_i [t_1 c_{2i}†c_{2i+1} + t_2 c_{2i+1}†c_{2i+2} + h.c.]
      </div>
      <ul>
        <li>t_1 = t_2: Gapless (log ℓ scaling)</li>
        <li>t_1 ≠ t_2: Gapped (constant S)</li>
      </ul>
    </div>

    <h2>2D Gapless Systems</h2>

    <div class="highlight-box">
      <h3>2D Conformal Field Theories</h3>

      <p><strong>2D critical points:</strong></p>
      <p>More complex than 1D due to higher symmetry</p>

      <p><strong>Scaling for smooth boundary:</strong></p>
      <div class="equation">
        S(A) = α |∂A| log |∂A| + β |∂A| + γ_corner + ...
      </div>

      <p><strong>Contributions:</strong></p>
      <ul>
        <li><strong>α|∂A| log |∂A|:</strong> Leading logarithmic violation</li>
        <li><strong>β|∂A|:</strong> Subleading area-law term</li>
        <li><strong>γ_corner:</strong> Corner contributions (depend on opening angle)</li>
      </ul>

      <p><strong>Universal coefficient α:</strong></p>
      <ul>
        <li>Related to central charge (model-dependent)</li>
        <li>Differs from 1D case</li>
      </ul>

      <p><strong>Corner contribution:</strong></p>
      <div class="equation">
        γ_corner(θ) = a_c F(θ)
      </div>
      <ul>
        <li>θ: Opening angle of corner</li>
        <li>F(θ): Universal function (CFT-dependent)</li>
        <li>a_c: Coefficient depending on UV cutoff</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Fermi Liquids in d Dimensions</h3>

      <p><strong>Widom scaling (free fermions):</strong></p>
      <div class="equation">
        S(A) = a |∂A| log |∂A| + b |∂A| + ...
      </div>
      <p>For d-dimensional Fermi liquid with (d-1)-dimensional Fermi surface</p>

      <p><strong>Physical origin:</strong></p>
      <ul>
        <li>Gapless excitations near Fermi surface</li>
        <li>Each point on FS contributes (c/3) log L (1D modes)</li>
        <li>Integrate over FS → area × log enhancement</li>
      </ul>

      <p><strong>Coefficient a:</strong></p>
      <div class="equation">
        a = (1/3) × (density of states at FS)
      </div>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>2D:</strong> S(A) ~ L log L (perimeter L)</li>
        <li><strong>3D:</strong> S(A) ~ L² log L (surface area L²)</li>
      </ul>

      <p><strong>Interacting Fermi liquids:</strong></p>
      <ul>
        <li>Landau Fermi liquid theory preserves qualitative features</li>
        <li>Coefficients renormalized by interactions</li>
        <li>Log enhancement survives</li>
      </ul>
    </div>

    <h2>Luttinger Liquids (1D Gapless Phases)</h2>

    <div class="note-box">
      <h3>1D Interacting Fermions/Bosons</h3>

      <p><strong>Luttinger liquid theory:</strong> Universal low-energy description of 1D gapless systems</p>

      <p><strong>Hamiltonian (bosonized):</strong></p>
      <div class="equation">
        H = (v/2π) ∫ dx [K(∂_x θ)² + K^{-1}(∂_x φ)²]
      </div>
      <ul>
        <li><strong>v:</strong> Velocity</li>
        <li><strong>K:</strong> Luttinger parameter (interaction-dependent)</li>
        <li><strong>θ, φ:</strong> Bosonic fields</li>
      </ul>

      <p><strong>Luttinger parameter K:</strong></p>
      <ul>
        <li><strong>K = 1:</strong> Free fermions (non-interacting)</li>
        <li><strong>K > 1:</strong> Attractive interactions</li>
        <li><strong>K &lt; 1:</strong> Repulsive interactions</li>
      </ul>

      <p><strong>Entanglement entropy:</strong></p>
      <div class="equation">
        S(ℓ) = (c/3) log ℓ + const
      </div>
      <p>with c = 1 (one gapless mode, two chiralities)</p>

      <p><strong>Correlation functions:</strong></p>
      <div class="equation">
        ⟨O(0) O(r)⟩ ~ r^{-2Δ_O}
      </div>
      <ul>
        <li>Δ_O: Scaling dimension (depends on K)</li>
        <li>Example: Density ρ has Δ_ρ = 1 (universal)</li>
        <li>Fermion: Δ_ψ = (K + K^{-1})/4 (K-dependent)</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>XXZ chain (Δ &lt; 1):</strong> Luttinger liquid with K(Δ)</li>
        <li><strong>Hubbard model (weak U):</strong> K ~ 1 - U/... (perturbative)</li>
        <li><strong>Lieb-Liniger gas:</strong> Exactly solvable, K(γ) known</li>
      </ul>
    </div>

    <h2>Quantum Phase Transitions</h2>

    <div class="highlight-box">
      <h3>Entanglement at Critical Points</h3>

      <p><strong>Scaling hypothesis:</strong> Near QPT at λ = λ_c:</p>
      <div class="equation">
        S(ℓ, λ) = ℓ^{d-1} f(ℓ/ξ(λ))
      </div>
      <ul>
        <li>ξ(λ): Correlation length</li>
        <li>f: Universal scaling function</li>
      </ul>

      <p><strong>Deep in phases (ξ finite):</strong></p>
      <div class="equation">
        ℓ ≫ ξ → f(ℓ/ξ) = const → S ~ ℓ^{d-1} (area law)
      </div>

      <p><strong>At critical point (ξ → ∞):</strong></p>
      <div class="equation">
        f(x → ∞) ~ log x → S ~ ℓ^{d-1} log ℓ (1D: log ℓ)
      </div>

      <p><strong>Finite-size scaling:</strong></p>
      <ul>
        <li>System size L, ξ(λ) ~ |λ - λ_c|^{-ν}</li>
        <li>S(L, λ) = L^{d-1} g(L/ξ(λ))</li>
        <li>Extract ν, c from scaling collapse</li>
      </ul>

      <p><strong>Applications:</strong></p>
      <ul>
        <li>Locate critical points via S(λ) derivatives</li>
        <li>Extract critical exponents</li>
        <li>Identify universality class from c</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Entanglement Divergence Near Criticality</h3>

      <p><strong>Observation:</strong> Entanglement measures diverge as λ → λ_c</p>

      <p><strong>Example: TFIM</strong></p>
      <div class="equation">
        H = -J Σ_i σ_i^z σ_{i+1}^z - h Σ_i σ_i^x
      </div>

      <p><strong>Phases:</strong></p>
      <ul>
        <li><strong>h/J &lt; 1:</strong> S(ℓ) ~ s_0 (constant)</li>
        <li><strong>h/J = 1:</strong> S(ℓ) ~ (1/6) log ℓ</li>
        <li><strong>h/J > 1:</strong> S(ℓ) ~ s_1 (constant)</li>
      </ul>

      <p><strong>Derivative of S:</strong></p>
      <div class="equation">
        dS/dh ∝ dξ/dh ~ |h - h_c|^{-(ν+1)}
      </div>
      <p>Diverges at h = h_c with exponent ν+1</p>

      <p><strong>Entanglement witnesses QPT:</strong></p>
      <ul>
        <li>Peak in dS/dλ locates λ_c</li>
        <li>Height diverges with system size L</li>
        <li>Finite-size scaling: Peak ~ L^{α}</li>
      </ul>
    </div>

    <h2>Computational Challenges</h2>

    <div class="info-box">
      <h3>Gapless Systems and Tensor Networks</h3>

      <p><strong>DMRG/MPS for gapless 1D:</strong></p>
      <ul>
        <li>Bond dimension: χ ~ e^{S(ℓ)} ~ e^{(c/3) log ℓ} = ℓ^{c/3}</li>
        <li>Polynomial growth (not exponential)</li>
        <li>Still tractable but slower convergence than gapped</li>
      </ul>

      <p><strong>Practical DMRG:</strong></p>
      <ul>
        <li>Gapped: Converges exponentially fast in χ</li>
        <li>Critical: Converges as power-law in χ</li>
        <li>Need larger χ for same accuracy</li>
      </ul>

      <p><strong>2D gapless systems:</strong></p>
      <ul>
        <li>PEPS: S(L) ~ L log L</li>
        <li>Bond dimension: χ ~ e^{S} ~ L^{aL}</li>
        <li>Exponential in L (not polynomial)</li>
        <li>Very challenging, often intractable</li>
      </ul>

      <p><strong>Alternative approaches:</strong></p>
      <ul>
        <li><strong>Continuous MPS (cMPS):</strong> Variational ansatz for 1D</li>
        <li><strong>Multiscale entanglement renormalization (MERA):</strong> Captures logarithmic scaling efficiently</li>
        <li><strong>QMC:</strong> Works for sign-problem-free cases</li>
        <li><strong>CFT methods:</strong> Analytical predictions for critical systems</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Area law violation:</strong> Gapless systems have S > α|∂A| due to long-range correlations</li>
        <li><strong>1D CFT:</strong> Universal scaling S(ℓ) = (c/3) log ℓ with central charge c</li>
        <li><strong>Free fermions:</strong> d-dimensional Fermi surface gives S ~ L^{d-1} log L (Widom)</li>
        <li><strong>Luttinger liquids:</strong> Gapless 1D interacting systems, c = 1, power-law correlations</li>
        <li><strong>2D critical:</strong> S ~ L log L + corner contributions</li>
        <li><strong>QPT detection:</strong> Entanglement entropy peaks at critical points, diverges with system size</li>
        <li><strong>Computational:</strong> Gapless systems more challenging for tensor networks (polynomial χ for 1D, exponential for 2D)</li>
        <li><strong>Universal scaling:</strong> Entanglement provides fingerprint of universality class via c</li>
      </ul>

      <p><strong>Next:</strong> Section 5.7 provides a comprehensive summary of Chapter 5 and directions for further reading.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_6'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
