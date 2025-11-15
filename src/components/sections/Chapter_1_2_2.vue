<template>
  <div class="section-content">
    <h1>1.2.2 Correlation Functions</h1>
    <h2>Quantifying Correlations</h2>
    <p>When random variables are not independent, we need mathematical tools to quantify the degree and nature of their statistical dependence. <strong>Correlation functions</strong> provide precisely this capability.</p>

    <h2>The Covariance</h2>
    <p>For two random variables X and Y, the most basic correlation function is the <strong>covariance</strong>:</p>

    <div class="equation">
      Cov(X,Y) = ⟨(X - ⟨X⟩)(Y - ⟨Y⟩)⟩ = ⟨XY⟩ - ⟨X⟩⟨Y⟩
    </div>

    <p>where ⟨·⟩ denotes the expectation value (average over the probability distribution).</p>

    <h3>Interpretation</h3>
    <ul>
      <li><strong>Cov(X,Y) = 0:</strong> X and Y are <em>uncorrelated</em></li>
      <li><strong>Cov(X,Y) > 0:</strong> <em>Positive correlation</em></li>
      <li><strong>Cov(X,Y) < 0:</strong> <em>Negative correlation</em> (anti-correlation)</li>
    </ul>

    <h2>The Correlation Coefficient</h2>
    <p>The covariance depends on the units and scales of X and Y. To obtain a dimensionless measure, we use the <strong>Pearson correlation coefficient</strong>:</p>

    <div class="equation">
      ρ(X,Y) = Cov(X,Y) / (σ_X σ_Y)
    </div>

    <p>where σ_X = √⟨(X - ⟨X⟩)²⟩ is the standard deviation of X.</p>

    <div class="highlight-box">
      <h3>Properties of ρ</h3>
      <ul>
        <li>ρ is dimensionless and normalized: <strong>-1 ≤ ρ ≤ 1</strong></li>
        <li>ρ = 1: perfect positive linear correlation</li>
        <li>ρ = -1: perfect negative linear correlation</li>
        <li>ρ = 0: no linear correlation</li>
      </ul>
    </div>

    <h2>Correlation Functions in Physics</h2>
    <p>In statistical physics and condensed matter physics, correlation functions are central tools for understanding many-body systems.</p>

    <h3>Two-Point Correlation Function</h3>
    <div class="equation">
      G(r₁, r₂) = ⟨O(r₁)O(r₂)⟩ - ⟨O(r₁)⟩⟨O(r₂)⟩
    </div>

    <div class="info-box">
      <h3>Correlation Length</h3>
      <p>The <strong>correlation length ξ</strong> characterizes the distance over which correlations remain significant. It plays a crucial role in understanding phase transitions.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_1_2_2'
};
</script>

<style scoped src="../../../styles/section-styles.css"></style>
