import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testData: false
  },
  mutations: {
    toggleTestData(state){
      state.testData = !state.testData

    },
  },
  actions: {
    toggleTestDataAction({commit,params}){
      commit('toggleTestData')
      console.log(params)
    }
  },
  modules: {
  }
})
