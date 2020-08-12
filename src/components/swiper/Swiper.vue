<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in Slider" :key="index">
        <img :src="wz+item.img" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {};
  },
  props: {
    Slider: {
      type: Array,
      default() {
        return [];
      }
    },
    wz: {
      type: String,
      default() {
        return "";
      }
    }
  },
  //生命周期 - 创建时
  create() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {},
  //监听属性 类似于data概念
  components: {},
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 10rem;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>