<template>
  <div class="section-content">
    <h1>1.2.3 Mutual Information</h1>

    <h2>Information-Theoretic Perspective on Correlations</h2>
    <p>While correlation functions quantify statistical dependence, they don't directly measure the <em>information content</em> of correlations. The concept of <strong>mutual information</strong> from information theory provides a more fundamental way to quantify how much information two random variables share.</p>

    <h2>Shannon Entropy</h2>
    <p>Before defining mutual information, we need to introduce <strong>Shannon entropy</strong>, which quantifies the uncertainty or information content of a random variable.</p>

    <p>For a discrete random variable A with probability distribution P(a), the Shannon entropy is:</p>

    <div class="equation">
      H(A) = -Σₐ P(a) log₂ P(a)
    </div>

    <p>The base-2 logarithm gives entropy in units of "bits."</p>

    <div class="highlight-box">
      <h3>Properties of Entropy</h3>
      <ul>
        <li><strong>Non-negative:</strong> H(A) ≥ 0</li>
        <li><strong>Maximum for uniform distribution:</strong> H is maximized when all outcomes are equally likely</li>
        <li><strong>Zero for deterministic outcome:</strong> H(A) = 0 if one outcome has probability 1</li>
      </ul>
    </div>

    <h2>Definition of Mutual Information</h2>
    <p>The <strong>mutual information</strong> between two random variables A and B quantifies how much information they share:</p>

    <div class="equation">
      I(A:B) = H(A) + H(B) - H(A,B)
    </div>

    <div class="info-box">
      <h4>What Mutual Information Tells Us:</h4>
      <p>I(A:B) measures the reduction in uncertainty about A obtained by measuring B (or vice versa).</p>
      <ul>
        <li>I(A:B) = 0: A and B are independent</li>
        <li>I(A:B) > 0: A and B are correlated</li>
        <li>I(A:B) = H(A) = H(B): Perfect correlation</li>
      </ul>
    </div>

    <h2>Transition to Quantum Information</h2>
    <p>These concepts have quantum generalizations using von Neumann entropy, which can detect and quantify quantum correlations including entanglement.</p>

    <div class="preview-box">
      <h4>Coming Next:</h4>
      <p>In Section 1.3, we transition from classical to quantum correlations. We'll see quantum systems can exhibit correlations that violate classical bounds—the remarkable phenomenon of entanglement.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_1_2_3'
};
</script>

<style scoped src="../../../styles/section-styles.css"></style>
