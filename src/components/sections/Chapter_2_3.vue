<template>
  <div class="section-content">
    <h1>2.3 Quantum Circuits</h1>

    <h2>The Circuit Model of Quantum Computation</h2>
    <p>A <strong>quantum circuit</strong> is a sequence of quantum gates applied to qubits, analogous to classical logic circuits but with profound differences:</p>

    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Classical Circuits</th>
          <th>Quantum Circuits</th>
        </tr>
        <tr>
          <td>Bits: 0 or 1</td>
          <td>Qubits: superposition of |0⟩ and |1⟩</td>
        </tr>
        <tr>
          <td>Gates can be irreversible (AND, OR)</td>
          <td>All gates must be reversible (unitary)</td>
        </tr>
        <tr>
          <td>Fan-out allowed (copy bits)</td>
          <td>No-cloning theorem forbids copying</td>
        </tr>
        <tr>
          <td>Fan-in allowed (multiple inputs)</td>
          <td>All gates have equal input/output qubits</td>
        </tr>
        <tr>
          <td>Intermediate measurements fine</td>
          <td>Measurements collapse superpositions</td>
        </tr>
      </table>
    </div>

    <h2>Circuit Notation</h2>
    <div class="info-box">
      <h3>Standard Conventions</h3>
      <ul>
        <li><strong>Horizontal lines:</strong> Qubit wires (time flows left to right)</li>
        <li><strong>Boxes:</strong> Single-qubit gates (H, X, Y, Z, rotations)</li>
        <li><strong>Vertical lines with controls:</strong> Multi-qubit gates (CNOT, CZ)</li>
        <li><strong>Filled circle (•):</strong> Control qubit (acts if qubit is |1⟩)</li>
        <li><strong>Open circle (○):</strong> Anti-control (acts if qubit is |0⟩)</li>
        <li><strong>⊕ symbol:</strong> Target of CNOT</li>
        <li><strong>Meter symbol:</strong> Measurement in computational basis</li>
      </ul>
    </div>

    <h2>Building Blocks: Universal Gate Sets</h2>

    <h3>Continuous Universal Set</h3>
    <div class="highlight-box">
      <p>The set <strong>{CNOT, R_y(θ), R_z(θ)}</strong> is universal:</p>
      <ul>
        <li>R_y(θ) and R_z(θ) generate all single-qubit rotations</li>
        <li>CNOT provides entanglement</li>
        <li>Together, they can approximate any unitary to arbitrary precision</li>
      </ul>
    </div>

    <h3>Discrete Universal Set: Clifford + T</h3>
    <div class="highlight-box">
      <p>The set <strong>{H, S, CNOT, T}</strong> is universal:</p>
      <ul>
        <li><strong>Clifford gates:</strong> {H, S, CNOT} - efficiently simulable classically</li>
        <li><strong>T gate:</strong> T = diag(1, e^(iπ/4)) - provides non-Clifford element</li>
        <li>Together form a discrete universal set</li>
      </ul>

      <div class="note-box">
        <h4>Why T is Special</h4>
        <p>The T gate is <strong>non-Clifford</strong>, meaning it's the "quantum" part that makes universal quantum computation possible:</p>
        <ul>
          <li>Clifford gates alone → efficient classical simulation (Gottesman-Knill)</li>
          <li>Adding T gates → full quantum computational power</li>
          <li>T gates are also the most expensive in fault-tolerant quantum computing!</li>
        </ul>
      </div>
    </div>

    <h2>Basic Quantum Circuit Patterns</h2>

    <h3>1. Bell State Preparation</h3>
    <div class="info-box">
      <p><strong>Circuit:</strong> H on qubit 1, then CNOT(1→2)</p>
      <div class="equation">
        |00⟩ → (H ⊗ I) → (|0⟩ + |1⟩)|0⟩/√2 → CNOT → (|00⟩ + |11⟩)/√2 = |Φ⁺⟩
      </div>
      <p>Two gates create maximal entanglement!</p>
    </div>

    <h3>2. Quantum Teleportation Circuit</h3>
    <div class="highlight-box">
      <h4>Teleporting an Unknown Qubit State</h4>
      <p><strong>Setup:</strong> Alice wants to send |ψ⟩ to Bob using shared entanglement and 2 classical bits.</p>
      <p><strong>Resources:</strong></p>
      <ul>
        <li>Shared Bell pair |Φ⁺⟩ between Alice and Bob</li>
        <li>Classical communication channel</li>
      </ul>
      <p><strong>Circuit steps:</strong></p>
      <ol>
        <li>Alice performs CNOT(ψ → Bell qubit)</li>
        <li>Alice applies H to |ψ⟩</li>
        <li>Alice measures both qubits → 2 classical bits</li>
        <li>Bob applies corrections based on measurement results</li>
      </ol>
      <p><strong>Result:</strong> Bob's qubit becomes |ψ⟩, Alice's is destroyed (no cloning!)</p>
    </div>

    <h3>3. Superdense Coding</h3>
    <div class="info-box">
      <p>Send 2 classical bits using 1 qubit + shared entanglement:</p>
      <ul>
        <li>Start with shared Bell state |Φ⁺⟩</li>
        <li>Alice applies: I (00), X (01), Z (10), or XZ (11)</li>
        <li>Alice sends her qubit to Bob</li>
        <li>Bob performs Bell measurement → recovers 2 bits</li>
      </ul>
      <p>Entanglement doubles classical communication capacity!</p>
    </div>

    <h2>Quantum Algorithms</h2>

    <h3>Deutsch-Jozsa Algorithm</h3>
    <div class="highlight-box">
      <p><strong>Problem:</strong> Given a function f:{0,1}ⁿ → {0,1}, determine if f is constant or balanced.</p>
      <p><strong>Classical complexity:</strong> O(2ⁿ) queries in worst case</p>
      <p><strong>Quantum complexity:</strong> 1 query!</p>

      <h4>Circuit Structure:</h4>
      <ol>
        <li>Prepare |0⟩⊗ⁿ|1⟩</li>
        <li>Apply H⊗(n+1)</li>
        <li>Apply oracle U_f</li>
        <li>Apply H⊗n to first n qubits</li>
        <li>Measure: |0⟩⊗ⁿ ⟺ f is constant</li>
      </ol>
    </div>

    <h3>Grover's Search Algorithm</h3>
    <div class="info-box">
      <p><strong>Problem:</strong> Find marked item in unsorted database of N = 2ⁿ items</p>
      <p><strong>Classical complexity:</strong> O(N) queries</p>
      <p><strong>Quantum complexity:</strong> O(√N) queries - quadratic speedup!</p>

      <h4>Key Components:</h4>
      <ul>
        <li><strong>Oracle:</strong> Marks solution by phase flip</li>
        <li><strong>Diffusion operator:</strong> Amplifies marked state amplitude</li>
        <li><strong>Iteration:</strong> Repeat ~π√N/4 times</li>
      </ul>
      <p>Applications: NP-complete problems, database search, amplitude amplification</p>
    </div>

    <h3>Quantum Phase Estimation (QPE)</h3>
    <div class="highlight-box">
      <p><strong>Goal:</strong> Estimate eigenvalue θ where U|ψ⟩ = e^(2πiθ)|ψ⟩</p>

      <h4>Circuit Components:</h4>
      <ol>
        <li>Prepare n-qubit register in |0⟩⊗ⁿ (precision register)</li>
        <li>Prepare eigenstate |ψ⟩</li>
        <li>Apply Hadamard to precision register</li>
        <li>Apply controlled-U^(2ʲ) gates</li>
        <li>Apply inverse QFT</li>
        <li>Measure → estimate of θ with n bits precision</li>
      </ol>

      <p><strong>Applications:</strong></p>
      <ul>
        <li>Shor's factoring algorithm</li>
        <li>Quantum chemistry (finding ground states)</li>
        <li>Solving linear systems (HHL algorithm)</li>
      </ul>
    </div>

    <h2>Circuit Depth and Parallelism</h2>
    <div class="note-box">
      <h3>Depth Optimization</h3>
      <p>Gates on non-overlapping qubits can execute in parallel:</p>
      <ul>
        <li><strong>Depth:</strong> Number of time steps (longest path)</li>
        <li><strong>Size:</strong> Total number of gates</li>
        <li><strong>Width:</strong> Number of qubits</li>
      </ul>

      <h4>Depth-Size Trade-offs:</h4>
      <p>Often can reduce depth by adding ancilla qubits and extra gates:</p>
      <div class="equation">
        Depth × Width ≈ constant (for some circuits)
      </div>
    </div>

    <h2>Measurement and Classical Control</h2>

    <h3>Mid-Circuit Measurements</h3>
    <div class="info-box">
      <p>Measurements don't have to wait until the end:</p>
      <ul>
        <li><strong>Measure-and-reset:</strong> Measure qubit, return to |0⟩, reuse</li>
        <li><strong>Conditional operations:</strong> Apply gates based on classical measurement outcomes</li>
        <li><strong>Feedforward:</strong> Use measurement results to control later gates</li>
      </ul>
      <p>Essential for: quantum error correction, magic state distillation, adaptive algorithms</p>
    </div>

    <h3>Deferred Measurement Principle</h3>
    <div class="highlight-box">
      <p><strong>Theorem:</strong> Any circuit with mid-circuit measurements can be converted to one with only final measurements.</p>
      <p>Achieved by using ancilla qubits and controlled gates. Proves measurements don't add fundamental computational power (but very useful in practice!).</p>
    </div>

    <h2>Circuit Identities and Simplifications</h2>
    <div class="info-box">
      <h3>Useful Equivalences</h3>
      <ul>
        <li><strong>Gate cancellation:</strong> U U† = I</li>
        <li><strong>Commutation:</strong> [H ⊗ H, CNOT] ≠ 0 but can move gates past each other carefully</li>
        <li><strong>CNOT chains:</strong> Three CNOTs = SWAP</li>
        <li><strong>Phase kickback:</strong> Controlled-U with eigenstate → phase on control</li>
        <li><strong>Hadamard sandwich:</strong> HXH = Z, HZH = X</li>
      </ul>
    </div>

    <h2>Variational Quantum Algorithms</h2>
    <div class="highlight-box">
      <h3>Parameterized Circuits</h3>
      <p>Modern NISQ (Noisy Intermediate-Scale Quantum) era algorithms use trainable circuits:</p>

      <h4>VQE (Variational Quantum Eigensolver):</h4>
      <ul>
        <li>Prepare ansatz state U(θ)|0⟩</li>
        <li>Measure expectation ⟨H⟩</li>
        <li>Classical optimizer updates θ</li>
        <li>Repeat until convergence</li>
      </ul>

      <h4>QAOA (Quantum Approximate Optimization):</h4>
      <ul>
        <li>Alternating layers: problem Hamiltonian + mixer</li>
        <li>Optimize rotation angles</li>
        <li>Approximate solution to combinatorial optimization</li>
      </ul>
    </div>

    <h2>Circuit Compilation</h2>

    <h3>Hardware-Specific Optimization</h3>
    <div class="note-box">
      <p>Real quantum hardware requires circuit translation:</p>
      <ul>
        <li><strong>Gate set translation:</strong> Convert to native gates</li>
        <li><strong>Qubit routing:</strong> Insert SWAPs for limited connectivity</li>
        <li><strong>Pulse-level compilation:</strong> Convert gates to control pulses</li>
        <li><strong>Crosstalk mitigation:</strong> Avoid simultaneous gates that interfere</li>
      </ul>

      <h4>Compiler Layers:</h4>
      <ol>
        <li>High-level algorithm → Abstract circuit</li>
        <li>Gate synthesis and optimization</li>
        <li>Qubit mapping and routing</li>
        <li>Native gate translation</li>
        <li>Pulse-level instructions</li>
      </ol>
    </div>

    <h2>Circuit Simulation</h2>
    <div class="info-box">
      <h3>Classical Simulation Costs</h3>
      <p>Simulating an n-qubit circuit:</p>
      <ul>
        <li><strong>State vector:</strong> Store 2ⁿ complex amplitudes → ~30-40 qubits max</li>
        <li><strong>Tensor network:</strong> Exploits structure → 50-100 qubits for some circuits</li>
        <li><strong>Clifford circuits:</strong> Polynomial in n (Gottesman-Knill theorem)</li>
      </ul>

      <p><strong>Quantum advantage:</strong> Begins around 50-70 qubits for specialized tasks</p>
    </div>

    <h2>Quantum Circuit Complexity Classes</h2>
    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Circuit Class</th>
          <th>Computational Power</th>
        </tr>
        <tr>
          <td>Clifford + measurements</td>
          <td>Efficiently simulable (Gottesman-Knill)</td>
        </tr>
        <tr>
          <td>Clifford + T</td>
          <td>Universal quantum computation (BQP)</td>
        </tr>
        <tr>
          <td>Constant depth</td>
          <td>Limited power, good for some tasks</td>
        </tr>
        <tr>
          <td>Log-depth</td>
          <td>BQP (polylog depth × poly qubits)</td>
        </tr>
        <tr>
          <td>IQP (Instantaneous)</td>
          <td>Diagonal + Hadamard, likely hard to simulate</td>
        </tr>
      </table>
    </div>

    <h2>Looking Ahead</h2>
    <div class="preview-box">
      <h4>Next: Open Quantum Systems (Section 2.4)</h4>
      <p>So far we've assumed perfect isolated evolution. Reality is messier:</p>
      <ul>
        <li>Decoherence from environment interaction</li>
        <li>Non-unitary dynamics</li>
        <li>Noise and errors in gates</li>
        <li>The need for quantum error correction</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_2_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
