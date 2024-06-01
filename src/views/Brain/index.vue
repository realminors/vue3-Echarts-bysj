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
        ['Accuracy', 0.9831,0.4385,0.3769,0.3615,0.2769],
        ['Precision', 0.9877,0.5951,0.5832,0.5817,0.5815],
        ['Recall', 0.9831,0.4385,0.3769,0.3615,0.2769],
        ['F1 Score', 0.9837,0.4870,0.4233,0.3739,0.3314],
        ['Kappas', 0.9758,0.1070,0.0987,0.1207,0.0437]
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
