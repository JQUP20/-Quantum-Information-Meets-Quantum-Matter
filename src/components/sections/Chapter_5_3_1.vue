<template>
  <div class="section-content">
    <h1>5.3.1 Entanglement Area Law</h1>

    <p>The area law for entanglement entropy is one of the most profound discoveries in quantum many-body physics. It states that for gapped ground states with local interactions, the entanglement entropy between a region and its complement scales with the boundary area rather than the volume—a dramatic departure from random states and a key signature of emergent locality in quantum matter.</p>

    <h2>Statement of the Area Law</h2>

    <div class="highlight-box">
      <h3>Area Law for Gapped Systems</h3>

      <p><strong>Setup:</strong> Consider d-dimensional system with local Hamiltonian H, ground state |ψ₀⟩, and spectral gap Δ > 0</p>

      <p><strong>Bipartition:</strong> Divide system into region A and complement Ā</p>

      <p><strong>Reduced density matrix:</strong></p>
      <div class="equation">
        ρ_A = Tr_Ā[|ψ₀⟩⟨ψ₀|]
      </div>

      <p><strong>Entanglement entropy:</strong></p>
      <div class="equation">
        S(A) = -Tr[ρ_A log ρ_A]
      </div>

      <p><strong>Area law:</strong> For gapped ground states:</p>
      <div class="equation">
        S(A) ≤ α |∂A| + o(|∂A|)
      </div>
      <p>where:</p>
      <ul>
        <li><strong>|∂A|:</strong> Number of bonds crossing boundary of A (∝ L^{d-1} for region of size L)</li>
        <li><strong>α:</strong> Non-universal constant depending on Δ, details of Hamiltonian</li>
        <li><strong>o(|∂A|):</strong> Subleading corrections (including topological term -γ)</li>
      </ul>
    </div>

    <div class="comparison-box">
      <h3>Scaling Comparison</h3>
      <table class="comparison-table">
        <tr>
          <th>State/System</th>
          <th>Scaling S(A)</th>
          <th>Physical Interpretation</th>
        </tr>
        <tr>
          <td><strong>Random (Haar)</strong></td>
          <td>S ~ |A| (volume law)</td>
          <td>Maximally entangled, no structure</td>
        </tr>
        <tr>
          <td><strong>Product state</strong></td>
          <td>S = 0</td>
          <td>No entanglement</td>
        </tr>
        <tr>
          <td><strong>Gapped ground state (d≥1)</strong></td>
          <td>S ~ |∂A| ~ L^{d-1} (area law)</td>
          <td>Entanglement at boundary only</td>
        </tr>
        <tr>
          <td><strong>1D critical (CFT)</strong></td>
          <td>S ~ (c/3) log L</td>
          <td>Logarithmic violation, universal c</td>
        </tr>
        <tr>
          <td><strong>d>1 critical</strong></td>
          <td>S ~ L^{d-1} log L</td>
          <td>Multiplicative log correction</td>
        </tr>
        <tr>
          <td><strong>Fermi surface (metal)</strong></td>
          <td>S ~ L^{d-1} log L</td>
          <td>Gapless fermions</td>
        </tr>
        <tr>
          <td><strong>MBL (all eigenstates)</strong></td>
          <td>S ~ L^{d-1}</td>
          <td>Area law even in excited states</td>
        </tr>
      </table>
    </div>

    <h2>Hastings' Theorem (2007)</h2>

    <div class="highlight-box">
      <h3>Rigorous Area Law for 1D</h3>

      <p><strong>Theorem (Hastings 2007):</strong> For 1-dimensional local Hamiltonians with spectral gap Δ > 0:</p>
      <div class="equation">
        S(A) ≤ C(Δ, ||H||, k)
      </div>
      <p>where C is a constant independent of |A| (depends on gap Δ, interaction strength ||H||, locality k)</p>

      <p><strong>Significance:</strong></p>
      <ul>
        <li>First rigorous proof of area law (1D case)</li>
        <li>Entanglement entropy bounded by constant for any connected region A</li>
        <li>Confirms physical intuition: gap → finite correlation length → area law</li>
        <li>Does not require translation invariance or other special structure</li>
      </ul>

      <p><strong>Limitations:</strong></p>
      <ul>
        <li>Proven only for d=1 (higher dimensions remain open conjecture)</li>
        <li>Bound C may be loose (actual entanglement often much smaller)</li>
        <li>Does not capture topological correction -γ explicitly</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Proof Sketch (Hastings 2007)</h3>

      <p><strong>Key ideas:</strong></p>

      <p><strong>1. Lieb-Robinson bound:</strong></p>
      <p>For local Hamiltonian H, operators spread with finite velocity v:</p>
      <div class="equation">
        ||[A(t), B]|| ≤ C e^{v|t| - r_{AB}/ξ}
      </div>
      <p>where r_{AB} = distance between supports of A and B</p>

      <p><strong>2. Quasi-adiabatic evolution:</strong></p>
      <ul>
        <li>Construct path from |ψ₀⟩ (ground state) to product state |φ⟩</li>
        <li>Smoothly turn off interactions far from boundary ∂A</li>
        <li>Gap Δ ensures adiabatic following (no excitations created)</li>
      </ul>

      <p><strong>3. Entanglement from boundary layer:</strong></p>
      <ul>
        <li>After adiabatic evolution, only boundary layer (width ~ ξ ~ v/Δ) remains entangled</li>
        <li>Bulk factorizes: ρ_A ≈ ρ_{boundary} ⊗ ρ_{bulk}</li>
        <li>Entanglement S(A) ≤ S(ρ_{boundary}) ≤ const × |∂A|</li>
      </ul>

      <p><strong>Result:</strong> Bound S(A) by function of Δ, v, k (locality), independent of |A|</p>
    </div>

    <h2>Physical Intuition</h2>

    <div class="highlight-box">
      <h3>Why Does Area Law Hold?</h3>

      <p><strong>Mechanism:</strong></p>

      <p><strong>1. Gap → Finite correlation length:</strong></p>
      <div class="equation">
        ξ ~ v/Δ
      </div>
      <ul>
        <li>Correlations decay exponentially: ⟨O_i O_j⟩_c ~ e^{-r_{ij}/ξ}</li>
        <li>Beyond distance ξ, sites effectively independent</li>
      </ul>

      <p><strong>2. Locality → Boundary-dominated entanglement:</strong></p>
      <ul>
        <li>Sites deep in bulk of A: Distance > ξ from boundary ∂A</li>
        <li>These sites uncorrelated with Ā → factorized</li>
        <li>Only sites within ~ ξ of ∂A contribute to entanglement</li>
      </ul>

      <p><strong>3. Boundary scaling:</strong></p>
      <ul>
        <li>Number of boundary sites: |∂A| ~ L^{d-1}</li>
        <li>Entanglement per boundary site: O(1) (bounded by local Hilbert space dimension)</li>
        <li>Total entanglement: S ~ |∂A| ~ L^{d-1}</li>
      </ul>

      <p><strong>Cartoon:</strong></p>
      <div class="note-box">
        <p>Imagine region A as a ball of radius R in d dimensions:</p>
        <ul>
          <li>Volume: |A| ~ R^d</li>
          <li>Surface area: |∂A| ~ R^{d-1}</li>
          <li>Boundary layer thickness: ~ ξ</li>
          <li>Entangled volume: ~ ξ × R^{d-1}</li>
          <li>But entanglement per volume is O(1) → S ~ R^{d-1}</li>
        </ul>
      </div>
    </div>

    <h2>Examples and Verification</h2>

    <div class="note-box">
      <h3>Example 1: Toric Code</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = -Σ_v A_v - Σ_p B_p
      </div>

      <p><strong>Ground state:</strong> 4-fold degenerate on torus (topological)</p>

      <p><strong>Entanglement for disk region A:</strong></p>
      <div class="equation">
        S(A) = |∂A| - log 2
      </div>
      <ul>
        <li>Linear in boundary (area law with α=1)</li>
        <li>Topological correction: -γ = -log 2</li>
        <li>Exactly solvable → explicit calculation</li>
      </ul>

      <p><strong>Physical picture:</strong></p>
      <ul>
        <li>Each boundary edge contributes 1 bit of entanglement</li>
        <li>Topological term from long-range entanglement</li>
        <li>Independent of shape details (universal)</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Example 2: AKLT State (1D)</h3>

      <p><strong>Model:</strong> Spin-1 chain, frustration-free ground state (VBS)</p>

      <p><strong>Entanglement for half-chain:</strong></p>
      <div class="equation">
        S(A) = log 2 (exactly!)
      </div>

      <p><strong>Explanation:</strong></p>
      <ul>
        <li>VBS construction: Each site decomposed into two spin-1/2's</li>
        <li>Singlets form between neighboring auxiliary spins</li>
        <li>One singlet crosses boundary → S = log 2</li>
        <li>Perfect area law (constant in 1D)</li>
      </ul>

      <p><strong>General result for 1D gapped:</strong></p>
      <p>Entanglement entropy is constant, independent of |A|</p>
    </div>

    <div class="info-box">
      <h3>Example 3: Transverse-Field Ising Model</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = -J Σ σ_i^z σ_{i+1}^z - h Σ σ_i^x
      </div>

      <p><strong>Phase diagram:</strong></p>
      <ul>
        <li><strong>h &lt; J:</strong> Ordered phase (gapped), S ~ const</li>
        <li><strong>h = J:</strong> Critical point (gapless), S ~ (1/3) log L</li>
        <li><strong>h > J:</strong> Disordered phase (gapped), S ~ const</li>
      </ul>

      <p><strong>Numerical verification:</strong></p>
      <ul>
        <li>DMRG calculations confirm area law in gapped phases</li>
        <li>Logarithmic divergence at criticality (CFT with c=1/2)</li>
        <li>Continuous transition in entanglement scaling</li>
      </ul>
    </div>

    <h2>Topological Correction</h2>

    <div class="highlight-box">
      <h3>Subleading Universal Term</h3>

      <p><strong>For topologically ordered systems:</strong></p>
      <div class="equation">
        S(A) = α |∂A| - γ + O(1/|∂A|)
      </div>

      <p><strong>Topological entanglement entropy γ:</strong></p>
      <ul>
        <li><strong>Universal constant</strong> (independent of boundary details, system size)</li>
        <li><strong>Negative sign:</strong> Reduces entanglement below naive area law</li>
        <li><strong>Physical meaning:</strong> Long-range entanglement signature</li>
        <li><strong>Relation to quantum dimension:</strong> γ = log(𝒟) where 𝒟² = Σ_a d_a²</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li>Toric code (Z₂): γ = log 2</li>
        <li>Double semion: γ = log 2 (different topological order!)</li>
        <li>Fibonacci anyons: γ = log φ where φ = (1+√5)/2</li>
        <li>Trivial phases: γ = 0</li>
      </ul>

      <p><strong>Next section (5.3.2):</strong> Detailed extraction methods and physical interpretation of γ</p>
    </div>

    <h2>Violations of Area Law</h2>

    <div class="comparison-box">
      <h3>When Does Area Law Fail?</h3>
      <table class="comparison-table">
        <tr>
          <th>System Type</th>
          <th>Scaling</th>
          <th>Reason</th>
        </tr>
        <tr>
          <td><strong>Critical systems (1D CFT)</strong></td>
          <td>S ~ (c/3) log L</td>
          <td>Gapless → ξ=∞ → power-law correlations</td>
        </tr>
        <tr>
          <td><strong>Fermi surface (d>1)</strong></td>
          <td>S ~ L^{d-1} log L</td>
          <td>Gapless fermions, Fermi surface</td>
        </tr>
        <tr>
          <td><strong>Long-range interactions</strong></td>
          <td>Can violate area law</td>
          <td>Interactions couple distant sites directly</td>
        </tr>
        <tr>
          <td><strong>Random states (Haar)</strong></td>
          <td>S ~ min(|A|, |Ā|)</td>
          <td>Volume law, maximal entanglement</td>
        </tr>
        <tr>
          <td><strong>Excited states (ETH)</strong></td>
          <td>S ~ |A| (volume law)</td>
          <td>Thermalization → random-like</td>
        </tr>
      </table>
    </div>

    <h2>Computational Implications</h2>

    <div class="info-box">
      <h3>Tensor Network Efficiency</h3>

      <p><strong>Matrix Product States (MPS) in 1D:</strong></p>
      <p>Area law S ~ O(1) → bond dimension χ ~ e^{O(1)} = O(1)</p>
      <ul>
        <li>Constant bond dimension suffices!</li>
        <li>DMRG highly efficient for 1D gapped systems</li>
        <li>Storage: O(N χ² d) = O(N) (polynomial)</li>
      </ul>

      <p><strong>PEPS in 2D:</strong></p>
      <p>Area law S ~ L → bond dimension χ ~ e^{O(L)} = poly(L)</p>
      <ul>
        <li>Polynomial bond dimension for fixed approximation error</li>
        <li>Contractions #P-hard but often tractable</li>
        <li>Much better than exponential for volume-law states</li>
      </ul>

      <p><strong>Higher dimensions d≥3:</strong></p>
      <p>Area law S ~ L^{d-1} → bond dimension χ ~ e^{O(L^{d-1})}</p>
      <ul>
        <li>Exponential in L for d≥3</li>
        <li>Tensor networks not efficient</li>
        <li>Fundamental barrier from geometry</li>
      </ul>

      <p><strong>Conclusion:</strong> Area law is necessary (but not sufficient) for efficient tensor network representation</p>
    </div>

    <h2>Open Questions</h2>

    <div class="note-box">
      <h3>Unresolved Problems</h3>

      <p><strong>1. Higher dimensions:</strong></p>
      <ul>
        <li>Rigorous area law proof only for d=1 (Hastings 2007)</li>
        <li>d≥2 remains conjecture (strongly believed, no counterexamples)</li>
        <li>Roadblock: Lieb-Robinson bound alone insufficient</li>
      </ul>

      <p><strong>2. Tightness of bounds:</strong></p>
      <ul>
        <li>Hastings' bound C(Δ, ||H||, k) is not tight</li>
        <li>Can we determine optimal α in S ≤ α|∂A|?</li>
        <li>Depends on details (dimension d, coordination number, etc.)</li>
      </ul>

      <p><strong>3. Finite-temperature:</strong></p>
      <ul>
        <li>Does area law hold for thermal states ρ_β = e^{-βH}/Z at low T?</li>
        <li>Expected: S ~ L^{d-1} + O(e^{-β Δ})</li>
        <li>Rigorous proof elusive</li>
      </ul>

      <p><strong>4. Dynamical area law:</strong></p>
      <ul>
        <li>After quench, how does entanglement grow?</li>
        <li>Lieb-Robinson → S(t) ≤ vt × L^{d-1} (ballistic)</li>
        <li>Saturation to equilibrium: Volume law or area law?</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Area law:</strong> S(A) ~ |∂A| ~ L^{d-1} for gapped ground states with local H</li>
        <li><strong>Mechanism:</strong> Gap Δ → finite ξ ~ v/Δ → entanglement confined to boundary layer</li>
        <li><strong>Hastings 2007:</strong> Rigorous proof for d=1, polynomial bound on S (const independent of |A|)</li>
        <li><strong>Topological correction:</strong> S = α|∂A| - γ where γ universal (next section)</li>
        <li><strong>Violations:</strong> Critical systems (log), Fermi surfaces (log), random states (volume)</li>
        <li><strong>Computational:</strong> Area law enables efficient tensor networks (1D perfect, 2D good, 3D bad)</li>
        <li><strong>Universal feature:</strong> Gapped local systems obey area law (robust across models)</li>
      </ul>

      <p><strong>The area law represents a fundamental organizing principle of quantum many-body physics, bridging locality of interactions, gap structure, correlation decay, and entanglement scaling—with profound implications for both understanding and simulating quantum matter.</strong></p>

      <p><strong>Next:</strong> Section 5.3.2 explores the topological entanglement entropy γ, which detects long-range quantum order invisible to local measurements.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_3_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
