<template>
  <div class="section-content">
    <h1>5.2.4 Correlation</h1>

    <p>Correlation functions are fundamental probes of quantum many-body systems. They quantify how quantum information and physical properties are correlated across space and time, revealing the structure of ground states, the nature of excitations, and signatures of quantum phase transitions.</p>

    <h2>Correlation Functions: Definitions</h2>

    <div class="highlight-box">
      <h3>Spatial Correlation Functions</h3>

      <p><strong>Two-point correlation function:</strong></p>
      <div class="equation">
        C(i,j) = ⟨O_i O_j⟩ - ⟨O_i⟩⟨O_j⟩ = ⟨O_i O_j⟩_c
      </div>
      <p>where ⟨·⟩ denotes expectation value in ground state |ψ₀⟩</p>

      <p><strong>Connected vs disconnected:</strong></p>
      <ul>
        <li><strong>Total correlation:</strong> ⟨O_i O_j⟩ (disconnected)</li>
        <li><strong>Connected correlation:</strong> ⟨O_i O_j⟩_c (removes product of averages)</li>
        <li>Connected part measures genuine correlations, not just independent contributions</li>
      </ul>

      <p><strong>Common operators:</strong></p>
      <ul>
        <li><strong>Spin:</strong> C^z(r) = ⟨σ_i^z σ_j^z⟩_c where r = |i - j|</li>
        <li><strong>Density:</strong> C^n(r) = ⟨n_i n_j⟩_c</li>
        <li><strong>Green's function:</strong> G(i,j) = ⟨c_i† c_j⟩</li>
      </ul>

      <p><strong>Translation invariance:</strong> For homogeneous systems:</p>
      <div class="equation">
        C(i,j) = C(|i - j|) = C(r)
      </div>
      <p>Depends only on distance r, not absolute positions</p>
    </div>

    <div class="info-box">
      <h3>Temporal and Dynamical Correlations</h3>

      <p><strong>Time-dependent correlation (Heisenberg picture):</strong></p>
      <div class="equation">
        C(r,t) = ⟨O_i(0) O_j(t)⟩_c
      </div>
      <p>where O_i(t) = e^{iHt} O_i e^{-iHt}</p>

      <p><strong>Dynamical structure factor:</strong></p>
      <div class="equation">
        S(q,ω) = ∫ dt ∫ dr e^{-i(qr - ωt)} C(r,t)
      </div>
      <p>Fourier transform of space-time correlation</p>

      <p><strong>Physical meaning:</strong></p>
      <ul>
        <li>S(q,ω) = probability to scatter with momentum transfer q and energy ω</li>
        <li>Measured in neutron/X-ray scattering experiments</li>
        <li>Peaks at dispersion relation ω(q) of excitations</li>
      </ul>

      <p><strong>Sum rules:</strong></p>
      <div class="equation">
        ∫ dω S(q,ω) = ⟨[O_q, O_{-q}†]⟩ (f-sum rule)
      </div>
    </div>

    <h2>Decay of Correlations</h2>

    <div class="highlight-box">
      <h3>Gapped vs Gapless Systems</h3>

      <p><strong>Gapped systems (Δ > 0):</strong> Exponential decay</p>
      <div class="equation">
        C(r) ~ e^{-r/ξ} / r^{d-1+η}
      </div>
      <p>where:</p>
      <ul>
        <li><strong>ξ ~ v/Δ:</strong> Correlation length (finite)</li>
        <li><strong>v:</strong> Characteristic velocity</li>
        <li><strong>η:</strong> Anomalous dimension (usually small)</li>
      </ul>

      <p><strong>Gapless systems (Δ = 0):</strong> Power-law decay</p>
      <div class="equation">
        C(r) ~ 1/r^{d-2+η}
      </div>
      <ul>
        <li>No characteristic length scale (ξ → ∞)</li>
        <li>Long-range correlations</li>
        <li>Exponent η depends on universality class</li>
      </ul>

      <p><strong>Critical point:</strong> Transition from exponential to power-law</p>
      <div class="equation">
        C(r) ~ e^{-r/ξ(T)} / r^{d-2+η},  ξ(T) ~ |T - T_c|^{-ν} → ∞
      </div>
    </div>

    <div class="comparison-box">
      <h3>Correlation Decay in Different Phases</h3>
      <table class="comparison-table">
        <tr>
          <th>Phase/System</th>
          <th>Gap Δ</th>
          <th>C(r) behavior</th>
          <th>ξ</th>
        </tr>
        <tr>
          <td><strong>Gapped (trivial)</strong></td>
          <td>Δ > 0</td>
          <td>e^{-r/ξ}</td>
          <td>Finite ~ v/Δ</td>
        </tr>
        <tr>
          <td><strong>Gapped (topological)</strong></td>
          <td>Δ > 0</td>
          <td>e^{-r/ξ}</td>
          <td>Finite ~ v/Δ</td>
        </tr>
        <tr>
          <td><strong>Critical (CFT)</strong></td>
          <td>Δ = 0</td>
          <td>r^{-2Δ_O}</td>
          <td>ξ → ∞</td>
        </tr>
        <tr>
          <td><strong>Fermi liquid (metal)</strong></td>
          <td>Δ = 0</td>
          <td>r^{-d} (density)</td>
          <td>ξ → ∞</td>
        </tr>
        <tr>
          <td><strong>Algebraic spin liquid</strong></td>
          <td>Δ = 0</td>
          <td>r^{-α}</td>
          <td>ξ → ∞</td>
        </tr>
        <tr>
          <td><strong>Ordered phase (T>0)</strong></td>
          <td>-</td>
          <td>e^{-r/ξ(T)}</td>
          <td>Finite ~ e^{Δ/T}</td>
        </tr>
      </table>
    </div>

    <h2>Correlation Length</h2>

    <div class="highlight-box">
      <h3>Fundamental Length Scale</h3>

      <p><strong>Definition:</strong> Characteristic decay length of correlations</p>
      <div class="equation">
        C(r) ~ e^{-r/ξ}  for large r
      </div>

      <p><strong>Alternative definitions:</strong></p>

      <p><strong>1. From exponential fit:</strong></p>
      <div class="equation">
        ξ = -lim_{r→∞} r / log|C(r)|
      </div>

      <p><strong>2. From second moment:</strong></p>
      <div class="equation">
        ξ² = Σ_r r² C(r) / Σ_r C(r)
      </div>

      <p><strong>3. From Fourier transform:</strong></p>
      <div class="equation">
        ξ² ~ [∂²S(q)/∂q²]_{q=0} / S(0)
      </div>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Distance beyond which sites are effectively uncorrelated</li>
        <li>Size of correlated regions ("domains")</li>
        <li>Related to gap: ξ ~ v/Δ</li>
        <li>Diverges at critical points: ξ ~ |T - T_c|^{-ν}</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Example: 1D Ising Model</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = -J Σ_i σ_i^z σ_{i+1}^z - h Σ_i σ_i^x
      </div>

      <p><strong>Exact solution (Jordan-Wigner):</strong></p>

      <p><strong>Correlation function:</strong></p>
      <div class="equation">
        ⟨σ_0^z σ_r^z⟩ ~ e^{-r/ξ}
      </div>

      <p><strong>Correlation length:</strong></p>
      <div class="equation">
        ξ^{-1} = log|(J + h)/(J - h)|  for |h| &lt; J
      </div>

      <p><strong>Behavior:</strong></p>
      <ul>
        <li>h ≪ J: ξ ≈ J/(2h) (large, weak transverse field)</li>
        <li>h → J: ξ → ∞ (critical point)</li>
        <li>h ≫ J: ξ ≈ J/(2(h-J)) (short, strong field)</li>
      </ul>
    </div>

    <h2>Correlation and Entanglement</h2>

    <div class="info-box">
      <h3>Relationship Between Correlation and Entanglement</h3>

      <p><strong>Classical correlations:</strong> Captured by mutual information I(A:B)</p>
      <div class="equation">
        I(A:B) = S(A) + S(B) - S(AB) ≥ 0
      </div>

      <p><strong>Quantum correlations:</strong> Include entanglement</p>

      <p><strong>Quantum discord:</strong> Difference between quantum and classical mutual information</p>

      <p><strong>Connection to correlation functions:</strong></p>
      <ul>
        <li>Finite correlation length ξ → area law entanglement</li>
        <li>Power-law correlations → logarithmic entanglement (critical)</li>
        <li>Long-range entanglement (topological order) ≠ long-range correlations!</li>
      </ul>

      <p><strong>Example - Toric code:</strong></p>
      <ul>
        <li>Correlations: Exponential decay (gapped)</li>
        <li>Entanglement: Area law with topological correction -γ</li>
        <li>Long-range entanglement detected by γ, not C(r)</li>
      </ul>
    </div>

    <h2>Experimental Probes</h2>

    <div class="highlight-box">
      <h3>Measuring Correlation Functions</h3>

      <p><strong>1. Neutron scattering:</strong></p>
      <ul>
        <li>Measures S(q,ω) directly</li>
        <li>Momentum resolution: Δq ~ 0.01 Å⁻¹</li>
        <li>Energy resolution: Δω ~ 0.1 meV</li>
        <li>Access to dispersion relations, spectral weight</li>
      </ul>

      <p><strong>2. X-ray scattering (RIXS):</strong></p>
      <ul>
        <li>Resonant inelastic X-ray scattering</li>
        <li>Element-specific, orbital-selective</li>
        <li>Better energy resolution than neutrons for some excitations</li>
      </ul>

      <p><strong>3. STM (scanning tunneling microscopy):</strong></p>
      <ul>
        <li>Real-space imaging: See C(r) directly</li>
        <li>Quasiparticle interference patterns</li>
        <li>Atomic resolution (~ Å)</li>
      </ul>

      <p><strong>4. Quantum gas microscopy:</strong></p>
      <ul>
        <li>Single-atom resolution in optical lattices</li>
        <li>Directly image density-density correlations ⟨n_i n_j⟩</li>
        <li>Measure spin correlations ⟨σ_i^z σ_j^z⟩</li>
        <li>Extract correlation length ξ from exponential fits</li>
      </ul>

      <p><strong>5. Numerical methods:</strong></p>
      <ul>
        <li>DMRG/MPS: Compute ⟨O_i O_j⟩ for all i,j</li>
        <li>QMC: Statistical sampling of configurations</li>
        <li>Exact diagonalization: Full correlation matrix (small N)</li>
      </ul>
    </div>

    <h2>Correlation at Quantum Phase Transitions</h2>

    <div class="highlight-box">
      <h3>Critical Behavior</h3>

      <p><strong>At critical point (g = g_c):</strong></p>

      <p><strong>Correlation function:</strong></p>
      <div class="equation">
        C(r) ~ 1/r^{d-2+η}
      </div>
      <p>Power-law decay (no exponential cutoff)</p>

      <p><strong>Anomalous dimension η:</strong> Depends on universality class</p>
      <ul>
        <li>Ising (d=2): η = 1/4</li>
        <li>XY (d=2): η = 1/4 (BKT)</li>
        <li>Mean-field: η = 0</li>
      </ul>

      <p><strong>Scaling form near criticality:</strong></p>
      <div class="equation">
        C(r) ~ r^{-(d-2+η)} f(r/ξ)
      </div>
      <p>where f(x) ~ e^{-x} for x ≫ 1, f(x) ~ const for x ≪ 1</p>

      <p><strong>Diverging susceptibility:</strong></p>
      <div class="equation">
        χ = Σ_r C(r) ~ ξ^{2-η} ~ |T - T_c|^{-γ}
      </div>
      <p>where γ = ν(2 - η) (scaling relation)</p>
    </div>

    <div class="note-box">
      <h3>Example: 2D Ising Model at T_c</h3>

      <p><strong>Exact result (Onsager, McCoy-Wu):</strong></p>
      <div class="equation">
        ⟨σ_0 σ_r⟩ ~ 1/r^{1/4}  (d - 2 + η = 2 - 2 + 1/4 = 1/4)
      </div>

      <p><strong>Correlation length:</strong></p>
      <div class="equation">
        ξ ~ |T - T_c|^{-1}  (ν = 1)
      </div>

      <p><strong>Susceptibility:</strong></p>
      <div class="equation">
        χ ~ |T - T_c|^{-7/4}  (γ = 7/4)
      </div>

      <p><strong>Verification:</strong> γ = ν(2 - η) = 1(2 - 1/4) = 7/4 ✓</p>
    </note-box>

    <h2>Higher-Order Correlations</h2>

    <div class="info-box">
      <h3>Beyond Two-Point Functions</h3>

      <p><strong>Three-point function:</strong></p>
      <div class="equation">
        C(i,j,k) = ⟨O_i O_j O_k⟩_c
      </div>

      <p><strong>Connected part:</strong></p>
      <div class="equation">
        ⟨O_i O_j O_k⟩_c = ⟨O_i O_j O_k⟩ - ⟨O_i⟩⟨O_j O_k⟩_c - (perms) - ⟨O_i⟩⟨O_j⟩⟨O_k⟩
      </div>

      <p><strong>Physical meaning:</strong></p>
      <ul>
        <li>Three-body correlations (beyond pairwise)</li>
        <li>Detect non-Gaussian fluctuations</li>
        <li>Important for higher-order phase transitions</li>
      </ul>

      <p><strong>Four-point function:</strong></p>
      <div class="equation">
        C(i,j,k,ℓ) = ⟨O_i O_j O_k O_ℓ⟩_c
      </div>

      <p><strong>Out-of-time-order correlators (OTOC):</strong></p>
      <div class="equation">
        F(t) = ⟨[V(t), W(0)]²⟩
      </div>
      <ul>
        <li>Diagnose quantum chaos and information scrambling</li>
        <li>Butterfly effect: Exponential growth F(t) ~ e^{λ_L t}</li>
        <li>λ_L = Lyapunov exponent</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Correlation functions:</strong> C(r) = ⟨O_i O_j⟩_c quantify spatial/temporal correlations</li>
        <li><strong>Decay:</strong> Exponential e^{-r/ξ} (gapped) vs power-law r^{-α} (gapless)</li>
        <li><strong>Correlation length:</strong> ξ ~ v/Δ (gapped), ξ → ∞ (critical)</li>
        <li><strong>Critical point:</strong> Power-law C(r) ~ r^{-(d-2+η)}, diverging ξ ~ |T - T_c|^{-ν}</li>
        <li><strong>Entanglement connection:</strong> Finite ξ → area law, power-law → log violations</li>
        <li><strong>Experimental probes:</strong> Neutron scattering (S(q,ω)), STM (real space), quantum gas microscopy</li>
        <li><strong>Higher-order:</strong> Three-point, four-point, OTOC for scrambling and chaos</li>
      </ul>

      <p><strong>Correlation functions serve as versatile probes of quantum many-body systems, connecting microscopic physics to macroscopic behavior, detecting phase transitions, and revealing the structure of quantum entanglement.</strong></p>

      <p><strong>Next:</strong> Section 5.2.5 focuses specifically on entanglement measures and their properties in many-body systems.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_2_4'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
