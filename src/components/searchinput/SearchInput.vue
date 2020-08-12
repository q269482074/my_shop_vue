<template>
<div class='SearchInput'>
  <van-search v-model="searchData" placeholder="请输入商品名称" input-align="center" />
</div>
</template>

<script>
export default {
  name: 'SearchInput',
  data () {
    return {
      searchData: ''
    };
  },
  //生命周期 - 创建时
  create () {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {},
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
  activated() {},
}
</script>

<style lang='stylus' scoped>
</style>