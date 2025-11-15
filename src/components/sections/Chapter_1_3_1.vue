<template>
  <div class="section-content">
    <h1>1.3.1 Pure and Mixed Quantum States</h1>

    <h2>The Quantum State Framework</h2>
    <p>To understand quantum correlations and entanglement, we must first establish how quantum states are mathematically described. Unlike classical probability distributions, quantum states require a richer mathematical structure.</p>

    <h2>Pure States: State Vectors</h2>
    <p>The simplest quantum states are <strong>pure states</strong>, described by state vectors in a Hilbert space.</p>

    <h3>State Vector Representation</h3>
    <p>A pure state of a quantum system is represented by a normalized vector |ψ⟩ in a Hilbert space ℋ:</p>

    <div class="equation">
      |ψ⟩ ∈ ℋ,  ⟨ψ|ψ⟩ = 1
    </div>

    <p>For a single qubit (two-level system), the most general pure state is:</p>

    <div class="equation">
      |ψ⟩ = α|0⟩ + β|1⟩
    </div>

    <p>where |α|² + |β|² = 1, and α, β are complex amplitudes.</p>

    <div class="highlight-box">
      <h3>Born Rule</h3>
      <p>The probability of measuring outcome i is given by |⟨i|ψ⟩|², the squared magnitude of the amplitude.</p>
      <p>For our qubit: P(0) = |α|², P(1) = |β|²</p>
    </div>

    <h2>Density Matrix Formalism</h2>
    <p>While state vectors suffice for pure states, the more general description uses <strong>density matrices</strong> (or density operators), which can describe both pure and mixed states.</p>

    <h3>Density Matrix for Pure States</h3>
    <p>A pure state |ψ⟩ can be represented as a density matrix:</p>

    <div class="equation">
      ρ = |ψ⟩⟨ψ|
    </div>

    <h2>Mixed States: Statistical Mixtures</h2>
    <p><strong>Mixed states</strong> arise when we have classical uncertainty about which quantum state the system is in.</p>

    <h3>Definition</h3>
    <p>A mixed state is a statistical ensemble of pure states:</p>

    <div class="equation">
      ρ = Σᵢ pᵢ |ψᵢ⟩⟨ψᵢ|
    </div>

    <p>where pᵢ ≥ 0, Σᵢ pᵢ = 1 are classical probabilities.</p>

    <div class="info-box">
      <h3>Physical Interpretation of Mixed States</h3>
      <p>A mixed state represents:</p>
      <ul>
        <li>Classical uncertainty: the system is in state |ψᵢ⟩ with probability pᵢ</li>
        <li>Loss of quantum coherence (decoherence)</li>
        <li>Partial information about the system</li>
        <li>The reduced state of a subsystem in an entangled state</li>
      </ul>
    </div>

    <h2>Properties of Density Matrices</h2>
    <p>Any valid density matrix must satisfy three conditions:</p>

    <ol>
      <li><strong>Hermiticity:</strong> ρ† = ρ (eigenvalues are real)</li>
      <li><strong>Positive semi-definite:</strong> ⟨φ|ρ|φ⟩ ≥ 0 for all |φ⟩</li>
      <li><strong>Unit trace:</strong> Tr(ρ) = 1 (normalization)</li>
    </ol>

    <h2>Distinguishing Pure from Mixed States</h2>

    <h3>Purity Criterion</h3>
    <div class="equation">
      Tr(ρ²) = 1  for pure states<br>
      Tr(ρ²) < 1  for mixed states
    </div>

    <h2>Von Neumann Entropy</h2>
    <p>The quantum analog of Shannon entropy is the <strong>von Neumann entropy</strong>:</p>

    <div class="equation">
      S(ρ) = -Tr(ρ log₂ ρ) = -Σᵢ λᵢ log₂ λᵢ
    </div>

    <p>where λᵢ are the eigenvalues of ρ.</p>

    <div class="highlight-box">
      <h3>Properties</h3>
      <ul>
        <li>S(ρ) = 0 for pure states (no uncertainty)</li>
        <li>S(ρ) > 0 for mixed states</li>
        <li>S(ρ) is maximized for the completely mixed state</li>
        <li>For a d-dimensional system: 0 ≤ S(ρ) ≤ log₂ d</li>
      </ul>
    </div>

    <div class="note-box">
      <p><strong>Important Subtlety:</strong> A mixed state cannot be distinguished from certain pure states by measurements on the system alone. However, if the mixed state arose from tracing out part of a larger pure state, measurements on the full system can reveal the difference. This is intimately connected to entanglement.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_1_3_1'
};
</script>

<style scoped src="../../../styles/section-styles.css"></style>
