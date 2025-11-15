<template>
  <div class="section-content">
    <h1>2.4 Open Quantum Systems</h1>

    <h2>Beyond Isolated Systems</h2>
    <p>In practice, quantum systems are never perfectly isolated. They interact with their <strong>environment</strong> (also called a "bath" or "reservoir"), leading to phenomena absent in closed-system dynamics:</p>

    <div class="highlight-box">
      <h3>Effects of Environment Interaction</h3>
      <ul>
        <li><strong>Decoherence:</strong> Loss of quantum superposition and interference</li>
        <li><strong>Dissipation:</strong> Energy exchange with environment</li>
        <li><strong>Thermalization:</strong> Approach to thermal equilibrium</li>
        <li><strong>Entanglement degradation:</strong> Decay of quantum correlations</li>
      </ul>
    </div>

    <h2>The System-Environment Picture</h2>
    <div class="info-box">
      <p>We partition the universe into:</p>
      <ul>
        <li><strong>System (S):</strong> The qubits we care about</li>
        <li><strong>Environment (E):</strong> Everything else (typically many degrees of freedom)</li>
      </ul>

      <p>The total Hilbert space:</p>
      <div class="equation">
        ℋ_total = ℋ_S ⊗ ℋ_E
      </div>

      <p>The total state evolves unitarily:</p>
      <div class="equation">
        ρ_SE(t) = U_SE(t) ρ_SE(0) U_SE†(t)
      </div>

      <p>But we only observe the <strong>reduced density matrix</strong>:</p>
      <div class="equation">
        ρ_S(t) = Tr_E[ρ_SE(t)]
      </div>
    </div>

    <h2>Why Reduced Dynamics is Non-Unitary</h2>
    <p>Even though the total system evolves unitarily, tracing over the environment produces non-unitary dynamics for the system:</p>

    <div class="note-box">
      <h3>Example: Dephasing</h3>
      <p>Consider a qubit coupled to an environment:</p>
      <ol>
        <li>Initial state: (|0⟩ + |1⟩)/√2 ⊗ |E₀⟩</li>
        <li>Entanglement with environment: |0⟩|E₀⟩ + |1⟩|E₁⟩</li>
        <li>Reduced density matrix:
          <div class="equation">
            ρ_S = ½(|0⟩⟨0| + |1⟩⟨1|) + ½⟨E₀|E₁⟩(|0⟩⟨1| + h.c.)
          </div>
        </li>
        <li>If ⟨E₀|E₁⟩ → 0: coherences decay → mixed state!</li>
      </ol>
    </div>

    <h2>Key Timescales</h2>
    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>Timescale</th>
          <th>Symbol</th>
          <th>Meaning</th>
        </tr>
        <tr>
          <td>Energy relaxation time</td>
          <td>T₁</td>
          <td>Decay from |1⟩ to |0⟩ (spontaneous emission)</td>
        </tr>
        <tr>
          <td>Dephasing time</td>
          <td>T₂</td>
          <td>Loss of phase coherence between |0⟩ and |1⟩</td>
        </tr>
        <tr>
          <td>Pure dephasing time</td>
          <td>T_φ</td>
          <td>Dephasing without energy relaxation</td>
        </tr>
      </table>

      <p><strong>Relation:</strong> 1/T₂ = 1/(2T₁) + 1/T_φ</p>
    </div>

    <div class="info-box">
      <h3>Typical Coherence Times (2024)</h3>
      <ul>
        <li><strong>Superconducting qubits:</strong> T₁ ~ 100 μs, T₂ ~ 50-200 μs</li>
        <li><strong>Trapped ions:</strong> T₁ ~ seconds to minutes, T₂ ~ seconds</li>
        <li><strong>NV centers:</strong> T₁ ~ ms, T₂ ~ ms (room temperature!)</li>
        <li><strong>Silicon spin qubits:</strong> T₁ ~ seconds, T₂ ~ 100 μs - 1 ms</li>
      </ul>
    </div>

    <h2>Quantum Operations and Maps</h2>

    <h3>Completely Positive Trace-Preserving (CPTP) Maps</h3>
    <div class="highlight-box">
      <p>The evolution of an open quantum system is described by a <strong>quantum operation</strong> ℰ:</p>
      <div class="equation">
        ρ(t) = ℰ_t(ρ(0))
      </div>

      <h4>Required Properties:</h4>
      <ul>
        <li><strong>Trace-preserving:</strong> Tr[ℰ(ρ)] = Tr[ρ] = 1 (probability conservation)</li>
        <li><strong>Positivity:</strong> If ρ ≥ 0, then ℰ(ρ) ≥ 0 (physical states)</li>
        <li><strong>Complete positivity:</strong> (ℰ ⊗ 𝟙)(ρ_SE) ≥ 0 for any extension</li>
      </ul>

      <p><strong>Complete positivity</strong> ensures ℰ doesn't create unphysical correlations when system is entangled with another system.</p>
    </div>

    <h3>Kraus Representation</h3>
    <div class="info-box">
      <p>Any CPTP map can be written in <strong>Kraus form</strong>:</p>
      <div class="equation">
        ℰ(ρ) = Σ_k K_k ρ K_k†
      </div>
      <p>where {K_k} are <strong>Kraus operators</strong> satisfying Σ_k K_k† K_k = I.</p>

      <h4>Physical Interpretation:</h4>
      <p>Each K_k represents a different "outcome" of the environment interaction. The system doesn't know which occurred, so we sum over all possibilities.</p>
    </div>

    <h2>Examples of Quantum Channels</h2>

    <h3>1. Bit Flip Channel</h3>
    <div class="info-box">
      <p>With probability p, apply X; otherwise do nothing:</p>
      <div class="equation">
        K_0 = √(1-p) I,  K_1 = √p X
      </div>
      <p>Effect: ρ → (1-p)ρ + p X ρ X</p>
    </div>

    <h3>2. Phase Flip Channel</h3>
    <div class="info-box">
      <p>With probability p, apply Z; otherwise do nothing:</p>
      <div class="equation">
        K_0 = √(1-p) I,  K_1 = √p Z
      </div>
      <p>Effect: Off-diagonal elements decay by factor (1-2p)</p>
    </div>

    <h3>3. Depolarizing Channel</h3>
    <div class="highlight-box">
      <p>Replaces state with maximally mixed state with probability p:</p>
      <div class="equation">
        ℰ_depol(ρ) = (1-p)ρ + p(I/2)
      </div>
      <p>Equivalent to applying X, Y, Z with probability p/3 each, or I with probability 1-p.</p>

      <p><strong>Kraus operators:</strong></p>
      <div class="equation">
        K_0 = √(1-3p/4) I,  K_1 = √(p/4) X,  K_2 = √(p/4) Y,  K_3 = √(p/4) Z
      </div>
    </div>

    <h3>4. Amplitude Damping Channel</h3>
    <div class="info-box">
      <p>Models energy relaxation (spontaneous emission):</p>
      <div class="equation">
        K_0 = [[1, 0], [0, √(1-γ)]],  K_1 = [[0, √γ], [0, 0]]
      </div>
      <p>Effect: |1⟩ decays to |0⟩ with rate γ = 1 - e^(-t/T₁)</p>

      <h4>Action:</h4>
      <ul>
        <li>|1⟩ → √(1-γ)|1⟩ (amplitude decay)</li>
        <li>Population in |1⟩ decreases: p_1(t) = p_1(0) e^(-t/T₁)</li>
      </ul>
    </div>

    <h3>5. Phase Damping Channel</h3>
    <div class="info-box">
      <p>Models pure dephasing without energy exchange:</p>
      <div class="equation">
        K_0 = [[1, 0], [0, √(1-λ)]],  K_1 = [[0, 0], [0, √λ]]
      </div>
      <p>Effect: Off-diagonal elements decay exponentially with rate λ = 1 - e^(-t/T_φ)</p>
    </div>

    <h2>Decoherence and Quantum-to-Classical Transition</h2>
    <div class="note-box">
      <h3>Einselection (Environment-Induced Superselection)</h3>
      <p>Environment interaction selects a <strong>pointer basis</strong>—states that are most robust against decoherence.</p>

      <h4>Example: Spatial Decoherence</h4>
      <ul>
        <li>Superposition: |here⟩ + |there⟩</li>
        <li>Environment scatters photons differently from each location</li>
        <li>Rapid entanglement: |here⟩|E_here⟩ + |there⟩|E_there⟩</li>
        <li>Decoherence time: τ_D ~ ℏ/(separation²)</li>
        <li>Macroscopic objects: τ_D ~ 10^(-40) s → classical behavior!</li>
      </ul>
    </div>

    <h2>Quantum Darwinism</h2>
    <div class="highlight-box">
      <p>A modern perspective on quantum-to-classical transition:</p>
      <ul>
        <li>Environment doesn't just destroy coherence—it creates <strong>redundant classical information</strong></li>
        <li>Multiple observers can independently measure system state by probing environment fragments</li>
        <li>Explains objective reality: many observers agree because environment carries copies</li>
      </ul>
    </div>

    <h2>Protecting Against Decoherence</h2>

    <h3>Decoherence-Free Subspaces (DFS)</h3>
    <div class="info-box">
      <p>Encode quantum information in subspaces immune to certain noise:</p>
      <div class="equation">
        If [H_env, P] = 0 for projector P,  then Pℋ is DFS
      </div>

      <h4>Example: Collective Dephasing</h4>
      <p>If both qubits experience identical phase noise, encode in:</p>
      <ul>
        <li>|0_L⟩ = |01⟩</li>
        <li>|1_L⟩ = |10⟩</li>
      </ul>
      <p>Both states pick up same global phase → protected!</p>
    </div>

    <h3>Dynamical Decoupling</h3>
    <div class="info-box">
      <p>Apply rapid pulse sequences to average out environmental noise:</p>
      <ul>
        <li><strong>Spin echo (Hahn):</strong> X at t/2 refocuses dephasing</li>
        <li><strong>CPMG:</strong> Multiple π pulses extend T₂</li>
        <li><strong>UDD (Uhrig):</strong> Optimally-spaced pulses</li>
      </ul>
      <p>Can extend T₂ by orders of magnitude!</p>
    </div>

    <h3>Quantum Error Correction</h3>
    <div class="note-box">
      <p>Encode logical qubits in multiple physical qubits with redundancy:</p>
      <ul>
        <li>Detects and corrects errors actively</li>
        <li>Requires error rate below threshold (~1%)</li>
        <li>Will be covered extensively in later chapters</li>
      </ul>
    </div>

    <h2>Measures of Non-Unitarity</h2>

    <h3>Purity</h3>
    <div class="info-box">
      <p>The <strong>purity</strong> measures how mixed a state is:</p>
      <div class="equation">
        𝒫(ρ) = Tr(ρ²)
      </div>
      <ul>
        <li>Pure state: 𝒫 = 1</li>
        <li>Maximally mixed (single qubit): 𝒫 = 1/2</li>
        <li>Decoherence decreases purity monotonically</li>
      </ul>
    </div>

    <h3>Fidelity</h3>
    <div class="info-box">
      <p>The <strong>fidelity</strong> measures similarity between states:</p>
      <div class="equation">
        F(ρ,σ) = Tr(√(√ρ σ √ρ))²
      </div>
      <ul>
        <li>F = 1: identical states</li>
        <li>F = 0: orthogonal states</li>
        <li>Used to quantify gate/state quality</li>
      </ul>
    </div>

    <h2>The Markovian Approximation</h2>
    <div class="note-box">
      <h3>When is Dynamics Markovian?</h3>
      <p>Environment effects are <strong>memoryless</strong> if:</p>
      <ul>
        <li>Environment correlation time τ_E << system evolution time</li>
        <li>Weak coupling: system doesn't significantly perturb environment</li>
        <li>Large environment: many degrees of freedom, fast thermalization</li>
      </ul>

      <p>In this regime, evolution satisfies:</p>
      <div class="equation">
        dρ/dt = ℒ(ρ),  where ℒ is time-independent
      </div>
      <p>This leads to the <strong>Lindblad master equation</strong> (Section 2.5).</p>
    </div>

    <h2>Non-Markovian Dynamics</h2>
    <div class="info-box">
      <p>When Markovian approximation fails:</p>
      <ul>
        <li><strong>Memory effects:</strong> Information can flow back from environment</li>
        <li><strong>Revivals:</strong> Temporary recovery of coherence</li>
        <li><strong>Non-monotonic:</strong> Entanglement/purity can increase temporarily</li>
      </ul>
      <p>Requires more sophisticated techniques: hierarchical equations, path integrals, tensor networks.</p>
    </div>

    <h2>Experimental Observations</h2>
    <div class="highlight-box">
      <h3>Ramsey Interferometry</h3>
      <p>Standard technique to measure T₂:</p>
      <ol>
        <li>Prepare |+⟩ = (|0⟩ + |1⟩)/√2 with π/2 pulse</li>
        <li>Wait time τ (free evolution + dephasing)</li>
        <li>Apply second π/2 pulse</li>
        <li>Measure: contrast decays as e^(-τ/T₂)</li>
      </ol>
    </div>

    <h2>Looking Ahead</h2>
    <div class="preview-box">
      <h4>Next: Master Equation (Section 2.5)</h4>
      <p>We'll derive the precise form of Markovian open system dynamics:</p>
      <ul>
        <li>Lindblad master equation</li>
        <li>Physical interpretation of Lindblad operators</li>
        <li>Examples for qubits: relaxation, dephasing, thermal baths</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_2_4'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
