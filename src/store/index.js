import Vue from 'vue'
import Vuex from 'vuex'
import api from "../services/api"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    data: null,
    page: null
  },
  mutations: {
    SET_DATA(state, data){
      state.data = data
    },
    SET_LOADING_STATE(state, loading){
      state.loading = loading
    },
    SET_PAGE(state, page){
      state.page = page
    }
  },
  actions: {
    async getData(context, payload){
      try {
          context.commit('SET_LOADING_STATE', true)
          context.commit('SET_PAGE', payload.title)
          const res =  await api.getCollection(payload.title)
          context.commit('SET_DATA',res.results)
      } catch (error) {
          console.log(error)
      }
      context.commit('SET_LOADING_STATE', false)
    },
  },
  modules: {
  }
})
