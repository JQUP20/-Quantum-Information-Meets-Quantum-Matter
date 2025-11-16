<template>
  <div class="section-content">
    <h1>11.1.4 Quantum Revolution</h1>

    <p>
      The quantum revolution, beginning with Planck's blackbody radiation solution in 1900 and culminating in the complete formulation of quantum mechanics by the mid-1920s, represents the most profound transformation in our understanding of physical reality. Quantum mechanics introduced fundamental uncertainty, wave-particle duality, superposition, and entanglement—concepts that shattered classical intuitions and revealed a reality far stranger than anyone had imagined. Unlike previous revolutions that modified or generalized classical physics, quantum mechanics replaced it with an entirely new framework based on probability amplitudes and operator algebras.
    </p>

    <h2>Crisis of Classical Physics at the Turn of the 20th Century</h2>

    <h3>Three Unexplained Phenomena</h3>

    <div class="info-box">
      <h3>Problems Defying Classical Explanation</h3>

      <h4>1. Blackbody Radiation and the Ultraviolet Catastrophe</h4>
      <ul>
        <li><strong>Observation:</strong> Hot objects emit electromagnetic radiation with characteristic spectrum depending only on temperature</li>
        <li><strong>Classical prediction (Rayleigh-Jeans):</strong> Energy density ρ(ν) ~ ν² → infinite total energy ("ultraviolet catastrophe")</li>
        <li><strong>Planck's solution (1900):</strong> Energy quantized in discrete units E = nhν, yielding
          <div class="equation">
            ρ(ν, T) = (8πhν³/c³) / (e^(hν/k_BT) - 1)
          </div>
          Agrees perfectly with experiment by introducing Planck constant h = 6.626 × 10⁻³⁴ J·s
        </li>
      </ul>

      <h4>2. Photoelectric Effect</h4>
      <ul>
        <li><strong>Observation:</strong> Light ejects electrons from metal surfaces</li>
        <li><strong>Classical prediction:</strong> Brighter light → more energetic electrons; any frequency works if intense enough</li>
        <li><strong>Actual behavior:</strong> Electron energy depends only on light frequency, not intensity; below threshold frequency, no emission regardless of intensity</li>
        <li><strong>Einstein's explanation (1905):</strong> Light consists of photons with energy E = hν; one photon ejects one electron</li>
      </ul>

      <h4>3. Atomic Stability and Spectra</h4>
      <ul>
        <li><strong>Problem:</strong> Electrons orbiting nucleus should radiate energy continuously, spiraling inward in ~10⁻¹¹ seconds</li>
        <li><strong>Observation:</strong> Atoms are stable; emit/absorb light only at discrete frequencies (spectral lines)</li>
        <li><strong>Bohr's model (1913):</strong> Quantized angular momentum L = nℏ; only certain orbits allowed; energy levels E_n = -13.6 eV/n²</li>
      </ul>
    </div>

    <h2>Wave-Particle Duality</h2>

    <h3>From Particles to Waves and Back</h3>

    <div class="highlight-box">
      <h4>De Broglie's Matter Waves (1924)</h4>
      <p>
        Louis de Broglie proposed that if light (classically a wave) has particle properties, then matter (classically particles) should have wave properties:
      </p>
      <div class="equation">
        λ = h/p
      </div>
      <p>
        Every particle with momentum p has associated wavelength λ.
      </p>

      <p><strong>Experimental confirmations:</strong></p>
      <ul>
        <li><strong>Davisson-Germer (1927):</strong> Electron diffraction from nickel crystal—electrons exhibit wave interference</li>
        <li><strong>Double-slit experiment:</strong> Single electrons/photons create interference patterns—each particle interferes with itself</li>
        <li><strong>Modern:</strong> Interference observed for neutrons, atoms, molecules (even C₆₀ fullerenes!)</li>
      </ul>
    </div>

    <h3>Complementarity and the Uncertainty Principle</h3>

    <div class="info-box">
      <h3>Heisenberg Uncertainty Principle (1927)</h3>
      <div class="equation">
        Δx · Δp ≥ ℏ/2
        <br>
        ΔE · Δt ≥ ℏ/2
      </div>
      <p><strong>Implications:</strong></p>
      <ul>
        <li>Cannot simultaneously measure position and momentum with arbitrary precision</li>
        <li>Not a limitation of measurement technology—fundamental property of nature</li>
        <li>Particle doesn't have definite position and momentum simultaneously</li>
        <li>Energy-time uncertainty: Short-lived states have uncertain energy; vacuum fluctuations</li>
      </ul>

      <h4>Bohr's Complementarity (1928)</h4>
      <p>
        Wave and particle descriptions are complementary: which aspect manifests depends on experimental context. Complete description requires both, though they never appear simultaneously in single measurement.
      </p>
    </div>

    <h2>The Mathematical Framework of Quantum Mechanics</h2>

    <h3>Schrödinger's Wave Mechanics (1926)</h3>

    <div class="info-box">
      <h3>The Schrödinger Equation</h3>
      <p><strong>Time-dependent:</strong></p>
      <div class="equation">
        iℏ ∂ψ/∂t = Ĥψ
      </div>
      <p><strong>Time-independent (energy eigenstates):</strong></p>
      <div class="equation">
        Ĥψ = Eψ
      </div>
      <p>where Ĥ is the Hamiltonian operator and ψ is the wavefunction.</p>

      <h4>Born's Probabilistic Interpretation (1926)</h4>
      <ul>
        <li><strong>Wavefunction:</strong> ψ(x, t) is probability amplitude</li>
        <li><strong>Probability density:</strong> |ψ(x, t)|² gives probability of finding particle at position x at time t</li>
        <li><strong>Normalization:</strong> ∫ |ψ|² dx = 1 (particle exists somewhere)</li>
        <li><strong>Radical implication:</strong> Quantum mechanics is fundamentally probabilistic, not due to ignorance</li>
      </ul>
    </div>

    <h3>Heisenberg's Matrix Mechanics (1925)</h3>

    <div class="highlight-box">
      <h4>Operator Formalism</h4>
      <p>
        Physical observables represented by Hermitian operators acting on Hilbert space:
      </p>
      <ul>
        <li><strong>Position operator:</strong> x̂</li>
        <li><strong>Momentum operator:</strong> p̂ = -iℏ ∂/∂x</li>
        <li><strong>Canonical commutation:</strong> [x̂, p̂] = iℏ (non-commutativity is key!)</li>
        <li><strong>Observables:</strong> Measurement yields eigenvalue; state collapses to eigenstate</li>
      </ul>

      <p><strong>Equivalence proven by Schrödinger:</strong> Wave mechanics and matrix mechanics are mathematically equivalent formulations—matter of computational convenience.</p>
    </div>

    <h3>Dirac's Bra-Ket Formalism (1930)</h3>

    <div class="info-box">
      <h3>Abstract Hilbert Space Formulation</h3>
      <ul>
        <li><strong>States:</strong> Vectors |ψ⟩ in Hilbert space ℋ</li>
        <li><strong>Observables:</strong> Hermitian operators Â on ℋ</li>
        <li><strong>Measurement:</strong> Collapse to eigenstate |a_n⟩ with probability |⟨a_n|ψ⟩|²</li>
        <li><strong>Expectation value:</strong> ⟨Â⟩ = ⟨ψ|Â|ψ⟩</li>
        <li><strong>Evolution:</strong> Unitary operators Û = e^(-iĤt/ℏ)</li>
      </ul>
      <p>
        This abstract formulation reveals quantum mechanics as geometry in Hilbert space—elegant, general, and applicable to any quantum system.
      </p>
    </div>

    <h2>Quantum Superposition and Measurement</h2>

    <h3>Superposition Principle</h3>

    <div class="highlight-box">
      <h4>The Most Counterintuitive Feature</h4>
      <p>
        If |ψ₁⟩ and |ψ₂⟩ are possible states, then any linear combination is also a possible state:
      </p>
      <div class="equation">
        |ψ⟩ = α|ψ₁⟩ + β|ψ₂⟩, where |α|² + |β|² = 1
      </div>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Schrödinger's cat:</strong> |cat⟩ = (1/√2)(|alive⟩ + |dead⟩) until measured</li>
        <li><strong>Electron spin:</strong> |spin⟩ = α|↑⟩ + β|↓⟩ (superposition of up and down)</li>
        <li><strong>Photon polarization:</strong> |photon⟩ = (1/√2)(|H⟩ + |V⟩) (horizontal + vertical)</li>
      </ul>

      <p><strong>Key point:</strong> System is not in unknown classical state—it's genuinely in both states simultaneously until measurement.</p>
    </div>

    <h3>Measurement Problem</h3>

    <div class="info-box">
      <h3>Collapse of the Wavefunction</h3>
      <p>
        Quantum measurement involves two types of evolution:
      </p>
      <ol>
        <li><strong>Unitary evolution (when not measuring):</strong> Deterministic, reversible, governed by Schrödinger equation</li>
        <li><strong>Measurement/collapse (when measuring):</strong> Probabilistic, irreversible, state jumps to eigenstate</li>
      </ol>

      <p><strong>Copenhagen interpretation:</strong></p>
      <ul>
        <li>Measurement causes instantaneous collapse to eigenstate</li>
        <li>Outcome is random; only probabilities are determined</li>
        <li>After measurement, system is in definite state (eigenstate)</li>
      </ul>

      <p><strong>The problem:</strong></p>
      <ul>
        <li>What counts as measurement? Where is quantum-classical boundary?</li>
        <li>How does probabilistic collapse emerge from deterministic Schrödinger evolution?</li>
        <li>Is collapse real physical process or just update of knowledge?</li>
      </ul>

      <p><strong>Alternative interpretations:</strong> Many-worlds (no collapse, universe branches), de Broglie-Bohm (hidden variables), QBism (Bayesian updating), etc.</p>
    </div>

    <h2>Quantum Entanglement: "Spooky Action at a Distance"</h2>

    <h3>EPR Paradox and Bell's Theorem</h3>

    <div class="highlight-box">
      <h4>Einstein-Podolsky-Rosen Argument (1935)</h4>
      <p>
        EPR argued quantum mechanics is incomplete based on entangled particles:
      </p>
      <ul>
        <li>Create entangled pair: |ψ⟩ = (1/√2)(|↑↓⟩ - |↓↑⟩)</li>
        <li>Measure first particle spin → instantly know second particle spin</li>
        <li><strong>EPR claim:</strong> Second particle must have had definite spin all along (realism)</li>
        <li><strong>Conclusion:</strong> Quantum mechanics incomplete; hidden variables needed</li>
      </ul>

      <h4>Bell's Theorem (1964)</h4>
      <p>
        John Bell proved EPR's local hidden variable theories predict correlations satisfying:
      </p>
      <div class="equation">
        |E(a,b) - E(a,c)| + E(b,c) ≤ 1 (Bell inequality)
      </div>
      <p>
        Quantum mechanics violates this inequality! Tests (Aspect 1982, et al.) confirm quantum predictions:
      </p>
      <ul>
        <li><strong>Verdict:</strong> Nature violates local realism—no local hidden variables</li>
        <li><strong>Implication:</strong> Either locality or realism (or both) must be abandoned</li>
        <li><strong>Quantum choice:</strong> Preserve locality (no faster-than-light signaling) but abandon realism (properties not predetermined)</li>
      </ul>
    </div>

    <h3>The Nature of Entanglement</h3>

    <div class="info-box">
      <h3>Entanglement as the Defining Quantum Feature</h3>
      <p>
        Entangled state cannot be written as product of individual particle states:
      </p>
      <div class="equation">
        |ψ⟩_{AB} ≠ |ψ⟩_A ⊗ |ψ⟩_B
      </div>

      <p><strong>Properties of entanglement:</strong></p>
      <ul>
        <li><strong>Monogamy:</strong> If A-B maximally entangled, neither can be entangled with C</li>
        <li><strong>Non-locality:</strong> Correlations stronger than any classical theory allows</li>
        <li><strong>No-cloning:</strong> Cannot copy unknown quantum state</li>
        <li><strong>Information resource:</strong> Enables quantum computing, cryptography, teleportation</li>
      </ul>

      <p><strong>Schrödinger (1935):</strong> "I would not call entanglement <em>one</em> but rather <em>the</em> characteristic trait of quantum mechanics."</p>
    </div>

    <h2>Quantum Field Theory: Unifying Quantum Mechanics and Special Relativity</h2>

    <h3>From Quantum Mechanics to Quantum Fields</h3>

    <div class="highlight-box">
      <h4>The Need for Quantum Field Theory</h4>
      <p>
        Standard quantum mechanics (Schrödinger equation) is non-relativistic:
      </p>
      <ul>
        <li><strong>Problem:</strong> Fixed particle number; first-order in time but second-order in space; no particle creation/annihilation</li>
        <li><strong>Solution:</strong> Quantum field theory—fields are fundamental, particles are excitations</li>
      </ul>

      <h4>Key Concepts of QFT</h4>
      <ul>
        <li><strong>Fields are quantum operators:</strong> φ̂(x,t) creates/annihilates particles at spacetime point (x,t)</li>
        <li><strong>Particles as excitations:</strong> Photons are quanta of electromagnetic field; electrons are quanta of electron field</li>
        <li><strong>Vacuum:</strong> Lowest energy state of field; not empty but ground state of quantum fluctuations</li>
        <li><strong>Virtual particles:</strong> Temporary fluctuations allowed by ΔE·Δt ≥ ℏ/2; mediate forces</li>
        <li><strong>Particle creation:</strong> Sufficient energy can excite field, creating particle-antiparticle pairs</li>
      </ul>
    </div>

    <h3>The Standard Model: Triumph of Quantum Field Theory</h3>

    <div class="info-box">
      <h3>Unified Description of Fundamental Forces</h3>
      <table>
        <thead>
          <tr>
            <th>Force</th>
            <th>Mediator</th>
            <th>Theory</th>
            <th>Gauge Group</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Electromagnetic</td>
            <td>Photon (γ)</td>
            <td>QED</td>
            <td>U(1)</td>
          </tr>
          <tr>
            <td>Weak nuclear</td>
            <td>W±, Z⁰ bosons</td>
            <td>Electroweak theory</td>
            <td>SU(2) × U(1)</td>
          </tr>
          <tr>
            <td>Strong nuclear</td>
            <td>8 gluons</td>
            <td>QCD</td>
            <td>SU(3)</td>
          </tr>
          <tr>
            <td>Gravity</td>
            <td>Graviton (hypothetical)</td>
            <td>No quantum theory yet</td>
            <td>Diffeomorphisms</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Standard Model achievements:</strong></p>
      <ul>
        <li>Predicted W, Z bosons (discovered 1983), top quark (1995), Higgs boson (2012)</li>
        <li>Explains all particle physics experiments to date</li>
        <li>QED predictions agree with experiment to 10+ decimal places</li>
        <li>Based on gauge symmetry: SU(3) × SU(2) × U(1)</li>
      </ul>
    </div>

    <h2>Conceptual Revolution: The Quantum Worldview</h2>

    <h3>Overthrow of Classical Concepts</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Classical Concept</th>
            <th>Quantum Replacement</th>
            <th>Implications</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Determinism</td>
            <td>Fundamental probability</td>
            <td>Future not determined by present; only probabilities determined</td>
          </tr>
          <tr>
            <td>Definite properties</td>
            <td>Superposition</td>
            <td>System can be in multiple states simultaneously</td>
          </tr>
          <tr>
            <td>Independent reality</td>
            <td>Contextuality</td>
            <td>Properties depend on measurement context</td>
          </tr>
          <tr>
            <td>Local realism</td>
            <td>Entanglement</td>
            <td>Non-local correlations; holistic properties</td>
          </tr>
          <tr>
            <td>Continuous values</td>
            <td>Quantization</td>
            <td>Discrete energy levels, angular momentum, etc.</td>
          </tr>
          <tr>
            <td>Wave OR particle</td>
            <td>Wave-particle duality</td>
            <td>Complementary descriptions; context-dependent</td>
          </tr>
          <tr>
            <td>Empty vacuum</td>
            <td>Vacuum fluctuations</td>
            <td>Vacuum has structure, energy, particle creation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>The Measurement Problem and Interpretations</h3>

    <div class="info-box">
      <h3>Competing Interpretations of Quantum Mechanics</h3>
      <ul>
        <li><strong>Copenhagen:</strong> Wavefunction collapse upon measurement; classical-quantum divide</li>
        <li><strong>Many-worlds (Everett):</strong> No collapse; universe branches at each measurement</li>
        <li><strong>De Broglie-Bohm:</strong> Deterministic hidden variables; particles have definite trajectories guided by wavefunction</li>
        <li><strong>Consistent histories:</strong> Quantum mechanics describes histories, not states; decoherence selects classical reality</li>
        <li><strong>QBism:</strong> Quantum states represent agent's beliefs; measurement updates knowledge</li>
        <li><strong>Relational QM:</strong> States are relational, not absolute; measurements are interactions</li>
      </ul>
      <p>
        <strong>Remarkable fact:</strong> All interpretations make identical experimental predictions. Choice is philosophical, not empirical (so far).
      </p>
    </div>

    <h2>Quantum Technology: From Philosophy to Application</h2>

    <div class="highlight-box">
      <h3>The Second Quantum Revolution</h3>
      <p>
        While the first quantum revolution (1900-1950) explained atomic phenomena, the second quantum revolution (1980-present) exploits uniquely quantum features for technology:
      </p>

      <h4>Quantum Computing</h4>
      <ul>
        <li>Qubits in superposition: |ψ⟩ = α|0⟩ + β|1⟩</li>
        <li>Quantum parallelism: N qubits explore 2^N states simultaneously</li>
        <li>Shor's algorithm: Factor large numbers exponentially faster (threatens RSA encryption)</li>
        <li>Grover's algorithm: Search unsorted database with quadratic speedup</li>
      </ul>

      <h4>Quantum Cryptography</h4>
      <ul>
        <li>BB84 protocol: Quantum key distribution provably secure</li>
        <li>No-cloning theorem prevents eavesdropping without detection</li>
        <li>Commercial QKD systems already deployed</li>
      </ul>

      <h4>Quantum Sensing and Metrology</h4>
      <ul>
        <li>Atomic clocks (quantum superposition) accurate to 10⁻¹⁸</li>
        <li>Quantum entanglement beats standard quantum limit</li>
        <li>LIGO used squeezed light (quantum) to detect gravitational waves</li>
      </ul>

      <h4>Quantum Simulation</h4>
      <ul>
        <li>Quantum systems simulate other quantum systems efficiently</li>
        <li>Study many-body physics, chemistry, materials science</li>
        <li>Classical computers cannot simulate large quantum systems</li>
      </ul>
    </div>

    <h2>Open Questions and the Road Ahead</h2>

    <div class="info-box">
      <h3>Unresolved Fundamental Issues</h3>
      <ul>
        <li><strong>Quantum gravity:</strong> How to reconcile quantum mechanics with general relativity?</li>
        <li><strong>Measurement problem:</strong> What really happens during measurement?</li>
        <li><strong>Quantum-classical transition:</strong> Why does macroscopic world appear classical?</li>
        <li><strong>Foundations:</strong> Is quantum mechanics complete, or are there deeper layers?</li>
        <li><strong>Cosmology:</strong> What is quantum state of entire universe?</li>
        <li><strong>Consciousness:</strong> Does observer require consciousness, or is any interaction sufficient?</li>
      </ul>
    </div>

    <h2>Legacy: The Most Successful Theory in Physics</h2>

    <p>
      Quantum mechanics has been tested in countless experiments over nearly a century, with zero confirmed violations. It explains:
    </p>

    <ul>
      <li>Chemical bonding and the periodic table</li>
      <li>Properties of materials (conductors, semiconductors, superconductors)</li>
      <li>Nuclear physics and radioactive decay</li>
      <li>Stellar fusion and evolution</li>
      <li>Lasers, transistors, and modern electronics</li>
      <li>Atomic clocks and GPS</li>
      <li>MRI and other medical technologies</li>
    </ul>

    <p>
      Yet quantum mechanics fundamentally challenges our intuitions about reality. It suggests that at the deepest level, nature is:
    </p>

    <ul>
      <li><strong>Probabilistic:</strong> Outcomes are fundamentally random</li>
      <li><strong>Holistic:</strong> Entanglement creates non-local connections</li>
      <li><strong>Contextual:</strong> Properties depend on how we measure</li>
      <li><strong>Informational:</strong> Quantum information is a fundamental resource</li>
    </ul>

    <p>
      This last point—that information is fundamental to quantum mechanics—sets the stage for the revolutionary ideas explored in the rest of this chapter: that quantum information might not just describe reality, but constitute it. Perhaps, as Wheeler proposed, "it from bit"—or better yet, as we shall see, "it from qubit."
    </p>

    <div class="navigation-info">
      <p><strong>Next:</strong> Section 11.2 explores Wheeler's "It from Bit" paradigm and its quantum generalization "It from Qubit."</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_11_1_4'
}
</script>

