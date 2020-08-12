<template>
  <div class="HomeRqtj">
    <van-card
      van-ellipsis
      v-for="(item,index) in rqtj"
      :key="index"
      price="2.00"
      desc="描述信息"
      :title="item.name"
      :thumb="http2+item.img_url"
      v-lazy="http2+item.img_url"
      lazy-load
      @click="to(item.id)"
    />
  </div>
</template>

<script>
export default {
  name: "HomeRqtj",
  data() {
    return {};
  },
  props: {
    rqtj: {
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
  methods: {
    to(id) {
      this.$router.push('/product/'+id);
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

<style lang='less' scoped>
.HomeRqtj{
  margin-bottom: 50px;
}
.van-card__content{
  justify-content: center;
  .van-card__title {
    font-weight: bold;
    font-size: 15px;
  }
}
.van-card__price{
  color: red;
  font-size: 15px;
}
</style>