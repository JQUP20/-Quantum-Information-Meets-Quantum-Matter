<template>
  <div class="section-content">
    <h1>9.1 Introduction</h1>

    <p>
      In Chapter 8, we explored Matrix Product States (MPS) and their remarkable success in describing one-dimensional quantum systems. However, nature is three-dimensional, and many of the most fascinating quantum phenomena—from high-temperature superconductivity to topological quantum computation—occur in two and three dimensions. This chapter extends the tensor network framework beyond one dimension, introducing Projected Entangled Pair States (PEPS) and related structures for higher-dimensional systems.
    </p>

    <h2>Why Go Beyond One Dimension?</h2>

    <div class="info-box">
      <h3>Limitations of 1D Systems</h3>
      <p>
        While 1D quantum systems are theoretically rich and computationally tractable, they suffer fundamental limitations:
      </p>
      <ul>
        <li><strong>No intrinsic topological order:</strong> As shown in Section 8.4, gapped 1D bosonic systems cannot exhibit anyonic excitations or topological ground state degeneracy</li>
        <li><strong>Limited phase structure:</strong> Only symmetry-protected topological (SPT) phases exist, not intrinsic topological order</li>
        <li><strong>Restricted applications:</strong> Real materials and most quantum computing proposals are inherently 2D or 3D</li>
        <li><strong>No true frustrated magnetism:</strong> Geometric frustration requires triangular, kagome, or other 2D lattices</li>
      </ul>
      <p>
        To access the full richness of quantum matter—including fractional quantum Hall states, spin liquids, topological quantum computers, and high-T_c superconductors—we must venture into higher dimensions.
      </p>
    </div>

    <h2>The Challenge of Higher Dimensions</h2>

    <div class="highlight-box">
      <h4>Why 2D and 3D are Harder</h4>
      <p>
        The jump from 1D to 2D introduces fundamental computational challenges:
      </p>
      <ul>
        <li><strong>Entanglement area law:</strong> In d dimensions, entanglement entropy S ~ L^{d-1} (boundary area)
          <ul>
            <li>1D: S ~ O(1) (constant) → MPS with finite χ</li>
            <li>2D: S ~ L (linear in boundary) → PEPS needs χ ~ exp(L)</li>
            <li>3D: S ~ L² → Even worse scaling</li>
          </ul>
        </li>
        <li><strong>Contraction complexity:</strong>
          <ul>
            <li>1D MPS: Exact contraction in O(Nχ³) (polynomial, efficient)</li>
            <li>2D PEPS: Approximate contraction in O(χ^{10}) per update (expensive)</li>
            <li>3D: Computationally prohibitive for large χ</li>
          </ul>
        </li>
        <li><strong>No exact algorithms:</strong> Unlike 1D DMRG, 2D/3D methods require approximations</li>
      </ul>
    </div>

    <h3>Comparison Across Dimensions</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>1D (MPS)</th>
            <th>2D (PEPS)</th>
            <th>3D (PEPS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Virtual bonds per site</td>
            <td>2</td>
            <td>4 (square lattice)</td>
            <td>6 (cubic lattice)</td>
          </tr>
          <tr>
            <td>Tensor rank</td>
            <td>3 (i,α,β)</td>
            <td>5 (i,α,β,γ,δ)</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Area law</td>
            <td>S ~ O(1)</td>
            <td>S ~ L</td>
            <td>S ~ L²</td>
          </tr>
          <tr>
            <td>Required χ</td>
            <td>O(1) for gapped</td>
            <td>exp(L) for exact</td>
            <td>exp(L²) for exact</td>
          </tr>
          <tr>
            <td>Contraction</td>
            <td>Exact, O(Nχ³)</td>
            <td>Approximate, O(χ^{10})</td>
            <td>Approximate, O(χ^{18})</td>
          </tr>
          <tr>
            <td>Topological order</td>
            <td>Impossible (bosonic)</td>
            <td>Possible (toric code, FQH)</td>
            <td>Possible (3D toric code)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Projected Entangled Pair States (PEPS)</h2>

    <p>
      The natural generalization of MPS to higher dimensions is the Projected Entangled Pair State (PEPS) ansatz, introduced by Verstraete and Cirac in 2004.
    </p>

    <div class="info-box">
      <h3>PEPS Construction</h3>
      <p>
        A PEPS on a 2D lattice is constructed analogously to the 1D MPS-as-PEPS picture (Section 8.2.7):
      </p>
      <ol>
        <li><strong>Virtual lattice:</strong> Place maximally entangled pairs on each edge of the lattice</li>
        <li><strong>Local tensors:</strong> At each vertex, a rank-5 tensor A^i_{αβγδ} maps from 4 virtual indices (α,β,γ,δ) to 1 physical index (i)</li>
        <li><strong>Contraction:</strong> Contract all virtual indices to obtain the physical quantum state</li>
      </ol>
      <div class="equation">
        |ψ⟩ = ∑_{i₁...i_N} [Contract all A^{i_j} over virtual indices] |i₁...i_N⟩
      </div>
      <p>
        For a square lattice, each site has 4 neighbors, giving a rank-5 tensor (4 virtual + 1 physical index).
      </p>
    </div>

    <h3>Graphical Representation</h3>

    <div class="highlight-box">
      <h4>Tensor Network Diagram for 2D PEPS</h4>
      <p>
        A 2D PEPS on a square lattice can be visualized as:
      </p>
      <div class="equation">
        [A]--[A]--[A]--
         |    |    |
        [A]--[A]--[A]--
         |    |    |
        [A]--[A]--[A]--
      </div>
      <p>
        where each tensor A has:
      </p>
      <ul>
        <li>One physical leg (pointing out of the page): index i ∈ {1,...,d}</li>
        <li>Four virtual legs (in the plane): indices α,β,γ,δ ∈ {1,...,χ}</li>
      </ul>
      <p>
        Virtual bonds connect neighboring tensors, encoding entanglement between sites.
      </p>
    </div>

    <h2>Applications of PEPS</h2>

    <div class="info-box">
      <h3>What Can PEPS Describe?</h3>
      <p>
        PEPS provide a framework for studying a wide range of 2D quantum phenomena:
      </p>
      <ul>
        <li><strong>Symmetry breaking phases:</strong> Ising model, Heisenberg antiferromagnet, superfluids</li>
        <li><strong>Topological phases:</strong> Toric code, quantum double models, Chern insulators</li>
        <li><strong>Fractional quantum Hall states:</strong> Laughlin, Moore-Read, Read-Rezayi states</li>
        <li><strong>Spin liquids:</strong> ℤ₂ spin liquid, chiral spin liquid</li>
        <li><strong>Frustrated magnets:</strong> Triangular, kagome lattice systems</li>
        <li><strong>High-T_c superconductors:</strong> Cuprates (2D Hubbard model)</li>
      </ul>
    </div>

    <h2>Chapter Roadmap</h2>

    <p>
      This chapter systematically develops the theory and applications of higher-dimensional tensor networks:
    </p>

    <div class="highlight-box">
      <h4>What We'll Cover</h4>
      <p>
        <strong>Section 9.2: Tensor Product States</strong>
      </p>
      <ul>
        <li>Formal definition of PEPS for arbitrary dimensions and lattices</li>
        <li>Examples: product states, cat states, cluster states</li>
        <li>Properties: bond dimension, area law, computational complexity</li>
      </ul>
      <p>
        <strong>Section 9.3: Symmetry Breaking Phases</strong>
      </p>
      <ul>
        <li>PEPS representation of Ising model and other symmetry-breaking phases</li>
        <li>Block structure of tensors reflecting symmetry</li>
        <li>Order parameters and correlation functions</li>
      </ul>
      <p>
        <strong>Section 9.4: Topological Phases</strong>
      </p>
      <ul>
        <li>Toric code as prototypical PEPS with topological order</li>
        <li>Extracting topological properties from local tensors</li>
        <li>Stability and error correction interpretation</li>
      </ul>
      <p>
        <strong>Section 9.5: Other Tensor Network Forms</strong>
      </p>
      <ul>
        <li>Multi-scale Entanglement Renormalization Ansatz (MERA)</li>
        <li>Tree tensor networks (TTN)</li>
        <li>Comparison of different architectures</li>
      </ul>
      <p>
        <strong>Section 9.6: Summary and Outlook</strong>
      </p>
      <ul>
        <li>Synthesis of higher-dimensional tensor network methods</li>
        <li>Open challenges and future directions</li>
        <li>Connections to quantum computation and many-body physics</li>
      </ul>
    </div>

    <h2>Computational Perspective</h2>

    <div class="info-box">
      <h3>State of the Art</h3>
      <p>
        While PEPS are conceptually elegant, practical implementations face challenges:
      </p>
      <ul>
        <li><strong>Typical system sizes:</strong> 10×10 to 20×20 lattices (vs 1000+ sites for 1D MPS)</li>
        <li><strong>Bond dimensions:</strong> χ ~ 4-20 (vs χ ~ 1000 for 1D)</li>
        <li><strong>Computational cost:</strong> Days to weeks for optimization (vs minutes for 1D)</li>
        <li><strong>Accuracy:</strong> Approximate methods with uncontrolled errors (vs exact for 1D)</li>
      </ul>
      <p>
        <strong>Recent progress:</strong>
      </p>
      <ul>
        <li>Improved contraction algorithms (boundary MPS, corner transfer matrix)</li>
        <li>Automatic differentiation and gradient-based optimization</li>
        <li>GPU acceleration</li>
        <li>Symmetry-adapted PEPS reducing computational cost</li>
      </ul>
    </div>

    <h2>Connection to Previous Chapters</h2>

    <div class="highlight-box">
      <h4>Building on Earlier Ideas</h4>
      <ul>
        <li><strong>Chapter 2 (Entanglement):</strong> Area law in 2D (S ~ L) vs 1D (S ~ O(1))</li>
        <li><strong>Chapter 4 (Error Correction):</strong> Toric code as both PEPS and quantum error-correcting code</li>
        <li><strong>Chapter 6 (Topological Order):</strong> PEPS enables intrinsic topological order impossible in 1D</li>
        <li><strong>Chapter 7 (Quantum Phases):</strong> Classification extended to 2D via PEPS with symmetry</li>
        <li><strong>Chapter 8 (MPS):</strong> PEPS is the natural 2D/3D generalization of MPS</li>
      </ul>
    </div>

    <h2>Historical Context</h2>

    <div class="info-box">
      <h3>Development of PEPS</h3>
      <p>
        <strong>Timeline:</strong>
      </p>
      <ul>
        <li><strong>1992:</strong> White introduces DMRG for 1D systems</li>
        <li><strong>1995-1996:</strong> MPS formulation by Östlund-Rommer</li>
        <li><strong>2004:</strong> Verstraete and Cirac introduce PEPS for 2D</li>
        <li><strong>2006-2008:</strong> Development of contraction algorithms (boundary MPS, CTMRG)</li>
        <li><strong>2010s:</strong> Applications to topological order, symmetry-breaking phases</li>
        <li><strong>2020s:</strong> Machine learning integration, automatic differentiation, large-scale simulations</li>
      </ul>
      <p>
        The PEPS framework has evolved from a theoretical construct to a practical tool for studying 2D quantum systems.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Takeaways</h3>
      <ul>
        <li><strong>Motivation:</strong> 2D/3D systems exhibit phenomena impossible in 1D (topological order, anyons)</li>
        <li><strong>Challenge:</strong> Area law S ~ L^{d-1} makes exact simulation exponentially harder</li>
        <li><strong>PEPS ansatz:</strong> Generalization of MPS to arbitrary dimensions and lattices</li>
        <li><strong>Structure:</strong> Rank-(d+1) tensors with d virtual bonds plus 1 physical index</li>
        <li><strong>Applications:</strong> Symmetry breaking, topological phases, frustrated magnetism</li>
        <li><strong>Computational cost:</strong> Approximate contractions, limited system sizes</li>
        <li><strong>Chapter goal:</strong> Develop theory and applications of PEPS and related tensor networks</li>
      </ul>
    </div>

    <p>
      As we proceed through this chapter, we'll see how the tensor network perspective illuminates the structure of 2D quantum systems, from conventional symmetry-breaking phases to exotic topological states. The interplay between local tensor structure and global quantum phases reveals deep connections between entanglement geometry and emergent physics.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
