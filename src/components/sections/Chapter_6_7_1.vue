<template>
  <div class="section-content">
    <h1>6.7.1 Emergence of Fractional Angular Momenta</h1>

    <p>One of the most striking and counterintuitive consequences of topological order is the emergence of quasiparticles carrying fractional angular momentum (fractional spin). These exotic excitations possess quantum numbers that would be impossible for fundamental particles, yet arise naturally as collective excitations in strongly correlated many-body systems.</p>

    <div class="info-box">
      <h3>Why Fractional Spin is Remarkable</h3>
      <p><strong>Fundamental constraints violated (seemingly):</strong></p>
      <ul>
        <li><strong>Quantum mechanics:</strong> Angular momentum eigenvalues are j(j+1) with j = 0, 1/2, 1, 3/2, ...</li>
        <li><strong>Standard model:</strong> All elementary particles have integer or half-integer spin</li>
        <li><strong>Topological order:</strong> Quasiparticles can have <strong>any real spin</strong> s ∈ ℝ!</li>
        <li><strong>Resolution:</strong> These are collective excitations, not fundamental particles</li>
      </ul>
    </div>

    <h2>1. Angular Momentum in 2D Systems</h2>

    <div class="highlight-box">
      <h3>Rotation Operator and Spin</h3>

      <p><strong>2D rotation by angle θ:</strong></p>
      <div class="equation">
        R(θ) = e^{-iθL_z/ℏ}
      </div>
      <p>L_z: z-component of angular momentum (perpendicular to 2D plane)</p>

      <p><strong>Action on single-particle state:</strong></p>
      <div class="equation">
        R(θ) |r, s⟩ = |r', s⟩ e^{-iθs}
      </div>
      <ul>
        <li>r → r' = R(θ)r (position rotates)</li>
        <li>Phase factor e^{-iθs} from intrinsic spin s</li>
      </ul>

      <p><strong>Full rotation by 2π:</strong></p>
      <div class="equation">
        R(2π) = e^{-2πis}
      </div>

      <p><strong>Standard particles:</strong></p>
      <ul>
        <li><strong>Bosons:</strong> s ∈ ℤ → R(2π) = 1</li>
        <li><strong>Fermions:</strong> s ∈ ℤ + 1/2 → R(2π) = -1</li>
      </ul>

      <p><strong>Anyons in 2D:</strong></p>
      <ul>
        <li><strong>Fractional spin:</strong> s ∈ ℝ (any real number)</li>
        <li><strong>Rotation phase:</strong> R(2π) = e^{-2πis} ≠ ±1 in general</li>
        <li><strong>Neither boson nor fermion</strong></li>
      </ul>
    </div>

    <h2>2. FQHE: Paradigmatic Example</h2>

    <div class="note-box">
      <h3>Fractional Spin of Laughlin Quasiholes</h3>

      <p><strong>Laughlin state at filling ν = 1/m:</strong></p>
      <div class="equation">
        Ψ_m(z_1, ..., z_N) = ∏_{i<j} (z_i - z_j)^m e^{-Σ_k |z_k|²/4ℓ_B²}
      </div>

      <p><strong>Quasihole creation:</strong></p>
      <div class="equation">
        Ψ_{QH}(w; z_1, ..., z_N) = ∏_j (z_j - w) Ψ_m(z_1, ..., z_N)
      </div>
      <p>w: position of quasihole</p>

      <p><strong>Angular momentum calculation:</strong></p>
      <p>Rotating quasihole at position w → w' = e^{iθ}w:</p>
      <div class="equation">
        Ψ_{QH}(e^{iθ}w; ...) = e^{-iθN/m} Ψ_{QH}(w; ...)
      </div>

      <p><strong>Result:</strong></p>
      <div class="equation">
        s_{quasihole} = -N/m
      </div>
      <p>For thermodynamic limit with fixed filling ν = N/Φ = 1/m:</p>
      <div class="equation">
        s = -1/(2m) \text{ (fractional!)}
      </div>
    </div>

    <div class="info-box">
      <h3>Physical Interpretation</h3>

      <p><strong>Charge and magnetic field:</strong></p>
      <ul>
        <li>Quasihole charge: q = e/m (fractional)</li>
        <li>Applied magnetic field: B</li>
        <li>Flux quantum: Φ₀ = hc/e</li>
      </ul>

      <p><strong>Orbital angular momentum:</strong></p>
      <div class="equation">
        L_{orbital} = (q × Φ) / (2πc) = (e/m) × (N_φ Φ₀) / (2πc) = N_φ/(2m)
      </div>

      <p><strong>Connection to spin:</strong></p>
      <p>In symmetric gauge, orbital angular momentum = effective spin of quasihole.</p>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>ν = 1/3:</strong> s = 1/6 (Laughlin state)</li>
        <li><strong>ν = 1/5:</strong> s = 1/10</li>
        <li><strong>ν = 2/5:</strong> s = 1/10 (Jain hierarchy)</li>
      </ul>
    </div>

    <h2>3. Topological Spin vs Geometric Spin</h2>

    <div class="highlight-box">
      <h3>Two Notions of Spin</h3>

      <p><strong>1. Geometric (physical) spin s_geo:</strong></p>
      <ul>
        <li>From rotating particle in real space</li>
        <li>R(2π)|ψ⟩ = e^{-2πis_geo}|ψ⟩</li>
        <li>Observable in Berry phase measurements</li>
        <li>Can be fractional in 2D</li>
      </ul>

      <p><strong>2. Topological spin θ_a:</strong></p>
      <ul>
        <li>From twisting anyon around itself (self-statistics)</li>
        <li>Related to modular T-matrix: T_aa = e^{2πi(h_a - c/24)}</li>
        <li>h_a: conformal dimension, c: central charge</li>
        <li>Appears in torus ground state degeneracy</li>
      </ul>

      <p><strong>Connection in abelian theories:</strong></p>
      <div class="equation">
        θ_a = 2πs_{geo} \text{ (mod 2π)}
      </div>

      <p><strong>For non-abelian anyons:</strong></p>
      <p>Topological spin is well-defined, but geometric spin may not uniquely characterize the anyon.</p>
    </div>

    <h2>4. Berry Phase and Fractional Spin</h2>

    <div class="note-box">
      <h3>Adiabatic Rotation Measurement</h3>

      <p><strong>Setup:</strong></p>
      <ul>
        <li>Slowly rotate quasiparticle around fixed point</li>
        <li>System remains in instantaneous ground state</li>
        <li>Wavefunction acquires geometric phase</li>
      </ul>

      <p><strong>Berry connection:</strong></p>
      <div class="equation">
        A(θ) = i⟨ψ(θ)|∂_θ|ψ(θ)⟩
      </div>

      <p><strong>Berry phase after full rotation:</strong></p>
      <div class="equation">
        γ = ∮_0^{2π} A(θ) dθ = 2πs
      </div>

      <p><strong>For FQHE quasihole at ν = 1/m:</strong></p>
      <div class="equation">
        γ = 2π × (1/(2m)) = π/m
      </div>
      <p>Fractional geometric phase!</p>
    </div>

    <div class="info-box">
      <h3>Experimental Detection</h3>

      <p><strong>1. Interferometry:</strong></p>
      <ul>
        <li>Create quasiparticle-quasihole pair</li>
        <li>Rotate one around fixed center</li>
        <li>Recombine and measure interference</li>
        <li>Phase shift reveals s</li>
      </ul>

      <p><strong>2. Quantum dot systems:</strong></p>
      <ul>
        <li>Confine quasiparticle in rotating quantum dot</li>
        <li>Energy levels shift by ℏω × s under rotation</li>
        <li>Spectroscopy reveals fractional spin</li>
      </ul>

      <p><strong>3. Shot noise:</strong></p>
      <ul>
        <li>Tunneling current fluctuations</li>
        <li>Fano factor F = e*/(2e) depends on fractional charge e* = e/m</li>
        <li>Charge and spin related via spin-statistics</li>
      </ul>
    </div>

    <h2>5. Toric Code Anyons</h2>

    <div class="highlight-box">
      <h3>Z₂ Topological Order</h3>

      <p><strong>Four anyon types:</strong></p>
      <ul>
        <li><strong>1 (vacuum):</strong> s = 0</li>
        <li><strong>e (electric charge):</strong> s = 0</li>
        <li><strong>m (magnetic flux):</strong> s = 0</li>
        <li><strong>ε = e × m (fermion):</strong> s = 1/2</li>
      </ul>

      <p><strong>Topological spins (from modular T-matrix):</strong></p>
      <div class="equation">
        T = diag(1, 1, 1, -1)
      </div>
      <ul>
        <li>θ_1 = θ_e = θ_m = 0</li>
        <li>θ_ε = π</li>
      </ul>

      <p><strong>Interpretation:</strong></p>
      <ul>
        <li>e, m are bosons (s=0, but anyon under mutual braiding)</li>
        <li>ε is a fermion (s=1/2, emerges from bound state)</li>
        <li>No fractional spins in Z₂ theory (minimal example)</li>
      </ul>
    </div>

    <h2>6. Spin-Statistics Connection in 2D</h2>

    <div class="note-box">
      <h3>Topology Enforces Relation</h3>

      <p><strong>Key observation:</strong></p>
      <p>In 2D, rotating particle by 2π is topologically equivalent to exchanging it twice with a nearby identical particle.</p>

      <p><strong>Mathematical statement:</strong></p>
      <div class="equation">
        R(2π) = (R_{exchange})²
      </div>

      <p><strong>For identical particles:</strong></p>
      <div class="equation">
        R_{exchange} |ψ(r_1, r_2)⟩ = e^{iθ} |ψ(r_2, r_1)⟩
      </div>

      <p><strong>Combining:</strong></p>
      <div class="equation">
        e^{-2πis} = e^{2iθ}
      </div>
      <div class="equation">
        θ = 2πs \text{ (mod 2π)}
      </div>

      <p><strong>Spin-statistics theorem (2D version):</strong></p>
      <ul>
        <li>Exchange statistics angle θ equals 2π × spin</li>
        <li>Unique to 2D (homotopy π₁(SO(2)) = ℤ)</li>
        <li>Broken in 3D where exchange paths are contractible</li>
      </ul>
    </div>

    <h2>7. Comparison Table</h2>

    <div class="comparison-box">
      <h3>Angular Momentum in Different Systems</h3>
      <table class="comparison-table">
        <tr>
          <th>System</th>
          <th>Particle Type</th>
          <th>Spin s</th>
          <th>R(2π)</th>
          <th>Exchange θ</th>
        </tr>
        <tr>
          <td><strong>Elementary</strong></td>
          <td>Photon</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr>
          <td><strong>Elementary</strong></td>
          <td>Electron</td>
          <td>1/2</td>
          <td>-1</td>
          <td>π</td>
        </tr>
        <tr>
          <td><strong>FQHE ν=1/3</strong></td>
          <td>Quasihole</td>
          <td>1/6</td>
          <td>e^{-iπ/3}</td>
          <td>π/3</td>
        </tr>
        <tr>
          <td><strong>FQHE ν=1/5</strong></td>
          <td>Quasihole</td>
          <td>1/10</td>
          <td>e^{-iπ/5}</td>
          <td>π/5</td>
        </tr>
        <tr>
          <td><strong>Toric code</strong></td>
          <td>e-particle</td>
          <td>0</td>
          <td>1</td>
          <td>0 (self), π (with m)</td>
        </tr>
        <tr>
          <td><strong>Toric code</strong></td>
          <td>ε-particle</td>
          <td>1/2</td>
          <td>-1</td>
          <td>π</td>
        </tr>
        <tr>
          <td><strong>Fibonacci</strong></td>
          <td>τ anyon</td>
          <td>2/5</td>
          <td>e^{-4πi/5}</td>
          <td>4π/5</td>
        </tr>
        <tr>
          <td><strong>Ising (ν=5/2)</strong></td>
          <td>σ anyon</td>
          <td>1/16</td>
          <td>e^{-iπ/8}</td>
          <td>π/8</td>
        </tr>
      </table>
    </div>

    <h2>8. Orbital vs Intrinsic Angular Momentum</h2>

    <div class="info-box">
      <h3>Decomposition</h3>

      <p><strong>Total angular momentum:</strong></p>
      <div class="equation">
        J_total = L_orbital + S_intrinsic
      </div>

      <p><strong>For quasiparticles:</strong></p>
      <ul>
        <li><strong>L_orbital:</strong> From center-of-mass motion (quantized normally)</li>
        <li><strong>S_intrinsic:</strong> Internal structure (can be fractional!)</li>
      </ul>

      <p><strong>Example: FQHE quasihole</strong></p>
      <ul>
        <li>Place in rotationally symmetric potential</li>
        <li>L_orbital = 0, 1, 2, ... (standard quantization)</li>
        <li>S_intrinsic = 1/(2m) (fractional from many-body state)</li>
        <li>Measurable in energy spectrum: E_n = ℏω(n + 1/(2m))</li>
      </ul>
    </div>

    <h2>9. Non-Abelian Generalizations</h2>

    <div class="highlight-box">
      <h3>Beyond Abelian Anyons</h3>

      <p><strong>Quantum dimension d_a:</strong></p>
      <p>For non-abelian anyons, spin alone doesn't fully characterize the particle.</p>

      <p><strong>Topological spin (modular T-matrix):</strong></p>
      <div class="equation">
        T_{ab} = δ_{ab} e^{2πi(h_a - c/24)}
      </div>
      <ul>
        <li>h_a: scaling dimension</li>
        <li>c: central charge of edge CFT</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Ising anyons (ν = 5/2 FQHE):</strong>
          <ul>
            <li>σ: h_σ = 1/16, d_σ = √2</li>
            <li>ψ: h_ψ = 1/2, d_ψ = 1 (fermion)</li>
          </ul>
        </li>
        <li><strong>Fibonacci anyons:</strong>
          <ul>
            <li>τ: h_τ = 2/5, d_τ = φ = (1+√5)/2 (golden ratio)</li>
          </ul>
        </li>
      </ul>

      <p><strong>Rotation on fusion space:</strong></p>
      <p>For N non-abelian anyons, rotation acts as unitary on fusion space (not just phase).</p>
    </div>

    <h2>10. Experimental Status</h2>

    <div class="note-box">
      <h3>Current Measurements</h3>

      <p><strong>1. Fractional charge (direct):</strong></p>
      <ul>
        <li><strong>Shot noise (1997):</strong> e/3 confirmed in ν = 1/3 state</li>
        <li><strong>Single-electron transistor:</strong> Charge resolution to e/5</li>
        <li><strong>Quantum point contact:</strong> Backscattering of fractional charges</li>
      </ul>

      <p><strong>2. Fractional statistics (indirect via spin-statistics):</strong></p>
      <ul>
        <li><strong>Interferometry (2020):</strong> Braiding phase θ = π/3 measured</li>
        <li><strong>Implication:</strong> s = θ/(2π) = 1/6 for ν = 1/3</li>
        <li><strong>Direct confirmation</strong> of fractional spin</li>
      </ul>

      <p><strong>3. Berry phase (proposed):</strong></p>
      <ul>
        <li>Rotating quantum dot with trapped quasiparticle</li>
        <li>Energy level shift ∝ s under rotation</li>
        <li>Technical challenges: decoherence, dot size</li>
      </ul>

      <p><strong>4. Edge mode spectroscopy:</strong></p>
      <ul>
        <li>Chiral edge states carry angular momentum</li>
        <li>Scaling dimension h related to bulk anyon spin</li>
        <li>Tunneling spectroscopy reveals h</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Fractional angular momenta in topological order:</strong></p>
      <ul>
        <li><strong>Definition:</strong> Anyons can have spin s ∈ ℝ (any real number)</li>
        <li><strong>Rotation phase:</strong> R(2π) = e^{-2πis} ≠ ±1 for fractional s</li>
        <li><strong>FQHE paradigm:</strong> Laughlin quasiholes at ν = 1/m have s = 1/(2m)</li>
        <li><strong>Physical origin:</strong> Fractional charge + magnetic field → fractional orbital angular momentum</li>
      </ul>

      <p><strong>Spin-statistics connection:</strong></p>
      <ul>
        <li><strong>2D constraint:</strong> θ = 2πs (exchange statistics tied to spin)</li>
        <li><strong>Topological origin:</strong> Rotation ≃ double exchange in 2D homotopy</li>
        <li><strong>Unique to 2D:</strong> 3D has contractible exchange paths</li>
      </ul>

      <p><strong>Experimental verification:</strong></p>
      <ul>
        <li>Fractional charge measured via shot noise (e/3, e/5)</li>
        <li>Fractional statistics measured via interferometry (θ = π/3)</li>
        <li>Combined evidence for fractional spin s = 1/6 in ν = 1/3 FQHE</li>
      </ul>

      <p><strong>Significance:</strong></p>
      <ul>
        <li>Demonstrates emergence of novel quantum numbers from collective behavior</li>
        <li>Foundation for topological quantum computation</li>
        <li>Deepens understanding of quantum statistics and 2D physics</li>
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
