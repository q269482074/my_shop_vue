const state = {
  cart : JSON.parse(localStorage.getItem('cart')) || [],
};

const mutations = {
  //添加购物车
  addCart(state,goods) {
    let flag = false;
    state.cart.some( item => {
      //如果传入的商品id一样的话就数量相加,否则就是新商品push进购物车数组
      if(item.id == goods.id){
        item.num += goods.num;
        flag = true;
        return true;
      }
    });
    //新商品push进购物车数组
    if(!flag){
      state.cart.push(goods);
    }

    localStorage.setItem('cart',JSON.stringify(state.cart));
  },

  //删除购物车指定商品
  delGoods(state,goods) {
    state.cart.some( (item,i) => {
      if(item.id == goods.id){
        state.cart.splice(i,1);
        return true;
      }
    });
    localStorage.setItem('cart',JSON.stringify(state.cart));
  }
};

const actions = {
};

const getters = {
  //获取购物车所有商品的数量
  getCartGoodsNum(state) {
    let c = 0;
    state.cart.some( item => {
      c += item.num;
    });
    return c;
  },

  //获取购物车商品总价
  getCartGoodsTotal(state) {
    let c = {
      count : 0,
      price : 0,
    };
    state.cart.some( item => {
      c.count += item.num;
      c.price += item.price*item.num*100;
    });
    return c;
  }
};


export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}