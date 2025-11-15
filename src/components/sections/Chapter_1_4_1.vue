<template>
  <div class="section-content">
    <h1>1.4.1 The GHZ Paradox</h1>

    <h2>Beyond Bell: Multipartite Entanglement</h2>
    <p>While Bell inequalities demonstrate the non-classical nature of bipartite entanglement, the Greenberger-Horne-Zeilinger (GHZ) paradox reveals even more striking contradictions between quantum mechanics and local realism for three or more particles.</p>

    <h2>The GHZ State</h2>
    <p>The GHZ state for three qubits is:</p>

    <div class="equation">
      |GHZ⟩ = (|000⟩ + |111⟩)/√2
    </div>

    <p>This is a genuine three-party entangled state—it cannot be written as a product or reduced to bipartite entanglement.</p>

    <div class="highlight-box">
      <h3>Genuine Multipartite Entanglement</h3>
      <p>The GHZ state demonstrates <strong>genuine tripartite entanglement</strong>: all three particles are entangled together in a way that cannot be decomposed into pairwise entanglement.</p>
    </div>

    <h2>The GHZ Paradox</h2>
    <p>Consider measurements in two bases for each particle:</p>
    <ul>
      <li>X-basis: {|+⟩, |-⟩} where |±⟩ = (|0⟩ ± |1⟩)/√2</li>
      <li>Y-basis: {|+i⟩, |-i⟩} where |±i⟩ = (|0⟩ ± i|1⟩)/√2</li>
    </ul>

    <h3>Perfect Correlations</h3>
    <p>For the GHZ state, certain measurement combinations give perfect correlations:</p>

    <div class="equation">
      XXX: (+1)(+1)(+1) = +1<br>
      XYY: (+1)(-1)(-1) = +1<br>
      YXY: (-1)(+1)(-1) = +1<br>
      YYX: (-1)(-1)(+1) = +1
    </div>

    <div class="info-box">
      <h3>Local Realism Prediction</h3>
      <p>If each particle had predetermined values for X and Y measurements (local hidden variables), then:</p>
      <div class="equation">
        XXX · XYY · YXY · YYX = X³Y³ = +1
      </div>
      <p>Multiplying the four correlations: (+1)(+1)(+1)(+1) = +1</p>
    </div>

    <h3>Quantum Mechanical Prediction</h3>
    <p>Measuring XXYY on the GHZ state:</p>
    <div class="equation">
      ⟨GHZ|σ_x^1 σ_x^2 σ_y^3|GHZ⟩ = -1
    </div>

    <p>This contradicts local realism! The product gives -1, not +1.</p>

    <div class="highlight-box">
      <h3>All-or-Nothing Violation</h3>
      <p>Unlike Bell inequalities (statistical violations), the GHZ paradox gives a <strong>deterministic contradiction</strong>. Every measurement sequence produces results impossible for local hidden variables.</p>
    </div>

    <h2>Comparison with Bell Inequalities</h2>

    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Feature</th>
          <th>Bell Inequalities</th>
          <th>GHZ Paradox</th>
        </tr>
        <tr>
          <td>Number of particles</td>
          <td>2</td>
          <td>3 or more</td>
        </tr>
        <tr>
          <td>Type of contradiction</td>
          <td>Statistical</td>
          <td>Deterministic</td>
        </tr>
        <tr>
          <td>Requires many measurements</td>
          <td>Yes</td>
          <td>No (single run sufficient)</td>
        </tr>
        <tr>
          <td>Violation strength</td>
          <td>Probabilistic</td>
          <td>Absolute</td>
        </tr>
      </table>
    </div>

    <h2>Experimental Realizations</h2>
    <p>GHZ states have been created and verified in various systems:</p>
    <ul>
      <li><strong>Photons:</strong> Polarization-entangled photon triplets</li>
      <li><strong>Trapped ions:</strong> Internal states of three ions</li>
      <li><strong>Superconducting qubits:</strong> Multiple qubits in circuit QED</li>
      <li><strong>Nuclear spins:</strong> NMR quantum information processing</li>
    </ul>

    <h2>Fragility of GHZ States</h2>
    <p>GHZ states are remarkably fragile:</p>

    <div class="note-box">
      <p><strong>Loss of One Particle:</strong> If you trace out (or lose) one qubit from a GHZ state, the remaining two-qubit state is completely separable (not entangled)!</p>
      <div class="equation">
        Tr_C(|GHZ⟩⟨GHZ|) = (|00⟩⟨00| + |11⟩⟨11|)/2
      </div>
      <p>This is a classical mixture, not an entangled state.</p>
    </div>

    <h2>Applications</h2>
    <p>GHZ states enable unique quantum information protocols:</p>

    <h3>Quantum Secret Sharing</h3>
    <p>A secret can be encoded such that all parties must cooperate to retrieve it—no subset suffices.</p>

    <h3>Multiparty Quantum Communication</h3>
    <p>GHZ states can reduce communication complexity in distributed computing scenarios.</p>

    <h3>Quantum Metrology</h3>
    <p>GHZ states achieve Heisenberg-limited precision scaling with particle number.</p>

    <h2>Generalizations</h2>
    <p>The GHZ construction generalizes to N particles:</p>
    <div class="equation">
      |GHZ_N⟩ = (|0...0⟩ + |1...1⟩)/√2
    </div>

    <p>For N > 3, even richer non-classical correlations emerge, leading to Hardy-type paradoxes and other multipartite Bell inequalities.</p>

    <div class="preview-box">
      <h4>Significance</h4>
      <p>The GHZ paradox demonstrates that quantum mechanics is not just probabilistically different from classical physics—it's logically incompatible with local realism in the most direct way possible.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_1_4_1'
};
</script>

<style scoped src="../../../styles/section-styles.css"></style>
