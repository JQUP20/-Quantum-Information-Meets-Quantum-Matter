<template>
  <div class="section-content">
    <h1>4.4.2 The Quantum Marginal Problem</h1>

    <p>The quantum marginal problem asks a deceptively simple question: given several reduced density matrices, can they all arise from a single global quantum state? This problem has deep connections to quantum state tomography, many-body correlations, and computational complexity.</p>

    <h2>Problem Statement</h2>

    <div class="highlight-box">
      <h3>Quantum Marginal Problem</h3>

      <p><strong>Input:</strong> A collection of density matrices {ρ_A : A ⊆ [N]} defined on various subsystems A of N particles.</p>

      <p><strong>Question:</strong> Does there exist a global state ρ on all N particles such that:</p>
      <div class="equation">
        Tr_{\bar{A}}[ρ] = ρ_A &nbsp;&nbsp; for all A
      </div>

      <p>where \bar{A} denotes the complement of subsystem A?</p>

      <p><strong>Terminology:</strong> We say {ρ_A} are <em>compatible</em> or <em>consistent</em> if such a global ρ exists.</p>
    </div>

    <div class="info-box">
      <h3>Motivation from Experiment</h3>

      <p><strong>Quantum state tomography:</strong></p>
      <ul>
        <li>Measure many copies of unknown N-particle state</li>
        <li>Extract reduced density matrices ρ_A for small subsystems A</li>
        <li><strong>Question:</strong> Do these measurements come from a consistent global state?</li>
        <li><strong>Challenge:</strong> Statistical noise may make measurements incompatible</li>
      </ul>

      <p><strong>Many-body state reconstruction:</strong></p>
      <ul>
        <li>Can we reconstruct full N-particle state from local information?</li>
        <li>If yes, how much local information is needed?</li>
        <li>Related to holography and AdS/CFT correspondence</li>
      </ul>
    </div>

    <h2>Necessary Conditions for Compatibility</h2>

    <div class="highlight-box">
      <h3>Basic Requirements</h3>

      <p>For{ρ_A} to be compatible, they must satisfy:</p>

      <p><strong>1. Normalization:</strong></p>
      <div class="equation">
        Tr[ρ_A] = 1 &nbsp;&nbsp; for all A
      </div>

      <p><strong>2. Positivity:</strong></p>
      <div class="equation">
        ρ_A ≥ 0 &nbsp;&nbsp; for all A
      </div>

      <p><strong>3. Consistency (hierarchical compatibility):</strong></p>
      <p>For any A ⊆ B ⊆ [N]:</p>
      <div class="equation">
        Tr_{B \setminus A}[ρ_B] = ρ_A
      </div>

      <p><strong>Example:</strong> If given ρ_{12}, ρ_{123}, must have Tr_3[ρ_{123}] = ρ_{12}</p>
    </div>

    <div class="note-box">
      <h3>Are These Sufficient?</h3>

      <p><strong>Answer: NO!</strong></p>

      <p>Even if all basic conditions hold, {ρ_A} may still be incompatible.</p>

      <p><strong>Simple example (3 qubits):</strong></p>
      <ul>
        <li>Given ρ_1, ρ_2, ρ_3, ρ_{12}, ρ_{13}, ρ_{23}</li>
        <li>All consistency conditions satisfied</li>
        <li>But no global ρ_{123} may exist!</li>
      </ul>

      <p><strong>Reason:</strong> Hidden correlations constrained by monogamy of entanglement</p>
    </div>

    <h2>Computational Complexity</h2>

    <div class="highlight-box">
      <h3>Hardness Result</h3>

      <p><strong>Theorem (Liu et al., 2007):</strong> The quantum marginal problem is <strong>NP-hard</strong>.</p>

      <p><strong>More precisely:</strong></p>
      <ul>
        <li>Given k-particle marginals {ρ_S : |S| = k}</li>
        <li>Deciding compatibility is NP-hard for k ≥ 2</li>
        <li>Even for pure states, problem remains hard</li>
      </ul>

      <p><strong>Proof approach:</strong> Reduction from 3-SAT via constraint satisfaction</p>
    </div>

    <div class="comparison-box">
      <h3>Complexity Hierarchy</h3>
      <table class="comparison-table">
        <tr>
          <th>Marginal Type</th>
          <th>Complexity</th>
          <th>Notes</th>
        </tr>
        <tr>
          <td><strong>1-particle marginals</strong></td>
          <td>P (easy)</td>
          <td>Simple linear constraints</td>
        </tr>
        <tr>
          <td><strong>2-particle marginals</strong></td>
          <td>NP-hard</td>
          <td>First hard case</td>
        </tr>
        <tr>
          <td><strong>k-particle (k ≥ 2)</strong></td>
          <td>NP-hard</td>
          <td>General case</td>
        </tr>
        <tr>
          <td><strong>Pure state marginals</strong></td>
          <td>NP-hard</td>
          <td>Not easier than mixed</td>
        </tr>
        <tr>
          <td><strong>All (N-1)-particle</strong></td>
          <td>P (polynomial)</td>
          <td>Enough to reconstruct ρ</td>
        </tr>
      </table>
    </div>

    <h2>Connection to Monogamy of Entanglement</h2>

    <div class="info-box">
      <h3>Entanglement Monogamy</h3>

      <p>The incompatibility of marginals reflects fundamental quantum constraints:</p>

      <p><strong>Strong subadditivity (SSA):</strong></p>
      <div class="equation">
        S(A) + S(B) ≥ S(AB) + S(A ∩ B)
      </div>

      <p>For disjoint A, B:</p>
      <div class="equation">
        S(A) + S(B) ≥ S(AB)
      </div>

      <p><strong>Monogamy inequality (pure states):</strong></p>
      <div class="equation">
        S(A:C) ≥ S(A:B) + S(B:C)
      </div>

      <p>where S(A:B) = S(A) + S(B) - S(AB) is mutual information.</p>

      <p><strong>Implication:</strong> If A is maximally entangled with B, it cannot be entangled with C!</p>
    </div>

    <h2>Semidefinite Programming Approach</h2>

    <div class="note-box">
      <h3>SDP Relaxation</h3>

      <p>Although NP-hard in general, SDP provides practical test:</p>

      <p><strong>Compatibility SDP:</strong></p>
      <div class="equation">
        find: ρ<br/>
        subject to: ρ ≥ 0, Tr[ρ] = 1<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tr_{\bar{A}}[ρ] = ρ_A  for all A
      </div>

      <p><strong>Result:</strong></p>
      <ul>
        <li>If SDP feasible → marginals ARE compatible</li>
        <li>If SDP infeasible → marginals NOT compatible</li>
        <li>Polynomial-time algorithm!</li>
      </ul>

      <p><strong>Caveat:</strong> Exponential memory (need to represent full ρ)</p>

      <p><strong>Practical workaround:</strong> Use low-rank approximations or tensor networks</p>
    </div>

    <h2>Applications</h2>

    <div class="highlight-box">
      <h3>Physical Applications</h3>

      <p><strong>1. Reduced Density Matrix Functional Theory (RDMFT):</strong></p>
      <ul>
        <li>Goal: Determine ground state from 2-RDM alone</li>
        <li>Energy E = Tr[H ρ^{(2)}] for 2-local H</li>
        <li><strong>Challenge:</strong> Which 2-RDM are N-representable? (See Section 4.4.3)</li>
      </ul>

      <p><strong>2. Quantum State Verification:</strong></p>
      <ul>
        <li>Check if experimental data consistent with quantum mechanics</li>
        <li>Detect measurement errors or decoherence</li>
        <li>Validate quantum simulators</li>
      </ul>

      <p><strong>3. Entanglement Detection:</strong></p>
      <ul>
        <li>Marginals constrained by entanglement structure</li>
        <li>Incompatibility may signal non-classical correlations</li>
        <li>Witness-free entanglement certification</li>
      </ul>
    </div>

    <h2>Quantum de Finetti Theorem (Preview)</h2>

    <div class="note-box">
      <h3>Symmetric States</h3>

      <p>For <strong>permutation-symmetric</strong> states, marginal problem simplifies dramatically:</p>

      <p><strong>Quantum de Finetti Theorem:</strong></p>
      <p>If ρ is symmetric under particle permutations, then k-particle marginals approximately determine the full state for k << N.</p>

      <div class="equation">
        ||ρ_k - ∫ |ψ⟩⟨ψ|^{⊗k} dμ(ψ)||_1 ≤ O(k²/N)
      </div>

      <p><strong>Implication:</strong> Symmetric states behave like mixtures of product states—much simpler structure!</p>

      <p><strong>Application:</strong> Justifies mean-field theory for bosonic systems (Section 4.4.4)</p>
    </div>

    <h2>Open Problems</h2>

    <div class="info-box">
      <h3>Fundamental Questions</h3>

      <ul>
        <li><strong>Complete characterization:</strong> What are ALL necessary and sufficient conditions for compatibility?</li>
        <li><strong>Efficient algorithms:</strong> Can we solve marginal problem for special classes faster than SDP?</li>
        <li><strong>Approximate compatibility:</strong> If marginals are ε-close to compatible, how close is nearest compatible set?</li>
        <li><strong>Holographic principles:</strong> How much boundary data determines bulk state? (AdS/CFT)</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li>Quantum marginal problem: determine if reduced density matrices {ρ_A} arise from global state ρ</li>
        <li><strong>NP-hard</strong> in general (for k ≥ 2 particle marginals)</li>
        <li>Basic conditions (positivity, normalization, consistency) are necessary but NOT sufficient</li>
        <li>Monogamy of entanglement creates hidden constraints</li>
        <li>SDP provides polynomial-time algorithm (but exponential memory)</li>
        <li>Applications: state tomography, RDMFT, entanglement detection</li>
        <li>Symmetric states (de Finetti) much simpler</li>
      </ul>

      <p><strong>Next:</strong> Section 4.4.3 examines N-representability—when does a 2-RDM come from an N-fermion state?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_4_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
