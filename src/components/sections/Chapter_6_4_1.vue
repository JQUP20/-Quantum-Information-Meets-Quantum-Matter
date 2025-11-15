<template>
  <div class="section-content">
    <h1>6.4.1 The Essence of Fractional Quantum Hall States</h1>

    <p>The fractional quantum Hall effect (FQHE), discovered by Tsui, Stormer, and Gossard in 1982, represents the paradigmatic example of topological order and the first experimentally observed topologically ordered phase. Laughlin's brilliant 1983 explanation introduced revolutionary concepts: incompressible quantum liquids, fractionally charged quasiparticles, and anyonic statistics. Understanding the essence of FQHE—from microscopic wavefunctions to emergent field theories—reveals the deep principles underlying all topologically ordered states and provides the foundation for topological quantum computation.</p>

    <h2>Experimental Discovery and Basic Phenomenology</h2>

    <div class="info-box">
      <h3>The Fractional Quantum Hall Effect</h3>

      <p><strong>Experimental setup:</strong></p>
      <ul>
        <li>2D electron gas in GaAs/AlGaAs heterostructure</li>
        <li>Ultra-low temperatures: T ~ 10-100 mK</li>
        <li>Strong perpendicular magnetic field: B ~ 5-15 T</li>
        <li>High electron mobility: μ > 10⁶ cm²/Vs</li>
        <li>Low disorder (mean free path > 100 μm)</li>
      </ul>

      <p><strong>Observation:</strong></p>
      <div class="equation">
        σ_{xy} = ν (e²/h),  σ_{xx} → 0
      </div>
      <ul>
        <li>Hall conductance quantized at ν = 1/3, 2/5, 3/7, 2/3, ...</li>
        <li>Longitudinal resistance vanishes (dissipationless transport)</li>
        <li>Incompressible quantum liquid state</li>
      </ul>

      <p><strong>Filling fraction:</strong></p>
      <div class="equation">
        ν = n_{2D}/(eB/h) = N_e/N_φ
      </div>
      <ul>
        <li>n_{2D}: 2D electron density</li>
        <li>N_φ = BA/(h/e): Number of magnetic flux quanta</li>
        <li>Plateau observed at simple fractions: 1/3, 2/5, 3/7, ...</li>
      </ul>

      <p><strong>Energy gap:</strong></p>
      <ul>
        <li>Measured from activated transport: ρ ~ e^{-Δ/2T}</li>
        <li>ν = 1/3: Δ ~ 500 mK ~ 0.05 meV</li>
        <li>Gap protects incompressibility</li>
      </ul>
    </div>

    <h2>Landau Level Physics</h2>

    <div class="highlight-box">
      <h3>Single-Particle States</h3>

      <p><strong>Landau levels:</strong></p>
      <div class="equation">
        E_n = ℏω_c(n + 1/2),  ω_c = eB/m
      </div>
      <ul>
        <li>Highly degenerate: N_φ = BA/(h/e) states per level</li>
        <li>Macroscopic degeneracy N_φ ~ 10¹⁰-10¹²</li>
        <li>Spacing: ℏω_c ~ 10 meV ≫ Δ ~ 0.05 meV</li>
      </ul>

      <p><strong>Magnetic length:</strong></p>
      <div class="equation">
        ℓ_B = √(ℏ/eB) ~ 10 nm at B = 10 T
      </div>
      <ul>
        <li>Sets length scale for quantum Hall physics</li>
        <li>Wavefunction extent: Δx Δy ~ ℓ_B²</li>
      </ul>

      <p><strong>Lowest Landau level (LLL) approximation:</strong></p>
      <ul>
        <li>At strong field: ℏω_c ≫ e²/εℓ_B (kinetic ≫ interaction)</li>
        <li>Project to n=0 Landau level</li>
        <li>Interaction energy scale: e²/εℓ_B ~ 1 meV</li>
        <li>Many-body problem in single Landau level</li>
      </ul>

      <p><strong>Complex coordinates:</strong></p>
      <div class="equation">
        z = (x + iy)/√2ℓ_B,  z̄ = (x - iy)/√2ℓ_B
      </div>
      <ul>
        <li>LLL wavefunctions: Ψ(z) = P(z)e^{-|z|²/2}</li>
        <li>P(z): Analytic polynomial</li>
        <li>Degree N_φ - 1 for N_φ states</li>
      </ul>
    </div>

    <h2>Laughlin's Breakthrough: The ν = 1/m Wavefunction</h2>

    <div class="highlight-box">
      <h3>The Laughlin Ansatz</h3>

      <p><strong>Ground state wavefunction:</strong></p>
      <div class="equation">
        Ψ_m(z_1, ..., z_N) = ∏_{i<j} (z_i - z_j)^m e^{-Σ_k |z_k|²/4ℓ_B²}
      </div>
      <ul>
        <li>z_i = (x_i + iy_i)/√2ℓ_B: Electron positions in complex form</li>
        <li>m: Odd integer (Fermi statistics)</li>
        <li>m = 1: Non-interacting filled Landau level (IQH)</li>
        <li>m = 3: Laughlin state for ν = 1/3 FQHE</li>
        <li>m = 5: ν = 1/5 state (weaker, higher field)</li>
      </ul>

      <p><strong>Key properties:</strong></p>

      <p><strong>1. Antisymmetry (Fermi statistics):</strong></p>
      <div class="equation">
        Ψ(..., z_i, ..., z_j, ...) = -Ψ(..., z_j, ..., z_i, ...)
      </div>
      <ul>
        <li>Automatically satisfied for odd m</li>
        <li>(z_i - z_j)^m changes sign under exchange</li>
      </ul>

      <p><strong>2. Analyticity (Lowest Landau Level):</strong></p>
      <ul>
        <li>Polynomial in z_i (analytic function)</li>
        <li>Projects onto LLL automatically</li>
        <li>Highest occupied orbital: angular momentum L ~ mN²</li>
      </ul>

      <p><strong>3. Filling fraction:</strong></p>
      <div class="equation">
        ν = N_e/N_φ = N/[m·N(N-1)/2 + N] = 1/m (for large N)
      </div>
      <ul>
        <li>Degree of polynomial: m·N(N-1)/2</li>
        <li>Number of flux quanta: N_φ = degree + N</li>
      </ul>

      <p><strong>4. Correlation hole:</strong></p>
      <div class="equation">
        g(r) = |Ψ(z_1 = 0, z_2 = r, ...)|²/|Ψ(...)|² ~ r^{2m} for r → 0
      </div>
      <ul>
        <li>Pair correlation vanishes as r^{2m} at short distance</li>
        <li>Stronger than Fermi statistics (r² for m=1)</li>
        <li>Creates "correlation hole" of size ~ √m ℓ_B</li>
        <li>Minimizes Coulomb repulsion</li>
      </ul>
    </div>

    <h2>Plasma Analogy and Incompressibility</h2>

    <div class="info-box">
      <h3>Classical Plasma Mapping</h3>

      <p><strong>2D one-component plasma:</strong></p>
      <div class="equation">
        |Ψ_m|² = ∏_{i<j} |z_i - z_j|^{2m} e^{-Σ_k |z_k|²/2ℓ_B²}
      </div>
      <div class="equation">
        = e^{-βU},  U = -m Σ_{i<j} ln|z_i - z_j| + (1/4ℓ_B²)Σ_k |z_k|²
      </div>

      <p><strong>Interpretation:</strong></p>
      <ul>
        <li>Particles with logarithmic repulsion (2D Coulomb in uniform background)</li>
        <li>Coupling: β = 2m (plasma parameter)</li>
        <li>Neutralizing background: uniform positive charge density</li>
      </ul>

      <p><strong>Incompressibility:</strong></p>
      <ul>
        <li>For m ≥ 2: Plasma is in crystalline phase (Wigner crystal)</li>
        <li>Strong correlations prevent density fluctuations</li>
        <li>Incompressible quantum liquid</li>
        <li>Energy gap to add/remove particles</li>
      </ul>

      <p><strong>Energy calculation:</strong></p>
      <div class="equation">
        E_0/N = -(e²/εℓ_B)α_m
      </div>
      <ul>
        <li>α_m: Numerical constant depending on m</li>
        <li>α_3 ≈ 0.41 for ν = 1/3</li>
        <li>Excellent agreement with exact diagonalization</li>
      </ul>
    </div>

    <h2>Quasihole and Quasiparticle Excitations</h2>

    <div class="highlight-box">
      <h3>Fractionally Charged Excitations</h3>

      <p><strong>Quasihole (missing electron density):</strong></p>
      <div class="equation">
        Ψ_{qh}(η_1, ..., η_k) = ∏_{j=1}^k ∏_i (z_i - η_j) Ψ_m(z_1, ..., z_N)
      </div>
      <ul>
        <li>η_j: Quasihole positions</li>
        <li>Each factor ∏_i(z_i - η) creates zero at η</li>
        <li>Localized depletion of electron density</li>
      </ul>

      <p><strong>Quasihole charge:</strong></p>
      <div class="equation">
        Q_{qh} = +e/m
      </div>
      <ul>
        <li>Positive fractional charge</li>
        <li>For ν = 1/3: Q = +e/3</li>
        <li>Created by adding one flux quantum</li>
      </ul>

      <p><strong>Quasiparticle (excess electron density):</strong></p>
      <ul>
        <li>Conjugate to quasihole</li>
        <li>Charge: Q_{qp} = -e/m</li>
        <li>Created by removing flux quantum</li>
        <li>More complex wavefunction (not simple polynomial)</li>
      </ul>

      <p><strong>Charge fractionalization mechanism:</strong></p>
      <ul>
        <li>Electron splits into m quasiholes: e → m × (e/m)</li>
        <li>Emergent phenomenon (no fractional charges in vacuum)</li>
        <li>Protected by incompressible liquid</li>
        <li>Cannot be isolated individually</li>
      </ul>

      <p><strong>Energy gap:</strong></p>
      <div class="equation">
        Δ_{qh} ~ (e²/εℓ_B)/√m ~ 0.05 eV/√m
      </div>
      <ul>
        <li>Cost to create quasihole-quasiparticle pair</li>
        <li>Decreases with m (weaker states at higher ν)</li>
        <li>Measured: Δ(1/3) ~ 50 K, Δ(2/5) ~ 30 K</li>
      </ul>
    </div>

    <h2>Anyonic Statistics</h2>

    <div class="highlight-box">
      <h3>Fractional Exchange Statistics</h3>

      <p><strong>Berry phase from adiabatic exchange:</strong></p>
      <div class="equation">
        |Ψ_{qh}(η_1, η_2, ...other)⟩ → e^{iθ}|Ψ_{qh}(η_2, η_1, ...other)⟩
      </div>

      <p><strong>Statistical angle:</strong></p>
      <div class="equation">
        θ = π/m
      </div>
      <ul>
        <li>ν = 1/3: θ = π/3 = 60°</li>
        <li>ν = 1/5: θ = π/5 = 36°</li>
        <li>Intermediate between fermions (π) and bosons (0)</li>
      </ul>

      <p><strong>Derivation from wavefunction:</strong></p>
      <div class="equation">
        Ψ_{qh}(η_1, η_2) ∝ ∏_i (z_i - η_1)(z_i - η_2) Ψ_m
      </div>
      <ul>
        <li>Exchange η_1 ↔ η_2 via contour around electrons</li>
        <li>Each electron contributes phase from (z - η_1)/(z - η_2)</li>
        <li>Total phase: 2π × (charge) = 2π/m</li>
        <li>Half-exchange: θ = π/m</li>
      </ul>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Quasihole carries fractional charge e/m</li>
        <li>Braiding around electron (charge e) gives phase 2πν = 2π/m</li>
        <li>Aharonov-Bohm effect with fractional charge</li>
        <li>Flux attachment: Each quasihole sees m flux quanta attached to others</li>
      </ul>
    </div>

    <h2>Chern-Simons Effective Field Theory</h2>

    <div class="info-box">
      <h3>Topological Field Theory Description</h3>

      <p><strong>Chern-Simons Lagrangian:</strong></p>
      <div class="equation">
        ℒ = (m/4π)ε^{μνλ}a_μ∂_νa_λ + (1/2π)ε^{μνλ}A_μ∂_νa_λ
      </div>
      <ul>
        <li>a_μ: Emergent gauge field (couples to quasiholes)</li>
        <li>A_μ: External electromagnetic field</li>
        <li>m: Level (same as Laughlin m)</li>
        <li>Topological: No local degrees of freedom</li>
      </ul>

      <p><strong>Equations of motion:</strong></p>
      <div class="equation">
        j_e = (m/2π)ε^{μν}∂_μa_ν,  j_{qh} = (1/2π)ε^{μν}∂_μa_ν
      </div>
      <ul>
        <li>Electron current j_e tied to emergent flux</li>
        <li>Quasihole current j_{qh} tied to emergent flux</li>
      </ul>

      <p><strong>Hall conductance:</strong></p>
      <div class="equation">
        σ_{xy} = 1/m (e²/h)
      </div>
      <ul>
        <li>Emerges from CS coefficient</li>
        <li>Topological response (no local dynamics)</li>
      </ul>

      <p><strong>Flux-charge relation:</strong></p>
      <div class="equation">
        Q = (1/m)Φ
      </div>
      <ul>
        <li>One flux quantum Φ₀ = h/e creates charge e/m</li>
        <li>Explains fractional charge</li>
      </ul>

      <p><strong>Anyonic statistics from Aharonov-Bohm:</strong></p>
      <ul>
        <li>Each quasihole (charge e/m) attached to m flux quanta</li>
        <li>Braiding two quasiholes: phase = 2π(e/m)(m/Φ₀) = 2π/m</li>
        <li>Statistical angle θ = π/m</li>
      </ul>
    </div>

    <h2>Hierarchical States and Jain Sequence</h2>

    <div class="highlight-box">
      <h3>Composite Fermion Picture</h3>

      <p><strong>Jain's composite fermion construction:</strong></p>
      <div class="equation">
        ν = p/(2ps ± 1)
      </div>
      <ul>
        <li>Attach 2s flux quanta to each electron</li>
        <li>Composite fermions in effective field B*</li>
        <li>Fill p effective Landau levels</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li>ν = 1/3: p=1, s=1 (Laughlin)</li>
        <li>ν = 2/5: p=2, s=1</li>
        <li>ν = 3/7: p=3, s=1</li>
        <li>ν = 2/3: p=2, s=1 (particle-hole conjugate)</li>
      </ul>

      <p><strong>Experimental observation:</strong></p>
      <ul>
        <li>Jain sequence: ν = n/(2n±1) for n=1,2,3,...</li>
        <li>Strongest FQHE states</li>
        <li>Composite fermion cyclotron resonance observed</li>
      </ul>

      <p><strong>Hierarchy construction:</strong></p>
      <ul>
        <li>Quasiholes of ν=1/3 form their own FQHE</li>
        <li>Generates daughter states: 2/5, 3/7, 4/9, ...</li>
        <li>Infinite hierarchy of fractions</li>
        <li>Decreasing energy gaps down hierarchy</li>
      </ul>
    </div>

    <h2>Chiral Edge States</h2>

    <div class="info-box">
      <h3>Bulk-Boundary Correspondence</h3>

      <p><strong>Edge theory (chiral Luttinger liquid):</strong></p>
      <div class="equation">
        ℒ_{edge} = (m/4π)(∂_tφ∂_xφ - v∂_xφ∂_xφ)
      </div>
      <ul>
        <li>φ: Bosonic edge field</li>
        <li>v: Edge velocity ~ 10⁵ m/s</li>
        <li>Chirality: Right-moving only</li>
      </ul>

      <p><strong>Charge and current:</strong></p>
      <div class="equation">
        ρ = (1/2π)∂_xφ,  j = (e/2πm)∂_tφ
      </div>

      <p><strong>Quantized conductance:</strong></p>
      <div class="equation">
        G_{edge} = ν(e²/h) = (e²/h)/m
      </div>
      <ul>
        <li>Perfect transmission (no backscattering)</li>
        <li>Topological protection</li>
      </ul>

      <p><strong>Electron operator:</strong></p>
      <div class="equation">
        ψ(x) ~ e^{imφ(x)}
      </div>
      <ul>
        <li>Fractional charge excitations: e^{iφ(x)} has charge e/m</li>
        <li>Statistics encoded in commutation relations</li>
      </ul>

      <p><strong>Experimental probes:</strong></p>
      <ul>
        <li>Tunneling spectroscopy</li>
        <li>Edge velocity measurement</li>
        <li>Shot noise (fractional charge)</li>
        <li>Interferometry (anyonic phase)</li>
      </ul>
    </div>

    <h2>Experimental Verification</h2>

    <div class="highlight-box">
      <h3>Key Experiments</h3>

      <p><strong>1. Quantized Hall conductance (1982):</strong></p>
      <ul>
        <li>Tsui, Stormer, Gossard: First observation at ν=1/3</li>
        <li>σ_xy = (1/3)(e²/h) with precision ~10^{-6}</li>
        <li>Evidence for incompressible quantum liquid</li>
      </ul>

      <p><strong>2. Fractional charge (1995-1997):</strong></p>
      <ul>
        <li>Shot noise measurement: S = 2eI(e/3)</li>
        <li>Direct confirmation of e/3 quasiparticles</li>
        <li>Saminadayar et al., de-Picciotto et al.</li>
      </ul>

      <p><strong>3. Anyonic statistics (2020):</strong></p>
      <ul>
        <li>Anyon collider experiment (Bartolomei et al.)</li>
        <li>Measured braiding phase θ = π/3</li>
        <li>Confirms anyonic nature of ν=1/3 excitations</li>
      </ul>

      <p><strong>4. Topological entanglement entropy (2006-2009):</strong></p>
      <ul>
        <li>γ = ln(√3) for ν=1/3 (theoretical prediction)</li>
        <li>Numerical verification in small systems</li>
        <li>Confirms topological order</li>
      </ul>

      <p><strong>5. Composite fermion cyclotron resonance:</strong></p>
      <ul>
        <li>Direct observation of composite fermions</li>
        <li>Effective mass m* ~ (0.5-1.0)m_e</li>
        <li>Supports Jain's picture</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Essential features of FQHE:</strong></p>
      <ul>
        <li><strong>Laughlin wavefunction:</strong> Ψ_m = ∏_{i<j}(z_i-z_j)^m e^{-Σ|z_k|²/4ℓ_B²} describes incompressible quantum liquid at ν=1/m</li>
        <li><strong>Plasma analogy:</strong> 2D Coulomb plasma with β=2m explains incompressibility and energy gap</li>
        <li><strong>Fractional charge:</strong> Quasiholes carry Q = e/m, quasiparticles Q = -e/m (experimentally verified)</li>
        <li><strong>Anyonic statistics:</strong> Exchange phase θ = π/m, neither bosonic nor fermionic (measured for ν=1/3)</li>
        <li><strong>Energy gap:</strong> Δ ~ (e²/εℓ_B)/√m protects topological order</li>
        <li><strong>Chern-Simons theory:</strong> Effective topological field theory captures all low-energy physics</li>
        <li><strong>Composite fermions:</strong> Jain sequence ν = p/(2ps±1) explains hierarchy of FQHE states</li>
        <li><strong>Chiral edge modes:</strong> Gapless boundary excitations with quantized conductance G = ν(e²/h)</li>
        <li><strong>Topological entanglement:</strong> γ = ln√m characterizes topological order</li>
      </ul>

      <p><strong>Significance:</strong> FQHE provides the first experimental realization of topological order, demonstrating that quantum many-body systems can exhibit phases beyond Landau's symmetry-breaking paradigm. The anyonic excitations form the foundation for proposals of topological quantum computation.</p>

      <p><strong>Next:</strong> Section 6.4.2 develops intuitive pictures for understanding topological order more generally.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_4_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
