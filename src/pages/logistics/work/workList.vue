<script setup>
import Title from '@/components/title/title.vue'
import BaiduMap from '../../../components/baiduMap/baiduMap.vue'
import Tree from './cpns/tree.vue'

</script>

<template>
  <div class="worklist">
    <div class="left">
      <Tree/>
    </div>
    <div class="right">
      <Title title="作业范围" />
      <div class="map">
        <BaiduMap/>
      </div>
    </div>    
  </div>
</template>

<style lang='less' scoped>
.worklist{
  width: 100%;
  height: 100%;
  display: flex;

  .left{
    width: 20%;
    height: 100%;
    margin-right: 16px;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;
  }

  .right{
    flex: 1;
    background-color: #fff;
    border-radius: 4px;
    height: 100%;
    display: flex;
    flex-direction: column;

    .map{
      padding: 0 20px 20px 20px;
      flex: 1;
    }
  }
}
</style>