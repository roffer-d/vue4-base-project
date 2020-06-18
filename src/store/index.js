import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

import common from './modules/global'
import teststore from "./modules/teststore"

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    common,teststore
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
