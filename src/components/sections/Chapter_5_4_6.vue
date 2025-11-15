<template>
  <div class="section-content">
    <h1>5.4.6 I(A:C|B) as a Detector of Non-Trivial Many-Body Entanglement</h1>

    <p>The quantum conditional mutual information I(A:C|B) serves as a powerful diagnostic tool for detecting and characterizing non-trivial quantum phases. Unlike simpler entanglement measures, I(A:C|B) can distinguish topological order from trivial gapped phases, detect quantum criticality, and probe the structure of many-body entanglement. This section focuses on practical applications of I(A:C|B) as a phase detector.</p>

    <h2>Detection Principle</h2>

    <div class="highlight-box">
      <h3>Why I(A:C|B) Detects Topology</h3>

      <p><strong>Recall definition:</strong></p>
      <div class="equation">
        I(A:C|B) = S(AB) + S(BC) - S(B) - S(ABC)
      </div>

      <p><strong>Key insight:</strong> Measures correlations between A and C not mediated by B</p>

      <p><strong>For trivial (gapped) states:</strong></p>
      <ul>
        <li>Short-range correlations (ξ finite)</li>
        <li>If B separates A and C by distance ≫ ξ → A, C independent given B</li>
        <li>Markov property: I(A:C|B) = 0</li>
      </ul>

      <p><strong>For topologically ordered states:</strong></p>
      <ul>
        <li>Long-range entanglement (beyond local correlations)</li>
        <li>Topology creates correlations not screened by B</li>
        <li><strong>I(A:C|B) &lt; 0 possible!</strong> (Violation of strong subadditivity in effective theory)</li>
        <li>Negativity signals topological order</li>
      </ul>

      <p><strong>Topological interpretation:</strong></p>
      <div class="equation">
        I(A:C|B) = -2γ_topo (for appropriate geometry)
      </div>
      <p>Directly extracts topological entanglement entropy</p>
    </div>

    <div class="info-box">
      <h3>Optimal Geometry</h3>

      <p><strong>Requirement:</strong> Regions must be configured to probe topology</p>

      <p><strong>2D example (disk geometry):</strong></p>
      <ul>
        <li>A: Central disk of radius r</li>
        <li>B: Annulus from radius r to r+w</li>
        <li>C: Annulus from radius r+w to r+2w</li>
        <li>Condition: w ≫ ξ (correlation length)</li>
      </ul>

      <p><strong>Why this works:</strong></p>
      <ul>
        <li>B screens all local correlations between A and C</li>
        <li>Only topological (non-local) correlations survive</li>
        <li>I(A:C|B) isolates topological contribution</li>
      </ul>

      <p><strong>Alternative geometries:</strong></p>
      <ul>
        <li><strong>Torus configuration:</strong> A, B, C wrap around in different directions</li>
        <li><strong>Trivalent vertex:</strong> Three regions meeting at a point (related to Kitaev-Preskill)</li>
        <li><strong>Strip geometry:</strong> For 1D systems or cylinders</li>
      </ul>
    </div>

    <h2>Protocol for Phase Detection</h2>

    <div class="highlight-box">
      <h3>Step-by-Step Detection Algorithm</h3>

      <p><strong>Input:</strong> Ground state |ψ⟩ of unknown phase</p>

      <p><strong>Step 1: Check for gap</strong></p>
      <ul>
        <li>Compute Δ = E_1 - E_0 (first excitation gap)</li>
        <li>If Δ = 0 → gapless phase (see Section 5.6)</li>
        <li>If Δ > 0 → proceed to step 2</li>
      </ul>

      <p><strong>Step 2: Measure area law</strong></p>
      <ul>
        <li>Compute S(A) for various regions A</li>
        <li>Fit: S(A) = α|∂A| + β</li>
        <li>If area law violated → exotic phase</li>
        <li>If area law holds → proceed to step 3</li>
      </ul>

      <p><strong>Step 3: Compute I(A:C|B)</strong></p>
      <ul>
        <li>Choose appropriate geometry (disk, torus, etc.)</li>
        <li>Ensure w ≫ ξ ~ v/Δ (width exceeds correlation length)</li>
        <li>Calculate I(A:C|B) = S(AB) + S(BC) - S(B) - S(ABC)</li>
      </ul>

      <p><strong>Step 4: Interpret result</strong></p>
      <ul>
        <li><strong>I(A:C|B) ≈ 0:</strong> Trivial gapped phase (no topological order)</li>
        <li><strong>I(A:C|B) &lt; 0:</strong> Topological order present!</li>
        <li><strong>|I(A:C|B)| / 2 ≈ γ:</strong> Extract topological entropy</li>
      </ul>

      <p><strong>Step 5: Classification (if topological)</strong></p>
      <ul>
        <li>γ = log 2 → Z₂ topological order (toric code type)</li>
        <li>γ = log φ ≈ 0.48 → Fibonacci anyons</li>
        <li>Compare with known anyon theories</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Example: Toric Code Detection</h3>

      <p><strong>System:</strong> Unknown 2D gapped state on lattice</p>

      <p><strong>Apply protocol:</strong></p>
      <ol>
        <li><strong>Gap check:</strong> Δ = 2J (gapped) ✓</li>
        <li><strong>Area law:</strong> S(A) = α|∂A| - 0.69 ✓</li>
        <li><strong>Geometry:</strong> Disk with r = 10, w = 5 (assuming ξ ~ 1)</li>
        <li><strong>Calculation:</strong>
          <div class="equation">
            S(A) = α · 2πr - γ<br>
            S(AB) = α · 2π(r+w) - γ<br>
            S(BC) = α · (2π(r+2w) - 2π(r+w)) + ...<br>
            S(ABC) = α · 2π(r+2w) - γ
          </div>
        </li>
        <li><strong>Result:</strong> I(A:C|B) ≈ -1.39 ≈ -2 log 2</li>
      </ol>

      <p><strong>Conclusion:</strong> Z₂ topological order detected (toric code phase)</p>
    </div>

    <h2>Distinguishing Different Phases</h2>

    <div class="comparison-box">
      <h3>I(A:C|B) Signatures of Quantum Phases</h3>
      <table class="comparison-table">
        <tr>
          <th>Phase Type</th>
          <th>I(A:C|B)</th>
          <th>Additional Signatures</th>
        </tr>
        <tr>
          <td><strong>Trivial gapped</strong></td>
          <td>≈ 0</td>
          <td>Area law, γ = 0, no degeneracy</td>
        </tr>
        <tr>
          <td><strong>Z₂ topological</strong></td>
          <td>≈ -2 log 2</td>
          <td>4-fold degeneracy (torus)</td>
        </tr>
        <tr>
          <td><strong>Z_N topological</strong></td>
          <td>≈ -2 log N</td>
          <td>N²-fold degeneracy</td>
        </tr>
        <tr>
          <td><strong>Fibonacci anyons</strong></td>
          <td>≈ -2 log φ</td>
          <td>Non-abelian braiding</td>
        </tr>
        <tr>
          <td><strong>SSB (gapped)</strong></td>
          <td>≈ 0</td>
          <td>⟨O⟩ ≠ 0, degeneracy from SSB</td>
        </tr>
        <tr>
          <td><strong>SPT</strong></td>
          <td>≈ 0</td>
          <td>String order, edge states</td>
        </tr>
        <tr>
          <td><strong>Critical (1D CFT)</strong></td>
          <td>~ O(log L)</td>
          <td>S ~ (c/3) log L</td>
        </tr>
        <tr>
          <td><strong>Gapless (generic)</strong></td>
          <td>~ O(L^{d-1})</td>
          <td>Δ = 0, power-law correlations</td>
        </tr>
      </table>
    </div>

    <div class="info-box">
      <h3>Advantages over Other Measures</h3>

      <p><strong>Compared to S(A) alone:</strong></p>
      <ul>
        <li><strong>S(A):</strong> Cannot distinguish SPT from trivial (both area law, γ = 0)</li>
        <li><strong>I(A:C|B):</strong> Combined with string order, fully characterizes SPT</li>
      </ul>

      <p><strong>Compared to topological entropy γ extraction:</strong></p>
      <ul>
        <li><strong>γ (Kitaev-Preskill):</strong> Requires 7 regions, complex linear combination</li>
        <li><strong>I(A:C|B):</strong> Only 3 regions, direct relation I = -2γ</li>
        <li>Simpler numerically and experimentally</li>
      </ul>

      <p><strong>Compared to ground state degeneracy:</strong></p>
      <ul>
        <li><strong>Degeneracy:</strong> Depends on topology (torus vs sphere), boundary conditions</li>
        <li><strong>I(A:C|B):</strong> Local quantity, works on any manifold</li>
      </ul>

      <p><strong>Robustness:</strong></p>
      <ul>
        <li>Finite-size corrections: O(e^{-w/ξ})</li>
        <li>Exponentially suppressed if w ≫ ξ</li>
        <li>Less sensitive to boundary effects than degeneracy</li>
      </ul>
    </div>

    <h2>Numerical Implementation</h2>

    <div class="highlight-box">
      <h3>Computational Methods</h3>

      <p><strong>DMRG/MPS (1D and quasi-1D):</strong></p>
      <ul>
        <li>Compute reduced density matrices ρ_AB, ρ_BC, ρ_B, ρ_ABC</li>
        <li>Diagonalize to get eigenvalues λ_i</li>
        <li>S = -Σ λ_i log λ_i</li>
        <li>Combine: I(A:C|B) = S(AB) + S(BC) - S(B) - S(ABC)</li>
      </ul>

      <p><strong>PEPS (2D):</strong></p>
      <ul>
        <li>Contract tensor network to obtain ρ_X for each region X</li>
        <li>Approximate contractions (not exact)</li>
        <li>Convergence: Increase bond dimension χ until I(A:C|B) stabilizes</li>
      </ul>

      <p><strong>Exact diagonalization (small systems):</strong></p>
      <ul>
        <li>Full spectrum available</li>
        <li>Exact entropies up to numerical precision</li>
        <li>Limitation: System size N ≲ 40-50 (depending on locality)</li>
      </ul>

      <p><strong>Quantum Monte Carlo:</strong></p>
      <ul>
        <li>Rényi entropies S_α via replica trick</li>
        <li>I_α(A:C|B) from Rényi entropies</li>
        <li>Sign problem for frustrated/fermionic systems</li>
      </ul>

      <p><strong>Practical tips:</strong></p>
      <ul>
        <li>Ensure w ≥ 5ξ for good signal</li>
        <li>Finite-size scaling: Vary L, extrapolate to L → ∞</li>
        <li>Check convergence with bond dimension/basis size</li>
        <li>Average over different region choices (reduce fluctuations)</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Case Study: Detecting Phase Transition</h3>

      <p><strong>System:</strong> Toric code in magnetic field (see Section 5.4.2)</p>
      <div class="equation">
        H = -J Σ_s A_s - J Σ_p B_p - h Σ_i σ_i^z
      </div>

      <p><strong>Goal:</strong> Locate critical field h_c using I(A:C|B)</p>

      <p><strong>Procedure:</strong></p>
      <ol>
        <li>Fix system size L = 20 (torus)</li>
        <li>Fix geometry: Disk with r = 5, w = 3</li>
        <li>Vary h from 0 to 0.5J</li>
        <li>Compute I(A:C|B) for each h</li>
      </ol>

      <p><strong>Results:</strong></p>
      <ul>
        <li><strong>h = 0:</strong> I(A:C|B) = -1.38 (pure toric code)</li>
        <li><strong>0 &lt; h &lt; 0.33J:</strong> I(A:C|B) &lt; 0 (topological phase)</li>
        <li><strong>h ≈ 0.33J:</strong> I(A:C|B) crosses zero (phase transition)</li>
        <li><strong>h > 0.33J:</strong> I(A:C|B) ≈ 0 (trivial phase)</li>
      </ul>

      <p><strong>Conclusion:</strong> h_c ≈ 0.33J detected via I(A:C|B) sign change</p>

      <p><strong>Finite-size scaling:</strong></p>
      <ul>
        <li>Repeat for L = 10, 20, 30, 40</li>
        <li>Extract h_c(L) from I = 0 crossing</li>
        <li>Fit: h_c(L) = h_c(∞) + a/L^α</li>
        <li>Extrapolate to thermodynamic limit</li>
      </ul>
    </div>

    <h2>Experimental Measurement</h2>

    <div class="info-box">
      <h3>Challenges and Proposals</h3>

      <p><strong>Challenge:</strong> Requires knowledge of 4 density matrices (ρ_AB, ρ_BC, ρ_B, ρ_ABC)</p>

      <p><strong>State tomography approach:</strong></p>
      <ul>
        <li>Full reconstruction exponentially hard (d^N measurements)</li>
        <li>Impractical for large regions</li>
      </ul>

      <p><strong>Randomized measurements (shadow tomography):</strong></p>
      <ul>
        <li>Apply random unitaries, measure in computational basis</li>
        <li>Statistical reconstruction of entropies</li>
        <li>Requires poly(N) measurements (not exponential)</li>
        <li>Error bars improve with more measurements</li>
      </ul>

      <p><strong>Swap test for Rényi entropy:</strong></p>
      <div class="equation">
        S_2(A) = -log Tr[ρ_A²]
      </div>
      <ul>
        <li>Prepare two copies of |ψ⟩</li>
        <li>Perform swap operation on region A</li>
        <li>Measure overlap → Tr[ρ_A²]</li>
        <li>Repeat for AB, BC, B, ABC</li>
        <li>Compute I_2(A:C|B)</li>
      </ul>

      <p><strong>Quantum gas microscopy:</strong></p>
      <ul>
        <li>Site-resolved imaging of ultracold atoms</li>
        <li>Measure fluctuations and correlations</li>
        <li>Infer I_2(A:C|B) from number statistics</li>
        <li>Demonstrated: Rényi entropies in 1D Bose gas</li>
      </ul>

      <p><strong>Recent experiments:</strong></p>
      <ul>
        <li><strong>2021:</strong> Topological entropy in Rydberg atom arrays (γ measurement)</li>
        <li><strong>2022:</strong> Randomized measurements in superconducting qubits (Rényi entropies)</li>
        <li><strong>Ongoing:</strong> Attempts to measure I(A:C|B) directly</li>
      </ul>
    </div>

    <h2>Advanced Applications</h2>

    <div class="highlight-box">
      <h3>Beyond Ground State Detection</h3>

      <p><strong>1. Finite-temperature detection:</strong></p>
      <ul>
        <li>Topological order robust up to T &lt; Δ/k_B</li>
        <li>I(A:C|B, T) vanishes as T → ∞ (thermal fluctuations dominate)</li>
        <li>Crossover temperature: I(A:C|B, T_c) ~ 0</li>
        <li>Estimate gap: Δ ~ k_B T_c</li>
      </ul>

      <p><strong>2. Dynamical detection (quench):</strong></p>
      <ul>
        <li>Prepare ground state at h = h_i</li>
        <li>Suddenly change to h = h_f</li>
        <li>Track I(A:C|B, t) during time evolution</li>
        <li>Spreading of topological correlations</li>
      </ul>

      <p><strong>3. Disorder-induced phases:</strong></p>
      <ul>
        <li>Many-body localization: I(A:C|B) ≈ 0 (area law survives)</li>
        <li>Thermal phase: I(A:C|B) ~ volume (thermalization)</li>
        <li>MBL-thermal transition detectable</li>
      </ul>

      <p><strong>4. Symmetry-enriched topological phases:</strong></p>
      <ul>
        <li>I(A:C|B) detects topological order</li>
        <li>Combine with symmetry quantum numbers of anyons</li>
        <li>Classify SET phases</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Open Questions and Future Directions</h3>

      <p><strong>Theoretical:</strong></p>
      <ul>
        <li>Optimal region geometry for different anyon theories?</li>
        <li>I(A:C|B) for non-abelian topological order (beyond γ)?</li>
        <li>Connection to quantum complexity and error correction?</li>
        <li>Universal bounds on I(A:C|B) for different phases?</li>
      </ul>

      <p><strong>Numerical:</strong></p>
      <ul>
        <li>Improved algorithms for 2D and 3D systems</li>
        <li>Finite-size scaling theory for I(A:C|B)</li>
        <li>Machine learning to classify phases from I(A:C|B) patterns</li>
      </ul>

      <p><strong>Experimental:</strong></p>
      <ul>
        <li>Direct measurement protocols with minimal overhead</li>
        <li>Noise resilience and error mitigation</li>
        <li>Application to NISQ devices and quantum simulators</li>
        <li>Detection in real materials (frustrated magnets, FQHE)</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Universal detector:</strong> I(A:C|B) distinguishes topological from trivial gapped phases</li>
        <li><strong>Negative value:</strong> I(A:C|B) &lt; 0 unambiguously signals topological order</li>
        <li><strong>Direct extraction:</strong> I(A:C|B) = -2γ for appropriate geometry</li>
        <li><strong>Phase classification:</strong> Magnitude |I(A:C|B)|/2 identifies anyon theory (log 2 for Z₂, log φ for Fibonacci, etc.)</li>
        <li><strong>Simple protocol:</strong> Only 3 regions needed (vs 7 for Kitaev-Preskill)</li>
        <li><strong>Numerical:</strong> Computable via DMRG, PEPS, ED, QMC</li>
        <li><strong>Experimental:</strong> Measurable via randomized measurements, swap tests, quantum gas microscopy</li>
        <li><strong>Applications:</strong> Phase transitions, finite-T, dynamics, disorder, SET phases</li>
      </ul>

      <p><strong>Next:</strong> Section 5.5 explores the deep connection between gapped ground states and quantum error-correcting codes.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_4_6'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
