<template>
  <div class="section-content">
    <h1>10.2.4 Translation Invariance</h1>

    <p>
      Translation symmetry, when combined with on-site internal symmetries, significantly enriches the classification of SPT phases. The interplay between spatial and internal symmetries leads to additional phases beyond those captured by H^{d+1}(G,U(1)) alone. This section explores how translation invariance modifies the SPT landscape.
    </p>

    <h2>Symmetry Group Structure</h2>

    <div class="info-box">
      <h3>Combined Symmetry: G × ℤ (or G ⋊ ℤ)</h3>
      <p>
        Consider a d-dimensional system with:
      </p>
      <ul>
        <li><strong>On-site symmetry:</strong> G (e.g., ℤ₂, U(1), SO(3))</li>
        <li><strong>Translation symmetry:</strong> ℤ in 1D, ℤ^d in d dimensions</li>
      </ul>

      <h4>Group Structure</h4>
      <p>
        If translation and G commute:
      </p>
      <div class="equation">
        Total symmetry = G × ℤ^d
      </div>
      <p>
        If G acts non-trivially under translation (e.g., time-reversal flips momentum):
      </p>
      <div class="equation">
        Total symmetry = G ⋊ ℤ^d (semidirect product)
      </div>

      <h4>Enhanced Classification</h4>
      <p>
        For 1D systems with translation:
      </p>
      <div class="equation">
        SPT phases classified by H²(G × ℤ, U(1))
      </div>
      <p>
        By Künneth formula:
      </p>
      <div class="equation">
        H²(G × ℤ, U(1)) = H²(G,U(1)) ⊕ H¹(G,U(1)) ⊗ H¹(ℤ,U(1))
      </div>
      <p>
        Since H¹(ℤ,U(1)) = U(1) and H¹(G,U(1)) = Hom(G,U(1)) (group homomorphisms):
      </p>
      <div class="equation">
        H²(G × ℤ, U(1)) = H²(G,U(1)) ⊕ [Hom(G,U(1)) ⊗ U(1)]
      </div>
    </div>

    <div class="highlight-box">
      <h4>Physical Interpretation</h4>
      <p>
        The decomposition has clear physical meaning:
      </p>
      <ul>
        <li><strong>H²(G,U(1)) term:</strong> Intrinsic SPT phases independent of translation (already studied)</li>
        <li><strong>Hom(G,U(1)) ⊗ U(1) term:</strong> Additional phases from interplay between G and translation</li>
      </ul>

      <h4>Example: G = ℤ₂</h4>
      <p>
        For ℤ₂ on-site symmetry:
      </p>
      <ul>
        <li>H²(ℤ₂,U(1)) = ℤ₂ (standard Haldane-type SPT)</li>
        <li>Hom(ℤ₂,U(1)) = ℤ₂ (trivial or charge conjugation representation)</li>
        <li>H¹(ℤ,U(1)) = U(1) (parametrized by angle θ ∈ [0,2π))</li>
      </ul>
      <p>
        Result:
      </p>
      <div class="equation">
        H²(ℤ₂ × ℤ, U(1)) = ℤ₂ ⊕ [ℤ₂ ⊗ U(1)] = ℤ₂ ⊕ ℤ₂
      </div>
      <p>
        Thus, there are <strong>4 SPT phases</strong> instead of 2!
      </p>
    </div>

    <h2>Projective Representations on MPS Virtual Bonds</h2>

    <div class="info-box">
      <h3>Translation-Invariant MPS</h3>
      <p>
        For translation-invariant 1D system, all sites have the same MPS tensor A^s:
      </p>
      <div class="equation">
        |ψ⟩ = ∑_{{s_i}} Tr[A^{s₁} A^{s₂} ··· A^{s_N}] |s₁s₂···s_N⟩
      </div>

      <h4>Symmetry Action on MPS</h4>
      <p>
        On-site symmetry g ∈ G acts as:
      </p>
      <div class="equation">
        U_g A^s (U_g)^{-1} = ∑_t D^{st}_g A^t
      </div>
      <p>
        where D_g is representation of g on physical index.
      </p>

      <h4>Virtual Symmetry Representation</h4>
      <p>
        On virtual indices, g acts via matrix V_g:
      </p>
      <div class="equation">
        U_g A^s (U_g)^{-1} = V_g A^s V_g^{-1}
      </div>
      <p>
        Crucially, V_g can be a <strong>projective representation</strong>:
      </p>
      <div class="equation">
        V_{g₁} V_{g₂} = ω(g₁,g₂) V_{g₁g₂}
      </div>
      <p>
        with cocycle ω ∈ H²(G,U(1)).
      </p>
    </div>

    <div class="highlight-box">
      <h4>Translation Acts on Virtual Index</h4>
      <p>
        Translation by one site shifts virtual index:
      </p>
      <div class="equation">
        T_x: |α⟩_i → |α⟩_{i+1}
      </div>
      <p>
        For translation-invariant MPS, T_x acts trivially on the tensor itself, but can twist the virtual representation.
      </p>

      <h4>Enriched Virtual Projective Representation</h4>
      <p>
        Combining G and T_x, the virtual representation satisfies:
      </p>
      <div class="equation">
        V_g V_{T_x} = ω'(g,T_x) V_{T_x} V_{g'}
      </div>
      <p>
        where g' can differ from g (if semidirect product), and ω' encodes the additional SPT phase.
      </p>

      <h4>Example: Inversion-Symmetric Systems</h4>
      <p>
        For inversion symmetry I (reflecting around center):
      </p>
      <div class="equation">
        I^2 = 1,  [I,G] = 0 → symmetry G × ℤ₂^I
      </div>
      <p>
        Classification:
      </p>
      <div class="equation">
        H²(G × ℤ₂, U(1)) = H²(G,U(1)) ⊕ H²(ℤ₂,U(1)) ⊕ [H¹(G) ⊗ H¹(ℤ₂)]
      </div>
      <p>
        For G = ℤ₂: This gives ℤ₂ ⊕ ℤ₂ ⊕ ℤ₂ = (ℤ₂)³ = 8 SPT phases!
      </p>
    </div>

    <h2>Weak vs. Strong SPT Phases</h2>

    <div class="info-box">
      <h3>Definitions</h3>

      <h4>Weak SPT</h4>
      <p>
        A <strong>weak SPT</strong> in d dimensions is obtained by:
      </p>
      <ol>
        <li>Take a (d-1)-dimensional SPT phase</li>
        <li>Stack it along one direction using translation symmetry</li>
        <li>Result: d-dimensional phase that is "layered"</li>
      </ol>

      <h4>Strong SPT</h4>
      <p>
        A <strong>strong SPT</strong> in d dimensions:
      </p>
      <ul>
        <li>Cannot be decomposed into lower-dimensional layers</li>
        <li>Intrinsically d-dimensional</li>
        <li>Remains nontrivial even if translation symmetry is broken</li>
      </ul>

      <h4>Mathematical Characterization</h4>
      <p>
        Consider d-dimensional SPT with symmetry G × ℤ^d (translation in all d directions).
      </p>
      <p>
        By Künneth formula:
      </p>
      <div class="equation">
        H^{d+1}(G × ℤ^d, U(1)) = ⊕_{p+q=d+1} H^p(G,U(1)) ⊗ H^q(ℤ^d,U(1))
      </div>
      <ul>
        <li><strong>Strong SPT:</strong> p = d+1, q = 0 → H^{d+1}(G,U(1)) term</li>
        <li><strong>Weak SPT:</strong> p < d+1, q > 0 → lower-dimensional stacked with translation</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Example: 3D Topological Insulator</h4>
      <p>
        Consider 3D system with time-reversal T (T² = -1).
      </p>

      <h4>Classification</h4>
      <p>
        Symmetry: ℤ₂^T × ℤ³ (translation in x,y,z directions)
      </p>
      <p>
        3D SPT classified by H⁴(ℤ₂^T × ℤ³, U(1)).
      </p>

      <h4>Künneth Decomposition</h4>
      <div class="equation">
        H⁴(ℤ₂^T × ℤ³, U(1)) = H⁴(ℤ₂^T) ⊕ [H³(ℤ₂^T) ⊗ H¹(ℤ³)] ⊕ ...
      </div>
      <p>
        With modified cohomology for T:
      </p>
      <ul>
        <li>H⁴(ℤ₂^T,U(1)) = ℤ₂ <strong>(strong TI)</strong></li>
        <li>H³(ℤ₂^T,U(1)) = ℤ₂, H¹(ℤ³,U(1)) = ℤ³</li>
      </ul>
      <p>
        Result:
      </p>
      <div class="equation">
        Total classification = (ℤ₂)⁴
      </div>
      <ul>
        <li><strong>1 strong invariant:</strong> Intrinsic 3D TI (cannot layer)</li>
        <li><strong>3 weak invariants:</strong> 2D QSH stacked along x, y, or z</li>
      </ul>

      <h4>Physical Consequences</h4>
      <ul>
        <li><strong>Strong TI:</strong> Odd number of Dirac cones on any surface → topologically protected</li>
        <li><strong>Weak TI:</strong> Even number of Dirac cones, arranged in pairs → can be gapped by disorder that breaks translation</li>
      </ul>
    </div>

    <div class="comparison-box">
      <h3>Strong vs Weak SPT Comparison</h3>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Strong SPT</th>
            <th>Weak SPT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dimensionality</td>
            <td>Intrinsically d-dimensional</td>
            <td>Layered (d-1)-D SPT</td>
          </tr>
          <tr>
            <td>Translation symmetry</td>
            <td>Not essential for protection</td>
            <td>Essential for protection</td>
          </tr>
          <tr>
            <td>Disorder robustness</td>
            <td>Robust to translation-breaking disorder</td>
            <td>Fragile to disorder breaking translation</td>
          </tr>
          <tr>
            <td>Surface states</td>
            <td>Odd number of gapless modes</td>
            <td>Even number (pairwise)</td>
          </tr>
          <tr>
            <td>Cohomology origin</td>
            <td>H^{d+1}(G,U(1))</td>
            <td>H^p(G) ⊗ H^q(ℤ^d), p < d+1</td>
          </tr>
          <tr>
            <td>Example (3D, T)</td>
            <td>Bi₂Se₃ (1 Dirac cone)</td>
            <td>Layered QSH (pairs of cones)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Concrete Example: 2D SPT with ℤ₂ × ℤ₂</h2>

    <div class="info-box">
      <h3>Setup</h3>
      <p>
        2D square lattice with:
      </p>
      <ul>
        <li>On-site ℤ₂ × ℤ₂ symmetry: (g_x, g_y) where g_x² = g_y² = 1, [g_x,g_y]=0</li>
        <li>Translation symmetry: T_x, T_y</li>
      </ul>

      <h4>Classification Without Translation</h4>
      <div class="equation">
        H³(ℤ₂ × ℤ₂, U(1)) = ℤ₂
      </div>
      <p>
        One nontrivial SPT: the CZX model (2D cluster state).
      </p>

      <h4>Classification With Translation</h4>
      <div class="equation">
        H³([ℤ₂ × ℤ₂] × ℤ², U(1))
      </div>
      <p>
        Künneth formula gives:
      </p>
      <div class="equation">
        = H³(ℤ₂ × ℤ₂) ⊕ [H²(ℤ₂ × ℤ₂) ⊗ H¹(ℤ²)] ⊕ ...
      </div>
      <p>
        Since H²(ℤ₂ × ℤ₂,U(1)) = ℤ₂ and H¹(ℤ²,U(1)) = ℤ²:
      </p>
      <div class="equation">
        = ℤ₂ ⊕ [ℤ₂ ⊗ ℤ²] ⊕ ... = ℤ₂ ⊕ (ℤ₂)²
      </div>
      <p>
        Total: (ℤ₂)³ = <strong>8 distinct SPT phases</strong>
      </p>
    </div>

    <div class="highlight-box">
      <h4>Physical Interpretation</h4>
      <ul>
        <li><strong>1 strong phase (ℤ₂):</strong> 2D CZX model, cannot be reduced to 1D</li>
        <li><strong>2 weak phases (ℤ₂)²:</strong> 1D cluster states stacked along x or y directions</li>
      </ul>

      <h4>Experimental Distinction</h4>
      <p>
        To distinguish strong from weak:
      </p>
      <ol>
        <li><strong>Break translation in one direction:</strong> Insert disorder or defects</li>
        <li><strong>Strong SPT:</strong> Remains topological (edge states persist)</li>
        <li><strong>Weak SPT:</strong> Becomes trivial if translation broken in stacking direction</li>
      </ol>
    </div>

    <h2>Generalization: Crystalline SPT</h2>

    <div class="info-box">
      <h3>Space Group Symmetries</h3>
      <p>
        Beyond simple translation, crystals have full <strong>space group symmetry</strong>:
      </p>
      <ul>
        <li>Translations: ℤ^d</li>
        <li>Point group: Rotations, reflections, inversions</li>
        <li>Glide reflections, screw axes (combinations)</li>
      </ul>

      <h4>Crystalline SPT Classification</h4>
      <p>
        For space group S and on-site symmetry G:
      </p>
      <div class="equation">
        SPT phases classified by H^{d+1}(G × S, U(1))
      </div>
      <p>
        This leads to vast number of SPT phases!
      </p>

      <h4>Examples</h4>
      <ul>
        <li><strong>Mirror symmetry:</strong> Topological crystalline insulators (SnTe)</li>
        <li><strong>C_n rotation:</strong> n-fold rotation-protected SPT</li>
        <li><strong>Wallpaper/space groups:</strong> 230 space groups in 3D → enormous variety</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Topological Crystalline Insulator (TCI)</h4>
      <p>
        Material: SnTe (tin telluride)
      </p>

      <h4>Symmetry</h4>
      <ul>
        <li>Time-reversal: T²=-1</li>
        <li>Mirror reflection: M (e.g., M_z: z → -z)</li>
        <li>[T,M]=0</li>
      </ul>

      <h4>Classification</h4>
      <div class="equation">
        H³(ℤ₂^T × ℤ₂^M, U(1)) = (ℤ₂)²
      </div>
      <p>
        Two invariants:
      </p>
      <ul>
        <li>ν₀: QSH invariant (T-protected)</li>
        <li>ν_M: Mirror Chern number (M-protected)</li>
      </ul>

      <h4>Surface States</h4>
      <p>
        On (001) surface (preserves M_z):
      </p>
      <ul>
        <li>Even number of Dirac cones (e.g., 4 or 6)</li>
        <li>Located at mirror-invariant momenta</li>
        <li>Protected by mirror symmetry, not time-reversal alone</li>
      </ul>

      <h4>Experimental Observation</h4>
      <ul>
        <li>ARPES observes 4 Dirac cones at (¯X, ¯M) points</li>
        <li>Breaking mirror (e.g., by strain) gaps the surface</li>
        <li>Different from strong TI which has odd Dirac cones protected by T alone</li>
      </ul>
    </div>

    <h2>Detection and Measurement</h2>

    <div class="info-box">
      <h3>Distinguishing SPT Phases with Translation</h3>

      <h4>1. Surface Spectroscopy</h4>
      <ul>
        <li>ARPES maps surface band structure</li>
        <li>Count Dirac cones: odd → strong, even → weak (or crystalline)</li>
        <li>Check locations: high-symmetry points indicate crystalline protection</li>
      </ul>

      <h4>2. Translation-Breaking Perturbations</h4>
      <ul>
        <li>Introduce controlled disorder (substitution, vacancies)</li>
        <li>Strong SPT: Robust</li>
        <li>Weak SPT: Becomes trivial</li>
      </ul>

      <h4>3. Wilson Loop and Berry Phase</h4>
      <p>
        For periodic systems, compute:
      </p>
      <div class="equation">
        γ = ∮_{BZ} ⟨u_k | i∂_k | u_k⟩ dk
      </div>
      <p>
        Different SPT phases have different Berry phase windings.
      </p>

      <h4>4. Entanglement Spectrum</h4>
      <p>
        In translation-invariant systems:
      </p>
      <ul>
        <li>Partition into left/right (or up/down) halves</li>
        <li>Entanglement spectrum {λ_α} from reduced density matrix</li>
        <li>Strong SPT: Specific degeneracy patterns related to edge theory</li>
        <li>Weak SPT: Entanglement spectrum mimics lower-dimensional SPT</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h4>Key Takeaways</h4>
      <ul>
        <li><strong>Enhanced classification:</strong> Translation symmetry combined with on-site G gives H^{d+1}(G × ℤ^d, U(1))</li>
        <li><strong>Künneth formula:</strong> Decomposes into strong and weak SPT contributions</li>
        <li><strong>Strong SPT:</strong> Intrinsic d-D, robust to translation-breaking, odd surface states</li>
        <li><strong>Weak SPT:</strong> Layered (d-1)-D, fragile to disorder, even surface states</li>
        <li><strong>3D TI example:</strong> (ℤ₂)⁴ = 1 strong + 3 weak invariants</li>
        <li><strong>Projective virtual reps:</strong> MPS virtual indices carry enriched projective representation</li>
        <li><strong>Crystalline SPT:</strong> Full space group symmetry vastly increases SPT variety (TCI example: SnTe)</li>
        <li><strong>Experimental distinction:</strong> Surface spectroscopy, disorder tests, Berry phase, entanglement spectrum</li>
      </ul>

      <h4>Conceptual Importance</h4>
      <p>
        Translation invariance is not merely a technical detail—it fundamentally enriches the SPT landscape. The distinction between strong and weak SPT reflects whether topology is intrinsic to the dimensionality or emerges from layering. This has profound implications for experimental realization and robustness to disorder.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_2_4'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
