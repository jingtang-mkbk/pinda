<script setup>
import { reactive, ref, onMounted } from 'vue'
import useStore from '@/store'
import { useRouter } from 'vue-router';
const { login } = useStore()

// 路由跳转
const router = useRouter()

// 验证ref
const rulRef = ref()

// 表单数据
const form = reactive({
  account: 'pinda',
  password: '123456',
  code: '',
  key: '1',
  tenantCode: '0000'
})

// 表单验证
const rules = reactive({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: ['blur', 'change'] }
  ]
})

// 登录按钮
const onSubmit = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      login.onLogin(form)
        router.push('/')
    } else {
      console.log('error submit!', fields)
    }
  })
}

// 获取验证图片
onMounted(() => {
  login.getCode()
})
</script>

<template>
  <div class="login">
    <div class="left">
      <img src="@/assets/img/login.png" alt="">
    </div>
    <div class="right">
      <div class="form">
        <div class="pic">
          <img src="@/assets/img/logo-pinda.png" alt="">
        </div>
        <el-form
          :model="form"
          style="max-width: 440px"
          :rules="rules"
          ref="rulRef"
        >
          <el-form-item prop="account">
            <el-input v-model="form.account" placeholder="请输入账号" prefix-icon="User"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" type="password" placeholder="请输入密码" prefix-icon="Key" show-password/>
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="form.code" placeholder="请输入验证码" prefix-icon="Lock"/>
            <img :src="login.imgUrl" alt="">
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(rulRef)">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

</template>

<style lang='scss' scoped>
.login{
  width: 100vw;
  height: 100vh;
  display: flex;
  
  .left{
    width: 65%;

    img{
      width: 100%;
      height: 100%;
    }
  }

  .right{
    display: flex;
    align-items: center;

    .form{
      width: 460px;
      height: 440px;
      text-align: center;

      :deep(.el-form-item) {
        margin-bottom: 20px;
      }
      :deep(.el-input){
        height: 54px;
      }
      :deep(.el-icon){
        font-size: 20px;
      }
      :deep(.el-form-item:nth-child(3)){
        .el-input{
          width: 325px;
        }
        img{
          display: block;
          width: 105px;
          height: 54px;
          border-radius: 4px;
          margin-left: 10px;
        }
      }
      :deep(.el-button){
        width: 100%;
        height: 54px;
        font-size: 20px;
        color: #fff;
        background-image: linear-gradient(to right, rgb(217, 46, 44), rgb(248, 110, 43));
        border: none;
      }
    
      .pic{
        margin-bottom: 54px; 

        img{
          height: 56px;
        }
      }
    }
  }
}
</style>