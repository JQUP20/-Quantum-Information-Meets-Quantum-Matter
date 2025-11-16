<template>
  <div class="section-content">
    <h1>10.5.1 Group Cohomology</h1>

    <p>
      Group cohomology provides the mathematical framework for complete classification of bosonic SPT phases.
    </p>

    <h2>Definition</h2>

    <div class="info-box">
      <h3>Cohomology Groups</h3>
      <p>
        The n-th cohomology group H^n(G,U(1)) is defined as:
      </p>
      <div class="equation">
        H^n(G,U(1)) = {n-cocycles}/{n-coboundaries}
      </div>
      <p>
        <strong>n-cocycle:</strong> Function ω(g₁,...,g_n) satisfying dω = 0
      </p>
      <p>
        <strong>n-coboundary:</strong> ω = dλ for some (n-1)-cochain λ
      </p>
    </div>

    <h2>Cocycle Conditions</h2>

    <div class="highlight-box">
      <h4>For n=2 (1D SPT):</h4>
      <div class="equation">
        ω(g₁,g₂)ω(g₁g₂,g₃) = ω(g₂,g₃)ω(g₁,g₂g₃)
      </div>
      <h4>For n=3 (2D SPT):</h4>
      <div class="equation">
        ω(g₂,g₃,g₄) ω(g₁,g₂g₃,g₄) ω(g₁,g₂,g₃)⁻¹ = ω(g₁g₂,g₃,g₄) ω(g₁,g₂,g₃g₄)⁻¹
      </div>
    </div>

    <h2>Physical Interpretation</h2>

    <div class="info-box">
      <p>
        <strong>Cocycle ω encodes:</strong>
      </p>
      <ul>
        <li>How symmetry acts on edge/boundary</li>
        <li>Projective representation phases</li>
        <li>Obstruction to trivializing the phase</li>
      </ul>
      <p>
        <strong>Cohomology class [ω] labels SPT phase</strong>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_5_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
