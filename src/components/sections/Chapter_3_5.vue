<template>
  <div class="section-content">
    <h1>3.5 Toric Code</h1>

    <h2>Introduction to Topological Error Correction</h2>
    <p>The <strong>toric code</strong> (Kitaev 1997) is a landmark quantum error-correcting code that connects error correction to topological quantum matter. It represents a paradigm shift: errors are anyonic excitations in a topological phase!</p>

    <div class="highlight-box">
      <h3>Key Features</h3>
      <ul>
        <li><strong>Topology:</strong> Information stored non-locally in topological properties</li>
        <li><strong>Robustness:</strong> Local perturbations cannot create logical errors</li>
        <li><strong>Anyons:</strong> Errors behave as quasi-particles with exotic statistics</li>
        <li><strong>Scalability:</strong> Distance grows with system size</li>
      </ul>
    </div>

    <h2>Lattice Structure</h2>
    <p>The toric code lives on a 2D square lattice with periodic boundary conditions (torus):</p>

    <div class="info-box">
      <h3>Geometry</h3>
      <ul>
        <li><strong>L × L lattice:</strong> L² vertices, 2L² edges</li>
        <li><strong>Qubits:</strong> One qubit per edge → 2L² physical qubits</li>
        <li><strong>Faces:</strong> L² square plaquettes</li>
        <li><strong>Vertices:</strong> L² lattice sites</li>
      </ul>

      <p><strong>Code parameters:</strong> ⟦2L², 2, L⟧ - encodes 2 logical qubits!</p>
    </div>

    <h2>Stabilizer Operators</h2>
    <p>Two types of stabilizers define the toric code:</p>

    <div class="highlight-box">
      <h3>Star Operators (Vertex Stabilizers)</h3>
      <p>At each vertex v:</p>
      <div class="equation">
        A_v = X₁X₂X₃X₄
      </div>
      <p>Product of X on the 4 edges touching vertex v</p>

      <h3>Plaquette Operators (Face Stabilizers)</h3>
      <p>Around each plaquette p:</p>
      <div class="equation">
        B_p = Z₁Z₂Z₃Z₄
      </div>
      <p>Product of Z on the 4 edges forming plaquette p</p>

      <p><strong>Code space:</strong> Joint +1 eigenspace of all A_v and B_p</p>
    </div>

    <h2>Ground State Degeneracy</h2>
    <div class="note-box">
      <p>On a torus, the toric code has <strong>4-fold degenerate ground state</strong>:</p>
      <ul>
        <li>Dimension = 2² = 4 (encodes 2 logical qubits)</li>
        <li>Degeneracy protected by topology—cannot be lifted by local perturbations!</li>
        <li>This is <strong>topological degeneracy</strong>, key to topological quantum memory</li>
      </ul>
    </div>

    <h2>Logical Operators</h2>
    <p>Logical operations correspond to non-contractible loops on the torus:</p>

    <div class="info-box">
      <h3>Two Pairs of Logical Operators</h3>
      <p><strong>First logical qubit:</strong></p>
      <ul>
        <li>X̄₁: Product of X along horizontal loop</li>
        <li>Z̄₁: Product of Z along vertical loop</li>
      </ul>

      <p><strong>Second logical qubit:</strong></p>
      <ul>
        <li>X̄₂: Product of X along vertical loop</li>
        <li>Z̄₂: Product of Z along horizontal loop</li>
      </ul>

      <p><strong>Key property:</strong> Logical operators have support O(L) → distance L!</p>
    </div>

    <h2>Anyonic Excitations</h2>
    <div class="highlight-box">
      <h3>Error Syndrome as Anyons</h3>
      <p>Errors create violations of stabilizers → anyonic excitations:</p>

      <h4>e-anyons (Electric charges)</h4>
      <ul>
        <li>Created by Z errors</li>
        <li>Detected by A_v = -1 (star operator violated)</li>
        <li>Created/annihilated in pairs</li>
      </ul>

      <h4>m-anyons (Magnetic vortices)</h4>
      <ul>
        <li>Created by X errors</li>
        <li>Detected by B_p = -1 (plaquette operator violated)</li>
        <li>Created/annihilated in pairs</li>
      </ul>

      <p><strong>Fusion rules:</strong> e × e = 1, m × m = 1, e × m = ε (fermion)</p>
    </div>

    <h2>Error Correction Protocol</h2>
    <div class="note-box">
      <ol>
        <li><strong>Syndrome measurement:</strong> Measure all A_v and B_p</li>
        <li><strong>Decode:</strong> Find minimum-weight error consistent with syndrome (NP-hard in general!)</li>
        <li><strong>Recovery:</strong> Apply correction based on decoder output</li>
      </ol>

      <p><strong>Threshold:</strong> ~1% for optimal decoder, ~0.1% for efficient decoders</p>
    </div>

    <h2>Connection to Z₂ Gauge Theory</h2>
    <div class="highlight-box">
      <p>The toric code is the ground state of a Z₂ gauge theory:</p>
      <div class="equation">
        H = -J ∑_v A_v - K ∑_p B_p
      </div>

      <ul>
        <li><strong>Gauge symmetry:</strong> Star operators A_v generate Z₂ gauge transformations</li>
        <li><strong>Magnetic field:</strong> Plaquette operators B_p measure Z₂ flux</li>
        <li><strong>Phase diagram:</strong> Deconfined phase for J, K > 0</li>
      </ul>
    </div>

    <h2>Advantages of Topological Codes</h2>
    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Feature</th>
          <th>Conventional Codes</th>
          <th>Topological Codes</th>
        </tr>
        <tr>
          <td>Information storage</td>
          <td>Local encoding</td>
          <td>Non-local topological</td>
        </tr>
        <tr>
          <td>Distance scaling</td>
          <td>Fixed</td>
          <td>Grows with system size</td>
        </tr>
        <tr>
          <td>Local errors</td>
          <td>Can corrupt immediately</td>
          <td>Create local anyons only</td>
        </tr>
        <tr>
          <td>Syndrome</td>
          <td>Abstract</td>
          <td>Physical anyonic excitations</td>
        </tr>
        <tr>
          <td>Threshold</td>
          <td>~1%</td>
          <td>~1% (similar)</td>
        </tr>
      </table>
    </div>

    <h2>Surface Code</h2>
    <p>The <strong>surface code</strong> is a variant of the toric code on a planar lattice with boundaries:</p>

    <div class="info-box">
      <h3>Key Differences</h3>
      <ul>
        <li><strong>Geometry:</strong> Square lattice with open boundaries (no periodic conditions)</li>
        <li><strong>Logical qubits:</strong> Encodes k = 1 logical qubit</li>
        <li><strong>Advantages:</strong> Easier to implement (no need for periodic boundary conditions)</li>
        <li><strong>Disadvantage:</strong> Fewer logical qubits per physical qubit</li>
      </ul>

      <p><strong>Status:</strong> Leading candidate for near-term fault-tolerant quantum computers (Google, IBM, others)</p>
    </div>

    <h2>Recent Experimental Progress</h2>
    <div class="note-box">
      <ul>
        <li><strong>2021:</strong> Google demonstrates below-threshold surface code</li>
        <li><strong>2022:</strong> Multiple groups show logical qubit lifetimes exceeding physical</li>
        <li><strong>2023:</strong> Scaling to larger code distances (d=5, d=7)</li>
        <li><strong>2024:</strong> Integration with quantum algorithms</li>
      </ul>

      <p><strong>Challenge:</strong> Need d ~20-50 for practical quantum advantage with current error rates</p>
    </div>

    <h2>Key Takeaways</h2>
    <div class="highlight-box">
      <ul>
        <li>Toric code stores quantum information in topological properties</li>
        <li>Errors manifest as anyonic excitations</li>
        <li>Code distance scales with system size L</li>
        <li>Connection to topological phases of matter</li>
        <li>Surface code is practical variant for implementation</li>
      </ul>
    </div>

    <h2>Looking Ahead</h2>
    <div class="preview-box">
      <h4>Next: Chapter Summary (Section 3.6)</h4>
      <p>We'll synthesize quantum error correction concepts and connect to topological quantum matter</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_3_5'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
