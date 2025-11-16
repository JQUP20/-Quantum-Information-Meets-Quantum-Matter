<template>
  <div class="section-content">
    <h1>8.2.7 Projected Entangled Pair Picture</h1>

    <p>
      The Matrix Product State formalism can be given a beautiful physical interpretation through the projected entangled pair states (PEPS) picture. This perspective reveals MPS as arising from local projections of maximally entangled virtual degrees of freedom, providing deep insights into the nature of ground state entanglement.
    </p>

    <h2>The Basic Idea</h2>

    <div class="info-box">
      <h3>From Virtual Pairs to Physical States</h3>
      <p>
        The PEPS construction proceeds in two steps:
      </p>
      <ol>
        <li><strong>Create virtual entangled pairs:</strong> Place maximally entangled states (Bell pairs) on each bond between neighboring sites:
          <div class="equation">
            |Φ⟩_{bond} = ∑_{α=1}^χ |α⟩_L ⊗ |α⟩_R / √χ
          </div>
        </li>
        <li><strong>Local projections:</strong> At each site, project the virtual degrees of freedom onto the physical Hilbert space using a projection operator (represented by the MPS tensor A^i)
        </li>
      </ol>
      <p>
        The result is an MPS! This construction makes the entanglement structure manifest.
      </p>
    </div>

    <h3>Mathematical Formulation</h3>

    <div class="highlight-box">
      <h4>PEPS Construction of MPS</h4>
      <p>
        <strong>Step 1:</strong> Start with a product of maximally entangled pairs on bonds:
      </p>
      <div class="equation">
        |Φ_virtual⟩ = |Φ⟩_{0,1} ⊗ |Φ⟩_{1,2} ⊗ ··· ⊗ |Φ⟩_{N-1,N}
      </div>
      <p>
        where each |Φ⟩_{j,j+1} = ∑_{α=1}^χ |α⟩_L^{(j)} ⊗ |α⟩_R^{(j+1)} / √χ.
      </p>
      <p>
        <strong>Step 2:</strong> At each site j, apply a local map from virtual to physical space:
      </p>
      <div class="equation">
        P_j = ∑_{i,α,β} A^i_{αβ} |i⟩_phys^{(j)} ⟨α|_L^{(j)} ⟨β|_R^{(j)}
      </div>
      <p>
        <strong>Result:</strong> The physical state is:
      </p>
      <div class="equation">
        |ψ⟩ = (P_1 ⊗ P_2 ⊗ ··· ⊗ P_N) |Φ_virtual⟩
      </div>
      <p>
        Evaluating this gives exactly the MPS form!
      </p>
    </div>

    <h2>Graphical Representation</h2>

    <div class="info-box">
      <h3>Tensor Network Diagram</h3>
      <p>
        The PEPS picture can be visualized as:
      </p>
      <div class="equation">
        Virtual layer:  |Φ⟩-----|Φ⟩-----|Φ⟩-----
                         α       β       γ

                         ↓       ↓       ↓
                        [P]     [P]     [P]     (projections)
                         ↓       ↓       ↓

        Physical layer:  i₁      i₂      i₃
      </div>
      <p>
        Each vertical arrow represents the projection operator P_j. The virtual layer contains pure entanglement (χ² total dimensions per bond), while the physical layer has the actual quantum state.
      </p>
    </div>

    <h2>The AKLT State as Prototypical Example</h2>

    <p>
      The AKLT state provides the clearest example of the PEPS construction.
    </p>

    <div class="highlight-box">
      <h4>AKLT via Projected Singlets</h4>
      <p>
        The AKLT construction for a spin-1 chain:
      </p>
      <ol>
        <li><strong>Virtual spins:</strong> Place two spin-1/2 particles (χ = 2) at each site</li>
        <li><strong>Entangled pairs:</strong> Form singlets between virtual spins on adjacent sites:
          <div class="equation">
            |singlet⟩ = (|↑↓⟩ - |↓↑⟩) / √2
          </div>
        </li>
        <li><strong>Local projection:</strong> At each site, project the two virtual spin-1/2s onto the spin-1 subspace (triplet):
          <div class="equation">
            |S=1, m=-1⟩ = |↓↓⟩
            |S=1, m=0⟩ = (|↑↓⟩ + |↓↑⟩) / √2
            |S=1, m=+1⟩ = |↑↑⟩
          </div>
        </li>
      </ol>
      <p>
        <strong>Result:</strong> The AKLT state!
      </p>
      <div class="equation">
        |ψ_AKLT⟩ = ∑_{configs} (product of singlets, projected to spin-1 at each site)
      </div>
    </div>

    <h3>AKLT Tensor from Projection</h3>

    <div class="highlight-box">
      <h4>Explicit Calculation</h4>
      <p>
        The projection operators give the AKLT MPS tensors:
      </p>
      <div class="equation">
        A^{-1} = |↓↓⟩ = [0  1]
                        [0  0]

        A^0 = (|↑↓⟩ + |↓↑⟩)/√2 = (1/√2)[1   0]
                                         [0  -1]

        A^{+1} = |↑↑⟩ = [0  0]
                        [1  0]
      </div>
      <p>
        These are exactly the tensors we saw in Section 8.2.1! The PEPS construction provides the physical origin of these specific matrices.
      </p>
    </div>

    <h2>Physical Interpretation</h2>

    <div class="info-box">
      <h3>Why PEPS Captures Ground State Physics</h3>
      <p>
        The PEPS picture explains several key features of ground states:
      </p>
      <ul>
        <li><strong>Short-range entanglement:</strong> Only nearest-neighbor virtual pairs are entangled</li>
        <li><strong>Area law:</strong> Entanglement is localized at boundaries (virtual bonds)</li>
        <li><strong>Local Hamiltonians:</strong> Ground states emerge from local valence bonds</li>
        <li><strong>Finite correlation length:</strong> Virtual entanglement is "diluted" by projection</li>
      </ul>
    </div>

    <h3>Valence Bond Solid States</h3>

    <div class="highlight-box">
      <h4>Connection to Valence Bond Picture</h4>
      <p>
        PEPS generalizes the concept of valence bond solid (VBS) states:
      </p>
      <ul>
        <li><strong>Classical VBS:</strong> Cover lattice with singlet dimers (product of singlets)</li>
        <li><strong>Quantum VBS (PEPS):</strong> Superposition of all dimer coverings with local constraints (projections)</li>
      </ul>
      <p>
        Example: For spin-1/2 chain, the simplest VBS is:
      </p>
      <div class="equation">
        |VBS⟩ = |singlet⟩_{1,2} ⊗ |singlet⟩_{3,4} ⊗ ···
      </div>
      <p>
        This is a product state (trivial MPS with χ = 1). More interesting VBS states arise when including resonances between different dimer coverings.
      </p>
    </div>

    <h2>String Order Parameters</h2>

    <p>
      The PEPS picture naturally explains hidden topological order revealed by string order parameters.
    </p>

    <div class="info-box">
      <h3>String Order in AKLT State</h3>
      <p>
        Define the string order parameter:
      </p>
      <div class="equation">
        O_{string}(r) = ⟨S^z_0 exp(iπ ∑_{j=1}^{r-1} S^z_j) S^z_r⟩
      </div>
      <p>
        For the AKLT state:
      </p>
      <ul>
        <li><strong>Ordinary correlation:</strong> ⟨S^z_0 S^z_r⟩ decays exponentially</li>
        <li><strong>String order:</strong> O_{string}(r) → constant ≠ 0 as r → ∞</li>
      </ul>
      <p>
        <strong>Physical meaning:</strong> The string operator detects hidden antiferromagnetic order in the virtual (spin-1/2) layer that is "masked" when projected to physical (spin-1) layer.
      </p>
    </div>

    <h2>Generalization to 2D: PEPS</h2>

    <p>
      The PEPS construction naturally generalizes to higher dimensions, giving rise to Projected Entangled Pair States in 2D and 3D.
    </p>

    <div class="info-box">
      <h3>2D PEPS</h3>
      <p>
        For a 2D square lattice:
      </p>
      <ol>
        <li>Place maximally entangled pairs on each edge of the lattice</li>
        <li>At each vertex (site), four virtual indices come together</li>
        <li>Apply a local projection P_{i,j} from (χ)^4 virtual space to d physical space</li>
      </ol>
      <p>
        <strong>Tensor structure:</strong> Each site has a rank-5 tensor A^i_{αβγδ} where i is physical, α,β,γ,δ are virtual (one per direction).
      </p>
      <p>
        <strong>Applications:</strong>
      </p>
      <ul>
        <li>Frustrated magnets</li>
        <li>Quantum dimer models</li>
        <li>Topologically ordered states (toric code, string-net models)</li>
        <li>Fermionic systems (Hubbard model, high-T_c superconductors)</li>
      </ul>
    </div>

    <h3>Computational Complexity in Higher Dimensions</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Virtual Bonds per Site</th>
            <th>Tensor Rank</th>
            <th>Contraction Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1D (MPS)</td>
            <td>2</td>
            <td>3 (i,α,β)</td>
            <td>O(χ³) (exact)</td>
          </tr>
          <tr>
            <td>2D (PEPS)</td>
            <td>4</td>
            <td>5 (i,α,β,γ,δ)</td>
            <td>O(χ^10) (approximate)</td>
          </tr>
          <tr>
            <td>3D (PEPS)</td>
            <td>6</td>
            <td>7</td>
            <td>O(χ^18) (approximate)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      The key difference: 1D MPS contractions are exact and efficient, while 2D/3D PEPS contractions are approximate and exponentially costly.
    </p>

    <h2>Alternative Perspective: Purification</h2>

    <div class="highlight-box">
      <h4>PEPS as Purification of Reduced Density Matrices</h4>
      <p>
        Another way to understand PEPS: the virtual degrees of freedom serve as a purification of the reduced density matrices.
      </p>
      <p>
        For a cut between sites k and k+1, the reduced density matrix ρ_L on sites 1...k can be written as:
      </p>
      <div class="equation">
        ρ_L = Tr_{virtual}[|ψ_virtual⟩⟨ψ_virtual|]
      </div>
      <p>
        where |ψ_virtual⟩ is a pure state in the enlarged Hilbert space (physical ⊗ virtual). This provides a way to represent mixed states (like thermal states or time-evolved states) using pure state methods.
      </p>
    </div>

    <h2>Practical Construction of PEPS</h2>

    <div class="info-box">
      <h3>Building PEPS MPS from Scratch</h3>
      <p>
        To construct a PEPS-based MPS for a specific state:
      </p>
      <ol>
        <li>Choose virtual bond dimension χ (determines entanglement capacity)</li>
        <li>Define virtual entangled states on bonds (usually maximally entangled |Φ⟩ = ∑_α |αα⟩/√χ)</li>
        <li>Specify projection operators P_j : ℂ^{χ²} → ℂ^d at each site</li>
        <li>Contract the network to obtain MPS tensors A^i</li>
      </ol>
      <p>
        <strong>Design principles:</strong>
      </p>
      <ul>
        <li>Symmetries of P should match desired physical symmetries</li>
        <li>χ should be chosen to satisfy area law: χ ≥ exp(S)</li>
        <li>For topological states, virtual space may carry anyonic quantum numbers</li>
      </ul>
    </div>

    <h2>Examples Beyond AKLT</h2>

    <h3>Example 1: Spin-1/2 Heisenberg Chain</h3>

    <div class="highlight-box">
      <h4>Bethe Ansatz Ground State as PEPS</h4>
      <p>
        The ground state of the spin-1/2 Heisenberg model can be approximated as a PEPS with:
      </p>
      <ul>
        <li>Virtual dimension χ = 2</li>
        <li>Singlets on virtual bonds</li>
        <li>Projection to spin-1/2 physical space (identity in this case)</li>
      </ul>
      <p>
        While not exact (the true ground state is not MPS-representable with finite χ), this PEPS gives an excellent variational approximation.
      </p>
    </div>

    <h3>Example 2: Topological PEPS</h3>

    <div class="highlight-box">
      <h4>String-Net States</h4>
      <p>
        Topologically ordered states in 2D can be constructed as PEPS where:
      </p>
      <ul>
        <li>Virtual bonds carry "string" labels (anyonic quantum numbers)</li>
        <li>Projections enforce string fusion rules at vertices</li>
        <li>Physical degrees of freedom emerge from string configurations</li>
      </ul>
      <p>
        Example: Toric code, Levin-Wen string-net models, quantum double models.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>PEPS construction:</strong> Virtual entangled pairs + local projections → MPS</li>
        <li><strong>Physical interpretation:</strong> Ground states as locally projected valence bond states</li>
        <li><strong>AKLT state:</strong> Prototypical example with spin-1/2 singlets projected to spin-1</li>
        <li><strong>Area law:</strong> Naturally explained by localization of entanglement at virtual bonds</li>
        <li><strong>String order:</strong> Detects hidden order in virtual layer</li>
        <li><strong>2D generalization:</strong> PEPS in 2D/3D, but computationally much harder</li>
        <li><strong>Valence bond solids:</strong> PEPS provides quantum generalization of VBS states</li>
        <li><strong>Purification perspective:</strong> Virtual space purifies reduced density matrices</li>
        <li><strong>Topological order:</strong> PEPS framework extends to anyonic systems</li>
      </ul>
    </div>

    <p>
      The projected entangled pair picture provides a complementary perspective to the algebraic MPS formalism. While the MPS equations efficiently encode the state, the PEPS picture reveals the physical mechanism: ground states emerge from the projection of virtual entanglement onto physical degrees of freedom. This insight has been crucial for understanding topological order, developing variational wave functions, and extending tensor network methods to higher dimensions.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_2_7'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
