<template>
  <div class="section-content">
    <h1>6.7.2 Emergence of Fermi and Fractional Statistics</h1>

    <p>The emergence of anyonic statistics—particles obeying neither Bose nor Fermi statistics—is one of the most remarkable predictions and confirmations of topological order theory. In 2D systems, the exchange statistics can be continuously interpolated between bosons and fermions.</p>

    <h2>Statistics in Different Dimensions</h2>

    <div class="highlight-box">
      <h3>Dimensional Dependence</h3>

      <p><strong>3D systems:</strong></p>
      <ul>
        <li>Exchange path can be continuously deformed</li>
        <li>Only two possibilities: θ = 0 (bosons) or θ = π (fermions)</li>
        <li>Spin-statistics theorem enforces this</li>
      </ul>

      <p><strong>2D systems:</strong></p>
      <ul>
        <li>Exchange paths form braid group (non-trivial topology)</li>
        <li>Cannot deform one exchange to another</li>
        <li>Statistical phase θ can be <strong>any real number</strong></li>
        <li>Anyons: generalized statistics</li>
      </ul>

      <p><strong>Braiding vs exchange:</strong></p>
      <div class="equation">
        Ψ(..., r_i, ..., r_j, ...) = e^{iθ} Ψ(..., r_j, ..., r_i, ...)
      </div>
    </div>

    <h2>Anyonic Statistics from Aharonov-Bohm</h2>

    <div class="info-box">
      <h3>Flux Attachment Picture</h3>

      <p><strong>Attach flux to particles:</strong></p>
      <ul>
        <li>Each particle carries magnetic flux Φ</li>
        <li>When particle i encircles j, picks up phase</li>
        <li>Phase = ∫ A · dl = Φ × (charge)</li>
      </ul>

      <p><strong>Statistical transmutation:</strong></p>
      <ul>
        <li>Fermions + flux tube → bosons (Φ = hc/2e)</li>
        <li>Bosons + flux tube → fermions</li>
        <li>General: θ = (e/ℏc) × Φ</li>
      </ul>

      <p><strong>For FQHE ν = 1/m:</strong></p>
      <div class="equation">
        θ = π/m
      </div>
      <ul>
        <li>Each quasihole effective charge e/m</li>
        <li>Effective flux attached to each</li>
        <li>Results in fractional statistics</li>
      </ul>
    </div>

    <h2>Experimental Observation</h2>

    <div class="note-box">
      <h3>Measuring Anyonic Statistics</h3>

      <p><strong>Interferometry experiments:</strong></p>
      <ul>
        <li>Create anyon pair</li>
        <li>Split and recombine via two paths</li>
        <li>Interference pattern depends on θ</li>
      </ul>

      <p><strong>Key results:</strong></p>
      <ul>
        <li><strong>2020:</strong> Anyonic braiding phase measured in FQHE</li>
        <li>θ ≈ π/3 confirmed for ν = 1/3 state</li>
        <li>Direct evidence for fractional statistics</li>
      </ul>

      <p><strong>Shot noise measurements:</strong></p>
      <ul>
        <li>Measures charge fluctuations</li>
        <li>Charge e/3 confirmed</li>
        <li>Consistent with anyonic theory</li>
      </ul>
    </div>

    <h2>Non-Abelian Statistics</h2>

    <div class="highlight-box">
      <h3>Beyond Abelian Anyons</h3>

      <p><strong>Non-abelian anyons:</strong></p>
      <ul>
        <li>Braiding represented by unitary matrices (not just phases)</li>
        <li>Multiple fusion channels possible</li>
        <li>Degenerate state space for N anyons</li>
      </ul>

      <p><strong>Example: Moore-Read state (ν = 5/2):</strong></p>
      <ul>
        <li>Non-abelian Ising anyons</li>
        <li>Braiding mixes degenerate states</li>
        <li>Can perform universal quantum computation</li>
      </ul>

      <p><strong>Braiding matrix:</strong></p>
      <div class="equation">
        |ψ_α⟩ → Σ_β R^{αβ}|ψ_β⟩
      </div>
      <ul>
        <li>R: Non-diagonal unitary matrix</li>
        <li>Encodes non-abelian statistics</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>2D allows anyons:</strong> θ can be any value</li>
        <li><strong>FQHE:</strong> θ = π/m for ν = 1/m state</li>
        <li><strong>Flux attachment:</strong> Physical mechanism for statistical transmutation</li>
        <li><strong>Non-abelian:</strong> Matrix-valued braiding for topological quantum computation</li>
        <li><strong>Experimental:</strong> Anyonic statistics confirmed in FQHE</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_7_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
