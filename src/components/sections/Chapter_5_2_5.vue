<template>
  <div class="section-content">
    <h1>5.2.5 Entanglement</h1>

    <p>Entanglement is the quintessential quantum property that distinguishes quantum many-body systems from classical ones. In this section, we explore how to quantify entanglement in extended systems, its structure in ground states, and its connection to phase transitions and computational complexity.</p>

    <h2>Entanglement Measures</h2>

    <div class="highlight-box">
      <h3>von Neumann Entropy</h3>

      <p><strong>Definition:</strong> For bipartition A ∪ Ā of system, entanglement entropy is:</p>
      <div class="equation">
        S(A) = -Tr[ρ_A log ρ_A]
      </div>
      <p>where ρ_A = Tr_Ā[|ψ⟩⟨ψ|] is reduced density matrix of region A</p>

      <p><strong>Properties:</strong></p>
      <ul>
        <li><strong>Non-negativity:</strong> S(A) ≥ 0</li>
        <li><strong>Subadditivity:</strong> S(AB) ≤ S(A) + S(B)</li>
        <li><strong>Strong subadditivity (SSA):</strong> S(AB) + S(BC) ≥ S(B) + S(ABC)</li>
        <li><strong>Purity:</strong> S(A) = 0 iff ρ_A pure</li>
        <li><strong>Schmidt decomposition:</strong> For pure |ψ⟩_{AB}, S(A) = S(B)</li>
      </ul>

      <p><strong>Physical interpretation:</strong></p>
      <ul>
        <li>Quantifies quantum correlations between A and Ā</li>
        <li>Measures information loss when tracing out Ā</li>
        <li>Maximum S(A) = log d_A for maximally mixed ρ_A</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>Rényi Entropies</h3>

      <p><strong>Definition:</strong> α-Rényi entropy for α ≥ 0, α ≠ 1:</p>
      <div class="equation">
        S_α(A) = (1/(1-α)) log Tr[ρ_A^α]
      </div>

      <p><strong>Special cases:</strong></p>
      <ul>
        <li><strong>α → 1:</strong> S₁(A) = S(A) (von Neumann)</li>
        <li><strong>α = 0:</strong> S₀(A) = log rank(ρ_A) (Hartley entropy)</li>
        <li><strong>α = 2:</strong> S₂(A) = -log Tr[ρ_A²] (collision entropy)</li>
        <li><strong>α → ∞:</strong> S_∞(A) = -log λ_max (min-entropy)</li>
      </ul>

      <p><strong>Properties:</strong></p>
      <ul>
        <li>S_α(A) is monotone decreasing in α</li>
        <li>S₂ easier to compute (second moment)</li>
        <li>Universal corrections often independent of α</li>
      </ul>

      <p><strong>Quantum information perspective:</strong></p>
      <div class="equation">
        S₂(A) = -log Tr[ρ_A²] = -log(purity)
      </div>
      <p>Related to quantum fidelity and distinguishability</p>
    </div>

    <div class="note-box">
      <h3>Mutual Information</h3>

      <p><strong>Definition:</strong> Total correlations between A and B:</p>
      <div class="equation">
        I(A:B) = S(A) + S(B) - S(AB)
      </div>

      <p><strong>Properties:</strong></p>
      <ul>
        <li><strong>Non-negativity:</strong> I(A:B) ≥ 0 (from SSA)</li>
        <li><strong>Symmetry:</strong> I(A:B) = I(B:A)</li>
        <li><strong>Purity:</strong> For pure |ψ⟩_{AB}, I(A:B) = 2S(A) = 2S(B)</li>
        <li><strong>Vanishing:</strong> I(A:B) = 0 iff ρ_AB = ρ_A ⊗ ρ_B (product state)</li>
      </ul>

      <p><strong>Conditional mutual information:</strong></p>
      <div class="equation">
        I(A:C|B) = S(AB) + S(BC) - S(B) - S(ABC) ≥ 0
      </div>
      <p>Measures correlations between A and C not mediated by B</p>
      <p><strong>Topological systems:</strong> I(A:C|B) can be negative for topologically ordered states!</p>
    </div>

    <h2>Entanglement Structure in Ground States</h2>

    <div class="highlight-box">
      <h3>Area Law</h3>

      <p><strong>Statement:</strong> For local gapped Hamiltonians in d dimensions:</p>
      <div class="equation">
        S(A) ≤ α |∂A| + subleading
      </div>
      <p>where |∂A| is boundary area (number of links crossing ∂A)</p>

      <p><strong>Physical origin:</strong></p>
      <ul>
        <li><strong>Locality:</strong> Hamiltonian couples nearby degrees of freedom</li>
        <li><strong>Gap:</strong> Finite energy cost suppresses long-range entanglement</li>
        <li><strong>Correlation length:</strong> ξ ~ v/Δ finite → exponential decay</li>
        <li><strong>Boundary dominance:</strong> Only degrees near ∂A contribute to S(A)</li>
      </ul>

      <p><strong>Consequences:</strong></p>
      <ul>
        <li>Ground state has efficient representation (MPS/PEPS)</li>
        <li>Classical simulation possible for many systems</li>
        <li>Preparation complexity: quantum circuits with depth O(L)</li>
      </ul>
    </div>

    <div class="comparison-box">
      <h3>Entanglement Scaling in Different Phases</h3>
      <table class="comparison-table">
        <tr>
          <th>Phase</th>
          <th>Scaling</th>
          <th>Example</th>
          <th>Coefficient α</th>
        </tr>
        <tr>
          <td><strong>Gapped (trivial)</strong></td>
          <td>S ~ O(L^{d-1})</td>
          <td>Trivial insulator</td>
          <td>Small, non-universal</td>
        </tr>
        <tr>
          <td><strong>Gapped (topological)</strong></td>
          <td>S ~ α L^{d-1} - γ</td>
          <td>Toric code</td>
          <td>γ = log 2 (Z₂)</td>
        </tr>
        <tr>
          <td><strong>Gapless (CFT)</strong></td>
          <td>S ~ (c/3) log L (1D)</td>
          <td>Critical Ising</td>
          <td>c = 1/2 (central charge)</td>
        </tr>
        <tr>
          <td><strong>Fermi liquid</strong></td>
          <td>S ~ L^{d-1} log L</td>
          <td>Free fermions</td>
          <td>Logarithmic enhancement</td>
        </tr>
        <tr>
          <td><strong>MBL</strong></td>
          <td>S ~ O(L^{d-1})</td>
          <td>Disordered chain</td>
          <td>Area law survives</td>
        </tr>
      </table>
    </div>

    <div class="info-box">
      <h3>Topological Entanglement Entropy γ</h3>

      <p><strong>Definition:</strong> Universal subleading correction in topologically ordered states:</p>
      <div class="equation">
        S(A) = α |∂A| - γ + o(1)
      </div>

      <p><strong>Kitaev-Preskill extraction:</strong></p>
      <div class="equation">
        S_topo = S(A) + S(B) + S(C) - S(AB) - S(BC) - S(AC) + S(ABC) = -γ
      </div>

      <p><strong>Physical meaning:</strong></p>
      <div class="equation">
        γ = log 𝒟
      </div>
      <p>where 𝒟 = √(Σ_a d_a²) is total quantum dimension</p>
      <ul>
        <li>Characterizes topological order</li>
        <li>Counts ground state degeneracy on torus: d_top = 𝒟²</li>
        <li>Robust against local perturbations</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Z₂ toric code:</strong> γ = log 2</li>
        <li><strong>Doubled Fibonacci:</strong> γ = log[(1+√5)/2]² ≈ 0.962</li>
        <li><strong>SU(2)_k Chern-Simons:</strong> γ = log√(2/(k+2) sin(π/(k+2)))</li>
      </ul>
    </div>

    <h2>Entanglement and Quantum Phase Transitions</h2>

    <div class="highlight-box">
      <h3>Criticality and Entanglement</h3>

      <p><strong>1D critical systems (CFT):</strong></p>
      <div class="equation">
        S(ℓ) = (c/3) log[L/π sin(πℓ/L)] + s₁
      </div>
      <ul>
        <li>c = central charge (counts degrees of freedom)</li>
        <li>Logarithmic scaling violates area law</li>
        <li>Universal: independent of microscopic details</li>
        <li>s₁ = non-universal constant</li>
      </ul>

      <p><strong>2D critical systems:</strong></p>
      <div class="equation">
        S(A) = α L log L + β L + γ_corner + ...
      </div>
      <ul>
        <li>Leading log term universal</li>
        <li>γ_corner depends on corner angles</li>
        <li>Richer structure than 1D</li>
      </ul>

      <p><strong>Entanglement scaling at QPT:</strong></p>
      <ul>
        <li><strong>Diverging ξ:</strong> Correlation length ξ → ∞</li>
        <li><strong>Enhanced S(A):</strong> Transitions from area law to logarithmic (1D)</li>
        <li><strong>Scaling function:</strong> S(L, ξ) = f(L/ξ)</li>
      </ul>
    </div>

    <div class="note-box">
      <h3>Example: Transverse-Field Ising Chain</h3>

      <p><strong>Hamiltonian:</strong></p>
      <div class="equation">
        H = -J Σ_i σ_i^z σ_{i+1}^z - h Σ_i σ_i^x
      </div>

      <p><strong>Phase diagram:</strong></p>
      <ul>
        <li><strong>h/J &lt; 1:</strong> Ferromagnetic (Z₂ SSB), S(ℓ) ~ O(1)</li>
        <li><strong>h/J = 1:</strong> Critical point (c = 1/2 Ising CFT), S(ℓ) ~ (1/6) log ℓ</li>
        <li><strong>h/J > 1:</strong> Paramagnetic, S(ℓ) ~ O(1)</li>
      </ul>

      <p><strong>Entanglement entropy:</strong></p>
      <div class="equation">
        S(ℓ) = { O(1)           (h ≠ J)
                 (1/6) log ℓ    (h = J, critical)
      </div>

      <p><strong>Observation:</strong> Entanglement detects QPT even at T=0</p>
    </div>

    <h2>Computational Implications</h2>

    <div class="info-box">
      <h3>Entanglement and Simulation Complexity</h3>

      <p><strong>Matrix Product States (MPS):</strong></p>
      <div class="equation">
        |ψ⟩ = Σ_{s_1,...,s_N} Tr[A^{s_1} ... A^{s_N}] |s_1...s_N⟩
      </div>

      <p><strong>Bond dimension χ required:</strong></p>
      <div class="equation">
        χ ~ e^{S(A)}
      </div>
      <p>For block A of size ℓ in chain</p>

      <p><strong>Storage:</strong> O(χ²Nd) parameters vs O(2^N) for full wavefunction</p>

      <p><strong>Scaling with entanglement:</strong></p>
      <ul>
        <li><strong>Area law (gapped):</strong> χ ~ e^{O(1)} → efficient</li>
        <li><strong>Log law (critical):</strong> χ ~ e^{(c/3) log L} = L^{c/3} → polynomial</li>
        <li><strong>Volume law:</strong> χ ~ e^{O(L)} → exponential (intractable)</li>
      </ul>

      <p><strong>DMRG efficiency:</strong></p>
      <p>Works well when S(ℓ) grows slowly:</p>
      <ul>
        <li>1D gapped: Exponential convergence</li>
        <li>1D critical: Polynomial convergence</li>
        <li>2D: Challenging (S ~ L not L^0)</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h3>Entanglement Hamiltonians</h3>

      <p><strong>Definition:</strong> Define entanglement Hamiltonian H_E via:</p>
      <div class="equation">
        ρ_A = e^{-H_E} / Tr[e^{-H_E}]
      </div>
      <p>so that H_E = -log ρ_A + const</p>

      <p><strong>Li-Haldane conjecture (2008):</strong></p>
      <p>For 1D critical systems, H_E is local:</p>
      <div class="equation">
        H_E ~ Σ_x [ψ†(x)(-i∂_x)ψ(x)] + ...
      </div>
      <p>Same structure as CFT Hamiltonian (conformal tower)</p>

      <p><strong>Topological systems:</strong></p>
      <ul>
        <li>Chiral edge modes in FQHE: H_E = edge CFT Hamiltonian</li>
        <li>Topological insulators: H_E captures edge physics</li>
        <li>Bulk-edge correspondence visible in entanglement structure</li>
      </ul>

      <p><strong>Experimental relevance:</strong></p>
      <p>Recent proposals to measure entanglement via randomized measurements and reconstruction of ρ_A</p>
    </div>

    <h2>Experimental Probes</h2>

    <div class="note-box">
      <h3>Measuring Entanglement</h3>

      <p><strong>Challenge:</strong> ρ_A requires full state tomography (exponentially hard)</p>

      <p><strong>Modern approaches:</strong></p>

      <p><strong>1. Randomized measurements:</strong></p>
      <ul>
        <li>Apply random unitary rotations + measure in computational basis</li>
        <li>Statistical reconstruction of ρ_A (classical shadow)</li>
        <li>Demonstrated: trapped ions, superconducting qubits</li>
      </ul>

      <p><strong>2. Quantum gas microscopy:</strong></p>
      <ul>
        <li>Site-resolved imaging of ultracold atoms</li>
        <li>Measure fluctuations, correlations</li>
        <li>Infer S₂(A) from number fluctuations</li>
      </ul>

      <p><strong>3. Interferometry:</strong></p>
      <ul>
        <li>Measure Rényi entropies via many-body interference</li>
        <li>Prepare two copies, interfere, measure purity</li>
        <li>S₂ accessible via swap test</li>
      </ul>

      <p><strong>4. Indirect probes:</strong></p>
      <ul>
        <li>Measure γ_topo via topological invariants</li>
        <li>Critical exponents → infer central charge c</li>
        <li>Correlation functions → bound entanglement</li>
      </ul>

      <p><strong>Recent experiments:</strong></p>
      <ul>
        <li>Rényi entropy in 1D Bose gas (2015)</li>
        <li>Entanglement growth in quench dynamics (2016-present)</li>
        <li>Topological entropy in Rydberg atoms (2021)</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>Measures:</strong> von Neumann S(A), Rényi S_α, mutual information I(A:B) quantify entanglement</li>
        <li><strong>Area law:</strong> Gapped ground states have S(A) ~ |∂A| (boundary scaling)</li>
        <li><strong>Topological correction:</strong> γ = log 𝒟 characterizes topological order</li>
        <li><strong>Critical systems:</strong> Logarithmic enhancement S ~ (c/3) log L in 1D CFT</li>
        <li><strong>QPT signature:</strong> Entanglement structure changes across phase transitions</li>
        <li><strong>Computational:</strong> Low entanglement → efficient tensor network representation</li>
        <li><strong>Experiments:</strong> Randomized measurements, interferometry enable entanglement probes</li>
      </ul>

      <p><strong>Next:</strong> Section 5.3 provides rigorous proof of the area law and explores topological entanglement entropy in detail.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_5_2_5'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
