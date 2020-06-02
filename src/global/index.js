import constant from "./constant"
import utils from "./utils"
import http from './axios-config'
import socket from './web-socket'
import iView from 'iview'

const config = {
    constant,
    utils,
    http,
    socket
}

export default {
    install(Vue){
        if(this.installed)return true

        Vue.use(iView)
        Vue.config.productionTip = false

        for(let key in config){
            Vue.prototype[key] = config[key]
        }
    }
}