<template>
  <div class="section-content">
    <h1>7.2 Quantum Phases and Phase Transitions</h1>

    <p>Before we can understand topological order and the classification of quantum phases, we must rigorously define what we mean by a "quantum phase" and a "quantum phase transition." These concepts generalize and transcend the classical notions familiar from thermodynamics, introducing fundamentally quantum phenomena like ground-state entanglement reorganization and quantum critical points at absolute zero temperature.</p>

    <div class="info-box">
      <h3>Core Question</h3>
      <p><strong>When do we say two quantum many-body systems are in the same phase?</strong></p>
      <ul>
        <li><strong>Intuitive answer:</strong> When they have similar physical properties</li>
        <li><strong>Landau's answer:</strong> When they have the same pattern of broken symmetries</li>
        <li><strong>Modern answer:</strong> When their ground states are connected by local unitary transformations</li>
        <li><strong>Challenge:</strong> Need rigorous mathematical framework applicable to all phases</li>
      </ul>
    </div>

    <h2>1. Classical vs Quantum Phase Transitions</h2>

    <div class="comparison-box">
      <h3>Thermal vs Quantum Phase Transitions</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Classical (Thermal)</th>
          <th>Quantum</th>
        </tr>
        <tr>
          <td><strong>Control parameter</strong></td>
          <td>Temperature T</td>
          <td>Coupling constant g (at T=0)</td>
        </tr>
        <tr>
          <td><strong>Driving force</strong></td>
          <td>Thermal fluctuations</td>
          <td>Quantum fluctuations</td>
        </tr>
        <tr>
          <td><strong>Relevant state</strong></td>
          <td>Thermal ensemble</td>
          <td>Ground state |ψ₀(g)⟩</td>
        </tr>
        <tr>
          <td><strong>Order parameter</strong></td>
          <td>⟨φ⟩_T</td>
          <td>⟨ψ₀|φ|ψ₀⟩</td>
        </tr>
        <tr>
          <td><strong>Critical point</strong></td>
          <td>T = T_c</td>
          <td>g = g_c (quantum critical point)</td>
        </tr>
        <tr>
          <td><strong>Dynamics</strong></td>
          <td>(d+0)-dimensional</td>
          <td>(d+1)-dimensional (time as extra dimension)</td>
        </tr>
        <tr>
          <td><strong>Example</strong></td>
          <td>Water → ice at T_c = 273 K</td>
          <td>Transverse field Ising at g_c ≈ 3.04</td>
        </tr>
      </table>
    </div>

    <div class="highlight-box">
      <h3>Quantum Phase Transitions at T=0</h3>

      <p><strong>Definition:</strong></p>
      <p>A quantum phase transition (QPT) occurs when the ground state of a many-body system changes qualitatively as a parameter g in the Hamiltonian is varied, even at zero temperature.</p>

      <div class="equation">
        H(g) = H₀ + g V
      </div>

      <p><strong>Characteristics:</strong></p>
      <ul>
        <li><strong>No thermal fluctuations:</strong> System in pure state |ψ₀(g)⟩</li>
        <li><strong>Heisenberg uncertainty:</strong> Quantum fluctuations persist even at T=0</li>
        <li><strong>Gap closing:</strong> Energy gap Δ(g) → 0 at transition (typically)</li>
        <li><strong>Correlation length:</strong> ξ(g) → ∞ at critical point</li>
        <li><strong>Universality:</strong> Critical behavior grouped into classes</li>
      </ul>

      <p><strong>Example: Transverse field Ising model</strong></p>
      <div class="equation">
        H = -J ∑_i σ_i^z σ_{i+1}^z - h ∑_i σ_i^x
      </div>
      <ul>
        <li>h/J ≪ 1: Ferromagnetic phase (⟨σ^z⟩ ≠ 0)</li>
        <li>h/J ≫ 1: Paramagnetic phase (⟨σ^x⟩ ≈ 1)</li>
        <li>(h/J)_c ≈ 1: Quantum critical point</li>
      </ul>
    </div>

    <h2>2. Formal Definition of Quantum Phases</h2>

    <div class="note-box">
      <h3>Rigorous Framework</h3>

      <p><strong>Phase diagram:</strong></p>
      <p>Consider a family of Hamiltonians H(λ) parameterized by λ = (λ₁, λ₂, ..., λ_n) ∈ ℝⁿ (parameter space).</p>

      <p><strong>Definition (Intuitive):</strong></p>
      <p>Two Hamiltonians H(λ) and H(λ') are in the <strong>same quantum phase</strong> if:</p>
      <ul>
        <li>Their ground states |ψ₀(λ)⟩ and |ψ₀(λ')⟩ have qualitatively similar properties</li>
        <li>One can continuously deform H(λ) → H(λ') without closing the energy gap</li>
        <li>All local observables change continuously along the path</li>
      </ul>

      <p><strong>Definition (Precise - Landau):</strong></p>
      <p>Two systems are in the same phase if connected by an adiabatic path λ(t): [0,1] → ℝⁿ such that:</p>
      <div class="equation">
        Δ(λ(t)) ≥ δ &gt; 0  for all t ∈ [0,1]
      </div>
      <p>where Δ(λ) = E₁(λ) - E₀(λ) is the energy gap.</p>

      <p><strong>Why gap closing matters:</strong></p>
      <ul>
        <li>Gap protects ground state from mixing with excited states</li>
        <li>Adiabatic theorem ensures |ψ₀(0)⟩ → |ψ₀(1)⟩ smoothly if gap persists</li>
        <li>Gap closing ⇒ level crossing ⇒ ground state restructuring ⇒ phase transition</li>
      </ul>
    </div>

    <h2>3. Limitations of Landau's Framework</h2>

    <div class="info-box">
      <h3>When Adiabatic Continuity Fails</h3>

      <p><strong>Landau's assumption:</strong></p>
      <p>Phases are characterized by symmetry: two systems in same phase ⟺ same unbroken symmetries</p>

      <p><strong>Counter-example: Integer Quantum Hall Effect</strong></p>
      <ul>
        <li>Different plateaus (ν = 1, 2, 3, ...) are distinct phases</li>
        <li>But all break the same symmetries (none!)</li>
        <li>Cannot be connected adiabatically despite gap persisting</li>
        <li><strong>Missing ingredient:</strong> Topological invariant (Chern number)</li>
      </ul>

      <p><strong>Counter-example: Topological order (FQHE, spin liquids)</strong></p>
      <ul>
        <li>No symmetry breaking at all</li>
        <li>Yet clearly different from trivial phase</li>
        <li>Distinguished by: ground state degeneracy, anyonic excitations, entanglement</li>
        <li><strong>Missing ingredient:</strong> Pattern of long-range entanglement</li>
      </ul>

      <p><strong>Need for generalization:</strong></p>
      <p>Landau's framework works beautifully for symmetry-breaking phases but must be extended to include:</p>
      <ul>
        <li>Topological phases (integer quantum Hall)</li>
        <li>Topologically ordered phases (fractional quantum Hall, spin liquids)</li>
        <li>Symmetry-protected topological phases (topological insulators, Haldane phase)</li>
      </ul>
    </div>

    <h2>4. Modern Definition via Local Unitary Equivalence</h2>

    <div class="highlight-box">
      <h3>Quantum Information Perspective</h3>

      <p><strong>Key insight:</strong></p>
      <p>Two gapped ground states are in the same phase if they can be connected by a <strong>local unitary transformation</strong>.</p>

      <p><strong>Local unitary transformation:</strong></p>
      <div class="equation">
        U = ∏_i U_i,  U_i \text{ acts on finite region } R_i
      </div>
      <ul>
        <li>Product of unitaries acting on bounded regions</li>
        <li>Finite depth: can be implemented by quantum circuit of bounded depth</li>
        <li>Preserves entanglement structure at long distances</li>
      </ul>

      <p><strong>Definition (Modern):</strong></p>
      <p>States |ψ⟩ and |ψ'⟩ are in the same quantum phase if:</p>
      <div class="equation">
        |ψ'⟩ = U |ψ⟩
      </div>
      <p>where U is a local unitary operator (or can be connected by continuous family of local unitaries).</p>

      <p><strong>Why this works:</strong></p>
      <ul>
        <li>Local unitaries change local details but preserve global topological properties</li>
        <li>Cannot change long-range entanglement pattern</li>
        <li>Cannot change topological invariants (Chern number, etc.)</li>
        <li>Cannot create/destroy anyons or topological degeneracy</li>
      </ul>

      <p><strong>Example:</strong></p>
      <ul>
        <li>Product state |↑↑...↑⟩ and |↓↓...↓⟩ are in same phase (related by ∏ σ_i^x)</li>
        <li>Product state |↑↑...↑⟩ and GHZ state (|↑...↑⟩ + |↓...↓⟩)/√2 are NOT (entanglement differs)</li>
        <li>Toric code ground states on different topologies are in same phase (same intrinsic order)</li>
      </ul>
    </div>

    <h2>5. Classification of Quantum Phases</h2>

    <div class="comparison-box">
      <h3>Complete Classification for Gapped Phases</h3>
      <table class="comparison-table">
        <tr>
          <th>Phase Type</th>
          <th>Symmetry Breaking</th>
          <th>Entanglement</th>
          <th>Examples</th>
        </tr>
        <tr>
          <td><strong>Trivial</strong></td>
          <td>No</td>
          <td>Short-range (SRE)</td>
          <td>Atomic insulator, vacuum</td>
        </tr>
        <tr>
          <td><strong>Symmetry-breaking</strong></td>
          <td>Yes</td>
          <td>SRE + symmetry breaking</td>
          <td>Magnets, crystals, superfluids</td>
        </tr>
        <tr>
          <td><strong>SPT</strong></td>
          <td>No (preserves symmetry)</td>
          <td>Short-range (SRE)</td>
          <td>Topological insulators, Haldane</td>
        </tr>
        <tr>
          <td><strong>Topological order</strong></td>
          <td>No</td>
          <td>Long-range (LRE)</td>
          <td>FQHE, toric code, spin liquids</td>
        </tr>
        <tr>
          <td><strong>Combined</strong></td>
          <td>Yes</td>
          <td>LRE + symmetry breaking</td>
          <td>Chiral spin liquids</td>
        </tr>
      </table>
    </div>

    <div class="note-box">
      <h3>Decision Tree for Phase Classification</h3>

      <p><strong>Step 1: Check if gapped</strong></p>
      <ul>
        <li>Yes → Continue to Step 2</li>
        <li>No → Gapless phase (critical, metallic, etc.) - different classification</li>
      </ul>

      <p><strong>Step 2: Measure entanglement entropy</strong></p>
      <div class="equation">
        S(A) = α |∂A| - γ + o(1)
      </div>
      <ul>
        <li>γ = 0 → Short-range entangled (SRE) → Go to Step 3</li>
        <li>γ &gt; 0 → Long-range entangled (LRE) → <strong>Topological order</strong></li>
      </ul>

      <p><strong>Step 3: Check symmetry breaking (for SRE)</strong></p>
      <ul>
        <li>Symmetry G broken → <strong>Symmetry-breaking phase</strong></li>
        <li>Symmetry G preserved:
          <ul>
            <li>Check edge states, protected by symmetry → <strong>SPT phase</strong></li>
            <li>No edge states, trivial on all geometries → <strong>Trivial phase</strong></li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>6. Quantum Critical Points</h2>

    <div class="info-box">
      <h3>Criticality at T=0</h3>

      <p><strong>Definition:</strong></p>
      <p>A quantum critical point (QCP) is a value g_c of the coupling constant where the energy gap vanishes and the correlation length diverges.</p>

      <div class="equation">
        Δ(g → g_c) ~ |g - g_c|^{zν},  ξ(g → g_c) ~ |g - g_c|^{-ν}
      </div>
      <ul>
        <li>ν: Correlation length exponent</li>
        <li>z: Dynamic critical exponent</li>
      </ul>

      <p><strong>Properties:</strong></p>
      <ul>
        <li><strong>Scale invariance:</strong> System looks same at all length scales</li>
        <li><strong>Power law correlations:</strong> ⟨O(r) O(0)⟩ ~ 1/r^{2Δ}</li>
        <li><strong>Universality:</strong> Critical exponents depend only on symmetry and dimension</li>
        <li><strong>(d+1) classical:</strong> QCP in d spatial dimensions ≃ classical critical point in (d+1) dimensions</li>
      </ul>

      <p><strong>Quantum-to-classical mapping:</strong></p>
      <p>Imaginary time τ = it acts as an extra spatial dimension:</p>
      <div class="equation">
        Z = Tr e^{-βH} = \int D[φ(x, τ)] e^{-S_E[φ]}
      </div>
      <p>Quantum critical point in d dimensions maps to classical critical point in (d+1) dimensions</p>
    </div>

    <h2>7. First vs Second Order Transitions</h2>

    <div class="highlight-box">
      <h3>Transition Mechanisms</h3>

      <p><strong>Second-order (continuous) QPT:</strong></p>
      <ul>
        <li>Energy gap Δ(g) → 0 continuously as g → g_c</li>
        <li>Correlation length ξ diverges: ξ ~ |g - g_c|^{-ν}</li>
        <li>Order parameter (if exists) vanishes continuously</li>
        <li>Universal critical behavior, scaling laws</li>
        <li><strong>Example:</strong> Transverse field Ising model</li>
      </ul>

      <p><strong>First-order (discontinuous) QPT:</strong></p>
      <ul>
        <li>Level crossing: two distinct ground states become degenerate</li>
        <li>Gap closes only at isolated point</li>
        <li>Observables discontinuous at transition</li>
        <li>No universality, transition depends on microscopic details</li>
        <li><strong>Example:</strong> Some quantum clock models</li>
      </ul>

      <p><strong>Topological phase transitions:</strong></p>
      <ul>
        <li>Can occur without gap closing (e.g., between SPT phases)</li>
        <li>Characterized by change in topological invariant</li>
        <li>May or may not show critical behavior</li>
        <li><strong>Example:</strong> Integer quantum Hall plateaus</li>
      </ul>
    </div>

    <h2>8. Examples of Quantum Phase Transitions</h2>

    <div class="note-box">
      <h3>Concrete Realizations</h3>

      <p><strong>1. Transverse field Ising chain:</strong></p>
      <div class="equation">
        H = -J ∑_i σ_i^z σ_{i+1}^z - h ∑_i σ_i^x
      </div>
      <ul>
        <li>h/J &lt; 1: Ferromagnetic, ⟨σ^z⟩ ≠ 0, spontaneous symmetry breaking</li>
        <li>h/J &gt; 1: Paramagnetic, ⟨σ^x⟩ ≈ 1, polarized in field direction</li>
        <li>h/J = 1: QCP, described by (1+1)D Ising CFT, central charge c = 1/2</li>
      </ul>

      <p><strong>2. Bose-Hubbard model:</strong></p>
      <div class="equation">
        H = -t ∑_{⟨ij⟩} (b_i† b_j + h.c.) + \frac{U}{2} ∑_i n_i(n_i-1) - μ ∑_i n_i
      </div>
      <ul>
        <li>t/U ≫ 1: Superfluid phase, U(1) symmetry broken</li>
        <li>t/U ≪ 1: Mott insulator, integer filling, gapped</li>
        <li>(t/U)_c ≈ 0.03 (d=3): Superfluid-insulator transition</li>
      </ul>

      <p><strong>3. Kitaev chain:</strong></p>
      <div class="equation">
        H = -μ ∑_i c_i† c_i - ∑_i (t c_i† c_{i+1} + Δ c_i c_{i+1} + h.c.)
      </div>
      <ul>
        <li>Topological superconductor (|μ| &lt; 2|t|) with Majorana edge modes</li>
        <li>Trivial superconductor (|μ| &gt; 2|t|)</li>
        <li>Transition at μ = ±2t: gap closes, Majoranas appear/disappear</li>
      </ul>
    </div>

    <h2>9. Experimental Signatures</h2>

    <div class="info-box">
      <h3>How to Detect Phases and Transitions</h3>

      <p><strong>For symmetry-breaking phases:</strong></p>
      <ul>
        <li>Measure order parameter: magnetization, superfluid density, etc.</li>
        <li>Look for spontaneous symmetry breaking</li>
        <li>Observe Goldstone modes (gapless excitations)</li>
      </ul>

      <p><strong>For topological phases:</strong></p>
      <ul>
        <li>Quantized response: Hall conductance σ_xy = ν e²/h</li>
        <li>Edge states: chiral or helical modes at boundaries</li>
        <li>Ground state degeneracy on non-trivial topologies</li>
        <li>Anyonic braiding statistics</li>
      </ul>

      <p><strong>For phase transitions:</strong></p>
      <ul>
        <li>Diverging susceptibility: χ ~ (g - g_c)^{-γ}</li>
        <li>Diverging correlation length from correlation function decay</li>
        <li>Scaling behavior near critical point</li>
        <li>Entanglement entropy scaling: S ~ log L at 1D QCP</li>
      </ul>

      <p><strong>Modern probes:</strong></p>
      <ul>
        <li>STM: Visualize edge states, local density of states</li>
        <li>ARPES: Measure band structure, topological invariants</li>
        <li>Transport: Quantized Hall conductance, thermal Hall effect</li>
        <li>Quantum gas microscopy: Single-atom resolution, correlation functions</li>
        <li>Neutron scattering: Dynamical structure factor, dispersion relations</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Quantum phases and phase transitions - Key points:</strong></p>
      <ul>
        <li><strong>Quantum phase:</strong> Set of ground states connected without gap closing (adiabatic continuity)</li>
        <li><strong>Modern definition:</strong> Equivalence under local unitary transformations</li>
        <li><strong>QPT:</strong> Qualitative change in ground state at T=0 driven by quantum fluctuations</li>
        <li><strong>Classification:</strong> Gapped phases divided by entanglement (SRE vs LRE) and symmetry</li>
        <li><strong>Beyond Landau:</strong> Topological phases not characterized by symmetry breaking</li>
        <li><strong>QCP:</strong> Gap closes, correlation length diverges, universal scaling behavior</li>
      </ul>

      <p><strong>Next:</strong> Section 7.3 develops the framework of local unitary transformations in detail, providing the mathematical foundation for this modern classification scheme.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_7_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
