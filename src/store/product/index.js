const state = {
  goodsInfo : [],
};

const mutations = {
  getGoodsInfo(state,payload) {
    state.goodsInfo = payload;
  }
};

const actions = {
};

const getters = {

};


export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}