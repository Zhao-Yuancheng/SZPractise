<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

// 添加跳转到曹威威老师页面的函数
const openTeacherPage = () => {
  // 这里应该是曹威威老师的详细页面URL
  window.open('https://marx.lzu.edu.cn/info/1134/6171.htm', '_blank'); // 替换为实际链接
};

// 使用Vue的生命周期钩子替代DOMContentLoaded
onMounted(() => {
  // 为所有成员卡片添加点击效果
  const cards = document.querySelectorAll('.member-card');
  cards.forEach(card => {
    card.addEventListener('click', function(this: HTMLElement) {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });
});
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <v-fab
    icon="mdi-arrow-left"
    size="small"
    style="position: fixed; top: 20px; left: 10px; z-index: 6"
    @click="router.back()"
  ></v-fab>
  <header>
    <div class="container">
      <div class="logo">兰州大学 LZU</div>
      <div class="subtitle">榜样中的思政课 - 关于我们</div>
    </div>
  </header>

  <div class="container">
    <h1>团队分工</h1>

    <div class="team-intro">
      <p>
        本项目由兰州大学大气科学学院2025级作业小组共同完成，旨在通过"榜样中的思政课"这一主题，展示学校的发展历程与精神传承。以下是各位团队成员的具体分工：
      </p>
    </div>

    <div class="team-members">
      <!-- 指导老师卡片 -->
      <div class="member-card teacher-card" @click="openTeacherPage">
        <div class="member-header teacher-header">
          <div class="member-name">曹威威</div>
          <div class="member-role">指导老师</div>
        </div>
        <div class="member-content">
          <ul class="member-tasks">
            <li>兰州大学马克思主义学院副教授</li>
            <li>硕士生导师</li>
            <li>研究方向：社会主义核心价值观、大学生思想政治教育等</li>
            <li>点击查看详细信息</li>
          </ul>
        </div>
      </div>

      <!-- 组长卡片 -->
      <div class="member-card">
        <div class="member-header">
          <div class="member-name">杨嘉芃</div>
          <div class="member-role">组长</div>
        </div>
        <div class="member-content">
          <ul class="member-tasks">
            <li>统筹规划项目整体进度</li>
            <li>负责"新世纪"栏目的图文内容</li>
            <li>负责"新青年"栏目的图文内容</li>
          </ul>
        </div>
      </div>

      <!-- 技术员卡片 -->
      <div class="member-card">
        <div class="member-header">
          <div class="member-name">赵元丞</div>
          <div class="member-role">技术员</div>
        </div>
        <div class="member-content">
          <ul class="member-tasks">
            <li>完成本项目的代码架构</li>
            <li>负责主页的图文内容</li>
            <li>负责“关于我们”页面的排版</li>
            <li>负责各篇图文的图片适配、背景优化</li>
            <li>项目编译与服务器临时发布</li>
          </ul>
        </div>
      </div>

      <!-- 人事部长卡片 -->
      <div class="member-card">
        <div class="member-header">
          <div class="member-name">管华强</div>
          <div class="member-role">人事部长</div>
        </div>
        <div class="member-content">
          <ul class="member-tasks">
            <li>团队人员管理与协调</li>
            <li>负责"改革开放"栏目的图文内容</li>
          </ul>
        </div>
      </div>

      <!-- 编辑卡片1 -->
      <div class="member-card">
        <div class="member-header">
          <div class="member-name">杨喜潭</div>
          <div class="member-role">编辑</div>
        </div>
        <div class="member-content">
          <ul class="member-tasks">
            <li>负责"建校伊始"栏目的图文内容</li>
          </ul>
        </div>
      </div>

      <!-- 编辑卡片2 -->
      <div class="member-card">
        <div class="member-header">
          <div class="member-name">肖逸轩</div>
          <div class="member-role">编辑</div>
        </div>
        <div class="member-content">
          <ul class="member-tasks">
            <li>负责"发展时期"栏目的图文内容</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="end-section">
            <div class="end-decoration">
                <div class="end-line"></div>
                <div class="end-circle">
                    <div class="end-text">END</div>
                </div>
                <div class="end-line"></div>
            </div>
            
            <p class="end-quote">“学笃，时宜，风正，人和”</p>
            <p class="end-signature">—— 大气科学学院 院训</p>
            
            <div class="end-icons">
                <div class="end-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="end-icon">
                    <i class="fas fa-book"></i>
                </div>
                <div class="end-icon">
                    <i class="fas fa-heart"></i>
                </div>
                <div class="end-icon">
                    <i class="fas fa-flag"></i>
                </div>
            </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Microsoft YaHei", "Segoe UI", sans-serif;
}

body {
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 头部样式 */
header {
  background: linear-gradient(135deg, #1a3a8f 0%, #2a56b6 100%);
  color: white;
  padding: 30px 0;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 16px;
  opacity: 0.9;
}

h1 {
  font-size: 28px;
  margin: 20px 0;
  color: #1a3a8f;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
}

h1:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #1a3a8f;
}

/* 团队介绍样式 */
.team-intro {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  line-height: 1.8;
  text-align: center;
}

/* 成员卡片样式 */
.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.member-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* 指导老师卡片特殊样式 */
.teacher-card {
  border: 2px solid #d4af37;
}

.teacher-card:hover {
  border-color: #b8941f;
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
}

.teacher-header {
  background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
}

.member-header {
  background-color: #1a3a8f;
  color: white;
  padding: 20px;
  text-align: center;
}

.member-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.member-role {
  font-size: 14px;
  opacity: 0.9;
}

.member-content {
  padding: 20px;
}

.member-tasks {
  list-style-type: none;
}

.member-tasks li {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  padding-left: 20px;
}

.member-tasks li:before {
  content: "•";
  color: #1a3a8f;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.member-tasks li:last-child {
  border-bottom: none;
}

/* 指导老师卡片特殊样式 */
.teacher-card .member-tasks li:before {
  color: #d4af37;
}
/* END部分样式 */
        .end-section {
            text-align: center;
            margin-top: 60px;
            padding: 40px 20px;
            position: relative;
        }

        .end-decoration {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
        }

        .end-line {
            height: 2px;
            background: linear-gradient(90deg, transparent, #1a3a8f, transparent);
            flex-grow: 1;
            max-width: 150px;
        }

        .end-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, #1a3a8f, #2a56b6);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 20px;
            box-shadow: 0 4px 15px rgba(26, 58, 143, 0.3);
            animation: pulse 2s infinite;
        }

        .end-text {
            font-size: 24px;
            font-weight: bold;
            color: white;
            letter-spacing: 2px;
        }

        .end-quote {
            font-size: 18px;
            color: #1a3a8f;
            font-style: italic;
            max-width: 600px;
            margin: 0 auto 20px;
            line-height: 1.6;
        }

        .end-signature {
            font-size: 16px;
            color: #666;
            margin-top: 10px;
        }

        .end-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
        }

        .end-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #1a3a8f, #2a56b6);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .end-icon:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(26, 58, 143, 0.4);
        }

/* 响应式调整 */
@media (max-width: 768px) {
  .team-members {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 24px;
  }

  .container {
    padding: 15px;
  }
}
</style>