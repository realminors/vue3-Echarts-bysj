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
        ['Accuracy', 0.9949, 0.9443, 0.9329, 0.9471, 0.9329],
        ['Precision', 0.9952, 0.9471, 0.9383, 0.952, 0.939],
        ['Recall', 0.9949, 0.9443, 0.9329, 0.9471, 0.9329],
        ['F1 Score', 0.9949, 0.9435, 0.9322, 0.9469, 0.9324],
        ['Kappas', 0.9942, 0.9379, 0.9251, 0.9411, 0.9251]
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
