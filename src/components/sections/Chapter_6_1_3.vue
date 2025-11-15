<template>
  <div class="section-content">
    <h1>6.1.3 Physical Ways to Understand Symmetry Breaking in Quantum Theory</h1>

    <p>Spontaneous symmetry breaking in quantum mechanics raises subtle conceptual issues that do not arise classically. How can a symmetric Hamiltonian lead to an asymmetric ground state? What role do measurements and decoherence play? This section explores the physical mechanisms behind quantum symmetry breaking.</p>

    <h2>The Paradox of Quantum Symmetry Breaking</h2>

    <div class="highlight-box">
      <h3>Conceptual Challenge</h3>

      <p><strong>Classical case:</strong></p>
      <ul>
        <li>Mexican hat potential V(φ) = λ(φ² - v²)²</li>
        <li>Minimum at |φ| = v, any angle θ</li>
        <li>System "rolls down" and picks one value</li>
        <li>Thermal or quantum fluctuations choose θ</li>
      </ul>

      <p><strong>Quantum paradox:</strong></p>
      <div class="equation">
        If H is symmetric: H|ψ⟩ = E|ψ⟩ → H(g|ψ⟩) = E(g|ψ⟩)
      </div>
      <ul>
        <li>All transformed states g|ψ⟩ are equally valid ground states</li>
        <li><strong>Superposition principle:</strong> Should form symmetric superposition!
          <div class="equation">
            |ψ_sym⟩ = ∫ dg |g·ψ⟩ (symmetric under G)
          </div>
        </li>
        <li>But experiments show definite magnetization, not superposition</li>
      </ul>

      <p><strong>The question:</strong></p>
      <div class="equation">
        How does nature "choose" one ground state from degenerate manifold?
      </div>
    </div>

    <h2>Thermodynamic Limit Resolution</h2>

    <div class="info-box">
      <h3>Infinite System Size</h3>

      <p><strong>Key insight:</strong> Symmetry breaking only occurs in thermodynamic limit N → ∞</p>

      <p><strong>Finite system (N finite):</strong></p>
      <ul>
        <li>True ground state is symmetric superposition</li>
        <li>Example (Z₂): |GS⟩ = (|↑↑...↑⟩ + |↓↓...↓⟩)/√2</li>
        <li>⟨σ^z⟩ = 0 (no spontaneous magnetization)</li>
        <li>Energy splitting between symmetric/antisymmetric: ΔE ~ e^{-cN}</li>
      </ul>

      <p><strong>Thermodynamic limit (N → ∞):</strong></p>
      <ul>
        <li>Energy splitting: ΔE → 0 exponentially fast</li>
        <li>Tunneling time: τ ~ e^{cN} → ∞</li>
        <li>States |↑↑...↑⟩ and |↓↓...↓⟩ become exact eigenstates</li>
        <li>Superposition forbidden (different superselection sectors)</li>
      </ul>

      <p><strong>Mathematical statement:</strong></p>
      <div class="equation">
        lim_{N→∞} ⟨↑↑...↑|↓↓...↓⟩ = 0
      </div>
      <ul>
        <li>States become orthogonal in thermodynamic limit</li>
        <li>Cannot create coherent superposition</li>
        <li>Each ground state is separately stable</li>
      </ul>
    </div>

    <h2>Role of Symmetry-Breaking Field</h2>

    <div class="highlight-box">
      <h3>Infinitesimal Perturbation</h3>

      <p><strong>Add small symmetry-breaking term:</strong></p>
      <div class="equation">
        H_ε = H + ε Σ_i σ_i^z (ε → 0⁺)
      </div>

      <p><strong>Effect:</strong></p>
      <ul>
        <li>ε > 0: Favors |↑↑...↑⟩ state</li>
        <li>ε &lt; 0: Favors |↓↓...↓⟩ state</li>
        <li>Even infinitesimal ε selects one ground state</li>
      </ul>

      <p><strong>Order of limits:</strong></p>
      <div class="equation">
        lim_{ε→0⁺} lim_{N→∞} ⟨σ^z⟩ = m ≠ 0
      </div>
      <div class="equation">
        lim_{N→∞} lim_{ε→0⁺} ⟨σ^z⟩ = 0
      </div>
      <ul>
        <li><strong>Crucial:</strong> N → ∞ BEFORE ε → 0</li>
        <li>Non-commutativity of limits defines spontaneous symmetry breaking</li>
      </ul>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Real systems always have tiny perturbations (defects, boundaries, fields)</li>
        <li>These select one ground state from degenerate manifold</li>
        <li>Once N large enough, system "locks in" to chosen state</li>
      </ul>
    </div>

    <h2>Measurement and Decoherence</h2>

    <div class="note-box">
      <h3>Environmental Selection</h3>

      <p><strong>Quantum measurement perspective:</strong></p>
      <ul>
        <li>Measuring any local observable ⟨σ_i^z⟩ collapses superposition</li>
        <li>Result: System in definite |↑⟩ or |↓⟩ configuration</li>
        <li>Subsequent measurements find same state (stability)</li>
      </ul>

      <p><strong>Decoherence from environment:</strong></p>
      <ul>
        <li>System coupled to environment (phonons, photons, etc.)</li>
        <li>Environment measures σ_i^z continuously</li>
        <li>Pointer states: |↑↑...↑⟩ and |↓↓...↓⟩ (eigenstates of interaction)</li>
        <li>Superposition rapidly destroyed: τ_dec ≪ τ_tunnel</li>
      </ul>

      <p><strong>Decoherence timescales:</strong></p>
      <div class="equation">
        τ_dec ~ 1/(coupling to environment)<br>
        τ_tunnel ~ e^{cN} (exponentially large)
      </div>
      <ul>
        <li>For any macroscopic N: τ_dec ≪ τ_tunnel</li>
        <li>System decoheres before it can tunnel</li>
        <li>Explains classical appearance of broken-symmetry state</li>
      </ul>
    </div>

    <h2>Domain Walls and Finite-Size Effects</h2>

    <div class="info-box">
      <h3>Spatial Structure of Symmetry Breaking</h3>

      <p><strong>Domain wall energy:</strong></p>
      <ul>
        <li>Configuration: ...↑↑↑|↓↓↓... (wall at |)</li>
        <li>Energy cost: E_wall ~ J × L^{d-1} (surface energy)</li>
        <li>Thermally excited at T > 0</li>
      </ul>

      <p><strong>Finite system (periodic boundary conditions):</strong></p>
      <ul>
        <li>Domain wall can propagate around system</li>
        <li>Creates tunneling between |↑⟩ and |↓⟩ states</li>
        <li>Splitting: ΔE ~ J e^{-E_wall/T} ~ e^{-cN}</li>
      </ul>

      <p><strong>Phase coherence:</strong></p>
      <ul>
        <li>For finite N: Coherent oscillation between |↑⟩ and |↓⟩</li>
        <li>Frequency: ω ~ ΔE/ℏ ~ e^{-cN}</li>
        <li>Observable in small systems (quantum dots, cold atoms)</li>
      </ul>

      <p><strong>Macroscopic limit:</strong></p>
      <ul>
        <li>N → ∞: Domain wall becomes infinitely costly</li>
        <li>Tunneling suppressed exponentially</li>
        <li>States |↑⟩ and |↓⟩ effectively separate superselection sectors</li>
      </ul>
    </div>

    <h2>Cat States and Macroscopic Superpositions</h2>

    <div class="highlight-box">
      <h3>Schrödinger's Cat Revisited</h3>

      <p><strong>Cat state:</strong></p>
      <div class="equation">
        |cat⟩ = (|alive⟩ + |dead⟩)/√2
      </div>

      <p><strong>Why not observed macroscopically?</strong></p>
      <ul>
        <li><strong>Decoherence:</strong> Environment rapidly destroys superposition</li>
        <li><strong>Orthogonality:</strong> ⟨alive|dead⟩ → 0 for macroscopic states</li>
        <li><strong>No interference:</strong> Cannot observe quantum effects between |alive⟩ and |dead⟩</li>
      </ul>

      <p><strong>Mesoscopic systems:</strong></p>
      <ul>
        <li>Superconducting qubits: ~10⁹ electrons in superposition</li>
        <li>Cold atoms: BEC with ~10⁶ atoms in superposition of |N,0⟩ and |0,N⟩</li>
        <li>Mechanical resonators: Quantum superposition of vibrational states</li>
      </ul>

      <p><strong>Observation:</strong></p>
      <ul>
        <li>Larger systems → faster decoherence</li>
        <li>Quantum-classical boundary not sharp, but practical</li>
        <li>Current record: ~10¹⁰ particles in superposition (brief time)</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Thermodynamic limit:</strong> N → ∞ essential for true spontaneous symmetry breaking</li>
        <li><strong>Orthogonality:</strong> Different ground states become orthogonal as N → ∞</li>
        <li><strong>Infinitesimal field:</strong> lim_{ε→0⁺} lim_{N→∞} selects ground state</li>
        <li><strong>Decoherence:</strong> Environment destroys superpositions, selects pointer states</li>
        <li><strong>Tunneling suppression:</strong> Domain walls cost ~e^{cN}, making tunneling impossible</li>
        <li><strong>Mesoscopic regime:</strong> Intermediate systems show both quantum and classical features</li>
      </ul>

      <p><strong>Next:</strong> Section 6.1.4 compares finite-temperature and zero-temperature phases in detail.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_1_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
