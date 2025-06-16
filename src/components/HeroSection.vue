<template>
  <section id="home" class="hero-section d-flex align-items-center justify-content-center">
    <canvas ref="threeCanvas" class="hero-canvas"></canvas>

    <div class="hero-content container text-center">
       <div class="row justify-content-center">
        <div class="col-lg-10">
          <h1 class="display-4 fw-bold">王大明 (Your Name)</h1>
          <p class="lead mt-4 mb-5 mx-auto" style="max-width: 600px;">
            一位對 three.js 充滿熱情的開發者，致力於在網頁上創造富有趣味與互動性的 3D 體驗。
          </p>
          <a href="#portfolio" class="btn btn-accent btn-lg">探索我的專案</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
// 從 three.js 範例中引入繪製粗線條所需模組
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';

// DOM 元素引用
const threeCanvas = ref(null);
// 存放所有星球模型的陣列
const polyhedrons = [];


// Vue 生命週期鉤子，在元件掛載後執行
onMounted(() => {
  if (!threeCanvas.value) return;

  // ===================================================
  // 1. 基礎設定 (Setup)
  // ===================================================

  // 創建場景
  const scene = new THREE.Scene();

  // 創建相機
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  // 創建渲染器
  const renderer = new THREE.WebGLRenderer({
    canvas: threeCanvas.value,
    alpha: true, // 允許背景透明
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);


  // ===================================================
  // 2. 光源 (Lighting)
  // ===================================================

  // 環境光，均勻照亮場景，避免陰影處全黑
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  // 點光源，製造高光和陰影，突顯立體感
  const pointLight = new THREE.PointLight(0xffffff, 1.2, 300);
  pointLight.position.set(50, 50, 50);
  scene.add(pointLight);


  // ===================================================
  // 3. 場景物件 (Scene Objects)
  // ===================================================

  // 創建星塵粒子
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 5000;
  const posArray = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 500;
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const particlesMaterial = new THREE.PointsMaterial({ size: 0.1, color: 0x00aaff });
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // 創建多面體星球模型
  // [修正] 將創建的模型推入 polyhedrons 陣列中
  polyhedrons.push(createPolyhedron(12, '#F92672', { x: -60, y: -30, z: -80 }, 'icosahedron'));
  polyhedrons.push(createPolyhedron(12, '#F1C40F', { x: -80, y: 20, z: -20 }, 'icosahedron'));
  polyhedrons.push(createPolyhedron(8, '#00BCD4', { x: 40, y: -15, z: -5 }, 'octahedron'));


  // ===================================================
  // 4. 輔助函式 (Helper Functions)
  // ===================================================

  /**
   * 創建一個帶有線框的多面體模型群組
   * @param {number} size - 尺寸
   * @param {string} color - 實心顏色
   * @param {object} position - 位置 {x, y, z}
   * @param {string} type - 'icosahedron' 或 'octahedron'
   * @returns {THREE.Group} 包含實心和線框模型的群組
   */
  function createPolyhedron(size, color, position, type = 'icosahedron') {
    const group = new THREE.Group();

    // 創建實心模型的幾何體
    let solidGeometry;
    if (type === 'octahedron') {
      solidGeometry = new THREE.OctahedronGeometry(size);
    } else {
      solidGeometry = new THREE.IcosahedronGeometry(size);
    }

    // 創建實心模型的材質與網格
    const solidMaterial = new THREE.MeshStandardMaterial({
      color: color,
      flatShading: true,
    });
    const solidMesh = new THREE.Mesh(solidGeometry, solidMaterial);
    group.add(solidMesh);

    // 創建線框模型
    const edgesGeometry = new THREE.EdgesGeometry(solidGeometry);
    const lineGeometry = new LineGeometry().fromEdgesGeometry(edgesGeometry);
    const lineMaterial = new LineMaterial({
      color: 0xffffff,
      linewidth: 2,
      resolution: new THREE.Vector2(window.innerWidth, window.innerHeight)
    });
    const wireframe = new Line2(lineGeometry, lineMaterial);
    group.add(wireframe);

    // 設定整個群組的位置並加入場景
    group.position.set(position.x, position.y, position.z);
    scene.add(group);

    return group;
  }


  // ===================================================
  // 5. 動畫與互動 (Animation & Interaction)
  // ===================================================

  const mouse = { x: 0, y: 0 };
  const clock = new THREE.Clock();

  // 動畫主迴圈
  function animate() {
    const elapsedTime = clock.getElapsedTime();

    // 場景視差效果
    scene.rotation.y = -mouse.x * 0.1;
    scene.rotation.x = mouse.y * 0.1;

    // 粒子背景緩慢旋轉
    particlesMesh.rotation.z = elapsedTime * 0.02;

    // 星球模型自轉
    polyhedrons.forEach(polyhedron => {
      polyhedron.rotation.x += 0.001;
      polyhedron.rotation.y += 0.002;
    });

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  }
  animate(); // 啟動動畫


  // ===================================================
  // 6. 事件監聽與生命週期管理 (Event Listeners & Lifecycle)
  // ===================================================

  // 監聽滑鼠移動
  function handleMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  // 監聽視窗縮放
  function handleResize() {
    // 更新相機
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // 更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // [修正] 遍歷所有模型，更新其線框材質的解析度
    polyhedrons.forEach(group => {
      const lineMaterial = group.children[1]?.material;
      if (lineMaterial?.isLineMaterial) {
        lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
      }
    });
  }

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleResize);

  // 元件卸載時，清理資源
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
    renderer.dispose();
    // 理想情況下，也應遍歷場景 dispose 所有 geometry, material 等，避免記憶體洩漏
  });
});
</script>

<style scoped>
/* Style 部分維持不變 */
.hero-section {
  position: relative;
  background-color: #1a1d24; /* 直接使用顏色，因 CSS 變數在 style scoped 中可能無法被 JS 讀取 */
  min-height: 100vh;
  overflow: hidden;
}
.hero-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
  color: #f0f2f5;
}
h1 { font-family: 'Poppins', sans-serif; }
p, a { font-family: 'Inter', sans-serif; }
.lead { color: #a0a7b4; }
.btn-accent {
  background-color: #00aaff;
  border-color: #00aaff;
  color: #ffffff;
  padding: 12px 30px;
  font-weight: bold;
  transition: all 0.3s ease;
}
.btn-accent:hover {
  background-color: #0088cc;
  border-color: #0088cc;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 170, 255, 0.2);
}
</style>
