<template>
  <div class="section-content">
    <h1>6.9.2 Local and Topological Excitations</h1>

    <p>A fundamental distinction in topologically ordered systems is between local excitations—which can be created by spatially localized operators—and topological excitations (anyons)—which require extended string operators for their creation. This distinction reflects the deep connection between the locality of operators and the nature of quantum excitations, and has profound implications for the stability and utility of topological phases for quantum information processing.</p>

    <h2>Definition and Basic Concepts</h2>

    <div class="info-box">
      <h3>What is a Local Excitation?</h3>

      <p><strong>Operational definition:</strong></p>
      <div class="equation">
        |local excitation⟩ = O(r)|ground state⟩
      </div>
      <ul>
        <li>O(r): Operator with support on finite region around r</li>
        <li>Size of support: Independent of system size L</li>
        <li>Can be created by applying local perturbation</li>
      </ul>

      <p><strong>Energy scale:</strong></p>
      <ul>
        <li>Typical energy: E ~ J (Hamiltonian coupling constant)</li>
        <li>Gap closes only at phase transition</li>
        <li>Not necessarily small compared to system size</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Spin flip in ferromagnet:</strong> σ^x|↑↑...↑⟩ creates local spin-down</li>
        <li><strong>Phonons in crystal:</strong> Lattice vibrations</li>
        <li><strong>Magnons in ordered magnets:</strong> Spin wave excitations</li>
        <li><strong>High-energy excitations in toric code:</strong> Violations of multiple stabilizers</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h3>What is a Topological Excitation?</h3>

      <p><strong>Operational definition:</strong></p>
      <div class="equation">
        |topological excitation pair⟩ = W(C)|ground state⟩
      </div>
      <ul>
        <li>W(C): String operator along curve C connecting two points</li>
        <li>Cannot be created by any local operator</li>
        <li>Always created in pairs (or from boundary)</li>
        <li>Endpoints of string = anyons</li>
      </ul>

      <p><strong>Key properties:</strong></p>
      <ul>
        <li><strong>Non-local creation:</strong> Requires operator extending across system</li>
        <li><strong>Pair creation:</strong> Cannot violate topological charge conservation</li>
        <li><strong>Fractionalization:</strong> May carry fractional quantum numbers</li>
        <li><strong>Anyonic statistics:</strong> Exchange phase neither 0 nor π</li>
        <li><strong>Topological protection:</strong> Properties robust against local perturbations</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Toric code:</strong> e, m, ε particles</li>
        <li><strong>FQHE:</strong> Quasiholes with charge e/m</li>
        <li><strong>String-net models:</strong> String endpoints</li>
        <li><strong>Kitaev honeycomb:</strong> Ising anyons (in certain phases)</li>
      </ul>
    </div>

    <h2>Toric Code: Detailed Example</h2>

    <div class="highlight-box">
      <h3>Local vs Topological in Z₂ Model</h3>

      <p><strong>Hamiltonian reminder:</strong></p>
      <div class="equation">
        H = -J_s Σ_s A_s - J_p Σ_p B_p
      </div>
      <ul>
        <li>A_s = ∏_{i∈star(s)} σ_i^x: Star operator</li>
        <li>B_p = ∏_{i∈∂p} σ_i^z: Plaquette operator</li>
      </ul>

      <p><strong>Ground state:</strong></p>
      <div class="equation">
        A_s|GS⟩ = |GS⟩,  B_p|GS⟩ = |GS⟩ for all s, p
      </div>

      <p><strong>Topological excitations (low-energy):</strong></p>

      <p><strong>1. e-particle (electric charge):</strong></p>
      <div class="equation">
        A_s|e at s⟩ = -|e at s⟩
      </div>
      <ul>
        <li>Violates star operator at vertex s</li>
        <li>Energy cost: 2J_s (flips one stabilizer)</li>
        <li>Created by Z-string: ∏_{i∈C} σ_i^z</li>
        <li>String endpoints are e-particles</li>
      </ul>

      <p><strong>2. m-particle (magnetic flux):</strong></p>
      <div class="equation">
        B_p|m at p⟩ = -|m at p⟩
      </div>
      <ul>
        <li>Violates plaquette operator at face p</li>
        <li>Energy cost: 2J_p</li>
        <li>Created by X-string: ∏_{i∈C} σ_i^x</li>
        <li>String endpoints are m-particles</li>
      </ul>

      <p><strong>3. ε-particle (dyon, e+m composite):</strong></p>
      <div class="equation">
        A_s|ε⟩ = -|ε⟩,  B_p|ε⟩ = -|ε⟩
      </div>
      <ul>
        <li>Violates both star and plaquette</li>
        <li>Energy cost: 2J_s + 2J_p</li>
        <li>Created by Y-string: ∏_{i∈C} σ_i^y = ∏_{i∈C} iσ_i^xσ_i^z</li>
        <li>Bound state of e and m</li>
      </ul>

      <p><strong>Local excitations (high-energy):</strong></p>
      <ul>
        <li>Multiple stabilizer violations at single location</li>
        <li>Example: Flipping single spin σ_i^x|GS⟩ violates 2 stars + 2 plaquettes</li>
        <li>Energy cost: ~4J_s + 4J_p (much higher than topological)</li>
        <li>Can decay into pairs of topological excitations</li>
        <li>Not topologically protected</li>
      </ul>
    </div>

    <h2>String Operators and Non-Locality</h2>

    <div class="info-box">
      <h3>Why String Operators?</h3>

      <p><strong>Z-string creating e-particles:</strong></p>
      <div class="equation">
        W_Z(C) = ∏_{i∈C} σ_i^z
      </div>
      <ul>
        <li>C: Path connecting two vertices</li>
        <li>Effect on star operators:</li>
        <div class="equation">
          A_s → -A_s at endpoints, A_s → A_s elsewhere
        </div>
        <li>Creates two e-particles at endpoints of C</li>
      </ul>

      <p><strong>Why can't local operator create single anyon?</strong></p>
      <ul>
        <li>Local operator O(r) has finite support region R</li>
        <li>Commutes with all stabilizers outside R</li>
        <li>Can only flip stabilizers inside or touching R</li>
        <li>Number of violations has same parity as number created</li>
        <li>Single anyon = odd number of violations → impossible locally</li>
      </ul>

      <p><strong>Mathematical constraint:</strong></p>
      <div class="equation">
        ∏_s A_s = ∏_p B_p = 1 (global constraints)
      </div>
      <ul>
        <li>Total e-charge must be even</li>
        <li>Total m-flux must be even</li>
        <li>Topological charge conservation</li>
      </ul>
    </div>

    <h2>Energy Scales and Gap Structure</h2>

    <div class="highlight-box">
      <h3>Different Types of Gaps</h3>

      <p><strong>Topological gap Δ_topo:</strong></p>
      <div class="equation">
        Δ_topo = min{2J_s, 2J_p}
      </div>
      <ul>
        <li>Energy to create topological excitation pair</li>
        <li>Protects topological order</li>
        <li>Experimental: Δ_topo/k_B ~ 1-100 K for FQHE</li>
      </ul>

      <p><strong>Local excitation gap Δ_local:</strong></p>
      <div class="equation">
        Δ_local ~ 4J (typical for single-spin flip)
      </div>
      <ul>
        <li>Higher than topological gap</li>
        <li>Local excitations can decay to topological pairs</li>
        <li>Not relevant for low-energy physics</li>
      </ul>

      <p><strong>Phase diagram:</strong></p>
      <ul>
        <li><strong>J_s, J_p > 0:</strong> Topologically ordered phase, Δ_topo > 0</li>
        <li><strong>J_s → 0:</strong> e-particles condense, m confined</li>
        <li><strong>J_p → 0:</strong> m-particles condense, e confined</li>
        <li>Phase transition when gap closes</li>
      </ul>
    </div>

    <h2>Detection and Measurement</h2>

    <div class="note-box">
      <h3>How to Detect Anyon Type</h3>

      <p><strong>Local measurements insufficient:</strong></p>
      <ul>
        <li>Anyons look identical under local probes</li>
        <li>Measuring σ_i^x, σ_i^y, σ_i^z at single site reveals nothing</li>
        <li>Even measuring all spins in bounded region can't determine anyon type</li>
      </ul>

      <p><strong>Wilson loop measurement:</strong></p>
      <div class="equation">
        ⟨W(C)⟩ = ⟨∏_{i∈C} σ_i^z⟩
      </div>
      <ul>
        <li>C: Loop surrounding region</li>
        <li>⟨W⟩ = +1 if no e-charge inside</li>
        <li>⟨W⟩ = -1 if odd number of e-charges inside</li>
        <li>Topological invariant: Independent of loop deformation</li>
      </ul>

      <p><strong>Experimental challenges:</strong></p>
      <ul>
        <li>Requires measuring non-local operators</li>
        <li>Need coherent access to entire loop</li>
        <li>Decoherence from environment</li>
        <li>Easier in quantum simulators (trapped ions, atoms)</li>
      </ul>
    </div>

    <h2>Superselection Sectors</h2>

    <div class="highlight-box">
      <h3>Quantum Sectors and Orthogonality</h3>

      <p><strong>Definition:</strong></p>
      <ul>
        <li>Superselection sector = subspace with definite topological charge</li>
        <li>Cannot create coherent superposition of different sectors</li>
        <li>Superselection rule: Enforced by locality</li>
      </ul>

      <p><strong>Mathematical formulation:</strong></p>
      <div class="equation">
        ℋ = ⊕_{anyon config} ℋ_{config}
      </div>
      <ul>
        <li>Hilbert space splits into orthogonal sectors</li>
        <li>Each sector labeled by anyon configuration</li>
        <li>No local operator mixes sectors</li>
      </ul>

      <p><strong>Example - forbidden superpositions:</strong></p>
      <div class="equation">
        |ψ⟩ = α|vacuum⟩ + β|two e-particles⟩ ✗
      </div>
      <ul>
        <li>Cannot be created by any physical process</li>
        <li>Local perturbations preserve sector</li>
        <li>Only string operators can change sector</li>
      </ul>

      <p><strong>Physical origin:</strong></p>
      <ul>
        <li>Anyons detected by Wilson loops extending to ∞</li>
        <li>Different sectors orthogonal in thermodynamic limit</li>
        <li>⟨vacuum|e-particle⟩ ~ e^{-cL} → 0 as L → ∞</li>
      </ul>

      <p><strong>Implications:</strong></p>
      <ul>
        <li>Anyon number conserved by local dynamics</li>
        <li>Topological quantum numbers are classical labels</li>
        <li>Measurement of one anyon doesn't affect distant anyon</li>
      </ul>
    </div>

    <h2>Comparison Table</h2>

    <div class="comparison-box">
      <h3>Local vs Topological Excitations</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Local Excitations</th>
          <th>Topological Excitations (Anyons)</th>
        </tr>
        <tr>
          <td><strong>Creation operator</strong></td>
          <td>O(r), finite support</td>
          <td>W(C), string operator</td>
        </tr>
        <tr>
          <td><strong>Number created</strong></td>
          <td>One or more</td>
          <td>Always pairs (or from boundary)</td>
        </tr>
        <tr>
          <td><strong>Energy cost</strong></td>
          <td>~J (typically higher)</td>
          <td>~J (topological gap)</td>
        </tr>
        <tr>
          <td><strong>Quantum numbers</strong></td>
          <td>Integer (charge, spin, etc.)</td>
          <td>Can be fractional</td>
        </tr>
        <tr>
          <td><strong>Statistics</strong></td>
          <td>Bosonic or fermionic</td>
          <td>Anyonic (θ ≠ 0, π)</td>
        </tr>
        <tr>
          <td><strong>Detection</strong></td>
          <td>Local measurement O(r)</td>
          <td>Wilson loop W(C)</td>
        </tr>
        <tr>
          <td><strong>Locality of properties</strong></td>
          <td>Locally visible</td>
          <td>Only non-locally distinguishable</td>
        </tr>
        <tr>
          <td><strong>Stability</strong></td>
          <td>Not topologically protected</td>
          <td>Topologically protected</td>
        </tr>
        <tr>
          <td><strong>Superselection</strong></td>
          <td>Can mix with ground state</td>
          <td>Orthogonal sector from vacuum</td>
        </tr>
        <tr>
          <td><strong>Example (toric code)</strong></td>
          <td>High-energy multi-stabilizer violation</td>
          <td>e, m, ε particles</td>
        </tr>
        <tr>
          <td><strong>Example (FQHE)</strong></td>
          <td>Inter-Landau-level excitations</td>
          <td>Quasiholes with Q = e/m</td>
        </tr>
      </table>
    </div>

    <h2>Operational Criterion</h2>

    <div class="info-box">
      <h3>How to Determine if Excitation is Topological</h3>

      <p><strong>Test 1: Local creation?</strong></p>
      <ul>
        <li>Can you create it with operator O(r) of bounded support?</li>
        <li>Yes → Local excitation</li>
        <li>No (requires string) → Topological excitation</li>
      </ul>

      <p><strong>Test 2: Single or pair creation?</strong></p>
      <ul>
        <li>Can you create just one without creating others?</li>
        <li>Yes → Likely local</li>
        <li>No (always pairs) → Topological</li>
      </ul>

      <p><strong>Test 3: Quantum numbers?</strong></p>
      <ul>
        <li>Integer charge, spin, etc. → Could be either</li>
        <li>Fractional quantum numbers → Definitely topological</li>
      </ul>

      <p><strong>Test 4: Statistics?</strong></p>
      <ul>
        <li>Bosonic or fermionic → Local excitation</li>
        <li>Anyonic (θ ≠ 0, π) → Topological excitation</li>
      </ul>

      <p><strong>Test 5: Robustness?</strong></p>
      <ul>
        <li>Properties change under local perturbations → Local</li>
        <li>Properties protected by gap → Topological</li>
      </ul>
    </div>

    <h2>Physical Implications</h2>

    <div class="highlight-box">
      <h3>Why This Distinction Matters</h3>

      <p><strong>For quantum information:</strong></p>
      <ul>
        <li><strong>Topological qubits:</strong> Encoded in anyon positions</li>
        <li><strong>Error correction:</strong> Local errors don't change anyon configuration</li>
        <li><strong>Fault tolerance:</strong> Anyonic properties protected by gap</li>
        <li><strong>Decoherence resistance:</strong> Local environment can't distinguish anyons</li>
      </ul>

      <p><strong>For phase transitions:</strong></p>
      <ul>
        <li><strong>Topological phase:</strong> Anyons deconfined (Δ_topo > 0)</li>
        <li><strong>Trivial phase:</strong> Anyons confined or condensed</li>
        <li><strong>Transition:</strong> Gap closing, anyon condensation</li>
      </ul>

      <p><strong>For experiments:</strong></p>
      <ul>
        <li><strong>Signature of topological order:</strong> Observation of anyons</li>
        <li><strong>Non-local correlations:</strong> Wilson loop measurements</li>
        <li><strong>Fractional charges:</strong> Shot noise in FQHE</li>
        <li><strong>Anyonic braiding:</strong> Interferometry experiments</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key distinctions between local and topological excitations:</strong></p>
      <ul>
        <li><strong>Creation:</strong> Local excitations created by O(r) with bounded support; topological excitations require string operators W(C)</li>
        <li><strong>Pairing:</strong> Topological excitations always created in pairs (or from boundary); local excitations can be created singly</li>
        <li><strong>Quantum numbers:</strong> Topological excitations can have fractional quantum numbers; local excitations have integer values</li>
        <li><strong>Statistics:</strong> Topological excitations are anyons with θ ≠ 0, π; local excitations are bosons or fermions</li>
        <li><strong>Detection:</strong> Topological excitations require non-local Wilson loop measurements; local excitations visible to local probes</li>
        <li><strong>Superselection:</strong> Different anyon configurations define orthogonal quantum sectors; no coherent superposition possible</li>
        <li><strong>Protection:</strong> Topological properties robust against local perturbations; local excitations not protected</li>
        <li><strong>Energy scales:</strong> Both have energy ~ J, but origin and behavior differ</li>
      </ul>

      <p><strong>Physical significance:</strong> The distinction between local and topological excitations is fundamental to understanding topological order, its stability, and its potential applications in fault-tolerant quantum computation.</p>

      <p><strong>Next:</strong> Section 6.9.3 details the three types of quasiparticles in Z₂ topological order (toric code).</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_9_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
