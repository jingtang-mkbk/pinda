<script lang='ts' setup>
import Search from '../cpns/search.vue'
import Table from '../cpns/table.vue'

</script>

<template>
  <div class="waybill">
    <Search sta="waybill" payStatus="no"/>
    <div class="down">
      <Table />
    </div>
  </div>
</template>

<style lang='less' scoped>
.waybill{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .down{
    flex: 1;
  }
}
</style>