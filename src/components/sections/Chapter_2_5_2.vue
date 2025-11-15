<template>
  <div class="section-content">
    <h1>2.5.2 Master Equations for a Single Qubit</h1>

    <h2>The Single-Qubit Density Matrix</h2>
    <p>A single qubit density matrix can be parameterized using the Bloch vector <strong>r</strong> = (r_x, r_y, r_z):</p>

    <div class="equation">
      ρ = ½(I + r · σ) = ½(I + r_x σ_x + r_y σ_y + r_z σ_z)
    </div>

    <div class="info-box">
      <h3>Bloch Vector Properties</h3>
      <ul>
        <li><strong>Pure state:</strong> |r| = 1 (on Bloch sphere surface)</li>
        <li><strong>Mixed state:</strong> |r| < 1 (inside Bloch sphere)</li>
        <li><strong>Maximally mixed:</strong> r = 0 (center: ρ = I/2)</li>
        <li><strong>Population difference:</strong> r_z = ρ_11 - ρ_00</li>
        <li><strong>Coherences:</strong> ρ_01 = (r_x - i r_y)/2</li>
      </ul>
    </div>

    <h2>Bloch Equation Form</h2>
    <p>The Lindblad equation can be rewritten as evolution of the Bloch vector:</p>

    <div class="highlight-box">
      <h3>Bloch Equations</h3>
      <div class="equation">
        dr/dt = Ω × r + D · r + c
      </div>

      <p>where:</p>
      <ul>
        <li><strong>Ω:</strong> Rotation vector (from Hamiltonian H = ½ ħΩ · σ)</li>
        <li><strong>D:</strong> Damping matrix (from Lindblad operators)</li>
        <li><strong>c:</strong> Constant drift vector (to steady state)</li>
      </ul>
    </div>

    <h2>Example 1: Pure Amplitude Damping</h2>
    <div class="info-box">
      <h3>Energy Relaxation (T₁ Process)</h3>
      <p><strong>Physical picture:</strong> Qubit in excited state |1⟩ spontaneously emits photon and decays to ground state |0⟩.</p>

      <p><strong>Lindblad operator:</strong></p>
      <div class="equation">
        L = √γ₁ σ_- = √γ₁ |0⟩⟨1|,  where γ₁ = 1/T₁
      </div>

      <p><strong>Master equation:</strong></p>
      <div class="equation">
        dρ/dt = γ₁(σ_- ρ σ_+ - ½{σ_+ σ_-, ρ})
      </div>

      <p><strong>Explicit form:</strong></p>
      <div class="equation">
        dρ_00/dt = γ₁ ρ_11
      </div>
      <div class="equation">
        dρ_11/dt = -γ₁ ρ_11
      </div>
      <div class="equation">
        dρ_01/dt = -γ₁/2 ρ_01
      </div>
    </div>

    <h3>Solution for Amplitude Damping</h3>
    <div class="note-box">
      <p><strong>Starting from |1⟩:</strong> ρ(0) = |1⟩⟨1|</p>

      <p><strong>Population evolution:</strong></p>
      <div class="equation">
        ρ_11(t) = e^(-t/T₁)
      </div>
      <div class="equation">
        ρ_00(t) = 1 - e^(-t/T₁)
      </div>

      <p><strong>Coherence evolution:</strong></p>
      <div class="equation">
        ρ_01(t) = ρ_01(0) e^(-t/(2T₁))
      </div>

      <p><strong>Steady state:</strong> ρ_ss = |0⟩⟨0| (ground state)</p>

      <p><strong>Bloch vector:</strong></p>
      <ul>
        <li>r_z(t) = -1 + 2(1 - e^(-t/T₁)) → 1 (shrinks toward north pole)</li>
        <li>r_x, r_y decay with rate 1/(2T₁)</li>
      </ul>
    </div>

    <h2>Example 2: Pure Dephasing</h2>
    <div class="info-box">
      <h3>Phase Randomization (T_φ Process)</h3>
      <p><strong>Physical picture:</strong> Random phase kicks from environment that preserve energy but destroy phase coherence.</p>

      <p><strong>Lindblad operator:</strong></p>
      <div class="equation">
        L = √γ_φ σ_z,  where γ_φ = 1/T_φ
      </div>

      <p><strong>Master equation:</strong></p>
      <div class="equation">
        dρ/dt = γ_φ(σ_z ρ σ_z - ρ)
      </div>

      <p><strong>Explicit form:</strong></p>
      <div class="equation">
        dρ_00/dt = 0,  dρ_11/dt = 0
      </div>
      <div class="equation">
        dρ_01/dt = -2γ_φ ρ_01
      </div>
    </div>

    <h3>Solution for Pure Dephasing</h3>
    <div class="note-box">
      <p><strong>Starting from |+⟩:</strong> ρ(0) = |+⟩⟨+|</p>

      <p><strong>Population evolution:</strong></p>
      <div class="equation">
        ρ_00(t) = ρ_00(0),  ρ_11(t) = ρ_11(0)  (unchanged!)
      </div>

      <p><strong>Coherence evolution:</strong></p>
      <div class="equation">
        ρ_01(t) = ρ_01(0) e^(-2γ_φ t) = ρ_01(0) e^(-t/T_φ)
      </div>

      <p><strong>Steady state:</strong> ρ_ss diagonal in computational basis</p>

      <p><strong>Bloch vector:</strong></p>
      <ul>
        <li>r_z(t) = r_z(0) (constant)</li>
        <li>r_x(t) = r_x(0) e^(-2γ_φ t)</li>
        <li>r_y(t) = r_y(0) e^(-2γ_φ t)</li>
      </ul>
      <p>Vector shrinks horizontally toward z-axis!</p>
    </div>

    <h2>Example 3: Combined T₁ and T₂</h2>
    <div class="highlight-box">
      <h3>General Decoherence</h3>
      <p>Real qubits experience both amplitude damping and dephasing:</p>

      <p><strong>Two Lindblad operators:</strong></p>
      <div class="equation">
        L_1 = √γ₁ σ_-,  L_2 = √γ_φ σ_z
      </div>

      <p><strong>Combined master equation:</strong></p>
      <div class="equation">
        dρ/dt = γ₁(σ_- ρ σ_+ - ½{σ_+ σ_-, ρ}) + γ_φ(σ_z ρ σ_z - ρ)
      </div>

      <p><strong>Relations:</strong></p>
      <div class="equation">
        1/T₂ = 1/(2T₁) + 1/T_φ
      </div>
      <div class="equation">
        γ₂ = γ₁/2 + γ_φ
      </div>

      <p><strong>Coherence decay:</strong></p>
      <div class="equation">
        ρ_01(t) = ρ_01(0) e^(-t/T₂)
      </div>
    </div>

    <h2>Example 4: Thermal Bath at Temperature T</h2>
    <div class="info-box">
      <h3>Finite-Temperature Environment</h3>
      <p>At finite temperature, thermal excitation (|0⟩ → |1⟩) competes with relaxation.</p>

      <p><strong>Two Lindblad operators:</strong></p>
      <div class="equation">
        L_↓ = √γ_↓ σ_- (decay),  L_↑ = √γ_↑ σ_+ (excitation)
      </div>

      <p><strong>Rates satisfy detailed balance:</strong></p>
      <div class="equation">
        γ_↑/γ_↓ = e^(-ℏω/k_B T) = n_th/(n_th + 1)
      </div>
      <p>where n_th = 1/(e^(ℏω/k_B T) - 1) is the thermal photon number.</p>

      <p><strong>Master equation:</strong></p>
      <div class="equation">
        dρ/dt = γ_↓(σ_- ρ σ_+ - ½{σ_+ σ_-, ρ}) + γ_↑(σ_+ ρ σ_- - ½{σ_- σ_+, ρ})
      </div>
    </div>

    <h3>Thermal Steady State</h3>
    <div class="note-box">
      <p><strong>Steady state is Gibbs state:</strong></p>
      <div class="equation">
        ρ_ss = e^(-H/k_B T) / Z = [1/(2 cosh(ℏω/2k_B T))] · [I + tanh(ℏω/2k_B T) σ_z]
      </div>

      <p><strong>Population:</strong></p>
      <div class="equation">
        ρ_11^ss = 1/(1 + e^(ℏω/k_B T)) = n_th/(2n_th + 1)
      </div>

      <p><strong>Limits:</strong></p>
      <ul>
        <li>T → 0: ρ_ss → |0⟩⟨0| (ground state)</li>
        <li>T → ∞: ρ_ss → I/2 (maximally mixed)</li>
      </ul>
    </div>

    <h2>Example 5: Driven Qubit with Dissipation</h2>
    <div class="highlight-box">
      <h3>Resonant Drive + Decay</h3>
      <p><strong>Hamiltonian:</strong> H = ½ℏΩ σ_x (resonant drive)</p>
      <p><strong>Dissipation:</strong> L = √γ σ_-</p>

      <p><strong>Bloch equations:</strong></p>
      <div class="equation">
        dr_x/dt = -Ω r_y - γ r_x/2
      </div>
      <div class="equation">
        dr_y/dt = Ω r_x - γ r_y/2
      </div>
      <div class="equation">
        dr_z/dt = -γ(r_z + 1)
      </div>

      <p><strong>Steady state:</strong></p>
      <div class="equation">
        r_x^ss = -2Ω γ/(γ² + 4Ω²)
      </div>
      <div class="equation">
        r_y^ss = -2Ω²/(γ² + 4Ω²)
      </div>
      <div class="equation">
        r_z^ss = -1 + 4Ω²/(γ² + 4Ω²)
      </div>

      <p>At strong drive (Ω >> γ): ρ_ss ≈ |-⟩⟨-| (anti-aligned with drive)</p>
    </div>

    <h2>Optical Bloch Equations</h2>
    <div class="info-box">
      <h3>Two-Level Atom in Laser Field</h3>
      <p>For atom with transition frequency ω₀ driven by laser at frequency ω:</p>

      <p><strong>Rotating frame Hamiltonian:</strong></p>
      <div class="equation">
        H = ½ℏΔ σ_z + ½ℏΩ σ_x
      </div>
      <p>where Δ = ω - ω₀ (detuning), Ω = Rabi frequency</p>

      <p><strong>Including T₁ and T₂:</strong></p>
      <div class="equation">
        du/dt = Δ v - u/T₂
      </div>
      <div class="equation">
        dv/dt = -Δ u + Ω w - v/T₂
      </div>
      <div class="equation">
        dw/dt = -Ω v - (w - w_eq)/T₁
      </div>
      <p>where u = 2Re(ρ_01), v = 2Im(ρ_01), w = ρ_11 - ρ_00</p>

      <p>These are the famous <strong>optical Bloch equations</strong> (or Maxwell-Bloch)!</p>
    </div>

    <h2>Measurement of T₁ and T₂</h2>

    <h3>T₁ Measurement: Inversion Recovery</h3>
    <div class="note-box">
      <ol>
        <li>Prepare |1⟩ with π pulse</li>
        <li>Wait time τ</li>
        <li>Measure population in |1⟩</li>
        <li>Repeat for various τ</li>
      </ol>
      <p><strong>Result:</strong> P₁(τ) = e^(-τ/T₁)</p>
      <p>Fit exponential to extract T₁</p>
    </div>

    <h3>T₂ Measurement: Ramsey Interferometry</h3>
    <div class="note-box">
      <ol>
        <li>Apply π/2 pulse → |+⟩</li>
        <li>Wait time τ (free evolution)</li>
        <li>Apply second π/2 pulse</li>
        <li>Measure</li>
      </ol>
      <p><strong>Result:</strong> Contrast ∝ e^(-τ/T₂)</p>
      <p>Oscillations decay exponentially with T₂</p>
    </div>

    <h3>T₂ Measurement: Spin Echo (Hahn Echo)</h3>
    <div class="note-box">
      <ol>
        <li>Apply π/2 pulse → |+⟩</li>
        <li>Wait time τ/2</li>
        <li>Apply π pulse (refocusing)</li>
        <li>Wait time τ/2</li>
        <li>Apply π/2 pulse and measure</li>
      </ol>
      <p><strong>Result:</strong> Cancels slow dephasing, measures T₂ excluding low-frequency noise</p>
      <p>Can distinguish T₂* (inhomogeneous) from true T₂</p>
    </div>

    <h2>Advanced Topics</h2>

    <h3>Non-Secular Terms</h3>
    <div class="info-box">
      <p>The secular approximation drops rapidly oscillating terms. Including them:</p>
      <div class="equation">
        dρ/dt = -i[H,ρ] + Σ_k γ_k 𝒟[L_k](ρ) + (non-secular terms)
      </div>
      <p>Important when: energy splittings ~ decoherence rates</p>
    </div>

    <h3>Floquet-Lindblad Theory</h3>
    <div class="info-box">
      <p>For periodically driven systems, use <strong>Floquet basis</strong>:</p>
      <ul>
        <li>Transform to frame rotating with drive</li>
        <li>Lindblad operators become time-periodic</li>
        <li>Can derive effective time-independent master equation</li>
      </ul>
      <p>Applications: driven qubits, Floquet engineering</p>
    </div>

    <h2>Summary: Single-Qubit Decoherence Channels</h2>
    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Channel</th>
          <th>Lindblad Op.</th>
          <th>Effect</th>
        </tr>
        <tr>
          <td>Amplitude damping</td>
          <td>L = √γ₁ σ_-</td>
          <td>|1⟩ → |0⟩ relaxation</td>
        </tr>
        <tr>
          <td>Pure dephasing</td>
          <td>L = √γ_φ σ_z</td>
          <td>Phase randomization only</td>
        </tr>
        <tr>
          <td>Depolarizing</td>
          <td>L_i = √(γ/3) σ_i</td>
          <td>All Pauli errors equally</td>
        </tr>
        <tr>
          <td>Thermal</td>
          <td>L_± = √γ_± σ_±</td>
          <td>Equilibration to Gibbs</td>
        </tr>
      </table>
    </div>

    <h2>Looking Ahead</h2>
    <div class="preview-box">
      <h4>Next: Chapter Summary (Section 2.6)</h4>
      <p>We'll synthesize the key ideas from this chapter:</p>
      <ul>
        <li>Unitary vs non-unitary evolution</li>
        <li>Gate decompositions and circuits</li>
        <li>Decoherence mechanisms</li>
        <li>Connections to quantum error correction</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_2_5_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
