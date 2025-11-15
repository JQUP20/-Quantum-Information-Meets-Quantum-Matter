<template>
  <div class="section-content">
    <h1>4.2 Many-Body Hilbert Space</h1>

    <h2>Structure of the N-Particle Hilbert Space</h2>
    <p>Understanding the mathematical structure of many-particle quantum systems requires careful treatment of tensor products, particle statistics, and the exponential growth of state spaces. This section provides the foundational framework for all subsequent discussions of local Hamiltonians and computational complexity.</p>

    <div class="highlight-box">
      <h3>Tensor Product Structure (Distinguishable Particles)</h3>
      <p>For N distinguishable particles (e.g., particles at fixed lattice sites, labeled atoms), each with a d-dimensional single-particle Hilbert space ℋ_single, the composite system lives in:</p>
      <div class="equation">
        ℋ_N = ℋ₁ ⊗ ℋ₂ ⊗ ... ⊗ ℋ_N = ⊗_{i=1}^N ℋ_i
      </div>

      <p><strong>Dimension:</strong></p>
      <div class="equation">
        dim(ℋ_N) = d^N
      </div>

      <p><strong>Canonical basis:</strong> If {|φ_α^(i)⟩} is an orthonormal basis for ℋ_i, then:</p>
      <div class="equation">
        {|φ_{α₁}^(1)⟩ ⊗ |φ_{α₂}^(2)⟩ ⊗ ... ⊗ |φ_{α_N}^(N)⟩ : α_i ∈ {1,...,d}}
      </div>
      <p>forms an orthonormal basis for ℋ_N with d^N elements.</p>
    </div>

    <div class="info-box">
      <h3>Example 1: Spin Chain</h3>
      <p>Consider N spin-1/2 particles on a 1D lattice:</p>

      <ul>
        <li><strong>Single-particle space:</strong> ℋ_i = ℂ² with basis {|↑⟩_i, |↓⟩_i}</li>
        <li><strong>Many-particle space:</strong> ℋ_N = (ℂ²)^⊗N</li>
        <li><strong>Dimension:</strong> 2^N</li>
        <li><strong>Basis states:</strong> |s₁ s₂ ... s_N⟩ where s_i ∈ {↑,↓}</li>
      </ul>

      <p><strong>General state:</strong></p>
      <div class="equation">
        |ψ⟩ = Σ_{s₁,...,s_N ∈ {↑,↓}} c_{s₁...s_N} |s₁⟩⊗|s₂⟩⊗...⊗|s_N⟩
      </div>

      <p>This requires 2^N complex amplitudes!</p>

      <p><strong>Example configuration for N=4:</strong></p>
      <div class="equation">
        |ψ⟩ = (1/2)|↑↑↑↑⟩ + (1/2)|↑↓↑↓⟩ + (1/√2)|↓↓↓↓⟩
      </div>
    </div>

    <h2>Identical Particles: The Role of Quantum Statistics</h2>

    <p>When particles are fundamentally indistinguishable (like electrons, photons, or atoms of the same species), quantum mechanics imposes a crucial constraint: the wavefunction must be either <strong>symmetric</strong> (bosons) or <strong>antisymmetric</strong> (fermions) under particle exchange.</p>

    <div class="highlight-box">
      <h3>Symmetrization Postulate</h3>

      <p>Let P_{ij} be the operator that exchanges particles i and j. For identical particles, the wavefunction must satisfy:</p>

      <div class="equation">
        P_{ij}|ψ⟩ = ±|ψ⟩
      </div>

      <ul>
        <li><strong>+ sign (Bosons):</strong> Integer spin (photons, ⁴He atoms, ⁸⁷Rb)</li>
        <li><strong>− sign (Fermions):</strong> Half-integer spin (electrons, protons, ⁶Li)</li>
      </ul>

      <p><strong>Spin-statistics theorem:</strong> This connection between spin and statistics is a deep consequence of quantum field theory and relativity.</p>
    </div>

    <div class="comparison-box">
      <h3>Detailed Comparison: Bosons vs Fermions</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Bosons</th>
          <th>Fermions</th>
        </tr>
        <tr>
          <td><strong>Exchange symmetry</strong></td>
          <td>Symmetric: P_{ij}|ψ⟩ = +|ψ⟩</td>
          <td>Antisymmetric: P_{ij}|ψ⟩ = −|ψ⟩</td>
        </tr>
        <tr>
          <td><strong>Two-particle state</strong></td>
          <td>(|ψ₁⟩⊗|ψ₂⟩ + |ψ₂⟩⊗|ψ₁⟩)/√2</td>
          <td>(|ψ₁⟩⊗|ψ₂⟩ − |ψ₂⟩⊗|ψ₁⟩)/√2</td>
        </tr>
        <tr>
          <td><strong>Pauli exclusion</strong></td>
          <td>Multiple particles can occupy same state</td>
          <td>No two particles in identical state</td>
        </tr>
        <tr>
          <td><strong>Hilbert space</strong></td>
          <td>Symmetric subspace Sym^N(ℋ)</td>
          <td>Antisymmetric subspace ∧^N(ℋ)</td>
        </tr>
        <tr>
          <td><strong>Dimension (d modes, N particles)</strong></td>
          <td>C(d+N-1, N) = (d+N-1)!/(N!(d-1)!)</td>
          <td>C(d, N) = d!/(N!(d-N)!)</td>
        </tr>
        <tr>
          <td><strong>Examples</strong></td>
          <td>Photons, ⁴He, Higgs boson, Cooper pairs</td>
          <td>Electrons, protons, neutrons, quarks</td>
        </tr>
        <tr>
          <td><strong>Consequences</strong></td>
          <td>Bose-Einstein condensation, laser, superfluidity</td>
          <td>Periodic table, stability of matter, degeneracy pressure</td>
        </tr>
      </table>
    </div>

    <h2>Occupation Number Representation (Second Quantization)</h2>

    <p>For identical particles, the <strong>occupation number representation</strong> (Fock space formalism) provides a natural and compact description.</p>

    <div class="note-box">
      <h3>Fock Space Construction</h3>

      <p>Instead of labeling particles 1, 2, ..., N, we specify how many particles occupy each single-particle state.</p>

      <p><strong>Single-particle basis:</strong> Let {|1⟩, |2⟩, ..., |d⟩} be orthonormal states (e.g., momentum modes, spatial orbitals).</p>

      <p><strong>Occupation number state:</strong></p>
      <div class="equation">
        |n₁, n₂, ..., n_d⟩
      </div>
      <p>where n_i = number of particles in mode i.</p>

      <p><strong>Constraint:</strong> Σ_i n_i = N (total particle number)</p>

      <ul>
        <li><strong>Bosons:</strong> n_i ∈ {0, 1, 2, 3, ...} (unbounded)</li>
        <li><strong>Fermions:</strong> n_i ∈ {0, 1} (Pauli exclusion!)</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Creation and Annihilation Operators</h3>

      <p><strong>Annihilation operator:</strong> a_i removes one particle from mode i</p>
      <p><strong>Creation operator:</strong> a_i† adds one particle to mode i</p>

      <p><strong>Action on occupation number states:</strong></p>
      <div class="equation">
        a_i|n₁, ..., n_i, ..., n_d⟩ = √(n_i) |n₁, ..., n_i−1, ..., n_d⟩
      </div>
      <div class="equation">
        a_i†|n₁, ..., n_i, ..., n_d⟩ = √(n_i + 1) |n₁, ..., n_i+1, ..., n_d⟩
      </div>

      <p><strong>Canonical commutation relations (CCR):</strong></p>

      <p><em>Bosons:</em></p>
      <div class="equation">
        [a_i, a_j†] = δ_{ij}, &nbsp;&nbsp; [a_i, a_j] = 0, &nbsp;&nbsp; [a_i†, a_j†] = 0
      </div>

      <p><em>Fermions (anticommutators):</em></p>
      <div class="equation">
        {c_i, c_j†} = δ_{ij}, &nbsp;&nbsp; {c_i, c_j} = 0, &nbsp;&nbsp; {c_i†, c_j†} = 0
      </div>

      <p><strong>Key difference:</strong> Fermionic operators <em>anticommute</em>, which automatically enforces Pauli exclusion:</p>
      <div class="equation">
        (c_i†)²|0⟩ = c_i† c_i†|0⟩ = −c_i† c_i†|0⟩ = 0
      </div>
    </div>

    <h2>Hilbert Space Dimensions</h2>

    <div class="highlight-box">
      <h3>Counting States</h3>

      <p><strong>Distinguishable particles:</strong> N particles, d modes</p>
      <div class="equation">
        dim = d^N
      </div>

      <p><strong>Bosons:</strong> N indistinguishable bosons, d modes</p>
      <div class="equation">
        dim = C(N + d − 1, N) = (N + d − 1)!/(N!(d − 1)!)
      </div>
      <p>(Stars and bars combinatorics)</p>

      <p><strong>Fermions:</strong> N indistinguishable fermions, d modes (requires N ≤ d)</p>
      <div class="equation">
        dim = C(d, N) = d!/(N!(d − N)!)
      </div>
      <p>(Choose N modes from d to occupy)</p>

      <p><strong>Example: 4 particles in 10 modes</strong></p>
      <table class="comparison-table">
        <tr>
          <th>Type</th>
          <th>Dimension</th>
          <th>Growth</th>
        </tr>
        <tr>
          <td>Distinguishable</td>
          <td>10⁴ = 10,000</td>
          <td>Exponential in N</td>
        </tr>
        <tr>
          <td>Bosons</td>
          <td>C(13,4) = 715</td>
          <td>Polynomial in N</td>
        </tr>
        <tr>
          <td>Fermions</td>
          <td>C(10,4) = 210</td>
          <td>Polynomial in N</td>
        </tr>
      </table>

      <p><strong>Key observation:</strong> For fixed d and large N, bosonic and fermionic spaces grow polynomially, not exponentially! However, in condensed matter systems, both N and d are large (~10²³), so the space is still enormous.</p>
    </div>

    <h2>Example: N Fermions in d Orbitals</h2>

    <div class="note-box">
      <h3>Electronic Structure of Atoms</h3>

      <p>Electrons (spin-1/2 fermions) in an atom occupy orbitals {s, p, d, f, ...}.</p>

      <p><strong>Helium (2 electrons, ground state):</strong></p>
      <p>Single-particle states: 1s, 2s, 2p, ...</p>
      <p>Ground state: |↑↓⟩_{1s} = c_{1s↑}† c_{1s↓}†|0⟩</p>
      <ul>
        <li>Both electrons in 1s orbital</li>
        <li>Opposite spins (Pauli exclusion)</li>
        <li>Total spin S = 0 (singlet)</li>
      </ul>

      <p><strong>Carbon (6 electrons):</strong></p>
      <p>Ground state: 1s² 2s² 2p²</p>
      <div class="equation">
        |C⟩ = c_{1s↑}† c_{1s↓}† c_{2s↑}† c_{2s↓}† c_{2p_x↑}† c_{2p_y↑}†|0⟩
      </div>

      <p><strong>Hilbert space dimension:</strong> For 6 electrons in 10 orbitals (1s, 2s, 3×2p, 5×3d including spin):</p>
      <div class="equation">
        dim = C(20, 6) = 38,760
      </div>
      <p>(Factor of 2 for spin doubling of orbitals)</p>
    </div>

    <h2>Many-Body Basis States</h2>

    <div class="info-box">
      <h3>Slater Determinants (Fermions)</h3>

      <p>A general N-fermion state can be written as a linear combination of <strong>Slater determinants</strong>:</p>

      <div class="equation">
        |ψ₁, ψ₂, ..., ψ_N⟩ = (1/√N!) det(ψ_i(r_j))
      </div>

      <p>Or in second quantization:</p>
      <div class="equation">
        |ψ₁, ψ₂, ..., ψ_N⟩ = c_ψ₁† c_ψ₂† ... c_ψ_N†|0⟩
      </div>

      <p><strong>Example: Two fermions</strong></p>
      <div class="equation">
        |ψ, φ⟩ = c_ψ† c_φ†|0⟩ = (1/√2)(|ψ⟩₁|φ⟩₂ − |φ⟩₁|ψ⟩₂)
      </div>

      <p>This automatically ensures antisymmetry!</p>
    </div>

    <h2>Reduced Density Matrices</h2>

    <p>For many-body systems, we often care about subsystems. The <strong>reduced density matrix</strong> captures local information.</p>

    <div class="highlight-box">
      <h3>Partial Trace</h3>

      <p>Given a pure state |ψ⟩ ∈ ℋ_A ⊗ ℋ_B, the reduced density matrix for subsystem A is:</p>
      <div class="equation">
        ρ_A = Tr_B(|ψ⟩⟨ψ|)
      </div>

      <p><strong>k-particle reduced density matrix (k-RDM):</strong></p>
      <p>For an N-particle state ρ_N, the k-RDM describes the state of any k particles:</p>
      <div class="equation">
        γ^(k) = Tr_{k+1,...,N}(ρ_N)
      </div>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>1-RDM:</strong> γ^(1)_{ij} = ⟨a_i† a_j⟩ (single-particle density matrix)</li>
        <li><strong>2-RDM:</strong> γ^(2)_{ijkl} = ⟨a_i† a_j† a_l a_k⟩ (pair correlations)</li>
      </ul>

      <p><strong>Importance:</strong></p>
      <ul>
        <li>Most observables (energy, density, current) depend only on 1-RDM or 2-RDM</li>
        <li>2-RDM fully determines energy for 2-local Hamiltonians</li>
        <li>N-representability problem: Which 2-RDMs come from valid N-particle states?</li>
      </ul>
    </div>

    <h2>The Exponential Challenge Revisited</h2>

    <div class="comparison-box">
      <h3>Scaling Summary</h3>
      <table class="comparison-table">
        <tr>
          <th>System</th>
          <th>N (particles)</th>
          <th>d (modes)</th>
          <th>Dimension</th>
          <th>Feasibility</th>
        </tr>
        <tr>
          <td>Small molecule</td>
          <td>10</td>
          <td>20</td>
          <td>~10⁵</td>
          <td>Tractable</td>
        </tr>
        <tr>
          <td>Medium molecule</td>
          <td>50</td>
          <td>100</td>
          <td>~10²⁹</td>
          <td>Extremely hard</td>
        </tr>
        <tr>
          <td>Spin chain</td>
          <td>100</td>
          <td>—</td>
          <td>2¹⁰⁰ ~ 10³⁰</td>
          <td>DMRG works (1D)</td>
        </tr>
        <tr>
          <td>Quantum dot</td>
          <td>20</td>
          <td>40</td>
          <td>~10⁹</td>
          <td>Challenging but doable</td>
        </tr>
        <tr>
          <td>Macroscopic crystal</td>
          <td>10²³</td>
          <td>10²³</td>
          <td>Incomprehensibly large</td>
          <td>Impossible (use approximations)</td>
        </tr>
      </table>
    </div>

    <h2>Why Structure Matters: Tensor Networks</h2>

    <div class="note-box">
      <h3>Exploiting Entanglement Structure</h3>

      <p>Not all states in the exponentially large Hilbert space are physical ground states. Locality imposes structure:</p>

      <ul>
        <li><strong>Area law:</strong> Ground states of local Hamiltonians typically have entanglement entropy S(A) ∼ |∂A| (boundary area, not volume)</li>
        <li><strong>Tensor networks:</strong> MPS (1D), PEPS (2D) efficiently represent area-law states</li>
        <li><strong>DMRG success:</strong> Exploits this structure to simulate 1D systems with thousands of spins</li>
      </ul>

      <p><strong>Key insight:</strong> While the full Hilbert space is exponentially large, <em>physical ground states</em> live in a much smaller subspace characterized by limited entanglement.</p>

      <p>This is explored in detail in Section 4.3.2 (area law) and connects to why quantum error-correcting codes (Chapter 3) also exhibit topological order.</p>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li>Many-particle Hilbert spaces grow exponentially (distinguishable) or combinatorially (identical particles)</li>
        <li>Bosons and fermions obey different statistics, leading to qualitatively different physics</li>
        <li>Occupation number representation provides an efficient description for identical particles</li>
        <li>Reduced density matrices capture local information—key for computational approaches</li>
        <li>Ground states of local Hamiltonians have special entanglement structure (area law) that enables tensor network methods</li>
        <li>Despite exponential scaling, physics + computational complexity theory provide hope: locality + entanglement structure + quantum algorithms</li>
      </ul>

      <p><strong>Next:</strong> In Section 4.3, we examine specific examples of local Hamiltonians and the profound consequences of locality.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
