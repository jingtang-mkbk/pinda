import { defineStore } from "pinia" 
import { getCode, login } from '@/api/login'
import { setIsLogin } from '@/utils/storage'

const useLgoin = defineStore('login', {
  state: () => {
    return {
      imgUrl: '',
      isLogin: false,
      userData: {},
    }
  },
  actions: {
    // setTest(val) {
    //   setTimeout(() => {
    //     this.testData = val
    //   })
    // },
    async getCode() {
      const { data: { data } } = await getCode('1', String(Date.now()))
      this.imgUrl = data
    },
    async onLogin(obj) {
      const { data: { code, data } } = await login(obj)
      this.userData = data
      if (code === 200) this.isLogin = true
      setIsLogin(true)
    }
  },
  getters: {
    // formatTestData() {
    //   return 'AAA' + this.testData
    // }
  }
})

export default useLgoin
