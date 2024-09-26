import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productList: [],
    productInfo: {}
  },
  mutations: {
    setProductList(state, products) {
      state.productList = products;
    },
    setProducInfo(state, productInfo) {
      state.productInfo = productInfo;
    }
  },
  actions: {
    fetchProducts({ commit }, products) {
      commit("setProductList", products);
    }
  }
});

export default store;
