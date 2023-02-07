<script setup>
import * as echarts from 'echarts'

// props
const props = defineProps({
  colorList: Array,
  echartsData: Array
})

// 获取dom
const pieRef = ref() 



onMounted(() => {  
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(pieRef.value);
  // 绘制图表
  myChart.setOption({
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    color: props.colorList,
    series: [
      {
        name: '取件任务',
        type: 'pie',
        roseType: 'radius',
        radius: '50%',
        radius: ['40%', '70%'],
        data: props.echartsData,
        emphasis: {
          scaleSize : 10,
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]

  });
})

</script>

<template>
  <div ref="pieRef" style="width: 100%; height: 240px">pie</div>
</template>

<style lang='scss' scoped>

</style>