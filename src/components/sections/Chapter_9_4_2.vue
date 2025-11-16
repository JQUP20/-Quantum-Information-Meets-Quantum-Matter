<template>
  <div class="section-content">
    <h1>9.4.2 Structural Properties</h1>

    <p>
      Having introduced the toric code as our prototypical topological PEPS, we now explore the general structural properties that distinguish topological PEPS from conventional symmetry-breaking states. These properties reveal how global topological invariants emerge from local tensor structure.
    </p>

    <h2>Entanglement Structure in Topological Phases</h2>

    <div class="info-box">
      <h3>Area Law with Topological Correction</h3>
      <p>
        While general PEPS satisfy S ≤ |∂A| log χ, topologically ordered states exhibit a remarkable universal correction:
      </p>
      <div class="equation">
        S(ρ_A) = α|∂A| - γ_topo + O(1/|∂A|)
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>α|∂A| is the area law term (non-universal)</li>
        <li><strong>γ_topo</strong> is the topological entanglement entropy (TEE), a universal constant</li>
        <li>γ_topo > 0 for topologically ordered states</li>
        <li>γ_topo = 0 for trivial states</li>
      </ul>
      <p>
        <strong>Physical meaning:</strong> The negative correction reflects long-range entanglement that cannot be created by local operations—the hallmark of topological order.
      </p>
    </div>

    <h3>Kitaev-Preskill Construction</h3>

    <div class="highlight-box">
      <h4>Extracting Topological Entanglement Entropy</h4>
      <p>
        To isolate γ_topo, consider regions A, B, C, ABC with entropies S_A, S_B, S_C, S_{ABC}:
      </p>
      <div class="equation">
        γ_topo = S_A + S_B + S_C - S_{AB} - S_{BC} - S_{CA} + S_{ABC}
      </div>
      <p>
        This combination cancels area law contributions, leaving only the topological term.
      </p>
      <p>
        <strong>Example values:</strong>
      </p>
      <ul>
        <li>Toric code: γ_topo = log 2 ≈ 0.693</li>
        <li>ℤ_n toric code: γ_topo = log n</li>
        <li>Doubled Fibonacci: γ_topo = log(φ) where φ = (1+√5)/2</li>
        <li>General: γ_topo = log D where D is total quantum dimension</li>
      </ul>
    </div>

    <h2>Transfer Matrix Properties</h2>

    <div class="info-box">
      <h3>Transfer Matrix in Topological PEPS</h3>
      <p>
        For a PEPS on an infinite cylinder (periodic in one direction), the transfer matrix relates boundary states:
      </p>
      <div class="equation">
        E = ∑_i (A^i ⊗ Ā^i)
      </div>
      <p>
        where we contract over one spatial direction, treating the perpendicular direction as "time."
      </p>
      <p>
        <strong>Key difference from symmetry-breaking:</strong>
      </p>
      <ul>
        <li><strong>Symmetry-breaking:</strong> Unique leading eigenvalue (gap in spectrum)</li>
        <li><strong>Topological order:</strong> Degenerate leading eigenspace with dimension D (ground state degeneracy)</li>
      </ul>
    </div>

    <h3>Leading Eigenspace Structure</h3>

    <div class="highlight-box">
      <h4>Topological Sectors</h4>
      <p>
        The D-dimensional leading eigenspace of E corresponds to topological sectors:
      </p>
      <div class="equation">
        E|ψ_a⟩ = λ_max|ψ_a⟩,  a = 1, ..., D
      </div>
      <p>
        where each |ψ_a⟩ represents a distinct topological sector on the boundary.
      </p>
      <p>
        <strong>Physical interpretation:</strong>
      </p>
      <ul>
        <li>Each eigenstate corresponds to threading different anyonic flux through the cylinder</li>
        <li>D states = D topological sectors on torus</li>
        <li>String operators act within this D-dimensional space</li>
      </ul>
    </div>

    <h2>Ground State Degeneracy</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Symmetry-Breaking Phase</th>
            <th>Topological Phase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Degeneracy origin</td>
            <td>Spontaneous symmetry breaking</td>
            <td>Topology (genus, boundary)</td>
          </tr>
          <tr>
            <td>Degeneracy on sphere</td>
            <td>|G| (group order)</td>
            <td>1 (unique)</td>
          </tr>
          <tr>
            <td>Degeneracy on torus</td>
            <td>|G|</td>
            <td>D (topological)</td>
          </tr>
          <tr>
            <td>Local operator splitting</td>
            <td>Yes (order parameter)</td>
            <td>No (all local ⟨O⟩ = 0)</td>
          </tr>
          <tr>
            <td>Robustness</td>
            <td>Broken by symmetry-breaking perturbations</td>
            <td>Robust to all local perturbations</td>
          </tr>
          <tr>
            <td>Distinguishability</td>
            <td>Local order parameter distinguishes</td>
            <td>Requires non-local Wilson loops</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Topological Degeneracy Formula</h3>

    <div class="info-box">
      <h3>Dependence on Topology</h3>
      <p>
        For a general 2D surface of genus g (number of holes):
      </p>
      <div class="equation">
        D(g) = |𝒜|^{2g}
      </div>
      <p>
        where |𝒜| is the number of anyon types.
      </p>
      <p>
        <strong>Examples:</strong>
      </p>
      <ul>
        <li>Toric code (ℤ₂): |𝒜| = 4 (1, e, m, ε), so D(g) = 4^g</li>
        <li>Genus 0 (sphere): D = 1 (unique ground state)</li>
        <li>Genus 1 (torus): D = 4 for toric code</li>
        <li>Genus 2 (double torus): D = 16 for toric code</li>
      </ul>
    </div>

    <h2>PEPS Tensor Structure for Topological Order</h2>

    <div class="info-box">
      <h3>Virtual Symmetry Constraints</h3>
      <p>
        Topological PEPS tensors satisfy special constraints on virtual indices:
      </p>
      <ol>
        <li><strong>Gauge constraints:</strong> Virtual bonds carry gauge charges (e.g., ℤ₂ for toric code)</li>
        <li><strong>Local gauge invariance:</strong> Physical projection must be gauge-invariant</li>
        <li><strong>Blocking structure:</strong> Tensors decompose by gauge charge sectors</li>
      </ol>
      <p>
        For toric code with χ = 2:
      </p>
      <div class="equation">
        A^{i₁i₂i₃i₄}_{αβγδ} ≠ 0  ⟺  α + β + γ + δ + f(i₁,i₂,i₃,i₄) = 0 (mod 2)
      </div>
      <p>
        This ensures Gauss law: total charge around each vertex is zero.
      </p>
    </div>

    <h3>Injectivity and Non-Injectivity</h3>

    <div class="highlight-box">
      <h4>Different Behavior from Symmetry-Breaking</h4>
      <p>
        <strong>Injective PEPS:</strong>
      </p>
      <ul>
        <li>Map from virtual to physical indices is injective (one-to-one for large enough region)</li>
        <li>Unique ground state on sphere/disk (open BC)</li>
        <li>Example: Toric code on disk</li>
      </ul>
      <p>
        <strong>Topological degeneracy mechanism:</strong>
      </p>
      <ul>
        <li>On torus: Different boundary conditions on virtual bonds give different ground states</li>
        <li>Each BC corresponds to threading anyon flux through cycles</li>
        <li>This is fundamentally different from symmetry-breaking, where tensors themselves encode degenerate states</li>
      </ul>
    </div>

    <h2>String Operators and Non-Local Order</h2>

    <div class="info-box">
      <h3>Wilson Loop Operators</h3>
      <p>
        Topological order is characterized by non-local string operators:
      </p>
      <div class="equation">
        W_C = ∏_{e ∈ C} σ^x_e  or  ∏_{e ∈ C} σ^z_e
      </div>
      <p>
        where C is a closed curve.
      </p>
      <p>
        <strong>Properties:</strong>
      </p>
      <ul>
        <li><strong>Contractible loops:</strong> ⟨W_C⟩ = 1 in ground state (trivial)</li>
        <li><strong>Non-contractible loops:</strong> ⟨W_C⟩ distinguishes topological sectors</li>
        <li><strong>Independence:</strong> Two independent non-contractible loops on torus</li>
        <li><strong>Commutation:</strong> [W_{C₁}, W_{C₂}] = 0 unless loops link</li>
      </ul>
    </div>

    <h3>String-Net Condensation Picture</h3>

    <div class="highlight-box">
      <h4>PEPS as String-Net States</h4>
      <p>
        Topological PEPS can be understood as condensates of string operators:
      </p>
      <ol>
        <li>Virtual bonds represent string types (labeled by anyons)</li>
        <li>Tensors encode fusion and splitting rules at vertices</li>
        <li>Ground state is superposition of all closed string configurations</li>
        <li>Open string endpoints = anyonic excitations</li>
      </ol>
      <p>
        This "string-net" perspective unifies PEPS representation with anyon theory.
      </p>
    </div>

    <h2>Boundary States and Entanglement</h2>

    <div class="info-box">
      <h3>Matrix Product Operator on Boundary</h3>
      <p>
        When tracing out a region, the reduced state on the boundary can be written as:
      </p>
      <div class="equation">
        ρ_boundary = ∑_{a=1}^D p_a |ψ_a⟩⟨ψ_a|
      </div>
      <p>
        where |ψ_a⟩ are D boundary MPS, one for each topological sector.
      </p>
      <p>
        <strong>Key insight:</strong> Boundary entanglement reveals bulk topology—this is the essence of bulk-boundary correspondence.
      </p>
    </div>

    <h2>Stability Under Perturbations</h2>

    <div class="highlight-box">
      <h4>Why Topological Order is Robust</h4>
      <p>
        Consider a perturbation to the PEPS tensors: A → A + δA
      </p>
      <p>
        <strong>Result:</strong>
      </p>
      <ul>
        <li>If δA is small and local, topological properties unchanged</li>
        <li>Ground state degeneracy D remains (up to exponentially small splitting)</li>
        <li>Anyonic excitations persist with modified energy gap</li>
        <li>Topological entanglement entropy γ_topo unchanged</li>
      </ul>
      <p>
        <strong>Physical reason:</strong> Topological invariants (D, γ_topo, braiding statistics) cannot change unless phase transition occurs. Small perturbations cannot close gap.
      </p>
    </div>

    <h3>Phase Transition to Trivial Phase</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Observable</th>
            <th>Topological Phase</th>
            <th>At Critical Point</th>
            <th>Trivial Phase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ground state degeneracy D</td>
            <td>D > 1</td>
            <td>Degeneracy lifts</td>
            <td>D = 1</td>
          </tr>
          <tr>
            <td>Energy gap Δ</td>
            <td>Δ > 0</td>
            <td>Δ → 0</td>
            <td>Δ > 0 (reopens)</td>
          </tr>
          <tr>
            <td>Correlation length ξ</td>
            <td>ξ ~ O(1)</td>
            <td>ξ → ∞</td>
            <td>ξ ~ O(1)</td>
          </tr>
          <tr>
            <td>γ_topo</td>
            <td>γ_topo > 0</td>
            <td>γ_topo → 0</td>
            <td>γ_topo = 0</td>
          </tr>
          <tr>
            <td>Anyons</td>
            <td>Deconfined</td>
            <td>Confine</td>
            <td>None (or confined)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Computational Signatures</h2>

    <div class="info-box">
      <h3>Detecting Topological Order in PEPS</h3>
      <p>
        When working with PEPS numerically, topological order manifests as:
      </p>
      <ul>
        <li><strong>Transfer matrix:</strong> D degenerate leading eigenvalues (within numerical precision)</li>
        <li><strong>Entanglement spectrum:</strong> D-fold degeneracy in leading sector</li>
        <li><strong>Modular matrices:</strong> Can extract S and T matrices encoding anyon braiding</li>
        <li><strong>String order parameters:</strong> Non-zero expectation values of Wilson loops on non-contractible cycles</li>
        <li><strong>Topological entanglement entropy:</strong> γ_topo extracted via Kitaev-Preskill formula</li>
      </ul>
    </div>

    <h2>Comparison with G-Injective PEPS</h2>

    <div class="highlight-box">
      <h4>Symmetry-Protected vs Intrinsic Topological Order</h4>
      <p>
        <strong>G-injective PEPS (SPT phases):</strong>
      </p>
      <ul>
        <li>Injective when restricted to symmetry sector</li>
        <li>Edge states protected by symmetry G</li>
        <li>Unique ground state on closed manifold</li>
        <li>No intrinsic topological order</li>
        <li>Example: Haldane phase (1D), Levin-Gu model (2D)</li>
      </ul>
      <p>
        <strong>Topological PEPS (Intrinsic topological order):</strong>
      </p>
      <ul>
        <li>Injective on disk, but degenerate on torus</li>
        <li>Anyonic excitations in bulk</li>
        <li>Ground state degeneracy depends on topology</li>
        <li>Robust without symmetry</li>
        <li>Example: Toric code, quantum double models</li>
      </ul>
    </div>

    <h2>Fixed-Point PEPS</h2>

    <div class="info-box">
      <h3>Exactly Solvable Topological Models</h3>
      <p>
        A PEPS is a <strong>fixed point</strong> if it is exactly invariant under local RG transformations:
      </p>
      <div class="equation">
        RG(A) = λA
      </div>
      <p>
        <strong>Examples:</strong>
      </p>
      <ul>
        <li>Toric code: Exact fixed point with χ = 2</li>
        <li>Quantum double models: Fixed points for any finite group</li>
        <li>String-net models: Fixed points for any unitary fusion category</li>
      </ul>
      <p>
        <strong>Significance:</strong> Fixed-point PEPS are exactly solvable and provide complete characterization of topological order.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Structural Properties of Topological PEPS</h3>
      <ul>
        <li><strong>Entanglement entropy:</strong> S = α|∂A| - γ_topo with γ_topo > 0 (universal correction)</li>
        <li><strong>Transfer matrix:</strong> D-fold degenerate leading eigenspace (topological sectors)</li>
        <li><strong>Ground state degeneracy:</strong> D(g) = |𝒜|^{2g} depends on genus, not symmetry</li>
        <li><strong>Tensor structure:</strong> Virtual gauge constraints enforce local gauge invariance</li>
        <li><strong>Injectivity:</strong> Injective on disk, degeneracy from boundary conditions on torus</li>
        <li><strong>String operators:</strong> Non-contractible Wilson loops distinguish sectors</li>
        <li><strong>Boundary states:</strong> D different boundary MPS encode topological sectors</li>
        <li><strong>Stability:</strong> Topological invariants robust under local perturbations</li>
        <li><strong>Fixed points:</strong> Exactly solvable models are RG fixed points</li>
      </ul>
    </div>

    <p>
      These structural properties distinguish topological PEPS from both symmetry-breaking and SPT phases. In the next section, we'll see how these global topological properties can be extracted directly from local tensor data, providing a powerful connection between microscopic structure and emergent topology.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_4_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
