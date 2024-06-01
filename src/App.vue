<script setup>
import { ref, onMounted } from 'vue'
import NavMenu from './views/NavMenu.vue'
</script>

<template>
  <div id="moudle">
    <el-container class="header">
      <!-- 侧边导航 -->
      <NavMenu />
      <el-container>
        <!-- 头部 -->
        <el-header>
          <div class="header-title">基于深度学习的癌症分类系统可视化展示</div>
        </el-header>
        <!-- 内容 -->
        <el-main class="header">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.header-title {
  text-align: center;
  font-size: 24px;
  margin-top: 10px;
}
</style>
