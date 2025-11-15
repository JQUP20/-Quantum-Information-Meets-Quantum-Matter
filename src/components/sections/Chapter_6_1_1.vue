<template>
  <div class="section-content">
    <h1>6.1.1 Phases of Matter and Landau's Symmetry Breaking Theory</h1>

    <p>For most of the 20th century, our understanding of phases of matter was dominated by Landau's symmetry breaking paradigm. This elegant framework successfully explains familiar phases like solids, liquids, and magnets through the concept of spontaneous symmetry breaking and local order parameters. Understanding this classical paradigm is essential for appreciating the revolutionary nature of topological order.</p>

    <h2>The Landau Paradigm</h2>

    <div class="highlight-box">
      <h3>Core Principles</h3>

      <p><strong>Central idea:</strong> Different phases of matter are distinguished by their symmetry</p>

      <p><strong>Key concepts:</strong></p>
      <ul>
        <li><strong>Symmetry group G:</strong> Hamiltonian invariant under transformations in G</li>
        <li><strong>Symmetry breaking:</strong> Ground state has lower symmetry (subgroup H ⊂ G)</li>
        <li><strong>Order parameter:</strong> Local observable that distinguishes phases</li>
        <li><strong>Universality:</strong> Phase transitions characterized by critical exponents</li>
      </ul>

      <p><strong>Landau's classification scheme:</strong></p>
      <div class="equation">
        Phase ↔ Pattern of symmetry breaking ↔ Order parameter
      </div>

      <p><strong>Mathematical framework:</strong></p>
      <ul>
        <li>Hamiltonian H invariant under symmetry G</li>
        <li>In broken phase: ⟨ψ|O|ψ⟩ ≠ 0 for some order parameter O</li>
        <li>Under g ∈ G: ⟨ψ|g†Og|ψ⟩ ≠ ⟨ψ|O|ψ⟩</li>
        <li>Multiple degenerate ground states related by symmetry</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Classical Examples</h3>

      <p><strong>1. Liquid-Gas Transition (Z₂ symmetry):</strong></p>
      <ul>
        <li><strong>Symmetry:</strong> Exchange particles ↔ holes</li>
        <li><strong>Order parameter:</strong> Density ρ - ρ_c</li>
        <li><strong>Breaking:</strong> High density (liquid) or low density (gas)</li>
        <li><strong>Critical point:</strong> Ising universality class</li>
      </ul>

      <p><strong>2. Ferromagnet (Continuous rotation SO(3)):</strong></p>
      <ul>
        <li><strong>Symmetry:</strong> Spin rotation invariance</li>
        <li><strong>Order parameter:</strong> Magnetization M = ⟨Σ_i S_i⟩/N</li>
        <li><strong>Breaking:</strong> Spins align in particular direction (M ≠ 0)</li>
        <li><strong>Goldstone modes:</strong> Spin waves (gapless excitations)</li>
      </ul>

      <p><strong>3. Crystal (Translation symmetry):</strong></p>
      <ul>
        <li><strong>Symmetry:</strong> Continuous translations in space</li>
        <li><strong>Order parameter:</strong> Density modulation ⟨ρ(r)⟩ = ρ₀ + Σ_G ρ_G e^{iG·r}</li>
        <li><strong>Breaking:</strong> Periodic lattice structure</li>
        <li><strong>Goldstone modes:</strong> Phonons (sound waves)</li>
      </ul>

      <p><strong>4. Superfluid (U(1) gauge symmetry):</strong></p>
      <ul>
        <li><strong>Symmetry:</strong> Global phase rotation ψ → e^{iθ}ψ</li>
        <li><strong>Order parameter:</strong> ⟨ψ⟩ = √ρ₀ e^{iφ} (complex field)</li>
        <li><strong>Breaking:</strong> Condensate picks definite phase</li>
        <li><strong>Goldstone mode:</strong> Phase fluctuations (second sound)</li>
      </ul>
    </div>

    <h2>Order Parameters</h2>

    <div class="highlight-box">
      <h3>Defining Properties</h3>

      <p><strong>Order parameter O:</strong> Local observable distinguishing phases</p>

      <p><strong>Requirements:</strong></p>
      <ul>
        <li><strong>Locality:</strong> O = O(r) defined at each point r in space</li>
        <li><strong>Transformation:</strong> O changes under symmetry operations</li>
        <li><strong>Zero in symmetric phase:</strong> ⟨O⟩ = 0 when symmetry preserved</li>
        <li><strong>Non-zero in broken phase:</strong> ⟨O⟩ ≠ 0 indicates symmetry breaking</li>
      </ul>

      <p><strong>Mathematical structure:</strong></p>
      <div class="equation">
        O transforms as representation of symmetry group G
      </div>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Scalar:</strong> Density (Z₂), energy density</li>
        <li><strong>Vector:</strong> Magnetization M (SO(3)), polarization P</li>
        <li><strong>Tensor:</strong> Nematic order (liquid crystals)</li>
        <li><strong>Complex:</strong> Superfluid order parameter ψ (U(1))</li>
      </ul>

      <p><strong>Spatial dependence:</strong></p>
      <div class="equation">
        ⟨O(r)⟩ = { 0        (symmetric phase)
                   O₀ ≠ 0   (broken phase, uniform)
                   f(r)     (broken phase, modulated)
      </div>
    </div>

    <h2>Landau Free Energy</h2>

    <div class="info-box">
      <h3>Ginzburg-Landau Theory</h3>

      <p><strong>Free energy functional:</strong></p>
      <div class="equation">
        F[O] = ∫ d³r [f₀ + a|O|² + (b/2)|O|⁴ + c|∇O|² + ...]
      </div>

      <p><strong>Parameters:</strong></p>
      <ul>
        <li><strong>a(T):</strong> Temperature-dependent coefficient, a ~ (T - T_c)</li>
        <li><strong>b > 0:</strong> Stabilizes minimum (prevents |O| → ∞)</li>
        <li><strong>c > 0:</strong> Penalizes spatial gradients (stiffness)</li>
      </ul>

      <p><strong>Minimization:</strong></p>
      <div class="equation">
        δF/δO = 0 → -c∇²O + aO + b|O|²O = 0
      </div>

      <p><strong>Uniform solution:</strong></p>
      <div class="equation">
        |O₀|² = { 0           (a > 0, T > T_c, symmetric)
                  -a/b        (a &lt; 0, T &lt; T_c, broken)
      </div>

      <p><strong>Second-order phase transition:</strong></p>
      <ul>
        <li>Order parameter grows continuously: |O| ~ (T_c - T)^β</li>
        <li>Critical exponent: β = 1/2 (mean-field theory)</li>
        <li>Correlation length diverges: ξ ~ |T - T_c|^{-ν}</li>
      </ul>

      <p><strong>Correlation function:</strong></p>
      <div class="equation">
        ⟨O(r)O(0)⟩_c ~ e^{-r/ξ} / r^{d-2+η}
      </div>
      <p>Exponential decay with correlation length ξ ~ √(c/|a|)</p>
    </div>

    <h2>Broken Symmetry and Ground State Degeneracy</h2>

    <div class="note-box">
      <h3>Goldstone's Theorem</h3>

      <p><strong>Statement:</strong> Spontaneous breaking of continuous symmetry → gapless modes</p>

      <p><strong>Setup:</strong></p>
      <ul>
        <li>Continuous symmetry group G (compact Lie group)</li>
        <li>Ground state |ψ₀⟩ invariant under subgroup H ⊂ G</li>
        <li>Broken generators: Those in G but not in H</li>
      </ul>

      <p><strong>Goldstone modes:</strong></p>
      <div class="equation">
        Number of gapless modes = dim(G) - dim(H)
      </div>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Broken generators create states |g·ψ₀⟩ with same energy</li>
        <li>Motion through degenerate manifold costs no energy</li>
        <li>Long-wavelength fluctuations are gapless</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Ferromagnet:</strong> SO(3) → SO(2), 2 Goldstone modes (spin waves)</li>
        <li><strong>Superfluid:</strong> U(1) → ∅, 1 Goldstone mode (phase fluctuations)</li>
        <li><strong>Crystal:</strong> Continuous translation → discrete lattice, phonons</li>
      </ul>

      <p><strong>Dispersion relation:</strong></p>
      <div class="equation">
        ω(k) ~ v|k| (linear for k → 0)
      </div>
      <p>Gapless and linear dispersion near k = 0</p>
    </div>

    <div class="comparison-box">
      <h3>Discrete vs Continuous Symmetry Breaking</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Discrete Symmetry (e.g., Z₂)</th>
          <th>Continuous Symmetry (e.g., U(1))</th>
        </tr>
        <tr>
          <td><strong>Degeneracy</strong></td>
          <td>Finite (|G|/|H| states)</td>
          <td>Continuous manifold</td>
        </tr>
        <tr>
          <td><strong>Goldstone modes</strong></td>
          <td>None (discrete)</td>
          <td>Yes (gapless)</td>
        </tr>
        <tr>
          <td><strong>Domain walls</strong></td>
          <td>Yes (cost surface energy)</td>
          <td>Topological defects (vortices)</td>
        </tr>
        <tr>
          <td><strong>Example</strong></td>
          <td>Ising magnet (↑ or ↓)</td>
          <td>XY magnet (angle θ)</td>
        </tr>
        <tr>
          <td><strong>Excitation gap</strong></td>
          <td>Δ > 0 (magnons)</td>
          <td>Δ = 0 (Goldstone)</td>
        </tr>
        <tr>
          <td><strong>Mermin-Wagner</strong></td>
          <td>Can break in 2D</td>
          <td>Cannot break in 2D (thermal fluctuations)</td>
        </tr>
      </table>
    </div>

    <h2>Phase Transitions in Landau Theory</h2>

    <div class="highlight-box">
      <h3>Classification of Transitions</h3>

      <p><strong>First-order transition:</strong></p>
      <ul>
        <li>Discontinuous jump in order parameter</li>
        <li>Latent heat released/absorbed</li>
        <li>Coexistence region</li>
        <li>Example: Liquid-gas (away from critical point)</li>
      </ul>

      <p><strong>Second-order (continuous) transition:</strong></p>
      <ul>
        <li>Order parameter grows continuously from zero</li>
        <li>No latent heat</li>
        <li>Power-law correlations at T_c</li>
        <li>Example: Ferromagnet, superfluid</li>
      </ul>

      <p><strong>Critical phenomena:</strong></p>
      <div class="equation">
        Physical quantities ~ |T - T_c|^{-exponent}
      </div>

      <p><strong>Universal critical exponents:</strong></p>
      <ul>
        <li><strong>α:</strong> Specific heat C ~ |T - T_c|^{-α}</li>
        <li><strong>β:</strong> Order parameter |O| ~ |T - T_c|^β</li>
        <li><strong>γ:</strong> Susceptibility χ ~ |T - T_c|^{-γ}</li>
        <li><strong>ν:</strong> Correlation length ξ ~ |T - T_c|^{-ν}</li>
        <li><strong>η:</strong> Anomalous dimension in correlator</li>
      </ul>

      <p><strong>Scaling relations:</strong></p>
      <div class="equation">
        α + 2β + γ = 2,  ν(2 - η) = γ
      </div>
      <p>Only 2 independent exponents in d dimensions</p>
    </div>

    <h2>Limitations of Landau Theory</h2>

    <div class="note-box">
      <h3>What Landau Theory Cannot Explain</h3>

      <p><strong>Mermin-Wagner theorem:</strong></p>
      <ul>
        <li>Continuous symmetry cannot break in d ≤ 2 at finite T</li>
        <li>Thermal fluctuations destroy long-range order</li>
        <li>But quantum fluctuations (T=0) can still break symmetry</li>
      </ul>

      <p><strong>Topological defects:</strong></p>
      <ul>
        <li>Vortices in superfluids</li>
        <li>Magnetic monopoles</li>
        <li>Skyrmions in magnets</li>
        <li>Essential for Kosterlitz-Thouless transitions</li>
      </ul>

      <p><strong>Beyond Landau paradigm:</strong></p>
      <ul>
        <li><strong>Topological order:</strong> No local order parameter!</li>
        <li><strong>Fractional quantum Hall effect:</strong> Same symmetry, different phases</li>
        <li><strong>Quantum spin liquids:</strong> Highly entangled, no symmetry breaking</li>
        <li><strong>Symmetry-protected topological phases:</strong> Protected by symmetry but not broken</li>
      </ul>

      <p><strong>The crisis of Landau theory:</strong></p>
      <div class="equation">
        Different phases with SAME symmetry → Cannot distinguish by order parameter
      </div>

      <p><strong>Examples requiring new paradigm:</strong></p>
      <ul>
        <li>Integer vs fractional quantum Hall states (both break no symmetry)</li>
        <li>Different topological orders in 2D (toric code, double semion, etc.)</li>
        <li>Gapped spin liquids (Z₂, non-abelian, etc.)</li>
      </ul>
    </div>

    <h2>Historical Context</h2>

    <div class="info-box">
      <h3>Development of Landau Theory</h3>

      <p><strong>1930s-1950s: Foundation</strong></p>
      <ul>
        <li><strong>1937:</strong> Landau introduces symmetry breaking concept</li>
        <li><strong>1950:</strong> Ginzburg-Landau theory of superconductivity</li>
        <li>Unified understanding of phase transitions</li>
      </ul>

      <p><strong>1960s-1970s: Refinement</strong></p>
      <ul>
        <li><strong>1962:</strong> Goldstone theorem (gapless modes)</li>
        <li><strong>1966:</strong> Mermin-Wagner theorem (no breaking in 2D)</li>
        <li><strong>1971:</strong> Wilson's renormalization group theory</li>
        <li><strong>1972:</strong> Kosterlitz-Thouless transition (topological defects)</li>
      </ul>

      <p><strong>1980s: Crisis emerges</strong></p>
      <ul>
        <li><strong>1982:</strong> Fractional quantum Hall effect discovered</li>
        <li><strong>1987:</strong> High-T_c superconductivity (strange metal phase)</li>
        <li>Realization that Landau paradigm insufficient</li>
      </ul>

      <p><strong>1990s-present: Beyond Landau</strong></p>
      <ul>
        <li><strong>1990:</strong> Wen introduces concept of topological order</li>
        <li><strong>1997:</strong> Kitaev's toric code model</li>
        <li><strong>2000s:</strong> Classification of topological phases</li>
        <li><strong>2010s:</strong> Experimental realizations</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Landau paradigm:</strong> Phases distinguished by symmetry breaking and local order parameters</li>
        <li><strong>Order parameter:</strong> Local observable ⟨O(r)⟩ that transforms under symmetry and is zero/non-zero</li>
        <li><strong>Ginzburg-Landau theory:</strong> F ~ a|O|² + b|O|⁴ + c|∇O|² captures phase transitions</li>
        <li><strong>Goldstone theorem:</strong> Continuous symmetry breaking → gapless modes</li>
        <li><strong>Universality:</strong> Phase transitions characterized by critical exponents, independent of microscopic details</li>
        <li><strong>Success:</strong> Explains vast majority of classical phases (magnets, superfluids, crystals, etc.)</li>
        <li><strong>Limitations:</strong> Cannot distinguish phases with same symmetry (e.g., topologically ordered states)</li>
        <li><strong>Need for new paradigm:</strong> Topological order goes beyond symmetry breaking</li>
      </ul>

      <p><strong>Next:</strong> Section 6.1.2 explores quantum phases at zero temperature, where quantum fluctuations replace thermal fluctuations and new phenomena emerge.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_1_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
