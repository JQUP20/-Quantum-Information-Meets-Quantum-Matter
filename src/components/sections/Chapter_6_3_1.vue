<template>
  <div class="section-content">
    <h1>6.3.1 What is 'Topological Ground State Degeneracy'</h1>

    <p>Topological ground state degeneracy (GSD) is one of the defining features of topological order. Unlike symmetry-breaking degeneracy, which can be lifted by symmetry-breaking fields, topological degeneracy depends on the global topology of space and is robust against any local perturbations.</p>

    <h2>Definition and Key Properties</h2>

    <div class="highlight-box">
      <h3>Topological Degeneracy</h3>

      <p><strong>Definition:</strong></p>
      <div class="equation">
        d_{GSD}(M) = dimension of ground state manifold on manifold M
      </div>

      <p><strong>Key properties:</strong></p>
      <ul>
        <li><strong>Topology-dependent:</strong> d_{GSD} depends on genus g, boundaries, etc.</li>
        <li><strong>Robust:</strong> Cannot be lifted by local perturbations</li>
        <li><strong>Non-local:</strong> Ground states distinguished only by non-local operators</li>
        <li><strong>Exact:</strong> In thermodynamic limit, splitting exponentially suppressed</li>
      </ul>

      <p><strong>For 2D topological order on different surfaces:</strong></p>
      <ul>
        <li><strong>Sphere:</strong> d_{GSD}(S²) = 1 (unique ground state)</li>
        <li><strong>Torus:</strong> d_{GSD}(T²) = 𝒟² (total quantum dimension squared)</li>
        <li><strong>Genus g:</strong> d_{GSD}(Σ_g) = 𝒟^{2g-2} × n_a (number of anyon types)</li>
      </ul>
    </div>

    <h2>Examples</h2>

    <div class="info-box">
      <h3>Toric Code on Torus</h3>

      <p><strong>Ground state degeneracy:</strong> d_{GSD} = 4</p>

      <p><strong>Origin:</strong></p>
      <ul>
        <li>Two independent non-contractible cycles on torus</li>
        <li>Each cycle can have Z-string or not: 2 × 2 = 4 states</li>
        <li>States: |00⟩, |01⟩, |10⟩, |11⟩ (logical qubit encoding)</li>
      </ul>

      <p><strong>Z₂ topological order:</strong></p>
      <div class="equation">
        𝒟 = 2 → d_{GSD}(torus) = 𝒟² = 4
      </div>
    </div>

    <div class="info-box">
      <h3>Fractional Quantum Hall States</h3>

      <p><strong>Laughlin ν = 1/m state on torus:</strong></p>
      <div class="equation">
        d_{GSD} = m
      </div>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>m degenerate ground states related by flux insertion</li>
        <li>Threading one flux quantum shifts between states</li>
        <li>Total quantum dimension: 𝒟 = √m</li>
      </ul>
    </div>

    <h2>Robustness</h2>

    <div class="note-box">
      <h3>Protection Against Perturbations</h3>

      <p><strong>Local perturbation:</strong></p>
      <div class="equation">
        H' = H + δH,  δH = Σ_i h_i (local terms)
      </div>

      <p><strong>Effect on degeneracy:</strong></p>
      <ul>
        <li>Energy splitting: ΔE ~ e^{-αL} (exponentially small in system size)</li>
        <li>As L → ∞: ΔE → 0, degeneracy exact</li>
        <li>Protected by energy gap and locality</li>
      </ul>

      <p><strong>Contrast with symmetry-breaking:</strong></p>
      <ul>
        <li>SSB: Infinitesimal field lifts degeneracy</li>
        <li>Topological: Only global operations affect degeneracy</li>
      </ul>
    </div>

    <h2>Connection to Quantum Dimension</h2>

    <div class="highlight-box">
      <h3>Formula for 2D Systems</h3>

      <p><strong>On torus (genus g=1):</strong></p>
      <div class="equation">
        d_{GSD}(T²) = 𝒟²
      </div>

      <p><strong>Total quantum dimension:</strong></p>
      <div class="equation">
        𝒟 = √(Σ_a d_a²)
      </div>
      <ul>
        <li>Sum over all anyon types a</li>
        <li>d_a: quantum dimension of anyon type a</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Z₂ toric code:</strong> 𝒟 = √4 = 2, d_{GSD} = 4</li>
        <li><strong>Fibonacci anyons:</strong> 𝒟 = φ = (1+√5)/2, d_{GSD} = φ² ≈ 2.618</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key points:</strong></p>
      <ul>
        <li><strong>Topological GSD:</strong> Depends on global topology, not symmetry</li>
        <li><strong>Robust:</strong> Protected against local perturbations</li>
        <li><strong>Formula:</strong> d_{GSD}(T²) = 𝒟² for 2D topological order</li>
        <li><strong>Encoding:</strong> Can store quantum information topologically</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_3_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
