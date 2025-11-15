<template>
  <div class="section-content">
    <h1>7.3.1 Quantum Phases and Local Unitary Evolutions in Ground States</h1>

    <p>At the heart of modern quantum phase classification lies a deceptively simple yet profound idea: two ground states belong to the same quantum phase if and only if they can be connected by a local unitary transformation. This section develops this framework rigorously, showing how local unitaries preserve the essential topological and entanglement properties that characterize quantum phases while allowing continuous deformation of local details.</p>

    <div class="info-box">
      <h3>Central Concept</h3>
      <p><strong>Local unitary equivalence defines quantum phases</strong></p>
      <ul>
        <li><strong>Key idea:</strong> States related by local unitaries share all topological properties</li>
        <li><strong>Implication:</strong> Phases = equivalence classes under local unitary transformations</li>
        <li><strong>Power:</strong> Applies beyond symmetry-breaking, includes topological phases</li>
        <li><strong>Connection:</strong> Generalizes Landau's adiabatic continuity to quantum information setting</li>
      </ul>
    </div>

    <h2>1. Defining Local Unitary Transformations</h2>

    <div class="highlight-box">
      <h3>Mathematical Framework</h3>

      <p><strong>Unitary transformation (general):</strong></p>
      <div class="equation">
        U: ℋ → ℋ,  U† U = U U† = I
      </div>
      <p>Preserves inner products: ⟨φ|ψ⟩ = ⟨Uφ|Uψ⟩</p>

      <p><strong>Locality requirement:</strong></p>
      <p>A unitary U is <strong>local</strong> if it can be decomposed as:</p>
      <div class="equation">
        U = U_n U_{n-1} ··· U_2 U_1
      </div>
      <p>where each U_i acts non-trivially only on a bounded region R_i with diameter ≤ ℓ.</p>

      <p><strong>Finite depth:</strong></p>
      <ul>
        <li>Number of layers n is finite (independent of system size L)</li>
        <li>Depth d = n determines "circuit complexity" of transformation</li>
        <li>ℓ = support size of each gate (typically constant)</li>
      </ul>

      <p><strong>Example (1D chain):</strong></p>
      <div class="equation">
        U = \prod_{i \text{ odd}} U_{i,i+1} · \prod_{j \text{ even}} U_{j,j+1}
      </div>
      <p>Two layers of nearest-neighbor gates (depth d = 2)</p>
    </div>

    <div class="note-box">
      <h3>Why Locality Matters</h3>

      <p><strong>Physical motivation:</strong></p>
      <ul>
        <li>Real interactions are local (short-range)</li>
        <li>Time evolution under local Hamiltonian for finite time is local unitary</li>
        <li>Experimentally implementable operations are local</li>
        <li>Local operations cannot create long-range entanglement from short-range entangled states</li>
      </ul>

      <p><strong>Mathematical consequences:</strong></p>
      <ul>
        <li>Local unitaries preserve topological invariants (Chern numbers, etc.)</li>
        <li>Cannot change pattern of long-range entanglement</li>
        <li>Cannot alter ground state degeneracy on closed manifolds</li>
        <li>Cannot create/destroy anyonic excitations</li>
      </ul>

      <p><strong>Information-theoretic interpretation:</strong></p>
      <ul>
        <li>Local unitaries = reversible local operations</li>
        <li>Preserve quantum correlations at distances &gt; ℓ</li>
        <li>Form natural equivalence relation for many-body states</li>
      </ul>
    </div>

    <h2>2. Local Unitary Equivalence of Ground States</h2>

    <div class="info-box">
      <h3>Defining Same Phase</h3>

      <p><strong>Definition:</strong></p>
      <p>Two gapped ground states |ψ⟩ and |ψ'⟩ are <strong>in the same quantum phase</strong> if there exists a local unitary U such that:</p>
      <div class="equation">
        |ψ'⟩ = U |ψ⟩
      </div>

      <p><strong>Continuous version:</strong></p>
      <p>Alternatively, |ψ(0)⟩ and |ψ(1)⟩ are in same phase if there exists a continuous path:</p>
      <div class="equation">
        |ψ(t)⟩ = U(t) |ψ(0)⟩,  t ∈ [0, 1]
      </div>
      <p>where U(t) is a continuous family of local unitaries with U(0) = I.</p>

      <p><strong>Generator:</strong></p>
      <div class="equation">
        U(t) = \exp(-i ∫_0^t K(s) ds)
      </div>
      <p>where K(t) is a local Hermitian operator (quasi-local in general)</p>
    </div>

    <div class="highlight-box">
      <h3>Equivalence Relation Properties</h3>

      <p><strong>Reflexivity:</strong></p>
      <div class="equation">
        |ψ⟩ ∼ |ψ⟩  (U = I)
      </div>

      <p><strong>Symmetry:</strong></p>
      <div class="equation">
        |ψ⟩ ∼ |ψ'⟩ ⟹ |ψ'⟩ ∼ |ψ⟩  (U' = U†)
      </div>

      <p><strong>Transitivity:</strong></p>
      <div class="equation">
        |ψ⟩ ∼ |ψ'⟩, |ψ'⟩ ∼ |ψ''⟩ ⟹ |ψ⟩ ∼ |ψ''⟩  (U'' = U' U)
      </div>

      <p><strong>Equivalence classes = quantum phases:</strong></p>
      <p>The set of all gapped ground states is partitioned into equivalence classes under local unitary equivalence. Each class represents a distinct quantum phase.</p>
    </div>

    <h2>3. Adiabatic Paths and Gap Condition</h2>

    <div class="note-box">
      <h3>Connection to Hamiltonian Evolution</h3>

      <p><strong>Adiabatic theorem:</strong></p>
      <p>Consider Hamiltonian path H(t), t ∈ [0, T]. If:</p>
      <ul>
        <li>H(t) is local for all t</li>
        <li>Gap Δ(t) ≥ Δ_min &gt; 0 for all t</li>
        <li>H(t) varies slowly enough: ||∂_t H(t)|| ≪ Δ²/||H||</li>
      </ul>
      <p>Then ground state evolves as:</p>
      <div class="equation">
        |ψ(T)⟩ ≈ U(T) |ψ(0)⟩,  U(T) = \mathcal{T} \exp(-i ∫_0^T H(t) dt)
      </div>
      <p>with negligible excitation probability.</p>

      <p><strong>Locality of evolution:</strong></p>
      <p>If H(t) is local (sum of terms with bounded support), then U(t) is approximately local for t &lt; t_max ~ L (Lieb-Robinson bound).</p>

      <p><strong>Implication:</strong></p>
      <p>Gapped ground states connected by adiabatic path (no gap closing) are related by local unitary → same phase.</p>
    </div>

    <h2>4. What Local Unitaries Cannot Change</h2>

    <div class="comparison-box">
      <h3>Preserved vs Non-preserved Quantities</h3>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Preserved?</th>
          <th>Explanation</th>
        </tr>
        <tr>
          <td><strong>Topological invariants</strong></td>
          <td>Yes</td>
          <td>Chern number, winding number, etc. cannot change under local U</td>
        </tr>
        <tr>
          <td><strong>Long-range entanglement pattern</strong></td>
          <td>Yes</td>
          <td>Topological entanglement entropy γ invariant</td>
        </tr>
        <tr>
          <td><strong>Ground state degeneracy (closed surface)</strong></td>
          <td>Yes</td>
          <td>d_GSD depends on topology, not affected by local U</td>
        </tr>
        <tr>
          <td><strong>Anyonic content</strong></td>
          <td>Yes</td>
          <td>Types of anyons and fusion rules preserved</td>
        </tr>
        <tr>
          <td><strong>Symmetry</strong></td>
          <td>Sometimes</td>
          <td>Only if U respects symmetry: [U, G] = 0</td>
        </tr>
        <tr>
          <td><strong>Local order parameter</strong></td>
          <td>No</td>
          <td>⟨φ(r)⟩ can change under local U</td>
        </tr>
        <tr>
          <td><strong>Short-range correlations</strong></td>
          <td>No</td>
          <td>⟨O(r) O(0)⟩ for |r| ~ ℓ can change</td>
        </tr>
        <tr>
          <td><strong>Energy spectrum</strong></td>
          <td>No</td>
          <td>U changes Hamiltonian: H → U H U†</td>
        </tr>
      </table>
    </div>

    <div class="info-box">
      <h3>Detailed Examples</h3>

      <p><strong>1. Topological entanglement entropy:</strong></p>
      <div class="equation">
        S(A) = α |∂A| - γ + ...
      </div>
      <p>The topological term γ = log 𝒟 is invariant under local U because:</p>
      <ul>
        <li>Local U preserves entanglement structure for regions separated by &gt; ℓ</li>
        <li>Area law coefficient α may change, but γ is robust</li>
        <li>Proof uses strong subadditivity and locality</li>
      </ul>

      <p><strong>2. Ground state degeneracy:</strong></p>
      <p>On torus T², toric code has d_GSD = 4. Any local U preserves this:</p>
      <div class="equation">
        U: ℋ_{GS} → ℋ'_{GS},  dim(ℋ_{GS}) = dim(ℋ'_{GS})
      </div>
      <p>Cannot split or merge ground states with local operations.</p>

      <p><strong>3. Symmetry breaking:</strong></p>
      <p>Ferromagnet |↑↑...↑⟩ and paramagneto |→→...→⟩ = ∏_i |↑ + ↓⟩_i/√2:</p>
      <div class="equation">
        |→...→⟩ = \prod_i H_i |↑...↑⟩
      </div>
      <p>Related by local unitary (Hadamard on each site) → different symmetry-breaking but same topological class!</p>
    </div>

    <h2>5. Examples: Same Phase</h2>

    <div class="highlight-box">
      <h3>States in Same Phase</h3>

      <p><strong>Example 1: Product states</strong></p>
      <div class="equation">
        |ψ⟩ = |↑↑...↑⟩,  |ψ'⟩ = |↓↓...↓⟩
      </div>
      <p>Related by: U = ∏_i σ_i^x</p>
      <p>Conclusion: Same trivial phase (both product states, no entanglement)</p>

      <p><strong>Example 2: Different cat states</strong></p>
      <div class="equation">
        |cat_z⟩ = \frac{|↑...↑⟩ + |↓...↓⟩}{√2},  |cat_x⟩ = \frac{|→...→⟩ + |←...←⟩}{√2}
      </div>
      <p>Related by: U = ∏_i H_i (global Hadamard)</p>
      <p>Conclusion: Same phase (both have similar long-range entanglement structure)</p>

      <p><strong>Example 3: Toric code on different lattices</strong></p>
      <p>Toric code on square lattice vs triangular lattice:</p>
      <ul>
        <li>Both have same topological order (Z₂)</li>
        <li>Same d_GSD = 4, same γ = log 2</li>
        <li>Related by quasi-local unitary (lattice deformation)</li>
        <li>Conclusion: Same topological phase</li>
      </ul>
    </div>

    <h2>6. Examples: Different Phases</h2>

    <div class="note-box">
      <h3>States in Different Phases</h3>

      <p><strong>Example 1: Product state vs toric code</strong></p>
      <div class="equation">
        |triv⟩ = |↑↑...↑⟩,  |TC⟩ = toric\ code\ ground\ state
      </div>
      <ul>
        <li>|triv⟩: γ = 0 (short-range entangled)</li>
        <li>|TC⟩: γ = log 2 (long-range entangled)</li>
        <li>Cannot be related by local U (topological entanglement differs)</li>
        <li>Conclusion: Different phases</li>
      </ul>

      <p><strong>Example 2: Different Chern numbers</strong></p>
      <p>Integer quantum Hall states with ν = 1 vs ν = 2:</p>
      <ul>
        <li>Chern numbers C₁ = 1, C₂ = 2</li>
        <li>Topological invariants differ</li>
        <li>Cannot change Chern number with local U</li>
        <li>Conclusion: Different topological phases</li>
      </ul>

      <p><strong>Example 3: Trivial vs topological insulator</strong></p>
      <div class="equation">
        |trivial⟩: ℤ₂ = 0,  |TI⟩: ℤ₂ = 1
      </div>
      <ul>
        <li>Both SRE (γ = 0)</li>
        <li>But different SPT class (protected by time-reversal)</li>
        <li>Distinguished by edge states</li>
        <li>Conclusion: Different phases (within SRE category)</li>
      </ul>
    </div>

    <h2>7. Lieb-Robinson Bound and Approximate Locality</h2>

    <div class="info-box">
      <h3>Rigorous Treatment of Locality</h3>

      <p><strong>Lieb-Robinson theorem:</strong></p>
      <p>For local Hamiltonian H = ∑_X h_X with ||h_X|| ≤ J and support diameter ≤ ℓ:</p>
      <div class="equation">
        ||[A(t), B(0)]|| ≤ C ||A|| ||B|| e^{v_LR t - r/ξ_{LR}}
      </div>
      <ul>
        <li>A, B: Local operators separated by distance r</li>
        <li>v_LR: Lieb-Robinson velocity (~ Jℓ)</li>
        <li>ξ_LR: Length scale (~ ℓ)</li>
      </ul>

      <p><strong>Implications:</strong></p>
      <ul>
        <li>Information propagates with finite velocity v_LR</li>
        <li>Commutator of A(t) and B(0) exponentially suppressed for r &gt; v_LR t</li>
        <li>Time evolution for time t affects region of size ~ v_LR t</li>
      </ul>

      <p><strong>For ground states:</strong></p>
      <p>If system has gap Δ, evolution U(t) = e^{-iHt} is approximately local for:</p>
      <div class="equation">
        t &lt; t_* ~ Δ^{-1} \log L
      </div>
      <p>This justifies treating adiabatic paths as generating local unitaries.</p>
    </div>

    <h2>8. Quasi-Adiabatic Continuation</h2>

    <div class="highlight-box">
      <h3>Practical Algorithm for Phase Determination</h3>

      <p><strong>Goal:</strong> Determine if |ψ(λ₀)⟩ and |ψ(λ₁)⟩ are in same phase.</p>

      <p><strong>Procedure:</strong></p>
      <ol>
        <li>Construct path λ(t): [0, T] → parameter space connecting λ₀ to λ₁</li>
        <li>Check gap condition: Δ(λ(t)) ≥ Δ_min &gt; 0 for all t</li>
        <li>Evolve adiabatically: |ψ(T)⟩ = 𝒯 exp(-i∫ H(λ(t)) dt) |ψ(0)⟩</li>
        <li>If path exists without gap closing → same phase</li>
        <li>If all paths have gap closing → different phases</li>
      </ol>

      <p><strong>Efficiency:</strong></p>
      <ul>
        <li>Lieb-Robinson bound ensures locality for t ~ poly(L)</li>
        <li>Can approximate evolution using finite-depth quantum circuits</li>
        <li>Tensor network methods (MPS, PEPS) efficient for gapped systems</li>
      </ul>

      <p><strong>Subtlety:</strong></p>
      <p>Gap closing necessary but not sufficient for phase transition:</p>
      <ul>
        <li>Necessary: Different phases must have gap closing between them</li>
        <li>Not sufficient: Gap can close without phase transition (e.g., level crossing in small system)</li>
        <li>Thermodynamic limit required for rigorous definition</li>
      </ul>
    </div>

    <h2>9. Symmetry Considerations</h2>

    <div class="note-box">
      <h3>Symmetric Local Unitaries</h3>

      <p><strong>Definition:</strong></p>
      <p>If both |ψ⟩ and |ψ'⟩ have symmetry G, we require U to respect symmetry:</p>
      <div class="equation">
        [U, g] = 0  for all g ∈ G
      </div>

      <p><strong>Symmetric equivalence classes:</strong></p>
      <ul>
        <li>Symmetric states form subset of all states</li>
        <li>Equivalence under symmetric local unitaries is finer classification</li>
        <li>Gives rise to symmetry-protected topological (SPT) phases</li>
      </ul>

      <p><strong>Example:</strong></p>
      <p>Time-reversal symmetric insulators:</p>
      <ul>
        <li>Trivial insulator: Z₂ = 0</li>
        <li>Topological insulator: Z₂ = 1</li>
        <li>Both SRE, but different under TR-symmetric local unitaries</li>
      </ul>

      <p><strong>Without symmetry:</strong></p>
      <p>SPT phases collapse to trivial phase (can be disentangled by symmetry-breaking local unitaries)</p>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Local unitary evolutions in ground states - Key points:</strong></p>
      <ul>
        <li><strong>Local unitary:</strong> Finite-depth quantum circuit with bounded support gates</li>
        <li><strong>Equivalence:</strong> |ψ⟩ ∼ |ψ'⟩ if related by local unitary U</li>
        <li><strong>Phases:</strong> Equivalence classes under local unitary transformations</li>
        <li><strong>Preserved:</strong> Topological invariants, LRE pattern, anyons, GSD</li>
        <li><strong>Not preserved:</strong> Local order parameters, short-range correlations, energy</li>
        <li><strong>Connection:</strong> Adiabatic paths with persistent gap generate local unitaries</li>
        <li><strong>Lieb-Robinson:</strong> Provides rigorous bound on locality of time evolution</li>
      </ul>

      <p><strong>Next:</strong> Section 7.3.2 develops the quantum circuit formulation, showing how local unitaries can be systematically implemented and analyzed.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_7_3_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
