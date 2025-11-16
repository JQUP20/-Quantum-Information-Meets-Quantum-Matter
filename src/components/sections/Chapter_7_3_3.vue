<template>
  <div class="section-content">
    <h1>7.3.3 Wavefunction Renormalization</h1>

    <div class="info-box">
      <h3>Central Idea</h3>
      <p><strong>Wavefunction renormalization</strong> provides a systematic framework for coarse-graining quantum states by iteratively removing short-distance degrees of freedom. This process reveals the essential long-wavelength structure of quantum phases and connects to the renormalization group (RG) concepts familiar from critical phenomena and quantum field theory.</p>
    </div>

    <h2>The Renormalization Group Philosophy</h2>

    <h3>From Hamiltonian RG to Wavefunction RG</h3>

    <p>Traditional RG approaches focus on transforming the Hamiltonian:</p>

    <div class="equation">
      H → H' (under coarse-graining)
    </div>

    <p>Modern quantum information approaches instead transform the <strong>wavefunction</strong>:</p>

    <div class="equation">
      |ψ⟩ → |ψ'⟩ (under real-space blocking + local unitary)
    </div>

    <div class="comparison-box">
      <h3>Hamiltonian RG vs Wavefunction RG</h3>
      <table class="comparison-table">
        <tr>
          <th>Aspect</th>
          <th>Hamiltonian RG</th>
          <th>Wavefunction RG</th>
        </tr>
        <tr>
          <td><strong>Object transformed</strong></td>
          <td>Hamiltonian H</td>
          <td>Wavefunction |ψ⟩</td>
        </tr>
        <tr>
          <td><strong>Primary focus</strong></td>
          <td>Energy scales and couplings</td>
          <td>Entanglement structure</td>
        </tr>
        <tr>
          <td><strong>Fixed points</strong></td>
          <td>Critical Hamiltonians</td>
          <td>Scale-invariant states</td>
        </tr>
        <tr>
          <td><strong>Flows</strong></td>
          <td>Coupling constant trajectories</td>
          <td>Wavefunction trajectories</td>
        </tr>
        <tr>
          <td><strong>Applications</strong></td>
          <td>Phase diagrams, critical exponents</td>
          <td>Entanglement, tensor networks</td>
        </tr>
        <tr>
          <td><strong>Quantum information content</strong></td>
          <td>Implicit</td>
          <td>Explicit (entanglement entropy, etc.)</td>
        </tr>
      </table>
    </div>

    <h2>Real-Space Renormalization Procedure</h2>

    <h3>Basic Steps</h3>

    <p>A typical real-space wavefunction RG transformation consists of:</p>

    <div class="highlight-box">
      <h3>Three-Step RG Procedure</h3>
      <ol>
        <li><strong>Blocking:</strong> Group sites into blocks (e.g., pairs of spins)
          <div class="equation">
            ℋ = ⊗_i (ℋ_{2i-1} ⊗ ℋ_{2i})
          </div>
        </li>
        <li><strong>Local unitary rotation:</strong> Apply U within each block
          <div class="equation">
            |ψ⟩ → (⊗_i U_i) |ψ⟩
          </div>
          <p>Goal: Disentangle degrees of freedom within blocks</p>
        </li>
        <li><strong>Decimation:</strong> Trace out (or project) some degrees of freedom
          <div class="equation">
            |ψ'⟩ = Tr_{short-distance} (⊗_i U_i) |ψ⟩
          </div>
        </li>
      </ol>
    </div>

    <h3>Example: 1D Spin Chain</h3>

    <p>Consider a 1D chain of spins with state |ψ⟩:</p>

    <div class="equation">
      Original: ●—●—●—●—●—●—●—●

      Step 1 (Block): (●—●)—(●—●)—(●—●)—(●—●)

      Step 2 (Rotate): Apply U to each pair

      Step 3 (Decimate): Keep one spin per block → ●   ●   ●   ●
    </div>

    <p>The resulting state |ψ'⟩ lives on a coarser lattice with half the sites.</p>

    <div class="note-box">
      <h4>Isometry Interpretation</h4>
      <p>The combined transformation can be written as an isometry:</p>
      <div class="equation">
        |ψ'⟩ = (⊗_i w_i) |ψ⟩
      </div>
      <p>where w_i : ℋ_{2i-1} ⊗ ℋ_{2i} → ℋ'_i is an isometric map (w†w = I, but ww† ≠ I). The "lost" information goes into short-distance correlations.</p>
    </div>

    <h2>Connection to Local Unitaries</h2>

    <h3>Reversible vs Irreversible Transformations</h3>

    <div class="highlight-box">
      <h3>Key Distinction</h3>
      <ul>
        <li><strong>Local unitary (§7.3.1):</strong> Reversible transformation
          <div class="equation">
            |ψ'⟩ = U |ψ⟩, where U†U = UU† = I
          </div>
          <p>Preserves all information, changes entanglement pattern but not total entanglement</p>
        </li>
        <li><strong>RG transformation:</strong> Irreversible (isometry)
          <div class="equation">
            |ψ'⟩ = W |ψ⟩, where W†W = I but WW† ≠ I
          </div>
          <p>Removes short-distance information, reduces entanglement</p>
        </li>
      </ul>
    </div>

    <h3>Disentangling Property</h3>

    <p>The goal of the local unitary step (step 2) is to <strong>minimize entanglement</strong> between the kept and removed degrees of freedom:</p>

    <div class="equation">
      U_optimal = arg min_U S(ρ_kept)
    </div>

    <p>where S(ρ_kept) is the entanglement entropy after rotation and before decimation.</p>

    <div class="info-box">
      <h3>Physical Interpretation</h3>
      <p>After optimal disentangling:</p>
      <ul>
        <li><strong>Gapped phases:</strong> Short-distance and long-distance degrees of freedom become approximately separable → RG flow converges to fixed point</li>
        <li><strong>Critical points:</strong> Entanglement persists across scales → RG flow stays at critical surface</li>
        <li><strong>Topological phases:</strong> Topological quantum numbers preserved throughout flow</li>
      </ul>
    </div>

    <h2>Fixed Points and RG Flows</h2>

    <h3>RG Flow in State Space</h3>

    <p>Repeated application of the RG transformation defines a flow:</p>

    <div class="equation">
      |ψ⟩ → |ψ'⟩ → |ψ''⟩ → ··· → |ψ*⟩
    </div>

    <p>where |ψ*⟩ is a <strong>fixed point</strong> satisfying:</p>

    <div class="equation">
      RG[|ψ*⟩] = |ψ*⟩ (up to normalization and global phase)
    </div>

    <div class="comparison-box">
      <h3>Types of Fixed Points</h3>
      <table class="comparison-table">
        <tr>
          <th>Fixed Point Type</th>
          <th>Physical State</th>
          <th>Properties</th>
          <th>Example</th>
        </tr>
        <tr>
          <td><strong>Trivial (stable)</strong></td>
          <td>Product state</td>
          <td>No entanglement; all gapped trivial phases flow here</td>
          <td>|↑↑···↑⟩</td>
        </tr>
        <tr>
          <td><strong>Non-trivial (stable)</strong></td>
          <td>SPT or topological order</td>
          <td>Non-trivial entanglement structure; protected by symmetry or topology</td>
          <td>AKLT state, Toric code</td>
        </tr>
        <tr>
          <td><strong>Critical (unstable)</strong></td>
          <td>Conformal field theory state</td>
          <td>Scale-invariant; logarithmic entanglement growth</td>
          <td>Ising critical point</td>
        </tr>
        <tr>
          <td><strong>Multi-critical</strong></td>
          <td>Intersection of critical surfaces</td>
          <td>Multiple relevant operators</td>
          <td>Ashkin-Teller point</td>
        </tr>
      </table>
    </div>

    <h3>Relevant, Irrelevant, and Marginal Operators</h3>

    <p>Near a fixed point, perturbations can be classified by their scaling under RG:</p>

    <div class="equation">
      |ψ(λ)⟩ = |ψ*⟩ + λ|O⟩ + O(λ²)
    </div>

    <p>Under RG transformation with length rescaling b:</p>

    <div class="equation">
      λ → λ' = b^y λ
    </div>

    <p>where y is the <strong>scaling dimension</strong>:</p>
    <ul>
      <li><strong>Relevant (y > 0):</strong> Perturbation grows under RG → drives flow away from fixed point</li>
      <li><strong>Irrelevant (y < 0):</strong> Perturbation shrinks under RG → flow toward fixed point</li>
      <li><strong>Marginal (y = 0):</strong> Requires higher-order analysis</li>
    </ul>

    <h2>Entanglement Renormalization (MERA)</h2>

    <h3>Multi-scale Entanglement Renormalization Ansatz</h3>

    <p>The <strong>MERA</strong> (Vidal, 2007) is a powerful tensor network that implements wavefunction RG as a hierarchical structure:</p>

    <div class="highlight-box">
      <h3>MERA Architecture</h3>
      <p>A MERA for a 1D system consists of alternating layers of:</p>
      <ul>
        <li><strong>Disentanglers (u):</strong> Two-site unitary gates that remove short-range entanglement
          <div class="equation">
            u : ℋ_i ⊗ ℋ_j → ℋ_i ⊗ ℋ_j
          </div>
        </li>
        <li><strong>Isometries (w):</strong> Coarse-graining maps that reduce the number of sites
          <div class="equation">
            w : ℋ_i ⊗ ℋ_{i+1} → ℋ'_i
          </div>
        </li>
      </ul>
      <p>Stacking these layers creates a tree structure encoding the quantum state.</p>
    </div>

    <div class="equation">
      MERA structure (schematic):

      Top: ● (single site at coarsest scale)
       ╱ ╲
      w   w (isometries)
      ╱│ │╲
      u u u (disentanglers)
      ││││││
      ●●●●●● (physical sites at finest scale)
    </div>

    <h3>Properties of MERA</h3>

    <div class="info-box">
      <h3>Advantages of MERA</h3>
      <ul>
        <li><strong>Scale invariance:</strong> Natural description of critical states (conformal field theories)</li>
        <li><strong>Entanglement entropy:</strong> Correctly reproduces logarithmic scaling S ~ log L at critical points</li>
        <li><strong>Correlation functions:</strong> Can capture power-law decays efficiently</li>
        <li><strong>Computational cost:</strong> Polynomial in bond dimension χ for local observables</li>
        <li><strong>Real-space RG:</strong> Explicitly implements coarse-graining at each layer</li>
      </ul>
    </div>

    <h3>MERA vs MPS</h3>

    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>MPS (Matrix Product State)</th>
          <th>MERA</th>
        </tr>
        <tr>
          <td><strong>Structure</strong></td>
          <td>Linear (1D chain of tensors)</td>
          <td>Hierarchical (tree structure)</td>
        </tr>
        <tr>
          <td><strong>Entanglement entropy</strong></td>
          <td>Bounded: S ≤ log χ (area law)</td>
          <td>Logarithmic: S ~ log L (critical)</td>
        </tr>
        <tr>
          <td><strong>Best for</strong></td>
          <td>Gapped 1D systems</td>
          <td>Critical systems, scale-invariant states</td>
        </tr>
        <tr>
          <td><strong>Correlation length</strong></td>
          <td>ξ ~ χ (finite for finite χ)</td>
          <td>Can represent ξ = ∞</td>
        </tr>
        <tr>
          <td><strong>Computational cost (contraction)</strong></td>
          <td>O(χ³)</td>
          <td>O(χ⁶) per layer</td>
        </tr>
        <tr>
          <td><strong>RG interpretation</strong></td>
          <td>Not explicit</td>
          <td>Each layer = one RG step</td>
        </tr>
      </table>
    </div>

    <h2>Applications to Phase Classification</h2>

    <h3>Identifying Phases via RG Flow</h3>

    <p>Quantum phases can be distinguished by their RG flow behavior:</p>

    <div class="highlight-box">
      <h3>RG Flow Characterization of Phases</h3>
      <ul>
        <li><strong>Trivial gapped phase:</strong>
          <ul>
            <li>Flows to product state fixed point</li>
            <li>Entanglement entropy decreases to zero: S → 0</li>
            <li>Correlation length ξ_RG → 0 exponentially fast</li>
          </ul>
        </li>
        <li><strong>SPT phase:</strong>
          <ul>
            <li>Flows to non-trivial fixed point (preserving symmetry)</li>
            <li>Entanglement reaches constant: S → S_SPT > 0</li>
            <li>Edge states visible in RG structure</li>
          </ul>
        </li>
        <li><strong>Topological order:</strong>
          <ul>
            <li>Flows to fixed point with intrinsic topological degeneracy</li>
            <li>TEE persists: γ = log 𝒟 remains constant</li>
            <li>Cannot be disentangled by local unitaries alone</li>
          </ul>
        </li>
        <li><strong>Critical phase:</strong>
          <ul>
            <li>Stays at unstable fixed point (conformal field theory)</li>
            <li>Entanglement entropy grows: S ~ c/3 log L</li>
            <li>All length scales equivalent (scale invariance)</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Example: 1D Transverse Field Ising Model</h3>

    <p>The Hamiltonian:</p>

    <div class="equation">
      H = -J ∑_i σ^z_i σ^z_{i+1} - h ∑_i σ^x_i
    </div>

    <p>RG flow diagram in (J, h) space:</p>

    <div class="equation">
      h/J >> 1 (paramagnetic): → Product state |→→→···⟩
      h/J << 1 (ferromagnetic): → Broken symmetry (|↑↑↑···⟩ or |↓↓↓···⟩)
      h/J = 1 (critical): → Ising CFT fixed point
    </div>

    <div class="note-box">
      <h4>Universal Critical Behavior</h4>
      <p>At the critical point h = J, the RG flow stays at a conformal field theory (CFT) fixed point with:</p>
      <ul>
        <li>Central charge: c = 1/2</li>
        <li>Scaling dimensions: {0, 1/16, 1/2, ...}</li>
        <li>Entanglement entropy: S(L) = (c/3) log L + s₁</li>
      </ul>
      <p>These quantities are <strong>universal</strong>—independent of microscopic details.</p>
    </div>

    <h2>Entanglement Entropy Evolution</h2>

    <h3>Tracking Entanglement Under RG</h3>

    <p>The entanglement entropy provides a key diagnostic for RG flow:</p>

    <div class="equation">
      S^{(n)}(L) = entanglement entropy after n RG steps
    </div>

    <div class="comparison-box">
      <h3>Entanglement Evolution Under RG</h3>
      <table class="comparison-table">
        <tr>
          <th>Phase Type</th>
          <th>Initial S(L)</th>
          <th>After n Steps S^{(n)}(L/b^n)</th>
          <th>Fixed Point</th>
        </tr>
        <tr>
          <td><strong>Trivial gapped</strong></td>
          <td>~ constant (area law)</td>
          <td>→ 0 exponentially</td>
          <td>Product state: S* = 0</td>
        </tr>
        <tr>
          <td><strong>SPT</strong></td>
          <td>~ constant</td>
          <td>→ S_SPT (non-zero constant)</td>
          <td>Non-trivial: S* = S_SPT</td>
        </tr>
        <tr>
          <td><strong>Topological</strong></td>
          <td>~ constant + γ</td>
          <td>→ S_bulk + γ</td>
          <td>TEE preserved: γ = log 𝒟</td>
        </tr>
        <tr>
          <td><strong>Critical (1D)</strong></td>
          <td>~ (c/3) log L</td>
          <td>~ (c/3) log(L/b^n)</td>
          <td>CFT: S* ~ (c/3) log L'</td>
        </tr>
        <tr>
          <td><strong>Critical (2D)</strong></td>
          <td>~ αL (boundary law)</td>
          <td>~ α'L/b^n</td>
          <td>Boundary law with α* coefficient</td>
        </tr>
      </table>
    </div>

    <h3>Scaling Collapse</h3>

    <p>Near a critical point, observables obey scaling relations:</p>

    <div class="equation">
      O(L, t) = b^{-y_O} O(L/b, t·b^{1/ν})
    </div>

    <p>where t = (g - g_c)/g_c is the reduced coupling and ν is the correlation length exponent.</p>

    <h2>Quantum Phase Transitions via RG</h2>

    <h3>Second-Order Transitions</h3>

    <p>A continuous quantum phase transition occurs when the RG flow passes through a critical fixed point:</p>

    <div class="highlight-box">
      <h3>RG Picture of Phase Transition</h3>
      <ul>
        <li><strong>High-symmetry phase:</strong> Basin of attraction → Fixed point A</li>
        <li><strong>Critical surface:</strong> Separatrix between basins, contains critical fixed point</li>
        <li><strong>Low-symmetry phase:</strong> Basin of attraction → Fixed point B</li>
      </ul>
      <p>Tuning coupling constant g crosses the critical surface at g = g_c.</p>
    </div>

    <h3>Extracting Critical Exponents</h3>

    <p>From the RG eigenvalues y_i at the critical fixed point:</p>

    <div class="equation">
      Correlation length exponent: ν = 1/y_1
      Dynamical exponent: z = y_t/y_1
      Anomalous dimension: η = 2 - d + y_φ
    </div>

    <p>where y_1 is the leading relevant eigenvalue.</p>

    <h2>Numerical Implementation</h2>

    <h3>Algorithms for Wavefunction RG</h3>

    <div class="info-box">
      <h3>Practical RG Algorithms</h3>
      <ul>
        <li><strong>Tensor network renormalization (TNR):</strong>
          <ul>
            <li>Represent state as tensor network</li>
            <li>Optimize disentanglers via iterative minimization of S</li>
            <li>Coarse-grain by contracting tensors</li>
            <li>Track flow in tensor network space</li>
          </ul>
        </li>
        <li><strong>MERA optimization:</strong>
          <ul>
            <li>Variationally optimize u and w tensors</li>
            <li>Minimize energy ⟨ψ|H|ψ⟩ or maximize overlap with target state</li>
            <li>Use automatic differentiation or imaginary time evolution</li>
          </ul>
        </li>
        <li><strong>Density matrix renormalization group (DMRG):</strong>
          <ul>
            <li>While primarily a ground state method, can be viewed as RG</li>
            <li>Block-decimation with optimal truncation</li>
            <li>Preserves low-energy eigenstates of reduced density matrix</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Computational Complexity</h3>

    <p>For a 1D system with bond dimension χ:</p>

    <div class="equation">
      MERA contraction: O(χ⁶ log N)
      MERA optimization: O(χ⁷ log N) per iteration
      TNR step: O(χ⁶) for 2D classical systems
    </div>

    <h2>Higher-Dimensional Generalizations</h2>

    <h3>2D Tensor Network RG</h3>

    <p>Generalizing to 2D requires more sophisticated tensor network structures:</p>

    <ul>
      <li><strong>Projected Entangled Pair States (PEPS):</strong> 2D generalization of MPS
        <ul>
          <li>Can represent area-law entangled states</li>
          <li>Contraction is #P-hard (exponentially difficult)</li>
        </ul>
      </li>
      <li><strong>Tensor Network Renormalization (TNR):</strong> 2D RG scheme
        <ul>
          <li>Coarse-grains 2D tensor networks</li>
          <li>Successful for classical partition functions (2D Ising model)</li>
          <li>Extension to quantum states ongoing</li>
        </ul>
      </li>
      <li><strong>Branching MERA:</strong> 2D extension of MERA
        <ul>
          <li>Tree branches in 2D</li>
          <li>Violates strict causality but preserves key features</li>
        </ul>
      </li>
    </ul>

    <h3>Challenges in Higher Dimensions</h3>

    <div class="note-box">
      <h4>Computational Barriers</h4>
      <ul>
        <li><strong>Entanglement scaling:</strong> 2D area law S ~ L requires exponentially large bond dimension in standard TNs</li>
        <li><strong>Loop contractions:</strong> Tensor network contractions create loops, leading to exponential cost</li>
        <li><strong>Gauge freedom:</strong> More degrees of freedom in choosing local unitaries</li>
        <li><strong>Phase richness:</strong> More complex phase diagrams (e.g., Kosterlitz-Thouless transitions, fractionalized phases)</li>
      </ul>
    </div>

    <h2>Connection to AdS/CFT and Holography</h2>

    <h3>Holographic Interpretation of MERA</h3>

    <p>A fascinating connection exists between MERA and holographic duality in quantum gravity:</p>

    <div class="highlight-box">
      <h3>MERA as Discrete Holography</h3>
      <ul>
        <li><strong>MERA layers:</strong> Correspond to radial slices in anti-de Sitter (AdS) space</li>
        <li><strong>Entanglement entropy:</strong> Ryu-Takayanagi formula suggests S ~ minimal geodesic in bulk
          <div class="equation">
            S_CFT(A) = Area(γ_A) / (4G_N)
          </div>
        </li>
        <li><strong>Bulk geometry:</strong> Emerges from entanglement structure of boundary state</li>
        <li><strong>RG flow:</strong> Radial direction in AdS space</li>
      </ul>
      <p>This suggests deep connections between quantum entanglement, spacetime geometry, and renormalization.</p>
    </div>

    <h2>Experimental and Practical Aspects</h2>

    <h3>Can We Measure RG Flow?</h3>

    <p>While RG is primarily a theoretical tool, experimental signatures exist:</p>

    <ul>
      <li><strong>Scaling behavior:</strong> Measuring correlation functions C(r) ~ r^{-η} at criticality</li>
      <li><strong>Entanglement entropy:</strong> Quantum gas microscopy and interferometry can probe S(L)</li>
      <li><strong>Finite-size scaling:</strong> Crossing point of observables at different system sizes reveals critical exponents</li>
      <li><strong>Quantum simulators:</strong> Implementing coarse-graining circuits to visualize RG flow</li>
    </ul>

    <h3>Machine Learning and RG</h3>

    <p>Recent developments use neural networks to learn RG transformations:</p>

    <div class="info-box">
      <h3>ML-Based RG</h3>
      <ul>
        <li><strong>Variational RG:</strong> Neural networks parameterize disentanglers and isometries</li>
        <li><strong>Autoencoder architecture:</strong> Compression mirrors coarse-graining</li>
        <li><strong>Generative models:</strong> Learn probability distributions under RG flow</li>
        <li><strong>Phase classification:</strong> Unsupervised learning identifies phase boundaries</li>
      </ul>
    </div>

    <h2>Limitations and Open Questions</h2>

    <div class="note-box">
      <h4>Current Challenges</h4>
      <ul>
        <li><strong>Non-uniqueness:</strong> Many RG schemes possible for the same system—which is "correct"?</li>
        <li><strong>Optimal disentanglers:</strong> Finding the best local unitaries is generally computationally hard</li>
        <li><strong>Finite-temperature:</strong> Extending wavefunction RG to mixed states (density matrices) is non-trivial</li>
        <li><strong>Fermions:</strong> Fermionic tensor networks require careful treatment of parity/sign structure</li>
        <li><strong>Topological phases:</strong> How to systematically identify and preserve topological invariants under RG?</li>
      </ul>
    </div>

    <h3>Frontier Questions</h3>

    <ul>
      <li>Can we develop a complete classification of RG fixed points in higher dimensions?</li>
      <li>How does wavefunction RG connect to operator RG (conformal bootstrap)?</li>
      <li>Can RG-inspired neural networks solve previously intractable quantum many-body problems?</li>
      <li>What is the optimal tensor network architecture for different quantum phases?</li>
      <li>How do symmetry-protected phases manifest in RG flow structure?</li>
    </ul>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h3>Key Takeaways</h3>
      <ul>
        <li><strong>Wavefunction RG:</strong> Systematic coarse-graining of quantum states reveals essential long-wavelength physics</li>
        <li><strong>Three-step procedure:</strong> Blocking + local unitary + decimation implements real-space RG</li>
        <li><strong>Fixed points:</strong> Different quantum phases correspond to different RG fixed points with distinct entanglement structures</li>
        <li><strong>MERA:</strong> Powerful tensor network that explicitly implements hierarchical RG for critical states</li>
        <li><strong>Entanglement evolution:</strong> How S(L) changes under RG distinguishes phases (trivial, SPT, topological, critical)</li>
        <li><strong>Universality:</strong> Critical exponents and scaling dimensions emerge from RG eigenvalue analysis</li>
        <li><strong>Quantum information meets RG:</strong> Entanglement provides the natural language for wavefunction renormalization</li>
        <li><strong>Computational tool:</strong> Tensor network RG algorithms enable practical calculations of critical properties</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Looking Ahead</h3>
      <p>Having established the framework of local unitary transformations (§7.3.1), quantum circuits (§7.3.2), and wavefunction renormalization (§7.3.3), we now turn to <strong>§7.4: Gapped Hamiltonians</strong>. We'll examine in detail the structure and properties of gapped quantum phases, building toward a complete classification scheme that distinguishes trivial, SPT, and topologically ordered states.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_7_3_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
