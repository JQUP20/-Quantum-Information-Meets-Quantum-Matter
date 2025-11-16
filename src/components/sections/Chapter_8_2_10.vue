<template>
  <div class="section-content">
    <h1>8.2.10 Parent Hamiltonian</h1>

    <p>
      Given an MPS, can we find a local Hamiltonian for which it is the ground state? The answer is remarkably elegant: every MPS has a "parent Hamiltonian"—a nearest-neighbor Hamiltonian that annihilates the MPS. This construction reveals deep connections between variational ansatze and physical models.
    </p>

    <h2>The Parent Hamiltonian Construction</h2>

    <div class="info-box">
      <h3>Definition</h3>
      <p>
        For an MPS |ψ⟩ with bond dimension χ, the <strong>parent Hamiltonian</strong> is a local Hamiltonian H = ∑_j h_{j,j+1} such that:
      </p>
      <ul>
        <li>H|ψ⟩ = 0 (the MPS is a zero-energy eigenstate)</li>
        <li>Each local term h_{j,j+1} acts only on sites j and j+1</li>
        <li>h_{j,j+1} ≥ 0 (positive semidefinite)</li>
      </ul>
      <p>
        If the MPS is injective, then |ψ⟩ is the <em>unique</em> ground state with a spectral gap.
      </p>
    </div>

    <h3>Construction via Nullspace Projection</h3>

    <div class="highlight-box">
      <h4>Algorithm</h4>
      <p>
        <strong>Step 1:</strong> For each bond (j, j+1), consider the reduced density matrix ρ_{j,j+1} of |ψ⟩ on those two sites.
      </p>
      <p>
        <strong>Step 2:</strong> The support of ρ_{j,j+1} is a subspace of ℂ^d ⊗ ℂ^d. Generically, this has dimension χ² (at most χ² Schmidt values can be nonzero).
      </p>
      <p>
        <strong>Step 3:</strong> Define the projector onto the orthogonal complement:
      </p>
      <div class="equation">
        h_{j,j+1} = I_{d²} - P_{support(ρ_{j,j+1})}
      </div>
      <p>
        This projects onto states orthogonal to the MPS support on sites (j,j+1).
      </p>
      <p>
        <strong>Step 4:</strong> The parent Hamiltonian is:
      </p>
      <div class="equation">
        H = ∑_{j=1}^{N-1} h_{j,j+1}
      </div>
    </div>

    <h3>Why It Works</h3>

    <div class="info-box">
      <h3>Key Properties</h3>
      <p>
        <strong>1. Annihilation:</strong> Since |ψ⟩ has support only on the subspace preserved by P, we have h_{j,j+1}|ψ⟩ = 0 for all j, thus H|ψ⟩ = 0.
      </p>
      <p>
        <strong>2. Positive semidefinite:</strong> Each h_{j,j+1} is a projector, so h_{j,j+1} ≥ 0.
      </p>
      <p>
        <strong>3. Frustration-free:</strong> Since H|ψ⟩ = 0 and H = ∑_j h_j with h_j ≥ 0, we have h_j|ψ⟩ = 0 for every j individually. The ground state minimizes each term separately (no frustration).
      </p>
      <p>
        <strong>4. Uniqueness (if injective):</strong> For injective MPS, |ψ⟩ is the unique state satisfying h_j|ψ⟩ = 0 for all j.
      </p>
    </div>

    <h2>Example: AKLT State and Hamiltonian</h2>

    <p>
      The AKLT model provides the most famous example of a parent Hamiltonian.
    </p>

    <div class="highlight-box">
      <h4>AKLT Hamiltonian</h4>
      <p>
        The AKLT Hamiltonian on a spin-1 chain is:
      </p>
      <div class="equation">
        H_AKLT = ∑_j [S_j · S_{j+1} + (1/3)(S_j · S_{j+1})²]
      </div>
      <p>
        where S_j = (S^x_j, S^y_j, S^z_j) is the spin-1 operator at site j.
      </p>
      <p>
        <strong>Alternative form:</strong> This can be rewritten as a projector:
      </p>
      <div class="equation">
        h_{j,j+1} = (1/2)P_{S=2} = (1/2)[projector onto total spin S=2 subspace]
      </div>
      <p>
        <strong>Physical interpretation:</strong>
      </p>
      <ul>
        <li>Two spin-1s combine to form S = 0, 1, or 2</li>
        <li>The AKLT Hamiltonian penalizes S = 2 (highest spin)</li>
        <li>The AKLT state is a superposition of S = 0 and S = 1 configurations on each bond</li>
        <li>Satisfies h_{j,j+1}|ψ_AKLT⟩ = 0</li>
      </ul>
    </div>

    <h3>AKLT Support Subspace</h3>

    <div class="highlight-box">
      <p>
        On two neighboring sites (spin-1 each, d = 3), the Hilbert space is ℂ^9. The total spin decomposes as:
      </p>
      <div class="equation">
        1 ⊗ 1 = 0 ⊕ 1 ⊕ 2
      </div>
      <p>
        with dimensions 1 + 3 + 5 = 9. The AKLT state has support only on S = 0 and S = 1 (dimension 1 + 3 = 4 = χ²).
      </p>
      <p>
        Thus the parent Hamiltonian projects onto the S = 2 subspace (dimension 5):
      </p>
      <div class="equation">
        h_{j,j+1} = P_{S=2}
      </div>
    </div>

    <h2>Frustration-Free Property</h2>

    <div class="info-box">
      <h3>Definition and Implications</h3>
      <p>
        A Hamiltonian H = ∑_j h_j is <strong>frustration-free</strong> if there exists a state |ψ⟩ such that:
      </p>
      <div class="equation">
        h_j |ψ⟩ = 0  for all j
      </div>
      <p>
        <strong>Implications:</strong>
      </p>
      <ul>
        <li>The ground state minimizes each local term individually</li>
        <li>No "competition" between different terms (unlike frustrated magnets)</li>
        <li>Ground state energy is exactly 0 (if terms are normalized correctly)</li>
        <li>Simplifies theoretical analysis (many rigorous results)</li>
      </ul>
      <p>
        <strong>Parent Hamiltonians are always frustration-free</strong> by construction!
      </p>
    </div>

    <h2>Uniqueness and Gap</h2>

    <div class="info-box">
      <h3>Theorem: Uniqueness for Injective MPS</h3>
      <p>
        If an MPS |ψ⟩ with bond dimension χ is injective, then:
      </p>
      <ol>
        <li><strong>Unique ground state:</strong> |ψ⟩ is the unique state (with OBC) satisfying H|ψ⟩ = 0</li>
        <li><strong>Spectral gap:</strong> The first excited state has energy E₁ > 0 (there is a gap Δ = E₁ - E₀ = E₁)</li>
        <li><strong>Correlation length:</strong> ξ ~ 1/Δ (inversely proportional to gap)</li>
      </ol>
      <p>
        <strong>Proof sketch:</strong> Injectivity ensures that the nullspace of H is one-dimensional. The gap can be bounded using the injectivity length.
      </p>
    </div>

    <h3>Non-Injective MPS</h3>

    <div class="highlight-box">
      <h4>Degenerate Ground States</h4>
      <p>
        For non-injective MPS (like GHZ states), the parent Hamiltonian can have:
      </p>
      <ul>
        <li><strong>Degeneracy:</strong> Multiple ground states with H|ψᵢ⟩ = 0</li>
        <li><strong>Gapless excitations:</strong> Possible zero-energy modes</li>
        <li><strong>Long-range order:</strong> Spontaneous symmetry breaking or topological degeneracy</li>
      </ul>
      <p>
        <strong>Example:</strong> GHZ parent Hamiltonian has two degenerate ground states: |00...0⟩ and |11...1⟩.
      </p>
    </div>

    <h2>Explicit Construction Formula</h2>

    <div class="highlight-box">
      <h4>Matrix Formula</h4>
      <p>
        Given MPS tensors {A^i}, the local term h_{j,j+1} can be computed as:
      </p>
      <p>
        <strong>Step 1:</strong> Form the "transfer matrix" on two sites:
      </p>
      <div class="equation">
        M^{i,i'}_{αβ,α'β'} = (A^i)_{αα'} (A^{i'})_{α'β'}
      </div>
      <p>
        <strong>Step 2:</strong> Compute the reduced density matrix:
      </p>
      <div class="equation">
        ρ_{i,i'} = ∑_{α,β} [E^{∞}_L]_{αα} M^{i,i'} [E^{∞}_R]_{ββ}
      </div>
      <p>
        where E^{∞}_L and E^{∞}_R are the left/right fixed points of the transfer matrix.
      </p>
      <p>
        <strong>Step 3:</strong> The parent Hamiltonian term is:
      </p>
      <div class="equation">
        h = I - ∑_{i,i'} |i,i'⟩⟨i,i'| ρ_{i,i'} / Tr[ρ_{i,i'}]
      </div>
    </div>

    <h2>Examples Beyond AKLT</h2>

    <h3>Example 1: Product State Parent Hamiltonian</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>MPS</th>
            <th>Parent H</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>|0⟩^⊗N</td>
            <td>A^0=[1], A^1=[0]</td>
            <td>h_j = |1⟩⟨1|_j (Ising in field)</td>
          </tr>
          <tr>
            <td>|+⟩^⊗N</td>
            <td>A^0=[1], A^1=[1]</td>
            <td>h_j = σ^x_j (transverse field)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Example 2: Cluster State</h3>

    <div class="highlight-box">
      <h4>1D Cluster State</h4>
      <p>
        The 1D cluster state has parent Hamiltonian:
      </p>
      <div class="equation">
        H = -∑_j σ^z_{j-1} σ^x_j σ^z_{j+1}
      </div>
      <p>
        This is a three-body interaction! It arises because the cluster state MPS has a specific entanglement structure:
      </p>
      <ul>
        <li>Bond dimension χ = 2</li>
        <li>Unique ground state (injective)</li>
        <li>Short correlation length</li>
        <li>SPT order under ℤ₂ × ℤ₂ symmetry</li>
      </ul>
    </div>

    <h2>Connection to DMRG</h2>

    <div class="info-box">
      <h3>DMRG as Inverse Problem</h3>
      <p>
        The parent Hamiltonian construction is the "inverse" of DMRG:
      </p>
      <ul>
        <li><strong>DMRG:</strong> Given H, find MPS |ψ⟩ that minimizes ⟨ψ|H|ψ⟩</li>
        <li><strong>Parent H:</strong> Given MPS |ψ⟩, construct H such that H|ψ⟩ = 0</li>
      </ul>
      <p>
        In practice:
      </p>
      <ul>
        <li>DMRG on a "natural" Hamiltonian yields an MPS approximation</li>
        <li>The exact ground state may not be MPS with finite χ</li>
        <li>But every MPS from DMRG has a parent Hamiltonian (may be unphysical)</li>
      </ul>
    </div>

    <h2>Higher-Range Interactions</h2>

    <div class="highlight-box">
      <h4>Longer-Range Parent Hamiltonians</h4>
      <p>
        While we've focused on nearest-neighbor H, parent Hamiltonians can have longer range:
      </p>
      <ul>
        <li><strong>k-range:</strong> Terms h_{j,...,j+k-1} acting on k consecutive sites</li>
        <li><strong>Theorem:</strong> Every MPS has a parent Hamiltonian with range at most k ~ χ²/d</li>
        <li><strong>Trade-off:</strong> Can reduce range by increasing bond dimension</li>
      </ul>
      <p>
        Example: Some MPS require k = 3 or higher for nearest-neighbor H to be impossible.
      </p>
    </div>

    <h2>Physical Hamiltonians vs Parent Hamiltonians</h2>

    <div class="info-box">
      <h3>When Do They Match?</h3>
      <p>
        <strong>Question:</strong> For a given physical Hamiltonian H (like Heisenberg model), is its ground state the same as the parent Hamiltonian of some MPS?
      </p>
      <p>
        <strong>Answer:</strong> Only in special cases!
      </p>
      <ul>
        <li><strong>AKLT:</strong> Yes, exact match</li>
        <li><strong>Heisenberg spin-1/2:</strong> No, ground state not exact MPS with finite χ</li>
        <li><strong>Transverse Ising at critical point:</strong> No, requires χ → ∞</li>
      </ul>
      <p>
        However, MPS can <em>approximate</em> any gapped ground state arbitrarily well with large enough χ.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>Parent Hamiltonian:</strong> Local H such that H|ψ⟩ = 0 for given MPS |ψ⟩</li>
        <li><strong>Construction:</strong> Project onto complement of MPS support on each bond</li>
        <li><strong>Frustration-free:</strong> h_j|ψ⟩ = 0 for each local term h_j individually</li>
        <li><strong>Uniqueness:</strong> For injective MPS, |ψ⟩ is unique ground state with gap</li>
        <li><strong>AKLT example:</strong> Prototypical parent Hamiltonian construction</li>
        <li><strong>Gap:</strong> Spectral gap Δ related to correlation length ξ ~ 1/Δ</li>
        <li><strong>Range:</strong> Generally nearest-neighbor or short-range</li>
        <li><strong>DMRG connection:</strong> Parent H is inverse problem to DMRG</li>
        <li><strong>Not all physical H:</strong> Most physical models don't have exact MPS ground states</li>
      </ul>
    </div>

    <p>
      The parent Hamiltonian construction demonstrates the remarkable duality between variational wave functions (MPS) and local Hamiltonians. It guarantees that every MPS describes the ground state of some local, gapped Hamiltonian, establishing MPS as the natural variational class for gapped quantum phases. This connection has been instrumental in classifying symmetry-protected topological phases and understanding the relationship between entanglement structure and energy gap.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_2_10'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
