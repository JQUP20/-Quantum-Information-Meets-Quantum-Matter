<template>
  <div class="section-content">
    <h1>6.3.2 What is 'Non-Abelian Geometric Phase of Topologically Degenerate States'</h1>

    <p>When a system with topological ground state degeneracy undergoes adiabatic evolution, the degenerate ground states acquire a geometric phase. For non-abelian topological order, this phase is matrix-valued, representing a rotation within the ground state manifold.</p>

    <h2>Berry Phase for Degenerate States</h2>

    <div class="highlight-box">
      <h3>Non-Abelian Berry Connection</h3>

      <p><strong>Degenerate ground state manifold:</strong></p>
      <ul>
        <li>Parameters R = (R₁, R₂, ...) in Hamiltonian</li>
        <li>Ground states |ψ_α(R)⟩, α = 1, ..., d_{GSD}</li>
      </ul>

      <p><strong>Berry connection (matrix):</strong></p>
      <div class="equation">
        A_μ^{αβ}(R) = i⟨ψ_α(R)|∂_μ|ψ_β(R)⟩
      </div>

      <p><strong>Parallel transport:</strong></p>
      <div class="equation">
        |ψ_α(R + dR)⟩ = Σ_β U^{αβ}(dR)|ψ_β(R)⟩
      </div>
      <div class="equation">
        U(dR) = exp(-i∫ A · dR)
      </div>
    </div>

    <h2>Adiabatic Evolution Along Closed Loop</h2>

    <div class="info-box">
      <h3>Geometric Phase Matrix</h3>

      <p><strong>After adiabatic cycle C:</strong></p>
      <div class="equation">
        |ψ_α(final)⟩ = Σ_β M^{αβ}(C)|ψ_β(initial)⟩
      </div>

      <p><strong>Geometric phase matrix:</strong></p>
      <div class="equation">
        M(C) = 𝒫 exp(-i ∮_C A · dR)
      </div>
      <ul>
        <li>𝒫: Path-ordered product</li>
        <li>M is unitary: M†M = 𝟙</li>
        <li>Depends only on homotopy class of C</li>
      </ul>

      <p><strong>For abelian topological order:</strong></p>
      <ul>
        <li>M is diagonal: M = diag(e^{iθ₁}, ..., e^{iθ_d})</li>
        <li>Each state acquires phase independently</li>
      </ul>

      <p><strong>For non-abelian topological order:</strong></p>
      <ul>
        <li>M has off-diagonal elements</li>
        <li>States mix during adiabatic evolution</li>
        <li>Encodes non-abelian braiding statistics</li>
      </ul>
    </div>

    <h2>Example: Flux Insertion in Toric Code</h2>

    <div class="note-box">
      <h3>Geometric Phase from Flux Threading</h3>

      <p><strong>Setup:</strong></p>
      <ul>
        <li>Toric code on torus with 4 ground states</li>
        <li>Thread magnetic flux Φ through one cycle</li>
        <li>Flux insertion operator: e^{iΦN/Φ₀}</li>
      </ul>

      <p><strong>Effect:</strong></p>
      <div class="equation">
        |GS_α⟩ → e^{iπα}|GS_α⟩ (abelian phase)
      </div>

      <p><strong>For Z₂ toric code:</strong></p>
      <ul>
        <li>Geometric phase is abelian (diagonal)</li>
        <li>Different states acquire different phases</li>
        <li>Can be used to identify topological sectors</li>
      </ul>
    </div>

    <h2>Non-Abelian Example: Fibonacci Anyons</h2>

    <div class="highlight-box">
      <h3>Non-Trivial Braiding Matrices</h3>

      <p><strong>Fibonacci anyon system:</strong></p>
      <ul>
        <li>Two anyon types: {1, τ} (identity and Fibonacci)</li>
        <li>Fusion: τ × τ = 1 + τ</li>
        <li>Four anyons on sphere → degenerate states</li>
      </ul>

      <p><strong>Braiding matrix (R-matrix):</strong></p>
      <div class="equation">
        R = ( e^{4πi/5}    0          )<br>
            ( 0          e^{-3πi/5}  )
      </div>

      <p><strong>Properties:</strong></p>
      <ul>
        <li>Non-abelian: Ground states mix under braiding</li>
        <li>Universal: Can perform universal quantum computation</li>
        <li>Topological protection: Robust against local errors</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key points:</strong></p>
      <ul>
        <li><strong>Geometric phase:</strong> Matrix-valued for degenerate ground states</li>
        <li><strong>Abelian:</strong> Diagonal matrices (independent phases)</li>
        <li><strong>Non-abelian:</strong> Off-diagonal elements (state mixing)</li>
        <li><strong>Topological:</strong> Depends only on topology of evolution path</li>
        <li><strong>Application:</strong> Foundation for topological quantum computation</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_3_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
