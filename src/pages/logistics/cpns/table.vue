<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const tableData = [
  {
    index: '1',
    transportNum: '123',
    deployStatus: '456',
    orderNum: '789',
    orderTime: '135',
    senderName: '张三',
    senderMobile: '13307579469',
    senderAddr: '北京',
    recipientName: '李四',
    recipientMobile: '18906446788',
    recipientAddr: '上海',
  },
  {
    index: '2',
    transportNum: '123',
    deployStatus: '456',
    orderNum: '789',
    orderTime: '135',
    senderName: '张三',
    senderMobile: '13307579469',
    senderAddr: '北京',
    recipientName: '李四',
    recipientMobile: '18906446788',
    recipientAddr: '上海',
  },
  {
    index: '3',
    transportNum: '123',
    deployStatus: '456',
    orderNum: '789',
    orderTime: '135',
    senderName: '张三',
    senderMobile: '13307579469',
    senderAddr: '北京',
    recipientName: '李四',
    recipientMobile: '18906446788',
    recipientAddr: '上海',
  },
  {
    index: '4',
    transportNum: '123',
    deployStatus: '456',
    orderNum: '789',
    orderTime: '135',
    senderName: '张三',
    senderMobile: '13307579469',
    senderAddr: '北京',
    recipientName: '李四',
    recipientMobile: '18906446788',
    recipientAddr: '上海',
  },
  {
    index: '5',
    transportNum: '123',
    deployStatus: '456',
    orderNum: '789',
    orderTime: '135',
    senderName: '张三',
    senderMobile: '13307579469',
    senderAddr: '北京',
    recipientName: '李四',
    recipientMobile: '18906446788',
    recipientAddr: '上海',
  },
  {
    index: '6',
    transportNum: '123',
    deployStatus: '456',
    orderNum: '789',
    orderTime: '135',
    senderName: '张三',
    senderMobile: '13307579469',
    senderAddr: '北京',
    recipientName: '李四',
    recipientMobile: '18906446788',
    recipientAddr: '上海',
  },
  {
    index: '7',
    transportNum: '123',
    deployStatus: '456',
    orderNum: '789',
    orderTime: '135',
    senderName: '张三',
    senderMobile: '13307579469',
    senderAddr: '北京',
    recipientName: '李四',
    recipientMobile: '18906446788',
    recipientAddr: '上海',
  },
  {
    index: '8',
    transportNum: '123',
    deployStatus: '456',
    orderNum: '789',
    orderTime: '135',
    senderName: '张三',
    senderMobile: '13307579469',
    senderAddr: '北京',
    recipientName: '李四',
    recipientMobile: '18906446788',
    recipientAddr: '上海',
  },
  {
    index: '9',
    transportNum: '123',
    deployStatus: '456',
    orderNum: '789',
    orderTime: '135',
    senderName: '张三',
    senderMobile: '13307579469',
    senderAddr: '北京',
    recipientName: '李四',
    recipientMobile: '18906446788',
    recipientAddr: '上海',
  },
  {
    index: '10',
    transportNum: '123',
    deployStatus: '456',
    orderNum: '789',
    orderTime: '135',
    senderName: '张三',
    senderMobile: '13307579469',
    senderAddr: '北京',
    recipientName: '李四',
    recipientMobile: '18906446788',
    recipientAddr: '上海',
  }
]

const currentPage4 = ref(4)
const pageSize4 = ref(100)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}

const toDetail = () => {
  router.push('/detail')
}
</script>

<template>
  <div class="table">
    <el-table  :data="tableData" style="width: 100%" stripe >
      <el-table-column prop="index" label="序号" />
      <el-table-column prop="transportNum" label="运单编号" />
      <el-table-column prop="deployStatus" label="调度状态" />
      <el-table-column prop="orderNum" label="订单编号" />
      <el-table-column prop="orderTime" label="下单时间" />
      <el-table-column prop="senderName" label="发件人姓名" />
      <el-table-column prop="senderMobile" label="发件人电话" />
      <el-table-column prop="senderAddr" label="发件人地址" />
      <el-table-column prop="recipientName" label="收件人姓名" />
      <el-table-column prop="recipientMobile" label="收件人电话" />
      <el-table-column prop="recipientAddr" label="收件人地址" />
      <el-table-column label="操作">
        <template #default>
          <el-button link type="primary" @click="toDetail">操作</el-button>
        </template>
      </el-table-column>  
    </el-table>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[10, 20, 30, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.table{
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;

  .pagination{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>