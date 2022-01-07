import Vue from 'vue'
import Vuex from 'vuex'
import { getTest, getClothes} from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothes:[
      
    ]
  },
  mutations: {
    SET_CLOTHES(state, clothes){
      state.clothes = clothes;
    }
  },
  actions: {
    
    //옷장 가져오기
    async GET_CLOTHES(context){
      const response = await getClothes();
      context.commit('SET_CLOTHES', response.data)
    }
  },
  modules: {
  }
})
