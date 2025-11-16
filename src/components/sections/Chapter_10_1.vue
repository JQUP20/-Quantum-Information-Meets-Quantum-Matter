<template>
  <div class="section-content">
    <h1>10.1 Introduction</h1>

    <p>
      Symmetry Protected Topological (SPT) phases represent one of the most profound discoveries in condensed matter physics of the 21st century. Unlike conventional phases distinguished by symmetry breaking and local order parameters, or topologically ordered phases with anyonic excitations, SPT phases occupy a unique middle ground: they are short-range entangled like trivial phases, yet possess nontrivial topological characteristics protected by global symmetries.
    </p>

    <h2>What are SPT Phases?</h2>

    <div class="info-box">
      <h3>Defining Characteristics</h3>
      <p>
        An SPT phase is a gapped quantum phase with the following properties:
      </p>
      <ul>
        <li><strong>Short-range entanglement (SRE):</strong> Entanglement entropy follows area law without topological correction (γ = 0)</li>
        <li><strong>Unique ground state:</strong> On closed manifolds, ground state degeneracy = 1 (no intrinsic topological order)</li>
        <li><strong>Symmetry protection:</strong> Cannot be continuously connected to trivial product state without breaking symmetry or closing the gap</li>
        <li><strong>Edge/boundary modes:</strong> Gapless or degenerate boundary states as long as symmetry is preserved</li>
        <li><strong>Robust under perturbations:</strong> Protected against symmetric local perturbations</li>
      </ul>
    </div>

    <h2>Historical Context</h2>

    <div class="highlight-box">
      <h4>The Discovery of SPT Physics</h4>
      <p>
        <strong>1983:</strong> Haldane's conjecture - Integer spin chains gapped, half-integer gapless
      </p>
      <p>
        <strong>1988-1989:</strong> Experimental confirmation of Haldane gap in NENP compounds
      </p>
      <p>
        <strong>2005:</strong> Kane & Mele, Bernevig & Zhang - Discovery of 2D topological insulators (quantum spin Hall effect)
      </p>
      <p>
        <strong>2007:</strong> 3D topological insulators (Bi₂Se₃, Bi₂Te₃) predicted and observed
      </p>
      <p>
        <strong>2008:</strong> Gu & Wen - General classification of SPT phases via group cohomology
      </p>
      <p>
        <strong>2010-present:</strong> Explosion of SPT research - floquet SPT, higher-order SPT, crystalline SPT
      </p>
    </div>

    <h2>SPT vs. Other Phases</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Trivial Phase</th>
            <th>SPT Phase</th>
            <th>Topological Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Entanglement</td>
            <td>Short-range (SRE)</td>
            <td>Short-range (SRE)</td>
            <td>Long-range (LRE)</td>
          </tr>
          <tr>
            <td>GSD (closed)</td>
            <td>1</td>
            <td>1</td>
            <td>> 1 (topology-dependent)</td>
          </tr>
          <tr>
            <td>Edge states</td>
            <td>Gappable</td>
            <td>Gapless (if symmetric)</td>
            <td>Chiral/anyonic</td>
          </tr>
          <tr>
            <td>Symmetry required</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Anyonic excitations</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>γ (TEE)</td>
            <td>0</td>
            <td>0</td>
            <td>> 0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Prototypical Examples</h2>

    <div class="info-box">
      <h3>1D SPT: Spin-1 Haldane Chain</h3>
      <p>
        <strong>Hamiltonian:</strong>
      </p>
      <div class="equation">
        H = J ∑_i S⃗_i · S⃗_{i+1}  (J > 0, antiferromagnetic)
      </div>
      <p>
        <strong>Properties:</strong>
      </p>
      <ul>
        <li>Ground state: Unique, gapped (Δ ≈ 0.41J)</li>
        <li>Symmetry: SO(3) rotation or (ℤ₂ × ℤ₂)_time-reversal</li>
        <li>Edge modes: Spin-1/2 degrees of freedom at each end</li>
        <li>Cannot be adiabatically connected to product state |↑↑↑...⟩ without breaking symmetry</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>2D SPT: Quantum Spin Hall Insulator</h3>
      <p>
        Topological insulator with time-reversal symmetry T² = -1:
      </p>
      <ul>
        <li>Bulk: Insulating, unique ground state</li>
        <li>Edge: Helical Dirac fermions (spin-momentum locked)</li>
        <li>Protected by time-reversal: Backscattering forbidden</li>
        <li>ℤ₂ topological invariant (Kane-Mele)</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>3D SPT: Topological Insulator</h3>
      <p>
        3D topological insulator (Bi₂Se₃):
      </p>
      <ul>
        <li>Bulk: 3D insulator with gap ~0.3 eV</li>
        <li>Surface: 2D massless Dirac fermions</li>
        <li>Protected by time-reversal T² = -1</li>
        <li>4 ℤ₂ topological invariants (Fu-Kane-Mele)</li>
        <li>Applications: Spintronics, quantum computing</li>
      </ul>
    </div>

    <h2>Why SPT Phases Matter</h2>

    <div class="highlight-box">
      <h4>Scientific Significance</h4>
      <ul>
        <li><strong>Fundamental physics:</strong> New paradigm beyond Landau symmetry-breaking</li>
        <li><strong>Topology in condensed matter:</strong> Mathematical topology meets experimental physics</li>
        <li><strong>Classification program:</strong> Complete understanding via group cohomology H^{d+1}(G,U(1))</li>
        <li><strong>Bridge to math:</strong> Deep connections to algebraic topology, K-theory, differential geometry</li>
      </ul>

      <h4>Technological Applications</h4>
      <ul>
        <li><strong>Spintronics:</strong> Dissipationless edge transport</li>
        <li><strong>Quantum computing:</strong> Topological protection of quantum information</li>
        <li><strong>Thermoelectrics:</strong> Surface states with unusual transport properties</li>
        <li><strong>Novel materials:</strong> Designer quantum materials with engineered symmetries</li>
      </ul>
    </div>

    <h2>Classification Hierarchy</h2>

    <div class="info-box">
      <h3>SPT Phases Organize by Symmetry and Dimension</h3>
      <p>
        For a given symmetry group G in d spatial dimensions, bosonic SPT phases are classified by:
      </p>
      <div class="equation">
        H^{d+1}(G, U(1))
      </div>
      <p>
        <strong>Examples:</strong>
      </p>
      <ul>
        <li><strong>d=1, G=ℤ₂:</strong> H²(ℤ₂,U(1)) = ℤ₂ → 2 phases (trivial + Haldane-like)</li>
        <li><strong>d=1, G=U(1):</strong> H²(U(1),U(1)) = ℤ → ∞ phases (integer quantum Hall analog)</li>
        <li><strong>d=2, G=ℤ₂^T (time-reversal):</strong> ℤ₂ → quantum spin Hall</li>
        <li><strong>d=3, G=ℤ₂^T:</strong> (ℤ₂)⁴ → 16 phases, strong + 3 weak TI</li>
      </ul>
    </div>

    <h2>Bulk-Boundary Correspondence</h2>

    <div class="info-box">
      <h3>The Central Principle of SPT Physics</h3>
      <p>
        The bulk-boundary correspondence is the defining feature of SPT phases:
      </p>
      <div class="equation">
        Nontrivial bulk SPT → Protected gapless/degenerate boundary
      </div>
      <p>
        <strong>Key insight:</strong> While the bulk is gapped and short-range entangled, cutting the system creates a boundary that <em>must</em> host gapless modes or degeneracies as long as symmetry is preserved.
      </p>

      <h4>Mathematical Origin</h4>
      <p>
        Consider a d-dimensional SPT with boundary. The bulk is characterized by a nontrivial cocycle ω ∈ H^{d+1}(G,U(1)). At the boundary:
      </p>
      <ul>
        <li>Symmetry acts projectively on edge states</li>
        <li>Projective representation characterized by ω restricted to boundary</li>
        <li>Cannot be made linear → prevents gapping without breaking symmetry</li>
      </ul>

      <h4>Physical Manifestation</h4>
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Bulk</th>
            <th>Boundary</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1D</td>
            <td>Gapped chain</td>
            <td>Degenerate end states</td>
            <td>Haldane: spin-1/2 edge modes</td>
          </tr>
          <tr>
            <td>2D</td>
            <td>Insulating</td>
            <td>1D gapless edge</td>
            <td>QSH: helical edge states</td>
          </tr>
          <tr>
            <td>3D</td>
            <td>Insulating</td>
            <td>2D Dirac cone</td>
            <td>TI: surface Dirac fermions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Entanglement Structure</h2>

    <div class="highlight-box">
      <h4>SPT Phases and Quantum Entanglement</h4>
      <p>
        Although SPT phases are short-range entangled (like trivial phases), their entanglement has special structure:
      </p>

      <h4>Area Law</h4>
      <div class="equation">
        S(A) = α|∂A| + subleading terms
      </div>
      <p>
        Unlike topologically ordered phases, γ = 0 (no topological entanglement entropy).
      </p>

      <h4>Entanglement Spectrum</h4>
      <p>
        The entanglement spectrum reveals edge physics:
      </p>
      <div class="equation">
        ρ_A = e^{-H_E}  →  Spectrum of H_E reveals edge states
      </div>
      <p>
        <strong>Li-Haldane conjecture:</strong> Entanglement spectrum mimics physical edge spectrum.
      </p>

      <h4>Example: Spin-1 Haldane Chain</h4>
      <ul>
        <li>Cut chain in half, trace out right half</li>
        <li>Entanglement Hamiltonian H_E has 4-fold near-degenerate ground states</li>
        <li>These correspond to 2 spin-1/2 edge modes (2² = 4 states)</li>
        <li>Degeneracy splitting ~e^{-L/ξ} (exponentially small in system size)</li>
      </ul>
    </div>

    <h2>SPT vs Symmetry Breaking: A Detailed Comparison</h2>

    <div class="comparison-box">
      <h3>Two Routes to Nontrivial Phases</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Symmetry Breaking</th>
            <th>SPT Phase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ground state</td>
            <td>Degenerate (manifold)</td>
            <td>Unique (on closed manifold)</td>
          </tr>
          <tr>
            <td>Symmetry</td>
            <td>Spontaneously broken</td>
            <td>Preserved in ground state</td>
          </tr>
          <tr>
            <td>Order parameter</td>
            <td>Local: ⟨O(x)⟩ ≠ 0</td>
            <td>Nonlocal: string order</td>
          </tr>
          <tr>
            <td>Excitations</td>
            <td>Goldstone modes</td>
            <td>Gapped in bulk</td>
          </tr>
          <tr>
            <td>Edge modes</td>
            <td>Can be gapped</td>
            <td>Protected if symmetric</td>
          </tr>
          <tr>
            <td>Robustness</td>
            <td>Perturbations → phase transition</td>
            <td>Stable under symmetric perturbations</td>
          </tr>
          <tr>
            <td>Classification</td>
            <td>By symmetry group G</td>
            <td>By H^{d+1}(G,U(1))</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>String Order Parameters</h2>

    <div class="info-box">
      <h3>Detecting SPT Order via Nonlocal Correlation</h3>
      <p>
        SPT phases cannot be detected by local order parameters. Instead, we use string operators:
      </p>
      <div class="equation">
        O_string = lim_{|i-j|→∞} ⟨ϕ_i (∏_{k=i}^{j-1} U_k) ϕ_j⟩
      </div>

      <h4>Example: ℤ₂ × ℤ₂ Symmetry in Haldane Phase</h4>
      <p>
        For spin-1 chain with symmetries R_x (π-rotation around x) and R_y:
      </p>
      <div class="equation">
        O_string^{xy} = lim_{|i-j|→∞} ⟨S_i^x e^{iπ∑_{k=i}^{j-1} S_k^z} S_j^x⟩
      </div>
      <ul>
        <li><strong>Trivial phase:</strong> O_string = 0</li>
        <li><strong>Haldane phase:</strong> O_string ≠ 0</li>
        <li>The string operator exp(iπ∑S_k^z) implements ℤ₂ symmetry along the string</li>
      </ul>

      <h4>Physical Interpretation</h4>
      <p>
        String order captures "hidden" antiferromagnetic correlations. The string operator "untwists" the order, making it visible.
      </p>
    </div>

    <h2>Experimental Realizations</h2>

    <div class="highlight-box">
      <h4>SPT Phases in the Laboratory</h4>

      <h4>1D Systems</h4>
      <ul>
        <li><strong>NENP [Ni(C₂H₈N₂)₂NO₂(ClO₄)]:</strong> Spin-1 Heisenberg chain, Haldane gap Δ ≈ 6K
          <ul>
            <li>Neutron scattering confirms gap and excitation spectrum</li>
            <li>ESR measurements detect edge mode signatures</li>
          </ul>
        </li>
        <li><strong>Cold atoms in optical lattices:</strong> Bosonic SPT phases with synthetic symmetries
          <ul>
            <li>Tunable interactions and symmetries</li>
            <li>Direct measurement of string order</li>
          </ul>
        </li>
      </ul>

      <h4>2D/3D Topological Insulators</h4>
      <ul>
        <li><strong>HgTe/CdTe quantum wells:</strong> Quantum spin Hall effect
          <ul>
            <li>Edge conductance quantized to 2e²/h per edge</li>
            <li>Robust against disorder (Anderson localization impossible)</li>
          </ul>
        </li>
        <li><strong>Bi₂Se₃, Bi₂Te₃:</strong> 3D strong topological insulators
          <ul>
            <li>ARPES reveals single Dirac cone on surface</li>
            <li>Spin-momentum locking verified</li>
            <li>Surface transport robust to non-magnetic impurities</li>
          </ul>
        </li>
      </ul>

      <h4>Designer SPT in Quantum Simulators</h4>
      <ul>
        <li><strong>Rydberg atom arrays:</strong> Programmable 1D/2D SPT phases</li>
        <li><strong>Superconducting qubits:</strong> Cluster state SPT, AKLT state preparation</li>
        <li><strong>Trapped ions:</strong> Floquet SPT, dynamical topological phases</li>
      </ul>
    </div>

    <h2>Connection to Quantum Information</h2>

    <div class="info-box">
      <h3>SPT States as Quantum Resources</h3>

      <h4>Measurement-Based Quantum Computation</h4>
      <p>
        Many SPT states serve as resources for quantum computation:
      </p>
      <ul>
        <li><strong>1D Cluster state:</strong> Universal resource for 1-qubit gates (ℤ₂ SPT)</li>
        <li><strong>2D Cluster state:</strong> Universal quantum computation via single-qubit measurements</li>
        <li>SPT structure ensures: Quantum correlations + classical processing = quantum computing power</li>
      </ul>

      <h4>Quantum Error Correction</h4>
      <p>
        Edge modes provide natural error-protected qubits:
      </p>
      <ul>
        <li>Spatially separated edge modes → topological protection</li>
        <li>Symmetry protection → robust against symmetric noise</li>
        <li>Example: Majorana fermions for topological quantum computing</li>
      </ul>

      <h4>Entanglement Properties</h4>
      <ul>
        <li><strong>Resource theory:</strong> SPT states have "useful" entanglement despite being SRE</li>
        <li><strong>Quantum communication:</strong> Edge modes enable robust quantum channels</li>
        <li><strong>Many-body magic:</strong> SPT states exhibit computational complexity beyond stabilizer formalism</li>
      </ul>
    </div>

    <h2>Mathematical Framework Preview</h2>

    <div class="info-box">
      <h3>Group Cohomology Classification</h3>
      <p>
        The complete classification of SPT phases relies on group cohomology theory:
      </p>

      <h4>Statement of Classification Theorem</h4>
      <div class="equation">
        {d-dimensional bosonic SPT with symmetry G} ↔ H^{d+1}(G, U(1))
      </div>

      <h4>Interpretation</h4>
      <ul>
        <li><strong>H^{d+1}(G,U(1)):</strong> (d+1)-th cohomology group of G with U(1) coefficients</li>
        <li><strong>Cocycle ω(g₁,...,g_{d+1}):</strong> Encodes how symmetry acts on d-dimensional boundary</li>
        <li><strong>Cocycle condition:</strong> Ensures consistency (no anomaly in (d+1)-dimensional bulk)</li>
        <li><strong>Coboundary (trivial cocycle):</strong> Can be gauged away → trivial SPT</li>
      </ul>

      <h4>Why (d+1) Cohomology?</h4>
      <p>
        Dimensional shift reflects bulk-boundary correspondence:
      </p>
      <ul>
        <li>d-dimensional bulk boundary = (d-1)-dimensional edge</li>
        <li>Edge symmetry action characterized by d-cocycle</li>
        <li>Bulk SPT "fills in" the edge → (d+1)-cocycle</li>
      </ul>

      <h4>Computing Cohomology Groups</h4>
      <p>
        For finite groups, use Künneth formula and standard results:
      </p>
      <div class="equation">
        H^n(ℤ₂, U(1)) = ℤ₂  for n ≥ 1
      </div>
      <div class="equation">
        H^n(U(1), U(1)) = ℤ  for n = 1,2,...
      </div>
      <div class="equation">
        H^n(G₁ × G₂, U(1)) = [H^n(G₁,U(1)) ⊗ H^n(G₂,U(1))] ⊕ [H^{n-1}(G₁,U(1)) ⊗ H^{n-1}(G₂,U(1))]
      </div>
    </div>

    <h2>Chapter Organization</h2>

    <div class="info-box">
      <h3>Structure of Chapter 10</h3>
      <ol>
        <li><strong>Section 10.2:</strong> 1D bosonic SPT phases - complete classification using MPS, group cohomology</li>
        <li><strong>Section 10.3:</strong> 1D fermionic SPT phases - role of fermion parity, Majorana modes</li>
        <li><strong>Section 10.4:</strong> 2D SPT phases - AKLT model, CZX model, edge theories</li>
        <li><strong>Section 10.5:</strong> General construction - group cohomology, cocycle conditions, fixed-point models</li>
        <li><strong>Section 10.6:</strong> Summary - open questions, generalizations (crystalline, higher-order, Floquet SPT)</li>
      </ol>
    </div>

    <h2>Key Concepts Preview</h2>

    <div class="highlight-box">
      <h4>Mathematical Tools</h4>
      <ul>
        <li><strong>Group cohomology:</strong> H^n(G,U(1)) classifies n-dimensional SPT with symmetry G</li>
        <li><strong>Cocycle conditions:</strong> Functions ω(g₁,g₂,...) satisfying consistency relations</li>
        <li><strong>Matrix Product States:</strong> Efficient representation encoding symmetry structure</li>
        <li><strong>Projective representations:</strong> How symmetry acts on edge states</li>
        <li><strong>Edge theories:</strong> Conformal field theories protected by symmetry</li>
        <li><strong>Fixed-point wavefunctions:</strong> Exactly solvable SPT models from cocycles</li>
      </ul>

      <h4>Physical Probes</h4>
      <ul>
        <li><strong>Entanglement spectrum:</strong> Reveals edge state structure via Li-Haldane correspondence</li>
        <li><strong>String order parameters:</strong> Nonlocal detectors of SPT order (den Nijs-Rommelse)</li>
        <li><strong>Edge spectroscopy:</strong> Direct probe of protected boundary modes (STM, ARPES)</li>
        <li><strong>Symmetry twists:</strong> Flux insertion/defects that distinguish SPT phases</li>
        <li><strong>Many-body Berry phase:</strong> Topological response to symmetry operations</li>
        <li><strong>Modular transformations:</strong> For systems on torus, partition function behavior</li>
      </ul>
    </div>

    <h2>Generalizations and Extensions</h2>

    <div class="highlight-box">
      <h4>Beyond Basic SPT</h4>
      <p>
        The SPT framework has been extended in numerous directions:
      </p>

      <ul>
        <li><strong>Crystalline SPT:</strong> Protected by space group symmetries (reflection, rotation, translation)
          <ul>
            <li>Classification involves spatial cohomology</li>
            <li>Examples: Topological crystalline insulators (SnTe)</li>
          </ul>
        </li>

        <li><strong>Higher-order SPT:</strong> (d-n)-dimensional boundary modes in d dimensions
          <ul>
            <li>2D HOTI: 0D corner modes instead of 1D edge</li>
            <li>Protected by combinations of symmetries (C₄ rotation + reflection)</li>
          </ul>
        </li>

        <li><strong>Floquet SPT:</strong> Periodically driven systems
          <ul>
            <li>Time-periodic Hamiltonian H(t+T) = H(t)</li>
            <li>New topological phases with no static analog</li>
            <li>Classification by Floquet cohomology</li>
          </ul>
        </li>

        <li><strong>Subsystem SPT:</strong> Protected by subsystem symmetries
          <ul>
            <li>Symmetries act on lines/planes, not entire system</li>
            <li>Fracton phases as extreme example</li>
          </ul>
        </li>

        <li><strong>Interacting fermionic SPT:</strong> Beyond free fermion classification
          <ul>
            <li>Group super-cohomology H^{d+1}(G_f, U(1))</li>
            <li>New phases impossible in free fermion systems</li>
          </ul>
        </li>

        <li><strong>Gauge SPT:</strong> SPT with gauge symmetry
          <ul>
            <li>Connections to anomalies in gauge theories</li>
            <li>Bulk-boundary via anomaly inflow</li>
          </ul>
        </li>
      </ul>
    </div>

    <p>
      With this comprehensive foundation, we now dive into the detailed study of SPT phases, starting with the simplest case: 1D bosonic systems where the complete classification is known and intuitive. These 1D examples will build the intuition needed for understanding the more complex higher-dimensional and fermionic cases.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
