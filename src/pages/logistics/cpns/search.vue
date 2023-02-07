<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  sta: String,
  payStatus: String
})
const optionCity1 = [
  { label: '北京', value: 1 },
  { label: '上海', value: 2 },
  { label: '广州', value: 3 },
  { label: '深圳', value: 4 },
  { label: '杭州', value: 5 },
  { label: '武汉', value: 6 },
  { label: '南京', value: 7 },
]
const optionCity2 = [

]
const optionCity3 = [
  
]

const optionVal1 = [
  { label: '待取件', value: 1 },
  { label: '已取件', value: 2 },
  { label: '网点入库', value: 3 },
  { label: '待装车', value: 4 },
  { label: '运输中', value: 5 },
  { label: '网点出库', value: 6 },
  { label: '待派件', value: 7 },
]
const optionVal12 = [
  { label: '新建', value: 1 },
  { label: '已装车', value: 2 },
  { label: '到达', value: 3 },
  { label: '到达终端网点', value: 4 }
]

const optionVal2 = [
  { label: '未付', value: 1 },
  { label: '已付', value: 2 }
]

const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  index: '',
  status: '',
  payStatus: '',
  addresserName: '',
  addresserPhone: '',
  addresserAddress: '',
  addresseeName: '',
  addresseePhone: '',
  addresseeAddress: '',
})


const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('ruleForm', ruleForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<template>
  <div class="search">
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
    label-position="left"
  >
    <el-form-item label="订单编号" prop="index">
      <el-input v-model="ruleForm.index" placeholder="请输入订单编号"/>
    </el-form-item>
    <el-form-item :label="sta==='order' ? '订单状态' : '运单状态'" prop="status">
      <el-select v-model="ruleForm.status" placeholder="请选择">
        <div v-if="sta==='order'">
          <el-option v-for="it in optionVal1" :key="it.value" :label="it.label" :value="it.value" />
        </div>
        <div v-else>
          <el-option v-for="it in optionVal12" :key="it.value" :label="it.label" :value="it.value" />
        </div>
      </el-select>
    </el-form-item>
    <el-form-item label="付费状态" prop="payStatus" v-if="payStatus==='yes'">
      <el-select v-model="ruleForm.payStatus" placeholder="请选择">
        <el-option v-for="it in optionVal2" :key="it.value" :label="it.label" :value="it.value" />
      </el-select>
    </el-form-item>
    <el-form-item label="发件人姓名" prop="addresserName">
      <el-input v-model="ruleForm.addresserName" placeholder="请输入发件人姓名"/>
    </el-form-item>
    <el-form-item label="发件人电话" prop="addresserPhone">
      <el-input v-model="ruleForm.addresserPhone" placeholder="请输入发件人电话"/>
    </el-form-item>
    <el-form-item label="发件人地址" prop="addresserAddress" >
      <div class="address">
        <el-select v-model="ruleForm.addresserAddress" placeholder="请选择">
          <el-option v-for="it in optionCity1" :key="it.value" :label="it.label" :value="it.value" />
        </el-select>
        <el-select v-model="ruleForm.addresserAddress" placeholder="请选择">
          <el-option v-for="it in optionCity2" :key="it.value" :label="it.label" :value="it.value" />
        </el-select>
        <el-select v-model="ruleForm.addresserAddress" placeholder="请选择">
          <el-option v-for="it in optionCity3" :key="it.value" :label="it.label" :value="it.value" />
        </el-select>
      </div>
    </el-form-item>


    <el-form-item label="收件人姓名" prop="addresseeName">
      <el-input v-model="ruleForm.addresseeName" placeholder="请输入收件人姓名" />
    </el-form-item>
    <el-form-item label="收件人电话" prop="addresseePhone">
      <el-input v-model="ruleForm.addresseePhone" placeholder="请选择收件人电话" />
    </el-form-item>
    <el-form-item label="收件人地址" prop="addresseeAddress" >
      <div class="address">
        <el-select v-model="ruleForm.addresseeAddress" placeholder="请选择">
          <el-option v-for="it in optionCity1" :key="it.value" :label="it.label" :value="it.value" />
        </el-select>
        <el-select v-model="ruleForm.addresseeAddress" placeholder="请选择">
          <el-option v-for="it in optionCity2" :key="it.value" :label="it.label" :value="it.value" />
        </el-select>
        <el-select v-model="ruleForm.addresseeAddress" placeholder="请选择">
          <el-option v-for="it in optionCity3" :key="it.value" :label="it.label" :value="it.value" />
        </el-select>
      </div>
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)" color="#e15536">搜索</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<style lang='scss' scoped>
.search{
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;

  .address{
    display: flex;
    justify-content: space-between;

    .el-select{
      width: 32% !important;
    }
  }

  :deep(.el-form){
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .el-form-item{
      width: 30%;

      .el-select{
        width: 100%;
      }
    }
  }
}
</style>