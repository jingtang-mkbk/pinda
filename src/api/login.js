import request from '@/utils/request'

// 获取图片
export const getCode = (key, timeStamp) => {
  return request({
    url: `/api/authority/captcha/?key=${key}&ts=${timeStamp}`,
    method: 'post',
  })
}

// 登录
export const login = (data) => {
  return request({
    url: '/api/authority/login',
    method: 'post',
    data
  })
}