<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const tableData = [
  {
    name: 'Liver',
    sample: '41',
    feature: '22277',
    class: '2'
  },
  {
    name: 'Leukemia',
    sample: '64',
    feature: '22283',
    class: '5'
  },
  {
    name: 'Brain',
    sample: '130',
    feature: '54675',
    class: '5'
  },
  {
    name: 'Breast',
    sample: '151',
    feature: '54675',
    class: '6'
  },
  {
    name: 'humor11',
    sample: '174',
    feature: '12534',
    class: '11'
  },
  {
    name: 'Lung',
    sample: '443',
    feature: '22312',
    class: '3'
  },
  {
    name: 'MFD',
    sample: '700',
    feature: '649',
    class: '10'
  },
  {
    name: 'humor5',
    sample: '801',
    feature: '20531',
    class: '5'
  },
  {
    name: 'HAPT',
    sample: '840',
    feature: '561',
    class: '12'
  },
  {
    name: 'METABRIC',
    sample: '1871',
    feature: '489',
    class: '4'
  },
  {
    name: 'Pancancer',
    sample: '4756',
    feature: '2048',
    class: '2'
  }
]
</script>

<template>
  <div class="container">
    <div class="item">
      <p>
        这是一个将自定义卷积分类模型与传统机器学习分类模型对比结果可视化的网站。
      </p>
      <p>
        为了更好地验证模型的性能与鲁棒性，我挑选了11个不同样本范围的数据集（如右表格所示）。其中大部分为典型的低样本高纬度的微阵列数据集，也不乏一些已经经过筛选且样本量接近甚至大于特征数的数据集。
      </p>
      <p>
        所用数据集主要来源为：SBCB实验室
        <a href="https://sbcb.inf.ufrgs.br/cumida"
          >https://sbcb.inf.ufrgs.br/cumida</a
        >、Kaggle数据分析竞赛平台
        <a href="https://www.kaggle.com/">https://www.kaggle.com/</a>、UCI数据集
        <a href="http://archive.ics.uci.edu/">http://archive.ics.uci.edu/</a>
      </p>

      <div class="pic">
        <img
          src="../../pic/cumida.png"
          alt="微阵列数据"
          width="40%"
          height="20%"
        />
      </div>
    </div>
    <div class="item">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="sample" label="样本" />
        <el-table-column prop="feature" label="特征" />
        <el-table-column prop="class" label="种类" />
      </el-table>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
}
.item {
  flex: 1;
}
p {
  text-indent: 2em;
  line-height: 1.5em;
  overflow-wrap: break-word;
  font-family: 'Times New Roman', Times, serif;

  font-size: 16px;
  padding-left: 10px;
  padding-right: 30px;
}
.pic {
  text-align: center;
}
</style>
