<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

// 获取dom
const barRef = ref()

// x轴刻度
const barDate = ref([
  '07/01', '07/02', '07/03', '07/04', '07/05', '07/06', '07/07', '07/08', '07/09', '07/10', '07/11', '07/12', '07/13', '07/14', '07/15'  
])

// y轴数据
const barData = ref([
1000, 660, 420, 880, 660, 220, 630, 580, 835, 220, 590, 370, 1000, 610, 410
])

// const barRef = ref('')
onMounted(() => {  
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(barRef.value);
  // 绘制图表
  myChart.setOption({
    tooltip: {},
    xAxis: {
      data: barDate.value,
      axisLabel: {
        interval: 1
      },
    },
    yAxis: {
      min: 0,
      max: 1000
    },
    barWidth: 10,
    series: [
      {
        name: '销量',
        type: 'bar',
        data: barData.value,
        itemStyle: {
          normal: {
            barBorderRadius: 5
          }
        },
      }
    ],
    color: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 1, color: 'rgb(253, 116, 114)' // 100% 处的颜色
        },
        {
          offset: 0, color: 'rgb(254, 174, 161)' // 0% 处的颜色
        }
      ],
      global: false // 缺省为 false
    }

  });
})

</script>

<template>
  <div ref="barRef" style="width: 100%; height: 280px"></div>
</template>

<style lang='scss' scoped>

</style>