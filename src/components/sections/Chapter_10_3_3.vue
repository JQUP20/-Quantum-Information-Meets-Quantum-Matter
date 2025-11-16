<template>
  <div class="section-content">
    <h1>10.3.3 Fermion Parity and T²=1 Time Reversal</h1>

    <p>
      When fermions have both <strong>fermion parity</strong> and <strong>T²=+1 time-reversal symmetry</strong>, the classification dramatically changes. This corresponds to <strong>class BDI</strong> in the Altland-Zirnbauer classification. In 1D, the classification is <strong>ℤ</strong>—an infinite tower of topologically distinct phases labeled by an integer winding number.
    </p>

    <h2>Time-Reversal with T²=+1</h2>

    <div class="info-box">
      <h3>Definition and Properties</h3>
      <p>
        Time-reversal operator T is anti-unitary:
      </p>
      <div class="equation">
        T = U_T K
      </div>
      <p>
        where U_T is unitary and K is complex conjugation.
      </p>

      <h4>T² = +1 Condition</h4>
      <p>
        Applying T twice:
      </p>
      <div class="equation">
        T² = +1  (bosonic time-reversal)
      </div>
      <p>
        This occurs for:
      </p>
      <ul>
        <li><strong>Bosons:</strong> Integer spin particles</li>
        <li><strong>Spinless fermions:</strong> Fermions without spin degree of freedom</li>
        <li><strong>Paired systems:</strong> Superconductors with spin-singlet pairing</li>
      </ul>

      <h4>Contrast with T²=-1</h4>
      <p>
        T² = -1 (fermionic time-reversal) applies to:
      </p>
      <ul>
        <li>Spin-1/2 fermions</li>
        <li>Odd number of Kramers pairs</li>
        <li>Kramers theorem applies</li>
      </ul>
      <p>
        T² = +1 has <strong>no Kramers theorem</strong>: states need not be degenerate.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Action on Fermion Operators</h4>
      <p>
        For spinless fermions c_j:
      </p>
      <div class="equation">
        T c_j T^{-1} = c_j,  T c^†_j T^{-1} = c^†_j
      </div>
      <p>
        Time-reversal flips momentum but not spin (no spin!):
      </p>
      <div class="equation">
        T c_k T^{-1} = c_{-k}
      </div>

      <h4>Constraint on Hamiltonian</h4>
      <p>
        T-invariance [T,H]=0 imposes:
      </p>
      <div class="equation">
        H(k) = H^*(-k)
      </div>
      <p>
        In BdG formalism with ψ_k = (c_k, c^†_{-k})^T:
      </p>
      <div class="equation">
        τ_x H^*(k) τ_x = H(-k)
      </div>
      <p>
        where τ_x is Pauli matrix in particle-hole space.
      </p>
    </div>

    <h2>Class BDI: ℤ Classification</h2>

    <div class="info-box">
      <h3>Topological Invariant: Winding Number</h3>
      <p>
        For 1D system with T²=+1 and parity, topological phases classified by integer <strong>winding number</strong> ν ∈ ℤ.
      </p>

      <h4>Definition via Hamiltonian</h4>
      <p>
        BdG Hamiltonian in momentum space:
      </p>
      <div class="equation">
        H(k) = d_x(k) τ_x + d_y(k) τ_y + d_z(k) τ_z
      </div>
      <p>
        where d(k) = (d_x, d_y, d_z) is a 3-component vector.
      </p>

      <h4>T-Reversal Constraint</h4>
      <p>
        T²=+1 implies:
      </p>
      <div class="equation">
        d_x(k) = d_x(-k),  d_y(k) = -d_y(-k),  d_z(k) = d_z(-k)
      </div>
      <p>
        So d_y is odd function, while d_x, d_z are even.
      </p>

      <h4>Winding Number Formula</h4>
      <div class="equation">
        ν = (1/2π) ∫_{-π}^π dk  \hat{d}(k) · [∂_k \hat{d}(k) × ∂_k \hat{d}(k)]
      </div>
      <p>
        where \hat{d} = d/|d| is unit vector.
      </p>
      <p>
        Alternatively, using unit quaternion representation:
      </p>
      <div class="equation">
        ν = (1/4πi) ∫_{-π}^π dk  Tr[q^{-1}(k) ∂_k q(k)]
      </div>
    </div>

    <div class="highlight-box">
      <h4>Simplified Formula for Inversion Symmetry</h4>
      <p>
        If system also has inversion symmetry I, winding simplifies to:
      </p>
      <div class="equation">
        ν = (1/2π) ∫_{-π}^π dk  ∂_k θ(k)
      </div>
      <p>
        where tan θ(k) = d_y(k)/d_x(k), with d_z=0 at T-invariant momenta.
      </p>

      <h4>Physical Interpretation</h4>
      <p>
        ν counts:
      </p>
      <ul>
        <li>Number of times d(k) wraps around origin as k: -π → π</li>
        <li>Number of protected Majorana edge modes (per edge)</li>
        <li>Obstruction to continuously deforming H to trivial while preserving gap, T, and parity</li>
      </ul>

      <h4>Examples</h4>
      <ul>
        <li>ν = 0: Trivial insulator</li>
        <li>ν = ±1: One Majorana mode per edge</li>
        <li>ν = ±2: Two Majorana modes per edge</li>
        <li>ν = n: |n| Majorana modes per edge</li>
      </ul>
    </div>

    <h2>Model Example: Extended Kitaev Chain</h2>

    <div class="info-box">
      <h3>BDI Hamiltonian with Spinless Fermions</h3>
      <p>
        Consider 1D chain of spinless fermions:
      </p>
      <div class="equation">
        H = -∑_j [t(c^†_j c_{j+1} + h.c.) + Δ(c_j c_{j+1} + h.c.) + μ c^†_j c_j]
      </div>
      <p>
        This preserves:
      </p>
      <ul>
        <li>Fermion parity P = (-1)^F</li>
        <li>Time-reversal T with T²=+1 (spinless)</li>
      </ul>

      <h4>Momentum Space Form</h4>
      <div class="equation">
        H(k) = -2t cos(k) τ_z - 2Δ sin(k) τ_y - μ τ_z
      </div>
      <p>
        So:
      </p>
      <div class="equation">
        d_x = 0,  d_y = -2Δ sin(k),  d_z = -2t cos(k) - μ
      </div>

      <h4>Winding Number Calculation</h4>
      <p>
        For simplicity, set μ = 0 and t = Δ:
      </p>
      <div class="equation">
        d(k) = 2t(-sin(k), -cos(k), 0)
      </div>
      <p>
        This traces a circle once as k: 0 → 2π:
      </p>
      <div class="equation">
        ν = 1
      </div>
      <p>
        Topological phase with <strong>one Majorana mode per edge</strong>.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Phase Diagram</h4>
      <p>
        Varying parameters (t, Δ, μ):
      </p>

      <h4>For t = Δ:</h4>
      <ul>
        <li>μ = 0: ν = 1 (topological)</li>
        <li>|μ| &gt; 2t: ν = 0 (trivial)</li>
        <li>Transition at μ = ±2t (gap closing)</li>
      </ul>

      <h4>For General t, Δ:</h4>
      <p>
        Winding number depends on ratio Δ/t and chemical potential μ. Multiple transitions possible with higher winding numbers |ν| &gt; 1.
      </p>

      <h4>Higher Winding Numbers</h4>
      <p>
        To realize |ν| &gt; 1, need:
      </p>
      <ul>
        <li>Longer-range hopping (next-nearest neighbor, etc.)</li>
        <li>Multiple orbitals per site</li>
        <li>Or stack |ν| copies of ν=1 chains</li>
      </ul>
    </div>

    <h2>Edge Modes and Bulk-Boundary Correspondence</h2>

    <div class="info-box">
      <h3>Protected Majorana Zero Modes</h3>
      <p>
        Open chain with winding number ν has:
      </p>
      <ul>
        <li><strong>Left edge:</strong> |ν| Majorana zero modes</li>
        <li><strong>Right edge:</strong> |ν| Majorana zero modes</li>
      </ul>

      <h4>Sign of ν</h4>
      <p>
        Sign determines chirality:
      </p>
      <ul>
        <li>ν &gt; 0: "Right-moving" character</li>
        <li>ν &lt; 0: "Left-moving" character</li>
      </ul>
      <p>
        In 1D, chirality is not literal (no direction), but encodes how edge modes transform under symmetries.
      </p>

      <h4>Ground State Degeneracy</h4>
      <p>
        ν Majorana modes per edge → ⌊ν/2⌋ complex fermions per edge:
      </p>
      <div class="equation">
        \text{Degeneracy} = 2^{⌊|ν|/2⌋}
      </div>
      <ul>
        <li>ν = 1: 1 Majorana per edge → 2-fold degenerate</li>
        <li>ν = 2: 2 Majoranas → 1 fermion → 2-fold degenerate</li>
        <li>ν = 3: 3 Majoranas → 1 fermion + 1 unpaired Majorana → 4-fold degenerate</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Protection Mechanism</h4>
      <p>
        Edge Majoranas are protected by:
      </p>
      <ul>
        <li><strong>Bulk gap:</strong> Cannot hybridize with bulk states</li>
        <li><strong>Spatial separation:</strong> Left and right edges exponentially far</li>
        <li><strong>T-symmetry:</strong> Perturbations must respect T²=+1</li>
        <li><strong>Parity:</strong> Cannot create/destroy Majoranas individually</li>
      </ul>

      <h4>Stability</h4>
      <p>
        Unlike ℤ₂ or ℤ₈ classes, ℤ classification means:
      </p>
      <ul>
        <li>Phases with different ν are <strong>absolutely distinct</strong></li>
        <li>No finite stacking returns to trivial (no periodicity)</li>
        <li>Winding number is topological invariant</li>
      </ul>
    </div>

    <h2>Comparison: BDI (ℤ) vs D (ℤ₈) vs DIII (ℤ₂)</h2>

    <div class="comparison-box">
      <h3>Fermionic SPT Classes in 1D</h3>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Symmetry</th>
            <th>T²</th>
            <th>Classification</th>
            <th>Edge Modes</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>D</td>
            <td>Parity only</td>
            <td>-</td>
            <td>ℤ₈</td>
            <td>n Majoranas (n mod 8)</td>
            <td>Kitaev chain</td>
          </tr>
          <tr>
            <td>BDI</td>
            <td>Parity + T (T²=+1)</td>
            <td>+1</td>
            <td>ℤ</td>
            <td>ν Majoranas</td>
            <td>Spinless TSC</td>
          </tr>
          <tr>
            <td>DIII</td>
            <td>Parity + T (T²=-1)</td>
            <td>-1</td>
            <td>ℤ₂</td>
            <td>0 or 1 Kramers pair</td>
            <td>Spin-1/2 TSC</td>
          </tr>
          <tr>
            <td>A</td>
            <td>U(1) charge</td>
            <td>-</td>
            <td>ℤ</td>
            <td>ν chiral modes</td>
            <td>Integer QHE</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Stacking and Group Structure</h2>

    <div class="info-box">
      <h3>Abelian Group Structure</h3>
      <p>
        BDI phases form an <strong>Abelian group</strong> under stacking:
      </p>
      <div class="equation">
        Phase_ν₁ ⊕ Phase_ν₂ = Phase_{ν₁+ν₂}
      </div>
      <p>
        This is additive group ℤ (integers under addition).
      </p>

      <h4>Generators</h4>
      <p>
        Two fundamental generators:
      </p>
      <ul>
        <li><strong>ν = +1:</strong> Forward winding</li>
        <li><strong>ν = -1:</strong> Backward winding (inverse)</li>
      </ul>
      <p>
        All phases obtained by stacking:
      </p>
      <div class="equation">
        Phase_ν = Phase_1^{⊕ν}  (for ν &gt; 0)
      </div>

      <h4>Inverse Elements</h4>
      <p>
        Phase_ν ⊕ Phase_{-ν} = Phase_0 (trivial)
      </p>
      <p>
        So Phase_{-ν} is inverse of Phase_ν.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Physical Realization of Stacking</h4>
      <p>
        To create Phase_ν for |ν| &gt; 1:
      </p>

      <h4>Method 1: Literal Stacking</h4>
      <p>
        Place |ν| copies of ν=±1 chains side-by-side, coupled weakly to preserve individual topological properties.
      </p>

      <h4>Method 2: Multi-Orbital Model</h4>
      <p>
        Use multiple orbitals (flavors) per site:
      </p>
      <div class="equation">
        H = ∑_{α=1}^{|ν|} H_{Kitaev}^{(α)}
      </div>
      <p>
        where each H_{Kitaev}^{(α)} has ν=1 or ν=-1.
      </p>

      <h4>Method 3: Longer-Range Couplings</h4>
      <p>
        Extend Kitaev model to include longer-range hopping and pairing. For example, next-nearest neighbor:
      </p>
      <div class="equation">
        H = H_{NN} + t₂ ∑_j (c^†_j c_{j+2} + h.c.) + Δ₂ ∑_j (c_j c_{j+2} + h.c.)
      </div>
      <p>
        Tuning (t₂, Δ₂) can realize ν=2 or higher.
      </p>
    </div>

    <h2>Relation to Quantum Mechanics on Circle</h2>

    <div class="info-box">
      <h3>Topological Interpretation</h3>
      <p>
        The ℤ classification has beautiful geometric interpretation:
      </p>

      <h4>Homotopy Group</h4>
      <p>
        BdG Hamiltonian defines map:
      </p>
      <div class="equation">
        d: S^1 → S^1
      </div>
      <p>
        from Brillouin zone (circle) to order parameter space (also circle, after normalization).
      </p>
      <p>
        Winding number ν ∈ π₁(S¹) = ℤ counts how many times d(k) wraps around circle.
      </p>

      <h4>Obstruction Theory</h4>
      <p>
        ν is obstruction to continuously deforming d(k) to constant map (trivial phase) while:
      </p>
      <ul>
        <li>Maintaining |d(k)| > 0 (gap condition)</li>
        <li>Preserving T-symmetry constraints</li>
        <li>Respecting periodic boundary conditions</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Connection to Berry Phase</h4>
      <p>
        Winding number related to <strong>Berry phase</strong>:
      </p>
      <div class="equation">
        γ_{Berry} = ∫_{-π}^π dk  ⟨u(k)| i∂_k |u(k)⟩ = π ν
      </div>
      <p>
        where |u(k)⟩ is occupied Bloch state.
      </p>

      <h4>Quantization</h4>
      <p>
        Berry phase quantized to integer multiples of π:
      </p>
      <div class="equation">
        γ_{Berry} = πν,  ν ∈ ℤ
      </div>
      <p>
        This quantization is protected by T and parity symmetries.
      </p>
    </div>

    <h2>Experimental Platforms</h2>

    <div class="info-box">
      <h3>Realizations of BDI Class</h3>

      <h4>1. Spinless p-wave Superconductors</h4>
      <ul>
        <li><strong>Material:</strong> Hypothetical spinless fermion systems</li>
        <li><strong>Challenge:</strong> Real fermions have spin, so spinless is hard to realize</li>
        <li><strong>Workaround:</strong> Strong Zeeman field polarizes spin → effectively spinless</li>
      </ul>

      <h4>2. Cold Atoms in Optical Lattices</h4>
      <ul>
        <li><strong>Platform:</strong> Fermionic atoms (⁶Li, ⁴⁰K) in 1D optical lattice</li>
        <li><strong>Control:</strong> Tune hopping t and interaction (via Feshbach resonance)</li>
        <li><strong>Pairing:</strong> Induce p-wave pairing via optical Feshbach resonance</li>
        <li><strong>Detection:</strong> RF spectroscopy, time-of-flight imaging</li>
      </ul>

      <h4>3. Topological Photonics</h4>
      <ul>
        <li><strong>Platform:</strong> Waveguide arrays (photonic lattice)</li>
        <li><strong>Mapping:</strong> Paraxial wave equation → Schrödinger equation</li>
        <li><strong>Edge modes:</strong> Localized light at waveguide ends</li>
        <li><strong>Measurement:</strong> Direct imaging of edge mode intensity</li>
      </ul>

      <h4>4. Mechanical Metamaterials</h4>
      <ul>
        <li><strong>Platform:</strong> Coupled mechanical oscillators</li>
        <li><strong>BDI symmetry:</strong> Emerge from design of coupling springs</li>
        <li><strong>Edge modes:</strong> Zero-frequency floppy modes at boundaries</li>
        <li><strong>Observation:</strong> Direct mechanical measurement</li>
      </ul>
    </div>

    <h2>Higher Dimensions</h2>

    <div class="info-box">
      <h3>BDI in 2D and 3D</h3>
      <p>
        BDI classification changes with dimension (Bott periodicity):
      </p>
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>BDI Classification</th>
            <th>Physical Realization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>d=1</td>
            <td>ℤ</td>
            <td>Spinless TSC, optical lattices</td>
          </tr>
          <tr>
            <td>d=2</td>
            <td>0 (trivial)</td>
            <td>No stable 2D BDI SPT</td>
          </tr>
          <tr>
            <td>d=3</td>
            <td>ℤ</td>
            <td>3D TSC with T²=+1</td>
          </tr>
          <tr>
            <td>d=4</td>
            <td>0</td>
            <td>-</td>
          </tr>
          <tr>
            <td>d=5</td>
            <td>ℤ</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pattern: Non-trivial in d ≡ 1,3,5,7 mod 8 (Bott periodicity period 8).
      </p>
    </div>

    <h2>Advanced: Interacting BDI Phases</h2>

    <div class="info-box">
      <h3>Beyond Free Fermions</h3>
      <p>
        For <strong>interacting</strong> fermions with T²=+1 and parity:
      </p>

      <h4>Classification Stability</h4>
      <ul>
        <li><strong>Conjecture:</strong> ℤ classification is <strong>stable</strong> against interactions</li>
        <li>Unlike class D (ℤ₈), interactions do not reduce ℤ</li>
        <li>Physical reason: T²=+1 is more restrictive than parity alone</li>
      </ul>

      <h4>Mechanism</h4>
      <p>
        Interactions could potentially:
      </p>
      <ul>
        <li>Split edge modes → gap out</li>
        <li>Create new topological phases</li>
      </ul>
      <p>
        But T²=+1 constraint prevents these scenarios for BDI.
      </p>

      <h4>Current Understanding</h4>
      <p>
        Based on group super-cohomology and cobordism theory:
      </p>
      <ul>
        <li>1D interacting BDI: Still ℤ (same as free fermions)</li>
        <li>Higher dimensions: Can differ from free fermion classification</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h4>Key Takeaways</h4>
      <ul>
        <li><strong>Class BDI:</strong> Fermions with parity + T²=+1 time-reversal</li>
        <li><strong>1D classification:</strong> ℤ (infinite distinct phases)</li>
        <li><strong>Topological invariant:</strong> Winding number ν ∈ ℤ</li>
        <li><strong>Edge modes:</strong> |ν| Majorana zero modes per edge</li>
        <li><strong>Stacking:</strong> ν₁ ⊕ ν₂ = ν₁+ν₂ (Abelian group ℤ)</li>
        <li><strong>Contrast with D:</strong> No periodicity (ℤ vs ℤ₈)</li>
        <li><strong>Geometric origin:</strong> Winding of d(k) around circle</li>
        <li><strong>Stability:</strong> Robust to T-preserving perturbations and interactions</li>
      </ul>

      <h4>Conceptual Importance</h4>
      <p>
        The ℤ classification of BDI reflects the power of combining symmetries. While fermion parity alone gives ℤ₈ (class D), adding T²=+1 time-reversal lifts the periodicity to give infinite ℤ. This demonstrates that:
      </p>
      <ul>
        <li><strong>Symmetry matters:</strong> Different symmetries → different topological structures</li>
        <li><strong>T² sign is crucial:</strong> T²=+1 vs T²=-1 lead to vastly different physics (ℤ vs ℤ₂)</li>
        <li><strong>Mathematics → Physics:</strong> Homotopy groups π₁(S¹)=ℤ directly manifest as physical winding numbers</li>
      </ul>
      <p>
        BDI class exemplifies the beautiful interplay between symmetry, topology, and quantum phases of matter.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_3_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
