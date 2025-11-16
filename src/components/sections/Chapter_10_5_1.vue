<template>
  <div class="section-content">
    <h1>10.5.1 Group Cohomology</h1>

    <p>
      Group cohomology provides the mathematical framework for complete classification of bosonic SPT phases.
    </p>

    <h2>Definition</h2>

    <div class="info-box">
      <h3>Cohomology Groups</h3>
      <p>
        The n-th cohomology group H^n(G,U(1)) is defined as:
      </p>
      <div class="equation">
        H^n(G,U(1)) = {n-cocycles}/{n-coboundaries}
      </div>
      <p>
        <strong>n-cocycle:</strong> Function ω(g₁,...,g_n) satisfying dω = 0
      </p>
      <p>
        <strong>n-coboundary:</strong> ω = dλ for some (n-1)-cochain λ
      </p>
    </div>

    <h2>Cocycle Conditions</h2>

    <div class="highlight-box">
      <h4>For n=2 (1D SPT):</h4>
      <div class="equation">
        ω(g₁,g₂)ω(g₁g₂,g₃) = ω(g₂,g₃)ω(g₁,g₂g₃)
      </div>
      <h4>For n=3 (2D SPT):</h4>
      <div class="equation">
        ω(g₂,g₃,g₄) ω(g₁,g₂g₃,g₄) ω(g₁,g₂,g₃)⁻¹ = ω(g₁g₂,g₃,g₄) ω(g₁,g₂,g₃g₄)⁻¹
      </div>
    </div>

    <h2>Detailed Mathematical Framework</h2>

    <div class="info-box">
      <h3>Chain Complex and Differential</h3>
      <p>
        Group cohomology is constructed from a chain complex:
      </p>
      <div class="equation">
        ... → C^{n-1}(G,U(1)) → C^n(G,U(1)) → C^{n+1}(G,U(1)) → ...
      </div>
      <p>
        where C^n(G,U(1)) is the space of n-cochains (functions ω: G^n → U(1)).
      </p>

      <h4>Coboundary Operator d</h4>
      <p>
        The differential d: C^n → C^{n+1} is defined by:
      </p>
      <div class="equation">
        (dω)(g₀,...,g_n) = ω(g₁,...,g_n) ∏_{i=1}^{n-1} ω(g₀,...,g_{i-1},g_ig_{i+1},g_{i+2},...,g_n)^{(-1)^i} · ω(g₀,...,g_{n-1})^{(-1)^{n+1}}
      </div>
      <p>
        <strong>Key property:</strong> d² = 0 (d is nilpotent)
      </p>

      <h4>Cocycles and Coboundaries</h4>
      <ul>
        <li><strong>n-cocycle:</strong> ω ∈ ker(d) satisfies dω = 0</li>
        <li><strong>n-coboundary:</strong> ω ∈ im(d) = dλ for some λ ∈ C^{n-1}</li>
        <li>Fact: d² = 0 implies im(d) ⊆ ker(d)</li>
      </ul>

      <h4>Definition of Cohomology</h4>
      <div class="equation">
        H^n(G,U(1)) = ker(d: C^n → C^{n+1}) / im(d: C^{n-1} → C^n)
      </div>
      <p>
        This quotient identifies cocycles that differ by a coboundary (gauge equivalent).
      </p>
    </div>

    <h2>Explicit Formulas for Low Dimensions</h2>

    <div class="highlight-box">
      <h4>n = 1 (0D SPT - trivial)</h4>
      <p>
        1-cocycle condition:
      </p>
      <div class="equation">
        ω(g₁g₂) = ω(g₁)ω(g₂)
      </div>
      <p>
        These are just group homomorphisms G → U(1) (1D representations).
      </p>
      <p>
        Result: H¹(G,U(1)) = Hom(G,U(1))/trivial
      </p>

      <h4>n = 2 (1D SPT)</h4>
      <p>
        2-cocycle condition:
      </p>
      <div class="equation">
        ω(g₁,g₂)ω(g₁g₂,g₃) = ω(g₂,g₃)ω(g₁,g₂g₃)
      </div>
      <p>
        2-coboundary:
      </p>
      <div class="equation">
        ω(g₁,g₂) = λ(g₁)λ(g₂)/λ(g₁g₂)
      </div>
      <p>
        where λ: G → U(1).
      </p>

      <h4>n = 3 (2D SPT)</h4>
      <p>
        3-cocycle condition (more complex):
      </p>
      <div class="equation">
        ω(g₂,g₃,g₄) ω(g₁,g₂g₃,g₄) ω(g₁,g₂,g₃) = ω(g₁g₂,g₃,g₄) ω(g₁,g₂,g₃g₄)
      </div>
      <p>
        This encodes consistency of symmetry action on 2D boundary.
      </p>
    </div>

    <h2>Computing H^n for Specific Groups</h2>

    <div class="info-box">
      <h3>ℤ₂ = {e, g} with g² = e</h3>

      <h4>H¹(ℤ₂, U(1))</h4>
      <p>
        1-cocycle: ω(e) and ω(g) with ω(g²) = ω(g)²
      </p>
      <ul>
        <li>Since g² = e, we need ω(g)² = ω(e) = 1</li>
        <li>So ω(g) = ±1</li>
        <li>These are trivial (1D reps)</li>
        <li>Result: H¹(ℤ₂, U(1)) = ℤ₂</li>
      </ul>

      <h4>H²(ℤ₂, U(1))</h4>
      <p>
        2-cocycle: ω(e,g), ω(g,e), ω(g,g) with cocycle condition:
      </p>
      <div class="equation">
        ω(g,g)ω(e,g) = ω(g,g)ω(g,e)
      </div>
      <p>
        By normalization ω(e,g) = ω(g,e) = 1, so only ω(g,g) matters.
      </p>
      <ul>
        <li>Cocycle condition: ω(g,g)² = 1</li>
        <li>So ω(g,g) = ±1</li>
        <li>Coboundary: ω(g,g) = λ(g)²/λ(e) = λ(g)² → always +1</li>
        <li>Non-trivial: ω(g,g) = -1</li>
        <li>Result: H²(ℤ₂, U(1)) = ℤ₂</li>
      </ul>

      <h4>General Pattern</h4>
      <div class="equation">
        H^n(ℤ₂, U(1)) = ℤ₂  for all n ≥ 1
      </div>
    </div>

    <h2>Cyclic Groups ℤ_N</h2>

    <div class="highlight-box">
      <h4>General Result</h4>
      <div class="equation">
        H^n(ℤ_N, U(1)) = ℤ_N  for n ≥ 1
      </div>

      <h4>Explicit Construction for H²(ℤ_N, U(1))</h4>
      <p>
        Let ℤ_N = {e, g, g², ..., g^{N-1}} with g^N = e.
      </p>
      <p>
        2-cocycle:
      </p>
      <div class="equation">
        ω_k(g^a, g^b) = exp(2πi k ab / N²)
      </div>
      <p>
        where k = 0, 1, ..., N-1 labels the N distinct cohomology classes.
      </p>

      <h4>Verification</h4>
      <p>
        Check cocycle condition:
      </p>
      <div class="equation">
        ω_k(g^a,g^b) ω_k(g^{a+b},g^c) = exp(2πik[ab/N² + (a+b)c/N²])
      </div>
      <div class="equation">
        ω_k(g^b,g^c) ω_k(g^a,g^{b+c}) = exp(2πik[bc/N² + a(b+c)/N²])
      </div>
      <p>
        Both sides equal → cocycle condition satisfied!
      </p>

      <h4>Physical Meaning</h4>
      <ul>
        <li>k = 0: Trivial SPT</li>
        <li>k = 1, ..., N-1: Non-trivial SPT phases</li>
        <li>Edge carries quantum number mod N</li>
        <li>Stacking k₁ + k₂ ≡ k₁ + k₂ (mod N)</li>
      </ul>
    </div>

    <h2>U(1) Symmetry</h2>

    <div class="info-box">
      <h3>Continuous Group Cohomology</h3>
      <p>
        For U(1), parametrize elements as e^{iθ}.
      </p>

      <h4>H¹(U(1), U(1))</h4>
      <div class="equation">
        H¹(U(1), U(1)) = ℤ
      </div>
      <p>
        These are winding numbers of maps U(1) → U(1).
      </p>

      <h4>H²(U(1), U(1))</h4>
      <div class="equation">
        H²(U(1), U(1)) = ℤ
      </div>
      <p>
        2-cocycle:
      </p>
      <div class="equation">
        ω_n(e^{iθ₁}, e^{iθ₂}) = exp(in θ₁ ∧ θ₂ / 2π)
      </div>
      <p>
        where n ∈ ℤ is the winding number and θ₁ ∧ θ₂ is the exterior product.
      </p>

      <h4>Physical Interpretation</h4>
      <ul>
        <li>n = quantized charge on edge</li>
        <li>1D analog of integer quantum Hall effect</li>
        <li>Edge theory: chiral boson with compactification radius R = √n</li>
      </ul>
    </div>

    <h2>Product Groups: Künneth Formula</h2>

    <div class="info-box">
      <h3>General Formula</h3>
      <p>
        For product group G = G₁ × G₂:
      </p>
      <div class="equation">
        H^n(G₁ × G₂, U(1)) = ⊕_{p+q=n} [H^p(G₁,U(1)) ⊗ H^q(G₂,U(1))]
      </div>

      <h4>Example: ℤ₂ × ℤ₂</h4>
      <p>
        Using H^k(ℤ₂, U(1)) = ℤ₂ for k ≥ 1:
      </p>
      <div class="equation">
        H²(ℤ₂ × ℤ₂, U(1)) = [H²(ℤ₂) ⊗ H⁰(ℤ₂)] ⊕ [H¹(ℤ₂) ⊗ H¹(ℤ₂)] ⊕ [H⁰(ℤ₂) ⊗ H²(ℤ₂)]
      </div>
      <p>
        Since H⁰ = trivial and H¹(ℤ₂) = 0 (no non-trivial 1D reps with U(1) values):
      </p>
      <div class="equation">
        H²(ℤ₂ × ℤ₂, U(1)) = ℤ₂ ⊕ ℤ₂ = ℤ₂
      </div>
      <p>
        <strong>Surprise!</strong> Only ℤ₂, not ℤ₂ ⊕ ℤ₂, due to anticommuting ℤ₂ generators.
      </p>

      <h4>ℤ_N × ℤ_M</h4>
      <div class="equation">
        H²(ℤ_N × ℤ_M, U(1)) = ℤ_{gcd(N,M)}
      </div>
      <p>
        Greatest common divisor determines classification!
      </p>
    </div>

    <h2>Geometric Interpretation</h2>

    <div class="highlight-box">
      <h4>Cocycles as Obstructions</h4>
      <p>
        Think of ω as measuring "twisting" when gluing cells in d+1 dimensions:
      </p>

      <h4>0D → 1D (Interval)</h4>
      <ul>
        <li>Two 0-cells (endpoints) with symmetry action</li>
        <li>1-cell (interval) connects them</li>
        <li>No obstruction → H¹ = trivial for finite groups</li>
      </ul>

      <h4>1D → 2D (Disk)</h4>
      <ul>
        <li>1-skeleton: circle with symmetry</li>
        <li>2-cell (disk) fills the circle</li>
        <li>Obstruction: Can we fill consistently?</li>
        <li>ω(g₁,g₂) measures phase mismatch when g₁, g₂ act on disk</li>
        <li>Non-trivial ω → can't fill → nontrivial SPT</li>
      </ul>

      <h4>2D → 3D (Ball)</h4>
      <ul>
        <li>2-skeleton: sphere with symmetry</li>
        <li>3-cell (ball) fills the sphere</li>
        <li>3-cocycle ω measures filling obstruction</li>
      </ul>
    </div>

    <h2>Physical Interpretation</h2>

    <div class="info-box">
      <h3>Cocycle ω Encodes:</h3>
      <ul>
        <li><strong>Boundary symmetry:</strong> How G acts projectively on (d-1)-dimensional edge</li>
        <li><strong>Projective representation phases:</strong> u(g₁)u(g₂) = ω(g₁,g₂) u(g₁g₂)</li>
        <li><strong>Obstruction to trivialization:</strong> Can't gauge away ω if non-trivial</li>
        <li><strong>Stacking rule:</strong> ω₁ · ω₂ = ω_{[ω₁]+[ω₂]} (group law)</li>
        <li><strong>Edge anomaly:</strong> Bulk SPT "fills in" anomalous edge</li>
      </ul>

      <h3>Cohomology Class [ω] Labels SPT Phase</h3>
      <ul>
        <li>Different cocycles ω, ω' in same class [ω] = [ω'] → same SPT</li>
        <li>Different classes [ω] ≠ [ω'] → distinct SPT phases</li>
        <li>Group structure: H^{d+1}(G,U(1)) with addition</li>
      </ul>
    </div>

    <h2>Modified Cohomology for Anti-Unitary Symmetries</h2>

    <div class="highlight-box">
      <h4>Time-Reversal and Charge Conjugation</h4>
      <p>
        For anti-unitary symmetries T (time-reversal) or C (charge conjugation), standard cohomology must be modified:
      </p>

      <h4>Group Extension</h4>
      <p>
        Define extended group:
      </p>
      <div class="equation">
        G_T = G ⋊ ℤ₂^T
      </div>
      <p>
        where ℤ₂^T = {e, T} and T² = ±1.
      </p>

      <h4>Modified Cocycle Condition</h4>
      <p>
        Must account for complex conjugation when T acts:
      </p>
      <div class="equation">
        ω(Tg₁, Tg₂) = ω(g₁,g₂)*
      </div>
      <p>
        Standard cocycle condition applies with this constraint.
      </p>

      <h4>Results</h4>
      <ul>
        <li><strong>T² = +1 (bosonic):</strong> H²(ℤ₂^T, U(1)) = ℤ₂</li>
        <li><strong>T² = -1 (fermionic):</strong> Modified H²(ℤ₂^{T²=-1}, U(1)) = ℤ₂</li>
        <li>Different physical realizations despite same algebraic structure</li>
      </ul>
    </div>

    <h2>Computational Methods</h2>

    <div class="info-box">
      <h3>Spectral Sequences</h3>
      <p>
        For complex groups, use spectral sequences to compute cohomology:
      </p>
      <div class="equation">
        E₂^{p,q} = H^p(G₁, H^q(G₂, U(1))) ⇒ H^{p+q}(G₁ × G₂, U(1))
      </div>

      <h3>Group Homology</h3>
      <p>
        Related to cohomology via:
      </p>
      <div class="equation">
        H^n(G, U(1)) ≅ Hom(H_n(G,ℤ), U(1))
      </div>
      <p>
        Can compute homology H_n(G,ℤ) first, then dualize.
      </p>

      <h3>Exact Sequences</h3>
      <p>
        For short exact sequence of groups:
      </p>
      <div class="equation">
        1 → N → G → Q → 1
      </div>
      <p>
        There's a long exact sequence in cohomology:
      </p>
      <div class="equation">
        ... → H^n(Q) → H^n(G) → H^n(N) → H^{n+1}(Q) → ...
      </div>
      <p>
        Useful for computing H^n(G) from H^n(N) and H^n(Q).
      </p>
    </div>

    <h2>Higher Dimensions and Generalizations</h2>

    <div class="highlight-box">
      <h4>General d-Dimensional SPT</h4>
      <div class="equation">
        SPT phases in d dimensions with symmetry G ↔ H^{d+1}(G, U(1))
      </div>

      <h4>Examples</h4>
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Group</th>
            <th>Classification</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>d=1</td>
            <td>ℤ₂</td>
            <td>H²(ℤ₂,U(1))=ℤ₂</td>
            <td>Haldane phase</td>
          </tr>
          <tr>
            <td>d=1</td>
            <td>U(1)</td>
            <td>H²(U(1),U(1))=ℤ</td>
            <td>Integer charge</td>
          </tr>
          <tr>
            <td>d=2</td>
            <td>ℤ₂^T (T²=-1)</td>
            <td>ℤ₂</td>
            <td>QSH insulator</td>
          </tr>
          <tr>
            <td>d=3</td>
            <td>ℤ₂^T (T²=-1)</td>
            <td>(ℤ₂)⁴</td>
            <td>3D TI</td>
          </tr>
          <tr>
            <td>d=2</td>
            <td>SO(3)</td>
            <td>H³(SO(3),U(1))=ℤ₂</td>
            <td>2D AKLT</td>
          </tr>
        </tbody>
      </table>

      <h4>Fermionic SPT</h4>
      <p>
        For fermions, use group super-cohomology:
      </p>
      <div class="equation">
        H^{d+1}(G_f, U(1))
      </div>
      <p>
        where G_f is the super-group including fermion parity.
      </p>
    </div>

    <h2>Connections to Other Mathematics</h2>

    <div class="info-box">
      <h3>Algebraic Topology</h3>
      <ul>
        <li><strong>Classifying spaces:</strong> H^n(G,U(1)) = H^n(BG, U(1))</li>
        <li><strong>Fiber bundles:</strong> Cocycles classify G-bundles</li>
        <li><strong>Characteristic classes:</strong> Chern, Stiefel-Whitney classes</li>
      </ul>

      <h3>Quantum Field Theory</h3>
      <ul>
        <li><strong>Anomalies:</strong> Bulk cocycle = edge anomaly</li>
        <li><strong>Anomaly inflow:</strong> Bulk SPT cancels boundary anomaly</li>
        <li><strong>TQFT:</strong> SPT partition function = cocycle contribution</li>
      </ul>

      <h3>Condensed Matter</h3>
      <ul>
        <li><strong>Projective representations:</strong> Edge symmetry implementation</li>
        <li><strong>Lieb-Schultz-Mattis theorems:</strong> Cohomology obstructions</li>
        <li><strong>Many-body localization:</strong> SPT in disordered systems</li>
      </ul>
    </div>

    <p>
      Group cohomology provides the complete mathematical framework for classifying bosonic SPT phases. The (d+1)-th cohomology group H^{d+1}(G,U(1)) captures all possible SPT phases in d spatial dimensions protected by symmetry group G. This elegant connection between algebra (group cohomology) and topology (SPT phases) is one of the triumphs of modern condensed matter theory.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_5_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
