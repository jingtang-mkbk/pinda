/** 
 * test 
*/

import request from '@/utils/request.js'

export const test = () => {
  return request({
    url: '/api/authority/captcha',
    method: 'get',
  })
}
