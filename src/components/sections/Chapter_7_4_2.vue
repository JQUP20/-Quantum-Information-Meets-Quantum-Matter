<template>
  <div class="section-content">
    <h1>7.4.2 Gapped Quantum Liquid Phase</h1>

    <div class="info-box">
      <h3>Revolutionary Concept</h3>
      <p>A <strong>gapped quantum liquid</strong> represents one of the most profound departures from the Landau paradigm. Unlike conventional gapped phases (crystals, magnets) that break symmetries and possess local order parameters, quantum liquids remain <strong>disordered yet highly correlated</strong>—exhibiting quantum coherence without classical structure. This phase of matter was unimaginable within traditional condensed matter theory.</p>
    </div>

    <h2>Defining Characteristics</h2>

    <h3>What is a Quantum Liquid?</h3>

    <p>A gapped quantum liquid phase possesses the following defining properties:</p>

    <div class="highlight-box">
      <h3>Quantum Liquid Criteria</h3>
      <ol>
        <li><strong>Energy gap:</strong> Δ > 0 (gapped excitations above ground state)</li>
        <li><strong>No symmetry breaking:</strong> Ground state preserves all symmetries of Hamiltonian
          <div class="equation">
            ⟨ψ_0| O_local |ψ_0⟩ = 0 for all local order parameters
          </div>
        </li>
        <li><strong>No long-range order:</strong> All correlations decay (exponentially or power-law with gap)
          <div class="equation">
            ⟨O(r) O(0)⟩_c ~ e^{-r/ξ}
          </div>
        </li>
        <li><strong>Non-trivial quantum correlations:</strong> Cannot be written as simple product state
          <ul>
            <li>Short-range entangled (SRE) liquids: SPT phases</li>
            <li>Long-range entangled (LRE) liquids: Topological order</li>
          </ul>
        </li>
        <li><strong>Liquid-like behavior:</strong> Uniform, translationally invariant (no crystalline structure)</li>
      </ol>
    </div>

    <div class="comparison-box">
      <h3>Quantum Liquid vs Classical Liquid vs Crystal</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Classical Liquid</th>
          <th>Crystal (Solid)</th>
          <th>Quantum Liquid</th>
        </tr>
        <tr>
          <td><strong>Translation symmetry</strong></td>
          <td>Preserved</td>
          <td>Broken</td>
          <td>Preserved</td>
        </tr>
        <tr>
          <td><strong>Long-range order</strong></td>
          <td>No</td>
          <td>Yes (positional)</td>
          <td>No (local), possibly topological</td>
        </tr>
        <tr>
          <td><strong>Excitations</strong></td>
          <td>Thermal fluctuations</td>
          <td>Phonons, defects</td>
          <td>Quantum quasiparticles (possibly anyons)</td>
        </tr>
        <tr>
          <td><strong>Energy gap</strong></td>
          <td>No (gapless)</td>
          <td>Yes (phonons are gapless, but defects gapped)</td>
          <td>Yes (all excitations gapped)</td>
        </tr>
        <tr>
          <td><strong>Correlations</strong></td>
          <td>Short-range</td>
          <td>Long-range (crystalline order)</td>
          <td>Quantum entanglement (SRE or LRE)</td>
        </tr>
        <tr>
          <td><strong>Ground state</strong></td>
          <td>N/A (thermal state)</td>
          <td>Broken symmetry</td>
          <td>Symmetric, entangled</td>
        </tr>
      </table>
    </div>

    <h2>Contrast with Landau Paradigm</h2>

    <h3>Why Landau Theory Fails</h3>

    <p>The Landau paradigm assumes:</p>

    <div class="equation">
      Distinct phases ⟺ Different broken symmetries ⟺ Different order parameters
    </div>

    <p>But quantum liquids have:</p>
    <ul>
      <li><strong>No broken symmetry:</strong> Yet they are distinct from trivial paramagnets</li>
      <li><strong>No local order parameter:</strong> Cannot be characterized by ⟨O⟩ ≠ 0</li>
      <li><strong>Non-local order:</strong> Characterized by topology, entanglement, or symmetry fractionalization</li>
    </ul>

    <div class="highlight-box">
      <h3>Paradigm Shift</h3>
      <p>Quantum liquids represent phases of matter that:</p>
      <ul>
        <li>Cannot be understood within Landau-Ginzburg-Wilson framework</li>
        <li>Require <strong>quantum information concepts</strong> (entanglement, topology) for classification</li>
        <li>May have <strong>fractionalized excitations</strong> carrying fractional quantum numbers</li>
        <li>Can possess <strong>protected edge states</strong> despite gapped bulk</li>
      </ul>
    </div>

    <h2>Types of Gapped Quantum Liquids</h2>

    <h3>Two Fundamental Classes</h3>

    <div class="comparison-box">
      <h3>SRE vs LRE Quantum Liquids</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Short-Range Entangled (SRE)</th>
          <th>Long-Range Entangled (LRE)</th>
        </tr>
        <tr>
          <td><strong>Formal definition</strong></td>
          <td>|ψ⟩ = U_finite-depth |product⟩</td>
          <td>Cannot be prepared from product state by finite-depth circuit</td>
        </tr>
        <tr>
          <td><strong>Entanglement entropy</strong></td>
          <td>S(A) = α|∂A| (area law, γ=0)</td>
          <td>S(A) = α|∂A| - γ (γ > 0, topological)</td>
        </tr>
        <tr>
          <td><strong>Alternate name</strong></td>
          <td>Symmetry-Protected Topological (SPT) phases</td>
          <td>Intrinsic topological order</td>
        </tr>
        <tr>
          <td><strong>Protection mechanism</strong></td>
          <td>Global symmetry (becomes trivial if broken)</td>
          <td>Topology (robust even without symmetry)</td>
        </tr>
        <tr>
          <td><strong>Ground state degeneracy</strong></td>
          <td>Non-degenerate (unique ground state)</td>
          <td>Topologically degenerate (depends on manifold)</td>
        </tr>
        <tr>
          <td><strong>Excitations</strong></td>
          <td>Conventional quasiparticles (bosons/fermions)</td>
          <td>Anyons (fractional statistics)</td>
        </tr>
        <tr>
          <td><strong>Examples</strong></td>
          <td>Haldane phase, topological insulators, cluster state</td>
          <td>Fractional quantum Hall, toric code, chiral spin liquid</td>
        </tr>
        <tr>
          <td><strong>Edge modes</strong></td>
          <td>Symmetry-protected edge states</td>
          <td>Topologically protected chiral/helical edge modes</td>
        </tr>
      </table>
    </div>

    <h2>SRE Quantum Liquids (SPT Phases)</h2>

    <h3>Symmetry-Protected Topological Order</h3>

    <p>SPT phases are quantum liquids where non-trivial properties are protected by global symmetry:</p>

    <div class="highlight-box">
      <h3>SPT Phase Definition</h3>
      <p>A gapped phase is SPT if:</p>
      <ul>
        <li><strong>With symmetry:</strong> Non-trivial phase, distinct from product state
          <ul>
            <li>Protected edge modes</li>
            <li>Cannot be deformed to product state by symmetric local unitaries</li>
          </ul>
        </li>
        <li><strong>Without symmetry:</strong> Becomes trivial
          <ul>
            <li>Can be deformed to product state if symmetry-breaking terms are allowed</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Example: Haldane Phase (Spin-1 Chain)</h3>

    <div class="equation">
      H = J ∑_i 𝐒_i · 𝐒_{i+1} (J > 0, antiferromagnetic)
    </div>

    <p><strong>Properties:</strong></p>
    <ul>
      <li><strong>Gap:</strong> Δ ≈ 0.41J (Haldane gap)</li>
      <li><strong>Symmetry:</strong> SO(3) spin rotation × Z₂ᵀ (time-reversal) × Z₂ (site-centered inversion)</li>
      <li><strong>Ground state:</strong> Unique, no broken symmetry, no local order</li>
      <li><strong>Correlations:</strong> ⟨𝐒_i · 𝐒_j⟩ ~ e^{-|i-j|/ξ} (exponential decay)</li>
      <li><strong>Edge states:</strong> Spin-1/2 degrees of freedom at boundaries (protected by symmetry)</li>
      <li><strong>String order:</strong> Non-local order parameter
        <div class="equation">
          O_string = lim_{|i-j|→∞} ⟨S^z_i e^{iπ∑_{k=i+1}^{j-1} S^z_k} S^z_j⟩ ≠ 0
        </div>
      </li>
    </ul>

    <div class="note-box">
      <h4>Contrast: Spin-1/2 Chain</h4>
      <p>The spin-1/2 Heisenberg chain is <strong>gapless</strong> (critical), described by Luttinger liquid. The integer vs half-integer spin distinction is fundamental—related to SPT classification by cohomology groups.</p>
    </div>

    <h3>Example: Topological Insulators (3D)</h3>

    <p>3D topological insulators (TI) are SPT phases protected by time-reversal symmetry:</p>

    <ul>
      <li><strong>Bulk:</strong> Gapped, insulating (Δ ~ 0.1-1 eV)</li>
      <li><strong>Surface:</strong> Gapless Dirac fermions (2+1)D
        <div class="equation">
          H_surface = ℏv_F (k_x σ_y - k_y σ_x)
        </div>
      </li>
      <li><strong>Symmetry protection:</strong> Time-reversal 𝒯 with 𝒯² = -1 (fermionic)</li>
      <li><strong>Topological invariant:</strong> Z₂ index ν ∈ {0, 1}</li>
      <li><strong>Materials:</strong> Bi₂Se₃, Bi₂Te₃, (Bi₁₋ₓSbₓ)₂Te₃</li>
    </ul>

    <h2>LRE Quantum Liquids (Intrinsic Topological Order)</h2>

    <h3>Topological Order Without Symmetry</h3>

    <p>LRE quantum liquids have intrinsic topological properties independent of symmetry:</p>

    <div class="highlight-box">
      <h3>Intrinsic Topological Order Signatures</h3>
      <ul>
        <li><strong>Topological entanglement entropy:</strong> γ = log 𝒟 > 0</li>
        <li><strong>Ground state degeneracy:</strong> Depends on topology
          <div class="equation">
            GSD(genus g) = 𝒟^{2g} (on closed surface)
          </div>
        </li>
        <li><strong>Anyonic excitations:</strong> Fractional quantum numbers and statistics</li>
        <li><strong>Topological quantum numbers:</strong> Conserved in low-energy sector</li>
        <li><strong>Robustness:</strong> Protected by energy gap and global topology, not symmetry</li>
      </ul>
    </div>

    <h3>Example: Fractional Quantum Hall States</h3>

    <p>The ν = 1/3 Laughlin state at strong magnetic field:</p>

    <div class="equation">
      ψ_{1/3}(z_1,...,z_N) = ∏_{i<j} (z_i - z_j)^3 e^{-∑_i |z_i|²/4ℓ_B²}
    </div>

    <p><strong>Properties:</strong></p>
    <ul>
      <li><strong>Gap:</strong> Δ ~ e²/(4πε₀εℓ_B) (Coulomb energy scale)</li>
      <li><strong>No symmetry breaking:</strong> Liquid-like (translationally invariant in thermodynamic limit)</li>
      <li><strong>Fractional charge:</strong> Quasiparticles carry e* = e/3</li>
      <li><strong>Fractional statistics:</strong> Anyons with θ = π/3</li>
      <li><strong>Chiral edge modes:</strong> 1D gapless chiral fermions at boundary</li>
      <li><strong>Topological invariant:</strong> Chern number C = 1</li>
      <li><strong>Ground state degeneracy:</strong> Depends on topology (GSD = 3 on torus for Laughlin)</li>
    </ul>

    <h3>Example: Z₂ Toric Code</h3>

    <p>The simplest model with intrinsic topological order:</p>

    <div class="equation">
      H = -J_s ∑_s A_s - J_p ∑_p B_p
    </div>

    <p>where A_s = ∏_{i∈star(s)} σ^x_i (star operator) and B_p = ∏_{i∈∂p} σ^z_i (plaquette operator).</p>

    <p><strong>Properties:</strong></p>
    <ul>
      <li><strong>Gap:</strong> Δ = min(4J_s, 4J_p)</li>
      <li><strong>Ground state degeneracy:</strong> 4 on torus (2²ᵍ on genus g surface)</li>
      <li><strong>Anyons:</strong> Four types {1, e, m, ε = e × m}
        <ul>
          <li>e: electric charge (A_s = -1 violation)</li>
          <li>m: magnetic flux (B_p = -1 violation)</li>
          <li>ε: fermion (composite of e and m)</li>
        </ul>
      </li>
      <li><strong>Fusion rules:</strong> e × e = 1, m × m = 1, e × m = ε, ε × ε = 1</li>
      <li><strong>TEE:</strong> γ = log 2</li>
      <li><strong>Quantum dimension:</strong> 𝒟 = 2</li>
    </ul>

    <h2>Physical Mechanisms for Quantum Liquid Formation</h2>

    <h3>1. Frustration and Spin Liquids</h3>

    <p>Geometric frustration can prevent symmetry breaking and stabilize quantum liquids:</p>

    <div class="info-box">
      <h3>Spin Liquid Mechanism</h3>
      <ul>
        <li><strong>Frustration:</strong> Competing interactions prevent classical ordering
          <ul>
            <li>Example: Antiferromagnetic Heisenberg on triangular/kagome lattice</li>
          </ul>
        </li>
        <li><strong>Quantum fluctuations:</strong> Enhanced by frustration, lead to quantum melting of order</li>
        <li><strong>Ground state:</strong> Superposition of many classical configurations (resonating valence bond)</li>
        <li><strong>Excitations:</strong> Spinons (fractional S=1/2), visons (Z₂ vortices)</li>
        <li><strong>Challenge:</strong> Difficult to realize exact gapped spin liquids; most candidates are gapless</li>
      </ul>
    </div>

    <h3>2. Strong Magnetic Fields (Quantum Hall)</h3>

    <p>High magnetic fields project electrons to lowest Landau level, enabling novel liquid phases:</p>

    <div class="equation">
      Kinetic energy quenched → Interaction dominates → Correlated liquid
    </div>

    <p>The incompressibility (gap) arises from interaction energy cost to create quasiparticle-quasihole pairs.</p>

    <h3>3. Engineered Models (Quantum Simulators)</h3>

    <p>Modern platforms can engineer exact quantum liquid Hamiltonians:</p>

    <ul>
      <li><strong>Rydberg atom arrays:</strong> Programmable interactions → toric code, spin liquids</li>
      <li><strong>Superconducting circuits:</strong> Josephson junction arrays → artificial gauge fields, anyons</li>
      <li><strong>Cold atoms in optical lattices:</strong> Synthetic dimensions → quantum Hall physics</li>
      <li><strong>Trapped ions:</strong> Long-range interactions → frustrated spin systems</li>
    </ul>

    <h2>Detecting Quantum Liquids Experimentally</h2>

    <h3>Challenge: No Local Order Parameter</h3>

    <p>Since quantum liquids have no local order parameter ⟨O⟩ ≠ 0, they require <strong>non-local probes</strong>:</p>

    <div class="comparison-box">
      <h3>Experimental Signatures</h3>
      <table class="comparison-table">
        <tr>
          <th>Observable</th>
          <th>Conventional Phase</th>
          <th>Quantum Liquid</th>
          <th>Method</th>
        </tr>
        <tr>
          <td><strong>Magnetization</strong></td>
          <td>⟨M⟩ ≠ 0 (ferromagnet)</td>
          <td>⟨M⟩ = 0 (no order)</td>
          <td>Magnetometry</td>
        </tr>
        <tr>
          <td><strong>Specific heat</strong></td>
          <td>C(T) ~ T^α or e^{-Δ/T}</td>
          <td>C(T) ~ e^{-Δ/T} (gapped)</td>
          <td>Calorimetry</td>
        </tr>
        <tr>
          <td><strong>Thermal Hall conductivity</strong></td>
          <td>κ_xy = 0 (no chirality)</td>
          <td>κ_xy ≠ 0 (chiral edge modes)</td>
          <td>Thermal transport</td>
        </tr>
        <tr>
          <td><strong>Fractional charge</strong></td>
          <td>e (integer)</td>
          <td>e/m (fractional)</td>
          <td>Shot noise, interferometry</td>
        </tr>
        <tr>
          <td><strong>Ground state degeneracy</strong></td>
          <td>1 or symmetry-related</td>
          <td>Topological (depends on geometry)</td>
          <td>Spectroscopy on different topologies</td>
        </tr>
        <tr>
          <td><strong>Entanglement entropy</strong></td>
          <td>γ = 0</td>
          <td>γ = log 𝒟 > 0 (for LRE)</td>
          <td>Quantum gas microscopy, interferometry</td>
        </tr>
        <tr>
          <td><strong>Edge modes</strong></td>
          <td>Absent (bulk determines boundary)</td>
          <td>Protected edge states</td>
          <td>STM, ARPES, transport</td>
        </tr>
      </table>
    </div>

    <h3>Smoking Gun Experiments</h3>

    <div class="highlight-box">
      <h3>Definitive Evidence for Quantum Liquids</h3>
      <ul>
        <li><strong>Fractional quantum Hall effect (1982):</strong>
          <ul>
            <li>Quantized Hall conductance σ_xy = νe²/h with ν = 1/3, 2/5, ...fractional</li>
            <li>Fractional charge e/3 measured via shot noise (1997)</li>
            <li>Anyonic braiding statistics observed (2020)</li>
          </ul>
        </li>
        <li><strong>Topological insulators (2007-2008):</strong>
          <ul>
            <li>Dirac surface states observed via ARPES</li>
            <li>Spin-momentum locking confirmed</li>
            <li>Robustness to disorder demonstrated</li>
          </ul>
        </li>
        <li><strong>Haldane phase (1988):</strong>
          <ul>
            <li>Gap confirmed in NENP (Ni(C₂H₈N₂)₂NO₂ClO₄)</li>
            <li>String order parameter measured</li>
            <li>Edge states detected in finite chains</li>
          </ul>
        </li>
        <li><strong>Quantum spin liquids (ongoing):</strong>
          <ul>
            <li>Candidates: κ-(BEDT-TTF)₂Cu₂(CN)₃, herbertsmithite</li>
            <li>Gapless spinon continuum in neutron scattering</li>
            <li>Thermal Hall effect κ_xy ≠ 0 suggesting chiral spin liquid</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>Theoretical Framework: Beyond Landau</h2>

    <h3>New Classification Schemes</h3>

    <p>Quantum liquids require new mathematical frameworks:</p>

    <div class="info-box">
      <h3>Modern Classification Tools</h3>
      <ul>
        <li><strong>SPT phases (SRE):</strong>
          <ul>
            <li>Group cohomology: H^d(G, U(1)) for bosons with symmetry G in d dimensions</li>
            <li>Example: 1D with G = SO(3) × Z₂ᵀ → ℤ classification (Haldane phase)</li>
          </ul>
        </li>
        <li><strong>Topological order (LRE):</strong>
          <ul>
            <li>Modular tensor categories (anyonic data: fusion rules, braiding, twist)</li>
            <li>Topological quantum field theory (TQFT) - Chern-Simons, BF theory</li>
          </ul>
        </li>
        <li><strong>Fermionic SPT:</strong>
          <ul>
            <li>Classification involves fermion parity and spin structures</li>
            <li>Example: 3D TI is Z₂ SPT with 𝒯² = -1</li>
          </ul>
        </li>
        <li><strong>Symmetry enriched topological (SET) order:</strong>
          <ul>
            <li>Combination of symmetry and topology</li>
            <li>Symmetry fractionalization: excitations carry fractional quantum numbers</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>Applications and Implications</h2>

    <h3>1. Topological Quantum Computing</h3>

    <p>LRE quantum liquids (especially non-abelian topological order) enable fault-tolerant quantum computation:</p>

    <div class="highlight-box">
      <h3>Topological Quantum Computation</h3>
      <ul>
        <li><strong>Qubits:</strong> Encoded in topological degeneracy (non-local)</li>
        <li><strong>Gates:</strong> Implemented by braiding anyons
          <div class="equation">
            U_braid = R_{ij} (depends on worldline topology)
          </div>
        </li>
        <li><strong>Error protection:</strong> Exponential suppression ~ e^{-L/ξ} for system size L >> ξ</li>
        <li><strong>Target systems:</strong> ν = 5/2 FQHE (Majorana fermions), Fibonacci anyons</li>
      </ul>
    </div>

    <h3>2. Quantum Spin Hall Effect and Spintronics</h3>

    <p>2D topological insulators (quantum spin Hall) enable dissipationless spin transport:</p>

    <ul>
      <li><strong>Spin currents:</strong> Edge channels with opposite spins propagating in opposite directions</li>
      <li><strong>Low dissipation:</strong> Protected by time-reversal symmetry</li>
      <li><strong>Applications:</strong> Low-power electronics, spin logic devices</li>
    </ul>

    <h3>3. Exotic Quasiparticles</h3>

    <p>Quantum liquids host quasiparticles impossible in conventional phases:</p>

    <ul>
      <li><strong>Fractional charge:</strong> e/3 in FQHE</li>
      <li><strong>Majorana zero modes:</strong> Particles that are their own antiparticles</li>
      <li><strong>Non-abelian anyons:</strong> Braiding changes quantum state (not just phase)</li>
      <li><strong>Spinons:</strong> Spin-1/2 excitations in spin liquids (carry spin but no charge)</li>
    </ul>

    <h2>Open Questions and Current Research</h2>

    <div class="note-box">
      <h4>Active Research Frontiers</h4>
      <ul>
        <li><strong>Material realization:</strong> Finding/engineering materials with stable gapped spin liquids</li>
        <li><strong>Complete classification:</strong> Extending SPT and topological order classification to fermions, higher dimensions, symmetries</li>
        <li><strong>Non-equilibrium quantum liquids:</strong> Floquet SPT phases, many-body localized topological phases</li>
        <li><strong>Measurement and detection:</strong> Developing experimental techniques to measure TEE, anyonic statistics</li>
        <li><strong>Interplay with symmetry breaking:</strong> Phases with both topological order and symmetry breaking</li>
        <li><strong>Quantum error correction:</strong> Improving codes based on topological phases</li>
        <li><strong>Higher-form symmetries:</strong> Generalizing SPT to subsystem symmetries, fractons</li>
      </ul>
    </div>

    <h2>Philosophical Implications</h2>

    <div class="info-box">
      <h3>Paradigm Revolution</h3>
      <p>Gapped quantum liquids represent a profound shift in our understanding of matter:</p>
      <ul>
        <li><strong>Entanglement as order:</strong> Quantum information structure replaces classical order</li>
        <li><strong>Topology matters:</strong> Global properties become physically relevant</li>
        <li><strong>Emergence of new particles:</strong> Collective excitations with no elementary particle counterparts</li>
        <li><strong>Quantum matter ≠ quantized classical matter:</strong> Fundamentally new phenomena at zero temperature</li>
        <li><strong>Information-theoretic view:</strong> Quantum correlations, not just energy, determine phases</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h3>Key Takeaways</h3>
      <ul>
        <li><strong>Quantum liquid:</strong> Gapped phase with no symmetry breaking or long-range order, yet non-trivially entangled</li>
        <li><strong>Beyond Landau:</strong> Cannot be characterized by local order parameters—requires topology and entanglement</li>
        <li><strong>Two types:</strong> SRE (SPT, symmetry-protected) and LRE (intrinsic topological order)</li>
        <li><strong>SPT phases:</strong> Protected by global symmetry; trivial when symmetry broken; edge modes</li>
        <li><strong>Topological order:</strong> Intrinsic (no symmetry needed); anyonic excitations; topological degeneracy; γ > 0</li>
        <li><strong>Examples:</strong> Haldane phase, topological insulators (SPT); Fractional quantum Hall, toric code (TO)</li>
        <li><strong>Detection:</strong> Requires non-local probes (TEE, edge modes, fractional statistics, thermal Hall)</li>
        <li><strong>Applications:</strong> Topological quantum computing, spintronics, exotic quasiparticles</li>
        <li><strong>Framework:</strong> Group cohomology (SPT), modular tensor categories (TO), TQFT</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Looking Ahead</h3>
      <p>In §7.4.3, we'll delve deeper into the structure of <strong>topological order</strong>, examining the mathematical framework of anyonic theories, modular tensor categories, and the powerful connection to topological quantum field theory. We'll see how topological order provides both a rich physical phenomenon and a foundation for fault-tolerant quantum computation.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_7_4_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
