<template>
  <div class="section-content">
    <h1>2.2.2 Two-Qubit Unitary</h1>

    <h2>The Two-Qubit State Space</h2>
    <p>A two-qubit system has a 4-dimensional Hilbert space ℂ² ⊗ ℂ² = ℂ⁴ with computational basis:</p>

    <div class="equation">
      {|00⟩, |01⟩, |10⟩, |11⟩}
    </div>

    <p>The general state is a superposition:</p>
    <div class="equation">
      |ψ⟩ = α₀₀|00⟩ + α₀₁|01⟩ + α₁₀|10⟩ + α₁₁|11⟩
    </div>
    <p>with normalization |α₀₀|² + |α₀₁|² + |α₁₀|² + |α₁₁|² = 1.</p>

    <h2>Why Two-Qubit Gates Matter</h2>
    <div class="highlight-box">
      <h3>The Power of Entanglement</h3>
      <p>Single-qubit gates alone can only create <strong>product states</strong>:</p>
      <div class="equation">
        (U₁ ⊗ U₂)|ψ₁⟩ ⊗ |ψ₂⟩ = U₁|ψ₁⟩ ⊗ U₂|ψ₂⟩
      </div>
      <p>To create <strong>entangled states</strong> and harness quantum computational power, we need <strong>two-qubit gates</strong> that cannot be written as U₁ ⊗ U₂.</p>
    </div>

    <h2>The CNOT Gate</h2>
    <p>The <strong>Controlled-NOT (CNOT)</strong> gate is the most fundamental two-qubit gate:</p>

    <div class="info-box">
      <h3>CNOT Definition</h3>
      <p><strong>Action:</strong> Flips the target qubit if and only if the control qubit is |1⟩</p>
      <div class="equation">
        CNOT|c,t⟩ = |c, t ⊕ c⟩
      </div>
      <p>where ⊕ denotes addition modulo 2 (XOR).</p>

      <h4>Truth Table:</h4>
      <table class="probability-table">
        <tr>
          <th>Input</th>
          <th>Output</th>
        </tr>
        <tr>
          <td>|00⟩</td>
          <td>|00⟩</td>
        </tr>
        <tr>
          <td>|01⟩</td>
          <td>|01⟩</td>
        </tr>
        <tr>
          <td>|10⟩</td>
          <td>|11⟩</td>
        </tr>
        <tr>
          <td>|11⟩</td>
          <td>|10⟩</td>
        </tr>
      </table>

      <h4>Matrix Form:</h4>
      <div class="equation">
        CNOT = [[1,0,0,0], [0,1,0,0], [0,0,0,1], [0,0,1,0]]
      </div>
    </div>

    <h3>Creating Entanglement with CNOT</h3>
    <div class="highlight-box">
      <p><strong>Bell State Generation:</strong></p>
      <div class="equation">
        (H ⊗ I) · CNOT · |00⟩ = (|00⟩ + |11⟩)/√2 = |Φ⁺⟩
      </div>
      <p>This is the maximally entangled Bell state! Starting from a separable state, we created entanglement using just Hadamard and CNOT.</p>
    </div>

    <h2>The Controlled-Z (CZ) Gate</h2>
    <p>Another fundamental two-qubit gate applies a phase flip to |11⟩:</p>

    <div class="info-box">
      <h3>CZ Definition</h3>
      <div class="equation">
        CZ|00⟩ = |00⟩,  CZ|01⟩ = |01⟩
      </div>
      <div class="equation">
        CZ|10⟩ = |10⟩,  CZ|11⟩ = -|11⟩
      </div>

      <h4>Matrix Form:</h4>
      <div class="equation">
        CZ = diag(1, 1, 1, -1) = [[1,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,-1]]
      </div>

      <p><strong>Key Property:</strong> CZ is symmetric—control and target are interchangeable!</p>
    </div>

    <h3>Relation Between CNOT and CZ</h3>
    <div class="note-box">
      <p>CNOT and CZ are related by Hadamard gates:</p>
      <div class="equation">
        CNOT = (I ⊗ H) · CZ · (I ⊗ H)
      </div>
      <p>This means any circuit using CNOT can be converted to use CZ instead (and vice versa).</p>
    </div>

    <h2>The SWAP Gate</h2>
    <p>The <strong>SWAP</strong> gate exchanges two qubits:</p>

    <div class="info-box">
      <h3>SWAP Definition</h3>
      <div class="equation">
        SWAP|a,b⟩ = |b,a⟩
      </div>

      <h4>Matrix Form:</h4>
      <div class="equation">
        SWAP = [[1,0,0,0], [0,0,1,0], [0,1,0,0], [0,0,0,1]]
      </div>

      <h4>Decomposition into CNOT:</h4>
      <div class="equation">
        SWAP = CNOT₁₂ · CNOT₂₁ · CNOT₁₂
      </div>
      <p>Three CNOTs can simulate a SWAP (useful when direct SWAP is not available).</p>
    </div>

    <h2>The iSWAP Gate</h2>
    <p>A variant of SWAP common in superconducting qubits:</p>

    <div class="equation">
      iSWAP|01⟩ = i|10⟩,  iSWAP|10⟩ = i|01⟩
    </div>
    <div class="equation">
      iSWAP|00⟩ = |00⟩,  iSWAP|11⟩ = |11⟩
    </div>

    <p>Matrix form: iSWAP = [[1,0,0,0], [0,0,i,0], [0,i,0,0], [0,0,0,1]]</p>

    <h2>The √SWAP Gate</h2>
    <div class="info-box">
      <p>The square root of SWAP is also a useful entangling gate:</p>
      <div class="equation">
        (√SWAP)² = SWAP
      </div>
      <p>Applying √SWAP twice gives the full swap. This gate creates partial entanglement.</p>
    </div>

    <h2>Controlled-U Gates</h2>
    <p>We can generalize the CNOT concept to control any unitary U:</p>

    <div class="highlight-box">
      <h3>Controlled-U Definition</h3>
      <p>Controlled-U applies U to the target qubit if the control is |1⟩:</p>
      <div class="equation">
        C-U = |0⟩⟨0| ⊗ I + |1⟩⟨1| ⊗ U
      </div>

      <h4>Matrix Form:</h4>
      <div class="equation">
        C-U = [[1,0,0,0], [0,1,0,0], [0,0,u₀₀,u₀₁], [0,0,u₁₀,u₁₁]]
      </div>

      <h4>Examples:</h4>
      <ul>
        <li>C-X = CNOT</li>
        <li>C-Z = CZ gate</li>
        <li>C-H = Controlled-Hadamard</li>
        <li>C-Phase(θ) = Controlled-phase rotation</li>
      </ul>
    </div>

    <h2>Two-Qubit Gate Universality</h2>
    <div class="highlight-box">
      <h3>Key Theorem</h3>
      <p>Almost any two-qubit gate that creates entanglement, combined with arbitrary single-qubit gates, is <strong>universal for quantum computation</strong>.</p>

      <p><strong>Universal Sets:</strong></p>
      <ul>
        <li>{CNOT, all single-qubit gates}</li>
        <li>{CZ, all single-qubit gates}</li>
        <li>{iSWAP, all single-qubit gates}</li>
        <li>{√SWAP, all single-qubit gates}</li>
      </ul>
    </div>

    <h2>Entangling Power</h2>
    <p>Not all two-qubit unitaries create entanglement equally. The <strong>entangling power</strong> measures this:</p>

    <div class="info-box">
      <h3>Entangling Power Definition</h3>
      <div class="equation">
        e(U) = 2[1 - ⟨S⟩]
      </div>
      <p>where ⟨S⟩ is the average entanglement entropy after applying U to random product states.</p>

      <p><strong>Range:</strong> 0 (no entanglement) to 2 (maximal entanglement)</p>

      <h4>Examples:</h4>
      <ul>
        <li>CNOT: e = 2 (maximally entangling)</li>
        <li>CZ: e = 2 (maximally entangling)</li>
        <li>√SWAP: e < 2 (partially entangling)</li>
        <li>I ⊗ I: e = 0 (no entanglement)</li>
      </ul>
    </div>

    <h2>KAK Decomposition</h2>
    <div class="note-box">
      <h3>Canonical Form for Two-Qubit Gates</h3>
      <p>Any two-qubit unitary U can be decomposed as:</p>
      <div class="equation">
        U = (U₁ ⊗ U₂) · K(α,β,γ) · (U₃ ⊗ U₄)
      </div>
      <p>where U₁, U₂, U₃, U₄ are single-qubit unitaries and</p>
      <div class="equation">
        K(α,β,γ) = exp[i(α X⊗X + β Y⊗Y + γ Z⊗Z)]
      </div>
      <p>This is the <strong>KAK decomposition</strong> (Kraus-Cirac decomposition). The parameters (α,β,γ) characterize the "non-local" part of U.</p>
    </div>

    <h2>Physical Implementations</h2>
    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Platform</th>
          <th>Native Two-Qubit Gate</th>
          <th>Mechanism</th>
        </tr>
        <tr>
          <td>Superconducting</td>
          <td>CZ, iSWAP, √iSWAP</td>
          <td>Tunable coupling, cross-resonance</td>
        </tr>
        <tr>
          <td>Trapped ions</td>
          <td>Mølmer-Sørensen (XX)</td>
          <td>Phonon-mediated interaction</td>
        </tr>
        <tr>
          <td>Neutral atoms</td>
          <td>CZ (Rydberg)</td>
          <td>Rydberg blockade</td>
        </tr>
        <tr>
          <td>Quantum dots</td>
          <td>SWAP, √SWAP</td>
          <td>Exchange interaction</td>
        </tr>
        <tr>
          <td>Photonic</td>
          <td>CZ (linear optics)</td>
          <td>Beam splitters + measurements</td>
        </tr>
      </table>
    </div>

    <h2>Gate Fidelity</h2>
    <div class="note-box">
      <h3>Two-Qubit Gate Quality (2024)</h3>
      <p>Two-qubit gates are significantly more challenging than single-qubit gates:</p>
      <ul>
        <li><strong>Superconducting qubits:</strong> 99% - 99.5%</li>
        <li><strong>Trapped ions:</strong> 99.5% - 99.9%</li>
        <li><strong>Neutral atoms:</strong> 99% - 99.7%</li>
      </ul>
      <p><strong>Main error sources:</strong></p>
      <ul>
        <li>Decoherence during longer gate time (~10-1000 ns)</li>
        <li>Crosstalk with neighboring qubits</li>
        <li>Imperfect calibration of interaction strength</li>
        <li>Leakage to non-computational states</li>
      </ul>
    </div>

    <h2>Important Two-Qubit Gate Identities</h2>
    <div class="info-box">
      <ul>
        <li>CNOT · CNOT = I (CNOT is self-inverse)</li>
        <li>CZ · CZ = I (CZ is self-inverse)</li>
        <li>SWAP · SWAP = I (SWAP is self-inverse)</li>
        <li>(H ⊗ H) · CNOT · (H ⊗ H) = CNOT with qubits swapped</li>
        <li>CNOT₁₂ · (I ⊗ X) = (I ⊗ X) · CNOT₁₂</li>
        <li>CNOT₁₂ · (Z ⊗ I) = (Z ⊗ I) · CNOT₁₂</li>
      </ul>
    </div>

    <h2>Beyond Two Qubits</h2>
    <div class="preview-box">
      <h4>Looking Ahead to Section 2.2.3:</h4>
      <p>Two-qubit gates are the building blocks, but we'll need to understand:</p>
      <ul>
        <li>How to build multi-qubit gates (Toffoli, Fredkin)</li>
        <li>Scaling to N-qubit systems</li>
        <li>Circuit depth and gate count</li>
        <li>Parallelization strategies</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_2_2_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
