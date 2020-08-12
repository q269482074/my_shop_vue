<template>
  <div class="HomeSrapper">
    <van-grid :column-num="4" :border="false">
      <van-grid-item v-for="(item,index) in floor2" :key="index" :icon="http+item.img" :text="item.name" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "HomeSrapper",
  data() {
    return {};
  },
  props: {
    floor2: {
      type:Array,
      default(){
        return []
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
.HomeSrapper {
  margin: 15px 0;
}
</style>