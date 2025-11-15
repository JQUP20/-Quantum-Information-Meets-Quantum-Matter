<template>
  <div class="section-content">
    <h1>5.2.1 Dimensionality and Locality</h1>

    <p>The interplay between spatial dimensionality and locality of interactions fundamentally shapes the physics of quantum many-body systems. These geometric constraints determine correlation structures, entanglement scaling, phase diagrams, and computational tractability.</p>

    <h2>Spatial Dimensionality</h2>

    <div class="highlight-box">
      <h3>d-Dimensional Lattice Systems</h3>

      <p><strong>Definition:</strong> System of N sites arranged on d-dimensional lattice Λ</p>

      <p><strong>Common lattices:</strong></p>
      <ul>
        <li><strong>d=1:</strong> Chain (nearest-neighbor connectivity = 2)</li>
        <li><strong>d=2:</strong> Square lattice (connectivity = 4), triangular (6), honeycomb (3), kagome (4)</li>
        <li><strong>d=3:</strong> Cubic lattice (connectivity = 6), diamond, pyrochlore</li>
      </ul>

      <p><strong>Scaling relationships:</strong></p>
      <div class="equation">
        Linear size L → Volume N ~ L^d → Surface area ~ L^{d-1}
      </div>

      <p><strong>Why dimensionality matters:</strong></p>
      <ul>
        <li><strong>Phase transitions:</strong> Lower critical dimension d_c (e.g., Ising: d_c = 1, Heisenberg: d_c = 2)</li>
        <li><strong>Entanglement:</strong> Boundary area scales as L^{d-1}</li>
        <li><strong>Percolation:</strong> Connectivity transitions depend on d</li>
        <li><strong>Computational:</strong> 1D admits efficient algorithms (DMRG), higher d increasingly difficult</li>
      </ul>
    </div>

    <div class="comparison-box">
      <h3>Dimensionality Effects on Physics</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>d=1</th>
          <th>d=2</th>
          <th>d≥3</th>
        </tr>
        <tr>
          <td><strong>Long-range order (T>0)</strong></td>
          <td>No (Mermin-Wagner)</td>
          <td>No continuous symmetry breaking</td>
          <td>Yes (allowed)</td>
        </tr>
        <tr>
          <td><strong>Topological order</strong></td>
          <td>No (ground state)</td>
          <td>Yes (toric code, etc.)</td>
          <td>Yes (richer structure)</td>
        </tr>
        <tr>
          <td><strong>Area law exponent</strong></td>
          <td>S ~ L^0 = O(1)</td>
          <td>S ~ L^1</td>
          <td>S ~ L^{d-1}</td>
        </tr>
        <tr>
          <td><strong>Critical exponents</strong></td>
          <td>Universal (CFT)</td>
          <td>Ising: ν=1, XY: ν→∞</td>
          <td>Mean-field for d>4</td>
        </tr>
        <tr>
          <td><strong>Computational (gapped)</strong></td>
          <td>DMRG (efficient)</td>
          <td>PEPS (challenging)</td>
          <td>Intractable</td>
        </tr>
      </table>
    </div>

    <h2>Locality of Interactions</h2>

    <div class="highlight-box">
      <h3>k-Local Hamiltonians</h3>

      <p><strong>Definition:</strong> Hamiltonian is k-local if it decomposes as:</p>
      <div class="equation">
        H = Σ_i h_i,  where each h_i acts on ≤ k sites
      </div>

      <p><strong>Physical locality:</strong> Terms h_i act on geometrically close sites</p>
      <div class="equation">
        h_i = h_S,  S ⊂ Λ with |S| ≤ k and diam(S) ≤ R
      </div>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Nearest-neighbor (NN):</strong> h_i acts on adjacent sites only
          <div class="equation">
            H_{Ising} = -J Σ_{⟨i,j⟩} σ_i^z σ_j^z
          </div>
        </li>
        <li><strong>Next-nearest-neighbor (NNN):</strong> Includes second neighbors
          <div class="equation">
            H_{J1-J2} = J_1 Σ_{⟨i,j⟩} + J_2 Σ_{⟨⟨i,k⟩⟩}
          </div>
        </li>
        <li><strong>On-site + NN:</strong>
          <div class="equation">
            H_{TFIM} = -J Σ_{⟨i,j⟩} σ_i^z σ_j^z - h Σ_i σ_i^x
          </div>
        </li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Why Locality is Fundamental</h3>

      <p><strong>1. Physical realizability:</strong></p>
      <ul>
        <li>Real materials have local interactions (electromagnetic, exchange)</li>
        <li>Long-range interactions decay with distance (Coulomb ~ 1/r)</li>
        <li>Engineering artificial systems: local gates in quantum computers</li>
      </ul>

      <p><strong>2. Lieb-Robinson bound:</strong></p>
      <p>For local H, operators spread with finite velocity:</p>
      <div class="equation">
        ||[A(t), B]|| ≤ C ||A|| ||B|| e^{v|t| - r/ξ}
      </div>
      <ul>
        <li>r = distance between A and B</li>
        <li>v ~ J (effective light cone velocity)</li>
        <li>Implies finite correlation length ξ in gapped systems</li>
      </ul>

      <p><strong>3. Entanglement structure:</strong></p>
      <ul>
        <li>Locality + gap → area law for entanglement entropy</li>
        <li>Correlations decay exponentially: ⟨O_i O_j⟩_c ~ e^{-r_{ij}/ξ}</li>
        <li>Enables tensor network representations (MPS, PEPS)</li>
      </ul>

      <p><strong>4. Computational implications:</strong></p>
      <ul>
        <li>Local Hamiltonian problem: QMA-complete for k≥2 (Chapter 4)</li>
        <li>But area law makes many instances tractable</li>
        <li>Quantum circuits: Local gates enable universal computation</li>
      </ul>
    </div>

    <h2>Interaction Range</h2>

    <div class="highlight-box">
      <h3>Classification by Range</h3>

      <p><strong>1. Short-range:</strong> Finite range R</p>
      <div class="equation">
        h_i acts on sites within distance R
      </div>
      <ul>
        <li>Typical in condensed matter (nearest-neighbor dominant)</li>
        <li>Lieb-Robinson bound applies</li>
        <li>Area law for gapped ground states</li>
      </ul>

      <p><strong>2. Power-law:</strong> Interactions decay algebraically</p>
      <div class="equation">
        h_{ij} ~ J/r_{ij}^α
      </div>
      <ul>
        <li><strong>α > d:</strong> Effectively short-range (summable)</li>
        <li><strong>α = d:</strong> Marginal (logarithmic corrections)</li>
        <li><strong>α &lt; d:</strong> Long-range (non-summable)</li>
        <li>Examples: Dipolar interactions (α=3), Coulomb screened (α→∞)</li>
      </ul>

      <p><strong>3. Long-range:</strong> All-to-all coupling</p>
      <div class="equation">
        H = Σ_{i&lt;j} J_{ij} O_i O_j
      </div>
      <ul>
        <li>Mean-field models (infinite-range limit)</li>
        <li>Trapped ions: engineerable power-law interactions</li>
        <li>Lieb-Robinson bound violated (instantaneous propagation)</li>
        <li>Can violate area law even for gapped systems</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Example: Power-Law Interactions in Trapped Ions</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = Σ_{i&lt;j} J/|i-j|^α (σ_i^x σ_j^x + σ_i^y σ_j^y)
      </div>

      <p><strong>Experimentally tunable α:</strong></p>
      <ul>
        <li>α → ∞: Nearest-neighbor Ising</li>
        <li>α ≈ 1-2: Accessible in current experiments</li>
        <li>α → 0: Mean-field (all-to-all)</li>
      </ul>

      <p><strong>Phase diagram:</strong></p>
      <ul>
        <li>α > 1: Ising universality class</li>
        <li>0 &lt; α &lt; 1: Mean-field behavior</li>
        <li>Crossover at α ≈ 1 (dimension-dependent)</li>
      </ul>
    </div>

    <h2>Geometry and Graph Structure</h2>

    <div class="info-box">
      <h3>Interaction Graphs</h3>

      <p><strong>Definition:</strong> Graph G = (V, E) where:</p>
      <ul>
        <li>Vertices V: Physical sites/qubits</li>
        <li>Edges E: Non-zero couplings h_{ij} ≠ 0</li>
      </ul>

      <p><strong>Graph properties affecting physics:</strong></p>

      <p><strong>1. Coordination number z:</strong></p>
      <ul>
        <li>z = |neighbors per site|</li>
        <li>Chain: z=2, square: z=4, honeycomb: z=3</li>
        <li>Higher z → more frustration potential, richer phase diagrams</li>
      </ul>

      <p><strong>2. Bipartiteness:</strong></p>
      <ul>
        <li>Bipartite: V = A ∪ B with edges only between A and B</li>
        <li>Square, honeycomb bipartite → no geometric frustration</li>
        <li>Triangular, kagome non-bipartite → frustration possible</li>
      </ul>

      <p><strong>3. Dimensionality (intrinsic vs extrinsic):</strong></p>
      <ul>
        <li>Intrinsic: d = graph dimension (e.g., tree has d→∞)</li>
        <li>Extrinsic: Embedding in ℝ^d</li>
        <li>Mismatch possible: Cayley tree (d=∞) embedded in ℝ^2</li>
      </ul>

      <p><strong>4. Planarity:</strong></p>
      <ul>
        <li>Planar graphs embeddable in plane without crossing edges</li>
        <li>Toric code, surface code: planar (with boundaries/topology)</li>
        <li>Non-planar: K₅, K₃,₃ (complete graphs)</li>
      </ul>
    </div>

    <h2>Boundary Conditions</h2>

    <div class="highlight-box">
      <h3>Impact on Finite-Size Systems</h3>

      <p><strong>1. Open Boundary Conditions (OBC):</strong></p>
      <ul>
        <li>System terminates at edges (boundary sites exist)</li>
        <li>Breaks translation invariance</li>
        <li>Edge states possible (e.g., AKLT, topological insulators)</li>
        <li>Entanglement: Boundary contribution explicitly visible</li>
      </ul>

      <p><strong>2. Periodic Boundary Conditions (PBC):</strong></p>
      <ul>
        <li>System wraps around (torus topology in 2D)</li>
        <li>Preserves translation invariance</li>
        <li>Eliminates finite-size edge effects</li>
        <li>Enables Bloch theorem, momentum quantization</li>
        <li>Topological: Allows non-trivial ground state degeneracy</li>
      </ul>

      <p><strong>3. Twisted/Antiperiodic:</strong></p>
      <div class="equation">
        |ψ(x + L)⟩ = e^{iθ} |ψ(x)⟩
      </div>
      <ul>
        <li>θ = 0: PBC, θ = π: Antiperiodic</li>
        <li>Useful for extracting topological invariants</li>
        <li>Fermions: Antiperiodic natural for finite temperature</li>
      </ul>

      <p><strong>Thermodynamic limit:</strong></p>
      <p>Physical observables become boundary-condition independent as N→∞ (for local observables)</p>
    </div>

    <h2>Dimensionality Reduction via Tensor Networks</h2>

    <div class="note-box">
      <h3>Effective Dimensionality</h3>

      <p><strong>Observation:</strong> Area law implies low "entanglement dimension"</p>

      <p><strong>1D systems (MPS):</strong></p>
      <div class="equation">
        |ψ⟩ = Σ_{s_1,...,s_N} Tr[A^{s_1} A^{s_2} ... A^{s_N}] |s_1...s_N⟩
      </div>
      <ul>
        <li>Bond dimension χ = e^{O(1)} for area law</li>
        <li>Efficient: Hilbert space 2^N → storage χ²Nd</li>
      </ul>

      <p><strong>2D systems (PEPS):</strong></p>
      <div class="equation">
        χ = e^{O(L)} for area law S ~ L
      </div>
      <ul>
        <li>Still polynomial: χ ~ poly(L) for fixed error</li>
        <li>Contractions #P-hard but often tractable in practice</li>
      </ul>

      <p><strong>Higher d:</strong></p>
      <ul>
        <li>Bond dimension χ ~ e^{O(L^{d-1})}</li>
        <li>Becomes exponential for d≥3 (not efficient)</li>
        <li>Reflects area law: S ~ L^{d-1}</li>
      </ul>

      <p><strong>Insight:</strong> Dimensionality and locality conspire to make 1D and (to extent) 2D tractable</p>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Dimensionality d:</strong> Controls surface/volume ratio L^{d-1}/L^d, critical phenomena, and computational complexity</li>
        <li><strong>Locality:</strong> Physical interactions are local (finite range) → Lieb-Robinson bound → finite correlation length in gapped systems</li>
        <li><strong>Area law consequence:</strong> S(A) ~ |∂A| ~ L^{d-1} for gapped ground states</li>
        <li><strong>Computational divide:</strong> 1D efficient (DMRG), 2D challenging (PEPS), d≥3 intractable</li>
        <li><strong>Graph structure:</strong> Bipartiteness, coordination number, planarity affect frustration and phase diagrams</li>
        <li><strong>Boundary conditions:</strong> OBC vs PBC affects edge states and topological degeneracy</li>
      </ul>

      <p><strong>Next:</strong> Section 5.2.2 explores how taking the thermodynamic limit (N→∞) reveals universal properties independent of microscopic details.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_2_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
