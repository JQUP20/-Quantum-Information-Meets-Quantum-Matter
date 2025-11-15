<template>
  <div class="section-content">
    <h1>3.4.1 Shor's Code in Stabilizer Form</h1>

    <h2>Stabilizer Description</h2>
    <p>Shor's ⟦9,1,3⟧ code can be elegantly described using 8 stabilizer generators.</p>

    <div class="highlight-box">
      <h3>The 8 Generators</h3>
      <p><strong>Bit flip stabilizers (within blocks):</strong></p>
      <ul>
        <li>g₁ = Z₁Z₂, g₂ = Z₂Z₃</li>
        <li>g₃ = Z₄Z₅, g₄ = Z₅Z₆</li>
        <li>g₅ = Z₇Z₈, g₆ = Z₈Z₉</li>
      </ul>

      <p><strong>Phase flip stabilizers (between blocks):</strong></p>
      <ul>
        <li>g₇ = X₁X₂X₃X₄X₅X₆</li>
        <li>g₈ = X₄X₅X₆X₇X₈X₉</li>
      </ul>

      <p>Code space: joint +1 eigenspace of all generators</p>
    </div>

    <h2>Logical Operators</h2>
    <div class="info-box">
      <p><strong>Logical X:</strong> X̄ = X₁X₂X₃X₄X₅X₆X₇X₈X₉ (flips all qubits)</p>
      <p><strong>Logical Z:</strong> Z̄ = Z₁Z₂Z₃ (phase flip on first block)</p>

      <p>These commute with all stabilizers but anticommute with each other!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_3_4_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
