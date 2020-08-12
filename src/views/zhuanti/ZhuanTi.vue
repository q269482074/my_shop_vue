<template>
<div class='zhuanti'>
  <!-- 头部导航栏 -->
  <van-tabs v-model="active" swipeable sticky @click="click">
    <div class="content">
      <van-tab v-for="(item,index) in cateList" 
        :title="item.text" 
        :key="index"
        :name="item.id"
      >
      <div class="goods-itme" v-for="(item2,index1) in goodsList" :key="index1" @click="toProduct(item2.id)">
        <img v-lazy="http2+item2.img_url" alt=""/>
        <div class="details">
          <div class="title">
            {{item2.name}}
          </div>
          <div class="goods-content">
            123123123213123123123123123213123123123123123213123123123123123213123123123123123213123123123123123213123123123123123213123123123123123213123123123123123213123123123123123213123123
          </div>
        </div>
      </div>
      </van-tab>
    </div>
  </van-tabs>
  <TabBar />
</div>
</template>

<script>

import {
  getCategory,
  getZTCateGoods
} from '@/network/category.js'

import TabBar from '@/components/tabbar/TabBar';
import NavBar from '@/components/navbar/NavBar';

export default {
  name: 'ZhuanTi',
  data () {
    return {
      active: "",
      cateList: [],
      goodsList: [],
    };
  },
  //生命周期 - 创建时
  create () {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.getCategory();
  },
  //方法集合
  methods: {
    //获取头部导航栏
    getCategory() {
      getCategory().then( res => {
        this.cateList = res.info;
      });
      getZTCateGoods(1).then( res => {
        this.goodsList = res.info;
      });
    },
    //点击头部导航栏
    click(id,title) {
      getZTCateGoods(id).then( res => {
        this.goodsList = res.info;
        console.log(this.goodsList);
      });
    },
    //点击图片进入商品
    toProduct(id){
      this.$router.push('/product/'+id);
    }
  },
  //插入视图模版
  components: {
    TabBar,
  },
  //监听属性 类似于data概念
  computed: {},
  //监听属性 类似于data概念
  watch: {},
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
}
</script>

<style lang='less' scoped>
.content{
  margin-bottom: 55px;
}
.goods-itme{
  height: 250px;
  width: 90%;
  margin: 10px auto;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 0 9px #ccc;
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
  .details{
    height: 85px;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, .45);
    bottom: 0;
    color: #ffffff;
    .title{
      font-size: 22px;
      text-align: center;
      font-weight: bold;
    }
    .goods-content{
      margin-top: 3px;
      padding: 2px;
      word-wrap: break-word;
      word-break: break-all;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
}
</style>