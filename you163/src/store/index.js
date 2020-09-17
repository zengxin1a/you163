import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart: {
      namespaced: true,
      state: {
        noneImg: ''
      },
      mutations: {
        replaceImg (state, data) {
          state.noneImg = data
        }
      },
      actions: {
        getImgCartLogo (store) {
          var url = 'luFei/xhr/guide/getAppDownloadInfo.json'
          axios.post(url)
            .then((res) => {
              store.commit('replaceImg', res.data.data[0].picUrl)
              console.log(res)
            })
        }
      },
      modules: {
      }
    },
    classify: {
      namespaced: true,
      state: {
        listAllClassify: []
      },
      mutations: {
        changeClassifyGet (state, data) {
          state.listAllClassify = data
        }
      },
      actions: {
        classifyGetData (store, id) {
          const url = `/luFei/item/cateList.json?__timestamp=1600266898004&categoryId=${id}`
          axios.get(url)
            .then((res) => {
              store.commit('changeClassifyGet', res.data.data)
            })
        }
      },
      modules: {
      }
    }
  }
})
