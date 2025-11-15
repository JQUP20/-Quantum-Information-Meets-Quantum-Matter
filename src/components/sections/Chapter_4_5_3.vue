<template>
  <div class="section-content">
    <h1>4.5.3 The 2-Local Frustration-Free Hamiltonians</h1>

    <p>While the frustration-free problem is QMA-complete for k ≥ 3, a remarkable simplification occurs for 2-local Hamiltonians on qubits: the problem becomes solvable in polynomial time using semidefinite programming. This dramatic complexity transition reveals a fundamental threshold in quantum many-body physics and computation.</p>

    <h2>Problem Statement</h2>

    <div class="highlight-box">
      <h3>2-Local Frustration-Free Problem</h3>

      <p><strong>Input:</strong></p>
      <ul>
        <li>2-local Hamiltonian on n qubits: H = Σ_{(i,j)∈E} h_{ij}</li>
        <li>Each h_{ij} acts on qubits i and j only (4×4 Hermitian matrix)</li>
        <li>Interaction graph G = (V, E) with vertices = qubits, edges = interactions</li>
      </ul>

      <p><strong>Question:</strong> Does there exist a state |ψ⟩ on n qubits such that:</p>
      <div class="equation">
        ⟨ψ|h_{ij}|ψ⟩ = λ_{ij}^{min}  for all (i,j) ∈ E
      </div>
      <p>where λ_{ij}^{min} is the minimum eigenvalue of h_{ij}</p>

      <p><strong>Equivalently:</strong> Is the ground state energy equal to the sum of minimum eigenvalues?</p>
      <div class="equation">
        E_0(H) = Σ_{(i,j)∈E} λ_{ij}^{min}
      </div>
    </div>

    <div class="info-box">
      <h3>Why Restrict to Qubits?</h3>

      <p><strong>Crucial limitation:</strong> Algorithm works for qubits (d = 2) but NOT for higher-dimensional systems!</p>

      <p><strong>Complexity for qudits (d ≥ 3):</strong></p>
      <ul>
        <li>2-local on qutrits (d = 3): <strong>QMA-complete</strong></li>
        <li>Hardness persists even with locality k = 2</li>
        <li>Local dimension d ≥ 3 is sufficient for quantum complexity</li>
      </ul>

      <p><strong>Key insight:</strong> Both low locality (k = 2) AND low dimension (d = 2) needed for tractability</p>
    </div>

    <h2>Semidefinite Programming Formulation</h2>

    <div class="highlight-box">
      <h3>Reduction to SDP</h3>

      <p><strong>Key observation:</strong> Frustration-free condition involves only 2-body reduced density matrices!</p>

      <p><strong>For 2-local Hamiltonian:</strong></p>
      <ul>
        <li>Each term h_{ij} depends only on 2-body RDM: ρ_{ij} = Tr_{V\{i,j}}[|ψ⟩⟨ψ|]</li>
        <li>Frustration-free ⟺ ⟨ψ|h_{ij}|ψ⟩ = Tr[h_{ij} ρ_{ij}] = λ_{ij}^{min}</li>
      </ul>

      <p><strong>SDP formulation:</strong></p>
      <div class="equation">
        Find: {ρ_{ij} : (i,j) ∈ E}
      </div>
      <p><strong>Subject to:</strong></p>
      <ol>
        <li><strong>2-body constraints:</strong> For all (i,j) ∈ E:
          <ul>
            <li>ρ_{ij} ≥ 0 (positive semidefinite)</li>
            <li>Tr[ρ_{ij}] = 1 (normalized)</li>
            <li>Tr[h_{ij} ρ_{ij}] = λ_{ij}^{min} (minimizes each term)</li>
          </ul>
        </li>
        <li><strong>Consistency constraints:</strong> For all i,j,k:
          <ul>
            <li>Tr_j[ρ_{ij}] = Tr_k[ρ_{ik}] (marginals consistent on qubit i)</li>
          </ul>
        </li>
      </ol>

      <p><strong>Decision:</strong> Is this SDP feasible?</p>
    </div>

    <div class="note-box">
      <h3>Why is This an SDP?</h3>

      <p><strong>Variables:</strong> ρ_{ij} are 4×4 Hermitian matrices (|E| matrices total)</p>

      <p><strong>Constraints:</strong></p>
      <ul>
        <li>ρ_{ij} ≥ 0: Linear matrix inequality (LMI)</li>
        <li>Tr[ρ_{ij}] = 1: Linear equality</li>
        <li>Tr[h_{ij} ρ_{ij}] = λ_{ij}^{min}: Linear equality</li>
        <li>Marginal consistency: Linear equalities (partial traces are linear!)</li>
      </ul>

      <p><strong>Objective:</strong> Feasibility (no optimization needed)</p>

      <p><strong>Complexity:</strong> SDP feasibility solvable in poly(n, |E|) time using interior-point methods</p>
    </div>

    <h2>Algorithm and Correctness</h2>

    <div class="highlight-box">
      <h3>Polynomial-Time Algorithm</h3>

      <p><strong>Input:</strong> 2-local Hamiltonian H = Σ_{(i,j)} h_{ij} on n qubits</p>

      <p><strong>Algorithm:</strong></p>
      <ol>
        <li><strong>Compute minimum eigenvalues:</strong>
          <div class="equation">
            For each (i,j) ∈ E: λ_{ij}^{min} ← min eigenvalue of h_{ij}
          </div>
          <p>Time: O(|E| · 4³) = O(|E|) (diagonalize 4×4 matrices)</p>
        </li>

        <li><strong>Set up SDP:</strong>
          <ul>
            <li>Variables: {ρ_{ij} ∈ ℂ^{4×4} : (i,j) ∈ E}</li>
            <li>Constraints: As described above (positivity, normalization, energy, consistency)</li>
          </ul>
        </li>

        <li><strong>Solve SDP:</strong>
          <p>Use interior-point method (e.g., Mosek, CVXPY, SeDuMi)</p>
          <p>Time: poly(n, |E|) (typically O((n + |E|)³·⁵) or better)</p>
        </li>

        <li><strong>Output:</strong>
          <ul>
            <li>If SDP feasible → H is frustration-free (YES)</li>
            <li>If SDP infeasible → H is not frustration-free (NO)</li>
          </ul>
        </li>
      </ol>

      <p><strong>Total time complexity:</strong> poly(n) ✓</p>
    </div>

    <div class="info-box">
      <h3>Proof of Correctness</h3>

      <p><strong>Direction 1: Frustration-free ⟹ SDP feasible</strong></p>

      <p><strong>Proof:</strong></p>
      <ul>
        <li>Suppose H has frustration-free ground state |ψ⟩</li>
        <li>Define ρ_{ij} = Tr_{V\{i,j}}[|ψ⟩⟨ψ|] (2-body RDM from |ψ⟩)</li>
        <li>Then:
          <ol>
            <li>ρ_{ij} ≥ 0, Tr[ρ_{ij}] = 1 ✓ (valid density matrices)</li>
            <li>Tr[h_{ij} ρ_{ij}] = ⟨ψ|h_{ij}|ψ⟩ = λ_{ij}^{min} ✓ (frustration-free condition)</li>
            <li>Marginals consistent ✓ (all from same global state |ψ⟩)</li>
          </ol>
        </li>
        <li>Thus {ρ_{ij}} is feasible solution to SDP</li>
      </ul>

      <p><strong>Direction 2: SDP feasible ⟹ Frustration-free</strong></p>

      <p><strong>Proof (qubits only!):</strong></p>
      <ul>
        <li>Suppose SDP has feasible solution {ρ_{ij}}</li>
        <li><strong>Key theorem (Doherty-Parrilo-Spedalieri, 2004):</strong>
          <p>For qubits, 1-body and 2-body marginal consistency implies existence of global state!</p>
        </li>
        <li>Define ρ_i = Tr_j[ρ_{ij}] for any neighbor j (well-defined by consistency)</li>
        <li>By quantum marginal problem on qubits: there exists global |ψ⟩ such that:
          <ul>
            <li>Tr_{V\{i}}[|ψ⟩⟨ψ|] = ρ_i for all i</li>
            <li>Tr_{V\{i,j}}[|ψ⟩⟨ψ|] = ρ_{ij} for all (i,j)</li>
          </ul>
        </li>
        <li>This |ψ⟩ satisfies ⟨ψ|h_{ij}|ψ⟩ = λ_{ij}^{min} → frustration-free! ✓</li>
      </ul>

      <p><strong>Conclusion:</strong> Algorithm is correct for qubits</p>
    </div>

    <h2>Connection to Quantum Marginal Problem</h2>

    <div class="highlight-box">
      <h3>Why Qubits are Special</h3>

      <p><strong>Quantum marginal problem (Section 4.4.2):</strong></p>
      <ul>
        <li>Given: Collection of k-body RDMs {ρ_S : |S| = k}</li>
        <li>Question: Do they arise from a global n-body state?</li>
        <li>General problem: NP-hard</li>
      </ul>

      <p><strong>Special case for qubits:</strong></p>
      <ul>
        <li><strong>Theorem (DPS 2004):</strong> For qubits, 1- and 2-body marginals satisfying local consistency constraints come from global state</li>
        <li>Can be verified via SDP hierarchy (level 1 suffices for qubits!)</li>
        <li>Forms basis of 2-local frustration-free algorithm</li>
      </ul>

      <p><strong>Breakdown for qudits (d ≥ 3):</strong></p>
      <ul>
        <li>1- and 2-body marginals NOT sufficient to guarantee global state</li>
        <li>Need higher levels of SDP hierarchy → exponential cost</li>
        <li>This is why 2-local qudits remain QMA-hard!</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Geometric Interpretation</h3>

      <p><strong>Qubit marginal polytope:</strong></p>
      <ul>
        <li>Set of all consistent 1- and 2-body RDMs forms convex polytope</li>
        <li>For qubits: polytope defined by simple linear constraints (Pauli correlations)</li>
        <li>Extremal points correspond to product states (separable)</li>
      </ul>

      <p><strong>Frustration-free condition:</strong></p>
      <ul>
        <li>Asks if polytope intersects "energy surface" {ρ : Tr[h_{ij} ρ_{ij}] = λ_{ij}^{min}}</li>
        <li>Both polytope and surface described by linear/SDP constraints</li>
        <li>Intersection = SDP feasibility!</li>
      </ul>
    </div>

    <h2>Connection to 2-QSAT</h2>

    <div class="highlight-box">
      <h3>Quantum Satisfiability</h3>

      <p><strong>k-QSAT problem:</strong></p>
      <ul>
        <li>Given: k-local Hamiltonian H = Σ_i h_i where each h_i is projector</li>
        <li>Question: Does there exist |ψ⟩ such that h_i|ψ⟩ = 0 for all i?</li>
        <li>Equivalently: Can all constraints be satisfied?</li>
      </ul>

      <p><strong>Complexity:</strong></p>
      <ul>
        <li><strong>2-QSAT:</strong> In P (polynomial time) — exactly our result!</li>
        <li><strong>3-QSAT:</strong> QMA-complete (Bravyi, 2006)</li>
      </ul>

      <p><strong>Relation to frustration-free:</strong></p>
      <ul>
        <li>k-QSAT is special case of frustration-free (all h_i are projectors)</li>
        <li>Frustration-free allows arbitrary local Hamiltonians</li>
        <li>Same complexity threshold at k = 2 vs k = 3</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Classical Comparison: 2-SAT vs 3-SAT</h3>

      <p><strong>Classical k-SAT:</strong></p>
      <ul>
        <li>Boolean variables x₁, ..., x_n ∈ {0, 1}</li>
        <li>Clauses: disjunctions of k literals</li>
        <li>Question: Can all clauses be satisfied?</li>
      </ul>

      <p><strong>Complexity:</strong></p>
      <ul>
        <li><strong>2-SAT:</strong> In P (linear-time algorithm via implication graph)</li>
        <li><strong>3-SAT:</strong> NP-complete (Cook's theorem)</li>
      </ul>

      <p><strong>Parallel structure:</strong></p>
      <div class="equation">
        Classical: 2-SAT (P) → 3-SAT (NP-complete)
      </div>
      <div class="equation">
        Quantum: 2-QSAT (P) → 3-QSAT (QMA-complete)
      </div>

      <p><strong>Universal principle:</strong> Complexity threshold appears at locality/clause size k = 3!</p>
    </div>

    <h2>Examples and Applications</h2>

    <div class="highlight-box">
      <h3>Example 1: Chain Hamiltonian</h3>

      <p><strong>1D chain:</strong></p>
      <div class="equation">
        H = Σ_{i=1}^{n-1} h_{i,i+1}
      </div>

      <p><strong>Algorithm:</strong></p>
      <ol>
        <li>Compute λ_i^{min} for each nearest-neighbor term</li>
        <li>Set up SDP with variables {ρ_{i,i+1} : i = 1, ..., n-1}</li>
        <li>Consistency: Tr₂[ρ_{i,i+1}] = Tr₁[ρ_{i+1,i+2}] for all i</li>
        <li>Solve SDP to determine frustration-freeness</li>
      </ol>

      <p><strong>Example systems:</strong></p>
      <ul>
        <li>Heisenberg chain: H = Σ_i S_i · S_{i+1}</li>
        <li>XY model: H = Σ_i (σ_i^x σ_{i+1}^x + σ_i^y σ_{i+1}^y)</li>
        <li>Transverse-field Ising: H = Σ_i (-σ_i^z σ_{i+1}^z - h σ_i^x)</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Example 2: Stabilizer Codes</h3>

      <p><strong>Surface code (2-local):</strong></p>
      <div class="equation">
        H = -Σ_v A_v - Σ_p B_p
      </div>
      <ul>
        <li>Each stabilizer A_v, B_p acts on 4 qubits</li>
        <li>But can be decomposed into 2-local terms for SDP</li>
      </ul>

      <p><strong>Verification:</strong></p>
      <ul>
        <li>Use algorithm to verify frustration-freeness</li>
        <li>Check consistency of code construction</li>
        <li>Optimize parameters for error correction</li>
      </ul>

      <p><strong>Application:</strong> Design and verification of quantum error-correcting codes</p>
    </div>

    <div class="info-box">
      <h3>Example 3: Quantum Annealing</h3>

      <p><strong>Annealing Hamiltonian:</strong></p>
      <div class="equation">
        H(s) = (1-s) H_0 + s H_f,  s ∈ [0,1]
      </div>
      <ul>
        <li>H_0: Initial frustration-free Hamiltonian (easy)</li>
        <li>H_f: Final (problem) Hamiltonian</li>
      </ul>

      <p><strong>Strategy:</strong></p>
      <ol>
        <li>Use SDP to verify H_0 is frustration-free</li>
        <li>Track when frustration develops as s increases</li>
        <li>Identify phase transitions and gap closings</li>
        <li>Optimize annealing schedule</li>
      </ol>

      <p><strong>Platforms:</strong> D-Wave, trapped ions, superconducting qubits</p>
    </div>

    <h2>Practical Implementation</h2>

    <div class="highlight-box">
      <h3>SDP Solvers and Tools</h3>

      <p><strong>Popular SDP solvers:</strong></p>
      <ul>
        <li><strong>CVXPY (Python):</strong> High-level modeling language
          <ul>
            <li>Backends: SCS, MOSEK, ECOS</li>
            <li>Easy to formulate and solve SDPs</li>
          </ul>
        </li>
        <li><strong>MOSEK:</strong> Commercial-grade solver
          <ul>
            <li>Fast interior-point methods</li>
            <li>Handles large-scale problems</li>
          </ul>
        </li>
        <li><strong>SeDuMi/SDPT3 (MATLAB):</strong> Classic SDP solvers</li>
        <li><strong>Julia JuMP:</strong> Modern optimization framework</li>
      </ul>

      <p><strong>Typical performance:</strong></p>
      <ul>
        <li>Small systems (n ≲ 20): Seconds</li>
        <li>Medium systems (n ≲ 100): Minutes</li>
        <li>Large systems (n ≲ 1000): Hours (depends on interaction graph)</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Numerical Considerations</h3>

      <p><strong>Precision:</strong></p>
      <ul>
        <li>SDPs solved to numerical precision (ε ≈ 10⁻⁶ to 10⁻⁸)</li>
        <li>Near-infeasibility can be ambiguous</li>
        <li>May need to check residuals and duality gap</li>
      </ul>

      <p><strong>Scalability:</strong></p>
      <ul>
        <li>Bottleneck: Number of 2-body RDM variables ~ |E|</li>
        <li>Sparse interaction graphs (chains, lattices) scale better</li>
        <li>Dense graphs (all-to-all) become challenging for large n</li>
      </ul>

      <p><strong>Optimization:</strong></p>
      <ul>
        <li>Exploit symmetries to reduce variable count</li>
        <li>Use translation invariance for periodic systems</li>
        <li>Warm-start with approximate solutions</li>
      </ul>
    </div>

    <h2>Extensions and Variants</h2>

    <div class="comparison-box">
      <h3>Related Problems</h3>
      <table class="comparison-table">
        <tr>
          <th>Problem</th>
          <th>Description</th>
          <th>Complexity</th>
        </tr>
        <tr>
          <td><strong>2-local qubits</strong></td>
          <td>Frustration-free (this section)</td>
          <td>P (SDP)</td>
        </tr>
        <tr>
          <td><strong>2-local qudits</strong></td>
          <td>d ≥ 3 local dimension</td>
          <td>QMA-complete</td>
        </tr>
        <tr>
          <td><strong>Commuting 2-local</strong></td>
          <td>[h_{ij}, h_{kℓ}] = 0 for all pairs</td>
          <td>In NP (classical verification)</td>
        </tr>
        <tr>
          <td><strong>Ground state energy</strong></td>
          <td>Compute E_0, not just frustration-free</td>
          <td>QMA-hard (approximation)</td>
        </tr>
        <tr>
          <td><strong>Approximate frustration-free</strong></td>
          <td>Allow ε-slack in energy</td>
          <td>Open (approximation hierarchy)</td>
        </tr>
      </table>
    </div>

    <div class="info-box">
      <h3>Open Questions</h3>

      <p><strong>1. Intermediate dimensions:</strong></p>
      <ul>
        <li>What about d = 2.5? (via embedding techniques)</li>
        <li>Characterize exact threshold dimension d*</li>
      </ul>

      <p><strong>2. Graph structure:</strong></p>
      <ul>
        <li>Are trees easier than general graphs?</li>
        <li>Role of treewidth and entanglement width</li>
      </ul>

      <p><strong>3. Approximation:</strong></p>
      <ul>
        <li>Can we approximate minimum frustration efficiently?</li>
        <li>SDP relaxations for k ≥ 3?</li>
      </ul>

      <p><strong>4. Physical realizability:</strong></p>
      <ul>
        <li>Given frustration-free certificate, can we prepare ground state efficiently?</li>
        <li>Connection to adiabatic state preparation</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Main result:</strong> 2-local frustration-free on qubits solvable in polynomial time via SDP</li>
        <li><strong>Algorithm:</strong> Check consistency of 2-body RDMs minimizing each term</li>
        <li><strong>Correctness:</strong> Relies on quantum marginal problem being easy for qubits</li>
        <li><strong>Limitation:</strong> Breaks down for qudits (d ≥ 3) → QMA-complete</li>
        <li><strong>Connection:</strong> 2-QSAT in P, analogous to classical 2-SAT</li>
        <li><strong>Threshold:</strong> k = 3 marks onset of complexity (classical and quantum)</li>
        <li><strong>Applications:</strong> Code design, quantum annealing, ground state verification</li>
        <li><strong>Practice:</strong> Implemented efficiently via standard SDP solvers</li>
      </ul>

      <p><strong>Next:</strong> Section 4.6 summarizes Chapter 4 and connects to broader quantum information and condensed matter landscape.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_5_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