<style scoped>
.section-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.8;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 40px;
  margin-bottom: 20px;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #546e7a;
  margin-top: 30px;
  margin-bottom: 15px;
}

h4 {
  color: #607d8b;
  margin-top: 20px;
  margin-bottom: 10px;
}

.info-box, .highlight-box, .comparison-box {
  background-color: #f8f9fa;
  border-left: 5px solid #3498db;
  padding: 20px;
  margin: 25px 0;
  border-radius: 5px;
}

.highlight-box {
  border-left-color: #2ecc71;
  background-color: #f0f9f4;
}

.comparison-box {
  border-left-color: #9b59b6;
  background-color: #f9f5fb;
}

.equation {
  background-color: #fff;
  padding: 15px;
  margin: 15px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-family: 'Courier New', monospace;
  text-align: center;
  font-size: 1.1em;
  line-height: 1.6;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: white;
}

th, td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #3498db;
  color: white;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f8f9fa;
}

ul, ol {
  margin: 15px 0;
  padding-left: 30px;
}

li {
  margin: 8px 0;
}

.navigation-info {
  margin-top: 40px;
  padding: 15px;
  background-color: #e8f4f8;
  border-radius: 5px;
  border-left: 4px solid #3498db;
}

strong {
  color: #2c3e50;
}

em {
  font-style: italic;
  color: #555;
}
</style>
