<script setup>
import { ref, onMounted, nextTick } from 'vue'
const baiduMapRef = ref()

onMounted(() => {
    nextTick(()=>{
      initMap()
    })
  })
  const initMap = () => {
    let map = new BMapGL.Map(baiduMapRef.value);    // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(116.280190, 40.049191), 5);  // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }


</script>

<template>
  <div ref="baiduMapRef" style="width: 100%; height: 100%;">baidumap</div>
</template>

<style lang='scss' scoped>

</style>