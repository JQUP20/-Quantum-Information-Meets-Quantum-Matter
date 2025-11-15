<template>
  <div class="section-content">
    <h1>3.3 Quantum Error-Correcting Criteria, Code Distance</h1>

    <h2>The Knill-Laflamme Conditions</h2>
    <p>When can a code correct a set of errors? The <strong>Knill-Laflamme theorem</strong> (1997) provides the answer:</p>

    <div class="highlight-box">
      <h3>Error-Correcting Conditions</h3>
      <p>A code C with basis {|i⟩} can correct errors {E_a} if and only if:</p>
      <div class="equation">
        ⟨i|E_a† E_b|j⟩ = C_{ab} δ_{ij}
      </div>

      <p>for all codewords |i⟩, |j⟩ and errors E_a, E_b.</p>

      <p><strong>Interpretation:</strong></p>
      <ul>
        <li>Different errors must be <strong>distinguishable</strong> on code space</li>
        <li>Matrix C_{ab} depends on errors, not on which codeword</li>
        <li>Syndrome measurement reveals which error, not which codeword!</li>
      </ul>
    </div>

    <h2>Code Distance</h2>
    <p>The <strong>distance</strong> d of a quantum code is the minimum weight of an operator that maps one codeword to an orthogonal state:</p>

    <div class="info-box">
      <h3>Definition</h3>
      <div class="equation">
        d = min{wt(P) : P maps code space to orthogonal space, P ≠ I}
      </div>

      <p>where wt(P) is the weight (number of qubits P acts on non-trivially).</p>

      <h4>Error Correction Capability:</h4>
      <div class="equation">
        Can correct t errors where t = ⌊(d-1)/2⌋
      </div>

      <p><strong>Examples:</strong></p>
      <ul>
        <li>d = 3: corrects 1 error, detects 2</li>
        <li>d = 5: corrects 2 errors, detects 4</li>
        <li>d = 7: corrects 3 errors, detects 6</li>
      </ul>
    </div>

    <h2>Quantum Singleton Bound</h2>
    <div class="highlight-box">
      <p>For an ⟦n,k,d⟧ code:</p>
      <div class="equation">
        k + 2d ≤ n + 2
      </div>

      <p><strong>Implication:</strong> Cannot have large k, large d, and small n simultaneously!</p>

      <h4>Examples:</h4>
      <ul>
        <li>⟦5,1,3⟧: 1 + 6 ≤ 7 ✓ (saturates bound!)</li>
        <li>⟦7,1,3⟧: 1 + 6 ≤ 9 ✓</li>
        <li>⟦9,1,3⟧: 1 + 6 ≤ 11 ✓</li>
      </ul>
    </div>

    <h2>Looking Ahead</h2>
    <div class="preview-box">
      <h4>Next: Stabilizer Formalism (Section 3.4)</h4>
      <p>We'll develop powerful framework for constructing and analyzing codes:</p>
      <ul>
        <li>Stabilizer groups and generators</li>
        <li>Systematic code construction</li>
        <li>Graph states and cluster states</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_3_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
