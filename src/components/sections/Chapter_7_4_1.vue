<template>
  <div class="section-content">
    <h1>7.4.1 Gapped Quantum Phases</h1>

    <div class="info-box">
      <h3>Central Question</h3>
      <p>What distinguishes <strong>gapped quantum phases</strong> from other states of matter? The presence of an energy gap—a finite excitation energy above the ground state—has profound consequences for stability, entanglement structure, and phase classification. Gapped phases form the foundation for understanding both conventional and exotic quantum matter.</p>
    </div>

    <h2>Definition and Basic Properties</h2>

    <h3>The Energy Gap</h3>

    <p>A quantum many-body Hamiltonian H is <strong>gapped</strong> if:</p>

    <div class="highlight-box">
      <h3>Gapped Hamiltonian (Rigorous Definition)</h3>
      <div class="equation">
        Δ ≡ lim_{N→∞} (E₁(N) - E₀(N)) > 0
      </div>
      <p>where:</p>
      <ul>
        <li>E₀(N) = ground state energy of N-particle system</li>
        <li>E₁(N) = lowest excited state energy</li>
        <li>Δ = spectral gap (finite and positive in thermodynamic limit)</li>
      </ul>
      <p><strong>Key point:</strong> The gap Δ remains finite (bounded away from zero) as N → ∞.</p>
    </div>

    <h3>Examples of Gapped vs Gapless Systems</h3>

    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>System</th>
          <th>Gap Δ</th>
          <th>Ground State</th>
          <th>Excitations</th>
        </tr>
        <tr>
          <td><strong>Ferromagnetic Ising (h=0)</strong></td>
          <td>Δ > 0</td>
          <td>|↑↑···↑⟩ or |↓↓···↓⟩</td>
          <td>Domain walls (magnons)</td>
        </tr>
        <tr>
          <td><strong>Transverse Ising (h > h_c)</strong></td>
          <td>Δ(h) > 0</td>
          <td>Paramagnetic (SRE)</td>
          <td>Kink-antikink pairs</td>
        </tr>
        <tr>
          <td><strong>Transverse Ising (h = h_c)</strong></td>
          <td>Δ = 0 (critical)</td>
          <td>Conformal field theory</td>
          <td>Gapless continuum</td>
        </tr>
        <tr>
          <td><strong>Haldane chain (S=1)</strong></td>
          <td>Δ ≈ 0.41J</td>
          <td>SPT phase</td>
          <td>Massive excitations, edge modes</td>
        </tr>
        <tr>
          <td><strong>Heisenberg AFM (S=1/2)</strong></td>
          <td>Δ = 0 (gapless)</td>
          <td>Luttinger liquid</td>
          <td>Spinons (gapless)</td>
        </tr>
        <tr>
          <td><strong>Toric code</strong></td>
          <td>Δ = 4J</td>
          <td>Topologically ordered (LRE)</td>
          <td>Anyonic excitations (e, m, ε)</td>
        </tr>
        <tr>
          <td><strong>Free fermions (metals)</strong></td>
          <td>Δ = 0 (Fermi surface)</td>
          <td>Fermi liquid</td>
          <td>Particle-hole excitations</td>
        </tr>
        <tr>
          <td><strong>BCS superconductor</strong></td>
          <td>Δ > 0 (pairing gap)</td>
          <td>Condensate of Cooper pairs</td>
          <td>Bogoliubov quasiparticles</td>
        </tr>
      </table>
    </div>

    <h2>Physical Consequences of a Gap</h2>

    <h3>1. Exponential Decay of Correlations</h3>

    <p>In gapped systems, correlations decay exponentially:</p>

    <div class="highlight-box">
      <h3>Correlation Length</h3>
      <div class="equation">
        ⟨O_i O_j⟩ - ⟨O_i⟩⟨O_j⟩ ~ e^{-|r_i - r_j|/ξ}
      </div>
      <p>where the <strong>correlation length</strong> ξ is set by the gap:</p>
      <div class="equation">
        ξ ~ ℏv/Δ
      </div>
      <p>with v being a characteristic velocity (e.g., spin-wave velocity).</p>
    </div>

    <div class="note-box">
      <h4>Physical Interpretation</h4>
      <p>The gap Δ acts as an energy barrier that prevents long-range propagation of quantum fluctuations. Beyond distance ξ, degrees of freedom become effectively decoupled—the system "forgets" correlations.</p>
    </div>

    <h3>2. Area Law for Entanglement Entropy</h3>

    <p>Gapped ground states in D dimensions obey an <strong>area law</strong>:</p>

    <div class="equation">
      S(A) = α |∂A| + subleading corrections
    </div>

    <p>where:</p>
    <ul>
      <li>S(A) = entanglement entropy of region A</li>
      <li>|∂A| = area of boundary ∂A</li>
      <li>α = constant (O(1) in natural units)</li>
    </ul>

    <div class="info-box">
      <h3>Why Area Law?</h3>
      <p>Only degrees of freedom within distance ξ of the boundary ∂A are significantly entangled across the boundary. Since ξ is finite (set by Δ), entanglement is localized to a boundary layer of thickness ~ ξ, giving:</p>
      <div class="equation">
        S(A) ~ |∂A| × ξ^{D-1} ~ |∂A|
      </div>
    </div>

    <h3>3. Stability Under Perturbations</h3>

    <p>Gapped phases are <strong>robust</strong> to small perturbations:</p>

    <div class="highlight-box">
      <h3>Stability Theorem (Informal)</h3>
      <p>If H has gap Δ, then H' = H + δV with ||δV|| < cΔ (c < 1) remains in the same phase:</p>
      <ul>
        <li>Ground state changes continuously</li>
        <li>Gap remains finite: Δ' ≥ Δ - O(||δV||)</li>
        <li>Local observables change by O(||δV||/Δ)</li>
      </ul>
      <p><strong>Consequence:</strong> Gapped phases correspond to <strong>open sets</strong> in the space of Hamiltonians.</p>
    </div>

    <h3>4. Efficient Ground State Preparation</h3>

    <p>The gap enables efficient cooling to the ground state:</p>

    <div class="equation">
      Thermalization time: τ_therm ~ ℏ/Δ
    </div>

    <p>At temperature T << Δ/k_B, thermal excitations are exponentially suppressed:</p>

    <div class="equation">
      P(excited) ~ e^{-Δ/(k_B T)}
    </div>

    <h2>Classification of Gapped Phases</h2>

    <h3>Three Types of Gapped Ground States</h3>

    <p>Modern quantum information theory distinguishes gapped phases by their entanglement structure:</p>

    <div class="comparison-box">
      <h3>Hierarchy of Gapped Phases</h3>
      <table class="comparison-table">
        <tr>
          <th>Phase Type</th>
          <th>Entanglement</th>
          <th>Symmetry Role</th>
          <th>Examples</th>
          <th>Distinguishing Feature</th>
        </tr>
        <tr>
          <td><strong>Trivial (product states)</strong></td>
          <td>Zero or local only</td>
          <td>Not required</td>
          <td>Ferromagnet, band insulator</td>
          <td>Can be written as |ψ⟩ = ⊗_i |φ_i⟩ after local unitary</td>
        </tr>
        <tr>
          <td><strong>Symmetry-protected topological (SPT)</strong></td>
          <td>Short-range entangled (SRE)</td>
          <td>Essential (symmetry protects)</td>
          <td>Haldane phase, topological insulator</td>
          <td>Non-trivial when symmetry preserved, trivial when broken</td>
        </tr>
        <tr>
          <td><strong>Intrinsic topological order</strong></td>
          <td>Long-range entangled (LRE)</td>
          <td>Not required (topological)</td>
          <td>Fractional quantum Hall, toric code</td>
          <td>Topological entanglement entropy γ = log 𝒟</td>
        </tr>
      </table>
    </div>

    <h3>Short-Range vs Long-Range Entanglement</h3>

    <div class="highlight-box">
      <h3>Formal Distinction: SRE vs LRE</h3>
      <p>A gapped state |ψ⟩ is <strong>short-range entangled</strong> (SRE) if it can be connected to a product state by a finite-depth local unitary circuit:</p>
      <div class="equation">
        |ψ⟩_SRE = U_local |product⟩
      </div>
      <p>where U_local = U_D ··· U_2 U_1 with depth D independent of system size.</p>

      <p>A gapped state is <strong>long-range entangled</strong> (LRE) if no such finite-depth circuit exists—it inherently possesses non-local quantum correlations that cannot be removed by local operations.</p>
    </div>

    <h2>Stability and Adiabatic Continuity</h2>

    <h3>Quasi-Adiabatic Continuation Revisited</h3>

    <p>For gapped Hamiltonians H(λ) with gap Δ(λ) ≥ Δ_min > 0 for λ ∈ [0, 1]:</p>

    <div class="equation">
      |ψ_0(1)⟩ = lim_{T→∞} 𝒯 exp[-i ∫_0^T H(t) dt] |ψ_0(0)⟩
    </div>

    <p>connects ground states adiabatically.</p>

    <div class="note-box">
      <h4>Adiabatic Theorem for Gapped Systems</h4>
      <p>If the gap never closes along the path (Δ(λ) ≥ Δ_min > 0), then:</p>
      <ul>
        <li>The ground state evolves continuously</li>
        <li>Probability of excitation: P_exc ~ (ℏ/T)² / Δ_min²</li>
        <li>For T >> ℏ/Δ_min², we remain in the ground state with probability → 1</li>
      </ul>
      <p><strong>Conclusion:</strong> States at λ = 0 and λ = 1 are in the <strong>same quantum phase</strong>.</p>
    </div>

    <h3>Gap Closing and Phase Transitions</h3>

    <p>A quantum phase transition <strong>requires</strong> gap closing:</p>

    <div class="equation">
      Δ(λ_c) = 0 at critical point λ = λ_c
    </div>

    <div class="info-box">
      <h3>Gap Closing Types</h3>
      <ul>
        <li><strong>Point gap closing:</strong> Δ = 0 only at isolated λ_c (generic continuous transition)</li>
        <li><strong>Line/surface of gaplessness:</strong> Extended critical region (e.g., Kosterlitz-Thouless)</li>
        <li><strong>Accidental degeneracy:</strong> Level crossing at special fine-tuned points (not generic)</li>
      </ul>
    </div>

    <h2>Perturbation Theory in Gapped Systems</h2>

    <h3>Rayleigh-Schrödinger Perturbation Theory</h3>

    <p>For H = H₀ + λV with H₀ gapped (Δ₀), the ground state energy correction:</p>

    <div class="equation">
      E_0 = E_0^{(0)} + λ⟨0|V|0⟩ + λ² ∑_{n≠0} |⟨n|V|0⟩|²/(E_0^{(0)} - E_n^{(0)}) + O(λ³)
    </div>

    <p>Convergence radius:</p>

    <div class="equation">
      λ_max ~ Δ₀ / ||V||
    </div>

    <div class="highlight-box">
      <h3>Systematic Expansion</h3>
      <p>The gap Δ₀ provides a natural energy scale for perturbation theory:</p>
      <ul>
        <li><strong>Small perturbation:</strong> λ||V|| << Δ₀ → perturbation theory converges</li>
        <li><strong>Large perturbation:</strong> λ||V|| ~ Δ₀ → may close gap and change phase</li>
        <li><strong>Gapless systems:</strong> Perturbation theory often diverges (infrared singularities)</li>
      </ul>
    </div>

    <h3>Effective Hamiltonian for Low-Energy Subspace</h3>

    <p>For degenerate ground state manifold (e.g., topological order), the effective Hamiltonian:</p>

    <div class="equation">
      H_eff = P_0 H P_0 + P_0 V (1/(E_0 - H + iη)) (1 - P_0) V P_0 + ···
    </div>

    <p>where P_0 projects onto the ground state subspace.</p>

    <h2>Topological Entanglement Entropy (TEE)</h2>

    <h3>Distinguishing LRE from SRE</h3>

    <p>For a 2D gapped state with topological order, the entanglement entropy has a correction:</p>

    <div class="highlight-box">
      <h3>Kitaev-Preskill Formula</h3>
      <div class="equation">
        S(A) = α|∂A| - γ + O(1/|∂A|)
      </div>
      <p>where the <strong>topological entanglement entropy</strong> (TEE) γ is:</p>
      <div class="equation">
        γ = log 𝒟
      </div>
      <p>with 𝒟 = total quantum dimension = √(∑_a d_a²) (sum over all anyon types).</p>
    </div>

    <div class="info-box">
      <h3>Physical Interpretation of γ</h3>
      <ul>
        <li><strong>γ = 0:</strong> Short-range entangled (SRE) phase—trivial or SPT</li>
        <li><strong>γ > 0:</strong> Long-range entangled (LRE) phase—intrinsic topological order</li>
        <li><strong>Examples:</strong>
          <ul>
            <li>Toric code: 𝒟² = 4 (e, m, ε, 1) → γ = log 2</li>
            <li>Fibonacci anyons: 𝒟 = φ = (1+√5)/2 → γ = log φ</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Extraction Schemes</h3>

    <p>To extract γ experimentally or numerically, use:</p>

    <div class="equation">
      <strong>Kitaev-Preskill:</strong> γ = S(A) + S(B) + S(C) - S(AB) - S(BC) - S(CA) + S(ABC)
    </div>

    <p>for appropriately chosen regions A, B, C (tripod geometry).</p>

    <div class="equation">
      <strong>Levin-Wen:</strong> γ = [S(A) + S(B) - S(A∪B) - S(A∩B)] / 2
    </div>

    <p>for disk-like regions A, B with overlap.</p>

    <h2>Examples of Gapped Phases in Detail</h2>

    <h3>Example 1: Trivial Paramagnet (SRE, Trivial)</h3>

    <div class="equation">
      H = -h ∑_i σ^x_i (strong transverse field)
    </div>

    <p><strong>Ground state:</strong> |ψ⟩ = ⊗_i |→⟩_i (product state)</p>
    <p><strong>Gap:</strong> Δ = 2h (single spin flip)</p>
    <p><strong>Correlations:</strong> ⟨σ^z_i σ^z_j⟩ = 0 (independent spins)</p>
    <p><strong>Phase:</strong> Trivial—already a product state, no entanglement</p>

    <h3>Example 2: Haldane Phase (SRE, SPT)</h3>

    <div class="equation">
      H = J ∑_i 𝐒_i · 𝐒_{i+1} (spin-1 Heisenberg chain)
    </div>

    <p><strong>Ground state:</strong> Valence bond solid (VBS)-like state</p>
    <p><strong>Gap:</strong> Δ ≈ 0.41J (Haldane gap)</p>
    <p><strong>Symmetry:</strong> SO(3) spin rotation + time-reversal + inversion</p>
    <p><strong>Edge modes:</strong> Spin-1/2 degrees of freedom at boundaries</p>
    <p><strong>Phase:</strong> SPT protected by SO(3)—becomes trivial if symmetry is broken</p>

    <div class="note-box">
      <h4>Contrast with Spin-1/2</h4>
      <p>The spin-1/2 Heisenberg chain is <strong>gapless</strong> (Δ = 0), described by Luttinger liquid with algebraic correlations. The integer-spin case (S=1) is fundamentally different due to SPT physics.</p>
    </div>

    <h3>Example 3: Toric Code (LRE, Topological Order)</h3>

    <div class="equation">
      H = -J_s ∑_s A_s - J_p ∑_p B_p
    </div>

    <p>where A_s = ∏_{i∈star(s)} σ^x_i and B_p = ∏_{i∈plaq(p)} σ^z_i.</p>

    <p><strong>Ground state:</strong> Superposition of closed-loop configurations</p>
    <p><strong>Gap:</strong> Δ = min(4J_s, 4J_p)</p>
    <p><strong>Ground state degeneracy:</strong> 4 on torus (topological)</p>
    <p><strong>Anyons:</strong> e (electric), m (magnetic), ε = e × m (fermion)</p>
    <p><strong>TEE:</strong> γ = log 2</p>
    <p><strong>Phase:</strong> Intrinsic topological order (LRE)—cannot be removed by local unitaries</p>

    <h2>Experimental Signatures</h2>

    <h3>Measuring the Gap</h3>

    <div class="info-box">
      <h3>Experimental Probes of Δ</h3>
      <ul>
        <li><strong>Spectroscopy:</strong> Inelastic neutron scattering, optical absorption
          <ul>
            <li>Measure E₁ - E₀ directly from excitation spectrum</li>
          </ul>
        </li>
        <li><strong>Thermal activation:</strong> Specific heat C_v(T) ~ e^{-Δ/(k_B T)} at low T
          <ul>
            <li>Arrhenius plot log(C_v) vs 1/T extracts Δ</li>
          </ul>
        </li>
        <li><strong>Transport:</strong> Resistivity ρ(T) ~ e^{Δ/(k_B T)} in insulators
          <ul>
            <li>Activated behavior signals gap</li>
          </ul>
        </li>
        <li><strong>NMR relaxation:</strong> T₁^{-1} ~ e^{-Δ/(k_B T)}
          <ul>
            <li>Spin-lattice relaxation rate probes low-energy excitations</li>
          </ul>
        </li>
        <li><strong>Quantum simulators:</strong> Direct state tomography and overlap measurements
          <ul>
            <li>Trapped ions, ultracold atoms can measure energy differences</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Detecting Topological Order</h3>

    <p>Beyond the gap, identifying <strong>topological order</strong> requires additional probes:</p>

    <ul>
      <li><strong>Ground state degeneracy:</strong> Depends on topology (e.g., 4-fold on torus for toric code)</li>
      <li><strong>Anyonic braiding:</strong> Non-abelian statistics observable in interference experiments</li>
      <li><strong>Edge modes:</strong> Chiral edge currents in quantum Hall states</li>
      <li><strong>Entanglement entropy:</strong> Extract TEE γ from measurements of S(A) for various regions</li>
      <li><strong>Modular S and T matrices:</strong> From ground state overlaps on different manifolds</li>
    </ul>

    <h2>Numerical Methods for Gapped Systems</h2>

    <h3>Why Gapped Systems Are Easier</h3>

    <div class="highlight-box">
      <h3>Numerical Advantages of Gaps</h3>
      <ul>
        <li><strong>Area law:</strong> Entanglement entropy S ~ L^{d-1} (not L^d) enables efficient tensor network representations
          <ul>
            <li>MPS bond dimension: χ ~ e^{αL^{d-1}} (manageable for d=1)</li>
          </ul>
        </li>
        <li><strong>Exponential convergence:</strong> Correlation functions decay exponentially → finite-size systems accurately represent bulk
          <ul>
            <li>System size L ~ 10ξ typically sufficient</li>
          </ul>
        </li>
        <li><strong>Imaginary time evolution:</strong> Gap ensures e^{-βH} projects efficiently onto ground state
          <ul>
            <li>β ~ 1/Δ sufficient to isolate |ψ_0⟩</li>
          </ul>
        </li>
        <li><strong>Perturbation theory:</strong> Systematic expansions around exactly solvable points</li>
      </ul>
    </div>

    <h3>Standard Algorithms</h3>

    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Method</th>
          <th>Best For</th>
          <th>Scaling</th>
          <th>Limitations</th>
        </tr>
        <tr>
          <td><strong>DMRG</strong></td>
          <td>1D gapped systems</td>
          <td>O(χ³) per sweep</td>
          <td>Struggles with 2D, long-range interactions</td>
        </tr>
        <tr>
          <td><strong>PEPS</strong></td>
          <td>2D gapped SRE</td>
          <td>Exponential (contraction)</td>
          <td>Approximate contractions needed</td>
        </tr>
        <tr>
          <td><strong>Quantum Monte Carlo</strong></td>
          <td>No sign problem systems</td>
          <td>Polynomial</td>
          <td>Sign problem for fermions, frustration</td>
        </tr>
        <tr>
          <td><strong>Exact diagonalization</strong></td>
          <td>Small systems (N < 40)</td>
          <td>Exponential (2^N)</td>
          <td>System size limited</td>
        </tr>
        <tr>
          <td><strong>iPEPS</strong></td>
          <td>2D infinite systems</td>
          <td>χ^{10} approximate</td>
          <td>Convergence issues for critical systems</td>
        </tr>
      </table>
    </div>

    <h2>Gap Protection Mechanisms</h2>

    <h3>What Protects a Gap?</h3>

    <p>Different mechanisms ensure gap stability:</p>

    <div class="info-box">
      <h3>Gap Protection Types</h3>
      <ul>
        <li><strong>Symmetry breaking:</strong> Order parameter condensation (e.g., ferromagnets)
          <ul>
            <li>Gap: Δ ~ J (exchange energy)</li>
            <li>Goldstone modes for continuous symmetry breaking</li>
          </ul>
        </li>
        <li><strong>Symmetry protection (SPT):</strong> Edge modes prohibited in bulk by symmetry
          <ul>
            <li>Gap: Robust to symmetric perturbations</li>
            <li>Closes only when symmetry is broken</li>
          </ul>
        </li>
        <li><strong>Topology (intrinsic TO):</strong> Global topological quantum numbers
          <ul>
            <li>Gap: Protected by global constraints (e.g., anyonic charge conservation)</li>
            <li>Cannot close without non-local processes</li>
          </ul>
        </li>
        <li><strong>Many-body localization (MBL):</strong> Disorder-induced gap to ergodic phase
          <ul>
            <li>Not a true ground state gap but spectral gap throughout many-body spectrum</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>Relation to Quantum Information Processing</h2>

    <h3>Gapped Systems as Quantum Memories</h3>

    <p>Topologically ordered gapped systems provide robust quantum memory:</p>

    <div class="highlight-box">
      <h3>Topological Quantum Memory</h3>
      <ul>
        <li><strong>Encoding:</strong> Information stored in topological degeneracy (exponentially many degenerate ground states)</li>
        <li><strong>Protection:</strong> Local errors cannot change topological sector → exponential suppression of errors
          <div class="equation">
            Error rate: p_error ~ e^{-L/ξ} for system size L
          </div>
        </li>
        <li><strong>Decoding:</strong> Syndrome measurement via stabilizer operators (A_s, B_p in toric code)</li>
        <li><strong>Threshold:</strong> Fault-tolerant if physical error rate below ~ 1%</li>
      </ul>
    </div>

    <h3>Adiabatic Quantum Computing</h3>

    <p>Gap determines adiabatic algorithm runtime:</p>

    <div class="equation">
      T_adiabatic ~ ℏ / Δ_min²
    </div>

    <p>where Δ_min is the minimum gap along the adiabatic path. Finding the ground state of gapped Hamiltonians is often easier than gapless ones.</p>

    <h2>Open Questions and Current Research</h2>

    <div class="note-box">
      <h4>Active Research Directions</h4>
      <ul>
        <li>Complete classification of gapped phases in 2D and 3D (especially with fermions and time-reversal symmetry)</li>
        <li>Efficient numerical methods for 2D and 3D gapped topological phases</li>
        <li>Experimental realization and detection of exotic topological orders (e.g., non-abelian anyons)</li>
        <li>Relationship between computational complexity and gap size</li>
        <li>Gapped phases in driven (Floquet) systems and at finite temperature</li>
        <li>Machine learning approaches to identify and classify gapped phases</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h3>Key Takeaways</h3>
      <ul>
        <li><strong>Energy gap Δ:</strong> Finite excitation energy above ground state, robust in thermodynamic limit</li>
        <li><strong>Consequences:</strong> Exponential correlation decay, area law entanglement, stability under perturbations</li>
        <li><strong>Classification:</strong> Trivial (product), SPT (symmetry-protected), and topological order (intrinsic LRE)</li>
        <li><strong>SRE vs LRE:</strong> Distinguishable by finite-depth circuit connection to product state</li>
        <li><strong>TEE γ = log 𝒟:</strong> Diagnostic for intrinsic topological order (γ = 0 for SRE, γ > 0 for LRE)</li>
        <li><strong>Adiabatic continuity:</strong> States connected by path with non-vanishing gap are in the same phase</li>
        <li><strong>Phase transitions:</strong> Require gap closing Δ(λ_c) = 0</li>
        <li><strong>Numerical advantage:</strong> Area law enables efficient tensor network methods</li>
        <li><strong>Applications:</strong> Topological quantum memory, protected qubits, robust quantum information storage</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Looking Ahead</h3>
      <p>In §7.4.2, we'll explore <strong>gapped quantum liquid phases</strong> in detail—focusing on how non-trivial gapped states can emerge without symmetry breaking, challenging the Landau paradigm. Then in §7.4.3, we'll dive deep into the rich structure of <strong>topological order</strong>, examining anyonic excitations, ground state degeneracy, and the mathematical framework of modular tensor categories.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_7_4_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
