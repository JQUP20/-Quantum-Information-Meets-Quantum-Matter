<template>
  <div class="section-content">
    <h1>8.4 No Intrinsic Topological Order in 1D Bosonic Systems</h1>

    <p>
      One of the most important consequences of the MPS structure is a fundamental no-go theorem: one-dimensional bosonic systems with local interactions and a gapped ground state cannot exhibit intrinsic topological order. This limitation sharply distinguishes 1D from higher dimensions, where topological order is ubiquitous.
    </p>

    <h2>What is Intrinsic Topological Order?</h2>

    <div class="info-box">
      <h3>Definition</h3>
      <p>
        A quantum state has <strong>intrinsic topological order</strong> (also called long-range entanglement) if it satisfies:
      </p>
      <ul>
        <li><strong>Ground state degeneracy:</strong> Multiple degenerate ground states that cannot be distinguished by local operators</li>
        <li><strong>Topological invariant:</strong> A quantity (e.g., ground state degeneracy) that depends only on topology, not geometry</li>
        <li><strong>Anyonic excitations:</strong> Quasiparticles with exotic statistics (neither bosons nor fermions)</li>
        <li><strong>Long-range entanglement:</strong> Cannot be disentangled to a product state by any finite-depth local unitary circuit</li>
      </ul>
      <p>
        <strong>Prototypical examples:</strong>
      </p>
      <ul>
        <li>Toric code in 2D (ground state degeneracy = 4 on a torus)</li>
        <li>Fractional quantum Hall states (abelian and non-abelian anyons)</li>
        <li>Chiral spin liquids (chiral edge modes)</li>
      </ul>
    </div>

    <h3>Contrast: SPT vs Intrinsic TO</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>SPT Order</th>
            <th>Intrinsic Topological Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ground state degeneracy</td>
            <td>Unique (with symmetry)</td>
            <td>Multiple (robust)</td>
          </tr>
          <tr>
            <td>Depends on symmetry?</td>
            <td>Yes (protected by symmetry)</td>
            <td>No (intrinsic, no symmetry needed)</td>
          </tr>
          <tr>
            <td>Anyonic excitations?</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Long-range entanglement?</td>
            <td>No (short-range)</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Local unitary equivalence?</td>
            <td>Yes (to product state)</td>
            <td>No</td>
          </tr>
          <tr>
            <td>1D bosonic example</td>
            <td>Haldane phase</td>
            <td>IMPOSSIBLE</td>
          </tr>
          <tr>
            <td>2D bosonic example</td>
            <td>Various SPT phases</td>
            <td>Toric code, FQH</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>The No-Go Theorem</h2>

    <div class="info-box">
      <h3>Theorem: No Intrinsic TO in 1D</h3>
      <p>
        Consider a one-dimensional quantum system on a lattice with:
      </p>
      <ul>
        <li>Local Hilbert space dimension d < ∞ per site</li>
        <li>Local interactions (finite-range Hamiltonian)</li>
        <li>Gapped spectrum (energy gap Δ > 0)</li>
        <li>Bosonic degrees of freedom (no fermion parity)</li>
      </ul>
      <p>
        <strong>Then:</strong> The ground state has NO intrinsic topological order. Specifically:
      </p>
      <ol>
        <li>The ground state is unique (on any topology, including ring)</li>
        <li>It can be connected to a product state by a finite-depth local unitary circuit</li>
        <li>It can be exactly represented as an MPS with finite bond dimension</li>
        <li>All ground state correlations decay exponentially</li>
      </ol>
    </div>

    <h3>Proof Sketch</h3>

    <div class="highlight-box">
      <h4>Why MPS Structure Forbids Topological Order</h4>
      <p>
        <strong>Step 1: Gapped ground states are MPS</strong>
      </p>
      <p>
        From the area law (Section 8.2.5), gapped 1D ground states have entanglement entropy S ≤ S_max = O(1). This means they can be approximated by MPS with finite χ ~ exp(S_max).
      </p>
      <p>
        <strong>Step 2: Injective MPS are unique</strong>
      </p>
      <p>
        If the MPS is injective (Section 8.2.9), it's the unique ground state of its parent Hamiltonian. No degeneracy.
      </p>
      <p>
        <strong>Step 3: Non-injective MPS have local distinguishability</strong>
      </p>
      <p>
        If the MPS is not injective, the "degeneracy" can be distinguished by local operators (measuring a finite region). This is not robust topological degeneracy.
      </p>
      <p>
        <strong>Step 4: MPS are short-range entangled</strong>
      </p>
      <p>
        Any MPS (injective or not) can be transformed to a product state by a finite-depth local unitary circuit (explicit construction available). This means no long-range entanglement.
      </p>
      <p>
        <strong>Conclusion:</strong> No route to intrinsic topological order in 1D!
      </p>
    </div>

    <h2>Physical Consequences</h2>

    <h3>No Topological Degeneracy</h3>

    <div class="info-box">
      <h3>Ground State Uniqueness</h3>
      <p>
        On a ring (periodic boundary conditions), the ground state is unique for any gapped 1D bosonic system. There's no topological degeneracy like in 2D:
      </p>
      <ul>
        <li><strong>1D:</strong> |GS⟩ unique, no matter the topology</li>
        <li><strong>2D toric code:</strong> 4-fold degenerate on torus, 2^{2g} on genus-g surface</li>
      </ul>
      <p>
        This is a sharp distinction: topology doesn't affect ground state counting in 1D.
      </p>
    </div>

    <h3>No Anyonic Excitations</h3>

    <div class="highlight-box">
      <h4>Only Bosons and Fermions in 1D</h4>
      <p>
        In 1D, all excitations are either:
      </p>
      <ul>
        <li><strong>Bosons:</strong> Symmetric under exchange</li>
        <li><strong>Fermions:</strong> Antisymmetric under exchange (if system has fermions)</li>
      </ul>
      <p>
        There are no anyons (particles with fractional statistics). This is topological: in 1D, you cannot braid particles around each other (need at least 2D for non-trivial braiding).
      </p>
      <p>
        <strong>Mathematical reason:</strong> The braid group B_n in 1D is trivial (all elements commute), whereas in 2D it's non-abelian.
      </p>
    </div>

    <h2>What About the Haldane Phase?</h2>

    <div class="info-box">
      <h3>SPT Order is NOT Intrinsic TO</h3>
      <p>
        The Haldane phase (spin-1 antiferromagnetic chain) is often called "topological," but it's <em>symmetry-protected</em> topological (SPT) order, not intrinsic:
      </p>
      <ul>
        <li><strong>Ground state:</strong> Unique (no topological degeneracy)</li>
        <li><strong>Edge states:</strong> Protected by SO(3) symmetry, disappear if symmetry broken</li>
        <li><strong>Excitations:</strong> Bosonic (no anyons)</li>
        <li><strong>MPS representation:</strong> Exact with χ = 2 (AKLT state)</li>
        <li><strong>Short-range entangled:</strong> Can be disentangled to product state by symmetric local unitaries</li>
      </ul>
      <p>
        <strong>Key difference:</strong> SPT order requires symmetry; intrinsic TO does not.
      </p>
    </div>

    <h2>Why 2D is Different</h2>

    <div class="highlight-box">
      <h4>Topological Order Requires Higher Dimensions</h4>
      <p>
        In 2D and above, intrinsic topological order is possible:
      </p>
      <ul>
        <li><strong>Area law still holds:</strong> S ~ L (linear in boundary, not volume)</li>
        <li><strong>But exponential degeneracy:</strong> Bond dimension χ ~ exp(L) required for PEPS</li>
        <li><strong>Non-local operators:</strong> Wilson loops, 't Hooft operators</li>
        <li><strong>Braiding:</strong> Anyons can encircle each other</li>
      </ul>
      <p>
        <strong>Example: Toric code</strong>
      </p>
      <ul>
        <li>2D lattice with qubits on edges</li>
        <li>Ground state: 4-fold degenerate on torus</li>
        <li>Anyonic excitations: e (electric), m (magnetic), ε = e × m (fermion)</li>
        <li>PEPS representation exists, but requires large χ</li>
      </ul>
    </div>

    <h2>Exceptions: Fermions and Majorana Modes</h2>

    <div class="info-box">
      <h3>Fermions Change the Story</h3>
      <p>
        Our no-go theorem assumes <strong>bosonic</strong> systems. For <strong>fermionic</strong> 1D systems, there's a loophole:
      </p>
      <ul>
        <li><strong>Topological superconductors:</strong> 1D p-wave superconductor (Kitaev chain)</li>
        <li><strong>Majorana zero modes:</strong> Appear at boundaries in topological phase</li>
        <li><strong>Ground state degeneracy:</strong> 2-fold on open chain (exponentially protected)</li>
      </ul>
      <p>
        <strong>Why it doesn't violate the theorem:</strong>
      </p>
      <ul>
        <li>The degeneracy depends on <em>fermion parity</em> (a global, non-local quantum number)</li>
        <li>Within a fixed fermion parity sector, ground state is unique</li>
        <li>This is still "short-range entangled" in the appropriate sense</li>
      </ul>
    </div>

    <h3>Kitaev Chain Example</h3>

    <div class="highlight-box">
      <h4>1D Topological Superconductor</h4>
      <p>
        The Kitaev chain Hamiltonian:
      </p>
      <div class="equation">
        H = -μ∑_j c_j^† c_j - t∑_j(c_j^† c_{j+1} + h.c.) + Δ∑_j(c_j c_{j+1} + h.c.)
      </div>
      <p>
        has two phases:
      </p>
      <ul>
        <li><strong>Trivial phase:</strong> |μ| > |t|, no edge modes</li>
        <li><strong>Topological phase:</strong> |μ| < |t|, Majorana zero modes at edges</li>
      </ul>
      <p>
        In the topological phase:
      </p>
      <ul>
        <li>Ground state degeneracy: 2 (even/odd fermion parity)</li>
        <li>Majorana modes γ_L, γ_R at left/right edges</li>
        <li>Protected by particle-hole and fermion parity symmetries</li>
      </ul>
      <p>
        But this is NOT intrinsic topological order—it's fermionic SPT order.
      </p>
    </div>

    <h2>Implications for Quantum Computing</h2>

    <div class="info-box">
      <h3>No Topological Quantum Computation in 1D</h3>
      <p>
        Intrinsic topological order is the basis for topological quantum computation. The no-go theorem implies:
      </p>
      <ul>
        <li><strong>No 1D topological qubits:</strong> Cannot store quantum information in topologically protected ground state degeneracy</li>
        <li><strong>No 1D anyon braiding:</strong> Cannot perform gates by braiding anyons</li>
        <li><strong>Need 2D or higher:</strong> Topological quantum computation requires at least 2D systems (e.g., surface codes, non-abelian anyons)</li>
      </ul>
      <p>
        <strong>Exception:</strong> Measurement-based quantum computation with 1D cluster states (but this uses SPT order, not intrinsic TO).
      </p>
    </div>

    <h2>Mathematical Perspective: Entanglement Renormalization</h2>

    <div class="highlight-box">
      <h4>Short-Range vs Long-Range Entanglement</h4>
      <p>
        The fundamental distinction is:
      </p>
      <ul>
        <li><strong>Short-range entanglement (SRE):</strong> Can be disentangled to product state by finite-depth local unitary (FDLU) circuit</li>
        <li><strong>Long-range entanglement (LRE):</strong> Cannot be disentangled by any FDLU</li>
      </ul>
      <p>
        <strong>Theorem (Chen-Gu-Wen):</strong> All gapped 1D bosonic states are SRE.
      </p>
      <p>
        <strong>Proof idea:</strong> Construct explicit FDLU that maps any gapped 1D state to a product state, using the finite correlation length to bound the circuit depth.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>No-go theorem:</strong> 1D bosonic gapped systems cannot have intrinsic topological order</li>
        <li><strong>Consequences:</strong>
          <ul>
            <li>Unique ground state (no topological degeneracy)</li>
            <li>No anyonic excitations</li>
            <li>All states are short-range entangled (SRE)</li>
            <li>MPS with finite χ suffices</li>
          </ul>
        </li>
        <li><strong>SPT order:</strong> Allowed in 1D (Haldane phase), but requires symmetry protection</li>
        <li><strong>2D and higher:</strong> Intrinsic topological order possible (toric code, FQH)</li>
        <li><strong>Fermions:</strong> Majorana modes and fermionic SPT possible, but not intrinsic TO</li>
        <li><strong>Quantum computing:</strong> No topological qubits or braiding in 1D</li>
        <li><strong>Entanglement classification:</strong> SRE vs LRE distinguishes 1D from higher dimensions</li>
      </ul>
    </div>

    <p>
      The impossibility of intrinsic topological order in one dimension is a profound constraint that shapes the landscape of quantum phases. While 1D systems can exhibit rich physics through symmetry-protected topological order, the absence of long-range entanglement fundamentally limits their use for topological quantum computation. This motivates the intensive study of 2D and 3D topological phases, where robust quantum information storage and fault-tolerant quantum gates become possible through anyonic braiding and topological degeneracy.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_4'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
