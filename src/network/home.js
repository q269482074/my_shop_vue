import { request } from './request.js'


//轮播图接口
export function getHomeSwiper() {
  return request({
    url: 'index/api/getlunbo'
  });
}

//二楼数据接口
export function getFloor2() {
  return request({
    url: 'index/api/getFloor2'
  });
}

//品牌接口
export function getBrand() {
  return request({
    url: 'api2/api/getBrand'
  });
}

//新品首发接口
export function getNew() {
  return request({
    url: 'api2/api/getNew'
  });
}

//人气推荐接口
export function getRqtj() {
  return request({
    url: 'api2/api/getRqtj'
  });
}



