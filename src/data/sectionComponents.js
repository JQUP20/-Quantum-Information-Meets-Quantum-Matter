// 映射section ID到对应的组件
export const sectionComponentMap = {
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
};

// 获取section的标题
export function getSectionTitle(sectionId) {
  const titles = {
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
  };
  return titles[sectionId] || sectionId;
}
