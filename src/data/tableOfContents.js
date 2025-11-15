export const tableOfContents = {
  title: "Quantum Information Meets Quantum Matter",
  parts: [
    {
      id: "part1",
      title: "Part I - Basic Concepts in Quantum Information Theory",
      chapters: [
        {
          id: "chapter1",
          number: 1,
          title: "Correlation and Entanglement",
          page: 3,
          sections: [
            { id: "1.1", title: "Introduction", page: 3 },
            {
              id: "1.2",
              title: "Correlations in classical probability theory",
              page: 5,
              subsections: [
                { id: "1.2.1", title: "Joint probability without correlations", page: 5 },
                { id: "1.2.2", title: "Correlation functions", page: 8 },
                { id: "1.2.3", title: "Mutual information", page: 10 }
              ]
            },
            {
              id: "1.3",
              title: "Quantum entanglement",
              page: 13,
              subsections: [
                { id: "1.3.1", title: "Pure and mixed quantum states", page: 13 },
                { id: "1.3.2", title: "Composite quantum systems, tensor product structure", page: 17 },
                { id: "1.3.3", title: "Pure bipartite state, Schmidt decomposition", page: 19 },
                { id: "1.3.4", title: "Mixed bipartite state", page: 20 },
                { id: "1.3.5", title: "Bell's inequalities", page: 22 },
                { id: "1.3.6", title: "Entanglement", page: 23 }
              ]
            },
            {
              id: "1.4",
              title: "Correlation and entanglement in many-body quantum systems",
              page: 26,
              subsections: [
                { id: "1.4.1", title: "The GHZ paradox", page: 26 },
                { id: "1.4.2", title: "Many-body correlation", page: 27 },
                { id: "1.4.3", title: "Many-body entanglement", page: 30 }
              ]
            },
            { id: "1.5", title: "Summary and further reading", page: 32 }
          ]
        },
        {
          id: "chapter2",
          number: 2,
          title: "Evolution of Quantum Systems",
          page: 35,
          sections: [
            { id: "2.1", title: "Introduction", page: 35 },
            {
              id: "2.2",
              title: "Unitary evolution",
              page: 37,
              subsections: [
                { id: "2.2.1", title: "Single qubit unitary", page: 37 },
                { id: "2.2.2", title: "Two-qubit unitary", page: 38 },
                { id: "2.2.3", title: "N-qubit unitary", page: 41 }
              ]
            },
            { id: "2.3", title: "Quantum Circuits", page: 44 },
            { id: "2.4", title: "Open Quantum Systems", page: 47 },
            {
              id: "2.5",
              title: "Master Equation",
              page: 50,
              subsections: [
                { id: "2.5.1", title: "The Lindblad Form", page: 50 },
                { id: "2.5.2", title: "Master equations for a single qubit", page: 52 }
              ]
            },
            { id: "2.6", title: "Summary and further reading", page: 57 }
          ]
        },
        {
          id: "chapter3",
          number: 3,
          title: "Quantum Error-Correcting Codes",
          page: 59,
          sections: [
            { id: "3.1", title: "Introduction", page: 59 },
            {
              id: "3.2",
              title: "Basic idea of error correction",
              page: 60,
              subsections: [
                { id: "3.2.1", title: "Bit flip code", page: 60 },
                { id: "3.2.2", title: "Shor's Code", page: 63 },
                { id: "3.2.3", title: "Other noise models", page: 64 }
              ]
            },
            { id: "3.3", title: "Quantum error-correcting criteria, code distance", page: 65 },
            {
              id: "3.4",
              title: "The stabilizer formalism",
              page: 68,
              subsections: [
                { id: "3.4.1", title: "Shor's code", page: 68 },
                { id: "3.4.2", title: "The stabilizer formalism", page: 71 },
                { id: "3.4.3", title: "Stabilizer states and graph states", page: 73 }
              ]
            },
            { id: "3.5", title: "Toric code", page: 74 },
            { id: "3.6", title: "Summary and further reading", page: 76 }
          ]
        }
      ]
    },
    {
      id: "part2",
      title: "Part II - Local Hamiltonians, Ground States, and Many-body Entanglement",
      chapters: [
        {
          id: "chapter4",
          number: 4,
          title: "Local Hamiltonians and Ground States",
          page: 81,
          sections: [
            { id: "4.1", title: "Introduction", page: 81 },
            { id: "4.2", title: "Many-body Hilbert space", page: 84 },
            {
              id: "4.3",
              title: "Local Hamiltonians",
              page: 85,
              subsections: [
                { id: "4.3.1", title: "Examples", page: 86 },
                { id: "4.3.2", title: "The effect of locality", page: 87 }
              ]
            },
            {
              id: "4.4",
              title: "Ground-state energy of local Hamiltonians",
              page: 88,
              subsections: [
                { id: "4.4.1", title: "The local Hamiltonian problem", page: 89 },
                { id: "4.4.2", title: "The quantum marginal problem", page: 91 },
                { id: "4.4.3", title: "The N-representability problem", page: 95 },
                { id: "4.4.4", title: "de Finetti theorem and mean-field bosonic systems", page: 96 }
              ]
            },
            {
              id: "4.5",
              title: "Frustration-free Hamiltonians",
              page: 100,
              subsections: [
                { id: "4.5.1", title: "Examples of frustration-free Hamiltonians", page: 100 },
                { id: "4.5.2", title: "The frustration-free Hamiltonians problem", page: 102 },
                { id: "4.5.3", title: "The 2-local frustration-free Hamiltonians", page: 102 }
              ]
            },
            { id: "4.6", title: "Summary and further reading", page: 105 }
          ]
        },
        {
          id: "chapter5",
          number: 5,
          title: "Gapped Quantum Systems and Entanglement Area Law",
          page: 109,
          sections: [
            { id: "5.1", title: "Introduction", page: 109 },
            {
              id: "5.2",
              title: "Quantum many-body systems",
              page: 111,
              subsections: [
                { id: "5.2.1", title: "Dimensionality and locality", page: 111 },
                { id: "5.2.2", title: "Thermodynamic limit and universality", page: 112 },
                { id: "5.2.3", title: "Gap", page: 112 },
                { id: "5.2.4", title: "Correlation", page: 115 },
                { id: "5.2.5", title: "Entanglement", page: 116 }
              ]
            },
            {
              id: "5.3",
              title: "Entanglement area law in gapped systems",
              page: 117,
              subsections: [
                { id: "5.3.1", title: "Entanglement area law", page: 117 },
                { id: "5.3.2", title: "Topological entanglement entropy", page: 119 }
              ]
            },
            {
              id: "5.4",
              title: "Generalizations of topological entanglement entropy",
              page: 123,
              subsections: [
                { id: "5.4.1", title: "Quantum conditional mutual information", page: 123 },
                { id: "5.4.2", title: "Toric code in a magnetic field", page: 126 },
                { id: "5.4.3", title: "The transverse-field Ising model", page: 129 },
                { id: "5.4.4", title: "The transverse-field cluster model", page: 132 },
                { id: "5.4.5", title: "Systems with mixed orders", page: 137 },
                { id: "5.4.6", title: "I(A:C|B) as a detector of non-trivial many-body entanglement", page: 138 }
              ]
            },
            { id: "5.5", title: "Gapped ground states as quantum-error-correcting codes", page: 140 },
            { id: "5.6", title: "Entanglement in gapless systems", page: 142 },
            { id: "5.7", title: "Summary and further reading", page: 144 }
          ]
        }
      ]
    },
    {
      id: "part3",
      title: "Part III - Topological Order and Long-Range Entanglement",
      chapters: [
        {
          id: "chapter6",
          number: 6,
          title: "Introduction to Topological Order",
          page: 151,
          sections: [
            {
              id: "6.1",
              title: "Introduction",
              page: 151,
              subsections: [
                { id: "6.1.1", title: "Phases of matter and Landau's symmetry breaking theory", page: 151 },
                { id: "6.1.2", title: "Quantum phases of matter and transverse-field Ising model", page: 153 },
                { id: "6.1.3", title: "Physical ways to understand symmetry breaking in quantum theory", page: 154 },
                { id: "6.1.4", title: "Compare a finite-temperature phase with a zero temperature phase", page: 156 }
              ]
            },
            {
              id: "6.2",
              title: "Topological order",
              page: 156,
              subsections: [
                { id: "6.2.1", title: "The discovery of topological order", page: 156 }
              ]
            },
            {
              id: "6.3",
              title: "A macroscopic definition of topological order",
              page: 158,
              subsections: [
                { id: "6.3.1", title: "What is 'topological ground state degeneracy'", page: 160 },
                { id: "6.3.2", title: "What is 'non-Abelian geometric phase of topologically degenerate states'", page: 160 }
              ]
            },
            {
              id: "6.4",
              title: "A microscopic picture of topological orders",
              page: 161,
              subsections: [
                { id: "6.4.1", title: "The essence of fractional quantum Hall states", page: 161 },
                { id: "6.4.2", title: "Intuitive pictures of topological order", page: 162 }
              ]
            },
            { id: "6.5", title: "What is the significance of topological order?", page: 165 },
            { id: "6.6", title: "Quantum liquids of unoriented strings", page: 166 },
            {
              id: "6.7",
              title: "The emergence of fractional quantum numbers and Fermi/fractional statistics",
              page: 167,
              subsections: [
                { id: "6.7.1", title: "Emergence of fractional angular momenta", page: 168 },
                { id: "6.7.2", title: "Emergence of Fermi and fractional statistics", page: 169 }
              ]
            },
            { id: "6.8", title: "Topological degeneracy of unoriented string liquid", page: 170 },
            {
              id: "6.9",
              title: "Topological excitations and string operators",
              page: 171,
              subsections: [
                { id: "6.9.1", title: "Toric code model and string condensation", page: 172 },
                { id: "6.9.2", title: "Local and topological excitations", page: 173 },
                { id: "6.9.3", title: "Three types of quasiparticles", page: 174 },
                { id: "6.9.4", title: "Three types of string operators", page: 175 },
                { id: "6.9.5", title: "Statistics of ends of strings", page: 177 }
              ]
            },
            { id: "6.10", title: "Summary and further reading", page: 179 }
          ]
        },
        {
          id: "chapter7",
          number: 7,
          title: "Local Transformations and Long-Range Entanglement",
          page: 185,
          sections: [
            { id: "7.1", title: "Introduction", page: 185 },
            { id: "7.2", title: "Quantum phases and phase transitions", page: 186 },
            {
              id: "7.3",
              title: "Quantum phases and local unitary transformations",
              page: 189,
              subsections: [
                { id: "7.3.1", title: "Quantum phases and local unitary evolutions in ground states", page: 189 },
                { id: "7.3.2", title: "Local unitary evolutions and local unitary quantum circuits", page: 191 },
                { id: "7.3.3", title: "Local unitary quantum circuits and wavefunction renormalization", page: 194 }
              ]
            },
            {
              id: "7.4",
              title: "Gapped Hamiltonians and topological order",
              page: 197,
              subsections: [
                { id: "7.4.1", title: "Gapped quantum systems and gapped quantum phases", page: 198 },
                { id: "7.4.2", title: "Gapped quantum liquid system and gapped quantum liquid phase", page: 199 },
                { id: "7.4.3", title: "Topological order", page: 202 }
              ]
            },
            {
              id: "7.5",
              title: "Universality classes of many-body wavefunctions",
              page: 205,
              subsections: [
                { id: "7.5.1", title: "Gapped quantum liquid", page: 205 },
                { id: "7.5.2", title: "Symmetry breaking order", page: 206 },
                { id: "7.5.3", title: "Stochastic local transformations and long-range entanglement", page: 209 }
              ]
            },
            { id: "7.6", title: "Symmetry-protected topological order", page: 215 },
            { id: "7.7", title: "A new chapter in physics", page: 217 },
            { id: "7.8", title: "Summary and further reading", page: 218 }
          ]
        }
      ]
    },
    {
      id: "part4",
      title: "Part IV - Gapped Topological Phases and Tensor Networks",
      chapters: [
        {
          id: "chapter8",
          number: 8,
          title: "Matrix Product State and 1D Gapped Phases",
          page: 227,
          sections: [
            { id: "8.1", title: "Introduction", page: 227 },
            {
              id: "8.2",
              title: "Matrix product states",
              page: 228,
              subsections: [
                { id: "8.2.1", title: "Definition and examples", page: 228 },
                { id: "8.2.2", title: "Double tensor", page: 230 },
                { id: "8.2.3", title: "Calculation of norm and physical observables", page: 232 },
                { id: "8.2.4", title: "Correlation length", page: 232 },
                { id: "8.2.5", title: "Entanglement area law", page: 234 },
                { id: "8.2.6", title: "Gauge degree of freedom", page: 235 },
                { id: "8.2.7", title: "Projected entangled pair picture", page: 236 },
                { id: "8.2.8", title: "Canonical form", page: 237 },
                { id: "8.2.9", title: "Injectivity", page: 237 },
                { id: "8.2.10", title: "Parent Hamiltonian", page: 239 }
              ]
            },
            { id: "8.3", title: "Renormalization group transformation on MPS", page: 241 },
            { id: "8.4", title: "No intrinsic topological order in 1D bosonic systems", page: 243 },
            { id: "8.5", title: "Summary and further reading", page: 245 }
          ]
        },
        {
          id: "chapter9",
          number: 9,
          title: "Tensor Product States and 2D Gapped Phases",
          page: 249,
          sections: [
            { id: "9.1", title: "Introduction", page: 249 },
            {
              id: "9.2",
              title: "Tensor product states",
              page: 250,
              subsections: [
                { id: "9.2.1", title: "Definition and examples", page: 251 },
                { id: "9.2.2", title: "Properties", page: 253 }
              ]
            },
            {
              id: "9.3",
              title: "Tensor network for symmetry breaking phases",
              page: 258,
              subsections: [
                { id: "9.3.1", title: "Ising model", page: 258 },
                { id: "9.3.2", title: "Structural properties", page: 259 },
                { id: "9.3.3", title: "Symmetry breaking and the block structure of tensors", page: 259 }
              ]
            },
            {
              id: "9.4",
              title: "Tensor network for topological phases",
              page: 261,
              subsections: [
                { id: "9.4.1", title: "Toric code model", page: 261 },
                { id: "9.4.2", title: "Structural properties", page: 262 },
                { id: "9.4.3", title: "Topological property from local tensors", page: 263 },
                { id: "9.4.4", title: "Stability under symmetry constraint", page: 265 }
              ]
            },
            {
              id: "9.5",
              title: "Other forms of tensor network representation",
              page: 269,
              subsections: [
                { id: "9.5.1", title: "Multiscale entanglement renormalization ansatz", page: 269 },
                { id: "9.5.2", title: "Tree tensor network state", page: 270 }
              ]
            },
            { id: "9.6", title: "Summary and further reading", page: 271 }
          ]
        },
        {
          id: "chapter10",
          number: 10,
          title: "Symmetry Protected Topological Phases",
          page: 275,
          sections: [
            { id: "10.1", title: "Introduction", page: 275 },
            {
              id: "10.2",
              title: "Symmetry protected topological order in 1D bosonic systems",
              page: 276,
              subsections: [
                { id: "10.2.1", title: "Examples", page: 276 },
                { id: "10.2.2", title: "On-site unitary symmetry", page: 279 },
                { id: "10.2.3", title: "Time reversal symmetry", page: 288 },
                { id: "10.2.4", title: "Translation invariance", page: 290 },
                { id: "10.2.5", title: "Summary of results for bosonic systems", page: 296 }
              ]
            },
            {
              id: "10.3",
              title: "Topological phases in 1D fermion systems",
              page: 296,
              subsections: [
                { id: "10.3.1", title: "Jordan Wigner transformation", page: 297 },
                { id: "10.3.2", title: "Fermion parity symmetry only", page: 299 },
                { id: "10.3.3", title: "Fermion parity and T²=1 time reversal", page: 301 },
                { id: "10.3.4", title: "Fermion parity and T²=-1 time reversal", page: 302 },
                { id: "10.3.5", title: "Fermion number conservation", page: 303 }
              ]
            },
            {
              id: "10.4",
              title: "2D symmetry protected topological order",
              page: 303,
              subsections: [
                { id: "10.4.1", title: "2D AKLT model", page: 304 },
                { id: "10.4.2", title: "2D CZX model", page: 307 }
              ]
            },
            {
              id: "10.5",
              title: "General construction of SPT phases",
              page: 319,
              subsections: [
                { id: "10.5.1", title: "Group cohomology", page: 319 },
                { id: "10.5.2", title: "SPT model from group cohomology", page: 321 }
              ]
            },
            { id: "10.6", title: "Summary and further reading", page: 323 }
          ]
        }
      ]
    },
    {
      id: "part5",
      title: "Part V - Outlook",
      chapters: [
        {
          id: "chapter11",
          number: 11,
          title: "A Unification of Information and Matter",
          page: 329,
          sections: [
            {
              id: "11.1",
              title: "Four revolutions in physics",
              page: 329,
              subsections: [
                { id: "11.1.1", title: "Mechanical revolution", page: 330 },
                { id: "11.1.2", title: "Electromagnetic revolution", page: 332 },
                { id: "11.1.3", title: "Relativity revolution", page: 333 },
                { id: "11.1.4", title: "Quantum revolution", page: 336 }
              ]
            },
            { id: "11.2", title: "It from qubit, not bit", page: 338 },
            {
              id: "11.3",
              title: "Emergence approach",
              page: 341,
              subsections: [
                { id: "11.3.1", title: "Two approaches", page: 341 },
                { id: "11.3.2", title: "Principle of emergence", page: 342 },
                { id: "11.3.3", title: "String-net liquid of qubits unifies light and electrons", page: 345 },
                { id: "11.3.4", title: "Evolving views for light and gauge theories", page: 349 },
                { id: "11.3.5", title: "Where to find long-range entangled quantum matter?", page: 352 }
              ]
            }
          ]
        }
      ]
    }
  ]
};
