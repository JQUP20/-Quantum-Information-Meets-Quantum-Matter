<template>
  <div class="section-content">
    <h1>10.2.1 Examples</h1>

    <p>
      Before diving into the general theory, we examine concrete examples of 1D SPT phases. These examples illustrate the key features: unique bulk ground state, symmetry protection, and non-trivial edge modes.
    </p>

    <h2>The Haldane Phase: Spin-1 Chain</h2>

    <div class="info-box">
      <h3>Hamiltonian and Properties</h3>
      <p>
        The Heisenberg antiferromagnetic spin-1 chain:
      </p>
      <div class="equation">
        H = J ∑_i S⃗_i · S⃗_{i+1},  J > 0
      </div>
      <p>
        where S⃗_i are spin-1 operators with (S^x_i)² + (S^y_i)² + (S^z_i)² = 2.
      </p>
      <p>
        <strong>Ground state properties:</strong>
      </p>
      <ul>
        <li>Unique ground state (on periodic chain)</li>
        <li>Spectral gap: Δ ≈ 0.41J</li>
        <li>Exponentially decaying correlations: ⟨S⃗_i · S⃗_j⟩ ~ e^{-|i-j|/ξ}, ξ ≈ 6</li>
        <li>No spontaneous magnetization: ⟨S⃗_i⟩ = 0</li>
      </ul>
    </div>

    <h3>Edge States</h3>

    <div class="highlight-box">
      <h4>Fractional Spin-1/2 at Boundaries</h4>
      <p>
        On an open chain, the ground state is 4-fold degenerate, corresponding to 4 combinations of spin-1/2 at the two ends:
      </p>
      <div class="equation">
        |ψ_GS⟩ ∈ span{|↑_L, ↑_R⟩, |↑_L, ↓_R⟩, |↓_L, ↑_R⟩, |↓_L, ↓_R⟩}
      </div>
      <p>
        <strong>Physical interpretation:</strong>
      </p>
      <ul>
        <li>Each boundary hosts an unpaired spin-1/2</li>
        <li>These are not free spins but emergent degrees of freedom</li>
        <li>Protected by SO(3) or ℤ₂ × ℤ₂ symmetry</li>
        <li>Cannot be gapped without breaking symmetry</li>
      </ul>
    </div>

    <h2>AKLT Model: Exactly Solvable SPT</h2>

    <div class="info-box">
      <h3>Construction</h3>
      <p>
        The Affleck-Kennedy-Lieb-Tasaki (AKLT) model provides an exact solution for the Haldane phase:
      </p>
      <div class="equation">
        H_{AKLT} = ∑_i [S⃗_i · S⃗_{i+1} + (1/3)(S⃗_i · S⃗_{i+1})²]
      </div>
      <p>
        <strong>Exact ground state (Schwinger boson construction):</strong>
      </p>
      <ol>
        <li>Represent each spin-1 as two spin-1/2: |S=1⟩ = symmetrize(|s=1/2⟩ ⊗ |s=1/2⟩)</li>
        <li>Form singlets between neighboring auxiliary spins</li>
        <li>Project to spin-1 subspace at each site</li>
      </ol>
      <div class="equation">
        |ψ_{AKLT}⟩ = P_1 ⊗ P_2 ⊗ ... ⊗ P_N  |singlets⟩
      </div>
    </div>

    <h3>VBS (Valence Bond Solid) Picture</h3>

    <div class="highlight-box">
      <h4>Visualizing the AKLT State</h4>
      <p>
        Each bond carries a valence bond (singlet):
      </p>
      <div class="equation">
        |VB⟩ = (|↑↓⟩ - |↓↑⟩)/√2
      </div>
      <p>
        At each site, two half-bonds combine to form spin-1. This construction reveals:
      </p>
      <ul>
        <li>Bulk: All virtual spins paired → unique ground state</li>
        <li>Edges: Unpaired virtual spins → spin-1/2 degrees of freedom</li>
        <li>Gap: Protected by projection to spin-1 subspace</li>
      </ul>
    </div>

    <h2>String Order Parameter</h2>

    <div class="info-box">
      <h3>Non-Local Detection of SPT</h3>
      <p>
        SPT phases cannot be detected by local order parameters. Instead, use string order:
      </p>
      <div class="equation">
        O_{string} = lim_{|i-j|→∞} ⟨S^z_i exp(iπ ∑_{k=i+1}^{j-1} S^z_k) S^z_j⟩
      </div>
      <p>
        <strong>Results:</strong>
      </p>
      <ul>
        <li><strong>Haldane phase:</strong> O_{string} ≠ 0 (hidden order)</li>
        <li><strong>Trivial phase:</strong> O_{string} = 0</li>
      </ul>
      <p>
        This non-local order parameter distinguishes SPT from trivial phases.
      </p>
    </div>

    <h2>AKLT as Matrix Product State</h2>

    <div class="info-box">
      <h3>MPS Representation</h3>
      <p>
        The AKLT state admits an exact MPS representation with bond dimension D=2:
      </p>
      <div class="equation">
        |ψ_{AKLT}⟩ = ∑_{s_1,...,s_N} Tr[A^{s_1} A^{s_2} ... A^{s_N}] |s_1 s_2 ... s_N⟩
      </div>
      <p>
        where the matrices A^s (s = -1, 0, +1 for S^z eigenstates) are 2×2:
      </p>
      <div class="equation">
        A^{+1} = |↑⟩⟨↑|  ,  A^{0} = (|↑⟩⟨↓| - |↓⟩⟨↑|)/√2  ,  A^{-1} = |↓⟩⟨↓|
      </div>

      <h4>Physical Interpretation</h4>
      <ul>
        <li>Bond index α ∈ {↑,↓} corresponds to virtual spin-1/2</li>
        <li>Physical spin-1 built from two virtual spins</li>
        <li>Singlet contraction between neighboring virtual spins</li>
        <li>On open chain: edge indices uncontracted → edge spin-1/2</li>
      </ul>

      <h4>Parent Hamiltonian</h4>
      <p>
        The AKLT Hamiltonian can be written as sum of projectors:
      </p>
      <div class="equation">
        H_{AKLT} = ∑_i P^{(i,i+1)}_{S=2}
      </div>
      <p>
        where P projects onto total spin-2 on bond. Since AKLT state has S_total ≤ 1 on each bond, it is exact ground state with E = 0.
      </p>
    </div>

    <h2>Entanglement in AKLT State</h2>

    <div class="highlight-box">
      <h4>Entanglement Spectrum</h4>
      <p>
        Cut the AKLT chain between sites k and k+1. The reduced density matrix is:
      </p>
      <div class="equation">
        ρ_L = Tr_{right}|ψ_{AKLT}⟩⟨ψ_{AKLT}|
      </div>
      <p>
        <strong>Entanglement Hamiltonian:</strong> Define ρ_L = e^{-H_E}/Z
      </p>
      <ul>
        <li>Schmidt rank: 2 (virtual bond dimension)</li>
        <li>Entanglement eigenvalues: λ_↑ = λ_↓ = 1/2 (exact degeneracy)</li>
        <li>This 2-fold degeneracy reflects spin-1/2 edge mode</li>
      </ul>

      <h4>Li-Haldane Correspondence</h4>
      <p>
        The entanglement spectrum exactly reproduces the edge mode spectrum:
      </p>
      <ul>
        <li>Physical edge: 2 degenerate states (spin-1/2)</li>
        <li>Entanglement spectrum: 2 degenerate Schmidt values</li>
        <li>This correspondence holds for all SPT phases</li>
      </ul>
    </div>

    <h2>Cluster State: 1D SPT with ℤ₂ Symmetry</h2>

    <div class="info-box">
      <h3>Definition</h3>
      <p>
        The cluster state is ground state of the cluster Hamiltonian:
      </p>
      <div class="equation">
        H = -∑_i K_i,  K_i = X_{i-1} Z_i X_{i+1}
      </div>
      <p>
        <strong>Ground state:</strong>
      </p>
      <div class="equation">
        |ψ_{cluster}⟩ = ∏_{i} CZ_{i,i+1} |+⟩^{⊗N}
      </div>
      <p>
        where CZ is controlled-Z gate and |+⟩ = (|0⟩ + |1⟩)/√2.
      </p>
    </div>

    <h3>Symmetries and Protection</h3>

    <div class="highlight-box">
      <h4>ℤ₂ × ℤ₂ Symmetry</h4>
      <p>
        Cluster state protected by two anticommuting ℤ₂ symmetries:
      </p>
      <ul>
        <li><strong>g_X:</strong> ∏_{i odd} X_i (X on odd sites)</li>
        <li><strong>g_Z:</strong> ∏_{i even} Z_i (Z on even sites)</li>
        <li>{g_X, g_Z} = 0 → anticommuting symmetries</li>
      </ul>

      <h4>Edge Modes</h4>
      <p>
        On open chain with sites 1 to N:
      </p>
      <ul>
        <li>Ground state 4-fold degenerate</li>
        <li>Four states labeled by eigenvalues of X_1 and Z_N</li>
        <li>Degeneracy protected by ℤ₂ × ℤ₂ symmetry</li>
        <li>Any local perturbation respecting symmetry cannot lift degeneracy</li>
      </ul>
    </div>

    <h3>Measurement-Based Quantum Computation</h3>

    <div class="info-box">
      <h3>Cluster State as Resource</h3>
      <p>
        The cluster state enables universal quantum computation via single-qubit measurements:
      </p>

      <h4>Protocol</h4>
      <ol>
        <li>Prepare cluster state |ψ_cluster⟩</li>
        <li>Perform adaptive single-qubit measurements</li>
        <li>Measurement outcomes determine future measurement bases</li>
        <li>Classical feedforward + measurements = quantum gates</li>
      </ol>

      <h4>Connection to SPT</h4>
      <ul>
        <li>SPT structure ensures robust entanglement</li>
        <li>Edge modes store quantum information</li>
        <li>Bulk protects against local errors</li>
        <li>Symmetry protection → fault tolerance</li>
      </ul>
    </div>

    <h2>Numerical Evidence for Haldane Phase</h2>

    <div class="highlight-box">
      <h4>DMRG and Exact Diagonalization</h4>
      <p>
        Numerical methods confirm SPT nature of Haldane phase:
      </p>

      <h4>Spectral Gap</h4>
      <ul>
        <li><strong>Finite-size scaling:</strong> Gap Δ(L) → 0.41J as L → ∞</li>
        <li><strong>Exponential convergence:</strong> Δ(L) - Δ(∞) ~ e^{-L/ξ}</li>
        <li>Gap persists in thermodynamic limit → true gapped phase</li>
      </ul>

      <h4>Correlation Length</h4>
      <div class="equation">
        ⟨S^z_i S^z_j⟩ ~ e^{-|i-j|/ξ},  ξ ≈ 6.0 lattice sites
      </div>
      <ul>
        <li>Short-range correlations confirm SRE nature</li>
        <li>No long-range order (unlike symmetry-breaking phases)</li>
      </ul>

      <h4>String Order</h4>
      <p>
        Numerical calculation shows:
      </p>
      <div class="equation">
        O_string = -⟨S^x_i exp(iπ∑_k S^z_k) S^x_j⟩ → -0.374 as |i-j| → ∞
      </div>
      <ul>
        <li>Non-zero string order confirms SPT nature</li>
        <li>Negative value indicates antiferromagnetic hidden order</li>
      </ul>

      <h4>Entanglement Entropy</h4>
      <ul>
        <li>For bipartition of length L chain: S ~ log(2) (constant!)</li>
        <li>Area law with no topological correction (γ = 0)</li>
        <li>Distinguishes from topologically ordered phases</li>
      </ul>
    </div>

    <h2>Experimental Signatures</h2>

    <div class="info-box">
      <h3>Probing SPT in Real Materials</h3>

      <h4>Inelastic Neutron Scattering</h4>
      <p>
        For NENP compound [Ni(C₂H₈N₂)₂NO₂(ClO₄)]:
      </p>
      <ul>
        <li><strong>Haldane gap:</strong> Δ ≈ 5.3K measured in dispersion relation</li>
        <li><strong>Excitation spectrum:</strong> Continuum of states above gap</li>
        <li><strong>Magnon dispersion:</strong> ω(k) = √[Δ² + v²sin²(k)]</li>
        <li>Agreement with theoretical predictions confirms Haldane phase</li>
      </ul>

      <h4>Electron Spin Resonance (ESR)</h4>
      <ul>
        <li>Detects unpaired spins at chain ends</li>
        <li>Intensity ~ 1/L (scales as edge/volume ratio)</li>
        <li>Direct evidence for spin-1/2 edge modes</li>
      </ul>

      <h4>NMR Measurements</h4>
      <ul>
        <li>Relaxation rate T₁⁻¹ ~ exp(-Δ/T) at low T</li>
        <li>Confirms gapped excitations</li>
        <li>Knight shift reveals absence of staggered magnetization</li>
      </ul>
    </div>

    <h2>Phase Diagram: Haldane vs Trivial</h2>

    <div class="comparison-box">
      <h3>Perturbing the Haldane Phase</h3>
      <table>
        <thead>
          <tr>
            <th>Perturbation</th>
            <th>Hamiltonian</th>
            <th>Effect</th>
            <th>Phase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Single-ion anisotropy (D > 0)</td>
            <td>H + D∑(S^z_i)²</td>
            <td>Increases gap</td>
            <td>Haldane (stronger)</td>
          </tr>
          <tr>
            <td>Large anisotropy (D ≫ J)</td>
            <td>-</td>
            <td>Phase transition</td>
            <td>Large-D phase (trivial)</td>
          </tr>
          <tr>
            <td>Easy-plane (D < 0)</td>
            <td>H + D∑(S^z_i)²</td>
            <td>Competes with Haldane</td>
            <td>XY ordered (D < D_c)</td>
          </tr>
          <tr>
            <td>Next-nearest (J₂)</td>
            <td>H + J₂∑S⃗_i·S⃗_{i+2}</td>
            <td>Frustration</td>
            <td>Dimerized if J₂ > J₂_c</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Key insight:</strong> Haldane phase is stable against small SO(3)-symmetric perturbations but can be destroyed by phase transitions breaking symmetry or gap.
      </p>
    </div>

    <h2>Comparison of 1D SPT Examples</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Haldane/AKLT</th>
            <th>Cluster State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>System</td>
            <td>Spin-1 bosons</td>
            <td>Qubits</td>
          </tr>
          <tr>
            <td>Symmetry</td>
            <td>SO(3) or ℤ₂×ℤ₂</td>
            <td>ℤ₂×ℤ₂</td>
          </tr>
          <tr>
            <td>Classification</td>
            <td>H²(ℤ₂×ℤ₂,U(1))=ℤ₂</td>
            <td>H²(ℤ₂×ℤ₂,U(1))=ℤ₂</td>
          </tr>
          <tr>
            <td>Edge degeneracy</td>
            <td>4-fold (2 spin-1/2)</td>
            <td>4-fold</td>
          </tr>
          <tr>
            <td>Exact solution</td>
            <td>AKLT: yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>MPS bond dim</td>
            <td>D = 2</td>
            <td>D = 2</td>
          </tr>
          <tr>
            <td>Applications</td>
            <td>Condensed matter</td>
            <td>Quantum computing</td>
          </tr>
          <tr>
            <td>Experimental</td>
            <td>NENP, cold atoms</td>
            <td>Superconducting qubits</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Beyond 1D: Generalizations</h2>

    <div class="highlight-box">
      <h4>Higher Dimensions</h4>
      <ul>
        <li><strong>2D AKLT:</strong> Spin-2 on square lattice → gapless edge CFT</li>
        <li><strong>2D cluster state:</strong> Resource for universal quantum computation</li>
        <li><strong>3D SPT:</strong> Topological insulators (different symmetry class)</li>
      </ul>

      <h4>Other Symmetries</h4>
      <ul>
        <li><strong>U(1) SPT:</strong> Integer quantum Hall-like 1D phases (ℤ classification)</li>
        <li><strong>Non-Abelian G:</strong> Richer SPT structure, multiple phases</li>
        <li><strong>Time-reversal:</strong> Fermionic SPT with T²=-1 (topological insulators)</li>
      </ul>

      <h4>Fermionic Extensions</h4>
      <ul>
        <li><strong>Kitaev chain:</strong> 1D p-wave superconductor with Majorana edge modes</li>
        <li><strong>Classification:</strong> Group super-cohomology (fermions + bosons)</li>
      </ul>
    </div>

    <p>
      These explicit examples demonstrate the key features of SPT phases: symmetry protection, edge modes, short-range entanglement, and nontrivial bulk invariants. The AKLT state's exact solvability makes it the paradigmatic example, while the cluster state connects SPT physics to quantum information. Having established the phenomenology, we now turn to the systematic classification using group cohomology.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_2_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
