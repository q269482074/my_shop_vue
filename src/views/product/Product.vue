<template>
  <div class="Product" ref="product">
    <NavBar :GoodsName="GoodsName" ref="navbar" />
    <div class="content">
      <Swipre :Slider="Slider" :wz="url" />

      <div class="free-serve">
        <div>30天无忧退货</div>
        <div>48小时快速退款</div>
        <div>满88元免邮费</div>
      </div>

      <div class="goods-desc">
        <p class="goods-name">{{GoodsInfo.name}}</p>
        <p class="goods-price">￥{{GoodsInfo.goods_price}}</p>
      </div>

      <van-cell title="请选择规格数量" is-link />

      <div class="goods-info">
        <table>
          <tr>
            <th colspan="2">商品参数</th>
          </tr>
          <tr v-for="(item,index) in Attr" :key="index">
            <td class="attr-name">{{item.attr_name}}</td>
            <td class="attr">{{item.attr_option_value}}</td>
          </tr>
        </table>
      </div>

      <div class="goods-desc-img">
        <img :src="http2+item.img" alt v-for="(item,index) in DescImg" :key="index" />
      </div>
    </div>

    <BuyTabBar :GoodsInfo="GoodsInfo" :SeleAttr="SeleAttr" />
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import Swipre from "@/components/swiper/Swiper";
import BuyTabBar from '@/components/buytabbar/BuyTabBar'

import { getGoodsInfo, getGoodsAttr, getGoodsDesc,getGoodsSeleAttr } from "@/network/goods";


export default {
  name: "Product",
  data() {
    return {
      id: "",
      TypeId: "",
      Attr: [],
      SeleAttr: [{}],
      GoodsInfo: [{}],
      list1:[],
      GoodsName: "",
      Slider: [
        {
          img: "/uploads/20200602/62cafced8a1363279c8db855868fa0ec08fac70f.jpg"
        },
        {
          img: "/uploads/20200602/2f7561a95edf8db1ba4e06021e23dd54564e740e.jpg"
        },
        {
          img: "/uploads/20200602/08de5f47f21fbe09aaa4506e7c600c338644aded.jpg"
        }
      ],
      DescImg: [],
      url: "",
    };
  },
  //生命周期 - 创建时
  create() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getGoodsId();
    this.getGoodsInfo();
    this.getGoodsDesc();
    // this.getGoodsSeleAttr();
    window.addEventListener("scroll", this.scrollTop);
  },
  //方法集合
  methods: {
    //获取商品id
    getGoodsId() {
      this.id = this.$route.params.id;
      this.url = this.http2;
    },
    //获取商品信息
    getGoodsInfo() {
      getGoodsInfo(this.id).then(res => {
        this.GoodsInfo = res.info;
        this.GoodsName = this.GoodsInfo.name;
        this.TypeId = res.info.type_id;
        this.Slider.unshift({
          img: this.GoodsInfo.img
        });
        getGoodsSeleAttr(this.id).then( res => {
          this.SeleAttr = res.info;
        });
      });
    },
    //获取商品详情图
    getGoodsDesc() {
      getGoodsDesc().then(res => {
        this.DescImg = res.info;
        // console.log(this.DescImg);
      });
    },
    scrollTop() {
      let scrollTop = document.documentElement.scrollTop; //滚动条的高
      let documentTop = document.body.scrollHeight; //全部内容的高
      let screenHeight = window.screen.availHeight; //当前屏幕的高
      // console.log(documentTop);
    },
    onClickCart() {
      this.show = !this.show;
    },
    onClickOrder() {
      this.show = !this.show;
    },
  },
  //插入视图模版
  components: {
    NavBar,
    Swipre,
    BuyTabBar,
  },
  //监听属性 类似于data概念
  computed: {},
  //监听属性 类似于data概念
  watch: {
    TypeId() {
      getGoodsAttr(this.TypeId).then(res => {
        this.Attr = res.info;
      });
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
.content {
  margin: 46px 0 50px;
}

.free-serve {
  display: flex;
  justify-content: space-around;
  background-color: #cccccc;
  font-size: 13px;
  margin: 5px 0;
  height: 24px;
  line-height: 24px;
  div {
    position: relative;
    color: #666;
  }
  div::before {
    content: "";
    display: block;
    position: absolute;
    top: 8px;
    left: -10px;
    width: 5px;
    height: 5px;
    border-radius: 2px;
    border: 1px solid red;
    background-color: red;
  }
}

.goods-desc {
  text-align: center;
  .goods-name {
    font-weight: bold;
    font-size: 18px;
  }
  .goods-price {
    color: red;
  }
}

.van-cell {
  background-color: #eeeeee;
  margin-bottom: 15px;
}

.goods-info {
  margin-bottom: 20px;
  table {
    width: 100%;
    // border-collapse: collapse;
    th {
      font-size: 20px;
      height: 35px;
      line-height: 35px;
    }
    td {
      background-color: #f3f3f3;
      color: #5e5e5e;
      height: 30px;
      line-height: 30px;
    }
    .attr-name {
      border-right: 1px solid #5e5e5e;
      width: 25%;
      text-align: center;
    }
    .attr {
      text-indent: 1em;
    }
  }
}

.goods-desc-img {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>