<template>
  <div class="section-content">
    <h1>6.1.2 Quantum Phases of Matter and Transverse-Field Ising Model</h1>

    <p>At zero temperature, thermal fluctuations vanish and quantum fluctuations dominate. This leads to quantum phases of matter, where phase transitions are driven not by temperature but by tuning parameters in the Hamiltonian. The transverse-field Ising model provides the simplest example of a quantum phase transition, illustrating key concepts that extend to more complex systems.</p>

    <h2>Quantum vs Classical Phases</h2>

    <div class="highlight-box">
      <h3>Fundamental Differences</h3>

      <p><strong>Classical phases (T > 0):</strong></p>
      <ul>
        <li>Thermal fluctuations: k_B T competes with interaction energy</li>
        <li>Boltzmann distribution: ρ ~ e^{-H/k_B T}</li>
        <li>Phase transitions tuned by temperature T</li>
        <li>Order destroyed by entropy at high T</li>
      </ul>

      <p><strong>Quantum phases (T = 0):</strong></p>
      <ul>
        <li>Quantum fluctuations: Heisenberg uncertainty principle</li>
        <li>Pure state: System in ground state |ψ₀⟩</li>
        <li>Phase transitions tuned by Hamiltonian parameters (g, h, J, ...)</li>
        <li>Order determined by competition of quantum terms</li>
      </ul>

      <p><strong>Key distinction:</strong></p>
      <div class="equation">
        Classical: Temperature T drives transition<br>
        Quantum: External parameter λ drives transition at T = 0
      </div>

      <p><strong>Quantum phase transition (QPT):</strong></p>
      <ul>
        <li>Occurs at T = 0 as function of coupling constant</li>
        <li>Ground state changes qualitatively at critical point λ_c</li>
        <li>Correlation length diverges: ξ ~ |λ - λ_c|^{-ν}</li>
        <li>Governed by quantum fluctuations, not thermal</li>
      </ul>
    </div>

    <h2>Transverse-Field Ising Model</h2>

    <div class="info-box">
      <h3>Model Definition</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = -J Σ_i σ_i^z σ_{i+1}^z - h Σ_i σ_i^x
      </div>

      <p><strong>Two competing terms:</strong></p>
      <ul>
        <li><strong>Ising term (-J Σ σ^z σ^z):</strong> Favors ferromagnetic alignment in z-direction</li>
        <li><strong>Transverse field (-h Σ σ^x):</strong> Quantum fluctuations that flip spins</li>
      </ul>

      <p><strong>Dimensionless control parameter:</strong></p>
      <div class="equation">
        λ = h/J
      </div>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>J term: "Classical" energy minimization (wants |↑↑↑...⟩ or |↓↓↓...⟩)</li>
        <li>h term: Quantum uncertainty (creates superpositions)</li>
        <li>Competition determines ground state</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h3>Phase Diagram</h3>

      <p><strong>Two quantum phases:</strong></p>

      <p><strong>Phase I: Ferromagnetic (h &lt; J, λ &lt; 1)</strong></p>
      <ul>
        <li><strong>Ground state:</strong> Spontaneously magnetized
          <div class="equation">
            |ψ⟩ ≈ |↑↑↑...↑⟩ or |↓↓↓...↓⟩
          </div>
        </li>
        <li><strong>Order parameter:</strong> ⟨σ^z⟩ = m ≠ 0</li>
        <li><strong>Symmetry:</strong> Z₂ broken (system chooses ↑ or ↓)</li>
        <li><strong>Excitations:</strong> Domain walls (kink-antikink pairs)</li>
        <li><strong>Gap:</strong> Δ ~ J(1 - h/J) for h → J⁻</li>
      </ul>

      <p><strong>Phase II: Paramagnetic (h > J, λ > 1)</strong></p>
      <ul>
        <li><strong>Ground state:</strong> Polarized in x-direction
          <div class="equation">
            |ψ⟩ ≈ |→→→...→⟩ = ⊗_i |+⟩_x
          </div>
        </li>
        <li><strong>Order parameter:</strong> ⟨σ^z⟩ = 0, but ⟨σ^x⟩ ≠ 0</li>
        <li><strong>Symmetry:</strong> Z₂ preserved</li>
        <li><strong>Excitations:</strong> Spin flips in x-basis</li>
        <li><strong>Gap:</strong> Δ ~ h(h/J - 1) for h → J⁺</li>
      </ul>

      <p><strong>Critical point (h = J, λ = 1):</strong></p>
      <ul>
        <li><strong>Gap closes:</strong> Δ = 0</li>
        <li><strong>Correlation length diverges:</strong> ξ → ∞</li>
        <li><strong>Quantum critical point (QCP)</strong></li>
        <li><strong>Conformal field theory:</strong> c = 1/2 (Ising CFT in 1+1D)</li>
        <li><strong>Scale invariance:</strong> Power-law correlations</li>
      </ul>
    </div>

    <h2>Ground State Properties</h2>

    <div class="note-box">
      <h3>Magnetization and Order Parameter</h3>

      <p><strong>Spontaneous magnetization:</strong></p>
      <div class="equation">
        m(λ) = lim_{N→∞} lim_{ε→0⁺} ⟨σ_i^z⟩_{h_z = ε}
      </div>

      <p><strong>Behavior:</strong></p>
      <ul>
        <li><strong>λ &lt; 1:</strong> m(λ) ≠ 0 (ferromagnetic phase)</li>
        <li><strong>λ = 1:</strong> m = 0 (critical point)</li>
        <li><strong>λ > 1:</strong> m = 0 (paramagnetic phase)</li>
      </ul>

      <p><strong>Critical scaling near λ_c = 1:</strong></p>
      <div class="equation">
        m(λ) ~ (1 - λ)^β for λ → 1⁻
      </div>
      <ul>
        <li>Critical exponent: β = 1/8 (2D Ising universality class)</li>
        <li>Continuous but non-analytic at λ_c</li>
      </ul>

      <p><strong>Correlation function:</strong></p>
      <ul>
        <li><strong>λ &lt; 1:</strong> ⟨σ_i^z σ_j^z⟩ → m² (long-range order)</li>
        <li><strong>λ = 1:</strong> ⟨σ_i^z σ_j^z⟩ ~ |i-j|^{-1/4} (power-law)</li>
        <li><strong>λ > 1:</strong> ⟨σ_i^z σ_j^z⟩ ~ e^{-|i-j|/ξ} (exponential decay)</li>
      </ul>
    </div>

    <div class="comparison-box">
      <h3>Two Phases Comparison</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Ferromagnetic (λ &lt; 1)</th>
          <th>Paramagnetic (λ > 1)</th>
        </tr>
        <tr>
          <td><strong>Order parameter</strong></td>
          <td>⟨σ^z⟩ = m ≠ 0</td>
          <td>⟨σ^z⟩ = 0</td>
        </tr>
        <tr>
          <td><strong>Symmetry</strong></td>
          <td>Z₂ broken</td>
          <td>Z₂ preserved</td>
        </tr>
        <tr>
          <td><strong>Ground state</strong></td>
          <td>|↑↑...↑⟩ (2-fold degenerate)</td>
          <td>|→→...→⟩ (unique)</td>
        </tr>
        <tr>
          <td><strong>Gap</strong></td>
          <td>Δ ~ J(1-λ)</td>
          <td>Δ ~ h(λ-1)</td>
        </tr>
        <tr>
          <td><strong>Correlations</strong></td>
          <td>Long-range (⟨σσ⟩ → m²)</td>
          <td>Short-range (exponential decay)</td>
        </tr>
        <tr>
          <td><strong>Entanglement</strong></td>
          <td>S(ℓ) = O(1)</td>
          <td>S(ℓ) = O(1)</td>
        </tr>
        <tr>
          <td><strong>Excitations</strong></td>
          <td>Domain walls</td>
          <td>Local spin flips</td>
        </tr>
      </table>
    </div>

    <h2>Quantum Critical Behavior</h2>

    <div class="highlight-box">
      <h3>Scaling at the Critical Point</h3>

      <p><strong>Correlation length:</strong></p>
      <div class="equation">
        ξ ~ |λ - λ_c|^{-ν}
      </div>
      <ul>
        <li>ν = 1 (correlation length exponent)</li>
        <li>Diverges as λ → λ_c from both sides</li>
      </ul>

      <p><strong>Energy gap:</strong></p>
      <div class="equation">
        Δ ~ |λ - λ_c|^{zν}
      </div>
      <ul>
        <li>z = 1 (dynamical critical exponent)</li>
        <li>Relation: Δ ~ v/ξ where v is velocity</li>
      </ul>

      <p><strong>Conformal field theory (CFT):</strong></p>
      <ul>
        <li>At λ = λ_c, system described by c = 1/2 CFT</li>
        <li>Same universality class as 2D classical Ising model</li>
        <li>Entanglement entropy: S(ℓ) = (c/3) log ℓ = (1/6) log ℓ</li>
      </ul>

      <p><strong>Finite-size scaling:</strong></p>
      <div class="equation">
        Physical quantity Q(λ, L) = L^{y_Q} f((λ - λ_c)L^{1/ν})
      </div>
      <ul>
        <li>L: System size</li>
        <li>y_Q: Scaling dimension of Q</li>
        <li>f: Universal scaling function</li>
      </ul>
    </div>

    <h2>Quantum Fluctuations</h2>

    <div class="info-box">
      <h3>Role of Non-Commuting Terms</h3>

      <p><strong>Commutator:</strong></p>
      <div class="equation">
        [σ_i^z, σ_i^x] = 2i σ_i^y ≠ 0
      </div>

      <p><strong>Consequences:</strong></p>
      <ul>
        <li>Cannot simultaneously diagonalize both terms</li>
        <li>Ground state is superposition, not product state</li>
        <li>Quantum uncertainty: Δσ^z · Δσ^x ≥ |⟨[σ^z,σ^x]⟩|/2</li>
      </ul>

      <p><strong>Limiting cases:</strong></p>

      <p><strong>h = 0 (pure Ising):</strong></p>
      <ul>
        <li>Ground states: |↑↑...↑⟩ and |↓↓↓...↓⟩ (classical)</li>
        <li>No quantum fluctuations</li>
        <li>Degenerate, can be written in z-basis</li>
      </ul>

      <p><strong>J = 0 (pure field):</strong></p>
      <ul>
        <li>Ground state: |→→...→⟩ = ⊗|+⟩_x (product state)</li>
        <li>No entanglement between spins</li>
        <li>Simple to analyze</li>
      </ul>

      <p><strong>J ~ h (intermediate):</strong></p>
      <ul>
        <li>Ground state highly entangled</li>
        <li>Quantum correlations extend over ξ</li>
        <li>At critical point: ξ → ∞, maximal entanglement growth</li>
      </ul>
    </div>

    <h2>Experimental Realizations</h2>

    <div class="note-box">
      <h3>Physical Implementations</h3>

      <p><strong>1. LiHoF₄ (Lithium Holmium Fluoride):</strong></p>
      <ul>
        <li>Rare-earth magnetic insulator</li>
        <li>Ising spins from Ho³⁺ ions</li>
        <li>Transverse field applied via external magnetic field</li>
        <li>Observed quantum critical point at h_c ~ 5 T</li>
        <li>Verified critical exponents, universality</li>
      </ul>

      <p><strong>2. CoNb₂O₆ (Cobalt Niobate):</strong></p>
      <ul>
        <li>Quasi-1D Ising magnet</li>
        <li>Transverse field from applied B field</li>
        <li>Neutron scattering shows kink excitations</li>
        <li>Confinement of domain walls observed</li>
      </ul>

      <p><strong>3. Trapped ions:</strong></p>
      <ul>
        <li>Programmable quantum simulator</li>
        <li>Effective Ising interactions from phonon-mediated coupling</li>
        <li>Transverse field from laser-driven rotations</li>
        <li>Direct observation of QPT, entanglement growth</li>
      </ul>

      <p><strong>4. Superconducting qubits:</strong></p>
      <ul>
        <li>D-Wave quantum annealer</li>
        <li>Transverse-field quantum annealing</li>
        <li>Adiabatic passage through QPT</li>
        <li>Study of residual excitations (Kibble-Zurek mechanism)</li>
      </ul>

      <p><strong>5. Rydberg atoms:</strong></p>
      <ul>
        <li>Programmable 1D and 2D arrays</li>
        <li>Van der Waals interactions → Ising coupling</li>
        <li>Laser detuning → effective transverse field</li>
        <li>Up to 256 qubits demonstrated</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Quantum phases:</strong> Occur at T = 0, driven by quantum fluctuations not thermal</li>
        <li><strong>TFIM:</strong> Simplest model of quantum phase transition, H = -J Σσ^z σ^z - h Σσ^x</li>
        <li><strong>Two phases:</strong> Ferromagnetic (h &lt; J, Z₂ broken) and Paramagnetic (h > J, Z₂ preserved)</li>
        <li><strong>QPT at h = J:</strong> Gap closes, ξ → ∞, critical behavior emerges</li>
        <li><strong>Universality:</strong> 2D Ising universality class, c = 1/2 CFT</li>
        <li><strong>Quantum fluctuations:</strong> [σ^z, σ^x] ≠ 0 creates entanglement and superposition</li>
        <li><strong>Experiments:</strong> Realized in LiHoF₄, CoNb₂O₆, trapped ions, superconducting qubits, Rydberg atoms</li>
        <li><strong>Still Landau:</strong> Ferromagnetic phase has local order parameter ⟨σ^z⟩ ≠ 0</li>
      </ul>

      <p><strong>Next:</strong> Section 6.1.3 explores physical interpretations of symmetry breaking in quantum theory, including the role of measurement and environmental decoherence.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_1_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
