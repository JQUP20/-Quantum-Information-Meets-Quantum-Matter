<template>
  <div class="section-content">
    <h1>6.2.1 The Discovery of Topological Order</h1>

    <p>The discovery of topological order represents one of the most profound paradigm shifts in condensed matter physics. It emerged from the realization that the Landau symmetry-breaking framework, despite its tremendous success, could not explain certain exotic quantum phases. This section traces the historical path that led to this revolutionary concept.</p>

    <h2>The Fractional Quantum Hall Effect (1982)</h2>

    <div class="highlight-box">
      <h3>Experimental Discovery</h3>

      <p><strong>Integer Quantum Hall Effect (1980):</strong></p>
      <ul>
        <li>Klaus von Klitzing discovers quantized Hall conductance</li>
        <li>σ_xy = ne²/h where n is integer</li>
        <li>Explained by filled Landau levels (non-interacting electrons)</li>
        <li>Nobel Prize 1985</li>
      </ul>

      <p><strong>Fractional Quantum Hall Effect (1982):</strong></p>
      <ul>
        <li><strong>Discovery:</strong> Tsui, Störmer, and Gossard observe plateaus at fractional filling</li>
        <li><strong>Conductance:</strong> σ_xy = (ν)e²/h where ν = 1/3, 2/5, 3/7, ... (fractions!)</li>
        <li><strong>Key observation:</strong> Requires ultra-clean samples and strong interactions</li>
        <li><strong>Nobel Prize:</strong> 1998 (Tsui, Störmer, Laughlin)</li>
      </ul>

      <p><strong>Experimental setup:</strong></p>
      <div class="equation">
        2D electron gas in GaAs/AlGaAs heterostructure<br>
        Strong perpendicular magnetic field B ~ 10 T<br>
        Temperature T ~ 10-100 mK<br>
        Mobility μ > 10⁶ cm²/Vs (ultra-clean)
      </div>

      <p><strong>Hall resistance:</strong></p>
      <div class="equation">
        ρ_xy = h/(νe²) at filling fraction ν
      </div>

      <p><strong>Puzzle:</strong></p>
      <ul>
        <li>Integer QHE: Non-interacting electrons, topological band theory</li>
        <li>Fractional QHE: <strong>Requires strong electron-electron interactions!</strong></li>
        <li>Cannot be explained by single-particle physics</li>
        <li>No obvious symmetry breaking</li>
      </ul>
    </div>

    <h2>Laughlin's Wavefunction (1983)</h2>

    <div class="info-box">
      <h3>Theoretical Breakthrough</h3>

      <p><strong>Laughlin's ansatz for ν = 1/m (m odd integer):</strong></p>
      <div class="equation">
        Ψ_m(z_1, ..., z_N) = ∏_{i&lt;j} (z_i - z_j)^m e^{-Σ_k |z_k|²/4ℓ_B²}
      </div>
      <ul>
        <li>z_i = x_i + iy_i: Complex coordinates of electron i</li>
        <li>ℓ_B = √(ℏ/eB): Magnetic length</li>
        <li>m = 3 gives ν = 1/3 state</li>
      </ul>

      <p><strong>Key properties:</strong></p>
      <ul>
        <li><strong>Antisymmetric:</strong> Power m ensures fermionic statistics (m odd)</li>
        <li><strong>Analytic:</strong> Zeros at z_i = z_j of order m</li>
        <li><strong>Correlation hole:</strong> Electrons avoid each other more strongly than in Fermi liquid</li>
        <li><strong>Incompressible:</strong> Energy gap to excitations</li>
      </ul>

      <p><strong>Physical interpretation:</strong></p>
      <div class="equation">
        |Ψ|² ~ ∏_{i&lt;j} |z_i - z_j|^{2m}
      </div>
      <ul>
        <li>Electrons repel more strongly than Pauli exclusion alone</li>
        <li>Forms new kind of quantum fluid</li>
        <li>Gap protects state against perturbations</li>
      </ul>

      <p><strong>Numerical verification:</strong></p>
      <ul>
        <li>Exact diagonalization confirms Laughlin state is exact ground state for certain model Hamiltonians</li>
        <li>Overlap with actual ground state > 0.99</li>
        <li>Energy gap observed in finite-size systems</li>
      </ul>
    </div>

    <h2>Fractional Charge and Statistics</h2>

    <div class="highlight-box">
      <h3>Quasiparticle Excitations</h3>

      <p><strong>Laughlin's quasihole:</strong></p>
      <div class="equation">
        Ψ_qh(η) = ∏_i (z_i - η) Ψ_m(z_1, ..., z_N)
      </div>
      <ul>
        <li>η: Position of quasihole</li>
        <li>Zero of wavefunction at each electron position</li>
      </ul>

      <p><strong>Fractional charge:</strong></p>
      <div class="equation">
        Q_qh = +e/m (for ν = 1/m)
      </div>
      <ul>
        <li>Quasihole has charge +e/3 for m = 3</li>
        <li>NOT an electron or hole (charge ±e)</li>
        <li><strong>Emergent excitation with fractional quantum number!</strong></li>
      </ul>

      <p><strong>Fractional statistics (Arovas, Schrieffer, Wilczek 1984):</strong></p>
      <div class="equation">
        Ψ(... r_i ... r_j ...) → e^{iθ} Ψ(... r_j ... r_i ...)
      </div>
      <ul>
        <li>θ = π/m for quasiholes in ν = 1/m state</li>
        <li>θ = π for fermions, θ = 0 for bosons</li>
        <li><strong>Anyons:</strong> Particles with fractional statistics in 2D</li>
      </ul>

      <p><strong>Berry phase calculation:</strong></p>
      <ul>
        <li>Adiabatically exchange two quasiholes</li>
        <li>Wavefunction acquires geometric phase</li>
        <li>Phase = π/m (not 0 or π)</li>
        <li>Purely 2D phenomenon (braiding)</li>
      </ul>
    </div>

    <h2>The Crisis of Landau Paradigm</h2>

    <div class="note-box">
      <h3>Why FQHE Breaks Landau Theory</h3>

      <p><strong>Attempt to apply Landau paradigm:</strong></p>

      <p><strong>Question 1: What symmetry is broken?</strong></p>
      <ul>
        <li>Time-reversal: Already broken by magnetic field (same as IQHE)</li>
        <li>Translation: Broken to discrete symmetry (lattice)</li>
        <li>Rotation: Explicitly broken by sample geometry</li>
        <li><strong>Problem:</strong> Different FQHE states (ν = 1/3, 2/5, 3/7) have SAME symmetries!</li>
      </ul>

      <p><strong>Question 2: What is the order parameter?</strong></p>
      <ul>
        <li>No local order parameter distinguishes ν = 1/3 from ν = 2/5</li>
        <li>⟨ρ(r)⟩ uniform in both states</li>
        <li>⟨j(r)⟩ = 0 in both ground states</li>
        <li><strong>Problem:</strong> Cannot write local operator O(r) that differentiates them!</li>
      </ul>

      <p><strong>Question 3: How to characterize phases?</strong></p>
      <ul>
        <li>Landau: Phase ↔ broken symmetry ↔ order parameter</li>
        <li>FQHE: <strong>Same symmetry, different phases</strong></li>
        <li>Need new framework beyond symmetry breaking</li>
      </ul>

      <p><strong>The paradigm shift:</strong></p>
      <div class="equation">
        Landau: Local order parameter defines phase<br>
        Topological: Global (non-local) pattern of entanglement defines phase
      </div>
    </div>

    <h2>Early Theoretical Developments</h2>

    <div class="info-box">
      <h3>Emergence of New Concepts</h3>

      <p><strong>1983-1988: Foundational work</strong></p>

      <p><strong>Haldane's hierarchy (1983):</strong></p>
      <ul>
        <li>Constructs wavefunctions for ν = p/(2p+1)</li>
        <li>Quasiparticles of one level form new FQHE state</li>
        <li>Infinite hierarchy of states</li>
      </ul>

      <p><strong>Chern-Simons theory (Wilczek, Witten 1980s):</strong></p>
      <ul>
        <li>Effective field theory for FQHE</li>
        <li>Gauge theory description</li>
        <li>Connects to anyonic statistics</li>
      </ul>

      <p><strong>Topological field theory:</strong></p>
      <ul>
        <li>Ground state degeneracy depends on topology (genus)</li>
        <li>Chiral edge states</li>
        <li>Modular transformations</li>
      </ul>

      <p><strong>1989-1990: Wen's conceptual breakthrough</strong></p>

      <p><strong>Wen introduces "topological order" (1990):</strong></p>
      <ul>
        <li>New type of order beyond symmetry breaking</li>
        <li>Characterized by:
          <ul>
            <li>Ground state degeneracy on torus (topological)</li>
            <li>Anyonic excitations</li>
            <li>Long-range entanglement</li>
            <li>Chiral edge modes</li>
          </ul>
        </li>
        <li>Robust against local perturbations</li>
      </ul>

      <p><strong>Key insight:</strong></p>
      <div class="equation">
        Topological order = Pattern of long-range quantum entanglement
      </div>
    </div>

    <h2>Chern-Simons Gauge Theory</h2>

    <div class="highlight-box">
      <h3>Effective Field Theory Description</h3>

      <p><strong>Chern-Simons Lagrangian:</strong></p>
      <div class="equation">
        L = (k/4π) ε^{μνλ} a_μ ∂_ν a_λ - (e²/2πℏ) a_μ A^μ
      </div>
      <ul>
        <li>a_μ: Emergent gauge field</li>
        <li>A_μ: External electromagnetic field</li>
        <li>k: Integer (Chern-Simons level)</li>
      </ul>

      <p><strong>Equation of motion:</strong></p>
      <div class="equation">
        (k/2π) ε^{μνλ} ∂_ν a_λ = (e²/ℏ) A^μ
      </div>

      <p><strong>Hall conductance:</strong></p>
      <div class="equation">
        σ_xy = k(e²/h)
      </div>

      <p><strong>For FQHE at ν = 1/m:</strong></p>
      <ul>
        <li>k = m (odd integer)</li>
        <li>Effective filling: ν_eff = 1/k = 1/m</li>
        <li>Matches Laughlin states</li>
      </ul>

      <p><strong>Properties:</strong></p>
      <ul>
        <li><strong>Topological:</strong> No local degrees of freedom in bulk</li>
        <li><strong>Chiral edge modes:</strong> k branches propagating one direction</li>
        <li><strong>Statistics:</strong> Encodes anyonic braiding</li>
        <li><strong>Modular invariance:</strong> Constrains possible theories</li>
      </ul>
    </div>

    <h2>Experimental Confirmation</h2>

    <div class="note-box">
      <h3>Evidence for Topological Order</h3>

      <p><strong>Fractional charge (1995-1997):</strong></p>
      <ul>
        <li>Shot noise measurements</li>
        <li>Observed e/3 charge in ν = 1/3 state</li>
        <li>Direct confirmation of fractionalization</li>
      </ul>

      <p><strong>Chiral edge states (1990s):</strong></p>
      <ul>
        <li>Edge conductance measurements</li>
        <li>Confirms one-way propagation</li>
        <li>Number of modes matches theory</li>
      </ul>

      <p><strong>Fractional statistics (2020):</strong></p>
      <ul>
        <li>Interferometry experiments</li>
        <li>Anyonic braiding phase measured</li>
        <li>θ ≈ π/3 for ν = 1/3 state</li>
      </ul>

      <p><strong>Non-abelian statistics (2000s-present):</strong></p>
      <ul>
        <li>ν = 5/2 state (Moore-Read state)</li>
        <li>Candidate for non-abelian anyons</li>
        <li>Ongoing experiments to verify</li>
        <li>Potential for topological quantum computation</li>
      </ul>

      <p><strong>Thermal Hall effect:</strong></p>
      <ul>
        <li>Chiral edge modes carry heat</li>
        <li>κ_xy = (π²k_B²T/3h) × c</li>
        <li>c = central charge of edge CFT</li>
        <li>Confirms topological properties</li>
      </ul>
    </div>

    <h2>Impact and Legacy</h2>

    <div class="highlight-box">
      <h3>Revolutionary Implications</h3>

      <p><strong>Conceptual breakthroughs:</strong></p>
      <ul>
        <li><strong>Emergent phenomena:</strong> Quasiparticles with fractional quantum numbers</li>
        <li><strong>Anyonic statistics:</strong> Beyond fermions and bosons</li>
        <li><strong>Topological protection:</strong> Robust against local perturbations</li>
        <li><strong>Long-range entanglement:</strong> New quantum phase of matter</li>
      </ul>

      <p><strong>New research directions:</strong></p>
      <ul>
        <li>Classification of topological phases</li>
        <li>Topological quantum computation</li>
        <li>Quantum spin liquids</li>
        <li>Topological insulators and superconductors</li>
        <li>Symmetry-protected topological phases</li>
      </ul>

      <p><strong>Technological potential:</strong></p>
      <ul>
        <li>Fault-tolerant quantum computing (topological qubits)</li>
        <li>Protected quantum memories</li>
        <li>Metrology (quantum Hall resistance standard)</li>
      </ul>

      <p><strong>Fundamental physics:</strong></p>
      <ul>
        <li>Quantum field theory in condensed matter</li>
        <li>Emergence and fractionalization</li>
        <li>Connection to string theory and holography</li>
        <li>Nature of quantum matter</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>1982:</strong> Fractional quantum Hall effect discovered (Tsui, Störmer, Gossard)</li>
        <li><strong>1983:</strong> Laughlin wavefunction explains ν = 1/m states</li>
        <li><strong>Key observation:</strong> Fractional charge e/m and fractional statistics θ = π/m</li>
        <li><strong>Crisis:</strong> Landau paradigm cannot distinguish FQHE states (same symmetry, different phases)</li>
        <li><strong>1990:</strong> Wen introduces "topological order" concept</li>
        <li><strong>Characteristics:</strong> Ground state degeneracy, anyons, long-range entanglement, chiral edges</li>
        <li><strong>Experiments:</strong> Fractional charge, edge states, anyonic statistics confirmed</li>
        <li><strong>Legacy:</strong> New paradigm beyond symmetry breaking, foundation for topological quantum matter</li>
      </ul>

      <p><strong>Next:</strong> Section 6.3 provides a precise macroscopic definition of topological order through ground state degeneracy and geometric phases.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_2_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
