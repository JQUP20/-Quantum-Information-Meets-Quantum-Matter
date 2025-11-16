<template>
  <div class="section-content">
    <h1>9.5.2 Tree Tensor Network</h1>

    <p>
      Tree Tensor Networks (TTN) provide a flexible hierarchical structure that interpolates between the simplicity of MPS and the sophistication of MERA. By organizing tensors in a tree graph without MERA's strict disentangler/isometry distinction, TTN offers computational efficiency while capturing hierarchical entanglement structure relevant for many quantum systems.
    </p>

    <h2>Basic Structure</h2>

    <div class="info-box">
      <h3>From Chain to Tree</h3>
      <p>
        A Tree Tensor Network generalizes the linear MPS chain to a branching tree structure:
      </p>
      <ul>
        <li><strong>Leaves:</strong> Physical sites with physical index i (dimension d)</li>
        <li><strong>Internal nodes:</strong> Tensors with multiple virtual indices</li>
        <li><strong>Edges:</strong> Virtual bonds connecting parent-child nodes (dimension χ)</li>
        <li><strong>Root:</strong> Single tensor at top (analogous to MERA top)</li>
      </ul>
      <p>
        <strong>Key difference from MERA:</strong> No distinction between isometries and disentanglers; all internal tensors are general rank-k tensors.
      </p>
    </div>

    <h3>Binary Tree Example</h3>

    <div class="highlight-box">
      <h4>Simplest TTN: Complete Binary Tree</h4>
      <p>
        For N = 8 sites arranged in binary tree:
      </p>
      <div class="equation">
        Layer 0:  |₁ |₂ |₃ |₄ |₅ |₆ |₇ |₈  (8 physical sites)

        Layer 1:  [T₁₂]  [T₃₄]  [T₅₆]  [T₇₈]  (rank-3 tensors)
                     |       |       |       |
        Layer 2:     [T₁₂₃₄]         [T₅₆₇₈]  (rank-3 tensors)
                         |               |
        Layer 3:           [T_root]            (rank-3 tensor)
                               |
      </div>
      <p>
        Each tensor T has:
      </p>
      <ul>
        <li>2 child indices (from below): α, β ∈ {1,...,χ}</li>
        <li>1 parent index (to above): γ ∈ {1,...,χ}</li>
        <li>Rank-3 tensor: T_{αβγ} with dχ² parameters</li>
      </ul>
    </div>

    <h2>General Tree Topologies</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Tree Type</th>
            <th>Branching</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Binary tree</td>
            <td>Each node has 2 children</td>
            <td>1D systems, efficient computation</td>
          </tr>
          <tr>
            <td>Ternary tree</td>
            <td>Each node has 3 children</td>
            <td>Higher entanglement, 2D systems</td>
          </tr>
          <tr>
            <td>Unbalanced tree</td>
            <td>Variable branching per node</td>
            <td>Systems with heterogeneous entanglement</td>
          </tr>
          <tr>
            <td>Star graph</td>
            <td>All leaves connect to single central node</td>
            <td>Central system + many environments</td>
          </tr>
          <tr>
            <td>Cayley tree</td>
            <td>Uniform infinite tree (Bethe lattice)</td>
            <td>Mean-field-like systems, loop-free</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>TTN vs MPS vs MERA</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>MPS</th>
            <th>TTN</th>
            <th>MERA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Graph structure</td>
            <td>Linear chain</td>
            <td>General tree</td>
            <td>Layered tree + disentanglers</td>
          </tr>
          <tr>
            <td>Depth</td>
            <td>1</td>
            <td>O(log N)</td>
            <td>O(log N)</td>
          </tr>
          <tr>
            <td>Entanglement</td>
            <td>S ≤ log χ</td>
            <td>S ≤ O(log N · log χ)</td>
            <td>S ~ log N (exact)</td>
          </tr>
          <tr>
            <td>Tensor types</td>
            <td>All rank-3</td>
            <td>Variable rank</td>
            <td>Rank-4 (u) + rank-3 (w)</td>
          </tr>
          <tr>
            <td>Canonical forms</td>
            <td>Yes (left/right/mixed)</td>
            <td>Yes (tree canonical)</td>
            <td>Implicit (isometry)</td>
          </tr>
          <tr>
            <td>Contraction cost</td>
            <td>O(Nχ³)</td>
            <td>O(N log N · χ³)</td>
            <td>O(N log N · χ⁶)</td>
          </tr>
          <tr>
            <td>Best for</td>
            <td>1D gapped</td>
            <td>Moderate entanglement, flexibility</td>
            <td>Critical systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Entanglement Capacity</h2>

    <div class="info-box">
      <h3>How Much Entanglement Can TTN Represent?</h3>
      <p>
        For a region A of L contiguous sites in a binary TTN:
      </p>
      <div class="equation">
        S(A) ≤ (log₂ L) · log χ
      </div>
      <p>
        <strong>Derivation:</strong>
      </p>
      <ol>
        <li>Region A cuts at most log₂ L bonds in tree (path to root)</li>
        <li>Each bond contributes ≤ log χ to entanglement</li>
        <li>Total: S ≤ (log₂ L) · log χ</li>
      </ol>
      <p>
        <strong>Comparison:</strong>
      </p>
      <ul>
        <li>MPS: S ≤ log χ (constant, independent of L)</li>
        <li>TTN: S ≤ log L · log χ (polylogarithmic)</li>
        <li>MERA: S ~ log L exactly (with appropriate χ)</li>
      </ul>
      <p>
        TTN is strictly more powerful than MPS but less specialized than MERA.
      </p>
    </div>

    <h2>Tree Canonical Form</h2>

    <div class="info-box">
      <h3>Orthogonality Center</h3>
      <p>
        Similar to MPS canonical form, TTN admits an orthogonality center:
      </p>
      <p>
        <strong>Definition:</strong> TTN is in canonical form with center at node c if:
      </p>
      <ul>
        <li>All tensors on path from leaves to c are isometries</li>
        <li>Contraction from any leaf toward c preserves norm</li>
        <li>One tensor (at center c) is not constrained</li>
      </ul>
      <p>
        <strong>Benefit:</strong> Efficient computation of reduced density matrices, norms, and observables.
      </p>
    </div>

    <h3>Gauge Freedom</h3>

    <div class="highlight-box">
      <h4>Moving the Center</h4>
      <p>
        The center can be moved along tree edges using gauge transformations:
      </p>
      <ol>
        <li>Insert X · X⁻¹ = I on bond between parent and child</li>
        <li>Absorb X into one tensor, X⁻¹ into the other</li>
        <li>Use SVD to create new isometry</li>
        <li>Move orthogonality center to desired location</li>
      </ol>
      <p>
        <strong>Application:</strong> Center the TTN at the tensor where you need to compute local properties efficiently.
      </p>
    </div>

    <h2>TTN Algorithms</h2>

    <div class="info-box">
      <h3>Ground State Optimization</h3>
      <p>
        <strong>Variational energy minimization:</strong>
      </p>
      <ol>
        <li>Initialize TTN with random tensors (or from previous calculation)</li>
        <li>For each tensor T_i in tree:
          <ul>
            <li>Contract all other tensors → environment E_i</li>
            <li>Optimize T_i to minimize ⟨ψ|H|ψ⟩ (local eigenvalue problem)</li>
            <li>Update T_i with eigenvector of lowest eigenvalue</li>
          </ul>
        </li>
        <li>Sweep through tree until convergence</li>
      </ol>
      <p>
        <strong>Cost per tensor update:</strong> O(χ³k) where k is rank of tensor
      </p>
    </div>

    <h3>Contraction Strategies</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Order</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Leaf-to-root</td>
            <td>Bottom-up</td>
            <td>Computing norm, inner products</td>
          </tr>
          <tr>
            <td>Root-to-leaf</td>
            <td>Top-down</td>
            <td>Sampling, generating configurations</td>
          </tr>
          <tr>
            <td>Centered contraction</td>
            <td>From orthogonality center outward</td>
            <td>Reduced density matrices</td>
          </tr>
          <tr>
            <td>Dynamic programming</td>
            <td>Optimal order (tree decomposition)</td>
            <td>Minimizing total cost</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Optimization: Choosing Tree Structure</h2>

    <div class="highlight-box">
      <h4>How to Design the Tree</h4>
      <p>
        <strong>Principle:</strong> Tree structure should reflect entanglement pattern of physical system.
      </p>
      <p>
        <strong>Heuristics:</strong>
      </p>
      <ul>
        <li><strong>1D chain:</strong> Binary tree works well (approximates MPS/MERA)</li>
        <li><strong>Strongly entangled pairs:</strong> Pair them early (low in tree)</li>
        <li><strong>Weakly entangled regions:</strong> Separate early (different branches)</li>
        <li><strong>Symmetry sectors:</strong> Group symmetric sites in same subtree</li>
        <li><strong>Spatial locality:</strong> Nearby sites should share common ancestors</li>
      </ul>
      <p>
        <strong>Adaptive approach:</strong> Use entanglement spectrum to guide tree construction dynamically.
      </p>
    </div>

    <h2>Applications</h2>

    <div class="info-box">
      <h3>Where TTN Shines</h3>
      <ul>
        <li><strong>Molecular systems:</strong> Atoms arranged in tree-like structure (e.g., dendrimers)</li>
        <li><strong>Quantum chemistry:</strong> Active space selection → natural tree structure</li>
        <li><strong>Hierarchical models:</strong> Systems with built-in hierarchy (e.g., nested quantum impurities)</li>
        <li><strong>Spin glasses on trees:</strong> Cayley tree, Bethe lattice</li>
        <li><strong>Moderate entanglement:</strong> Between MPS (too restrictive) and MERA (too expensive)</li>
        <li><strong>Adaptive methods:</strong> Tree structure can be optimized during calculation</li>
      </ul>
    </div>

    <h3>Specific Example: Molecular Simulation</h3>

    <div class="highlight-box">
      <h4>Quantum Chemistry with TTN</h4>
      <p>
        For a molecule with N orbitals:
      </p>
      <ol>
        <li>Group orbitals by spatial proximity or correlation strength</li>
        <li>Build binary tree: strongly correlated orbitals → common parent</li>
        <li>Optimize TTN to find ground state energy</li>
        <li>Bond dimension χ ~ 10-100 (much smaller than full CI)</li>
      </ol>
      <p>
        <strong>Result:</strong> Accurate energies with polynomial (not exponential) cost.
      </p>
      <p>
        <strong>Example molecules:</strong> H₂O, N₂, transition metal complexes with d-orbitals
      </p>
    </div>

    <h2>Loop-Free Tensor Networks</h2>

    <div class="info-box">
      <h3>Exact vs Approximate Contraction</h3>
      <p>
        A key advantage of tree networks:
      </p>
      <ul>
        <li><strong>Trees = loop-free graphs</strong></li>
        <li><strong>Contraction:</strong> Exact and efficient (no approximate methods needed)</li>
        <li><strong>Cost:</strong> Polynomial in N and χ (no exponential scaling)</li>
        <li><strong>Contrast with PEPS:</strong> PEPS form 2D mesh with loops → contraction is #P-hard</li>
      </ul>
      <p>
        This makes TTN computationally more tractable than PEPS for many problems.
      </p>
    </div>

    <h2>Limitations</h2>

    <div class="highlight-box">
      <h4>When TTN Struggles</h4>
      <ul>
        <li><strong>2D/3D lattices:</strong> Spatial structure poorly captured by tree</li>
        <li><strong>High entanglement:</strong> log L scaling insufficient for some systems</li>
        <li><strong>Critical systems:</strong> MERA's disentangling structure more efficient</li>
        <li><strong>Long-range correlations:</strong> Tree topology restricts correlation paths</li>
        <li><strong>Periodic boundaries:</strong> Trees are acyclic, can't represent periodic BC naturally</li>
      </ul>
      <p>
        <strong>Mitigation:</strong> Augment tree with auxiliary bonds, or use hybrid TTN-PEPS.
      </p>
    </div>

    <h2>Multi-Tree Tensor Networks</h2>

    <div class="info-box">
      <h3>Beyond Single Tree</h3>
      <p>
        For higher-dimensional systems, use multiple overlapping trees:
      </p>
      <ul>
        <li><strong>Fork tensor networks:</strong> Multiple trees with shared leaves</li>
        <li><strong>Entangled tree networks:</strong> Trees connected at internal nodes</li>
        <li><strong>Tree-PEPS hybrid:</strong> PEPS on small scale, TTN for coarse-graining</li>
      </ul>
      <p>
        <strong>Trade-off:</strong> Adds loops (harder to contract) but captures 2D/3D structure better.
      </p>
    </div>

    <h2>Relation to Quantum Circuits</h2>

    <div class="highlight-box">
      <h4>TTN as Circuit Ansatz</h4>
      <p>
        TTN can be interpreted as a quantum circuit with tree structure:
      </p>
      <ol>
        <li>Start with product state at root</li>
        <li>Apply gates (inverse TTN tensors) level by level</li>
        <li>Propagate down tree to physical layer</li>
      </ol>
      <p>
        <strong>Circuit depth:</strong> O(log N) (shallow circuit!)
      </p>
      <p>
        <strong>Application to NISQ:</strong> TTN-inspired circuits for variational quantum algorithms (VQE)
      </p>
    </div>

    <h2>Adaptive Tree Construction</h2>

    <div class="info-box">
      <h3>Dynamic Optimization of Tree Topology</h3>
      <p>
        Instead of fixing tree structure a priori, optimize it during calculation:
      </p>
      <ol>
        <li>Start with initial tree (e.g., linear chain or complete binary)</li>
        <li>Compute entanglement between all pairs of subtrees</li>
        <li>Restructure tree: highly entangled regions → common parent</li>
        <li>Re-optimize TTN tensors</li>
        <li>Iterate until convergence</li>
      </ol>
      <p>
        <strong>Result:</strong> Automatically discovers optimal tree for given system.
      </p>
      <p>
        <strong>Computational cost:</strong> Higher, but can significantly improve accuracy.
      </p>
    </div>

    <h2>TTN for Quantum Algorithms</h2>

    <div class="highlight-box">
      <h4>NISQ-Era Applications</h4>
      <p>
        TTN structure is well-suited for near-term quantum computers:
      </p>
      <ul>
        <li><strong>Variational Quantum Eigensolver (VQE):</strong> TTN ansatz with O(log N) depth</li>
        <li><strong>Circuit reuse:</strong> Same tree structure for different problems</li>
        <li><strong>Error mitigation:</strong> Tree symmetry helps detect errors</li>
        <li><strong>Hybrid classical-quantum:</strong> Classical TTN optimization + quantum expectation values</li>
      </ul>
      <p>
        <strong>Example:</strong> Molecular ground state on quantum computer using TTN-based circuit.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Features of Tree Tensor Networks</h3>
      <ul>
        <li><strong>Structure:</strong> General tree graph connecting tensors hierarchically</li>
        <li><strong>Flexibility:</strong> No constraint on tensor types (unlike MERA)</li>
        <li><strong>Entanglement capacity:</strong> S ≤ log L · log χ (polylogarithmic)</li>
        <li><strong>Canonical form:</strong> Orthogonality center for efficient computation</li>
        <li><strong>Contraction:</strong> Exact and polynomial (loop-free graph)</li>
        <li><strong>Cost:</strong> O(N log N · χ³) (between MPS and MERA)</li>
        <li><strong>Applications:</strong> Molecules, hierarchical systems, moderate entanglement</li>
        <li><strong>Adaptive:</strong> Tree topology can be optimized dynamically</li>
        <li><strong>Quantum circuits:</strong> Natural ansatz for NISQ algorithms</li>
        <li><strong>Limitations:</strong> Struggles with 2D lattices, periodic BC, very high entanglement</li>
      </ul>
    </div>

    <p>
      Tree Tensor Networks occupy a sweet spot in the tensor network landscape: more powerful than MPS for capturing hierarchical entanglement, yet more flexible and computationally tractable than MERA. Their loop-free structure enables exact contraction while the tree hierarchy naturally accommodates systems with logarithmic entanglement growth. As we'll see in the chapter summary, understanding when to use TTN versus MPS, PEPS, or MERA depends critically on the entanglement structure and dimensionality of the quantum system at hand.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_5_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
