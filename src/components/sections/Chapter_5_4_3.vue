<template>
  <div class="section-content">
    <h1>5.4.3 The Transverse-Field Ising Model</h1>

    <p>The transverse-field Ising model (TFIM) is one of the most studied models in quantum many-body physics. Despite its simplicity, it exhibits a rich quantum phase transition, demonstrates key concepts of criticality, and provides an exactly solvable example of entanglement scaling. It serves as the canonical example of a quantum phase transition driven by quantum fluctuations.</p>

    <h2>Model Definition</h2>

    <div class="highlight-box">
      <h3>Hamiltonian</h3>

      <p><strong>1D chain with N sites:</strong></p>
      <div class="equation">
        H = -J Σ_{i=1}^{N-1} σ_i^z σ_{i+1}^z - h Σ_{i=1}^N σ_i^x
      </div>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><strong>J > 0:</strong> Ferromagnetic coupling (favors alignment)</li>
        <li><strong>h:</strong> Transverse magnetic field strength</li>
        <li>Control parameter: λ = h/J (dimensionless ratio)</li>
      </ul>

      <p><strong>Boundary conditions:</strong></p>
      <ul>
        <li><strong>Open (OBC):</strong> Sum to N-1 for coupling term</li>
        <li><strong>Periodic (PBC):</strong> σ_{N+1}^z ≡ σ_1^z (closes chain into ring)</li>
      </ul>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Each site is spin-1/2 (qubit)</li>
        <li>σ^z σ^z term: Classical Ising coupling (energy minimized by |↑↑...↑⟩ or |↓↓...↓⟩)</li>
        <li>σ^x term: Quantum fluctuations (flips spins, creates superpositions)</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Competing Terms</h3>

      <p><strong>Classical Ising (h = 0):</strong></p>
      <div class="equation">
        H_Ising = -J Σ_i σ_i^z σ_{i+1}^z
      </div>
      <ul>
        <li>Ground states: |↑↑...↑⟩ and |↓↓...↓⟩ (degenerate)</li>
        <li>Energy: E_0 = -J(N-1)</li>
        <li>Z₂ symmetry: invariant under global spin flip ∏_i σ_i^x</li>
      </ul>

      <p><strong>Pure transverse field (J = 0):</strong></p>
      <div class="equation">
        H_field = -h Σ_i σ_i^x
      </div>
      <ul>
        <li>Ground state: |→→...→⟩ = ⊗_i |+⟩_x (all spins in +x direction)</li>
        <li>Energy: E_0 = -hN</li>
        <li>No entanglement (product state)</li>
      </ul>

      <p><strong>Competition:</strong></p>
      <ul>
        <li>J term favors ferromagnetic order in z-basis</li>
        <li>h term favors polarization in x-direction</li>
        <li>Quantum phase transition between these limits</li>
      </ul>
    </div>

    <h2>Phase Diagram</h2>

    <div class="highlight-box">
      <h3>Ground State Phases</h3>

      <p><strong>Phase I: Ferromagnetic (λ &lt; 1, h/J &lt; 1)</strong></p>
      <ul>
        <li><strong>Order parameter:</strong> ⟨σ_i^z⟩ ≠ 0 (spontaneous magnetization)</li>
        <li><strong>Symmetry:</strong> Z₂ broken (system chooses ↑ or ↓)</li>
        <li><strong>Ground state:</strong> Superposition |ψ⟩ ~ |↑↑...↑⟩ + small fluctuations</li>
        <li><strong>Correlation:</strong> ⟨σ_i^z σ_j^z⟩_c → m² as |i-j| → ∞ (long-range order)</li>
        <li><strong>Gap:</strong> Δ ~ J(1 - λ) for λ → 1⁻</li>
      </ul>

      <p><strong>Phase II: Paramagnetic (λ > 1, h/J > 1)</strong></p>
      <ul>
        <li><strong>Order parameter:</strong> ⟨σ_i^z⟩ = 0 (no magnetization)</li>
        <li><strong>Symmetry:</strong> Z₂ preserved</li>
        <li><strong>Ground state:</strong> |ψ⟩ ~ |→→...→⟩ + small correlations</li>
        <li><strong>Correlation:</strong> ⟨σ_i^z σ_j^z⟩_c ~ e^{-|i-j|/ξ} (exponential decay)</li>
        <li><strong>Gap:</strong> Δ ~ h(λ - 1) for λ → 1⁺</li>
      </ul>

      <p><strong>Critical point (λ = 1, h = J)</strong></p>
      <ul>
        <li><strong>Gap:</strong> Δ = 0 (gapless, continuous spectrum)</li>
        <li><strong>Correlation length:</strong> ξ → ∞</li>
        <li><strong>Critical exponents:</strong> 2D Ising universality class</li>
        <li><strong>Conformal field theory:</strong> c = 1/2 (Ising CFT)</li>
      </ul>
    </div>

    <div class="comparison-box">
      <h3>Phase Comparison</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Ferromagnetic (h &lt; J)</th>
          <th>Critical (h = J)</th>
          <th>Paramagnetic (h > J)</th>
        </tr>
        <tr>
          <td><strong>⟨σ^z⟩</strong></td>
          <td>m ≠ 0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td><strong>Z₂ symmetry</strong></td>
          <td>Broken</td>
          <td>Critical</td>
          <td>Preserved</td>
        </tr>
        <tr>
          <td><strong>Gap Δ</strong></td>
          <td>~ J(1 - h/J)</td>
          <td>0</td>
          <td>~ h(h/J - 1)</td>
        </tr>
        <tr>
          <td><strong>Correlation ξ</strong></td>
          <td>∞ (T=0)</td>
          <td>∞</td>
          <td>Finite ~ 1/Δ</td>
        </tr>
        <tr>
          <td><strong>S(ℓ)</strong></td>
          <td>O(1) (area law)</td>
          <td>(1/6) log ℓ (CFT)</td>
          <td>O(1) (area law)</td>
        </tr>
        <tr>
          <td><strong>Ground states</strong></td>
          <td>2 (±m sectors)</td>
          <td>1 (unique)</td>
          <td>1 (unique)</td>
        </tr>
      </table>
    </div>

    <h2>Exact Solution via Jordan-Wigner</h2>

    <div class="highlight-box">
      <h3>Mapping to Free Fermions</h3>

      <p><strong>Jordan-Wigner transformation:</strong></p>
      <div class="equation">
        c_j = (∏_{k&lt;j} σ_k^z) σ_j^-,  c_j† = (∏_{k&lt;j} σ_k^z) σ_j^+
      </div>
      <p>where σ_j^± = (σ_j^x ± iσ_j^y)/2</p>

      <p><strong>Fermionic operators satisfy:</strong></p>
      <div class="equation">
        {c_j, c_k†} = δ_{jk},  {c_j, c_k} = 0
      </div>

      <p><strong>Spin operators in fermion language:</strong></p>
      <div class="equation">
        σ_j^z = 2c_j†c_j - 1 = 1 - 2n_j
      </div>
      <div class="equation">
        σ_j^x = c_j† + c_j (after string operator)
      </div>

      <p><strong>TFIM becomes (PBC):</strong></p>
      <div class="equation">
        H = -J Σ_j (2c_j†c_j - 1)(2c_{j+1}†c_{j+1} - 1) - h Σ_j (c_j† + c_j)
      </div>
    </div>

    <div class="info-box">
      <h3>Fourier Transform and Diagonalization</h3>

      <p><strong>Fourier modes (PBC, N even):</strong></p>
      <div class="equation">
        c_k = (1/√N) Σ_j e^{ikj} c_j,  k = 2πn/N, n = 0, 1, ..., N-1
      </div>

      <p><strong>Hamiltonian in k-space:</strong></p>
      <div class="equation">
        H = Σ_k [ε(k) c_k†c_k + Δ(k)(c_k†c_{-k}† + c_{-k}c_k)] + const
      </div>
      <p>where:</p>
      <div class="equation">
        ε(k) = -2J cos k,  Δ(k) = -h
      </div>

      <p><strong>BCS-like form:</strong> Bogoliubov transformation</p>
      <div class="equation">
        γ_k = u_k c_k + v_k c_{-k}†
      </div>
      <p>with tan(2θ_k) = h / (J cos k)</p>

      <p><strong>Diagonalized:</strong></p>
      <div class="equation">
        H = Σ_k ω(k) γ_k†γ_k + E_0
      </div>
      <div class="equation">
        ω(k) = 2√(J² cos²k + h²)
      </div>

      <p><strong>Ground state:</strong> Vacuum of γ modes: γ_k|GS⟩ = 0 for all k</p>
    </div>

    <div class="note-box">
      <h3>Gap and Critical Point</h3>

      <p><strong>Energy gap:</strong></p>
      <div class="equation">
        Δ = min_k ω(k)
      </div>

      <p><strong>Minimum occurs at k = π (for J > 0):</strong></p>
      <div class="equation">
        Δ = 2|J - h|
      </div>

      <p><strong>Critical point:</strong></p>
      <ul>
        <li>Gap closes at h = J</li>
        <li>Dispersion becomes gapless: ω(π) = 0</li>
        <li>Linear near k = π: ω(k) ~ v|k - π| with v = 2J</li>
      </ul>

      <p><strong>Correlation length:</strong></p>
      <div class="equation">
        ξ ~ v/Δ = J/|J - h| → ∞ as h → J
      </div>
      <p>Diverges as ξ ~ |λ - 1|^{-ν} with ν = 1</p>
    </div>

    <h2>Entanglement Entropy</h2>

    <div class="highlight-box">
      <h3>Analytical Results</h3>

      <p><strong>Block entanglement:</strong> Bipartition into [1, ℓ] and [ℓ+1, N]</p>

      <p><strong>Ferromagnetic phase (h &lt; J):</strong></p>
      <div class="equation">
        S(ℓ) = s_0 + o(1)
      </div>
      <ul>
        <li>Area law: constant S independent of ℓ</li>
        <li>s_0 depends on h/J but O(1)</li>
        <li>Reflects gapped nature</li>
      </ul>

      <p><strong>Critical point (h = J):</strong></p>
      <div class="equation">
        S(ℓ) = (c/3) log[L/π sin(πℓ/L)] + s_1
      </div>
      <ul>
        <li>c = 1/2 (central charge of Ising CFT)</li>
        <li>Logarithmic violation of area law</li>
        <li>s_1 = non-universal constant</li>
        <li>For ℓ ≪ L: S(ℓ) ~ (1/6) log ℓ</li>
      </ul>

      <p><strong>Paramagnetic phase (h > J):</strong></p>
      <div class="equation">
        S(ℓ) = s_0' + o(1)
      </div>
      <ul>
        <li>Area law restored</li>
        <li>s_0' different from ferromagnetic s_0</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>CFT Calculation</h3>

      <p><strong>For critical theory (c = 1/2):</strong></p>

      <p><strong>Infinite chain:</strong></p>
      <div class="equation">
        S(ℓ) = (c/3) log ℓ + s_1 = (1/6) log ℓ + s_1
      </div>

      <p><strong>Finite chain with PBC (size L):</strong></p>
      <div class="equation">
        S(ℓ) = (c/3) log[(L/π) sin(πℓ/L)] + s_1
      </div>

      <p><strong>Derivation sketch:</strong></p>
      <ul>
        <li>Map 1D chain to 2D Euclidean spacetime via Wick rotation</li>
        <li>Bipartition → boundary between regions in spacetime</li>
        <li>CFT correlators decay as power laws</li>
        <li>S(ℓ) computed from correlators of twist fields</li>
        <li>Central charge c appears as prefactor</li>
      </ul>

      <p><strong>Universal scaling function:</strong></p>
      <div class="equation">
        S(ℓ, ξ) = (c/3) log[ξ/a sin(πℓ/L)] + ... for ℓ, L ≫ ξ
      </div>
      <p>where a = lattice spacing</p>
    </div>

    <h2>Correlation Functions</h2>

    <div class="note-box">
      <h3>Two-Point Correlations</h3>

      <p><strong>Ferromagnetic phase (h &lt; J):</strong></p>
      <div class="equation">
        ⟨σ_i^z σ_j^z⟩_c → m² as |i-j| → ∞
      </div>
      <ul>
        <li>Long-range order (LRO)</li>
        <li>Magnetization m = lim_{|i-j|→∞} √(⟨σ_i^z σ_j^z⟩_c)</li>
        <li>m ~ (1 - h/J)^{β} near h → J⁻ with β = 1/8</li>
      </ul>

      <p><strong>Critical point (h = J):</strong></p>
      <div class="equation">
        ⟨σ_i^z σ_j^z⟩_c ~ 1/|i-j|^{2Δ_σ}
      </div>
      <ul>
        <li>Power-law decay</li>
        <li>Scaling dimension Δ_σ = 1/8 (Ising CFT)</li>
        <li>Algebraic correlations (critical)</li>
      </ul>

      <p><strong>Paramagnetic phase (h > J):</strong></p>
      <div class="equation">
        ⟨σ_i^z σ_j^z⟩_c ~ e^{-|i-j|/ξ}
      </div>
      <ul>
        <li>Exponential decay</li>
        <li>ξ ~ 1/|h - J| (correlation length)</li>
      </ul>
    </div>

    <h2>Quantum Quench Dynamics</h2>

    <div class="info-box">
      <h3>Entanglement Spreading</h3>

      <p><strong>Protocol:</strong> Prepare ground state at h = h_i, suddenly change to h = h_f</p>

      <p><strong>Time evolution:</strong></p>
      <div class="equation">
        |ψ(t)⟩ = e^{-iH(h_f)t} |GS(h_i)⟩
      </div>

      <p><strong>Entanglement growth:</strong></p>
      <ul>
        <li><strong>Short times (t &lt; ℓ/v):</strong> S(ℓ, t) ~ O(1)</li>
        <li><strong>Linear growth (ℓ/v &lt; t &lt; (N-ℓ)/v):</strong> S(ℓ, t) ~ vt</li>
        <li><strong>Saturation:</strong> S(ℓ, t) → S_eq(ℓ) for t → ∞</li>
      </ul>

      <p><strong>Interpretation:</strong></p>
      <ul>
        <li>Quasiparticles created at t=0 propagate with velocity v</li>
        <li>Entanglement spreads via ballistic transport</li>
        <li>Lieb-Robinson cone: causality constraint</li>
      </ul>

      <p><strong>Thermalization:</strong></p>
      <ul>
        <li>Integrable model (TFIM): Does not thermalize to Gibbs ensemble</li>
        <li>Approaches generalized Gibbs ensemble (GGE)</li>
        <li>Retains memory of infinitely many conserved quantities</li>
      </ul>
    </div>

    <h2>Experimental Realizations</h2>

    <div class="highlight-box">
      <h3>Quantum Simulators</h3>

      <p><strong>1. Trapped ions:</strong></p>
      <ul>
        <li>Linear Paul traps with 10-100+ ions</li>
        <li>Effective spin-spin interactions from phonon-mediated coupling</li>
        <li>Tunable h via laser intensity</li>
        <li><strong>Demonstrated:</strong> QPT, entanglement growth, quench dynamics</li>
      </ul>

      <p><strong>2. Superconducting qubits:</strong></p>
      <ul>
        <li>Transmon qubits with tunable couplings</li>
        <li>Google, IBM, Rigetti platforms</li>
        <li>1D and 2D TFIM simulations</li>
      </ul>

      <p><strong>3. Rydberg atoms:</strong></p>
      <ul>
        <li>Neutral atoms in optical lattices/tweezers</li>
        <li>Rydberg blockade → effective Ising interaction</li>
        <li>Demonstrated in 1D and 2D arrays (up to 256 qubits)</li>
      </ul>

      <p><strong>4. Quantum annealers:</strong></p>
      <ul>
        <li>D-Wave systems (transverse-field quantum annealing)</li>
        <li>Adiabatic preparation of ground states</li>
        <li>Study of phase transitions and quantum speedup</li>
      </ul>

      <p><strong>Condensed matter realizations:</strong></p>
      <ul>
        <li>LiHoF₄ (transverse-field Ising in rare-earth magnet)</li>
        <li>CoNb₂O₆ (quasi-1D Ising in applied field)</li>
        <li>Neutron scattering probes correlations and dynamics</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Paradigmatic QPT:</strong> TFIM exhibits Z₂ symmetry-breaking transition at h = J</li>
        <li><strong>Exact solution:</strong> Jordan-Wigner → free fermions → Bogoliubov diagonalization</li>
        <li><strong>Gap:</strong> Δ = 2|J - h| closes linearly at critical point</li>
        <li><strong>Universality:</strong> 2D Ising class (in 1+1D spacetime), c = 1/2 CFT</li>
        <li><strong>Entanglement:</strong> Area law in gapped phases, S ~ (1/6) log ℓ at criticality</li>
        <li><strong>Dynamics:</strong> Quench leads to linear entanglement growth, GGE (not thermal)</li>
        <li><strong>Experiments:</strong> Realized in trapped ions, superconducting qubits, Rydberg atoms, quantum annealers</li>
        <li><strong>Benchmark:</strong> Standard model for testing quantum simulators and entanglement measures</li>
      </ul>

      <p><strong>Next:</strong> Section 5.4.4 explores the transverse-field cluster model, which exhibits different entanglement properties despite structural similarity.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_4_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
