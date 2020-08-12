<template>
  <div class="HomeBrand">
    <van-grid direction="horizontal" :border="false" :column-num="2">
      <van-grid-item v-for="(item,index) in brand" :key="index">
        <img lazy-load v-lazy="http2+item.img_url" alt />
        <p>{{item.name}}</p>
        <h4>{{parseInt(item.goods_price) | showPrice}}</h4>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "HomeBrand",
  data() {
    return {};
  },
  props: {
    brand: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  //生命周期 - 创建时
  create() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {},
  //插入视图模版
  components: {},
  //监听属性 类似于data概念
  computed: {},
  //监听属性 类似于data概念
  watch: {},
  filters: {
      showPrice(price){
          return price.toFixed(0)+'起';
      }
  },
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
.van-grid-item {
  p{
    position: absolute;
    top: 10px;
    left: 10px;
  }
  h4 {
    position: absolute;
    top: 20px;
    left: 10px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>