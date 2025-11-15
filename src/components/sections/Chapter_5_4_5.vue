<template>
  <div class="section-content">
    <h1>5.4.5 Systems with Mixed Orders</h1>

    <p>Real quantum many-body systems often exhibit coexistence or competition between different types of quantum order: spontaneous symmetry breaking (SSB), topological order, and symmetry-protected topological (SPT) phases. Understanding how these orders interact, compete, or coexist provides deep insights into the rich phase diagrams of quantum matter and reveals novel quantum phases at their interfaces.</p>

    <h2>Types of Quantum Order</h2>

    <div class="highlight-box">
      <h3>Classification of Phases</h3>

      <p><strong>1. Spontaneous Symmetry Breaking (SSB):</strong></p>
      <ul>
        <li><strong>Landau paradigm:</strong> Phase characterized by order parameter ⟨O⟩ ≠ 0</li>
        <li><strong>Symmetry:</strong> Ground state has lower symmetry than Hamiltonian</li>
        <li><strong>Examples:</strong> Ferromagnet (broken spin rotation), superfluid (broken U(1)), crystal (broken translation)</li>
        <li><strong>Entanglement:</strong> Typically area law with non-universal coefficient</li>
      </ul>

      <p><strong>2. Topological Order (TO):</strong></p>
      <ul>
        <li><strong>Beyond Landau:</strong> No local order parameter</li>
        <li><strong>Characteristics:</strong> Ground state degeneracy on torus, anyonic excitations</li>
        <li><strong>Examples:</strong> Toric code (Z₂), fractional quantum Hall (non-abelian possible)</li>
        <li><strong>Entanglement:</strong> Area law with topological correction γ = log 𝒟</li>
      </ul>

      <p><strong>3. Symmetry-Protected Topological (SPT):</strong></p>
      <ul>
        <li><strong>Protected by symmetry:</strong> Requires symmetry to remain distinct from trivial</li>
        <li><strong>Characteristics:</strong> Unique ground state, edge states, string order</li>
        <li><strong>Examples:</strong> Cluster state (Z₂ × Z₂), Haldane phase (SO(3)), topological insulators (U(1) × T)</li>
        <li><strong>Entanglement:</strong> Area law, no topological entropy</li>
      </ul>

      <p><strong>4. Trivial (Product States):</strong></p>
      <ul>
        <li>No order, no entanglement structure</li>
        <li>Example: Paramagnetic phase in strong field</li>
      </ul>
    </div>

    <div class="comparison-box">
      <h3>Order Type Comparison</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>SSB</th>
          <th>Topological</th>
          <th>SPT</th>
        </tr>
        <tr>
          <td><strong>Local order parameter</strong></td>
          <td>Yes (⟨O⟩ ≠ 0)</td>
          <td>No</td>
          <td>No (string possible)</td>
        </tr>
        <tr>
          <td><strong>Ground state degeneracy</strong></td>
          <td>Yes (broken symmetry)</td>
          <td>Yes (topological)</td>
          <td>No (unique)</td>
        </tr>
        <tr>
          <td><strong>Edge states</strong></td>
          <td>No (generic)</td>
          <td>Yes (chiral)</td>
          <td>Yes (protected)</td>
        </tr>
        <tr>
          <td><strong>Anyonic excitations</strong></td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td><strong>Topological entropy γ</strong></td>
          <td>0</td>
          <td>> 0</td>
          <td>0</td>
        </tr>
        <tr>
          <td><strong>Symmetry required</strong></td>
          <td>For classification</td>
          <td>No</td>
          <td>Yes (essential)</td>
        </tr>
        <tr>
          <td><strong>Entanglement</strong></td>
          <td>Area law</td>
          <td>Area law - γ</td>
          <td>Area law</td>
        </tr>
      </table>
    </div>

    <h2>Coexistence: SSB + Topological Order</h2>

    <div class="info-box">
      <h3>Symmetry-Enriched Topological Phases</h3>

      <p><strong>Definition:</strong> Phase with both topological order and global symmetry</p>

      <p><strong>Key question:</strong> How do symmetries act on anyonic excitations?</p>

      <p><strong>Possibilities:</strong></p>
      <ul>
        <li><strong>1. Symmetry permutes anyon types:</strong>
          <div class="equation">
            g: a → g(a) (different anyon)
          </div>
        </li>
        <li><strong>2. Symmetry fractionalization:</strong>
          <div class="equation">
            Anyon a carries fractional quantum number under symmetry g
          </div>
        </li>
        <li><strong>3. Symmetry defects:</strong>
          <div class="equation">
            g-defect has non-trivial braiding with anyons
          </div>
        </li>
      </ul>

      <p><strong>Example: Z₂ toric code with Ising SSB</strong></p>
      <div class="equation">
        H = H_TC + H_Ising = -J_s Σ_s A_s - J_p Σ_p B_p - J_I Σ_{⟨ij⟩} Z_i Z_j
      </div>
      <ul>
        <li>Z_i = additional spin degree of freedom per vertex</li>
        <li>Phase with both Z₂ topological order and Ising SSB</li>
        <li>4 topological sectors × 2 SSB sectors = 8-fold degeneracy on torus</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Fractional Quantum Hall States</h3>

      <p><strong>Example of TO + SSB:</strong> Certain FQHE states break rotational symmetry</p>

      <p><strong>Nematic FQHE states:</strong></p>
      <ul>
        <li>Topological order (anyonic excitations, fractional charges)</li>
        <li>Spontaneous breaking of rotational symmetry</li>
        <li>Anisotropic electron distribution</li>
      </ul>

      <p><strong>Wigner crystal in strong B field:</strong></p>
      <ul>
        <li>Topological: Lowest Landau level physics</li>
        <li>SSB: Translation symmetry broken (crystal order)</li>
        <li>Coexistence at certain filling factors</li>
      </ul>

      <p><strong>Experimental signatures:</strong></p>
      <ul>
        <li>Anisotropic transport (SSB)</li>
        <li>Fractional statistics (TO)</li>
        <li>Both observable simultaneously</li>
      </ul>
    </div>

    <h2>Competition: SSB vs Topological Order</h2>

    <div class="highlight-box">
      <h3>Quantum Double Models with Symmetry Breaking</h3>

      <p><strong>Model:</strong> Add Ising coupling to quantum double D(G)</p>
      <div class="equation">
        H = -J_G Σ_v A_v^G - J_G Σ_p B_p^G - J_I Σ_{⟨ij⟩} σ_i^z σ_j^z
      </div>

      <p><strong>Phase diagram (schematic):</strong></p>
      <ul>
        <li><strong>J_G ≫ J_I:</strong> Pure topological order (D(G) phase)</li>
        <li><strong>J_I ≫ J_G:</strong> Pure SSB (ferromagnetic Ising)</li>
        <li><strong>J_G ~ J_I:</strong> Competition → rich phase diagram</li>
      </ul>

      <p><strong>Possible intermediate phases:</strong></p>
      <ul>
        <li><strong>Coexistence:</strong> Both orders present (symmetry-enriched TO)</li>
        <li><strong>Novel phases:</strong> Confined/deconfined transitions</li>
        <li><strong>Multicritical points:</strong> Multiple order parameters critical simultaneously</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Deconfined Quantum Criticality</h3>

      <p><strong>Concept:</strong> Continuous transition between SSB phases without intermediate phase</p>

      <p><strong>Example: Néel to VBS transition</strong></p>
      <div class="equation">
        H = J_H Σ_⟨ij⟩ S_i · S_j + J_D Σ_⟨⟨ik⟩⟩ S_i · S_k + ...
      </div>

      <p><strong>Phases:</strong></p>
      <ul>
        <li><strong>Néel (antiferromagnet):</strong> Breaks spin rotation SU(2) → U(1)</li>
        <li><strong>VBS (valence bond solid):</strong> Breaks lattice translation Z₄</li>
        <li><strong>Conventional wisdom:</strong> First-order transition (different broken symmetries)</li>
      </ul>

      <p><strong>Deconfined criticality:</strong></p>
      <ul>
        <li>Continuous QPT possible!</li>
        <li>Emergent U(1) gauge theory at critical point</li>
        <li>Fractionalized spinons (S = 1/2 excitations from S = 1)</li>
        <li>Deconfined near criticality (spinons free)</li>
        <li>Beyond Landau-Ginzburg-Wilson paradigm</li>
      </ul>

      <p><strong>Entanglement signature:</strong></p>
      <ul>
        <li>Logarithmic corrections: S ~ L log L</li>
        <li>Anomalous scaling from emergent gauge fields</li>
      </ul>
    </div>

    <h2>SPT and SSB Interplay</h2>

    <div class="note-box">
      <h3>Haldane Phase Example</h3>

      <p><strong>Spin-1 Heisenberg chain:</strong></p>
      <div class="equation">
        H = J Σ_i S_i · S_{i+1},  S_i = 1
      </div>

      <p><strong>Haldane phase (J > 0, AFM):</strong></p>
      <ul>
        <li><strong>SPT phase:</strong> Protected by SO(3) spin rotation, time-reversal, inversion</li>
        <li><strong>Gap:</strong> Δ ~ 0.41J</li>
        <li><strong>String order:</strong> ⟨S_i^z e^{iπ Σ_j S_j^z} S_k^z⟩ ≠ 0</li>
        <li><strong>Edge states:</strong> Effective S = 1/2 at boundaries</li>
      </ul>

      <p><strong>Add single-ion anisotropy:</strong></p>
      <div class="equation">
        H' = H + D Σ_i (S_i^z)²
      </div>

      <p><strong>Phase diagram:</strong></p>
      <ul>
        <li><strong>D &lt; 0 (easy-plane):</strong> Breaks Z₂ (up/down in xy-plane) → SSB + SPT coexistence possible</li>
        <li><strong>D > D_c:</strong> Large-D phase (breaks Z₂ in z-direction)</li>
        <li><strong>Intermediate D:</strong> Competition between SPT and SSB</li>
      </ul>

      <p><strong>Entanglement:</strong></p>
      <ul>
        <li>Haldane SPT: S(ℓ) ~ log 2 (from edge S=1/2)</li>
        <li>SSB phase: Enhanced entanglement from degeneracy</li>
      </ul>
    </div>

    <h2>Frustrated Systems with Multiple Orders</h2>

    <div class="highlight-box">
      <h3>Kagome Lattice Antiferromagnet</h3>

      <p><strong>Model:</strong></p>
      <div class="equation">
        H = J Σ_{⟨ij⟩} S_i · S_j (on kagome lattice)
      </div>

      <p><strong>Frustration:</strong> Geometric frustration prevents simple Néel order</p>

      <p><strong>Candidate ground states:</strong></p>
      <ul>
        <li><strong>Quantum spin liquid (QSL):</strong> Topologically ordered, gapless spinons</li>
        <li><strong>Valence bond crystal (VBC):</strong> Breaks lattice symmetry, gapped</li>
        <li><strong>Chiral spin liquid:</strong> Breaks time-reversal, topological order</li>
      </ul>

      <p><strong>Nearby phases with perturbations:</strong></p>
      <ul>
        <li>Dzyaloshinskii-Moriya (DM) interaction → chiral phase (TO + broken T)</li>
        <li>Further-neighbor couplings → VBC (SSB lattice symmetry)</li>
        <li>Magnetic field → magnetization plateau (partial SSB)</li>
      </ul>

      <p><strong>Experimental materials:</strong></p>
      <ul>
        <li>Herbertsmithite (ZnCu₃(OH)₆Cl₂): Candidate QSL</li>
        <li>Volborthite: Possible VBC order</li>
        <li>Still debated: Nature of ground state</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Kitaev Honeycomb Model</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H_K = -J_x Σ_{x-links} σ_i^x σ_j^x - J_y Σ_{y-links} σ_i^y σ_j^y - J_z Σ_{z-links} σ_i^z σ_j^z
      </div>

      <p><strong>Pure Kitaev (J_x = J_y = J_z):</strong></p>
      <ul>
        <li>Exact solution via Majorana fermions</li>
        <li>Z₂ topological order (toric code type)</li>
        <li>Gapped or gapless depending on parameters</li>
      </ul>

      <p><strong>Add Heisenberg coupling:</strong></p>
      <div class="equation">
        H = H_K + J_H Σ_{⟨ij⟩} σ_i · σ_j
      </div>

      <p><strong>Rich phase diagram:</strong></p>
      <ul>
        <li><strong>Kitaev QSL:</strong> Topological order</li>
        <li><strong>Magnetic orders:</strong> Various SSB phases (zigzag, stripy, ferromagnetic)</li>
        <li><strong>Intermediate phases:</strong> Competition and coexistence</li>
      </ul>

      <p><strong>Material: α-RuCl₃</strong></p>
      <ul>
        <li>Approximate Kitaev physics</li>
        <li>Zigzag magnetic order at low T (SSB)</li>
        <li>Apply field → suppress SSB → approach QSL</li>
        <li>Half-quantized thermal Hall effect (signature of TO)</li>
      </ul>
    </div>

    <h2>Entanglement Signatures</h2>

    <div class="note-box">
      <h3>Distinguishing Mixed Orders via Entanglement</h3>

      <p><strong>SSB only:</strong></p>
      <div class="equation">
        S(A) = α |∂A| + corrections
      </div>
      <ul>
        <li>γ = 0 (no topological entropy)</li>
        <li>α depends on which SSB sector (may differ)</li>
      </ul>

      <p><strong>TO only:</strong></p>
      <div class="equation">
        S(A) = α' |∂A| - γ
      </div>
      <ul>
        <li>γ > 0 (topological entropy)</li>
        <li>Universal γ independent of region shape</li>
      </ul>

      <p><strong>SSB + TO coexistence:</strong></p>
      <div class="equation">
        S(A) = α'' |∂A| - γ + ...
      </div>
      <ul>
        <li>Both γ > 0 and degeneracy from SSB</li>
        <li>Extracting γ requires proper averaging over SSB sectors</li>
      </ul>

      <p><strong>SPT phases:</strong></p>
      <div class="equation">
        S(A) ~ |∂A| (area law, γ = 0)
      </div>
      <ul>
        <li>String order parameter distinguishes from trivial</li>
        <li>Edge entanglement spectrum shows characteristic structure</li>
      </ul>

      <p><strong>Numerical protocol:</strong></p>
      <ol>
        <li>Compute S(A) for various regions (Kitaev-Preskill geometry)</li>
        <li>Extract γ via linear combination</li>
        <li>Check for ground state degeneracy (SSB or TO)</li>
        <li>Measure string/Wilson loop correlators</li>
        <li>Combine to identify phase</li>
      </ol>
    </div>

    <h2>Transitions Between Mixed Orders</h2>

    <div class="highlight-box">
      <h3>Phase Transition Scenarios</h3>

      <p><strong>1. SSB preserved across transition:</strong></p>
      <ul>
        <li>Topological order appears/disappears</li>
        <li>Example: Toric code + Ising, varying J_TC</li>
        <li>Transition may be first-order or continuous</li>
      </ul>

      <p><strong>2. TO preserved, SSB changes:</strong></p>
      <ul>
        <li>Different SSB order parameter emerges</li>
        <li>Topological sectors remain</li>
        <li>Enrichment structure may change</li>
      </ul>

      <p><strong>3. Both orders change simultaneously:</strong></p>
      <ul>
        <li>Multicritical point</li>
        <li>Extremely rich behavior</li>
        <li>Entanglement shows complex scaling</li>
      </ul>

      <p><strong>4. Intermediate phase appears:</strong></p>
      <ul>
        <li>Phase diagram: SSB — intermediate — TO</li>
        <li>Intermediate may have neither or both orders</li>
        <li>Two transitions to study</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Three main orders:</strong> SSB (local order parameter), TO (anyons, γ > 0), SPT (symmetry-protected)</li>
        <li><strong>Coexistence:</strong> SSB + TO possible in symmetry-enriched topological phases</li>
        <li><strong>Competition:</strong> Different orders can compete → rich phase diagrams</li>
        <li><strong>Deconfined criticality:</strong> Continuous transitions between different SSB phases (beyond Landau)</li>
        <li><strong>Frustrated systems:</strong> Kagome, Kitaev models show interplay of multiple orders</li>
        <li><strong>Entanglement diagnostic:</strong> γ distinguishes TO, degeneracy from SSB or TO, string order for SPT</li>
        <li><strong>Materials:</strong> FQHE, frustrated magnets, Kitaev materials exhibit mixed orders</li>
        <li><strong>Open questions:</strong> Classification of symmetry-enriched phases, nature of multicritical points</li>
      </ul>

      <p><strong>Next:</strong> Section 5.4.6 focuses on I(A:C|B) as a universal detector for distinguishing topological from trivial entanglement.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_4_5'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
