<template>
  <div class="section-content">
    <h1>4.3.1 Examples of Local Hamiltonians</h1>

    <p>Local Hamiltonians are the workhorses of condensed matter physics. This section surveys canonical models that appear throughout theoretical and experimental many-body physics, demonstrating how locality constrains interactions while still producing rich phenomenology.</p>

    <h2>1. Transverse-Field Ising Model (TFIM)</h2>

    <div class="highlight-box">
      <h3>1D Chain Hamiltonian</h3>
      <div class="equation">
        H = -J Σ_{i=1}^{N-1} σ_i^z σ_{i+1}^z - h Σ_{i=1}^N σ_i^x
      </div>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li><strong>First term (-J Σ σ^z σ^z):</strong> Ising interaction—spins prefer to align in z-direction</li>
        <li><strong>Second term (-h Σ σ^x):</strong> Transverse field—induces quantum fluctuations</li>
        <li><strong>Competition:</strong> Classical order (z-alignment) vs quantum fluctuations (x-field)</li>
      </ul>

      <p><strong>Locality:</strong> 2-local (nearest-neighbor coupling + 1-local field)</p>
    </div>

    <div class="info-box">
      <h3>Quantum Phase Transition</h3>

      <p>The TFIM exhibits a <strong>quantum phase transition</strong> at critical field h_c:</p>

      <table class="comparison-table">
        <tr>
          <th>Regime</th>
          <th>h << J</th>
          <th>h ~ J (critical)</th>
          <th>h >> J</th>
        </tr>
        <tr>
          <td><strong>Phase</strong></td>
          <td>Ferromagnetic (ordered)</td>
          <td>Critical point</td>
          <td>Paramagnetic (disordered)</td>
        </tr>
        <tr>
          <td><strong>Ground state</strong></td>
          <td>|↑↑↑...↑⟩ or |↓↓↓...↓⟩</td>
          <td>Highly entangled</td>
          <td>|→→→...→⟩ (product state)</td>
        </tr>
        <tr>
          <td><strong>Correlation length</strong></td>
          <td>ξ ~ ∞ (long-range order)</td>
          <td>ξ ~ ∞ (power-law)</td>
          <td>ξ ~ 1/h (short-range)</td>
        </tr>
        <tr>
          <td><strong>Gap</strong></td>
          <td>Δ ~ 0 (spontaneous symmetry breaking)</td>
          <td>Δ = 0 (critical)</td>
          <td>Δ ~ h (massive excitations)</td>
        </tr>
      </table>

      <p><strong>Critical exponents:</strong> At h = h_c ≈ J, the system exhibits scale invariance with critical exponents ν ≈ 1, z ≈ 1 (1D Ising universality class).</p>
    </div>

    <div class="note-box">
      <h3>Exact Solution via Jordan-Wigner Transformation</h3>

      <p>The 1D TFIM can be solved exactly by mapping spins to fermions:</p>

      <ol>
        <li><strong>Jordan-Wigner transformation:</strong>
          <div class="equation">
            c_j† = σ_j^+ ∏_{i<j} σ_i^z, &nbsp;&nbsp; c_j = σ_j^- ∏_{i<j} σ_i^z
          </div>
        </li>
        <li><strong>Fermionic Hamiltonian:</strong>
          <div class="equation">
            H = -J Σ_j (c_j† c_{j+1} + h.c.) - h Σ_j (2c_j† c_j - 1)
          </div>
        </li>
        <li><strong>Fourier transform + Bogoliubov:</strong> Diagonalize to find spectrum ε_k</li>
        <li><strong>Ground state energy:</strong>
          <div class="equation">
            E_0 = -Σ_k ε_k/2
          </div>
        </li>
      </ol>

      <p><strong>Result:</strong> Phase transition at h_c = J with continuous gap closure.</p>
    </div>

    <h2>2. Heisenberg Model</h2>

    <div class="highlight-box">
      <h3>Spin-1/2 Chain (Isotropic)</h3>
      <div class="equation">
        H = J Σ_{⟨i,j⟩} (σ_i^x σ_j^x + σ_i^y σ_j^y + σ_i^z σ_j^z) = J Σ_{⟨i,j⟩} 𝐒_i · 𝐒_j
      </div>

      <p>where 𝐒_i = (σ_i^x, σ_i^y, σ_i^z)/2 is the spin-1/2 operator.</p>

      <p><strong>Notation:</strong> ⟨i,j⟩ denotes nearest-neighbor pairs on a lattice.</p>

      <ul>
        <li><strong>J > 0:</strong> Antiferromagnetic (AFM)—spins prefer antiparallel alignment</li>
        <li><strong>J < 0:</strong> Ferromagnetic (FM)—spins prefer parallel alignment</li>
        <li><strong>Locality:</strong> 2-local</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>1D Heisenberg Antiferromagnet (AFM)</h3>

      <p><strong>Exact solution:</strong> Bethe Ansatz (1931) provides complete solution.</p>

      <p><strong>Ground state properties:</strong></p>
      <ul>
        <li><strong>State:</strong> Spin liquid (no magnetic order, even at T=0)</li>
        <li><strong>Gapless:</strong> Δ = 0 (critical point)</li>
        <li><strong>Correlations:</strong> ⟨S_i^z S_j^z⟩ ~ (-1)^{|i-j|} / |i-j| (power-law decay)</li>
        <li><strong>Entanglement:</strong> Logarithmic growth S(L) ~ log(L) (conformal field theory)</li>
        <li><strong>Energy per bond:</strong> E_0/N = -J ln(2) + J/4 ≈ -0.443 J</li>
      </ul>

      <p><strong>Spinons:</strong> Elementary excitations are fractionalized spin-1/2 quasiparticles.</p>
    </div>

    <div class="comparison-box">
      <h3>Heisenberg Model Variants</h3>
      <table class="comparison-table">
        <tr>
          <th>Model</th>
          <th>Hamiltonian</th>
          <th>Ground State</th>
          <th>Gap</th>
        </tr>
        <tr>
          <td><strong>Ferromagnetic (J<0)</strong></td>
          <td>J Σ 𝐒_i · 𝐒_j (J<0)</td>
          <td>|↑↑...↑⟩ (fully polarized)</td>
          <td>Δ ~ |J|</td>
        </tr>
        <tr>
          <td><strong>AFM 1D</strong></td>
          <td>J Σ 𝐒_i · 𝐒_j (J>0)</td>
          <td>Spin liquid (gapless)</td>
          <td>Δ = 0</td>
        </tr>
        <tr>
          <td><strong>AFM 2D square</strong></td>
          <td>J Σ_{⟨i,j⟩} 𝐒_i · 𝐒_j</td>
          <td>Néel order (spontaneous)</td>
          <td>Δ > 0 (spin waves)</td>
        </tr>
        <tr>
          <td><strong>XXZ (anisotropic)</strong></td>
          <td>Σ (S_i^x S_j^x + S_i^y S_j^y + Δ S_i^z S_j^z)</td>
          <td>Depends on Δ</td>
          <td>Gapless for |Δ|≤1</td>
        </tr>
      </table>
    </div>

    <h2>3. Hubbard Model</h2>

    <div class="highlight-box">
      <h3>Fermions on a Lattice</h3>
      <div class="equation">
        H = -t Σ_{⟨i,j⟩,σ} (c_{iσ}† c_{jσ} + h.c.) + U Σ_i n_{i↑} n_{i↓}
      </div>

      <p>where:</p>
      <ul>
        <li><strong>c_{iσ}†:</strong> Creates electron with spin σ ∈ {↑,↓} at site i</li>
        <li><strong>n_{iσ} = c_{iσ}† c_{iσ}:</strong> Number operator for spin σ at site i</li>
        <li><strong>t:</strong> Hopping amplitude (kinetic energy)</li>
        <li><strong>U:</strong> On-site Coulomb repulsion (potential energy)</li>
      </ul>

      <p><strong>Locality:</strong></p>
      <ul>
        <li>Hopping term: 2-local (connects nearest neighbors)</li>
        <li>Interaction term: 1-local (on-site repulsion)</li>
        <li>Total: 2-local Hamiltonian</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Physical Regimes</h3>

      <p><strong>Weak coupling (U << t):</strong></p>
      <ul>
        <li>Electrons behave like weakly interacting Fermi gas</li>
        <li>Band theory + Fermi liquid theory apply</li>
        <li>Metallic behavior</li>
      </ul>

      <p><strong>Strong coupling (U >> t):</strong></p>
      <ul>
        <li>Double occupancy suppressed (costs energy U)</li>
        <li>At half-filling (n=1): Mott insulator</li>
        <li>Effective model: Heisenberg AFM with J_eff = 4t²/U</li>
        <li>Away from half-filling: complex phases (stripes, superconductivity?)</li>
      </ul>

      <p><strong>Intermediate coupling (U ~ t):</strong></p>
      <ul>
        <li>Strongly correlated regime</li>
        <li>No exact solution (except 1D via Bethe Ansatz)</li>
        <li>Rich phase diagram: metal-insulator transitions, magnetism, superconductivity</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Connection to High-Temperature Superconductivity</h3>

      <p>The 2D Hubbard model (square lattice) is believed to capture essential physics of cuprate superconductors:</p>

      <ul>
        <li><strong>Half-filling (n=1):</strong> AFM Mott insulator (parent compound)</li>
        <li><strong>Light doping (n≈0.85-0.95):</strong> Pseudogap phase</li>
        <li><strong>Optimal doping (n≈0.85):</strong> d-wave superconductivity (T_c ~ 90K)</li>
        <li><strong>Overdoping (n<0.85):</strong> Fermi liquid</li>
      </ul>

      <p><strong>Open problem:</strong> Despite 60+ years of study, the 2D Hubbard model lacks an exact solution and remains a central challenge in condensed matter theory. Quantum simulations (cold atoms, quantum computers) are now providing new insights.</p>
    </div>

    <h2>4. Kitaev Toric Code Hamiltonian</h2>

    <div class="highlight-box">
      <h3>Topological Stabilizer Hamiltonian</h3>

      <p>Spins live on <strong>edges</strong> of a 2D square lattice with periodic boundary conditions (torus topology).</p>

      <div class="equation">
        H = -J_s Σ_v A_v - J_p Σ_p B_p
      </div>

      <p><strong>Stabilizer operators:</strong></p>
      <ul>
        <li><strong>A_v (star operator):</strong> Product of X on 4 edges touching vertex v
          <div class="equation">
            A_v = ∏_{e ∈ star(v)} X_e
          </div>
        </li>
        <li><strong>B_p (plaquette operator):</strong> Product of Z on 4 edges around plaquette p
          <div class="equation">
            B_p = ∏_{e ∈ ∂p} Z_e
          </div>
        </li>
      </ul>

      <p><strong>Locality:</strong> 4-local (each term acts on 4 spins)</p>
    </div>

    <div class="info-box">
      <h3>Ground State and Topological Order</h3>

      <p><strong>Ground state subspace:</strong> All states |ψ⟩ satisfying:</p>
      <div class="equation">
        A_v|ψ⟩ = |ψ⟩, &nbsp;&nbsp; B_p|ψ⟩ = |ψ⟩ &nbsp;&nbsp; ∀ v, p
      </div>

      <p><strong>Key properties:</strong></p>
      <ul>
        <li><strong>Exactly solvable:</strong> [A_v, A_{v'}] = [B_p, B_{p'}] = [A_v, B_p] = 0 (commuting stabilizers)</li>
        <li><strong>Ground state degeneracy:</strong> 4-fold on a torus (topological invariant)</li>
        <li><strong>Gap:</strong> Δ = 2 min(J_s, J_p) (protected by topology)</li>
        <li><strong>No local order parameter:</strong> ⟨σ⟩ = 0 everywhere, yet non-trivial phase</li>
      </ul>

      <p><strong>Excitations (Anyons):</strong></p>
      <ul>
        <li><strong>e-particle:</strong> Violates star operator A_v (electric charge)</li>
        <li><strong>m-particle:</strong> Violates plaquette operator B_p (magnetic flux)</li>
        <li><strong>Anyonic statistics:</strong> Braiding e around m gives phase factor -1</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Connection to Quantum Error Correction</h3>

      <p>The toric code is precisely the [[n, 2, d]] stabilizer code from Chapter 3:</p>

      <ul>
        <li><strong>Logical qubits:</strong> k = 2 (encoded in topology, not local degrees of freedom)</li>
        <li><strong>Code distance:</strong> d = L (system size—distance around non-contractible loop)</li>
        <li><strong>Error detection:</strong> Syndromes = positions of anyons</li>
        <li><strong>Error correction:</strong> Create anyon pairs, move them to annihilate</li>
      </ul>

      <p><strong>Key insight:</strong> Ground state subspace is degenerate <em>topologically</em>—logical operations require non-local string operators wrapping around the torus. This makes the code robust against local errors!</p>

      <p>This demonstrates how <strong>frustration-free local Hamiltonians</strong> (Section 4.5) can realize topological quantum error correction.</p>
    </div>

    <h2>5. t-J Model</h2>

    <div class="highlight-box">
      <h3>Effective Low-Energy Model from Hubbard</h3>

      <p>In the strong-coupling limit of Hubbard (U >> t) with hole doping, one derives:</p>

      <div class="equation">
        H = -t Σ_{⟨i,j⟩,σ} P(c_{iσ}† c_{jσ} + h.c.)P + J Σ_{⟨i,j⟩} (𝐒_i · 𝐒_j - n_i n_j/4)
      </div>

      <p>where:</p>
      <ul>
        <li><strong>P:</strong> Projection onto no-double-occupancy subspace</li>
        <li><strong>J = 4t²/U:</strong> Effective exchange coupling</li>
        <li><strong>First term:</strong> Constrained hopping</li>
        <li><strong>Second term:</strong> Superexchange interaction</li>
      </ul>

      <p><strong>Locality:</strong> 2-local (but constraint makes it complicated!)</p>
    </div>

    <div class="comparison-box">
      <h3>Summary of Canonical Local Hamiltonians</h3>
      <table class="comparison-table">
        <tr>
          <th>Model</th>
          <th>Locality</th>
          <th>Exactly Solvable?</th>
          <th>Key Physics</th>
          <th>Applications</th>
        </tr>
        <tr>
          <td><strong>Transverse Ising</strong></td>
          <td>2-local</td>
          <td>Yes (1D)</td>
          <td>Quantum phase transition</td>
          <td>Quantum annealing, universality</td>
        </tr>
        <tr>
          <td><strong>Heisenberg AFM</strong></td>
          <td>2-local</td>
          <td>Yes (1D Bethe)</td>
          <td>Spin liquids, spinons</td>
          <td>Magnetism, quantum criticality</td>
        </tr>
        <tr>
          <td><strong>Hubbard</strong></td>
          <td>2-local</td>
          <td>No (except 1D)</td>
          <td>Strong correlations</td>
          <td>High-T_c SC, Mott insulators</td>
        </tr>
        <tr>
          <td><strong>Toric code</strong></td>
          <td>4-local</td>
          <td>Yes (commuting)</td>
          <td>Topological order</td>
          <td>Quantum error correction, anyons</td>
        </tr>
        <tr>
          <td><strong>t-J</strong></td>
          <td>2-local</td>
          <td>No</td>
          <td>Doped Mott insulators</td>
          <td>Cuprate superconductors</td>
        </tr>
      </table>
    </div>

    <h2>Experimental Realizations</h2>

    <div class="note-box">
      <h3>Quantum Simulation Platforms</h3>

      <p><strong>Ultracold atoms in optical lattices:</strong></p>
      <ul>
        <li><strong>Hubbard model:</strong> Realized with bosonic ⁸⁷Rb and fermionic ⁶Li</li>
        <li><strong>Control:</strong> Tune t (lattice depth) and U (Feshbach resonances)</li>
        <li><strong>Achievement:</strong> Observed Mott transition, AFM order, thermalization dynamics</li>
      </ul>

      <p><strong>Trapped ions:</strong></p>
      <ul>
        <li><strong>Transverse Ising:</strong> Implemented with up to ~50 ions</li>
        <li><strong>Long-range interactions:</strong> Can engineer power-law couplings</li>
        <li><strong>Achievement:</strong> Observed quantum phase transitions, time crystals</li>
      </ul>

      <p><strong>Superconducting qubits:</strong></p>
      <ul>
        <li><strong>Toric code:</strong> Small instances demonstrated on 2D grids</li>
        <li><strong>VQE:</strong> Simulate molecules (H₂, LiH, etc.) on near-term devices</li>
      </ul>

      <p><strong>Rydberg atoms:</strong></p>
      <ul>
        <li><strong>Programmable geometry:</strong> 1D chains, 2D arrays with ~200-300 atoms</li>
        <li><strong>Models:</strong> Ising, XY, constrained problems</li>
        <li><strong>Achievement:</strong> Quantum optimization, many-body scars</li>
      </ul>
    </div>

    <h2>Takeaways</h2>

    <div class="highlight-box">
      <ul>
        <li>Local Hamiltonians arise naturally from physical interactions (nearest-neighbor, on-site)</li>
        <li>Locality=2 is typical (pair interactions dominate real materials)</li>
        <li>Even simple 2-local models can be <strong>QMA-hard</strong> (no efficient classical solution)</li>
        <li>Exact solutions rare and precious (Bethe Ansatz, commuting operators, free fermions)</li>
        <li>These models are not just theoretical—they're realized in quantum simulators!</li>
        <li>Topological models (toric code) bridge to quantum error correction (Chapter 3)</li>
      </ul>

      <p><strong>Next:</strong> Section 4.3.2 explores how locality constrains the <em>dynamics</em> and <em>entanglement structure</em> of these systems through Lieb-Robinson bounds and area laws.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_3_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
