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
  };
  return titles[sectionId] || sectionId;
}
