import { request } from './request.js'

//顶级分类名称
export function getGoodsInfo(id) {
  return request({
    url: 'api2/api/getGoodsInfo',
    params: {
      id:id
    }
  });
}


//获取商品属性
export function getGoodsAttr(type_id) {
  return request({
    url: 'api2/api/getGoodsAttr',
    params: {
      type_id:type_id
    }
  });
}

//获取商品详情图片
export function getGoodsDesc() {
  return request({
    url: 'api2/api/getGoodsDesc',
  });
}

//获取商品已选择属性
export function getGoodsSeleAttr(id) {
  return request({
    url: 'api2/api/getGoodsSeleAttr',
    params: {
      id:id,
    }
  });
}


