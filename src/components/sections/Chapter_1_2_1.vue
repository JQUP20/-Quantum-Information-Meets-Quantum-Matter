<template>
  <div class="section-content">
    <h1>1.2.1 Joint Probability Without Correlations</h1>

    <h2>Statistical Independence in Classical Systems</h2>
    <p>Before we can appreciate the uniqueness of quantum entanglement, we must first understand correlations in classical probability theory. The simplest case to consider is when two random variables are completely uncorrelated, or <strong>statistically independent</strong>.</p>

    <h2>Definition of Independence</h2>
    <p>Consider two random variables <em>A</em> and <em>B</em>, each of which can take on various values. In the absence of any correlation between them, their joint probability distribution <em>factorizes</em>:</p>

    <div class="equation">
      P(A = a, B = b) = P(A = a) × P(B = b)
    </div>

    <p>This equation is the mathematical definition of statistical independence. It states that the probability of observing both <em>A = a</em> and <em>B = b</em> simultaneously is simply the product of the individual probabilities.</p>

    <h2>Physical Interpretation</h2>
    <p>The factorization of the joint probability has a clear physical meaning:</p>

    <div class="highlight-box">
      <p><strong>Key Insight:</strong> When A and B are independent, knowledge about the outcome of measuring A provides <em>no information whatsoever</em> about the outcome of measuring B, and vice versa.</p>
    </div>

    <h2>Concrete Example: Coin Flips</h2>
    <p>Let's consider a simple example with two fair coin flips:</p>

    <ul>
      <li>Random variable A: outcome of first coin flip (Heads or Tails)</li>
      <li>Random variable B: outcome of second coin flip (Heads or Tails)</li>
    </ul>

    <p>For independent coins:</p>
    <div class="equation">
      P(H,H) = P(H) × P(H) = 1/2 × 1/2 = 1/4<br>
      P(H,T) = P(H) × P(T) = 1/2 × 1/2 = 1/4<br>
      P(T,H) = P(T) × P(H) = 1/2 × 1/2 = 1/4<br>
      P(T,T) = P(T) × P(T) = 1/2 × 1/2 = 1/4
    </div>

    <p>Each of the four possible outcomes is equally likely, and observing the first coin tells us nothing about the second.</p>

    <h2>Joint Probability Table</h2>
    <p>We can visualize the joint probability distribution as a table:</p>

    <div class="table-container">
      <table class="probability-table">
        <tr>
          <th>A \ B</th>
          <th>Heads</th>
          <th>Tails</th>
        </tr>
        <tr>
          <th>Heads</th>
          <td>1/4</td>
          <td>1/4</td>
        </tr>
        <tr>
          <th>Tails</th>
          <td>1/4</td>
          <td>1/4</td>
        </tr>
      </table>
    </div>

    <h2>Mathematical Properties</h2>
    <p>For independent random variables, several important properties hold:</p>

    <ol>
      <li><strong>Marginal distributions:</strong> We can recover the individual probability distributions by summing over the other variable:
        <div class="equation">
          P(A = a) = Σ_b P(A = a, B = b)
        </div>
      </li>

      <li><strong>Conditional probability:</strong> The conditional probability equals the marginal probability:
        <div class="equation">
          P(A = a | B = b) = P(A = a)
        </div>
        This confirms that knowing B doesn't change our knowledge about A.
      </li>

      <li><strong>Expected values factorize:</strong> For any functions f and g:
        <div class="equation">
          ⟨f(A)g(B)⟩ = ⟨f(A)⟩ × ⟨g(B)⟩
        </div>
      </li>
    </ol>

    <h2>Generalization to Multiple Variables</h2>
    <p>The concept extends naturally to more than two variables. For N mutually independent random variables A₁, A₂, ..., Aₙ:</p>

    <div class="equation">
      P(A₁ = a₁, A₂ = a₂, ..., Aₙ = aₙ) = P(A₁ = a₁) × P(A₂ = a₂) × ... × P(Aₙ = aₙ)
    </div>

    <h2>Why This Matters</h2>
    <div class="info-box">
      <p>Understanding the independent case is crucial because:</p>
      <ul>
        <li>It provides the simplest baseline for comparison when studying correlations</li>
        <li>Many physical systems can be approximated as collections of independent subsystems</li>
        <li>Deviations from independence indicate the presence of interactions or correlations</li>
        <li>In quantum mechanics, product states (the quantum analog of independent variables) play a similarly fundamental role</li>
      </ul>
    </div>

    <h2>Transition to Correlated Systems</h2>
    <p>While statistical independence is mathematically clean and conceptually simple, most interesting physical systems exhibit correlations. In the next sections, we'll explore how to characterize these correlations using correlation functions and information-theoretic measures, setting the stage for understanding the even more remarkable quantum correlations that arise from entanglement.</p>
  </div>
</template>

<script>
export default {
  name: 'Chapter_1_2_1'
};
</script>

<style scoped>
.section-content {
  line-height: 1.8;
  color: #2d3748;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 2rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #667eea;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 2rem 0 1rem;
  padding-top: 1rem;
}

p {
  margin: 1rem 0;
  text-align: justify;
}

ul, ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

li {
  margin: 0.5rem 0;
}

.equation {
  background: #f8f9fa;
  border-left: 4px solid #667eea;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  font-family: 'Courier New', monospace;
  font-size: 1.05rem;
  overflow-x: auto;
  border-radius: 0 4px 4px 0;
}

.highlight-box {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-left: 4px solid #667eea;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}

.info-box {
  background: #f0f4ff;
  border-left: 4px solid #4299e1;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}

.table-container {
  margin: 1.5rem 0;
  overflow-x: auto;
}

.probability-table {
  border-collapse: collapse;
  margin: 0 auto;
  min-width: 300px;
}

.probability-table th,
.probability-table td {
  border: 1px solid #cbd5e0;
  padding: 0.75rem 1rem;
  text-align: center;
}

.probability-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.probability-table tr:nth-child(even) {
  background: #f7fafc;
}

.probability-table tr:hover {
  background: #edf2f7;
}
</style>
