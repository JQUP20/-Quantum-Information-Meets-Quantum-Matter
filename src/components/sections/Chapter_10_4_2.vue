<template>
  <div class="section-content">
    <h1>10.4.2 2D CZX Model</h1>

    <p>
      The <strong>2D CZX (Controlled-Z plus X) model</strong> is an exactly solvable paradigm for 2D bosonic SPT phases with <strong>ℤ₂ symmetry</strong>. Defined on a square lattice of qubits, it features a <strong>gapped bulk</strong> with unique ground state and a <strong>1D cluster state</strong> protected edge mode. This model provides a concrete quantum circuit realization of 2D SPT order and demonstrates how measurement-based quantum computation naturally connects to topological phases.
    </p>

    <h2>Model Definition and Hamiltonian</h2>

    <div class="info-box">
      <h3>Setup</h3>

      <h4>Lattice and Degrees of Freedom</h4>
      <ul>
        <li><strong>Lattice:</strong> 2D square lattice</li>
        <li><strong>Qubits:</strong> One qubit (spin-1/2) per vertex</li>
        <li><strong>Pauli operators:</strong> X_i, Y_i, Z_i at each site i</li>
      </ul>

      <h4>Hamiltonian</h4>
      <p>
        The CZX model is defined by:
      </p>
      <div class="equation">
        H = -∑_{plaquettes p} B_p
      </div>
      <p>
        where the plaquette operator is:
      </p>
      <div class="equation">
        B_p = CZ_{12} CZ_{23} CZ_{34} CZ_{41} · X_1 X_2 X_3 X_4
      </div>

      <h4>Controlled-Z Gate</h4>
      <p>
        CZ gate acts on two qubits:
      </p>
      <div class="equation">
        CZ_{ij} = |0⟩⟨0|_i ⊗ I_j + |1⟩⟨1|_i ⊗ Z_j
      </div>
      <p>
        Or in matrix form:
      </p>
      <div class="equation">
        CZ = diag(1, 1, 1, -1)
      </div>
      <p>
        Equivalently: CZ_{ij} = exp(iπZ_i ⊗ Z_j/4)
      </p>
    </div>

    <div class="highlight-box">
      <h4>Explicit Plaquette Operator</h4>

      <h4>Step-by-Step Construction</h4>
      <p>
        Label plaquette vertices clockwise: 1 → 2 → 3 → 4 → 1
      </p>

      <h4>CZ String</h4>
      <p>
        Apply CZ gates around plaquette:
      </p>
      <div class="equation">
        CZ_{12} CZ_{23} CZ_{34} CZ_{41} = exp(iπ(Z_1 Z_2 + Z_2 Z_3 + Z_3 Z_4 + Z_4 Z_1)/4)
      </div>

      <h4>Combined Operator</h4>
      <p>
        Then multiply by X on all four sites:
      </p>
      <div class="equation">
        B_p = (CZ-string) · (X_1 X_2 X_3 X_4)
      </div>

      <h4>Key Property</h4>
      <p>
        B_p commutes with ℤ₂ symmetry operator:
      </p>
      <div class="equation">
        [B_p, ∏_i X_i] = 0
      </div>
    </div>

    <h2>Ground State: 2D Cluster State</h2>

    <div class="info-box">
      <h3>Cluster State Construction</h3>

      <h4>Starting State</h4>
      <p>
        Begin with all qubits in |+⟩ state:
      </p>
      <div class="equation">
        |+⟩ = (|0⟩ + |1⟩)/√2
      </div>
      <p>
        Product state:
      </p>
      <div class="equation">
        |ψ_0⟩ = ⨂_{all sites i} |+⟩_i
      </div>

      <h4>Apply CZ Gates</h4>
      <p>
        Apply CZ on every edge of the lattice:
      </p>
      <div class="equation">
        |Cluster_{2D}⟩ = ∏_{edges ⟨ij⟩} CZ_{ij} |ψ_0⟩
      </div>

      <h4>Alternative: Circuit Preparation</h4>
      <p>
        Recipe:
      </p>
      <ol>
        <li>Prepare all qubits in |+⟩</li>
        <li>Apply CZ gate on each edge once</li>
        <li>Result is 2D cluster state (ground state of H)</li>
      </ol>
    </div>

    <div class="highlight-box">
      <h4>Ground State Property</h4>

      <h4>Eigenstate of Plaquette Operators</h4>
      <p>
        The cluster state satisfies:
      </p>
      <div class="equation">
        B_p |Cluster_{2D}⟩ = |Cluster_{2D}⟩
      </div>
      <p>
        for all plaquettes p.
      </p>

      <h4>Proof Sketch</h4>
      <p>
        Key observation: Each B_p can be written as:
      </p>
      <div class="equation">
        B_p = K_p X_1 X_2 X_3 X_4 K_p^†
      </div>
      <p>
        where K_p is product of CZ gates. Since K_p|Cluster⟩ ∝ |Cluster⟩ and X_1 X_2 X_3 X_4 acts symmetrically, we get eigenvalue +1.
      </p>

      <h4>Ground State Energy</h4>
      <div class="equation">
        E_0 = -N_{plaquettes}
      </div>
      <p>
        Since each B_p contributes -1.
      </p>
    </div>

    <h2>Bulk Properties</h2>

    <div class="info-box">
      <h3>Gapped Bulk</h3>

      <h4>Spectral Gap</h4>
      <p>
        Hamiltonian has finite gap above ground state:
      </p>
      <div class="equation">
        Δ = E_1 - E_0 &gt; 0
      </div>
      <p>
        Gap persists in thermodynamic limit.
      </p>

      <h4>Unique Ground State</h4>
      <p>
        On torus (periodic BC):
      </p>
      <ul>
        <li>Single ground state (no degeneracy)</li>
        <li>All plaquette operators B_p are independent</li>
        <li>Ground state uniquely fixed by B_p|ψ⟩ = |ψ⟩</li>
      </ul>

      <h4>Frustration-Free</h4>
      <p>
        Hamiltonian is frustration-free:
      </p>
      <ul>
        <li>All B_p ≥ -1 (eigenvalues ±1)</li>
        <li>Ground state satisfies B_p|GS⟩ = +|GS⟩ for all p</li>
        <li>Total energy E = -∑_p 1 = -N_p (minimum possible)</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Correlation Functions</h4>

      <h4>Exponential Decay</h4>
      <p>
        Connected correlations decay exponentially:
      </p>
      <div class="equation">
        ⟨O_i O_j⟩_c ∼ e^{-|r_i - r_j|/ξ}
      </div>

      <h4>String Order</h4>
      <p>
        Like 1D cluster state, has hidden string order:
      </p>
      <div class="equation">
        O_{string} = ⟨X_i (∏_{k on path} Z_k) X_j⟩ ≠ 0
      </div>

      <h4>Entanglement Entropy</h4>
      <p>
        For region A:
      </p>
      <div class="equation">
        S_A = α|∂A| - γ
      </div>
      <p>
        where γ = 0 (SPT has no intrinsic topological order).
      </p>
    </div>

    <h2>ℤ₂ Symmetry and Protection</h2>

    <div class="info-box">
      <h3>Global ℤ₂ Symmetry</h3>

      <h4>Symmetry Operator</h4>
      <p>
        The model has global ℤ₂ symmetry:
      </p>
      <div class="equation">
        g = ∏_{all sites i} X_i
      </div>
      <p>
        This is "global spin flip" in X-basis.
      </p>

      <h4>Hamiltonian Invariance</h4>
      <p>
        [H, g] = 0 because:
      </p>
      <ul>
        <li>Each B_p contains product X_1 X_2 X_3 X_4</li>
        <li>CZ gates commute with g (since CZ = diagonal in Z-basis)</li>
        <li>g acts on each plaquette with 4 X's → cancels X_1 X_2 X_3 X_4</li>
      </ul>

      <h4>Physical Meaning</h4>
      <p>
        In computational basis |0⟩, |1⟩:
      </p>
      <div class="equation">
        g: |0⟩ ↔ |1⟩  (bitflip all qubits)
      </div>
      <p>
        Ground state has even parity under g: g|GS⟩ = |GS⟩.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Symmetry Protection of Edge</h4>

      <h4>On Open Boundary</h4>
      <p>
        With open boundary conditions:
      </p>
      <ul>
        <li>Bulk remains gapped</li>
        <li>Edge hosts 1D cluster state</li>
        <li>Edge cannot be gapped without breaking ℤ₂</li>
      </ul>

      <h4>Protection Mechanism</h4>
      <p>
        1D cluster state on edge has:
      </p>
      <ul>
        <li>ℤ₂ × ℤ₂ symmetry (X-string and Z-string)</li>
        <li>Non-trivial SPT phase in 1D</li>
        <li>Cannot gap while preserving both symmetries</li>
      </ul>

      <h4>Breaking Symmetry</h4>
      <p>
        Add edge perturbation:
      </p>
      <div class="equation">
        δH = h∑_{i on edge} Z_i
      </div>
      <p>
        This breaks ℤ₂ symmetry and gaps out edge.
      </p>
    </div>

    <h2>Edge Theory: 1D Cluster State</h2>

    <div class="info-box">
      <h3>Edge Hamiltonian</h3>

      <h4>Effective 1D Model</h4>
      <p>
        On boundary, effective Hamiltonian is:
      </p>
      <div class="equation">
        H_{edge} = -∑_{i on edge} CZ_{i,i+1} X_i X_{i+1} CZ_{i,i+1}
      </div>
      <p>
        This is <strong>1D cluster state Hamiltonian</strong>.
      </p>

      <h4>Simplified Form</h4>
      <p>
        Can be written as:
      </p>
      <div class="equation">
        H_{edge} = -∑_i Z_{i-1} X_i Z_{i+1}
      </div>
      <p>
        Three-body interaction on 1D chain.
      </p>

      <h4>Ground State</h4>
      <div class="equation">
        |ψ_{edge}⟩ = ∏_{edges} CZ_{i,i+1} ⨂_i |+⟩_i
      </div>
      <p>
        This is exactly 1D cluster state!
      </p>
    </div>

    <div class="highlight-box">
      <h4>Edge as 1D SPT</h4>

      <h4>1D Cluster State Classification</h4>
      <p>
        1D cluster state is non-trivial SPT with ℤ₂ × ℤ₂ symmetry:
      </p>
      <ul>
        <li><strong>Symmetry 1:</strong> ∏_i X_i (global X-flip)</li>
        <li><strong>Symmetry 2:</strong> ∏_i Z_i (global Z-flip)</li>
        <li><strong>Classification:</strong> H²(ℤ₂ × ℤ₂, U(1)) = ℤ₂</li>
      </ul>

      <h4>Edge Modes at Endpoints</h4>
      <p>
        1D cluster state on interval has:
      </p>
      <ul>
        <li>Two unpaired qubits at ends</li>
        <li>Transform under symmetry as projective representation</li>
        <li>Cannot be removed without breaking symmetry</li>
      </ul>

      <h4>Bulk-Edge-Edge Correspondence</h4>
      <div class="equation">
        2D SPT (ℤ₂) → 1D edge SPT (ℤ₂ × ℤ₂) → 0D endpoint modes
      </equation>
    </div>

    <h2>Classification and Cohomology</h2>

    <div class="info-box">
      <h3>2D Bosonic SPT with ℤ₂</h3>

      <h4>Group Cohomology</h4>
      <p>
        Classification formula:
      </p>
      <div class="equation">
        H³(ℤ₂, U(1)) = ℤ₂
      </div>

      <h4>Two Phases</h4>
      <ul>
        <li><strong>Trivial phase (n=0):</strong> Product state</li>
        <li><strong>CZX phase (n=1):</strong> 2D cluster state</li>
      </ul>

      <h4>Stacking</h4>
      <p>
        Stacking two CZX states:
      </p>
      <div class="equation">
        CZX ⊕ CZX = Trivial  (mod 2)
      </div>

      <h4>Cocycle Interpretation</h4>
      <p>
        The ℤ₂ invariant corresponds to:
      </p>
      <ul>
        <li>3-cocycle ω ∈ Z³(ℤ₂, U(1))</li>
        <li>Classifies possible symmetry actions on edge</li>
        <li>Detects anomaly in edge theory</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Cocycle Calculation</h4>

      <h4>Symmetry Action</h4>
      <p>
        ℤ₂ = {e, g} acts on qubits:
      </p>
      <div class="equation">
        U(g) = ∏_i X_i
      </div>

      <h4>Projective Representation on Edge</h4>
      <p>
        Edge modes transform projectively:
      </p>
      <div class="equation">
        U(g)² = (-1)^F · I
      </div>
      <p>
        where F is fermion parity of edge modes.
      </p>

      <h4>Cocycle Value</h4>
      <p>
        The non-trivial cocycle:
      </p>
      <div class="equation">
        ω(g, g, g) = -1 ∈ U(1)
      </div>
      <p>
        This indicates CZX phase (n=1).
      </p>
    </div>

    <h2>Measurement-Based Quantum Computation</h2>

    <div class="info-box">
      <h3>Cluster State as Resource</h3>

      <h4>1-Way Quantum Computer</h4>
      <p>
        2D cluster state is universal resource for MBQC:
      </p>
      <ol>
        <li>Prepare 2D cluster state (fixed resource)</li>
        <li>Perform single-qubit measurements in adaptive bases</li>
        <li>Classical feedforward determines future measurement bases</li>
        <li>Final unmeasured qubits hold computation result</li>
      </ol>

      <h4>Universality</h4>
      <p>
        2D cluster state can simulate any quantum circuit:
      </p>
      <ul>
        <li>Single-qubit gates: X-, Y-, Z-basis measurements</li>
        <li>Entangling gates: Measured across multiple sites</li>
        <li>Arbitrary depth circuit</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Connection to SPT</h4>

      <h4>Topology → Computation</h4>
      <p>
        SPT properties enable quantum computation:
      </p>
      <ul>
        <li><strong>Symmetry protection:</strong> Cluster correlations robust to noise</li>
        <li><strong>Edge modes:</strong> Encode logical information</li>
        <li><strong>Bulk gap:</strong> Local errors don't spread</li>
      </ul>

      <h4>Fault Tolerance</h4>
      <p>
        SPT edge modes provide:
      </p>
      <ul>
        <li>Topological protection against local perturbations</li>
        <li>Error correction via symmetry</li>
        <li>Robust information storage</li>
      </ul>
    </div>

    <h2>Tensor Network Representation</h2>

    <div class="info-box">
      <h3>PEPS Construction</h3>

      <h4>Tensor Structure</h4>
      <p>
        2D cluster state has efficient PEPS representation:
      </p>
      <div class="equation">
        |Cluster⟩ = ∑_{i_1,...,i_N} Tr[A^{i_1}_{s_1} ... A^{i_N}_{s_N}] |i_1...i_N⟩
      </div>

      <h4>Bond Dimension</h4>
      <p>
        Cluster PEPS has bond dimension D = 2:
      </p>
      <ul>
        <li>Minimal bond dimension for non-trivial state</li>
        <li>Reflects short-range entanglement</li>
        <li>Efficient classical simulation possible</li>
      </ul>

      <h4>Tensor Elements</h4>
      <p>
        Explicit tensor:
      </p>
      <div class="equation">
        A^i_{αβγδ} = (1/√2) δ_{i, α⊕β⊕γ⊕δ}
      </div>
      <p>
        where ⊕ is XOR (addition mod 2).
      </p>
    </div>

    <div class="highlight-box">
      <h4>Matrix Product Operator</h4>

      <h4>Transfer Matrix</h4>
      <p>
        PEPS transfer matrix:
      </p>
      <div class="equation">
        T = ∑_{α,β} A^{i}_{α...} ⊗ \bar{A}^{i}_{β...}
      </div>

      <h4>Correlation Length</h4>
      <p>
        Exponential decay with:
      </p>
      <div class="equation">
        ξ = -1/log|λ₂/λ₁|
      </div>
      <p>
        where λ₁, λ₂ are largest eigenvalues of T.
      </p>

      <h4>Topological Invariant from PEPS</h4>
      <p>
        ℤ₂ invariant can be extracted from:
      </p>
      <ul>
        <li>Symmetry action on virtual indices</li>
        <li>Projective representation structure</li>
        <li>Fixed-point tensor analysis</li>
      </ul>
    </div>

    <h2>Experimental Realizations</h2>

    <div class="info-box">
      <h3>Quantum Platforms</h3>

      <h4>1. Trapped Ions</h4>
      <ul>
        <li><strong>Setup:</strong> 2D array of ¹⁷¹Yb⁺ or ⁴⁰Ca⁺ ions</li>
        <li><strong>Gates:</strong> Molmer-Sorensen for CZ, single-qubit rotations</li>
        <li><strong>Measurement:</strong> Fluorescence imaging</li>
        <li><strong>Achievement:</strong> Small cluster states demonstrated (Innsbruck, NIST)</li>
      </ul>

      <h4>2. Superconducting Qubits</h4>
      <ul>
        <li><strong>Platform:</strong> Transmon qubits on 2D grid</li>
        <li><strong>Couplers:</strong> Tunable couplers for CZ gates</li>
        <li><strong>Readout:</strong> Dispersive readout</li>
        <li><strong>Status:</strong> Up to ~100 qubit cluster states (Google, IBM)</li>
      </ul>

      <h4>3. Neutral Atom Arrays</h4>
      <ul>
        <li><strong>Atoms:</strong> Rydberg atoms (⁸⁷Rb, ¹³³Cs)</li>
        <li><strong>Arrangement:</strong> Optical tweezers in 2D lattice</li>
        <li><strong>Entangling:</strong> Rydberg blockade for CZ</li>
        <li><strong>Scalability:</strong> Hundreds of qubits possible</li>
      </ul>

      <h4>4. Photonic Quantum Systems</h4>
      <ul>
        <li><strong>Encoding:</strong> Polarization or time-bin qubits</li>
        <li><strong>Entanglement:</strong> Parametric down-conversion</li>
        <li><strong>Gates:</strong> Linear optics + measurement</li>
        <li><strong>Challenge:</strong> Deterministic gates difficult</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Detection of SPT Order</h4>

      <h4>String Order Measurement</h4>
      <p>
        Measure correlation:
      </p>
      <div class="equation">
        C = ⟨X_i (∏_{k on path} Z_k) X_j⟩
      </div>
      <p>
        Non-zero value indicates SPT.
      </p>

      <h4>Edge Mode Detection</h4>
      <ul>
        <li>Prepare open boundary sample</li>
        <li>Measure edge qubit observables</li>
        <li>Check for 1D cluster correlations on edge</li>
      </ul>

      <h4>Symmetry Verification</h4>
      <p>
        Verify ℤ₂ symmetry:
      </p>
      <div class="equation">
        ⟨∏_i X_i⟩ = ±1
      </div>
      <p>
        Ground state should have even parity.
      </p>
    </div>

    <h2>Generalizations</h2>

    <div class="info-box">
      <h3>Higher Dimensional Cluster States</h3>

      <h4>3D CZX Model</h4>
      <p>
        Generalize to 3D cubic lattice:
      </p>
      <ul>
        <li>CZ gates on all edges</li>
        <li>Plaquette operators on all faces</li>
        <li>Classification: H⁴(ℤ₂, U(1)) = ℤ₂</li>
        <li>Edge: 2D cluster state</li>
      </ul>

      <h4>Higher Groups</h4>
      <p>
        Generalize ℤ₂ to ℤ_N:
      </p>
      <ul>
        <li>Qudits (d-level systems) instead of qubits</li>
        <li>Controlled-phase gates CZ_N</li>
        <li>Classification: H³(ℤ_N, U(1))</li>
      </ul>

      <h4>Non-Abelian Symmetries</h4>
      <p>
        Cluster states for non-Abelian groups:
      </p>
      <ul>
        <li>Quantum double models</li>
        <li>Levin-Wen string-net models</li>
        <li>Richer edge theories</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h4>Key Takeaways</h4>
      <ul>
        <li><strong>2D CZX model:</strong> Exactly solvable 2D SPT with ℤ₂ symmetry</li>
        <li><strong>Hamiltonian:</strong> Sum of plaquette operators B_p = (CZ-string) · (X₁X₂X₃X₄)</li>
        <li><strong>Ground state:</strong> 2D cluster state, unique on torus</li>
        <li><strong>Bulk:</strong> Gapped, short-range entangled, no topological order</li>
        <li><strong>Edge:</strong> 1D cluster state (non-trivial 1D SPT)</li>
        <li><strong>Symmetry:</strong> Global ℤ₂ flip ∏_i X_i protects edge</li>
        <li><strong>Classification:</strong> H³(ℤ₂,U(1))=ℤ₂, CZX is n=1 phase</li>
        <li><strong>MBQC:</strong> Universal resource for measurement-based quantum computation</li>
      </ul>

      <h4>Conceptual Significance</h4>
      <p>
        The 2D CZX model exemplifies the deep connection between:
      </p>
      <ul>
        <li><strong>Topology and computation:</strong> SPT structure enables quantum computation</li>
        <li><strong>Symmetry and protection:</strong> ℤ₂ symmetry protects edge modes</li>
        <li><strong>Solvability:</strong> Exactly solvable model with explicit ground state</li>
        <li><strong>Realizability:</strong> Concrete quantum circuit implementation</li>
      </ul>
      <p>
        Unlike the AKLT model (continuous SO(3) symmetry), CZX uses discrete ℤ₂ symmetry, making it more accessible to digital quantum simulation. The cluster state structure provides a direct bridge between topological phases and practical quantum information processing.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_4_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
