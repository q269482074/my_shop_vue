<template>
  <div class="HomeBrand">
    <van-grid direction="horizontal" :column-num="2" :border="false">
      <van-grid-item 
        v-for="(item,index) in newGoods" 
        :key="index"
        :to="'/product/'+item.id"
      >
        <div>
          <div class="img">
            <img lazy-load v-lazy="http2+item.img_url" alt />
          </div>
          <div class="info">
            <div class="goodsname">{{item.name}}</div>
            <div class="price">{{item.price}}</div>
          </div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "HomeNew",
  data() {
    return {};
  },
  props: {
    newGoods: {
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
    showPrice(price) {
      return price.toFixed(0) + "起";
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
  width: 188px;
  height: 180px;
  overflow: hidden;
  margin: 5px 0;
  div .img {
    width: 150px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    text-align: center;
    width: 150px;
    .goodsname {
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .price {
      font-size: 14px;
    }
  }
}
</style>