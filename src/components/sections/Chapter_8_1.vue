<template>
  <div class="section-content">
    <h1>8.1 Introduction</h1>

    <div class="info-box">
      <h3>The Power of Tensor Networks</h3>
      <p><strong>Matrix Product States (MPS)</strong> represent one of the most successful frameworks for understanding and simulating quantum many-body systems. By encoding quantum states as networks of tensors, MPS provides both analytical insights into entanglement structure and powerful numerical tools for computing ground states, dynamics, and phase diagrams of one-dimensional quantum systems.</p>
    </div>

    <h2>Motivation: Why MPS?</h2>

    <h3>The Exponential Wall</h3>

    <p>Consider a 1D chain of N spin-1/2 particles. The general quantum state lives in a Hilbert space of dimension:</p>

    <div class="equation">
      dim(ℋ) = 2^N
    </div>

    <p>To specify an arbitrary state requires:</p>

    <div class="highlight-box">
      <h3>The Storage Problem</h3>
      <ul>
        <li><strong>N = 10:</strong> 2^10 = 1,024 complex coefficients (~16 KB)</li>
        <li><strong>N = 20:</strong> 2^20 ≈ 10^6 coefficients (~16 MB)</li>
        <li><strong>N = 30:</strong> 2^30 ≈ 10^9 coefficients (~16 GB)</li>
        <li><strong>N = 40:</strong> 2^40 ≈ 10^12 coefficients (~16 TB)</li>
        <li><strong>N = 100:</strong> 2^100 ≈ 10^30 coefficients (more than all atoms in the universe!)</li>
      </ul>
      <p><strong>Conclusion:</strong> Exact simulation is exponentially impossible for large N.</p>
    </div>

    <h3>The Area Law Saves Us</h3>

    <p>Fortunately, <strong>not all states are created equal</strong>. Physically relevant states—especially ground states of local gapped Hamiltonians—obey an <strong>entanglement area law</strong>:</p>

    <div class="equation">
      S(ρ_A) ≤ c × |∂A| (for region A)
    </div>

    <p>In 1D, this means:</p>

    <div class="equation">
      S(ρ_L) ≤ constant (independent of L!)
    </div>

    <p>This bounded entanglement implies the state can be efficiently represented with a compact structure—<strong>Matrix Product States</strong>.</p>

    <h2>Historical Context</h2>

    <div class="info-box">
      <h3>Evolution of MPS Concept</h3>
      <ul>
        <li><strong>1975:</strong> Baxter's corner transfer matrices for classical 2D statistical models
          <ul>
            <li>Showed importance of matrix factorization</li>
          </ul>
        </li>
        <li><strong>1992:</strong> White's Density Matrix Renormalization Group (DMRG)
          <ul>
            <li>Revolutionized 1D quantum many-body physics</li>
            <li>Practical algorithm, but mathematical structure unclear</li>
          </ul>
        </li>
        <li><strong>1996:</strong> Östlund and Rommer formulate MPS
          <ul>
            <li>Revealed that DMRG implicitly uses MPS ansatz</li>
            <li>Provided clear mathematical framework</li>
          </ul>
        </li>
        <li><strong>2003-2004:</strong> Vidal develops MPS algorithms (iTEBD, TEBD)
          <ul>
            <li>Time evolution, infinite systems</li>
          </ul>
        </li>
        <li><strong>2007:</strong> Verstraete, Cirac, Murg formulate PEPS (2D generalization)
          <ul>
            <li>Projected Entangled Pair States</li>
          </ul>
        </li>
        <li><strong>2008-present:</strong> Continuous refinement
          <ul>
            <li>Tensor network renormalization, MERA, fermionic MPS</li>
            <li>Connections to quantum information, holography</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>What Are Tensor Networks?</h2>

    <h3>Tensors as Multi-Dimensional Arrays</h3>

    <p>A <strong>tensor</strong> is a generalization of vectors and matrices:</p>

    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Object</th>
          <th>Rank</th>
          <th>Notation</th>
          <th>Example</th>
        </tr>
        <tr>
          <td><strong>Scalar</strong></td>
          <td>0</td>
          <td>a</td>
          <td>5, π, -2.3</td>
        </tr>
        <tr>
          <td><strong>Vector</strong></td>
          <td>1</td>
          <td>v_i</td>
          <td>[1, 2, 3]</td>
        </tr>
        <tr>
          <td><strong>Matrix</strong></td>
          <td>2</td>
          <td>M_{ij}</td>
          <td>[[1,2],[3,4]]</td>
        </tr>
        <tr>
          <td><strong>Rank-3 tensor</strong></td>
          <td>3</td>
          <td>T_{ijk}</td>
          <td>3D array (cube of numbers)</td>
        </tr>
        <tr>
          <td><strong>Rank-4 tensor</strong></td>
          <td>4</td>
          <td>U_{ijkl}</td>
          <td>4D array (hypercube)</td>
        </tr>
      </table>
    </div>

    <h3>Tensor Network Diagrams</h3>

    <p>We represent tensors graphically:</p>

    <div class="equation">
      Scalar:  •

      Vector:  ──●

      Matrix:  ──●──

      Rank-3:    │
               ──●──

      Rank-4:    │
               ──●──
                 │
    </div>

    <p><strong>Rules:</strong></p>
    <ul>
      <li>Each tensor = node (circle or shape)</li>
      <li>Each index = leg (line coming out)</li>
      <li>Contracted indices = connected legs</li>
      <li>Free indices = unconnected legs (output)</li>
    </ul>

    <div class="highlight-box">
      <h3>Contraction Example</h3>
      <p>Matrix-vector multiplication C_i = ∑_j M_{ij} v_j:</p>
      <div class="equation">
        ──●── ──●  =  ──●
          M     v       C
      </div>
      <p>The connected leg represents the summed index j.</p>
    </div>

    <h2>The MPS Ansatz</h2>

    <h3>Basic Idea</h3>

    <p>Instead of storing 2^N coefficients, represent the state as:</p>

    <div class="equation">
      |ψ⟩ = ∑_{i₁...i_N} Tr[A^{i₁} A^{i₂} ··· A^{i_N}] |i₁i₂...i_N⟩
    </div>

    <p>where each A^{i_k} is a χ × χ matrix (bond dimension χ).</p>

    <div class="highlight-box">
      <h3>Storage Comparison</h3>
      <ul>
        <li><strong>Exact state:</strong> 2^N coefficients (exponential)</li>
        <li><strong>MPS state:</strong> N × d × χ² coefficients (linear in N!)
          <ul>
            <li>N = number of sites</li>
            <li>d = local dimension (2 for spin-1/2)</li>
            <li>χ = bond dimension (controls accuracy)</li>
          </ul>
        </li>
      </ul>
      <p><strong>Example:</strong> N=100, d=2, χ=50</p>
      <ul>
        <li>Exact: 2^100 ≈ 10^30 (impossible)</li>
        <li>MPS: 100 × 2 × 50² = 500,000 (easy!)</li>
      </ul>
    </div>

    <h3>Graphical Representation</h3>

    <div class="equation">
      MPS:  ──A^{i₁}──A^{i₂}──A^{i₃}── ··· ──A^{i_N}──
            │       │       │              │
            i₁      i₂      i₃             i_N
    </div>

    <p>Horizontal lines: virtual (bond) indices (dimension χ)</p>
    <p>Vertical lines: physical indices (dimension d)</p>

    <h2>Why Does MPS Work?</h2>

    <h3>Connection to Entanglement</h3>

    <div class="info-box">
      <h3>Schmidt Decomposition and MPS</h3>
      <p>For a bipartition A|B of the chain:</p>
      <div class="equation">
        |ψ⟩ = ∑_{α=1}^{r} λ_α |φ_α⟩_A ⊗ |χ_α⟩_B
      </div>
      <p>where r = Schmidt rank (entanglement between A and B).</p>

      <p><strong>Key insight:</strong> If S(A) ≤ log χ for all bipartitions, then the state can be efficiently represented as MPS with bond dimension χ.</p>

      <p><strong>Area law connection:</strong> 1D area law S ≤ constant → bounded χ works!</p>
    </div>

    <h3>What States Can MPS Represent?</h3>

    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>State Type</th>
          <th>MPS Representable?</th>
          <th>Required χ</th>
        </tr>
        <tr>
          <td><strong>Product state</strong></td>
          <td>✓ Exact</td>
          <td>χ = 1</td>
        </tr>
        <tr>
          <td><strong>GHZ state</strong></td>
          <td>✓ Exact</td>
          <td>χ = 2</td>
        </tr>
        <tr>
          <td><strong>W state</strong></td>
          <td>✓ Exact</td>
          <td>χ = N</td>
        </tr>
        <tr>
          <td><strong>AKLT state (S=1)</strong></td>
          <td>✓ Exact</td>
          <td>χ = 2</td>
        </tr>
        <tr>
          <td><strong>Gapped ground states</strong></td>
          <td>✓ Approximate (area law)</td>
          <td>χ ~ poly(ε^{-1})</td>
        </tr>
        <tr>
          <td><strong>Critical states (CFT)</strong></td>
          <td>≈ Approximate (log violation)</td>
          <td>χ → ∞ (exponential in L)</td>
        </tr>
        <tr>
          <td><strong>Random states</strong></td>
          <td>✗ No (volume law)</td>
          <td>χ ~ 2^{N/2}</td>
        </tr>
      </table>
    </div>

    <h2>MPS in Practice: DMRG</h2>

    <h3>The DMRG Algorithm</h3>

    <p>Density Matrix Renormalization Group finds ground states by:</p>

    <div class="highlight-box">
      <h3>DMRG Procedure</h3>
      <ol>
        <li><strong>Initialize:</strong> Start with random MPS (small χ)</li>
        <li><strong>Sweep:</strong> Update each tensor A^{i_k} one at a time
          <ul>
            <li>Minimize energy ⟨ψ|H|ψ⟩ with respect to A^{i_k}</li>
            <li>Becomes a small eigenvalue problem (size dχ² × dχ²)</li>
          </ul>
        </li>
        <li><strong>Truncate:</strong> Keep χ largest Schmidt values (control bond dimension)</li>
        <li><strong>Repeat:</strong> Sweep back and forth until convergence</li>
      </ol>

      <p><strong>Complexity:</strong> O(N × χ³ × d²) per sweep (polynomial!)</p>
    </div>

    <h3>DMRG Success Stories</h3>

    <ul>
      <li><strong>Frustrated spin chains:</strong> Haldane gap accurately computed</li>
      <li><strong>Quantum phase diagrams:</strong> Map out phase boundaries</li>
      <li><strong>Dynamical properties:</strong> Time evolution (t-DMRG)</li>
      <li><strong>Finite temperature:</strong> Purification methods</li>
      <li><strong>Open systems:</strong> Dissipative dynamics</li>
      <li><strong>2D systems:</strong> DMRG on cylinders (quasi-1D)</li>
    </ul>

    <h2>Beyond 1D: Generalizations</h2>

    <h3>Higher-Dimensional Tensor Networks</h3>

    <div class="info-box">
      <h3>Tensor Network Zoo</h3>
      <ul>
        <li><strong>MPS (1D):</strong> Matrix Product States
          <ul>
            <li>Perfect for 1D gapped systems</li>
            <li>Efficient algorithms (DMRG, TEBD)</li>
          </ul>
        </li>
        <li><strong>PEPS (2D):</strong> Projected Entangled Pair States
          <ul>
            <li>Generalization to 2D lattices</li>
            <li>Contraction is #P-hard (exponential cost)</li>
            <li>Approximate algorithms exist</li>
          </ul>
        </li>
        <li><strong>MERA:</strong> Multi-scale Entanglement Renormalization Ansatz
          <ul>
            <li>Hierarchical structure (tree)</li>
            <li>Good for critical systems (log entanglement)</li>
          </ul>
        </li>
        <li><strong>TTN:</strong> Tree Tensor Networks
          <ul>
            <li>For systems with tree-like connectivity</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>Chapter Roadmap</h2>

    <div class="highlight-box">
      <h3>What We'll Cover</h3>
      <ul>
        <li><strong>§8.2.1-8.2.3:</strong> MPS definition, double tensor, computing observables</li>
        <li><strong>§8.2.4-8.2.5:</strong> Correlation length, entanglement area law</li>
        <li><strong>§8.2.6-8.2.7:</strong> Gauge freedom, entangled pair picture</li>
        <li><strong>§8.2.8-8.2.10:</strong> Canonical form, injectivity, parent Hamiltonians</li>
        <li><strong>§8.3:</strong> Renormalization group on MPS</li>
        <li><strong>§8.4:</strong> Fundamental limit: no intrinsic topological order in 1D bosonic MPS</li>
        <li><strong>§8.5:</strong> Summary and further directions</li>
      </ul>
    </div>

    <h2>Key Concepts and Notation</h2>

    <div class="comparison-box">
      <h3>Essential Terminology</h3>
      <table class="comparison-table">
        <tr>
          <th>Term</th>
          <th>Symbol</th>
          <th>Meaning</th>
        </tr>
        <tr>
          <td><strong>Physical index</strong></td>
          <td>i, j, k</td>
          <td>Local Hilbert space (dim = d)</td>
        </tr>
        <tr>
          <td><strong>Virtual/bond index</strong></td>
          <td>α, β</td>
          <td>Auxiliary space (dim = χ)</td>
        </tr>
        <tr>
          <td><strong>Bond dimension</strong></td>
          <td>χ (chi)</td>
          <td>Dimension of virtual indices</td>
        </tr>
        <tr>
          <td><strong>MPS tensor</strong></td>
          <td>A^i_{αβ}</td>
          <td>Rank-3 tensor at each site</td>
        </tr>
        <tr>
          <td><strong>Transfer matrix</strong></td>
          <td>E_{αα',ββ'}</td>
          <td>E = ∑_i A^i ⊗ (A^i)*</td>
        </tr>
        <tr>
          <td><strong>Schmidt coefficients</strong></td>
          <td>λ_α</td>
          <td>Singular values of bipartition</td>
        </tr>
      </table>
    </div>

    <h2>Philosophical Perspective</h2>

    <div class="info-box">
      <h3>Why MPS Matters</h3>
      <p>Matrix Product States represent more than just a numerical tool:</p>
      <ul>
        <li><strong>Conceptual clarity:</strong> Reveals structure of quantum states (entanglement scaling)</li>
        <li><strong>Analytical power:</strong> Proves rigorous results (area law, ground state uniqueness)</li>
        <li><strong>Computational efficiency:</strong> Enables simulation of systems previously intractable</li>
        <li><strong>Unifying framework:</strong> Connects DMRG, RG, quantum circuits, holography</li>
        <li><strong>Foundation for generalizations:</strong> PEPS, MERA, fermionic TNs, quantum chemistry</li>
      </ul>

      <p>The success of MPS demonstrates that <strong>entanglement structure</strong>, not just Hamiltonian symmetries, determines the physics of quantum many-body systems.</p>
    </div>

    <h2>Prerequisites and Background</h2>

    <p>To fully appreciate this chapter, familiarity with the following is helpful:</p>

    <ul>
      <li><strong>Quantum mechanics:</strong> States, operators, entanglement, Schmidt decomposition (Chapter 1)</li>
      <li><strong>Many-body physics:</strong> Local Hamiltonians, ground states, phase transitions (Chapters 4-7)</li>
      <li><strong>Entanglement:</strong> Area law, entanglement entropy (Chapter 5)</li>
      <li><strong>Linear algebra:</strong> Matrices, eigenvalues, singular value decomposition</li>
      <li><strong>Numerical methods:</strong> Basic iterative algorithms (optional)</li>
    </ul>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h3>Key Takeaways</h3>
      <ul>
        <li><strong>Exponential problem:</strong> Generic quantum states require 2^N coefficients—computationally intractable</li>
        <li><strong>Physical states are special:</strong> Gapped ground states obey area law → bounded entanglement</li>
        <li><strong>MPS ansatz:</strong> Represent state as product of matrices with bond dimension χ</li>
        <li><strong>Storage efficiency:</strong> O(Nχ²d) instead of O(2^N)—exponential to polynomial!</li>
        <li><strong>Historical development:</strong> DMRG (1992) → MPS formulation (1996) → modern tensor networks</li>
        <li><strong>Success:</strong> 1D gapped systems, quasi-1D, critical systems (with larger χ)</li>
        <li><strong>Limitations:</strong> 2D harder (PEPS contraction exponential), volume-law states impossible</li>
        <li><strong>Broader impact:</strong> Tensor networks now central to quantum many-body physics, quantum chemistry, machine learning</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Looking Ahead</h3>
      <p>In §8.2, we'll develop the mathematical formalism of MPS in detail—defining the structure precisely, introducing the double tensor for computing overlaps, and showing how to efficiently calculate physical observables. This foundation will enable us to understand correlation lengths, entanglement scaling, and the deep connection to quantum phases.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
