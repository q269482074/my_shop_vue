<template>
  <div class="CateSideBar">
    <van-tree-select
      :items="items"
      :main-active-index.sync="activeIndex"
      height="calc(100vh - 104px)"
    >
      <template #content>
        <van-grid :column-num="2" icon-size="65px">
          <van-grid-item
            :icon="http2+item.img_url"
            :text="item.name"
            v-for="(item,index) in rightGoodsList"
            :key="index"
            :to="'/product/'+item.id"
          ></van-grid-item>
        </van-grid>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { getCateGoods } from "@/network/category.js";

export default {
  name: "CateSideBar",
  data() {
    return {
      activeIndex: 0,
      // items: [{ text: "分组 1" }, { text: "分组 2" }]
      rightGoodsList: [],
      cache: [],
      cacheData: [],
    };
  },
  //生命周期 - 创建时
  create() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getFiestData();
  },
  props: {
    cateList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  //方法集合
  methods: {
    //获取初始商品
    getFiestData() {
      getCateGoods(1).then(res => {
        this.rightGoodsList = res.info;
        this.cache.push([0, res.info]);
      });
    },
    //缓存商品数据
    getCache(page) {
      for (let i = 0; i < this.cache.length; i++) {
        if (this.cache[i][0] == page) {
          return this.cache[i];
        }
      }
      return false;
    }
  },
  //插入视图模版
  components: {},
  //监听属性 类似于data概念
  computed: {
    items() {
      let arr = [];
      this.cateList.forEach(item => {
        arr.push(item);
      });
      return arr;
    }
  },
  //监听属性 类似于data概念
  watch: {
    //点击左侧栏获取商品
    activeIndex() {
      this.cacheData = this.getCache(this.activeIndex);
      if(this.cacheData != false){
        this.rightGoodsList = this.cacheData[1];
      }else{
        getCateGoods(this.cateList[this.activeIndex].id).then(res => {
          this.rightGoodsList = res.info;
          this.cache.push([this.activeIndex, res.info]);
          console.log(this.cache);
        });
      }
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

<style lang='stylus' scoped></style>