<template>
  <div class="section-content">
    <h1>4.3.1 Examples of Local Hamiltonians</h1>

    <h2>1. Transverse-Field Ising Model</h2>
    <div class="highlight-box">
      <h3>1D Chain</h3>
      <div class="equation">
        H = -J Σ_{i} σ_i^z σ_{i+1}^z - h Σ_i σ_i^x
      </div>

      <ul>
        <li><strong>J term:</strong> Ising interaction (2-local)</li>
        <li><strong>h term:</strong> Transverse field (1-local)</li>
        <li><strong>Total locality:</strong> 2-local</li>
      </ul>

      <p><strong>Physics:</strong> Quantum phase transition at h_c ~ J</p>
    </div>

    <h2>2. Heisenberg Model</h2>
    <div class="info-box">
      <h3>Spin-1/2 Chain</h3>
      <div class="equation">
        H = J Σ_{⟨i,j⟩} (σ_i^x σ_j^x + σ_i^y σ_j^y + σ_i^z σ_j^z)
      </div>

      <ul>
        <li><strong>J > 0:</strong> Antiferromagnetic</li>
        <li><strong>J < 0:</strong> Ferromagnetic</li>
        <li><strong>Locality:</strong> 2-local</li>
      </ul>

      <p><strong>Ground state:</strong> Singlet pairs (antiferromagnetic)</p>
    </div>

    <h2>3. Hubbard Model</h2>
    <div class="highlight-box">
      <h3>Fermions on Lattice</h3>
      <div class="equation">
        H = -t Σ_{⟨i,j⟩,σ} (c†_{iσ} c_{jσ} + h.c.) + U Σ_i n_{i↑} n_{i↓}
      </div>

      <ul>
        <li><strong>t term:</strong> Hopping (2-local)</li>
        <li><strong>U term:</strong> On-site repulsion (1-local)</li>
      </ul>

      <p><strong>Relevance:</strong> High-T_c superconductivity, Mott insulators</p>
    </div>

    <h2>4. Kitaev Toric Code Hamiltonian</h2>
    <div class="note-box">
      <div class="equation">
        H = -J_s Σ_v A_v - J_p Σ_p B_p
      </div>

      <p>Where A_v = ∏ X (star) and B_p = ∏ Z (plaquette)</p>

      <ul>
        <li><strong>Locality:</strong> 4-local</li>
        <li><strong>Ground state:</strong> Topologically ordered</li>
        <li><strong>Special:</strong> Exactly solvable!</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_3_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
