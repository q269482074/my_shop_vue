<template>
  <div class="NavBar">
    <van-nav-bar
      :title="GoodsName"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "NavBar",
  data() {
    return {};
  },
  //生命周期 - 创建时
  create() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  props: {
    GoodsName: {
      type:String,
      default() {
        return '购物车'
      }
    }
  },
  //方法集合
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
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