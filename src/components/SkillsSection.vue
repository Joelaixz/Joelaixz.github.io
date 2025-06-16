<template>
  <section id="skills" class="skills-section py-5">
    <div class="container">
      <div class="row mb-5 text-center">
        <div class="col-lg-8 mx-auto">
          <h2 class="display-5 fw-bold">專業技能</h2>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        <div v-for="category in skillCategories" :key="category.title" class="col">
          <div class="skill-category-card h-100 p-4">
            <h4 class="fw-bold mb-3">{{ category.title }}</h4>

            <div class="d-flex flex-wrap gap-2">

              <span v-for="skill in category.skills" :key="skill"
                    class="badge rounded-pill fs-6 fw-normal">
                {{ skill }}
              </span>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// 使用 ref 定義技能資料，實踐 Data-Driven 設計
const skillCategories = ref([
  {
    title: '語言與框架 (Languages & Frameworks)',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Vue 3', 'React', 'Node.js']
  },
  {
    title: 'UI 工具與函式庫 (UI Libraries & Tools)',
    skills: ['Bootstrap 5', 'Tailwind CSS', 'Sass/SCSS', 'Element Plus', 'Three.js']
  },
  {
    title: '開發與建置工具 (Dev & Build Tools)',
    skills: ['Vite', 'Webpack', 'Git', 'GitHub', 'NPM', 'ESLint', 'Prettier']
  },
  {
    title: '設計工具 (Design Tools)',
    skills: ['Figma', 'Adobe XD', 'Photoshop']
  },
  {
    title: '後端與資料庫 (Backend & DB)',
    skills: ['Express.js', 'MongoDB', 'Firebase']
  },
  {
    title: '其他技能 (Other Skills)',
    skills: ['RESTful API', 'SEO 基礎', '響應式設計', '無障礙設計 (a11y)']
  }
]);
</script>

<style scoped>
.skills-section {
  /* 與 About 區塊同色，維持視覺連續性 */
  background-color: #252a33;
}

h2, h4 {
  font-family: 'Poppins', sans-serif;
  color: #f0f2f5;
}

.skill-category-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 技能標籤的自訂樣式 */
.badge {
  /* 使用您專案的強調色 */
  background-color: rgba(0, 170, 255, 0.1);
  border: 1px solid rgba(0, 170, 255, 0.3);
  color: #00aaff;
  padding: 0.5em 1em;
}
</style>
