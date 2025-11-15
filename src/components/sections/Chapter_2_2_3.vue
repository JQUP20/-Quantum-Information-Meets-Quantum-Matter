<template>
  <div class="section-content">
    <h1>2.2.3 N-Qubit Unitary</h1>

    <h2>The N-Qubit Hilbert Space</h2>
    <p>An N-qubit system has a 2^N-dimensional Hilbert space with computational basis states:</p>

    <div class="equation">
      |x⟩ = |x_{N-1}...x_1 x_0⟩,  where x_i ∈ {0,1}
    </div>

    <p>The general state is:</p>
    <div class="equation">
      |ψ⟩ = Σ_{x=0}^{2^N-1} α_x |x⟩,  with Σ_x |α_x|² = 1
    </div>

    <div class="note-box">
      <h3>Exponential Growth</h3>
      <p>The state space dimension grows exponentially with qubit number:</p>
      <ul>
        <li>1 qubit: 2 complex amplitudes</li>
        <li>10 qubits: 1,024 amplitudes</li>
        <li>50 qubits: ~10^15 amplitudes (beyond classical simulation)</li>
        <li>300 qubits: More parameters than atoms in the universe!</li>
      </ul>
      <p>This exponential scaling is both the power and challenge of quantum systems.</p>
    </div>

    <h2>Multi-Controlled Gates</h2>

    <h3>The Toffoli Gate (CCNOT)</h3>
    <div class="highlight-box">
      <p>The <strong>Toffoli gate</strong> flips the target qubit if and only if both control qubits are |1⟩:</p>
      <div class="equation">
        Toffoli|a,b,c⟩ = |a, b, c ⊕ (a ∧ b)⟩
      </div>
      <p><strong>Truth table:</strong></p>
      <ul>
        <li>|110⟩ → |111⟩ (flip target)</li>
        <li>|111⟩ → |110⟩ (flip target)</li>
        <li>All other inputs unchanged</li>
      </ul>

      <h4>Key Properties:</h4>
      <ul>
        <li><strong>Universal for classical computation:</strong> Toffoli + NOT gate can simulate any classical circuit</li>
        <li><strong>Reversible:</strong> Toffoli² = I</li>
        <li><strong>Not maximally entangling:</strong> Can preserve some product states</li>
      </ul>
    </div>

    <h3>Decomposing Toffoli into Two-Qubit Gates</h3>
    <div class="info-box">
      <p>The Toffoli gate can be decomposed into 6 CNOTs and single-qubit gates:</p>
      <div class="equation">
        Toffoli = (series of 6 CNOTs + 9 single-qubit gates)
      </div>
      <p>This decomposition shows that multi-qubit gates can be built from two-qubit primitives, though at the cost of circuit depth.</p>
    </div>

    <h3>The Fredkin Gate (CSWAP)</h3>
    <div class="info-box">
      <p>The <strong>Fredkin gate</strong> swaps qubits 2 and 3 if and only if qubit 1 is |1⟩:</p>
      <div class="equation">
        Fredkin|a,b,c⟩ = |a⟩ ⊗ [|b,c⟩ if a=0, |c,b⟩ if a=1]
      </div>
      <p>Like Toffoli, Fredkin is universal for classical computation and can be decomposed into CNOTs.</p>
    </div>

    <h2>The Quantum Fourier Transform</h2>
    <p>One of the most important N-qubit unitaries is the <strong>Quantum Fourier Transform (QFT)</strong>:</p>

    <div class="highlight-box">
      <h3>QFT Definition</h3>
      <div class="equation">
        QFT|x⟩ = (1/√(2^N)) Σ_{y=0}^{2^N-1} e^(2πixy/2^N) |y⟩
      </div>

      <p>For N qubits, this is the discrete Fourier transform on the computational basis.</p>

      <h4>Key Applications:</h4>
      <ul>
        <li><strong>Shor's algorithm:</strong> Factoring integers in polynomial time</li>
        <li><strong>Phase estimation:</strong> Finding eigenvalues of unitary operators</li>
        <li><strong>Quantum simulation:</strong> Evolving quantum systems efficiently</li>
      </ul>
    </div>

    <h3>QFT Circuit Decomposition</h3>
    <div class="info-box">
      <p>The QFT can be implemented with O(N²) gates:</p>
      <ul>
        <li>N Hadamard gates</li>
        <li>N(N-1)/2 controlled-phase gates</li>
        <li>Swap gates for bit reversal</li>
      </ul>
      <p>This is exponentially more efficient than classical FFT when accounting for the exponential input size 2^N!</p>
    </div>

    <h2>Gate Decomposition and Circuit Depth</h2>

    <div class="comparison-box">
      <h3>Comparison: Classical vs Quantum</h3>
      <table class="comparison-table">
        <tr>
          <th>Operation</th>
          <th>Classical (N bits)</th>
          <th>Quantum (N qubits)</th>
        </tr>
        <tr>
          <td>Fourier Transform</td>
          <td>O(N · 2^N) (FFT)</td>
          <td>O(N²) gates</td>
        </tr>
        <tr>
          <td>State Preparation</td>
          <td>O(2^N) to specify</td>
          <td>O(poly(N)) gates (for many states)</td>
        </tr>
        <tr>
          <td>Toffoli Gate</td>
          <td>Native operation</td>
          <td>O(1) CNOTs (typically 6)</td>
        </tr>
        <tr>
          <td>Controlled-U^(2^k)</td>
          <td>Not applicable</td>
          <td>Can be efficient for some U</td>
        </tr>
      </table>
    </div>

    <h2>Universal Gate Sets for N Qubits</h2>
    <div class="highlight-box">
      <h3>Universality Theorems</h3>
      <p>Any N-qubit unitary can be approximated to arbitrary precision using:</p>
      <ul>
        <li><strong>Continuous set:</strong> {All single-qubit gates, CNOT}</li>
        <li><strong>Discrete set:</strong> {H, T, CNOT} (Clifford + T)</li>
        <li><strong>Alternative:</strong> {All single-qubit gates, any entangling two-qubit gate}</li>
      </ul>

      <h4>Gate Count Scaling:</h4>
      <p>An arbitrary N-qubit unitary requires:</p>
      <div class="equation">
        O(4^N / N) two-qubit gates
      </div>
      <p>This is exponential but still more efficient than the 2^N × 2^N matrix representation!</p>
    </div>

    <h2>Special Classes of N-Qubit Gates</h2>

    <h3>1. Clifford Gates</h3>
    <div class="info-box">
      <p>Gates that map Pauli operators to Pauli operators under conjugation:</p>
      <div class="equation">
        C ∈ Clifford  ⟺  C · P · C† ∈ {Pauli group}
      </div>
      <p><strong>Examples:</strong> H, S, CNOT, CZ</p>
      <p><strong>Property:</strong> Clifford circuits can be efficiently simulated classically (Gottesman-Knill theorem)</p>
    </div>

    <h3>2. Diagonal Gates</h3>
    <div class="info-box">
      <p>Gates that are diagonal in the computational basis:</p>
      <div class="equation">
        D|x⟩ = e^(iθ_x) |x⟩
      </div>
      <p>Examples: Z gates, phase gates, controlled-phase gates</p>
    </div>

    <h3>3. Permutation Gates</h3>
    <div class="info-box">
      <p>Gates that permute computational basis states:</p>
      <div class="equation">
        P|x⟩ = |π(x)⟩
      </div>
      <p>Examples: X gates, SWAP, Toffoli (restricted)</p>
    </div>

    <h2>Quantum Circuit Complexity</h2>

    <h3>Circuit Depth</h3>
    <div class="note-box">
      <p>The <strong>depth</strong> of a quantum circuit is the longest path from input to output, counting only non-commuting gates.</p>
      <p><strong>Parallel gates:</strong> Gates on non-overlapping qubits can execute simultaneously.</p>

      <h4>Example Depths:</h4>
      <ul>
        <li><strong>QFT:</strong> O(N²) gates, O(N²) depth (can be reduced to O(N log N))</li>
        <li><strong>Grover search:</strong> O(√(2^N)) iterations, each with O(N) depth</li>
        <li><strong>Quantum Phase Estimation:</strong> O(N) controlled-U gates, O(N²) total depth</li>
      </ul>
    </div>

    <h3>Circuit Width</h3>
    <p>The <strong>width</strong> is the number of qubits used. This determines:</p>
    <ul>
      <li>Physical resource requirements</li>
      <li>Error correction overhead</li>
      <li>Connectivity constraints on hardware</li>
    </ul>

    <h2>Ancilla Qubits</h2>
    <div class="info-box">
      <p><strong>Ancilla (helper) qubits</strong> are additional qubits used temporarily in computations:</p>
      <ul>
        <li><strong>Borrowing:</strong> Use ancilla and return it unchanged</li>
        <li><strong>Uncomputing:</strong> Reverse operations to restore ancilla to |0⟩</li>
        <li><strong>Trade-off:</strong> More ancillas can reduce circuit depth (space-time trade-off)</li>
      </ul>

      <h4>Example: Toffoli with Ancilla</h4>
      <p>With one clean ancilla, Toffoli can be implemented with 4 CNOTs instead of 6!</p>
    </div>

    <h2>Quantum Circuit Optimization</h2>

    <h3>Common Optimizations</h3>
    <ul>
      <li><strong>Gate cancellation:</strong> XX = I, HH = I, etc.</li>
      <li><strong>Gate commutation:</strong> Reorder gates to reduce depth</li>
      <li><strong>Template matching:</strong> Replace inefficient sequences with optimized equivalents</li>
      <li><strong>Synthesis:</strong> Use KAK, QSD, or other decompositions</li>
    </ul>

    <h3>Compilation for Hardware</h3>
    <div class="note-box">
      <p>Real quantum hardware has constraints:</p>
      <ul>
        <li><strong>Limited connectivity:</strong> Not all qubit pairs can interact directly</li>
        <li><strong>Native gate set:</strong> Only specific gates available</li>
        <li><strong>Gate duration:</strong> Minimize total execution time</li>
      </ul>

      <p><strong>SWAP insertion:</strong> Add SWAP gates to route qubits for distant interactions, increasing depth by O(N) or more.</p>
    </div>

    <h2>Variational Quantum Circuits</h2>
    <div class="highlight-box">
      <h3>Parameterized Quantum Circuits (PQC)</h3>
      <p>Modern quantum algorithms use circuits with tunable parameters:</p>
      <div class="equation">
        U(θ) = U_L(θ_L) ··· U_2(θ_2) U_1(θ_1)
      </div>
      <p>where each U_i(θ_i) is a parameterized gate (typically rotation).</p>

      <h4>Applications:</h4>
      <ul>
        <li><strong>VQE:</strong> Variational Quantum Eigensolver for chemistry</li>
        <li><strong>QAOA:</strong> Quantum Approximate Optimization Algorithm</li>
        <li><strong>Quantum Machine Learning:</strong> Trainable quantum neural networks</li>
      </ul>
    </div>

    <h2>Entanglement Structure in N-Qubit Gates</h2>
    <div class="info-box">
      <p>Different circuit architectures create different entanglement patterns:</p>
      <ul>
        <li><strong>Linear chains:</strong> Nearest-neighbor gates only (O(N) connectivity)</li>
        <li><strong>All-to-all:</strong> Any qubit pair can interact (O(N²) gates possible)</li>
        <li><strong>Ladder/grid:</strong> 2D connectivity (common in ion traps, superconducting)</li>
      </ul>

      <p><strong>Entanglement depth:</strong> Number of two-qubit layers needed to generate multipartite entanglement.</p>
    </div>

    <h2>The Solovay-Kitaev Theorem (N-Qubit Version)</h2>
    <div class="note-box">
      <p>Any N-qubit unitary from a continuous family can be approximated to precision ε using:</p>
      <div class="equation">
        O(N · log^c(1/ε))
      </div>
      <p>gates from a finite universal set, where c ≈ 2-4 depending on the gate set.</p>
      <p>This guarantees efficient compilation even with discrete gate sets.</p>
    </div>

    <h2>Outlook: From Gates to Algorithms</h2>
    <div class="preview-box">
      <h4>Next Steps (Section 2.3):</h4>
      <p>Now that we understand individual gates, we'll explore:</p>
      <ul>
        <li>How to combine gates into quantum algorithms</li>
        <li>Circuit design principles</li>
        <li>Quantum speedup mechanisms</li>
        <li>Resource estimation for practical quantum computing</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_2_2_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
