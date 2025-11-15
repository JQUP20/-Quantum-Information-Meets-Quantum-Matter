// 映射section ID到对应的组件
export const sectionComponentMap = {
  // Chapter 1
  '1.1': () => import('../components/sections/Chapter_1_1.vue'),
  '1.2.1': () => import('../components/sections/Chapter_1_2_1.vue'),
  '1.2.2': () => import('../components/sections/Chapter_1_2_2.vue'),
  '1.2.3': () => import('../components/sections/Chapter_1_2_3.vue'),
  '1.3.1': () => import('../components/sections/Chapter_1_3_1.vue'),
  '1.3.2': () => import('../components/sections/Chapter_1_3_2.vue'),
  '1.3.3': () => import('../components/sections/Chapter_1_3_3.vue'),
  '1.3.4': () => import('../components/sections/Chapter_1_3_4.vue'),
  '1.3.5': () => import('../components/sections/Chapter_1_3_5.vue'),
  '1.3.6': () => import('../components/sections/Chapter_1_3_6.vue'),
  '1.4.1': () => import('../components/sections/Chapter_1_4_1.vue'),
  '1.4.2': () => import('../components/sections/Chapter_1_4_2.vue'),
  '1.4.3': () => import('../components/sections/Chapter_1_4_3.vue'),
  '1.5': () => import('../components/sections/Chapter_1_5.vue'),

  // Chapter 2
  '2.1': () => import('../components/sections/Chapter_2_1.vue'),
  '2.2.1': () => import('../components/sections/Chapter_2_2_1.vue'),
  '2.2.2': () => import('../components/sections/Chapter_2_2_2.vue'),
  '2.2.3': () => import('../components/sections/Chapter_2_2_3.vue'),
  '2.3': () => import('../components/sections/Chapter_2_3.vue'),
  '2.4': () => import('../components/sections/Chapter_2_4.vue'),
  '2.5.1': () => import('../components/sections/Chapter_2_5_1.vue'),
  '2.5.2': () => import('../components/sections/Chapter_2_5_2.vue'),
  '2.6': () => import('../components/sections/Chapter_2_6.vue'),

  // Chapter 3
  '3.1': () => import('../components/sections/Chapter_3_1.vue'),
  '3.2.1': () => import('../components/sections/Chapter_3_2_1.vue'),
  '3.2.2': () => import('../components/sections/Chapter_3_2_2.vue'),
  '3.2.3': () => import('../components/sections/Chapter_3_2_3.vue'),
  '3.3': () => import('../components/sections/Chapter_3_3.vue'),
  '3.4.1': () => import('../components/sections/Chapter_3_4_1.vue'),
  '3.4.2': () => import('../components/sections/Chapter_3_4_2.vue'),
  '3.4.3': () => import('../components/sections/Chapter_3_4_3.vue'),
  '3.5': () => import('../components/sections/Chapter_3_5.vue'),
  '3.6': () => import('../components/sections/Chapter_3_6.vue'),

  // Chapter 4
  '4.1': () => import('../components/sections/Chapter_4_1.vue'),
  '4.2': () => import('../components/sections/Chapter_4_2.vue'),
  '4.3.1': () => import('../components/sections/Chapter_4_3_1.vue'),
  '4.3.2': () => import('../components/sections/Chapter_4_3_2.vue'),
  '4.4.1': () => import('../components/sections/Chapter_4_4_1.vue'),
  '4.4.2': () => import('../components/sections/Chapter_4_4_2.vue'),
  '4.4.3': () => import('../components/sections/Chapter_4_4_3.vue'),
  '4.4.4': () => import('../components/sections/Chapter_4_4_4.vue'),
  '4.5.1': () => import('../components/sections/Chapter_4_5_1.vue'),
  '4.5.2': () => import('../components/sections/Chapter_4_5_2.vue'),
  '4.5.3': () => import('../components/sections/Chapter_4_5_3.vue'),
  '4.6': () => import('../components/sections/Chapter_4_6.vue'),
};

// 获取section的标题
export function getSectionTitle(sectionId) {
  const titles = {
    // Chapter 1
    '1.1': '1.1 Introduction',
    '1.2.1': '1.2.1 Joint Probability Without Correlations',
    '1.2.2': '1.2.2 Correlation Functions',
    '1.2.3': '1.2.3 Mutual Information',
    '1.3.1': '1.3.1 Pure and Mixed Quantum States',
    '1.3.2': '1.3.2 Composite Quantum Systems, Tensor Product Structure',
    '1.3.3': '1.3.3 Pure Bipartite State, Schmidt Decomposition',
    '1.3.4': '1.3.4 Mixed Bipartite State',
    '1.3.5': '1.3.5 Bell\'s Inequalities',
    '1.3.6': '1.3.6 Entanglement',
    '1.4.1': '1.4.1 The GHZ Paradox',
    '1.4.2': '1.4.2 Many-Body Correlation',
    '1.4.3': '1.4.3 Many-Body Entanglement',
    '1.5': '1.5 Summary and Further Reading',

    // Chapter 2
    '2.1': '2.1 Introduction',
    '2.2.1': '2.2.1 Single Qubit Unitary',
    '2.2.2': '2.2.2 Two-Qubit Unitary',
    '2.2.3': '2.2.3 N-Qubit Unitary',
    '2.3': '2.3 Quantum Circuits',
    '2.4': '2.4 Open Quantum Systems',
    '2.5.1': '2.5.1 The Lindblad Form',
    '2.5.2': '2.5.2 Master Equations for a Single Qubit',
    '2.6': '2.6 Summary and Further Reading',

    // Chapter 3
    '3.1': '3.1 Introduction',
    '3.2.1': '3.2.1 Bit Flip Code',
    '3.2.2': '3.2.2 Shor\'s Code',
    '3.2.3': '3.2.3 Other Noise Models',
    '3.3': '3.3 Quantum Error-Correcting Criteria, Code Distance',
    '3.4.1': '3.4.1 Shor\'s Code (Stabilizer Form)',
    '3.4.2': '3.4.2 The Stabilizer Formalism',
    '3.4.3': '3.4.3 Stabilizer States and Graph States',
    '3.5': '3.5 Toric Code',
    '3.6': '3.6 Summary and Further Reading',

    // Chapter 4
    '4.1': '4.1 Introduction',
    '4.2': '4.2 Many-Body Hilbert Space',
    '4.3.1': '4.3.1 Examples of Local Hamiltonians',
    '4.3.2': '4.3.2 Effect of Locality: Lieb-Robinson Bound and Area Law',
    '4.4.1': '4.4.1 The Local Hamiltonian Problem',
    '4.4.2': '4.4.2 The Quantum Marginal Problem',
    '4.4.3': '4.4.3 The N-Representability Problem',
    '4.4.4': '4.4.4 de Finetti Theorem and Mean-Field Bosonic Systems',
    '4.5.1': '4.5.1 Examples of Frustration-Free Hamiltonians',
    '4.5.2': '4.5.2 The Frustration-Free Hamiltonians Problem',
    '4.5.3': '4.5.3 The 2-Local Frustration-Free Hamiltonians',
    '4.6': '4.6 Summary and Further Reading',
  };
  return titles[sectionId] || sectionId;
}
