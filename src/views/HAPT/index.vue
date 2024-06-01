<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chart = ref()

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value)

  var option = {
    title: {
      text: '分类器对比'
    },
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', 'CNN-AT&&CN', 'LR', 'RF', 'SVM', 'KNN'],
        ['Accuracy', 0.9912, 0.8881, 0.8595, 0.875, 0.8607],
        ['Precision', 0.992, 0.8979, 0.8559, 0.8658, 0.8676],
        ['Recall', 0.9912, 0.8881, 0.8595, 0.875, 0.8607],
        ['F1 Score', 0.9912, 0.8878, 0.8512, 0.8666, 0.8571],
        ['Kappas', 0.9896, 0.8678, 0.8335, 0.852, 0.8353]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {
      type: 'value',
      min: 0,
      max: 1
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
      { type: 'bar' },
      { type: 'bar' },
      { type: 'bar' },
      { type: 'bar' },
      { type: 'bar' }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
})
</script>

<template>
  <div ref="chart" style="width: 100%; height: 100%"></div>
</template>

<style scoped></style>
