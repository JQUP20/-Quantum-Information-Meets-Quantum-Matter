<template>
  <div class="section-content">
    <h1>10.2.3 Time Reversal Symmetry</h1>

    <p>
      Time-reversal symmetry T is anti-unitary (T i T⁻¹ = -i) and can square to ±1: T² = ±1. This leads to distinct SPT classifications for bosons and fermions.
    </p>

    <h2>Anti-Unitary Symmetries</h2>

    <div class="info-box">
      <h3>Time-Reversal Operator</h3>
      <p>
        Time-reversal acts as:
      </p>
      <div class="equation">
        T: i → -i,  T² = ±1
      </div>
      <p>
        <strong>For spin systems:</strong>
      </p>
      <ul>
        <li>T S^x T⁻¹ = S^x</li>
        <li>T S^y T⁻¹ = -S^y</li>
        <li>T S^z T⁻¹ = S^z</li>
      </ul>
      <p>
        <strong>Constraint:</strong>
      </p>
      <ul>
        <li>Integer spin (S = 0, 1, 2, ...): T² = +1</li>
        <li>Half-integer spin (S = 1/2, 3/2, ...): T² = -1 (Kramers theorem)</li>
      </ul>
    </div>

    <h2>Classification</h2>

    <div class="highlight-box">
      <h4>SPT with Time-Reversal</h4>
      <p>
        <strong>Bosonic T² = +1:</strong>
      </p>
      <div class="equation">
        H²(ℤ₂^T, U(1)) = ℤ₂
      </div>
      <p>
        Two phases: trivial and Haldane-like
      </p>
      <p>
        <strong>Fermionic T² = -1:</strong>
      </p>
      <div class="equation">
        H²(ℤ₂^{T²=-1}, U(1)) = ℤ₂
      </div>
      <p>
        Two phases: trivial and topological insulator
      </p>
    </div>

    <h2>Mathematical Structure of Anti-Unitary Operators</h2>

    <div class="info-box">
      <h3>Anti-Linearity</h3>
      <p>
        An anti-unitary operator T satisfies:
      </p>
      <div class="equation">
        T(α|ψ⟩ + β|φ⟩) = α* T|ψ⟩ + β* T|φ⟩
      </div>
      <p>
        where α* denotes complex conjugation.
      </p>

      <h4>Action on Operators</h4>
      <p>
        For any operator O:
      </p>
      <div class="equation">
        T O T⁻¹ = (T O† T⁻¹)*
      </div>
      <p>
        In particular, for position and momentum:
      </p>
      <ul>
        <li>T x T⁻¹ = x (position unchanged)</li>
        <li>T p T⁻¹ = -p (momentum reversed)</li>
        <li>T i T⁻¹ = -i (imaginary unit flips)</li>
      </ul>

      <h4>Wigner's Theorem</h4>
      <p>
        Any symmetry of quantum mechanics is either:
      </p>
      <ul>
        <li><strong>Unitary:</strong> Preserves inner products ⟨Uψ|Uφ⟩ = ⟨ψ|φ⟩</li>
        <li><strong>Anti-unitary:</strong> Conjugates inner products ⟨Tψ|Tφ⟩ = ⟨ψ|φ⟩*</li>
      </ul>
      <p>
        Time-reversal must be anti-unitary to preserve probability.
      </p>
    </div>

    <h2>T² = ±1: Physical Origin</h2>

    <div class="highlight-box">
      <h4>Kramers Theorem (1930)</h4>
      <p>
        Applying time-reversal twice must return to the original state up to a phase:
      </p>
      <div class="equation">
        T² |ψ⟩ = e^{iθ} |ψ⟩
      </div>
      <p>
        But T is anti-unitary, so:
      </p>
      <div class="equation">
        T² (α|ψ⟩) = α* T² |ψ⟩ = α* e^{iθ} |ψ⟩
      </div>
      <p>
        Also:
      </p>
      <div class="equation">
        T² (α|ψ⟩) = T(α* T|ψ⟩) = α T²|ψ⟩
      </div>
      <p>
        Consistency requires α* e^{iθ} = α e^{iθ}, thus e^{2iθ} = 1, giving:
      </p>
      <div class="equation">
        T² = ±1
      </div>

      <h4>Spin Dependence</h4>
      <p>
        For spin-S particles, time-reversal acts on spin via:
      </p>
      <div class="equation">
        T = e^{-iπS^y/ℏ} K
      </div>
      <p>
        where K is complex conjugation. Thus:
      </p>
      <div class="equation">
        T² = e^{-i2πS^y/ℏ} = e^{-i2πS} = (-1)^{2S}
      </div>
      <ul>
        <li><strong>Integer spin:</strong> T² = +1 (bosons)</li>
        <li><strong>Half-integer spin:</strong> T² = -1 (fermions, Kramers doublets)</li>
      </ul>
    </div>

    <h2>Classification with Time-Reversal</h2>

    <div class="info-box">
      <h3>Modified Cohomology for Anti-Unitary Symmetries</h3>
      <p>
        For anti-unitary ℤ₂ symmetry, the classification requires modified cohomology theory accounting for complex conjugation.
      </p>

      <h4>T² = +1 (Bosonic)</h4>
      <div class="equation">
        H²(ℤ₂^{T²=+1}, U(1)) = ℤ₂
      </div>
      <ul>
        <li><strong>Trivial phase:</strong> Product state, no edge modes</li>
        <li><strong>Non-trivial phase:</strong> Haldane-like, degenerate edge states</li>
      </ul>
      <p>
        Example: Integer spin chains (S=1,2,3,...)
      </p>

      <h4>T² = -1 (Fermionic)</h4>
      <div class="equation">
        H²(ℤ₂^{T²=-1}, U(1)) = ℤ₂
      </div>
      <ul>
        <li><strong>Trivial phase:</strong> Conventional insulator</li>
        <li><strong>Non-trivial phase:</strong> Topological insulator with helical edge states</li>
      </ul>
      <p>
        Example: Quantum spin Hall insulator (HgTe quantum wells)
      </p>
    </div>

    <h2>Kramers Degeneracy in Detail</h2>

    <div class="highlight-box">
      <h4>Proof of Kramers Theorem</h4>
      <p>
        For a system with T² = -1:
      </p>
      <ol>
        <li>Consider eigenstate: H|ψ⟩ = E|ψ⟩</li>
        <li>Apply T: TH|ψ⟩ = TE|ψ⟩</li>
        <li>Since [H,T] = 0: HTψ⟩ = E(T|ψ⟩)</li>
        <li>So T|ψ⟩ is also eigenstate with energy E</li>
      </ol>

      <h4>Orthogonality</h4>
      <p>
        Show |ψ⟩ and T|ψ⟩ are orthogonal (if non-degenerate):
      </p>
      <div class="equation">
        ⟨ψ|Tψ⟩ = ⟨T²ψ|Tψ⟩* = -⟨ψ|Tψ⟩*
      </div>
      <p>
        Using T² = -1. If ⟨ψ|Tψ⟩ is real, this gives ⟨ψ|Tψ⟩ = 0.
      </p>
      <p>
        <strong>Conclusion:</strong> Every energy level is at least 2-fold degenerate (Kramers pair).
      </p>

      <h4>Physical Consequences</h4>
      <ul>
        <li>No Anderson localization for Kramers pairs</li>
        <li>Edge states protected from backscattering</li>
        <li>Robust to time-reversal preserving disorder</li>
        <li>Broken only by magnetic field or magnetic impurities</li>
      </ul>
    </div>

    <h2>1D Example: Spin-1/2 Chain with Time-Reversal</h2>

    <div class="info-box">
      <h3>Effective Edge Theory</h3>
      <p>
        Consider 1D SPT with T² = -1. On an open chain:
      </p>
      <ul>
        <li>Each edge hosts a Kramers doublet (2 states)</li>
        <li>Total edge degeneracy: 2 × 2 = 4</li>
        <li>Protected by time-reversal symmetry</li>
      </ul>

      <h4>Edge Hamiltonian</h4>
      <p>
        Most general edge Hamiltonian preserving T² = -1:
      </p>
      <div class="equation">
        H_{edge} = Δ (σ^x_L σ^x_R + σ^y_L σ^y_R)
      </div>
      <p>
        where L, R denote left and right edges.
      </p>
      <ul>
        <li>Δ > 0: Can gap out the edge modes (trivial phase)</li>
        <li>Δ = 0: Edge modes remain degenerate (non-trivial SPT)</li>
      </ul>
    </div>

    <h2>2D Quantum Spin Hall Effect</h2>

    <div class="info-box">
      <h3>Physical Setup</h3>
      <p>
        2D topological insulator with T² = -1:
      </p>
      <ul>
        <li>Bulk: Insulating, gap ~0.01-0.1 eV</li>
        <li>Edge: 1D helical fermions (spin-momentum locked)</li>
        <li>Quantized conductance: G = 2e²/h per edge</li>
      </ul>

      <h4>Edge Dispersion</h4>
      <p>
        Helical edge states have linear dispersion:
      </p>
      <div class="equation">
        E(k) = ±v_F k
      </div>
      <p>
        with spin-momentum locking:
      </p>
      <div class="equation">
        ⟨S^z⟩ = sgn(k)/2
      </div>
      <p>
        <strong>Key property:</strong> Right-movers have spin-up, left-movers have spin-down.
      </p>

      <h4>Protection Mechanism</h4>
      <ul>
        <li>Time-reversal: k → -k and spin → -spin</li>
        <li>Backscattering k → -k requires spin flip</li>
        <li>Non-magnetic impurities cannot flip spin</li>
        <li>Result: No backscattering, dissipationless transport</li>
      </ul>
    </div>

    <h2>ℤ₂ Topological Invariant</h2>

    <div class="highlight-box">
      <h4>Kane-Mele Invariant (2005)</h4>
      <p>
        For 2D insulator with T² = -1, define:
      </p>
      <div class="equation">
        ν = (1/2π) ∫_{BZ} F₁₂ d²k  (mod 2)
      </div>
      <p>
        where F₁₂ is Berry curvature in occupied bands.
      </p>

      <h4>Alternative Formula</h4>
      <p>
        Using time-reversal invariant momenta (TRIM):
      </p>
      <div class="equation">
        (-1)^ν = ∏_{i=1}^4 √(det[w(Λ_i)])
      </div>
      <p>
        where Λ_i are the 4 TRIM points in 2D Brillouin zone, and w is the Berry connection.
      </p>

      <h4>Physical Meaning</h4>
      <ul>
        <li><strong>ν = 0 (mod 2):</strong> Trivial insulator</li>
        <li><strong>ν = 1 (mod 2):</strong> Topological insulator (QSH)</li>
      </ul>
      <p>
        The ℤ₂ nature (mod 2) reflects that pairing two TI gives trivial phase.
      </p>
    </div>

    <h2>3D Topological Insulators</h2>

    <div class="info-box">
      <h3>Four ℤ₂ Invariants</h3>
      <p>
        In 3D with T² = -1, there are 4 ℤ₂ invariants:
      </p>
      <div class="equation">
        (ν₀; ν₁ν₂ν₃)
      </div>
      <ul>
        <li><strong>ν₀:</strong> Strong topological index</li>
        <li><strong>ν₁,ν₂,ν₃:</strong> Weak topological indices</li>
      </ul>

      <h4>Classification</h4>
      <table>
        <thead>
          <tr>
            <th>Invariant</th>
            <th>Physical Meaning</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(0;000)</td>
            <td>Trivial insulator</td>
            <td>Conventional band insulator</td>
          </tr>
          <tr>
            <td>(1;000)</td>
            <td>Strong TI</td>
            <td>Bi₂Se₃, Bi₂Te₃</td>
          </tr>
          <tr>
            <td>(0;001)</td>
            <td>Weak TI (z-direction)</td>
            <td>Stacked 2D QSH</td>
          </tr>
          <tr>
            <td>(1;111)</td>
            <td>Strong + weak</td>
            <td>Specific materials</td>
          </tr>
        </tbody>
      </table>

      <h4>Strong vs Weak TI</h4>
      <ul>
        <li><strong>Strong TI:</strong> Single Dirac cone on all surfaces, robust</li>
        <li><strong>Weak TI:</strong> Directional, can be destroyed by disorder</li>
      </ul>
    </div>

    <h2>Experimental Realizations</h2>

    <div class="highlight-box">
      <h4>HgTe/CdTe Quantum Wells (2007)</h4>
      <p>
        First realization of quantum spin Hall effect:
      </p>
      <ul>
        <li><strong>Material:</strong> HgTe layer sandwiched between CdTe</li>
        <li><strong>Thickness dependence:</strong> d < d_c → trivial, d > d_c → topological</li>
        <li><strong>Critical thickness:</strong> d_c ≈ 6.3 nm</li>
        <li><strong>Measurement:</strong> 4-terminal resistance shows quantized conductance</li>
        <li><strong>Temperature:</strong> Observable up to ~10K</li>
      </ul>

      <h4>Bi₂Se₃ Family (2009+)</h4>
      <p>
        3D strong topological insulators:
      </p>
      <ul>
        <li><strong>Materials:</strong> Bi₂Se₃, Bi₂Te₃, Sb₂Te₃</li>
        <li><strong>Bulk gap:</strong> ~0.3 eV (large!)</li>
        <li><strong>Surface states:</strong> Single Dirac cone at Γ point</li>
        <li><strong>ARPES:</strong> Direct observation of surface Dirac fermions</li>
        <li><strong>Spin texture:</strong> Spin-momentum locking verified by spin-resolved ARPES</li>
        <li><strong>Applications:</strong> Spintronics, quantum computing</li>
      </ul>

      <h4>Measurement Techniques</h4>
      <ul>
        <li><strong>ARPES:</strong> Maps surface band structure</li>
        <li><strong>STM:</strong> Real-space imaging of surface states</li>
        <li><strong>Transport:</strong> Conductance quantization</li>
        <li><strong>Optical:</strong> Circular dichroism reveals spin texture</li>
      </ul>
    </div>

    <h2>Edge State Effective Theory</h2>

    <div class="info-box">
      <h3>1+1D Helical Fermion Theory</h3>
      <p>
        The edge of 2D QSH is described by:
      </p>
      <div class="equation">
        H_{edge} = ∫ dx ψ†(x) (-iℏv_F σ^z ∂_x) ψ(x)
      </div>
      <p>
        where ψ = (ψ_↑, ψ_↓)^T and σ^z is Pauli matrix.
      </p>

      <h4>Mode Structure</h4>
      <ul>
        <li>Right-moving: ψ_↑(x)e^{ikx}, k > 0</li>
        <li>Left-moving: ψ_↓(x)e^{-ikx}, k > 0</li>
        <li>Opposite spin for opposite directions</li>
      </ul>

      <h4>Forbidden Perturbations</h4>
      <p>
        Terms that would gap the edge:
      </p>
      <ul>
        <li><strong>Mass term:</strong> m ψ† σ^x ψ (breaks T-reversal)</li>
        <li><strong>Backscattering:</strong> ψ†_↑ ψ_↓ + h.c. (breaks T-reversal)</li>
        <li><strong>Conclusion:</strong> Edge remains gapless as long as T is preserved</li>
      </ul>
    </div>

    <h2>Connection to MPS and Cohomology</h2>

    <div class="highlight-box">
      <h4>MPS with Anti-Unitary Symmetry</h4>
      <p>
        For time-reversal symmetric MPS:
      </p>
      <div class="equation">
        T A^s T⁻¹ = ∑_t V^T_{st} A^t*
      </div>
      <p>
        where * denotes complex conjugation and V^T is T action on physical index.
      </p>

      <h4>Projective Representation</h4>
      <p>
        Virtual symmetry action u_T satisfies:
      </p>
      <div class="equation">
        u_T u_T = ω u_{T²}
      </div>
      <p>
        where:
      </p>
      <ul>
        <li><strong>ω = +1:</strong> Trivial cocycle (T² = +1 case)</li>
        <li><strong>ω = -1:</strong> Non-trivial cocycle (T² = -1 case)</li>
      </ul>
      <p>
        The sign of ω determines the SPT phase!
      </p>
    </div>

    <h2>Applications and Future Directions</h2>

    <div class="info-box">
      <h3>Current Applications</h3>
      <ul>
        <li><strong>Spintronics:</strong> Spin-Hall effect devices, spin filters</li>
        <li><strong>Quantum computing:</strong> Topological qubits with time-reversal</li>
        <li><strong>Thermoelectrics:</strong> Enhanced figure of merit from surface states</li>
        <li><strong>Optoelectronics:</strong> TI-based photodetectors</li>
      </ul>

      <h3>Open Questions</h3>
      <ul>
        <li>Higher-order TI with time-reversal (corner/hinge states)</li>
        <li>Interaction effects in TI edge states</li>
        <li>Magnetic TI (broken T, ferromagnetic order + topology)</li>
        <li>Floquet TI (periodically driven time-reversal SPT)</li>
        <li>Many-body localization in TI edges</li>
      </ul>

      <h3>Materials Discovery</h3>
      <p>
        Ongoing search for:
      </p>
      <ul>
        <li>Room-temperature topological insulators</li>
        <li>Magnetic topological insulators</li>
        <li>Topological semimetals with T-reversal</li>
        <li>Correlated topological insulators</li>
      </ul>
    </div>

    <p>
      Time-reversal symmetry provides crucial protection for topological insulators and enables dissipationless edge transport. The T² = ±1 distinction leads to fundamentally different physics: bosonic SPT (T²=+1) with Haldane-like phases, and fermionic SPT (T²=-1) with Kramers pairs and helical edge states. This classification via modified cohomology theory has become a cornerstone of modern condensed matter physics.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_2_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
