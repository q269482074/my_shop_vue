<template>
  <div class="BuyTabBar">
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="this.cartNum" to="/cart" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickOrder" />
    </van-goods-action>

    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="this.GoodsInfo.id"
      :close-on-click-overlay="true"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>

import { Toast } from 'vant';

let sku = {
  // 数据结构见下方文档
  tree: [
    {
      k: "颜色", // skuKeyName：规格类目名称
      v: [
        {
          id: "30349", // skuValueId：规格值 id
          name: "红色" // skuValueName：规格值名称
        },
        {
          id: "1215",
          name: "蓝色"
        }
      ],
      k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
    },
    {
      k: "号码", // skuKeyName：规格类目名称
      v: [
        {
          id: "1111", // skuValueId：规格值 id
          name: "S" // skuValueName：规格值名称
        },
        {
          id: "2222",
          name: "M"
        }
      ],
      k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
    }
  ],
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  list: [
    {
      id: 2261, // skuId，下单时后端需要
      price: 110000, // 价格（单位分）
      s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
      s2: "2222", // 规格类目 k_s 为 s2 的对应规格值 id
      s3: "0", // 最多包含3个规格值，为0表示不存在该规格
      stock_num: 110 // 当前 sku 组合对应的库存
    },
    {
      id: 2261, // skuId，下单时后端需要
      price: 120000, // 价格（单位分）
      s1: "30349", // 规格类目 k_s 为 s1 的对应规格值 id
      s2: "2222", // 规格类目 k_s 为 s2 的对应规格值 id
      s3: "0", // 最多包含3个规格值，为0表示不存在该规格
      stock_num: 110 // 当前 sku 组合对应的库存
    }
  ],
  price: 1, // 默认价格（单位元）
  stock_num: 227, // 商品总库存
  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: false // 是否无规格商品
}


export default {
  name: "BuyTabBar",
  data() {
    return {
      show: false,
      goodsData: [],
      sku: sku,
      hide_stock: true, // 是否隐藏剩余库存,
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      },
      cartNum: 0,
    };
  },
  //生命周期 - 创建时
  create() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  // props: ['GoodsInfo','SeleAttr'],
  props:['GoodsInfo','SeleAttr'],
  //方法集合
  methods: {
    onClickCart() {
      this.show = !this.show;
    },
    onClickOrder() {
      this.show = !this.show;
    },
    onBuyClicked() {
      console.log("直接购买");
    },
    onAddCartClicked(goodsData) {
      console.log(goodsData);
      let cartInfo = [];
      cartInfo = {
        'id' : goodsData.goodsId,
        'name' : this.GoodsInfo.name,
        'img' : this.GoodsInfo.img,
        'num' : goodsData.selectedNum,
        'price' : goodsData.selectedSkuComb.price / 100,
      }
      this.$store.commit('cart/addCart',cartInfo);
      this.show = false;
      Toast('加入购物车');
      console.log("加入购物车");  
    },
    
  },
  //插入视图模版
  components: {},
  //监听属性 类似于data概念
  computed: {},
  //监听属性 类似于data概念
  watch: {
    //商品信息
    GoodsInfo() {
      this.sku.price = this.GoodsInfo.goods_price;
      this.goods.title = this.GoodsInfo.name;
      this.goods.picture = this.http2+this.GoodsInfo.img;
    },
    SeleAttr() {
      for(let i in this.SeleAttr){
        this.goodsData.push(this.SeleAttr[i]);
      }
      let tree = [];
      let treelist = [];
      this.goodsData.forEach( (item,k) => {
        let arr = [];
        item.forEach( item2 => {
          treelist.push({
            id : item2.id,
            price : this.GoodsInfo.goods_price*100,
            s1 : item2.id,
            s2 : '0',
            s3 : '0',
            stock_num: 110
          });
          arr.push({
            id : item2.id,
            name : item2.attr_value,
          });
        })
        tree.push({
          k : item[0].attr_name,
          v : arr,
          k_s: 's'+(k+1),
        });
      });
      this.sku.tree = tree;
      this.sku.list = treelist;
    }
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {
  },
  //生命周期 - 更新之后
  updated() {
    //购车数量
    this.cartNum = this.$store.getters['cart/getCartGoodsNum'];
  },
  //生命周期 - 销毁之前
  beforeDestroy() {
  },
  //生命周期 - 销毁完成
  destroyed() {
  },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
};
</script>

<style lang='stylus' scoped></style>