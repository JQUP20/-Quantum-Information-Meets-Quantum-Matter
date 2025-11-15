<template>
  <div class="section-content">
    <h1>6.7.1 Emergence of Fractional Angular Momenta</h1>

    <p>One of the most striking features of topological order is the emergence of quasiparticles with fractional quantum numbers. Fractional angular momentum (fractional spin) arises naturally in topologically ordered states, despite being built from conventional particles.</p>

    <h2>Angular Momentum in 2D Systems</h2>

    <div class="highlight-box">
      <h3>Rotation and Spin</h3>

      <p><strong>2D rotation operator:</strong></p>
      <div class="equation">
        R(θ) = e^{-iθL_z}
      </div>
      <ul>
        <li>L_z: Angular momentum operator</li>
        <li>Rotation by 2π: R(2π) = e^{-2πiL_z}</li>
      </ul>

      <p><strong>Conventional particles:</strong></p>
      <ul>
        <li><strong>Bosons:</strong> L_z = integer, R(2π) = +1</li>
        <li><strong>Fermions:</strong> L_z = half-integer, R(2π) = -1</li>
      </ul>

      <p><strong>Anyons in topological phases:</strong></p>
      <ul>
        <li>Can have <strong>fractional</strong> angular momentum</li>
        <li>R(2π) = e^{-2πis} where s can be any real number</li>
        <li>s = statistical phase / 2π (spin-statistics connection)</li>
      </ul>
    </div>

    <h2>Example: FQHE Quasiholes</h2>

    <div class="info-box">
      <h3>Fractional Spin from Laughlin State</h3>

      <p><strong>Quasihole in ν = 1/m state:</strong></p>
      <div class="equation">
        s = 1/(2m)
      </div>

      <p><strong>For ν = 1/3:</strong></p>
      <ul>
        <li>s = 1/6 (fractional angular momentum!)</li>
        <li>R(2π) = e^{-iπ/3} ≠ ±1</li>
        <li>Neither boson nor fermion</li>
      </ul>

      <p><strong>Physical origin:</strong></p>
      <ul>
        <li>Quasihole carries fractional charge e/m</li>
        <li>In magnetic field: angular momentum L = (e/m)Φ/c</li>
        <li>Quantization of flux → fractional L</li>
      </ul>

      <p><strong>Berry phase calculation:</strong></p>
      <ul>
        <li>Adiabatically rotate quasihole by 2π</li>
        <li>Wavefunction acquires geometric phase</li>
        <li>Phase = 2πs (fractional)</li>
      </ul>
    </div>

    <h2>Spin-Statistics Connection</h2>

    <div class="note-box">
      <h3>Relating Spin and Exchange Statistics</h3>

      <p><strong>In 2D:</strong></p>
      <div class="equation">
        θ = 2πs (mod 2π)
      </div>
      <ul>
        <li>θ: Exchange (braiding) statistical phase</li>
        <li>s: Spin (angular momentum)</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Boson:</strong> s = 0, θ = 0</li>
        <li><strong>Fermion:</strong> s = 1/2, θ = π</li>
        <li><strong>ν = 1/3 quasihole:</strong> s = 1/6, θ = π/3</li>
      </ul>

      <p><strong>Connection enforced by topology:</strong></p>
      <ul>
        <li>Rotation by 2π ↔ double exchange</li>
        <li>R(2π) = (exchange)²</li>
        <li>Unique to 2D systems</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key points:</strong></p>
      <ul>
        <li><strong>Fractional spin:</strong> Anyons can have s = any real number</li>
        <li><strong>FQHE:</strong> s = 1/(2m) for ν = 1/m quasiholes</li>
        <li><strong>Spin-statistics:</strong> θ = 2πs in 2D</li>
        <li><strong>Emergence:</strong> From collective many-body state</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_7_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
