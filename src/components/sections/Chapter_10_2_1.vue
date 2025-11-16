<template>
  <div class="section-content">
    <h1>10.2.1 Examples</h1>

    <p>
      Before diving into the general theory, we examine concrete examples of 1D SPT phases. These examples illustrate the key features: unique bulk ground state, symmetry protection, and non-trivial edge modes.
    </p>

    <h2>The Haldane Phase: Spin-1 Chain</h2>

    <div class="info-box">
      <h3>Hamiltonian and Properties</h3>
      <p>
        The Heisenberg antiferromagnetic spin-1 chain:
      </p>
      <div class="equation">
        H = J ∑_i S⃗_i · S⃗_{i+1},  J > 0
      </div>
      <p>
        where S⃗_i are spin-1 operators with (S^x_i)² + (S^y_i)² + (S^z_i)² = 2.
      </p>
      <p>
        <strong>Ground state properties:</strong>
      </p>
      <ul>
        <li>Unique ground state (on periodic chain)</li>
        <li>Spectral gap: Δ ≈ 0.41J</li>
        <li>Exponentially decaying correlations: ⟨S⃗_i · S⃗_j⟩ ~ e^{-|i-j|/ξ}, ξ ≈ 6</li>
        <li>No spontaneous magnetization: ⟨S⃗_i⟩ = 0</li>
      </ul>
    </div>

    <h3>Edge States</h3>

    <div class="highlight-box">
      <h4>Fractional Spin-1/2 at Boundaries</h4>
      <p>
        On an open chain, the ground state is 4-fold degenerate, corresponding to 4 combinations of spin-1/2 at the two ends:
      </p>
      <div class="equation">
        |ψ_GS⟩ ∈ span{|↑_L, ↑_R⟩, |↑_L, ↓_R⟩, |↓_L, ↑_R⟩, |↓_L, ↓_R⟩}
      </div>
      <p>
        <strong>Physical interpretation:</strong>
      </p>
      <ul>
        <li>Each boundary hosts an unpaired spin-1/2</li>
        <li>These are not free spins but emergent degrees of freedom</li>
        <li>Protected by SO(3) or ℤ₂ × ℤ₂ symmetry</li>
        <li>Cannot be gapped without breaking symmetry</li>
      </ul>
    </div>

    <h2>AKLT Model: Exactly Solvable SPT</h2>

    <div class="info-box">
      <h3>Construction</h3>
      <p>
        The Affleck-Kennedy-Lieb-Tasaki (AKLT) model provides an exact solution for the Haldane phase:
      </p>
      <div class="equation">
        H_{AKLT} = ∑_i [S⃗_i · S⃗_{i+1} + (1/3)(S⃗_i · S⃗_{i+1})²]
      </div>
      <p>
        <strong>Exact ground state (Schwinger boson construction):</strong>
      </p>
      <ol>
        <li>Represent each spin-1 as two spin-1/2: |S=1⟩ = symmetrize(|s=1/2⟩ ⊗ |s=1/2⟩)</li>
        <li>Form singlets between neighboring auxiliary spins</li>
        <li>Project to spin-1 subspace at each site</li>
      </ol>
      <div class="equation">
        |ψ_{AKLT}⟩ = P_1 ⊗ P_2 ⊗ ... ⊗ P_N  |singlets⟩
      </div>
    </div>

    <h3>VBS (Valence Bond Solid) Picture</h3>

    <div class="highlight-box">
      <h4>Visualizing the AKLT State</h4>
      <p>
        Each bond carries a valence bond (singlet):
      </p>
      <div class="equation">
        |VB⟩ = (|↑↓⟩ - |↓↑⟩)/√2
      </div>
      <p>
        At each site, two half-bonds combine to form spin-1. This construction reveals:
      </p>
      <ul>
        <li>Bulk: All virtual spins paired → unique ground state</li>
        <li>Edges: Unpaired virtual spins → spin-1/2 degrees of freedom</li>
        <li>Gap: Protected by projection to spin-1 subspace</li>
      </ul>
    </div>

    <h2>String Order Parameter</h2>

    <div class="info-box">
      <h3>Non-Local Detection of SPT</h3>
      <p>
        SPT phases cannot be detected by local order parameters. Instead, use string order:
      </p>
      <div class="equation">
        O_{string} = lim_{|i-j|→∞} ⟨S^z_i exp(iπ ∑_{k=i+1}^{j-1} S^z_k) S^z_j⟩
      </div>
      <p>
        <strong>Results:</strong>
      </p>
      <ul>
        <li><strong>Haldane phase:</strong> O_{string} ≠ 0 (hidden order)</li>
        <li><strong>Trivial phase:</strong> O_{string} = 0</li>
      </ul>
      <p>
        This non-local order parameter distinguishes SPT from trivial phases.
      </p>
    </div>

    <h2>Cluster State: 1D SPT with ℤ₂ Symmetry</h2>

    <div class="info-box">
      <h3>Definition</h3>
      <p>
        The cluster state is ground state of the cluster Hamiltonian:
      </p>
      <div class="equation">
        H = -∑_i K_i,  K_i = X_{i-1} Z_i X_{i+1}
      </div>
      <p>
        <strong>Ground state:</strong>
      </p>
      <div class="equation">
        |ψ_{cluster}⟩ = ∏_{i} CZ_{i,i+1} |+⟩^{⊗N}
      </div>
      <p>
        <strong>SPT nature:</strong> Protected by ℤ₂ × ℤ₂ symmetry with 4-fold edge degeneracy.
      </p>
    </div>

    <p>
      These examples establish the phenomenology of SPT phases. In the following sections, we develop the systematic classification theory.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_2_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
