<template>
  <div class="section-content">
    <h1>6.4.1 The Essence of Fractional Quantum Hall States</h1>

    <p>The fractional quantum Hall effect represents the paradigmatic example of topological order. Understanding its essence—from Laughlin's wavefunction to anyonic excitations—reveals the deep principles underlying all topologically ordered states.</p>

    <h2>Laughlin Wavefunction</h2>

    <div class="highlight-box">
      <h3>Ground State for ν = 1/m</h3>

      <p><strong>Wavefunction:</strong></p>
      <div class="equation">
        Ψ_m(z_1, ..., z_N) = ∏_{i&lt;j} (z_i - z_j)^m e^{-Σ_k |z_k|²/4ℓ_B²}
      </div>
      <ul>
        <li>z_i = x_i + iy_i: Complex coordinates</li>
        <li>ℓ_B = √(ℏ/eB): Magnetic length</li>
        <li>m: Odd integer (m = 3 for ν = 1/3)</li>
      </ul>

      <p><strong>Key properties:</strong></p>
      <ul>
        <li><strong>Antisymmetric:</strong> Fermionic for odd m</li>
        <li><strong>Incompressible:</strong> Energy gap to excitations</li>
        <li><strong>Analytic:</strong> Polynomial structure</li>
        <li><strong>Correlation hole:</strong> ∏|z_i - z_j|^m creates strong repulsion</li>
      </ul>

      <p><strong>Filling fraction:</strong></p>
      <div class="equation">
        ν = N_e/N_φ = 1/m
      </div>
      <ul>
        <li>N_e: Number of electrons</li>
        <li>N_φ: Number of flux quanta</li>
      </ul>
    </div>

    <h2>Quasihole Excitations</h2>

    <div class="info-box">
      <h3>Fractional Charge</h3>

      <p><strong>Quasihole wavefunction:</strong></p>
      <div class="equation">
        Ψ_{qh}(η) = ∏_i (z_i - η) Ψ_m(z_1, ..., z_N)
      </div>
      <ul>
        <li>η: Position of quasihole</li>
        <li>Zero at each electron position</li>
      </ul>

      <p><strong>Charge:</strong></p>
      <div class="equation">
        Q_{qh} = e/m
      </div>
      <ul>
        <li>For ν = 1/3: Q = e/3</li>
        <li>Fractional charge emerges from many-body state</li>
        <li>Cannot be decomposed into electrons or holes</li>
      </ul>

      <p><strong>Energy gap:</strong></p>
      <ul>
        <li>Δ ~ e²/εℓ_B (Coulomb energy scale)</li>
        <li>Protects topological order</li>
        <li>Measured: Δ ~ 50 K for ν = 1/3</li>
      </ul>
    </div>

    <h2>Anyonic Statistics</h2>

    <div class="highlight-box">
      <h3>Fractional Exchange Statistics</h3>

      <p><strong>Braiding phase:</strong></p>
      <div class="equation">
        θ = π/m
      </div>

      <p><strong>Statistical angle:</strong></p>
      <ul>
        <li>Exchange two quasiholes: acquire phase e^{iθ}</li>
        <li>θ = π/3 for ν = 1/3 state</li>
        <li>Neither fermion (θ = π) nor boson (θ = 0)</li>
        <li><strong>Anyons:</strong> Particles with fractional statistics</li>
      </ul>

      <p><strong>Experimental confirmation:</strong></p>
      <ul>
        <li>Shot noise: Fractional charge measured (1997)</li>
        <li>Interferometry: Braiding phase measured (2020)</li>
        <li>Confirms anyonic nature of FQHE excitations</li>
      </ul>
    </div>

    <h2>Chiral Edge States</h2>

    <div class="note-box">
      <h3>Bulk-Edge Correspondence</h3>

      <p><strong>Edge modes:</strong></p>
      <ul>
        <li>Chiral (one-way) propagation along sample edge</li>
        <li>Gapless excitations (bulk is gapped)</li>
        <li>Number of edge modes = filling ν</li>
      </ul>

      <p><strong>Conductance:</strong></p>
      <div class="equation">
        G = ν e²/h
      </div>
      <ul>
        <li>Quantized at ν = 1/3: G = (1/3)e²/h</li>
        <li>Perfect transmission (no backscattering)</li>
        <li>Topologically protected</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Essential features:</strong></p>
      <ul>
        <li><strong>Laughlin wavefunction:</strong> Describes incompressible quantum liquid</li>
        <li><strong>Fractional charge:</strong> e/m for ν = 1/m state</li>
        <li><strong>Anyonic statistics:</strong> θ = π/m braiding phase</li>
        <li><strong>Energy gap:</strong> Protects topological order</li>
        <li><strong>Chiral edge states:</strong> Gapless boundary modes</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_4_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
