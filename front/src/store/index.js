import Vue from 'vue'
import Vuex from 'vuex'
import { getTest, getClothes} from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothes_outer:[],
    clothes_top:[],
    clothes_pants:[],
    clothes_socks:[],
    clothes_shoes:[],
  },
  mutations: {
    SET_CLOTHES(state, clothes){
      //filter 함수로 조건에 맞는 배열 생성 
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
    }
  },
  actions: {
    //옷장 가져오기
    async GET_CLOTHES(context){
      const response = await getClothes();
      console.log(response.data);
      context.commit('SET_CLOTHES', response.data)
    }
  },
  modules: {
  }
})
