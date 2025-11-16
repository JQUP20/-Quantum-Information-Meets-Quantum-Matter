<template>
  <div class="section-content">
    <h1>10.3.5 Fermion Number Conservation (U(1) Charge)</h1>

    <p>
      When fermions conserve <strong>total particle number</strong> (U(1) charge symmetry), we enter a fundamentally different regime from parity-only systems. This corresponds to <strong>class A</strong> in the Altland-Zirnbauer classification. In 1D, the classification is <strong>ℤ</strong>—an infinite tower of phases labeled by the <strong>Chern number</strong>, directly connected to the integer quantum Hall effect and chiral edge modes.
    </p>

    <h2>U(1) Charge Symmetry</h2>

    <div class="info-box">
      <h3>Definition and Properties</h3>
      <p>
        U(1) charge (particle number) symmetry:
      </p>
      <div class="equation">
        U(θ) = exp(iθ ∑_j c^†_j c_j) = exp(iθ N)
      </div>
      <p>
        where N = ∑_j n_j is total fermion number.
      </p>

      <h4>Conservation Law</h4>
      <p>
        [H, N] = 0 implies:
      </p>
      <ul>
        <li>Total fermion number N conserved</li>
        <li>Each eigenstate has definite particle number</li>
        <li>Hilbert space decomposes: ℋ = ⨁_N ℋ_N</li>
      </ul>

      <h4>Contrast with Fermion Parity</h4>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Parity ℤ₂</th>
            <th>U(1) Charge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Symmetry group</td>
            <td>ℤ₂ = {0, 1}</td>
            <td>U(1) (continuous)</td>
          </tr>
          <tr>
            <td>Conserved quantity</td>
            <td>N mod 2</td>
            <td>N (exact integer)</td>
          </tr>
          <tr>
            <td>Pairing terms</td>
            <td>Allowed (cc + h.c.)</td>
            <td>Forbidden</td>
          </tr>
          <tr>
            <td>1D classification</td>
            <td>ℤ₈</td>
            <td>ℤ</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="highlight-box">
      <h4>Physical Consequences</h4>
      <p>
        U(1) conservation forbids:
      </p>
      <ul>
        <li><strong>Superconducting pairing:</strong> No Δ(c_j c_{j+1} + h.c.) terms</li>
        <li><strong>Particle-hole mixing:</strong> BdG formalism not needed</li>
        <li><strong>Majorana fermions:</strong> Cannot exist (require parity only)</li>
      </ul>
      <p>
        Instead, topological phases manifest through:
      </p>
      <ul>
        <li>Chiral edge modes</li>
        <li>Quantized Hall conductance</li>
        <li>Berry phase and Chern numbers</li>
      </ul>
    </div>

    <h2>Class A: ℤ Classification via Chern Number</h2>

    <div class="info-box">
      <h3>Topological Invariant: Chern Number</h3>
      <p>
        For 2D system with U(1) symmetry, topological invariant is <strong>Chern number</strong>:
      </p>
      <div class="equation">
        C = (1/2π) ∫_{BZ} F_{xy}(k) d²k
      </div>
      <p>
        where F_{xy} is Berry curvature:
      </p>
      <div class="equation">
        F_{xy}(k) = ∂_{k_x} A_y(k) - ∂_{k_y} A_x(k)
      </div>
      <p>
        and A_μ(k) = i⟨u(k)|∂_{k_μ}|u(k)⟩ is Berry connection.
      </p>

      <h4>Integer Quantization</h4>
      <p>
        Chern number is <strong>topological invariant</strong>:
      </p>
      <div class="equation">
        C ∈ ℤ
      </div>
      <p>
        Cannot change under continuous deformations that preserve:
      </p>
      <ul>
        <li>Energy gap</li>
        <li>U(1) symmetry</li>
        <li>Periodic boundary conditions</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Physical Interpretation</h4>
      <p>
        Chern number C counts:
      </p>
      <ul>
        <li><strong>Number of chiral edge modes:</strong> C right-moving modes (or |C| left-moving if C&lt;0)</li>
        <li><strong>Hall conductance:</strong> σ_xy = C e²/h (quantized!)</li>
        <li><strong>Topological charge:</strong> Winding of Bloch wavefunctions over BZ</li>
      </ul>

      <h4>Bulk-Boundary Correspondence</h4>
      <p>
        For system with Chern number C:
      </p>
      <ul>
        <li>Bulk: Gapped, C-fold degenerate ground state (on torus)</li>
        <li>Edge: C gapless chiral fermion modes</li>
        <li>Chirality: All modes move in same direction (right for C&gt;0)</li>
      </ul>
    </div>

    <h2>Integer Quantum Hall Effect (IQHE)</h2>

    <div class="info-box">
      <h3>Paradigmatic Example of Class A</h3>
      <p>
        The integer quantum Hall effect is the canonical realization of class A topological phase.
      </p>

      <h4>Physical Setup</h4>
      <ul>
        <li>2D electron gas in perpendicular magnetic field B</li>
        <li>Landau levels form: E_n = ℏω_c(n + 1/2), ω_c = eB/m</li>
        <li>Chemical potential in gap between levels</li>
      </ul>

      <h4>Hall Conductance</h4>
      <p>
        When ν Landau levels are filled:
      </p>
      <div class="equation">
        σ_{xy} = ν e²/h,  ν ∈ ℤ
      </div>
      <p>
        Quantization precise to 1 part in 10⁹!
      </p>

      <h4>Chern Number</h4>
      <p>
        Each filled Landau level contributes C=1:
      </p>
      <div class="equation">
        C_{total} = ∑_{n=0}^{ν-1} C_n = ν
      </div>
    </div>

    <div class="highlight-box">
      <h4>Edge States</h4>
      <p>
        On sample boundary:
      </p>
      <ul>
        <li><strong>ν chiral edge modes</strong> (skipping orbits at boundary)</li>
        <li><strong>Velocity:</strong> v = E×B drift → all move same direction</li>
        <li><strong>Dispersion:</strong> Linear E(k) = ℏv_F k</li>
        <li><strong>Robustness:</strong> Backscattering forbidden (no counterpropagating modes)</li>
      </ul>

      <h4>TKNN Formula</h4>
      <p>
        Thouless-Kohmoto-Nightingale-den Nijs (1982):
      </p>
      <div class="equation">
        σ_{xy} = (e²/h) C = (e²/2πℏ) ∫_{BZ} Ω(k) d²k
      </div>
      <p>
        where Ω(k) = ε_{αβ} ∂_{k_α}⟨u|∂_{k_β}|u⟩.
      </p>
      <p>
        This connects topology (Chern number) to transport (Hall conductance).
      </p>
    </div>

    <h2>1D Perspective: Thouless Charge Pump</h2>

    <div class="info-box">
      <h3>Dimensional Reduction to 1D</h3>
      <p>
        Consider 2D IQHE with translation invariance in y-direction:
      </p>
      <ul>
        <li>System is effectively 1D in x, parametrized by k_y</li>
        <li>k_y plays role of "time" in pumping cycle</li>
        <li>As k_y: 0 → 2π, particles pumped across system</li>
      </ul>

      <h4>Thouless Pump</h4>
      <p>
        1D system with time-periodic Hamiltonian H(t+T) = H(t):
      </p>
      <div class="equation">
        H(t) = H(k_y = 2πt/T)
      </div>
      <p>
        Over one cycle t: 0 → T:
      </p>
      <ul>
        <li>Charge Q = C×e pumped from left to right</li>
        <li>C is Chern number of H(t) viewed as 2D system in (x,t)</li>
      </ul>

      <h4>Rice-Mele Model</h4>
      <p>
        Simplest 1D pump model:
      </p>
      <div class="equation">
        H(t) = -∑_j [t(1+δcos(ωt)) c^†_j c_{j+1} + Δcos(ωt+φ) c^†_{A,j} c_{B,j} + h.c.]
      </div>
      <p>
        Parameters (δ, φ) control topological pumping.
      </p>
    </div>

    <div class="highlight-box">
      <h4>1D Chern Number Formula</h4>
      <p>
        For 1D system periodic in both k and t:
      </p>
      <div class="equation">
        C = (1/2πi) ∫_0^{2π} dk ∫_0^T dt  F_{kt}
      </div>
      <p>
        where F_{kt} = ∂_k A_t - ∂_t A_k.
      </p>

      <h4>Quantized Pumping</h4>
      <div class="equation">
        ΔQ = C × e  (per cycle)
      </div>
      <p>
        This is 1D analog of IQHE Hall conductance!
      </p>
    </div>

    <h2>Free Fermion Hamiltonian and Band Topology</h2>

    <div class="info-box">
      <h3>General Free Fermion Form</h3>
      <p>
        Non-interacting fermions with U(1) symmetry:
      </p>
      <div class="equation">
        H = ∑_{k,αβ} h_{αβ}(k) c^†_{k,α} c_{k,β}
      </div>
      <p>
        where α,β label orbitals/bands, h(k) is Hermitian matrix.
      </p>

      <h4>Band Structure</h4>
      <p>
        Diagonalize h(k):
      </p>
      <div class="equation">
        h(k) = ∑_n ε_n(k) |u_n(k)⟩⟨u_n(k)|
      </div>
      <p>
        Assume gap between occupied and empty bands.
      </p>

      <h4>Projector to Occupied Bands</h4>
      <div class="equation">
        P(k) = ∑_{n∈occ} |u_n(k)⟩⟨u_n(k)|
      </div>
      <p>
        Topological properties encoded in how P(k) varies over BZ.
      </p>
    </div>

    <div class="highlight-box">
      <h4>Chern Number from Projector</h4>
      <p>
        Alternative formula:
      </p>
      <div class="equation">
        C = (1/2πi) ∫_{BZ} Tr[P(∂_x P)(∂_y P) - P(∂_y P)(∂_x P)] d²k
      </div>

      <h4>Connection to K-Theory</h4>
      <p>
        The projector P(k) defines:
      </p>
      <ul>
        <li>Vector bundle over Brillouin zone (torus T²)</li>
        <li>Chern number = first Chern class c₁</li>
        <li>Classification: K⁰(T²) = ℤ</li>
      </ul>
      <p>
        This is the K-theoretic origin of ℤ classification!
      </p>
    </div>

    <h2>Model Example: Haldane Model</h2>

    <div class="info-box">
      <h3>Chern Insulator without Magnetic Field</h3>
      <p>
        Haldane (1988) proposed model realizing IQHE without external magnetic field:
      </p>
      <div class="equation">
        H = -t₁ ∑_{⟨ij⟩} c^†_i c_j - t₂ ∑_{⟨⟨ij⟩⟩} e^{iφ_{ij}} c^†_i c_j + M ∑_i ξ_i c^†_i c_i
      </div>

      <h4>Ingredients</h4>
      <ul>
        <li><strong>t₁:</strong> Nearest-neighbor hopping (honeycomb lattice)</li>
        <li><strong>t₂ e^{iφ}:</strong> Next-nearest-neighbor with complex phase</li>
        <li><strong>M:</strong> Staggered sublattice potential</li>
      </ul>

      <h4>Symmetry Breaking</h4>
      <p>
        Complex hopping phase breaks:
      </p>
      <ul>
        <li>Time-reversal symmetry (T²=-1)</li>
        <li>But preserves U(1) charge</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Phase Diagram</h4>
      <p>
        Topological phase transition at:
      </p>
      <div class="equation">
        |M| = 3√3 t₂ |sin φ|
      </div>

      <h4>Chern Number</h4>
      <ul>
        <li>Trivial phase: C = 0</li>
        <li>Topological phase: C = ±1 (sign depends on parameters)</li>
      </ul>

      <h4>Experimental Realization</h4>
      <ul>
        <li><strong>Photonic crystals:</strong> Laser-written waveguides (2013)</li>
        <li><strong>Cold atoms:</strong> Optical lattices with Raman coupling</li>
        <li><strong>Mechanical:</strong> Coupled gyroscopes on honeycomb lattice</li>
      </ul>
    </div>

    <h2>Higher Chern Numbers: C > 1</h2>

    <div class="info-box">
      <h3>Multi-Band Systems</h3>
      <p>
        To realize |C| > 1, need multiple bands:
      </p>

      <h4>Stacking</h4>
      <p>
        C bands with C_n=1 each:
      </p>
      <div class="equation">
        C_{total} = ∑_{n=1}^C C_n = C
      </div>

      <h4>Examples</h4>
      <ul>
        <li><strong>IQHE at ν=2:</strong> Two filled Landau levels → C=2</li>
        <li><strong>Multi-orbital models:</strong> Lattice with multiple orbitals per site</li>
        <li><strong>Hofstadter model:</strong> Tight-binding in magnetic field, C up to order B</li>
      </ul>

      <h4>Inverse</h4>
      <p>
        Negative Chern number C&lt;0:
      </p>
      <ul>
        <li>Corresponds to left-moving (instead of right-moving) edge modes</li>
        <li>Hall conductance σ_xy = C e²/h is negative</li>
        <li>Related to C&gt;0 by time-reversal or reversal of B</li>
      </ul>
    </div>

    <div class="highlight-box">
      <h4>Group Structure</h4>
      <p>
        Class A phases form additive group:
      </p>
      <div class="equation">
        Phase_{C_1} ⊕ Phase_{C_2} = Phase_{C_1+C_2}
      </div>
      <p>
        This is group ℤ (integers under addition).
      </p>

      <h4>Generators</h4>
      <ul>
        <li>C=+1: Right-moving chiral mode (generator)</li>
        <li>C=-1: Left-moving chiral mode (inverse)</li>
        <li>All phases obtained by stacking: Phase_C = Phase_1^{⊕C}</li>
      </ul>
    </div>

    <h2>Edge Theory and Chiral Anomaly</h2>

    <div class="info-box">
      <h3>1+1D Chiral Fermion</h3>
      <p>
        Edge of C=1 phase described by:
      </p>
      <div class="equation">
        S = ∫ dt dx  ψ^†(i∂_t + v_F ∂_x)ψ
      </div>
      <p>
        This is <strong>chiral fermion</strong>: right-moving only.
      </p>

      <h4>Anomaly</h4>
      <p>
        1+1D chiral fermion has <strong>gauge anomaly</strong>:
      </p>
      <ul>
        <li>Cannot be regularized in purely 1+1D</li>
        <li>U(1) current not conserved: ∂_μ j^μ ∝ F_{xy}</li>
        <li>Requires 2+1D bulk to "cancel" anomaly</li>
      </ul>

      <h4>Anomaly Inflow</h4>
      <p>
        Bulk Chern-Simons term:
      </p>
      <div class="equation">
        S_{CS} = (C/4π) ∫ A ∧ dA
      </div>
      <p>
        Exactly cancels edge anomaly → consistent theory!
      </p>
    </div>

    <div class="highlight-box">
      <h4>Bulk-Boundary Correspondence</h4>
      <p>
        Hierarchy for C=1:
      </p>
      <div class="equation">
        2D bulk (C=1) ↔ 1D chiral edge (anomaly C)
      </div>

      <h4>Relation to IQHE</h4>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Bulk</th>
            <th>Edge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dimension</td>
            <td>2D</td>
            <td>1D</td>
          </tr>
          <tr>
            <td>Gap</td>
            <td>Gapped (Δ > 0)</td>
            <td>Gapless (linear dispersion)</td>
          </tr>
          <tr>
            <td>Topology</td>
            <td>Chern number C</td>
            <td>C chiral modes</td>
          </tr>
          <tr>
            <td>Transport</td>
            <td>σ_xy = Ce²/h</td>
            <td>G = Ce²/h</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Comparison with Other Classes</h2>

    <div class="comparison-box">
      <h3>Fermion SPT: Symmetry Classes in 1D</h3>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Symmetry</th>
            <th>Classification</th>
            <th>Edge Modes</th>
            <th>Physical System</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>D</td>
            <td>Parity only</td>
            <td>ℤ₈</td>
            <td>n Majoranas (n mod 8)</td>
            <td>Kitaev chain</td>
          </tr>
          <tr>
            <td>BDI</td>
            <td>Parity + T (T²=+1)</td>
            <td>ℤ</td>
            <td>ν Majoranas</td>
            <td>Spinless TSC</td>
          </tr>
          <tr>
            <td>DIII</td>
            <td>Parity + T (T²=-1)</td>
            <td>ℤ₂</td>
            <td>Kramers pair</td>
            <td>Spinful TSC</td>
          </tr>
          <tr>
            <td>A</td>
            <td>U(1) charge</td>
            <td>ℤ</td>
            <td>ν chiral fermions</td>
            <td>IQHE edge, Thouless pump</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Experimental Platforms</h2>

    <div class="info-box">
      <h3>Realizations of Class A Topological Phases</h3>

      <h4>1. Quantum Hall Systems</h4>
      <ul>
        <li><strong>2DEG in GaAs/AlGaAs:</strong> T~1K, B~10T → ν=1,2,3,...</li>
        <li><strong>Graphene:</strong> Room temperature QHE, anomalous ν=±2,±6,...</li>
        <li><strong>Detection:</strong> Hall resistance R_xy = h/(νe²), longitudinal R_xx → 0</li>
      </ul>

      <h4>2. Topological Photonics</h4>
      <ul>
        <li><strong>Photonic crystals:</strong> Haldane model with waveguides</li>
        <li><strong>Edge modes:</strong> Unidirectional light propagation</li>
        <li><strong>Robustness:</strong> Immune to backscattering from defects</li>
      </ul>

      <h4>3. Cold Atoms</h4>
      <ul>
        <li><strong>Optical lattice:</strong> Simulate Hofstadter model with synthetic gauge fields</li>
        <li><strong>Chern number:</strong> Measured via center-of-mass drift</li>
        <li><strong>Edge states:</strong> Detected via in-situ imaging</li>
      </ul>

      <h4>4. Mechanical Metamaterials</h4>
      <ul>
        <li><strong>Coupled rotors:</strong> Honeycomb lattice with gyroscopes</li>
        <li><strong>Chiral phonons:</strong> Unidirectional edge vibrations</li>
        <li><strong>Measurement:</strong> Direct mechanical displacement</li>
      </ul>
    </div>

    <h2>Applications</h2>

    <div class="highlight-box">
      <h4>Metrology: Resistance Standard</h4>
      <p>
        IQHE provides fundamental resistance standard:
      </p>
      <div class="equation">
        R_K = h/e² = 25812.807... Ω  (von Klitzing constant)
      </div>
      <p>
        Accurate to 1 part in 10⁹, used for precision measurements worldwide.
      </p>

      <h4>Topological Protection in Devices</h4>
      <ul>
        <li><strong>Robust waveguides:</strong> Photonic topological insulators for optical circuits</li>
        <li><strong>Delay lines:</strong> Slow light in topological photonic crystals</li>
        <li><strong>Quantum computing:</strong> Chiral edge channels for quantum information transport</li>
      </ul>

      <h4>Fundamental Physics</h4>
      <ul>
        <li><strong>Berry phase:</strong> Geometric phase in quantum mechanics</li>
        <li><strong>Chern-Simons theory:</strong> Connection to 3D topological field theory</li>
        <li><strong>Anomalies:</strong> Edge chiral anomaly canceled by bulk</li>
      </ul>
    </div>

    <h2>Summary</h2>

    <div class="highlight-box">
      <h4>Key Takeaways</h4>
      <ul>
        <li><strong>Class A:</strong> Fermions with U(1) charge conservation (no pairing)</li>
        <li><strong>Classification:</strong> ℤ via Chern number C</li>
        <li><strong>Topological invariant:</strong> C = (1/2π) ∫ F_{xy} d²k (Berry curvature integral)</li>
        <li><strong>Edge modes:</strong> C chiral fermions (unidirectional)</li>
        <li><strong>Hall conductance:</strong> σ_xy = C e²/h (quantized)</li>
        <li><strong>Physical realization:</strong> Integer quantum Hall effect (ν=C)</li>
        <li><strong>1D analog:</strong> Thouless charge pump (quantized pumping)</li>
        <li><strong>Chern insulator:</strong> IQHE without magnetic field (Haldane model)</li>
      </ul>

      <h4>Conceptual Importance</h4>
      <p>
        Class A (U(1) charge conservation) represents the "simplest" fermionic SPT from a theoretical perspective, yet leads to one of the most profound phenomena in physics—the integer quantum Hall effect. It demonstrates:
      </p>
      <ul>
        <li><strong>Topology → Quantization:</strong> Chern number (topology) → Hall conductance (measurable quantity)</li>
        <li><strong>Bulk-edge correspondence:</strong> Perfect matching between bulk topology and edge physics</li>
        <li><strong>Chiral anomaly:</strong> Edge theory is inherently 2D, cannot exist in isolation in 1D</li>
        <li><strong>Robustness:</strong> Quantization precise to 10⁻⁹, used as resistance standard</li>
      </ul>
      <p>
        The ℤ classification via Chern numbers is the foundation for understanding not only IQHE, but also Chern insulators, topological photonics, and the broader landscape of topological band theory.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_3_5'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
