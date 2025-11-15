<template>
  <div class="section-content">
    <h1>5.4.2 Toric Code in a Magnetic Field</h1>

    <p>The toric code provides a paradigmatic example of a topologically ordered phase. Adding external perturbations, particularly magnetic fields, allows us to study the stability of topological order and phase transitions to trivial phases. This system demonstrates key concepts including topological gap closing, entanglement structure evolution, and the robustness of topological phases.</p>

    <h2>Toric Code Review</h2>

    <div class="highlight-box">
      <h3>Pure Toric Code Hamiltonian</h3>

      <p><strong>Lattice:</strong> L × L square lattice with periodic boundary conditions (torus)</p>
      <ul>
        <li>N = 2L² qubits (one per edge)</li>
        <li>L² vertices (sites) and L² plaquettes (faces)</li>
      </ul>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H_TC = -J_s Σ_s A_s - J_p Σ_p B_p
      </div>

      <p><strong>Star operator (vertex term):</strong></p>
      <div class="equation">
        A_s = ∏_{i∈star(s)} σ_i^x
      </div>
      <p>Product of σ^x on four edges touching vertex s</p>

      <p><strong>Plaquette operator (face term):</strong></p>
      <div class="equation">
        B_p = ∏_{i∈boundary(p)} σ_i^z
      </div>
      <p>Product of σ^z on four edges around plaquette p</p>

      <p><strong>Key properties:</strong></p>
      <ul>
        <li><strong>Commutation:</strong> [A_s, A_{s'}] = [B_p, B_{p'}] = [A_s, B_p] = 0 (all operators commute)</li>
        <li><strong>Stabilizer code:</strong> Ground state |GS⟩: A_s|GS⟩ = B_p|GS⟩ = +|GS⟩ for all s, p</li>
        <li><strong>Degeneracy:</strong> 4-fold on torus (independent loops)</li>
        <li><strong>Gap:</strong> Δ = min(J_s, J_p) (excitations cost energy 2J)</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Topological Properties</h3>

      <p><strong>Excitations:</strong></p>
      <ul>
        <li><strong>e-particle (electric):</strong> A_s = -1 at vertex s (σ^z flip creates pair)</li>
        <li><strong>m-particle (magnetic):</strong> B_p = -1 at plaquette p (σ^x flip creates pair)</li>
        <li><strong>ε = e × m:</strong> Fermion (composite)</li>
        <li><strong>1 (vacuum):</strong> Trivial sector</li>
      </ul>

      <p><strong>Anyonic statistics:</strong></p>
      <ul>
        <li>e and m are bosons</li>
        <li>Mutual statistics: θ_{em} = π (mutual semion)</li>
        <li>Braiding e around m gives phase -1</li>
      </ul>

      <p><strong>Topological entanglement entropy:</strong></p>
      <div class="equation">
        γ = log 2
      </div>
      <p>Total quantum dimension: 𝒟 = √(d_e² + d_m² + d_ε² + d_1²) = √4 = 2</p>
    </div>

    <h2>Toric Code with Magnetic Field</h2>

    <div class="highlight-box">
      <h3>Perturbed Hamiltonian</h3>

      <p><strong>Add transverse field on each qubit:</strong></p>
      <div class="equation">
        H = H_TC + H_field = -J_s Σ_s A_s - J_p Σ_p B_p - h_x Σ_i σ_i^x - h_z Σ_i σ_i^z
      </div>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li><strong>h_x term:</strong> Creates e-particle pairs (violates A_s = +1)</li>
        <li><strong>h_z term:</strong> Creates m-particle pairs (violates B_p = +1)</li>
        <li>Competes with topological order</li>
      </ul>

      <p><strong>Simplified model (uniform field):</strong></p>
      <div class="equation">
        H = -J Σ_s A_s - J Σ_p B_p - h Σ_i σ_i^z
      </div>
      <p>Focus on h_z perturbation (more common in literature)</p>
    </div>

    <div class="note-box">
      <h3>Perturbative Analysis (h ≪ J)</h3>

      <p><strong>Ground state:</strong> Perturbation theory in h/J</p>

      <p><strong>First order:</strong></p>
      <ul>
        <li>⟨GS|σ_i^z|GS⟩ = 0 by symmetry</li>
        <li>No first-order energy shift</li>
      </ul>

      <p><strong>Second order:</strong></p>
      <div class="equation">
        E^{(2)} = -Σ_{n≠GS} |⟨n|H_field|GS⟩|² / (E_n - E_GS)
      </div>
      <ul>
        <li>Virtual m-particle pairs created and annihilated</li>
        <li>Energy lowering ~ -(h²/J) N</li>
        <li>Gap remains Δ ~ J - O(h²/J)</li>
      </ul>

      <p><strong>Effective theory:</strong></p>
      <p>At order (h/J)^k, k m-particles can appear</p>
      <div class="equation">
        H_eff ~ -J_eff Σ_p B_p + O((h/J)^4) corrections
      </div>
      <p>where J_eff = J - O(h²/J)</p>

      <p><strong>Conclusion:</strong> Topological order stable for h ≪ J</p>
    </div>

    <h2>Phase Transition</h2>

    <div class="highlight-box">
      <h3>Critical Field h_c</h3>

      <p><strong>Phase diagram:</strong></p>
      <ul>
        <li><strong>h &lt; h_c:</strong> Topologically ordered (Z₂ toric code phase)</li>
        <li><strong>h = h_c:</strong> Quantum phase transition (gap closes)</li>
        <li><strong>h > h_c:</strong> Trivial paramagnetic phase</li>
      </ul>

      <p><strong>Numerical results:</strong></p>
      <div class="equation">
        h_c / J ≈ 0.33 (uniform field)
      </div>

      <p><strong>Transition properties:</strong></p>
      <ul>
        <li><strong>Universality class:</strong> 3D Ising (Z₂ symmetry breaking)</li>
        <li><strong>Critical exponents:</strong> ν ≈ 0.63, β ≈ 0.33</li>
        <li><strong>Gap closing:</strong> Δ ~ |h - h_c|^{zν} where z = 1 (dynamical exponent)</li>
      </ul>

      <p><strong>Mechanism:</strong></p>
      <ul>
        <li>h increases m-particle density</li>
        <li>At h_c, m-particles condense (proliferate)</li>
        <li>Topological order destroyed by condensation</li>
      </ul>
    </div>

    <div class="comparison-box">
      <h3>Two Phases Comparison</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Topological (h &lt; h_c)</th>
          <th>Trivial (h > h_c)</th>
        </tr>
        <tr>
          <td><strong>Ground state degeneracy</strong></td>
          <td>4-fold (on torus)</td>
          <td>Non-degenerate</td>
        </tr>
        <tr>
          <td><strong>Gap</strong></td>
          <td>Δ ~ J - O(h²/J)</td>
          <td>Δ ~ h - J (for h ≫ J)</td>
        </tr>
        <tr>
          <td><strong>Entanglement entropy</strong></td>
          <td>S = α|∂A| - γ, γ = log 2</td>
          <td>S = α'|∂A|, γ = 0</td>
        </tr>
        <tr>
          <td><strong>String operators</strong></td>
          <td>Non-local (Wilson loops)</td>
          <td>Local (screened)</td>
        </tr>
        <tr>
          <td><strong>Excitations</strong></td>
          <td>Anyons (e, m, ε)</td>
          <td>Trivial quasiparticles</td>
        </tr>
        <tr>
          <td><strong>Correlation length</strong></td>
          <td>ξ ~ e^{Δ/T} (infinite at T=0)</td>
          <td>ξ ~ O(1/h)</td>
        </tr>
      </table>
    </div>

    <h2>Entanglement Entropy Evolution</h2>

    <div class="info-box">
      <h3>Topological Entropy γ(h)</h3>

      <p><strong>Definition:</strong> Extract γ via Kitaev-Preskill formula:</p>
      <div class="equation">
        γ(h) = S(A) + S(B) + S(C) - S(AB) - S(BC) - S(AC) + S(ABC)
      </div>

      <p><strong>Behavior across transition:</strong></p>
      <ul>
        <li><strong>h = 0:</strong> γ = log 2 ≈ 0.693 (pure toric code)</li>
        <li><strong>0 &lt; h &lt; h_c:</strong> γ(h) decreases smoothly</li>
        <li><strong>h = h_c:</strong> γ(h_c) → 0 (topological order lost)</li>
        <li><strong>h > h_c:</strong> γ = 0 (trivial phase)</li>
      </ul>

      <p><strong>Scaling near transition:</strong></p>
      <div class="equation">
        γ(h) ~ (h_c - h)^β for h → h_c^-
      </div>
      <p>Critical exponent β characterizes order parameter</p>

      <p><strong>Numerical observations:</strong></p>
      <ul>
        <li>Smooth decrease of γ in topological phase</li>
        <li>Continuous but non-analytic at h_c</li>
        <li>Total area coefficient α also evolves</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Entanglement Spectrum</h3>

      <p><strong>Definition:</strong> Eigenvalues λ_α of ρ_A:</p>
      <div class="equation">
        ρ_A = Σ_α λ_α |α⟩⟨α|
      </div>
      <p>Entanglement energies: ξ_α = -log λ_α</p>

      <p><strong>Topological phase (h = 0):</strong></p>
      <ul>
        <li>Degeneracies in {ξ_α} reflect edge CFT</li>
        <li>Multiple near-degenerate lowest eigenvalues (topological sectors)</li>
        <li>Tower structure from conformal symmetry</li>
      </ul>

      <p><strong>Evolution with h:</strong></p>
      <ul>
        <li><strong>Small h:</strong> Topological degeneracies split but remain</li>
        <li><strong>h → h_c:</strong> Spectrum reorganizes, gap closes</li>
        <li><strong>h > h_c:</strong> Generic spectrum (no topological structure)</li>
      </ul>

      <p><strong>Insight:</strong> Entanglement spectrum more sensitive than S(A) alone</p>
    </div>

    <h2>Anisotropic Perturbations</h2>

    <div class="highlight-box">
      <h3>Independent Field Components</h3>

      <p><strong>General perturbation:</strong></p>
      <div class="equation">
        H = -J_s Σ_s A_s - J_p Σ_p B_p - h_x Σ_i σ_i^x - h_y Σ_i σ_i^y - h_z Σ_i σ_i^z
      </div>

      <p><strong>Effects:</strong></p>
      <ul>
        <li><strong>h_x:</strong> Does not create excitations (commutes with A_s)</li>
        <li><strong>h_y:</strong> Creates both e and m pairs</li>
        <li><strong>h_z:</strong> Creates m pairs</li>
      </ul>

      <p><strong>Phase diagram in (h_x, h_z) plane:</strong></p>
      <ul>
        <li>Different critical lines for different field directions</li>
        <li>Topological phase shrinks as fields increase</li>
        <li>Multicritical points possible</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Electric-Magnetic Duality</h3>

      <p><strong>Symmetry:</strong> Toric code has e ↔ m duality</p>
      <div class="equation">
        σ_i^x ↔ σ_i^z,  A_s ↔ B_p,  e ↔ m
      </div>

      <p><strong>Implication:</strong></p>
      <ul>
        <li>h_x field (creates e) dual to h_z field (creates m)</li>
        <li>Phase diagrams related by duality</li>
        <li>Self-dual point: h_x = h_z (enhanced symmetry)</li>
      </ul>

      <p><strong>Breaking duality:</strong></p>
      <p>If J_s ≠ J_p, duality broken:</p>
      <div class="equation">
        H = -J_s Σ_s A_s - J_p Σ_p B_p - h_z Σ_i σ_i^z
      </div>
      <ul>
        <li>Two gaps: Δ_e ~ J_s, Δ_m ~ J_p</li>
        <li>Phase boundaries shift</li>
      </ul>
    </div>

    <h2>Experimental Realizations</h2>

    <div class="info-box">
      <h3>Physical Implementations</h3>

      <p><strong>1. Superconducting qubits:</strong></p>
      <ul>
        <li>Josephson junction arrays</li>
        <li>Engineered many-body interactions (star and plaquette)</li>
        <li>Tunable couplings and fields</li>
        <li><strong>Challenge:</strong> Scaling to large L</li>
      </ul>

      <p><strong>2. Trapped ions:</strong></p>
      <ul>
        <li>Programmable interactions via laser control</li>
        <li>Digital quantum simulation (Trotter steps)</li>
        <li>Recent: 2D arrays with ~100 ions</li>
      </ul>

      <p><strong>3. Rydberg atoms:</strong></p>
      <ul>
        <li>Neutral atoms in optical tweezers</li>
        <li>Strong interactions in Rydberg states</li>
        <li>Demonstrated: Z₂ topological phase signatures</li>
      </ul>

      <p><strong>4. Spin liquids (candidate materials):</strong></p>
      <ul>
        <li>Kagome lattice: Herbertsmithite</li>
        <li>Honeycomb: RuCl₃ (Kitaev physics)</li>
        <li>Apply magnetic field → tune through QPT</li>
      </ul>

      <p><strong>Measurements:</strong></p>
      <ul>
        <li>Ground state fidelity via overlap</li>
        <li>Topological entropy from entanglement</li>
        <li>Anyon braiding statistics</li>
        <li>String correlators for topological order</li>
      </ul>
    </div>

    <h2>Theoretical Extensions</h2>

    <div class="note-box">
      <h3>Related Models</h3>

      <p><strong>1. Quantum double models:</strong></p>
      <ul>
        <li>Generalize Z₂ → arbitrary finite group G</li>
        <li>D(G) anyon theory</li>
        <li>Richer topological phases (non-abelian possible)</li>
      </ul>

      <p><strong>2. String-net models:</strong></p>
      <ul>
        <li>Levin-Wen construction</li>
        <li>Realize arbitrary unitary fusion categories</li>
        <li>Toric code as simplest case (Z₂ string-net)</li>
      </ul>

      <p><strong>3. Perturbed Kitaev honeycomb:</strong></p>
      <div class="equation">
        H = -Σ_{⟨ij⟩_α} J_α σ_i^α σ_j^α - h Σ_i σ_i^z
      </div>
      <ul>
        <li>Exact solution at h = 0</li>
        <li>Non-abelian anyons (Ising type) possible</li>
        <li>Field-induced transitions studied extensively</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Stability:</strong> Topological order of toric code robust to weak perturbations (h ≪ J)</li>
        <li><strong>Phase transition:</strong> At h_c ~ 0.33J, gap closes and topological order destroyed</li>
        <li><strong>Topological entropy:</strong> γ = log 2 → 0 across transition, signaling loss of topological order</li>
        <li><strong>Mechanism:</strong> Condensation of m-particles (or e-particles for h_x field)</li>
        <li><strong>Universality:</strong> 3D Ising class (Z₂ symmetry breaking in 2+1D)</li>
        <li><strong>Experimental:</strong> Realizable in quantum simulators (superconducting qubits, trapped ions, Rydberg atoms)</li>
        <li><strong>Theoretical tool:</strong> Benchmark for studying topological phase transitions and entanglement evolution</li>
      </ul>

      <p><strong>Next:</strong> Section 5.4.3 examines the transverse-field Ising model, a simpler system exhibiting QPT and entanglement scaling.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_4_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
