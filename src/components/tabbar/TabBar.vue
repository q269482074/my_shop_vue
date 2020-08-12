<template>
  <div class>
    <van-tabbar v-model="tabActive" @change="onChange" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/zhuanti">专题</van-tabbar-item>
      <van-tabbar-item icon="goods-collect-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart" :badge="this.$store.getters['cart/getCartGoodsNum']">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  name: "Tabbar",
  data() {
    return {
      tabActive: 0
    };
  },
  //生命周期 - 创建时
  create() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    onChange(index) {
      this.tabActive = index;
    }
  },
  //插入视图模版
  components: {},
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

<style lang='stylus' scoped></style>