import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex)
Vue.use(VueResource)
const HOST = 'http://www.wenyunjy.com/bookAnswer/'
const store = new Vuex.Store({
  state: {
    pzList: [],
    txzList: [],
    mxzList: [],
    zzList: [],
    cwbbList: [],
    images: [],
    footNav: '记账凭证',
    year: ''
  },
  mutations: {
    setList (state, obj) {
      state[obj.type] = obj.data
    },
    setImages (state, data) {
      state.images = data
    },
    setFootNav (state, nav) {
      state.footNav = nav
    },
    setYear (state, data) {
      state.year = data
    }
  },
  actions: {
    getList ({commit, state}, obj) {
      Vue.http.get(HOST + 'getList' + '/' + obj.type + '/' + state.year, {timeout: 5000}).then(response => {
        if (response.ok) {
          commit('setList', {type: obj.name, data: JSON.parse(response.body.info)})
        }
      }).catch(response => {
        obj.error()
      })
    },
    setYearLocal ({commit, state}, year) {
      commit('setYear', year)
      localStorage.setItem('year', year)
    }
  }
})

export default store
