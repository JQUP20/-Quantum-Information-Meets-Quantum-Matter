<template>
  <div class="section-content">
    <h1>6.9.2 Local and Topological Excitations</h1>

    <p>Excitations in topologically ordered systems fall into two categories: local excitations that can be created by local operators, and topological excitations (anyons) that require non-local string operators.</p>

    <h2>Local Excitations</h2>

    <div class="highlight-box">
      <h3>Created by Local Operators</h3>

      <p><strong>Definition:</strong></p>
      <ul>
        <li>Created by operator O(r) acting on finite region</li>
        <li>Energy gap Δ_local typically order of Hamiltonian scale</li>
        <li>Can be detected by local measurements</li>
      </ul>

      <p><strong>Examples in toric code:</strong></p>
      <ul>
        <li>Virtual excitations violating multiple stabilizers</li>
        <li>High-energy configurations</li>
        <li>Not topologically protected</li>
      </ul>

      <p><strong>Properties:</strong></p>
      <ul>
        <li>Energy typically ~J (Hamiltonian scale)</li>
        <li>Can be created and annihilated locally</li>
        <li>No fractional quantum numbers</li>
      </ul>
    </div>

    <h2>Topological Excitations (Anyons)</h2>

    <div class="info-box">
      <h3>Require Non-Local Creation</h3>

      <p><strong>Definition:</strong></p>
      <ul>
        <li>Cannot be created by local operator</li>
        <li>Require string operator connecting two points</li>
        <li>Always created in pairs (or from boundary)</li>
      </ul>

      <p><strong>In toric code:</strong></p>
      <ul>
        <li><strong>e-particle:</strong> Created by Z-string</li>
        <li><strong>m-particle:</strong> Created by X-string</li>
        <li><strong>ε-particle:</strong> Created by Y-string</li>
      </ul>

      <p><strong>Characteristic features:</strong></p>
      <ul>
        <li>Fractional quantum numbers (charge, statistics)</li>
        <li>Anyonic braiding statistics</li>
        <li>Topologically protected properties</li>
        <li>Can only be annihilated in pairs</li>
      </ul>
    </div>

    <h2>Distinguishing Features</h2>

    <div class="comparison-box">
      <h3>Local vs Topological</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Local Excitations</th>
          <th>Topological Excitations</th>
        </tr>
        <tr>
          <td><strong>Creation</strong></td>
          <td>Local operator O(r)</td>
          <td>String operator W(C)</td>
        </tr>
        <tr>
          <td><strong>Energy</strong></td>
          <td>~J (Hamiltonian scale)</td>
          <td>~J (but different origin)</td>
        </tr>
        <tr>
          <td><strong>Quantum numbers</strong></td>
          <td>Integer</td>
          <td>Can be fractional</td>
        </tr>
        <tr>
          <td><strong>Statistics</strong></td>
          <td>Bose or Fermi</td>
          <td>Anyonic</td>
        </tr>
        <tr>
          <td><strong>Detection</strong></td>
          <td>Local measurement</td>
          <td>Non-local (Wilson loop)</td>
        </tr>
        <tr>
          <td><strong>Annihilation</strong></td>
          <td>Can disappear locally</td>
          <td>Must pair-annihilate</td>
        </tr>
      </table>
    </div>

    <h2>Superselection Sectors</h2>

    <div class="note-box">
      <h3>Topological Sectors</h3>

      <p><strong>Anyon types define sectors:</strong></p>
      <ul>
        <li>Cannot create coherent superposition of different anyon sectors</li>
        <li>Superselection rule enforced by locality</li>
        <li>Example: |vacuum⟩ + |e-particle⟩ forbidden</li>
      </ul>

      <p><strong>Physical reason:</strong></p>
      <ul>
        <li>Anyons detected by Wilson loops extending to infinity</li>
        <li>No local operator can change anyon sector</li>
        <li>Sectors are orthogonal in thermodynamic limit</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key distinctions:</strong></p>
      <ul>
        <li><strong>Local:</strong> Created by O(r), integer quantum numbers, conventional statistics</li>
        <li><strong>Topological:</strong> Created by W(C), fractional quantum numbers, anyonic statistics</li>
        <li><strong>Superselection:</strong> Different anyon types define distinct quantum sectors</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_9_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
