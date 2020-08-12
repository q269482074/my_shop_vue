import { request } from './request.js'


//顶级分类名称
export function getCategory() {
  return request({
    url: 'api2/api/getCategory'
  });
}


//分类下的商品
export function getCateGoods(id) {
  return request({
    url: 'api2/api/getCateGoods',
    params: {
      id : id
    }
  });
}

//专题分类下的商品
export function getZTCateGoods(id) {
  return request({
    url: 'api2/api/getZTCateGoods',
    params: {
      id : id
    }
  });
}









