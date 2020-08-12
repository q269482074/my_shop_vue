<template>
  <div class="Cart">
    <!-- 头部栏 -->
    <NavBar />

    <div class="content">
      <div class="goods" v-for="(item,index) in goodsList" :key="index">
        <img :src="http2+item.img" alt=""  @click="to(item.id)">
        <div class="goods-info">
          <div class="goods-name">{{item.name}}</div>
          <div class="goods-total">
            <div class="goods-price">
              ￥{{item.price}}
            </div>
            <!-- 计数器 -->
            <div class="goods-count">
              <div class="num">
                <van-stepper 
                  v-model="item.num" 
                  button-size="17px" 
                  @plus='plus(item.id,1)'
                  @minus='minus(item.id,-1)'
                />
              </div>
              <div class="del">
                <van-button type="danger" size="mini" @click="delGoods(index,item.id)">删除</van-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cartNull" v-show="flag">购物车还没有商品请进行选购</div>
    </div>
    <van-submit-bar
     :price="this.$store.getters['cart/getCartGoodsTotal'].price" 
     button-text="提交订单"
      @submit="onSubmit" 
    />
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar';

import { Toast } from 'vant';

export default {
  name: "Cart",
  data() {
    return {
      value: 1,
      goodsList: JSON.parse(localStorage.getItem('cart')),
      flag: false,
    };
  },
  //生命周期 - 创建时
  create() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.goodsList);
    this.flag = this.goodsList.length != 0 ? false : true;
    console.log(this.flag);
  },
  //方法集合
  methods: {
    //删除一个商品
    delGoods(index,id) {
      console.log(index+'------------'+id);
      this.goodsList.splice(index,1);
      if(this.goodsList.length == 0){
        this.flag=true;
        console.log(this.flag);
      }
      let arr = {
        'index' : index,
        'id' : id,
      };
      this.$store.commit('cart/delGoods',arr);
    },
    //点击加号
    plus(id,num) {
      let goods = {
        'id' : id,
        'num' : num
      };
      this.$store.commit('cart/addCart',goods);
    },
    //点击减号
    minus(id,num){
      let goods = {
        'id' : id,
        'num' : num
      };
      this.$store.commit('cart/addCart',goods);
    },
    //点击商品图片
    to(id) {
      this.$router.push('/product/'+id);
    },
    onSubmit() {
      Toast('该功能还未实现');
    }
  },
  //插入视图模版
  components: {
    NavBar
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
  activated() {}
};
</script>

<style lang='less' scoped>
.van-nav-bar{
  background: #cccccc;
}
.content{
  margin: 50px 0;
}


.goods{
  width: 90%;
  height: 100px;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  border: 1px solid #cccccc;
  img{
    height: 100%;
    width: 130px;
  }
  .goods-info{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .goods-name{
      word-wrap: break-word;
      word-break: break-all;
      overflow: hidden;
      margin-left: 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
  .goods-total{
    .goods-price{
      font-size: 18px;
      font-weight: bold;
      color: red;
      margin-left: 10px;
      margin-bottom: 15px;
    }
    .goods-count{
      display: flex;
      justify-content: space-between;
      .num{
        margin-left: 10px;
      }
    }
  }
}

.cartNull{
  font-size: 25px;
  text-align: center;
  margin: 10px;
}
</style>