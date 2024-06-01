<script setup>
import { reactive } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const items = reactive([
  {title:'Liver',url:'/Liver'},
  {title:'Leukemia',url:'/Leukemia'},
  {title:'Brain',url:'/Brain'},
  {title:'Breast',url:'/Breast'},
  {title:'humor11',url:'/humor11'},
  {title:'Lung',url:'/Lung'},
  {title:'MFD',url:'/MFD'},
  {title:'humor5',url:'/humor5'},
  {title:'HAPT',url:'/HAPT'},
  {title:'METABRIC',url:'/METABRIC'},
  {title:'Pancancer',url:'/Pancancer'},
])

</script>

<template>
  <el-aside width="200px" class="aside">
      <el-menu
        default-active="/index"
        class="el-menu-vertical-demo" router 
      >
      <el-menu-item index="/index">
          <el-icon ><icon-menu /></el-icon>
          <span>数据集</span>
        </el-menu-item>

      <el-menu-item :index="v.url" v-for="v in items" :key="v.url">
          <el-icon></el-icon>
          <span>{{v.title}}</span>
        </el-menu-item>
      </el-menu>
  </el-aside>
</template>

<style scoped></style>
