<template>
  <div class="section-content">
    <h1>6.3.1 What is 'Topological Ground State Degeneracy'</h1>

    <p>Topological ground state degeneracy (GSD) is one of the most profound and characteristic features of topological order. Unlike the familiar degeneracies from symmetry breaking or accidental level crossings, topological degeneracy is intrinsically tied to the global topology of the space on which the system resides. This degeneracy cannot be lifted by any local perturbation, no matter how strong, and persists in the exact thermodynamic limit—providing both a robust signature of topological order and a foundation for topological quantum information storage.</p>

    <h2>Definition and Fundamental Properties</h2>

    <div class="highlight-box">
      <h3>Precise Definition</h3>

      <p><strong>Ground state manifold:</strong></p>
      <div class="equation">
        d_{GSD}(M) = dim(Ground state subspace on manifold M)
      </div>
      <ul>
        <li>M: Spatial manifold (surface) on which system is defined</li>
        <li>Ground states: States with energy E_0 in thermodynamic limit</li>
        <li>Degeneracy: Exact as L → ∞ (splitting exponentially small)</li>
      </ul>

      <p><strong>Key distinguishing properties:</strong></p>
      <ul>
        <li><strong>Topology-dependent:</strong> d_{GSD} depends on genus g, number of boundaries, holes, etc.</li>
        <li><strong>Robust to local perturbations:</strong> Cannot be lifted by H' = H + Σ_i h_i</li>
        <li><strong>Non-locally distinguished:</strong> Requires operators wrapping non-contractible cycles</li>
        <li><strong>Exponentially protected:</strong> Energy splitting Δ ~ e^{-αL} → 0</li>
        <li><strong>Quantum dimension encoded:</strong> d_{GSD}(T²) = 𝒟² for 2D topological order</li>
      </ul>

      <p><strong>Mathematical structure:</strong></p>
      <div class="equation">
        Ground states: {|ψ_α⟩}_α=1^{d_{GSD}}<br>
        H|ψ_α⟩ = E_0|ψ_α⟩ for all α<br>
        ⟨ψ_α|ψ_β⟩ = δ_{αβ}
      </div>
    </div>

    <h2>Topological Formula for 2D Systems</h2>

    <div class="info-box">
      <h3>Dependence on Genus</h3>

      <p><strong>For different 2D surfaces:</strong></p>

      <p><strong>1. Sphere (genus g = 0):</strong></p>
      <div class="equation">
        d_{GSD}(S²) = 1
      </div>
      <ul>
        <li>Unique ground state (contractible topology)</li>
        <li>No non-contractible cycles</li>
        <li>No topological sectors</li>
      </ul>

      <p><strong>2. Torus (genus g = 1):</strong></p>
      <div class="equation">
        d_{GSD}(T²) = 𝒟²
      </div>
      <ul>
        <li>𝒟: Total quantum dimension</li>
        <li>Two independent non-contractible cycles</li>
        <li>Each cycle carries topological quantum number</li>
      </ul>

      <p><strong>3. Higher genus surfaces (g ≥ 2):</strong></p>
      <div class="equation">
        d_{GSD}(Σ_g) = 𝒟^{2g-2} · n_a
      </div>
      <ul>
        <li>Σ_g: Closed orientable surface with g handles</li>
        <li>n_a: Number of distinct anyon types</li>
        <li>Grows exponentially with genus</li>
      </ul>

      <p><strong>With boundaries:</strong></p>
      <div class="equation">
        d_{GSD}(disk with n quasiholes) = (fusion channels)
      </div>
      <ul>
        <li>Quasiholes at boundary encode topological charge</li>
        <li>Degeneracy from fusion tree structure</li>
      </ul>
    </div>

    <h2>Total Quantum Dimension 𝒟</h2>

    <div class="highlight-box">
      <h3>Definition and Calculation</h3>

      <p><strong>Quantum dimension of anyon type a:</strong></p>
      <div class="equation">
        d_a = largest eigenvalue of fusion matrix N_a
      </div>

      <p><strong>Total quantum dimension:</strong></p>
      <div class="equation">
        𝒟 = √(Σ_{a∈{anyons}} d_a²)
      </div>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Measures effective "number of degrees of freedom" per anyon type</li>
        <li>Related to topological entanglement entropy: γ = log 𝒟</li>
        <li>Determines growth of Hilbert space dimension with genus</li>
        <li>For abelian anyons: d_a = 1 for all a</li>
        <li>For non-abelian anyons: some d_a > 1</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Z₂ toric code:</strong>
          <div class="equation">
            Anyons: {1, e, m, ε}, all d_a = 1<br>
            𝒟 = √(1² + 1² + 1² + 1²) = 2<br>
            d_{GSD}(T²) = 4
          </div>
        </li>
        <li><strong>Fibonacci anyons:</strong>
          <div class="equation">
            Anyons: {1, τ}, d_1 = 1, d_τ = φ = (1+√5)/2<br>
            𝒟 = √(1² + φ²) = √(1 + φ²) = √(2φ + 1) = φ<br>
            d_{GSD}(T²) = φ² ≈ 2.618
          </div>
        </li>
        <li><strong>Ising anyons (ν = 5/2 FQHE):</strong>
          <div class="equation">
            Anyons: {1, σ, ψ}, d_1 = d_ψ = 1, d_σ = √2<br>
            𝒟 = √(1² + 2 + 1²) = 2<br>
            d_{GSD}(T²) = 4
          </div>
        </li>
      </ul>
    </div>

    <h2>Contrast with Symmetry-Breaking Degeneracy</h2>

    <div class="comparison-box">
      <h3>Two Types of Degeneracy</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Symmetry-Breaking (SSB)</th>
          <th>Topological (TO)</th>
        </tr>
        <tr>
          <td><strong>Origin</strong></td>
          <td>Spontaneous symmetry breaking</td>
          <td>Global topology of space</td>
        </tr>
        <tr>
          <td><strong>Dependence</strong></td>
          <td>Group structure G</td>
          <td>Manifold topology (genus, boundaries)</td>
        </tr>
        <tr>
          <td><strong>Degeneracy</strong></td>
          <td>d = |G| (group order)</td>
          <td>d = 𝒟^{2g} (genus-dependent)</td>
        </tr>
        <tr>
          <td><strong>Local perturbation</strong></td>
          <td>Lifts degeneracy (ε > 0 enough)</td>
          <td>Cannot lift (needs non-local operator)</td>
        </tr>
        <tr>
          <td><strong>Energy splitting</strong></td>
          <td>ΔE ~ ε (linear in perturbation)</td>
          <td>ΔE ~ e^{-αL} (exponentially small)</td>
        </tr>
        <tr>
          <td><strong>Order parameter</strong></td>
          <td>Local: ⟨φ(x)⟩ ≠ 0</td>
          <td>Non-local: Wilson loops only</td>
        </tr>
        <tr>
          <td><strong>State distinction</strong></td>
          <td>Local measurement sufficient</td>
          <td>Requires global measurement</td>
        </tr>
        <tr>
          <td><strong>Geometry change</strong></td>
          <td>Unchanged by topology</td>
          <td>Changes with genus, boundaries</td>
        </tr>
        <tr>
          <td><strong>Example</strong></td>
          <td>Ferromagnet: |↑↑...↑⟩, |↓↓...↓⟩</td>
          <td>Toric code on torus: 4 states</td>
        </tr>
      </table>
    </div>

    <h2>Examples from Physical Systems</h2>

    <div class="info-box">
      <h3>1. Toric Code on Torus</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = -Σ_s A_s - Σ_p B_p<br>
        A_s = ∏_{i∈star(s)} σ_i^x,  B_p = ∏_{i∈∂p} σ_i^z
      </div>

      <p><strong>Ground state degeneracy:</strong> d_{GSD} = 4</p>

      <p><strong>Physical origin:</strong></p>
      <ul>
        <li>Torus has two non-contractible cycles: α and β</li>
        <li>Can have Z-string along α: states |0⟩_α or |1⟩_α</li>
        <li>Can have Z-string along β: states |0⟩_β or |1⟩_β</li>
        <li>Four ground states: |00⟩, |01⟩, |10⟩, |11⟩</li>
      </ul>

      <p><strong>Logical operators:</strong></p>
      <div class="equation">
        Z_L^{(1)} = ∏_{i∈α} σ_i^z,  Z_L^{(2)} = ∏_{i∈β} σ_i^z<br>
        X_L^{(1)} = ∏_{i∈α*} σ_i^x,  X_L^{(2)} = ∏_{i∈β*} σ_i^x
      </div>
      <ul>
        <li>Encode 2 logical qubits</li>
        <li>[[2L², 2, L]] quantum error-correcting code</li>
        <li>Code distance d = L (system size)</li>
      </ul>

      <p><strong>Energy splitting:</strong></p>
      <div class="equation">
        ΔE ~ e^{-cL} → 0 as L → ∞
      </div>
    </div>

    <div class="info-box">
      <h3>2. Fractional Quantum Hall States</h3>

      <p><strong>Laughlin state at ν = 1/m on torus:</strong></p>
      <div class="equation">
        d_{GSD} = m
      </div>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Threading flux Φ through one torus cycle shifts ground state</li>
        <li>m distinct states related by flux insertion</li>
        <li>Adiabatic flux insertion: |n⟩ → |n+1 mod m⟩</li>
        <li>Geometric phase: γ = 2πν = 2π/m per flux quantum</li>
      </ul>

      <p><strong>Moore-Read state (ν = 5/2):</strong></p>
      <div class="equation">
        d_{GSD}(T²) = 3 (non-abelian)
      </div>
      <ul>
        <li>Three ground states on torus</li>
        <li>Non-abelian anyon content: {1, σ, ψ}</li>
        <li>Potential platform for topological quantum computation</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>3. Kitaev's Honeycomb Model</h3>

      <p><strong>In gapped phase (Abelian):</strong></p>
      <div class="equation">
        d_{GSD}(T²) = 4
      </div>
      <ul>
        <li>Z₂ topological order (same as toric code)</li>
        <li>e and m anyons (electric and magnetic vortices)</li>
      </ul>

      <p><strong>In non-abelian phase:</strong></p>
      <div class="equation">
        d_{GSD}(T²) varies with parameters
      </div>
      <ul>
        <li>Can realize Ising anyon model</li>
        <li>Majorana zero modes at vortex cores</li>
      </ul>
    </div>

    <h2>Robustness and Protection Mechanism</h2>

    <div class="highlight-box">
      <h3>Why Topological Degeneracy Cannot Be Lifted</h3>

      <p><strong>Local perturbation:</strong></p>
      <div class="equation">
        H' = H_0 + λ Σ_i O_i
      </div>
      <ul>
        <li>O_i: Local operator with support on region R_i</li>
        <li>|R_i| finite (bounded support)</li>
        <li>λ: Perturbation strength (can be arbitrarily large!)</li>
      </ul>

      <p><strong>Energy splitting estimate:</strong></p>
      <div class="equation">
        ΔE = |⟨ψ_1|H'|ψ_2⟩| = |⟨ψ_1|λ Σ_i O_i|ψ_2⟩|
      </div>

      <p><strong>Key insight:</strong></p>
      <ul>
        <li>Ground states |ψ_1⟩ and |ψ_2⟩ differ only in global topology</li>
        <li>Locally indistinguishable: ρ_R^{(1)} = ρ_R^{(2)} for any region R ≪ L</li>
        <li>Local operator: ⟨ψ_1|O_i|ψ_2⟩ = 0 to all orders in 1/L</li>
      </ul>

      <p><strong>Quantum circuit complexity:</strong></p>
      <div class="equation">
        Circuit depth to transform |ψ_1⟩ → |ψ_2⟩: D ~ L
      </div>
      <ul>
        <li>Requires string operator wrapping system</li>
        <li>Cannot be achieved by constant-depth circuit</li>
        <li>Energy splitting exponentially suppressed: ΔE ~ e^{-αD} ~ e^{-αL}</li>
      </ul>

      <p><strong>Lieb-Robinson bound:</strong></p>
      <ul>
        <li>Local operators evolve in "light cone"</li>
        <li>Cannot affect topological charge on opposite side of system</li>
        <li>Provides rigorous bound on splitting</li>
      </ul>
    </div>

    <h2>Measuring and Distinguishing Ground States</h2>

    <div class="note-box">
      <h3>Non-Local Observables Required</h3>

      <p><strong>Wilson loop operators:</strong></p>
      <div class="equation">
        W(C) = ∏_{i∈C} σ_i (product along curve C)
      </div>

      <p><strong>Toric code example:</strong></p>
      <ul>
        <li><strong>Z-loop along α:</strong> Z_α = ∏_{i∈α} σ_i^z
          <div class="equation">
            Z_α|0⟩_α = +|0⟩_α,  Z_α|1⟩_α = -|1⟩_α
          </div>
        </li>
        <li><strong>Z-loop along β:</strong> Z_β = ∏_{i∈β} σ_i^z
          <div class="equation">
            Z_β|0⟩_β = +|0⟩_β,  Z_β|1⟩_β = -|1⟩_β
          </div>
        </li>
        <li>Commuting operators: [Z_α, Z_β] = 0</li>
        <li>Eigenvalues (±1, ±1) label the 4 ground states</li>
      </ul>

      <p><strong>FQHE flux threading:</strong></p>
      <ul>
        <li>Insert flux Φ through torus cycle</li>
        <li>Adiabatic evolution connects ground states</li>
        <li>Berry phase distinguishes topological sectors</li>
      </ul>

      <p><strong>Experimental challenges:</strong></p>
      <ul>
        <li>Must measure non-local observables</li>
        <li>Requires coherent access to entire system</li>
        <li>Difficult in condensed matter systems</li>
        <li>Easier in quantum simulators (trapped ions, cold atoms)</li>
      </ul>
    </div>

    <h2>Connection to Quantum Error Correction</h2>

    <div class="highlight-box">
      <h3>Topological Quantum Memory</h3>

      <p><strong>Encoding logical qubits:</strong></p>
      <div class="equation">
        k logical qubits in d_{GSD} = 2^k dimensional ground space
      </div>

      <p><strong>Toric code as [[n, k, d]] code:</strong></p>
      <ul>
        <li>n = 2L²: Physical qubits (one per edge)</li>
        <li>k = 2: Logical qubits (from 4-fold degeneracy)</li>
        <li>d = L: Code distance (minimum weight of logical operator)</li>
      </ul>

      <p><strong>Error correction properties:</strong></p>
      <ul>
        <li><strong>Local errors:</strong> Create anyonic excitations (detectable syndromes)</li>
        <li><strong>Error chains:</strong> Must span ~L to cause logical error</li>
        <li><strong>Threshold:</strong> p_threshold ~ 10^{-2} for depolarizing noise</li>
        <li><strong>Passive protection:</strong> Gap protects at T ≪ Δ</li>
      </ul>

      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Topological protection against local noise</li>
        <li>Scalable (distance grows with L)</li>
        <li>Local stabilizer measurements</li>
        <li>Fault-tolerant operations possible</li>
      </ul>

      <p><strong>Surface codes:</strong></p>
      <ul>
        <li>Practical implementation of toric code concept</li>
        <li>Planar geometry with boundaries</li>
        <li>Leading candidate for quantum error correction</li>
        <li>Demonstrated in superconducting qubits, trapped ions</li>
      </ul>
    </div>

    <h2>Experimental Signatures and Detection</h2>

    <div class="info-box">
      <h3>Observing Topological Degeneracy</h3>

      <p><strong>1. Topological entanglement entropy:</strong></p>
      <div class="equation">
        S(A) = α|∂A| - γ + o(1)<br>
        γ = log 𝒟
      </div>
      <ul>
        <li>Universal constant γ independent of region shape</li>
        <li>Extract 𝒟 → infer d_{GSD}(T²) = 𝒟²</li>
        <li>Requires measuring entanglement in ground state</li>
      </ul>

      <p><strong>2. Modular matrices:</strong></p>
      <ul>
        <li>Adiabatic evolution around modular transformations of torus</li>
        <li>S and T matrices encode anyon data</li>
        <li>Trace: Tr(S) = d_{GSD}(T²)</li>
      </ul>

      <p><strong>3. Energy level spectroscopy:</strong></p>
      <ul>
        <li>On different topologies (torus vs sphere)</li>
        <li>Count nearly-degenerate ground states</li>
        <li>Verify d_{GSD}(S²) = 1, d_{GSD}(T²) = 𝒟²</li>
      </ul>

      <p><strong>4. Quantum simulators:</strong></p>
      <ul>
        <li>Programmable Rydberg atom arrays</li>
        <li>Trapped ion quantum simulators</li>
        <li>Superconducting qubit processors</li>
        <li>Direct measurement of Wilson loops possible</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Definition:</strong> Topological GSD is ground state degeneracy depending on spatial topology, not symmetry</li>
        <li><strong>Formula:</strong> d_{GSD}(T²) = 𝒟² for 2D topological order on torus</li>
        <li><strong>Robustness:</strong> Cannot be lifted by local perturbations; splitting ΔE ~ e^{-αL}</li>
        <li><strong>Contrast with SSB:</strong> SSB degeneracy lifted by infinitesimal field; topological degeneracy needs non-local operator</li>
        <li><strong>Measurement:</strong> Requires non-local Wilson loops or flux threading</li>
        <li><strong>Examples:</strong> Toric code (d=4), Laughlin ν=1/m (d=m), Moore-Read (d=3)</li>
        <li><strong>Application:</strong> Topological quantum memory with [[n,k,d]] codes where d ~ L</li>
        <li><strong>Experimental detection:</strong> Topological entanglement entropy, modular matrices, quantum simulators</li>
        <li><strong>Protection mechanism:</strong> Local indistinguishability, circuit complexity, Lieb-Robinson bounds</li>
      </ul>

      <p><strong>Next:</strong> Section 6.3.2 explores the non-abelian geometric phase that arises from adiabatic evolution in the topologically degenerate ground state manifold.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_3_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
