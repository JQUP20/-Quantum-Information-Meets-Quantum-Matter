<template>
  <div class="section-content">
    <h1>9.2.1 Definition and Examples</h1>

    <p>
      We now present the formal mathematical definition of Projected Entangled Pair States (PEPS) and illustrate the structure through explicit examples. While the conceptual idea is a natural generalization of 1D MPS, the notation and computational details become more intricate in higher dimensions.
    </p>

    <h2>Formal Definition</h2>

    <div class="info-box">
      <h3>PEPS on a General Lattice</h3>
      <p>
        Consider a d-dimensional lattice Λ with N sites. At each site j ∈ Λ:
      </p>
      <ul>
        <li><strong>Physical index:</strong> i_j ∈ {1, ..., d} labeling local states</li>
        <li><strong>Virtual indices:</strong> One for each neighboring site, dimension χ (bond dimension)</li>
      </ul>
      <p>
        A <strong>Projected Entangled Pair State</strong> assigns to each site j a tensor:
      </p>
      <div class="equation">
        A^{i_j}_{α₁α₂...α_{z_j}}
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>i_j is the physical index (dimension d)</li>
        <li>α₁, ..., α_{z_j} are virtual indices (each dimension χ)</li>
        <li>z_j is the coordination number (number of neighbors) of site j</li>
      </ul>
    </div>

    <h3>2D Square Lattice (Most Common Case)</h3>

    <div class="highlight-box">
      <h4>PEPS on Square Lattice</h4>
      <p>
        For a 2D square lattice (coordination number z = 4), each site has a rank-5 tensor:
      </p>
      <div class="equation">
        A^i_{αβγδ}  where i ∈ {1,...,d}, α,β,γ,δ ∈ {1,...,χ}
      </div>
      <p>
        Conventional labeling:
      </p>
      <ul>
        <li>α: left virtual index</li>
        <li>β: right virtual index</li>
        <li>γ: up virtual index</li>
        <li>δ: down virtual index</li>
        <li>i: physical index</li>
      </ul>
      <p>
        The quantum state is obtained by contracting all virtual indices between neighboring tensors:
      </p>
      <div class="equation">
        |ψ⟩ = ∑_{all i_j, all virtual indices} [Product of all A tensors, contracted over virtual indices] |i₁i₂...i_N⟩
      </div>
    </div>

    <h3>Boundary Conditions</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Boundary Type</th>
            <th>Implementation</th>
            <th>Use Cases</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Open (OBC)</td>
            <td>Boundary tensors have fewer virtual indices</td>
            <td>Finite systems, edge states</td>
          </tr>
          <tr>
            <td>Periodic (PBC)</td>
            <td>Identify opposite edges, all tensors identical</td>
            <td>Thermodynamic limit, topological degeneracy</td>
          </tr>
          <tr>
            <td>Cylindrical</td>
            <td>Periodic in one direction, open in other</td>
            <td>Intermediate, numerics</td>
          </tr>
          <tr>
            <td>Infinite</td>
            <td>Translationally invariant, one tensor per unit cell</td>
            <td>Bulk properties, phase diagrams</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Example 1: Product State</h2>

    <div class="highlight-box">
      <h4>Separable State</h4>
      <p>
        The simplest PEPS is a product state where each site is in an independent local state:
      </p>
      <div class="equation">
        |ψ⟩ = ⊗_{j∈Λ} |φ_j⟩  with |φ_j⟩ = ∑_i c^i_j |i⟩
      </div>
      <p>
        This is represented by bond dimension χ = 1:
      </p>
      <div class="equation">
        A^i = c^i  (scalar, rank-1 tensor)
      </div>
      <p>
        Since all virtual indices have dimension 1, the contraction simply multiplies scalars:
      </p>
      <div class="equation">
        |ψ⟩ = ∑_{i₁...i_N} (∏_j c^{i_j}_j) |i₁...i_N⟩
      </div>
      <p>
        <strong>Physical meaning:</strong> No entanglement between sites, trivial PEPS.
      </p>
    </div>

    <h2>Example 2: 2D Cluster State</h2>

    <div class="info-box">
      <h3>Measurement-Based Quantum Computation Resource</h3>
      <p>
        The 2D cluster state on a square lattice is a universal resource for measurement-based quantum computation. It can be written as a PEPS with χ = 2:
      </p>
      <div class="equation">
        A^0_{αβγδ} = δ_{α+β+γ+δ,0 (mod 2)} · [tensor components]

        A^1_{αβγδ} = δ_{α+β+γ+δ,1 (mod 2)} · [tensor components]
      </div>
      <p>
        The cluster state is generated from a product state |+⟩^⊗N by applying controlled-Z gates on all nearest-neighbor pairs:
      </p>
      <div class="equation">
        |cluster⟩ = ∏_{⟨jk⟩} CZ_{jk} |+⟩^⊗N
      </div>
      <p>
        <strong>PEPS structure:</strong>
      </p>
      <ul>
        <li>Bond dimension χ = 2 (sufficient for exact representation)</li>
        <li>Reflects entanglement pattern created by CZ gates</li>
        <li>Stabilizer state → efficiently contractible</li>
      </ul>
    </div>

    <h2>Example 3: GHZ-Like States</h2>

    <div class="highlight-box">
      <h4>Extending GHZ to 2D</h4>
      <p>
        A 2D generalization of the GHZ state can be constructed:
      </p>
      <div class="equation">
        |GHZ_{2D}⟩ = (|00...0⟩ + |11...1⟩)/√2
      </div>
      <p>
        For an L×L square lattice, this can be represented with χ = 2 using tensors:
      </p>
      <div class="equation">
        A^0 = [1  0  0  0]     A^1 = [0  0  0  0]
              [0  0  0  0]           [0  0  0  0]
              [0  0  0  0]           [0  0  0  0]
              [0  0  0  0]           [0  0  0  1]
      </div>
      <p>
        (Shown schematically; actual 5-index tensor structure more complex)
      </p>
      <p>
        <strong>Key property:</strong> Non-injective PEPS with long-range correlations, similar to 1D GHZ.
      </p>
    </div>

    <h2>Example 4: Valence Bond Solid</h2>

    <div class="highlight-box">
      <h4>Dimer Coverings and Quantum Resonance</h4>
      <p>
        A valence bond solid (VBS) state on a 2D lattice is an equal-weight superposition of all dimer coverings. For a square lattice, this can be written as a PEPS.
      </p>
      <p>
        <strong>Construction:</strong>
      </p>
      <ol>
        <li>Place virtual spin-1/2s on each bond</li>
        <li>Form singlets: |singlet⟩ = (|↑↓⟩ - |↓↑⟩)/√2</li>
        <li>At each site, project four virtual spins onto physical state</li>
      </ol>
      <p>
        For spin-1/2 physical sites, a simple VBS uses χ = 2:
      </p>
      <div class="equation">
        |VBS⟩ = ∑_{dimer configs} |dimer pattern⟩
      </div>
      <p>
        <strong>Physical significance:</strong>
      </p>
      <ul>
        <li>Gapped, unique ground state (open BC)</li>
        <li>SPT order protected by lattice symmetries</li>
        <li>Edge states on boundaries</li>
      </ul>
    </div>

    <h2>Graphical Notation</h2>

    <div class="info-box">
      <h3>Tensor Network Diagrams</h3>
      <p>
        PEPS are typically drawn as 2D grids of tensors:
      </p>
      <div class="equation">
        Small 3×3 example:

        [A]--[A]--[A]
         |    |    |
        [A]--[A]--[A]
         |    |    |
        [A]--[A]--[A]
      </div>
      <p>
        Each square [A] represents a rank-5 tensor with:
      </p>
      <ul>
        <li>Physical leg (implicit, pointing out of page)</li>
        <li>Four virtual legs (connecting to neighbors)</li>
      </ul>
      <p>
        <strong>Contraction:</strong> Sum over all virtual indices (lines connecting tensors).
      </p>
    </div>

    <h2>Comparison with 1D MPS</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>1D MPS</th>
            <th>2D PEPS (Square Lattice)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tensor rank</td>
            <td>3 (i, α, β)</td>
            <td>5 (i, α, β, γ, δ)</td>
          </tr>
          <tr>
            <td>Virtual bonds per site</td>
            <td>2</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Parameters per tensor</td>
            <td>dχ²</td>
            <td>dχ⁴</td>
          </tr>
          <tr>
            <td>Total parameters</td>
            <td>Ndχ²</td>
            <td>Ndχ⁴</td>
          </tr>
          <tr>
            <td>Contraction complexity</td>
            <td>O(Nχ³) (exact)</td>
            <td>O(χ^{10}) (approximate)</td>
          </tr>
          <tr>
            <td>Gauge freedom</td>
            <td>Simple (1 matrix per bond)</td>
            <td>Complex (overlapping gauges)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Generalization to Other Lattices</h2>

    <div class="info-box">
      <h3>Beyond Square Lattice</h3>
      <p>
        PEPS can be defined on any lattice structure:
      </p>
      <ul>
        <li><strong>Triangular lattice:</strong> z = 6, rank-7 tensors A^i_{α₁...α₆}</li>
        <li><strong>Honeycomb lattice:</strong> z = 3, rank-4 tensors A^i_{αβγ}</li>
        <li><strong>Kagome lattice:</strong> z = 4, but 2-site unit cell</li>
        <li><strong>3D cubic lattice:</strong> z = 6, rank-7 tensors</li>
      </ul>
      <p>
        Each lattice geometry reflects different physics:
      </p>
      <ul>
        <li>Triangular → Geometric frustration</li>
        <li>Honeycomb → Graphene, Kitaev model</li>
        <li>Kagome → Frustrated magnetism</li>
      </ul>
    </div>

    <h2>Translational Invariance</h2>

    <div class="highlight-box">
      <h4>Infinite PEPS</h4>
      <p>
        For infinite systems or thermodynamic limit, we use translationally invariant PEPS:
      </p>
      <ul>
        <li><strong>Single-site translation:</strong> All sites use same tensor A^i</li>
        <li><strong>Unit cell:</strong> Pattern of k tensors repeats across lattice</li>
      </ul>
      <p>
        <strong>Advantages:</strong>
      </p>
      <ul>
        <li>Fewer parameters (one tensor vs N tensors)</li>
        <li>Exact bulk properties</li>
        <li>Phase diagram studies</li>
      </ul>
      <p>
        <strong>Limitation:</strong> Cannot describe edge states or boundaries
      </p>
    </div>

    <h2>Normalization</h2>

    <div class="info-box">
      <h3>Ensuring ⟨ψ|ψ⟩ = 1</h3>
      <p>
        Unlike 1D MPS (where normalization can be maintained via canonical forms), 2D PEPS normalization is non-trivial:
      </p>
      <ul>
        <li><strong>Explicit normalization:</strong> Compute ⟨ψ|ψ⟩ (expensive) and rescale</li>
        <li><strong>Local constraint:</strong> Impose ∑_i (A^i)†A^i = const at each site (approximate)</li>
        <li><strong>Boundary conditioning:</strong> Fix normalization via boundary MPS</li>
      </ul>
      <p>
        In practice, PEPS algorithms often work with unnormalized states and normalize only when computing observables.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>PEPS definition:</strong> Rank-(z+1) tensors on d-dimensional lattice (z = coordination number)</li>
        <li><strong>Square lattice:</strong> Rank-5 tensors A^i_{αβγδ} most common</li>
        <li><strong>Examples:</strong>
          <ul>
            <li>Product states: χ = 1</li>
            <li>Cluster states: χ = 2 (stabilizer)</li>
            <li>GHZ-like: χ = 2 (non-injective)</li>
            <li>VBS: χ = 2-4 (SPT order)</li>
          </ul>
        </li>
        <li><strong>Parameters:</strong> Ndχ^z for N sites (exponential in z)</li>
        <li><strong>Boundary conditions:</strong> Open, periodic, cylindrical, infinite</li>
        <li><strong>Lattice geometries:</strong> Square, triangular, honeycomb, kagome, 3D cubic</li>
        <li><strong>Normalization:</strong> Non-trivial, usually approximate methods</li>
      </ul>
    </div>

    <p>
      With the formal definition established, the next section explores the mathematical and physical properties of PEPS, including entanglement structure, computational complexity, and connections to local Hamiltonians.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_2_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
