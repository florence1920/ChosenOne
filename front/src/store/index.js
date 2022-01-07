import Vue from 'vue'
import Vuex from 'vuex'
import {getTest} from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async connect() {
      console.log(1);
      const response = await getTest();
      console.log(response);
    }
  },
  modules: {
  }
})
