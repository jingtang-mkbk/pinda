<script setup>
import Search from '../../cpns/search.vue'
import Table from '../../cpns/table.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const aaa = localStorage.getItem('pinda-express-switch')

const flag = ref(aaa || '/express/pickuptask')
const switchData = ref([
  { txt: '取件任务', id: '/express/pickuptask'},
  { txt: '派件任务', id: '/express/dispatchtask'} ,
  { txt: '已取消' , id: '/express/cancel' }
])

const switchClick = (id) => {
  localStorage.setItem('pinda-express-switch', id)
  flag.value = id
  router.push(id)
}

</script>

<template>
  <div class="express">
    <div class="switch">
      <div v-for="it in switchData" :class="['btn', it.id===flag?'active': '']" @click="switchClick(it.id)">{{it.txt}}</div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang='less' scoped>
.express{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .switch{
    height: 50px;
    width: 100%;
    background-color: #fff;
    display: flex;
    margin-bottom: 16px;

    .btn{
      width: 120px;
      line-height: 50px;
      text-align: center;
      font-size: 14px;
      color: #20232a;
      cursor: pointer;
    }
    .active{
      color: #e15536;
      background-color: #ffeeeb;
    }
  }

  .container{
    flex: 1;
  }
}
</style>