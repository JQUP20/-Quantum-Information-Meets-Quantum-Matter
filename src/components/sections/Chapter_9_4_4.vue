<template>
  <div class="section-content">
    <h1>9.4.4 Stability Under Symmetry Constraint</h1>

    <p>
      While intrinsic topological order is robust to arbitrary local perturbations, the presence of symmetry can further enhance stability and enrich the topological structure. This section explores how global symmetries interact with topological order in PEPS, leading to symmetry-enriched topological (SET) phases with additional protected properties.
    </p>

    <h2>Intrinsic vs Symmetry-Enhanced Stability</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Intrinsic Topological Order</th>
            <th>Symmetry-Enriched Topological Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Protection mechanism</td>
            <td>Energy gap alone</td>
            <td>Gap + symmetry constraint</td>
          </tr>
          <tr>
            <td>Allowed perturbations</td>
            <td>Any local Hamiltonian term</td>
            <td>Only symmetric terms</td>
          </tr>
          <tr>
            <td>Stability</td>
            <td>Robust (but can phase transition)</td>
            <td>More stable (additional barriers)</td>
          </tr>
          <tr>
            <td>Anyon properties</td>
            <td>Fixed by topological data</td>
            <td>Additional symmetry fractionalization</td>
          </tr>
          <tr>
            <td>Example</td>
            <td>Toric code (no symmetry needed)</td>
            <td>Toric code with ℤ₂ × ℤ₂ symmetry</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Symmetry-Enriched Topological Phases</h2>

    <div class="info-box">
      <h3>What is SET Order?</h3>
      <p>
        A <strong>symmetry-enriched topological (SET) phase</strong> is a topological phase with additional global symmetry G. The symmetry can act non-trivially on:
      </p>
      <ul>
        <li><strong>Anyon types:</strong> Symmetry may permute anyons (e.g., g: a → g(a))</li>
        <li><strong>Fusion structure:</strong> Must preserve fusion rules</li>
        <li><strong>Anyon quantum numbers:</strong> Anyons carry fractional symmetry charges</li>
      </ul>
      <p>
        <strong>Classification:</strong> Two SET phases with same topological order and symmetry G but different symmetry action are distinct phases.
      </p>
    </div>

    <h3>Symmetry Fractionalization</h3>

    <div class="highlight-box">
      <h4>Anyons Carrying Fractional Quantum Numbers</h4>
      <p>
        In an SET phase, anyonic excitations can carry fractional symmetry charges that cannot exist for local excitations.
      </p>
      <p>
        <strong>Example: Toric code with ℤ₂ spin flip symmetry</strong>
      </p>
      <ul>
        <li>Global symmetry: σ^x → -σ^x (or equivalently, charge conjugation)</li>
        <li>Anyons: {1, e, m, ε}</li>
        <li>Symmetry action: e ↔ e, m ↔ m (invariant), ε ↔ ε</li>
        <li>But: e and m can carry ℤ₂ charge 1/2 (fractional!)</li>
        <li>Two e anyons together: 1/2 + 1/2 = 1 ≡ 0 (mod 1)</li>
      </ul>
      <p>
        This is impossible for local particles but allowed for anyonic quasiparticles.
      </p>
    </div>

    <h2>G-Crossed Braiding</h2>

    <div class="info-box">
      <h3>Symmetry Defects and Extended Braiding</h3>
      <p>
        When symmetry acts non-trivially on anyons, we must consider:
      </p>
      <ul>
        <li><strong>Symmetry defects:</strong> Domain walls where symmetry g is applied</li>
        <li><strong>G-crossed fusion:</strong> Anyon a fusing with defect g → g(a)</li>
        <li><strong>G-crossed braiding:</strong> Braiding anyons around symmetry defects</li>
      </ul>
      <p>
        This extends standard anyon theory to G-crossed theory with additional data:
      </p>
      <div class="equation">
        {𝒜, N^c_{ab}, F, R} → {𝒜, G, ρ_g, N^c_{ab,g}, F^{abc}_{d,g,h}, R^{ab}_{c,g}}
      </div>
      <p>
        where ρ_g is the permutation action of g on anyons.
      </p>
    </div>

    <h2>Symmetry Implementation in PEPS</h2>

    <div class="info-box">
      <h3>On-Site Symmetry with Topological Order</h3>
      <p>
        For a PEPS with global symmetry G and topological order, tensors must satisfy:
      </p>
      <div class="equation">
        ∑_j V^g_{ij} A^j_{αβγδ} = ∑_{α'β'γ'δ'} u_g(α,α') u_g(β,β') u_g(γ,γ') u_g(δ,δ') A^i_{α'β'γ'δ'}
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>V^g is physical representation of group element g ∈ G</li>
        <li>u_g is virtual representation on bond indices</li>
      </ul>
      <p>
        <strong>Key constraint:</strong> Virtual representation u_g must be compatible with anyon fusion structure.
      </p>
    </div>

    <h3>Projective Representations</h3>

    <div class="highlight-box">
      <h4>Symmetry Can Act Projectively on Anyons</h4>
      <p>
        Unlike physical particles (linear representations), virtual spaces can carry projective representations:
      </p>
      <div class="equation">
        u_g u_h = ω(g,h) u_{gh}
      </div>
      <p>
        where ω(g,h) ∈ U(1) is a 2-cocycle satisfying associativity.
      </p>
      <p>
        <strong>Physical consequence:</strong> Different choices of ω label distinct SET phases with same topological order and symmetry.
      </p>
      <p>
        <strong>Example:</strong> 2D spin liquids with spin rotation symmetry can have anyons forming spinor (projective) representations of SU(2).
      </p>
    </div>

    <h2>Stability Analysis</h2>

    <div class="info-box">
      <h3>Enhanced Stability from Symmetry</h3>
      <p>
        Consider a PEPS with topological order and symmetry G, subject to perturbation:
      </p>
      <div class="equation">
        H = H_0 + λ H_pert
      </div>
      <p>
        <strong>Case 1: Symmetric perturbation [H_pert, G] = 0</strong>
      </p>
      <ul>
        <li>Phase remains stable for |λ| < λ_c</li>
        <li>Critical λ_c can be larger than without symmetry</li>
        <li>Symmetry fractionalization preserved</li>
        <li>Additional selection rules forbid certain processes</li>
      </ul>
      <p>
        <strong>Case 2: Symmetry-breaking perturbation [H_pert, G] ≠ 0</strong>
      </p>
      <ul>
        <li>Can induce phase transition at smaller λ_c</li>
        <li>May confine anyons that carry fractional charges</li>
        <li>Topological order can survive if symmetry breaking is weak</li>
      </ul>
    </div>

    <h3>Symmetry-Protected Stability Regions</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Symmetry</th>
            <th>Perturbation Type</th>
            <th>Stability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intrinsic TO</td>
            <td>None</td>
            <td>Generic local</td>
            <td>Stable for |λ| < λ_c^(0)</td>
          </tr>
          <tr>
            <td>SET</td>
            <td>G</td>
            <td>G-symmetric</td>
            <td>Stable for |λ| < λ_c^(G) > λ_c^(0)</td>
          </tr>
          <tr>
            <td>SET</td>
            <td>G</td>
            <td>Weak G-breaking</td>
            <td>Stable for |λ| < λ_c^(weak)</td>
          </tr>
          <tr>
            <td>SET</td>
            <td>G</td>
            <td>Strong G-breaking</td>
            <td>Unstable or confined</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Example: ℤ₂ Topological Order with Different Symmetries</h2>

    <div class="highlight-box">
      <h4>Three Distinct SET Phases</h4>
      <p>
        Consider ℤ₂ topological order (toric code type) with additional ℤ₂ symmetry:
      </p>
      <p>
        <strong>SET-I: Trivial symmetry action</strong>
      </p>
      <ul>
        <li>Symmetry acts trivially on all anyons: g(a) = a</li>
        <li>No fractionalization</li>
        <li>Standard toric code with decoupled ℤ₂ symmetry</li>
      </ul>
      <p>
        <strong>SET-II: Charge conjugation</strong>
      </p>
      <ul>
        <li>Symmetry swaps e ↔ m, leaves ε and 1 invariant</li>
        <li>Fractionalization possible</li>
        <li>Requires e and m to have same quantum dimension</li>
      </ul>
      <p>
        <strong>SET-III: Fractionalized charges</strong>
      </p>
      <ul>
        <li>Symmetry leaves all anyons invariant: g(a) = a</li>
        <li>But e and m carry fractional ℤ₂ charge (±1/2)</li>
        <li>Projective representation ω(g,g) = -1</li>
        <li>Fermion ε carries integer charge</li>
      </ul>
      <p>
        These three are <strong>distinct SET phases</strong> despite having identical anyon content and symmetry group.
      </p>
    </div>

    <h2>Gauging Symmetry</h2>

    <div class="info-box">
      <h3>From SET to New Topological Order</h3>
      <p>
        "Gauging" a global symmetry G converts an SET phase into a different topological phase:
      </p>
      <div class="equation">
        SET(TO₁, G) → TO₂
      </div>
      <p>
        <strong>Procedure:</strong>
      </p>
      <ol>
        <li>Promote G from global to local (gauge) symmetry</li>
        <li>Introduce gauge fields (virtual degrees of freedom)</li>
        <li>Original anyons + G-fluxes = new anyon theory</li>
      </ol>
      <p>
        <strong>Example: Gauging ℤ₂ symmetry of trivial phase</strong>
      </p>
      <ul>
        <li>Start: Trivial phase with ℤ₂ symmetry</li>
        <li>Gauge: Obtain ℤ₂ topological order (toric code)</li>
        <li>New anyons: {1, e, m, ε} where e = charge, m = ℤ₂ flux</li>
      </ul>
    </div>

    <h3>Gauging in PEPS</h3>

    <div class="highlight-box">
      <h4>Tensor Transformation Under Gauging</h4>
      <p>
        For a G-symmetric PEPS with tensor A^i_{αβγδ}:
      </p>
      <ol>
        <li>Expand virtual bonds: α → (α, g_α) where g_α ∈ G</li>
        <li>Impose local gauge constraint at each vertex</li>
        <li>New bond dimension: χ_new = χ_old × |G|</li>
        <li>Resulting PEPS has topological order (no global symmetry left)</li>
      </ol>
      <p>
        This explicitly constructs parent models for topological phases from symmetric states.
      </p>
    </div>

    <h2>Anomalies and Boundary Effects</h2>

    <div class="info-box">
      <h3>Symmetry Anomalies in 2D SET</h3>
      <p>
        Some SET phases have <strong>anomalous</strong> symmetry actions that cannot be realized in a strictly 2D system:
      </p>
      <ul>
        <li><strong>Bulk anomaly:</strong> Inconsistent G-crossed braiding (violates hexagon equation)</li>
        <li><strong>Boundary realization:</strong> Can only exist as boundary of 3D SPT phase</li>
        <li><strong>Detection:</strong> Obstruction in cohomology H³(G, U(1))</li>
      </ul>
      <p>
        <strong>Example:</strong> Certain fermionic topological orders with time-reversal symmetry require 3D bulk.
      </p>
    </div>

    <h2>Symmetry Constraints on Phase Transitions</h2>

    <div class="highlight-box">
      <h4>Allowed and Forbidden Transitions</h4>
      <p>
        Symmetry constrains possible quantum phase transitions from topological phases:
      </p>
      <p>
        <strong>Without symmetry:</strong>
      </p>
      <ul>
        <li>Toric code → trivial (allowed, generic transition)</li>
        <li>Anyons confine, gap closes and reopens</li>
      </ul>
      <p>
        <strong>With preserved ℤ₂ × ℤ₂ symmetry:</strong>
      </p>
      <ul>
        <li>Toric code → trivial (forbidden if symmetry acts non-trivially)</li>
        <li>Symmetry fractionalization must be unwound</li>
        <li>May require first-order transition or intermediate phase</li>
      </ul>
      <p>
        This explains stability enhancements in SET phases.
      </p>
    </div>

    <h2>Practical Implications for PEPS Algorithms</h2>

    <div class="info-box">
      <h3>Exploiting Symmetry for Stability</h3>
      <p>
        When simulating topological PEPS with symmetry:
      </p>
      <ul>
        <li><strong>Impose symmetry exactly:</strong> Use symmetric tensors throughout optimization</li>
        <li><strong>Block structure:</strong> Decompose by symmetry sectors → faster convergence</li>
        <li><strong>Gauge fixing:</strong> Symmetry reduces gauge freedom, stabilizes numerics</li>
        <li><strong>Error mitigation:</strong> Symmetry-breaking errors easier to identify and correct</li>
        <li><strong>Classification:</strong> Symmetry quantum numbers help distinguish phases</li>
      </ul>
      <p>
        <strong>Result:</strong> Symmetric PEPS are both physically richer and computationally more stable.
      </p>
    </div>

    <h2>Time-Reversal and Anti-Unitary Symmetries</h2>

    <div class="highlight-box">
      <h4>Special Considerations</h4>
      <p>
        Anti-unitary symmetries (e.g., time-reversal T) require modified treatment:
      </p>
      <ul>
        <li><strong>Tensor constraint:</strong> T acts on both physical and virtual indices with complex conjugation</li>
        <li><strong>Kramers degeneracy:</strong> Fermions with T² = -1 have protected degeneracies</li>
        <li><strong>Anyons:</strong> Must satisfy a ↔ ā under T (particle-antiparticle pairing)</li>
        <li><strong>Braiding:</strong> R-matrices satisfy R^{ab}_c = (R^{āb̄}_c̄)*</li>
      </ul>
      <p>
        <strong>Example:</strong> ℤ₂ topological order with time-reversal can realize topological superconductors.
      </p>
    </div>

    <h2>Classification of SET Phases</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Role</th>
            <th>Mathematical Structure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Topological order (TO)</td>
            <td>Anyon content</td>
            <td>Unitary modular tensor category</td>
          </tr>
          <tr>
            <td>Symmetry group G</td>
            <td>Global symmetry</td>
            <td>Finite/Lie group</td>
          </tr>
          <tr>
            <td>Symmetry action ρ: G → Aut(TO)</td>
            <td>Permutes anyons</td>
            <td>Group homomorphism</td>
          </tr>
          <tr>
            <td>Fractionalization class [ω]</td>
            <td>Fractional charges</td>
            <td>H²(G, A) (cohomology)</td>
          </tr>
          <tr>
            <td>Anomaly obstruction</td>
            <td>Realizability</td>
            <td>H³(G, U(1))</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Complete classification: SET phases labeled by (TO, G, ρ, [ω]) modulo anomalies.
    </p>

    <h2>Experimental Signatures</h2>

    <div class="info-box">
      <h3>Detecting SET Order</h3>
      <p>
        Experimental/numerical signatures distinguishing SET from pure topological order:
      </p>
      <ul>
        <li><strong>Symmetry-resolved entanglement:</strong> Different γ_topo in each symmetry sector</li>
        <li><strong>Anyon quantum numbers:</strong> Measurement reveals fractional charges</li>
        <li><strong>Protected edge states:</strong> Symmetry prevents certain edge reconstructions</li>
        <li><strong>Enhanced stability:</strong> Larger critical temperature T_c with symmetry</li>
        <li><strong>Symmetry defects:</strong> Specific braiding signatures around domain walls</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points on Symmetry and Topological Stability</h3>
      <ul>
        <li><strong>SET phases:</strong> Topological order + global symmetry G with non-trivial interplay</li>
        <li><strong>Fractionalization:</strong> Anyons can carry fractional symmetry quantum numbers</li>
        <li><strong>Classification:</strong> Labeled by (TO, G, ρ, [ω]) in cohomology</li>
        <li><strong>Enhanced stability:</strong> Symmetry-preserving perturbations have larger critical threshold</li>
        <li><strong>G-crossed braiding:</strong> Extended anyon theory with symmetry defects</li>
        <li><strong>Gauging:</strong> Promotes global to local symmetry, creates new topological order</li>
        <li><strong>PEPS implementation:</strong> Projective virtual representations u_g compatible with fusion</li>
        <li><strong>Computational advantage:</strong> Symmetric PEPS more stable and efficient</li>
        <li><strong>Phase transitions:</strong> Symmetry constrains allowed transitions, forbids some paths</li>
        <li><strong>Anomalies:</strong> Some SET phases require 3D bulk realization</li>
      </ul>
    </div>

    <p>
      The interplay between symmetry and topological order reveals a rich landscape of quantum phases. While intrinsic topological order is already robust, symmetry enrichment provides additional stability and structure. Understanding this connection is crucial for both fundamental physics (classification of phases) and practical applications (error-protected quantum computation). Having completed our exploration of topological phases in PEPS, we next turn to alternative tensor network architectures that capture different aspects of quantum entanglement.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_4_4'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
