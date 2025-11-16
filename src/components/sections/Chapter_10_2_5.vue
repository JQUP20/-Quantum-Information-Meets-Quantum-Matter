<template>
  <div class="section-content">
    <h1>10.2.5 Summary of Results for Bosonic Systems</h1>

    <h2>Complete Classification Table</h2>

    <div class="comparison-box">
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Symmetry G</th>
            <th>Classification</th>
            <th>Physical Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1D</td>
            <td>ℤ₂</td>
            <td>H²(ℤ₂,U(1)) = ℤ₂</td>
            <td>Haldane phase</td>
          </tr>
          <tr>
            <td>1D</td>
            <td>U(1)</td>
            <td>H²(U(1),U(1)) = ℤ</td>
            <td>Integer QH</td>
          </tr>
          <tr>
            <td>1D</td>
            <td>SO(3)</td>
            <td>H²(SO(3),U(1)) = ℤ₂</td>
            <td>Integer/half-int spin</td>
          </tr>
          <tr>
            <td>2D</td>
            <td>ℤ₂^T (T²=-1)</td>
            <td>ℤ₂</td>
            <td>Quantum spin Hall</td>
          </tr>
          <tr>
            <td>3D</td>
            <td>ℤ₂^T (T²=-1)</td>
            <td>(ℤ₂)⁴</td>
            <td>Topological insulator</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Key Concepts Summary</h2>

    <div class="info-box">
      <ul>
        <li>SPT phases classified by group cohomology H^{d+1}(G,U(1))</li>
        <li>Edge states carry projective representations</li>
        <li>Protected by symmetry, cannot be gapped without breaking G</li>
        <li>Detected by string order, entanglement spectrum, edge spectroscopy</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chapter_10_2_5'
};
</script>

<style scoped>
@import '../../styles/section-styles.css';
</style>
