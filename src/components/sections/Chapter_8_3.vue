<template>
  <div class="section-content">
    <h1>8.3 Renormalization Group Transformation on MPS</h1>

    <p>
      The renormalization group (RG) is a powerful conceptual framework for understanding physics across different length scales. For MPS, we can define an explicit RG transformation that coarse-grains the system while preserving the MPS structure. This connects MPS to critical phenomena, fixed points, and the emergence of scale invariance.
    </p>

    <h2>Real-Space RG for MPS</h2>

    <div class="info-box">
      <h3>The Blocking Transformation</h3>
      <p>
        The simplest RG transformation on MPS is <strong>blocking</strong>: grouping consecutive sites together to form coarser "super-sites."
      </p>
      <p>
        <strong>Procedure:</strong>
      </p>
      <ol>
        <li><strong>Group sites:</strong> Combine k consecutive sites (j, j+1, ..., j+k-1) into a single super-site</li>
        <li><strong>New physical dimension:</strong> d → d^k (super-site has larger local Hilbert space)</li>
        <li><strong>New MPS tensor:</strong> Ã^{i₁...i_k} = A^{i₁} A^{i₂} ··· A^{i_k}</li>
        <li><strong>Bond dimension:</strong> Remains χ (crucial property!)</li>
      </ol>
      <p>
        The result is an MPS with N/k sites, physical dimension d^k, and bond dimension χ.
      </p>
    </div>

    <h3>Example: k=2 Blocking</h3>

    <div class="highlight-box">
      <h4>Doubling Unit Cell</h4>
      <p>
        For k = 2 (pairing neighboring sites), the transformation is:
      </p>
      <div class="equation">
        Original: |ψ⟩ = ∑ Tr[A^{i₁} A^{i₂} A^{i₃} A^{i₄} ···] |i₁i₂i₃i₄···⟩

        Blocked:  |ψ⟩ = ∑ Tr[Ã^{i₁i₂} Ã^{i₃i₄} ···] |i₁i₂⟩|i₃i₄⟩···
      </div>
      <p>
        where Ã^{ij} = A^i A^j (matrix product of two original tensors).
      </p>
      <p>
        <strong>Physical interpretation:</strong> We're viewing the system at twice the lattice spacing, with each "site" containing two original spins.
      </p>
    </div>

    <h2>RG Fixed Points</h2>

    <p>
      A state is at an RG <strong>fixed point</strong> if the blocking transformation leaves it invariant (up to rescaling).
    </p>

    <div class="info-box">
      <h3>Definition of RG Fixed Point</h3>
      <p>
        An MPS with tensor A^i is an RG fixed point if, after k-blocking:
      </p>
      <div class="equation">
        Ã^{i₁...i_k} = A^{i₁}···A^{i_k} ∼ A^{I}
      </div>
      <p>
        where I = (i₁, ..., i_k) is the combined index, and ∼ means "equal up to gauge transformation."
      </p>
      <p>
        <strong>Physical meaning:</strong> The state looks the same at all length scales—it's scale-invariant!
      </p>
    </div>

    <h3>Example 1: Product States (Trivial Fixed Point)</h3>

    <div class="highlight-box">
      <h4>Product State is RG Fixed Point</h4>
      <p>
        For a product state |ψ⟩ = |φ⟩^⊗N with A^0 = [α], A^1 = [β] (χ = 1):
      </p>
      <div class="equation">
        Ã^{i₁i₂} = A^{i₁} A^{i₂} = [α^{1-i₁}β^{i₁}] · [α^{1-i₂}β^{i₂}] = [α^{2-i₁-i₂}β^{i₁+i₂}]
      </div>
      <p>
        This is again a product state with the same structure! Product states are RG fixed points.
      </p>
      <p>
        <strong>Universality class:</strong> "Trivial phase" with no correlations.
      </p>
    </div>

    <h3>Example 2: AKLT State (Gapped Fixed Point)</h3>

    <div class="highlight-box">
      <h4>Gapped Phase RG Flow</h4>
      <p>
        The AKLT state is NOT an RG fixed point. Under blocking:
      </p>
      <ul>
        <li>Original: spin-1 chain with χ = 2</li>
        <li>After k=2 blocking: spin-3 chain (d = 7) with χ = 2</li>
        <li>Physical dimension grows: d → d² → d⁴ → ...</li>
        <li>But bond dimension stays χ = 2</li>
      </ul>
      <p>
        <strong>RG flow:</strong> The state flows to a product state fixed point as we iterate blocking. This is characteristic of gapped phases with finite correlation length ξ:
      </p>
      <div class="equation">
        After L ≫ ξ blocking steps, state ≈ product state
      </div>
    </div>

    <h3>Example 3: Critical Systems (Non-Trivial Fixed Points)</h3>

    <div class="highlight-box">
      <h4>Quantum Critical Points</h4>
      <p>
        At a quantum critical point described by conformal field theory (CFT), the state can be an RG fixed point:
      </p>
      <ul>
        <li>Scale-invariant: no characteristic length scale</li>
        <li>Under blocking, state maps to itself (in appropriate sense)</li>
        <li>Requires χ → ∞ for exact fixed point</li>
        <li>For finite χ, RG flow is slow (marginal)</li>
      </ul>
      <p>
        <strong>Example:</strong> Ground state of critical transverse-field Ising model at h_c = 1.
      </p>
    </div>

    <h2>RG and Transfer Matrix</h2>

    <div class="info-box">
      <h3>Transfer Matrix Under RG</h3>
      <p>
        The transfer matrix transforms under k-blocking as:
      </p>
      <div class="equation">
        E = ∑_i A^i ⊗ (A^i)*   →   Ẽ = ∑_{i₁...i_k} Ã^{i₁...i_k} ⊗ (Ã^{i₁...i_k})*
      </div>
      <p>
        Since Ã^{i₁...i_k} = A^{i₁}···A^{i_k}, we have:
      </p>
      <div class="equation">
        Ẽ = E^k
      </div>
      <p>
        (k-fold matrix multiplication!)
      </p>
      <p>
        <strong>Eigenvalues transform as:</strong>
      </p>
      <div class="equation">
        λ̃_j = λ_j^k
      </div>
      <p>
        <strong>Correlation length transforms as:</strong>
      </p>
      <div class="equation">
        ξ̃ = ξ/k
      </div>
    </div>

    <h3>Physical Interpretation</h3>

    <div class="highlight-box">
      <h4>Correlation Length and RG Flow</h4>
      <p>
        The transformation ξ̃ = ξ/k reflects:
      </p>
      <ul>
        <li><strong>Gapped phase (ξ finite):</strong> Under repeated RG, ξ̃ → 0, flow to product state</li>
        <li><strong>Critical point (ξ = ∞):</strong> ξ̃ = ∞ remains infinite, fixed point</li>
        <li><strong>RG trajectory:</strong> Gapped states flow away from criticality</li>
      </ul>
      <p>
        This explains why:
      </p>
      <ul>
        <li>Gapped phases are stable (robust to perturbations)</li>
        <li>Critical points are unstable (fine-tuning required)</li>
        <li>Phase transitions occur at special points in parameter space</li>
      </ul>
    </div>

    <h2>Truncation and Approximate RG</h2>

    <p>
      Simple blocking increases the physical dimension exponentially (d → d^k), which is impractical. We need truncation to keep computations tractable.
    </p>

    <div class="info-box">
      <h3>Variational RG with Truncation</h3>
      <p>
        <strong>Idea:</strong> After blocking, project back to smaller physical dimension d' < d^k while preserving the most important correlations.
      </p>
      <p>
        <strong>Algorithm:</strong>
      </p>
      <ol>
        <li>Block k sites: d → d^k</li>
        <li>Compute reduced density matrix for super-site</li>
        <li>Keep d' eigenstates with largest eigenvalues</li>
        <li>Project blocked MPS onto this d'-dimensional subspace</li>
      </ol>
      <p>
        <strong>Result:</strong> Approximate RG that keeps physical dimension manageable.
      </p>
    </div>

    <h3>Limitations of MPS RG</h3>

    <div class="highlight-box">
      <h4>Why MPS RG Has Issues</h4>
      <p>
        While blocking is simple, it has drawbacks:
      </p>
      <ul>
        <li><strong>Entanglement growth:</strong> Blocking can increase entanglement, requiring larger χ</li>
        <li><strong>Not causal:</strong> Doesn't preserve causal structure (important for dynamics)</li>
        <li><strong>Artifacts:</strong> Truncation introduces errors that accumulate</li>
        <li><strong>Critical systems:</strong> Poorly handles logarithmic entanglement growth</li>
      </ul>
      <p>
        <strong>Solution:</strong> Multi-scale Entanglement Renormalization Ansatz (MERA) addresses these issues by including disentanglers.
      </p>
    </div>

    <h2>MERA Preview</h2>

    <div class="info-box">
      <h3>Beyond MPS: MERA</h3>
      <p>
        MERA improves on MPS RG by adding <strong>disentanglers</strong>:
      </p>
      <ol>
        <li><strong>Disentangle:</strong> Apply local unitary to remove short-range entanglement</li>
        <li><strong>Coarse-grain:</strong> Block sites (isometry, not just grouping)</li>
        <li><strong>Repeat:</strong> Build a tree structure with logarithmic depth</li>
      </ol>
      <p>
        <strong>Advantages:</strong>
      </p>
      <ul>
        <li>Handles critical systems efficiently (χ constant even for critical states)</li>
        <li>Entanglement entropy scales correctly: S ~ log L</li>
        <li>Reveals scale-invariant structure explicitly</li>
        <li>Suitable for holographic interpretations (AdS/CFT connection)</li>
      </ul>
      <p>
        While MERA is beyond the scope of this chapter, it represents the natural evolution of MPS ideas to handle criticality.
      </p>
    </div>

    <h2>RG and Phase Diagrams</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>RG Fixed Point</th>
            <th>RG Flow</th>
            <th>Stability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trivial (product)</td>
            <td>Product state (χ=1)</td>
            <td>Attracts gapped states</td>
            <td>Stable</td>
          </tr>
          <tr>
            <td>Gapped (e.g., AKLT)</td>
            <td>None (flows to product)</td>
            <td>ξ̃ = ξ/k → 0</td>
            <td>Stable phase</td>
          </tr>
          <tr>
            <td>Critical (CFT)</td>
            <td>CFT fixed point</td>
            <td>Stays at fixed point</td>
            <td>Unstable (fine-tuned)</td>
          </tr>
          <tr>
            <td>First-order transition</td>
            <td>None</td>
            <td>Discontinuous jump</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Practical Implementation</h2>

    <div class="highlight-box">
      <h4>Computing RG Flow Numerically</h4>
      <p>
        <strong>Algorithm for k-step blocking:</strong>
      </p>
      <ol>
        <li><strong>Input:</strong> MPS with tensors {A^i}, bond dimension χ</li>
        <li><strong>Form blocked tensor:</strong> Ã^{i₁...i_k}_{αβ} = (A^{i₁}···A^{i_k})_{αβ}</li>
        <li><strong>Reshape:</strong> View as MPS on N/k sites with physical dimension d^k</li>
        <li><strong>Optional truncation:</strong> Project back to effective dimension d' using SVD</li>
        <li><strong>Output:</strong> Renormalized MPS</li>
      </ol>
      <p>
        <strong>Complexity:</strong> O(k χ³ d^k) per super-site.
      </p>
    </div>

    <h2>Connection to DMRG</h2>

    <div class="info-box">
      <h3>DMRG as Reverse RG</h3>
      <p>
        DMRG can be viewed as the "inverse" of the RG transformation:
      </p>
      <ul>
        <li><strong>RG (blocking):</strong> Coarse-grain from fine to coarse scales</li>
        <li><strong>DMRG (sweeping):</strong> Build up from local to global, optimizing at each scale</li>
      </ul>
      <p>
        White's original DMRG (1992) was explicitly formulated as a real-space RG procedure, where:
      </p>
      <ul>
        <li>System is grown site-by-site</li>
        <li>Environment is truncated to keep χ states (density matrix eigenvalues)</li>
        <li>This is equivalent to reverse blocking with optimal truncation</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>Blocking RG:</strong> Group k sites → super-sites with d → d^k, χ unchanged</li>
        <li><strong>Transfer matrix:</strong> E → E^k, eigenvalues λ → λ^k</li>
        <li><strong>Correlation length:</strong> ξ → ξ/k (shrinks under coarse-graining)</li>
        <li><strong>Fixed points:</strong>
          <ul>
            <li>Product states (trivial)</li>
            <li>Critical states (non-trivial, require χ → ∞)</li>
          </ul>
        </li>
        <li><strong>Gapped phases:</strong> Flow to product state fixed point</li>
        <li><strong>Critical points:</strong> Scale-invariant fixed points</li>
        <li><strong>Truncation:</strong> Necessary for practical calculations, introduces errors</li>
        <li><strong>MERA:</strong> Improved RG scheme with disentanglers for critical systems</li>
        <li><strong>DMRG connection:</strong> Reverse RG interpretation</li>
      </ul>
    </div>

    <p>
      The RG transformation provides a powerful lens for understanding MPS beyond their role as variational ansatze. It reveals how gapped states flow to simple fixed points, explains the instability of critical points, and motivates the development of more sophisticated tensor network structures like MERA. The connection between entanglement structure, RG flow, and phase structure is a central theme in modern quantum many-body physics.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
