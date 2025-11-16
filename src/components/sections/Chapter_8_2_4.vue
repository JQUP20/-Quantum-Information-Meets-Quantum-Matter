<template>
  <div class="section-content">
    <h1>8.2.4 Correlation Length</h1>

    <p>
      The correlation length ξ is a fundamental characteristic that quantifies the range of quantum correlations in a many-body system. For MPS, the correlation length is directly encoded in the eigenvalue spectrum of the transfer matrix, providing a beautiful connection between the mathematical structure and physical properties.
    </p>

    <h2>Definition and Physical Meaning</h2>

    <div class="info-box">
      <h3>Correlation Length in Quantum Systems</h3>
      <p>
        The correlation length ξ characterizes how correlations between observables decay with spatial separation. For a translationally invariant system, consider the connected correlation function:
      </p>
      <div class="equation">
        C(r) = ⟨O_0 O_r⟩ - ⟨O_0⟩⟨O_r⟩
      </div>
      <p>
        In a gapped system, correlations typically decay exponentially:
      </p>
      <div class="equation">
        C(r) ~ e^{-r/ξ}  as r → ∞
      </div>
      <p>
        where ξ is the correlation length. Physically:
      </p>
      <ul>
        <li><strong>ξ ≈ 0:</strong> Product state, no correlations</li>
        <li><strong>ξ finite:</strong> Gapped phase, short-range correlations</li>
        <li><strong>ξ = ∞:</strong> Critical point or gapless phase, power-law correlations</li>
      </ul>
    </div>

    <h3>Interpretation</h3>

    <div class="highlight-box">
      <h4>What Does Correlation Length Measure?</h4>
      <p>
        The correlation length ξ can be interpreted in several equivalent ways:
      </p>
      <ul>
        <li><strong>Information propagation:</strong> The typical distance over which quantum information spreads</li>
        <li><strong>Entanglement range:</strong> The scale beyond which sites are essentially uncorrelated</li>
        <li><strong>Response length:</strong> How far a local perturbation affects the system</li>
        <li><strong>Healing length:</strong> Distance over which the system "forgets" boundary conditions</li>
      </ul>
      <p>
        For instance, in the AKLT state with ξ ≈ 1.44, correlations are essentially zero beyond ~5 lattice spacings.
      </p>
    </div>

    <h2>Correlation Length from Transfer Matrix</h2>

    <p>
      One of the most powerful features of MPS is that ξ can be directly computed from the transfer matrix eigenvalues.
    </p>

    <div class="info-box">
      <h3>Transfer Matrix Formula</h3>
      <p>
        For a translationally invariant MPS with transfer matrix E = ∑ᵢ A^i ⊗ (A^i)*, let λ₁, λ₂, λ₃, ... be the eigenvalues ordered by magnitude: |λ₁| ≥ |λ₂| ≥ |λ₃| ≥ ...
      </p>
      <p>
        The correlation length is:
      </p>
      <div class="equation">
        ξ = -1 / log|λ₂/λ₁|
      </div>
      <p>
        For a normalized state, λ₁ = 1, so:
      </p>
      <div class="equation">
        ξ = -1 / log|λ₂|
      </div>
    </div>

    <h3>Derivation</h3>

    <div class="highlight-box">
      <h4>Why Does This Formula Work?</h4>
      <p>
        Consider computing ⟨O_0 O_r⟩ using MPS. The calculation involves:
      </p>
      <ol>
        <li>Left environment with O_0 inserted: creates a vector v_L</li>
        <li>Propagation over r sites: multiply by E^r</li>
        <li>Right environment with O_r inserted: contracts with v_R</li>
      </ol>
      <p>
        Using eigenvalue decomposition E = ∑_k λ_k |v_k⟩⟨w_k|:
      </p>
      <div class="equation">
        E^r = ∑_k λ_k^r |v_k⟩⟨w_k|
      </div>
      <p>
        For large r, this is dominated by the largest eigenvalue:
      </p>
      <div class="equation">
        E^r ≈ λ₁^r |v₁⟩⟨w₁| + λ₂^r |v₂⟩⟨w₂| + ...
      </div>
      <p>
        The first term gives ⟨O_0⟩⟨O_r⟩ (factorized), while the second term gives the connected correlator:
      </p>
      <div class="equation">
        C(r) ~ λ₂^r = (λ₂/λ₁)^r λ₁^r ~ e^{r·log|λ₂/λ₁|}
      </div>
      <p>
        Identifying this with e^{-r/ξ} gives the formula.
      </p>
    </div>

    <h2>Examples in Different Phases</h2>

    <h3>Product States (ξ = 0)</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Transfer Matrix</th>
            <th>Eigenvalues</th>
            <th>ξ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>|0⟩^⊗N</td>
            <td>E = 1 (1×1)</td>
            <td>λ₁ = 1, others = 0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>(|0⟩ + |1⟩)^⊗N /√2^N</td>
            <td>E = 1 (1×1)</td>
            <td>λ₁ = 1, others = 0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Product states have χ = 1, so E is just a scalar. All correlations vanish: C(r) = 0 for r > 0.
    </p>

    <h3>AKLT State (ξ ≈ 1.44)</h3>

    <div class="highlight-box">
      <h4>Gapped Spin-1 Chain</h4>
      <p>
        The AKLT state with bond dimension χ = 2 has:
      </p>
      <div class="equation">
        λ₁ = 1,  λ₂ = -1/2,  λ₃ = 0,  λ₄ = 0
      </div>
      <p>
        The correlation length is:
      </p>
      <div class="equation">
        ξ = -1/log|λ₂| = -1/log(1/2) = 1/log(2) ≈ 1.443
      </div>
      <p>
        The negative sign of λ₂ means correlations alternate in sign (antiferromagnetic):
      </p>
      <div class="equation">
        C(r) ~ (-1)^r e^{-r/ξ}
      </div>
      <p>
        This extremely short correlation length reflects the Haldane gap (gapped excitations).
      </p>
    </div>

    <h3>Critical Systems (ξ = ∞)</h3>

    <div class="info-box">
      <h3>Conformal Field Theory Ground States</h3>
      <p>
        At a quantum critical point described by CFT with central charge c, correlations decay as power laws rather than exponentials:
      </p>
      <div class="equation">
        C(r) ~ r^{-2Δ}
      </div>
      <p>
        where Δ is the scaling dimension of the operator. To represent such states with MPS:
      </p>
      <ul>
        <li><strong>Finite χ:</strong> Can only approximate, effective ξ = ξ(χ, N)</li>
        <li><strong>Scaling of χ:</strong> Need χ ~ L^{c/6} for system size L to maintain accuracy</li>
        <li><strong>Transfer matrix:</strong> Multiple eigenvalues approach |λ₁| as χ increases</li>
      </ul>
      <p>
        Example: Critical transverse-field Ising model (c = 1/2) requires χ ~ L^{1/12}.
      </p>
    </div>

    <h2>Multiple Correlation Lengths</h2>

    <p>
      In general, the transfer matrix has many eigenvalues, each corresponding to a different "channel" or symmetry sector.
    </p>

    <div class="info-box">
      <h3>Spectrum and Correlation Functions</h3>
      <p>
        The full expansion of correlations includes all eigenvalues:
      </p>
      <div class="equation">
        C(r) = ∑_{k=2}^{χ²} c_k λ_k^r
      </div>
      <p>
        where coefficients c_k depend on the operators O_0 and O_r. This leads to multiple correlation lengths:
      </p>
      <div class="equation">
        ξ_k = -1 / log|λ_k|  for k = 2, 3, 4, ...
      </div>
      <p>
        Different observables may emphasize different ξ_k:
      </p>
      <ul>
        <li><strong>Spin correlations ⟨σ^z_0 σ^z_r⟩:</strong> May probe λ₂ (density channel)</li>
        <li><strong>String order:</strong> May probe λ₃ (topological channel)</li>
        <li><strong>Energy-energy correlations:</strong> May involve λ₄ (energy channel)</li>
      </ul>
    </div>

    <h3>Example: XXZ Model</h3>

    <div class="highlight-box">
      <h4>Multiple Length Scales</h4>
      <p>
        In the XXZ spin-1/2 chain H = ∑ⱼ (σ^x_j σ^x_{j+1} + σ^y_j σ^y_{j+1} + Δσ^z_j σ^z_{j+1}), the transfer matrix can have multiple relevant eigenvalues:
      </p>
      <ul>
        <li><strong>λ₁ = 1:</strong> Normalization</li>
        <li><strong>λ₂:</strong> Magnetic channel (⟨σ^z_0 σ^z_r⟩) with ξ_mag</li>
        <li><strong>λ₃:</strong> Dimer channel with ξ_dimer</li>
      </ul>
      <p>
        For Δ > 1 (Ising-like), both ξ_mag and ξ_dimer are finite but may differ by orders of magnitude.
      </p>
    </div>

    <h2>Finite-Size Effects</h2>

    <p>
      In finite systems, the correlation length ξ competes with the system size L, leading to finite-size scaling.
    </p>

    <div class="info-box">
      <h3>Finite-Size Scaling Theory</h3>
      <p>
        For a system of size L with intrinsic correlation length ξ:
      </p>
      <ul>
        <li><strong>ξ ≪ L:</strong> Bulk behavior dominates, ξ can be extracted reliably</li>
        <li><strong>ξ ~ L:</strong> Finite-size effects important, need scaling analysis</li>
        <li><strong>ξ ≫ L:</strong> System appears critical, true ξ inaccessible</li>
      </ul>
      <p>
        At criticality (ξ = ∞), the effective finite-size correlation length scales as:
      </p>
      <div class="equation">
        ξ_eff(L) ~ L
      </div>
      <p>
        This allows extraction of critical exponents from finite-size data.
      </p>
    </div>

    <h2>Extracting Correlation Length in Practice</h2>

    <h3>Method 1: Transfer Matrix Eigenvalues</h3>

    <div class="highlight-box">
      <h4>Direct Computation</h4>
      <p>
        <strong>Algorithm:</strong>
      </p>
      <ol>
        <li>Construct transfer matrix E = ∑ᵢ A^i ⊗ (A^i)* (χ² × χ² matrix)</li>
        <li>Compute two largest-magnitude eigenvalues λ₁, λ₂ using iterative methods (Arnoldi)</li>
        <li>Extract ξ = -1/log|λ₂/λ₁|</li>
      </ol>
      <p>
        <strong>Advantages:</strong>
      </p>
      <ul>
        <li>Exact (within numerical precision)</li>
        <li>Fast for moderate χ (up to χ ~ 1000)</li>
        <li>Gives all correlation lengths (from full spectrum)</li>
      </ul>
      <p>
        <strong>Complexity:</strong> O(χ⁴) for eigenvalue computation (one-time cost)
      </p>
    </div>

    <h3>Method 2: Fitting Correlation Functions</h3>

    <div class="highlight-box">
      <h4>From Direct Measurements</h4>
      <p>
        <strong>Algorithm:</strong>
      </p>
      <ol>
        <li>Compute C(r) = ⟨O_0 O_r⟩ - ⟨O_0⟩⟨O_r⟩ for various r</li>
        <li>Fit to exponential: C(r) = A e^{-r/ξ} (or with oscillations: A(-1)^r e^{-r/ξ})</li>
        <li>Extract ξ from fit parameter</li>
      </ol>
      <p>
        <strong>Advantages:</strong>
      </p>
      <ul>
        <li>Operator-specific (can get different ξ for different observables)</li>
        <li>Works even without direct access to MPS matrices</li>
      </ul>
      <p>
        <strong>Disadvantages:</strong>
      </p>
      <ul>
        <li>Less accurate (fitting errors)</li>
        <li>Need data at many separation distances r</li>
        <li>Requires careful handling of multiple length scales</li>
      </ul>
    </div>

    <h2>Correlation Length and Entanglement</h2>

    <div class="info-box">
      <h3>Area Law Connection</h3>
      <p>
        The correlation length controls the entanglement entropy through the area law. For a region A of length ℓ in a 1D system:
      </p>
      <div class="equation">
        S(ρ_A) = {
          O(1)           if ξ is finite (gapped)
          (c/3)log ℓ     if ξ = ∞ (critical, CFT with central charge c)
        }
      </div>
      <p>
        For finite ξ, the entanglement saturates at a constant value:
      </p>
      <div class="equation">
        S_max ~ log(χ_eff) ~ ξ
      </div>
      <p>
        This shows why MPS with finite χ can represent gapped states exactly: the required bond dimension χ ≥ exp(S_max) is finite when ξ is finite.
      </p>
    </div>

    <h2>Phase Transitions and Diverging ξ</h2>

    <div class="highlight-box">
      <h4>Correlation Length at Criticality</h4>
      <p>
        Near a quantum phase transition at critical coupling g = g_c, the correlation length diverges as:
      </p>
      <div class="equation">
        ξ(g) ~ |g - g_c|^{-ν}
      </div>
      <p>
        where ν is the correlation length critical exponent. This divergence implies:
      </p>
      <ul>
        <li><strong>Transfer matrix:</strong> λ₂ → 1 as g → g_c</li>
        <li><strong>MPS representation:</strong> Required χ grows as χ ~ ξ^α ~ |g - g_c|^{-να}</li>
        <li><strong>Numerical challenge:</strong> MPS becomes inefficient very close to criticality</li>
      </ul>
      <p>
        Example: Transverse-field Ising model at g_c = 1 has ν = 1, so ξ ~ 1/|g - 1|.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>Definition:</strong> ξ characterizes exponential decay C(r) ~ e^{-r/ξ} of correlations</li>
        <li><strong>Transfer matrix formula:</strong> ξ = -1/log|λ₂/λ₁| from eigenvalue spectrum</li>
        <li><strong>Physical interpretation:</strong> Information propagation scale, entanglement range</li>
        <li><strong>Product states:</strong> ξ = 0 (λ₂ = 0)</li>
        <li><strong>Gapped phases:</strong> ξ finite (|λ₂| < 1)</li>
        <li><strong>Critical points:</strong> ξ = ∞ (λ₂ → 1), power-law correlations</li>
        <li><strong>Multiple lengths:</strong> Different eigenvalues give different ξ_k for different observables</li>
        <li><strong>Entanglement connection:</strong> Finite ξ implies area law, enabling efficient MPS</li>
        <li><strong>Phase transitions:</strong> ξ diverges as ξ ~ |g - g_c|^{-ν}</li>
      </ul>
    </div>

    <p>
      The correlation length provides a crucial bridge between the mathematical structure of MPS (transfer matrix eigenvalues) and physical properties (decay of correlations, entanglement structure). In the next section, we'll formalize the connection to entanglement through the area law theorem for MPS.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_2_4'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
