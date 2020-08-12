import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home'
import Category from './category'
import Product from './product'
import Cart from './cart'
import Zhuanti from './zhuanti'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  Home,
  Category,
  Product,
  Cart,
  Zhuanti,
]

const router = new VueRouter({
  mode: 'history',  // 路由模式
  base: process.env.BASE_URL,
  routes
})

export default router
