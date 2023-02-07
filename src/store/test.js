/**
 * pinia使用模板
 */
import { defineStore } from "pinia" 

const useTest = defineStore('test', {
  state: () => {
    return {
      testData: 'test'
    }
  },
  actions: {
    setTest(val) {
      setTimeout(() => {
        this.testData = val
      })
    }
  },
  getters: {
    formatTestData() {
      return 'AAA' + this.testData
    }
  }
})

export default useTest



/**
 * 组件中使用
 * 
 * <template>
 *    <div>
 *      {{ test.testData }}  {{ formatTestData }}
 *      <button @click="updateTestData">修改testData</button>
 *    </div>
 * </template>
 * 
 * <script lang="ts" setup>
 *    import { storeToRefs } from 'pinia'
 *    import useStore from '@/store'
 *    const { test } = useStore()
 *    
 *    让结构的数据是响应式的方法
 *    const { test, formatTestData } = storeToRefs(test)
 * 
 *    const updateTestData = () => {
 *      test.setTest('modifyTestData')
 *    }
 * </script>
 */
