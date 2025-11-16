<template>
  <div class="section-content">
    <h1>11.3.2 Principle of Emergence</h1>

    <p>
      The principle of emergence states that complex physical phenomena, including new particles, forces, and even fundamental theories, can arise from simple microscopic systems through collective quantum behavior. In the context of quantum matter, this principle suggests that many phenomena we consider "fundamental"—gauge symmetries, elementary particles, spacetime geometry—may actually be emergent properties of underlying quantum systems. This section explores the mechanisms and principles by which emergence occurs in quantum many-body systems, emphasizing the central role of quantum entanglement and the organizational principles that govern collective behavior.
    </p>

    <h2>Mechanisms of Emergence in Quantum Systems</h2>

    <h3>Symmetry Breaking and Order Parameters</h3>

    <div class="info-box">
      <h3>Classical Emergence Through Symmetry Breaking</h3>
      <p>
        The most familiar mechanism of emergence is spontaneous symmetry breaking:
      </p>

      <h4>Landau's Paradigm</h4>
      <ul>
        <li><strong>High-temperature phase:</strong> Symmetric, disordered state</li>
        <li><strong>Phase transition:</strong> At critical temperature T_c, system spontaneously breaks symmetry</li>
        <li><strong>Low-temperature phase:</strong> Ordered state with non-zero order parameter</li>
        <li><strong>Order parameter:</strong> Quantity that is zero in symmetric phase, nonzero in broken symmetry phase</li>
      </ul>

      <h4>Examples</h4>
      <table>
        <thead>
          <tr>
            <th>System</th>
            <th>Symmetry</th>
            <th>Order Parameter</th>
            <th>Emergent Phenomena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ferromagnet</td>
            <td>Spin rotation</td>
            <td>Magnetization <strong>M</strong></td>
            <td>Domains, magnons, hysteresis</td>
          </tr>
          <tr>
            <td>Superconductor</td>
            <td>U(1) gauge</td>
            <td>Cooper pair amplitude Δ</td>
            <td>Meissner effect, flux quantization, Josephson effect</td>
          </tr>
          <tr>
            <td>Crystal</td>
            <td>Translation</td>
            <td>Density modulation ρ(x)</td>
            <td>Phonons, Bragg diffraction, elastic properties</td>
          </tr>
          <tr>
            <td>Nematic liquid crystal</td>
            <td>Rotation</td>
            <td>Director field <strong>n</strong></td>
            <td>Optical anisotropy, topological defects</td>
          </tr>
        </tbody>
      </table>

      <h4>Emergent Collective Modes</h4>
      <p>
        Symmetry breaking leads to Goldstone modes—gapless excitations associated with broken continuous symmetries:
      </p>
      <ul>
        <li><strong>Magnons:</strong> Spin waves in ferromagnets (broken SU(2) rotation symmetry)</li>
        <li><strong>Phonons:</strong> Lattice vibrations in crystals (broken translation symmetry)</li>
        <li><strong>Photon (emergent):</strong> In superconductor, Anderson-Higgs mechanism gives photon-like mode (broken U(1) gauge symmetry)</li>
      </ul>
    </div>

    <h3>Quantum Entanglement as Organizational Principle</h3>

    <div class="highlight-box">
      <h4>Beyond Symmetry Breaking: Topological Order</h4>
      <p>
        Topological phases represent a fundamentally new type of quantum emergence that <em>cannot</em> be described by Landau's symmetry-breaking paradigm:
      </p>

      <h5>Key Distinction</h5>
      <ul>
        <li><strong>Symmetry-breaking phases:</strong> Characterized by local order parameter; short-range entanglement</li>
        <li><strong>Topologically ordered phases:</strong> No local order parameter; long-range entanglement pattern</li>
      </ul>

      <h5>Topological Order Characteristics</h5>
      <ul>
        <li><strong>Ground state degeneracy:</strong> Multiple degenerate ground states on surfaces with non-trivial topology (e.g., torus)</li>
        <li><strong>Anyonic excitations:</strong> Quasiparticles with fractional statistics (neither bosons nor fermions)</li>
        <li><strong>Topological entanglement entropy:</strong> Universal constant γ in entanglement entropy: S_A = α|∂A| - γ</li>
        <li><strong>Edge states:</strong> Protected gapless modes on boundaries</li>
        <li><strong>Robustness:</strong> Properties insensitive to local perturbations</li>
      </ul>

      <p><strong>Crucial point:</strong> These properties emerge from long-range entanglement patterns, not from symmetry breaking. Entanglement structure is the organizational principle.</p>
    </div>

    <h3>Quantum Phase Transitions Without Symmetry Breaking</h3>

    <div class="info-box">
      <h3>Entanglement-Based Phase Transitions</h3>
      <p>
        Transitions between topologically distinct phases involve qualitative changes in entanglement structure:
      </p>

      <h4>Example: Toric Code in Magnetic Field</h4>
      <ul>
        <li><strong>Zero field:</strong> Topologically ordered phase with long-range entanglement</li>
        <li><strong>Small field:</strong> Topological order persists; excitations gain finite energy</li>
        <li><strong>Critical field:</strong> Quantum phase transition; topology destroyed</li>
        <li><strong>Large field:</strong> Trivial paramagnetic phase; short-range entanglement</li>
      </ul>

      <p><strong>Order parameter:</strong> No local order parameter distinguishes phases. Instead, use non-local topological invariants or entanglement measures.</p>

      <h4>String Order Parameters</h4>
      <p>
        For some phases (SPT phases), non-local string operators act as order parameters:
      </p>
      <div class="equation">
        O_string = σ_z^{(i)} ∏_{j=i+1}^{k-1} σ_x^{(j)} σ_z^{(k)}
      </div>
      <p>
        Non-zero expectation value ⟨O_string⟩ ≠ 0 characterizes SPT phase; vanishes in trivial phase.
      </p>
    </div>

    <h2>Principles Governing Emergence</h2>

    <h3>Universality and Renormalization Group</h3>

    <div class="highlight-box">
      <h4>Why Emergence Is Robust</h4>
      <p>
        Universality explains why emergent phenomena are insensitive to microscopic details:
      </p>

      <h5>Universality Classes</h5>
      <ul>
        <li><strong>Definition:</strong> Set of systems with same critical behavior (same critical exponents, scaling functions)</li>
        <li><strong>Determined by:</strong> Spatial dimension, symmetry, range of interactions (not specific microscopic Hamiltonian)</li>
        <li><strong>Examples:</strong>
          <ul>
            <li>2D Ising model (Z_2 symmetry) same universality class as liquid-gas transition, binary alloys, uniaxial ferromagnets</li>
            <li>3D XY model (U(1) symmetry) same as superfluid He-4 transition</li>
          </ul>
        </li>
      </ul>

      <h5>RG Flow Picture</h5>
      <ul>
        <li><strong>UV (microscopic):</strong> Many different Hamiltonians with different microscopic parameters</li>
        <li><strong>RG flow:</strong> Coarse-graining flows toward IR fixed points</li>
        <li><strong>IR (macroscopic):</strong> All systems in same universality class flow to same fixed point → identical macroscopic physics</li>
        <li><strong>Irrelevant operators:</strong> Microscopic details that flow away (don't affect IR physics)</li>
        <li><strong>Relevant operators:</strong> Perturbations that change which fixed point you reach</li>
      </ul>

      <p><strong>Implication:</strong> Emergent physics is "more fundamental" than microscopic details for macroscopic phenomena—autonomy of scales.</p>
    </div>

    <h3>Effective Field Theories</h3>

    <div class="info-box">
      <h3>Low-Energy Effective Descriptions</h3>
      <p>
        Rather than solving microscopic theory exactly, construct effective theory valid at low energies/long distances:
      </p>

      <h4>Procedure</h4>
      <ol>
        <li><strong>Identify relevant degrees of freedom:</strong> Which modes are active at low energies?</li>
        <li><strong>Determine symmetries:</strong> What symmetries does low-energy theory respect?</li>
        <li><strong>Write most general Lagrangian:</strong> Include all terms consistent with symmetries</li>
        <li><strong>Organize by irrelevance:</strong> Higher-dimension operators suppressed by powers of (energy/cutoff)</li>
      </ol>

      <h4>Examples</h4>
      <ul>
        <li><strong>Ferromagnet:</strong> Heisenberg spin model → O(3) non-linear sigma model for spin waves</li>
        <li><strong>Superfluid:</strong> Bosons → U(1) Goldstone mode (phase of order parameter)</li>
        <li><strong>Quantum Hall:</strong> 2D electrons in magnetic field → Chern-Simons gauge theory</li>
        <li><strong>Topological insulator:</strong> Electron system → Dirac fermion surface states</li>
      </ul>

      <p><strong>Power of effective theories:</strong> Describe low-energy physics without solving microscopic theory; often simpler and more insightful.</p>
    </div>

    <h3>Protected Subspaces and Decoherence-Free Subspaces</h3>

    <div class="highlight-box">
      <h4>Robustness Through Protection Mechanisms</h4>
      <p>
        Emergent phenomena can be protected from perturbations by various mechanisms:
      </p>

      <h5>1. Energy Gap Protection</h5>
      <ul>
        <li><strong>Mechanism:</strong> Excitations above ground state cost energy Δ</li>
        <li><strong>Result:</strong> At T << Δ/k_B, thermal fluctuations cannot excite system; ground state properties robust</li>
        <li><strong>Example:</strong> Topological order in toric code survives local perturbations up to strength ~ Δ</li>
      </ul>

      <h5>2. Topological Protection</h5>
      <ul>
        <li><strong>Mechanism:</strong> Information encoded non-locally in topological degrees of freedom</li>
        <li><strong>Result:</strong> Local operators cannot change topological quantum numbers; immune to local noise</li>
        <li><strong>Example:</strong> Toric code ground state degeneracy on torus; cannot be lifted by local perturbations</li>
      </ul>

      <h5>3. Symmetry Protection</h5>
      <ul>
        <li><strong>Mechanism:</strong> Certain properties protected by unbroken symmetries</li>
        <li><strong>Result:</strong> As long as symmetry preserved, protected properties remain</li>
        <li><strong>Example:</strong> SPT phases—edge states protected by symmetry; disappear if symmetry broken</li>
      </ul>

      <h5>4. Many-Body Localization</h5>
      <ul>
        <li><strong>Mechanism:</strong> Strong disorder prevents thermalization</li>
        <li><strong>Result:</strong> System retains memory of initial conditions indefinitely; emergent integrability</li>
        <li><strong>Example:</strong> MBL phases with extensive local integrals of motion</li>
      </ul>
    </div>

    <h2>Criteria for Identifying Emergent Phenomena</h2>

    <div class="comparison-box">
      <h3>How to Recognize Emergence</h3>
      <p>
        What makes a phenomenon "emergent"? Several criteria have been proposed:
      </p>

      <h4>1. Novelty</h4>
      <ul>
        <li>Properties/particles/laws absent in microscopic theory</li>
        <li>Example: Anyons in fractional quantum Hall—fractional charge, fractional statistics have no precursor in individual electrons</li>
      </ul>

      <h4>2. Autonomy</h4>
      <ul>
        <li>High-level description independent of low-level details</li>
        <li>Example: Hydrodynamics same whether fluid is water, oil, or air; molecular details irrelevant</li>
      </ul>

      <h4>3. Universality</h4>
      <ul>
        <li>Same emergent behavior from diverse microscopic realizations</li>
        <li>Example: Ising critical exponents identical for magnets, fluids, binary alloys</li>
      </ul>

      <h4>4. Irreducibility</h4>
      <ul>
        <li>Difficult or impossible to predict from microscopic theory without additional conceptual insight</li>
        <li>Example: BCS superconductivity not obvious from Schrödinger equation; required new concept (Cooper pairing)</li>
      </ul>

      <h4>5. Organizational Hierarchy</h4>
      <ul>
        <li>Different scales have different relevant degrees of freedom and laws</li>
        <li>Example: Nuclear physics → atomic physics → chemistry → biology; each level has autonomy</li>
      </ul>
    </div>

    <h2>Quantum Information View of Emergence</h2>

    <h3>Entanglement Patterns as Organizational Principle</h3>

    <div class="info-box">
      <h3>Classifying Phases by Entanglement</h3>
      <p>
        Modern perspective: Quantum phases distinguished by pattern and structure of quantum entanglement:
      </p>

      <h4>Short-Range Entangled (SRE) States</h4>
      <ul>
        <li><strong>Definition:</strong> Can be transformed to product state by local unitary quantum circuit of finite depth</li>
        <li><strong>Entanglement entropy:</strong> Satisfies area law: S_A ~ |∂A|</li>
        <li><strong>Examples:</strong>
          <ul>
            <li>Product states</li>
            <li>Symmetry-breaking states (ferromagnets, crystals, superfluids)</li>
            <li>Symmetry-protected topological (SPT) states</li>
          </ul>
        </li>
        <li><strong>Classification:</strong> SRE states classified by symmetry group G and cohomology H^{d+1}(G, U(1))</li>
      </ul>

      <h4>Long-Range Entangled (LRE) States</h4>
      <ul>
        <li><strong>Definition:</strong> Cannot be transformed to product state by any local quantum circuit</li>
        <li><strong>Entanglement entropy:</strong> S_A = α|∂A| - γ + ... where γ is topological entanglement entropy</li>
        <li><strong>Examples:</strong>
          <ul>
            <li>Fractional quantum Hall states</li>
            <li>Chiral spin liquids</li>
            <li>Z_2 topologically ordered states (toric code)</li>
          </ul>
        </li>
        <li><strong>Classification:</strong> LRE states classified by anyon types, fusion rules, braiding statistics (topological data)</li>
      </ul>

      <p><strong>Key insight:</strong> Nature of emergent phenomena determined by entanglement structure—SRE vs. LRE fundamentally different physics.</p>
    </div>

    <h3>Quantum Circuit Complexity and Emergence</h3>

    <div class="highlight-box">
      <h4>Complexity as Measure of Emergence</h4>
      <p>
        Quantum circuit depth required to prepare state from product state measures "degree of entanglement":
      </p>

      <ul>
        <li><strong>Shallow circuits (depth O(1)):</strong> SRE states; "simple" states</li>
        <li><strong>Polynomial depth circuits:</strong> Can create correlations over entire system; includes SPT states</li>
        <li><strong>Impossible with local circuits:</strong> LRE states; intrinsically complex entanglement that cannot be built up locally</li>
      </ul>

      <p><strong>Implication:</strong> LRE phases are fundamentally "emergent"—they require global quantum coherence that cannot be constructed locally, representing genuinely new collective quantum phenomena.</p>
    </div>

    <h2>Emergence as a Creative Principle in Physics</h2>

    <div class="info-box">
      <h3>Emergence Generates New Physics</h3>
      <p>
        Rather than just "many-body effects," emergence creates genuinely novel physical structures:
      </p>

      <ul>
        <li><strong>New particles:</strong> Quasiparticles (magnons, phonons, anyons) are "real" excitations, not just mathematical constructs</li>
        <li><strong>New forces:</strong> Emergent gauge theories (photons in spin liquids) are effective but fully valid descriptions at their scales</li>
        <li><strong>New symmetries:</strong> Emergent symmetries (e.g., Lorentz invariance at critical points) absent in microscopic theory</li>
        <li><strong>New spaces:</strong> Emergent dimensions (holographic bulk from boundary), emergent spacetime from entanglement</li>
        <li><strong>New laws:</strong> Effective field theories autonomous from microscopic details; "equally fundamental" at their scale</li>
      </ul>

      <p><strong>Philosophical point:</strong> Emergence is not approximation or convenience—it reveals genuine strata of physical reality, each with its own ontology and laws.</p>
    </div>

    <p>
      The principle of emergence, especially when combined with quantum entanglement as the organizational principle, provides a powerful framework for understanding how complex physics arises from simple quantum systems. This sets the stage for the remarkable proposal explored in the next section: that even fundamental forces like electromagnetism and particles like photons and electrons might themselves be emergent phenomena arising from condensed states of qubits.
    </p>

    <div class="navigation-info">
      <p><strong>Next:</strong> Section 11.3.3 explores string-net liquid theory, showing how photons and electrons can emerge from qubits.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_11_3_2'
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
