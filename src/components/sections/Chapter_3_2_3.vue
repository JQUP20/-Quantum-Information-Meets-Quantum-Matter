<template>
  <div class="section-content">
    <h1>3.2.3 Other Noise Models</h1>

    <h2>Beyond Depolarizing Noise</h2>
    <p>Shor's code and the bit/phase flip codes assume <strong>depolarizing noise</strong>—equal probability of X, Y, Z errors. But real quantum systems often have <strong>asymmetric noise</strong>. Tailored codes can exploit this!</p>

    <div class="comparison-box">
      <h3>Common Physical Noise Models</h3>
      <table class="comparison-table">
        <tr>
          <th>Noise Model</th>
          <th>Dominant Errors</th>
          <th>Physical Origin</th>
        </tr>
        <tr>
          <td>Amplitude damping</td>
          <td>Mostly |1⟩ → |0⟩</td>
          <td>Spontaneous emission, T₁</td>
        </tr>
        <tr>
          <td>Dephasing</td>
          <td>Z errors only</td>
          <td>Phase noise, T₂</td>
        </tr>
        <tr>
          <td>Biased noise</td>
          <td>Z >> X errors</td>
          <td>Charge noise in superconducting qubits</td>
        </tr>
        <tr>
          <td>Erasure</td>
          <td>Qubit loss (known location)</td>
          <td>Atom loss, photon loss</td>
        </tr>
      </table>
    </div>

    <h2>Amplitude Damping Codes</h2>
    <p>When qubits preferentially relax |1⟩ → |0⟩, we can use asymmetric codes:</p>

    <div class="info-box">
      <h3>4-Qubit Amplitude Damping Code</h3>
      <p><strong>Encoding:</strong></p>
      <div class="equation">
        |0⟩_L → |0000⟩
      </div>
      <div class="equation">
        |1⟩_L → (|1000⟩ + |0100⟩ + |0010⟩ + |0001⟩)/2
      </div>

      <p><strong>Key idea:</strong> |0⟩_L has no excitations → cannot decay!</p>
      <p>|1⟩_L has 1 excitation spread over 4 qubits → single decay is correctable</p>

      <p><strong>Corrects:</strong> One amplitude damping error (σ_- on any qubit)</p>
      <p><strong>Overhead:</strong> 4 qubits for distance-1 protection</p>
    </div>

    <h2>Degenerate Codes</h2>
    <p>Some codes can correct errors even when different errors produce the <strong>same</strong> syndrome!</p>

    <div class="highlight-box">
      <h3>Degeneracy Advantage</h3>
      <p><strong>Non-degenerate code:</strong> Each correctable error → unique syndrome</p>
      <p><strong>Degenerate code:</strong> Multiple errors → same syndrome, but all correctable!</p>

      <p><strong>Example: 5-qubit code ⟦5,1,3⟧</strong></p>
      <ul>
        <li>Both X₁X₂ and X₃X₄X₅ map codewords to the same error space</li>
        <li>Same syndrome → same recovery works for both!</li>
        <li>Effectively corrects more errors than non-degenerate codes</li>
      </ul>

      <p><strong>Benefit:</strong> Better performance against correlated noise</p>
    </div>

    <h2>Erasure Errors</h2>
    <p>When we know <strong>which</strong> qubit failed (e.g., atom loss detected), correction is easier!</p>

    <div class="note-box">
      <h3>Erasure vs Unknown Errors</h3>
      <p><strong>Unknown error:</strong> Need distance d to correct ⌊(d-1)/2⌋ errors</p>
      <p><strong>Erasure:</strong> Need distance d to correct (d-1) erasures!</p>

      <p><strong>Example:</strong> ⟦5,1,3⟧ code</p>
      <ul>
        <li>Corrects 1 unknown error</li>
        <li>Corrects 2 erasures (twice as many!)</li>
      </ul>

      <p><strong>Why?</strong> Knowing location reduces degrees of freedom by half</p>
    </div>

    <h2>Biased Noise Codes</h2>
    <p>When Z errors are much more likely than X errors (common in superconducting qubits), use <strong>biased codes</strong>:</p>

    <div class="info-box">
      <h3>Heavy-Hex Codes</h3>
      <p>Optimized for Z-biased noise where Z errors are η times more likely than X:</p>
      <ul>
        <li>Sacrifice some Z-error protection for better X-error protection</li>
        <li>Effective distance scales as d_eff ~ d^(1 + log_η 2)</li>
        <li>For η = 100 (typical), factor ~10 improvement!</li>
      </ul>

      <p><strong>Implementation:</strong> Used in IBM quantum processors with heavy-hex connectivity</p>
    </div>

    <h2>Subsystem Codes</h2>
    <div class="highlight-box">
      <h3>Gauge Freedom in Error Correction</h3>
      <p>Some codes have additional "gauge" qubits that don't need protection:</p>

      <p><strong>Bacon-Shor code ⟦9,1,3⟧:</strong></p>
      <ul>
        <li>Encodes 1 logical qubit + 4 gauge qubits in 9 physical qubits</li>
        <li>Gauge qubits can have errors—don't affect logical qubit!</li>
        <li>Simpler syndrome measurement (only 2-qubit operations)</li>
      </ul>

      <p><strong>Advantage:</strong> Fault tolerance with shallower circuits</p>
    </div>

    <h2>Quantum Convolutional Codes</h2>
    <p>Instead of block codes, can use <strong>convolutional structure</strong>:</p>

    <div class="note-box">
      <ul>
        <li>Qubits processed in continuous stream</li>
        <li>No need to wait for full block</li>
        <li>Lower latency for quantum communication</li>
        <li>Used in quantum repeaters and networks</li>
      </ul>
    </div>

    <h2>Tailored Code Selection</h2>
    <div class="comparison-box">
      <table class="comparison-table">
        <tr>
          <th>System</th>
          <th>Dominant Noise</th>
          <th>Recommended Code</th>
        </tr>
        <tr>
          <td>Superconducting qubits</td>
          <td>Dephasing (Z-biased)</td>
          <td>Surface code, heavy-hex</td>
        </tr>
        <tr>
          <td>Trapped ions</td>
          <td>Depolarizing</td>
          <td>Steane, surface code</td>
        </tr>
        <tr>
          <td>NV centers</td>
          <td>Amplitude damping</td>
          <td>Specialized AMD codes</td>
        </tr>
        <tr>
          <td>Photonic</td>
          <td>Loss (erasure)</td>
          <td>GKP, cat codes</td>
        </tr>
        <tr>
          <td>Quantum dots</td>
          <td>Charge noise (Z)</td>
          <td>Spin-echo + surface code</td>
        </tr>
      </table>
    </div>

    <h2>Bosonic Codes</h2>
    <p>For continuous-variable systems (cavities, oscillators), use <strong>infinite-dimensional</strong> encoding:</p>

    <div class="info-box">
      <h3>Cat Codes</h3>
      <p>Encode in superpositions of coherent states:</p>
      <div class="equation">
        |0⟩_L ~ |α⟩ + |-α⟩,  |1⟩_L ~ |α⟩ - |-α⟩
      </div>

      <ul>
        <li>Protect against photon loss (dominant cavity noise)</li>
        <li>Biased toward phase flips → combine with outer qubit code</li>
        <li>Demonstrated in circuit QED</li>
      </ul>

      <h3>GKP Codes (Gottesman-Kitaev-Preskill)</h3>
      <ul>
        <li>Encode in grid states of position/momentum</li>
        <li>Can correct small displacement errors</li>
        <li>Recently demonstrated experimentally</li>
      </ul>
    </div>

    <h2>Approximate Error Correction</h2>
    <div class="note-box">
      <p>Not all codes aim for perfect protection:</p>

      <h3>Approximate Quantum Error Correction (AQEC)</h3>
      <ul>
        <li>Protect against typical errors, not worst-case</li>
        <li>More efficient for specific noise models</li>
        <li>Example: Holographic codes from AdS/CFT</li>
      </ul>

      <p><strong>Trade-off:</strong> Better performance vs specific noise, worse against adversarial errors</p>
    </div>

    <h2>Code Concatenation</h2>
    <p>Can combine different codes to target multiple error types:</p>

    <div class="highlight-box">
      <ul>
        <li><strong>Inner code:</strong> Protect against high-rate noise (e.g., dephasing)</li>
        <li><strong>Outer code:</strong> Protect against rare but catastrophic errors</li>
        <li><strong>Example:</strong> Cat code + surface code for superconducting qubits</li>
      </ul>

      <p><strong>Result:</strong> "Best of both worlds" protection strategy</p>
    </div>

    <h2>Key Takeaways</h2>
    <div class="highlight-box">
      <ul>
        <li>Real quantum systems have asymmetric, correlated noise—not ideal depolarizing</li>
        <li>Tailored codes can outperform general codes by exploiting noise structure</li>
        <li>Degenerate codes handle correlated errors better</li>
        <li>Erasure errors (known location) are easier to correct</li>
        <li>Bosonic codes for continuous-variable systems</li>
        <li>Code selection should match physical platform</li>
      </ul>
    </div>

    <h2>Looking Ahead</h2>
    <div class="preview-box">
      <h4>Next: Error-Correcting Criteria (Section 3.3)</h4>
      <p>We'll develop the mathematical framework:</p>
      <ul>
        <li>Knill-Laflamme conditions for general error correction</li>
        <li>Code distance and error-correcting capability</li>
        <li>Bounds on code parameters</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter_3_2_3'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
