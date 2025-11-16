<template>
  <div class="section-content">
    <h1>8.2.1 Definition and Examples</h1>

    <p>
      We now present the formal definition of Matrix Product States (MPS), which provides a systematic way to represent quantum states of one-dimensional systems. The MPS ansatz has proven to be remarkably successful in capturing the physics of gapped systems and critical systems with moderate entanglement.
    </p>

    <h2>Formal Definition</h2>

    <div class="info-box">
      <h3>Matrix Product State (MPS)</h3>
      <p>
        A quantum state |ψ⟩ of N spin-1/2 particles (or more generally, d-level systems) is represented as a Matrix Product State if it can be written in the form:
      </p>
      <div class="equation">
        |ψ⟩ = ∑_{i₁,i₂,...,i_N=1}^d Tr[A^{i₁} A^{i₂} ··· A^{i_N}] |i₁i₂...i_N⟩
      </div>
      <p>
        where each A^{iⱼ} is a χ × χ matrix (the bond dimension), and the trace is taken over the matrix indices. The physical indices i₁, ..., i_N range from 1 to d (the local Hilbert space dimension).
      </p>
    </div>

    <h3>Open Boundary Conditions</h3>

    <p>
      For systems with open boundary conditions (OBC), we don't take a trace but instead use boundary vectors:
    </p>

    <div class="equation">
      |ψ⟩ = ∑_{i₁,...,i_N} v_L^T A^{i₁} A^{i₂} ··· A^{i_N} v_R |i₁i₂...i_N⟩
    </div>

    <p>
      where v_L is a χ-dimensional column vector (left boundary), v_R is a χ-dimensional column vector (right boundary), and each A^{iⱼ} is a χ × χ matrix. Often we choose v_L = (1, 0, ..., 0)^T and v_R = (1, 0, ..., 0)^T for simplicity, which means we only keep the (1,1) matrix element:
    </p>

    <div class="equation">
      |ψ⟩ = ∑_{i₁,...,i_N} [A^{i₁} A^{i₂} ··· A^{i_N}]_{11} |i₁i₂...i_N⟩
    </div>

    <h3>Graphical Representation</h3>

    <div class="info-box">
      <h3>Tensor Network Diagram for MPS</h3>
      <p>
        The MPS structure can be visualized using tensor network diagrams:
      </p>
      <ul>
        <li><strong>Physical indices (vertical):</strong> Represent the local quantum state at each site</li>
        <li><strong>Bond indices (horizontal):</strong> Represent the entanglement structure between sites</li>
        <li><strong>Bond dimension χ:</strong> Controls the amount of entanglement that can be represented</li>
      </ul>
      <div class="equation">
        |ψ⟩:  [A¹]--[A²]--[A³]--···--[A^N]
               |     |     |          |
              i₁    i₂    i₃         i_N
      </div>
      <p>
        For open boundary conditions, the leftmost and rightmost tensors have only one bond index.
      </p>
    </div>

    <h3>Key Parameters</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Symbol</th>
            <th>Meaning</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Physical dimension</td>
            <td>d</td>
            <td>Local Hilbert space size</td>
            <td>d=2 for spin-1/2, d=3 for spin-1</td>
          </tr>
          <tr>
            <td>Bond dimension</td>
            <td>χ</td>
            <td>Virtual bond space size</td>
            <td>Controls entanglement capacity</td>
          </tr>
          <tr>
            <td>System size</td>
            <td>N</td>
            <td>Number of sites</td>
            <td>Total Hilbert space is d^N</td>
          </tr>
          <tr>
            <td>Number of parameters</td>
            <td>-</td>
            <td>~Ndχ²</td>
            <td>Polynomial scaling vs exponential</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Basic Examples</h2>

    <h3>Example 1: Product States</h3>

    <div class="highlight-box">
      <h4>Factorized State</h4>
      <p>
        Consider the simplest case: a product state where each site is in an independent state:
      </p>
      <div class="equation">
        |ψ⟩ = |φ₁⟩ ⊗ |φ₂⟩ ⊗ ··· ⊗ |φ_N⟩
      </div>
      <p>
        If we write |φⱼ⟩ = α_j|0⟩ + β_j|1⟩, this can be represented as an MPS with bond dimension χ = 1:
      </p>
      <div class="equation">
        A^0_j = [α_j],   A^1_j = [β_j]
      </div>
      <p>
        Since each "matrix" is just a 1×1 scalar, the trace becomes ordinary multiplication:
      </p>
      <div class="equation">
        Tr[A^{i₁}_1 A^{i₂}_2 ··· A^{i_N}_N] = α₁^{1-i₁}β₁^{i₁} · α₂^{1-i₂}β₂^{i₂} ··· α_N^{1-i_N}β_N^{i_N}
      </div>
      <p>
        <strong>Conclusion:</strong> Product states require only χ = 1, reflecting their complete lack of entanglement.
      </p>
    </div>

    <h3>Example 2: GHZ State</h3>

    <div class="highlight-box">
      <h4>Greenberger-Horne-Zeilinger State</h4>
      <p>
        The GHZ state is a maximally entangled state:
      </p>
      <div class="equation">
        |GHZ⟩ = (|00...0⟩ + |11...1⟩) / √2
      </div>
      <p>
        This can be represented with bond dimension χ = 2 using:
      </p>
      <div class="equation">
        A^0 = [1  0]     A^1 = [0  0]
              [0  0]           [0  1]
      </div>
      <p>
        Let's verify this works for N = 3:
      </p>
      <div class="equation">
        Tr[A^{i₁} A^{i₂} A^{i₃}] = {
          1  if i₁=i₂=i₃=0
          1  if i₁=i₂=i₃=1
          0  otherwise
        }
      </div>
      <p>
        With proper normalization (v_L = v_R = (1/√2, 1/√2)^T), we recover the GHZ state.
      </p>
      <p>
        <strong>Key insight:</strong> Despite being maximally entangled, GHZ requires only χ = 2, because the entanglement has a special structure.
      </p>
    </div>

    <h3>Example 3: W State</h3>

    <div class="highlight-box">
      <h4>W State (Superposition of Single Excitations)</h4>
      <p>
        The W state for N qubits is:
      </p>
      <div class="equation">
        |W⟩ = (|100...0⟩ + |010...0⟩ + ··· + |00...01⟩) / √N
      </div>
      <p>
        This requires bond dimension χ = 2. For site j, we use:
      </p>
      <div class="equation">
        A^0_j = [1      0    ]     A^1_j = [0           0]
                [0  √(j-1)/j ]           [1/√j        0]
      </div>
      <p>
        The matrices are designed to:
      </p>
      <ul>
        <li>Track whether an excitation has already appeared (using the 2×2 structure)</li>
        <li>Ensure proper normalization (using the √j factors)</li>
        <li>Propagate the "excitation flag" through the chain</li>
      </ul>
    </div>

    <h3>Example 4: AKLT State</h3>

    <div class="highlight-box">
      <h4>Affleck-Kennedy-Lieb-Tasaki State</h4>
      <p>
        The AKLT state is the exact ground state of the AKLT Hamiltonian on a spin-1 chain. It's one of the most famous MPS examples in condensed matter physics.
      </p>
      <p>
        The construction uses the following idea: place two spin-1/2 particles at each site and project onto the spin-1 subspace, then form singlets between neighboring sites.
      </p>
      <div class="equation">
        For spin-1 (d=3), bond dimension χ=2:

        A^{-1} = [0   1]      A^0 = 1/√2 [ 1   0]      A^{+1} = [0   0]
                 [0   0]                 [ 0  -1]               [1   0]
      </div>
      <p>
        These matrices satisfy the commutation relations of SU(2) and produce a state with:
      </p>
      <ul>
        <li><strong>Finite correlation length:</strong> Exponential decay of correlations</li>
        <li><strong>Unique ground state (OBC):</strong> With edge states</li>
        <li><strong>Gapped excitations:</strong> Haldane gap</li>
        <li><strong>Hidden antiferromagnetic order:</strong> String order parameter</li>
      </ul>
      <p>
        <strong>Physical significance:</strong> The AKLT state demonstrates that gapped 1D systems can be exactly represented by MPS with finite bond dimension.
      </p>
    </div>

    <h2>Connection to Schmidt Decomposition</h2>

    <p>
      The MPS structure is intimately connected to the Schmidt decomposition across any bipartition of the chain.
    </p>

    <div class="info-box">
      <h3>Schmidt Decomposition and MPS</h3>
      <p>
        Consider a bipartition of the chain into left (sites 1 to k) and right (sites k+1 to N):
      </p>
      <div class="equation">
        |ψ⟩ = ∑_{α=1}^{χ_k} λ_α |L_α⟩ ⊗ |R_α⟩
      </div>
      <p>
        where λ_α are the Schmidt coefficients and χ_k ≤ χ is the Schmidt rank.
      </p>
      <p>
        <strong>Key observation:</strong> The bond dimension χ at the bond between sites k and k+1 must be at least as large as the Schmidt rank χ_k. This is why:
      </p>
      <ul>
        <li>Product states need χ = 1 (Schmidt rank = 1)</li>
        <li>States with limited entanglement need small χ</li>
        <li>Required χ grows with entanglement entropy: χ ≥ exp(S)</li>
      </ul>
    </div>

    <h3>Entanglement Structure</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>State Type</th>
            <th>Schmidt Rank</th>
            <th>Bond Dimension χ</th>
            <th>Entanglement Entropy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product state</td>
            <td>1</td>
            <td>1</td>
            <td>S = 0</td>
          </tr>
          <tr>
            <td>AKLT state</td>
            <td>2</td>
            <td>2</td>
            <td>S = log 2 (saturated)</td>
          </tr>
          <tr>
            <td>Critical system (CFT)</td>
            <td>~exp(c log L)</td>
            <td>~L^c</td>
            <td>S ~ (c/3) log L</td>
          </tr>
          <tr>
            <td>Random state</td>
            <td>~2^(N/2)</td>
            <td>Exponential</td>
            <td>S ~ N/2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Canonical Forms Preview</h2>

    <p>
      While we'll discuss this in detail in section 8.2.8, it's worth noting that MPS representations are not unique. The same quantum state can be represented by different sets of matrices A^i.
    </p>

    <div class="info-box">
      <h3>Gauge Freedom</h3>
      <p>
        If we insert any invertible matrix X and its inverse X⁻¹ between adjacent sites:
      </p>
      <div class="equation">
        A^{iⱼ} → Ã^{iⱼ} = X⁻¹ A^{iⱼ} X
      </div>
      <p>
        the physical state |ψ⟩ remains unchanged (the X matrices cancel in the trace). This gauge freedom can be used to bring the MPS into special canonical forms that simplify calculations.
      </p>
    </div>

    <h2>Translational Invariance</h2>

    <p>
      For infinite systems or systems with periodic boundary conditions, we often use translationally invariant MPS where all sites use the same matrices:
    </p>

    <div class="equation">
      A^i_j = A^i  for all sites j
    </div>

    <div class="highlight-box">
      <h4>Thermodynamic Limit</h4>
      <p>
        In the thermodynamic limit (N → ∞), translationally invariant MPS are characterized by:
      </p>
      <ul>
        <li><strong>Transfer matrix:</strong> E = ∑_i A^i ⊗ (A^i)*</li>
        <li><strong>Correlation length:</strong> ξ = -1/log|λ₂/λ₁| where λ₁, λ₂ are the two largest eigenvalues of E</li>
        <li><strong>Ground state:</strong> Corresponds to the largest eigenvalue of the transfer matrix</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>MPS ansatz:</strong> Represents states using products of matrices with polynomial parameters Ndχ²</li>
        <li><strong>Bond dimension χ:</strong> Controls representational power; must satisfy χ ≥ Schmidt rank</li>
        <li><strong>Product states:</strong> χ = 1 (no entanglement)</li>
        <li><strong>Gapped states:</strong> Finite χ sufficient (area law)</li>
        <li><strong>Critical states:</strong> χ grows polynomially with system size</li>
        <li><strong>Graphical notation:</strong> Provides intuitive visualization of tensor contractions</li>
        <li><strong>Gauge freedom:</strong> Same state can have different MPS representations</li>
      </ul>
    </div>

    <p>
      In the following sections, we'll develop the mathematical machinery to compute physical observables, understand the role of correlation length, prove the area law, and explore the gauge structure of MPS in detail.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_2_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
