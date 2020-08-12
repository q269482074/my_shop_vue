<template>
  <div class="home">
    <SearchInput />
    <!-- 轮播图 -->
    <Swiper :Slider="Slider" :wz="url" />
    <!-- 二楼 -->
    <HomeSrapper :floor2="floor2" />
    <!-- 品牌商品 -->
    <div class="floor-title brand">品牌直供</div>
    <HomeBrand :brand="brand" />
    <!-- 新品首发 -->
    <div class="floor-title newGoods">新品首发</div>
    <HomeNew :newGoods="newGoods" />
    <!-- 新品首发 -->
    <div class="floor-title rqtj">人气推荐</div>
    <HomeRqtj :rqtj="rqtj" />

    <TabBar />
  </div>
</template>

<script>
//请求接口
import { getHomeSwiper,
         getFloor2,
         getBrand,
         getNew,
         getRqtj,
} from '@/network/home.js'

//home组件
import HomeSrapper from './child/HomeWrapper'//2楼
import HomeBrand from './child/HomeBrand'//home品牌商品
import HomeNew from './child/HomeNew'//home新品首发
import HomeRqtj from './child/HomeRqtj'//home新品首发

//公共组件
import TabBar from '@/components/tabbar/TabBar'
import SearchInput from '@/components/searchinput/SearchInput'
import Swiper from '@/components/swiper/Swiper'

export default {
  name: "home",
  data() {
    return {
      searchData: "",
      Slider: [],
      floor2: [],
      brand: [],
      newGoods: [],
      rqtj: [],
      url: '',
    };
  },
  //生命周期 - 创建时
  create() {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getHomeSwiper();
    this.getFloor2();
    this.getBrand();
    this.getNew();
    this.getRqtj();
  },
  //方法集合
  methods: {
    //轮播图
    getHomeSwiper() {
      getHomeSwiper().then( (res) => {
        this.Slider = res.imgList;
        this.url = this.http;
      })
    },
    //二楼
    getFloor2() {
      getFloor2().then( res => {
        this.floor2 = res.info;
        // console.log(res.info);
      });
    },
    //品牌直销
    getBrand() {
      getBrand().then( res => {
        this.brand = res.info;
        // console.log(this.brand);
      });
    },
    //新品首发
    getNew() {
      getNew().then( res => {
        this.newGoods = res.info;
        // console.log(res.info);
      });
    },
    //人气推荐
    getRqtj() {
      getRqtj().then( res => {
        this.rqtj = res.info;
        // console.log(res);
      });
    }
  },
  //插入视图模版
  components: {
    Swiper,
    HomeSrapper,
    HomeBrand,
    HomeNew,
    HomeRqtj,
    TabBar,
    SearchInput,
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

<style lang='less' scoped>
.floor-title{
  text-align: center;
  margin: 15px 0;
}
</style>