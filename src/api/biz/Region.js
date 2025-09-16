import request from '@/utils/request'

// 查询中国行政区划（省市区县乡）列表
export function listRegion(query) {
  return request({
    url: '/biz/Region/list',
    method: 'get',
    params: query
  })
}
