import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';

import router from './router/index'
import store from './store/index'
import constant from './global/constant'
import util from './global/utils'

Vue.config.productionTip = false

Vue.use(iView);

Vue.prototype.constant = constant
Vue.prototype.utils = util

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
