<template>
  <div class="section-content">
    <h1>9.3.2 Structural Properties</h1>

    <p>
      PEPS representing symmetry-breaking phases exhibit characteristic structural properties that distinguish them from topologically ordered states. Understanding these properties provides insights into the nature of conventional phase transitions and long-range order in 2D systems.
    </p>

    <h2>Correlation Functions in Symmetry-Breaking Phases</h2>

    <div class="info-box">
      <h3>Long-Range Order</h3>
      <p>
        In a symmetry-breaking phase, the order parameter exhibits long-range correlations:
      </p>
      <div class="equation">
        lim_{|r|→∞} ⟨O_0 O_r⟩ - ⟨O_0⟩⟨O_r⟩ → m² ≠ 0
      </div>
      <p>
        where m is the spontaneous magnetization (order parameter).
      </p>
      <p>
        <strong>In PEPS language:</strong>
      </p>
      <ul>
        <li>Broken symmetry manifests as preferred configuration of virtual indices</li>
        <li>Transfer matrix has multiple dominant eigenvalues (one per symmetry-broken state)</li>
        <li>Long-range order encoded in virtual bond structure</li>
      </ul>
    </div>

    <h2>Ground State Degeneracy</h2>

    <div class="highlight-box">
      <h4>Symmetry-Breaking Degeneracy</h4>
      <p>
        For a system with spontaneously broken symmetry G → H:
      </p>
      <div class="equation">
        Degeneracy = |G| / |H|
      </div>
      <p>
        <strong>Examples:</strong>
      </p>
      <ul>
        <li><strong>Ising (ℤ₂):</strong> 2-fold degeneracy (|↑↑...↑⟩ and |↓↓...↓⟩)</li>
        <li><strong>XY model (U(1)):</strong> Continuous degeneracy (Goldstone modes)</li>
        <li><strong>Heisenberg (SU(2)):</strong> Continuous degeneracy in spin direction</li>
      </ul>
      <p>
        <strong>PEPS structure:</strong> Different ground states correspond to different "gauge sectors" of the virtual indices.
      </p>
    </div>

    <h2>Finite Correlation Length</h2>

    <div class="info-box">
      <h3>Correlation Length in PEPS</h3>
      <p>
        Even in symmetry-breaking phases, correlations beyond the order parameter decay exponentially:
      </p>
      <div class="equation">
        ⟨O_0 O_r⟩_{connected} ~ e^{-r/ξ}
      </div>
      <p>
        where ξ is finite (though potentially large near phase transitions).
      </p>
      <p>
        The correlation length is determined by the spectral gap of the transfer operator (generalized to 2D).
      </p>
    </div>

    <h2>Tensor Contraction Structure</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Observable</th>
            <th>Contraction Method</th>
            <th>Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Local observable ⟨O_j⟩</td>
            <td>Boundary MPS</td>
            <td>O(χ^{10})</td>
          </tr>
          <tr>
            <td>Correlation ⟨O_j O_k⟩</td>
            <td>Transfer matrix power</td>
            <td>O(χ^{10} |j-k|)</td>
          </tr>
          <tr>
            <td>Order parameter m</td>
            <td>Fixed point iteration</td>
            <td>O(χ^{10})</td>
          </tr>
          <tr>
            <td>Energy density ⟨H⟩/N</td>
            <td>Local environment</td>
            <td>O(χ^{10})</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Entanglement Properties</h2>

    <div class="highlight-box">
      <h4>Area Law with Corrections</h4>
      <p>
        Symmetry-breaking PEPS satisfy:
      </p>
      <div class="equation">
        S(ρ_A) = α |∂A| log χ + β
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>α |∂A| log χ: Area law contribution (dominant)</li>
        <li>β: Subleading constant (related to Goldstone modes if present)</li>
      </ul>
      <p>
        <strong>Physical meaning:</strong> Entanglement concentrated at boundary, with small constant shift from symmetry breaking.
      </p>
    </div>

    <h2>Goldstone Modes and Gapless Excitations</h2>

    <div class="info-box">
      <h3>Continuous Symmetry Breaking</h3>
      <p>
        When a continuous symmetry is spontaneously broken:
      </p>
      <ul>
        <li><strong>Goldstone theorem:</strong> Gapless excitations emerge</li>
        <li><strong>Dispersion:</strong> ω(k) ~ c|k| (linear for small k)</li>
        <li><strong>In PEPS:</strong> Multiple near-degenerate eigenvalues of transfer operator</li>
      </ul>
      <p>
        <strong>Example:</strong> XY model breaking U(1) → 1 has one Goldstone mode (spin wave).
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Structural Properties</h3>
      <ul>
        <li><strong>Long-range order:</strong> Non-zero order parameter, lim_{r→∞} C(r) ≠ 0</li>
        <li><strong>Ground state degeneracy:</strong> |G|/|H| states related by symmetry</li>
        <li><strong>Finite correlation length:</strong> Beyond order parameter, ξ < ∞</li>
        <li><strong>Area law:</strong> S ~ |∂A| log χ with small corrections</li>
        <li><strong>Goldstone modes:</strong> Gapless excitations for continuous symmetry breaking</li>
        <li><strong>Computational cost:</strong> O(χ^{10}) for boundary MPS methods</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_3_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
