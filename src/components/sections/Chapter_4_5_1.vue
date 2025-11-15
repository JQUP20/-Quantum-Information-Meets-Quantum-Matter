<template>
  <div class="section-content">
    <h1>4.5.1 Examples of Frustration-Free Hamiltonians</h1>

    <h2>What is Frustration-Free?</h2>
    <div class="highlight-box">
      <h3>Definition</h3>
      <p>A Hamiltonian H = Σ_i h_i is <strong>frustration-free</strong> if:</p>
      <div class="equation">
        E_0 = Σ_i E_i^{(0)}
      </div>

      <p>where E_i^{(0)} = min eigenvalue of h_i</p>

      <p><strong>Physical meaning:</strong> All terms can be minimized simultaneously—no competing interactions!</p>
    </div>

    <h2>Example 1: Ferromagnetic Ising</h2>
    <div class="info-box">
      <div class="equation">
        H = -Σ_{⟨i,j⟩} σ_i^z σ_j^z
      </div>

      <p><strong>Ground state:</strong> |↑↑...↑⟩ or |↓↓...↓⟩</p>

      <p>Each term h_{ij} = -σ_i^z σ_j^z minimized by aligned spins → frustration-free!</p>
    </div>

    <h2>Example 2: Toric Code</h2>
    <div class="highlight-box">
      <div class="equation">
        H = -Σ_v A_v - Σ_p B_p
      </div>

      <p><strong>Ground states:</strong> All states with A_v = B_p = +1</p>

      <p>All stabilizer terms can equal +1 simultaneously → frustration-free!</p>

      <p><strong>Bonus:</strong> Exactly solvable due to commuting terms [A_v, B_p] = 0</p>
    </div>

    <h2>Example 3: AKLT Model</h2>
    <div class="info-box">
      <p>Spin-1 chain with Hamiltonian:</p>
      <div class="equation">
        H = Σ_i P_{i,i+1}^{(S=2)}
      </div>

      <p>where P projects bond (i,i+1) to total spin S=2</p>

      <p><strong>Ground state:</strong> Valence bond solid (VBS)</p>

      <p><strong>Property:</strong> Frustration-free and exactly solvable</p>
    </div>

    <h2>Counter-Example: Antiferromagnetic Ising on Triangle</h2>
    <div class="note-box">
      <div class="equation">
        H = Σ_{⟨i,j⟩∈triangle} σ_i^z σ_j^z
      </div>

      <p><strong>Problem:</strong> Cannot make all three bonds antiparallel!</p>

      <p>If spins 1,2 antiparallel and spins 2,3 antiparallel, then spins 1,3 must be parallel</p>

      <p><strong>Result:</strong> FRUSTRATED—some term must pay energy cost</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_4_5_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
