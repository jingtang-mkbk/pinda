import { defineStore } from "pinia" 
import { getTreeData } from '@/api/worklist'

const useWorklist = defineStore('worklist', {
  state: () => {
    return {
      treeData: []
    }
  },
  actions: {
    async getTreeData() {
      const { data: { data } } = await getTreeData()
      this.treeData = data
    }
  },
})

export default useWorklist