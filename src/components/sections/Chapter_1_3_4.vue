<template>
  <div class="section-content">
    <h1>1.3.4 Mixed Bipartite State</h1>

    <h2>Beyond Pure States</h2>
    <p>While the Schmidt decomposition elegantly characterizes pure bipartite states, many physical situations involve <strong>mixed states</strong>. Understanding entanglement in mixed states is more subtle but crucial for practical quantum information.</p>

    <h2>Separable Mixed States</h2>
    <p>A mixed bipartite state ρ_AB is <strong>separable</strong> if it can be written as a convex combination of product states:</p>

    <div class="equation">
      ρ_AB = Σᵢ pᵢ ρᵢ^A ⊗ ρᵢ^B
    </div>

    <p>where pᵢ ≥ 0, Σᵢ pᵢ = 1, and ρᵢ^A, ρᵢ^B are density matrices for systems A and B.</p>

    <div class="highlight-box">
      <h3>Key Definition</h3>
      <p>A state is <strong>entangled</strong> if and only if it is NOT separable. That is, it cannot be written as a mixture of product states.</p>
    </div>

    <h2>The Separability Problem</h2>
    <p>Determining whether a given mixed state is separable or entangled is surprisingly difficult—it's an NP-hard problem in general!</p>

    <div class="info-box">
      <h3>Why Is This Hard?</h3>
      <p>Even if we have the full description of ρ_AB, there's no simple formula to check separability. We need sophisticated criteria and tests.</p>
    </div>

    <h2>Necessary Conditions: Partial Transpose</h2>
    <p>The <strong>Peres-Horodecki criterion</strong> (PPT criterion) provides a powerful necessary condition for separability.</p>

    <p>Define the <strong>partial transpose</strong> with respect to system B:</p>
    <div class="equation">
      (ρ^T_B)_{ij,kl} = (ρ)_{il,kj}
    </div>

    <div class="highlight-box">
      <h3>PPT Criterion</h3>
      <p>If ρ_AB is separable, then ρ^T_B ≥ 0 (positive semi-definite).</p>
      <p><strong>Contrapositive:</strong> If ρ^T_B has negative eigenvalues, then ρ_AB is entangled.</p>
    </div>

    <p>For 2×2 and 2×3 systems, PPT is both necessary and sufficient. For larger systems, PPT is only necessary—there exist entangled states with positive partial transpose (PPT entangled states)!</p>

    <h2>Example: Werner States</h2>
    <p>Werner states are a family of mixed states defined as:</p>

    <div class="equation">
      ρ_W(p) = p|Ψ⁻⟩⟨Ψ⁻| + (1-p)I/4
    </div>

    <p>where |Ψ⁻⟩ = (|01⟩ - |10⟩)/√2 is the singlet state.</p>

    <ul>
      <li>p = 1: Pure maximally entangled state</li>
      <li>p = 0: Completely mixed separable state</li>
      <li>p > 1/3: Entangled (can be shown using PPT criterion)</li>
      <li>p ≤ 1/3: Separable</li>
    </ul>

    <h2>Entanglement Measures for Mixed States</h2>
    <p>Several measures quantify entanglement in mixed states:</p>

    <h3>1. Entanglement of Formation</h3>
    <p>The minimum average entanglement of pure states in any decomposition:</p>
    <div class="equation">
      E_F(ρ) = min Σᵢ pᵢ S(ρᵢ^A)
    </div>

    <h3>2. Distillable Entanglement</h3>
    <p>The maximum rate at which Bell pairs can be extracted from many copies of ρ.</p>

    <h3>3. Negativity</h3>
    <p>Based on the negative eigenvalues of ρ^T_B:</p>
    <div class="equation">
      N(ρ) = (||ρ^T_B||₁ - 1)/2
    </div>

    <div class="info-box">
      <h3>Different Measures, Different Insights</h3>
      <p>Unlike for pure states (where entanglement entropy suffices), mixed states require multiple measures to fully characterize their entanglement properties.</p>
    </div>

    <h2>Bound Entanglement</h2>
    <p>Some entangled states cannot have any entanglement distilled from them—these are called <strong>bound entangled states</strong>. They represent "locked" entanglement that can't be converted to usable Bell pairs.</p>

    <div class="note-box">
      <p><strong>Surprising Fact:</strong> Bound entangled states exist! They are entangled (not separable) but have zero distillable entanglement. This phenomenon has no classical analog.</p>
    </div>

    <h2>Physical Significance</h2>
    <p>Understanding mixed-state entanglement is crucial for:</p>
    <ul>
      <li>Real quantum systems (which are never perfectly isolated)</li>
      <li>Quantum communication over noisy channels</li>
      <li>Assessing the quality of experimental entanglement</li>
      <li>Quantum cryptography security analysis</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Chapter_1_3_4'
};
</script>

<style scoped>
@import '../../../styles/section-styles.css';
</style>
