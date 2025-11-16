<template>
  <div class="section-content">
    <h1>10.3.2 Fermion Parity Symmetry Only</h1>

    <p>
      The simplest fermionic SPT phase is protected solely by <strong>fermion parity</strong> P = (-1)^F, which counts whether the total fermion number is even or odd. Unlike U(1) charge conservation, fermion parity is a ℤ₂ symmetry. The classification of 1D fermionic SPT phases with only parity symmetry is <strong>ℤ₈</strong>—a remarkable result with deep connections to topology and K-theory.
    </p>

    <h2>Fermion Parity Symmetry</h2>

    <div class="info-box">
      <h3>Definition and Properties</h3>
      <p>
        Fermion parity operator:
      </p>
      <div class="equation">
        P = (-1)^F = (-1)^{∑_j c^†_j c_j}
      </div>
      <p>
        where F = ∑_j n_j is the total fermion number.
      </p>

      <h4>Key Properties</h4>
      <ul>
        <li><strong>ℤ₂ group:</strong> P² = 1 (two eigenvalues: ±1)</li>
        <li><strong>Always conserved:</strong> [P,H] = 0 for any fermionic Hamiltonian</li>
        <li><strong>Superselection:</strong> Physical states must have definite parity (even or odd)</li>
        <li><strong>Local operators:</strong> Change parity by 0 (bosonic) or 1 (fermionic)</li>
      </ul>

      <h4>Why Parity is Fundamental</h4>
      <p>
        Unlike U(1) charge conservation Q = ∑_j c^†_j c_j, fermion parity:
      </p>
      <ul>
        <li>Cannot be broken (fundamental superselection rule)</li>
        <li>Emerges from Pauli exclusion principle</li>
        <li>Preserved even when pairing terms Δ(c_j c_{j+1} + h.c.) are present</li>
        <li>Distinguishes bosonic from fermionic systems</li>
      </ul>
    </div>

    <h2>The Kitaev Chain: Prototypical Model</h2>

    <div class="info-box">
      <h3>Hamiltonian and Phases</h3>
      <p>
        The Kitaev chain is the paradigmatic example of a 1D fermionic SPT phase:
      </p>
      <div class="equation">
        H = -μ ∑_j c^†_j c_j - w ∑_j (c^†_j c_{j+1} + c^†_{j+1} c_j) - Δ ∑_j (c_j c_{j+1} + c^†_j c^†_{j+1})
      </div>

      <h4>Terms Explained</h4>
      <ul>
        <li><strong>-μ ∑ c^†c:</strong> Chemical potential (on-site energy)</li>
        <li><strong>-w ∑ (c^†c + h.c.):</strong> Nearest-neighbor hopping</li>
        <li><strong>-Δ ∑ (cc + h.c.):</strong> p-wave pairing (breaks U(1), preserves parity)</li>
      </ul>

      <h4>Phase Diagram</h4>
      <p>
        For simplicity, set w = Δ = t and vary μ:
      </p>
      <div class="equation">
        H = -∑_j [t(c^†_j c_{j+1} + c_j c_{j+1}) + μc^†_j c_j] + h.c.
      </div>
      <ul>
        <li><strong>|μ| &gt; 2t:</strong> Trivial phase (gapped, no edge modes)</li>
        <li><strong>μ = ±2t:</strong> Critical points (gapless)</li>
        <li><strong>|μ| &lt; 2t:</strong> Topological phase (gapped, Majorana edge modes)</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Majorana Representation</h4>
      <p>
        Define Majorana fermion operators:
      </p>
      <div class="equation">
        γ_{A,j} = c_j + c^†_j,  γ_{B,j} = -i(c_j - c^†_j)
      </div>
      <p>
        These are Hermitian and satisfy:
      </p>
      <div class="equation">
        γ^†_α = γ_α,  {γ_α, γ_β} = 2δ_{αβ}
      </div>

      <h4>Hamiltonian in Majorana Form</h4>
      <p>
        For μ = 0, w = Δ = t:
      </p>
      <div class="equation">
        H = it ∑_j γ_{B,j} γ_{A,j+1}
      </div>
      <p>
        This pairs Majorana modes from <em>different sites</em>: γ_B at site j with γ_A at site j+1.
      </p>

      <h4>Edge Modes</h4>
      <p>
        On an open chain (sites 1 to N):
      </p>
      <ul>
        <li><strong>γ_{A,1}:</strong> Unpaired Majorana at left edge</li>
        <li><strong>γ_{B,N}:</strong> Unpaired Majorana at right edge</li>
      </ul>
      <p>
        These form one complex fermion:
      </p>
      <div class="equation">
        f_{edge} = (γ_{A,1} + iγ_{B,N})/2
      </div>
      <p>
        with two states |0⟩, |1⟩ → <strong>2-fold ground state degeneracy</strong>!
      </p>

      <h4>Exponential Protection</h4>
      <p>
        Splitting between ground states:
      </p>
      <div class="equation">
        ΔE ∼ e^{-N/ξ}
      </div>
      <p>
        where ξ is correlation length. For N → ∞, degeneracy is exact.
      </p>
    </div>

    <h2>Topological Invariant: Pfaffian</h2>

    <div class="info-box">
      <h3>Z₂ Topological Invariant</h3>
      <p>
        For BdG Hamiltonian in Majorana basis:
      </p>
      <div class="equation">
        H = (i/2) ∑_{jk} A_{jk} γ_j γ_k
      </div>
      <p>
        where A is antisymmetric matrix.
      </p>

      <h4>Pfaffian Invariant</h4>
      <p>
        At time-reversal invariant momentum k = 0 or π:
      </p>
      <div class="equation">
        ν = sgn[Pf(A(k=0))] · sgn[Pf(A(k=π))]
      </div>
      <ul>
        <li>ν = +1: Trivial phase</li>
        <li>ν = -1: Topological phase (has Majorana edge modes)</li>
      </ul>

      <h4>Physical Interpretation</h4>
      <p>
        The Pfaffian counts the "obstruction" to continuously deforming the Hamiltonian to trivial (product) state while preserving:
      </p>
      <ul>
        <li>Energy gap</li>
        <li>Fermion parity symmetry</li>
        <li>Translational symmetry (on torus)</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Calculation for Kitaev Chain</h4>
      <p>
        Fourier transform H to momentum space:
      </p>
      <div class="equation">
        H = ∑_k ψ^†_k H(k) ψ_k
      </div>
      <p>
        where ψ_k = (c_k, c^†_{-k})^T and:
      </p>
      <div class="equation">
        H(k) = -2w cos(k) σ_x - 2Δ sin(k) σ_y - μ σ_z
      </div>

      <h4>Energy Spectrum</h4>
      <div class="equation">
        E(k) = ±√{4w² cos²(k) + 4Δ² sin²(k) + μ²}
      </div>

      <h4>Gap Closing</h4>
      <p>
        Gap closes at k = 0 when μ = -2w, or k = π when μ = 2w.
      </p>
      <p>
        Topological phase: -2w &lt; μ &lt; 2w (for w = Δ).
      </p>
    </div>

    <h2>The ℤ₈ Classification</h2>

    <div class="info-box">
      <h3>Why ℤ₈?</h3>
      <p>
        For 1D fermions with only parity symmetry, the classification is:
      </p>
      <div class="equation">
        H²_{super}(ℤ₂^f, U(1)) = ℤ₈
      </div>
      <p>
        This means there are <strong>8 distinct SPT phases</strong>, labeled n = 0, 1, ..., 7.
      </p>

      <h4>Stacking Rule</h4>
      <p>
        "Stacking" two SPT phases (placing side-by-side):
      </p>
      <div class="equation">
        Phase_n ⊕ Phase_m = Phase_{(n+m) mod 8}
      </div>
      <p>
        Crucially: Phase_1 ⊕ ... ⊕ Phase_1 (8 times) = Phase_0 (trivial)
      </p>

      <h4>Generator</h4>
      <p>
        The Kitaev chain is the <strong>generator</strong>:
      </p>
      <ul>
        <li>n=0: Trivial (no Majorana modes)</li>
        <li>n=1: Kitaev chain (one Majorana per edge)</li>
        <li>n=2: Stack of 2 Kitaev chains</li>
        <li>...</li>
        <li>n=7: Stack of 7 Kitaev chains</li>
      </ul>
      <p>
        n=8 is equivalent to n=0 (8 Majoranas can pair up and gap out).
      </p>
    </div>

    <div class="highlight-box">
      <h4>Physical Interpretation of n Majoranas</h4>
      <p>
        Consider open chain with n Majorana zero modes at each edge.
      </p>

      <h4>Edge Hilbert Space</h4>
      <p>
        n Majoranas γ₁, ..., γ_n form ⌊n/2⌋ complex fermions:
      </p>
      <div class="equation">
        f_α = (γ_{2α-1} + iγ_{2α})/2,  α = 1, ..., ⌊n/2⌋
      </div>
      <p>
        Dimension: 2^{⌊n/2⌋}
      </p>

      <h4>Special Case n=8</h4>
      <ul>
        <li>8 Majoranas → 4 complex fermions</li>
        <li>Can form 4 singlet pairs (product state)</li>
        <li>Gap can be opened without breaking parity</li>
        <li>Phase becomes trivial!</li>
      </ul>

      <h4>Origin: Clifford Algebra and Bott Periodicity</h4>
      <p>
        The ℤ₈ arises from Bott periodicity in K-theory:
      </p>
      <div class="equation">
        KO(ℝ) = ℤ,  KO(ℝ²) = ℤ₂,  ..., KO(ℝ⁸) = ℤ (period 8)
      </div>
      <p>
        Clifford algebras Cl_n satisfy Cl_{n+8} ≅ Cl_n ⊗ M_{16}(ℝ).
      </p>
    </div>

    <h2>Detailed Example: n=2 Phase</h2>

    <div class="info-box">
      <h3>Stack of Two Kitaev Chains</h3>
      <p>
        Consider two independent Kitaev chains (flavor α = 1, 2):
      </p>
      <div class="equation">
        H = H₁ + H₂ = ∑_α ∑_j it[γ_{B,j}^{(α)} γ_{A,j+1}^{(α)}]
      </div>

      <h4>Edge Modes</h4>
      <p>
        Left edge: γ_{A,1}^{(1)}, γ_{A,1}^{(2)}
      </p>
      <p>
        Right edge: γ_{B,N}^{(1)}, γ_{B,N}^{(2)}
      </p>
      <p>
        Form 2 Majoranas per edge → 1 complex fermion per edge → <strong>4-fold degeneracy</strong>
      </p>

      <h4>Can We Gap This Out?</h4>
      <p>
        Try adding edge pairing:
      </p>
      <div class="equation">
        H_{edge} = iε γ_{A,1}^{(1)} γ_{A,1}^{(2)}
      </div>
      <p>
        This pairs left edge Majoranas. Similarly for right edge.
      </p>
      <p>
        <strong>Problem:</strong> This preserves parity but requires fine-tuning ε. Generic perturbations cannot gap all 4 states.
      </p>

      <h4>Stability</h4>
      <p>
        n=2 phase is <strong>stable</strong>: cannot be trivialized by parity-preserving perturbations. Remains distinct from n=0 until we reach n=8.
      </p>
    </div>

    <h2>Experimental Realizations</h2>

    <div class="info-box">
      <h3>Topological Superconductors</h3>

      <h4>Semiconductor Nanowires</h4>
      <ul>
        <li><strong>Platform:</strong> InAs or InSb nanowires with proximity-induced superconductivity</li>
        <li><strong>Ingredients:</strong> Spin-orbit coupling + Zeeman field + s-wave pairing</li>
        <li><strong>Effective model:</strong> Kitaev chain (at low energies)</li>
        <li><strong>Achievement:</strong> Zero-bias conductance peak (Delft, Copenhagen groups)</li>
      </ul>

      <h4>Recipe</h4>
      <ol>
        <li>InAs nanowire (strong spin-orbit coupling α)</li>
        <li>Coat with s-wave superconductor (Al or Nb)</li>
        <li>Apply magnetic field B parallel to wire</li>
        <li>Tune chemical potential μ via gate voltage</li>
      </ol>
      <p>
        Result: Effective p-wave pairing → Majorana zero modes
      </p>

      <h4>Effective Hamiltonian</h4>
      <div class="equation">
        H_{eff} = ∑_k [ξ(k) - α k σ_x - B σ_z] c^†_k c_k + Δ_{ind} (c_k c_{-k} + h.c.)
      </div>
      <p>
        For B > √{Δ²_{ind} + μ²}, system is topological.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Detection: Zero-Bias Conductance Peak</h4>
      <p>
        Majorana zero mode at energy E = 0 appears as:
      </p>
      <div class="equation">
        G(V=0) = 2e²/h
      </div>
      <p>
        Quantized conductance peak at zero bias!
      </p>

      <h4>Experimental Signatures</h4>
      <ul>
        <li><strong>Peak height:</strong> G₀ = 2e²/h (factor of 2 from Majorana being its own antiparticle)</li>
        <li><strong>Peak width:</strong> Δω ∼ temperature (should narrow as T → 0)</li>
        <li><strong>Oscillations:</strong> As function of B or gate voltage (Fabry-Perot from finite wire)</li>
      </ul>

      <h4>Challenges</h4>
      <ul>
        <li>Disorder can create accidental zero-energy states (Andreev bound states)</li>
        <li>Smooth confinement potential complicates analysis</li>
        <li>Unambiguous detection requires multiple independent tests</li>
      </ul>

      <h4>Smoking Gun Experiments</h4>
      <p>
        To confirm Majorana:
      </p>
      <ol>
        <li><strong>Non-local correlation:</strong> Measure coupling between two edge Majoranas</li>
        <li><strong>4π periodicity:</strong> Josephson current with period 4π (not 2π)</li>
        <li><strong>Braiding:</strong> Exchange statistics (requires multiple Majoranas)</li>
      </ol>
    </div>

    <h2>Comparison with Other Platforms</h2>

    <div class="comparison-box">
      <h3>Physical Realizations of 1D Fermionic SPT</h3>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Symmetry</th>
            <th>Classification</th>
            <th>Edge Mode</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kitaev chain</td>
            <td>Parity only</td>
            <td>ℤ₈</td>
            <td>n Majoranas (n mod 8)</td>
            <td>Theoretical model</td>
          </tr>
          <tr>
            <td>InAs nanowire</td>
            <td>Parity</td>
            <td>ℤ₂ (n=0,1)</td>
            <td>1 Majorana</td>
            <td>Experimental evidence</td>
          </tr>
          <tr>
            <td>Fe atom chain on Pb</td>
            <td>Parity</td>
            <td>ℤ₂</td>
            <td>1 Majorana</td>
            <td>STM observation</td>
          </tr>
          <tr>
            <td>Topological SC (class D)</td>
            <td>Parity</td>
            <td>ℤ₈</td>
            <td>n Majoranas</td>
            <td>Theory prediction</td>
          </tr>
          <tr>
            <td>Cold atom chain</td>
            <td>Parity</td>
            <td>ℤ₈</td>
            <td>Tunable n</td>
            <td>Proposal</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Connection to K-Theory and Periodic Table</h2>

    <div class="info-box">
      <h3>Kitaev's Periodic Table</h3>
      <p>
        Free fermion SPT phases classified by K-theory. In 1D:
      </p>

      <h4>Symmetry Classes</h4>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Symmetry</th>
            <th>T²</th>
            <th>C²</th>
            <th>1D Classification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>D</td>
            <td>Parity only</td>
            <td>-</td>
            <td>-</td>
            <td>ℤ₈</td>
          </tr>
          <tr>
            <td>DIII</td>
            <td>Parity + T (T²=-1)</td>
            <td>-1</td>
            <td>-</td>
            <td>ℤ₂</td>
          </tr>
          <tr>
            <td>BDI</td>
            <td>Parity + T (T²=+1)</td>
            <td>+1</td>
            <td>-</td>
            <td>ℤ</td>
          </tr>
          <tr>
            <td>A</td>
            <td>U(1) charge</td>
            <td>-</td>
            <td>-</td>
            <td>ℤ</td>
          </tr>
        </tbody>
      </table>

      <h4>Bott Periodicity</h4>
      <p>
        The table repeats with period 8 in dimension:
      </p>
      <div class="equation">
        Class_{d+8} ≅ Class_d
      </div>
      <p>
        This 8-fold periodicity is the same as ℤ₈ classification!
      </p>
    </div>

    <h2>Applications: Topological Quantum Computation</h2>

    <div class="highlight-box">
      <h4>Majorana Qubits</h4>
      <p>
        Two spatially separated Majorana zero modes γ₁, γ₂ form one qubit:
      </p>
      <div class="equation">
        |0⟩: (γ₁ + iγ₂)/2 is empty,  |1⟩: (γ₁ + iγ₂)/2 is occupied
      </div>

      <h4>Topological Protection</h4>
      <ul>
        <li>Information stored non-locally (in γ₁ and γ₂)</li>
        <li>Local perturbations cannot flip qubit (exponentially suppressed)</li>
        <li>Coherence time T₂ ∼ exp(L/ξ) where L = separation</li>
      </ul>

      <h4>Braiding Operations</h4>
      <p>
        Exchanging Majoranas implements quantum gates:
      </p>
      <ul>
        <li>Braiding γ₁ and γ₂: Applies phase gate</li>
        <li>Non-Abelian statistics: Braid group representation</li>
        <li>Universal for quantum computation (with additional gates)</li>
      </ul>

      <h4>Challenges</h4>
      <ul>
        <li>Need many Majorana modes (≥ 6 for useful computation)</li>
        <li>Precise control of braiding (nanometer precision)</li>
        <li>Measurement-based readout (interference experiments)</li>
      </ul>
    </div>

    <h2>Advanced Topic: Interacting Effects</h2>

    <div class="info-box">
      <h3>Beyond Free Fermions</h3>
      <p>
        For <strong>interacting</strong> fermions, classification can change:
      </p>

      <h4>Strong Coupling Limit</h4>
      <ul>
        <li>Free fermions: ℤ₈ classification</li>
        <li>With interactions: Some phases can split or merge</li>
        <li>Example: In certain cases, ℤ₈ reduces to ℤ₄ or ℤ₂</li>
      </ul>

      <h4>Mechanism</h4>
      <p>
        Interactions can enable:
      </p>
      <ul>
        <li><strong>Pairing of Majoranas:</strong> If interaction allows 4 Majoranas to gap out, ℤ₈ → ℤ₄</li>
        <li><strong>Symmetry enhancement:</strong> Accidental higher symmetry can protect/destroy phases</li>
        <li><strong>Phase transitions:</strong> Direct transition between n=1 and n=7 phases</li>
      </ul>

      <h4>Current Understanding</h4>
      <p>
        Complete classification of interacting fermionic SPT:
      </p>
      <ul>
        <li>1D with parity: Conjectured to be ℤ₈ (same as free fermions)</li>
        <li>Higher dimensions: Classification can differ significantly</li>
        <li>General theory: Group super-cohomology or cobordism</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h4>Key Takeaways</h4>
      <ul>
        <li><strong>Fermion parity:</strong> ℤ₂ symmetry P = (-1)^F, always conserved</li>
        <li><strong>Kitaev chain:</strong> Prototypical 1D fermionic SPT, Majorana edge modes</li>
        <li><strong>ℤ₈ classification:</strong> 8 distinct phases, stacking 8 copies → trivial</li>
        <li><strong>Topological invariant:</strong> Pfaffian at k=0,π determines phase</li>
        <li><strong>Edge modes:</strong> n Majorana zero modes, exponentially degenerate ground states</li>
        <li><strong>Experiments:</strong> InAs nanowires, zero-bias conductance peak</li>
        <li><strong>K-theory origin:</strong> Bott periodicity and Clifford algebras</li>
        <li><strong>Quantum computation:</strong> Topologically protected qubits via braiding</li>
      </ul>

      <h4>Conceptual Significance</h4>
      <p>
        The ℤ₈ classification of fermionic SPT with parity alone is one of the most elegant results in modern condensed matter physics. It reveals deep connections between:
      </p>
      <ul>
        <li>Topology (K-theory, Clifford algebras)</li>
        <li>Quantum matter (Majorana fermions, superconductivity)</li>
        <li>Quantum information (topological quantum computation)</li>
      </ul>
      <p>
        The fact that "stacking 8 Kitaev chains returns to trivial" is not an accident—it reflects fundamental periodicity in the structure of fermions and spacetime itself.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_3_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
