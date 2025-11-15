<template>
  <div class="section-content">
    <h1>3.2.1 Bit Flip Code</h1>

    <h2>The Simplest Quantum Code</h2>
    <p>The <strong>3-qubit bit flip code</strong> is the quantum analog of the classical repetition code. It protects against single X (bit flip) errors—but not Z (phase flip) errors.</p>

    <div class="highlight-box">
      <h3>Encoding Map</h3>
      <p>Logical qubit → 3 physical qubits:</p>
      <div class="equation">
        |0⟩_L → |000⟩
      </div>
      <div class="equation">
        |1⟩_L → |111⟩
      </div>

      <p>General state:</p>
      <div class="equation">
        |ψ⟩_L = α|0⟩_L + β|1⟩_L → |ψ⟩_encoded = α|000⟩ + β|111⟩
      </div>

      <p><strong>Code space:</strong> C = span{|000⟩, |111⟩} ⊂ (ℂ²)⊗³</p>
    </div>

    <h2>Why This Isn't Cloning</h2>
    <div class="note-box">
      <p><strong>Important distinction:</strong></p>
      <ul>
        <li><strong>Cloning would give:</strong> |ψ⟩ ⊗ |ψ⟩ ⊗ |ψ⟩ = (α|0⟩ + β|1⟩)⊗³</li>
        <li><strong>We actually have:</strong> α|000⟩ + β|111⟩ (entangled state!)</li>
      </ul>

      <p>For |+⟩_L = (|0⟩_L + |1⟩_L)/√2:</p>
      <ul>
        <li><strong>Cloning:</strong> |+++⟩ = (|0⟩+|1⟩)(|0⟩+|1⟩)(|0⟩+|1⟩)/2√2 = (|000⟩+|001⟩+|010⟩+...+|111⟩)/2√2</li>
        <li><strong>Encoding:</strong> (|000⟩ + |111⟩)/√2 (only 2 terms!)</li>
      </ul>
    </div>

    <h2>Error Detection: Syndrome Measurement</h2>
    <p>To detect bit flips without measuring the qubits directly, we measure <strong>parity operators</strong>:</p>

    <div class="info-box">
      <h3>Stabilizer Generators</h3>
      <p>Two commuting operators that stabilize the code space:</p>
      <div class="equation">
        S₁ = Z₁Z₂ (parity of qubits 1 and 2)
      </div>
      <div class="equation">
        S₂ = Z₂Z₃ (parity of qubits 2 and 3)
      </div>

      <p><strong>Key property:</strong> S₁|000⟩ = |000⟩ and S₁|111⟩ = |111⟩ (eigenvalue +1)</p>
      <p>Same for S₂. Both logical codewords are +1 eigenstates of S₁ and S₂.</p>
    </div>

    <h3>Syndrome Table</h3>
    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Error</th>
          <th>S₁ = Z₁Z₂</th>
          <th>S₂ = Z₂Z₃</th>
          <th>Syndrome (s₁, s₂)</th>
        </tr>
        <tr>
          <td>I (no error)</td>
          <td>+1</td>
          <td>+1</td>
          <td>(0, 0)</td>
        </tr>
        <tr>
          <td>X₁</td>
          <td>-1</td>
          <td>+1</td>
          <td>(1, 0)</td>
        </tr>
        <tr>
          <td>X₂</td>
          <td>-1</td>
          <td>-1</td>
          <td>(1, 1)</td>
        </tr>
        <tr>
          <td>X₃</td>
          <td>+1</td>
          <td>-1</td>
          <td>(0, 1)</td>
        </tr>
      </table>
    </div>

    <p>Each single-qubit X error gives a unique syndrome!</p>

    <h2>Error Correction Procedure</h2>
    <div class="highlight-box">
      <h3>Step-by-Step Protocol</h3>
      <ol>
        <li><strong>Encoding:</strong> Prepare |ψ⟩_L = α|0⟩_L + β|1⟩_L → α|000⟩ + β|111⟩</li>
        <li><strong>Noisy evolution:</strong> Error E acts: E(α|000⟩ + β|111⟩)</li>
        <li><strong>Syndrome measurement:</strong> 
          <ul>
            <li>Measure S₁ = Z₁Z₂ → outcome s₁ ∈ {0,1}</li>
            <li>Measure S₂ = Z₂Z₃ → outcome s₂ ∈ {0,1}</li>
          </ul>
        </li>
        <li><strong>Classical processing:</strong> Determine recovery R from syndrome (s₁, s₂)</li>
        <li><strong>Recovery:</strong> Apply R to restore original encoded state</li>
      </ol>
    </div>

    <h2>Example: Correcting X₂ Error</h2>
    <div class="note-box">
      <p><strong>Initial state:</strong> |ψ⟩ = α|000⟩ + β|111⟩</p>

      <p><strong>Error occurs:</strong> X₂ acts on qubit 2</p>
      <div class="equation">
        X₂(α|000⟩ + β|111⟩) = α|010⟩ + β|101⟩
      </div>

      <p><strong>Syndrome measurement:</strong></p>
      <ul>
        <li>S₁ measurement: |010⟩ and |101⟩ have opposite parity for qubits 1,2 → s₁ = 1</li>
        <li>S₂ measurement: |010⟩ and |101⟩ have opposite parity for qubits 2,3 → s₂ = 1</li>
        <li>Syndrome = (1, 1) → error on qubit 2!</li>
      </ul>

      <p><strong>Recovery:</strong> Apply X₂</p>
      <div class="equation">
        X₂(α|010⟩ + β|101⟩) = α|000⟩ + β|111⟩ ✓
      </div>
    </div>

    <h2>Circuit Implementation</h2>
    <div class="info-box">
      <h3>Encoding Circuit</h3>
      <p>To create α|000⟩ + β|111⟩ from α|0⟩ + β|1⟩:</p>
      <ol>
        <li>Start with (α|0⟩ + β|1⟩) ⊗ |0⟩ ⊗ |0⟩</li>
        <li>CNOT from qubit 1 to qubit 2</li>
        <li>CNOT from qubit 1 to qubit 3</li>
      </ol>
      <p>Result: α|000⟩ + β|111⟩ ✓</p>

      <h3>Syndrome Measurement Circuit</h3>
      <p>To measure Z₁Z₂ and Z₂Z₃ without disturbing the code space:</p>
      <ul>
        <li>Use two ancilla qubits in |+⟩ state</li>
        <li>Apply CNOT gates with data as controls, ancilla as targets</li>
        <li>Measure ancillas in X basis → parity information</li>
      </ul>
    </div>

    <h2>Limitations of the Bit Flip Code</h2>
    <div class="note-box">
      <p><strong>What it protects against:</strong></p>
      <ul>
        <li>✓ Single X error on any qubit</li>
        <li>✓ Continuous bit-flip noise (projects to discrete X)</li>
      </ul>

      <p><strong>What it DOESN'T protect against:</strong></p>
      <ul>
        <li>✗ Phase flip (Z) errors</li>
        <li>✗ Y errors (Y = iXZ)</li>
        <li>✗ Two or more simultaneous X errors</li>
      </ul>

      <p><strong>Example failure:</strong> If X₁ and X₂ both occur:</p>
      <div class="equation">
        X₁X₂(α|000⟩ + β|111⟩) = α|110⟩ + β|001⟩
      </div>
      <p>This looks like X₃ error! Code will mis-correct: X₃(α|110⟩ + β|001⟩) = α|111⟩ + β|000⟩ (wrong!)</p>
    </div>

    <h2>Phase Flip Code (Dual Code)</h2>
    <p>By working in the X basis, we can protect against Z errors instead:</p>

    <div class="info-box">
      <h3>Phase Flip Code Encoding</h3>
      <div class="equation">
        |0⟩_L → |+++⟩ = (|000⟩ + |011⟩ + |101⟩ + |110⟩)/2
      </div>
      <div class="equation">
        |1⟩_L → |---⟩ = (|111⟩ + |100⟩ + |010⟩ + |001⟩)/2
      </div>

      <p><strong>Stabilizers:</strong> X₁X₂ and X₂X₃</p>

      <p><strong>Protects against:</strong> Single Z errors</p>
      <p><strong>Doesn't protect against:</strong> X errors</p>
    </div>

    <h2>Combining Both: Shor's Code</h2>
    <div class="highlight-box">
      <p>To protect against both X and Z errors, we need to <strong>concatenate</strong> these codes!</p>
      <ul>
        <li>Use bit flip code to protect against X</li>
        <li>Use phase flip code to protect against Z</li>
        <li>Result: Shor's 9-qubit code ⟦9,1,3⟧ (next section!)</li>
      </ul>
    </div>

    <h2>Error Correction Conditions</h2>
    <div class="note-box">
      <p>The bit flip code satisfies the <strong>quantum error-correcting conditions</strong>:</p>

      <p>For errors E_a, E_b in the set {I, X₁, X₂, X₃}:</p>
      <div class="equation">
        ⟨i|E_a† E_b|j⟩ = C_{ab} δ_{ij}
      </div>

      <p>where |i⟩, |j⟩ ∈ {|000⟩, |111⟩} are codewords.</p>

      <p><strong>Interpretation:</strong> Different errors are distinguishable (orthogonal) on the code space!</p>
    </div>

    <h2>Performance Analysis</h2>
    <div class="comparison-box">
      <h3>Error Suppression</h3>
      <p>If physical error rate per qubit is p << 1:</p>
      <ul>
        <li><strong>Uncoded:</strong> Logical error rate ≈ p</li>
        <li><strong>Bit flip code:</strong> Logical error rate ≈ 3p² (for p << 1)</li>
      </ul>

      <p><strong>Gain:</strong> Factor of 3p improvement when p < 1/3</p>

      <p><strong>Example:</strong> If p = 0.01 (1% error rate):
        <ul>
          <li>Uncoded: 1% chance of error</li>
          <li>Encoded: 3 × (0.01)² = 0.03% chance of error</li>
          <li>~30× improvement!</li>
        </ul>
      </p>
    </div>

    <h2>Key Takeaways</h2>
    <div class="highlight-box">
      <ul>
        <li>The bit flip code demonstrates QEC is possible despite no-cloning</li>
        <li>Syndrome measurement extracts error information without disturbing encoded state</li>
        <li>Code protects logical information by distributing it across entangled qubits</li>
        <li>Limitation: only protects against one type of error (X or Z, not both)</li>
        <li>Foundation for more sophisticated codes (Shor, Steane, Surface codes)</li>
      </ul>
    </div>

    <h2>Looking Ahead</h2>
    <div class="preview-box">
      <h4>Next: Shor's Code (Section 3.2.2)</h4>
      <p>We'll see how to concatenate bit flip and phase flip codes to protect against all Pauli errors:</p>
      <ul>
        <li>9-qubit construction</li>
        <li>Protection against arbitrary single-qubit errors</li>
        <li>First truly universal quantum error-correcting code</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_3_2_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
