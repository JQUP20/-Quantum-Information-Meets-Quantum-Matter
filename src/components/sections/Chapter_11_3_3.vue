<template>
  <div class="section-content">
    <h1>11.3.3 String-Net Liquid of Qubits Unifies Light and Electrons</h1>

    <p>
      One of the most profound examples of quantum emergence is the string-net condensation theory developed by Michael Levin and Xiao-Gang Wen in 2005. This theory demonstrates that gauge bosons (like photons) and fermionic matter (like electrons) can emerge from a simple lattice model of qubits with local interactions. The key insight is that when extended string-like excitations condense into a quantum liquid, the resulting state exhibits emergent gauge symmetry, propagating gauge bosons, and fermionic excitations—despite starting from a bosonic spin system. This provides a concrete realization of "It from Qubit" and suggests that fundamental particles and forces may be emergent phenomena arising from quantum information.
    </p>

    <h2>The String-Net Model: Basic Setup</h2>

    <h3>Lattice and Degrees of Freedom</h3>

    <div class="info-box">
      <h3>Constructing the Model</h3>

      <h4>Lattice Structure</h4>
      <ul>
        <li><strong>Spatial lattice:</strong> 2D honeycomb or square lattice (generalizable to 3D)</li>
        <li><strong>Qubits on links:</strong> Each lattice edge carries qubit degree of freedom</li>
        <li><strong>String states:</strong> Configurations represent "strings" threading through lattice</li>
        <li><strong>String labels:</strong> Qubits labeled by string type (e.g., |0⟩, |1⟩, or more generally elements of fusion category)</li>
      </ul>

      <h4>String Operators</h4>
      <ul>
        <li><strong>Open strings:</strong> Create excitations at endpoints (quasiparticles)</li>
        <li><strong>Closed strings:</strong> Loops with no endpoints; can proliferate without energy cost when condensed</li>
        <li><strong>String fusion:</strong> Rules for combining strings (analogous to group multiplication)</li>
        <li><strong>String branching:</strong> Strings can split or merge at vertices according to fusion rules</li>
      </ul>
    </div>

    <h3>The Hamiltonian and Ground State</h3>

    <div class="highlight-box">
      <h4>String-Net Hamiltonian</h4>
      <p>
        The Hamiltonian consists of local projection operators:
      </p>
      <div class="equation">
        H = -∑_v Q_v - ∑_p B_p
      </div>

      <h5>Vertex Term Q_v</h5>
      <ul>
        <li><strong>Action:</strong> Projects onto states where string branching at vertex v satisfies fusion rules</li>
        <li><strong>Effect:</strong> Enforces local "Gauss law" constraint</li>
        <li><strong>Interpretation:</strong> String number conservation at each vertex</li>
      </ul>

      <h5>Plaquette Term B_p</h5>
      <ul>
        <li><strong>Action:</strong> Creates or annihilates closed string loops around plaquette p</li>
        <li><strong>Effect:</strong> Favors superposition of all closed loop configurations</li>
        <li><strong>Interpretation:</strong> String loop condensation; "Higgs" term for emergent gauge theory</li>
      </ul>

      <h4>Ground State</h4>
      <p>
        Ground state is equal-amplitude superposition of all closed-string configurations satisfying branching rules:
      </p>
      <div class="equation">
        |Ψ_0⟩ = ∑_{closed strings} |configuration⟩
      </div>
      <p>
        This is a string-net condensate—quantum liquid of condensed string loops.
      </p>
    </div>

    <h2>Emergent Gauge Theory</h2>

    <h3>Gauge Redundancy from String Condensation</h3>

    <div class="info-box">
      <h3>How Gauge Symmetry Emerges</h3>

      <h4>String Loop Condensation</h4>
      <ul>
        <li><strong>Condensed loops:</strong> Closed string loops have zero energy; proliferate in ground state</li>
        <li><strong>Gauge redundancy:</strong> Adding/removing closed loops doesn't change physical state (different string configurations = same physical state)</li>
        <li><strong>Local gauge transformation:</strong> Creating small loop around plaquette = gauge transformation</li>
        <li><strong>Emergent gauge group:</strong> Structure of string fusion rules determines gauge group (U(1), SU(2), etc.)</li>
      </ul>

      <h4>Parallel to Conventional Gauge Theory</h4>
      <table>
        <thead>
          <tr>
            <th>String-Net Picture</th>
            <th>Gauge Theory Picture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>String configurations on links</td>
            <td>Gauge field A_μ on links</td>
          </tr>
          <tr>
            <td>Closed string loops</td>
            <td>Gauge transformations</td>
          </tr>
          <tr>
            <td>String fusion rules</td>
            <td>Gauge group structure</td>
          </tr>
          <tr>
            <td>String endpoints</td>
            <td>Charged matter (sources)</td>
          </tr>
          <tr>
            <td>Branching point excitations</td>
            <td>Magnetic flux excitations</td>
          </tr>
          <tr>
            <td>Open string creating operators</td>
            <td>Wilson lines</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Emergent Photons and Gauge Bosons</h3>

    <div class="highlight-box">
      <h4>Massless Gauge Bosons from Gapless Excitations</h4>

      <h5>Low-Energy Effective Theory</h5>
      <p>
        In long-wavelength, low-energy limit, string-net liquid is described by gauge theory:
      </p>
      <div class="equation">
        L_eff = -(1/4g²) F_{μν} F^{μν} + ...
      </div>
      <p>
        where F_{μν} = ∂_μ A_ν - ∂_ν A_μ is field strength of emergent gauge field.
      </p>

      <h5>Photon as Emergent Quasiparticle</h5>
      <ul>
        <li><strong>Origin:</strong> Gapless collective excitation of string-net condensate</li>
        <li><strong>Properties:</strong>
          <ul>
            <li>Massless (gapless spectrum)</li>
            <li>Spin-1 (transverse modes in 3D)</li>
            <li>Speed of light c determined by microscopic parameters (lattice spacing, coupling constants)</li>
            <li>Gauge coupling g determined by string-net details</li>
          </ul>
        </li>
        <li><strong>Remarkble fact:</strong> Photon is not fundamental but collective mode of underlying qubit lattice!</li>
      </ul>

      <h5>Maxwell's Equations Emerge</h5>
      <p>
        In continuum limit, emergent gauge field satisfies Maxwell's equations:
      </p>
      <div class="equation">
        ∇ · <strong>E</strong> = ρ/ε_0
        <br>
        ∇ × <strong>B</strong> - (1/c²) ∂<strong>E</strong>/∂t = μ_0 <strong>J</strong>
        <br>
        ∇ · <strong>B</strong> = 0
        <br>
        ∇ × <strong>E</strong> + ∂<strong>B</strong>/∂t = 0
      </div>
      <p>
        <strong>Profound implication:</strong> Electromagnetism emerges from quantum lattice model—not fundamental!
      </p>
    </div>

    <h2>Emergent Fermions from Bosonic Qubits</h2>

    <h3>String Endpoints Carry Fermionic Statistics</h3>

    <div class="info-box">
      <h3>How Fermions Emerge from Bosons</h3>

      <h4>String Endpoint Excitations</h4>
      <ul>
        <li><strong>Creation:</strong> Apply open string operator; creates excitations at endpoints</li>
        <li><strong>Charge:</strong> Endpoints carry "charges" under emergent gauge symmetry</li>
        <li><strong>Dynamics:</strong> Endpoints can move by extending/contracting strings</li>
      </ul>

      <h4>Statistical Transmutation</h4>
      <p>
        Remarkably, string endpoints can exhibit fermionic statistics despite bosonic microscopic constituents:
      </p>
      <ul>
        <li><strong>Mechanism:</strong> Exchange of two endpoints involves dragging string around; picks up phase from Aharonov-Bohm effect with condensed background strings</li>
        <li><strong>Phase accumulation:</strong> Phase = π for appropriate string-net models</li>
        <li><strong>Result:</strong> |ψ⟩ → -|ψ⟩ under particle exchange (Fermi statistics!)</li>
        <li><strong>Key insight:</strong> Fermi statistics emerge from topology of string exchange in 2D/3D, not from fundamental nature of constituents</li>
      </ul>

      <h4>Emergent Electrons</h4>
      <p>
        Certain string-net models produce excitations with properties of electrons:
      </p>
      <ul>
        <li>Fermionic statistics ✓</li>
        <li>Electric charge (under emergent U(1) gauge field) ✓</li>
        <li>Spin-1/2 (from internal string degrees of freedom) ✓</li>
        <li>Dirac spectrum E = ±cp (at low energies, depending on model details) ✓</li>
      </ul>
      <p>
        <strong>Radical conclusion:</strong> Electrons may be emergent quasiparticles, not fundamental entities!
      </p>
    </div>

    <h3>Chiral Fermions and Quantum Hall Effect</h3>

    <div class="highlight-box">
      <h4>Chiral Edge States</h4>
      <p>
        Certain string-net models on surfaces with boundary exhibit chiral edge modes:
      </p>
      <ul>
        <li><strong>Edge strings:</strong> Open strings confined to boundary</li>
        <li><strong>Chirality:</strong> Strings propagate unidirectionally along edge (clockwise or counterclockwise)</li>
        <li><strong>Robustness:</strong> Protected by topology; cannot backscatter</li>
        <li><strong>Velocity:</strong> v = c (speed of emergent light)</li>
      </ul>

      <h4>Connection to Quantum Hall States</h4>
      <ul>
        <li>Fractional quantum Hall states are string-net liquids with specific fusion rules</li>
        <li>Filling fraction ν determines string-net structure</li>
        <li>Anyonic quasiparticles (fractional charge, fractional statistics) are string excitations</li>
        <li>Chiral edge modes are edge strings</li>
      </ul>

      <p><strong>Example: ν = 1/3 Laughlin state</strong></p>
      <ul>
        <li>String-net with Z_3 fusion rules</li>
        <li>Three types of quasiparticles with charges 0, e/3, 2e/3</li>
        <li>Fractional statistics: θ = 2π/3 (one-third of Fermi statistics)</li>
      </ul>
    </div>

    <h2>Unification of Light and Matter</h2>

    <h3>Same Origin, Different Excitations</h3>

    <div class="comparison-box">
      <h3>Photons and Electrons from String-Nets</h3>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Photons (Gauge Bosons)</th>
            <th>Electrons (Fermions)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Origin</td>
            <td>Collective oscillations of condensed closed strings</td>
            <td>Endpoints of open strings</td>
          </tr>
          <tr>
            <td>Gauge charge</td>
            <td>Zero (neutral)</td>
            <td>Non-zero (charged)</td>
          </tr>
          <tr>
            <td>Statistics</td>
            <td>Bosonic (spin-1)</td>
            <td>Fermionic (spin-1/2)</td>
          </tr>
          <tr>
            <td>Mass</td>
            <td>Zero (gapless mode)</td>
            <td>Can be zero or nonzero (depends on model)</td>
          </tr>
          <tr>
            <td>Interactions</td>
            <td>Mediate gauge force</td>
            <td>Couple to gauge field (charged)</td>
          </tr>
          <tr>
            <td>Lattice picture</td>
            <td>Smooth fluctuations of string field</td>
            <td>Localized string defects</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Unification:</strong> Both photons and electrons are different excitation modes of same underlying string-net condensate—unified at qubit level!</p>
    </div>

    <h3>Implications for Fundamental Physics</h3>

    <div class="info-box">
      <h3>Rethinking "Elementary" Particles</h3>

      <h4>Paradigm Shift</h4>
      <ul>
        <li><strong>Traditional view:</strong> Photons, electrons, quarks are fundamental, irreducible entities</li>
        <li><strong>String-net view:</strong> These "elementary" particles are collective excitations of qubit lattice</li>
        <li><strong>Analogy:</strong> Just as phonons (sound waves) are emergent in crystals, photons might be emergent in vacuum</li>
      </ul>

      <h4>What Is Fundamental?</h4>
      <ul>
        <li><strong>Qubits:</strong> Elementary degrees of freedom</li>
        <li><strong>Entanglement patterns:</strong> Organizational principle (long-range entanglement → topological order)</li>
        <li><strong>Gauge theories:</strong> Emergent from string condensation</li>
        <li><strong>Particles:</strong> Emergent excitations (quasiparticles)</li>
        <li><strong>Spacetime:</strong> Possibly emergent from entanglement structure (holographic principle, ER=EPR)</li>
      </ul>

      <h4>Questions Raised</h4>
      <ul>
        <li>Is the Standard Model effective field theory of deeper qubit lattice?</li>
        <li>Are quarks and leptons also emergent (string endpoints in 3+1 D)?</li>
        <li>Can gravity emerge from quantum entanglement (AdS/CFT suggests yes)?</li>
        <li>What determines lattice spacing (Planck scale ~10⁻³⁵ m)?</li>
        <li>Is there experimental evidence for emergence of Standard Model?</li>
      </ul>
    </div>

    <h2>Experimental Realizations and Signatures</h2>

    <h3>Quantum Simulators</h3>

    <div class="highlight-box">
      <h4>Creating String-Net States in the Lab</h4>

      <h5>Platforms</h5>
      <ul>
        <li><strong>Cold atoms in optical lattices:</strong> Programmable Hamiltonians with local interactions</li>
        <li><strong>Rydberg atom arrays:</strong> Reconfigurable lattice geometries; strong interactions</li>
        <li><strong>Superconducting qubits:</strong> High-fidelity gates; medium-scale quantum processors (50-100 qubits)</li>
        <li><strong>Trapped ions:</strong> High coherence; long-range interactions</li>
        <li><strong>Photonic systems:</strong> Natural for studying gauge theories and lattice models</li>
      </ul>

      <h5>Observables</h5>
      <ul>
        <li><strong>Topological entanglement entropy:</strong> Measure S_A to detect long-range entanglement</li>
        <li><strong>Anyonic braiding:</strong> Exchange quasiparticles; measure phase (non-Abelian statistics)</li>
        <li><strong>Edge state transport:</strong> Probe chiral edge modes</li>
        <li><strong>String operators:</strong> Measure expectation values of Wilson loops</li>
        <li><strong>Ground state degeneracy:</strong> Detect topological degeneracy on non-trivial topology</li>
      </ul>
    </div>

    <h3>Condensed Matter Realizations</h3>

    <div class="info-box">
      <h3>Materials Hosting String-Net Physics</h3>

      <h4>Quantum Spin Liquids</h4>
      <ul>
        <li><strong>Candidate materials:</strong> Herbertsmithite (ZnCu₃(OH)₆Cl₂), κ-(ET)₂Cu₂(CN)₃</li>
        <li><strong>Signatures:</strong> No magnetic order down to T → 0; spin liquid with fractionalized excitations</li>
        <li><strong>Emergent gauge fields:</strong> Spinons (spin-1/2 excitations) coupled to emergent U(1) or Z_2 gauge field</li>
        <li><strong>Status:</strong> Experimental evidence suggestive but not yet conclusive</li>
      </ul>

      <h4>Fractional Quantum Hall States</h4>
      <ul>
        <li><strong>Realization:</strong> 2D electron gas in strong magnetic field (GaAs heterostructures)</li>
        <li><strong>Filling fractions:</strong> ν = 1/3, 2/5, 5/2, ... (Laughlin, Jain, Moore-Read states)</li>
        <li><strong>Emergent features:</strong> Fractional charge (e/3, e/5), anyonic statistics, chiral edge modes</li>
        <li><strong>String-net description:</strong> Each FQHE state corresponds to specific string-net model</li>
      </ul>

      <h4>Topological Insulators</h4>
      <ul>
        <li><strong>Materials:</strong> Bi₂Se₃, Bi₂Te₃, HgTe quantum wells</li>
        <li><strong>Emergent features:</strong> Dirac fermion surface states, topological protection</li>
        <li><strong>Connection:</strong> Surface states can be viewed as edge modes of 3D string-net liquid</li>
      </ul>
    </div>

    <h2>Challenges and Open Questions</h2>

    <div class="comparison-box">
      <h3>Unresolved Issues</h3>

      <h4>Theoretical Challenges</h4>
      <ul>
        <li><strong>3+1 dimensions:</strong> Most work in 2+1D; 3+1D string-net models less developed</li>
        <li><strong>Chiral fermions:</strong> Obtaining chiral fermions (like Standard Model) from lattice models difficult (fermion doubling problem)</li>
        <li><strong>Gauge group:</strong> Standard Model has SU(3) × SU(2) × U(1); constructing this from string-nets non-trivial</li>
        <li><strong>Three generations:</strong> Why three generations of quarks/leptons? String-net explanation unclear</li>
        <li><strong>Hierarchy problem:</strong> Planck scale vs. electroweak scale; does emergence help?</li>
      </ul>

      <h4>Experimental Challenges</h4>
      <ul>
        <li><strong>Energy scale:</strong> If Standard Model is emergent, lattice scale likely Planck scale (~10¹⁹ GeV)—far beyond LHC energies</li>
        <li><strong>Signatures:</strong> What experimental signatures would distinguish emergent vs. fundamental photon/electron?</li>
        <li><strong>Lorentz violation:</strong> Lattice breaks Lorentz invariance; why is emergent Lorentz symmetry so precise?</li>
        <li><strong>Universality:</strong> Need extremely fine-tuned lattice model for emergent physics to match Standard Model precisely</li>
      </ul>

      <h4>Conceptual Questions</h4>
      <ul>
        <li><strong>What is the "ether"?</strong> If photons emerge from qubits, what are qubits? Infinite regress?</li>
        <li><strong>Initial conditions:</strong> What determines string-net ground state (analogous to "why this vacuum"?)</li>
        <li><strong>Quantum gravity:</strong> Does gravity also emerge? How does emergent spacetime connect to string-nets?</li>
      </ul>
    </div>

    <p>
      String-net condensation provides a concrete, calculable example of how gauge theories and fermions can emerge from simple qubit lattices. While speculative as a theory of fundamental physics, it demonstrates that "It from Qubit" is not mere philosophy but a realizable physical framework. The next section explores how our understanding of light and gauge theories has evolved, setting the stage for fully emergent descriptions.
    </p>

    <div class="navigation-info">
      <p><strong>Next:</strong> Section 11.3.4 examines the evolving views on light and gauge theories through history.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_11_3_3'
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

h5 {
  color: #78909c;
  margin-top: 15px;
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
