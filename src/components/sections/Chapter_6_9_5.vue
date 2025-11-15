<template>
  <div class="section-content">
    <h1>6.9.5 Statistics of Ends of Strings</h1>

    <p>The statistical properties of string endpoints—the anyonic excitations in topological phases—are determined by how their wavefunctions transform under exchange. In 2D systems, the braiding of particle worldlines in spacetime leads to anyonic statistics that are neither bosonic nor fermionic. This section explores the mathematical structure and physical consequences of anyonic exchange statistics.</p>

    <h2>Braiding in 2+1 Dimensions</h2>

    <div class="highlight-box">
      <h3>Worldline Topology</h3>

      <p><strong>Spacetime picture:</strong></p>
      <ul>
        <li>2D space + 1D time = (2+1)D spacetime</li>
        <li>Particle trajectories form worldlines</li>
        <li>Exchange = braiding of worldlines</li>
      </ul>

      <p><strong>Fundamental group:</strong></p>
      <div class="equation">
        π_1(Configuration space) = Braid group B_n
      </div>
      <ul>
        <li>Not permutation group S_n (as in 3D)</li>
        <li>Non-abelian group structure</li>
        <li>Generators: σ_i (exchange i ↔ i+1)</li>
      </ul>

      <p><strong>Topological invariance:</strong></p>
      <ul>
        <li>Statistics depends only on braid topology</li>
        <li>Independent of exchange path details</li>
        <li>Protected against local perturbations</li>
      </ul>
    </div>

    <h2>Abelian Anyonic Statistics</h2>

    <div class="info-box">
      <h3>Phase from Exchange</h3>

      <p><strong>Statistical angle:</strong></p>
      <div class="equation">
        Exchange two identical anyons → ψ → e^{iθ} ψ
      </div>

      <p><strong>Classification:</strong></p>
      <ul>
        <li><strong>Bosons:</strong> θ = 0 (or 2πn)</li>
        <li><strong>Fermions:</strong> θ = π (or π + 2πn)</li>
        <li><strong>Anyons:</strong> θ arbitrary (in 2D)</li>
      </ul>

      <p><strong>Examples in FQHE:</strong></p>
      <ul>
        <li><strong>Laughlin ν = 1/m:</strong> θ = π/m</li>
        <li><strong>ν = 1/3:</strong> θ = π/3 (abelian anyons)</li>
        <li><strong>Composite fermions:</strong> θ = π (effective fermions)</li>
      </ul>

      <p><strong>Berry phase interpretation:</strong></p>
      <div class="equation">
        θ = ∫ A·dr (Berry connection around exchange loop)
      </div>
    </div>

    <h2>Non-Abelian Statistics</h2>

    <div class="highlight-box">
      <h3>Matrix-Valued Braiding</h3>

      <p><strong>Degenerate fusion channels:</strong></p>
      <ul>
        <li>When a × b = c₁ + c₂ + ... (multiple outcomes)</li>
        <li>Exchange acts on fusion space (not just phase)</li>
        <li>Represented by unitary matrices</li>
      </ul>

      <p><strong>Braiding operator:</strong></p>
      <div class="equation">
        Exchange(a, b): V_{a×b} → V_{a×b}
      </div>
      <ul>
        <li>V_{a×b}: Fusion Hilbert space</li>
        <li>Unitary transformation (not just scalar)</li>
        <li>Non-commuting for different pairs</li>
      </ul>

      <p><strong>Example: Ising anyons (ν = 5/2 FQHE):</strong></p>
      <div class="equation">
        σ × σ = 1 + ψ (two fusion channels)
      </div>
      <ul>
        <li>σ: Non-abelian anyon</li>
        <li>ψ: Fermion (Majorana mode)</li>
        <li>Braiding σ particles rotates fusion basis</li>
        <li>Basis: {|σσ⟩_1, |σσ⟩_ψ}</li>
      </ul>

      <p><strong>Braiding matrix:</strong></p>
      <div class="equation">
        R_σσ = e^{iπ/8} · [matrix representation]
      </div>
      <ul>
        <li>Non-diagonal (mixes fusion channels)</li>
        <li>Universal quantum gates for computation</li>
      </ul>
    </div>

    <h2>R-Matrices and F-Symbols</h2>

    <div class="info-box">
      <h3>Consistency Conditions</h3>

      <p><strong>R-matrix (braiding):</strong></p>
      <div class="equation">
        R^c_{ab}: (a × b → c) ⟷ (b × a → c)
      </div>
      <ul>
        <li>Phase for abelian anyons</li>
        <li>Matrix for non-abelian anyons</li>
        <li>Unitarity: R^† R = 1</li>
      </ul>

      <p><strong>F-symbol (fusion basis change):</strong></p>
      <div class="equation">
        [F^{abc}_d]_{ef}: ((a×b)×c → d) ⟷ (a×(b×c) → d)
      </div>
      <ul>
        <li>6j-symbol analog</li>
        <li>Relates different fusion orderings</li>
      </ul>

      <p><strong>Pentagon equation:</strong></p>
      <div class="equation">
        F^{bcd}_f F^{aef}_g = ∑_h F^{abc}_h F^{ahd}_g F^{bde}_h
      </div>
      <ul>
        <li>Consistency of fusion basis changes</li>
        <li>Strong constraint on anyon models</li>
      </ul>

      <p><strong>Hexagon equation:</strong></p>
      <div class="equation">
        F R F = R F R (simplified form)
      </div>
      <ul>
        <li>Consistency between braiding and fusion</li>
        <li>Ensures well-defined statistics</li>
      </ul>
    </div>

    <h2>Spin-Statistics Connection in 2D</h2>

    <div class="note-box">
      <h3>Exchange vs Spin</h3>

      <p><strong>Topological spin:</strong></p>
      <div class="equation">
        θ_a = 2π s_a (mod 2π)
      </div>
      <ul>
        <li>s_a: Topological spin of anyon type a</li>
        <li>θ_a: Self-exchange phase</li>
        <li>Not related to physical angular momentum</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Toric code e:</strong> θ_e = 0, s_e = 0 (boson)</li>
        <li><strong>Toric code m:</strong> θ_m = 0, s_m = 0 (boson)</li>
        <li><strong>Toric code ε:</strong> θ_ε = π, s_ε = 1/2 (fermion)</li>
        <li><strong>Laughlin ν=1/3:</strong> θ = π/3, s = 1/6</li>
      </ul>

      <p><strong>Quantum dimension:</strong></p>
      <div class="equation">
        d_a = |⟨a × ā → 1⟩|² (effective degrees of freedom)
      </div>
      <ul>
        <li>d_a = 1: Abelian anyon</li>
        <li>d_a > 1: Non-abelian anyon</li>
        <li>Example: Fibonacci anyon d_τ = (1+√5)/2</li>
      </ul>
    </div>

    <h2>Mutual Statistics</h2>

    <div class="highlight-box">
      <h3>Braiding Different Anyon Types</h3>

      <p><strong>Mutual statistical phase:</strong></p>
      <div class="equation">
        Braid a around b → M_{ab} = e^{iθ_{ab}}
      </div>

      <p><strong>Toric code example:</strong></p>
      <ul>
        <li>Braid e around m: θ_{em} = π (semions)</li>
        <li>Braid e around e: θ_{ee} = 0 (bosons)</li>
        <li>Braid m around m: θ_{mm} = 0 (bosons)</li>
      </ul>

      <p><strong>S-matrix:</strong></p>
      <div class="equation">
        S_{ab} = (1/𝒟) Tr[R^a_{bb} R^b_{aa}]
      </div>
      <ul>
        <li>𝒟: Total quantum dimension</li>
        <li>Symmetric: S_{ab} = S_{ba}</li>
        <li>Unitary: SS^† = 1</li>
        <li>Contains all mutual statistics information</li>
      </ul>

      <p><strong>Aharonov-Bohm interpretation:</strong></p>
      <ul>
        <li>Anyon a carries "flux" Φ_a</li>
        <li>Anyon b carries "charge" Q_b</li>
        <li>Phase: θ_{ab} = 2π Q_b Φ_a</li>
        <li>Emergent electromagnetic duality</li>
      </ul>
    </div>

    <h2>Experimental Signatures</h2>

    <div class="info-box">
      <h3>Detecting Anyonic Statistics</h3>

      <p><strong>Interferometry:</strong></p>
      <ul>
        <li>Create anyon pair, split into two paths</li>
        <li>Exchange (braid) on one path</li>
        <li>Recombine and measure interference</li>
        <li>Phase shift reveals statistical angle θ</li>
      </ul>

      <p><strong>Shot noise in quantum Hall:</strong></p>
      <ul>
        <li>Fractional charge: e* = e/m</li>
        <li>Noise: S ∝ e* (determines charge)</li>
        <li>Confirms quasiparticle fractional charge</li>
      </ul>

      <p><strong>Tunneling experiments:</strong></p>
      <ul>
        <li>Resonant tunneling through localized states</li>
        <li>Temperature dependence reveals statistics</li>
        <li>Distinction between abelian and non-abelian</li>
      </ul>

      <p><strong>Fabry-Pérot interferometry (ν = 5/2):</strong></p>
      <ul>
        <li>Evidence for non-abelian statistics</li>
        <li>Even-odd effect in interference</li>
        <li>Consistent with Ising anyons</li>
      </ul>
    </div>

    <h2>Implications for Quantum Computation</h2>

    <div class="highlight-box">
      <h3>Topological Quantum Gates</h3>

      <p><strong>Encoded qubits:</strong></p>
      <ul>
        <li>Computational states = fusion outcomes</li>
        <li>Example: |σσ⟩_1 = |0⟩, |σσ⟩_ψ = |1⟩</li>
        <li>Protected by topological gap</li>
      </ul>

      <p><strong>Braiding = quantum gates:</strong></p>
      <ul>
        <li>Exchange anyons → unitary gate</li>
        <li>Topologically protected (robust to noise)</li>
        <li>Non-abelian statistics essential for universality</li>
      </ul>

      <p><strong>Gate set from braiding:</strong></p>
      <ul>
        <li>Ising anyons: Clifford gates (not universal)</li>
        <li>Fibonacci anyons: Universal gate set</li>
        <li>SU(2)_k anyons: Level k determines power</li>
      </ul>

      <p><strong>Advantages:</strong></p>
      <ul>
        <li><strong>Fault tolerance:</strong> Inherent error protection</li>
        <li><strong>Scalability:</strong> Local operations preserve topology</li>
        <li><strong>Coherence:</strong> No local noise coupling</li>
      </ul>

      <p><strong>Challenges:</strong></p>
      <ul>
        <li>Universal gates may require supplementation</li>
        <li>Initialization and readout protocols</li>
        <li>Material realization at practical temperatures</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li><strong>2D topology:</strong> Braid group structure allows anyonic statistics</li>
        <li><strong>Abelian anyons:</strong> Exchange gives phase θ (Laughlin states)</li>
        <li><strong>Non-abelian anyons:</strong> Exchange rotates degenerate fusion space</li>
        <li><strong>Consistency:</strong> Pentagon and hexagon equations constrain theories</li>
        <li><strong>Topological spin:</strong> θ_a = 2π s_a characterizes self-statistics</li>
        <li><strong>Mutual statistics:</strong> S-matrix encodes all braiding information</li>
        <li><strong>Experimental detection:</strong> Interferometry, shot noise, tunneling</li>
        <li><strong>Quantum computation:</strong> Braiding implements topologically protected gates</li>
      </ul>

      <p><strong>This completes our exploration of topological excitations in Chapter 6!</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_6_9_5'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
