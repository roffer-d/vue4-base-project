import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import common from './modules/commonStore'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    common
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
