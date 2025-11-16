<template>
  <div class="section-content">
    <h1>10.4.1 2D AKLT Model</h1>

    <p>
      The <strong>2D AKLT (Affleck-Kennedy-Lieb-Tasaki) model</strong> is a landmark example of a 2D bosonic SPT phase, generalizing the celebrated 1D AKLT construction to two dimensions. On a square lattice with <strong>spin-2</strong> particles at vertices, it realizes a gapped bulk with <strong>gapless 1D chiral edge modes</strong>, protected by SO(3) spin rotation symmetry. This model provides an exactly solvable, parent Hamiltonian construction for a 2D SPT state and demonstrates the bulk-edge correspondence in higher dimensions.
    </p>

    <h2>Review: 1D AKLT Construction</h2>

    <div class="info-box">
      <h3>1D AKLT Ground State</h3>
      <p>
        Recall 1D AKLT model (spin-1 chain):
      </p>

      <h4>VBS Picture</h4>
      <p>
        Each spin-1 site decomposed into two spin-1/2's:
      </p>
      <div class="equation">
        |S=1⟩_j = |1/2, 1/2⟩_j ⊗ |1/2, 1/2⟩_j  (symmetric combination)
      </div>
      <p>
        Form singlets between adjacent sites:
      </p>
      <div class="equation">
        |VBS⟩ = ∏_{bonds} |singlet⟩_{right(j), left(j+1)}
      </div>

      <h4>Key Properties</h4>
      <ul>
        <li><strong>Bulk:</strong> Unique ground state, gapped (Δ ≈ 0.41J)</li>
        <li><strong>Edge:</strong> Unpaired spin-1/2 at each end → 4-fold degeneracy</li>
        <li><strong>Symmetry:</strong> SO(3) rotation invariant</li>
        <li><strong>SPT nature:</strong> Edge modes protected by SO(3)</li>
      </ul>
    </div>

    <h2>2D Generalization: Square Lattice Construction</h2>

    <div class="info-box">
      <h3>Lattice and Degrees of Freedom</h3>

      <h4>Setup</h4>
      <ul>
        <li><strong>Lattice:</strong> Square lattice (2D)</li>
        <li><strong>Physical spins:</strong> Spin-2 at each vertex</li>
        <li><strong>Auxiliary spins:</strong> Four spin-1/2's per vertex (one per edge)</li>
      </ul>

      <h4>Spin Decomposition</h4>
      <p>
        Each spin-2 at vertex v decomposes into four spin-1/2's:
      </p>
      <div class="equation">
        |S=2⟩_v = Sym[|1/2⟩_{v,→} ⊗ |1/2⟩_{v,↑} ⊗ |1/2⟩_{v,←} ⊗ |1/2⟩_{v,↓}]
      </div>
      <p>
        where arrows indicate four edges emanating from vertex v.
      </p>

      <h4>VBS Singlet Pairing</h4>
      <p>
        On each edge e = (v₁, v₂), form singlet between auxiliary spins:
      </p>
      <div class="equation">
        |singlet⟩_e = (|↑↓⟩ - |↓↑⟩)/√2
      </div>
      <p>
        between the spin-1/2 from v₁ pointing toward v₂ and the spin-1/2 from v₂ pointing toward v₁.
      </p>
    </div>

    <div class="highlight-box">
      <h4>2D AKLT Ground State</h4>
      <p>
        The 2D AKLT ground state is:
      </p>
      <div class="equation">
        |AKLT_{2D}⟩ = ∏_{edges} |singlet⟩_e · ∏_{vertices} P_{Sym→S=2}
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>First product: Singlets on all edges</li>
        <li>Second product: Projection to symmetric S=2 subspace at each vertex</li>
      </ul>

      <h4>Graphical Representation</h4>
      <p>
        Visualize as:
      </p>
      <ul>
        <li>Vertices = physical spin-2 sites</li>
        <li>Edges = singlet bonds between auxiliary spin-1/2's</li>
        <li>Valence bonds form a "Valence Bond Solid" (VBS)</li>
      </ul>
    </div>

    <h2>Parent Hamiltonian</h2>

    <div class="info-box">
      <h3>Construction via Projection</h3>
      <p>
        The 2D AKLT Hamiltonian is:
      </p>
      <div class="equation">
        H_{AKLT} = ∑_{edges ⟨ij⟩} P_{S&gt;2}^{(ij)}
      </div>
      <p>
        where P_{S&gt;2}^{(ij)} projects the two spins at sites i and j onto total spin S &gt; 2.
      </p>

      <h4>Explicit Form</h4>
      <p>
        For spin-2 particles (S_i = 2):
      </p>
      <div class="equation">
        P_{S&gt;2} = P_{S=3} + P_{S=4}
      </div>
      <p>
        Can be written as polynomial in <strong>S⃗_i · S⃗_j</strong>:
      </p>
      <div class="equation">
        H = ∑_{⟨ij⟩} [a₂(S⃗_i · S⃗_j)² + a₁(S⃗_i · S⃗_j) + a₀]
      </div>
      <p>
        with coefficients chosen so ground state is VBS state.
      </p>

      <h4>Ground State Property</h4>
      <p>
        The VBS state |AKLT_{2D}⟩ is:
      </p>
      <ul>
        <li><strong>Exact ground state:</strong> H|AKLT_{2D}⟩ = 0</li>
        <li><strong>Unique (on closed manifold):</strong> No ground state degeneracy in bulk</li>
        <li><strong>Gapped:</strong> Spectral gap Δ &gt; 0 above ground state</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Why is VBS State a Ground State?</h4>

      <h4>Key Observation</h4>
      <p>
        On each edge, the singlet state has total spin S_{edge} = 0.
      </p>

      <h4>Action of Hamiltonian</h4>
      <p>
        For two spin-2's in singlet (S=0):
      </p>
      <div class="equation">
        P_{S&gt;2}|S=0⟩ = 0
      </div>
      <p>
        So each term in Hamiltonian annihilates the VBS state!
      </p>

      <h4>Frustration-Free</h4>
      <p>
        The Hamiltonian is <strong>frustration-free</strong>:
      </p>
      <ul>
        <li>Each local term H_e ≥ 0</li>
        <li>VBS state satisfies H_e|VBS⟩ = 0 for all edges e</li>
        <li>Therefore total energy E = 0 (absolute minimum)</li>
      </ul>
    </div>

    <h2>Bulk Properties</h2>

    <div class="info-box">
      <h3>Correlation Functions</h3>

      <h4>Exponential Decay</h4>
      <p>
        Spin correlations decay exponentially:
      </p>
      <div class="equation">
        ⟨S⃗_i · S⃗_j⟩ ∼ e^{-|r_i - r_j|/ξ}
      </div>
      <p>
        where ξ is correlation length (finite).
      </p>

      <h4>String Order Parameter</h4>
      <p>
        No conventional long-range order, but has <strong>string order</strong>:
      </p>
      <div class="equation">
        O_{string} = lim_{|i-j|→∞} ⟨S^z_i (∏_{k on path} e^{iπS^z_k}) S^z_j⟩ ≠ 0
      </div>
      <p>
        This detects hidden topological order.
      </p>

      <h4>Topological Entanglement Entropy</h4>
      <p>
        For region A with boundary ∂A:
      </p>
      <div class="equation">
        S_A = α|∂A| - γ + ...
      </div>
      <p>
        where γ is <strong>topological entanglement entropy</strong>. For 2D AKLT:
      </p>
      <div class="equation">
        γ = 0  (no intrinsic topological order)
      </div>
      <p>
        This confirms SPT (not topologically ordered).
      </p>
    </div>

    <div class="highlight-box">
      <h4>Uniqueness of Ground State</h4>

      <h4>On Torus (Periodic BC)</h4>
      <p>
        Ground state is <strong>unique</strong> (non-degenerate).
      </p>

      <h4>On Disk (Open BC)</h4>
      <p>
        Ground state is <strong>highly degenerate</strong> due to unpaired edge spins.
      </p>

      <h4>SPT Signature</h4>
      <p>
        Degeneracy pattern:
      </p>
      <ul>
        <li>Torus: Unique (trivial topological order)</li>
        <li>Disk with edge: Degenerate (edge modes)</li>
      </ul>
      <p>
        This is hallmark of SPT phase!
      </p>
    </div>

    <h2>Edge Theory: 1D Gapless Modes</h2>

    <div class="info-box">
      <h3>Edge Spin Configuration</h3>

      <h4>Unpaired Spin-1/2's</h4>
      <p>
        On boundary of 2D system:
      </p>
      <ul>
        <li>Each edge vertex has one auxiliary spin-1/2 pointing outward</li>
        <li>These spins are <strong>not paired into singlets</strong></li>
        <li>Form a 1D chain of spin-1/2's along the edge</li>
      </ul>

      <h4>Effective Edge Hamiltonian</h4>
      <p>
        Edge spins interact via effective Hamiltonian:
      </p>
      <div class="equation">
        H_{edge} = J_{eff} ∑_{⟨ij⟩ on edge} S⃗_i · S⃗_j
      </div>
      <p>
        This is <strong>Heisenberg spin-1/2 chain</strong> (1D antiferromagnet).
      </p>
    </div>

    <div class="highlight-box">
      <h4>Gapless Spin-1/2 Chain</h4>

      <h4>Low-Energy Description</h4>
      <p>
        1D spin-1/2 Heisenberg chain is <strong>gapless</strong>:
      </p>
      <ul>
        <li>Luttinger liquid in bulk</li>
        <li>Described by <strong>WZNW SU(2)_k=1</strong> CFT</li>
        <li>Central charge c = 1</li>
      </ul>

      <h4>WZNW Theory</h4>
      <p>
        Wess-Zumino-Novikov-Witten model at level k=1:
      </p>
      <div class="equation">
        S = (k/8π) ∫ d²x Tr[∂_μ g^{-1} ∂^μ g] + (k/24π²) ∫ d³y ε^{αβγ} Tr[g^{-1}∂_α g · g^{-1}∂_β g · g^{-1}∂_γ g]
      </div>
      <p>
        where g ∈ SU(2).
      </p>

      <h4>Physical Consequences</h4>
      <ul>
        <li><strong>Gapless:</strong> Δ = 0 on edge</li>
        <li><strong>Spin transport:</strong> Perfect spin conductivity</li>
        <li><strong>Entanglement:</strong> Log divergence S ~ (c/3)log L</li>
      </ul>
    </div>

    <h2>Symmetry Protection</h2>

    <div class="info-box">
      <h3>SO(3) Spin Rotation Symmetry</h3>

      <h4>Bulk Symmetry</h4>
      <p>
        Hamiltonian invariant under global spin rotations:
      </p>
      <div class="equation">
        [H, S⃗_{total}] = 0,  S⃗_{total} = ∑_i S⃗_i
      </div>

      <h4>Edge Symmetry</h4>
      <p>
        Edge Hamiltonian also SO(3) invariant:
      </p>
      <div class="equation">
        [H_{edge}, S⃗_{edge}] = 0
      </div>

      <h4>Protection Mechanism</h4>
      <p>
        Edge <strong>cannot be gapped</strong> while preserving SO(3):
      </p>
      <ul>
        <li>1D spin-1/2 chain with SO(3) is gapless (Lieb-Schultz-Mattis theorem)</li>
        <li>Any SO(3)-preserving perturbation cannot open gap</li>
        <li>Edge modes are <strong>topologically protected</strong></li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Breaking Symmetry: Gapping the Edge</h4>

      <h4>Symmetry-Breaking Perturbations</h4>
      <p>
        If we add edge term breaking SO(3):
      </p>
      <div class="equation">
        δH = D ∑_{i on edge} (S^z_i)²  (easy-axis anisotropy)
      </div>

      <h4>Result</h4>
      <ul>
        <li>Opens gap Δ_{edge} ∼ D</li>
        <li>Edge becomes trivial insulator</li>
        <li>System no longer SPT (symmetry broken)</li>
      </ul>

      <h4>LSM Theorem Application</h4>
      <p>
        Lieb-Schultz-Mattis: 1D spin-1/2 chain with:
      </p>
      <ul>
        <li>Half-integer spin per site</li>
        <li>Translation + SO(3) symmetry</li>
      </ul>
      <p>
        Must be either:
      </p>
      <ul>
        <li>Gapless, or</li>
        <li>Gapped with degenerate ground states, or</li>
        <li>Symmetry spontaneously broken</li>
      </ul>
      <p>
        Edge is gapless because it's 1D spin-1/2 chain!
      </p>
    </div>

    <h2>Bulk-Edge Correspondence</h2>

    <div class="info-box">
      <h3>SPT Invariant and Edge Theory</h3>

      <h4>Cohomology Classification</h4>
      <p>
        2D bosonic SPT with SO(3) symmetry:
      </p>
      <div class="equation">
        H³(SO(3), U(1)) = ℤ
      </div>
      <p>
        Infinitely many distinct SPT phases labeled by n ∈ ℤ.
      </p>

      <h4>2D AKLT Phase</h4>
      <p>
        The 2D AKLT state corresponds to:
      </p>
      <div class="equation">
        n = 1  (generator of ℤ)
      </div>

      <h4>Stacking Rule</h4>
      <p>
        Stacking n copies of 2D AKLT gives phase with invariant n:
      </p>
      <div class="equation">
        (AKLT)^{⊗n} ↔ n ∈ ℤ
      </div>

      <h4>Edge CFT</h4>
      <p>
        For phase with invariant n:
      </p>
      <ul>
        <li>Edge has WZNW SU(2)_k=n CFT</li>
        <li>Central charge c = 3k/(k+2) = 3n/(n+2)</li>
        <li>For n=1 (AKLT): c = 1</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Physical Interpretation of Invariant</h4>

      <h4>ℤ Invariant as Chern-Simons Level</h4>
      <p>
        The integer n corresponds to:
      </p>
      <ul>
        <li>Level of SU(2) Chern-Simons theory in 3D bulk</li>
        <li>Number of chiral edge modes in (2+1)D</li>
        <li>Stacking number: n copies of fundamental SPT</li>
      </ul>

      <h4>Anomaly Matching</h4>
      <p>
        Bulk topological response:
      </p>
      <div class="equation">
        S_{CS} = (n/4π) ∫ Tr[A ∧ dA + (2/3)A ∧ A ∧ A]
      </div>
      <p>
        where A is SO(3) gauge field.
      </p>
      <p>
        Edge anomaly from WZNW_{SU(2), k=n} exactly cancels bulk CS term!
      </p>
    </div>

    <h2>Comparison: 1D vs 2D AKLT</h2>

    <div class="comparison-box">
      <h3>1D vs 2D AKLT Properties</h3>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>1D AKLT</th>
            <th>2D AKLT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lattice</td>
            <td>1D chain</td>
            <td>2D square lattice</td>
          </tr>
          <tr>
            <td>Physical spin</td>
            <td>S = 1</td>
            <td>S = 2</td>
          </tr>
          <tr>
            <td>Auxiliary spins</td>
            <td>2 spin-1/2 per site</td>
            <td>4 spin-1/2 per site</td>
          </tr>
          <tr>
            <td>Bulk gap</td>
            <td>Δ ≈ 0.41J</td>
            <td>Δ &gt; 0 (gapped)</td>
          </tr>
          <tr>
            <td>Edge dimension</td>
            <td>0D (point)</td>
            <td>1D (line)</td>
          </tr>
          <tr>
            <td>Edge modes</td>
            <td>Spin-1/2 (4-fold deg)</td>
            <td>Spin-1/2 chain (gapless)</td>
          </tr>
          <tr>
            <td>Edge theory</td>
            <td>Degenerate states</td>
            <td>WZNW SU(2)_1 CFT (c=1)</td>
          </tr>
          <tr>
            <td>Symmetry</td>
            <td>SO(3)</td>
            <td>SO(3)</td>
          </tr>
          <tr>
            <td>Classification</td>
            <td>H²(SO(3),U(1))=ℤ₂</td>
            <td>H³(SO(3),U(1))=ℤ</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Experimental and Numerical Studies</h2>

    <div class="info-box">
      <h3>Numerical Verification</h3>

      <h4>DMRG and PEPS Simulations</h4>
      <ul>
        <li><strong>PEPS representation:</strong> 2D AKLT state has efficient PEPS representation</li>
        <li><strong>Bond dimension:</strong> D = 6 (exact for VBS state)</li>
        <li><strong>Entanglement:</strong> Area law S_A ∼ |∂A| confirmed</li>
      </ul>

      <h4>Edge Spectrum</h4>
      <p>
        Numerical studies confirm:
      </p>
      <ul>
        <li>Gapless edge excitations</li>
        <li>Central charge c = 1 from finite-size scaling</li>
        <li>SU(2)_1 primary fields identified</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Potential Physical Realizations</h4>

      <h4>1. Quantum Magnets</h4>
      <ul>
        <li><strong>Material candidate:</strong> Layered spin-2 compounds</li>
        <li><strong>Challenge:</strong> Realizing exact AKLT Hamiltonian difficult</li>
        <li><strong>Detection:</strong> Inelastic neutron scattering for edge modes</li>
      </ul>

      <h4>2. Cold Atoms in Optical Lattice</h4>
      <ul>
        <li><strong>Setup:</strong> Bosonic atoms (e.g., ⁸⁷Rb) in Mott insulator state</li>
        <li><strong>Tuning:</strong> Use Feshbach resonances to engineer interactions</li>
        <li><strong>Detection:</strong> Quantum gas microscopy for correlations</li>
      </ul>

      <h4>3. Rydberg Atom Arrays</h4>
      <ul>
        <li><strong>Platform:</strong> 2D array of neutral atoms in Rydberg states</li>
        <li><strong>Control:</strong> Programmable interactions via Rydberg blockade</li>
        <li><strong>Measurement:</strong> Single-site resolution imaging</li>
      </ul>

      <h4>4. Photonic Simulators</h4>
      <ul>
        <li><strong>Encoding:</strong> Photon polarization as spin</li>
        <li><strong>Gates:</strong> Linear optics + measurement for projective Hamiltonian</li>
        <li><strong>Edge detection:</strong> Tomography on boundary qubits</li>
      </ul>
    </div>

    <h2>Generalizations and Extensions</h2>

    <div class="info-box">
      <h3>Other Lattices and Symmetries</h3>

      <h4>Honeycomb Lattice AKLT</h4>
      <p>
        Spin-3/2 on honeycomb lattice:
      </p>
      <ul>
        <li>3 spin-1/2's per site (one per edge)</li>
        <li>Singlets on edges</li>
        <li>Also has gapless edge modes</li>
      </ul>

      <h4>Higher Spin Generalizations</h4>
      <p>
        General construction:
      </p>
      <ul>
        <li>Coordination number z</li>
        <li>Spin S = z/2 at each vertex</li>
        <li>z auxiliary spin-1/2's per site</li>
        <li>VBS state with singlets on edges</li>
      </ul>

      <h4>Different Symmetry Groups</h4>
      <p>
        AKLT-type constructions exist for other symmetries:
      </p>
      <ul>
        <li><strong>ℤ_N:</strong> Clock models with ℤ_N symmetry</li>
        <li><strong>U(1):</strong> Rotor models with continuous symmetry</li>
        <li><strong>Non-Abelian:</strong> More exotic gauge groups</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h4>Key Takeaways</h4>
      <ul>
        <li><strong>2D AKLT model:</strong> Spin-2 on square lattice, exact VBS ground state</li>
        <li><strong>Construction:</strong> 4 spin-1/2's per vertex, singlets on edges, project to S=2</li>
        <li><strong>Bulk:</strong> Unique ground state, gapped, exponential correlation decay</li>
        <li><strong>Edge:</strong> 1D spin-1/2 chain, gapless, WZNW SU(2)_1 CFT (c=1)</li>
        <li><strong>Symmetry:</strong> SO(3) rotation, protects edge modes via LSM theorem</li>
        <li><strong>Classification:</strong> H³(SO(3),U(1))=ℤ, 2D AKLT is n=1 phase</li>
        <li><strong>Bulk-edge:</strong> Perfect matching between bulk invariant and edge CFT</li>
        <li><strong>Protection:</strong> Edge cannot gap without breaking SO(3)</li>
      </ul>

      <h4>Conceptual Significance</h4>
      <p>
        The 2D AKLT model is a cornerstone of SPT physics because:
      </p>
      <ul>
        <li><strong>Exactly solvable:</strong> Parent Hamiltonian with known ground state</li>
        <li><strong>Demonstrates bulk-edge correspondence:</strong> Explicit connection between bulk topology and edge CFT</li>
        <li><strong>Generalizable:</strong> Template for constructing SPT states in higher dimensions</li>
        <li><strong>Physical intuition:</strong> VBS picture provides clear geometric understanding</li>
      </ul>
      <p>
        It bridges the gap between 1D SPT phases (well-understood, often free-fermion) and the richer landscape of 2D SPT physics with gapless edge modes and conformal field theories.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_4_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
