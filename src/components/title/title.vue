<script setup>
const props = defineProps({
  title: String
})

</script>

<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<style lang='scss' scoped>
.title{
  padding: 18px 20px;
  width: 100%;
  font-size: 14px;
  color: #333;
}
</style>