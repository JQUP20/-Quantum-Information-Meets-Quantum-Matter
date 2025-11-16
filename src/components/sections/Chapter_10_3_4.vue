<template>
  <div class="section-content">
    <h1>10.3.4 Fermion Parity and T²=-1 Time Reversal</h1>

    <p>
      For spin-1/2 fermions, time-reversal symmetry satisfies <strong>T² = -1</strong>, leading to Kramers theorem and dramatically different topological physics. This corresponds to <strong>class DIII</strong> in the Altland-Zirnbauer classification. In 1D, the classification is <strong>ℤ₂</strong>—two distinct phases: trivial or topological, with Kramers pairs of Majorana modes at the boundary.
    </p>

    <h2>Time-Reversal with T²=-1: Kramers Theorem</h2>

    <div class="info-box">
      <h3>Origin of T²=-1</h3>
      <p>
        For fermions with spin-1/2, time-reversal operator acts on spin:
      </p>
      <div class="equation">
        T = i σ_y K
      </div>
      <p>
        where K is complex conjugation and σ_y is Pauli matrix.
      </p>

      <h4>Derivation of T²=-1</h4>
      <p>
        Applying T twice:
      </p>
      <div class="equation">
        T² = (iσ_y K)(iσ_y K) = iσ_y (iσ_y)^* = -σ_y σ_y = -1
      </div>
      <p>
        The minus sign comes from anti-linearity of K!
      </p>

      <h4>Kramers Theorem</h4>
      <p>
        <strong>Kramers Theorem:</strong> For any T-invariant Hamiltonian with T²=-1, every energy level is at least 2-fold degenerate.
      </p>
      <p>
        <strong>Proof sketch:</strong>
      </p>
      <ol>
        <li>If |ψ⟩ is eigenstate with energy E, then T|ψ⟩ also has energy E</li>
        <li>Since T²=-1, we have T²|ψ⟩ = -|ψ⟩</li>
        <li>This implies ⟨ψ|Tψ⟩ = 0 (orthogonal!)</li>
        <li>So |ψ⟩ and T|ψ⟩ form degenerate Kramers pair</li>
      </ol>

      <h4>Consequence</h4>
      <p>
        Every state comes in Kramers doublets: {|ψ⟩, T|ψ⟩}. Cannot split degeneracy without breaking T-symmetry.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Action on Fermion Operators</h4>
      <p>
        For spin-1/2 fermions c_{j,σ} (σ=↑,↓):
      </p>
      <div class="equation">
        T c_{j,↑} T^{-1} = c_{j,↓},  T c_{j,↓} T^{-1} = -c_{j,↑}
      </div>
      <p>
        T flips spin and adds sign for ↓→↑.
      </p>

      <h4>Constraint on Hamiltonian</h4>
      <p>
        T-invariance [T,H]=0 imposes reality condition:
      </p>
      <div class="equation">
        H(k) = τ_x σ_y H^*(-k) σ_y τ_x
      </div>
      <p>
        where τ acts in particle-hole space, σ acts in spin space.
      </p>
    </div>

    <h2>Class DIII: ℤ₂ Classification</h2>

    <div class="info-box">
      <h3>Topological Invariant: ℤ₂ Index</h3>
      <p>
        For 1D system with T²=-1 and fermion parity, classification is ℤ₂.
      </p>

      <h4>Why ℤ₂ not ℤ?</h4>
      <p>
        Unlike BDI (T²=+1) which has ℤ, DIII has ℤ₂ because:
      </p>
      <ul>
        <li>Kramers theorem forces degeneracy</li>
        <li>Edge modes come in Kramers pairs</li>
        <li>Two copies of topological phase can be trivialized</li>
      </ul>

      <h4>Topological Invariant</h4>
      <p>
        ν ∈ {0, 1} (ℤ₂):
      </p>
      <ul>
        <li><strong>ν = 0:</strong> Trivial phase, no edge modes</li>
        <li><strong>ν = 1:</strong> Topological phase, Kramers pair at each edge</li>
      </ul>

      <h4>Pfaffian Formula</h4>
      <p>
        At T-invariant momenta k = 0, π:
      </p>
      <div class="equation">
        ν = sgn[Pf(H(k=0))] · sgn[Pf(H(k=π))]  mod 2
      </div>
      <p>
        where H(k) is antisymmetrized Hamiltonian.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Edge Modes: Kramers Pair of Majoranas</h4>
      <p>
        In topological phase (ν=1):
      </p>
      <ul>
        <li><strong>Left edge:</strong> Two Majorana modes {γ₁, γ₂} forming Kramers pair</li>
        <li><strong>Right edge:</strong> Two Majorana modes {γ₃, γ₄} forming Kramers pair</li>
      </ul>

      <h4>Kramers Pair Structure</h4>
      <p>
        Majoranas related by time-reversal:
      </p>
      <div class="equation">
        T γ₁ T^{-1} = γ₂,  T γ₂ T^{-1} = -γ₁
      </div>
      <p>
        Form one complex fermion:
      </p>
      <div class="equation">
        f = (γ₁ + iγ₂)/2
      </div>
      <p>
        with states |0⟩, |1⟩ = {T|0⟩, T|1⟩} (Kramers doublet).
      </p>

      <h4>Ground State Degeneracy</h4>
      <p>
        One Kramers pair per edge → 2 edge fermions → <strong>4-fold degeneracy</strong>
      </p>
      <p>
        But Kramers degeneracy already gives factor 2, so topological degeneracy is 2×2=4.
      </p>
    </div>

    <h2>Model Example: Time-Reversal Invariant Kitaev Chain</h2>

    <div class="info-box">
      <h3>DIII Hamiltonian</h3>
      <p>
        Consider spinful fermions with T²=-1:
      </p>
      <div class="equation">
        H = ∑_j [-t(c^†_{j,σ} c_{j+1,σ} + h.c.) - μ c^†_{j,σ} c_{j,σ} + Δ (c_{j,↑} c_{j+1,↓} - c_{j,↓} c_{j+1,↑} + h.c.)]
      </div>

      <h4>Ingredients</h4>
      <ul>
        <li><strong>Hopping:</strong> -t ∑(c^†c + h.c.), spin-independent</li>
        <li><strong>Chemical potential:</strong> -μ ∑ c^†c</li>
        <li><strong>Singlet pairing:</strong> Δ (c↑c↓ - c↓c↑), T-invariant</li>
      </ul>

      <h4>Symmetries</h4>
      <ul>
        <li>Fermion parity P = (-1)^F</li>
        <li>Time-reversal T with T²=-1</li>
        <li>Spin rotation broken by pairing</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Phase Diagram</h4>
      <p>
        BdG Hamiltonian in momentum space:
      </p>
      <div class="equation">
        H(k) = [-2t cos(k) - μ] τ_z ⊗ σ_0 + 2Δ sin(k) τ_y ⊗ σ_y
      </div>

      <h4>Topological Transition</h4>
      <ul>
        <li>|μ| &gt; 2t: ν = 0 (trivial)</li>
        <li>|μ| &lt; 2t: ν = 1 (topological)</li>
        <li>μ = ±2t: Critical points (gap closes)</li>
      </ul>

      <h4>Edge Spectrum</h4>
      <p>
        On open chain in topological phase:
      </p>
      <ul>
        <li>Two Majorana zero modes per edge</li>
        <li>Form Kramers doublet: E = 0, degenerate</li>
        <li>Protected by T-symmetry: cannot split without breaking T</li>
      </ul>
    </div>

    <h2>Stacking Property: ℤ₂ Nature</h2>

    <div class="info-box">
      <h3>Why Two Copies Trivialize</h3>
      <p>
        Consider stacking two DIII topological chains:
      </p>

      <h4>Edge Mode Counting</h4>
      <p>
        Each chain has 1 Kramers pair per edge → Stack has 2 Kramers pairs per edge
      </p>
      <p>
        = 4 Majorana modes per edge
      </p>

      <h4>Gapping Mechanism</h4>
      <p>
        4 Majoranas can pair up:
      </p>
      <div class="equation">
        H_{edge} = i[ε₁ γ₁ γ₂ + ε₂ γ₃ γ₄]
      </div>
      <p>
        This preserves T-symmetry if pairing respects Kramers structure:
      </p>
      <div class="equation">
        (γ₁, γ₂) ↔ Kramers pair 1,  (γ₃, γ₄) ↔ Kramers pair 2
      </equation>

      <h4>Result</h4>
      <p>
        Two topological phases can be gapped → Phase_1 ⊕ Phase_1 = Phase_0 (trivial)
      </p>
      <p>
        This is ℤ₂: Only two equivalence classes modulo stacking.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Group Structure</h4>
      <p>
        DIII phases form group:
      </p>
      <div class="equation">
        ℤ₂ = {0, 1} with addition mod 2
      </div>
      <ul>
        <li>Phase_0: Trivial (identity)</li>
        <li>Phase_1: Topological (self-inverse: 1+1=0 mod 2)</li>
      </ul>

      <h4>Contrast with BDI (ℤ)</h4>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>BDI (T²=+1)</th>
            <th>DIII (T²=-1)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Classification</td>
            <td>ℤ (infinite)</td>
            <td>ℤ₂ (2 phases)</td>
          </tr>
          <tr>
            <td>Edge modes</td>
            <td>ν Majoranas</td>
            <td>1 Kramers pair (2 Majoranas)</td>
          </tr>
          <tr>
            <td>Stacking</td>
            <td>ν₁+ν₂ (no periodicity)</td>
            <td>1+1=0 (mod 2)</td>
          </tr>
          <tr>
            <td>Degeneracy</td>
            <td>Not forced</td>
            <td>Kramers theorem</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Physical Realizations</h2>

    <div class="info-box">
      <h3>Topological Superconductors with T²=-1</h3>

      <h4>1. Proximity-Induced TSC on Topological Insulator</h4>
      <ul>
        <li><strong>Platform:</strong> 3D TI surface + s-wave superconductor</li>
        <li><strong>Surface:</strong> 2D Dirac fermions with spin-momentum locking</li>
        <li><strong>Proximity effect:</strong> Induces singlet pairing</li>
        <li><strong>Result:</strong> 2D DIII topological SC (not 1D, but related)</li>
      </ul>

      <h4>2. Helical Liquid Edge + Superconductor</h4>
      <ul>
        <li><strong>Starting point:</strong> Quantum spin Hall edge (1D helical liquid)</li>
        <li><strong>Proximity SC:</strong> Couples two counterpropagating modes</li>
        <li><strong>Effective theory:</strong> 1D DIII class</li>
        <li><strong>Edge modes:</strong> Kramers pair of Majoranas at junctions</li>
      </ul>

      <h4>3. Cold Atoms with Synthetic Spin-Orbit Coupling</h4>
      <ul>
        <li><strong>Platform:</strong> ⁶Li or ⁴⁰K in optical lattice</li>
        <li><strong>Spin:</strong> Two hyperfine states play role of ↑,↓</li>
        <li><strong>T-symmetry:</strong> Engineered via laser configuration</li>
        <li><strong>Pairing:</strong> Feshbach resonance creates singlet Cooper pairs</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Detection Signatures</h4>

      <h4>1. Kramers Degeneracy</h4>
      <p>
        Zero-energy modes are 2-fold degenerate even at finite temperature (Kramers protection).
      </p>

      <h4>2. Conductance Quantization</h4>
      <p>
        Kramers pair contributes:
      </p>
      <div class="equation">
        G = 2 × (2e²/h) = 4e²/h
      </div>
      <p>
        Factor of 2 from Kramers pair, factor of 2 from Majorana being self-adjoint.
      </p>

      <h4>3. Spin Polarization</h4>
      <p>
        Kramers pair has opposite spin polarization:
      </p>
      <div class="equation">
        ⟨γ₁|S_z|γ₁⟩ = -⟨γ₂|S_z|γ₂⟩
      </div>
      <p>
        Can be detected via spin-resolved STM or transport.
      </p>

      <h4>4. Magnetic Field Response</h4>
      <p>
        Small magnetic field B splits Kramers degeneracy:
      </p>
      <div class="equation">
        ΔE ∼ g μ_B B
      </div>
      <p>
        Linear in B (Zeeman splitting).
      </p>
    </div>

    <h2>Comparison: Three Fermionic Classes</h2>

    <div class="comparison-box">
      <h3>1D Fermionic SPT: D vs BDI vs DIII</h3>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Symmetry</th>
            <th>T²</th>
            <th>Classification</th>
            <th>Edge Modes</th>
            <th>Stacking</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>D</td>
            <td>Parity only</td>
            <td>-</td>
            <td>ℤ₈</td>
            <td>n Majoranas (n=0,...,7)</td>
            <td>8 copies → trivial</td>
          </tr>
          <tr>
            <td>BDI</td>
            <td>Parity + T (T²=+1)</td>
            <td>+1</td>
            <td>ℤ</td>
            <td>ν Majoranas</td>
            <td>No periodicity</td>
          </tr>
          <tr>
            <td>DIII</td>
            <td>Parity + T (T²=-1)</td>
            <td>-1</td>
            <td>ℤ₂</td>
            <td>Kramers pair (2 Majoranas)</td>
            <td>2 copies → trivial</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Connection to 2D Topological Insulators</h2>

    <div class="info-box">
      <h3>Dimensional Reduction</h3>
      <p>
        There is deep connection between:
      </p>
      <ul>
        <li>2D ℤ₂ topological insulator (QSH) with T²=-1</li>
        <li>1D DIII topological superconductor</li>
      </ul>

      <h4>Mechanism: Proximity Effect</h4>
      <p>
        Start with 2D QSH insulator:
      </p>
      <ol>
        <li>Has 1D helical edge states (spin-momentum locked)</li>
        <li>Proximity-couple edge to s-wave superconductor</li>
        <li>Opens gap in bulk, leaves Majorana modes at ends</li>
        <li>Result: 1D DIII topological SC</li>
      </ol>

      <h4>Bulk-Boundary-Boundary Correspondence</h4>
      <p>
        Hierarchy:
      </p>
      <div class="equation">
        2D QSH bulk → 1D helical edge → 0D Majorana ends
      </div>
      <p>
        Each arrow is a dimensional reduction preserving topology.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Experimental Platform: HgTe QSH + SC</h4>

      <h4>Setup</h4>
      <ul>
        <li>HgTe quantum well in QSH regime (d > 6.3nm)</li>
        <li>Deposit superconductor (NbN or Al) on top</li>
        <li>Create narrow channel (quasi-1D geometry)</li>
      </ul>

      <h4>Physics</h4>
      <p>
        Helical edge modes acquire pairing gap → 1D DIII topological SC
      </p>

      <h4>Signatures</h4>
      <ul>
        <li>Kramers pair of Majoranas at channel ends</li>
        <li>Conductance G = 4e²/h at resonance</li>
        <li>Magnetic field splits degeneracy</li>
      </ul>

      <h4>Advantage</h4>
      <p>
        T-symmetry protects against disorder and perturbations (no Zeeman field needed, unlike nanowire platform).
      </p>
    </div>

    <h2>Higher Dimensions and Bott Periodicity</h2>

    <div class="info-box">
      <h3>DIII in Various Dimensions</h3>
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>DIII Classification</th>
            <th>Physical System</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>d=0</td>
            <td>ℤ₂</td>
            <td>Single Majorana Kramers pair</td>
          </tr>
          <tr>
            <td>d=1</td>
            <td>ℤ₂</td>
            <td>1D TSC with T²=-1</td>
          </tr>
          <tr>
            <td>d=2</td>
            <td>ℤ</td>
            <td>p+ip SC with T protection</td>
          </tr>
          <tr>
            <td>d=3</td>
            <td>0</td>
            <td>No stable 3D DIII SPT</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pattern follows Bott periodicity with period 8.
      </p>
    </div>

    <h2>Applications: Topological Quantum Computation</h2>

    <div class="highlight-box">
      <h4>Kramers Qubits</h4>
      <p>
        Two Kramers pairs can encode one qubit:
      </p>
      <div class="equation">
        |0⟩ = |even⟩,  |1⟩ = |odd⟩
      </div>
      <p>
        Parity of fermion occupation in two Kramers pairs.
      </p>

      <h4>Advantages</h4>
      <ul>
        <li><strong>Kramers protection:</strong> Degeneracy robust to T-preserving perturbations</li>
        <li><strong>No magnetic field:</strong> Unlike D or BDI class, no Zeeman splitting needed</li>
        <li><strong>Disorder resilience:</strong> T-symmetry protects against non-magnetic disorder</li>
      </ul>

      <h4>Challenges</h4>
      <ul>
        <li>Need to manipulate without breaking T (harder than D class)</li>
        <li>Braiding operations more complex with Kramers pairs</li>
        <li>Smaller energy scales (no Zeeman gap)</li>
      </ul>
    </div>

    <h2>Advanced: Interacting DIII Phases</h2>

    <div class="info-box">
      <h3>Stability Against Interactions</h3>
      <p>
        For interacting fermions with T²=-1 and parity:
      </p>

      <h4>Classification Robustness</h4>
      <ul>
        <li><strong>Conjecture:</strong> ℤ₂ classification is <strong>stable</strong></li>
        <li>Interactions cannot split ℤ₂ further</li>
        <li>Kramers theorem persists in strongly correlated systems</li>
      </ul>

      <h4>Physical Reasoning</h4>
      <p>
        Kramers degeneracy is exact (not just topological):
      </p>
      <ul>
        <li>T²=-1 imposes |ψ⟩ and T|ψ⟩ orthogonal and degenerate</li>
        <li>No interaction can split this without breaking T</li>
        <li>Edge Kramers pair remains protected</li>
      </ul>

      <h4>Cobordism Theory</h4>
      <p>
        Complete classification via spin cobordism:
      </p>
      <div class="equation">
        Ω^{spin}_1(pt) = ℤ₂
      </div>
      <p>
        Confirms ℤ₂ classification even with interactions.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h4>Key Takeaways</h4>
      <ul>
        <li><strong>Class DIII:</strong> Fermions with parity + T²=-1 time-reversal</li>
        <li><strong>1D classification:</strong> ℤ₂ (two phases: trivial or topological)</li>
        <li><strong>Kramers theorem:</strong> T²=-1 → all states doubly degenerate</li>
        <li><strong>Edge modes:</strong> Kramers pair of Majoranas (2 modes per edge)</li>
        <li><strong>Stacking:</strong> 1+1=0 mod 2 (two copies trivialize)</li>
        <li><strong>Topological invariant:</strong> ℤ₂ Pfaffian at k=0,π</li>
        <li><strong>Physical realization:</strong> QSH edge + SC proximity, helical liquids</li>
        <li><strong>Detection:</strong> Conductance G=4e²/h, Kramers degeneracy, spin polarization</li>
      </ul>

      <h4>Conceptual Importance</h4>
      <p>
        The ℤ₂ classification of DIII illustrates the profound impact of T² sign. While T²=+1 (BDI) gives infinite ℤ classification, T²=-1 (DIII) collapses to ℤ₂ due to Kramers theorem. This demonstrates:
      </p>
      <ul>
        <li><strong>Kramers protection:</strong> T²=-1 imposes exact degeneracies, limiting topological phases</li>
        <li><strong>Symmetry constrains topology:</strong> More restrictive symmetry → fewer topological phases</li>
        <li><strong>Fundamental difference:</strong> T²=±1 lead to qualitatively different physics (ℤ vs ℤ₂)</li>
      </ul>
      <p>
        DIII class connects 1D topological superconductors to 2D topological insulators via dimensional reduction, revealing deep unity in topological phases of matter.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_3_4'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
