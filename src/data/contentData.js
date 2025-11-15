export const contentData = {
  "chapter1": {
    title: "Chapter 1: Correlation and Entanglement",
    content: `
      <h1>Chapter 1: Correlation and Entanglement</h1>

      <h2>1.1 Introduction</h2>
      <p>Quantum entanglement is one of the most striking features of quantum mechanics, distinguishing it fundamentally from classical physics. This chapter explores the nature of correlations in both classical and quantum systems, providing a foundation for understanding entanglement.</p>

      <p>The study of entanglement has evolved from a curious theoretical phenomenon to a central resource in quantum information science. It plays a crucial role in:</p>
      <ul>
        <li>Quantum computation and quantum algorithms</li>
        <li>Quantum communication and cryptography</li>
        <li>Understanding many-body quantum systems</li>
        <li>Characterizing quantum phases of matter</li>
      </ul>

      <h2>1.2 Correlations in Classical Probability Theory</h2>
      <p>Before diving into quantum entanglement, we first review classical correlations to establish a baseline for comparison.</p>

      <h3>1.2.1 Joint Probability Without Correlations</h3>
      <p>Consider two random variables A and B. In the absence of correlations, the joint probability distribution factorizes:</p>
      <div class="equation">P(A,B) = P(A) × P(B)</div>
      <p>This represents statistical independence, where knowledge of one variable provides no information about the other.</p>

      <h3>1.2.2 Correlation Functions</h3>
      <p>Correlation functions quantify the degree of statistical dependence between variables. For two random variables X and Y:</p>
      <div class="equation">C(X,Y) = ⟨XY⟩ - ⟨X⟩⟨Y⟩</div>
      <p>When C(X,Y) = 0, the variables are uncorrelated. Non-zero correlation indicates statistical dependence.</p>

      <h3>1.2.3 Mutual Information</h3>
      <p>Mutual information provides an information-theoretic measure of correlation:</p>
      <div class="equation">I(A:B) = H(A) + H(B) - H(A,B)</div>
      <p>where H denotes Shannon entropy. This quantifies how much information about one system can be obtained by measuring the other.</p>

      <h2>1.3 Quantum Entanglement</h2>
      <p>Quantum entanglement represents correlations that cannot be explained by classical probability theory.</p>

      <h3>1.3.1 Pure and Mixed Quantum States</h3>
      <p>Quantum states are described by density matrices ρ. A pure state satisfies ρ² = ρ (equivalently, Tr(ρ²) = 1), while mixed states have Tr(ρ²) < 1.</p>

      <h3>1.3.2 Composite Quantum Systems, Tensor Product Structure</h3>
      <p>For a bipartite system AB, the Hilbert space is H_AB = H_A ⊗ H_B. Not all states in this composite space can be written as product states.</p>

      <h3>1.3.3 Pure Bipartite State, Schmidt Decomposition</h3>
      <p>Any pure bipartite state |ψ⟩_AB can be written in Schmidt form:</p>
      <div class="equation">|ψ⟩ = Σᵢ √λᵢ |i⟩_A ⊗ |i⟩_B</div>
      <p>The Schmidt coefficients λᵢ characterize the entanglement structure.</p>

      <h3>1.3.5 Bell's Inequalities</h3>
      <p>Bell inequalities provide experimental tests to distinguish quantum entanglement from classical correlations. The CHSH inequality:</p>
      <div class="equation">|⟨A₁B₁⟩ + ⟨A₁B₂⟩ + ⟨A₂B₁⟩ - ⟨A₂B₂⟩| ≤ 2</div>
      <p>Quantum mechanics can violate this bound, reaching values up to 2√2.</p>

      <h2>1.4 Correlation and Entanglement in Many-Body Quantum Systems</h2>
      <p>Extending to many-body systems reveals richer structures of entanglement.</p>

      <h3>1.4.1 The GHZ Paradox</h3>
      <p>The Greenberger-Horne-Zeilinger (GHZ) state demonstrates even stronger violations of local realism than Bell states, showing that quantum mechanics and local hidden variable theories are fundamentally incompatible.</p>
    `
  },
  "chapter2": {
    title: "Chapter 2: Evolution of Quantum Systems",
    content: `
      <h1>Chapter 2: Evolution of Quantum Systems</h1>

      <h2>2.1 Introduction</h2>
      <p>Understanding how quantum systems evolve is fundamental to quantum information processing. This chapter covers both closed system evolution (unitary dynamics) and open system evolution (non-unitary dynamics).</p>

      <h2>2.2 Unitary Evolution</h2>
      <p>For closed quantum systems, time evolution is governed by the Schrödinger equation, leading to unitary transformations.</p>

      <h3>2.2.1 Single Qubit Unitary</h3>
      <p>Any single-qubit unitary can be decomposed as:</p>
      <div class="equation">U = e^(iα) R_z(β) R_y(γ) R_z(δ)</div>
      <p>This forms the basis for single-qubit quantum gates.</p>

      <h3>2.2.2 Two-Qubit Unitary</h3>
      <p>Two-qubit unitaries can create and manipulate entanglement. Important examples include:</p>
      <ul>
        <li>CNOT (Controlled-NOT) gate</li>
        <li>SWAP gate</li>
        <li>Controlled-phase gates</li>
      </ul>

      <h2>2.3 Quantum Circuits</h2>
      <p>Quantum circuits provide a framework for decomposing complex quantum operations into sequences of elementary gates. The universality of certain gate sets allows any unitary to be approximated to arbitrary precision.</p>

      <h2>2.4 Open Quantum Systems</h2>
      <p>Real quantum systems interact with their environment, leading to decoherence and dissipation. The dynamics of open systems requires going beyond unitary evolution.</p>

      <h2>2.5 Master Equation</h2>
      <h3>2.5.1 The Lindblad Form</h3>
      <p>The most general form of a Markovian master equation is the Lindblad equation:</p>
      <div class="equation">dρ/dt = -i[H,ρ] + Σₖ (Lₖ ρ L†ₖ - ½{L†ₖLₖ, ρ})</div>
      <p>where Lₖ are Lindblad operators describing the coupling to the environment.</p>
    `
  },
  "chapter3": {
    title: "Chapter 3: Quantum Error-Correcting Codes",
    content: `
      <h1>Chapter 3: Quantum Error-Correcting Codes</h1>

      <h2>3.1 Introduction</h2>
      <p>Quantum error correction is essential for building reliable quantum computers and understanding topological phases of matter. This chapter introduces the key concepts and constructions.</p>

      <h2>3.2 Basic Idea of Error Correction</h2>
      <h3>3.2.1 Bit Flip Code</h3>
      <p>The simplest quantum error-correcting code encodes one logical qubit into three physical qubits:</p>
      <div class="equation">|0⟩_L = |000⟩, |1⟩_L = |111⟩</div>
      <p>This can detect and correct a single bit-flip error on any one qubit.</p>

      <h3>3.2.2 Shor's Code</h3>
      <p>Shor's 9-qubit code can correct arbitrary single-qubit errors by combining bit-flip and phase-flip protection.</p>

      <h2>3.4 The Stabilizer Formalism</h2>
      <p>The stabilizer formalism provides a powerful framework for constructing and analyzing quantum error-correcting codes. A stabilizer code is defined by a commuting set of Pauli operators that "stabilize" the code space.</p>

      <h2>3.5 Toric Code</h2>
      <p>The toric code is a topological quantum error-correcting code defined on a 2D square lattice with periodic boundary conditions. It exhibits:</p>
      <ul>
        <li>Topological ground state degeneracy</li>
        <li>Anyonic excitations</li>
        <li>Robustness against local perturbations</li>
      </ul>
      <p>The toric code serves as a paradigmatic example connecting quantum error correction with topological order.</p>
    `
  },
  "chapter4": {
    title: "Chapter 4: Local Hamiltonians and Ground States",
    content: `
      <h1>Chapter 4: Local Hamiltonians and Ground States</h1>

      <h2>4.1 Introduction</h2>
      <p>Local Hamiltonians are the fundamental models for describing many-body quantum systems. Understanding their ground states is a central challenge in condensed matter physics and quantum information theory.</p>

      <h2>4.2 Many-Body Hilbert Space</h2>
      <p>For N qubits, the Hilbert space dimension is 2^N, leading to an exponential complexity that makes exact classical simulation intractable for large systems.</p>

      <h2>4.3 Local Hamiltonians</h2>
      <p>A k-local Hamiltonian can be written as:</p>
      <div class="equation">H = Σᵢ hᵢ</div>
      <p>where each term hᵢ acts non-trivially on at most k qubits.</p>

      <h3>4.3.1 Examples</h3>
      <ul>
        <li><strong>Ising Model:</strong> H = -Σᵢⱼ Jᵢⱼ σᶻᵢσᶻⱼ - Σᵢ hᵢσˣᵢ</li>
        <li><strong>Heisenberg Model:</strong> H = Σᵢⱼ Jᵢⱼ (σˣᵢσˣⱼ + σʸᵢσʸⱼ + σᶻᵢσᶻⱼ)</li>
      </ul>

      <h2>4.4 Ground-State Energy of Local Hamiltonians</h2>
      <h3>4.4.1 The Local Hamiltonian Problem</h3>
      <p>Determining the ground state energy of a k-local Hamiltonian is QMA-complete (quantum analog of NP-complete) for k ≥ 2.</p>

      <h2>4.5 Frustration-Free Hamiltonians</h2>
      <p>A Hamiltonian H = Σᵢ hᵢ is frustration-free if its ground state simultaneously minimizes each local term hᵢ. These systems are often more tractable analytically.</p>
    `
  },
  "chapter5": {
    title: "Chapter 5: Gapped Quantum Systems and Entanglement Area Law",
    content: `
      <h1>Chapter 5: Gapped Quantum Systems and Entanglement Area Law</h1>

      <h2>5.1 Introduction</h2>
      <p>Gapped quantum systems exhibit a fundamental property: their ground state entanglement follows an area law, with profound implications for both condensed matter physics and quantum information.</p>

      <h2>5.2 Quantum Many-Body Systems</h2>
      <h3>5.2.3 Gap</h3>
      <p>The spectral gap Δ is the energy difference between the ground state and first excited state:</p>
      <div class="equation">Δ = E₁ - E₀</div>
      <p>Gapped systems have Δ > 0 in the thermodynamic limit.</p>

      <h2>5.3 Entanglement Area Law in Gapped Systems</h2>
      <h3>5.3.1 Entanglement Area Law</h3>
      <p>For a region A with boundary ∂A, the entanglement entropy scales as:</p>
      <div class="equation">S(ρ_A) ∼ |∂A| - γ</div>
      <p>where |∂A| is the boundary area and γ is the topological entanglement entropy.</p>

      <h3>5.3.2 Topological Entanglement Entropy</h3>
      <p>The topological entanglement entropy γ is a universal constant that characterizes topological order. For a topologically ordered system with ground state degeneracy d on a torus:</p>
      <div class="equation">γ = log(d)</div>

      <h2>5.4 Generalizations of Topological Entanglement Entropy</h2>
      <h3>5.4.1 Quantum Conditional Mutual Information</h3>
      <p>The tripartite information provides a more refined measure:</p>
      <div class="equation">I(A:C|B) = S(AB) + S(BC) - S(B) - S(ABC)</div>
      <p>This quantity can detect non-trivial many-body entanglement and distinguish different phases.</p>
    `
  },
  "chapter6": {
    title: "Chapter 6: Introduction to Topological Order",
    content: `
      <h1>Chapter 6: Introduction to Topological Order</h1>

      <h2>6.1 Introduction</h2>
      <h3>6.1.1 Phases of Matter and Landau's Symmetry Breaking Theory</h3>
      <p>Landau's paradigm: phases of matter are distinguished by broken symmetries and characterized by local order parameters. However, topological phases transcend this framework.</p>

      <h3>6.1.2 Quantum Phases of Matter and Transverse-Field Ising Model</h3>
      <p>The transverse-field Ising model:</p>
      <div class="equation">H = -J Σᵢ σᶻᵢσᶻᵢ₊₁ - h Σᵢ σˣᵢ</div>
      <p>exhibits a quantum phase transition at h_c = J, separating ordered and disordered phases.</p>

      <h2>6.2 Topological Order</h2>
      <h3>6.2.1 The Discovery of Topological Order</h3>
      <p>Topological order was discovered in the context of the fractional quantum Hall effect. It represents a new paradigm for organizing quantum matter that cannot be understood within Landau's framework.</p>

      <h2>6.4 A Microscopic Picture of Topological Orders</h2>
      <h3>6.4.1 The Essence of Fractional Quantum Hall States</h3>
      <p>Key features:</p>
      <ul>
        <li>Topological ground state degeneracy on manifolds with non-trivial topology</li>
        <li>Fractionally charged quasiparticle excitations</li>
        <li>Fractional statistics (anyons)</li>
        <li>Robust edge states</li>
      </ul>

      <h2>6.9 Topological Excitations and String Operators</h2>
      <h3>6.9.1 Toric Code Model and String Condensation</h3>
      <p>The toric code Hamiltonian:</p>
      <div class="equation">H = -Σ_vertices A_v - Σ_plaquettes B_p</div>
      <p>where A_v = Πᵢ∈star(v) σˣᵢ and B_p = Πᵢ∈∂p σᶻᵢ</p>

      <h3>6.9.3 Three Types of Quasiparticles</h3>
      <ul>
        <li><strong>e (electric charge):</strong> Created by σˣ operators</li>
        <li><strong>m (magnetic flux):</strong> Created by σᶻ operators</li>
        <li><strong>ε = e × m (composite):</strong> Fermion with mutual statistics</li>
      </ul>
    `
  },
  "chapter7": {
    title: "Chapter 7: Local Transformations and Long-Range Entanglement",
    content: `
      <h1>Chapter 7: Local Transformations and Long-Range Entanglement</h1>

      <h2>7.1 Introduction</h2>
      <p>This chapter develops a framework for classifying quantum phases based on local unitary transformations and the structure of quantum entanglement.</p>

      <h2>7.2 Quantum Phases and Phase Transitions</h2>
      <p>Quantum phase transitions occur at zero temperature, driven by quantum fluctuations rather than thermal fluctuations.</p>

      <h2>7.3 Quantum Phases and Local Unitary Transformations</h2>
      <p>Two ground states belong to the same phase if they are connected by a local unitary transformation:</p>
      <div class="equation">|ψ₁⟩ = U_local |ψ₂⟩</div>
      <p>where U_local is a finite-depth quantum circuit of local gates.</p>

      <h2>7.5 Universality Classes of Many-Body Wavefunctions</h2>
      <h3>7.5.3 Stochastic Local Transformations and Long-Range Entanglement</h3>
      <p>States with long-range entanglement (LRE) cannot be prepared from product states by finite-depth local quantum circuits. LRE is the defining feature of topological order.</p>

      <h2>7.6 Symmetry-Protected Topological Order</h2>
      <p>SPT phases have short-range entanglement but are non-trivial when protected by symmetry. They have:</p>
      <ul>
        <li>Unique ground state on closed manifolds</li>
        <li>Gapped bulk and protected edge states</li>
        <li>Classification by group cohomology</li>
      </ul>
    `
  },
  "chapter8": {
    title: "Chapter 8: Matrix Product State and 1D Gapped Phases",
    content: `
      <h1>Chapter 8: Matrix Product State and 1D Gapped Phases</h1>

      <h2>8.1 Introduction</h2>
      <p>Matrix Product States (MPS) provide an efficient representation for 1D gapped ground states, capturing the essential physics while drastically reducing computational complexity.</p>

      <h2>8.2 Matrix Product States</h2>
      <h3>8.2.1 Definition and Examples</h3>
      <p>An MPS for N spins is written as:</p>
      <div class="equation">|ψ⟩ = Σ_{i₁...iₙ} Tr(A^{i₁}A^{i₂}...A^{iₙ}) |i₁i₂...iₙ⟩</div>
      <p>where A^{i} are matrices of dimension D (the bond dimension).</p>

      <h3>8.2.5 Entanglement Area Law</h3>
      <p>MPS naturally satisfy the area law: entanglement entropy is bounded by S ≤ log(D), independent of subsystem size.</p>

      <h2>8.3 Renormalization Group Transformation on MPS</h2>
      <p>MPS form a natural framework for implementing real-space renormalization group, providing insights into critical phenomena and phase transitions.</p>

      <h2>8.4 No Intrinsic Topological Order in 1D Bosonic Systems</h2>
      <p>A fundamental result: 1D gapped bosonic systems with unique ground states cannot have intrinsic topological order. All such states can be connected to product states by local unitary circuits.</p>
    `
  },
  "chapter9": {
    title: "Chapter 9: Tensor Product States and 2D Gapped Phases",
    content: `
      <h1>Chapter 9: Tensor Product States and 2D Gapped Phases</h1>

      <h2>9.1 Introduction</h2>
      <p>Projected Entangled Pair States (PEPS) generalize MPS to higher dimensions, providing a framework for studying 2D quantum phases.</p>

      <h2>9.2 Tensor Product States</h2>
      <h3>9.2.1 Definition and Examples</h3>
      <p>A PEPS assigns a tensor to each lattice site:</p>
      <div class="equation">|ψ⟩ = Σ Contract(T^{i₁}_{α₁β₁γ₁δ₁} T^{i₂}_{α₂β₂γ₂δ₂} ...) |i₁i₂...⟩</div>
      <p>where Greek indices are contracted between neighboring sites.</p>

      <h2>9.4 Tensor Network for Topological Phases</h2>
      <h3>9.4.1 Toric Code Model</h3>
      <p>The toric code ground state can be exactly represented as a PEPS with bond dimension D = 2.</p>

      <h3>9.4.3 Topological Property from Local Tensors</h3>
      <p>Remarkably, topological properties (ground state degeneracy, anyonic statistics) can be extracted from the local tensor structure using tensor category theory.</p>

      <h2>9.5 Other Forms of Tensor Network Representation</h2>
      <h3>9.5.1 Multiscale Entanglement Renormalization Ansatz</h3>
      <p>MERA provides an efficient representation for critical systems, organizing entanglement hierarchically across length scales.</p>
    `
  },
  "chapter10": {
    title: "Chapter 10: Symmetry Protected Topological Phases",
    content: `
      <h1>Chapter 10: Symmetry Protected Topological Phases</h1>

      <h2>10.1 Introduction</h2>
      <p>SPT phases represent a new class of quantum matter: short-range entangled but topologically non-trivial when symmetry is preserved.</p>

      <h2>10.2 Symmetry Protected Topological Order in 1D Bosonic Systems</h2>
      <h3>10.2.1 Examples</h3>
      <p>The Haldane phase of spin-1 chains is the prototypical SPT phase, protected by Z₂ × Z₂ symmetry or time-reversal symmetry.</p>

      <h3>10.2.2 On-Site Unitary Symmetry</h3>
      <p>For symmetry group G, 1D bosonic SPT phases are classified by the second cohomology group H²(G,U(1)).</p>

      <h2>10.4 2D Symmetry Protected Topological Order</h2>
      <h3>10.4.1 2D AKLT Model</h3>
      <p>The 2D AKLT model generalizes the 1D case, with SPT order protected by SO(3) rotation symmetry.</p>

      <h3>10.4.2 2D CZX Model</h3>
      <p>The CZX model provides an exactly solvable example of 2D SPT order with Z₂ symmetry.</p>

      <h2>10.5 General Construction of SPT Phases</h2>
      <h3>10.5.1 Group Cohomology</h3>
      <p>The complete classification of bosonic SPT phases in d dimensions with symmetry G is given by:</p>
      <div class="equation">H^{d+1}(G,U(1))</div>
      <p>This provides a systematic framework for constructing and understanding all possible SPT phases.</p>
    `
  },
  "chapter11": {
    title: "Chapter 11: A Unification of Information and Matter",
    content: `
      <h1>Chapter 11: A Unification of Information and Matter</h1>

      <h2>11.1 Four Revolutions in Physics</h2>
      <h3>11.1.1 Mechanical Revolution</h3>
      <p>Newton's laws unified terrestrial and celestial mechanics, establishing the foundation of classical physics.</p>

      <h3>11.1.2 Electromagnetic Revolution</h3>
      <p>Maxwell's equations unified electricity, magnetism, and optics into a single electromagnetic field theory.</p>

      <h3>11.1.3 Relativity Revolution</h3>
      <p>Einstein's relativity unified space and time into spacetime, and mass with energy via E = mc².</p>

      <h3>11.1.4 Quantum Revolution</h3>
      <p>Quantum mechanics revealed the wave-particle duality and probabilistic nature of reality at fundamental scales.</p>

      <h2>11.2 It from Qubit, Not Bit</h2>
      <p>Wheeler's "It from bit" proposed that information is fundamental. The quantum version - "It from qubit" - suggests that quantum information underlies physical reality.</p>

      <p>Key insights:</p>
      <ul>
        <li>Quantum entanglement as the fabric of spacetime (ER=EPR)</li>
        <li>Holographic principle: bulk physics from boundary quantum information</li>
        <li>Emergent spacetime from entanglement structure</li>
      </ul>

      <h2>11.3 Emergence Approach</h2>
      <h3>11.3.2 Principle of Emergence</h3>
      <p>Complex phenomena emerge from simple underlying rules. In quantum matter:</p>
      <ul>
        <li>Gauge fields emerge from string-net condensation</li>
        <li>Fermions emerge from topological excitations of bosonic systems</li>
        <li>Gravitons may emerge from entanglement dynamics</li>
      </ul>

      <h3>11.3.3 String-Net Liquid of Qubits Unifies Light and Electrons</h3>
      <p>The string-net liquid model shows how both gauge bosons (light) and fermions (electrons) can emerge from a quantum system of qubits with appropriate entanglement patterns.</p>

      <h3>11.3.5 Where to Find Long-Range Entangled Quantum Matter?</h3>
      <p>Candidate systems:</p>
      <ul>
        <li>Fractional quantum Hall systems</li>
        <li>Quantum spin liquids</li>
        <li>Topological superconductors</li>
        <li>Synthetic quantum matter in cold atoms and trapped ions</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The convergence of quantum information theory and condensed matter physics has revealed deep connections between information, entanglement, and the structure of matter. This unified perspective promises new insights into fundamental physics and new technologies based on quantum principles.</p>
    `
  }
};
