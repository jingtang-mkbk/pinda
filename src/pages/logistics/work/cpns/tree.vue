<script setup>
import { ref, onMounted } from 'vue'
import { Search, Folder } from '@element-plus/icons-vue'
import useStore from '@/store'

const { worklist } = useStore()

const ipt = ref('')

const handleNodeClick = (data) => {
  console.log(data)
}

const defaultProps = {
  children: 'subAgencies',
  label: 'name',
}

onMounted(() => {
  worklist.getTreeData()
})
</script>

<template>
  <div>
    <el-input v-model="ipt" placeholder="请输入" :prefix-icon="Search" size="large" />
    <el-tree :data="worklist.treeData" :props="defaultProps" @node-click="handleNodeClick"/>
  </div>
</template>

<style lang='scss' scoped>


// :deep(.el-tree){
//   color: #000;

  
//   .el-tree-node__expand-icon.expanded{
//     transform: none;
//   }
//   .el-icon{
//     color: #409EFF !important;
//   }
// }

</style>