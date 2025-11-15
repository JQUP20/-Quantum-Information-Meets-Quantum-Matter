<template>
  <div class="section-content">
    <h1>5.3.2 Topological Entanglement Entropy</h1>

    <p>Topological entanglement entropy (TEE), discovered independently by Kitaev-Preskill and Levin-Wen in 2006, is a universal constant that detects long-range quantum entanglement in topologically ordered systems. Unlike the area-law coefficient α which depends on microscopic details, the TEE is a topological invariant that directly measures the quantum dimension of the underlying anyonic theory.</p>

    <h2>Discovery and Motivation</h2>

    <div class="highlight-box">
      <h3>The 2006 Breakthrough</h3>

      <p><strong>Challenge:</strong> How to detect topological order?</p>
      <ul>
        <li>Local order parameters fail (no symmetry breaking)</li>
        <li>Ground state degeneracy (GSD) is non-local property</li>
        <li>Need diagnostic accessible via local measurements</li>
      </ul>

      <p><strong>Key insight:</strong> Entanglement entropy contains subleading universal correction</p>

      <p><strong>Two independent discoveries (2006):</strong></p>
      <ul>
        <li><strong>Kitaev-Preskill:</strong> Topological entropy from complementary regions</li>
        <li><strong>Levin-Wen:</strong> Extraction via geometrical constructions</li>
      </ul>

      <p><strong>Impact:</strong></p>
      <ul>
        <li>Experimental signature of topological order</li>
        <li>Direct connection to anyonic quantum dimension</li>
        <li>Bridge between condensed matter and quantum information</li>
      </ul>
    </div>

    <h2>Definition and Formulation</h2>

    <div class="highlight-box">
      <h3>Topological Entanglement Entropy</h3>

      <p><strong>Area law with topological correction:</strong></p>
      <div class="equation">
        S(A) = α |∂A| - γ + o(1)
      </div>

      <p>where:</p>
      <ul>
        <li><strong>α |∂A|:</strong> Extensive area law term (non-universal)</li>
        <li><strong>γ:</strong> Topological entanglement entropy (universal!)</li>
        <li><strong>o(1):</strong> Subleading corrections (vanish as |∂A| → ∞)</li>
      </ul>

      <p><strong>Key properties of γ:</strong></p>
      <ul>
        <li><strong>Universal:</strong> Independent of boundary shape, lattice details, microscopic parameters</li>
        <li><strong>Constant:</strong> O(1), doesn't scale with system size</li>
        <li><strong>Topological invariant:</strong> Characterizes topological phase</li>
        <li><strong>Negative sign:</strong> γ > 0 reduces entanglement below naive area law</li>
      </ul>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>γ measures long-range entanglement (LRE)</li>
        <li>γ = 0: Short-range entangled (trivial phases)</li>
        <li>γ > 0: Long-range entangled (topological order)</li>
      </ul>
    </div>

    <h2>Extraction Methods</h2>

    <div class="highlight-box">
      <h3>Kitaev-Preskill Construction</h3>

      <p><strong>Geometry:</strong> Divide plane into four regions A, B, C, D</p>

      <div class="note-box">
        <pre>
        +---+---+
        | A | B |
        +---+---+
        | C | D |
        +---+---+
        </pre>
      </div>

      <p><strong>Topological entropy formula:</strong></p>
      <div class="equation">
        S_topo = S(A) + S(B) + S(C) - S(AB) - S(BC) - S(AC) + S(ABC)
      </div>

      <p><strong>Result:</strong></p>
      <div class="equation">
        S_topo = -γ (exactly!)
      </div>

      <p><strong>Why this works:</strong></p>
      <ul>
        <li>Area-law terms α|∂·| cancel exactly in this combination</li>
        <li>Left with pure topological contribution</li>
        <li>Independent of regions' sizes or shapes</li>
        <li>Requires only computing entanglement entropies (numerically accessible)</li>
      </ul>

      <p><strong>Proof sketch:</strong></p>
      <ol>
        <li>Expand each entropy: S(X) = α|∂X| - γ + ...</li>
        <li>Substitute into S_topo formula</li>
        <li>Observe: Boundaries cancel
          <ul>
            <li>|∂A| + |∂B| + |∂C| - |∂(AB)| - |∂(BC)| - |∂(AC)| + |∂(ABC)| = 0</li>
          </ul>
        </li>
        <li>Topological terms survive: -γ - γ - γ + γ + γ + γ - γ = -γ</li>
      </ol>
    </div>

    <div class="info-box">
      <h3>Levin-Wen Construction</h3>

      <p><strong>Geometry:</strong> Disk A partitioned into three equal sectors A₁, A₂, A₃</p>

      <p><strong>Formula:</strong></p>
      <div class="equation">
        γ = S(A₁) + S(A₂) + S(A₃) - S(A₁₂) - S(A₂₃) - S(A₃₁) + S(A)
      </div>
      <div class="equation">
        = 3S(A) - S(A₁) - S(A₂) - S(A₃)  (simplified)
      </div>

      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Simpler geometry (single connected region)</li>
        <li>Requires fewer entropy calculations</li>
        <li>Works for systems on cylinder (quasi-1D)</li>
      </ul>

      <p><strong>Equivalence:</strong> Both methods give same γ (topological invariant)</p>
    </div>

    <h2>Relationship to Quantum Dimension</h2>

    <div class="highlight-box">
      <h3>Anyonic Theory Connection</h3>

      <p><strong>Total quantum dimension 𝒟:</strong></p>
      <div class="equation">
        𝒟² = Σ_a d_a²
      </div>
      <p>where sum is over all anyon types a, and d_a is quantum dimension of anyon a</p>

      <p><strong>Topological entanglement entropy:</strong></p>
      <div class="equation">
        γ = log(𝒟)
      </div>

      <p><strong>Physical meaning:</strong></p>
      <ul>
        <li>𝒟² counts "effective degrees of freedom" in topological sector</li>
        <li>log(𝒟) is entropy associated with long-range entanglement</li>
        <li>Measures "size" of topological Hilbert space</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Trivial phase:</strong> Only trivial anyon (d_1 = 1) → 𝒟 = 1 → γ = 0</li>
        <li><strong>Z₂ toric code:</strong> {1, e, m, ε} with d_i = 1 → 𝒟 = 2 → γ = log 2</li>
        <li><strong>Fibonacci:</strong> {1, τ} with d_τ = φ = (1+√5)/2 → 𝒟 = √(1 + φ²) → γ = log(√(1+φ²))</li>
        <li><strong>SU(2)_k Chern-Simons:</strong> γ = log(√(Σ_{j=0}^k sin²(π(j+1)/(k+2))))</li>
      </ul>
    </div>

    <div class="comparison-box">
      <h3>Examples of Topological Phases</h3>
      <table class="comparison-table">
        <tr>
          <th>Phase</th>
          <th>Anyons</th>
          <th>Quantum Dimensions</th>
          <th>𝒟</th>
          <th>γ</th>
        </tr>
        <tr>
          <td><strong>Toric code (Z₂)</strong></td>
          <td>1, e, m, ε</td>
          <td>All d_a = 1</td>
          <td>2</td>
          <td>log 2 ≈ 0.693</td>
        </tr>
        <tr>
          <td><strong>Double semion</strong></td>
          <td>1, s, s̄, b</td>
          <td>All d_a = 1</td>
          <td>2</td>
          <td>log 2 ≈ 0.693</td>
        </tr>
        <tr>
          <td><strong>Fibonacci</strong></td>
          <td>1, τ</td>
          <td>d_1=1, d_τ=φ</td>
          <td>√(1+φ²) ≈ 1.902</td>
          <td>log(1.902) ≈ 0.642</td>
        </tr>
        <tr>
          <td><strong>Ising (ν=5/2 FQH)</strong></td>
          <td>1, σ, ψ</td>
          <td>d_σ=√2, d_ψ=1</td>
          <td>2</td>
          <td>log 2 ≈ 0.693</td>
        </tr>
        <tr>
          <td><strong>SU(2)_2 (k=2)</strong></td>
          <td>j = 0, 1/2, 1</td>
          <td>d_j = 2j+1</td>
          <td>2</td>
          <td>log 2 ≈ 0.693</td>
        </tr>
      </table>

      <p><strong>Note:</strong> Toric code and double semion have same γ but different topological orders (distinguished by fusion rules, braiding)</p>
    </div>

    <h2>Example: Toric Code Calculation</h2>

    <div class="note-box">
      <h3>Explicit Calculation for Z₂ Topological Order</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = -Σ_v A_v - Σ_p B_p
      </div>
      <p>with A_v = ∏_{i∈star(v)} σ_i^x and B_p = ∏_{i∈∂p} σ_i^z</p>

      <p><strong>Ground state (on torus):</strong> 4-fold degenerate, |GS⟩ ∈ span{|ψ_{00}⟩, |ψ_{01}⟩, |ψ_{10}⟩, |ψ_{11}⟩}</p>

      <p><strong>Entanglement for disk region A:</strong></p>

      <p><strong>Step 1:</strong> Reduced density matrix ρ_A = Tr_Ā[|ψ⟩⟨ψ|]</p>

      <p><strong>Step 2:</strong> Count degrees of freedom
        <ul>
          <li>Boundary ∂A has L edges</li>
          <li>Each edge contributes log 2 to entropy (Z₂ gauge constraint)</li>
          <li>Area-law term: α L where α ≈ 1</li>
        </ul>
      </p>

      <p><strong>Step 3:</strong> Topological correction
        <ul>
          <li>Four ground states → vacuum degeneracy</li>
          <li>Reduced by log 2 due to topological constraint</li>
          <li>γ = log 2</li>
        </ul>
      </p>

      <p><strong>Result:</strong></p>
      <div class="equation">
        S(A) = L - log 2
      </div>

      <p><strong>Verification via Kitaev-Preskill formula:</strong></p>
      <p>Numerics and exact calculations confirm γ = log 2</p>
    </div>

    <h2>Experimental Measurement</h2>

    <div class="info-box">
      <h3>Challenges and Approaches</h3>

      <p><strong>Direct measurement challenges:</strong></p>
      <ul>
        <li>Requires measuring entanglement entropy (exponentially many copies naively)</li>
        <li>Need to prepare ground state accurately</li>
        <li>Must access multiple regions for extraction formulas</li>
      </ul>

      <p><strong>Experimental platforms:</strong></p>

      <p><strong>1. Cold atoms/ions:</strong></p>
      <ul>
        <li>Prepare synthetic topological states (Kitaev model on optical lattice)</li>
        <li>Measure Rényi entropies via randomized measurements</li>
        <li>Extract γ from multiple regions</li>
        <li><strong>Status:</strong> Proof-of-principle demonstrations</li>
      </ul>

      <p><strong>2. Quantum Hall systems:</strong></p>
      <ul>
        <li>Fractional quantum Hall states (ν = 5/2, 12/5, etc.)</li>
        <li>Indirect probes: Edge state counting, thermal Hall conductance</li>
        <li>Quantum dimension via interferometry</li>
        <li><strong>Challenge:</strong> Direct entropy measurement difficult</li>
      </ul>

      <p><strong>3. Superconducting qubits:</strong></p>
      <ul>
        <li>Engineer artificial topological codes (surface codes)</li>
        <li>Full state tomography on small systems</li>
        <li>Verify γ = log 2 for toric code</li>
        <li><strong>Status:</strong> Small systems (10-50 qubits)</li>
      </ul>

      <p><strong>4. Tensor network methods (numerical):</strong></p>
      <ul>
        <li>PEPS/DMRG simulations</li>
        <li>Compute entanglement entropies directly</li>
        <li>Apply Kitaev-Preskill or Levin-Wen formulas</li>
        <li><strong>Most successful approach so far</strong></li>
      </ul>
    </div>

    <h2>Beyond Gapped Phases</h2>

    <div class="highlight-box">
      <h3>Generalizations</h3>

      <p><strong>1. Critical systems:</strong></p>
      <ul>
        <li>Entanglement entropy: S ~ (c/3) log L + ... (1D CFT)</li>
        <li>No constant term γ (logarithmic scaling dominates)</li>
        <li>Central charge c plays role of "conformal topological entropy"</li>
      </ul>

      <p><strong>2. Symmetry-protected topological (SPT) phases:</strong></p>
      <ul>
        <li>No intrinsic topological order (γ = 0 generically)</li>
        <li>Entanglement spectrum shows edge mode signatures</li>
        <li>Symmetry-resolved entanglement can reveal SPT order</li>
      </ul>

      <p><strong>3. Excited states:</strong></p>
      <ul>
        <li>Quasi-particle excitations modify entanglement</li>
        <li>Adding anyon: Can change γ (violates topological nature)</li>
        <li>Low-energy eigenstates: γ preserved (within gap)</li>
      </ul>

      <p><strong>4. Finite temperature:</strong></p>
      <ul>
        <li>Thermal state ρ_β = e^{-βH}/Z</li>
        <li>γ(T) → 0 as T increases (thermal fluctuations destroy LRE)</li>
        <li>Transition temperature T* ~ Δ/k_B</li>
      </ul>
    </div>

    <h2>Limitations and Subtleties</h2>

    <div class="note-box">
      <h3>When Does γ Work?</h3>

      <p><strong>Requirements:</strong></p>
      <ul>
        <li><strong>Unique ground state (on plane):</strong> Multiple GSs complicate analysis</li>
        <li><strong>Large regions:</strong> Need |∂A| ≫ ξ (correlation length)</li>
        <li><strong>Smooth boundaries:</strong> Sharp corners add corrections</li>
        <li><strong>Gapped phases:</strong> Area law must hold</li>
      </ul>

      <p><strong>Finite-size effects:</strong></p>
      <ul>
        <li>Actual S(A) = α|∂A| - γ + O(1/|∂A|)</li>
        <li>Need large enough regions to resolve -γ from O(1/|∂A|) corrections</li>
        <li>Numerical extrapolation required</li>
      </ul>

      <p><strong>Non-uniqueness of γ:</strong></p>
      <ul>
        <li>Same γ doesn't imply same topological order</li>
        <li>Example: Toric code vs double semion (both γ = log 2)</li>
        <li>Need additional data: Modular S-matrix, braiding statistics</li>
      </ul>
    </div>

    <h2>Applications and Significance</h2>

    <div class="highlight-box">
      <h3>Why TEE is Important</h3>

      <p><strong>1. Phase classification:</strong></p>
      <ul>
        <li>Distinguishes trivial (γ=0) from topological (γ>0) phases</li>
        <li>Partial classifier (not complete: same γ ≠ same phase)</li>
        <li>Experimental signature accessible via quantum simulation</li>
      </ul>

      <p><strong>2. Quantum computation:</strong></p>
      <ul>
        <li>γ = log(𝒟) relates to computational power</li>
        <li>Larger 𝒟 → richer anyonic theory → more quantum gates</li>
        <li>Fibonacci (non-Abelian) vs toric code (Abelian)</li>
      </ul>

      <p><strong>3. Quantum error correction:</strong></p>
      <ul>
        <li>Topological codes have γ > 0</li>
        <li>γ quantifies robustness to local errors</li>
        <li>Connection to code distance and logical operators</li>
      </ul>

      <p><strong>4. Fundamental physics:</strong></p>
      <ul>
        <li>Holography: γ related to bulk entanglement (AdS/CFT)</li>
        <li>Black holes: Topological entropy and Bekenstein-Hawking formula</li>
        <li>Quantum gravity: Long-range entanglement in spacetime</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Definition:</strong> TEE is universal constant γ in S(A) = α|∂A| - γ + ...</li>
        <li><strong>Extraction:</strong> Kitaev-Preskill or Levin-Wen formulas eliminate area-law terms</li>
        <li><strong>Physical meaning:</strong> γ = log(𝒟) where 𝒟 is total quantum dimension</li>
        <li><strong>Detection:</strong> γ = 0 (trivial), γ > 0 (topological order)</li>
        <li><strong>Examples:</strong> Toric code γ = log 2, Fibonacci γ = log(√(1+φ²))</li>
        <li><strong>Limitations:</strong> Same γ doesn't imply same phase (need additional invariants)</li>
        <li><strong>Applications:</strong> Phase classification, quantum computation, error correction</li>
        <li><strong>Experimental:</strong> Quantum simulation platforms, numerical tensor networks</li>
      </ul>

      <p><strong>Topological entanglement entropy represents a profound connection between quantum information (entanglement), condensed matter (topological phases), and fundamental physics (anyonic quantum dimensions)—providing a universal, experimentally accessible signature of long-range quantum order.</strong></p>

      <p><strong>Next:</strong> Section 5.4 explores generalizations including quantum conditional mutual information I(A:C|B), which further refines our ability to detect and characterize quantum entanglement structure.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_3_2'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
