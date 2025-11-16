<template>
  <div class="section-content">
    <h1>8.2.6 Gauge Degree of Freedom</h1>

    <p>
      A remarkable feature of MPS is that the same physical quantum state |ψ⟩ can be represented by infinitely many different sets of tensors A^i. This redundancy, called gauge freedom, is not a bug but a feature: it can be exploited to simplify calculations, improve numerical stability, and reveal the structure of quantum states.
    </p>

    <h2>Definition of Gauge Freedom</h2>

    <div class="info-box">
      <h3>Gauge Transformations</h3>
      <p>
        Consider an MPS representation:
      </p>
      <div class="equation">
        |ψ⟩ = ∑_{i₁...i_N} Tr[A^{i₁}_1 A^{i₂}_2 ··· A^{i_N}_N] |i₁...i_N⟩
      </div>
      <p>
        Insert an invertible χ × χ matrix X and its inverse X^{-1} between sites j and j+1:
      </p>
      <div class="equation">
        Tr[A^{i₁}_1 ··· A^{i_j}_j · X · X^{-1} · A^{i_{j+1}}_{j+1} ··· A^{i_N}_N]
      </div>
      <p>
        Since X · X^{-1} = I, the trace is unchanged. Define new tensors:
      </p>
      <div class="equation">
        Ã^i_k = {
          A^i_k              if k < j
          A^i_j X            if k = j
          X^{-1} A^i_{j+1}   if k = j+1
          A^i_k              if k > j+1
        }
      </div>
      <p>
        Then |ψ⟩ is unchanged: the tensors Ã^i_k represent the same state as A^i_k. The matrix X is called a <strong>gauge transformation</strong>.
      </p>
    </div>

    <h3>Gauge Invariance of Physical Observables</h3>

    <div class="highlight-box">
      <h4>All Physical Quantities Are Gauge-Invariant</h4>
      <p>
        Any physically measurable quantity (norm, expectation values, correlation functions) is unchanged by gauge transformations. For example:
      </p>
      <ul>
        <li><strong>Norm:</strong> ⟨ψ|ψ⟩ remains the same</li>
        <li><strong>Local observables:</strong> ⟨O_k⟩ unchanged for any site k</li>
        <li><strong>Correlations:</strong> ⟨O_j O_k⟩ unchanged</li>
        <li><strong>Entanglement entropy:</strong> S(ρ_A) unchanged</li>
      </ul>
      <p>
        This is because gauge transformations only change the "labels" (basis) of the virtual bond indices, not the physical state.
      </p>
    </div>

    <h2>Standard Gauges</h2>

    <p>
      While gauge freedom provides infinitely many representations, certain "canonical" choices are particularly useful.
    </p>

    <h3>Left-Canonical Form</h3>

    <div class="info-box">
      <h3>Left-Orthonormal Tensors</h3>
      <p>
        A tensor A^i at site j is in <strong>left-canonical form</strong> (denoted A^i_L) if it satisfies:
      </p>
      <div class="equation">
        ∑_i (A^i_L)^† A^i_L = I
      </div>
      <p>
        Viewing A^i_L as a dχ × χ matrix (grouping physical and left-virtual indices as rows, right-virtual index as column), this means the columns are orthonormal.
      </p>
      <p>
        <strong>Graphical notation:</strong> Left-canonical tensors are often drawn as triangles pointing right:
      </p>
      <div class="equation">
        [A_L]  or  ▷
      </div>
    </div>

    <h3>Right-Canonical Form</h3>

    <div class="info-box">
      <h3>Right-Orthonormal Tensors</h3>
      <p>
        A tensor A^i at site j is in <strong>right-canonical form</strong> (denoted A^i_R) if:
      </p>
      <div class="equation">
        ∑_i A^i_R (A^i_R)^† = I
      </div>
      <p>
        Viewing A^i_R as a χ × χd matrix (left-virtual index as row, physical and right-virtual indices as columns), this means the rows are orthonormal.
      </p>
      <p>
        <strong>Graphical notation:</strong> Right-canonical tensors are drawn as triangles pointing left:
      </p>
      <div class="equation">
        [A_R]  or  ◁
      </div>
    </div>

    <h3>Mixed-Canonical Form</h3>

    <div class="highlight-box">
      <h4>Most Useful Form for DMRG</h4>
      <p>
        A particularly useful gauge choice is the <strong>mixed-canonical form</strong> centered at site k:
      </p>
      <div class="equation">
        |ψ⟩ = ∑ Tr[A^{i₁}_L ··· A^{i_{k-1}}_L · Λ^{i_k} · A^{i_{k+1}}_R ··· A^{i_N}_R] |i₁...i_N⟩
      </div>
      <p>
        where:
      </p>
      <ul>
        <li>Sites 1 to k-1: left-canonical (A_L)</li>
        <li>Site k: center tensor Λ^i (often diagonal or special form)</li>
        <li>Sites k+1 to N: right-canonical (A_R)</li>
      </ul>
      <p>
        <strong>Key property:</strong> The norm squared is:
      </p>
      <div class="equation">
        ⟨ψ|ψ⟩ = ∑_i Tr[(Λ^i)^† Λ^i]
      </div>
      <p>
        The orthonormality of A_L and A_R tensors causes all other terms to cancel!
      </p>
    </div>

    <h2>Converting Between Gauges</h2>

    <p>
      Any MPS can be brought into any desired gauge using QR or SVD decompositions.
    </p>

    <h3>QR Decomposition Method</h3>

    <div class="highlight-box">
      <h4>Creating Left-Canonical Form</h4>
      <p>
        To convert site j to left-canonical form:
      </p>
      <ol>
        <li>Reshape A^i_j into a dχ × χ matrix M (group physical and left indices as rows)</li>
        <li>Perform QR decomposition: M = QR where Q^†Q = I</li>
        <li>Set A^i_L = Q (reshaped back to tensor)</li>
        <li>Absorb R into the next site: A^i_{j+1} → R · A^i_{j+1}</li>
      </ol>
      <p>
        <strong>Cost:</strong> O(dχ³) per site, O(Ndχ³) for full chain.
      </p>
      <p>
        Sweeping from left to right converts the entire MPS to left-canonical form.
      </p>
    </div>

    <h3>SVD Method for Mixed-Canonical Form</h3>

    <div class="highlight-box">
      <h4>Canonical Form with Center</h4>
      <p>
        To create mixed-canonical form centered at site k:
      </p>
      <ol>
        <li>Sweep left-to-right from site 1 to k-1, creating left-canonical tensors</li>
        <li>Sweep right-to-left from site N to k+1, creating right-canonical tensors</li>
        <li>At site k, perform SVD:
          <div class="equation">
            M_k = U S V^†
          </div>
        </li>
        <li>The center tensor is Λ = S (diagonal matrix of singular values)</li>
      </ol>
      <p>
        This form is optimal for variational optimization (DMRG) because:
      </p>
      <ul>
        <li>Updating the center site is a linear eigenvalue problem</li>
        <li>Numerical stability is maximized</li>
        <li>Entanglement spectrum is directly accessible (singular values)</li>
      </ul>
    </div>

    <h2>Uses of Gauge Freedom</h2>

    <h3>1. Efficient Computation of Observables</h3>

    <div class="info-box">
      <h3>Simplified Contractions</h3>
      <p>
        In mixed-canonical form centered at site k, computing ⟨O_k⟩ is trivial:
      </p>
      <div class="equation">
        ⟨O_k⟩ = ∑_{i,i'} O_{i,i'} Tr[(Λ^i)^† Λ^{i'}] / ⟨ψ|ψ⟩
      </div>
      <p>
        No need to contract through the entire chain! The left and right environments are automatically identity due to orthonormality.
      </p>
    </div>

    <h3>2. Numerical Stability</h3>

    <div class="highlight-box">
      <h4>Avoiding Numerical Blow-Up</h4>
      <p>
        In long chains, repeated matrix multiplication can lead to:
      </p>
      <ul>
        <li><strong>Overflow:</strong> If ||A^i|| > 1, products grow exponentially</li>
        <li><strong>Underflow:</strong> If ||A^i|| < 1, products decay exponentially</li>
        <li><strong>Loss of orthogonality:</strong> Rounding errors accumulate</li>
      </ul>
      <p>
        <strong>Solution:</strong> Maintain canonical forms
      </p>
      <ul>
        <li>Left/right-canonical tensors have ||A^i|| = 1 (isometric)</li>
        <li>Prevents exponential growth/decay</li>
        <li>Preserves orthogonality by construction</li>
      </ul>
    </div>

    <h3>3. Extracting Entanglement Spectrum</h3>

    <div class="info-box">
      <h3>Schmidt Decomposition from Gauge</h3>
      <p>
        In mixed-canonical form with center at the bond between sites k and k+1:
      </p>
      <div class="equation">
        |ψ⟩ = ∑_α λ_α |L_α⟩ ⊗ |R_α⟩
      </div>
      <p>
        The singular values {λ_α} in the center tensor Λ are exactly the Schmidt coefficients! This gives:
      </p>
      <ul>
        <li><strong>Entanglement entropy:</strong> S = -∑_α λ_α² log λ_α²</li>
        <li><strong>Entanglement spectrum:</strong> {-log λ_α²}</li>
        <li><strong>Schmidt rank:</strong> Number of nonzero λ_α</li>
      </ul>
      <p>
        No extra computation needed—it's directly encoded in the gauge.
      </p>
    </div>

    <h3>4. Variational Optimization (DMRG)</h3>

    <div class="highlight-box">
      <h4>Why DMRG Uses Mixed-Canonical Form</h4>
      <p>
        The DMRG algorithm optimizes one site at a time. In mixed-canonical form:
      </p>
      <div class="equation">
        min_Λ ⟨ψ(Λ)|H|ψ(Λ)⟩ / ⟨ψ(Λ)|ψ(Λ)⟩
      </div>
      <p>
        becomes a standard eigenvalue problem:
      </p>
      <div class="equation">
        H_eff Λ = E Λ
      </div>
      <p>
        where H_eff is an effective Hamiltonian. The gauge choice:
      </p>
      <ul>
        <li>Eliminates the denominator (⟨ψ|ψ⟩ = constant in this gauge)</li>
        <li>Makes the optimization convex (locally)</li>
        <li>Enables efficient updates via Lanczos or Davidson methods</li>
      </ul>
    </div>

    <h2>Gauge Transformations and Symmetries</h2>

    <div class="info-box">
      <h3>Connection to Physical Symmetries</h3>
      <p>
        Gauge transformations are related to, but distinct from, physical symmetries:
      </p>
      <ul>
        <li><strong>Gauge transformation:</strong> Redundancy in mathematical representation (virtual indices)</li>
        <li><strong>Physical symmetry:</strong> Transformation of physical degrees of freedom (physical indices)</li>
      </ul>
      <p>
        However, for symmetric MPS (e.g., SU(2) symmetric spin chains), gauge transformations can be chosen to respect the symmetry, leading to block-diagonal structure and further efficiency.
      </p>
    </div>

    <h2>Example: GHZ State in Different Gauges</h2>

    <div class="highlight-box">
      <h4>Multiple Representations of |GHZ⟩</h4>
      <p>
        The GHZ state |GHZ⟩ = (|00...0⟩ + |11...1⟩)/√2 can be written in multiple gauges:
      </p>
      <p>
        <strong>Gauge 1 (original):</strong>
      </p>
      <div class="equation">
        A^0 = [1  0]     A^1 = [0  0]
              [0  0]           [0  1]
      </div>
      <p>
        <strong>Gauge 2 (left-canonical):</strong> After QR decomposition:
      </p>
      <div class="equation">
        A^0_L = [1  0]     A^1_L = [0  0]
                [0  0]             [0  1]
      </div>
      <p>
        (Same in this case, already orthonormal!)
      </p>
      <p>
        <strong>Gauge 3 (rotated):</strong> Apply X = rotation matrix:
      </p>
      <div class="equation">
        X = [cos θ  -sin θ]
            [sin θ   cos θ]
      </div>
      <p>
        Gives new tensors Ã^i = X^{-1} A^i X (different matrices, same state).
      </p>
    </div>

    <h2>Computational Complexity of Gauge Fixing</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Method</th>
            <th>Complexity per Site</th>
            <th>Total Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Left-canonical sweep</td>
            <td>QR decomposition</td>
            <td>O(dχ³)</td>
            <td>O(Ndχ³)</td>
          </tr>
          <tr>
            <td>Right-canonical sweep</td>
            <td>QR decomposition</td>
            <td>O(dχ³)</td>
            <td>O(Ndχ³)</td>
          </tr>
          <tr>
            <td>Mixed-canonical (full)</td>
            <td>QR + SVD</td>
            <td>O(dχ³)</td>
            <td>O(Ndχ³)</td>
          </tr>
          <tr>
            <td>Local gauge change</td>
            <td>Matrix multiplication</td>
            <td>O(dχ³)</td>
            <td>O(dχ³)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Gauge fixing has the same complexity as other MPS operations, making it essentially "free" in practical calculations.
    </p>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Points</h3>
      <ul>
        <li><strong>Gauge freedom:</strong> Same state |ψ⟩ has infinitely many MPS representations A^i</li>
        <li><strong>Gauge transformation:</strong> A^i → X^{-1} A^i X leaves physical state unchanged</li>
        <li><strong>Physical observables:</strong> All measurable quantities are gauge-invariant</li>
        <li><strong>Left-canonical:</strong> ∑_i (A^i_L)^† A^i_L = I (orthonormal columns)</li>
        <li><strong>Right-canonical:</strong> ∑_i A^i_R (A^i_R)^† = I (orthonormal rows)</li>
        <li><strong>Mixed-canonical:</strong> Left + center + right, optimal for DMRG</li>
        <li><strong>Uses:</strong> Numerical stability, simplified calculations, entanglement extraction, optimization</li>
        <li><strong>Conversion:</strong> QR and SVD decompositions in O(Ndχ³) time</li>
        <li><strong>Entanglement spectrum:</strong> Directly readable from singular values in canonical gauge</li>
      </ul>
    </div>

    <p>
      Gauge freedom is not merely a mathematical curiosity—it's a powerful tool that makes MPS algorithms both efficient and numerically robust. Mastery of gauge transformations is essential for advanced MPS techniques, including DMRG, time evolution (TEBD/TDVP), and finite-temperature algorithms. In the next section, we'll explore yet another perspective on MPS: the projected entangled pair picture.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_8_2_6'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
