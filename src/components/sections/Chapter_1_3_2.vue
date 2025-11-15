<template>
  <div class="section-content">
    <h1>1.3.2 Composite Quantum Systems, Tensor Product Structure</h1>

    <h2>Building Larger Quantum Systems</h2>
    <p>Understanding entanglement requires us to describe systems composed of multiple quantum subsystems. The mathematical framework for this is the <strong>tensor product</strong> structure.</p>

    <h2>Tensor Product of Hilbert Spaces</h2>
    <p>If system A has Hilbert space ℋ_A and system B has Hilbert space ℋ_B, then the composite system AB has Hilbert space:</p>

    <div class="equation">
      ℋ_AB = ℋ_A ⊗ ℋ_B
    </div>

    <p>The dimension of the composite space is the product of the dimensions:</p>
    <div class="equation">
      dim(ℋ_AB) = dim(ℋ_A) × dim(ℋ_B)
    </div>

    <h2>Product States</h2>
    <p>The simplest states in ℋ_AB are <strong>product states</strong> (also called separable states):</p>

    <div class="equation">
      |ψ⟩_AB = |ψ_A⟩ ⊗ |ψ_B⟩
    </div>

    <div class="highlight-box">
      <h3>Key Concept: Separability</h3>
      <p>A state is <strong>separable</strong> if it can be written as a product (or mixture of products). States that cannot be written this way are <strong>entangled</strong>.</p>
    </div>

    <h2>Example: Two Qubits</h2>
    <p>For two qubits, each with basis {|0⟩, |1⟩}, the composite system has the four-dimensional basis:</p>

    <div class="equation">
      {|00⟩, |01⟩, |10⟩, |11⟩}
    </div>

    <p>where |00⟩ = |0⟩_A ⊗ |0⟩_B, etc.</p>

    <h3>Product State Example</h3>
    <div class="equation">
      |ψ⟩ = (α|0⟩ + β|1⟩)_A ⊗ (γ|0⟩ + δ|1⟩)_B<br>
      = αγ|00⟩ + αδ|01⟩ + βγ|10⟩ + βδ|11⟩
    </div>

    <h3>Entangled State Example</h3>
    <p>The Bell state:</p>
    <div class="equation">
      |Φ⁺⟩ = (|00⟩ + |11⟩)/√2
    </div>
    <p>This <strong>cannot</strong> be written as a product |ψ_A⟩ ⊗ |ψ_B⟩!</p>

    <h2>Operators on Composite Systems</h2>
    <p>Operators that act only on subsystem A can be written as:</p>
    <div class="equation">
      O_A ⊗ I_B
    </div>
    <p>where I_B is the identity operator on system B.</p>

    <h2>The Partial Trace</h2>
    <p>To obtain the reduced density matrix of subsystem A from the composite state ρ_AB:</p>

    <div class="equation">
      ρ_A = Tr_B(ρ_AB)
    </div>

    <p>This operation "traces out" system B, giving us the state of A alone.</p>

    <div class="info-box">
      <h3>Important Property</h3>
      <p>If ρ_AB represents a <strong>pure entangled state</strong>, then ρ_A and ρ_B will be <strong>mixed states</strong>. This is a signature of entanglement!</p>
    </div>

    <h2>Example: Partial Trace of Bell State</h2>
    <p>For |Φ⁺⟩ = (|00⟩ + |11⟩)/√2:</p>

    <div class="equation">
      ρ_AB = |Φ⁺⟩⟨Φ⁺| = (|00⟩⟨00| + |00⟩⟨11| + |11⟩⟨00| + |11⟩⟨11|)/2
    </div>

    <p>Tracing out B gives:</p>
    <div class="equation">
      ρ_A = Tr_B(ρ_AB) = (|0⟩⟨0| + |1⟩⟨1|)/2 = I/2
    </div>

    <p>This is the maximally mixed state! Despite the composite system being in a pure state, subsystem A appears completely random.</p>

    <div class="note-box">
      <p><strong>Physical Interpretation:</strong> When two systems are entangled, neither subsystem has a definite state on its own. The correlations between the subsystems are quantum mechanical and cannot be described classically.</p>
    </div>

    <h2>Multipartite Systems</h2>
    <p>For N systems, the composite Hilbert space is:</p>
    <div class="equation">
      ℋ = ℋ_1 ⊗ ℋ_2 ⊗ ... ⊗ ℋ_N
    </div>
    <p>The complexity grows exponentially with N, making quantum many-body systems both powerful and challenging to simulate classically.</p>
  </div>
</template>

<script>
export default {
  name: 'Chapter_1_3_2'
};
</script>

<style scoped src="../../../styles/section-styles.css"></style>
