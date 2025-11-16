<template>
  <div class="section-content">
    <h1>10.1 Introduction</h1>

    <p>
      Symmetry Protected Topological (SPT) phases represent one of the most profound discoveries in condensed matter physics of the 21st century. Unlike conventional phases distinguished by symmetry breaking and local order parameters, or topologically ordered phases with anyonic excitations, SPT phases occupy a unique middle ground: they are short-range entangled like trivial phases, yet possess nontrivial topological characteristics protected by global symmetries.
    </p>

    <h2>What are SPT Phases?</h2>

    <div class="info-box">
      <h3>Defining Characteristics</h3>
      <p>
        An SPT phase is a gapped quantum phase with the following properties:
      </p>
      <ul>
        <li><strong>Short-range entanglement (SRE):</strong> Entanglement entropy follows area law without topological correction (γ = 0)</li>
        <li><strong>Unique ground state:</strong> On closed manifolds, ground state degeneracy = 1 (no intrinsic topological order)</li>
        <li><strong>Symmetry protection:</strong> Cannot be continuously connected to trivial product state without breaking symmetry or closing the gap</li>
        <li><strong>Edge/boundary modes:</strong> Gapless or degenerate boundary states as long as symmetry is preserved</li>
        <li><strong>Robust under perturbations:</strong> Protected against symmetric local perturbations</li>
      </ul>
    </div>

    <h2>Historical Context</h2>

    <div class="highlight-box">
      <h4>The Discovery of SPT Physics</h4>
      <p>
        <strong>1983:</strong> Haldane's conjecture - Integer spin chains gapped, half-integer gapless
      </p>
      <p>
        <strong>1988-1989:</strong> Experimental confirmation of Haldane gap in NENP compounds
      </p>
      <p>
        <strong>2005:</strong> Kane & Mele, Bernevig & Zhang - Discovery of 2D topological insulators (quantum spin Hall effect)
      </p>
      <p>
        <strong>2007:</strong> 3D topological insulators (Bi₂Se₃, Bi₂Te₃) predicted and observed
      </p>
      <p>
        <strong>2008:</strong> Gu & Wen - General classification of SPT phases via group cohomology
      </p>
      <p>
        <strong>2010-present:</strong> Explosion of SPT research - floquet SPT, higher-order SPT, crystalline SPT
      </p>
    </div>

    <h2>SPT vs. Other Phases</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Trivial Phase</th>
            <th>SPT Phase</th>
            <th>Topological Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Entanglement</td>
            <td>Short-range (SRE)</td>
            <td>Short-range (SRE)</td>
            <td>Long-range (LRE)</td>
          </tr>
          <tr>
            <td>GSD (closed)</td>
            <td>1</td>
            <td>1</td>
            <td>> 1 (topology-dependent)</td>
          </tr>
          <tr>
            <td>Edge states</td>
            <td>Gappable</td>
            <td>Gapless (if symmetric)</td>
            <td>Chiral/anyonic</td>
          </tr>
          <tr>
            <td>Symmetry required</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Anyonic excitations</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>γ (TEE)</td>
            <td>0</td>
            <td>0</td>
            <td>> 0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Prototypical Examples</h2>

    <div class="info-box">
      <h3>1D SPT: Spin-1 Haldane Chain</h3>
      <p>
        <strong>Hamiltonian:</strong>
      </p>
      <div class="equation">
        H = J ∑_i S⃗_i · S⃗_{i+1}  (J > 0, antiferromagnetic)
      </div>
      <p>
        <strong>Properties:</strong>
      </p>
      <ul>
        <li>Ground state: Unique, gapped (Δ ≈ 0.41J)</li>
        <li>Symmetry: SO(3) rotation or (ℤ₂ × ℤ₂)_time-reversal</li>
        <li>Edge modes: Spin-1/2 degrees of freedom at each end</li>
        <li>Cannot be adiabatically connected to product state |↑↑↑...⟩ without breaking symmetry</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>2D SPT: Quantum Spin Hall Insulator</h3>
      <p>
        Topological insulator with time-reversal symmetry T² = -1:
      </p>
      <ul>
        <li>Bulk: Insulating, unique ground state</li>
        <li>Edge: Helical Dirac fermions (spin-momentum locked)</li>
        <li>Protected by time-reversal: Backscattering forbidden</li>
        <li>ℤ₂ topological invariant (Kane-Mele)</li>
      </ul>
    </div>

    <div class="info-box">
      <h3>3D SPT: Topological Insulator</h3>
      <p>
        3D topological insulator (Bi₂Se₃):
      </p>
      <ul>
        <li>Bulk: 3D insulator with gap ~0.3 eV</li>
        <li>Surface: 2D massless Dirac fermions</li>
        <li>Protected by time-reversal T² = -1</li>
        <li>4 ℤ₂ topological invariants (Fu-Kane-Mele)</li>
        <li>Applications: Spintronics, quantum computing</li>
      </ul>
    </div>

    <h2>Why SPT Phases Matter</h2>

    <div class="highlight-box">
      <h4>Scientific Significance</h4>
      <ul>
        <li><strong>Fundamental physics:</strong> New paradigm beyond Landau symmetry-breaking</li>
        <li><strong>Topology in condensed matter:</strong> Mathematical topology meets experimental physics</li>
        <li><strong>Classification program:</strong> Complete understanding via group cohomology H^{d+1}(G,U(1))</li>
        <li><strong>Bridge to math:</strong> Deep connections to algebraic topology, K-theory, differential geometry</li>
      </ul>

      <h4>Technological Applications</h4>
      <ul>
        <li><strong>Spintronics:</strong> Dissipationless edge transport</li>
        <li><strong>Quantum computing:</strong> Topological protection of quantum information</li>
        <li><strong>Thermoelectrics:</strong> Surface states with unusual transport properties</li>
        <li><strong>Novel materials:</strong> Designer quantum materials with engineered symmetries</li>
      </ul>
    </div>

    <h2>Classification Hierarchy</h2>

    <div class="info-box">
      <h3>SPT Phases Organize by Symmetry and Dimension</h3>
      <p>
        For a given symmetry group G in d spatial dimensions, bosonic SPT phases are classified by:
      </p>
      <div class="equation">
        H^{d+1}(G, U(1))
      </div>
      <p>
        <strong>Examples:</strong>
      </p>
      <ul>
        <li><strong>d=1, G=ℤ₂:</strong> H²(ℤ₂,U(1)) = ℤ₂ → 2 phases (trivial + Haldane-like)</li>
        <li><strong>d=1, G=U(1):</strong> H²(U(1),U(1)) = ℤ → ∞ phases (integer quantum Hall analog)</li>
        <li><strong>d=2, G=ℤ₂^T (time-reversal):</strong> ℤ₂ → quantum spin Hall</li>
        <li><strong>d=3, G=ℤ₂^T:</strong> (ℤ₂)⁴ → 16 phases, strong + 3 weak TI</li>
      </ul>
    </div>

    <h2>Chapter Organization</h2>

    <div class="info-box">
      <h3>Structure of Chapter 10</h3>
      <ol>
        <li><strong>Section 10.2:</strong> 1D bosonic SPT phases - complete classification using MPS, group cohomology</li>
        <li><strong>Section 10.3:</strong> 1D fermionic SPT phases - role of fermion parity, Majorana modes</li>
        <li><strong>Section 10.4:</strong> 2D SPT phases - AKLT model, CZX model, edge theories</li>
        <li><strong>Section 10.5:</strong> General construction - group cohomology, cocycle conditions, fixed-point models</li>
        <li><strong>Section 10.6:</strong> Summary - open questions, generalizations (crystalline, higher-order, Floquet SPT)</li>
      </ol>
    </div>

    <h2>Key Concepts Preview</h2>

    <div class="highlight-box">
      <h4>Mathematical Tools</h4>
      <ul>
        <li><strong>Group cohomology:</strong> H^n(G,U(1)) classifies n-dimensional SPT with symmetry G</li>
        <li><strong>Cocycle conditions:</strong> Functions ω(g₁,g₂,...) satisfying consistency relations</li>
        <li><strong>Matrix Product States:</strong> Efficient representation encoding symmetry structure</li>
        <li><strong>Edge theories:</strong> Conformal field theories protected by symmetry</li>
      </ul>

      <h4>Physical Probes</h4>
      <ul>
        <li><strong>Entanglement spectrum:</strong> Reveals edge state structure</li>
        <li><strong>String order parameters:</strong> Non-local detectors of SPT order</li>
        <li><strong>Edge spectroscopy:</strong> Direct probe of protected boundary modes</li>
        <li><strong>Symmetry twists:</strong> Defects that distinguish SPT phases</li>
      </ul>
    </div>

    <p>
      With this foundation, we now dive into the detailed study of SPT phases, starting with the simplest case: 1D bosonic systems where the complete classification is known and intuitive.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
