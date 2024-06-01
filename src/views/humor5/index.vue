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
        ['Accuracy', 0.9988, 0.9913, 0.9813, 0.9813, 0.9875],
        ['Precision', 0.9988, 0.9916, 0.9819, 0.9823, 0.988],
        ['Recall', 0.9988, 0.9913, 0.9813, 0.9813, 0.9875],
        ['F1 Score', 0.9988, 0.9912, 0.981, 0.9812, 0.9875],
        ['Kappas', 0.9983, 0.9884, 0.9751, 0.9752, 0.9835]
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
