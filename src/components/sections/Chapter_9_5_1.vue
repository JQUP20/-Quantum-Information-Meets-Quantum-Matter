<template>
  <div class="section-content">
    <h1>9.5.1 MERA</h1>

    <p>
      While PEPS excel at describing gapped phases with area-law entanglement, they struggle with critical systems where entanglement entropy scales logarithmically with subsystem size. The Multi-scale Entanglement Renormalization Ansatz (MERA), introduced by Vidal in 2007, provides an elegant solution by explicitly implementing real-space renormalization group (RG) transformations through a hierarchical tensor network.
    </p>

    <h2>Motivation: Beyond Area Law</h2>

    <div class="info-box">
      <h3>Limitations of MPS/PEPS at Criticality</h3>
      <p>
        At quantum critical points, entanglement entropy violates strict area law:
      </p>
      <div class="equation">
        S(L) = c/3 · log L + const  (1D CFT)
      </div>
      <p>
        where c is the central charge.
      </p>
      <p>
        <strong>Problem for MPS:</strong>
      </p>
      <ul>
        <li>To represent S ~ log L with MPS requires χ ~ L^α (polynomial)</li>
        <li>For finite χ, correlation length ξ ≤ O(log χ) (short-ranged)</li>
        <li>Cannot accurately represent true critical states (ξ = ∞)</li>
      </ul>
      <p>
        <strong>MERA solution:</strong> Hierarchical structure with built-in scale invariance
      </p>
    </div>

    <h2>MERA Structure</h2>

    <div class="info-box">
      <h3>Building Blocks: Disentanglers and Isometries</h3>
      <p>
        A MERA network consists of alternating layers of two types of tensors:
      </p>
      <ul>
        <li><strong>Disentanglers (u):</strong> Rank-4 unitary tensors that remove short-range entanglement
          <div class="equation">
            u: ℂ^χ ⊗ ℂ^χ → ℂ^χ ⊗ ℂ^χ  (unitary, u†u = uu† = I)
          </div>
        </li>
        <li><strong>Isometries (w):</strong> Rank-3 tensors that coarse-grain (reduce sites)
          <div class="equation">
            w: ℂ^χ ⊗ ℂ^χ → ℂ^χ  (isometry, w†w = I)
          </div>
        </li>
      </ul>
      <p>
        <strong>Layer structure:</strong>
      </p>
      <ol>
        <li>Apply disentanglers to neighboring pairs (remove entanglement)</li>
        <li>Apply isometries to coarse-grain 2 sites → 1 site</li>
        <li>Repeat at next scale (half the sites)</li>
      </ol>
    </div>

    <h3>Graphical Representation</h3>

    <div class="highlight-box">
      <h4>MERA as Tree Network</h4>
      <p>
        Schematic 1D MERA (3 layers, top = physical sites):
      </p>
      <div class="equation">
        Physical:  |  |  |  |  |  |  |  |  (8 sites)
                   [u][u][u][u]            (disentanglers)
                   |  |  |  |  |  |  |  |
                   [w] [w] [w] [w]         (isometries: 8→4)
                   |    |    |    |
                   [u]  [u]                (disentanglers)
                   |    |    |    |
                   [w]  [w]                (isometries: 4→2)
                   |      |
                   [u]                     (disentangler)
                   |      |
                   [w]                     (isometry: 2→1)
                   |
                 [top]                     (single site at top)
      </div>
      <p>
        Total depth: O(log N) for N sites. Captures entanglement at all length scales.
      </p>
    </div>

    <h2>Entanglement Renormalization</h2>

    <div class="info-box">
      <h3>RG Flow in Entanglement Space</h3>
      <p>
        Each MERA layer implements a real-space RG transformation:
      </p>
      <ol>
        <li><strong>Disentangle:</strong> Remove short-range entanglement at current scale</li>
        <li><strong>Coarse-grain:</strong> Block 2 sites into 1, increasing lattice spacing by factor 2</li>
        <li><strong>Rescale:</strong> Effective state at new scale looks like original (scale invariance)</li>
      </ol>
      <p>
        <strong>Mathematical form:</strong>
      </p>
      <div class="equation">
        ρ_{n+1} = Coarse(Disentangle(ρ_n))
      </div>
      <p>
        At criticality, ρ_n approaches a scale-invariant fixed point: ρ* = RG(ρ*).
      </p>
    </div>

    <h3>Entanglement Entropy Scaling</h3>

    <div class="highlight-box">
      <h4>Logarithmic Entanglement from Tree Structure</h4>
      <p>
        For a region of L sites, entanglement comes from bonds cut at different scales:
      </p>
      <ul>
        <li>Scale k has L/2^k blocks</li>
        <li>Number of cut bonds at scale k: O(1)</li>
        <li>Total layers crossed: log₂ L</li>
        <li>Each layer contributes ≤ log χ</li>
      </ul>
      <div class="equation">
        S(L) ≤ (log₂ L) · (const · log χ) ~ log L
      </div>
      <p>
        MERA naturally captures logarithmic entanglement with constant bond dimension χ!
      </p>
    </div>

    <h2>Scale Invariance and Criticality</h2>

    <div class="info-box">
      <h3>Fixed-Point MERA</h3>
      <p>
        For a critical system, MERA can be <strong>scale-invariant</strong>: same tensors (u, w) at all layers.
      </p>
      <p>
        <strong>Physical meaning:</strong>
      </p>
      <ul>
        <li>Each RG step is identical → perfect scale invariance</li>
        <li>Describes conformal field theory (CFT) ground state</li>
        <li>Correlation functions show power-law decay</li>
        <li>Exactly captures critical point physics</li>
      </ul>
      <p>
        <strong>Example:</strong> Critical Ising model → fixed-point MERA with χ ~ 6-10
      </p>
    </div>

    <h3>Extracting Scaling Dimensions</h3>

    <div class="highlight-box">
      <h4>CFT Data from MERA</h4>
      <p>
        The scaling dimension Δ of an operator O can be extracted from MERA:
      </p>
      <ol>
        <li>Insert operator O at physical layer</li>
        <li>Coarse-grain through MERA layers</li>
        <li>Scaling dimension from renormalized operator norm:
          <div class="equation">
            ||O_n|| = λⁿ ||O_0||  ⟹  Δ = -log₂ λ
          </div>
        </li>
      </ol>
      <p>
        <strong>Application:</strong> Can numerically extract central charge c, primary operator dimensions {Δ_i}, and OPE coefficients.
      </p>
    </div>

    <h2>Comparison of Tensor Networks</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>MPS</th>
            <th>PEPS</th>
            <th>MERA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dimension</td>
            <td>1D</td>
            <td>2D/3D</td>
            <td>Any D</td>
          </tr>
          <tr>
            <td>Best for</td>
            <td>1D gapped</td>
            <td>2D gapped</td>
            <td>Critical systems</td>
          </tr>
          <tr>
            <td>Entanglement</td>
            <td>S ≤ log χ (area law)</td>
            <td>S ≤ L log χ (area law)</td>
            <td>S ~ log L (logarithmic)</td>
          </tr>
          <tr>
            <td>Network depth</td>
            <td>O(1)</td>
            <td>O(1)</td>
            <td>O(log N)</td>
          </tr>
          <tr>
            <td>Correlation length</td>
            <td>ξ ≤ O(log χ)</td>
            <td>ξ ~ O(1)</td>
            <td>ξ = ∞ (critical)</td>
          </tr>
          <tr>
            <td>Contraction</td>
            <td>O(Nχ³)</td>
            <td>O(Nχ^{10}) approx</td>
            <td>O(N log N · χ⁶)</td>
          </tr>
          <tr>
            <td>RG structure</td>
            <td>None explicit</td>
            <td>None explicit</td>
            <td>Explicit tree</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Computational Aspects</h2>

    <div class="info-box">
      <h3>MERA Optimization</h3>
      <p>
        Finding optimal MERA tensors for a given Hamiltonian:
      </p>
      <p>
        <strong>Energy minimization:</strong>
      </p>
      <ol>
        <li>Compute energy ⟨ψ|H|ψ⟩ where |ψ⟩ = MERA state</li>
        <li>Optimize {u, w} tensors layer-by-layer</li>
        <li>Ascending super-orthogonality simplifies environment</li>
        <li>Converge to ground state approximation</li>
      </ol>
      <p>
        <strong>Cost:</strong> O(N log N · χ⁶) per iteration (better than PEPS for 1D!)
      </p>
    </div>

    <h3>Binary vs Ternary MERA</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Coarse-Graining</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Binary MERA</td>
            <td>2 sites → 1 site</td>
            <td>1D systems, CFTs with c < 1</td>
          </tr>
          <tr>
            <td>Ternary MERA</td>
            <td>3 sites → 1 site</td>
            <td>Higher c, 2D systems</td>
          </tr>
          <tr>
            <td>General k-ary</td>
            <td>k sites → 1 site</td>
            <td>Tunable for specific universality classes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>AdS/CFT Correspondence</h2>

    <div class="highlight-box">
      <h4>MERA as Discrete Holography</h4>
      <p>
        MERA structure remarkably resembles AdS/CFT (Anti-de Sitter / Conformal Field Theory) duality:
      </p>
      <ul>
        <li><strong>Boundary = Physical lattice:</strong> CFT lives here</li>
        <li><strong>Bulk = MERA layers:</strong> Extra "holographic" dimension</li>
        <li><strong>Radial direction = RG scale:</strong> Deeper layers = larger length scales</li>
        <li><strong>Geodesics = Correlation paths:</strong> Minimal paths in MERA compute correlations</li>
      </ul>
      <p>
        This suggests MERA is a discrete version of AdS/CFT, with the tensor network providing the "geometry" of spacetime.
      </p>
      <div class="equation">
        Entanglement entropy (CFT) ⟷ Minimal surface area (AdS)
      </div>
    </div>

    <h3>Ryu-Takayanagi Formula</h3>

    <div class="info-box">
      <h3>Holographic Entanglement Entropy</h3>
      <p>
        In AdS/CFT, entanglement entropy of boundary region A equals:
      </p>
      <div class="equation">
        S(A) = Area(γ_A) / (4G_N)
      </div>
      <p>
        where γ_A is the minimal surface in bulk connecting ∂A.
      </p>
      <p>
        <strong>MERA analog:</strong> S(A) = number of MERA bonds cut by minimal surface through tensor network
      </p>
      <p>
        This provides a discrete, tensor network realization of holography.
      </p>
    </div>

    <h2>2D MERA</h2>

    <div class="info-box">
      <h3>Extending to Higher Dimensions</h3>
      <p>
        MERA can be generalized to 2D (and 3D):
      </p>
      <ul>
        <li><strong>2D lattice:</strong> Coarse-grain 2×2 plaquettes → 1 site</li>
        <li><strong>Disentanglers:</strong> Applied to nearest neighbors in 2D</li>
        <li><strong>Isometries:</strong> Map 4 sites → 1 site</li>
        <li><strong>Depth:</strong> O(log N) layers for N = L² sites</li>
      </ul>
      <p>
        <strong>Application:</strong> 2D critical systems, topological phases, quantum phase transitions
      </p>
    </div>

    <h2>Modified MERA (MMERA)</h2>

    <div class="highlight-box">
      <h4>Variants for Special Cases</h4>
      <p>
        <strong>Branching MERA:</strong>
      </p>
      <ul>
        <li>Non-uniform branching ratio</li>
        <li>Better for systems with multiple length scales</li>
      </ul>
      <p>
        <strong>Fermionic MERA:</strong>
      </p>
      <ul>
        <li>Tensors respect fermionic parity</li>
        <li>For fermionic systems (electrons, Majorana)</li>
      </ul>
      <p>
        <strong>Continuous MERA (cMERA):</strong>
      </p>
      <ul>
        <li>Continuum limit of MERA</li>
        <li>Connects to quantum field theory</li>
        <li>Entanglement renormalization → path integral RG</li>
      </ul>
    </div>

    <h2>Applications</h2>

    <div class="info-box">
      <h3>Where MERA Excels</h3>
      <ul>
        <li><strong>Quantum critical points:</strong> Ising, Potts, Heisenberg at criticality</li>
        <li><strong>CFT ground states:</strong> c < 1 minimal models, free boson/fermion</li>
        <li><strong>Quantum quenches:</strong> Non-equilibrium dynamics with logarithmic entanglement growth</li>
        <li><strong>2D topological phases:</strong> Extracting topological data</li>
        <li><strong>Holography studies:</strong> Testing AdS/CFT in discrete setting</li>
        <li><strong>Operator scaling:</strong> Extracting CFT data (c, Δ, OPE)</li>
      </ul>
    </div>

    <h2>Limitations</h2>

    <div class="highlight-box">
      <h4>When MERA Struggles</h4>
      <ul>
        <li><strong>Gapped phases:</strong> MERA is overkill; MPS/PEPS more efficient</li>
        <li><strong>High central charge:</strong> Requires large χ for c ≫ 1</li>
        <li><strong>Chiral systems:</strong> Fixed-point MERA exists only for c < 1 theories (conjecture)</li>
        <li><strong>Long-range interactions:</strong> Tree structure doesn't capture well</li>
        <li><strong>Time evolution:</strong> More complicated than MPS (need time-evolving MERA)</li>
      </ul>
    </div>

    <h2>Relation to Quantum Circuits</h2>

    <div class="info-box">
      <h3>MERA as Preparation Circuit</h3>
      <p>
        MERA can be viewed as a quantum circuit preparing the ground state:
      </p>
      <ol>
        <li>Start with product state |0...0⟩ at top</li>
        <li>Apply inverse isometries (expanding 1 → 2)</li>
        <li>Apply inverse disentanglers (introducing entanglement)</li>
        <li>Repeat down to physical layer</li>
      </ol>
      <p>
        Circuit depth: O(log N). This is <strong>polylogarithmic</strong>, remarkably efficient!
      </p>
      <p>
        <strong>Quantum computing perspective:</strong> Critical states can be prepared efficiently on quantum computers using MERA-inspired circuits.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Features of MERA</h3>
      <ul>
        <li><strong>Structure:</strong> Hierarchical tree with disentanglers (u) and isometries (w)</li>
        <li><strong>Depth:</strong> O(log N) layers → captures multi-scale entanglement</li>
        <li><strong>Entanglement:</strong> S ~ log L naturally represented with constant χ</li>
        <li><strong>RG interpretation:</strong> Each layer = real-space RG transformation</li>
        <li><strong>Fixed points:</strong> Scale-invariant MERA describes CFT ground states</li>
        <li><strong>Scaling dimensions:</strong> Extractable from operator renormalization</li>
        <li><strong>Holography:</strong> Discrete realization of AdS/CFT correspondence</li>
        <li><strong>Cost:</strong> O(N log N · χ⁶) for optimization (efficient for 1D)</li>
        <li><strong>Best for:</strong> Critical systems, CFTs, logarithmic entanglement</li>
        <li><strong>Limitations:</strong> Less efficient for gapped phases, struggles with c ≫ 1</li>
      </ul>
    </div>

    <p>
      MERA represents a profound synthesis of quantum information (entanglement renormalization), condensed matter physics (real-space RG), and high-energy theory (holography). Its hierarchical structure naturally encodes the multi-scale entanglement of critical systems, making it the tensor network of choice for quantum criticality. In the next section, we explore tree tensor networks, which generalize MERA's hierarchical structure while providing additional flexibility.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_5_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
