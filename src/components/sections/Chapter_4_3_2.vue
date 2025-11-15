<template>
  <div class="section-content">
    <h1>4.3.2 The Effect of Locality</h1>

    <h2>Lieb-Robinson Bound</h2>
    <p>Locality of interactions implies locality of dynamics:</p>

    <div class="highlight-box">
      <h3>Lieb-Robinson Theorem</h3>
      <p>For local Hamiltonians, correlations spread at finite velocity:</p>
      <div class="equation">
        |[A(t), B(0)]| ≤ C e^{-μ(d(A,B) - v|t|)}
      </div>

      <p>where:</p>
      <ul>
        <li><strong>v:</strong> Effective "light cone" velocity</li>
        <li><strong>d(A,B):</strong> Distance between operators</li>
        <li><strong>μ:</strong> Decay rate</li>
      </ul>

      <p><strong>Implication:</strong> No instantaneous action at distance—quantum analog of relativity!</p>
    </div>

    <h2>Area Law for Ground States</h2>
    <div class="info-box">
      <p>For gapped local Hamiltonians in D dimensions:</p>
      <div class="equation">
        S(A) ≤ c · |∂A|^{D-1}
      </div>

      <p>Entanglement entropy scales with boundary area, not volume!</p>

      <p><strong>Consequence:</strong> Ground states have limited entanglement → efficient representation (MPS, PEPS)</p>
    </div>

    <h2>Exponential Decay of Correlations</h2>
    <div class="note-box">
      <p>In gapped phases:</p>
      <div class="equation">
        |⟨O_i O_j⟩ - ⟨O_i⟩⟨O_j⟩| ≤ C e^{-d(i,j)/ξ}
      </div>

      <p>where ξ is the correlation length.</p>

      <p><strong>Physical meaning:</strong> Local measurements provide limited information about distant regions</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_3_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
