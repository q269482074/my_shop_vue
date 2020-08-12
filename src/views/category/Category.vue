<template>
  <div class="Category">
    <SearchInput />

    <CateSideBar :cateList="cateList" />

    <TabBar />
  </div>
</template>

<script>
//请求接口
import {
  getCategory,
} from '@/network/category.js'

//Category组件
import CateSideBar from "./child/CateSideBar";

//公共组件
import TabBar from "@/components/tabbar/TabBar";
import SearchInput from "@/components/searchinput/SearchInput";

export default {
  name: "Category",
  data() {
    return {
      cateList: [],
    };
  },
  //生命周期 - 创建时
  create() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getCategory();
  },
  //方法集合
  methods: {
    getCategory() {
      // let c = [];
      getCategory().then( res => {
        // c = res.info;
        // c.forEach(item => {
        //   item.cate_name
        //   this.cateList.push({
        //     text: item.cate_name,
        //   });
        // });
        // console.log(c);
        this.cateList = res.info
      });
    }
  },
  //插入视图模版
  components: {
    TabBar,
    SearchInput,
    CateSideBar
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

<style lang='stylus' scoped></style>