<template>
  <div class="section-content">
    <h1>8.2.3 Calculation of Norm and Physical Observables</h1>

    <p>
      One of the main advantages of the MPS representation is that many important quantities can be computed efficiently, even though the full quantum state has exponentially many amplitudes. In this section, we develop algorithms for computing norms, expectation values, and correlation functions.
    </p>

    <h2>Computing the Norm</h2>

    <p>
      The norm squared ⟨ψ|ψ⟩ of an MPS is the first quantity we need to compute, both for normalization and as a building block for other observables.
    </p>

    <h3>Periodic Boundary Conditions</h3>

    <div class="info-box">
      <h3>Norm via Transfer Matrix</h3>
      <p>
        For a translationally invariant MPS with periodic boundary conditions:
      </p>
      <div class="equation">
        |ψ⟩ = ∑_{i₁...i_N} Tr[A^{i₁}···A^{i_N}] |i₁...i_N⟩
      </div>
      <p>
        The norm squared is:
      </p>
      <div class="equation">
        ⟨ψ|ψ⟩ = Tr[E^N]
      </div>
      <p>
        where E = ∑ᵢ A^i ⊗ (A^i)* is the transfer matrix. If λ₁, λ₂, ... are the eigenvalues of E, then:
      </p>
      <div class="equation">
        ⟨ψ|ψ⟩ = λ₁^N + λ₂^N + λ₃^N + ···
      </div>
      <p>
        For large N, this is dominated by the largest eigenvalue: ⟨ψ|ψ⟩ ≈ λ₁^N.
      </p>
    </div>

    <h3>Open Boundary Conditions</h3>

    <div class="highlight-box">
      <h4>Sequential Contraction Algorithm</h4>
      <p>
        For open boundary conditions with site-dependent matrices A^i_j:
      </p>
      <div class="equation">
        |ψ⟩ = ∑_{i₁...i_N} [A^{i₁}_1 A^{i₂}_2 ··· A^{i_N}_N]_{αβ} v_L^α v_R^β |i₁...i_N⟩
      </div>
      <p>
        <strong>Algorithm:</strong> Contract from left to right
      </p>
      <ol>
        <li>Start with L₀ = v_L v_L^†  (χ × χ matrix)</li>
        <li>For j = 1 to N:
          <div class="equation">
            L_j = ∑_i A^i_j L_{j-1} (A^i_j)^†
          </div>
        </li>
        <li>Result: ⟨ψ|ψ⟩ = Tr[L_N v_R v_R^†]</li>
      </ol>
      <p>
        <strong>Complexity:</strong> O(Nχ³d) where N is system size, χ is bond dimension, d is physical dimension.
      </p>
    </div>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Boundary Conditions</th>
            <th>Complexity</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Transfer matrix Tr[E^N]</td>
            <td>Periodic</td>
            <td>O(χ⁶d) + O(N)</td>
            <td>Large N, translationally invariant</td>
          </tr>
          <tr>
            <td>Sequential contraction</td>
            <td>Open</td>
            <td>O(Nχ³d)</td>
            <td>Finite systems, inhomogeneous</td>
          </tr>
          <tr>
            <td>Direct calculation</td>
            <td>Any</td>
            <td>O(d^N)</td>
            <td>Only for very small N ≤ 20</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Single-Site Observables</h2>

    <p>
      Computing expectation values of local observables is essential for extracting physical information from MPS.
    </p>

    <div class="info-box">
      <h3>Expectation Value of Local Operator</h3>
      <p>
        For an operator O_j acting on site j:
      </p>
      <div class="equation">
        ⟨O_j⟩ = ⟨ψ|O_j|ψ⟩ / ⟨ψ|ψ⟩
      </div>
      <p>
        The numerator can be computed by modifying the sequential contraction:
      </p>
      <ol>
        <li>Contract from left: L_{j-1} as before</li>
        <li>At site j, insert the operator:
          <div class="equation">
            M_j = ∑_{i,i'} O_{i,i'} A^{i'}_j L_{j-1} (A^i_j)^†
          </div>
        </li>
        <li>Contract from right: continue to site N</li>
      </ol>
      <p>
        <strong>Result:</strong> Same O(Nχ³d) complexity as norm calculation.
      </p>
    </div>

    <h3>Example: Magnetization</h3>

    <div class="highlight-box">
      <h4>Computing ⟨σ^z_j⟩</h4>
      <p>
        For a spin-1/2 chain, the z-magnetization at site j is:
      </p>
      <div class="equation">
        m_j = ⟨σ^z_j⟩ = ⟨ψ| σ^z_j |ψ⟩ / ⟨ψ|ψ⟩
      </div>
      <p>
        With σ^z = diag(1, -1), the operator matrix is:
      </p>
      <div class="equation">
        σ^z = [1   0]
              [0  -1]
      </div>
      <p>
        The numerator becomes:
      </p>
      <div class="equation">
        ⟨ψ|σ^z_j|ψ⟩ = ∑_i (σ^z)_{ii} Tr[L_{j-1} · A^i_j (A^i_j)^† · R_j]
                     = Tr[L_{j-1}(A^0_j(A^0_j)^† - A^1_j(A^1_j)^†)R_j]
      </div>
      <p>
        where R_j is contracted from the right.
      </p>
    </div>

    <h2>Two-Site Correlation Functions</h2>

    <p>
      Correlation functions reveal the spatial structure of quantum correlations and are essential for characterizing phases of matter.
    </p>

    <div class="info-box">
      <h3>Two-Point Correlator</h3>
      <p>
        For operators O_j and O_k at sites j < k:
      </p>
      <div class="equation">
        C(j,k) = ⟨O_j O_k⟩ - ⟨O_j⟩⟨O_k⟩
      </div>
      <p>
        <strong>Algorithm:</strong>
      </p>
      <ol>
        <li>Contract from left to site j, inserting O_j</li>
        <li>Contract from site j+1 to k-1 normally (this gives E^{k-j-1})</li>
        <li>At site k, insert O_k</li>
        <li>Contract to the right boundary</li>
      </ol>
      <p>
        <strong>Complexity:</strong> O(Nχ³d) — same as single-site observables.
      </p>
    </div>

    <h3>Exponential Decay</h3>

    <div class="highlight-box">
      <h4>Clustering of Correlations</h4>
      <p>
        For translationally invariant MPS with a unique dominant eigenvalue λ₁ and spectral gap Δ = λ₁ - |λ₂|:
      </p>
      <div class="equation">
        C(j, j+r) ~ e^{-r/ξ}  as r → ∞
      </div>
      <p>
        where ξ = -1/log|λ₂/λ₁| is the correlation length. This exponential decay is a direct consequence of:
      </p>
      <ul>
        <li>The transfer matrix E raised to power r appears in the calculation</li>
        <li>E^r ≈ |ψ₁⟩⟨ψ₁|λ₁^r + |ψ₂⟩⟨ψ₂|λ₂^r + ··· for large r</li>
        <li>The subleading eigenvalue λ₂ controls the decay rate</li>
      </ul>
    </div>

    <h3>Example: Spin-Spin Correlation</h3>

    <div class="highlight-box">
      <h4>⟨σ^z_j σ^z_{j+r}⟩ in AKLT State</h4>
      <p>
        For the AKLT state with transfer matrix eigenvalues λ₁ = 1 and |λ₂| = 1/2:
      </p>
      <div class="equation">
        C_zz(r) = ⟨σ^z_0 σ^z_r⟩ - ⟨σ^z_0⟩² ~ (-1)^r · (1/2)^r
      </div>
      <p>
        Features:
      </p>
      <ul>
        <li><strong>Alternating sign:</strong> (-1)^r indicates antiferromagnetic correlations</li>
        <li><strong>Exponential decay:</strong> (1/2)^r with ξ = 1/log 2 ≈ 1.44</li>
        <li><strong>Very short-ranged:</strong> Essentially zero beyond a few lattice spacings</li>
      </ul>
    </div>

    <h2>General Multi-Site Observables</h2>

    <p>
      The same contraction technique generalizes to arbitrary multi-site operators.
    </p>

    <div class="info-box">
      <h3>String Operators</h3>
      <p>
        For a string operator of the form:
      </p>
      <div class="equation">
        O_{string} = O_j · S_{j+1} · S_{j+2} ··· S_{k-1} · O_k
      </div>
      <p>
        where S is a "string operator" (e.g., σ^z in the Ising model), we compute ⟨O_{string}⟩ by:
      </p>
      <ol>
        <li>Contract left to site j, insert O_j</li>
        <li>For sites j+1 to k-1, insert S at each site</li>
        <li>At site k, insert O_k</li>
        <li>Complete contraction to right boundary</li>
      </ol>
      <p>
        <strong>Example:</strong> String order parameter in Haldane phase:
      </p>
      <div class="equation">
        O_{string} = lim_{|j-k|→∞} ⟨σ^z_j (∏_{l=j+1}^{k-1} e^{iπσ^z_l}) σ^z_k⟩
      </div>
    </div>

    <h2>Energy and Hamiltonian Expectation Values</h2>

    <p>
      Computing the energy ⟨H⟩ for a local Hamiltonian is a special case of multi-site observables.
    </p>

    <div class="info-box">
      <h3>Energy of Nearest-Neighbor Hamiltonian</h3>
      <p>
        For H = ∑ⱼ h_{j,j+1} (nearest-neighbor terms):
      </p>
      <div class="equation">
        ⟨H⟩ = ∑_{j=1}^{N-1} ⟨h_{j,j+1}⟩
      </div>
      <p>
        Each term ⟨h_{j,j+1}⟩ is a two-site expectation value, computed as described above.
      </p>
      <p>
        <strong>Optimization connection:</strong> DMRG and other variational MPS methods minimize ⟨H⟩ by:
      </p>
      <ul>
        <li>Computing ⟨H⟩ efficiently using these contractions</li>
        <li>Optimizing the MPS tensors A^i to minimize energy</li>
        <li>Sweeping back and forth through the chain</li>
      </ul>
    </div>

    <h3>Energy Variance</h3>

    <div class="highlight-box">
      <h4>Measuring Eigenstate Quality</h4>
      <p>
        To check if |ψ⟩ is an eigenstate of H, we compute the variance:
      </p>
      <div class="equation">
        Var(H) = ⟨H²⟩ - ⟨H⟩²
      </div>
      <p>
        If |ψ⟩ is an exact eigenstate, then Var(H) = 0. For an MPS approximation:
      </p>
      <ul>
        <li><strong>Small Var(H):</strong> Good approximation to eigenstate</li>
        <li><strong>Large Var(H):</strong> State is a superposition or poor approximation</li>
      </ul>
      <p>
        Computing ⟨H²⟩ requires contracting four-site terms (two factors of H), but remains O(Nχ³d²) complexity.
      </p>
    </div>

    <h2>Computational Complexity Summary</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Observable</th>
            <th>Sites Involved</th>
            <th>Complexity</th>
            <th>Scaling with χ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Norm ⟨ψ|ψ⟩</td>
            <td>All (global)</td>
            <td>O(Nχ³d)</td>
            <td>χ³</td>
          </tr>
          <tr>
            <td>Single-site ⟨O_j⟩</td>
            <td>1</td>
            <td>O(Nχ³d)</td>
            <td>χ³</td>
          </tr>
          <tr>
            <td>Two-site ⟨O_j O_k⟩</td>
            <td>2</td>
            <td>O(Nχ³d)</td>
            <td>χ³</td>
          </tr>
          <tr>
            <td>Nearest-neighbor ⟨h_{j,j+1}⟩</td>
            <td>2</td>
            <td>O(Nχ³d²)</td>
            <td>χ³</td>
          </tr>
          <tr>
            <td>Energy ⟨H⟩</td>
            <td>All (sum of local)</td>
            <td>O(Nχ³d²)</td>
            <td>χ³</td>
          </tr>
          <tr>
            <td>Energy variance ⟨H²⟩</td>
            <td>All (4-site terms)</td>
            <td>O(Nχ³d⁴)</td>
            <td>χ³</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="info-box">
      <h3>Polynomial vs Exponential Scaling</h3>
      <p>
        The key advantage of MPS is evident when comparing to exact diagonalization:
      </p>
      <ul>
        <li><strong>Exact diagonalization:</strong> Store d^N coefficients, O(d^N) to compute observables</li>
        <li><strong>MPS with bond dimension χ:</strong> Store Nχ²d parameters, O(Nχ³d) to compute observables</li>
        <li><strong>Crossover:</strong> MPS becomes advantageous when χ ≪ d^{N/3}</li>
      </ul>
      <p>
        For N = 100 spin-1/2 particles:
      </p>
      <ul>
        <li>Exact: 2^{100} ≈ 10^{30} coefficients (impossible)</li>
        <li>MPS with χ = 100: ~10^5 parameters (routine)</li>
      </ul>
    </div>

    <h2>Practical Considerations</h2>

    <h3>Numerical Stability</h3>

    <div class="highlight-box">
      <h4>Avoiding Numerical Issues</h4>
      <p>
        When implementing MPS algorithms, several numerical issues can arise:
      </p>
      <ul>
        <li><strong>Overflow/underflow:</strong> For large N, E^N can overflow or underflow
          <ul>
            <li>Solution: Work with logarithms or normalize at each step</li>
          </ul>
        </li>
        <li><strong>Loss of orthogonality:</strong> Repeated matrix multiplications accumulate errors
          <ul>
            <li>Solution: Use canonical forms (gauge fixing) periodically</li>
          </ul>
        </li>
        <li><strong>Eigenvalue degeneracy:</strong> Multiple eigenvalues near λ₁
          <ul>
            <li>Solution: Use higher-precision iterative eigensolvers</li>
          </ul>
        </li>
      </ul>
    </div>

    <h3>Parallelization</h3>

    <div class="info-box">
      <h3>Parallel Computation Opportunities</h3>
      <ul>
        <li><strong>Multiple observables:</strong> Different ⟨O_j⟩ can be computed independently in parallel</li>
        <li><strong>Matrix operations:</strong> Each contraction L_j = ∑_i A^i L_{j-1} (A^i)^† involves matrix multiplication that can use parallel BLAS</li>
        <li><strong>Different states:</strong> Computing observables for multiple MPS (e.g., time evolution) is embarrassingly parallel</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>Norm calculation:</strong> O(Nχ³d) via sequential contraction or Tr[E^N]</li>
        <li><strong>Local observables:</strong> Same complexity as norm by inserting operators</li>
        <li><strong>Correlation functions:</strong> Exponential decay C(r) ~ e^{-r/ξ} from transfer matrix spectrum</li>
        <li><strong>Energy:</strong> Sum of local terms, each computed efficiently</li>
        <li><strong>Polynomial scaling:</strong> MPS enables calculations impossible for exact methods</li>
        <li><strong>Numerical stability:</strong> Requires care with normalization and gauge fixing</li>
        <li><strong>Versatility:</strong> Same framework handles arbitrary local and string operators</li>
      </ul>
    </div>

    <p>
      These computational techniques form the foundation for all practical applications of MPS, from DMRG ground state calculations to time evolution and thermodynamic properties. In the next sections, we'll explore the deeper structure of MPS, including correlation length, entanglement area law, and gauge degrees of freedom.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_2_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
