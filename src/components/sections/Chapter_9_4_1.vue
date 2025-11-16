<template>
  <div class="section-content">
    <h1>9.4.1 Toric Code Model</h1>

    <p>
      The toric code, introduced by Kitaev in 1997, is the prototypical example of a 2D system with intrinsic topological order. As both a quantum error-correcting code and a model of topological phases, it provides the perfect platform for understanding PEPS representations of topologically ordered states.
    </p>

    <h2>Toric Code Hamiltonian</h2>

    <div class="info-box">
      <h3>Definition on Square Lattice</h3>
      <p>
        The toric code is defined on a square lattice with qubits on the edges. The Hamiltonian is:
      </p>
      <div class="equation">
        H = -∑_v A_v - ∑_p B_p
      </div>
      <p>
        where:
      </p>
      <ul>
        <li><strong>Vertex term:</strong> A_v = ∏_{edges around v} σ^x_e (star operator)</li>
        <li><strong>Plaquette term:</strong> B_p = ∏_{edges around p} σ^z_e (plaquette operator)</li>
      </ul>
      <p>
        <strong>Key properties:</strong>
      </p>
      <ul>
        <li>[A_v, A_{v'}] = 0 and [B_p, B_{p'}] = 0 (all terms commute)</li>
        <li>[A_v, B_p] = 0 (star and plaquette commute)</li>
        <li>Frustration-free: ground state satisfies A_v|ψ⟩ = |ψ⟩ and B_p|ψ⟩ = |ψ⟩ for all v, p</li>
      </ul>
    </div>

    <h2>Ground State Degeneracy</h2>

    <div class="highlight-box">
      <h4>Topological Degeneracy</h4>
      <p>
        On a torus (periodic boundary conditions), the toric code has:
      </p>
      <div class="equation">
        D = 4 = 2^{2g}
      </div>
      <p>
        where g = 1 is the genus (number of holes) of the torus.
      </p>
      <p>
        <strong>Physical origin:</strong>
      </p>
      <ul>
        <li>Two independent non-contractible loops (x and y directions)</li>
        <li>Each loop can have even or odd number of excitations</li>
        <li>Four sectors: (e: even-even, m: odd-odd, and two mixed)</li>
      </ul>
      <p>
        This degeneracy is <strong>robust</strong>—protected by topology, not symmetry.
      </p>
    </div>

    <h2>Anyonic Excitations</h2>

    <div class="info-box">
      <h3>Three Types of Quasiparticles</h3>
      <p>
        Violations of the ground state conditions create localized excitations:
      </p>
      <ul>
        <li><strong>e (electric charge):</strong> A_v|ψ⟩ = -|ψ⟩ at vertex v</li>
        <li><strong>m (magnetic flux):</strong> B_p|ψ⟩ = -|ψ⟩ at plaquette p</li>
        <li><strong>ε = e × m (fermion):</strong> Composite of e and m</li>
      </ul>
      <p>
        <strong>Anyonic statistics:</strong>
      </p>
      <ul>
        <li>Braiding e around m: Phase factor -1</li>
        <li>e and m are mutual semions</li>
        <li>ε behaves as a fermion</li>
      </ul>
    </div>

    <h3>Fusion Rules</h3>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Particle 1</th>
            <th>Particle 2</th>
            <th>Fusion Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 (vacuum)</td>
            <td>a</td>
            <td>a</td>
          </tr>
          <tr>
            <td>e</td>
            <td>e</td>
            <td>1</td>
          </tr>
          <tr>
            <td>m</td>
            <td>m</td>
            <td>1</td>
          </tr>
          <tr>
            <td>e</td>
            <td>m</td>
            <td>ε</td>
          </tr>
          <tr>
            <td>ε</td>
            <td>ε</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>PEPS Representation</h2>

    <div class="info-box">
      <h3>Exact PEPS with χ = 2</h3>
      <p>
        The toric code ground state can be exactly represented as a PEPS with bond dimension χ = 2.
      </p>
      <p>
        <strong>Construction:</strong>
      </p>
      <ol>
        <li>Vertices become physical sites (d = 2^4 = 16 for 4 edges)</li>
        <li>Virtual bonds carry ℤ₂ charge (0 or 1)</li>
        <li>Tensor enforces Gauss law: ∏_{edges} σ^x = +1 at each vertex</li>
      </ol>
      <p>
        Tensor structure:
      </p>
      <div class="equation">
        A^{i₁i₂i₃i₄}_{αβγδ} ≠ 0  iff  α + β + γ + δ + i₁ + i₂ + i₃ + i₄ = 0 (mod 2)
      </div>
      <p>
        where i₁, i₂, i₃, i₄ label the four edge spins and α,β,γ,δ are virtual ℤ₂ charges.
      </p>
    </div>

    <h2>String Operators</h2>

    <div class="highlight-box">
      <h4>Creating and Moving Anyons</h4>
      <p>
        <strong>Electric string:</strong> Creates e-ē pair, moves them apart
      </p>
      <div class="equation">
        W^x_{string} = ∏_{edges in string} σ^x_e
      </div>
      <p>
        <strong>Magnetic string:</strong> Creates m-m̄ pair, moves them apart
      </p>
      <div class="equation">
        W^z_{string} = ∏_{edges in string} σ^z_e
      </div>
      <p>
        <strong>Wilson loops:</strong> Closed strings detect topological sectors
      </p>
      <ul>
        <li>W^x around non-contractible loop: Distinguishes m-charge</li>
        <li>W^z around non-contractible loop: Distinguishes e-charge</li>
      </ul>
    </div>

    <h2>Relation to Quantum Error Correction</h2>

    <div class="info-box">
      <h3>Toric Code as Quantum Memory</h3>
      <p>
        The 4-fold ground state degeneracy encodes 2 logical qubits:
      </p>
      <ul>
        <li><strong>Logical Z₁:</strong> W^z around horizontal loop</li>
        <li><strong>Logical X₁:</strong> W^x around vertical loop</li>
        <li><strong>Logical Z₂, X₂:</strong> Independent pair for second qubit</li>
      </ul>
      <p>
        <strong>Error correction:</strong>
      </p>
      <ul>
        <li>Bit flip (σ^x error): Creates e-ē pair</li>
        <li>Phase flip (σ^z error): Creates m-m̄ pair</li>
        <li>Syndrome measurement: Measure A_v and B_p</li>
        <li>Recovery: Apply minimum-weight string to annihilate pairs</li>
      </ul>
      <p>
        Distance d = L (system size), protecting against L/2 errors.
      </p>
    </div>

    <h2>Phase Diagram Under Perturbations</h2>

    <div class="highlight-box">
      <h4>Stability of Topological Order</h4>
      <p>
        Consider perturbed Hamiltonian:
      </p>
      <div class="equation">
        H = -∑_v A_v - ∑_p B_p - h∑_e σ^x_e
      </div>
      <p>
        <strong>Phases:</strong>
      </p>
      <ul>
        <li>h < h_c: Topological phase (4-fold degeneracy, anyons, gap)</li>
        <li>h = h_c: Quantum phase transition</li>
        <li>h > h_c: Trivial phase (unique ground state, no anyons)</li>
      </ul>
      <p>
        Critical field h_c ≈ 0.33 marks topological phase transition.
      </p>
    </div>

    <h2>Summary</h2>

    <div class="info-box">
      <h3>Key Properties of Toric Code</h3>
      <ul>
        <li><strong>Hamiltonian:</strong> H = -∑_v A_v - ∑_p B_p (frustration-free, exactly solvable)</li>
        <li><strong>Ground state:</strong> 4-fold degenerate on torus (topological)</li>
        <li><strong>Anyons:</strong> e, m, ε with non-trivial braiding statistics</li>
        <li><strong>Fusion rules:</strong> ℤ₂ × ℤ₂ quantum double</li>
        <li><strong>PEPS:</strong> Exact representation with χ = 2</li>
        <li><strong>String operators:</strong> W^x and W^z create/move anyons</li>
        <li><strong>Error correction:</strong> Encodes 2 logical qubits, distance d = L</li>
        <li><strong>Stability:</strong> Topological phase robust up to finite h_c</li>
      </ul>
    </div>

    <p>
      The toric code exemplifies how topological order manifests in PEPS. In the next sections, we'll explore the structural properties of topological PEPS in detail, revealing how anyonic statistics and topological degeneracy emerge from local tensor structure.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Chapter_9_4_1'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
