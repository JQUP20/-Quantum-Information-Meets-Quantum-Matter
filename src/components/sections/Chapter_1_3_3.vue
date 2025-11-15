<template>
  <div class="section-content">
    <h1>1.3.3 Pure Bipartite State, Schmidt Decomposition</h1>

    <h2>The Schmidt Decomposition Theorem</h2>
    <p>One of the most powerful tools for understanding bipartite pure states is the <strong>Schmidt decomposition</strong>. It provides a canonical form for any pure state of a composite system.</p>

    <div class="highlight-box">
      <h3>Schmidt Decomposition Theorem</h3>
      <p>For any pure bipartite state |ψ⟩_AB, there exist orthonormal bases {|i_A⟩} for system A and {|i_B⟩} for system B such that:</p>
      <div class="equation">
        |ψ⟩_AB = Σᵢ √λᵢ |i_A⟩ ⊗ |i_B⟩
      </div>
      <p>where λᵢ ≥ 0 and Σᵢ λᵢ = 1. The λᵢ are called <strong>Schmidt coefficients</strong>.</p>
    </div>

    <h2>Schmidt Rank and Entanglement</h2>
    <p>The <strong>Schmidt rank</strong> is the number of non-zero Schmidt coefficients.</p>

    <ul>
      <li><strong>Schmidt rank = 1:</strong> The state is separable (product state)</li>
      <li><strong>Schmidt rank > 1:</strong> The state is entangled</li>
    </ul>

    <h2>Schmidt Coefficients Characterize Entanglement</h2>
    <p>The distribution of Schmidt coefficients tells us about the degree of entanglement:</p>

    <div class="info-box">
      <ul>
        <li><strong>One non-zero coefficient:</strong> No entanglement (product state)</li>
        <li><strong>All coefficients equal:</strong> Maximal entanglement</li>
        <li><strong>Intermediate distribution:</strong> Partial entanglement</li>
      </ul>
    </div>

    <h2>Example: Bell States</h2>
    <p>Consider the Bell state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2</p>

    <p>This is already in Schmidt form with:</p>
    <div class="equation">
      λ₁ = λ₂ = 1/2<br>
      |1_A⟩ = |0⟩, |1_B⟩ = |0⟩<br>
      |2_A⟩ = |1⟩, |2_B⟩ = |1⟩
    </div>

    <p>Schmidt rank = 2, and the equal coefficients indicate maximal entanglement.</p>

    <h2>Connection to Reduced Density Matrices</h2>
    <p>The Schmidt coefficients are precisely the eigenvalues of the reduced density matrices:</p>

    <div class="equation">
      ρ_A = Σᵢ λᵢ |i_A⟩⟨i_A|<br>
      ρ_B = Σᵢ λᵢ |i_B⟩⟨i_B|
    </div>

    <div class="highlight-box">
      <h3>Key Insight</h3>
      <p>Both reduced density matrices have the <strong>same spectrum</strong> (eigenvalues). This is a fundamental property of bipartite pure states.</p>
    </div>

    <h2>Entanglement Entropy</h2>
    <p>The von Neumann entropy of either reduced density matrix quantifies entanglement:</p>

    <div class="equation">
      S(ρ_A) = S(ρ_B) = -Σᵢ λᵢ log₂ λᵢ
    </div>

    <p>This is called the <strong>entanglement entropy</strong>.</p>

    <ul>
      <li>S = 0: No entanglement (product state)</li>
      <li>S = log₂(d): Maximal entanglement (for d-dimensional subsystems)</li>
    </ul>

    <h2>Example: Computing Schmidt Decomposition</h2>
    <p>Consider the state:</p>
    <div class="equation">
      |ψ⟩ = (2|00⟩ + |01⟩ + |10⟩)/√6
    </div>

    <p><strong>Step 1:</strong> Write |ψ⟩ as a matrix:</p>
    <div class="equation">
      [2/√6  1/√6]<br>
      [1/√6  0   ]
    </div>

    <p><strong>Step 2:</strong> Perform Singular Value Decomposition (SVD)</p>
    
    <p><strong>Step 3:</strong> The singular values give √λᵢ</p>

    <div class="note-box">
      <p><strong>Practical Tip:</strong> The Schmidt decomposition is obtained by performing SVD on the coefficient matrix of |ψ⟩.</p>
    </div>

    <h2>Applications</h2>
    <p>The Schmidt decomposition is invaluable for:</p>
    <ul>
      <li>Quantifying entanglement</li>
      <li>Simplifying calculations involving bipartite states</li>
      <li>Understanding the structure of quantum correlations</li>
      <li>Designing entanglement-based protocols</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Chapter_1_3_3'
};
</script>

<style scoped>
@import '../../../styles/section-styles.css';
</style>
