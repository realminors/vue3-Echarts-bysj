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
        ['Accuracy', 0.9747,0.7723,0.8006,0.8017,0.8006
],
        ['Precision',0.9736,0.6911,0.6721,0.6435,0.6907],
        ['Recall', 0.9747,0.7723,0.8006,0.8017,0.8006],
        ['F1 Score', 0.9736,0.7194,0.7169,0.7137,0.7169],
        ['Kappas', 0.9191,0.0668,0.0176,0.0000,0.0179]
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
