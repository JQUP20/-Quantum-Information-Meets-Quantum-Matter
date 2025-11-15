<template>
  <div class="section-content">
    <h1>6.6 Quantum Liquids of Unoriented Strings</h1>

    <p>Unoriented string liquids provide a unified framework for understanding topological order through string condensation. Unlike oriented strings, unoriented strings have no directionality, leading to different fusion rules and anyonic excitations.</p>

    <h2>Unoriented vs Oriented Strings</h2>

    <div class="highlight-box">
      <h3>String Types</h3>

      <p><strong>Oriented strings:</strong></p>
      <ul>
        <li>Have direction (arrow along string)</li>
        <li>Reversing direction gives different string type</li>
        <li>Example: Wilson lines in gauge theories</li>
      </ul>

      <p><strong>Unoriented strings:</strong></p>
      <ul>
        <li>No preferred direction</li>
        <li>Invariant under direction reversal</li>
        <li>Example: Domain walls, Z₂ strings in toric code</li>
      </ul>

      <p><strong>Z₂ string liquid (toric code):</strong></p>
      <div class="equation">
        String ↔ domain wall between ↑ and ↓ regions
      </div>
      <ul>
        <li>No orientation needed</li>
        <li>Closed loops of domain walls</li>
        <li>Condensed state = superposition of all closed loop configs</li>
      </ul>
    </div>

    <h2>String Condensation Mechanism</h2>

    <div class="info-box">
      <h3>Ground State as String Condensate</h3>

      <p><strong>String configuration space:</strong></p>
      <ul>
        <li>Assign string/no-string to each plaquette edge</li>
        <li>Constraint: Closed loops only (no endpoints)</li>
      </ul>

      <p><strong>Ground state wavefunction:</strong></p>
      <div class="equation">
        |GS⟩ = (1/√N) Σ_{closed loops} |loop config⟩
      </div>

      <p><strong>Quantum fluctuations:</strong></p>
      <ul>
        <li>Strings fluctuate via local moves (A_s operator)</li>
        <li>All configurations weighted equally</li>
        <li>Macroscopic occupation of "string vacuum"</li>
      </ul>

      <p><strong>Bose condensation analogy:</strong></p>
      <ul>
        <li>Ordinary BEC: Point particles condense into k=0 mode</li>
        <li>String condensate: Extended objects (loops) condense</li>
        <li>Both create coherent quantum state</li>
      </ul>
    </div>

    <h2>Excitations as String Endpoints</h2>

    <div class="note-box">
      <h3>Anyons from Open Strings</h3>

      <p><strong>Creating excitations:</strong></p>
      <ul>
        <li>Open string = string with two endpoints</li>
        <li>Endpoints = anyonic quasiparticles</li>
        <li>Energy cost proportional to string tension</li>
      </ul>

      <p><strong>For Z₂ strings (toric code):</strong></p>
      <ul>
        <li><strong>Z-string:</strong> Endpoints are e-particles</li>
        <li><strong>X-string (dual):</strong> Endpoints are m-particles</li>
        <li><strong>Both strings:</strong> Endpoint is ε = e × m</li>
      </ul>

      <p><strong>String tension:</strong></p>
      <div class="equation">
        Energy ~ J × (string length)
      </div>
      <ul>
        <li>Finite in gapped phase</li>
        <li>Confines charges at large distances</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key concepts:</strong></p>
      <ul>
        <li><strong>Unoriented strings:</strong> No directionality, Z₂-like</li>
        <li><strong>String condensation:</strong> Quantum superposition of closed loop configurations</li>
        <li><strong>Excitations:</strong> String endpoints = anyons</li>
        <li><strong>Ground state:</strong> String liquid with topological order</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_6'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
