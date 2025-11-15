<template>
  <div class="section-content">
    <h1>5.4.1 Quantum Conditional Mutual Information</h1>

    <p>The quantum conditional mutual information I(A:C|B) is a powerful refinement of entanglement entropy that detects tripartite quantum correlations. Unlike the simple mutual information I(A:B), which captures all correlations (classical and quantum), I(A:C|B) isolates genuine quantum entanglement that flows through an intermediate region B, making it a sensitive probe of topological order, quantum criticality, and many-body entanglement structure.</p>

    <h2>Definition and Motivation</h2>

    <div class="highlight-box">
      <h3>Quantum Conditional Mutual Information</h3>

      <p><strong>Definition:</strong> For tripartition of system into regions A, B, C:</p>
      <div class="equation">
        I(A:C|B) = S(AB) + S(BC) - S(B) - S(ABC)
      </div>

      <p><strong>Alternative forms:</strong></p>
      <div class="equation">
        I(A:C|B) = S(A|B) + S(C|B) - S(AC|B)
      </div>
      <div class="equation">
        = I(A:BC) - I(A:B)
      </div>

      <p>where conditional entropy S(A|B) = S(AB) - S(B)</p>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Measures correlations between A and C that persist even after conditioning on B</li>
        <li>Detects "quantum correlations through B" between A and C</li>
        <li>I(A:C|B) = 0 for classical states (Markov property)</li>
        <li>I(A:C|B) > 0 signals non-trivial quantum correlations</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Comparison with Mutual Information</h3>

      <p><strong>Mutual information:</strong></p>
      <div class="equation">
        I(A:B) = S(A) + S(B) - S(AB) ≥ 0
      </div>
      <ul>
        <li>Total correlations (classical + quantum)</li>
        <li>Always non-negative</li>
        <li>Vanishes only for product states</li>
      </ul>

      <p><strong>Conditional mutual information:</strong></p>
      <div class="equation">
        I(A:C|B) = S(AB) + S(BC) - S(B) - S(ABC)
      </div>
      <ul>
        <li><strong>Can be negative!</strong> (Unique to quantum systems)</li>
        <li>I(A:C|B) &lt; 0: Strong subadditivity (SSA) saturated</li>
        <li>I(A:C|B) = 0: Classical Markov chain A-B-C</li>
        <li>I(A:C|B) > 0: Quantum correlations beyond Markov</li>
      </ul>

      <p><strong>Strong subadditivity (SSA) constraint:</strong></p>
      <div class="equation">
        I(A:C|B) ≥ 0  in general (SSA)
      </div>
      <p>But can be negative for specific geometries in topologically ordered systems!</p>
    </div>

    <h2>Markov Property and Classical States</h2>

    <div class="highlight-box">
      <h3>When I(A:C|B) = 0</h3>

      <p><strong>Classical Markov chain:</strong> For probability distribution P(a,b,c):</p>
      <div class="equation">
        P(a,c|b) = P(a|b)P(c|b)
      </div>
      <p>A and C are independent given B → I(A:C|B) = 0</p>

      <p><strong>Quantum Markov chain:</strong> State ρ_ABC satisfies:</p>
      <div class="equation">
        I(A:C|B) = 0
      </div>

      <p><strong>Recovery map interpretation:</strong></p>
      <ul>
        <li>Can reconstruct ρ_ABC from ρ_AB and ρ_BC via recovery map on B</li>
        <li>All information about C is contained in B (screening property)</li>
        <li>No "direct" quantum correlation between A and C</li>
      </ul>

      <p><strong>Examples of I(A:C|B) = 0:</strong></p>
      <ul>
        <li>Product states: ρ = ρ_A ⊗ ρ_B ⊗ ρ_C</li>
        <li>1D gapped ground states far from boundaries (exact for MPS)</li>
        <li>Classical probability distributions</li>
      </ul>
    </div>

    <h2>Geometric Configurations</h2>

    <div class="comparison-box">
      <h3>Common Geometries for I(A:C|B)</h3>

      <p><strong>1. Three disjoint disks (Kitaev-Preskill geometry):</strong></p>
      <div class="note-box">
        <pre>
        [A]   [B]   [C]
         ●     ●     ●
        </pre>
      </div>
      <ul>
        <li>A, B, C are separated disks on 2D lattice</li>
        <li>Used to detect topological order</li>
        <li>I(A:C|B) &lt; 0 for topologically ordered states</li>
      </ul>

      <p><strong>2. Strip geometry (quasi-1D):</strong></p>
      <div class="note-box">
        <pre>
        [A][B][C]
        ━━━━━━━━━
        </pre>
      </div>
      <ul>
        <li>Three consecutive regions on cylinder</li>
        <li>I(A:C|B) = 0 for gapped 1D systems</li>
        <li>I(A:C|B) > 0 at critical points (1D CFT)</li>
      </ul>

      <p><strong>3. Nested regions:</strong></p>
      <div class="note-box">
        <pre>
        ┌─────C─────┐
        │  ┌──B──┐  │
        │  │  A  │  │
        └──┴─────┴──┘
        </pre>
      </div>
      <ul>
        <li>A ⊂ B ⊂ C (nested structure)</li>
        <li>I(A:C|B) related to multipartite entanglement</li>
      </ul>
    </div>

    <h2>I(A:C|B) as Topological Order Detector</h2>

    <div class="highlight-box">
      <h3>Topological Entanglement Entropy from I(A:C|B)</h3>

      <p><strong>Key observation (Kim-Levin 2013):</strong> For appropriate geometry:</p>
      <div class="equation">
        I(A:C|B) = -2γ
      </div>
      <p>where γ is topological entanglement entropy</p>

      <p><strong>Why I(A:C|B) &lt; 0 for topological order:</strong></p>
      <ul>
        <li>Long-range entanglement creates correlations between A and C that cannot be screened by B</li>
        <li>Violates classical Markov property</li>
        <li>Quantifies "non-local" quantum information</li>
      </ul>

      <p><strong>Specific geometry:</strong> Three disjoint disks arranged such that:</p>
      <ul>
        <li>Disk B separates A and C spatially</li>
        <li>For trivial phases: I(A:C|B) → 0 as separations increase</li>
        <li>For topological phases: I(A:C|B) → -2γ (constant!)</li>
      </ul>

      <p><strong>Advantages over traditional TEE extraction:</strong></p>
      <ul>
        <li>Single quantity (not linear combination of many entropies)</li>
        <li>More robust to finite-size effects</li>
        <li>Directly measures long-range entanglement</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Example: Toric Code</h3>

      <p><strong>Ground state on torus:</strong> 4-fold degenerate</p>

      <p><strong>For disk geometry with A, B, C separated:</strong></p>
      <div class="equation">
        I(A:C|B) = -2 log 2
      </div>

      <p><strong>Calculation:</strong></p>
      <ul>
        <li>S(AB) = |∂(AB)| - log 2</li>
        <li>S(BC) = |∂(BC)| - log 2</li>
        <li>S(B) = |∂B| - log 2</li>
        <li>S(ABC) = |∂(ABC)| - log 2</li>
      </ul>

      <p><strong>Boundary cancellations:</strong></p>
      <ul>
        <li>Area-law terms |∂·| cancel exactly</li>
        <li>Topological terms: -log 2 - log 2 - (-log 2) - (-log 2) = -2 log 2</li>
      </ul>

      <p><strong>Result:</strong> I(A:C|B) = -2γ where γ = log 2 ✓</p>
    </div>

    <h2>I(A:C|B) in Gapped vs Gapless Systems</h2>

    <div class="comparison-box">
      <h3>Behavior in Different Phases</h3>
      <table class="comparison-table">
        <tr>
          <th>Phase</th>
          <th>I(A:C|B) (strip geometry)</th>
          <th>Physical Interpretation</th>
        </tr>
        <tr>
          <td><strong>Gapped trivial (1D)</strong></td>
          <td>0</td>
          <td>Perfect screening, Markov property holds</td>
        </tr>
        <tr>
          <td><strong>Gapped topological (2D)</strong></td>
          <td>-2γ &lt; 0</td>
          <td>Long-range entanglement, non-Markov</td>
        </tr>
        <tr>
          <td><strong>Critical (1D CFT)</strong></td>
          <td>> 0, ~ log L</td>
          <td>Power-law correlations, gapless modes</td>
        </tr>
        <tr>
          <td><strong>Thermal state (T>0)</strong></td>
          <td>→ 0 as T→∞</td>
          <td>Thermal fluctuations destroy quantum correlations</td>
        </tr>
        <tr>
          <td><strong>MBL (disordered)</strong></td>
          <td>Small but > 0</td>
          <td>Weak l-bit correlations</td>
        </tr>
      </table>
    </div>

    <h2>I(A:C|B) at Critical Points</h2>

    <div class="highlight-box">
      <h3>CFT Results for 1D Critical Systems</h3>

      <p><strong>Strip geometry:</strong> Three consecutive intervals [0,ℓ₁], [ℓ₁,ℓ₂], [ℓ₂,ℓ₃]</p>

      <p><strong>CFT formula (Calabrese-Cardy):</strong></p>
      <div class="equation">
        I(A:C|B) = (c/3) log[|cross-ratio|]
      </div>

      <p>where cross-ratio = (ℓ₁ℓ₃)/(ℓ₂(ℓ₁+ℓ₂+ℓ₃))</p>

      <p><strong>Equal intervals (ℓ₁ = ℓ₂ = ℓ₃ = ℓ):</strong></p>
      <div class="equation">
        I(A:C|B) = (c/3) log(ℓ/(3ℓ)) = -(c/3) log 3
      </div>

      <p><strong>Physical meaning:</strong></p>
      <ul>
        <li>Positive I(A:C|B) at criticality (unlike topological case)</li>
        <li>Reflects gapless modes mediating long-range correlations</li>
        <li>Logarithmic dependence on interval sizes</li>
        <li>Central charge c determines magnitude</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li>Critical Ising (c = 1/2): I(A:C|B) ≈ -0.183</li>
        <li>Compactified boson (c = 1): I(A:C|B) ≈ -0.366</li>
        <li>Critical 3-state Potts (c = 4/5): I(A:C|B) ≈ -0.293</li>
      </ul>
    </div>

    <h2>Relationship to Other Measures</h2>

    <div class="info-box">
      <h3>Connections and Inequalities</h3>

      <p><strong>Tripartite information:</strong></p>
      <div class="equation">
        I₃(A:B:C) = I(A:B) + I(A:C) - I(A:BC)
      </div>
      <div class="equation">
        = -I(A:C|B)  (for specific geometries)
      </div>

      <p><strong>Monogamy of mutual information:</strong></p>
      <div class="equation">
        I(A:BC) ≥ I(A:B)
      </div>
      <p>Equivalently: I(A:C|B) ≥ 0 (strong subadditivity)</p>

      <p><strong>Negativity and entanglement:</strong></p>
      <ul>
        <li>I(A:C|B) &lt; 0 implies multipartite entanglement</li>
        <li>But I(A:C|B) > 0 doesn't exclude entanglement</li>
        <li>Sensitive to geometry and phase</li>
      </ul>

      <p><strong>Topological entanglement entropy:</strong></p>
      <div class="equation">
        γ = -I(A:C|B)/2  (appropriate geometry)
      </div>
    </div>

    <h2>Experimental and Numerical Access</h2>

    <div class="note-box">
      <h3>Measuring I(A:C|B)</h3>

      <p><strong>Numerical methods:</strong></p>
      <ul>
        <li><strong>DMRG/MPS:</strong> Compute all four entanglement entropies S(AB), S(BC), S(B), S(ABC)</li>
        <li><strong>QMC:</strong> Rényi entropies via replica trick</li>
        <li><strong>Exact diagonalization:</strong> Full density matrix (small N)</li>
        <li><strong>Tensor networks:</strong> PEPS contraction for 2D systems</li>
      </ul>

      <p><strong>Experimental approaches:</strong></p>
      <ul>
        <li><strong>Randomized measurements:</strong> Reconstruct Rényi entropies from measurement statistics</li>
        <li><strong>Quantum state tomography:</strong> Full ρ_ABC reconstruction (exponentially costly)</li>
        <li><strong>Interferometry:</strong> Measure overlap between different boundary conditions</li>
      </ul>

      <p><strong>Challenges:</strong></p>
      <ul>
        <li>Requires computing four entanglement entropies (not just two)</li>
        <li>Finite-size effects can obscure topological contributions</li>
        <li>Need large enough regions for area-law terms to dominate</li>
      </ul>
    </div>

    <h2>Applications</h2>

    <div class="highlight-box">
      <h3>Uses of I(A:C|B)</h3>

      <p><strong>1. Phase classification:</strong></p>
      <ul>
        <li>Distinguish topological (I &lt; 0) from trivial (I ≥ 0) phases</li>
        <li>Detect quantum critical points (I > 0, logarithmic scaling)</li>
        <li>Characterize phase transitions</li>
      </ul>

      <p><strong>2. Topological order diagnosis:</strong></p>
      <ul>
        <li>Alternative to Kitaev-Preskill TEE extraction</li>
        <li>More robust single-number diagnostic</li>
        <li>Directly measures long-range entanglement</li>
      </ul>

      <p><strong>3. Quantum information protocols:</strong></p>
      <ul>
        <li>Quantum secret sharing (non-Markovian correlations)</li>
        <li>Quantum error correction (code properties)</li>
        <li>Entanglement distribution (multipartite structure)</li>
      </ul>

      <p><strong>4. Holography and AdS/CFT:</strong></p>
      <ul>
        <li>I(A:C|B) related to bulk geodesics</li>
        <li>Quantum error correction in gravity dual</li>
        <li>Bulk reconstruction from boundary entanglement</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Definition:</strong> I(A:C|B) = S(AB) + S(BC) - S(B) - S(ABC)</li>
        <li><strong>Markov property:</strong> I(A:C|B) = 0 for classical states and 1D gapped systems</li>
        <li><strong>Topological order:</strong> I(A:C|B) = -2γ &lt; 0 (negative!) for appropriate geometry</li>
        <li><strong>Critical systems:</strong> I(A:C|B) > 0, logarithmic in sizes (CFT formula)</li>
        <li><strong>Strong subadditivity:</strong> I(A:C|B) ≥ 0 in general, but can be negative for specific geometries</li>
        <li><strong>Applications:</strong> Phase classification, topological order detection, quantum protocols</li>
        <li><strong>Measurement:</strong> Requires four entanglement entropies, accessible numerically and experimentally</li>
      </ul>

      <p><strong>Quantum conditional mutual information provides a refined probe of many-body entanglement, detecting topological order via negativity and quantum criticality via logarithmic growth—serving as a bridge between information theory, condensed matter physics, and quantum gravity.</strong></p>

      <p><strong>Next:</strong> Sections 5.4.2-5.4.6 explore specific examples (toric code, Ising, cluster models) and applications of I(A:C|B) to concrete physical systems.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_4_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
