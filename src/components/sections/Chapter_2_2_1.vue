<template>
  <div class="section-content">
    <h1>2.2.1 Single Qubit Unitary</h1>

    <h2>The Qubit State Space</h2>
    <p>A single qubit is a two-level quantum system with state space ℂ². The most general pure state is:</p>

    <div class="equation">
      |ψ⟩ = α|0⟩ + β|1⟩,  where |α|² + |β|² = 1
    </div>

    <p>This state lives on the <strong>Bloch sphere</strong>, a geometrical representation where:</p>

    <div class="info-box">
      <h3>Bloch Sphere Representation</h3>
      <div class="equation">
        |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ) sin(θ/2)|1⟩
      </div>
      <ul>
        <li><strong>θ:</strong> Polar angle (0 to π)</li>
        <li><strong>φ:</strong> Azimuthal angle (0 to 2π)</li>
        <li>North pole: |0⟩</li>
        <li>South pole: |1⟩</li>
        <li>Equator: equal superpositions</li>
      </ul>
    </div>

    <h2>Pauli Matrices</h2>
    <p>The fundamental operators for single-qubit systems are the <strong>Pauli matrices</strong>:</p>

    <div class="highlight-box">
      <h3>The Pauli Operators</h3>
      <div class="equation">
        X = σ_x = [[0, 1], [1, 0]]  (Bit flip)
      </div>
      <div class="equation">
        Y = σ_y = [[0, -i], [i, 0]]
      </div>
      <div class="equation">
        Z = σ_z = [[1, 0], [0, -1]]  (Phase flip)
      </div>
      <div class="equation">
        I = [[1, 0], [0, 1]]  (Identity)
      </div>
    </div>

    <h3>Properties of Pauli Matrices</h3>
    <div class="info-box">
      <ul>
        <li><strong>Hermitian:</strong> σ_i† = σ_i</li>
        <li><strong>Unitary:</strong> σ_i² = I</li>
        <li><strong>Traceless:</strong> Tr(σ_i) = 0 for i = x, y, z</li>
        <li><strong>Anticommutation:</strong> {σ_i, σ_j} = 2δ_ij I</li>
        <li><strong>Commutation:</strong> [σ_i, σ_j] = 2i ε_ijk σ_k</li>
        <li><strong>Eigenvalues:</strong> ±1 for all Pauli matrices</li>
      </ul>
    </div>

    <h2>Basic Single-Qubit Gates</h2>

    <h3>1. Pauli-X Gate (NOT Gate)</h3>
    <div class="equation">
      X|0⟩ = |1⟩,  X|1⟩ = |0⟩
    </div>
    <p>The quantum analog of the classical NOT gate. Flips |0⟩ ↔ |1⟩.</p>

    <h3>2. Pauli-Z Gate (Phase Flip)</h3>
    <div class="equation">
      Z|0⟩ = |0⟩,  Z|1⟩ = -|1⟩
    </div>
    <p>Leaves |0⟩ unchanged but adds a phase of -1 to |1⟩. On the Bloch sphere: reflection through the equatorial plane.</p>

    <h3>3. Pauli-Y Gate</h3>
    <div class="equation">
      Y|0⟩ = i|1⟩,  Y|1⟩ = -i|0⟩
    </div>
    <p>Combines bit flip and phase flip: Y = iXZ. On the Bloch sphere: 180° rotation about the y-axis.</p>

    <h3>4. Hadamard Gate</h3>
    <div class="highlight-box">
      <div class="equation">
        H = 1/√2 [[1, 1], [1, -1]]
      </div>
      <div class="equation">
        H|0⟩ = (|0⟩ + |1⟩)/√2 = |+⟩
      </div>
      <div class="equation">
        H|1⟩ = (|0⟩ - |1⟩)/√2 = |-⟩
      </div>
      <p><strong>Key Property:</strong> Creates equal superpositions from computational basis states. Essential for quantum algorithms.</p>
    </div>

    <h3>5. Phase Gate (S Gate)</h3>
    <div class="equation">
      S = [[1, 0], [0, i]]
    </div>
    <div class="equation">
      S|0⟩ = |0⟩,  S|1⟩ = i|1⟩
    </div>
    <p>Adds a phase of i to the |1⟩ component. Note: S² = Z.</p>

    <h3>6. T Gate (π/8 Gate)</h3>
    <div class="equation">
      T = [[1, 0], [0, e^(iπ/4)]]
    </div>
    <div class="equation">
      T|0⟩ = |0⟩,  T|1⟩ = e^(iπ/4)|1⟩
    </div>
    <p>Adds a smaller phase. Note: T² = S, T⁴ = Z.</p>

    <h2>Rotation Operators</h2>
    <p>General rotations on the Bloch sphere are described by:</p>

    <div class="info-box">
      <h3>Rotation about an Axis</h3>
      <div class="equation">
        R_n(θ) = e^(-iθ n·σ/2) = cos(θ/2)I - i sin(θ/2)(n·σ)
      </div>
      <p>where <strong>n</strong> is a unit vector and <strong>σ</strong> = (σ_x, σ_y, σ_z).</p>

      <h4>Rotations about Coordinate Axes:</h4>
      <div class="equation">
        R_x(θ) = [[cos(θ/2), -i sin(θ/2)], [-i sin(θ/2), cos(θ/2)]]
      </div>
      <div class="equation">
        R_y(θ) = [[cos(θ/2), -sin(θ/2)], [sin(θ/2), cos(θ/2)]]
      </div>
      <div class="equation">
        R_z(θ) = [[e^(-iθ/2), 0], [0, e^(iθ/2)]]
      </div>
    </div>

    <h2>Decomposition Theorem</h2>
    <div class="highlight-box">
      <h3>Z-Y Decomposition</h3>
      <p>Any single-qubit unitary U can be decomposed as:</p>
      <div class="equation">
        U = e^(iα) R_z(β) R_y(γ) R_z(δ)
      </div>
      <p>where α, β, γ, δ are real parameters. This requires at most three rotations.</p>
    </div>

    <div class="note-box">
      <h3>Euler Angle Decomposition</h3>
      <p>Alternatively, using Euler angles:</p>
      <div class="equation">
        U = e^(iα) R_z(φ) R_x(θ) R_z(λ)
      </div>
      <p>This is the standard form used in many quantum computing frameworks (e.g., IBM Qiskit).</p>
    </div>

    <h2>Important Gate Relations</h2>
    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Relation</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>HXH = Z</td>
          <td>Hadamard conjugation swaps X and Z</td>
        </tr>
        <tr>
          <td>HZH = X</td>
          <td>Hadamard is its own inverse</td>
        </tr>
        <tr>
          <td>SXS† = Y</td>
          <td>S gate rotates Pauli operators</td>
        </tr>
        <tr>
          <td>H = (X + Z)/√2</td>
          <td>Hadamard as Pauli combination</td>
        </tr>
        <tr>
          <td>XYZ = iI</td>
          <td>Product of all Paulis</td>
        </tr>
      </table>
    </div>

    <h2>Bloch Sphere Geometry</h2>
    <p>Understanding single-qubit gates geometrically:</p>

    <div class="info-box">
      <ul>
        <li><strong>X rotation:</strong> Rotation about x-axis (horizontal)</li>
        <li><strong>Y rotation:</strong> Rotation about y-axis (into page)</li>
        <li><strong>Z rotation:</strong> Rotation about z-axis (vertical)</li>
        <li><strong>Hadamard:</strong> 90° rotation about x-axis, then 180° about axis at 45° in x-z plane</li>
        <li><strong>Pauli X:</strong> 180° rotation about x-axis (pole swap)</li>
        <li><strong>Pauli Z:</strong> 180° rotation about z-axis (equatorial reflection)</li>
      </ul>
    </div>

    <h2>Universal Single-Qubit Gate Sets</h2>
    <p>Several minimal gate sets can generate all single-qubit unitaries:</p>

    <div class="highlight-box">
      <h3>Examples of Universal Sets</h3>
      <ul>
        <li><strong>{R_z(θ), R_y(θ)}:</strong> Continuous rotations about two non-parallel axes</li>
        <li><strong>{H, T}:</strong> Discrete gates (dense in SU(2), the special unitary group)</li>
        <li><strong>{R_x(θ), R_z(θ)}:</strong> Alternative continuous set</li>
      </ul>
      <p><strong>Note:</strong> Rotations about a single axis alone cannot generate all unitaries!</p>
    </div>

    <h2>Physical Implementations</h2>
    <p>How single-qubit gates are realized in different platforms:</p>

    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Platform</th>
          <th>Implementation Method</th>
        </tr>
        <tr>
          <td>Superconducting qubits</td>
          <td>Microwave pulses at qubit frequency</td>
        </tr>
        <tr>
          <td>Trapped ions</td>
          <td>Laser pulses (Raman or dipole transitions)</td>
        </tr>
        <tr>
          <td>NMR</td>
          <td>Radio-frequency pulses</td>
        </tr>
        <tr>
          <td>Quantum dots</td>
          <td>Electric or magnetic field pulses</td>
        </tr>
        <tr>
          <td>Photonic qubits</td>
          <td>Wave plates and beam splitters</td>
        </tr>
      </table>
    </div>

    <h2>Gate Fidelity and Errors</h2>
    <div class="note-box">
      <h3>Real-World Considerations</h3>
      <p>Experimental single-qubit gates are never perfect. Common error sources:</p>
      <ul>
        <li><strong>Calibration errors:</strong> Incorrect pulse amplitudes or durations</li>
        <li><strong>Decoherence:</strong> T₁ (energy relaxation) and T₂ (dephasing)</li>
        <li><strong>Control noise:</strong> Fluctuations in control fields</li>
        <li><strong>Leakage:</strong> Transitions to non-computational states</li>
      </ul>
      <p><strong>Typical fidelities (2024):</strong></p>
      <ul>
        <li>Superconducting qubits: 99.9% - 99.99%</li>
        <li>Trapped ions: 99.9% - 99.999%</li>
        <li>Photonic qubits: 99% - 99.9%</li>
      </ul>
    </div>

    <h2>Advanced Topics</h2>

    <h3>Solovay-Kitaev Theorem</h3>
    <div class="info-box">
      <p>Any single-qubit unitary U can be approximated to accuracy ε using O(log^c(1/ε)) gates from a finite universal set (e.g., {H, T}), where c ≈ 2.</p>
      <p>This theorem guarantees efficient compilation of arbitrary rotations into discrete gate sets.</p>
    </div>

    <h3>Optimal Control</h3>
    <p>Modern quantum control uses optimization algorithms (GRAPE, CRAB, etc.) to design pulse sequences that:</p>
    <ul>
      <li>Minimize gate duration</li>
      <li>Maximize fidelity</li>
      <li>Are robust against noise</li>
      <li>Avoid leakage to unwanted states</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Chapter_2_2_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
