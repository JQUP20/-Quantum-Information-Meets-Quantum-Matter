<template>
  <div class="section-content">
    <h1>3.2.2 Shor's Code</h1>

    <h2>The First General Quantum Error-Correcting Code</h2>
    <p>Peter Shor's 9-qubit code (1995) was the breakthrough that proved quantum error correction is possible. It protects against <strong>arbitrary single-qubit errors</strong>—both bit flips (X) and phase flips (Z).</p>

    <div class="highlight-box">
      <h3>Code Parameters: ⟦9, 1, 3⟧</h3>
      <ul>
        <li><strong>n = 9:</strong> Encodes into 9 physical qubits</li>
        <li><strong>k = 1:</strong> Protects 1 logical qubit</li>
        <li><strong>d = 3:</strong> Code distance 3 (corrects 1 error, detects 2)</li>
      </ul>
    </div>

    <h2>Encoding: Concatenation Strategy</h2>
    <p>Shor's code combines bit flip and phase flip protection through <strong>concatenation</strong>:</p>

    <div class="info-box">
      <h3>Step 1: Phase Flip Protection</h3>
      <p>First, encode using the phase flip code:</p>
      <div class="equation">
        |0⟩_L → |+++⟩ = (|0⟩ + |1⟩)(|0⟩ + |1⟩)(|0⟩ + |1⟩)/2√2
      </div>
      <div class="equation">
        |1⟩_L → |---⟩ = (|0⟩ - |1⟩)(|0⟩ - |1⟩)(|0⟩ - |1⟩)/2√2
      </div>

      <h3>Step 2: Bit Flip Protection</h3>
      <p>Replace each qubit with a 3-qubit bit flip code:</p>
      <ul>
        <li>|+⟩ → |000⟩ + |111⟩  (unnormalized)</li>
        <li>|-⟩ → |000⟩ - |111⟩  (unnormalized)</li>
      </ul>
    </div>

    <h3>Final Encoding</h3>
    <div class="highlight-box">
      <p><strong>Logical |0⟩:</strong></p>
      <div class="equation">
        |0⟩_L = (1/2√2)[(|000⟩+|111⟩)(|000⟩+|111⟩)(|000⟩+|111⟩)]
      </div>

      <p><strong>Logical |1⟩:</strong></p>
      <div class="equation">
        |1⟩_L = (1/2√2)[(|000⟩-|111⟩)(|000⟩-|111⟩)(|000⟩-|111⟩)]
      </div>

      <p><strong>General logical state:</strong></p>
      <div class="equation">
        |ψ⟩_L = α|0⟩_L + β|1⟩_L
      </div>
    </div>

    <h2>Code Space Structure</h2>
    <p>The 9-qubit Hilbert space (ℂ²)⊗⁹ has dimension 2⁹ = 512. The code space is 2-dimensional.</p>

    <div class="note-box">
      <h3>Block Structure</h3>
      <p>Think of 9 qubits as 3 blocks of 3 qubits each:</p>
      <ul>
        <li><strong>Block 1:</strong> Qubits 1,2,3</li>
        <li><strong>Block 2:</strong> Qubits 4,5,6</li>
        <li><strong>Block 3:</strong> Qubits 7,8,9</li>
      </ul>

      <p>Each block is in state |000⟩ ± |111⟩</p>
    </div>

    <h2>Stabilizer Generators</h2>
    <p>Shor's code is defined by 8 independent stabilizer operators:</p>

    <div class="info-box">
      <h3>Bit Flip Stabilizers (6 generators)</h3>
      <p>Detect X errors within each block:</p>
      <ul>
        <li>S₁ = Z₁Z₂ (qubits 1,2 parity)</li>
        <li>S₂ = Z₂Z₃ (qubits 2,3 parity)</li>
        <li>S₃ = Z₄Z₅ (qubits 4,5 parity)</li>
        <li>S₄ = Z₅Z₆ (qubits 5,6 parity)</li>
        <li>S₅ = Z₇Z₈ (qubits 7,8 parity)</li>
        <li>S₆ = Z₈Z₉ (qubits 8,9 parity)</li>
      </ul>

      <h3>Phase Flip Stabilizers (2 generators)</h3>
      <p>Detect Z errors between blocks:</p>
      <ul>
        <li>S₇ = X₁X₂X₃X₄X₅X₆ (blocks 1 and 2 phase parity)</li>
        <li>S₈ = X₄X₅X₆X₇X₈X₉ (blocks 2 and 3 phase parity)</li>
      </ul>
    </div>

    <h2>Error Correction: X Errors</h2>
    <div class="note-box">
      <p><strong>Example: X₂ error (bit flip on qubit 2)</strong></p>

      <p><strong>Syndrome measurement:</strong></p>
      <ul>
        <li>S₁ = Z₁Z₂: flips sign (outcome -1)</li>
        <li>S₂ = Z₂Z₃: flips sign (outcome -1)</li>
        <li>All other stabilizers: no change (outcome +1)</li>
      </ul>

      <p><strong>Syndrome:</strong> (1,1,0,0,0,0,0,0) identifies qubit 2</p>

      <p><strong>Recovery:</strong> Apply X₂ to correct</p>
    </div>

    <h2>Error Correction: Z Errors</h2>
    <div class="note-box">
      <p><strong>Example: Z₄ error (phase flip on qubit 4 in block 2)</strong></p>

      <p>Phase flip within a block affects the block's overall phase relative to other blocks.</p>

      <p><strong>Syndrome measurement:</strong></p>
      <ul>
        <li>Bit flip stabilizers S₁-S₆: no change (Z commutes with ZZ)</li>
        <li>S₇ = X₁X₂X₃X₄X₅X₆: changes sign (Z₄ anticommutes with X₄)</li>
        <li>S₈ = X₄X₅X₆X₇X₈X₉: changes sign</li>
      </ul>

      <p><strong>Syndrome:</strong> (0,0,0,0,0,0,1,1) indicates Z error in block 2</p>

      <p>Within the block, Z₄, Z₅, Z₆ all give same syndrome → recover with any (say Z₄)</p>
    </div>

    <h2>Correcting Arbitrary Single-Qubit Errors</h2>
    <div class="highlight-box">
      <h3>Key Insight: Discretization</h3>
      <p>Any single-qubit error can be decomposed as:</p>
      <div class="equation">
        E = c₀I + c₁X + c₂Y + c₃Z
      </div>

      <p><strong>After syndrome measurement:</strong> Error projects onto {I, X, Y, Z}</p>

      <p>Since Y = iXZ:</p>
      <ul>
        <li>Y error detected as both X and Z syndromes</li>
        <li>Correcting X and Z automatically corrects Y</li>
      </ul>

      <p><strong>Therefore:</strong> Correcting {I, X, Z} is sufficient for any error!</p>
    </div>

    <h2>Example: Continuous Error → Discrete Correction</h2>
    <div class="info-box">
      <p><strong>Suppose:</strong> Qubit 5 undergoes rotation E = cos(θ/2)I - i sin(θ/2)X</p>

      <p><strong>Before measurement:</strong></p>
      <div class="equation">
        E|ψ⟩_encoded = cos(θ/2)|ψ⟩_encoded - i sin(θ/2) X₅|ψ⟩_encoded
      </div>

      <p><strong>Syndrome measurement:</strong></p>
      <ul>
        <li>Outcome: +1 with probability cos²(θ/2) → no correction needed</li>
        <li>Outcome: -1 with probability sin²(θ/2) → X₅ detected, apply X₅ correction</li>
      </ul>

      <p><strong>After correction:</strong> State restored (with high probability if θ small)</p>
    </div>

    <h2>Performance and Limitations</h2>
    <div class="comparison-box">
      <h3>Error Suppression</h3>
      <p>For physical error rate p per qubit:</p>

      <table class="comparison-table">
        <tr>
          <th>Scenario</th>
          <th>Logical Error Rate</th>
        </tr>
        <tr>
          <td>No encoding</td>
          <td>p</td>
        </tr>
        <tr>
          <td>Shor code (X only)</td>
          <td>≈ 3p²</td>
        </tr>
        <tr>
          <td>Shor code (X and Z)</td>
          <td>≈ 9p²</td>
        </tr>
        <tr>
          <td>Two errors</td>
          <td>Mis-correction possible</td>
        </tr>
      </table>

      <p><strong>Threshold:</strong> Works well when p < ~0.1</p>
    </div>

    <h2>Encoding Circuit</h2>
    <div class="note-box">
      <h3>Circuit to Prepare |0⟩_L</h3>
      <ol>
        <li>Start with |000000000⟩</li>
        <li><strong>Create blocks:</strong> CNOT from qubit 1 to 4, from 1 to 7</li>
        <li><strong>Within each block:</strong> CNOT to create |000⟩ + |111⟩ in blocks 1,2,3</li>
        <li><strong>Apply Hadamards:</strong> H on one qubit per block (say qubits 1,4,7)</li>
      </ol>

      <p>Result: Shor encoded |0⟩_L</p>
    </div>

    <h2>Comparison with Other Codes</h2>
    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Code</th>
          <th>⟦n,k,d⟧</th>
          <th>Protects Against</th>
          <th>Efficiency</th>
        </tr>
        <tr>
          <td>Bit flip</td>
          <td>⟦3,1,3⟧</td>
          <td>X only</td>
          <td>k/n = 1/3</td>
        </tr>
        <tr>
          <td>Phase flip</td>
          <td>⟦3,1,3⟧</td>
          <td>Z only</td>
          <td>k/n = 1/3</td>
        </tr>
        <tr>
          <td>Shor</td>
          <td>⟦9,1,3⟧</td>
          <td>Any single error</td>
          <td>k/n = 1/9</td>
        </tr>
        <tr>
          <td>Steane</td>
          <td>⟦7,1,3⟧</td>
          <td>Any single error</td>
          <td>k/n = 1/7 (better!)</td>
        </tr>
      </table>
    </div>

    <h2>Historical Significance</h2>
    <div class="highlight-box">
      <h3>Why Shor's Code Mattered</h3>
      <ul>
        <li><strong>Proved QEC is possible:</strong> Overcame no-cloning and measurement obstacles</li>
        <li><strong>Demonstrated discretization:</strong> Continuous errors → discrete syndrome</li>
        <li><strong>Inspired stabilizer formalism:</strong> Led to general theory (Gottesman 1997)</li>
        <li><strong>Enabled threshold theorem:</strong> Showed scalable QC is achievable</li>
      </ul>

      <p><strong>Impact:</strong> Transformed quantum computing from theoretical curiosity to plausible technology</p>
    </div>

    <h2>Key Takeaways</h2>
    <div class="note-box">
      <ul>
        <li>Shor's code protects against arbitrary single-qubit errors through concatenation</li>
        <li>8 stabilizer measurements give syndrome without destroying encoded information</li>
        <li>Measurement discretizes continuous errors to Pauli basis</li>
        <li>Overhead: 9 physical qubits for 1 logical qubit</li>
        <li>Foundation for more efficient codes (Steane, surface codes)</li>
      </ul>
    </div>

    <h2>Looking Ahead</h2>
    <div class="preview-box">
      <h4>Next: Other Noise Models (Section 3.2.3)</h4>
      <p>We'll explore:</p>
      <ul>
        <li>Codes optimized for specific noise (amplitude damping, erasure)</li>
        <li>When standard codes are not optimal</li>
        <li>Degenerate codes and their advantages</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_3_2_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
