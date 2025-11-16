<template>
  <div class="section-content">
    <h1>9.3.1 Ising Model</h1>

    <p>
      The 2D classical Ising model and its quantum counterpart provide ideal testing grounds for PEPS methods. These systems exhibit spontaneous symmetry breaking, long-range order, and phase transitions—all phenomena that PEPS can capture efficiently. This section provides a comprehensive treatment of Ising model representation in PEPS, including explicit tensor constructions, computational algorithms, and detailed numerical results.
    </p>

    <h2>Classical 2D Ising Model</h2>

    <div class="info-box">
      <h3>Hamiltonian and Partition Function</h3>
      <p>
        The classical Ising model on a square lattice is defined by:
      </p>
      <div class="equation">
        H = -J ∑_{⟨ij⟩} σ_i σ_j - h ∑_i σ_i
      </div>
      <p>
        where σ_i ∈ {±1} are classical spins, J > 0 is ferromagnetic coupling, and h is external field.
      </p>
      <p>
        The partition function at temperature T is:
      </p>
      <div class="equation">
        Z = ∑_{all configs} e^{-βH} = Tr[T^N]
      </div>
      <p>
        where β = 1/(k_BT) and T is the transfer matrix.
      </p>
      <p>
        <strong>Thermodynamic quantities:</strong>
      </p>
      <ul>
        <li>Free energy: F = -k_BT log Z</li>
        <li>Magnetization: m = -(1/N) ∂F/∂h</li>
        <li>Susceptibility: χ = ∂m/∂h</li>
        <li>Specific heat: C = -T ∂²F/∂T²</li>
      </ul>
    </div>

    <h3>Phase Diagram</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Temperature</th>
            <th>Order Parameter</th>
            <th>Correlation Length</th>
            <th>Free Energy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ordered (ferromagnetic)</td>
            <td>T < T_c ≈ 2.269 J/k_B</td>
            <td>m = ⟨σ_i⟩ ≠ 0</td>
            <td>ξ = ∞</td>
            <td>Analytic</td>
          </tr>
          <tr>
            <td>Critical</td>
            <td>T = T_c</td>
            <td>m = 0, power-law decay</td>
            <td>ξ = ∞</td>
            <td>Logarithmic singularity</td>
          </tr>
          <tr>
            <td>Disordered (paramagnetic)</td>
            <td>T > T_c</td>
            <td>m = 0</td>
            <td>ξ < ∞</td>
            <td>Analytic</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Onsager Solution</h3>

    <div class="highlight-box">
      <h4>Exact Results for 2D Ising</h4>
      <p>
        Lars Onsager solved the 2D Ising model exactly in 1944:
      </p>
      <div class="equation">
        k_B T_c / J = 2 / log(1 + √2) ≈ 2.269185...
      </div>
      <p>
        <strong>Critical exponents:</strong>
      </p>
      <ul>
        <li>Magnetization: β = 1/8</li>
        <li>Susceptibility: γ = 7/4</li>
        <li>Correlation length: ν = 1</li>
        <li>Specific heat: α = 0 (logarithmic divergence)</li>
      </ul>
      <p>
        <strong>Scaling relations:</strong>
      </p>
      <div class="equation">
        m(T) ~ (T_c - T)^{1/8}, χ(T) ~ |T - T_c|^{-7/4}, C(T) ~ -log|T - T_c|
      </div>
    </div>

    <h2>PEPS Representation</h2>

    <div class="info-box">
      <h3>Tensor Network for Partition Function</h3>
      <p>
        The partition function can be written exactly as a PEPS contraction with bond dimension χ = 2:
      </p>
      <div class="equation">
        Z = ∑_{σ₁...σ_N} ∏_{⟨ij⟩} T_{σ_iσ_j}
      </div>
      <p>
        where the transfer matrix element is:
      </p>
      <div class="equation">
        T_{σσ'} = e^{βJσσ'} = {
          e^{βJ}  if σ = σ' (parallel spins)
          e^{-βJ} if σ ≠ σ' (antiparallel spins)
        }
      </div>
      <p>
        This can be decomposed into a rank-5 tensor on each site:
      </p>
      <div class="equation">
        A^σ_{αβγδ} = (T_{σα}^{1/2}) (T_{σβ}^{1/2}) (T_{σγ}^{1/2}) (T_{σδ}^{1/2})
      </div>
      <p>
        where α, β, γ, δ ∈ {±1} label the four neighboring virtual spins.
      </p>
    </div>

    <h3>Explicit Tensor Construction</h3>

    <div class="highlight-box">
      <h4>Bond Dimension χ = 2 Representation</h4>
      <p>
        Define the transfer matrix square root:
      </p>
      <div class="equation">
        M = √T = [√(e^{βJ})    √(e^{-βJ})]  = [e^{βJ/2}     e^{-βJ/2}]
                 [√(e^{-βJ})   √(e^{βJ}) ]    [e^{-βJ/2}    e^{βJ/2} ]
      </div>
      <p>
        For each physical spin value σ ∈ {+1, -1} ↔ {0, 1} (indexing):
      </p>
      <div class="equation">
        A^{+1}_{αβγδ} = M_{0,α} M_{0,β} M_{0,γ} M_{0,δ}
        A^{-1}_{αβγδ} = M_{1,α} M_{1,β} M_{1,γ} M_{1,δ}
      </div>
      <p>
        <strong>Numerical example at T = 2J:</strong> β = 1/(2J), so
      </p>
      <div class="equation">
        M ≈ [1.284    0.779]
            [0.779    1.284]
      </div>
      <p>
        This gives rank-5 tensors with physical index σ and four virtual indices (left, right, up, down) each of dimension 2.
      </p>
    </div>

    <h3>Detailed Tensor Elements</h3>

    <div class="info-box">
      <h3>Complete Specification of PEPS Tensor</h3>
      <p>
        For concreteness, let's write out all elements for σ = +1 at T = T_c:
      </p>
      <p>
        At T_c, βJ ≈ 0.4407, so e^{βJ/2} ≈ 1.247, e^{-βJ/2} ≈ 0.802.
      </p>
      <div class="equation">
        A^{+1}_{++++} = (1.247)⁴ ≈ 2.418
        A^{+1}_{++-+} = (1.247)³(0.802) ≈ 1.541
        A^{+1}_{+++-} = (1.247)³(0.802) ≈ 1.541
        ... (16 elements total for 4 virtual indices)
      </div>
      <p>
        <strong>Key property:</strong> All elements positive (since we're dealing with Boltzmann weights), ensuring partition function Z > 0.
      </p>
    </div>

    <h2>Symmetry Properties</h2>

    <div class="info-box">
      <h3>ℤ₂ Spin-Flip Symmetry</h3>
      <p>
        The Ising model (at h = 0) has ℤ₂ symmetry: σ_i → -σ_i for all i.
      </p>
      <p>
        <strong>In PEPS language:</strong> Symmetry is implemented by:
      </p>
      <div class="equation">
        u_g = σ^x = [0  1]  (Pauli-X on virtual space)
                    [1  0]
      </div>
      <p>
        Acting on all four virtual indices simultaneously flips the physical index:
      </p>
      <div class="equation">
        ∑_{α'β'γ'δ'} (u_g)_{αα'} (u_g)_{ββ'} (u_g)_{γγ'} (u_g)_{δδ'} A^{+1}_{α'β'γ'δ'} = A^{-1}_{αβγδ}
      </div>
      <p>
        <strong>Consequences:</strong>
      </p>
      <ul>
        <li>T < T_c: Spontaneous symmetry breaking, ⟨σ⟩ ≠ 0 (choose one of ±m)</li>
        <li>T > T_c: Symmetric phase, ⟨σ⟩ = 0</li>
        <li>Two degenerate ground states at T < T_c (all + or all -)</li>
        <li>ℤ₂ quantum numbers block-diagonalize transfer matrix</li>
      </ul>
    </div>

    <h3>Block Structure from Symmetry</h3>

    <div class="highlight-box">
      <h4>Virtual Space Decomposition</h4>
      <p>
        Virtual indices can be labeled by ℤ₂ charge q ∈ {0, 1}:
      </p>
      <ul>
        <li>Virtual index α = +1 → q = 0 (even sector)</li>
        <li>Virtual index α = -1 → q = 1 (odd sector)</li>
      </ul>
      <p>
        The PEPS tensor conserves total ℤ₂ charge modulo 2:
      </p>
      <div class="equation">
        A^σ_{αβγδ} ≠ 0  ⟺  σ ≡ α + β + γ + δ (mod 2)
      </div>
      <p>
        This sparsity reduces computational cost by factor ~2.
      </p>
    </div>

    <h2>Computing Observables with PEPS</h2>

    <div class="info-box">
      <h3>Algorithm: CTMRG for 2D Ising</h3>
      <p>
        To compute thermodynamic quantities:
      </p>
      <ol>
        <li><strong>Construct PEPS tensor:</strong> A^σ from temperature β</li>
        <li><strong>Initialize corner (C) and edge (T) tensors:</strong> Random or identity</li>
        <li><strong>CTMRG iterations:</strong>
          <ul>
            <li>Absorb one row/column of A tensors</li>
            <li>SVD to truncate to bond dimension D_env</li>
            <li>Update C and T</li>
            <li>Repeat until convergence (typically 100-500 iterations)</li>
          </ul>
        </li>
        <li><strong>Compute observables:</strong> From converged environment
          <ul>
            <li>Partition function: Z ~ (leading eigenvalue)^N</li>
            <li>Local magnetization: m = ∑_σ σ ⟨A^σ⟩</li>
            <li>Correlations: via transfer matrix powers</li>
          </ul>
        </li>
      </ol>
      <p>
        <strong>Typical parameters:</strong> D_env = 20-40 for χ = 2, convergence threshold ε = 10^{-10}.
      </p>
    </div>

    <h3>Magnetization and Susceptibility</h3>

    <div class="highlight-box">
      <h4>Detailed Calculations</h4>
      <p>
        <strong>Magnetization:</strong>
      </p>
      <div class="equation">
        m = ⟨σ_i⟩ = (1/Z) ∑_{configs} σ_i e^{-βH} = (1/Z) ∂Z/∂h |_{h=0⁺}
      </div>
      <p>
        For T < T_c: m ~ (T_c - T)^{1/8} with β_mag = 1/8 (2D Ising critical exponent)
      </p>
      <p>
        <strong>Numerical values:</strong>
      </p>
      <ul>
        <li>T = 0: m = 1 (all spins aligned)</li>
        <li>T = 1.5 J/k_B: m ≈ 0.97</li>
        <li>T = 2.0 J/k_B: m ≈ 0.77</li>
        <li>T = 2.25 J/k_B: m ≈ 0.17</li>
        <li>T = T_c ≈ 2.269 J/k_B: m → 0⁺</li>
        <li>T > T_c: m = 0</li>
      </ul>
      <p>
        <strong>Susceptibility:</strong>
      </p>
      <div class="equation">
        χ = ∂m/∂h |_{h=0} = β(⟨σ²⟩ - ⟨σ⟩²) ~ |T - T_c|^{-7/4}
      </div>
      <p>
        with γ = 7/4 at criticality.
      </p>
    </div>

    <h2>Correlation Functions</h2>

    <div class="info-box">
      <h3>Two-Point Correlations</h3>
      <p>
        The spin-spin correlation function:
      </p>
      <div class="equation">
        G(r) = ⟨σ_0 σ_r⟩ - ⟨σ_0⟩⟨σ_r⟩
      </div>
      <p>
        <strong>Behavior in different phases:</strong>
      </p>
      <ul>
        <li><strong>T < T_c (ordered):</strong>
          <div class="equation">
            G(r) → m² > 0 as r → ∞
          </div>
          Long-range order persists to infinite separation.
        </li>
        <li><strong>T = T_c (critical):</strong>
          <div class="equation">
            G(r) ~ r^{-1/4}
          </div>
          Power-law decay with exponent η = 1/4.
        </li>
        <li><strong>T > T_c (disordered):</strong>
          <div class="equation">
            G(r) ~ e^{-r/ξ(T)}
          </div>
          Exponential decay with correlation length ξ(T) ~ |T - T_c|^{-1}.
        </li>
      </ul>
    </div>

    <h3>Computing Correlations with PEPS</h3>

    <div class="highlight-box">
      <h4>Transfer Matrix Method</h4>
      <p>
        For correlations separated by n rows:
      </p>
      <ol>
        <li>Construct boundary MPS from PEPS using CTMRG</li>
        <li>Insert σ operator at position 0: O₀</li>
        <li>Apply transfer matrix T^n</li>
        <li>Insert σ operator at final position: O_n</li>
        <li>Contract: ⟨O₀ T^n O_n⟩</li>
      </ol>
      <p>
        <strong>Result:</strong> For large n in ordered phase,
      </p>
      <div class="equation">
        G(n) ≈ m² + c₁ λ₂^n
      </div>
      <p>
        where λ₂ < 1 is the second-largest transfer matrix eigenvalue, and c₁ is a constant.
      </p>
    </div>

    <h2>Critical Phenomena</h2>

    <div class="info-box">
      <h3>Finite-Size Scaling at Criticality</h3>
      <p>
        Near T_c, finite bond dimension χ acts like finite system size:
      </p>
      <div class="equation">
        m(T, χ) = χ^{-β/ν} f_m((T - T_c)χ^{1/ν})
      </div>
      <p>
        where f_m is a universal scaling function.
      </p>
      <p>
        For 2D Ising: β/ν = 1/8, so m ~ χ^{-1/8} at T_c.
      </p>
    </div>

    <h3>Extracting Critical Exponents</h3>

    <div class="highlight-box">
      <h4>Numerical Procedure</h4>
      <ol>
        <li>Run PEPS simulations at various T near T_c with different χ</li>
        <li>Fit m(T, χ) to scaling form</li>
        <li>Extract T_c, β, ν from best fit</li>
        <li>Compare with exact values</li>
      </ol>
      <p>
        <strong>Example results (χ = 4, D_env = 30):</strong>
      </p>
      <ul>
        <li>T_c (PEPS) = 2.2692 ± 0.0001</li>
        <li>T_c (exact) = 2.269185...</li>
        <li>β (PEPS) = 0.126 ± 0.003</li>
        <li>β (exact) = 0.125</li>
      </ul>
    </div>

    <h2>Quantum Transverse-Field Ising Model</h2>

    <div class="info-box">
      <h3>Quantum Extension</h3>
      <p>
        The quantum version adds a transverse field:
      </p>
      <div class="equation">
        H = -J ∑_{⟨ij⟩} σ^z_i σ^z_j - Γ ∑_i σ^x_i
      </div>
      <p>
        <strong>Phase diagram:</strong>
      </p>
      <ul>
        <li>Γ/J ≪ 1: Ferromagnetic phase (⟨σ^z⟩ ≠ 0), classical-like</li>
        <li>Γ_c/J ≈ 3.04: Quantum critical point (3+1D Ising universality)</li>
        <li>Γ/J ≫ 1: Paramagnetic phase (⟨σ^z⟩ = 0, ⟨σ^x⟩ ≠ 0)</li>
      </ul>
      <p>
        <strong>PEPS representation:</strong> Ground state can be approximated with finite χ ~ 10-100 depending on proximity to quantum critical point.
      </p>
    </div>

    <h3>Variational PEPS for Quantum Ground State</h3>

    <div class="highlight-box">
      <h4>Optimization Algorithm</h4>
      <p>
        Unlike classical Ising (where PEPS is exact), quantum Ising requires variational optimization:
      </p>
      <ol>
        <li><strong>Initialize:</strong> Random PEPS tensors with bond dimension χ</li>
        <li><strong>Environment:</strong> Compute environments E_i for each tensor using CTMRG</li>
        <li><strong>Local update:</strong> For each site i:
          <ul>
            <li>Effective Hamiltonian: H_eff = E_i ⊗ H_local</li>
            <li>Find ground state: A^new = argmin ⟨ψ|H_eff|ψ⟩</li>
            <li>Update: A_i → A^new</li>
          </ul>
        </li>
        <li><strong>Iterate:</strong> Sweep through lattice until energy converges</li>
      </ol>
      <p>
        <strong>Typical convergence:</strong> 50-200 sweeps, energy error ~10^{-6} per site.
      </p>
    </div>

    <h3>Quantum Critical Point</h3>

    <div class="info-box">
      <h3>Properties at Γ = Γ_c</h3>
      <ul>
        <li><strong>Correlation length:</strong> ξ = ∞ (gapless)</li>
        <li><strong>Entanglement entropy:</strong> S ~ L log L (logarithmic violation of area law)</li>
        <li><strong>Bond dimension requirement:</strong> χ → ∞ for exact representation</li>
        <li><strong>Critical exponents:</strong> Same as (2+1)D classical Ising (z = 1)</li>
      </ul>
      <p>
        <strong>Challenge for PEPS:</strong> Fixed χ introduces effective correlation length ξ_eff ~ log χ, limiting accuracy at quantum critical point. MERA performs better here.
      </p>
    </div>

    <h2>Numerical Results with PEPS</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>System Size</th>
            <th>Critical Temperature</th>
            <th>Accuracy</th>
            <th>Computational Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Exact (Onsager)</td>
            <td>∞</td>
            <td>T_c/J = 2.269185...</td>
            <td>Exact</td>
            <td>Analytical</td>
          </tr>
          <tr>
            <td>PEPS (χ=2)</td>
            <td>Infinite</td>
            <td>T_c/J ≈ 2.27</td>
            <td>~0.1%</td>
            <td>~1 min</td>
          </tr>
          <tr>
            <td>PEPS (χ=4)</td>
            <td>Infinite</td>
            <td>T_c/J ≈ 2.2692</td>
            <td>~0.01%</td>
            <td>~10 min</td>
          </tr>
          <tr>
            <td>PEPS (χ=8)</td>
            <td>Infinite</td>
            <td>T_c/J ≈ 2.26918</td>
            <td>~0.001%</td>
            <td>~1 hour</td>
          </tr>
          <tr>
            <td>Monte Carlo</td>
            <td>1000×1000</td>
            <td>T_c/J ≈ 2.269±0.001</td>
            <td>Statistical error</td>
            <td>~1 hour</td>
          </tr>
          <tr>
            <td>Transfer matrix (1D)</td>
            <td>L×∞</td>
            <td>Converges slowly with L</td>
            <td>Good for large L</td>
            <td>Exponential in L</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Comparison with Other Methods</h2>

    <div class="info-box">
      <h3>Advantages of PEPS for Ising Model</h3>
      <p>
        <strong>Compared to Monte Carlo:</strong>
      </p>
      <ul>
        <li>No sign problem (deterministic)</li>
        <li>Direct access to thermodynamic limit (infinite system)</li>
        <li>No autocorrelation time (no Markov chain dynamics)</li>
        <li>Better for low temperatures (no ergodicity issues)</li>
      </ul>
      <p>
        <strong>Compared to transfer matrix:</strong>
      </p>
      <ul>
        <li>2D transfer matrix requires L → ∞ (exponential cost)</li>
        <li>PEPS works directly in 2D (polynomial cost in χ)</li>
        <li>Both exact in principle, but PEPS more practical for 2D</li>
      </ul>
      <p>
        <strong>Compared to series expansion:</strong>
      </p>
      <ul>
        <li>PEPS gives full phase diagram, not just perturbative regime</li>
        <li>Better convergence near critical point</li>
      </ul>
    </div>

    <h2>Extensions and Variations</h2>

    <div class="highlight-box">
      <h4>Other Ising-Type Models</h4>
      <p>
        The PEPS approach extends naturally to:
      </p>
      <ul>
        <li><strong>Anisotropic Ising:</strong> Different J_x, J_y couplings
          <ul><li>Critical line: sinh(2βJ_x) sinh(2βJ_y) = 1</li></ul>
        </li>
        <li><strong>Triangular lattice Ising:</strong> Frustration, different critical behavior</li>
        <li><strong>3-state Potts model:</strong> ℤ₃ symmetry, first-order transition</li>
        <li><strong>Clock models:</strong> ℤ_n symmetry, BKT transition for n ≥ 5</li>
        <li><strong>Ashkin-Teller model:</strong> Two coupled Ising layers</li>
      </ul>
    </div>

    <h2>Practical Implementation Notes</h2>

    <div class="info-box">
      <h3>Code Structure (Pseudocode)</h3>
      <p>
        <strong>Main CTMRG loop for 2D Ising:</strong>
      </p>
      <div class="equation">
        function CTMRG_Ising(β, χ, D_env, max_iter):
            # 1. Construct PEPS tensor
            A = construct_Ising_tensor(β, χ)

            # 2. Initialize environment
            C, T = initialize_environment(D_env)

            # 3. CTMRG iterations
            for iter in 1:max_iter:
                C, T = absorb_and_renormalize(C, T, A, D_env)
                energy = compute_energy(C, T, A)
                if converged(energy):
                    break

            # 4. Compute observables
            m = compute_magnetization(C, T, A)
            χ_mag = compute_susceptibility(C, T, A, β)

            return m, χ_mag, energy
      </div>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>Classical Ising:</strong> Exactly representable as PEPS with χ = 2</li>
        <li><strong>Partition function:</strong> Z = Tr[T^N] becomes PEPS contraction</li>
        <li><strong>Explicit construction:</strong> Tensor elements A^σ from Boltzmann weights</li>
        <li><strong>ℤ₂ symmetry:</strong> Implemented via virtual Pauli-X operators</li>
        <li><strong>Phase transition:</strong> T_c ≈ 2.269 J/k_B (Onsager solution)</li>
        <li><strong>Critical exponents:</strong> β = 1/8, γ = 7/4, ν = 1, η = 1/4</li>
        <li><strong>CTMRG algorithm:</strong> O(D_env³χ^{10}) per iteration, converges in ~100 steps</li>
        <li><strong>Quantum version:</strong> Transverse field induces quantum phase transition at Γ_c ≈ 3.04 J</li>
        <li><strong>Variational optimization:</strong> Required for quantum Ising ground state</li>
        <li><strong>PEPS accuracy:</strong> Excellent agreement with exact results, even at small χ</li>
        <li><strong>Computational advantage:</strong> Direct thermodynamic limit, no sign problem</li>
        <li><strong>Demonstrates:</strong> PEPS efficiently capture symmetry-breaking phases</li>
      </ul>
    </div>

    <p>
      The Ising model demonstrates how PEPS naturally encode symmetry-breaking order through tensor structure. The exact χ = 2 representation for classical Ising provides a perfect benchmark, while the quantum transverse-field extension shows the power of variational PEPS methods. The combination of analytical understanding (Onsager solution) and numerical PEPS techniques makes the 2D Ising model an ideal system for learning tensor network methods. The next section explores the general structural properties that emerge in PEPS representations of symmetric phases, building on the concrete Ising example developed here.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_3_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
