import request from '@/utils/request'

// 获取图片
export const getTreeData = () => {
  return request({
    url: `/api/authority/org/tree`
  })
}