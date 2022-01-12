import Vue from 'vue'
import Vuex from 'vuex'
import { getClothes,recoClothes } from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothes_all:[],
    clothes_outer:[],
    clothes_top:[],
    clothes_pants:[],
    clothes_socks:[],
    clothes_shoes:[],
    reco_set1:[],
    reco_set2:[],
    reco_set3 :[],
    select_cloth : {}
  },
  mutations: {
    SET_CLOTHES(state, clothes){
      //filter 함수로 조건에 맞는 배열 생성 
      //0. 전체
      state.clothes_all = clothes;
      //1.outer
      state.clothes_outer = clothes.filter(item => item.cate === "outer");
      //2.top
      state.clothes_top = clothes.filter(item => item.cate === "top");
      //3.pants
      state.clothes_pants = clothes.filter(item => item.cate === "pants");
      //4.socks
      state.clothes_socks = clothes.filter(item => item.cate === "socks");
      //5.shoes
      state.clothes_shoes = clothes.filter(item => item.cate === "shoes");
    },
    SET_RECO(state,set){
      state.reco_set1 = set.arr;
      state.reco_set2 = set.arr1;
      state.reco_set3 = set.arr2;
    },
    SET_CLOTH(state, cloName){
      state.clothes_all.forEach(i => {
        if(cloName == i.cloName){
          state.select_cloth = i;
        }
      });
    }
  },
  actions: {
    //옷장 가져오기
    async GET_CLOTHES(context){
      const response = await getClothes();
      context.commit('SET_CLOTHES', response.data);
    },
    //옷 추천하기 
    async RECO_CLO(context){
      const response = await recoClothes();
      context.commit('SET_RECO', response.data);
    }
  },
  modules: {
  }
})
